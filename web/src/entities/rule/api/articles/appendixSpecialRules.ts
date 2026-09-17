import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第3章 付録のうち、難度解図・特別規則・徒手の演技。
 * 英語（`titleEn` など）は日本語の本文を訳したもの
 */
export const APPENDIX_SPECIAL_RULES_ARTICLES: RuleArticle[] = [
  {
    title: '難度解図',
    titleEn: 'Illustrated Difficulties',
    section: [
      {
        title: '徒手系難度',
        titleEn: 'Free-Hand Difficulties',
        block: [
          {
            title: '徒手系難度',
            titleEn: 'Free-Hand Difficulties',
            element: '',
            elementEn: '',
          },
          {
            title: '転回系難度',
            titleEn: 'Tumbling Difficulties',
            element: '',
            elementEn: '',
          },
        ],
      },
    ],
  },
  {
    title: '特別規則',
    titleEn: 'Special Rules',
    section: [
      {
        title: 'ジュニア適用規則',
        titleEn: 'Rules for Juniors',
        content: `次に示すものを除き、（公財）日本体操協会新体操採点規則による。

【禁止技】
団体競技、個人競技共に以下の技を禁止する。なお、禁止技を行なった場合は構成・実施ともに０点とする。

1. 前方宙返り転（１と１／２回転）以上
2. 後方２回宙返り以上
3. 前方宙返り直接正面支持臥
4. 後方２回宙返り直接正面支持臥
※いずれも組運動からの実施を含む。また（１）（３）は後ろとびからのひねりを含む。

【難度の要求要素】
団体競技、個人競技とも１Ｄ２Ｃ３Ｂとする。

【特別難度】
団体競技で以下の転回系を実施した場合は、特別難度として採用する。

【減点緩和】
ロープの３重跳びの要素不足

【手具の規格】
体格差が大きいため、（公財）日本体操協会指定業者が販売する手具が使用できない場合は、規格通りであれば自作でも可とする。`,
        contentEn: `Except as shown below, the Rhythmic Gymnastics Code of Points of the Japan Gymnastics Association applies.

[Prohibited elements]
The following elements are prohibited in both the group and the individual competition. If a prohibited element is performed, both composition and execution are scored 0 points.

1. Forward salto with 1½ rotations or more
2. Double back salto or more
3. Forward salto landing directly in front lying support
4. Double back salto landing directly in front lying support
* All of these include performance from partner elements. (1) and (3) also include twists from a back handspring.

[Difficulty requirements]
1 D, 2 C and 3 B for both the group and the individual competition.

[Special difficulties]
In the group competition, the following tumbling elements are counted as special difficulties.

[Relaxed deductions]
Missing triple under with the rope

[Apparatus specifications]
Because of large differences in body size, if apparatus sold by suppliers designated by the Japan Gymnastics Association cannot be used, self-made apparatus are allowed as long as they meet the specifications.`,
        image: [
          {
            src: '/images/rules/syugukikaku(J).png',
            alt: 'ジュニア手具規格表',
            altEn: 'Table of apparatus specifications for juniors',
          },
        ],
      },
      {
        title: '小学生適用規則',
        titleEn: 'Rules for Elementary School Students',
        content: `次に示すものを除き、（公財）日本体操協会新体操採点規則による。
              
【団体競技】
自由演技
1. 自由演技はラジオ体操１を基本とし、徒手体操で構成する。
2. 演技時間はラジオ体操１の演技時間とする。
3. 団体競技は、４名以上で演技を行う。

4. 自由演技の配点
次の５項目を基準とする。各項目は10点満点で採点し、その平均点を各審判の得点とする。各チームの得点は、全審判員の平均点とする。

採点基準
a. 運動の大きさ・深さ・アクセントなど体操が正確にできたか。
b. 音楽と体操の調和がとれていたか。
c. 隊形の変化や移動が工夫されていたか。
d. 演技全体を通じてリズミカルにできたか。
e. チーム全体が元気よく楽しく演技できたか。

5. 伴奏音楽はつけることが望ましいが、号令で実施しても良い。
6. 転回系は宙返りを除いた程度のものを入れてもよい。
7. 隊形の変化や体型移動を工夫する。
8. 服装は自由とする。
9. 審判構成は10名を基準とする。
10. 表彰は大会要項による。

【採点用紙】
次の観点から、演技の採点を行う。`,
        contentEn: `Except as shown below, the Rhythmic Gymnastics Code of Points of the Japan Gymnastics Association applies.

[Group competition]
Free routine
1. The free routine is based on Radio Taiso No. 1 and composed of free-hand exercises.
2. The duration of the routine is that of Radio Taiso No. 1.
3. The group routine is performed by four or more gymnasts.

4. Points for the free routine
The following five criteria are used. Each is scored out of 10 points, and the average is each judge's score. Each team's score is the average of all judges' scores.

Scoring criteria
a. Were the exercises performed accurately, with amplitude, depth and accents?
b. Was there harmony between the music and the exercises?
c. Were changes of formation and movement across the floor well designed?
d. Was the whole routine performed rhythmically?
e. Did the whole team perform energetically and joyfully?

5. Accompanying music is recommended, but the routine may also be performed to spoken counts.
6. Tumbling may be included, excluding saltos.
7. Changes and movements of formations should be well designed.
8. Attire is free.
9. As a standard, the judging panel has 10 judges.
10. Awards follow the competition guidelines.

[Score sheet]
Routines are scored from the following viewpoints.`,
        image: [
          {
            src: '/images/rules/junior(PCS).png',
            alt: '新体操小学校適用規則採点用紙',
            altEn: 'Score sheet under the rules for elementary school students',
          },
        ],
      },
      {
        title: '高体連規則',
        titleEn: 'Rules of the All Japan High School Athletic Federation',
        content: `次に示すものを除き、（公財）日本体操協会男子新体操採点規則による。
              
【禁止技について】
団体競技・個人競技ともに下記の技を禁止する。なお、禁止技を行なった場合は、その演技を０点とする。  
※いずれも組運動を含む。
1. 前方宙返り転（１と１／２回転）以上（後ろとびからのひねりを含む）
2. 後方２回宙返り以上

【制限技について】
後方系の跳躍技からひねりをともなって直接正面支持臥の技は、男子採点規則　第２章　第31条の構成条件の中で使用できる回数を１回限りとする。上記の回数を超えて使用した場合はその演技の構成点を０点とする。

【所属マークについて】
マークは規定どおりとし、ユニフォームと区別がつくようにする。

【同点順位の決定方法について】
1. 団体競技
  a. 構成得点の上位チーム
  b. 上記の条件が全て同点の場合、主任審判員（構成・実施）の合計得点の上位チーム。
  c. 上記の条件が全て同点の場合、主任審判員を除く８名の審判員の合計得点の上位チーム。
  d. 上記の条件が全て同点の場合、主催団体に一任する。

2. 個人競技
  a. ２種のうち、最高得点を獲得したもの。
  b. 上記の条件が全て同点の場合、２種目の主任審判員の合計点の上位者。
  c. 上記の条件が全て同点の場合、主任審判員を除く８名の審判員の合計得点の上位者。
  d. 上記の条件が全て同点の場合、主催団体に一任する。
  
【演技中の停電・選手のゲガの処置について】
1. 落雷などにより競技場が停電し、伴奏音楽が停止した場合には、審判長の判断により演技を中断してもよい。再演技を行わせる。
2. 演技中、選手が怪我をした場合、監督の判断により演技を中断させてもよい。

【成績順位および表彰について】
不慮の事故等で種目の危険があった場合、種目別選手権の表彰対象とする。`,
        contentEn: `Except as shown below, the Men's Rhythmic Gymnastics Code of Points of the Japan Gymnastics Association applies.

[Prohibited elements]
The following elements are prohibited in both the group and the individual competition. If a prohibited element is performed, the routine is scored 0 points.
* All of these include partner elements.
1. Forward salto with 1½ rotations or more (including twists from a back handspring)
2. Double back salto or more

[Restricted elements]
An element going from a backward tumbling element with a twist directly into front lying support may be used only once within the composition requirements of Article 31, Chapter 2 of the men's Code of Points. If it is used more often, the composition score of the routine is 0 points.

[Emblem]
The emblem must follow the rules and be distinguishable from the uniform.

[Breaking ties]
1. Group competition
  a. The team with the higher composition score.
  b. If still tied, the team with the higher total of the chief judges' scores (composition and execution).
  c. If still tied, the team with the higher total of the eight judges' scores, excluding the chief judges.
  d. If still tied, the decision is left to the organizer.

2. Individual competition
  a. The gymnast with the highest score on either of the two apparatus.
  b. If still tied, the gymnast with the higher total of the chief judges' scores on the two apparatus.
  c. If still tied, the gymnast with the higher total of the eight judges' scores, excluding the chief judges.
  d. If still tied, the decision is left to the organizer.

[Power failures and injuries during a routine]
1. If the power fails in the competition hall because of lightning or similar and the accompanying music stops, the routine may be stopped at the Jury President's discretion and performed again.
2. If a gymnast is injured during a routine, the routine may be stopped at the team manager's discretion.

[Rankings and awards]
If a gymnast has to withdraw from an apparatus because of an unforeseen accident or similar, the gymnast remains eligible for the apparatus championship awards.`,
      },
    ],
  },
  {
    title: '徒手の演技',
    titleEn: 'Free-Hand Routines',
    section: [
      {
        title: '徒手の基礎要素群',
        titleEn: 'Basic Free-Hand Element Groups',
        content: `1. 各種徒手
上肢、下肢、体前屈、体側屈、体回旋、腕の振動、脚の屈伸、胸の後反、体の弾性、波動（蛇動）など様々な複合運動

2. 各種跳躍（ジャンプ）
鹿跳び、前後開脚跳び、左右開脚跳びなどさまざまな跳躍。

3. 柔軟
左右開脚体前屈柔軟、前後開脚柔軟、閉脚体前屈柔軟なさまざまな柔軟。

4. バランス
さまざまなバランスなど。

5. 倒立
さまざまな倒立など。

6. 各種の歩走
さまざまなステップなど。

7. 回転及び転向
ターン・ピヴォット。   

以上の要素は、さまざまな方向、さまざまな面、移動を伴うあるいは伴わない、片足支持あるいは両足支持、腕の動きと結びつけるなどの多彩な動きを考慮に入れて実施することができる。`,
        contentEn: `1. Various free-hand movements
Arm and leg movements, forward bends, side bends, trunk rotations, arm swings, knee bends, chest arches, body springs, body waves and other combined movements

2. Various jumps
Stag jumps, split leaps, straddle jumps and other jumps.

3. Flexibility
Straddle forward bends, splits, pike forward bends and other flexibility elements.

4. Balances
Various balances.

5. Handstands
Various handstands.

6. Various steps and runs
Various steps.

7. Turns and pivots
Turns and pivots.

These elements can be performed with a wide range of movements: in various directions and planes, with or without traveling, on one foot or both feet, combined with arm movements, and so on.`,
      },
      {
        title: '構成に要求されるもの',
        titleEn: 'Requirements for the Composition',
        content:
          '演技の構成は、あらゆる徒手の要素を含め、跳躍力、柔軟性、巧緻性などを十分発揮し、あらゆる動きの変化で、その技術は独創的であり、迅速な動きで精神（３秒以上）を含まず、流れるように実施されなければならない。その動きのつなぎとして、前転・後転・側転・ブリッジを使用することは認める。',
        contentEn:
          'The composition of a routine must include all kinds of free-hand elements, make full use of jumping power, flexibility and dexterity, show all kinds of changes in movement, use original technique, and flow with quick movements without static pauses (of 3 seconds or more). Forward rolls, backward rolls, cartwheels and bridges may be used as links between movements.',
      },
      {
        title: '実施',
        titleEn: 'Execution',
        content:
          '実施に際しては新体操の特徴を正確に生かしたものでなくてはならない。すなわち、正しい身体の位置、スケールの大きさ、支点の制御、移動の正確さなどである。身体の動きはすべて、緩急の変化、及び力動感、大きさ、スピードのひつな結びつきをともなった継続的な動作でなくてはならない。また、すべての要素は、頭と腕を含む身体全体で行われなくてはならない。つまり、動きは局部的であってはならない。',
        contentEn:
          'Execution must bring out the characteristics of rhythmic gymnastics accurately: correct body position, amplitude, control of the points of support, accuracy of movement across the floor, and so on. All body movements must be continuous, with changes between fast and slow and a close connection of dynamics, amplitude and speed. All elements must be performed with the whole body, including the head and arms; that is, movements must not be isolated to one part of the body.',
      },
      {
        title: '徒手の要素の典型的な欠点',
        titleEn: 'Typical Faults in Free-Hand Elements',
        content: `【構成の欠点】
下記に欠点表を示す。

【実施の欠点】
徒手難度のレベルを判断するための一般的な目安
1. 徒手の基礎要素は通常Ａ難度として数えられる。
2. 以下のような場合、徒手の要素はＢ難度としてみなされる。
  a. 実施に際して高い水準の運動能力を必要とする場合。
  （例：水平面以下の背面屈、ジャンプしながら複雑な動きを空中で行うなど）
  b. 実施に当たって高い水準の調整力が必要とされる場合。
  （例：狭い面積の上（つま先）で身体を支持する。より長い時間バランスを保つ１回転半以上（540°以上）のピヴォットを行うなど）
  c. ２つの異なった要素を同時に行う場合。
  （例：バランスのポーズをとりながら身体を完全に蛇動させるなど）
  d. ２つ以上の要素（同じ、または異なった種類の）を、途中に別の動作を入れずに連続して行う場合。
  （例：中間にステップを入れずに連続ジャンプを行うなど）`,
        contentEn: `[Composition faults]
The table of faults is shown below.

[Execution faults]
General guidelines for judging the level of free-hand difficulties
1. Basic free-hand elements are usually counted as A difficulties.
2. Free-hand elements are regarded as B difficulties in the following cases.
  a. When a high level of physical ability is needed to perform them.
  (e.g. a back bend below the horizontal, or complex movements in the air during a jump)
  b. When a high level of coordination is needed to perform them.
  (e.g. supporting the body on a small area (the toes), holding a balance longer, or a pivot of 1½ turns (540°) or more)
  c. When two different elements are performed at the same time.
  (e.g. a full body wave while holding a balance)
  d. When two or more elements (of the same or different kinds) are performed in a row without other movements in between.
  (e.g. consecutive jumps without steps in between)`,
        image: [
          {
            src: '/images/rules/tosyukettenhyou.png',
            alt: '徒手欠点表',
            altEn: 'Table of free-hand faults',
          },
        ],
      },
      {
        title: '徒手難度表',
        titleEn: 'Tables of Free-Hand Difficulties',
        content: `以下の表においては、諸要素はグループ別に記されている。これらの要素には非常に多くの実施方法および配列が考えられる。難度のレベルを決定するには、一般目安の項を参照のこと。
※徒手の難度は、団体競技の場合、全員が実施すれば１ランクあがる。`,
        contentEn: `In the tables below, the elements are listed by group. These elements can be performed and arranged in a great many ways. To determine the level of difficulty, see the section on general guidelines.
* In the group competition, free-hand difficulties rise one rank when all gymnasts perform them.`,
        image: [
          {
            src: '/images/rules/jump(D).png',
            alt: '徒手の難度表（跳躍）',
            altEn: 'Table of free-hand difficulties (jumps)',
          },
          {
            src: '/images/rules/handstand(D).png',
            alt: '徒手の難度表（倒立）',
            altEn: 'Table of free-hand difficulties (handstands)',
          },
          {
            src: '/images/rules/sijikaiten(D).png',
            alt: '徒手の難度表（支持回転表）',
            altEn: 'Table of free-hand difficulties (support rotations)',
          },
          {
            src: '/images/rules/kaisen(D).png',
            alt: '徒手の難度表（旋回・ 回旋)',
            altEn: 'Table of free-hand difficulties (circles and rotations)',
          },
          {
            src: '/images/rules/turn(D).png',
            alt: '徒手の難度表（転向（ターン））',
            altEn: 'Table of free-hand difficulties (turns)',
          },
          {
            src: '/images/rules/balance(D).png',
            alt: '徒手の難度表（平均）',
            altEn: 'Table of free-hand difficulties (balances)',
          },
          {
            src: '/images/rules/stretchA(D).png',
            alt: '徒手の難度表（静的柔軟）',
            altEn: 'Table of free-hand difficulties (static flexibility)',
          },
          {
            src: '/images/rules/stretchB(D).png',
            alt: '徒手の難度表（動的柔軟）',
            altEn: 'Table of free-hand difficulties (dynamic flexibility)',
          },
        ],
      },
    ],
  },
]
