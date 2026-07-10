# Tokyo Valkyries Wiki PRD 与实施计划

更新日期：2026-07-10  
项目名：`tokyovalkyries`  
站点名：Tokyo Valkyries  
目标域名：https://www.tokyovalkyries.wiki  
游戏开发与发行：qureate

## 1. 产品目标

把现有 Wiki 模板迁移为只服务 **Tokyo Valkyries** 的英文攻略站。首发站点优先解决刚发售玩家最明确的任务：

- 搞懂三人队伍与 Resolve / Courage / Hope / Dawn 卡牌触发；
- 根据敌方 intent 和实际被攻击角色安排防御；
- 做卡牌拿取、跳过、升级和牌组精简决策；
- 在 Battle、Elite、Shop、Cafe、Locker、Anomaly、Boss 节点间规划路线；
- 理解 Cursed Sword、额外属性、Leader 与 Special Skill；
- 查看 9 名官方角色与声优资料；
- 判断 Steam / Nintendo Switch 版本、PC 配置与是否值得购买；
- 只通过官方渠道下载，不承接 APK、破解、脚本或伪造 codes。

## 2. 事实基线

- 官网：https://qureate.co.jp/TokyoValkyries/en/
- Steam：https://store.steampowered.com/app/4093240/Tokyo_Valkyries/
- Nintendo：https://store-jp.nintendo.com/item/software/D70010000121929
- 官方英文预告：https://www.youtube.com/watch?v=RNgGcErvGZE
- 发售：Steam 美区显示 2026-07-08，qureate 全球日程显示 2026-07-09；属于同一全球发售窗口。
- 类型：单机 roguelite deckbuilder / card battler / RPG / strategy。
- 平台：Windows PC（Steam）与 Nintendo Switch。
- 文本：英语、日语、简中、繁中；完整语音为日语。
- 价格：官网标注 $22.99；实时地区价格与折扣以商店为准。
- 角色：Haruka Fuchi、Artesia、Tsubasa Hikami、Anna Keijima、Mamika Kanesaki、Raimu Shirogane、Suzuno Kosaka、Tamaki Tamagoe、Karin Mikado。

## 3. 长尾词采集方法

按 Wiki Site Builder 规范执行 Serper balanced discovery：

- 1 次 `tokyo valkyries` autocomplete；
- 1 次 head keyword related searches / PAA；
- 不做 modifier autocomplete；
- 不批量验证每个候选词的 SERP；
- 高价值词再用普通网页搜索、Steam、官方站和 YouTube 验证。

Serper 直接出现或关联的词为：

- `tokyo valkyries release date`
- `tokyo valkyries switch`
- `tokyo valkyries game`
- `tokyo valkyries steam`
- `tokyo valkyries review`
- `tokyo valkyries roguelite deckbuilder`

## 4. 关键词矩阵

| Keyword | Intent | Route | Priority | Status | Evidence / Notes |
| --- | --- | --- | --- | --- | --- |
| tokyo valkyries | 游戏实体与入口 | `/` | P0 | keep | 用户需求、官网、Steam、Serper |
| tokyo valkyries wiki | 结构化攻略站 | `/` | P0 | keep | 用户明确要求；首页承担 hub |
| tokyo valkyries guide | 浏览攻略 | `/guides` | P0 | keep | 发售后核心意图 |
| tokyo valkyries release date | 是否已发售 | `/release-date` | P0 | keep | autocomplete + related |
| tokyo valkyries switch | Switch 是否有、版本差异 | `/switch-vs-steam` | P0 | keep | autocomplete + 官网商店链接 |
| tokyo valkyries steam | PC / Steam 入口 | `/platforms` | P0 | keep | autocomplete + Steam SERP 第一位 |
| tokyo valkyries review | 是否值得买 | `/review` | P0 | keep | related searches + 首发 Steam reviews |
| tokyo valkyries roguelite deckbuilder | 玩法循环 | `/guides/beginner-guide` | P1 | keep | related searches + 官方描述 |
| tokyo valkyries characters | 角色与声优 | `/characters` | P1 | keep | 官网有 9 个完整资料 |
| tokyo valkyries attributes | 四属性与触发 | `/combat-attributes` | P1 | keep | 官方 system + 实机截图/评论 |
| tokyo valkyries deck building | 牌组策略 | `/deck-building` | P1 | keep | 核心玩法 + 首发痛点 |
| tokyo valkyries map routes | 路线节点选择 | `/map-routes` | P1 | keep | 官网列出 7 类节点 |
| tokyo valkyries cursed sword leader | 强化、Leader、Special Skill | `/cursed-swords-leaders` | P1 | keep | 官网明确说明 |
| tokyo valkyries story | 世界观与无剧透简介 | `/story` | P1 | keep | 官网 story / character 资料充足 |
| tokyo valkyries system requirements | PC 能否运行 | `/system-requirements` | P1 | keep | Steam 精确配置表 |
| tokyo valkyries download | 官方下载 | `/download` | P1 | keep | 普通发售游戏安全意图 |
| tokyo valkyries codes | 兑换码 | none | P3 | ignore | 付费单机，未发现 code 系统或搜索信号 |
| tokyo valkyries tier list | 角色/卡牌排行 | none | P3 | watch | 数据与社区共识不足，不能伪造 |
| tokyo valkyries card database | 完整卡表 | none | P2 | watch | 没有可靠完整公开数据；需维护方案 |

