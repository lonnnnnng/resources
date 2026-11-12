import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const rootDir = path.resolve(new URL("..", import.meta.url).pathname);
const distDir = path.join(rootDir, "dist");
const isCheckOnly = process.argv.includes("--check-only");

const settings = {
  timeoutMs: Number(process.env.CHECK_TIMEOUT_MS || 10000),
  liveTimeoutMs: Number(process.env.LIVE_TIMEOUT_MS || 8000),
  concurrency: Number(process.env.CHECK_CONCURRENCY || 16),
  liveConcurrency: Number(process.env.LIVE_CONCURRENCY || 24),
  radioConcurrency: Number(process.env.RADIO_CONCURRENCY || 24),
  maxLiveEntries: Number(process.env.MAX_LIVE_ENTRIES || 0),
  maxRadioEntries: Number(process.env.MAX_RADIO_ENTRIES || 0),
  liveSpeedTest: process.env.LIVE_SPEED_TEST !== "0",
  liveSpeedTimeoutMs: Number(process.env.LIVE_SPEED_TIMEOUT_MS || 5000),
  liveSpeedMaxBytes: Number(process.env.LIVE_SPEED_MAX_BYTES || 1024 * 1024),
  liveSpeedMaxDurationMs: Number(process.env.LIVE_SPEED_MAX_DURATION_MS || 1000),
  videoSpeedTest: process.env.VIDEO_SPEED_TEST !== "0",
  videoSpeedTimeoutMs: Number(process.env.VIDEO_SPEED_TIMEOUT_MS || 6000),
  videoSpeedMaxBytes: Number(process.env.VIDEO_SPEED_MAX_BYTES || 1024 * 1024),
  videoSpeedMaxDurationMs: Number(process.env.VIDEO_SPEED_MAX_DURATION_MS || 1000)
};

const now = new Date();
const generatedAt = now.toISOString();
const podcastFreshAfter = subtractMonths(now, 1);

await ensureDirs();

const [videoResult, liveResult, radioResult, podcastResult] = await Promise.all([
  buildVideoSources(),
  buildLiveSources(),
  buildRadioSources(),
  buildPodcastSources()
]);

await writeReports({ videoResult, liveResult, radioResult, podcastResult });
await writeReadme({ videoResult, liveResult, radioResult, podcastResult });

const summary = {
  generatedAt,
  video: summaryCounts(videoResult),
  live: summaryCounts(liveResult),
  radio: summaryCounts(radioResult),
  podcast: summaryCounts(podcastResult)
};

await writeJson("dist/summary.json", summary);
console.log(JSON.stringify(summary, null, 2));

if (isCheckOnly && [videoResult, liveResult, radioResult, podcastResult].some((result) => result.ok.length === 0)) {
  process.exitCode = 1;
}

async function ensureDirs() {
  for (const dir of [
    "dist",
    "dist/video",
    "dist/live",
    "dist/radio",
    "dist/podcast",
    "dist/reports"
  ]) {
    await mkdir(path.join(rootDir, dir), { recursive: true });
  }
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(rootDir, relativePath), "utf8"));
}

async function writeJson(relativePath, value) {
  await writeFile(path.join(rootDir, relativePath), `${JSON.stringify(value, null, 2)}\n`);
}

async function writeText(relativePath, value) {
  await writeFile(path.join(rootDir, relativePath), value);
}

async function fetchText(url, timeoutMs = settings.timeoutMs, init = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "liuguang-resources/1.0",
        ...(init.headers || {})
      },
      ...init
    });
    const text = await response.text();
    return { response, text };
  } finally {
    clearTimeout(timer);
  }
}

async function fetchTextWithRetry(url, timeoutMs = settings.timeoutMs, init = {}, retries = 2) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fetchText(url, timeoutMs, init);
    } catch (error) {
      lastError = error;
      if (attempt < retries) await sleep(500 * (attempt + 1));
    }
  }
  throw lastError;
}

async function fetchJson(url, timeoutMs = settings.timeoutMs) {
  const { response, text } = await fetchTextWithRetry(url, timeoutMs);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return JSON.parse(text);
}

async function fetchProbe(url, timeoutMs = settings.liveTimeoutMs, init = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "liuguang-resources/1.0",
        ...(init.headers || {})
      },
      ...init
    });

    let sample = "";
    if (response.body) {
      const reader = response.body.getReader();
      const { value } = await reader.read();
      await reader.cancel().catch(() => {});
      if (value) sample = new TextDecoder().decode(value);
    }

    return { response, sample };
  } finally {
    clearTimeout(timer);
  }
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 读取文本响应体，限制最大字节数，避免误拉大文件。
 */
async function fetchTextLimited(url, timeoutMs, maxBytes) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": "liuguang-resources/1.0" }
    });
    if (!response.body) throw new Error("empty body");
    const reader = response.body.getReader();
    const chunks = [];
    let bytes = 0;
    while (bytes < maxBytes) {
      const { value, done } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        bytes += value.byteLength;
      }
    }
    await reader.cancel().catch(() => {});
    return { response, text: new TextDecoder().decode(concatChunks(chunks)) };
  } finally {
    clearTimeout(timer);
  }
}

function concatChunks(chunks) {
  const total = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
  const merged = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return merged;
}

function resolveMediaUrl(baseUrl, ref) {
  try {
    return new URL(ref, baseUrl).href;
  } catch {
    return "";
  }
}

/**
 * 多码率播放列表（master playlist）：选取 BANDWIDTH 最高的一路，测最重的负载。
 * 返回 null 表示当前已是媒体播放列表。
 */
function pickHlsVariant(playlistText, baseUrl) {
  const lines = playlistText.split(/\r?\n/);
  let pendingBandwidth = null;
  let best = null;
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("#EXT-X-STREAM-INF:")) {
      const match = line.match(/BANDWIDTH=(\d+)/i);
      pendingBandwidth = match ? Number(match[1]) : 0;
      continue;
    }
    if (line.startsWith("#")) continue;
    if (pendingBandwidth === null) continue;
    const url = resolveMediaUrl(baseUrl, line);
    if (url && (!best || pendingBandwidth > best.bandwidth)) {
      best = { url, bandwidth: pendingBandwidth };
    }
    pendingBandwidth = null;
  }
  return best?.url || null;
}

/**
 * 媒体播放列表：取第一个分片（含 #EXT-X-MAP 初始化段时优先一起测）。
 */
