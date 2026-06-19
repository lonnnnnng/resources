# 片库视频源检测报告

生成时间: 2026-06-19T20:46:49.229Z

总数: 72
可用: 47
失败: 25
普通源: 27
成人源: 20

## 失败项

1. 卧龙资源
   地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html><html><head><script>window.onload=function(){window.location.href="/lander?ac=videolist&pg=1"}</script></head></html>
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-Lh0G8ApSWCVrSPIi5ORi0F&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
   ```

4. U酷影视
   地址:
   ```text
   https://api.ukuapi88.com/api.php/provide/vod
   ```
   错误: HTTP 502 Bad Gateway
   阶段: 列表检测
   HTTP: 502 Bad Gateway
   检测地址:
   ```text
   https://api.ukuapi88.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!DOCTYPE html>
   <!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
   <!--[if IE 7]> <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
   <!--[if IE 8]> <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
   <!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
   <head>
   <title>ukuapi88.com | 502: Bad gateway</title>
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
    <header ...
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-z9vYXVMtB4OntzPuarApnD&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-ABF9NK0dshjDyDwdzcsBgk&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   https://cj.yayazy.net/api.php/provide/vod?ac=videolist&pg=1&wd=%E8%90%BD%E6%A6%9C%E4%BA%94%E5%8D%81%E6%AC%A1%EF%BC%8C%E6%88%91%E5%8F%8D%E4%BA%86
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
   https://suoniapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E8%B0%81%E8%AF%B4%E6%9C%89%E9%80%8F%E8%A7%86%E5%B0%B1%E9%9D%9E%E8%A6%81%E8%B5%8C%E7%9F%B3
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
   https://caiji.kuaichezy.org/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%BC%80%E5%B1%80%E8%B7%9F%E5%A4%A7%E5%93%A5%E5%86%B3%E8%A3%82%E5%90%8E%EF%BC%8C%E6%88%91%E5%B8%A6%E5%B1%B1%E5%AF%A8%E5%A8%81%E9%9C%87%E4%B9%9D%E5%B7%9E
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
   https://xsd.sdzyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%B8%9C%E5%8C%97%E5%B9%B4%E4%BB%A3%E4%B9%8B%E6%88%91%E7%9A%84%E5%A4%A7%E8%85%B0%E5%AD%90%E7%AC%AC%E4%B8%89%E9%83%A8
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

13. 🔞森林资源
   地址:
   ```text
   https://beiyong.slapibf.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '搜', "搜索暂时关闭" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://beiyong.slapibf.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E6%99%AE%E9%80%9A%E7%94%B7%E5%A5%B3%E7%9B%91%E6%8E%A7AV%20%E9%AD%94%E9%95%9C%E9%82%A3%E8%BE%B9%E4%B8%8D%E4%BC%9A%E4%BA%B2%E5%90%BB%E6%88%91%E7%9A%84%E8%80%81%E5%85%AC%EF%BC%81%E5%B7%B2%E5%A9%9A%E5%A5%B3%E5%AD%90%E8%AE%B8%E4%B9%85%E6%9C%AA%E8%A7%81%E5%BF%83%E7%88%B1%E7%9A%84%E4%B8%88%E5%A4%AB%EF%BC%8C%E6%9C%8910%E7%A7%8D%E6%84%88%E6%BC%94%E6%84%88%E7%83%88%E7%9A%84%E5%BC%BA%E7%83%88%E6%B7%B1%E5%90%BB%20%20%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%82%B9
   ```
   响应片段:
   ```text
   搜索暂时关闭
   ```

14. 🔞鲨鱼资源
   地址:
   ```text
   https://shayuapi.com/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 搜索检测
   检测地址:
   ```text
   https://shayuapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E9%BB%91%E4%B8%9D%E5%88%B6%E6%9C%8D%E6%A8%A1%E7%89%B9%E6%B3%84%E5%AF%86%EF%BC%81%E6%97%A0%E5%A5%97%E7%88%86%E6%93%8D%E5%86%85%E5%B0%84%E9%AB%98%E6%B8%85%E6%97%A0%E7%A0%81
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
   var redirect_link = 'http://api.bwzyz.com/api.php/provide/vod?ac=videolist&pg=1&tr_uuid=20260620-0647-03dc-9b52-02de875bcc16&';
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

16. 🔞细胞资源
   地址:
   ```text
   https://www.xxibaozyw.com/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://www.xxibaozyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```

17. 🔞香蕉资源
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

18. 🔞-美少女-
   地址:
   ```text
   https://www.msnii.com/api/json.php
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://www.msnii.com/api/json.php?ac=videolist&pg=1
   ```

19. 🔞-黄AVZY
   地址:
   ```text
   https://www.pgxdy.com/api/json.php
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://www.pgxdy.com/api/json.php?ac=videolist&pg=1
   ```

20. 🔞白嫖资源
   地址:
   ```text
   https://www.kxgav.com/api/json.php
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://www.kxgav.com/api/json.php?ac=videolist&pg=1
   ```

21. 🔞杏吧资源
   地址:
   ```text
   https://xingba222.com/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://xingba222.com/api.php/provide/vod?ac=videolist&pg=1
   ```

22. 🔞大地资源
   地址:
   ```text
   https://dadiapi.com/feifei
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://dadiapi.com/feifei?ac=videolist&pg=1
   ```

23. 🔞色猫资源
   地址:
   ```text
   https://caiji.semaozy.net/inc/apijson_vod.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://caiji.semaozy.net/inc/apijson_vod.php/provide/vod?ac=videolist&pg=1
   ```

24. 🔞-奥斯卡-
   地址:
   ```text
   https://aosikazy.com/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://aosikazy.com/api.php/provide/vod?ac=videolist&pg=1
   ```

25. 🔞丝袜资源
   地址:
   ```text
   https://siwazyw.tv/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://siwazyw.tv/api.php/provide/vod?ac=videolist&pg=1
   ```
