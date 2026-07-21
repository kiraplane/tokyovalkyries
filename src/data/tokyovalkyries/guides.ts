import { siteDescription } from './sources';
import type { Guide, GuideVideo } from './types';

const checkedAt = '2026-07-21';
const publishedAt = '2026-07-10';

const steamScreenshot = (asset: string) =>
  `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4093240/${asset}`;

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hq720.jpg`;

const videos: Record<string, GuideVideo> = {
  officialTrailer: {
    id: 'RNgGcErvGZE',
    title: 'Tokyo Valkyries Trailer ENG',
    channel: 'qureate official channel',
    url: 'https://www.youtube.com/watch?v=RNgGcErvGZE',
    thumbnailUrl: youtubeThumbnail('RNgGcErvGZE'),
    checkedAt,
  },
  pcOpening: {
    id: 'K0cfFD_WErs',
    title: 'Tokyo Valkyries (PC) (English) #1',
    channel: 'Hikikomori Gaming',
    url: 'https://www.youtube.com/watch?v=K0cfFD_WErs',
    thumbnailUrl: youtubeThumbnail('K0cfFD_WErs'),
    viewCountLabel: 'Launch-day English PC playthrough',
    checkedAt,
  },
  pcRun: {
    id: 'sDmUs0Nfu_4',
    title: 'Tokyo Valkyries (PC)(English) #3',
    channel: 'Hikikomori Gaming',
    url: 'https://www.youtube.com/watch?v=sDmUs0Nfu_4',
    thumbnailUrl: youtubeThumbnail('sDmUs0Nfu_4'),
    viewCountLabel: '1K+ views during the launch window',
    checkedAt,
  },
};

export { siteDescription };

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Tokyo Valkyries Beginner Guide: Build a Run That Can Defend Itself',
    seoTitle: 'Tokyo Valkyries Beginner Guide - Deck, Party and Route Tips',
    seoDescription:
      'Start Tokyo Valkyries with a reliable three-person party, focused deck, target-aware defense, safer route and clear Cursed Sword plan.',
    summary:
      'Your first successful run comes from matching the deck to the party, reading enemy targets, skipping weak rewards and arriving at the boss with health left.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: videos.officialTrailer.thumbnailUrl,
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Tokyo Valkyries beginner guide',
      'Tokyo Valkyries gameplay English',
      'Tokyo Valkyries deck guide',
    ],
    sourceNotes:
      'Built from the official system description, Steam screenshots and launch-day English gameplay. Early Steam reviews were used only to identify common mistakes.',
    video: videos.officialTrailer,
    tags: ['Beginner', 'Party', 'Deck'],
    relatedRoutes: [
      '/combat-attributes',
      '/deck-building',
      '/map-routes',
      '/cursed-swords-leaders',
    ],
    body: [
      {
        heading: 'Start with one plan, not a pile of good-looking cards',
        paragraphs: [
          'Tokyo Valkyries connects its three-character party directly to the deck. Resolve, Courage, Hope and Dawn are not decorative labels: a card calls matching party members into action. That means a card that looks modest can become a major turn when several attribute icons match, while a rare card can be awkward when only one party member supports it.',
          'Before the first reward screen, decide which one or two attribute lanes will carry the run. You can still take an off-color defensive answer when it saves a vulnerable character, but every new card should explain its place in the plan. If it does not improve damage, defense, draw stability or the next boss matchup, skipping it is a real upgrade.',
        ],
        bullets: [
          'Count matching party icons before comparing two cards.',
          'Keep one dependable way to defend each party member who can be targeted.',
          'Prefer repeatable synergy over collecting every high-rarity reward.',
          "Remove or stop adding cards that delay the deck's best cycle.",
        ],
      },
      {
        heading: 'Enemy intent tells you which card is actually valuable',
        paragraphs: [
          'The game shows intended enemy actions before you end the turn. Read both the action and its target. A block or parry effect tied to one girl does not solve an attack aimed at another, and spending all energy on damage can turn a clean run into a health crisis before the next Cafe.',
          'Use a simple order: identify lethal or high-damage intent, cover the correct target, then spend the remaining energy on damage or setup. When an enemy is close enough to defeat before it acts, offense becomes defense. When the kill is uncertain, preserve the party instead of betting the run on an optimistic damage roll.',
        ],
      },
      {
        heading: 'Treat health as route currency',
        paragraphs: [
          'A run is not won by taking the most dangerous node every time. Health determines whether an Elite is a profitable challenge, whether a Shop purchase can be delayed, and whether an Anomaly is worth the uncertainty. Look ahead to the next Cafe and Boss before choosing a branch.',
          'Normal Battles are useful checks of deck stability. Elites should be deliberate: enter when the opening hand can be imperfect without collapsing. Shops are best when you know the missing answer you want. Cafes convert route planning into recovery or card strength, while Lockers and Anomalies trade certainty for possible upside.',
        ],
      },
      {
        heading:
          'Build toward the boss instead of winning each room beautifully',
        paragraphs: [
          'Do not spend scarce resources only to make an easy battle faster. Save emergency items, health and flexible cards for the point where the deck is most likely to fail. A boss-ready deck has a repeatable damage engine, target-correct defense, and enough draw quality to survive a weak first hand.',
          'The best checkpoint is the turn cycle. Ask how many turns the deck needs to reach its strongest card sequence, what happens when the wrong character is targeted during that setup, and whether one bad draw forces item use. Fix that weakness before adding more win-more damage.',
        ],
      },
      {
        heading: 'Use the Cursed Sword reward to clarify the next run',
        paragraphs: [
          "Pulling a Cursed Sword strengthens a selected girl, adds an attribute and allows her to lead the party. Leaders gain a special skill, so the choice changes both attribute counts and the party's emergency button. It should reinforce a working plan rather than rescue a deck with no identity.",
          "After a clear, note which attribute cards repeatedly solved turns and which party member struggled to stay protected. The next leader and deck should answer that evidence. This feedback loop is more dependable than copying an early tier list built before the game's systems are fully documented.",
        ],
      },
    ],
    faq: [
      {
        question: 'What should I prioritize first in Tokyo Valkyries?',
        answer:
          'Choose a focused attribute plan, make sure every likely target can be defended, and take the safer route until the deck proves it can handle an Elite.',
      },
      {
        question: 'Should I take every card reward?',
        answer:
          'No. Skip cards that dilute the best turn cycle or add an attribute the party cannot trigger efficiently.',
      },
      {
        question: 'Why is one party member losing health so quickly?',
        answer:
          'Check enemy target icons and the exact character protected by each defensive card. Character-specific defense does not automatically cover the whole team.',
      },
      {
        question: 'Is there one best beginner party?',
        answer:
          'A universal best party is not reliably established. A coherent party whose attribute icons support the cards you actually draw is safer than an unsupported ranking.',
      },
    ],
  },
  {
    slug: 'combat-attributes',
    path: '/combat-attributes',
    title: 'Tokyo Valkyries Combat and Attributes Guide',
    seoTitle: 'Tokyo Valkyries Attributes - Resolve, Courage, Hope and Dawn',
    seoDescription:
      'Learn how Tokyo Valkyries cards trigger party members, how enemy intent changes defense, and how Resolve, Courage, Hope and Dawn shape a run.',
    summary:
      'Combat is a target-reading puzzle: card attributes decide who acts, enemy intent decides who needs protection, and energy decides how much of the plan fits this turn.',
    category: 'Combat',
    difficulty: 'Beginner',
    coverImageUrl: steamScreenshot(
      'f5dee22d83a141b32268a78d720b667945a3b1b1/ss_f5dee22d83a141b32268a78d720b667945a3b1b1.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'Tokyo Valkyries combat gameplay',
      'Tokyo Valkyries attributes',
      'Tokyo Valkyries party cards',
    ],
    sourceNotes:
      'Official rules establish the four attributes and intent display. Steam screenshots and multiple launch reviews cross-check multi-icon triggers and target-specific defense.',
    video: videos.pcRun,
    tags: ['Resolve', 'Enemy intent', 'Energy'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/deck-building',
      '/characters',
      '/map-routes',
    ],
    body: [
      {
        heading: 'A card is also a command to the party',
        paragraphs: [
          'Every playable character is connected to one or more of four attributes: Resolve, Courage, Hope and Dawn. Playing a card sends the matching action through the party members who carry that attribute. The icons under each character are therefore the fastest way to estimate the real value of a card in the current formation.',
          'Think in trigger count rather than card rarity alone. If several icons match, one energy can produce repeated value. If the party barely supports the attribute, the same card may be inefficient. Cursed Sword progression can add an attribute, which is why an awakening or leader choice may change the deck more than a single card reward.',
        ],
      },
      {
        heading: 'Read the entire intent line before spending energy',
        paragraphs: [
          'Enemy intent shows what an opponent plans to do. The important detail is not only attack versus defense or setup; it is also which party member is exposed. A perfect guard on Haruka does nothing for a hit aimed at Tsubasa if the effect is character-specific.',
          'Resolve threats in three passes: check whether any target can be defeated before acting, protect the party member who otherwise takes unacceptable damage, then use remaining energy for damage, draw or scaling. This order prevents the common mistake of playing an attractive combo and discovering too late that the wrong girl was protected.',
        ],
      },
      {
        heading: 'Energy is a turn budget, not a score to empty',
        paragraphs: [
          'Spending every point is not automatically correct. A zero-cost card can still worsen a future draw, and a cheap setup may be pointless if the enemy must be stopped now. Evaluate the result of the full hand, not each card in isolation.',
          'When two sequences spend the same energy, prefer the one that leaves the party safer and the deck easier to cycle. A repeatable two-card line is often more useful than a spectacular sequence that depends on drawing several specific colors together.',
        ],
      },
      {
        heading: 'Use formation shapes to make the draw pile predictable',
        paragraphs: [
          'A concentrated party can multiply a narrow set of cards, while a mixed party offers more answers but asks the deck to support more colors. Neither is automatically correct. The stronger formation is the one whose worst draw can still respond to the visible enemy intent.',
          'Before a run, look at the icon distribution and describe the formation in one sentence: concentrated damage with limited coverage, balanced two-color control, or flexible three-color answers. If the deck rewards contradict that sentence, skip them or change the party deliberately instead of drifting by accident.',
        ],
      },
      {
        heading: 'Test changes against one repeatable question',
        paragraphs: [
          'When a run fails, do not change the party, deck and route at once. Identify the first repeated failure: not enough damage before a boss scales, one party member cannot be defended, the hand clogs with off-plan cards, or health is spent too early on Elites.',
          'Change the smallest part that addresses the failure and run again. That produces a usable combat model much faster than chasing a launch-week ranking whose assumptions may not match your unlocked leaders or card pool.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are the four Tokyo Valkyries attributes?',
        answer:
          'They are Resolve, Courage, Hope and Dawn. Cards and party members use these attributes to determine who acts when a card is played.',
      },
      {
        question: 'Why does the same card feel stronger in another party?',
        answer:
          'The number and arrangement of matching attribute icons changes how efficiently the party converts that card into actions.',
      },
      {
        question: 'Can one defense card protect everyone?',
        answer:
          'Only when its effect explicitly applies broadly. Many effects are tied to a specific character, so always compare the card with the enemy target.',
      },
    ],
  },
  {
    slug: 'deck-building',
    path: '/deck-building',
    title:
      'Tokyo Valkyries Deck Building Guide: When to Take, Skip and Upgrade',
    seoTitle: 'Tokyo Valkyries Deck Building Guide - Cards and Synergy',
    seoDescription:
      'Build a focused Tokyo Valkyries deck by matching party attributes, keeping target-aware defense and skipping rewards that weaken your draw cycle.',
    summary:
      'The deck gets better when every draw advances one plan. Take cards that improve the main attribute engine, cover a real weakness or shorten the boss clock.',
    category: 'Decks',
    difficulty: 'Intermediate',
    coverImageUrl: steamScreenshot(
      'bcd8dc4d4895d94d5ef42fe28fc45c0d17d51752/ss_bcd8dc4d4895d94d5ef42fe28fc45c0d17d51752.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'Tokyo Valkyries deck building',
      'Tokyo Valkyries cards gameplay',
      'Tokyo Valkyries best deck',
    ],
    sourceNotes:
      'Uses the card/party rules, current card library and launch gameplay. Expand the database and planner as more complete effect text is confirmed.',
    video: videos.pcRun,
    tags: ['Cards', 'Synergy', 'Upgrades'],
    relatedRoutes: [
      '/cards',
      '/deck-builder',
      '/combat-attributes',
      '/map-routes',
    ],
    body: [
      {
        heading: 'Give every card a job before it enters the deck',
        paragraphs: [
          "A useful deck has jobs, not just colors. It needs a way to finish fights, a way to survive the party's exposed turns, and enough consistency to find those answers before health disappears. Attribute matching makes those jobs more efficient, but only if the party actually carries the icons the card needs.",
          'Classify a reward immediately: core engine, defense coverage, draw or setup, boss solution, or no clear job. The last category should usually be skipped. A thinner deck returns to its best cards faster and makes enemy intent easier to answer because the next draw is less random.',
        ],
      },
      {
        heading: 'Concentrate attributes without leaving a target unprotected',
        paragraphs: [
          'Stacking matching attributes can create powerful repeated actions. The danger is building a deck that only protects or enables the characters carrying the main color. Enemy intent can punish the neglected party member even while the damage engine looks excellent.',
          'Keep the core narrow, then add the minimum number of cards required to cover target-specific emergencies. A mixed defensive answer may deserve a slot even when it is not part of the main damage color, because losing a party member destroys more value than one imperfect draw.',
        ],
      },
      {
        heading: 'Skip rewards that only make the winning turn prettier',
        paragraphs: [
          'Win-more cards are tempting: they produce a bigger number when the full setup already works, but they do nothing when the opening hand is weak or the enemy targets the wrong girl. Prefer a card that stabilizes the first cycle, reduces energy pressure or makes the engine start earlier.',
          'Use the boss as the test. If the new card does not shorten the time to safety, improve the worst hand, or answer a specific boss problem, it may not deserve space. Skipping is especially valuable after the deck already has a clear identity.',
        ],
      },
      {
        heading: 'Upgrade bottlenecks, not favorites',
        paragraphs: [
          'At a Cafe, compare the deck before choosing recovery or an upgrade. Upgrade the card that changes a breakpoint: enough block to fully cover a common hit, enough damage to remove an enemy before its turn, or enough consistency to keep an important effect from exhausting too early.',
          'If the party will not survive to use the improved card, recover instead. Health is not a failure state; it is the resource that allows the deck to reach the boss. A modest upgrade with a real breakpoint is better than improving a flashy card whose base version already wins the same turns.',
        ],
      },
      {
        heading: 'Audit the deck after every difficult fight',
        paragraphs: [
          'After an Elite or Boss, remember which card sat unused, which target lacked protection and which sequence consumed too much energy. That evidence should control the next reward. Do not add a new theme because one card looks exciting if the current deck still has an unsolved weakness.',
          'The launch card pool is still being documented, so this site does not claim an exhaustive best-card list. The dependable method is to build around visible party icons, concrete effects and the route in front of you.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is a smaller deck always better?',
        answer:
          'A smaller deck is usually more consistent, but it still needs enough defense and utility to answer different enemy targets. Thin the deck around a complete plan, not damage alone.',
      },
      {
        question: 'Should I always pick rare cards?',
        answer:
          'No. Rarity does not guarantee attribute fit, energy efficiency or a useful job in the current deck.',
      },
      {
        question: 'Which card should I upgrade first?',
        answer:
          'Upgrade the card that changes a survival or damage breakpoint, improves the worst draw, or accelerates the core engine.',
      },
    ],
  },
  {
    slug: 'map-routes',
    path: '/map-routes',
    title: 'Tokyo Valkyries Map Route Guide: Choose the Next Node Deliberately',
    seoTitle: 'Tokyo Valkyries Map Guide - Battles, Elites, Shops and Cafes',
    seoDescription:
      'Plan Tokyo Valkyries routes across Battle, Elite, Shop, Cafe, Locker, Anomaly and Boss nodes without spending health before it matters.',
    summary:
      'Choose the route by what the deck lacks and how much health the party can safely convert into rewards—not by chasing every Elite or event.',
    category: 'Routes',
    difficulty: 'Intermediate',
    coverImageUrl: steamScreenshot(
      '31628e8070d668412896a241a089625429db631c/ss_31628e8070d668412896a241a089625429db631c.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Tokyo Valkyries map route',
      'Tokyo Valkyries Elite Shop Cafe',
      'Tokyo Valkyries walkthrough',
    ],
    sourceNotes:
      'Official site defines all seven node types. Route advice is conservative and avoids claiming hidden probabilities or a fixed map formula.',
    tags: ['Map', 'Elites', 'Cafe'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/deck-building',
      '/combat-attributes',
      '/cursed-swords-leaders',
    ],
    body: [
      {
        heading: 'Look two decisions ahead',
        paragraphs: [
          'The correct node depends on what follows it. An Elite can be reasonable when a Cafe is close, but dangerous when the only recovery is behind another fight. A Shop is valuable when coins can buy a missing answer, not merely because it is available.',
          'Before moving, scan the visible route and identify the next recovery, the next forced combat, and the last chance to improve before the Boss. Choose a branch that keeps at least one recovery option open until the deck proves it can absorb a bad draw.',
          'Coins, items and card upgrades belong in the same route calculation. A rich party with no Shop ahead should value immediate survivability, while a poor party approaching a Shop may need Battles that create purchasing power. The map is a resource schedule, not only a sequence of fights.',
        ],
      },
      {
        heading: 'Normal Battles are stability tests',
        paragraphs: [
          'A regular Battle should reveal whether the deck can defend the correct target and cycle into its damage plan without using emergency resources. If a normal room causes heavy health loss, the answer is usually not another Elite. Fix defense, draw consistency or route risk first.',
          "Use these fights to learn the party's weakest opening hand. If the deck only works when a particular card appears immediately, value Shops, Cafes and safer rewards that reduce that dependency.",
        ],
      },
      {
        heading: 'Elites are investments with a health price',
        paragraphs: [
          'An Elite is worth considering when its reward strengthens future fights more than the expected damage weakens them. Enter with a clear defensive cycle, enough health for an unfavorable first hand, and a plan for the next node.',
          'Early community impressions warn that some optional challenges can punish an unprepared opening party. Treat that as a routing lesson rather than a fixed blacklist: check current health and deck readiness before accepting a fight whose reward is not required to finish the run.',
        ],
      },
      {
        heading: 'Shops, Cafes and Lockers solve different problems',
        paragraphs: [
          'A Shop is controlled choice: spend coins to buy the exact kind of card or item the plan lacks. A Cafe is controlled stability: restore stamina or improve a card. A Locker is less predictable value, useful when the deck is flexible enough to accept what appears.',
          'Do not spend at a Shop just to avoid leaving with coins. Do not upgrade at a Cafe when recovery is the only way to survive the next forced fight. Do not take a Locker reward when it opens a third or fourth attribute lane the party cannot support.',
        ],
      },
      {
        heading:
          'Anomalies are strongest when the run can tolerate uncertainty',
        paragraphs: [
          'Anomaly outcomes vary, so their value rises when the party has health, items and a stable deck. When the run is already fragile, a predictable Battle or Cafe may be the better strategic choice even if the event is more interesting.',
          'The Boss is the route endpoint and the standard for every earlier decision. Arrive with enough health to survive the opening cycle, not merely the highest possible reward count. A route that reaches the Boss consistently teaches more than one overloaded run that collapses at the door.',
          'When two branches look equal, choose the one that preserves a later decision. Flexibility has value: seeing one more reward, enemy pattern or health result before committing reduces the chance that an early guess controls the entire run.',
        ],
      },
    ],
    faq: [
      {
        question: 'What node types are in Tokyo Valkyries?',
        answer:
          'Battle, Elite, Shop, Cafe, Locker, Anomaly and Boss are the seven official route tile types.',
      },
      {
        question: 'Should I fight every Elite?',
        answer:
          'No. Fight an Elite when the deck can survive a weak opening and the route still offers enough recovery before the Boss.',
      },
      {
        question: 'Should I heal or upgrade at a Cafe?',
        answer:
          'Heal when health is the next-fight bottleneck. Upgrade when the party is already safe and the improvement changes an important damage or defense breakpoint.',
      },
    ],
  },
  {
    slug: 'cursed-swords-leaders',
    path: '/cursed-swords-leaders',
    title: 'Tokyo Valkyries Cursed Swords and Leader Skills Guide',
    seoTitle: 'Tokyo Valkyries Cursed Sword and Leader Skills Guide',
    seoDescription:
      'Understand Cursed Sword purification, added attributes, party leaders and special skills in Tokyo Valkyries without relying on an early tier list.',
    summary:
      'A Cursed Sword choice changes more than one character: it changes attribute counts, who can lead, and which special skill anchors the next party.',
    category: 'Combat',
    difficulty: 'Reference',
    coverImageUrl: steamScreenshot(
      'b85c038316f2a23b36c7886f4362a59c5ea88794/ss_b85c038316f2a23b36c7886f4362a59c5ea88794.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Tokyo Valkyries Cursed Sword',
      'Tokyo Valkyries leader skill',
      'Tokyo Valkyries awakening',
    ],
    sourceNotes:
      'Mechanic facts come from the official website. The page deliberately avoids explicit scene description and unsupported character rankings.',
    video: videos.officialTrailer,
    tags: ['Cursed Sword', 'Leader', 'Special skill'],
    relatedRoutes: [
      '/combat-attributes',
      '/characters',
      '/deck-building',
      '/story',
    ],
    body: [
      {
        heading: 'Purification is also a build decision',
        paragraphs: [
          "The Cursed Swords power each Underworld and must be removed to seal it. The associated ritual is part of the game's mature fanservice presentation, but its mechanical result is straightforward: the selected girl becomes stronger and gains another attribute.",
          'That added icon changes which cards can call her into action and how many times the party repeats a matching effect. Evaluate the reward on the formation screen, not only as an individual character upgrade.',
          'Write down the attribute count before and after the choice if the formation is complicated. The comparison makes hidden opportunity cost visible: gaining another trigger in one lane may reduce the reason to keep several cards from a different lane.',
        ],
      },
      {
        heading: 'The added attribute can sharpen or broaden the deck',
        paragraphs: [
          "Adding an attribute that matches the deck's core color increases the payoff of cards you already want to draw. Adding a different attribute can broaden defensive and utility coverage, but it may tempt the deck into too many lanes.",
          'Choose concentration when the current engine is reliable and only needs more output. Choose flexibility when the party repeatedly lacks a specific answer and the extra color can provide it without diluting every draw.',
        ],
      },
      {
        heading: "A leader should solve the run's hardest turn",
        paragraphs: [
          'An empowered girl can be selected as party leader, and leaders gain access to a special skill. The best leader is therefore contextual: identify the turn most likely to end the run and pick the special skill or attribute shape that helps the party survive or finish that turn.',
          'Do not compare leader skills in a vacuum. A powerful ability that arrives after the party has already collapsed is less valuable than a reliable skill that protects the weak opening, finishes a boss phase or stabilizes the character most often targeted.',
        ],
      },
      {
        heading: 'Rebuild the card plan after changing the leader',
        paragraphs: [
          'An added attribute changes the trigger count, so the old deck may no longer be optimal. Recount the icons for Resolve, Courage, Hope and Dawn, then identify which card lane gained the most. Remove assumptions carried over from the previous formation.',
          'Run a short audit after the first normal fight: did the leader skill charge at a useful pace, did the new attribute improve the intended cards, and did any party member lose defensive coverage? Adjust one problem at a time.',
          'Also check whether the leader changes how aggressively items can be saved. A reliable emergency skill can let the party hold a consumable for the Boss, while a slow offensive skill may require more conservative routing before it becomes available.',
        ],
      },
      {
        heading: 'Wait for stable evidence before trusting a tier list',
        paragraphs: [
          'Tokyo Valkyries launched only days before this guide was checked. The public card pool, unlock conditions and leader comparisons are not documented well enough for a responsible universal ranking. Early player impressions can reveal strategies, but they are not a complete balance model.',
          'Use the official mechanic and your unlocked choices. A leader who turns the current deck into a consistent boss clear is more useful than an S-rank label created for a different unlock state or route.',
        ],
      },
    ],
    faq: [
      {
        question: 'What does pulling a Cursed Sword do?',
        answer:
          'The official site says it greatly strengthens the selected girl, adds an attribute and makes her eligible to lead the party.',
      },
      {
        question: 'What does the party leader gain?',
        answer:
          'A leader gains access to a powerful special skill in addition to the formation changes created by her attributes.',
      },
      {
        question: 'Who is the best Tokyo Valkyries leader?',
        answer:
          "There is not enough stable public evidence for one universal answer. Pick the leader whose attributes and special skill solve the current deck's hardest turn.",
      },
    ],
  },
  {
    slug: 'characters',
    path: '/characters',
    title: 'Tokyo Valkyries Characters and Voice Cast',
    seoTitle: 'Tokyo Valkyries Characters - Full Cast and Voice Actors',
    seoDescription:
      'Meet Haruka, Artesia, Tsubasa, Anna, Mamika, Raimu, Suzuno, Tamaki and Karin with spoiler-light profiles and Japanese voice actors.',
    summary:
      'Meet the nine officially profiled women at the center of Tokyo Valkyries, from Haruka and Artesia to strategist Tamaki and doctor Karin.',
    category: 'Characters',
    difficulty: 'Reference',
    coverImageUrl: steamScreenshot(
      '26a2c2e6f1c6424423dcfed16d2b24448cddbe34/ss_26a2c2e6f1c6424423dcfed16d2b24448cddbe34.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Tokyo Valkyries characters',
      'Tokyo Valkyries voice cast',
      'Tokyo Valkyries Haruka Artesia',
    ],
    sourceNotes:
      'Names, roles and voice cast are paraphrased from the official English character profiles. The page avoids unsupported combat assignments.',
    tags: ['Cast', 'Voice actors', 'Spoiler-light'],
    relatedRoutes: [
      '/story',
      '/combat-attributes',
      '/cursed-swords-leaders',
      '/guides',
    ],
    body: [
      {
        heading: 'The roster joins everyday Tokyo to Grand Earth',
        paragraphs: [
          'Haruka anchors the modern Tokyo side of the story, while Artesia carries the knowledge and loss of Grand Earth. Their meeting turns an invisible invasion into a personal mission. The other women expand the group beyond a single archetype: university friends, a model, an honors student, a maid-cafe worker, a former pro gamer and a doctor.',
          'The dedicated roster below keeps descriptions spoiler-light and uses only officially published profiles. Combat attributes and unlock states can change how a character fits a run, so the page does not assign speculative rankings.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who is the protagonist of Tokyo Valkyries?',
        answer:
          'Haruka Fuchi is the central Tokyo university student drawn into the Underworld after hearing a call for help.',
      },
      {
        question: 'Who is Artesia?',
        answer:
          'Artesia is a mage from Grand Earth who has been fighting Belzebia and asks Haruka to help stop the Underworld invasion.',
      },
      {
        question: 'How many characters are officially profiled?',
        answer:
          'The official English site provides detailed profiles for nine characters and indicates that additional characters also appear.',
      },
    ],
  },
  {
    slug: 'release-date',
    path: '/release-date',
    title: 'Tokyo Valkyries Release Date and Launch Status',
    seoTitle: 'Tokyo Valkyries Release Date - Steam and Switch Launch',
    seoDescription:
      'Tokyo Valkyries is out now on Steam and Nintendo Switch. Check the July 2026 release date, price, languages and current official links.',
    summary:
      'Tokyo Valkyries launched in July 2026 on Windows PC and Nintendo Switch. The one-day date difference comes from store region and timezone presentation.',
    category: 'Release',
    difficulty: 'Status',
    coverImageUrl: videos.officialTrailer.thumbnailUrl,
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Tokyo Valkyries release date',
      'Tokyo Valkyries out now',
      'Tokyo Valkyries launch trailer',
    ],
    sourceNotes:
      'Official site lists July 9, 2026. The US Steam store displays July 8, 2026; both refer to the same global launch window.',
    video: videos.officialTrailer,
    tags: ['July 2026', 'Out now', 'Price'],
    relatedRoutes: [
      '/platforms',
      '/switch-vs-steam',
      '/system-requirements',
      '/download',
    ],
    body: [
      {
        heading: 'Tokyo Valkyries is out now',
        paragraphs: [
          "Tokyo Valkyries released during the July 8–9, 2026 global launch window. The Steam store in the United States shows July 8, while qureate's official English site uses July 9 for both Steam and Nintendo Switch. That difference is a regional store and timezone presentation, not two separate versions.",
          'The game is a paid single-player release with a $22.99 list price on the official site. Store prices, launch discounts and taxes can vary by region, so the current Steam or Nintendo listing is the correct source before purchase.',
        ],
      },
      {
        heading: 'The launch platforms are PC and Nintendo Switch',
        paragraphs: [
          "The Steam edition runs on Windows and includes achievements, full controller support, Steam Cloud and Family Sharing according to the store feature list. The Nintendo Switch edition is linked directly from qureate's official page.",
          'No official PlayStation, Xbox, macOS, Linux, iOS or Android version was listed when this page was checked. Treat downloads that claim otherwise as unverified unless qureate adds a new official storefront.',
        ],
      },
      {
        heading: 'Language support is broader than the voice track',
        paragraphs: [
          'Tokyo Valkyries supports English, Japanese, Simplified Chinese and Traditional Chinese interface and subtitles. Japanese is the full audio language. The official site and Steam listing agree on this core language set.',
          'A language patch offered through an unofficial forum is not the same as official support. Back up saves and verify file sources before changing a live installation, especially during the launch window when updates can overwrite modified files.',
        ],
      },
      {
        heading: 'Launch status can change quickly',
        paragraphs: [
          "The first days after release are when review totals, minor updates and compatibility reports change fastest. Use the Steam page for current review sentiment and update history, and use qureate's site or social account for official announcements.",
          'This wiki separates stable mechanics from early impressions. A release date, platform or language can be verified immediately; claims about the best deck, total replayability or final character balance need more time and evidence.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Tokyo Valkyries release?',
        answer:
          'It released in the July 8–9, 2026 global launch window. Steam US shows July 8, while the official qureate schedule lists July 9.',
      },
      {
        question: 'How much does Tokyo Valkyries cost?',
        answer:
          'The official list price is $22.99. Regional pricing and temporary discounts should be checked on Steam or Nintendo before purchase.',
      },
      {
        question: 'Is Tokyo Valkyries free to play?',
        answer: 'No. It is a paid single-player game.',
      },
    ],
  },
  {
    slug: 'platforms',
    path: '/platforms',
    title: 'Tokyo Valkyries Platforms: Steam, Switch and Controller Support',
    seoTitle: 'Tokyo Valkyries Platforms - Steam, PC and Nintendo Switch',
    seoDescription:
      'Check Tokyo Valkyries platform support for Windows PC, Steam, Nintendo Switch, controller play, Steam Cloud and unsupported mobile or console claims.',
    summary:
      'The official versions are Windows PC through Steam and Nintendo Switch. Steam supports controllers and cloud saves; other platform claims remain unverified.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: steamScreenshot(
      '73257360efdbb47effdf2cdade502f6c3586f476/ss_73257360efdbb47effdf2cdade502f6c3586f476.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Tokyo Valkyries Steam',
      'Tokyo Valkyries Switch',
      'Tokyo Valkyries controller',
    ],
    sourceNotes:
      'Platform facts come from Steam and the official site. Steam Deck comments are early community reports, not an official Verified badge claim.',
    tags: ['Steam', 'Nintendo Switch', 'Controller'],
    relatedRoutes: [
      '/switch-vs-steam',
      '/system-requirements',
      '/release-date',
      '/download',
    ],
    body: [
      {
        heading: 'Choose between the two official versions',
        paragraphs: [
          'Tokyo Valkyries is officially available on Windows PC through Steam and on Nintendo Switch. The content premise and deckbuilding systems are shared, but the stores, save ecosystems and one presentation detail are platform-specific.',
          'Buy the Steam edition when PC performance options, achievements, Steam Cloud or Family Sharing matter most. Buy the Switch edition when portable play and the Nintendo library are the priority. There is no official cross-save statement, so plan as if each platform keeps its own progress.',
        ],
      },
      {
        heading: 'Steam has full controller support',
        paragraphs: [
          'Steam lists full controller support, and the interface shown in official screenshots is strongly controller-oriented. It also lists Steam Achievements and Steam Cloud. These features make a gamepad the simplest way to match on-screen prompts.',
          'Keyboard and mouse input exists on PC, but early reviews report that some selection and back-navigation interactions feel designed around a controller. Test your preferred input early enough to adjust bindings or use a gamepad before a longer run.',
        ],
      },
      {
        heading: 'Steam Deck reports are promising but still early',
        paragraphs: [
          'At least one early Steam review reports smooth Steam Deck controller play, but the store page did not provide a reliable official Verified status in the checked data. Treat Deck support as an early community signal, not a guarantee for every SteamOS version or display preference.',
          'Check text size, movie playback, cloud sync and suspend/resume behavior during the refund window. The Windows system requirements are modest, but compatibility is more than raw performance.',
        ],
      },
      {
        heading: 'There is no verified mobile or extra-console version',
        paragraphs: [
          'No official Android, iOS, PlayStation or Xbox listing was found. A page that offers a Tokyo Valkyries APK, mobile installer or console activation key is not following the current official release map.',
          'Use the safe download page to reach Steam and Nintendo. If qureate announces another version later, this page will link the publisher-owned store rather than a mirror.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Tokyo Valkyries on PC?',
        answer:
          'Yes. The official PC version is sold through Steam for Windows.',
      },
      {
        question: 'Is Tokyo Valkyries on Nintendo Switch?',
        answer:
          'Yes. qureate links the official Nintendo store listing from the game website.',
      },
      {
        question: 'Does Tokyo Valkyries support controllers?',
        answer: 'Steam lists full controller support.',
      },
      {
        question: 'Is Tokyo Valkyries on mobile?',
        answer: 'No official Android or iOS version was listed when checked.',
      },
    ],
  },
  {
    slug: 'switch-vs-steam',
    path: '/switch-vs-steam',
    title: 'Tokyo Valkyries Switch vs Steam: Which Version Should You Buy?',
    seoTitle: 'Tokyo Valkyries Switch vs Steam - Version Differences',
    seoDescription:
      'Compare Tokyo Valkyries on Nintendo Switch and Steam for portability, achievements, cloud saves, controls, requirements and the official ritual animation difference.',
    summary:
      'Steam is the flexible PC choice with achievements and cloud features; Switch is the portable choice. The official site also notes one animation presentation difference.',
    category: 'Platform',
    difficulty: 'Reference',
    coverImageUrl: videos.officialTrailer.thumbnailUrl,
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Tokyo Valkyries Switch vs Steam',
      'Tokyo Valkyries Nintendo Switch gameplay',
      'Tokyo Valkyries PC gameplay',
    ],
    sourceNotes:
      'Official site confirms the platform-specific hand movement description. Store feature comparisons use official Steam and Nintendo surfaces.',
    video: videos.pcOpening,
    tags: ['Switch', 'Steam', 'Version differences'],
    relatedRoutes: [
      '/platforms',
      '/system-requirements',
      '/review',
      '/download',
    ],
    body: [
      {
        heading: 'Buy for where you will actually finish runs',
        paragraphs: [
          'The main choice is convenience. Steam is better suited to players who want PC display options, achievements, Steam Cloud, Family Sharing and straightforward access to community discussions. Nintendo Switch is better when portable sessions and a console-first library matter more.',
          'Tokyo Valkyries is single-player, so platform population does not decide the purchase. Choose the device that makes it easiest to complete a route without interruptions and to read card details comfortably.',
        ],
      },
      {
        heading: 'Steam offers the clearest feature list',
        paragraphs: [
          'The Steam store explicitly lists achievements, full controller support, Steam Cloud and Family Sharing. PC also gives you a known minimum and recommended hardware target. The game requires Windows according to the official store data; macOS and Linux are not listed.',
          'Early player feedback suggests a controller fits the interface better than mouse-only navigation. A PC purchase is therefore not necessarily a keyboard-and-mouse choice—plan to use whichever input makes card inspection and menu back actions comfortable.',
        ],
      },
      {
        heading: 'Switch wins on portability',
        paragraphs: [
          'The Switch version avoids PC hardware questions and keeps the game in a portable console environment. For a turn-based deckbuilder, that can be the strongest practical advantage. The tradeoff is that Steam-specific achievements, cloud and family-sharing features do not carry over as Steam services.',
          'No cross-save feature was verified. If you buy both versions, assume separate progress until an official source says otherwise.',
        ],
      },
      {
        heading: 'The official site notes one presentation difference',
        paragraphs: [
          "qureate compares the Cursed Sword event animation between platforms. Its English page describes the Switch hand movement as a gentler draw and the Steam version as a firmer pull. The game's mature fanservice context is otherwise disclosed on both official surfaces.",
          'That detail is unlikely to outweigh portability, input and store features for most buyers, but it is the one platform-specific content presentation difference the developer chose to publish directly.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the Steam version censored?',
        answer:
          'The official site describes a different Cursed Sword hand-movement presentation on Steam and Switch. It does not describe the comparison as a separate story or gameplay feature set.',
      },
      {
        question: 'Does Tokyo Valkyries have cross-save?',
        answer:
          'No official cross-save support was verified, so assume separate saves.',
      },
      {
        question: 'Which version is best?',
        answer:
          'Choose Steam for PC/store features and Switch for portable console play. The core single-player deckbuilding loop is the deciding fit, not multiplayer population.',
      },
    ],
  },
  {
    slug: 'system-requirements',
    path: '/system-requirements',
    title: 'Tokyo Valkyries PC System Requirements and Setup Checklist',
    seoTitle:
      'Tokyo Valkyries System Requirements - Minimum and Recommended PC',
    seoDescription:
      'Check Tokyo Valkyries minimum and recommended PC requirements for Windows 11, CPU, RAM, graphics, DirectX 11, storage and controller setup.',
    summary:
      'Tokyo Valkyries has modest graphics targets but asks for Windows 11 and 16 GB RAM in both official tiers. Check storage, audio and input before buying.',
    category: 'Platform',
    difficulty: 'Reference',
    coverImageUrl: steamScreenshot(
      'f5dee22d83a141b32268a78d720b667945a3b1b1/ss_f5dee22d83a141b32268a78d720b667945a3b1b1.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['Tokyo Valkyries PC', 'Tokyo Valkyries performance'],
    sourceNotes:
      'Requirements are transcribed from the Steam store checked on 2026-07-10. They are not benchmark estimates.',
    tags: ['Windows 11', '16 GB RAM', 'DirectX 11'],
    relatedRoutes: ['/platforms', '/switch-vs-steam', '/download', '/review'],
    body: [
      {
        heading: 'Minimum requirements',
        paragraphs: [
          'The official minimum target is Windows 11 Pro 64-bit, an Intel Core i5-8265U processor, 16 GB RAM, Intel UHD Graphics 620, DirectX 11 and 2 GB of available storage. The sound entry specifies 24-bit, 48 kHz stereo capability.',
          'This tier suggests integrated graphics can run the game, but 16 GB memory and a 64-bit Windows 11 environment are the supported baseline. Hardware below that may still launch, but it is outside the published target.',
        ],
      },
      {
        heading: 'Recommended requirements',
        paragraphs: [
          'The recommended target is Windows 11 Home 64-bit, an Intel Core i5-8400 or better, 16 GB RAM, an NVIDIA GeForce GTX 1650, DirectX 11 and 4 GB available storage. The audio note asks for playback of 16-bit stereo 48 kHz WAVE files.',
          'The recommended graphics card leaves comfortable room for the 2D battle presentation and effects. Use the extra storage margin even though the minimum lists 2 GB, because updates, shader data and save backups need space too.',
        ],
      },
      {
        heading: 'Check display, audio and movie playback',
        paragraphs: [
          'Tokyo Valkyries relies on animated story scenes, battle effects and voiced presentation. If performance problems appear, check graphics drivers, video decoding, audio device format and overlays before assuming the card combat itself is too demanding.',
          'Keep Windows and GPU drivers current, verify the Steam files after a failed update, and test a normal battle plus a story sequence. That separates a general rendering issue from one specific movie or audio problem.',
        ],
      },
      {
        heading: 'Use a controller if the mouse flow feels awkward',
        paragraphs: [
          'Steam lists full controller support and the official interface displays controller prompts. Several early reviews describe the mouse back-navigation and long-press speed controls as less comfortable than gamepad input.',
          'Connect the preferred controller before launching, confirm Steam Input behavior, and verify card inspection, end-turn and back actions. A control mismatch is easier to fix before a long route than during a boss turn.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much RAM does Tokyo Valkyries need?',
        answer: 'Steam lists 16 GB RAM for both minimum and recommended tiers.',
      },
      {
        question: 'Can integrated graphics run Tokyo Valkyries?',
        answer:
          'Intel UHD Graphics 620 is the official minimum graphics target, paired with the rest of the minimum configuration.',
      },
      {
        question: 'Does Tokyo Valkyries run on macOS or Linux?',
        answer: 'The official Steam platform data lists Windows only.',
      },
    ],
  },
  {
    slug: 'review',
    path: '/review',
    title: 'Is Tokyo Valkyries Worth It? A Buyer-Focused Review Guide',
    seoTitle: 'Tokyo Valkyries Review - Is It Worth Buying?',
    seoDescription:
      'Decide whether Tokyo Valkyries is worth buying based on its party deckbuilding, anime cast, mature fanservice, launch reviews, content scope and platform fit.',
    summary:
      'Buy for a compact anime roguelite with a distinctive three-person attribute system; wait if you need deep replayability, a large card pool or polished mouse controls.',
    category: 'Review',
    difficulty: 'Status',
    coverImageUrl: steamScreenshot(
      '248c2e9cd814ded0acb571b4759faa63ed695d3d/ss_248c2e9cd814ded0acb571b4759faa63ed695d3d.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'Tokyo Valkyries review',
      'Tokyo Valkyries gameplay English',
      'Tokyo Valkyries worth it',
    ],
    sourceNotes:
      'Decision guide based on official features and the first 24 Steam reviews. Early sentiment can move quickly and is not treated as a permanent score.',
    video: videos.pcOpening,
    tags: ['Worth it', 'Launch reviews', 'Buyer guide'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/switch-vs-steam',
      '/system-requirements',
      '/release-date',
    ],
    body: [
      {
        heading: 'Buy it for the party-to-card connection',
        paragraphs: [
          'Tokyo Valkyries is most interesting when you want a familiar roguelite deckbuilding loop with a different decision layer. You field three women, each tied to Resolve, Courage, Hope or Dawn icons, and matching cards call those characters into action. That makes party composition and deck construction the same problem rather than two separate menus.',
          'Enemy intent also identifies the coming action and target, so defense is not a generic block total. The right protective card must cover the person under threat. That interaction gives the combat a clearer identity than the surface comparison to other lane-based deckbuilders suggests.',
        ],
      },
      {
        heading: 'The anime cast and tone are part of the purchase',
        paragraphs: [
          "The game pairs modern Tokyo university life with an invading Underworld and a Grand Earth fantasy conflict. Its nine profiled women have fully voiced Japanese story presentation, and the tone mixes sincere friendship with qureate's suggestive comedy.",
          'The mature material is fanservice rather than explicit sexual content according to the Steam disclosure. If that presentation is a reason to avoid the game, the deck system will not make the surrounding tone disappear. If it is part of the appeal, the official trailer accurately signals what kind of release this is.',
        ],
      },
      {
        heading: 'Wait if replay depth is the main requirement',
        paragraphs: [
          'Early reviews repeatedly disagree about difficulty but share concerns about card-pool breadth, route variation, content length and long-term replayability. Some players enjoy the approachable balance and quick stages; others feel strong combinations appear too reliably and maps offer fewer meaningful branches than deeper genre leaders.',
          'Those are launch impressions, not a final verdict. They do matter if the only acceptable purchase is a deckbuilder intended for hundreds of runs. Watch update history and longer playthroughs before buying for that specific expectation.',
        ],
      },
      {
        heading: 'PC input polish is another reason to test early',
        paragraphs: [
          'Steam supports controllers, and that appears to be the most natural input. Early mouse users report awkward back actions and accidental interactions around the hold-to-speed-up control. These are usability concerns rather than broken core combat, but they can shape a long session.',
          'Use a controller if possible, verify card detail navigation and test the first route during the store refund window. Switch buyers trade PC input choice for a consistent portable control environment.',
        ],
      },
      {
        heading: 'The clearest purchase rule',
        paragraphs: [
          'Buy now if you want a compact, voiced anime card RPG, enjoy party composition, and accept that the mature comedy is part of the package. Wait for patches, a discount or more completed-run evidence if a huge card database, highly variable maps and proven endgame replayability are essential.',
          "At launch the Steam review pool was small but leaned positive. That is a useful temperature check, not a substitute for matching the game's actual scope to what you want.",
          'If you remain undecided, compare one complete early gameplay episode with the official trailer and the system requirements. That reveals pacing, menu density, voice presentation and combat readability more reliably than a headline score.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Tokyo Valkyries worth buying?',
        answer:
          'It is a good fit for players who want a compact anime roguelite with party-driven card triggers. Wait if deep long-term replayability or a large proven card pool is mandatory.',
      },
      {
        question: 'Is Tokyo Valkyries difficult?',
        answer:
          'Launch reviews disagree. Some describe it as approachable, while others find target-aware defense challenging early. The strongest party synergies may reduce later difficulty.',
      },
      {
        question: 'Is Tokyo Valkyries explicit?',
        answer:
          'Steam says it has no explicit sexual content but includes suggestive scenes and brief underwear visibility that may not be suitable for public settings.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Tokyo Valkyries Download: Official Steam and Nintendo Links',
    seoTitle: 'Tokyo Valkyries Download - Official Steam and Switch Links',
    seoDescription:
      'Download Tokyo Valkyries safely from Steam or the official Nintendo listing. Avoid APK files, cracks, key generators and fake mobile versions.',
    summary:
      'Use only the Steam store or the Nintendo link published by qureate. There is no verified mobile APK, free PC installer or unofficial launcher.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: steamScreenshot(
      'f5dee22d83a141b32268a78d720b667945a3b1b1/ss_f5dee22d83a141b32268a78d720b667945a3b1b1.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['Tokyo Valkyries download', 'Tokyo Valkyries Steam'],
    sourceNotes:
      'Store links are official. The page does not link mirrors, APKs, cracks, patches or key resellers.',
    tags: ['Official links', 'No APK', 'Safety'],
    relatedRoutes: [
      '/platforms',
      '/release-date',
      '/system-requirements',
      '/disclaimer',
    ],
    body: [
      {
        heading: 'Use one of the two official storefronts',
        paragraphs: [
          "On Windows, buy and install Tokyo Valkyries through Steam app 4093240. On Nintendo Switch, follow the Nintendo store link published on qureate's official game page. These routes preserve normal updates, ownership records and store support.",
          'The game is paid. A site offering a free full installer, serial generator or pre-activated build is not an official distribution channel.',
        ],
      },
      {
        heading: 'There is no official Tokyo Valkyries APK',
        paragraphs: [
          'Android and iOS are not part of the verified launch platform list. An APK with the game name may be a different product, an unauthorized package or malware using fresh search interest.',
          'Do not sign in with Steam, Nintendo, Google or payment credentials on a mirror. Do not install a mobile profile, browser extension or downloader to unlock a game that has no official mobile store listing.',
        ],
      },
      {
        heading: 'Keep language patches separate from account security',
        paragraphs: [
          'The official release already includes English, Japanese, Simplified Chinese and Traditional Chinese text. Other community translations may appear, but they are executable or file-modifying downloads outside the official support path.',
          'If you choose to investigate a community patch, never provide account credentials, back up saves, scan files, read the current discussion and be prepared for an update to overwrite the modification. This wiki does not host or endorse those packages.',
        ],
      },
      {
        heading: 'Recover a damaged Steam installation safely',
        paragraphs: [
          "Use Steam's installed-file verification before downloading replacement files from a forum. Update graphics and audio drivers, remove overlays or modifications, and retest a clean launch.",
          "For a purchase, billing or platform entitlement problem, contact the storefront. For a game bug, use qureate's official contact path. A third-party crack cannot fix an ownership or support issue safely.",
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download Tokyo Valkyries?',
        answer:
          'Use Steam for Windows PC or the official Nintendo store for Switch.',
      },
      {
        question: 'Is there a Tokyo Valkyries APK?',
        answer: 'No official Android version or APK was listed when checked.',
      },
      {
        question: 'Can I download Tokyo Valkyries for free?',
        answer:
          'It is a paid game. Use regional store pricing or verified official discounts rather than cracks or key generators.',
      },
    ],
  },
  {
    slug: 'story',
    path: '/story',
    title: 'Tokyo Valkyries Story and World Guide: A Spoiler-Light Primer',
    seoTitle: 'Tokyo Valkyries Story - Haruka, Artesia and the Underworld',
    seoDescription:
      'Understand Tokyo Valkyries story without ending spoilers: Haruka, Artesia, Grand Earth, Belzebia, the Underworld and the Cursed Swords.',
    summary:
      'Tokyo and the fantasy world Grand Earth are being joined by hostile Underworlds. Haruka and Artesia must seal them before Belzebia reaches reality.',
    category: 'Story',
    difficulty: 'Reference',
    coverImageUrl: steamScreenshot(
      '26a2c2e6f1c6424423dcfed16d2b24448cddbe34/ss_26a2c2e6f1c6424423dcfed16d2b24448cddbe34.1920x1080.jpg'
    ),
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Tokyo Valkyries story',
      'Tokyo Valkyries Haruka Artesia',
      'Tokyo Valkyries trailer English',
    ],
    sourceNotes:
      'Spoiler-light summary paraphrased from the official English story and character sections. Endings and later character events are intentionally excluded.',
    video: videos.officialTrailer,
    tags: ['Haruka', 'Artesia', 'Grand Earth'],
    relatedRoutes: [
      '/characters',
      '/cursed-swords-leaders',
      '/guides/beginner-guide',
      '/review',
    ],
    body: [
      {
        heading: 'Two worlds are being forced together',
        paragraphs: [
          'Grand Earth is a world of swords and magic devastated by Belzebia, a dark spirit with overwhelming power. Her expansion does not stop there. Shadows of that conquest begin reaching modern Tokyo, a reality where magic is not normally part of everyday life.',
          "The bridge is the Underworld: a hostile space between Grand Earth and Haruka's world. If these spaces remain open, Belzebia's influence can spread until Tokyo and the wider reality face destruction.",
        ],
      },
      {
        heading: 'Haruka follows a voice into the Underworld',
        paragraphs: [
          'Haruka Fuchi is a Tokyo university student who appears cold and self-contained but carries strong conviction. A voice asking for help leads her into a strange space where the threat becomes visible.',
          "Her ordinary life and nighttime battles create the story's central contrast. Haruka is not a visitor from a fantasy kingdom; she is a modern student forced to decide how much responsibility to accept when an impossible crisis reaches her city.",
        ],
      },
      {
        heading: 'Artesia brings the warning and a personal loss',
        paragraphs: [
          'Inside the Underworld, Haruka meets Artesia, a mage from Grand Earth who has fought to stop Belzebia. Artesia understands the structure of the invasion and asks Haruka for help sealing it.',
          "The mission is personal for her. Artesia came to Tokyo after the death of her respected older sister Rozamia at Belzebia's hands. That loss explains the gravity beneath her normally gentle demeanor.",
        ],
      },
      {
        heading: 'Cursed Swords anchor each invasion',
        paragraphs: [
          "A Cursed Sword is the source of power sustaining an Underworld. The party fights across the map, defeats the sword's defender and performs a purification ritual to remove it. Sealing these spaces is how the group pushes back the invasion.",
          "The ritual also powers the game's progression: the selected girl gains strength and an additional attribute, then can lead the party with a special skill. Story resolution and deckbuilding therefore meet at the same reward.",
        ],
      },
      {
        heading: 'The cast expands the double-life theme',
        paragraphs: [
          "Haruka's allies come from recognizable Tokyo lives—university, fashion, gaming, medicine and Akihabara service culture. Their ordinary identities remain part of the story even as they fight monsters in distorted versions of the city.",
          'This page stops at the official premise. Character-specific revelations, chapter outcomes and endings belong in future walkthrough coverage only when they can be labeled clearly for spoilers.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who is the main villain in Tokyo Valkyries?',
        answer:
          "Belzebia is the dark spirit whose conquest of Grand Earth begins to threaten Haruka's reality.",
      },
      {
        question: 'What is the Underworld?',
        answer:
          "It is a space between Grand Earth and modern reality, created through Belzebia's invasion and powered by a Cursed Sword.",
      },
      {
        question: 'Is this story guide spoiler-free?',
        answer:
          'It covers the official premise and early character setup, but avoids chapter outcomes and endings.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const featuredGuides = guides.slice(0, 6);
