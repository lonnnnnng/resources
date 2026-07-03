# 片库视频源检测报告

生成时间: 2026-07-03T20:33:11.372Z

总数: 72
可用: 53
失败: 19
普通源: 25
成人源: 28

## 失败项

1. 豆瓣资源
   地址:
   ```text
   https://caiji.dbzy5.com/api.php/provide/vod
   ```
   错误: HTTP 502 Bad Gateway
   阶段: 列表检测
   HTTP: 502 Bad Gateway
   检测地址:
   ```text
   https://caiji.dbzy5.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html>
   <html>
   <title></title>
   <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1.0">
    <style>body{background:#f5f8fa}.box{width:360px;text-align:center;background:#fff;padding:20px;margin:auto}</style>
   </head>
   <body>
    <div class="box">
    <b style="font-size:120px;">🛡️</b>
    <p>访问代码: 502</p><p>访问编号: 15b6dc53dca843eab781fb9e4996dc02</p><p>访问方法: GET </p><p>访问网址: https://caiji.dbzy5.com/api.php/provide/vod?ac=videolist&pg=1 </p><p>游客地址: 64.236.215.52 </p><p>访问时间: 2026-07-04 04:33:12 </p><p>暂时无法连接源站，请稍后再试<script>setTimeout(function () { location.reload(); }, 5000); </script></p>
    </div>
   </body>
   </html>
   ```

2. 茅台资源
   地址:
   ```text
   https://caiji.maotaizy.cc/api.php/provide/vod
   ```
   错误: HTTP 502 Bad Gateway
   阶段: 列表检测
   HTTP: 502 Bad Gateway
   检测地址:
   ```text
   https://caiji.maotaizy.cc/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html>
   <html>
   <title></title>
   <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1.0">
    <style>body{background:#f5f8fa}.box{width:360px;text-align:center;background:#fff;padding:20px;margin:auto}</style>
   </head>
   <body>
    <div class="box">
    <b style="font-size:120px;">🛡️</b>
    <p>访问代码: 502</p><p>访问编号: f761e449bebc406bbe304bbbb2c9c465</p><p>访问方法: GET </p><p>访问网址: https://caiji.maotaizy.cc/api.php/provide/vod?ac=videolist&pg=1 </p><p>游客地址: 64.236.215.52 </p><p>访问时间: 2026-07-04 04:33:13 </p><p>暂时无法连接源站，请稍后再试<script>setTimeout(function () { location.reload(); }, 5000); </script></p>
    </div>
   </body>
   </html>
   ```

