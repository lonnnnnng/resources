# resources

流光媒体源集合，每天由 GitHub Actions 检测并生成可用订阅。

生成时间: 2026-11-14T00:20:06.520Z

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
| 片库视频源 | 53 | 50 | 3 |
| 电视直播源 | 339 | 193，跳过 110 | 36 |
| 电台源 | 2163 | 1435 | 728 |
| 播客源 | 109 | 70 | 39 |

## 报告

- [片库视频源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/video.md)
- [电视直播源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/live.md)
- [电台源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/radio.md)
- [播客源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/podcast.md)

## 普通影视源测速

采样方式: 取每个源列表里首条带 m3u8 直链的内容，解析多码率列表后取码率最高一路，
下载首个视频分片实测带宽（与报告同一套数据，仅列出普通源；成人源只在报告里出现）。

20/25 个普通源测出带宽；中位数 3.7 MB/s，最快 7.3 MB/s，最慢 197 KB/s。

| # | 源 | 速度 | 分片耗时 | 采样内容 |
| ---: | --- | ---: | ---: | --- |
| 1 | 新浪资源 | 7.3 MB/s | 140ms | 谎言 · 第1集 |
| 2 | 极速资源 | 7.0 MB/s | 146ms | 谎言 · 第1集 |
| 3 | 虎牙资源 | 6.9 MB/s | 147ms | 谎言 · 第1集 |
| 4 | 光速资源 | 6.7 MB/s | 151ms | 谎言 · 第1集 |
| 5 | 速播资源 | 6.7 MB/s | 151ms | LOST10 · 第1集 |
| 6 | 金鹰点播 | 6.6 MB/s | 153ms | LOST10 · 第1集 |
| 7 | 豪华资源 | 6.5 MB/s | 155ms | 谎言 · 第1集 |
| 8 | 红牛资源 | 5.5 MB/s | 183ms | 谎言 · 第1集 |
| 9 | 优质资源 | 4.4 MB/s | 183ms | 妈妈发疯了 · 第01集 |
| 10 | 猫眼资源 | 3.7 MB/s | 96ms | 妈妈发疯了 · 第01集 |
| 11 | 爱奇艺 | 3.4 MB/s | 236ms | 黑帮恋事多 · 第01集 |
| 12 | 魔都动漫 | 3.2 MB/s | 21ms | 拉纳巴利 · 正片 |
| 13 | iKun资源 | 2.7 MB/s | 145ms | 某暗部的少女共栖 · 第01集 |
| 14 | 樱花资源 | 1.8 MB/s | 143ms | 相亲误认我是挖煤工 · 全集 |
| 15 | 魔都资源 | 1.3 MB/s | 50ms | 拉纳巴利 · 正片 |
| 16 | 如意资源 | 972 KB/s | 41ms | 库比蒂诺 · 第01集 |
| 17 | 量子资源 | 911 KB/s | 1001ms | 紧急呼救第十季 · 第01集 |
| 18 | 暴风资源 | 782 KB/s | 1002ms | 乌鸦俱乐部 · 第1集 |
| 19 | 量子影视 | 334 KB/s | 112ms | 库比蒂诺 · 第01集 |
| 20 | 360资源 | 197 KB/s | 309ms | 拉纳巴利 · 正片 |

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
