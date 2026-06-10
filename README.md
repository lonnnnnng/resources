# resources

流光媒体源集合，每天由 GitHub Actions 检测并生成可用订阅。

生成时间: 2026-06-10T21:28:10.172Z

## 可直接使用的源

1. 片库视频源 lite
   地址:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/video/lite.json
   ```
   说明: 检测通过的普通片库视频源。
2. 片库视频源 adult
   地址:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/video/adult.json
   ```
   说明: 检测通过的成人片库视频源。
3. 片库视频源 full
   地址:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/video/full.json
   ```
   说明: `lite.json` + `adult.json` 汇总。
4. 电视直播源
   地址:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/live/live.m3u
   ```
   说明: 标准 M3U，由本仓库频道模板、订阅入口和过滤规则生成。
5. 电台源
   地址:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/radio/radio.json
   ```
   说明: JSON 电台列表，符合流光电台源字段兼容规则。
6. 播客源列表
   地址:
   ```text
   https://raw.githubusercontent.com/lonnnnnng/resources/main/dist/podcast/feeds.txt
   ```
   说明: 每行一个通过检测且最近 1 个月内有音频条目更新的 RSS/Atom 订阅地址。

## 检测结果

| 类型 | 总数 | 可用 | 失败 |
| --- | ---: | ---: | ---: |
| 片库视频源 | 72 | 57 | 15 |
| 电视直播源 | 621 | 222，跳过 174 | 225 |
| 电台源 | 2138 | 1307 | 831 |
| 播客源 | 109 | 74 | 35 |

## 报告

- [片库视频源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/video.md)
- [电视直播源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/live.md)
- [电台源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/radio.md)
- [播客源报告](https://github.com/lonnnnnng/resources/blob/main/dist/reports/podcast.md)

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
