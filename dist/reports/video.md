# 片库视频源检测报告

生成时间: 2026-06-05T20:56:31.633Z

总数: 72
可用: 58
失败: 14
普通源: 27
成人源: 31

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

2. 新浪资源
   地址:
   ```text
   https://api.xinlangapi.com/xinlangapi.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '搜', "搜索关闭" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://api.xinlangapi.com/xinlangapi.php/provide/vod?ac=videolist&pg=1&wd=%E5%A4%A7%E5%8F%94%E5%86%8D%E5%87%BA%E6%8B%9B
   ```
   响应片段:
   ```text
   搜索关闭
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
   <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <title>天涯资源网</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="短视频,搞笑视频,视频分享,免费视频,在线视频,预告片" />
    <meta name="description" content="提供最新最快的视频分享数据" />
    <link href="/template/tyys/css/style.css" rel="stylesheet" type="text/css" />
   <link href="/template/tyys/css/home.css" type="text/css" rel="stylesheet" />
   <link href="/template/tyys/css/zzsc.css" type="text/css" rel="stylesheet" />
   <link href="/static/css/home.css" rel="stylesheet" type="text/css" />
   <script src="/static/js/jquery.autocomplete.js"></script>
   <script>
    var maccms = {
    "path": "",
    "mid": "",
   ...
   ```

4. 金鹰点播
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-4hkcvyCJccGts4ShX3Fzdc&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-rNe8wNZ69X3g28qVt9JyUY&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-949kFW1GFKjh12XiOG4BuO&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <title>天涯资源网</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="短视频,搞笑视频,视频分享,免费视频,在线视频,预告片" />
    <meta name="description" content="提供最新最快的视频分享数据" />
    <link href="/template/tyys/css/style.css" rel="stylesheet" type="text/css" />
   <link href="/template/tyys/css/home.css" type="text/css" rel="stylesheet" />
   <link href="/template/tyys/css/zzsc.css" type="text/css" rel="stylesheet" />
   <link href="/static/css/home.css" rel="stylesheet" type="text/css" />
   <script src="/static/js/jquery.autocomplete.js"></script>
   <script>
    var maccms = {
    "path": "",
    "mid": "",
   ...
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
   https://cj.yayazy.net/api.php/provide/vod?ac=videolist&pg=1&wd=%E9%93%81%E6%8B%B3%E6%95%99%E8%82%B2
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
   https://suoniapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E8%B0%9C%E5%8D%B0%E5%A5%B3%E5%AD%90
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
   https://caiji.kuaichezy.org/api.php/provide/vod?ac=videolist&pg=1&wd=%E9%93%81%E6%8B%B3%E6%95%99%E8%82%B2
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
   https://xsd.sdzyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E9%9F%B3%E4%BD%A0%E8%80%8C%E6%9D%A53
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

13. 🔞-奥斯卡-
   地址:
   ```text
   https://aosikazy.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token 'e', "err not serarch" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://aosikazy.com/api.php/provide/vod?ac=videolist&pg=1&wd=ITSR-150%20%E3%82%AE%E3%83%A3%E3%83%AB%E3%82%92%E3%82%B3%E3%82%AB%E3%81%99%E3%81%AE%E3%81%AA%E3%82%93%E3%81%96%E8%B6%85%E7%B0%A1%E5%8D%98%EF%BC%81%E5%8F%A3%E8%AA%AC%E3%81%8D%E3%82%82%E3%81%8A%E9%87%91%E3%82%82%E4%B8%8D%E8%A6%81%EF%BC%9F%E3%83%81%E2%97%8F%E3%83%9D%E4%B8%80%E6%9C%AC%E3%81%A7%E5%A0%95%E3%81%A1%E3%82%8B%E3%82%AE%E3%83%A3%E3%83%AB%2015%E4%BA%BA4%E6%99%82%E9%96%93
   ```
   响应片段:
   ```text
   err not serarch
   ```

14. 🔞丝袜资源
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