function pickHlsSegment(playlistText, baseUrl) {
  const lines = playlistText.split(/\r?\n/);
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const url = resolveMediaUrl(baseUrl, line);
    if (url) return url;
  }
  return "";
}

/**
 * 测量 HLS 真实下载带宽：解析列表 → 定位首个分片 → 限时下载并计算 KB/s。
 * 中途被限时中断时，只要已收到足够数据仍按实际速率返回（视为“慢”而非“失败”）。
 */
async function measureHlsSpeed(playlistUrl, options = {}) {
  const timeoutMs = options.timeoutMs ?? settings.liveSpeedTimeoutMs;
  const maxBytes = options.maxBytes ?? settings.liveSpeedMaxBytes;
  const maxDurationMs = options.maxDurationMs ?? settings.liveSpeedMaxDurationMs;

  let currentUrl = playlistUrl;
  let mediaListText = "";
  for (let depth = 0; depth < 3; depth += 1) {
    const { response, text } = await fetchTextLimited(currentUrl, timeoutMs, 256 * 1024);
    if (!response.ok) throw new Error(`playlist HTTP ${response.status}`);
    if (!text.includes("#EXTM3U")) throw new Error("not an HLS playlist");
    const variant = pickHlsVariant(text, currentUrl);
    if (variant && variant !== currentUrl) {
      currentUrl = variant;
      continue;
    }
    mediaListText = text;
    break;
  }
  if (!mediaListText) throw new Error("no media playlist");

  const segmentUrl = pickHlsSegment(mediaListText, currentUrl);
  if (!segmentUrl) throw new Error("no segment listed");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const requestedAt = Date.now();
  let bytes = 0;
  let firstByteAt = 0;
  let ttfbMs = 0;
  let aborted = false;
  try {
    const response = await fetch(segmentUrl, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": "liuguang-resources/1.0" }
    });
    if (!response.ok) throw new Error(`segment HTTP ${response.status}`);
    ttfbMs = Date.now() - requestedAt;
    if (response.body) {
      const reader = response.body.getReader();
      try {
        while (bytes < maxBytes) {
          const { value, done } = await reader.read();
          if (done) break;
          if (value?.byteLength) {
            if (!firstByteAt) firstByteAt = Date.now();
            bytes += value.byteLength;
            if (Date.now() - firstByteAt >= maxDurationMs) break;
          }
        }
      } catch (error) {
        if (!bytes) throw error;
        aborted = true;
      }
      await reader.cancel().catch(() => {});
    }
  } finally {
    clearTimeout(timer);
  }

  // 带宽只统计首字节落地后的纯传输时间，排除连接与服务器首包延迟（TTFB），
  // 否则慢启动的 CDN 会被系统性低估。
  const transferMs = Math.max(1, Date.now() - (firstByteAt || requestedAt));
  if (!bytes) throw new Error("no segment bytes");
  return {
    speedKbps: Math.round(((bytes / transferMs) * 1000) / 1024),
    segmentBytes: bytes,
    segmentMs: transferMs,
    ttfbMs,
    partial: aborted,
    segmentUrl
  };
}

async function limitMap(items, concurrency, mapper) {
  const results = new Array(items.length);
  let index = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (index < items.length) {
      const current = index++;
      results[current] = await mapper(items[current], current);
    }
  });
  await Promise.all(workers);
  return results;
}

function normalizeUrl(url) {
  return String(url || "").trim();
}

