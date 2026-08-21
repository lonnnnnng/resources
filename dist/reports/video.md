# 片库视频源检测报告

生成时间: 2026-08-21T19:37:12.540Z

总数: 72
可用: 55
失败: 17
普通源: 26
成人源: 29

## 失败项

1. 卧龙资源
   地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!-- 81541"... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!-- 815410289611 -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,noarchive,nofollow">
   </head>
   <body>
   <div id="root"></div>
   <script nonce="Fapcqo3WO6CuopPB/4nkjQ==">
   (function(){var _0x1a2b='aHR0cHM6Ly9kZXByZXNzaXZlbHkuY29tL2dvLzI4OTAzMTU/YWM9dmlkZW9saXN0JnBnPTEmcmVmPSZzdWJpZDE9JnN1YmlkMj13b2xvbmd6eXcuY29t';(function(_0x2a8f){var _0x4e3d=['\x61\x74\x6f\x62','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x72\x65\x70\x6c\x61\x63\x65','\x68\x72\x65\x66','\x61\x73\x73\x69\x67\x6e','\x6f\x75\x74\x65\x72\x57\x69\x64\x74\x68','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x6f\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74','\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74'],_0x1b7c=function(_0...
   ```

2. 魔都资源
   地址:
   ```text
   https://www.mdzyapi.com/api.php/provide/vod
   ```
   错误: HTTP 502 Bad Gateway
   阶段: 列表检测
   HTTP: 502 Bad Gateway
   检测地址:
   ```text
   https://www.mdzyapi.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!doctype html>
   <html>
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>502 Bad Gateway</title>
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
    height: 100%;
    }
    body {
    height: 100%;
    font-size: 14px;
    }
    .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 12%;
    }
    .logo img {
    display: block;
    width: 100px;
    }
    .logo img + img {
    margin-top: 12px;
    }
    .title {
    margin-top: 24px;
    font-size: 110px;
    color: #333;
    letter-spacing: 10px;
    }
    .desc {
    font-size: 16px;
    color: #777;
    text-align: center;
    line-height: 24px;
    }
    .footer {
    /* position: absolute;
    left: 0;
    bottom: 32px;
    width: 100%; */
    margin-top: 24px;
    text-align: center;
    font-s...
   ```

3. 旺旺资源
   地址:
   ```text
   https://api.wwzy.tv/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://api.wwzy.tv/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html>
   <html lang="zh-CN">
    <head>
    <title>天涯影视资源 | 海量资源永久免费</title>
    <meta name="keywords" content="短视频,搞笑视频,视频分享,免费视频,在线视频,预告片"/>
    <meta name="description" content="提供最新最快的视频分享数据"/>
    <meta charset="UTF-8">
   <meta name="viewport"content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
   <link rel="preconnect" href="https://fastly.jsdelivr.net" crossorigin>
   <link rel="stylesheet" rev="stylesheet" type="text/css" media="all" href="/template/xintianya/css/iconfont.css?v=7">
   <link rel="stylesheet" rev="stylesheet" type="text/css" media="all" href="/template/xintianya/css/main.css?v=7">
   <script src="/static/js/jquery.js"></script>
   <script src="/static/js/home.js"></script>
   <script>var maccms={"path":"","mid":"","url":"www.test.cn","wapurl...
   ```

4. 飘零资源
   地址:
   ```text
   https://p2100.net/api.php/provide/vod
   ```
   错误: HTTP 403 Forbidden
   阶段: 列表检测
   HTTP: 403 Forbidden
   检测地址:
   ```text
   https://p2100.net/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-lASox8UbmZxkxjFpvio6s7&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

5. 魔都动漫
   地址:
   ```text
   https://caiji.moduapi.cc/api.php/provide/vod
   ```
   错误: HTTP 502 Bad Gateway
   阶段: 列表检测
   HTTP: 502 Bad Gateway
   检测地址:
   ```text
   https://caiji.moduapi.cc/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!doctype html>
   <html>
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>502 Bad Gateway</title>
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
    height: 100%;
    }
    body {
    height: 100%;
    font-size: 14px;
    }
    .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 12%;
    }
    .logo img {
    display: block;
    width: 100px;
    }
    .logo img + img {
    margin-top: 12px;
    }
    .title {
    margin-top: 24px;
    font-size: 110px;
    color: #333;
    letter-spacing: 10px;
    }
    .desc {
    font-size: 16px;
    color: #777;
    text-align: center;
    line-height: 24px;
    }
    .footer {
    /* position: absolute;
    left: 0;
    bottom: 32px;
    width: 100%; */
    margin-top: 24px;
    text-align: center;
    font-s...
   ```

6. 百度云zy
   地址:
   ```text
   https://api.apibdzy.com/api.php/provide/vod
   ```
   错误: HTTP 403 Forbidden
   阶段: 列表检测
   HTTP: 403 Forbidden
   检测地址:
   ```text
   https://api.apibdzy.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-UjbebPqhdFVQCAGnbiFIea&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

7. 艾旦影视
   地址:
   ```text
   https://lovedan.net/api.php/provide/vod
   ```
   错误: HTTP 403 Forbidden
   阶段: 列表检测
   HTTP: 403 Forbidden
   检测地址:
   ```text
   https://lovedan.net/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-jYjYIkl6ieBkjPP8FdlqQN&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

8. 旺旺短剧
   地址:
   ```text
   https://wwzy.tv/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://wwzy.tv/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html>
   <html lang="zh-CN">
    <head>
    <title>天涯影视资源 | 海量资源永久免费</title>
    <meta name="keywords" content="短视频,搞笑视频,视频分享,免费视频,在线视频,预告片"/>
    <meta name="description" content="提供最新最快的视频分享数据"/>
    <meta charset="UTF-8">
   <meta name="viewport"content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
   <link rel="preconnect" href="https://fastly.jsdelivr.net" crossorigin>
   <link rel="stylesheet" rev="stylesheet" type="text/css" media="all" href="/template/xintianya/css/iconfont.css?v=7">
   <link rel="stylesheet" rev="stylesheet" type="text/css" media="all" href="/template/xintianya/css/main.css?v=7">
   <script src="/static/js/jquery.js"></script>
   <script src="/static/js/home.js"></script>
   <script>var maccms={"path":"","mid":"","url":"www.test.cn","wapurl...
   ```

9. 鸭鸭资源
   地址:
   ```text
   https://cj.yayazy.net/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://cj.yayazy.net/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%9B%A2%E5%AE%A0%E5%A4%A7%E5%B0%8F%E5%A7%90%EF%BC%8C%E5%85%A8%E5%AE%B6%E6%B2%BE%E6%88%91%E7%A6%8F%E6%B0%94
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

10. 索尼资源
   地址:
   ```text
   https://suoniapi.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://suoniapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%BD%92%E9%80%94%E5%B7%B2%E6%97%A0%E6%9C%9F
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

11. 快车资源
   地址:
   ```text
   https://caiji.kuaichezy.org/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://caiji.kuaichezy.org/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%BB%8E%E5%AE%B6%E6%97%8F%E5%BC%83%E5%AD%90%E5%BC%80%E5%A7%8B
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

12. 闪电资源
   地址:
   ```text
   https://xsd.sdzyapi.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://xsd.sdzyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%BB%8E%E5%AE%B6%E6%97%8F%E5%BC%83%E5%AD%90%E5%BC%80%E5%A7%8B
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

13. 🔞优优资源
   地址:
   ```text
   https://www.yytv4.cc/api.php/provide/vod
   ```
   错误: 请求失败: TypeError: fetch failed
   阶段: 列表检测
   检测地址:
   ```text
   https://www.yytv4.cc/api.php/provide/vod?ac=videolist&pg=1
   ```
   原因: ENOTFOUND | Error | getaddrinfo ENOTFOUND www.yytv4.cc

14. 🔞森林资源
   地址:
   ```text
   https://beiyong.slapibf.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '搜', "搜索暂时关闭" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://beiyong.slapibf.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%9C%A8%E6%80%A7%E4%BA%A4%E6%97%B6%E9%A9%AC%E4%B8%8A%E5%B0%B1%E5%B9%B2%E7%9A%84%E5%A5%B3%E4%BA%BA%EF%BC%81%E6%AF%8F%E5%88%86%E9%92%9F%E6%AF%8F%E7%A7%92%E9%92%9F%E9%83%BD%E6%84%9F%E5%88%B0%E6%B7%AB%E8%8D%A1%EF%BC%81%E7%94%A8%E5%85%94%E5%AD%90%E7%9C%BC%E7%9C%8B%E7%9D%80%E4%BD%A0%EF%BC%8C%E9%AC%BC%E6%B7%AB%E7%9A%84%E6%9C%8D%E5%8A%A1%E3%80%82%E4%B8%8D%E6%96%AD%E5%9C%B0%E7%94%A8%E8%88%8C%E5%A4%B4%E8%88%94%20DASS-604-C
   ```
   响应片段:
   ```text
   搜索暂时关闭
   ```

15. 🔞百万资源
   地址:
   ```text
   https://api.bwzyz.com/api.php/provide/vod
   ```
   错误: 请求失败: TypeError: fetch failed
   阶段: 列表检测
   检测地址:
   ```text
   https://api.bwzyz.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   原因: ECONNREFUSED | AggregateError

16. 🔞-奥斯卡-
   地址:
   ```text
   https://aosikazy.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token 'e', "err not serarch" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://aosikazy.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E9%85%A5%E8%83%B8%E7%BE%8E%E4%B9%B3%E7%B2%89%E9%B2%8D%E5%A4%A7%E7%9C%BC%E7%9D%9B%E9%A1%8F%E5%80%BC%E5%B0%8F%E5%A7%90%E5%A7%90%E5%B0%8F%E9%80%BC%E8%B6%85%E7%B4%A7%E6%8E%B0%E5%BC%80%E6%8F%92%E5%85%A5%E9%83%BD%E5%9B%B0%E9%9A%BE%E7%9F%B3%E5%A5%B3%E4%B8%80%E8%88%AC
   ```
   响应片段:
   ```text
   err not serarch
   ```

17. 🔞丝袜资源
   地址:
   ```text
   https://siwazyw.tv/api.php/provide/vod
   ```
   错误: 请求失败: TypeError: fetch failed
   阶段: 列表检测
   检测地址:
   ```text
   https://siwazyw.tv/api.php/provide/vod?ac=videolist&pg=1
   ```
   原因: ECONNRESET | Error | Client network socket disconnected before secure TLS connection was established