## 5. 竞品与内容面基准

### 当前 SERP

本作发售仅数天，没有发现成熟的 Tokyo Valkyries 专属 wiki、database、calculator 或 tracker。当前主要结果：

- 官方 Steam 与 qureate：事实、商店、角色、系统与素材；
- Gematsu：官方系统信息的媒体聚合；
- Metacritic / IGDB / Kotaku game page：游戏实体与 review 入口；
- Steam Community / GameFAQs：早期社区与未来问题入口；
- YouTube：官方预告和少量 PC / Switch 首发实机。

### 必须匹配

- Steam / Switch / release date / review 等当前搜索词；
- 官方 9 角色资料；
- 四属性、敌方 intent、地图 7 节点、Cursed Sword / Leader 机制；
- 首页、guide hub、文章相关链接、sitemap、schema、canonical。

### 可以做得更好

- 把散落的官方系统描述转成明确的玩家决策顺序；
- 不用转录稿式文章，YouTube 只用于实机交叉验证；
- 把角色资料集中成一页 ItemList，避免 9 个薄页面；
- 对首发评价明确区分稳定事实与 early impressions；
- 对 APK、破解、codes 和 tier list 设置安全/可信边界。

### 暂不开发

- 完整 card database；
- 抽取游戏文件的 relic / event / enemy 数据库；
- 自动路线图、概率模型或 tier engine；
- codes 页面；
- 批量多语言站点。

## 6. YouTube 决策表

| Video / Source | Search Intent | Action | Target Page | Reason |
| --- | --- | --- | --- | --- |
| qureate `RNgGcErvGZE` | 游戏身份、机制、角色 | expand | `/`, beginner, Cursed Sword, story | 官方英文预告，可信度最高 |
| Hikikomori Gaming `K0cfFD_WErs` | PC 英文开局实机 | expand | platform, review | 可验证英文 UI 与控制流程 |
| Hikikomori Gaming `sDmUs0Nfu_4` | 中段战斗与组队 | expand | combat, deck | 首发窗口已有 1K+ 浏览；只作实机交叉验证 |
| 七代十夜 `YkzVEeBtx4c` | Switch 实机 | watch | Switch vs Steam | 日语长直播，当前不单独拆 walkthrough |

## 7. 首发页面

英文核心页面 19 个（含法律页），符合资料较薄新游戏 8–15 个核心内容页原则：

- `/`
- `/guides`
- `/guides/beginner-guide`
- `/combat-attributes`
- `/deck-building`
- `/map-routes`
- `/cursed-swords-leaders`
- `/characters`
- `/story`
- `/release-date`
- `/platforms`
- `/switch-vs-steam`
- `/system-requirements`
- `/review`
- `/download`
- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

## 8. 数据与组件

```text
src/data/tokyovalkyries/
  types.ts
  sources.ts
  characters.ts
  systems.ts
  guides.ts
  localized.ts

src/components/tokyovalkyries/
  home-page.tsx
  guide-article.tsx
  characters-page.tsx
  wiki-navigation.tsx
  faq-section.tsx
```

## 9. 视觉方向

从官方战斗 UI 和东京夜景提取：

- 背景：`#070711`
- 面板：`#111126`
- 边框：`#3b2b62`
- 主强调：neon pink `#ff4fd8`
- 次强调：cyan `#54e7ff`
- 属性辅助：green `#62e6a7`、gold `#ffd166`、violet `#8d7cff`
- 布局：信息密集 Wiki，不使用大面积空白 SaaS hero；桌面 sticky 分组 sidebar，移动端折叠菜单。

## 10. SEO 与 Schema

- 首页：WebSite、Organization、VideoGame、VideoObject。
- Guide hub：ItemList。
- Character roster：ItemList + BreadcrumbList。
- Article：Article + BreadcrumbList。
- 每页 `constructMetadata`、canonical、OpenGraph。
- `robots.ts` 与 sitemap 覆盖全部核心页。
- 首页 description 控制在 160 字符以内并同步 manifest/messages。

## 11. 验证与上线

本地：

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm next:build
pnpm build
```

浏览器检查：桌面首页、移动首页、guide hub、长标题文章、characters、sitemap、robots，以及新旧路由残留。

上线：

- GitHub 仓库：`tokyovalkyries`
- Cloudflare Worker：`tokyovalkyries`
- 自定义域名：`tokyovalkyries.wiki` 与 `www.tokyovalkyries.wiki`
- canonical：`https://www.tokyovalkyries.wiki`
- GA4 Property：`tokyovalkyries.wiki`
