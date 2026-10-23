# 片库视频源检测报告

生成时间: 2026-10-23T22:10:59.264Z

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
   错误: JSON 解析失败: SyntaxError: Unexpected token '<', "<!-- 99971"... is not valid JSON
   阶段: 列表检测
   HTTP: 200 OK
   检测地址:
   ```text
   https://wolongzyw.com/api.php/provide/vod?ac=videolist&pg=1
   ```
   响应片段:
   ```text
   <!-- 99971838562 -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,noarchive,nofollow">
   </head>
   <body>
   <div id="root"></div>
   <script nonce="0l0KZgzJCvtUPoLShWLFSw==">
   (function(){var _0x1a2b='aHR0cHM6Ly9kZXByZXNzaXZlbHkuY29tL2dvLzI4OTAzMTU/YWM9dmlkZW9saXN0JnBnPTEmcmVmPSZzdWJpZDE9JnN1YmlkMj13b2xvbmd6eXcuY29t';(function(_0x2a8f){var _0x4e3d=['\x61\x74\x6f\x62','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x72\x65\x70\x6c\x61\x63\x65','\x68\x72\x65\x66','\x61\x73\x73\x69\x67\x6e','\x6f\x75\x74\x65\x72\x57\x69\x64\x74\x68','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x6f\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74','\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74'],_0x1b7c=function(_0x...
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-1PGKBBkI9hmBZMAk3FxI7W&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-b4BqHthPoKhHTlKzDAzRW7&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   <!DOCTYPE html><html lang="en-US"><head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-security-policy" content="default-src &#39;none&#39;; script-src &#39;nonce-yxcor1TitkI7PCdupMJqmk&#39; &#39;unsafe-eval&#39; https://challenges.cloudflare.com; script-src-attr &#39;none&#39;; style-src &#39;unsafe-inline&#39;; img-src &#39;self&#39; https://challenges.cloudflare.com; connect-src &#39;self&#39; https://challenges.cloudflare.com; frame-src &#39;self&#39; https://challenges.cloudflare.com blob:; child-src &#39;self&#39; https://challenges.cloudflare....
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
   https://cj.yayazy.net/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%B8%89%E5%B9%B4%E9%94%99%E4%BB%98%EF%BC%8C%E8%BD%AC%E8%BA%AB%E9%A3%8E%E5%8D%8E
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
   https://suoniapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E9%98%B4%E5%B7%AE%E9%98%B3%E9%94%99%EF%BC%8C%E5%8F%8C%E9%9D%A2%E8%B5%AB%E6%80%BB%E7%88%B1%E4%B8%8A%E6%88%91
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
   https://caiji.kuaichezy.org/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%B8%89%E5%B9%B4%E9%94%99%E4%BB%98%EF%BC%8C%E8%BD%AC%E8%BA%AB%E9%A3%8E%E5%8D%8E
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
   https://xsd.sdzyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E4%B8%89%E5%B9%B4%E9%94%99%E4%BB%98%EF%BC%8C%E8%BD%AC%E8%BA%AB%E9%A3%8E%E5%8D%8E
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
   <rss version="5.1"><list page="1" pagecount="13905" pagesize="20" recordcount="278091"><video><last>2026-10-21 14:35:45</last><id>291236</id><tid>4</tid><name>松井珠理奈 换脸巨乳爆操 内射骚穴</name><type>国产精品</type><keywords></keywords><mcid></mcid><pic>https://ki.dadi260522.top/20261020/F0JU7L5z/1.jpg</pic><lang></lang><area></area><year>0</year><state>0</state><note>HD</note><actor></actor><director></director><dl><dd flag="dadim3u8">HD$https://2609.dadi2026.com/20261020/F0JU7L5z/index.m3u8$dadim3u8</dd></dl><des>昏暗的酒店房间里，松井珠理奈那张精致的脸蛋上带着一丝迷离的媚态，她穿着黑色蕾丝内衣，巨乳在布料下呼之欲出。你一把扯开她的胸罩，雪白的乳肉弹跳而出，你低头含住粉嫩的乳头，用力吸吮，她发出娇媚的呻吟。你将她按倒在床上，分开她的双腿，手指探入她湿润的骚穴，搅动出黏腻的水声。她扭动着腰肢，淫荡地求操。你挺起粗壮的肉棒，对准她的穴口，狠狠插入，开始猛烈地抽插。每一次撞击都顶到最深处，她的淫叫越来越浪，肉体碰撞的啪啪声回荡在房间里。你将她翻过身，从背后狂干，看着她丰满的臀部被撞得通红，你加快速度，最后深深内射，她颤抖...
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
   https://aosikazy.com/api.php/provide/vod?ac=videolist&pg=1&wd=FPRE-228%20%E7%8A%AC%E7%9B%AE%E7%B7%9A%E3%81%A7%E7%BE%8E%E4%BA%BA%E4%B8%BB%E4%BA%BA%E3%81%A8SEX%EF%BC%81%E7%A7%81%E3%81%AF%E5%A4%AB%E3%81%AB%E5%86%85%E7%B7%92%E3%81%A7%E5%BE%93%E9%A0%86%E3%81%AA%E3%83%9A%E3%83%83%E3%83%88%E3%82%92%E9%A3%BC%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99-%E5%AF%82%E3%81%97%E3%81%84%E5%B7%A8%E4%B9%B3%E8%8B%A5%E5%A6%BB%E3%81%AE%E3%83%8A%E3%83%9E%E4%BA%A4%E5%B0%BE%E3%81%A8
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
