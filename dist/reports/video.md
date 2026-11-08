# 片库视频源检测报告

生成时间: 2026-11-08T07:03:43.751Z

总数: 56
可用: 51
失败: 5
普通源: 26
成人源: 25

## 失败项

1. 茅台资源
   地址:
   ```text
   https://caiji.maotaizy.cc/api.php/provide/vod
   ```
   错误: 请求失败: TypeError: fetch failed
   阶段: 列表检测
   检测地址:
   ```text
   https://caiji.maotaizy.cc/api.php/provide/vod?ac=videolist&pg=1
   ```
   原因: ECONNRESET | Error | Client network socket disconnected before secure TLS connection was established

2. 天涯资源
   地址:
   ```text
   https://tyyszyapi.com/api.php/provide/vod
   ```
   错误: JSON 解析失败: SyntaxError: Unexpected token '暂', "暂不支持搜索" is not valid JSON
   阶段: 搜索检测
   HTTP: 200
   检测地址:
   ```text
   https://tyyszyapi.com/api.php/provide/vod?ac=videolist&pg=1&wd=%E5%87%A4%E8%B5%B7%E4%BA%8E%E6%B8%8A
   ```
   响应片段:
   ```text
   暂不支持搜索
   ```

3. 🔞--AIvin-
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

4. 🔞奶香资源
   地址:
   ```text
   https://Naixxzy.com/api.php/provide/vod
   ```
   错误: 请求失败: AbortError: This operation was aborted
   阶段: 列表检测
   检测地址:
   ```text
   https://Naixxzy.com/api.php/provide/vod?ac=videolist&pg=1
   ```

5. 🔞大地资源
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
   <rss version="5.1"><list page="1" pagecount="13996" pagesize="20" recordcount="279905"><video><last>2026-11-07 16:35:04</last><id>293051</id><tid>3</tid><name><![CDATA[[无码] 极品骚妻被干到失神 内射爆浆狂颤]]></name><type>欧美精品</type><keywords></keywords><mcid></mcid><pic>https://ki.dadi260522.top/upload/vod/20261107-1/27ad938b6ec781dc0ec72b9b7f153a2a.jpg</pic><lang></lang><area></area><year>0</year><state>0</state><note><![CDATA[HD]]></note><actor><![CDATA[]]></actor><director><![CDATA[]]></director><dl><dd flag="dadim3u8"><![CDATA[HD$https://2609.dadi2026.com/20261107/uAODedln/index.m3u8$dadim3u8]]></dd></dl><des><![CDATA[她是个看似端庄的人妻，但骨子里藏着淫荡的渴望。今天，她穿着黑色蕾丝内衣，巨乳在布料下呼之欲出。当粗壮的肉棒插入她的骚穴时，她忍不住发出浪叫，腰肢疯狂扭动。每一次抽插都带出晶莹的汁液，肉体碰撞声回荡在房间。她被干到双眼翻白，淫水四溅，最后在猛烈内射中达到高潮，全身痉挛，彻底沦陷在快感里。]]><...
   ```