function appendQuery(url, query) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${query}`;
}

function summaryCounts(result) {
  const summary = {
    total: result.total,
    ok: result.ok.length,
    failed: result.failed.length
  };
  if (result.skipped?.length) summary.skipped = result.skipped.length;
  return summary;
}

async function buildVideoSources() {
  const config = await readJson("config/video-sources.json");
  const candidates = Object.entries(config.sources || {})
    .filter(([, value]) => value?.api)
    .map(([key, value]) => ({
      key,
      name: value.name || key,
      api: normalizeUrl(value.api),
      detail: value.detail || "",
      comment: value._comment || "",
      adult: isAdultVideoSource(value),
      source: value
    }));

  const checks = await limitMap(candidates, settings.concurrency, (source) => {
    return checkVideoSource(source, config.keyword || "你好");
  });
  const ok = checks.filter((item) => item.ok);
  const failed = checks.filter((item) => !item.ok);
  const lite = {};
  const adult = {};

  for (const item of ok.sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"))) {
    const target = item.adult ? adult : lite;
    target[item.key] = cleanVideoSource(item.source);
  }

  const full = { ...lite, ...adult };
  await writeJson("dist/video/lite.json", lite);
  await writeJson("dist/video/adult.json", adult);
  await writeJson("dist/video/full.json", full);
  await writeJson("dist/video/sources.json", ok.map(stripCheckFields));
  return { total: checks.length, ok, failed };
}

function isAdultVideoSource(source) {
  return String(source.name || "").trim().startsWith("🔞");
}

function cleanVideoSource(source) {
  const cleaned = {};
  for (const [key, value] of Object.entries(source || {})) {
    if (key !== "_comment") cleaned[key] = value;
  }
  return cleaned;
}

async function checkVideoSource(source, keyword) {
  const started = Date.now();
  let searchStatus = "未检测";
  try {
    const listUrl = appendQuery(source.api, "ac=videolist&pg=1");
    const { response, json } = await fetchVideoJson(listUrl, "列表检测");
    if (!Array.isArray(json.list) && !Array.isArray(json.class) && json.page == null) {
      throw createVideoCheckError("响应缺少 list/class/page 字段", {
        stage: "列表检测",
        requestUrl: listUrl,
        status: response.status,
        statusText: response.statusText,
        responseSample: summarizeResponse(json)
      });
    }

    const firstName = Array.isArray(json.list)
      ? json.list.map((item) => item?.vod_name).find(Boolean)
      : "";
    const searchWord = firstName || keyword;
    if (searchWord) {
      const searchUrl = appendQuery(source.api, `ac=videolist&pg=1&wd=${encodeURIComponent(searchWord)}`);
      const search = await fetchVideoJson(searchUrl, "搜索检测", { failOnHttpError: false });
      if (!search.response.ok) {
        searchStatus = formatHttpError(search.response);
      } else {
        searchStatus = Array.isArray(search.json.list) && search.json.list.length > 0 ? "命中" : "无结果";
      }
    }

    const result = {
      ...source,
      ok: true,
      status: response.status,
      elapsedMs: Date.now() - started,
      count: Array.isArray(json.list) ? json.list.length : 0,
      searchStatus
    };

    if (settings.videoSpeedTest) {
      try {
        const speed = await measureVideoSpeed(source, json);
        result.speedKbps = speed.speedKbps;
        result.speedMs = speed.segmentMs;
        result.speedBytes = speed.segmentBytes;
        result.speedVod = speed.vodName;
        result.speedEpisode = speed.episode;
        result.speedUrl = speed.playUrl;
      } catch (error) {
        result.speedKbps = 0;
        result.speedError = error.message;
      }
      result.probeMs = Date.now() - started;
    }

    return result;
  } catch (error) {
    const details = normalizeVideoErrorDetails(error);
    return {
      ...source,
      ok: false,
      elapsedMs: Date.now() - started,
      error: error.message,
      ...details
    };
  }
}

async function fetchVideoJson(url, stage, options = {}) {
  const failOnHttpError = options.failOnHttpError !== false;
  let fetched;
  try {
    fetched = await fetchTextWithRetry(url);
  } catch (error) {
    throw createVideoCheckError(`请求失败: ${formatError(error)}`, {
      stage,
      requestUrl: url,
      cause: formatErrorCause(error)
    });
  }

  const { response, text } = fetched;
  const details = {
    stage,
    requestUrl: url,
    status: response.status,
    statusText: response.statusText,
    responseSample: summarizeResponse(text)
  };

  if (!response.ok) {
    if (failOnHttpError) throw createVideoCheckError(formatHttpError(response), details);
    return { response, json: null };
  }

  try {
    return { response, json: JSON.parse(text) };
  } catch (error) {
    throw createVideoCheckError(`JSON 解析失败: ${formatError(error)}`, details);
  }
}

function createVideoCheckError(message, details) {
  const error = new Error(message);
  error.videoDetails = details;
  return error;
}

function normalizeVideoErrorDetails(error) {
  const details = error.videoDetails || {};
  return {
    stage: details.stage || "",
    requestUrl: details.requestUrl || "",
    status: details.status || "",
    statusText: details.statusText || "",
    responseSample: details.responseSample || "",
    cause: details.cause || ""
  };
}

function formatHttpError(response) {
  return [`HTTP ${response.status}`, response.statusText].filter(Boolean).join(" ");
}

function formatError(error) {
  if (!error) return "unknown error";
  const name = error.name && error.name !== "Error" ? `${error.name}: ` : "";
  return `${name}${error.message || String(error)}`;
}

function formatErrorCause(error) {
  if (!error?.cause) return "";
  const cause = error.cause;
  return [
    cause.code,
    cause.name,
    cause.message
  ].filter(Boolean).join(" | ");
}

function summarizeResponse(value, maxLength = 800) {
  let text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  text = String(text || "")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();
  if (text.length > maxLength) return `${text.slice(0, maxLength)}...`;
  return text;
}

async function buildLiveSources() {
  const config = await readJson("config/live-sources.json");
  const entries = [...liveLocalEntries(config)];
  const sourceFailures = [];

  for (const source of config.subscriptions || []) {
    try {
      const { response, text } = await fetchTextWithRetry(source.url, settings.timeoutMs, {
        headers: source.userAgent ? { "User-Agent": source.userAgent } : {}
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      entries.push(...parseLiveContent(text).map((entry) => ({ ...entry, source: source.url })));
    } catch (error) {
      sourceFailures.push({ source: source.url, url: source.url, error: error.message });
    }
  }

  const matchers = buildLiveMatchers(config);
  const matchedEntries = entries
    .filter((entry) => !isLiveBlacklisted(entry, config.blacklist || []))
    .map((entry) => attachLiveChannel(entry, matchers))
    .filter(Boolean);

  const uniqueEntries = dedupeBy(matchedEntries, (entry) => `${entry.channel}|${entry.url}`);
  const limited = settings.maxLiveEntries > 0 ? uniqueEntries.slice(0, settings.maxLiveEntries) : uniqueEntries;
  const checks = await limitMap(limited, settings.liveConcurrency, checkLiveEntry);
  const limitedByChannel = limitLivePerChannel(
    checks.filter((item) => item.ok),
    config.settings?.urlsLimit || 5
  );
  const ok = limitedByChannel.ok;
  const skipped = limitedByChannel.skipped;
  const failed = checks.filter((item) => !item.ok).concat(sourceFailures.map((item) => ({ ...item, ok: false })));

  await writeText("dist/live/live.m3u", renderM3u(ok, { epgUrl: config.settings?.epgUrl || "" }));
  await writeText("dist/live/live.txt", ok.map((item) => `${item.channel},${item.url}`).join("\n") + "\n");
  return { total: limited.length + sourceFailures.length, ok, failed, skipped };
}

function parseLiveContent(content) {
  const trimmed = content.trim();
  if (!trimmed) return [];
  if (trimmed.includes("#EXTM3U") || trimmed.includes("#EXTINF:")) return parseM3u(trimmed);
  return parseSimpleLiveContent(trimmed);
}

function parseSimpleLiveContent(content) {
  const entries = [];
  let group = "";
  for (const raw of content.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    if (line.includes("#genre#")) {
      group = line.split(",")[0].trim();
      continue;
    }
    const [name, ...urlParts] = line.split(",");
    const url = urlParts.join(",").trim();
    if (name?.trim() && /^https?:\/\//i.test(url)) {
      entries.push({ name: name.trim(), tvgName: name.trim(), group, url });
    }
  }
  return entries;
}

function parseM3u(content) {
  const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const entries = [];
  let current = null;

  for (const line of lines) {
    if (line.startsWith("#EXTINF:")) {
      current = {
        name: parseExtinfName(line),
        logo: parseAttr(line, "tvg-logo"),
        group: parseAttr(line, "group-title"),
        tvgName: parseAttr(line, "tvg-name"),
        rawExtinf: line
      };
    } else if (!line.startsWith("#") && current) {
      const name = current.tvgName || current.name;
      if (name && /^https?:\/\//i.test(line)) {
        entries.push({ ...current, name, url: line });
      }
      current = null;
    }
  }

  return entries;
}

function liveLocalEntries(config) {
  return (config.local || [])
    .filter((entry) => entry.name && entry.url)
    .map((entry) => ({
      name: entry.name,
      tvgName: entry.name,
      group: "",
      url: entry.url,
      whitelist: Boolean(entry.whitelist),
      source: "local"
    }));
}

function buildLiveMatchers(config) {
  const aliasMap = config.aliases || {};
  return (config.channelGroups || []).flatMap((group) => {
    return (group.channels || []).map((channel) => ({
      group: group.name,
      channel,
      patterns: compileLivePatterns([channel, ...(aliasMap[channel] || [])])
    }));
  });
}

function compileLivePatterns(values) {
  return values.map((value) => {
    if (String(value).startsWith("re:")) {
      const rawPattern = value.slice(3);
      const ignoreCase = rawPattern.startsWith("(?i)");
      return { regex: new RegExp(ignoreCase ? rawPattern.slice(4) : rawPattern, ignoreCase ? "i" : "") };
    }
    return { text: normalizeLiveName(value) };
  });
}

function normalizeLiveName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[（）()【】\[\]_\-\s·.]/g, "")
    .replace(/高清|超清|标清|频道|hd|fhd|4k/g, "");
}

function isLiveBlacklisted(entry, blacklist) {
  const value = `${entry.name || ""}\n${entry.url || ""}`.toLowerCase();
  return blacklist.some((keyword) => keyword && value.includes(String(keyword).toLowerCase()));
}

function attachLiveChannel(entry, matchers) {
  const displayName = entry.tvgName || entry.name || "";
  const normalized = normalizeLiveName(displayName);
  const matcher = matchers.find((item) => {
    return item.patterns.some((pattern) => {
      if (pattern.regex) return pattern.regex.test(displayName);
      return normalized === pattern.text;
    });
  });
  if (!matcher) return null;
  return {
    ...entry,
    name: matcher.channel,
    tvgName: matcher.channel,
    channel: matcher.channel,
    group: matcher.group
  };
}

function limitLivePerChannel(entries, urlsLimit) {
  const byChannel = new Map();
  for (const entry of entries) {
    if (!byChannel.has(entry.channel)) byChannel.set(entry.channel, []);
    byChannel.get(entry.channel).push(entry);
  }

  // 输出时按频道内实测速度降序排列：播放器优先取用列表头部时可直接选中最佳线路
  const ordered = [];
  const skipped = [];
  for (const list of byChannel.values()) {
    const ranked = [...list].sort(compareLiveQuality);
    ranked.forEach((entry, index) => {
      if (index < urlsLimit) ordered.push(entry);
      else {
        const speedNote = entry.speedKbps ? `，实测 ${formatKbps(entry.speedKbps)}` : "";
        skipped.push({ ...entry, error: `超过每频道 ${urlsLimit} 条上限${speedNote}` });
      }
    });
  }
  return { ok: ordered, skipped };
}

function formatKbps(kbps) {
  if (!kbps) return "未测速";
  return kbps >= 1024 ? `${(kbps / 1024).toFixed(1)} MB/s` : `${kbps} KB/s`;
}

/**
 * 从苹果CMS条目的 vod_play_url 中提取播放地址。
 * 格式为「线路1$$$线路2」，每条线路内为「第01集$url#第02集$url」。
 * 多线路时优先选含 .m3u8 的线路（部分源第一组是网页播放页，第二组才是直链）。
 */
function extractVideoPlayUrl(item) {
  const raw = String(item?.vod_play_url || "");
  if (!raw) return null;
  const groups = raw.split("$$$");
  const fromList = String(item?.vod_play_from || "").split("$$$");
  let fallback = null;

  for (let g = 0; g < groups.length; g += 1) {
    const episodes = groups[g].split("#").filter(Boolean);
    for (const episode of episodes) {
      const [label, ...rest] = episode.split("$");
      const url = (rest.length ? rest.join("$") : label).trim();
      if (!/^https?:\/\//i.test(url)) continue;
      const candidate = { url, episode: rest.length ? label : "", from: fromList[g] || "" };
      if (url.toLowerCase().includes(".m3u8")) return candidate;
      fallback ||= candidate;
      break;
    }
  }
  return fallback;
}

/**
 * 测一个片库源的真实播放带宽：取列表首条有 m3u8 的内容，
 * 必要时回落到详情接口，再复用 measureHlsSpeed。
 */
async function measureVideoSpeed(source, listJson) {
  const items = Array.isArray(listJson?.list) ? listJson.list.filter(Boolean).slice(0, 5) : [];
  const candidates = [];

  for (const item of items) {
    const candidate = extractVideoPlayUrl(item);
    if (candidate?.url?.toLowerCase().includes(".m3u8")) candidates.push({ ...candidate, item });
  }

  if (!candidates.length && items[0]?.vod_id != null) {
    const detailUrl = appendQuery(source.api, `ac=detail&ids=${encodeURIComponent(items[0].vod_id)}`);
    const detail = await fetchVideoJson(detailUrl, "详情测速", { failOnHttpError: false });
    const item = Array.isArray(detail.json?.list) ? detail.json.list.find(Boolean) : null;
    const candidate = extractVideoPlayUrl(item);
    if (candidate?.url?.toLowerCase().includes(".m3u8")) candidates.push({ ...candidate, item });
  }

  if (!candidates.length) throw new Error("未找到 m3u8 播放地址");

  // 首条内容的分片可能已过期（404），逐条回退到下一个候选
  const errors = [];
  for (const pick of candidates.slice(0, 3)) {
    try {
      const speed = await measureHlsSpeed(pick.url, {
        timeoutMs: settings.videoSpeedTimeoutMs,
        maxBytes: settings.videoSpeedMaxBytes,
        maxDurationMs: settings.videoSpeedMaxDurationMs
      });
      return { ...speed, playUrl: pick.url, episode: pick.episode, vodName: pick.item?.vod_name || "" };
    } catch (error) {
      errors.push(error.message);
    }
  }

  throw new Error([...new Set(errors)].join(" / "));
}

function parseAttr(line, attr) {
  return line.match(new RegExp(`${attr}="([^"]*)"`, "i"))?.[1] || "";
}

