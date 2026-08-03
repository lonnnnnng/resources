# 片库视频源检测报告

生成时间: 2026-08-03T20:39:14.219Z

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
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!-- 67649"... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!-- 676494862023 -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,noarchive,nofollow">
   </head>
   <body>
   <div id="root"></div>
   <script nonce="5/GHRE4LSEaOkBOzRuXGmA==">
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-JLTtvuDdWOyXSLfIdv7km4&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-fsf1FVJgj4nORKalj9Xhhs&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-TAdPzjS6ptH1MIKwbGBWVO&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-fV6QfCZqtfAXF0AT310zMK&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   https://cj.yayazy.net/api.php/provide/vod?ac=videolist&pg=1&wd=%E9%99%90%E6%97%B6%E4%B8%80%E7%99%BE%E5%A4%A9%EF%BC%8C%E5%92%8C%E5%89%8D%E5%A4%AB%E8%B0%88%E6%81%8B%E7%88%B1
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
   https://suoniapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%A5%B9%E5%9C%A8%E6%A5%BC%E9%81%93%E9%87%8C%E5%95%83%E9%A6%92%E5%A4%B4%EF%BC%8C%E6%88%91%E4%B8%8D%E5%BF%8D%E4%BA%86
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
   https://caiji.kuaichezy.org/api.php/provide/vod?ac=videolist&pg=1&wd=%E9%99%90%E6%97%B6%E4%B8%80%E7%99%BE%E5%A4%A9%EF%BC%8C%E5%92%8C%E5%89%8D%E5%A4%AB%E8%B0%88%E6%81%8B%E7%88%B1
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
   https://xsd.sdzyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E9%99%90%E6%97%B6%E4%B8%80%E7%99%BE%E5%A4%A9%EF%BC%8C%E5%92%8C%E5%89%8D%E5%A4%AB%E8%B0%88%E6%81%8B%E7%88%B1
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
   https://beiyong.slapibf.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E6%9C%80%E5%A5%BD%E7%9A%84%E6%A8%A1%E6%8B%9F%E5%BA%97%EF%BC%8C%E4%BA%BA%E4%BB%AC%E5%9C%A8%E7%A7%81%E7%AB%8B%E5%A5%B3%E5%AD%90%E5%AD%A6%E6%A0%A1%E7%9A%84%E6%96%87%E5%8C%96%E8%8A%82%E4%B8%8A%E6%8E%92%E9%98%9F%20-%20%E5%9C%A8%E7%94%B7%E5%A3%AB%E5%8F%8D%E5%B0%84%E7%96%97%E6%B3%95%EF%BC%8Cgo-go%20%E9%85%92%E5%90%A7%EF%BC%8C%E6%88%BF%E9%97%B4%E5%92%8C%E9%AC%BC%E5%B1%8B%20%20Hunter
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
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://api.bwzyz.com/api.php/provide/vod?ac=videolist&pg=1
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
   https://aosikazy.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E6%B0%B4%E8%8F%9C%E9%BA%97%20DVDES-575%2010%E4%BA%BA%E5%A7%89%E5%A6%B9%E3%81%AE%E7%9C%9F%E3%82%93%E4%B8%AD%E3%81%AB%E7%94%B7%E3%81%AF%E5%83%951%E4%BA%BA%E3%81%A0%E3%81%91%EF%BC%81%20%E5%A4%A7%E5%AE%B6%E6%97%8F%208%E6%99%82%E9%96%93%E6%8B%A1%E5%A4%A7%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB%EF%BC%81%EF%BC%81%20%EF%BD%9E%E5%83%95%E3%81%AE%E3%83%93%E3%83%83%E3%82%B0%E3%83%80%E3%83%87%E3%82%A3%EF%BC%88
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
   原因: ENOTFOUND | Error | getaddrinfo ENOTFOUND siwazyw.tv
