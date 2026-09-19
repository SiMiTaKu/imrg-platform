import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、難度。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const DIFFICULTY_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '難度',
      en: 'Difficulty',
      zh: '难度',
    },
    section: [
      {
        title: {
          ja: '難度の要求要素',
          en: 'Difficulty Requirements',
          zh: '难度的要求要素',
        },
        block: [
          {
            title: {
              ja: '徒手系難度',
              en: 'Free-Hand Difficulties',
              zh: '徒手难度',
            },
            element: {
              ja: `徒手系の難度は以下のとおりにする。

1. 個人競技で手具操作をともなって実施した場合は基礎難度を採用する。
2. 団体競技は３〜５人以上が実施した場合は基礎難度、６人が実施した場合は６名実施の難度を採用する。ただし実施は同時、または次々に実施した場合とする。
  a. 同じ群（下記の１〜４のそれぞれ）の技で、異なる種類を組み合わせて実施した場合６名が実施すれば難度が上がる種目の組み合わせはランクアップされる。
  b. 群の違う技の組み合わせは、難度として数えない。
  c. 静止の２秒は同時でなければならない。
  
【基礎難度表】
跳躍・バランス・倒立（静止2秒）・柔軟A〜静的柔軟〜を以下に示す`,
              en: `Free-hand difficulties are determined as follows.

1. In the individual competition, when performed with apparatus handling, the basic difficulty applies.
2. In the group competition, the basic difficulty applies when three to five gymnasts perform the element, and the six-gymnast difficulty applies when all six perform it. The element must be performed at the same time or one after another.
  a. When different elements of the same group (each of groups 1 to 4 below) are combined, combinations whose difficulty rises when performed by six gymnasts are upgraded if all six perform them.
  b. Combinations of elements from different groups are not counted as difficulties.
  c. Static positions of 2 seconds must be held at the same time.

[Table of basic difficulties]
Jumps, balances, handstands (held for 2 seconds) and flexibility A (static flexibility) are shown below.`,
              zh: `徒手难度按以下规定执行。

1. 在个人比赛中伴随器械操作完成时，采用基础难度。
2. 在团体比赛中，3 至 5 人以上完成时采用基础难度，6 人完成时采用 6 人完成的难度。但完成必须是同时，或依次连续完成。
  a. 同一组（下列 1 至 4 的各组）的动作中，将不同种类组合完成时，6 人完成即可提高难度的项目组合将被升级。
  b. 不同组动作的组合，不计为难度。
  c. 静止 2 秒必须同时完成。
  
【基础难度表】
跳跃、平衡、倒立（静止 2 秒）、柔韧 A（静态柔韧）如下所示`,
            },
            image: [
              {
                src: '/images/rules/jumpdifficulties.png',
                alt: {
                  ja: '徒手系難度（跳躍）',
                  en: 'Free-hand difficulties (jumps)',
                  zh: '徒手难度（跳跃）',
                },
              },
              {
                src: '/images/rules/balansedifficulties.png',
                alt: {
                  ja: '徒手系難度（バランス）',
                  en: 'Free-hand difficulties (balances)',
                  zh: '徒手难度（平衡）',
                },
              },
              {
                src: '/images/rules/handstanddifficulties.png',
                alt: {
                  ja: '倒立（静止２秒',
                  en: 'Handstands (held for 2 seconds)',
                  zh: '倒立（静止 2 秒',
                },
              },
              {
                src: '/images/rules/stretchdifficulties.png',
                alt: {
                  ja: '柔軟Ａ　〜静的柔軟〜',
                  en: 'Flexibility A (static flexibility)',
                  zh: '柔韧 A（静态柔韧）',
                },
              },
            ],
          },
        ],
      },
      {
        title: {
          ja: '転回系難度',
          en: 'Tumbling Difficulties',
          zh: '翻腾难度',
        },
        block: [
          {
            title: {
              ja: '転回系難度',
              en: 'Tumbling Difficulties',
              zh: '翻腾难度',
            },
            element: {
              ja: `転回系の難度は次の基礎難度をもとに価値が決められる。
                  
とび技ひねり技・前方系の跳躍技・後方系の跳躍技・宙返りの連続・転回系の連続の表を以下に示す。

※※宙返り以外の技では２ー３、３ー15の転回系も同等の扱いとする。
※テンポ宙返りは直ちに後方系の展開に続けた場合のみ、その扱いとする。
※６人全員が同時に実施した場合のみ格上げの対象とする。
３回以上の連続後転とびの一部がＢ難度以上の転回系に変わったものも同等として扱う。
後方伸身宙返りにひねりが加わった場合も同等の扱いとする。`,
              en: `The value of tumbling difficulties is determined from the following basic difficulties.

Tables of twisting elements, forward tumbling elements, backward tumbling elements, salto combinations and tumbling combinations are shown below.

** For elements other than saltos, tumbling in 2-3 and 3-15 is treated in the same way.
* A tempo salto is treated as such only when followed immediately by backward tumbling.
* Upgrades apply only when all six gymnasts perform the element at the same time.
Three or more consecutive back handsprings in which some are replaced by tumbling of B difficulty or higher are treated in the same way.
A layout back salto with an added twist is also treated in the same way.`,
              zh: `翻腾难度依据以下基础难度确定其价值。
                  
跳转体动作、前方跳跃动作、后方跳跃动作、空翻连续、翻腾连续的表格如下所示。

※※除空翻以外的动作中，2-3、3-15 的翻腾也同等对待。
※节奏空翻仅在紧接后方翻腾展开时，方按此对待。
※仅在 6 人全部同时完成时，才作为升级对象。
3 次以上的连续后手翻中，其中一部分变为 B 难度以上翻腾的，也同等对待。
后方直体空翻加转体时，也同等对待。`,
            },
            image: [
              {
                src: '/images/rules/jumpturndifficulties.png',
                alt: {
                  ja: 'とびひねり技の難度表',
                  en: 'Table of twisting element difficulties',
                  zh: '跳转体动作难度表',
                },
              },
              {
                src: '/images/rules/forwardjumpdifficulties.png',
                alt: {
                  ja: '前方系跳躍技の難度表',
                  en: 'Table of forward tumbling difficulties',
                  zh: '前方跳跃动作难度表',
                },
              },
              {
                src: '/images/rules/backwardjumpdifficulties.png',
                alt: {
                  ja: '後方系の跳躍技の難度表',
                  en: 'Table of backward tumbling difficulties',
                  zh: '后方跳跃动作难度表',
                },
              },
              {
                src: '/images/rules/combinationdifficulties.png',
                alt: {
                  ja: '宙返りの連続の難度表',
                  en: 'Table of salto combination difficulties',
                  zh: '空翻连续难度表',
                },
              },
              {
                src: '/images/rules/combinationdifficulties2.png',
                alt: {
                  ja: '転回系の連続の難度表',
                  en: 'Table of tumbling combination difficulties',
                  zh: '翻腾连续难度表',
                },
              },
            ],
          },
        ],
      },
      {
        title: {
          ja: '団体競技における難度の組み合わせ',
          en: 'Difficulty Combinations in the Group Competition',
          zh: '团体比赛中的难度组合',
        },
        block: [
          {
            title: {
              ja: '交差技と組運動の難度',
              en: 'Difficulty of Crossing Elements and Partner Elements',
              zh: '交叉动作与双人动作的难度',
            },
            element: {
              ja: `【交差技】
交差技の難度は以下の通りとする。

1. 徒手系の上を転回系で跳び越えた場合は転回系の種目の難度を採用する。
2. 転回系の交差技は、転回系の途中を飛び越えていなければならない。最低条件として、転回系の着地寸前に跳び越えることとする。
3. 転回系の交差技は、転回系の途中を跳び越えていなければならない。
4. 着地後に跳び越えた場合は（１）の扱いとする。
5. ２段の交差技の難度（以下の表を参照）
6. ３段以上の交差技をすべてＢ難度以上の展開系で実施した場合はＤ難度とする。Ａ難度が入っていた場合は、この扱いにはならない。

【組・組立運動】
組・組立運動の難度は以下のとおりとする。

1. 組み・組立運動の難度表（以下の表を参照）
※次に展開系に続けた場合に難度として扱う。
※Ｃ難度以上の転回系の場合は、その転回系の難度とする。

2. 組・組立運動での難度の格上げ
  a. 肩上倒立をとばし技で超えた場合は、跳躍系は１ランク、宙返り系は２ランク難度が上がる。
  b. 組倒立で片手倒立または支持者が伸腕で支持した場合は、１ランク難度が上がる。
  
【シリーズの難度の判定】
競技者が、いくつかのグループに分かれ、次々と転回系を行なった場合、難度の判定は以下のとおりとする。

1. 原則として交差技と組・組立運動を除き、３名以上が実施した難度を採用する。ただし高い難度の技を低い難度として読み替えることはできる。
2. いくつかのグループに分かれて同じ難度の転回系を実施した場合
  a. ３：３に分かれた場合
    i. 原則として、高い難度を実施したグループの難度を採用する。
    ii. 異なる種目であっても、６名以上が実施すれば難度が上がる種目の組み合わせの場合は、ランクアップされる。
    ※６名で実施した場合に難度が格上げになる技を以下に示す
  b. ４・２または５・１に分かれた場合
    i. 原則として、高い難度を実施したグループの難度を採用する。
    ii. 異なる種目であっても、６名以上が実施すれば難度が上がる種目の組み合わせの場合は、ランクアップされる。
    iii. 人数の少ないグループが、交差技または組・組立運動の場合は難度として採用し、難度の高いグループを採用する。
3. いくつかのグループに分かれて同じ難度の転回系を実施した場合
  1. ３名以上が実施した難度を採用する。
  2. シリーズに含まれる交差技または組・組立運動が、シリーズに中で最も高い難度の場合は、人数にかかわらず、その難度を採用する。
  3. 高い難度を低い難度で読み替えても、すべての難度が３名未満の場合は、難度として認めない。`,
              en: `[Crossing elements]
The difficulty of crossing elements is as follows.

1. When a gymnast tumbles over gymnasts performing free-hand elements, the difficulty of the tumbling element applies.
2. A tumbling crossing element must pass over the other gymnast during their tumbling. As a minimum, it must pass over just before the other gymnast lands.
3. A tumbling crossing element must pass over the other gymnast during their tumbling.
4. If it passes over after the landing, it is treated as in (1).
5. Difficulty of two-level crossing elements (see the table below)
6. A crossing element of three or more levels performed entirely with tumbling of B difficulty or higher is a D difficulty. If an A difficulty is included, this does not apply.

[Partner and pyramid elements]
The difficulty of partner and pyramid elements is as follows.

1. Table of partner and pyramid element difficulties (see the table below)
* They count as difficulties when followed by tumbling.
* When the tumbling is C difficulty or higher, the difficulty of that tumbling applies.

2. Upgrades in partner and pyramid elements
  a. When a gymnast jumps over a handstand on a partner's shoulders, jumping elements rise one rank and saltos rise two ranks.
  b. In a partner handstand, a one-arm handstand or support with straight arms by the supporting gymnast raises the difficulty one rank.

[Judging the difficulty of a series]
When gymnasts divide into groups and perform tumbling one after another, the difficulty is judged as follows.

1. As a rule, except for crossing elements and partner and pyramid elements, the difficulty performed by three or more gymnasts applies. A higher difficulty may be counted as a lower one.
2. When groups perform tumbling of the same difficulty
  a. Divided 3 and 3
    i. As a rule, the difficulty of the group that performed the higher difficulty applies.
    ii. Even with different elements, combinations whose difficulty rises when performed by six or more gymnasts are upgraded.
    * Elements whose difficulty is upgraded when performed by six gymnasts are shown below.
  b. Divided 4 and 2, or 5 and 1
    i. As a rule, the difficulty of the group that performed the higher difficulty applies.
    ii. Even with different elements, combinations whose difficulty rises when performed by six or more gymnasts are upgraded.
    iii. If the smaller group performs a crossing element or a partner or pyramid element, it is counted as a difficulty, and the group with the higher difficulty applies.
3. When groups perform tumbling of the same difficulty
  1. The difficulty performed by three or more gymnasts applies.
  2. If a crossing element or a partner or pyramid element in the series is the highest difficulty in the series, that difficulty applies regardless of the number of gymnasts.
  3. If every difficulty is performed by fewer than three gymnasts, even after counting higher difficulties as lower ones, no difficulty is recognized.`,
              zh: `【交叉动作】
交叉动作的难度规定如下。

1. 从徒手动作上方以翻腾跃过时，采用该翻腾项目的难度。
2. 翻腾的交叉动作，必须跃过翻腾的过程之中。最低条件为在翻腾落地前的瞬间跃过。
3. 翻腾的交叉动作，必须跃过翻腾的过程之中。
4. 在落地之后跃过时，按（1）对待。
5. 2 层交叉动作的难度（参见下表）
6. 3 层以上的交叉动作全部以 B 难度以上的翻腾完成时，定为 D 难度。其中含有 A 难度时，不按此对待。

【双人、叠罗汉动作】
双人、叠罗汉动作的难度规定如下。

1. 双人、叠罗汉动作的难度表（参见下表）
※紧接翻腾时，方作为难度对待。
※为 C 难度以上的翻腾时，采用该翻腾的难度。

2. 双人、叠罗汉动作中难度的升级
  a. 以跃过动作越过肩上倒立时，跳跃类提高 1 个等级，空翻类提高 2 个等级。
  b. 双人倒立中为单手倒立，或支撑者以直臂支撑时，提高 1 个等级。
  
【系列难度的判定】
参赛者分为若干组、依次进行翻腾时，难度的判定如下。

1. 原则上除交叉动作与双人、叠罗汉动作外，采用 3 人以上完成的难度。但可以将高难度的动作按低难度计算。
2. 分为若干组完成相同难度的翻腾时
  a. 分为 3：3 时
    i. 原则上采用完成较高难度的组的难度。
    ii. 即使项目不同，若为 6 人以上完成即可提高难度的项目组合，则予以升级。
    ※6 人完成时难度升级的动作如下所示
  b. 分为 4、2 或 5、1 时
    i. 原则上采用完成较高难度的组的难度。
    ii. 即使项目不同，若为 6 人以上完成即可提高难度的项目组合，则予以升级。
    iii. 人数较少的组为交叉动作或双人、叠罗汉动作时，将其作为难度采用，并采用难度较高的组。
3. 分为若干组完成相同难度的翻腾时
  1. 采用 3 人以上完成的难度。
  2. 系列中包含的交叉动作或双人、叠罗汉动作为该系列中最高难度时，不论人数，均采用该难度。
  3. 即使将高难度按低难度计算，所有难度均不足 3 人完成时，不认定为难度。`,
            },
          },
        ],
      },
      {
        title: {
          ja: '個人競技における難度',
          en: 'Difficulty in the Individual Competition',
          zh: '个人比赛中的难度',
        },
        block: [
          {
            title: {
              ja: '転回系における手具操作と難度',
              en: 'Apparatus Handling and Difficulty in Tumbling',
              zh: '翻腾中的器械操作与难度',
            },
            element: {
              ja: `演技の中で転回系を実施した場合の難度は、基礎難度表によって価値が決められる。ただし、以下の条件に当てはまる場合は、その難度から１ランクアップされる。
                  
1. 手具の投げ受けの間に転回系を実施した場合は、その転回系の難度から１ランクアップされる。
2. ２回以上の手具操作をともなって、実施した場合。
  
  a. スティック
    ⅰ. 端または中央部などを持って２回以上回す。
    ⅱ. 左右の手を持ち替えて１回以上回す。
    
  b. リング
    ⅰ. １つのリングまたは２つのリングを２回以上回す。
    ⅱ. ２つのリングを１回転づつ順番に回す。
    ⅲ. １つのリングを左右の手を持ち替えて１回以上回す。
    
  c. ロープ
    ⅰ. 片手または両手で、１本、２つ折り、３つ折り、４つ折りなどにして２回転以上回す。
    ⅱ. 左右の手を持ち替えて、１回以上回す。
    
  d. クラブ
    ⅰ. 頭、または首を持って２回以上回す。
    ⅱ. ２本のクラブを１回転ずつ順番に回す。
    ⅲ. １つのクラブを左右の手を持ち替えて、１回以上回す。
    
  e. その他の手具操作
    ⅰ. 転回系を実施している間に手具を床に打ちつけてとる。
    ⅱ. 転回系を実施している間に手具を転がして、着地と同時にとる。`,
              en: `The difficulty of tumbling performed in a routine is determined by the table of basic difficulties. However, it rises one rank in the following cases.

1. Tumbling performed while the apparatus is in the air rises one rank from the difficulty of that tumbling.
2. Tumbling performed with two or more apparatus handlings.

  a. Stick
    i. Rotating the stick two or more times, holding it at the end or in the middle.
    ii. Rotating the stick one or more times while passing it between the hands.

  b. Ring
    i. Spinning one ring or both rings two or more times.
    ii. Spinning the two rings one rotation each, one after the other.
    iii. Spinning one ring one or more times while passing it between the hands.

  c. Rope
    i. Turning the rope two or more times with one or both hands, open, folded in two, three or four, and so on.
    ii. Turning the rope one or more times while passing it between the hands.

  d. Club
    i. Rotating the club two or more times, holding it by the head or the neck.
    ii. Rotating the two clubs one rotation each, one after the other.
    iii. Rotating one club one or more times while passing it between the hands.

  e. Other apparatus handling
    i. Bouncing the apparatus on the floor and catching it during tumbling.
    ii. Rolling the apparatus during tumbling and catching it on landing.`,
              zh: `在成套动作中完成翻腾时，其难度依据基础难度表确定价值。但符合以下条件时，在该难度的基础上提高 1 个等级。
                  
1. 在器械抛接之间完成翻腾时，在该翻腾的难度基础上提高 1 个等级。
2. 伴随 2 次以上的器械操作完成时。
  
  a. 短棒
    ⅰ. 握住端部或中部等，旋转 2 次以上。
    ⅱ. 左右手交换，旋转 1 次以上。
    
  b. 环
    ⅰ. 将 1 个环或 2 个环旋转 2 次以上。
    ⅱ. 将 2 个环各旋转 1 周，依次进行。
    ⅲ. 将 1 个环左右手交换，旋转 1 次以上。
    
  c. 绳
    ⅰ. 用单手或双手，将绳以单根、对折、三折、四折等形式旋转 2 周以上。
    ⅱ. 左右手交换，旋转 1 次以上。
    
  d. 棍棒
    ⅰ. 握住棒头或棒颈，旋转 2 次以上。
    ⅱ. 将 2 根棍棒各旋转 1 周，依次进行。
    ⅲ. 将 1 根棍棒左右手交换，旋转 1 次以上。
    
  e. 其他器械操作
    ⅰ. 在完成翻腾的过程中，将器械击打地面后接住。
    ⅱ. 在完成翻腾的过程中，将器械滚动，并在落地的同时接住。`,
            },
          },
          {
            title: {
              ja: '投げ受けの難度',
              en: 'Throw-and-Catch Difficulty',
              zh: '抛接的难度',
            },
            element: {
              ja: `演技の中で投げ受けを実施した場合、その間に実施した徒手系（※）または転回系の数によって以下のように難度が決められる。ただし、転回系が含まれていた場合は第69条の１の条件と比較して、高い方の難度を採用する。
※ここでの徒手系は、縦軸または横軸で、360°回転したもののみを１つとして数える。`,
              en: `When a throw and catch is performed in a routine, the difficulty is determined as follows by the number of free-hand elements (*) or tumbling elements performed during the throw. If tumbling is included, the difficulty is compared with the condition in Article 69 (1), and the higher one applies.
* Here, a free-hand element counts as one only when it is a 360° rotation around the vertical or horizontal axis.`,
              zh: `在成套动作中完成抛接时，根据其间完成的徒手动作（※）或翻腾的数量，按以下规定确定难度。但含有翻腾时，与第 69 条第 1 款的条件相比较，采用较高的难度。
※此处的徒手动作，仅将绕纵轴或横轴旋转 360° 的动作计为 1 个。`,
            },
            image: [
              {
                src: '/images/rules/tossdifficulties.png',
                alt: {
                  ja: '投げ受けの難度表',
                  en: 'Table of throw-and-catch difficulties',
                  zh: '抛接难度表',
                },
              },
            ],
          },
          {
            title: {
              ja: '手具操作をともなった徒手系の難度',
              en: 'Difficulty of Free-Hand Elements with Apparatus Handling',
              zh: '伴随器械操作的徒手难度',
            },
            element: {
              ja: '演技の中で手具操作をともなって徒手系難度を実施した場合は、徒手系難度を採用する。',
              en: 'When a free-hand difficulty is performed with apparatus handling in a routine, the free-hand difficulty applies.',
              zh: '在成套动作中伴随器械操作完成徒手难度时，采用徒手难度。',
            },
          },
        ],
      },
    ],
  },
]