function parseExtinfName(line) {
  return line.includes(",") ? line.slice(line.lastIndexOf(",") + 1).trim() : "";
}

async function checkLiveEntry(entry) {
  const started = Date.now();
  try {
    const { response, sample } = await fetchProbe(entry.url, settings.liveTimeoutMs);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (entry.url.toLowerCase().includes(".m3u8") && !sample.includes("#EXTM3U")) {
      throw new Error("not an HLS playlist");
    }
    const result = {
      ...entry,
      ok: true,
      status: response.status,
      elapsedMs: Date.now() - started
    };
    if (settings.liveSpeedTest && (sample.includes("#EXTM3U") || entry.url.toLowerCase().includes(".m3u8"))) {
      try {
        const speed = await measureHlsSpeed(entry.url);
        result.speedKbps = speed.speedKbps;
        result.segmentBytes = speed.segmentBytes;
        result.segmentMs = speed.segmentMs;
        result.speedPartial = speed.partial;
      } catch (error) {
        result.speedKbps = 0;
        result.speedError = error.message;
      }
      result.probeMs = Date.now() - started;
    }
    return result;
  } catch (error) {
    return {
      ...entry,
      ok: false,
      elapsedMs: Date.now() - started,
      error: error.message
    };
  }
}

/**
 * 按实测下载速度降序挑选每频道保留条目：
 * 已测速的排在未测速/测速失败之前，速度相同则以探测延迟升序。
 */
