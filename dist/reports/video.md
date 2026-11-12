# 片库视频源检测报告

生成时间: 2026-11-12T03:16:15.525Z

总数: 53
可用: 48
失败: 5
普通源: 24
成人源: 24

## 失败项

1. 魔都资源
   地址:
   ```text
   https://www.mdzyapi.com/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://www.mdzyapi.com/api.php/provide/vod?ac=videolist&pg=1
   ```

2. 无尽资源
   地址:
   ```text
   https://api.wujinapi.me/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 搜索检测
   检测地址:
   ```text
   https://api.wujinapi.me/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%8F%8C%E5%8D%81%E4%B8%80%E5%BA%86%E5%8A%9F%E5%AE%B4%E4%B8%8A%EF%BC%8C%E6%88%91%E4%BA%AE%E5%87%BA%E4%BA%86%E7%A6%BB%E8%81%8C%E7%94%B3%E8%AF%B7
   ```

3. 魔都动漫
   地址:
   ```text
   https://caiji.moduapi.cc/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://caiji.moduapi.cc/api.php/provide/vod?ac=videolist&pg=1
   ```

4. 🔞--AIvin-
   地址:
   ```text
   http://lbapiby.com/api.php/provide/vod
   ```
   错误: HTTP 502 Bad Gateway
   阶段: 列表检测
   HTTP: 502 Bad Gateway
   检测地址:
   ```text
   http://lbapiby.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <html>
   <head><title>502 Bad Gateway</title></head>
   <body>
   <center><h1>502 Bad Gateway</h1></center>
   <hr><center>openresty</center>
   </body>
   </html>
   ```

5. 🔞黄色仓库
   地址:
   ```text
   https://hsckzy.xyz/api.php/provide/vod
   ```
   错误: HTTP 523 <none>
   阶段: 列表检测
   HTTP: 523 <none>
   检测地址:
   ```text
   https://hsckzy.xyz/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html>
   <!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
   <!--[if IE 7]> <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
   <!--[if IE 8]> <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
   <!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
   <head>
   <title>hsckzy.xyz | 523: Origin is unreachable</title>
   <meta charset="UTF-8" />
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
   <meta name="robots" content="noindex, nofollow" />
   <meta name="viewport" content="width=device-width,initial-scale=1" />
   <link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/main.css" />
   </head>
   <body>
   <div id="cf-wrapper">
    <div id="cf-error-details" class="p-0">
    ...
   ```