3. 卧龙资源
   地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!-- 62720"... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!-- 627208872683 -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,noarchive,nofollow">
   </head>
   <body>
   <div id="root"></div>
   <script nonce="7sJGce6Yo32+ZlQVpO2zbg==">
   (function(){var _0x1a2b='aHR0cHM6Ly9nby1nZXQtc29tZS5uZXQvZ28vMjg5MDMxNT9hYz12aWRlb2xpc3QmcGc9MSZyZWY9JnN1YmlkMT0mc3ViaWQyPXdvbG9uZ3p5dy5jb20=';(function(_0x2a8f){var _0x4e3d=['\x61\x74\x6f\x62','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x72\x65\x70\x6c\x61\x63\x65','\x68\x72\x65\x66','\x61\x73\x73\x69\x67\x6e','\x6f\x75\x74\x65\x72\x57\x69\x64\x74\x68','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x6f\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74','\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74'],_0x1b7c=function(_0...
   ```

4. 极速资源
   地址:
   ```text
   https://jszyapi.com/api.php/provide/vod
   ```
   错误: HTTP 403 Forbidden
   阶段: 列表检测
   HTTP: 403 Forbidden
   检测地址:
   ```text
   https://jszyapi.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-Xa44SIcOfiDB93J8EYpE9E&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

5. 旺旺资源
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

6. 金鹰点播
   地址:
   ```text
   https://jinyingzy.com/api.php/provide/vod
   ```
   错误: HTTP 403 Forbidden
   阶段: 列表检测
   HTTP: 403 Forbidden
   检测地址:
   ```text
   https://jinyingzy.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-6AllmVFhbfKFVcBBg4f8r4&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

7. 百度云zy
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-h3B5m3dxKvrfgsYS9VWV6B&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

8. 艾旦影视
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-Ty9AZjYEFSeTWZTVyMAoYr&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

9. 旺旺短剧
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

10. 鸭鸭资源
   地址:
   ```text
   https://cj.yayazy.net/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://cj.yayazy.net/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%85%A8%E6%97%A5%E5%88%B6%E6%B5%AA%E6%BC%AB
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

11. 索尼资源
   地址:
   ```text
   https://suoniapi.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://suoniapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E7%8E%84%E5%B9%BB%EF%BC%9A%E5%A4%A9%E7%89%A2%E4%B8%89%E5%B9%B4%E9%82%A3%E4%B8%AA%E7%BA%A8%E7%BB%94%E5%87%BA%E7%8B%B1%E4%BA%86
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

12. 快车资源
   地址:
   ```text
   https://caiji.kuaichezy.org/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://caiji.kuaichezy.org/api.php/provide/vod?ac=videolist&pg=1&wd=%E8%8B%8F%E5%B0%8F%E5%A7%90%EF%BC%8C%E4%BD%A0%E7%9A%84%E9%A9%AC%E7%94%B2%E5%A4%AA%E5%A4%9A%E4%BA%86
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

13. 闪电资源
   地址:
   ```text
   https://xsd.sdzyapi.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://xsd.sdzyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%BA%AC%E5%A9%9A%E6%BA%BA%E7%88%B1
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

14. 🔞优优资源
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

15. 🔞黄色仓库
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

16. 🔞森林资源
   地址:
   ```text
   https://beiyong.slapibf.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '搜', "搜索暂时关闭" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://beiyong.slapibf.com/api.php/provide/vod?ac=videolist&pg=1&wd=EZD-221%20%E7%B4%A0%E4%BA%BA%E6%B7%AB%E7%A7%BD%E5%86%99%E7%9C%9F%20%E7%AC%AC%E5%9B%9B%E4%BA%BA%20%E8%A2%AB%E6%90%9E%E5%A4%96%E9%81%87%E7%9A%84%E7%94%B7%E4%BA%BA%E4%B8%AD%E5%87%BA%E7%9A%84%E7%99%BE%E8%B4%A7%E6%9F%9C%E5%A7%90%20%E6%9D%BE%E6%9C%AC%E3%81%84%E3%81%A1%E3%81%8B%2C%E7%BE%8E%E8%B0%B7%E6%9C%B1%E9%87%8C%2C%E4%B8%83%E7%80%AC%E3%82%A2%E3%83%AA%E3%82%B9%E7%AD%89%E6%BC%94%E5%91%98%20%E3%83%80%E3%82%B9%E3%83%83%EF%BC%81
   ```
   响应片段:
   ```text
   搜索暂时关闭
   ```

17. 🔞百万资源
   地址:
   ```text
   https://api.bwzyz.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<html> <he"... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://api.bwzyz.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <html>
   <head>
   <title>bwzyz.com</title>
   <script type="text/javascript" src="/js/fingerprint/iife.min.js"></script>
   <script type="text/javascript">
   var redirect_link = 'http://api.bwzyz.com/api.php/provide/vod?ac=videolist&pg=1&tr_uuid=20260704-0633-23c1-a191-85a639f3f2a5&';
   let redirected = false;
   function redirect(suffix) {
    if (redirected) return;
    redirected = true;
    window.location.replace(redirect_link + suffix);
   }
   const rdrTimeout = setTimeout(() => redirect('fp=-7'), 300);
   try {
    FingerprintJS.load({monitoring: false})
    .then(fp => fp.get())
    .then(result => {
    clearTimeout(rdrTimeout);
    redirect('fp=' + result.visitorId);
    });
   } catch (err) {
    redirect('fp=-7');
   }
   </script>
   <style> body { background:#101c36 } </style>
   </head>
   <body bgcolor="#ffffff" text="#000000">
   <div style='d...
   ```

18. 🔞-奥斯卡-
   地址:
   ```text
   https://aosikazy.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token 'e', "err not serarch" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://aosikazy.com/api.php/provide/vod?ac=videolist&pg=1&wd=MOOC-014%20%E7%94%B7%E3%81%AE%E5%A8%98J%E7%B3%BB%E5%A7%AA%E3%81%A3%E5%AD%90%E3%81%AE%E7%84%A1%E8%87%AA%E8%A6%9A%E3%82%82%E3%81%A3%E3%81%93%E3%82%8A%E3%83%91%E3%83%B3%E3%83%81%E3%83%A9%E8%AA%98%E6%83%91%E3%81%AB%E6%88%91%E6%85%A2%E3%81%A7%E3%81%8D%E3%81%9A%E3%83%95%E3%83%AB%E5%8B%83%E8%B5%B7%E3%83%81%E2%97%8B%E3%83%9D%E3%82%92%E3%83%91%E3%83%B3%E3%83%86%E3%82%A3%E8%B6%8A%E3%81%97%E3%82%A2%E3%83%8A%E3%83%AB%E7%B4%A0%E8%82%A1
   ```
   响应片段:
   ```text
   err not serarch
   ```

19. 🔞丝袜资源
   地址:
   ```text
   https://siwazyw.tv/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://siwazyw.tv/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html><html><head><script>window.onload=function(){window.location.href="/lander?ac=videolist&pg=1"}</script></head></html>
   ```
