# resources

流光媒体源集合，每天由 GitHub Actions 检测并生成可用订阅。

生成时间: 2026-11-27T02:09:44.842Z

## 可直接使用的源

以下地址为主选加速站点（gh-proxy.com），适用于无法直接访问 GitHub 的网络环境；每个源同时附 GitHub 直连备用地址。

1. 片库视频源 lite
   主选地址（加速站点）:
   ```text
   https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/video/lite.json
   ```
   备用地址（GitHub 直连）:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/video/lite.json
   ```
   说明: 检测通过的普通片库视频源。
2. 片库视频源 adult
   主选地址（加速站点）:
   ```text
   https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/video/adult.json
   ```
   备用地址（GitHub 直连）:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/video/adult.json
   ```
   说明: 检测通过的成人片库视频源。
3. 片库视频源 full
   主选地址（加速站点）:
   ```text
   https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/video/full.json
   ```
   备用地址（GitHub 直连）:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/video/full.json
   ```
   说明: `lite.json` + `adult.json` 汇总。
4. 电视直播源
   主选地址（加速站点）:
   ```text
   https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/live/live.m3u
   ```
   备用地址（GitHub 直连）:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/live/live.m3u
   ```
   说明: 标准 M3U，由本仓库频道模板、订阅入口和过滤规则生成。
5. 电台源
   主选地址（加速站点）:
   ```text
   https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/radio/radio.json
   ```
   备用地址（GitHub 直连）:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/radio/radio.json
   ```
   说明: JSON 电台列表，符合流光电台源字段兼容规则。
6. 播客源列表
   主选地址（加速站点）:
   ```text
   https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/podcast/feeds.txt
   ```
   备用地址（GitHub 直连）:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/podcast/feeds.txt
   ```
   说明: 每行一个通过检测且最近 1 个月内有音频条目更新的 RSS/Atom 订阅地址。

## 检测结果

| 类型 | 总数 | 可用 | 失败 |
| --- | ---: | ---: | ---: |
| 片库视频源 | 53 | 51 | 2 |
| 电视直播源 | 417 | 226，跳过 124 | 67 |
| 电台源 | 2161 | 1424 | 737 |
| 播客源 | 109 | 65 | 44 |

## 报告

- [片库视频源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/video.md)
- [电视直播源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/live.md)
- [电台源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/radio.md)
- [播客源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/podcast.md)

## 普通影视源测速

采样方式: 取每个源列表里首条带 m3u8 直链的内容，解析多码率列表后取码率最高一路，
下载首个视频分片实测带宽（与报告同一套数据，仅列出普通源；成人源只在报告里出现）。

15/27 个普通源测出带宽；中位数 1.6 MB/s，最快 2.8 MB/s，最慢 379 KB/s。

| # | 源 | 速度 | 分片耗时 | 采样内容 |
| ---: | --- | ---: | ---: | --- |
| 1 | 新浪资源 | 2.8 MB/s | 368ms | 穹顶之上 · 第01集 |
| 2 | 豪华资源 | 2.6 MB/s | 302ms | 冬季时光 · 第1集 |
| 3 | 速播资源 | 2.3 MB/s | 346ms | 冬季时光 · 第1集 |
| 4 | 光速资源 | 2.3 MB/s | 340ms | 傲风 · 第01集 |
| 5 | 红牛资源 | 2.3 MB/s | 340ms | 傲风 · 第01集 |
| 6 | 金鹰点播 | 2.1 MB/s | 365ms | 混在末日，独自成仙 · 第01集 |
| 7 | 如意资源 | 1.9 MB/s | 374ms | 沧元图3 · 第01集 |
| 8 | 虎牙资源 | 1.6 MB/s | 341ms | 愚者之夜 · 第1集 |
| 9 | 魔都动漫 | 1.5 MB/s | 312ms | 步步惊心(泰国版) · 第01集 |
| 10 | 樱花资源 | 911 KB/s | 252ms | 值得2026 · 第01集 |
| 11 | 猫眼资源 | 667 KB/s | 189ms | 多喜一家人 · 第01集 |
| 12 | iKun资源 | 600 KB/s | 93ms | 冬季 · 第01集 |
| 13 | 360资源 | 540 KB/s | 443ms | 墨笺逢春       漫剧 · 合全集 |
| 14 | 魔都资源 | 490 KB/s | 111ms | 冬季 · 第01集 |
| 15 | 爱奇艺 | 379 KB/s | 1013ms | 我和妈妈的长征 · 第01集 |

## 本地运行

```bash
npm run update
```

## 配置说明

- `config/video-sources.json` 持有本仓库自己的视频 API 候选清单，生成 `lite.json`、`adult.json`、`full.json`。
- `config/live-sources.json` 持有本仓库自己的频道模板、订阅入口、别名、黑名单和本地源规则，生成 `live.m3u`。
- 每日流水线不依赖其它仓库已经生成好的 `lite.json`、`full.json`、`adult.json` 或 `result.m3u` 成品文件。

```bash
npm run verify
```

可通过环境变量调整检测速度和规模：

```bash
CHECK_CONCURRENCY=16 LIVE_CONCURRENCY=24 RADIO_CONCURRENCY=24 npm run update
MAX_LIVE_ENTRIES=50 MAX_RADIO_ENTRIES=50 npm run update
```

直播源默认开启实测测速：解析 HLS 列表、定位首个分片并限时下载，算出真实带宽（KB/s），
再按速度降序为每个频道择优保留（`settings.urlsLimit`，默认 5 条）。可用以下变量调整：

```bash
LIVE_SPEED_TEST=0 npm run update              # 关闭测速，退回纯连通性检测
LIVE_SPEED_TIMEOUT_MS=5000 npm run update     # 单条测速超时
LIVE_SPEED_MAX_BYTES=1048576 npm run update   # 单次最多下载字节数
LIVE_SPEED_MAX_DURATION_MS=1000 npm run update # 单次测速最长耗时
```

片库视频源也会测速，结果写进 [片库视频源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/video.md)：
取每个源列表里首条带 m3u8 直链的内容（多线路时优先 m3u8 线路），解析多码率列表后
取码率最高一路，下载首个分片实测带宽。测速只影响报告，不影响 `lite.json` 等成品。

```bash
VIDEO_SPEED_TEST=0 npm run update              # 关闭片库测速
VIDEO_SPEED_TIMEOUT_MS=6000 npm run update     # 单条测速超时
VIDEO_SPEED_MAX_BYTES=1048576 npm run update   # 单次最多下载字节数
VIDEO_SPEED_MAX_DURATION_MS=1000 npm run update # 单次测速最长耗时
```
