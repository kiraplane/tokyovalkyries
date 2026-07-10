基于当前这个项目的代码框架背后的模版，做一个新项目，是关于
tokyo valkyries这个游戏的攻略站。所以我希望满足用户的攻略相关的需求。网站的名称就叫
tokyo valkyries
本项目网站的网址域名为：www.tokyovalkyries.wiki
网站的关键词要有tokyo valkyries、tokyo valkyries wiki等
将原文件夹内容做改造，没用的内容剔除，只服务tokyovalkyries

1.请搜索下这个游戏，基于这个游戏的长尾搜索词，看下我们应该如何做网站内容，请用skill中的api去尝试获取长尾词，api的key，可以参考 [$wiki-site-growth-iteration](/Users/he/.codex/skills/wiki-site-growth-iteration/SKILL.md) skill

2.之前有个成熟的攻略站项目，也可以学习其优秀的点，主要是其guide文章和youtube的结合方式。
/Users/he/Documents/AI/vibe coding/kingshot/kingshotguide

3.官方商店是：https://store.steampowered.com/app/4093240/_/
基于这个游戏的风格，给网站确定个配色和风格。
这个应该是官网，请从官网爬取更多的数据、工具、卡牌和信息，在本站进行处理展示
https://qureate.co.jp/TokyoValkyries/en/

4.如果需要数据、工具和icon，可以自行去一些攻略站搜索
如果某些需求搜索词，没有数据支持，可以搜索youtube视频，将视频翻译成中文，并写成文章即可
我建议好好通过关键词，搜索下其他wiki或database站点，看是否有数据

6.开发完成后在github上创建仓库tokyovalkyries，将本项目上传
7.在cloudflare上面的worker创建项目tokyovalkyries部署并关联域名，域名我已经加好
8.去ga上创建媒体资源，授权方式可以在ga-gtm文件夹中获取。
