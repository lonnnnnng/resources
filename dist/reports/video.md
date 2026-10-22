# 片库视频源检测报告

生成时间: 2026-10-22T22:20:26.059Z

总数: 72
可用: 54
失败: 18
普通源: 28
成人源: 26

## 失败项

1. 卧龙资源
   地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!-- 98265"... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!-- 982651531097 -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,noarchive,nofollow">
   </head>
   <body>
   <div id="root"></div>
   <script nonce="aPXWlVH+qeavDMBxk0GV/Q==">
   (function(){var _0x1a2b='aHR0cHM6Ly9kZXByZXNzaXZlbHkuY29tL2dvLzI4OTAzMTU/YWM9dmlkZW9saXN0JnBnPTEmcmVmPSZzdWJpZDE9JnN1YmlkMj13b2xvbmd6eXcuY29t';(function(_0x2a8f){var _0x4e3d=['\x61\x74\x6f\x62','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x72\x65\x70\x6c\x61\x63\x65','\x68\x72\x65\x66','\x61\x73\x73\x69\x67\x6e','\x6f\x75\x74\x65\x72\x57\x69\x64\x74\x68','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x6f\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74','\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74'],_0x1b7c=function(_0...
   ```

2. 旺旺资源
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

3. 飘零资源
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-47Iq6xLtD5mIqqIFQDcMiX&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

4. 百度云zy
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-I2patJBQApp7OrJuzBLa7j&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

5. 艾旦影视
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-UXQFA8pBOysODIVlrPYREF&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

6. 旺旺短剧
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

7. 鸭鸭资源
   地址:
   ```text
   https://cj.yayazy.net/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://cj.yayazy.net/api.php/provide/vod?ac=videolist&pg=1&wd=%E6%96%B9%E7%B3%96%E4%B9%8B%E5%A3%B0
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

8. 索尼资源
   地址:
   ```text
   https://suoniapi.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://suoniapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%B7%A5%E5%9C%B0%E6%81%8B%E6%AD%8C
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

9. 快车资源
   地址:
   ```text
   https://caiji.kuaichezy.org/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://caiji.kuaichezy.org/api.php/provide/vod?ac=videolist&pg=1&wd=%E6%96%B9%E7%B3%96%E4%B9%8B%E5%A3%B0
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

10. 闪电资源
   地址:
   ```text
   https://xsd.sdzyapi.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://xsd.sdzyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E6%96%B9%E7%B3%96%E4%B9%8B%E5%A3%B0
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

11. 🔞--AIvin-
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

12. 🔞优优资源
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

13. 🔞百万资源
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
   原因: ECONNREFUSED | Error | connect ECONNREFUSED 182.16.68.100:443

14. 🔞细胞资源
   地址:
   ```text
   https://www.xxibaozyw.com/api.php/provide/vod
   ```
   错误: 请求失败: TypeError: fetch failed
   阶段: 列表检测
   检测地址:
   ```text
   https://www.xxibaozyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   原因: ERR_TLS_CERT_ALTNAME_INVALID | Error | Hostname/IP does not match certificate's altnames: Host: www.xxibaozyw.com. is not in the cert's altnames: DNS:100ri.cc, DNS:www.100ri.cc

15. 🔞香蕉资源
   地址:
   ```text
   https://www.xiangjiaozyw.com/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://www.xiangjiaozyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```

16. 🔞大地资源
   地址:
   ```text
   https://dadiapi.com/feifei
   ```
   错误: HTTP 404 Not Found
   阶段: 列表检测
   HTTP: 404 Not Found
   检测地址:
   ```text
   https://dadiapi.com/feifei?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html>
   <html>
   <head>
   <meta charset="utf-8">
   <title>页面不存在</title>
   <style>
   body{margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;color:#333;}
   .wrap{max-width:600px;margin:120px auto;text-align:center;}
   h1{font-size:80px;margin:0;color:#ccc;}
   h2{font-size:24px;margin:10px 0 20px;}
   p{color:#888;}
   a{color:#e6004d;text-decoration:none;}
   a:hover{text-decoration:underline;}
   </style>
   </head>
   <body>
   <div class="wrap">
    <h1>404</h1>
    <h2>页面不存在</h2>
    <p>您访问的页面不存在，<a href="/">返回首页</a></p>
   </div>
   </body>
   </html>
   ```

17. 🔞-奥斯卡-
   地址:
   ```text
   https://aosikazy.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token 'e', "err not serarch" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://aosikazy.com/api.php/provide/vod?ac=videolist&pg=1&wd=FNS-223%20FNS-223%20%E7%A6%81%E6%AC%B2%E8%A7%A3%E6%94%BE%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%8830%E6%97%A5%E9%96%93%E3%81%AE%E3%82%BB%E3%83%83%E3%82%AF%E3%82%B9%EF%BC%86%E3%82%AA%E3%83%8A%E3%83%8B%E3%83%BC%E7%A6%81%E6%AD%A2%E3%81%A7%E9%AB%98%E3%81%BE%E3%82%8A%E3%81%8D%E3%81%A3%E3%81%9F%E6%80%A7%E6%AC%B2%E3%82%92120%E5%88%86
   ```
   响应片段:
   ```text
   err not serarch
   ```

18. 🔞丝袜资源
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
   原因: ECONNREFUSED | Error | connect ECONNREFUSED 23.225.48.69:443
