import { readFile } from "node:fs/promises";

const forbiddenRuntimeDependencies = [
  "raw.githubusercontent.com/MayLabPro/VideoSource/main/lite.json",
  "raw.githubusercontent.com/MayLabPro/VideoSource/main/full.json",
  "raw.githubusercontent.com/MayLabPro/VideoSource/main/adult.json",
  "raw.githubusercontent.com/lonnnnnng/mini-iptv/main/output/result.m3u",
  "raw.githubusercontent.com/lonnnnnng/mini-iptv/main/output/result.txt"
];

const filesToScan = [
  "README.md",
  "config/video-sources.json",
  "config/live-sources.json",
  "scripts/update-resources.js"
];

for (const file of filesToScan) {
  const content = await readFile(file, "utf8");
  for (const forbidden of forbiddenRuntimeDependencies) {
    if (content.includes(forbidden)) {
      throw new Error(`${file} must not depend on upstream generated artifact: ${forbidden}`);
    }
  }
  if (content.includes("dist/podcast/aggregate.xml") || content.includes("播客聚合源")) {
    throw new Error(`${file} must not reference podcast aggregate output`);
  }
}

try {
  await readFile("dist/podcast/aggregate.xml", "utf8");
  throw new Error("dist/podcast/aggregate.xml must not be generated");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const videoConfig = JSON.parse(await readFile("config/video-sources.json", "utf8"));
const liveConfig = JSON.parse(await readFile("config/live-sources.json", "utf8"));

if (!videoConfig.sources || Object.keys(videoConfig.sources).length === 0) {
  throw new Error("config/video-sources.json must contain local sources");
}

for (const [key, source] of Object.entries(videoConfig.sources)) {
  if (!source.name || !source.api) {
    throw new Error(`video source ${key} is missing name or api`);
  }
}

if (!Array.isArray(liveConfig.channelGroups) || liveConfig.channelGroups.length === 0) {
  throw new Error("config/live-sources.json must contain channelGroups");
}

if (!Array.isArray(liveConfig.subscriptions) || liveConfig.subscriptions.length === 0) {
  throw new Error("config/live-sources.json must contain subscriptions");
}

const lite = JSON.parse(await readFile("dist/video/lite.json", "utf8"));
const adult = JSON.parse(await readFile("dist/video/adult.json", "utf8"));
const full = JSON.parse(await readFile("dist/video/full.json", "utf8"));
const expectedFull = { ...lite, ...adult };

if (JSON.stringify(full) !== JSON.stringify(expectedFull)) {
  throw new Error("dist/video/full.json must equal lite.json + adult.json");
}

for (const [key, source] of Object.entries(lite)) {
  if (String(source.name || "").trim().startsWith("🔞")) {
    throw new Error(`lite source ${key} must not be adult`);
  }
}

for (const [key, source] of Object.entries(adult)) {
  if (!String(source.name || "").trim().startsWith("🔞")) {
    throw new Error(`adult source ${key} must be adult`);
  }
}

const liveM3u = await readFile("dist/live/live.m3u", "utf8");
if (!liveM3u.includes("#EXTM3U") || !liveM3u.includes("#EXTINF:")) {
  throw new Error("dist/live/live.m3u must contain M3U entries");
}

console.log("resources verification passed");
