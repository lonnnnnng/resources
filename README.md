# resources

流光媒体源集合，每天由 GitHub Actions 检测并生成可用订阅。

生成时间: 2026-11-12T05:44:19.886Z

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
| 片库视频源 | 53 | 52 | 1 |
| 电视直播源 | 417 | 207，跳过 110 | 100 |
| 电台源 | 433 | 389 | 44 |
| 播客源 | 109 | 65 | 44 |

## 报告

- [片库视频源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/video.md)
- [电视直播源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/live.md)
- [电台源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/radio.md)
- [播客源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/podcast.md)

## 普通影视源测速

采样方式: 取每个源列表里首条带 m3u8 直链的内容，解析多码率列表后取码率最高一路，
下载首个视频分片实测带宽（与报告同一套数据，仅列出普通源；成人源只在报告里出现）。

18/27 个普通源测出带宽；中位数 60 KB/s，最快 309 KB/s，最慢 7 KB/s。

| # | 源 | 速度 | 分片耗时 | 采样内容 |
| ---: | --- | ---: | ---: | --- |
| 1 | 爱奇艺 | 309 KB/s | 1034ms | 新男友 · 第01集 |
| 2 | 如意资源 | 213 KB/s | 1200ms | 欧耶一级棒 · 20260629 |
| 3 | 360资源 | 199 KB/s | 1046ms | 偏爱之恋第二季 · 第20261017期超前速递 |
| 4 | 猫眼资源 | 174 KB/s | 1014ms | 聊斋问心 · 第01集 |
| 5 | 无尽资源 | 82 KB/s | 521ms | 花朵盛开 · 第01集 |
| 6 | 魔都动漫 | 71 KB/s | 1571ms | 炙热的告别 · 第01集 |
| 7 | 金鹰点播 | 63 KB/s | 1272ms | 末世后的酒店 · 第1集 |
| 8 | 樱花资源 | 61 KB/s | 1043ms | 罗布泊神墓 · 第01集 |
| 9 | 光速资源 | 60 KB/s | 1052ms | 我都大帝了怎么还被抢婚 · 第1集 |
| 10 | iKun资源 | 47 KB/s | 1022ms | 爱的修学旅行第二季 · 第20261021期 |
| 11 | 新浪资源 | 44 KB/s | 1442ms | 末世后的酒店 · 第1集 |
| 12 | 红牛资源 | 42 KB/s | 1140ms | 末世后的酒店 · 第1集 |
| 13 | 极速资源 | 37 KB/s | 1278ms | 末世后的酒店 · 第1集 |
| 14 | 速播资源 | 36 KB/s | 1315ms | 末世后的酒店 · 第1集 |
| 15 | 暴风资源 | 27 KB/s | 1748ms | 独家黑幕 第二季 · 第1集 |
| 16 | 虎牙资源 | 24 KB/s | 1306ms | 末世后的酒店 · 第1集 |
| 17 | 豪华资源 | 16 KB/s | 1985ms | 我都大帝了怎么还被抢婚 · 第1集 |
| 18 | 魔都资源 | 7 KB/s | 1415ms | BE故事拯救计划 · 全集 |

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
