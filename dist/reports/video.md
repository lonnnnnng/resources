# 片库视频源检测报告

生成时间: 2026-06-30T21:04:42.100Z

总数: 72
可用: 55
失败: 17
普通源: 27
成人源: 28

## 失败项

1. 卧龙资源
   地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!-- 78989"... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!-- 789899502832 -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,noarchive,nofollow">
   </head>
   <body>
   <div id="root"></div>
   <script nonce="J+N2RXbl33De5kXGFSgCzg==">
   (function(){var _0x1a2b='aHR0cHM6Ly9nby1nZXQtc29tZS5uZXQvZ28vMjg5MDMxNT9hYz12aWRlb2xpc3QmcGc9MSZyZWY9JnN1YmlkMT0mc3ViaWQyPXdvbG9uZ3p5dy5jb20=';(function(_0x2a8f){var _0x4e3d=['\x61\x74\x6f\x62','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x72\x65\x70\x6c\x61\x63\x65','\x68\x72\x65\x66','\x61\x73\x73\x69\x67\x6e','\x6f\x75\x74\x65\x72\x57\x69\x64\x74\x68','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x6f\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74','\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74'],_0x1b7c=function(_0...
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

3. 金鹰点播
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-aSxIy6Lh7aUBjPMn4bHYzM&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

4. U酷影视
   地址:
   ```text
   https://api.ukuapi88.com/api.php/provide/vod
   ```
   错误: HTTP 500 Internal Server Error
   阶段: 列表检测
   HTTP: 500 Internal Server Error
   检测地址:
   ```text
   https://api.ukuapi88.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html>
   <html>
   <head>
    <meta charset="UTF-8">
    <title>System Error</title>
    <meta name="robots" content="noindex,nofollow" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <style>
    /* Base */
    body {
    color: #333;
    font: 14px Verdana, "Helvetica Neue", helvetica, Arial, 'Microsoft YaHei', sans-serif;
    margin: 0;
    padding: 0 20px 20px;
    word-break: break-word;
    }
    h1{
    margin: 10px 0 0;
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    }
    h2{
    color: #4288ce;
    font-weight: 400;
    padding: 6px 0;
    margin: 6px 0 0;
    font-size: 18px;
    border-bottom: 1px solid #eee;
    }
    h3.subheading {
    color: #4288ce;
    margin: 6px 0 0;
    font-weight: 400;
    }
    h3{
    margin: 12px;
    font-size: 16px;
    font-weight: bold;
    }
    abbr{
    cursor: help;
    text-decorati...
   ```

5. 百度云zy
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-ziO2sx5YoXeyxkAfKUmxpd&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

6. 艾旦影视
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-e1OlvPOhV5zlgzUlNfZlhT&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

7. 旺旺短剧
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

8. 鸭鸭资源
   地址:
   ```text
   https://cj.yayazy.net/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://cj.yayazy.net/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%B8%80%E5%93%81%E7%A5%9E%E4%B8%90
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

9. 索尼资源
   地址:
   ```text
   https://suoniapi.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://suoniapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E6%8B%92%E5%BD%93%E5%86%A4%E5%A4%A7%E5%A4%B4%EF%BC%8C%E8%BD%AC%E5%A4%B4%E5%8F%A6%E5%A8%B6%E7%BB%9D%E7%BE%8E%E7%99%BD%E6%9C%88%E5%85%89
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

10. 快车资源
   地址:
   ```text
   https://caiji.kuaichezy.org/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://caiji.kuaichezy.org/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%A4%A7%E5%A9%9A%E5%BD%93%E6%97%A5%E4%BF%AE%E4%BB%99%E8%80%81%E7%88%B8%E5%BD%92%E6%9D%A5
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

11. 闪电资源
   地址:
   ```text
   https://xsd.sdzyapi.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://xsd.sdzyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%B8%80%E5%93%81%E7%A5%9E%E4%B8%90
   ```
   响应片段:
   ```text
   暂不支持搜索
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

13. 🔞黄色仓库
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
   https://beiyong.slapibf.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E7%B4%A0%E4%BA%BA%E9%85%8D%E5%AF%B9EX%20%E7%AA%81%E7%84%B6%E7%AE%97%E5%91%BD%E5%8F%AF%E4%BB%A5%E5%90%97%EF%BC%9F%20%EF%BC%9F%204%20%20%E7%B4%A0%E4%BA%BA%E3%81%BE%E3%81%A3%E3%81%A1%E3%82%93%E3%81%90EX-%E5%A6%84%E6%83%B3%E6%97%8F
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
   var redirect_link = 'http://api.bwzyz.com/api.php/provide/vod?ac=videolist&pg=1&tr_uuid=20260701-0705-03a6-9d01-82d41713a3c0&';
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
   https://aosikazy.com/api.php/provide/vod?ac=videolist&pg=1&wd=MKCK-407%20E-BODY%E5%8F%B2%E4%B8%8A%E6%9C%80%E3%82%82%E5%A3%B2%E3%82%8C%E3%81%9F%E5%B7%A8%E4%B9%B3%E5%A5%B3%E5%84%AA%E3%81%AE%E4%B8%AD%E5%87%BA%E3%81%97%E4%BD%9C%E5%93%81%20%E5%85%A812%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB%E5%85%A8%E9%83%A8%E3%81%B6%E3%81%A1%E8%BE%BC%E3%82%93%E3%81%A01370%E5%88%86-cd1
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
