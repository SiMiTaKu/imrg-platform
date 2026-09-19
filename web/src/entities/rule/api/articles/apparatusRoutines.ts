import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第3章 付録のうち、個人競技の演技（手具ごとの規格と技術）。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const APPARATUS_ROUTINES_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '個人競技の演技',
      en: 'Individual Routines',
      zh: '个人比赛的成套动作',
    },
    section: [
      {
        title: {
          ja: 'スティック（棒）の演技',
          en: 'Stick Routines',
          zh: '短棒的成套动作',
        },
        block: [
          {
            title: {
              ja: 'スティック（棒）の規格',
              en: 'Stick Specifications',
              zh: '短棒的规格',
            },
            element: {
              ja: `1. 素材
木製または合成素材

2. 重量
最低200グラム

3. 形状
長さは90cm〜110cmとし太さ（直径）は2.5cm〜3.5cm。先端にはゴムは合成素材のキャップ最大直径４cm以内長さ５cm以内でつけることができる。また、全体あるいは一部にテープを巻いてもよい。

4. 色彩
自由`,
              en: `1. Material
Wood or synthetic material

2. Weight
At least 200 g

3. Shape
Length 90 cm to 110 cm, thickness (diameter) 2.5 cm to 3.5 cm. Rubber or synthetic caps with a maximum diameter of 4 cm and a length of up to 5 cm may be attached to the ends. The stick may be wholly or partly wrapped with tape.

4. Color
Free`,
              zh: `1. 材质
木制或合成材料

2. 重量
最低200克

3. 形状
长度为90cm—110cm，粗细（直径）为2.5cm—3.5cm。顶端可以安装橡胶或合成材料的封头，其最大直径在４cm以内、长度在５cm以内。此外，也可以在整体或局部缠绕胶带。

4. 颜色
自由`,
            },
          },
          {
            title: {
              ja: 'スティック（棒）の技術',
              en: 'Stick Technique',
              zh: '短棒的技术',
            },
            element: {
              ja: `【諸要素群】
1. 基礎要素群
  a. プロペラ回旋（風車）
  b. ころがし
  c. 投げ
  d. スティック（棒）を用いた転回系
  
2. その他の要素群
  a. 振り
  b. 回旋
  c. 滑らし
  
以上の諸要素は、以下のことを考慮に入れて実施することができる。
  a. 手の持ち替えを伴う、伴わない。
  b. 様々な方向で行う。様々な面で行う。
  c. 移動する場合、しない場合。
  d. 片足または両足支持、片手または両手使用。
  
3. スティック（棒）の操作
スティックの動きは、面を変更するような場合でも止めてはならず、スティック自体の重さから来る惰力を利用して動かされ続けなければならない。スティックのプロペラ回旋および振りを実施する場合は、腕の延長のように扱わなければならない。スティックの操作には体の動きが伴わなければならない。

4. スティック（棒）の持ち方
大きな広がりを持つ動き（例えば、振り・プロペラ回旋など）の間には、通常、スティックの先端あるいは中央（中心）の部分を指で軽くにぎるようにしなければならない。また、スティックを広げた手の上にのせたりすることも一時的に可能である。`,
              en: `[Element groups]
1. Basic element groups
  a. Propeller rotations (mills)
  b. Rolls
  c. Throws
  d. Tumbling with the stick

2. Other element groups
  a. Swings
  b. Circles
  c. Slides

These elements can be performed taking the following into account.
  a. With or without passing the stick between the hands.
  b. In various directions and in various planes.
  c. With or without traveling.
  d. On one foot or both feet, with one hand or both hands.

3. Handling the stick
The stick must not stop moving, even when changing planes, and must keep moving using the momentum that comes from its own weight. For propeller rotations and swings, the stick must be handled like an extension of the arm. Stick handling must be accompanied by body movement.

4. Holding the stick
During wide movements (e.g. swings and propeller rotations), the stick is usually held lightly with the fingers at the end or in the middle. The stick may also rest briefly on the open hand.`,
              zh: `【各要素组】
1. 基础要素组
  a. 螺旋绕环（风车）
  b. 滚动
  c. 抛掷
  d. 使用短棒的翻腾类
  
2. 其他要素组
  a. 摆动
  b. 绕环
  c. 滑动
  
以上各要素，可以在考虑以下各点的基础上进行。
  a. 伴有换手或不伴有换手。
  b. 在各种方向进行。在各种平面进行。
  c. 移动或不移动。
  d. 单脚或双脚支撑，用单手或双手。
  
3. 短棒的操作
短棒的运动即使在变换平面时也不得停止，必须利用短棒自身重量产生的惯性持续运动。做短棒的螺旋绕环和摆动时，必须把短棒当作手臂的延长来处理。短棒的操作必须伴随身体的运动。

4. 短棒的握法
在幅度较大的动作（例如摆动、螺旋绕环等）过程中，通常必须用手指轻握短棒的顶端或中央（中心）部位。此外，也可以暂时将短棒放在摊开的手上。`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              zh: '编排的要求',
            },
            element: {
              ja: `1. プロペラ回旋
プロペラ回旋は２回以上入れなければならない。

2. ころがし
ころがしは１回以上、長さは１m 以上入れなければならない。

3. 投げ
  a. 投げの最低条件
    ⅰ. ３回以上の投げを入れなければならない。
    ⅱ. 左手投げ左手受け１回以上、右手投げ右手受け１回以上入れなければならない。
  b. 投げの高さ
    ⅰ. 投げの高さは、競技者が投げたところから最低２m 以上の高さとする。
    
4. 転回系の要素
  a. 前方・後方・速報系の転回系を入れなければならない。  
  b. 転回系を実施しているときに、スティックが生かされなければならない。
  
5. 諸要素
  a. 徒手要素と組み合わされた、各種の異なった方向および面でのプロペラ回旋。
  b. さまざまな種類の投げ。（水平投げ・縦投げ・水平および縦のプロペラ回旋投げ・片手、両手投げ）
  c. さまざまな回旋（小、中、大）（それぞれ手首、前腕、腕を使って行う)。
  d. リズミカルなスティックのまわし。
  e. 多様な持ち方。
  f. さまざまなころがし。
  
※　スティックを投げる場合には、必ず身体が動いていなければならい。演技全体を通じて、スティックが常に身体と調和を保って動いているということが、スティックの演技には不可欠である。`,
              en: `1. Propeller rotations
At least two propeller rotations must be included.

2. Rolls
At least one roll of at least 1 m must be included.

3. Throws
  a. Minimum requirements for throws
    i. At least three throws must be included.
    ii. At least one throw with the left hand caught with the left hand, and at least one throw with the right hand caught with the right hand, must be included.
  b. Height of throws
    i. A throw must rise at least 2 m from the point of release.

4. Tumbling elements
  a. Forward, backward and sideways tumbling must be included.
  b. The stick must be used actively during tumbling.

5. Elements
  a. Propeller rotations in various directions and planes, combined with free-hand elements.
  b. Various kinds of throws (horizontal throws, vertical throws, horizontal and vertical propeller throws, one-hand and two-hand throws).
  c. Various circles (small, medium and large, using the wrist, forearm and arm respectively).
  d. Rhythmic rotations of the stick.
  e. A variety of grips.
  f. Various rolls.

* When the stick is thrown, the body must always be moving. Throughout the routine, it is essential that the stick always moves in harmony with the body.`,
              zh: `1. 螺旋绕环
必须编入２次以上的螺旋绕环。

2. 滚动
必须编入１次以上、长度１m 以上的滚动。

3. 抛掷
  a. 抛掷的最低条件
    ⅰ. 必须编入３次以上的抛掷。
    ⅱ. 必须编入左手抛左手接１次以上、右手抛右手接１次以上。
  b. 抛掷的高度
    ⅰ. 抛掷的高度，从参赛者抛出的位置算起至少要达到２m 以上。
    
4. 翻腾类要素
  a. 必须编入前方、后方、侧方的翻腾。  
  b. 做翻腾时，必须有效地运用短棒。
  
5. 各要素
  a. 与徒手要素相结合的、各种不同方向和平面的螺旋绕环。
  b. 各种各样的抛掷。（水平抛、垂直抛、水平及垂直的螺旋绕环抛、单手抛、双手抛）
  c. 各种绕环（小、中、大）（分别用手腕、前臂、手臂进行）。
  d. 有节奏的短棒转动。
  e. 多种多样的握法。
  f. 各种各样的滚动。
  
※　抛出短棒时，身体必须始终在运动。贯穿整套动作，短棒始终与身体保持协调地运动，这对短棒的成套动作来说是不可或缺的。`,
            },
          },
          {
            title: {
              ja: '難度のレベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              zh: '判断难度级别的一般标准',
            },
            element: {
              ja: `スティックに特徴的な諸要素は、通常それが徒手のＢ難度の要素と組み合わされた場合はＢ難度、徒手のＣ難度の要素と組み合わされて実施された場合はＣ難度として数える。
1. Ａ難度
以下の要素は、徒手系や転回系の要素と組み合わせて実施した場合、Ａ難度として数える。
  a. スティックを保持したまま、Ａ難度の転回運動を実施した場合。
  b. Ａ難度の転回運動を実施している間に、スティックを１回操作した場合。
  c. スティックを投げ上げている間に、何も実施せずスティックを受けた場合。
  d. その他、Ａ難度としての組み合わせの技術価値の場合。
  
2. Ｂ難度
以下のスティックの要素は、徒手のB難度の要素と組み合わせた場合Ｂ難度として数える。
  a. スティックのコントロールが難しい場合
    i. スティックを投げて受け取る。（例：徒手の難度の要素と組み合わせて、スティックを２m 以上投げて受ける。）
  b. 動きを調和させるのが難しい場合
    i. 徒手の要素とスティックを組み合わせて行う。（例：徒手のＢ難度の要素と組み合わせて、プロペラ回旋を行う。）
  c. スティックの受け取りが難しい場合
    i. スティックを投げ上げている間に回転してからスティックを受け取る。（例：１回前転をしてからスティックを受け取るなど、様々な投げ方でスティックを投げ、その投げている間に様々な回転などを入れて受け取る。）
    ii. 視野外でスティックの投げ受けを行う。（例：様々な投げ方でスティックを投げ、視界の外で受け取る。）
    
3. Ｃ難度
以下の要素は、転回系の要素と組み合わせた場合Ｃ難度として数える。
  a. スティックを投げ上げている間に、Ｂ難度の転回運動を実施した場合。
  b. Ｂ難度の転回運動の間に、手具を２回以上操作した場合。
  c. Ｃ難度の転回運動を行なった場合。
  d. スティックを投げ上げている間に、２つの徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｃ難度としての組み合わせの技術価値の高い場合。
  
4. Ｄ難度
以下の要素は、転回系の要素と組み合わせた場合Ｄ難度として数える。
  a. スティックを投げ上げている間に、Ｃ難度の転回運動を実施した場合。
  b. Ｃ難度の転回運動を行なっている間に、スティックを２回以上操作した場合。
  c. Ｄ難度の転回運動を実施した場合。
  d. スティックを投げ上げている間に、３つ以上の徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｄ難度としての組み合わせの技術価値の高い場合。`,
              en: `Elements characteristic of the stick usually count as B difficulties when combined with B difficulty free-hand elements, and as C difficulties when combined with C difficulty free-hand elements.
1. A difficulty
The following elements count as A difficulties when combined with free-hand or tumbling elements.
  a. An A difficulty tumbling movement performed while holding the stick.
  b. One handling of the stick during an A difficulty tumbling movement.
  c. Catching the stick after a throw without performing anything during the throw.
  d. Other combinations with the technical value of an A difficulty.

2. B difficulty
The following stick elements count as B difficulties when combined with B difficulty free-hand elements.
  a. When controlling the stick is difficult
    i. Throwing and catching the stick. (e.g. throwing the stick at least 2 m and catching it, combined with a free-hand difficulty element.)
  b. When coordinating movements is difficult
    i. Combining free-hand elements with the stick. (e.g. a propeller rotation combined with a B difficulty free-hand element.)
  c. When catching the stick is difficult
    i. Rotating while the stick is in the air before catching it. (e.g. throwing the stick in various ways and catching it after various rotations during the throw, such as a forward roll.)
    ii. Throwing and catching the stick outside the field of vision. (e.g. throwing the stick in various ways and catching it outside the field of vision.)

3. C difficulty
The following elements count as C difficulties when combined with tumbling elements.
  a. A B difficulty tumbling movement performed while the stick is in the air.
  b. Two or more handlings of the apparatus during a B difficulty tumbling movement.
  c. A C difficulty tumbling movement.
  d. Two free-hand or tumbling elements combined while the stick is in the air.
  e. Other combinations with the high technical value of a C difficulty.

4. D difficulty
The following elements count as D difficulties when combined with tumbling elements.
  a. A C difficulty tumbling movement performed while the stick is in the air.
  b. Two or more handlings of the stick during a C difficulty tumbling movement.
  c. A D difficulty tumbling movement.
  d. Three or more free-hand or tumbling elements combined while the stick is in the air.
  e. Other combinations with the high technical value of a D difficulty.`,
              zh: `短棒特有的各要素，通常在与徒手Ｂ难度要素相结合时计为Ｂ难度，与徒手Ｃ难度要素相结合完成时计为Ｃ难度。
1. Ａ难度
以下要素与徒手类或翻腾类要素相结合完成时，计为Ａ难度。
  a. 握持短棒完成Ａ难度翻腾动作。
  b. 在完成Ａ难度翻腾动作期间操作短棒１次。
  c. 在短棒抛起的过程中不做任何动作而接住短棒。
  d. 其他具有Ａ难度组合技术价值的情况。
  
2. Ｂ难度
以下短棒要素与徒手B难度要素相结合时，计为Ｂ难度。
  a. 短棒难以控制的情况
    i. 抛出并接住短棒。（例：与徒手难度要素相结合，将短棒抛出２m 以上并接住。）
  b. 难以协调动作的情况
    i. 将徒手要素与短棒结合起来完成。（例：与徒手Ｂ难度要素相结合，做螺旋绕环。）
  c. 短棒难以接住的情况
    i. 在短棒抛起的过程中转体后再接住短棒。（例：做１次前滚翻后接住短棒等，用各种抛法抛出短棒，并在抛起期间加入各种转体等再接住。）
    ii. 在视野外进行短棒的抛接。（例：用各种抛法抛出短棒，在视野之外接住。）
    
3. Ｃ难度
以下要素与翻腾类要素相结合时，计为Ｃ难度。
  a. 在短棒抛起的过程中完成Ｂ难度翻腾动作。
  b. 在Ｂ难度翻腾动作期间操作器械２次以上。
  c. 完成Ｃ难度翻腾动作。
  d. 在短棒抛起的过程中结合完成２个徒手类或翻腾类动作。
  e. 其他具有Ｃ难度组合高技术价值的情况。
  
4. Ｄ难度
以下要素与翻腾类要素相结合时，计为Ｄ难度。
  a. 在短棒抛起的过程中完成Ｃ难度翻腾动作。
  b. 在完成Ｃ难度翻腾动作期间操作短棒２次以上。
  c. 完成Ｄ难度翻腾动作。
  d. 在短棒抛起的过程中结合完成３个以上徒手类或翻腾类动作。
  e. 其他具有Ｄ难度组合高技术价值的情况。`,
            },
          },
        ],
      },
      {
        title: {
          ja: 'リング（輪）の演技',
          en: 'Ring Routines',
          zh: '环的成套动作',
        },
        block: [
          {
            title: {
              ja: 'リング（輪）の規格',
              en: 'Ring Specifications',
              zh: '环的规格',
            },
            element: {
              ja: `1. 素材
木製または合成素材。

2. 重量
１つにつき最低200グラム。

3. 形状
大きさは内径40cm〜45cmとし太さ（径）は2.5cm〜3.5cmとする。または、全体あるいは一部にテープを巻いてもよい。

4. 色彩
自由。各輪の色を変えてもよい。`,
              en: `1. Material
Wood or synthetic material.

2. Weight
At least 200 g each.

3. Shape
Inner diameter 40 cm to 45 cm, thickness (diameter) 2.5 cm to 3.5 cm. The rings may be wholly or partly wrapped with tape.

4. Color
Free. The two rings may be different colors.`,
              zh: `1. 材质
木制或合成材料。

2. 重量
每个最低200克。

3. 形状
大小为内径40cm—45cm，粗细（直径）为2.5cm—3.5cm。此外，也可以在整体或局部缠绕胶带。

4. 颜色
自由。各环的颜色可以不同。`,
            },
          },
          {
            title: {
              ja: 'リング（輪）の技術',
              en: 'Ring Technique',
              zh: '环的技术',
            },
            element: {
              ja: `【諸要素群】
1. 基礎要素群
  a. まわし（手・身体）
  b. ころがし
  c. 投げ
  d. リングを用いた回転系
  
2. その他の要素群
  a. 振り
  b. 回旋
  c. 左右別々の動き
  
以上の諸要素は、以下のことを考慮に入れて実施することができる。
  a. ２つのリングを同時に操作する。
  b. 連続して操作する。
  c. さまざまな方向で行う。
  d. 移動をする場合、しない場合。
  e. 片足または両足支持、片手または両手使用。
  
3. リング（輪）の操作
リングの動きは、面を変更するような場合でも止めてはならず、リング自体の重さから来る惰力を利用して動かされ続けなければならない。リングの回しおよび振りを実施する場合は、リングは腕の延長のように扱われなければならない。リングの操作には身体の動きが伴わなければならない。

4. リング（輪）の持ち方
リングに特徴的な諸要素の実施のためには、リングに自在に動くように軽く持たななければならない。また、一時的に握りしめることも可能である。`,
              en: `[Element groups]
1. Basic element groups
  a. Spins (on the hand or body)
  b. Rolls
  c. Throws
  d. Tumbling with the rings

2. Other element groups
  a. Swings
  b. Circles
  c. Asymmetric movements

These elements can be performed taking the following into account.
  a. Handling both rings at the same time.
  b. Handling them one after the other.
  c. In various directions.
  d. With or without traveling.
  e. On one foot or both feet, with one hand or both hands.

3. Handling the rings
The rings must not stop moving, even when changing planes, and must keep moving using the momentum that comes from their own weight. For spins and swings, the rings must be handled like an extension of the arm. Ring handling must be accompanied by body movement.

4. Holding the rings
To perform the elements characteristic of the rings, the rings must be held lightly so that they move freely. They may also be gripped firmly for a moment.`,
              zh: `【各要素组】
1. 基础要素组
  a. 转动（手、身体）
  b. 滚动
  c. 抛掷
  d. 使用环的翻腾类
  
2. 其他要素组
  a. 摆动
  b. 绕环
  c. 左右不同的动作
  
以上各要素，可以在考虑以下各点的基础上进行。
  a. 同时操作２个环。
  b. 连续操作。
  c. 在各种方向进行。
  d. 移动或不移动。
  e. 单脚或双脚支撑，用单手或双手。
  
3. 环的操作
环的运动即使在变换平面时也不得停止，必须利用环自身重量产生的惯性持续运动。做环的转动和摆动时，环必须被当作手臂的延长来处理。环的操作必须伴随身体的运动。

4. 环的握法
为完成环特有的各要素，必须轻握环，使其能自由运动。此外，也可以暂时握紧。`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              zh: '编排的要求',
            },
            element: {
              ja: `
1. まわし（手・身体）
２回転以上のまわしを２回入れなければならない。

2. ころがし
ころがしは１回以上、長さは１m 以上入れなければならない。

3. 投げ
  a. 投げの条件
    ⅰ. ３回以上の投げを入れなければならない。
    ⅱ. ２つ同時投げを１回以上入れなければならない。ただし、リングを結合（組み合わせた）させた投げは２つ同時投げとはみなさない。
    ⅲ. ２つ同時投げは片手または両手または足で投げること。受け取りは自由。
    
  b. 投げの高さ
    ⅰ. 投げの高さは、競技者が投げたところから最低２m 以上の高さとする。
    
4. 転回系の要素
  a. 前方・後方・側方系を入れなければならない。
  b. 転回系を実施しているときに、リングが生かされなければならない。
  
5. 諸要素
  a. さまざまな種類のまわし。
  b. さまざまな種類の投げ。
  c. 面の変化を伴った振り、回旋など。
  d. 左右別々の動き。
  e. 多様な持ち方。
  f. さまざまな種類のころがし。
  
  ※　リングを一つのみ投げる場合には、他のリングも必ず動いていなければならない。演技全体を通じて２つのリングが常に体と調和を保って動いているということが、リングに演技には不可欠である。`,
              en: `1. Spins (on the hand or body)
Two spins of at least two rotations must be included.

2. Rolls
At least one roll of at least 1 m must be included.

3. Throws
  a. Requirements for throws
    i. At least three throws must be included.
    ii. At least one simultaneous throw of both rings must be included. A throw with the rings joined (linked together) is not regarded as a simultaneous throw.
    iii. A simultaneous throw must be made with one hand, both hands or the feet. The catch is free.

  b. Height of throws
    i. A throw must rise at least 2 m from the point of release.

4. Tumbling elements
  a. Forward, backward and sideways tumbling must be included.
  b. The rings must be used actively during tumbling.

5. Elements
  a. Various kinds of spins.
  b. Various kinds of throws.
  c. Swings, circles and similar movements with changes of plane.
  d. Asymmetric movements.
  e. A variety of grips.
  f. Various kinds of rolls.

  * When only one ring is thrown, the other ring must also be moving. Throughout the routine, it is essential that both rings always move in harmony with the body.`,
              zh: `
1. 转动（手、身体）
必须编入２次旋转２周以上的转动。

2. 滚动
必须编入１次以上、长度１m 以上的滚动。

3. 抛掷
  a. 抛掷的条件
    ⅰ. 必须编入３次以上的抛掷。
    ⅱ. 必须编入１次以上的２个同时抛。但是，将两个环结合（组合）在一起的抛不视为２个同时抛。
    ⅲ. ２个同时抛必须用单手、双手或脚抛出。接的方式自由。
    
  b. 抛掷的高度
    ⅰ. 抛掷的高度，从参赛者抛出的位置算起至少要达到２m 以上。
    
4. 翻腾类要素
  a. 必须编入前方、后方、侧方类动作。
  b. 做翻腾时，必须有效地运用环。
  
5. 各要素
  a. 各种各样的转动。
  b. 各种各样的抛掷。
  c. 伴有平面变化的摆动、绕环等。
  d. 左右不同的动作。
  e. 多种多样的握法。
  f. 各种各样的滚动。
  
  ※　只抛出一个环时，另一个环也必须在运动。贯穿整套动作，２个环始终与身体保持协调地运动，这对环的成套动作来说是不可或缺的。`,
            },
          },
          {
            title: {
              ja: '難度レベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              zh: '判断难度级别的一般标准',
            },
            element: {
              ja: `リングに特徴的な諸要素は、通常それが徒手のＢ難度の要素と組み合わせた場合はＢ難度、徒手のＣ難度の要素と組み合わせて実施した場合はＣ難度として数える。
1. Ａ難度
以下の要素は、徒手系や、転回系の要素と組み合わせて実施した場合、Ａ難度として数える。
  a. リングを保持したまま、Ａ難度の転回運動を実施した場合。
  b. Ａ難度の転回運動を実施している間に、リングを１回操作した場合。
  c. リングを投げ上げている間に、何も実施せずリングを受けた場合。
  d. その他、Ａ難度としての組み合わせの技術価値の場合。
  
2. Ｂ難度
以下の要素は、徒手のＢ難度の要素と組み合わせた場合Ｂ難度として数える。
  a. リングと身体の動きとの間のリズミカルな関係が、とりわけ複雑な場合
    ⅰ. リングの動きと身体の動きとの間に、完全な同時性を必要とする要素。
  b. リングの動きに使用される表面の生で、リングの面を保つのが難しい場合
    ⅰ. 不規則な表面上での大きなころがし。例：Ｂ難度の徒手の要素と組み合わせて、横に伸ばした両腕全体に沿ってリングをころがす。
    ⅱ. リングのひねり回しの大きさと数を制御するのに必要な弾みを調節しなければならない場合。（例：Ｂ難度の徒手の要素と結びつけて、２回以上リングをひねり回しながら投げる。)
  c. リングのコントロールが難しい場合
    ⅰ. リングを投げて受け取る。（例：徒手のＢ難度の徒手の要素と組み合わせて、リングを２回転以上させながら投げて受ける。）
  d. 動きを調和させるのが難しい場合
    ⅰ. 徒手の要素と輪を組み合わせて行う。（例：徒手のＢ難度の要素と組み合わせて、２つ同時まわしを行う。）
  e. リングの受け取りが難しい場合
    ⅰ. リングを投げ上げている間に回転をしてから受け取る。（例：１回前転をしてからリングを受けるなど、さまざまな投げ方でリングを投げ、その投げている間にさまざまな回転などを入れて受け取る。）
    ⅱ. 視野外でリングの投げや受けを行う。（例：さまざまな投げ方でリングを投げ、視界の外で受け取る。）
    
3. Ｃ難度
以下の要素は、転回系の要素と組み合わせた場合Ｃ難度として数える。
  a. リングを投げている間に、Ｂ難度の転回運動を実施した場合。
  b. Ｂ難度の転回運動の間に、リングを２回操作した場合。
  c. Ｃ難度の転回運動を行った場合。
  d. リングを投げ上げている間に、Ｂ難度の転回運動を実施した場合。
  e. その他、Ｃ難度としての組み合わせの技術価値の高い場合。
  
4. Ｄ難度
以下の要素は、転回系の要素と組み合わせた場合Ｄ難度として数える。
  a. リングを投げ上げている間に、Ｃ難度の転回運動を実施した場合。
  b. Ｃ難度の転回運動を行っている間に、リングを２回以上操作した場合。
  c. Ｄ難度の転回運動を実施した場合。
  d. リングを投げ上げている間に、３つ以上の徒手系や転回運動を組み合わせて実施した場合。
  e. その他、Ｄ難度としての組み合わせの技術価値の高い場合。`,
              en: `Elements characteristic of the rings usually count as B difficulties when combined with B difficulty free-hand elements, and as C difficulties when combined with C difficulty free-hand elements.
1. A difficulty
The following elements count as A difficulties when combined with free-hand or tumbling elements.
  a. An A difficulty tumbling movement performed while holding the rings.
  b. One handling of the rings during an A difficulty tumbling movement.
  c. Catching the ring after a throw without performing anything during the throw.
  d. Other combinations with the technical value of an A difficulty.

2. B difficulty
The following elements count as B difficulties when combined with B difficulty free-hand elements.
  a. When the rhythmic relationship between the rings and the body movement is especially complex
    i. Elements that require complete synchronization between the movement of the rings and the movement of the body.
  b. When keeping the plane of the ring is difficult because of the surface it moves on
    i. A long roll over an uneven surface. e.g. rolling the ring along both arms stretched sideways, combined with a B difficulty free-hand element.
    ii. When the momentum must be adjusted to control the amplitude and number of twisting spins of the ring. (e.g. throwing the ring while twisting it two or more times, combined with a B difficulty free-hand element.)
  c. When controlling the ring is difficult
    i. Throwing and catching the ring. (e.g. throwing the ring with two or more rotations and catching it, combined with a B difficulty free-hand element.)
  d. When coordinating movements is difficult
    i. Combining free-hand elements with the rings. (e.g. spinning both rings at the same time, combined with a B difficulty free-hand element.)
  e. When catching the ring is difficult
    i. Rotating while the ring is in the air before catching it. (e.g. throwing the ring in various ways and catching it after various rotations during the throw, such as a forward roll.)
    ii. Throwing or catching the ring outside the field of vision. (e.g. throwing the ring in various ways and catching it outside the field of vision.)

3. C difficulty
The following elements count as C difficulties when combined with tumbling elements.
  a. A B difficulty tumbling movement performed while the ring is in the air.
  b. Two handlings of the rings during a B difficulty tumbling movement.
  c. A C difficulty tumbling movement.
  d. A B difficulty tumbling movement performed while the ring is in the air.
  e. Other combinations with the high technical value of a C difficulty.

4. D difficulty
The following elements count as D difficulties when combined with tumbling elements.
  a. A C difficulty tumbling movement performed while the ring is in the air.
  b. Two or more handlings of the rings during a C difficulty tumbling movement.
  c. A D difficulty tumbling movement.
  d. Three or more free-hand or tumbling elements combined while the ring is in the air.
  e. Other combinations with the high technical value of a D difficulty.`,
              zh: `环特有的各要素，通常在与徒手Ｂ难度要素相结合时计为Ｂ难度，与徒手Ｃ难度要素相结合完成时计为Ｃ难度。
1. Ａ难度
以下要素与徒手类或翻腾类要素相结合完成时，计为Ａ难度。
  a. 握持环完成Ａ难度翻腾动作。
  b. 在完成Ａ难度翻腾动作期间操作环１次。
  c. 在环抛起的过程中不做任何动作而接住环。
  d. 其他具有Ａ难度组合技术价值的情况。
  
2. Ｂ难度
以下要素与徒手Ｂ难度要素相结合时，计为Ｂ难度。
  a. 环与身体动作之间的节奏关系特别复杂的情况
    ⅰ. 要求环的运动与身体的运动之间完全同时进行的要素。
  b. 因环所经过的表面而难以保持环的平面的情况
    ⅰ. 在不规则表面上的大幅度滚动。例：与Ｂ难度徒手要素相结合，让环沿着向侧方伸直的双臂整体滚动。
    ⅱ. 必须调节弹力以控制环拧转的幅度和次数的情况。（例：与Ｂ难度徒手要素相结合，一边使环拧转２周以上一边抛出。）
  c. 环难以控制的情况
    ⅰ. 抛出并接住环。（例：与徒手Ｂ难度要素相结合，使环旋转２周以上抛出并接住。）
  d. 难以协调动作的情况
    ⅰ. 将徒手要素与环结合起来完成。（例：与徒手Ｂ难度要素相结合，做２个同时转动。）
  e. 环难以接住的情况
    ⅰ. 在环抛起的过程中转体后再接住。（例：做１次前滚翻后接住环等，用各种抛法抛出环，并在抛起期间加入各种转体等再接住。）
    ⅱ. 在视野外进行环的抛或接。（例：用各种抛法抛出环，在视野之外接住。）
    
3. Ｃ难度
以下要素与翻腾类要素相结合时，计为Ｃ难度。
  a. 在环抛出的过程中完成Ｂ难度翻腾动作。
  b. 在Ｂ难度翻腾动作期间操作环２次。
  c. 完成Ｃ难度翻腾动作。
  d. 在环抛起的过程中完成Ｂ难度翻腾动作。
  e. 其他具有Ｃ难度组合高技术价值的情况。
  
4. Ｄ难度
以下要素与翻腾类要素相结合时，计为Ｄ难度。
  a. 在环抛起的过程中完成Ｃ难度翻腾动作。
  b. 在完成Ｃ难度翻腾动作期间操作环２次以上。
  c. 完成Ｄ难度翻腾动作。
  d. 在环抛起的过程中结合完成３个以上徒手类动作或翻腾动作。
  e. 其他具有Ｄ难度组合高技术价值的情况。`,
            },
          },
        ],
      },
      {
        title: {
          ja: 'ロープ（縄）の演技',
          en: 'Rope Routines',
          zh: '绳的成套动作',
        },
        block: [
          {
            title: {
              ja: 'ロープ（縄）の規格',
              en: 'Rope Specifications',
              zh: '绳的规格',
            },
            element: {
              ja: `1. 素材
麻製または合成繊維。ただし、合成繊維の場合は麻製のように軽くしなやかなものとする。

2. 重量
特になし。

3. 形状
長さは自由とする。両端には握り手をつけてはならないが１つか２つ両端に結び目をつくってもよい。直径については素材が同じであれば全体が同じ太さであっても中心部が両端より太くなってもよい。結び目の両端の解れは３cm 以内は認める。

4. 色彩
自由。`,
              en: `1. Material
Hemp or synthetic fiber. A synthetic rope must be as light and supple as a hemp rope.

2. Weight
No requirement.

3. Shape
Length is free. The rope must not have handles, but one or two knots may be tied at each end. If the material is the same throughout, the rope may be the same thickness throughout or thicker in the middle than at the ends. Frayed ends of up to 3 cm beyond the knots are allowed.

4. Color
Free.`,
              zh: `1. 材质
麻制或合成纤维。但合成纤维必须像麻制的一样轻而柔软。

2. 重量
无特别规定。

3. 形状
长度自由。两端不得安装握把，但可以在两端打１个或２个结。关于直径，只要材质相同，可以整体粗细一致，也可以中间部分比两端粗。结两端散开的部分允许在３cm 以内。

4. 颜色
自由。`,
            },
          },
          {
            title: {
              ja: 'ロープ（縄）の技術',
              en: 'Rope Technique',
              zh: '绳的技术',
            },
            element: {
              ja: `【諸要素群】
1. 基礎要素群
  a. さまざまな種類の連続とび
  b. 投げ
  c. ロープを用いた転回系
  
2. その他の要素群
  a. 振り
  b. 回旋
  
以上の要素群は以下のことを考慮に入れて実施することができる。
  a. ロープをひろげてまたは折って用いる。
  b. 片手または両手もちで行う。
  c. さまざまな方向で行う。さまざまな面で行う。
  d. 移動をする場合、しない場合。
  e. 移動をする場合、しない場合。
  f. 片足または両足支持、さまざまな方向にロープを回転させながら行う。
  
3. ロープの操作
ロープは常に明確な形状が保たれた状態でなければならない。動きは連続性を持ったものであること。すなわち、ロープはいつも動いており、張りがなく不活発な感じを表さないよう十分な弾みがついていなければならない。動きの大きさはリズムと関係を持つ（早いリズム＝制限された動き、遅いリズム＝ゆったりした動き）。

4. ロープの持ち方
ロープに特徴的な諸要素の実施のためには、ロープに自在に動くよう軽く持たなければならない。また、ロープを一時的に体に巻きつけたり両腕に張った状態にすることも可能である。`,
              en: `[Element groups]
1. Basic element groups
  a. Various kinds of consecutive jumps
  b. Throws
  c. Tumbling with the rope

2. Other element groups
  a. Swings
  b. Circles

These element groups can be performed taking the following into account.
  a. With the rope open or folded.
  b. Held in one hand or both hands.
  c. In various directions and in various planes.
  d. With or without traveling.
  e. With or without traveling.
  f. On one foot or both feet, turning the rope in various directions.

3. Handling the rope
The rope must always keep a clear shape. Its movement must be continuous: the rope is always moving, with enough momentum that it never looks slack or lifeless. The amplitude of the movement is related to the rhythm (fast rhythm = restricted movements, slow rhythm = broad movements).

4. Holding the rope
To perform the elements characteristic of the rope, it must be held lightly so that it moves freely. The rope may also be wrapped around the body for a moment or held taut between the arms.`,
              zh: `【各要素组】
1. 基础要素组
  a. 各种各样的连续跳
  b. 抛掷
  c. 使用绳的翻腾类
  
2. 其他要素组
  a. 摆动
  b. 绕环
  
以上各要素组，可以在考虑以下各点的基础上进行。
  a. 将绳展开或折叠使用。
  b. 用单手或双手握持进行。
  c. 在各种方向进行。在各种平面进行。
  d. 移动或不移动。
  e. 移动或不移动。
  f. 单脚或双脚支撑，一边向各种方向摇绳一边进行。
  
3. 绳的操作
绳必须始终保持明确的形状。动作必须具有连续性。也就是说，绳始终在运动，必须有足够的弹力，不得显得松弛、缺乏活力。动作的幅度与节奏相关（节奏快＝动作受限，节奏慢＝动作舒展）。

4. 绳的握法
为完成绳特有的各要素，必须轻握绳，使其能自由运动。此外，也可以暂时将绳缠绕在身上，或在双臂之间拉紧。`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              zh: '编排的要求',
            },
            element: {
              ja: `1. とび
下記の①〜④のとびを入れなければならない。ただし、転回系のロープのとびは除く。
  a. その場での２回以上の連続前回しとび（例：前回しの１重とびや２重とびを２回以上行う。）
  b. その場での２回以上の連続後ろ回しとび（例：後ろ回しの１重とびや２重とびを２回以上行う。）
  c. ６m 以上の移動を伴う２回以上の連続とび（例：移動をしながら回転とびを２回以上行う。）
  d. ３重とび（例：前回しの３重とびを１回以上行う。)
  ※　a〜dの中でdを行った場合はそれぞれの要素として数える。（例：前回しの３重とびを組み合わせて行いながら６m 以上移動した場合。)
  
2. 投げ
  a. 投げの条件
  ３回以上の投げを入れなければならない。
  b. 投げの高さ
  投げの高さは、競技者が投げたところから最低２m以上の高さとする。
  
3. 転回系の要素
  a. 前方・後方・側方系の転回系を入れなければならない。
  b. 転回系を実施しているときに、ロープが生かされなければならない。
  
4. 諸要素
  a. 前回しまたは後ろ回しなど、さまざまな種類の連続とび
  b. さまざまな方向、面で実施されるさまざまな種類の動き（振り、回旋、８の字運動。）
  c. さまざまな種類の投げ
  d. ロープのスピードの変化
  e. ロープの持ち方の変化（ひろげたロープ、折ったロープ、片手持ち、両手持ち、先端を持つ、中央を持つなど）
  ※　ロープを折った状態での操作は、この手具の特徴的なものであるが、それに偏った状態の演技ではいけない。ロープをひろげた状態の演技が重要である。片手持ちでの要素の実施には左手と右手は平均して使わなければならない。`,
              en: `1. Jumps
The jumps a to d below must be included. Rope jumps within tumbling do not count.
  a. At least two consecutive forward jumps on the spot (e.g. two or more forward single or double unders.)
  b. At least two consecutive backward jumps on the spot (e.g. two or more backward single or double unders.)
  c. At least two consecutive jumps traveling at least 6 m (e.g. two or more jumps while traveling.)
  d. A triple under (e.g. one or more forward triple unders.)
  * Among a to d, when d is performed together with another element, each counts as its own element. (e.g. traveling at least 6 m while performing forward triple unders.)

2. Throws
  a. Requirements for throws
  At least three throws must be included.
  b. Height of throws
  A throw must rise at least 2 m from the point of release.

3. Tumbling elements
  a. Forward, backward and sideways tumbling must be included.
  b. The rope must be used actively during tumbling.

4. Elements
  a. Various kinds of consecutive jumps, forward or backward
  b. Various kinds of movements in various directions and planes (swings, circles, figure eights)
  c. Various kinds of throws
  d. Changes in the speed of the rope
  e. Changes in how the rope is held (open, folded, in one hand, in both hands, by the end, by the middle, and so on)
  * Handling the rope folded is characteristic of this apparatus, but the routine must not rely too much on it. Routines with the rope open are important. When elements are performed with the rope in one hand, the left and right hands must be used equally.`,
              zh: `1. 跳
必须编入下列 a—d 的跳。但翻腾中的绳跳除外。
  a. 原地２次以上的连续向前摇跳（例：做２次以上向前摇的单摇跳或双摇跳。）
  b. 原地２次以上的连续向后摇跳（例：做２次以上向后摇的单摇跳或双摇跳。）
  c. 伴随６m 以上移动的２次以上的连续跳（例：一边移动一边做２次以上的转体跳。）
  d. 三摇跳（例：做１次以上向前摇的三摇跳。）
  ※　在 a—d 中做了 d 时，分别计为各自的要素。（例：一边组合做向前摇的三摇跳一边移动６m 以上的情况。）
  
2. 抛掷
  a. 抛掷的条件
  必须编入３次以上的抛掷。
  b. 抛掷的高度
  抛掷的高度，从参赛者抛出的位置算起至少要达到２m以上。
  
3. 翻腾类要素
  a. 必须编入前方、后方、侧方的翻腾。
  b. 做翻腾时，必须有效地运用绳。
  
4. 各要素
  a. 向前摇或向后摇等各种各样的连续跳
  b. 在各种方向、平面完成的各种各样的动作（摆动、绕环、８字运动。）
  c. 各种各样的抛掷
  d. 绳的速度变化
  e. 绳的握法变化（展开的绳、折叠的绳、单手握、双手握、握两端、握中央等）
  ※　在绳折叠状态下的操作是这一器械的特点，但成套动作不可偏重于此。绳展开状态下的成套动作很重要。用单手握持完成要素时，必须平均地使用左手和右手。`,
            },
          },
          {
            title: {
              ja: '難度のレベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              zh: '判断难度级别的一般标准',
            },
            element: {
              ja: `ロープに特徴的な諸要素は通常、それが徒手のＢ難度の要素と組み合わされた場合はＢ難度、徒手のＣ難度の要素と組み合わされて実施された場合はＣ難度として数える。
                  
1. Ａ難度
以下の要素は、徒手系や転回系の要素と組み合わせて実施した場合、Ａ難度として数える。
  a. ロープを保持したまま、Ａ難度の転回運動を実施した場合。
  b. Ａ難度の転回運動を実施している間に、ロープを１回操作した場合。
  c. ロープを投げ上げている間に、何も実施せずロープを受けた場合。
  d. その他、Ａ難度としての組み合わせの技術価値の場合。
  
2. Ｂ難度
以下の要素は、徒手のＢ難度の要素と組み合わせた場合Ｂ難度として数える。
  a. ロープと体の動きとの間のリズミカルな関係が複雑に構成されている場合。
    ⅰ. 徒手のＢ難度を１つ行う間に、ロープの動きを２つ（あるいはそれ以上）行う。（例：ロープを２回転させてＢ難度のジャンプを１回のジャンプの間にロープで頭上、足の下と交互に水平の円を描く。）
    ⅱ. ロープの運動と身体の動きとの間に、完全な同時性を必要とする要素。（例：投げの後、受け取ると同時にロープの上をジャンプする。）
  b. 動きの変化がロープの操作を難しくさせる場合。
    ⅰ. ロープが大きく扱う動きから、ゆっくりした動きに移行する。（例：ジャンプしながらロープを投げ、ロープの軌道を妨げずに受けてすぐにゆっくりしたロープの動きにつなげる。）
  c. ロープの長さのため、操作が難しい場合。
    ⅰ. 最初にロープの一端を投げ、次にもう一端を投げて１回転させ受け取る。開いたロープをくるぶしから上方へ、あるいはその逆方向に中断なく数回身体の周りに巻きつける。
  d. ロープの受け取りが難しい場合。
    ⅰ. ロープを投げ上げいる間に回転してから受け取る。（例：１回前転をしてからロープを受け取るなど、さまざまな投げ方でロープを投げ、その投げている間にさまざまな回転などを入れて受け取る。）
    ⅱ. 視野外でロープの投げ受けを行う。（例：さまざまな投げ方でロープを投げ、視界の外で受け取る。）
    
3. Ｃ難度
以下の要素は、転回系の要素と組み合わせた場合Ｃ難度として数える。
  a. ロープを投げている間に、Ｂ難度の転回運動を実施した場合。
  b. Ｂ難度の転回運動の間に、ロープを２回操作した場合。
  c. Ｃ難度の転回運動を行った場合。
  d. ロープを投げ上げている間に、２つの徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｃ難度としての組み合わせの技術価値の高い場合。
  
4. Ｄ難度
以下の要素は、転回系の要素と組み合わせた場合Ｄ難度として数える。
  a. ロープを投げ上げている間に、Ｃ難度の転回運動を実施した場合。
  b. Ｃ難度の転回運動を行なっている間に、ロープを２回以上操作した場合。
  c. Ｄ難度の転回運動を実施した場合。
  d. ロープを投げ上げている間に、３つ以上の徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｄ難度としての組み合わせの技術価値の高い場合。`,
              en: `Elements characteristic of the rope usually count as B difficulties when combined with B difficulty free-hand elements, and as C difficulties when combined with C difficulty free-hand elements.

1. A difficulty
The following elements count as A difficulties when combined with free-hand or tumbling elements.
  a. An A difficulty tumbling movement performed while holding the rope.
  b. One handling of the rope during an A difficulty tumbling movement.
  c. Catching the rope after a throw without performing anything during the throw.
  d. Other combinations with the technical value of an A difficulty.

2. B difficulty
The following elements count as B difficulties when combined with B difficulty free-hand elements.
  a. When the rhythmic relationship between the rope and the body movement is complex.
    i. Two (or more) rope movements during one B difficulty free-hand element. (e.g. turning the rope twice during one B difficulty jump, drawing horizontal circles alternately above the head and under the feet.)
    ii. Elements that require complete synchronization between the movement of the rope and the movement of the body. (e.g. jumping over the rope at the moment of catching it after a throw.)
  b. When a change of movement makes handling the rope difficult.
    i. Moving from large rope movements to slow ones. (e.g. throwing the rope during a jump, catching it without disturbing its path and immediately continuing with slow rope movements.)
  c. When the length of the rope makes handling difficult.
    i. Throwing one end of the rope first, then the other end, making it turn once before catching it. Wrapping the open rope around the body several times without interruption, from the ankles upward or the other way.
  d. When catching the rope is difficult.
    i. Rotating while the rope is in the air before catching it. (e.g. throwing the rope in various ways and catching it after various rotations during the throw, such as a forward roll.)
    ii. Throwing and catching the rope outside the field of vision. (e.g. throwing the rope in various ways and catching it outside the field of vision.)

3. C difficulty
The following elements count as C difficulties when combined with tumbling elements.
  a. A B difficulty tumbling movement performed while the rope is in the air.
  b. Two handlings of the rope during a B difficulty tumbling movement.
  c. A C difficulty tumbling movement.
  d. Two free-hand or tumbling elements combined while the rope is in the air.
  e. Other combinations with the high technical value of a C difficulty.

4. D difficulty
The following elements count as D difficulties when combined with tumbling elements.
  a. A C difficulty tumbling movement performed while the rope is in the air.
  b. Two or more handlings of the rope during a C difficulty tumbling movement.
  c. A D difficulty tumbling movement.
  d. Three or more free-hand or tumbling elements combined while the rope is in the air.
  e. Other combinations with the high technical value of a D difficulty.`,
              zh: `绳特有的各要素，通常在与徒手Ｂ难度要素相结合时计为Ｂ难度，与徒手Ｃ难度要素相结合完成时计为Ｃ难度。
                  
1. Ａ难度
以下要素与徒手类或翻腾类要素相结合完成时，计为Ａ难度。
  a. 握持绳完成Ａ难度翻腾动作。
  b. 在完成Ａ难度翻腾动作期间操作绳１次。
  c. 在绳抛起的过程中不做任何动作而接住绳。
  d. 其他具有Ａ难度组合技术价值的情况。
  
2. Ｂ难度
以下要素与徒手Ｂ难度要素相结合时，计为Ｂ难度。
  a. 绳与身体动作之间的节奏关系编排得复杂的情况。
    ⅰ. 在做１个徒手Ｂ难度的期间，做２个（或更多）绳的动作。（例：使绳摇转２周，在１次Ｂ难度跳跃的过程中用绳在头上和脚下交替画水平圆。）
    ⅱ. 要求绳的运动与身体的运动之间完全同时进行的要素。（例：抛出后，在接住的同时从绳上跳过。）
  b. 动作的变化使绳的操作变难的情况。
    ⅰ. 从大幅度的绳的动作过渡到缓慢的动作。（例：一边跳跃一边抛出绳，在不妨碍绳的轨迹的情况下接住，并立即衔接缓慢的绳的动作。）
  c. 因绳的长度而操作困难的情况。
    ⅰ. 先抛出绳的一端，接着抛出另一端使其旋转１周后接住。将展开的绳从脚踝向上、或向相反方向不间断地在身体周围缠绕数次。
  d. 绳难以接住的情况。
    ⅰ. 在绳抛起的过程中转体后再接住。（例：做１次前滚翻后接住绳等，用各种抛法抛出绳，并在抛起期间加入各种转体等再接住。）
    ⅱ. 在视野外进行绳的抛接。（例：用各种抛法抛出绳，在视野之外接住。）
    
3. Ｃ难度
以下要素与翻腾类要素相结合时，计为Ｃ难度。
  a. 在绳抛出的过程中完成Ｂ难度翻腾动作。
  b. 在Ｂ难度翻腾动作期间操作绳２次。
  c. 完成Ｃ难度翻腾动作。
  d. 在绳抛起的过程中结合完成２个徒手类或翻腾类动作。
  e. 其他具有Ｃ难度组合高技术价值的情况。
  
4. Ｄ难度
以下要素与翻腾类要素相结合时，计为Ｄ难度。
  a. 在绳抛起的过程中完成Ｃ难度翻腾动作。
  b. 在完成Ｃ难度翻腾动作期间操作绳２次以上。
  c. 完成Ｄ难度翻腾动作。
  d. 在绳抛起的过程中结合完成３个以上徒手类或翻腾类动作。
  e. 其他具有Ｄ难度组合高技术价值的情况。`,
            },
          },
        ],
      },
      {
        title: {
          ja: 'クラブ（棍）の演技',
          en: 'Club Routines',
          zh: '棍棒的成套动作',
        },
        block: [
          {
            title: {
              ja: '',
              en: '',
              zh: '',
            },
            element: {
              ja: `1. 素材
木製または合成素材。

2. 重量
１本につき最低200グラム。

3. 形状
瓶の形に似たもので頭・首・胴の３つの部分からなる。長さは40cm〜50cmとし先端の頭（球体）は最大直径４cm以内、首の直径は1.5cm〜3.5cm、胴は直径６cm〜９cm、長さは12cm〜18cmとする。また、全体あるいは一部にテープを巻いてもよい。

4. 色彩
自由。各クラブ（棍）の色を変えてもよい。`,
              en: `1. Material
Wood or synthetic material.

2. Weight
At least 200 g each.

3. Shape
Similar in shape to a bottle, with three parts: head, neck and body. Length 40 cm to 50 cm. The head (ball) at the end has a maximum diameter of 4 cm, the neck a diameter of 1.5 cm to 3.5 cm, and the body a diameter of 6 cm to 9 cm and a length of 12 cm to 18 cm. The clubs may be wholly or partly wrapped with tape.

4. Color
Free. The two clubs may be different colors.`,
              zh: `1. 材质
木制或合成材料。

2. 重量
每根最低200克。

3. 形状
形似瓶子，由头、颈、体３个部分组成。长度为40cm—50cm，顶端的头（球体）最大直径在４cm以内，颈的直径为1.5cm—3.5cm，体的直径为６cm—９cm、长度为12cm—18cm。此外，也可以在整体或局部缠绕胶带。

4. 颜色
自由。各棍棒的颜色可以不同。`,
            },
          },
          {
            title: {
              ja: 'クラブ（棍）の技術',
              en: 'Club Technique',
              zh: '棍棒的技术',
            },
            element: {
              ja: `【各要素群】
1. 基礎要素群
  a. プロペラ回旋（風車）
  b. ころがし
  c. 投げ
  d. クラブを用いた転回系
  
2. その他の要素群
  a. 振り
  b. 回旋
  c. 左右別々の動き
  d. 小円
  
以上の諸要素は、以下のことを考慮に入れて実施することができる。
  a. ２本のクラブを同時に操作する。連続して操作する。
  b. さまざまな方向で行う。
  c. 移動をする場合、しない場合。片足または両足支持。
  
【クラブの操作】
  クラブの動きは、面を変更するような場合でも止めてはならず、クラブ自体の重さから来る惰力を利用して動かされなければならない。クラブの小円、プロペラ回旋、および振りを実施する間は、クラブは手首の動きによって動かされる。その他の動きの間は、クラブは腕の延長のように扱われなければならない。また、首を長い時間持って演技してはならない。
  
【クラブの持ち方】
  大きな広がりを持つ動き（例えば、振り・プロペラ回旋など）の間には、通常、クラブの頭の部分を指で軽く握るようにしなければならない。プロペラ回旋、小円、クラブの握りなどの間には、クラブの頭の部分が手のくぼみの中で自由に回るように、指で軽く握るようにしなければならない。また、クラブの首の部分や太い部分を持ったり、広げた手の上にのせたりすることも、一時的には可能である。`,
              en: `[Element groups]
1. Basic element groups
  a. Propeller rotations (mills)
  b. Rolls
  c. Throws
  d. Tumbling with the clubs

2. Other element groups
  a. Swings
  b. Circles
  c. Asymmetric movements
  d. Small circles

These elements can be performed taking the following into account.
  a. Handling both clubs at the same time, or one after the other.
  b. In various directions.
  c. With or without traveling, on one foot or both feet.

[Handling the clubs]
  The clubs must not stop moving, even when changing planes, and must move using the momentum that comes from their own weight. During small circles, propeller rotations and swings, the clubs are moved by the wrists. During other movements, the clubs must be handled like an extension of the arm. The routine must not be performed holding the clubs by the neck for a long time.

[Holding the clubs]
  During wide movements (e.g. swings and propeller rotations), the club is usually held lightly with the fingers at the head. During propeller rotations, small circles and similar movements, the club must be held lightly with the fingers so that the head turns freely in the hollow of the hand. The club may also be held briefly by the neck or the body, or rest on the open hand.`,
              zh: `【各要素组】
1. 基础要素组
  a. 螺旋绕环（风车）
  b. 滚动
  c. 抛掷
  d. 使用棍棒的翻腾类
  
2. 其他要素组
  a. 摆动
  b. 绕环
  c. 左右不同的动作
  d. 小绕环
  
以上各要素，可以在考虑以下各点的基础上进行。
  a. 同时操作２根棍棒。连续操作。
  b. 在各种方向进行。
  c. 移动或不移动。单脚或双脚支撑。
  
【棍棒的操作】
  棍棒的运动即使在变换平面时也不得停止，必须利用棍棒自身重量产生的惯性来运动。做棍棒的小绕环、螺旋绕环和摆动期间，棍棒由手腕的动作带动。在其他动作期间，棍棒必须被当作手臂的延长来处理。此外，不得长时间握持颈部完成成套动作。
  
【棍棒的握法】
  在幅度较大的动作（例如摆动、螺旋绕环等）过程中，通常必须用手指轻握棍棒的头部。在螺旋绕环、小绕环、握棍等过程中，必须用手指轻握，使棍棒的头部能在手心的凹处自由转动。此外，也可以暂时握住棍棒的颈部或较粗的部分，或将其放在摊开的手上。`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              zh: '编排的要求',
            },
            element: {
              ja: `1. プロペラ回旋（風車）
プロペラ回旋は２回転以上を２回以上入れなければならない。

2. ころがし
ころがしは１回以上、長さは50cm以上を入れなければならない。

3. 投げ
  a. 投げの条件
    ⅰ. ３回以上の投げを入れなければならない。
    ⅱ. 同時投げを１回以上入れなければならない。
    ⅲ. ２つ同時投げは片手または両手または足で投げること。受けは自由。
    
  b. 投げの高さ
    ⅰ. 投げの高さは、競技者が投げたところから最低２m 以上の高さとする。
    
4. 転回系の要素
  a. 前方・後方・側方系の転回系を入れなければならない。
  b. 転回系を実施しているときに、クラブが生かされなければならない。
  
5. 諸要素
  a. 徒手の要素と組み合わされた、各種の異なった方向および面でのプロペラ回旋。
  b. さまざまな種類の投げ（１本投げ、２本同時投げ、２本連続投げ）。
  c. さまざまな回旋（小、中、大）（それぞれ手首、前腕、腕を使って行う）。
  d. 左右別々の動き。
  e. 多彩な持ち方。
  f. さまざまなころがし。
  
※　クラブ１本のみ投げる場合には、他のクラブも必ず動いていなければならない。演技全体を通じて２本のクラブが常に身体と調和を保って動いているということが、クラブの演技には不可欠である。`,
              en: `1. Propeller rotations (mills)
At least two propeller rotations of at least two turns must be included.

2. Rolls
At least one roll of at least 50 cm must be included.

3. Throws
  a. Requirements for throws
    i. At least three throws must be included.
    ii. At least one simultaneous throw must be included.
    iii. A simultaneous throw of both clubs must be made with one hand, both hands or the feet. The catch is free.

  b. Height of throws
    i. A throw must rise at least 2 m from the point of release.

4. Tumbling elements
  a. Forward, backward and sideways tumbling must be included.
  b. The clubs must be used actively during tumbling.

5. Elements
  a. Propeller rotations in various directions and planes, combined with free-hand elements.
  b. Various kinds of throws (one club, both clubs at the same time, both clubs one after the other).
  c. Various circles (small, medium and large, using the wrist, forearm and arm respectively).
  d. Asymmetric movements.
  e. A variety of grips.
  f. Various rolls.

* When only one club is thrown, the other club must also be moving. Throughout the routine, it is essential that both clubs always move in harmony with the body.`,
              zh: `1. 螺旋绕环（风车）
必须编入２次以上旋转２周以上的螺旋绕环。

2. 滚动
必须编入１次以上、长度50cm以上的滚动。

3. 抛掷
  a. 抛掷的条件
    ⅰ. 必须编入３次以上的抛掷。
    ⅱ. 必须编入１次以上的同时抛。
    ⅲ. ２个同时抛必须用单手、双手或脚抛出。接的方式自由。
    
  b. 抛掷的高度
    ⅰ. 抛掷的高度，从参赛者抛出的位置算起至少要达到２m 以上。
    
4. 翻腾类要素
  a. 必须编入前方、后方、侧方的翻腾。
  b. 做翻腾时，必须有效地运用棍棒。
  
5. 各要素
  a. 与徒手要素相结合的、各种不同方向和平面的螺旋绕环。
  b. 各种各样的抛掷（单根抛、２根同时抛、２根连续抛）。
  c. 各种绕环（小、中、大）（分别用手腕、前臂、手臂进行）。
  d. 左右不同的动作。
  e. 多种多样的握法。
  f. 各种各样的滚动。
  
※　只抛出１根棍棒时，另一根棍棒也必须在运动。贯穿整套动作，２根棍棒始终与身体保持协调地运动，这对棍棒的成套动作来说是不可或缺的。`,
            },
          },
          {
            title: {
              ja: '難度レベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              zh: '判断难度级别的一般标准',
            },
            element: {
              ja: `クラブに特徴的な諸要素は、通常それが徒手のＢ難度の要素と組み合わされた場合はＢ難度、徒手のＣ難度と組み合わされて実施された場合はＣ難度として数える。
1. A難度
以下の要素は、徒手系や転回系の要素と組み合わせて実施した場合、Ａ難度として数える。
  a. クラブを保持したまま、Ａ難度の転回運動を実施した場合。
  b. Ａ難度の転回運動を実施している間に、クラブを１回操作した場合。ただし、クラブのころがしは除く。
  c. クラブを投げ上げている間に、何も実施せずクラブを受けた場合。
  d. その他、Ａ難度としての組み合わせの技術価値の場合。
  
2. B難度
以下のクラブの要素は、徒手のＢ難度の要素と組み合わせられた場合Ｂ難度として数える。
  a. クラブのコントロールが難しい場合。
    ⅰ. ２本のクラブを同時に投げる。（例：徒手のＢ難度と組み合わせて２本のクラブを同時に投げて受け取る。または２本のクラブを２m 以上投げて受け取る。）
  b. 動きを調和させるのが難しい場合。
    ⅰ. 異なる要素を同時に実施する。（例：それぞれのクラブで異なる要素を同時に行う。）
    ⅱ. 同じ要素をずらして行う。（例：徒手のＢ難度の要素と組み合わせて、プロペラ回旋を行う。）
  c. クラブの投げ受けが難しい場合。
    ⅰ. 視野外でクラブの投げ受けを行う。（例：さまざまな投げ方でクラブを投げ、視界の外で受け取る。）
    ⅱ. クラブを投げ上げている間に回転をしてから受け取る。（例：１回前転をしてからクラブを受け取るなど、さまざまな投げ方でクラブを投げ、その投げている間にさまざまな回転などを入れて受け取る。）
   
3. C難度
以下の要素は、転回系の要素と組み合わせた場合Ｃ難度として数える。
  a. クラブを投げている間に、Ｂ難度の転回運動を実施した場合。
  b. Ｂ難度の転回運動の間に、クラブを２回操作した場合。
  c. Ｃ難度の転回運動を行った場合。
  d. クラブを投げ上げている間に、２つの徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｃ難度としての組み合わせ技術価値の高い場合。
  
4. D難度
以下の要素は、転回系の要素と組み合わせた場合Ｄ難度として数える。
  a. クラブを投げ上げている間に、Ｃ難度の転回運動を実施した場合。
  b. Ｃ難度の転回運動を行っている間に、クラブを２回以上操作した場合。
  c. Ｄ難度の転回運動を実施した場合。
  d. クラブを投げ上げている間に、３つ以上の徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｄ難度としての組み合わせの技術価値の高い場合。`,
              en: `Elements characteristic of the clubs usually count as B difficulties when combined with B difficulty free-hand elements, and as C difficulties when combined with C difficulty free-hand elements.
1. A difficulty
The following elements count as A difficulties when combined with free-hand or tumbling elements.
  a. An A difficulty tumbling movement performed while holding the clubs.
  b. One handling of the clubs during an A difficulty tumbling movement, excluding club rolls.
  c. Catching the club after a throw without performing anything during the throw.
  d. Other combinations with the technical value of an A difficulty.

2. B difficulty
The following club elements count as B difficulties when combined with B difficulty free-hand elements.
  a. When controlling the clubs is difficult.
    i. Throwing both clubs at the same time. (e.g. throwing both clubs at the same time and catching them, combined with a B difficulty free-hand element, or throwing both clubs at least 2 m and catching them.)
  b. When coordinating movements is difficult.
    i. Performing different elements at the same time. (e.g. performing a different element with each club at the same time.)
    ii. Performing the same element with a delay. (e.g. propeller rotations combined with a B difficulty free-hand element.)
  c. When throwing and catching the clubs is difficult.
    i. Throwing and catching the clubs outside the field of vision. (e.g. throwing the clubs in various ways and catching them outside the field of vision.)
    ii. Rotating while the clubs are in the air before catching them. (e.g. throwing the clubs in various ways and catching them after various rotations during the throw, such as a forward roll.)

3. C difficulty
The following elements count as C difficulties when combined with tumbling elements.
  a. A B difficulty tumbling movement performed while the club is in the air.
  b. Two handlings of the clubs during a B difficulty tumbling movement.
  c. A C difficulty tumbling movement.
  d. Two free-hand or tumbling elements combined while the club is in the air.
  e. Other combinations with the high technical value of a C difficulty.

4. D difficulty
The following elements count as D difficulties when combined with tumbling elements.
  a. A C difficulty tumbling movement performed while the club is in the air.
  b. Two or more handlings of the clubs during a C difficulty tumbling movement.
  c. A D difficulty tumbling movement.
  d. Three or more free-hand or tumbling elements combined while the club is in the air.
  e. Other combinations with the high technical value of a D difficulty.`,
              zh: `棍棒特有的各要素，通常在与徒手Ｂ难度要素相结合时计为Ｂ难度，与徒手Ｃ难度相结合完成时计为Ｃ难度。
1. A难度
以下要素与徒手类或翻腾类要素相结合完成时，计为Ａ难度。
  a. 握持棍棒完成Ａ难度翻腾动作。
  b. 在完成Ａ难度翻腾动作期间操作棍棒１次。但棍棒的滚动除外。
  c. 在棍棒抛起的过程中不做任何动作而接住棍棒。
  d. 其他具有Ａ难度组合技术价值的情况。
  
2. B难度
以下棍棒要素与徒手Ｂ难度要素相结合时，计为Ｂ难度。
  a. 棍棒难以控制的情况。
    ⅰ. 同时抛出２根棍棒。（例：与徒手Ｂ难度相结合，同时抛出２根棍棒并接住。或将２根棍棒抛出２m 以上并接住。）
  b. 难以协调动作的情况。
    ⅰ. 同时完成不同的要素。（例：用每根棍棒同时做不同的要素。）
    ⅱ. 错开时间完成相同的要素。（例：与徒手Ｂ难度要素相结合，做螺旋绕环。）
  c. 棍棒的抛接困难的情况。
    ⅰ. 在视野外进行棍棒的抛接。（例：用各种抛法抛出棍棒，在视野之外接住。）
    ⅱ. 在棍棒抛起的过程中转体后再接住。（例：做１次前滚翻后接住棍棒等，用各种抛法抛出棍棒，并在抛起期间加入各种转体等再接住。）
   
3. C难度
以下要素与翻腾类要素相结合时，计为Ｃ难度。
  a. 在棍棒抛出的过程中完成Ｂ难度翻腾动作。
  b. 在Ｂ难度翻腾动作期间操作棍棒２次。
  c. 完成Ｃ难度翻腾动作。
  d. 在棍棒抛起的过程中结合完成２个徒手类或翻腾类动作。
  e. 其他具有Ｃ难度组合高技术价值的情况。
  
4. D难度
以下要素与翻腾类要素相结合时，计为Ｄ难度。
  a. 在棍棒抛起的过程中完成Ｃ难度翻腾动作。
  b. 在完成Ｃ难度翻腾动作期间操作棍棒２次以上。
  c. 完成Ｄ难度翻腾动作。
  d. 在棍棒抛起的过程中结合完成３个以上徒手类或翻腾类动作。
  e. 其他具有Ｄ难度组合高技术价值的情况。`,
            },
          },
        ],
      },
    ],
  },
]
