# 片库视频源检测报告

生成时间: 2026-11-06T00:15:58.443Z

总数: 72
可用: 52
失败: 20
普通源: 27
成人源: 25

## 失败项

1. 豆瓣资源
   地址:
   ```text
   https://caiji.dbzy5.com/api.php/provide/vod
   ```
   错误: 请求失败: TypeError: fetch failed
   阶段: 列表检测
   检测地址:
   ```text
   https://caiji.dbzy5.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   原因: ENOTFOUND | Error | getaddrinfo ENOTFOUND caiji.dbzy5.com

2. 卧龙资源
   地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!-- 79742"... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!-- 797421687139 -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,noarchive,nofollow">
   </head>
   <body>
   <div id="root"></div>
   <script nonce="v4RA/wqLFG07Q4awVyvKFA==">
   (function(){var _0x1a2b='aHR0cHM6Ly9kZXByZXNzaXZlbHkuY29tL2dvLzI4OTAzMTU/YWM9dmlkZW9saXN0JnBnPTEmcmVmPSZzdWJpZDE9JnN1YmlkMj13b2xvbmd6eXcuY29t';(function(_0x2a8f){var _0x4e3d=['\x61\x74\x6f\x62','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x72\x65\x70\x6c\x61\x63\x65','\x68\x72\x65\x66','\x61\x73\x73\x69\x67\x6e','\x6f\x75\x74\x65\x72\x57\x69\x64\x74\x68','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x6f\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74','\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74'],_0x1b7c=function(_0...
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-aayYhHOCe5uKPQRHcsW7Ie&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-SeSiq9LL4pGCO2H4IvIKic&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-FNqgRtBBFzRzk4QgHD16Aa&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   https://cj.yayazy.net/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%BD%A0%E6%98%AF%E4%B8%96%E9%97%B4%E7%92%80%E7%92%A8
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
   https://suoniapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%88%B7%E7%88%86%E9%87%91%E5%8D%A1%E5%90%8E%E5%A5%B9%E4%BA%BA%E8%AE%BE%E5%B4%A9%E4%BA%86
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
   https://caiji.kuaichezy.org/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%BD%A0%E6%98%AF%E4%B8%96%E9%97%B4%E7%92%80%E7%92%A8
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
   https://xsd.sdzyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%BD%A0%E6%98%AF%E4%B8%96%E9%97%B4%E7%92%80%E7%92%A8
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

12. 🔞--AIvin-
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

14. 🔞奶香资源
   地址:
   ```text
   https://Naixxzy.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token 'e', "err not serarch" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://Naixxzy.com/api.php/provide/vod?ac=videolist&pg=1&wd=HMN-832%20%E3%83%93%E3%82%AD%E3%83%8B%E5%A7%BF%E3%81%A7%E7%B5%B6%E5%93%81%E3%83%9C%E3%83%87%E3%82%A3%E5%AF%86%E7%9D%80%EF%BC%81%E3%82%AF%E3%83%81%E3%81%86%E3%81%A4%E3%81%97%E5%AA%9A%E8%96%AC%E3%81%A7%E3%82%AE%E3%83%B3%E3%82%AE%E3%83%B3%E3%83%A1%E3%83%AD%E3%83%A1%E3%83%AD%EF%BC%81%E6%BF%83%E7%B8%AE%E4%BD%93%E6%B6%B2%E3%81%BE%E3%81%BF%E3%82%8C%E6%84%9F%E5%BA%A6%E6%9A%B4%E8%B5%B0%E4%B8%AD%E5%87%BA%E3%81%97%E3%83%A1%E3%83%B3%E3%82%BA%E3%82%A8
   ```
   响应片段:
   ```text
   err not serarch
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
   原因: ECONNREFUSED | Error | connect ECONNREFUSED 182.16.68.100:443

16. 🔞细胞资源
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
   原因: UND_ERR_CONNECT_TIMEOUT | ConnectTimeoutError | Connect Timeout Error (attempted address: www.xxibaozyw.com:443, timeout: 10000ms)

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

18. 🔞大地资源
   地址:
   ```text
   https://dadiapi.com/feifei
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<?xml vers"... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://dadiapi.com/feifei?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <?xml version="1.0" encoding="UTF-8"?>
   <rss version="5.1"><list page="1" pagecount="13989" pagesize="20" recordcount="279767"><video><last>2026-11-05 12:38:09</last><id>292913</id><tid>28</tid><name>ABF-15.2 流川夕 与素人独处一整天 巨乳沦陷爆操内射</name><type>AV明星</type><keywords></keywords><mcid></mcid><pic>https://ki.dadi260522.top/upload/vod/20261105-1/5b54e19976ceb9f053b57f02aeda571e.jpg</pic><lang></lang><area></area><year>0</year><state>0</state><note>HD</note><actor></actor><director></director><dl><dd flag="dadim3u8">HD$https://2609.dadi2026.com/20261104/bDXLgQJ5/index.m3u8$dadim3u8</dd></dl><des>镜头前，流川夕穿着紧身白色T恤，巨乳轮廓若隐若现，下身是短裙，露出白皙大腿。她与素人独处一室，气氛暧昧。素人从背后抱住她，手不安分地揉捏她的胸部，流川夕娇喘连连，眼神迷离。两人倒在沙发上，素人粗暴地扯下她的内裤，手指探入骚穴，搅动出淫靡水声。流川夕扭动腰肢，浪叫不止。素人掏出粗大肉棒，对准湿滑的穴口，狠狠插入，猛烈抽插，肉体碰撞声啪啪作响。流川夕被干得花枝乱颤，巨乳上下晃动，口中淫语不断：“啊……好深……操死...
   ```

19. 🔞-奥斯卡-
   地址:
   ```text
   https://aosikazy.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token 'e', "err not serarch" is not valid JSON
   阶段: 搜索检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://aosikazy.com/api.php/provide/vod?ac=videolist&pg=1&wd=HMN-832%20%E3%83%93%E3%82%AD%E3%83%8B%E5%A7%BF%E3%81%A7%E7%B5%B6%E5%93%81%E3%83%9C%E3%83%87%E3%82%A3%E5%AF%86%E7%9D%80%EF%BC%81%E3%82%AF%E3%83%81%E3%81%86%E3%81%A4%E3%81%97%E5%AA%9A%E8%96%AC%E3%81%A7%E3%82%AE%E3%83%B3%E3%82%AE%E3%83%B3%E3%83%A1%E3%83%AD%E3%83%A1%E3%83%AD%EF%BC%81%E6%BF%83%E7%B8%AE%E4%BD%93%E6%B6%B2%E3%81%BE%E3%81%BF%E3%82%8C%E6%84%9F%E5%BA%A6%E6%9A%B4%E8%B5%B0%E4%B8%AD%E5%87%BA%E3%81%97%E3%83%A1%E3%83%B3%E3%82%BA%E3%82%A8
   ```
   响应片段:
   ```text
   err not serarch
   ```

20. 🔞丝袜资源
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