function compareLiveQuality(a, b) {
  const speedA = a.speedKbps || 0;
  const speedB = b.speedKbps || 0;
  if (speedA !== speedB) return speedB - speedA;
  const latencyA = a.segmentMs ?? a.elapsedMs ?? 0;
  const latencyB = b.segmentMs ?? b.elapsedMs ?? 0;
  return latencyA - latencyB;
}

function renderM3u(entries, options = {}) {
  const header = options.epgUrl ? `#EXTM3U x-tvg-url="${options.epgUrl}"` : "#EXTM3U";
  const body = entries.map((entry) => {
    const name = entry.channel || entry.name;
    const attrs = [
      entry.tvgName || name ? `tvg-name="${escapeM3uAttr(entry.tvgName || name)}"` : "",
      entry.logo ? `tvg-logo="${escapeM3uAttr(entry.logo)}"` : "",
      entry.group ? `group-title="${escapeM3uAttr(entry.group)}"` : ""
    ].filter(Boolean).join(" ");
    return `#EXTINF:-1 ${attrs},${name}\n${entry.url}`;
  });
  return `${header}\n${body.join("\n")}\n`;
}

function escapeM3uAttr(value) {
  return String(value || "").replaceAll('"', "'");
}

async function buildRadioSources() {
  const config = await readJson("config/radio-sources.json");
  const stations = [];
  const sourceFailures = [];

  for (const source of config.sources || []) {
    try {
      const { response, text } = await fetchTextWithRetry(source.url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const parsed = source.format === "m3u" ? parseM3u(text).map(m3uToRadio) : parseRadioJson(JSON.parse(text));
      stations.push(...parsed.map((station) => ({ ...station, source: source.name })));
    } catch (error) {
      sourceFailures.push({ source: source.name, url: source.url, error: error.message, ok: false });
    }
  }

  stations.push(...(config.direct || []).map((station) => ({ ...station, source: "direct" })));

  const uniqueStations = dedupeBy(stations, (station) => `${station.name}|${station.url}`);
  const limited = settings.maxRadioEntries > 0 ? uniqueStations.slice(0, settings.maxRadioEntries) : uniqueStations;
  const checks = await limitMap(limited, settings.radioConcurrency, checkRadioStation);
  const ok = checks.filter((item) => item.ok).map(stripCheckFields);
  const failed = checks.filter((item) => !item.ok).concat(sourceFailures);

  await writeJson("dist/radio/radio.json", ok);
  await writeText("dist/radio/radio.txt", ok.map((item) => `${item.name},${item.url}`).join("\n") + "\n");
  return { total: limited.length + sourceFailures.length, ok: checks.filter((item) => item.ok), failed };
}

function parseRadioJson(payload) {
  const list = Array.isArray(payload) ? payload : payload?.stations || payload?.list || [];
  return list.map((item) => ({
    name: item.name || item.title || item.stationName || "",
    url: item.url_resolved || item.url || item.stream || item.streamUrl || item.playUrl || "",
    favicon: item.favicon || item.logo || item.tvg_logo || "",
    tags: item.tags || item.group || item.category || item.genre || item.language || "",
    country: item.countrycode || item.country || "",
    codec: item.codec || item.format || "",
    bitrate: Number(item.bitrate || 0)
  })).filter((item) => item.name && /^https?:\/\//i.test(item.url));
}

function m3uToRadio(entry) {
  return {
    name: entry.name,
    url: entry.url,
    favicon: entry.logo,
    tags: entry.group,
    country: "",
    codec: inferCodec(entry.url),
    bitrate: 0
  };
}

async function checkRadioStation(station) {
  const started = Date.now();
  try {
    const { response, sample } = await fetchProbe(station.url, settings.liveTimeoutMs, {
      headers: /\.(mp3|aac|ogg|opus|flac|m4a)(\?|$)/i.test(station.url) ? { Range: "bytes=0-2047" } : {}
    });
    if (!response.ok && response.status !== 206) throw new Error(`HTTP ${response.status}`);
    if (station.url.toLowerCase().includes(".m3u8") && !sample.includes("#EXTM3U")) {
      throw new Error("not an HLS playlist");
    }
    return {
      ...station,
      ok: true,
      status: response.status,
      elapsedMs: Date.now() - started,
      codec: station.codec || inferCodec(station.url)
    };
  } catch (error) {
    return {
      ...station,
      ok: false,
      elapsedMs: Date.now() - started,
      error: error.message
    };
  }
}

function inferCodec(url) {
  const lower = url.toLowerCase();
  if (lower.includes(".m3u8")) return "HLS";
  if (lower.includes(".mp3")) return "MP3";
  if (lower.includes(".aac")) return "AAC";
  if (lower.includes(".ogg")) return "OGG";
  if (lower.includes(".opus")) return "OPUS";
  if (lower.includes(".flac")) return "FLAC";
  if (lower.includes(".m4a")) return "M4A";
  return "AUDIO";
}

async function buildPodcastSources() {
  const config = await readJson("config/podcast-sources.json");
  const checks = await limitMap(config.feeds || [], settings.concurrency, checkPodcastFeed);
  const ok = checks.filter((item) => item.ok);
  const failed = checks.filter((item) => !item.ok);

  await writeText("dist/podcast/feeds.txt", ok.map((item) => item.url).join("\n") + "\n");
  await writeJson("dist/podcast/feeds.json", ok.map(stripCheckFields));
  return { total: checks.length, ok, failed };
}

async function checkPodcastFeed(feed) {
  const started = Date.now();
  try {
    const { response, text } = await fetchTextWithRetry(feed.url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (!/<(rss|feed)\b/i.test(text)) throw new Error("not RSS/Atom XML");
    if (!hasAudioItem(text)) throw new Error("no audio item");
    const latestAudioUpdate = extractLatestAudioUpdate(text);
    if (!latestAudioUpdate) throw new Error("no audio item update date");
    if (latestAudioUpdate < podcastFreshAfter) {
      throw new Error(`not updated in last month, latest audio update ${latestAudioUpdate.toISOString()}`);
    }
    const title = extractXmlTitle(text) || feed.title;
    const itemCount = (text.match(/<item\b|<entry\b/gi) || []).length;
    return {
      ...feed,
      title,
      ok: true,
      status: response.status,
      elapsedMs: Date.now() - started,
      itemCount,
      latestAudioUpdate: latestAudioUpdate.toISOString()
    };
  } catch (error) {
    return {
      ...feed,
      ok: false,
      elapsedMs: Date.now() - started,
      error: error.message
    };
  }
}

function hasAudioItem(xml) {
  return /<enclosure\b[^>]+url=/i.test(xml) ||
    /<media:content\b[^>]+url=/i.test(xml) ||
    /<link\b[^>]+type=["']audio\//i.test(xml);
}

function extractLatestAudioUpdate(xml) {
  const items = Array.from(xml.matchAll(/<(item|entry)\b[\s\S]*?<\/\1>/gi), (match) => match[0]);
  const audioItems = items.filter(hasAudioItem);
  const dates = audioItems
    .flatMap(extractItemDates)
    .filter((date) => date && !Number.isNaN(date.getTime()));
  if (!dates.length) return null;
  return new Date(Math.max(...dates.map((date) => date.getTime())));
}

function extractItemDates(itemXml) {
  return [
    ...extractTagValues(itemXml, "pubDate"),
    ...extractTagValues(itemXml, "updated"),
    ...extractTagValues(itemXml, "published"),
    ...extractTagValues(itemXml, "dc:date")
  ].map((value) => new Date(decodeXml(value).trim()));
}

function extractTagValues(xml, tagName) {
  const escapedTagName = tagName.replaceAll(":", "\\:");
  const pattern = new RegExp(`<${escapedTagName}\\b[^>]*>([\\s\\S]*?)<\\/${escapedTagName}>`, "gi");
  return Array.from(xml.matchAll(pattern), (match) => match[1].replace(/^<!\[CDATA\[|\]\]>$/g, ""));
}

function extractXmlTitle(xml) {
  return decodeXml(
    xml.match(/<title><!\[CDATA\[([^\]]+)/i)?.[1] ||
    xml.match(/<title>([^<]+)/i)?.[1] ||
    ""
  ).trim();
}

function decodeXml(value) {
  return String(value || "")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function subtractMonths(date, months) {
  const result = new Date(date);
  result.setMonth(result.getMonth() - months);
  return result;
}

function dedupeBy(items, keyFn) {
  const seen = new Set();
  const result = [];
  for (const item of items) {
    const key = keyFn(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

function stripCheckFields(item) {
  const {
    ok,
    status,
    elapsedMs,
    error,
    count,
    itemCount,
    latestAudioUpdate,
    rawExtinf,
    upstream,
    source,
    speedMs,
    speedBytes,
    speedVod,
    speedEpisode,
    speedUrl,
    speedError,
    probeMs,
    ...rest
  } = item;
  return rest;
}

async function writeReports(results) {
  await writeText("dist/reports/video.md", renderVideoReport(results.videoResult));
  await writeText("dist/reports/live.md", renderReport("电视直播源", results.liveResult, liveReportNotes(results.liveResult)));
  await writeText("dist/reports/radio.md", renderReport("电台源", results.radioResult));
  await writeText("dist/reports/podcast.md", renderReport("播客源", results.podcastResult, [
    "活跃规则: 仅保留最近 1 个月内有音频条目更新的 RSS/Atom 源。"
  ]));
}

function liveReportNotes(result) {
  if (!settings.liveSpeedTest) return ["测速: 已关闭 (LIVE_SPEED_TEST=0)"];
  const measured = result.ok.filter((item) => item.speedKbps > 0);
  if (!measured.length) return ["测速: 已开启，但本次无可用测速结果"];
  const speeds = measured.map((item) => item.speedKbps).sort((a, b) => a - b);
  const median = speeds[Math.floor(speeds.length / 2)];
  const fastest = speeds[speeds.length - 1];
  return [
    "测速: 已开启，按实测分片下载速度降序择优（每频道取最快 N 条）",
    `已测速: ${measured.length}/${result.ok.length} 可用条目`,
    `速度中位数: ${formatKbps(median)}，最快: ${formatKbps(fastest)}`
  ];
}

function renderReport(title, result, notes = []) {
  const lines = [
    `# ${title}检测报告`,
    "",
    `生成时间: ${generatedAt}`,
    "",
    ...notes.flatMap((note) => [note, ""]),
    `总数: ${result.total}`,
    `可用: ${result.ok.length}`,
    `失败: ${result.failed.length}`,
    ...(result.skipped?.length ? [`跳过: ${result.skipped.length}`] : []),
    "",
    "## 失败项",
    "",
    ...renderReportItems(result.failed, "错误")
  ];

  if (result.skipped?.length) {
    lines.push("");
    lines.push("## 跳过项");
    lines.push("");
    lines.push(...renderReportItems(result.skipped, "原因", "skipped"));
  }

  return `${lines.join("\n")}\n`;
}

function renderVideoReport(result) {
  const liteCount = result.ok.filter((item) => !item.adult).length;
  const adultCount = result.ok.filter((item) => item.adult).length;
  const measured = result.ok
    .filter((item) => item.speedKbps > 0)
    .sort((a, b) => b.speedKbps - a.speedKbps);
  const unmeasured = result.ok.filter((item) => !(item.speedKbps > 0));
  const lines = [
    "# 片库视频源检测报告",
    "",
    `生成时间: ${generatedAt}`,
    "",
    `总数: ${result.total}`,
    `可用: ${result.ok.length}`,
    `失败: ${result.failed.length}`,
    `普通源: ${liteCount}`,
    `成人源: ${adultCount}`,
    "",
    ...renderVideoSpeedSection(result, measured, unmeasured),
    "## 失败项",
    "",
    ...renderVideoReportItems(result.failed)
  ];

  return `${lines.join("\n")}\n`;
}

function renderVideoSpeedSection(result, measured, unmeasured) {
  if (!settings.videoSpeedTest) return ["测速: 已关闭 (VIDEO_SPEED_TEST=0)", ""];
  if (!result.ok.length) return [];

  const lines = [
    "## 测速",
    "",
    "采样规则: 取该源列表首条带 m3u8 直链的内容（多线路时优先选 m3u8 线路），",
    "解析多码率列表后取码率最高一路，下载首个视频分片实测带宽。",
    "",
    `已测速: ${measured.length}/${result.ok.length}`
  ];

  if (measured.length) {
    const speeds = [...measured.map((item) => item.speedKbps)].sort((a, b) => a - b);
    lines.push(
      `速度中位数: ${formatKbps(speeds[Math.floor(speeds.length / 2)])}`,
      `最快: ${formatKbps(speeds[speeds.length - 1])}`,
      `最慢: ${formatKbps(speeds[0])}`
    );
  }

  lines.push("");
  if (!measured.length) {
    lines.push("- 无");
  } else {
    lines.push(
      "| # | 源 | 类型 | 速度 | 分片耗时 | 采样内容 | 采样主机 |",
      "| ---: | --- | --- | ---: | ---: | --- | --- |",
      ...measured.map((item, index) => {
        const host = safeHost(item.speedUrl);
        // 成人源的采样标题不落盘：公开仓库不公开具体片名
        const sample = item.adult
          ? "（已隐藏）"
          : [item.speedVod, item.speedEpisode].filter(Boolean).join(" · ") || "-";
        return `| ${index + 1} | ${escapeTableCell(item.name)} | ${item.adult ? "成人" : "普通"} | ${formatKbps(item.speedKbps)} | ${item.speedMs ?? "-"}ms | ${escapeTableCell(sample)} | ${escapeTableCell(host)} |`;
      })
    );
  }

  lines.push("");
  if (unmeasured.length) {
    lines.push(`### 未测出 (${unmeasured.length})`, "");
    for (const item of unmeasured) {
      const reason = item.speedError || "未尝试测速";
      lines.push(`- ${cleanMarkdownLine(item.name)} — ${cleanMarkdownLine(reason)}`);
    }
    lines.push("");
  }

  return lines;
}

function safeHost(url) {
  try {
    return new URL(url).host;
  } catch {
    return "-";
  }
}

function escapeTableCell(value) {
  return cleanMarkdownLine(value).replaceAll("|", "\\|") || "-";
}

function renderVideoReportItems(items) {
  if (!items.length) return ["- 无"];
  return items.flatMap((item, index) => {
    const name = cleanMarkdownLine(item.name || item.key || "-");
    const lines = [
      `${index + 1}. ${name}`,
      "   地址:",
      "   ```text",
      `   ${cleanCodeBlockText(item.api || item.url || "-")}`,
      "   ```",
      `   错误: ${cleanMarkdownLine(item.error || "unknown")}`
    ];

    if (item.stage) lines.push(`   阶段: ${cleanMarkdownLine(item.stage)}`);
    if (item.status) {
      lines.push(`   HTTP: ${cleanMarkdownLine([item.status, item.statusText].filter(Boolean).join(" "))}`);
    }
    if (item.requestUrl && item.requestUrl !== (item.api || item.url)) {
      lines.push(
        "   检测地址:",
        "   ```text",
        `   ${cleanCodeBlockText(item.requestUrl)}`,
        "   ```"
      );
    }
    if (item.cause) lines.push(`   原因: ${cleanMarkdownLine(item.cause)}`);
    if (item.responseSample) {
      lines.push(
        "   响应片段:",
        "   ```text",
        ...cleanCodeBlockText(item.responseSample).split("\n")
          .filter((line) => line.trim())
          .map((line) => `   ${line}`),
        "   ```"
      );
    }

    lines.push("");
    return lines;
  }).slice(0, -1);
}

function renderReportItems(items, reasonLabel, fallbackReason = "unknown") {
  if (!items.length) return ["- 无"];
  return items.flatMap((item, index) => {
    const name = cleanMarkdownLine(item.name || item.title || item.source || item.upstream || item.key || "-");
    const url = cleanCodeBlockText(item.url || item.api || "-");
    const reason = cleanMarkdownLine(item.error || fallbackReason);
    return [
      `${index + 1}. ${name}`,
      "   地址:",
      "   ```text",
      `   ${url}`,
      "   ```",
      `   ${reasonLabel}: ${reason}`,
      ""
    ];
  }).slice(0, -1);
}

function cleanMarkdownLine(value) {
  return String(value || "").replaceAll("\n", " ").trim();
}

function cleanCodeBlockText(value) {
  return String(value || "").replaceAll("```", "'''").trim();
}

function renderReadmeVideoSpeed(result) {
  if (!settings.videoSpeedTest) return ["测速已关闭（VIDEO_SPEED_TEST=0）。"];

  const liteOk = result.ok.filter((item) => !item.adult);
  const measured = liteOk
    .filter((item) => item.speedKbps > 0)
    .sort((a, b) => b.speedKbps - a.speedKbps);

  if (!liteOk.length) return ["本次没有可用的普通源。"];
  if (!measured.length) return ["本次未取得普通源测速结果。"];

  const speeds = measured.map((item) => item.speedKbps).sort((a, b) => a - b);
  return [
    `${measured.length}/${liteOk.length} 个普通源测出带宽；中位数 ${formatKbps(speeds[Math.floor(speeds.length / 2)])}，` +
      `最快 ${formatKbps(speeds[speeds.length - 1])}，最慢 ${formatKbps(speeds[0])}。`,
    "",
    "| # | 源 | 速度 | 分片耗时 | 采样内容 |",
    "| ---: | --- | ---: | ---: | --- |",
    ...measured.map((item, index) => {
      const sample = [item.speedVod, item.speedEpisode].filter(Boolean).join(" · ") || "-";
      return `| ${index + 1} | ${escapeTableCell(item.name)} | ${formatKbps(item.speedKbps)} | ${item.speedMs ?? "-"}ms | ${escapeTableCell(sample)} |`;
    })
  ];
}

async function writeReadme(results) {
  const directBase = "https://raw.githubusercontent.com/lonnnnnng/resources/main/dist";
  const proxyBase = "https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/resources/main/dist";
  const pageBase = "https://github.com/lonnnnnng/resources/blob/main/dist";
  const readme = `# resources

流光媒体源集合，每天由 GitHub Actions 检测并生成可用订阅。

生成时间: ${generatedAt}

## 可直接使用的源

以下地址为主选加速站点（gh-proxy.com），适用于无法直接访问 GitHub 的网络环境；每个源同时附 GitHub 直连备用地址。

1. 片库视频源 lite
   主选地址（加速站点）:
   \`\`\`text
   ${proxyBase}/video/lite.json
   \`\`\`
   备用地址（GitHub 直连）:
   \`\`\`text
   ${directBase}/video/lite.json
   \`\`\`
   说明: 检测通过的普通片库视频源。
2. 片库视频源 adult
   主选地址（加速站点）:
   \`\`\`text
   ${proxyBase}/video/adult.json
   \`\`\`
   备用地址（GitHub 直连）:
   \`\`\`text
   ${directBase}/video/adult.json
   \`\`\`
   说明: 检测通过的成人片库视频源。
3. 片库视频源 full
   主选地址（加速站点）:
   \`\`\`text
   ${proxyBase}/video/full.json
   \`\`\`
   备用地址（GitHub 直连）:
   \`\`\`text
   ${directBase}/video/full.json
   \`\`\`
   说明: \`lite.json\` + \`adult.json\` 汇总。
4. 电视直播源
   主选地址（加速站点）:
   \`\`\`text
   ${proxyBase}/live/live.m3u
   \`\`\`
   备用地址（GitHub 直连）:
   \`\`\`text
   ${directBase}/live/live.m3u
   \`\`\`
   说明: 标准 M3U，由本仓库频道模板、订阅入口和过滤规则生成。
5. 电台源
   主选地址（加速站点）:
   \`\`\`text
   ${proxyBase}/radio/radio.json
   \`\`\`
   备用地址（GitHub 直连）:
   \`\`\`text
   ${directBase}/radio/radio.json
   \`\`\`
   说明: JSON 电台列表，符合流光电台源字段兼容规则。
6. 播客源列表
   主选地址（加速站点）:
   \`\`\`text
   ${proxyBase}/podcast/feeds.txt
   \`\`\`
   备用地址（GitHub 直连）:
   \`\`\`text
   ${directBase}/podcast/feeds.txt
   \`\`\`
   说明: 每行一个通过检测且最近 1 个月内有音频条目更新的 RSS/Atom 订阅地址。

## 检测结果

| 类型 | 总数 | 可用 | 失败 |
| --- | ---: | ---: | ---: |
| 片库视频源 | ${results.videoResult.total} | ${results.videoResult.ok.length} | ${results.videoResult.failed.length} |
| 电视直播源 | ${results.liveResult.total} | ${results.liveResult.ok.length}${results.liveResult.skipped?.length ? `，跳过 ${results.liveResult.skipped.length}` : ""} | ${results.liveResult.failed.length} |
| 电台源 | ${results.radioResult.total} | ${results.radioResult.ok.length} | ${results.radioResult.failed.length} |
| 播客源 | ${results.podcastResult.total} | ${results.podcastResult.ok.length} | ${results.podcastResult.failed.length} |

## 报告

- [片库视频源报告](${pageBase}/reports/video.md)
- [电视直播源报告](${pageBase}/reports/live.md)
- [电台源报告](${pageBase}/reports/radio.md)
- [播客源报告](${pageBase}/reports/podcast.md)

## 普通影视源测速

采样方式: 取每个源列表里首条带 m3u8 直链的内容，解析多码率列表后取码率最高一路，
下载首个视频分片实测带宽（与报告同一套数据，仅列出普通源；成人源只在报告里出现）。

${renderReadmeVideoSpeed(results.videoResult).join("\n")}

## 本地运行

\`\`\`bash
npm run update
\`\`\`

## 配置说明

- \`config/video-sources.json\` 持有本仓库自己的视频 API 候选清单，生成 \`lite.json\`、\`adult.json\`、\`full.json\`。
- \`config/live-sources.json\` 持有本仓库自己的频道模板、订阅入口、别名、黑名单和本地源规则，生成 \`live.m3u\`。
- 每日流水线不依赖其它仓库已经生成好的 \`lite.json\`、\`full.json\`、\`adult.json\` 或 \`result.m3u\` 成品文件。

\`\`\`bash
npm run verify
\`\`\`

可通过环境变量调整检测速度和规模：

\`\`\`bash
CHECK_CONCURRENCY=16 LIVE_CONCURRENCY=24 RADIO_CONCURRENCY=24 npm run update
MAX_LIVE_ENTRIES=50 MAX_RADIO_ENTRIES=50 npm run update
\`\`\`

直播源默认开启实测测速：解析 HLS 列表、定位首个分片并限时下载，算出真实带宽（KB/s），
再按速度降序为每个频道择优保留（\`settings.urlsLimit\`，默认 5 条）。可用以下变量调整：

\`\`\`bash
LIVE_SPEED_TEST=0 npm run update              # 关闭测速，退回纯连通性检测
LIVE_SPEED_TIMEOUT_MS=5000 npm run update     # 单条测速超时
LIVE_SPEED_MAX_BYTES=1048576 npm run update   # 单次最多下载字节数
LIVE_SPEED_MAX_DURATION_MS=1000 npm run update # 单次测速最长耗时
\`\`\`

片库视频源也会测速，结果写进 [片库视频源报告](${pageBase}/reports/video.md)：
取每个源列表里首条带 m3u8 直链的内容（多线路时优先 m3u8 线路），解析多码率列表后
取码率最高一路，下载首个分片实测带宽。测速只影响报告，不影响 \`lite.json\` 等成品。

\`\`\`bash
VIDEO_SPEED_TEST=0 npm run update              # 关闭片库测速
VIDEO_SPEED_TIMEOUT_MS=6000 npm run update     # 单条测速超时
VIDEO_SPEED_MAX_BYTES=1048576 npm run update   # 单次最多下载字节数
VIDEO_SPEED_MAX_DURATION_MS=1000 npm run update # 单次测速最长耗时
\`\`\`
`;
  await writeText("README.md", readme);
}
