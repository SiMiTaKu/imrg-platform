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
      ko: '개인 경기의 연기',
    },
    section: [
      {
        title: {
          ja: 'スティック（棒）の演技',
          en: 'Stick Routines',
          ko: '스틱(봉)의 연기',
        },
        block: [
          {
            title: {
              ja: 'スティック（棒）の規格',
              en: 'Stick Specifications',
              ko: '스틱(봉)의 규격',
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
              ko: `1. 소재
목제 또는 합성 소재

2. 중량
최저 200그램

3. 형상
길이는 90cm~110cm로 하고 굵기(지름)는 2.5cm~3.5cm로 한다. 끝부분에는 고무 또는 합성 소재의 캡을 최대 지름 4cm 이내, 길이 5cm 이내로 붙일 수 있다. 또한 전체 또는 일부에 테이프를 감아도 된다.

4. 색채
자유`,
            },
          },
          {
            title: {
              ja: 'スティック（棒）の技術',
              en: 'Stick Technique',
              ko: '스틱(봉)의 기술',
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
              ko: `【제반 요소군】
1. 기초 요소군
  a. 프로펠러 회전(풍차)
  b. 굴리기
  c. 던지기
  d. 스틱(봉)을 사용한 공중돌기 계열
  
2. 그 밖의 요소군
  a. 흔들기
  b. 회전
  c. 미끄러뜨리기
  
이상의 제반 요소는 다음 사항을 고려하여 실시할 수 있다.
  a. 손을 바꿔 잡는 것을 동반하거나 동반하지 않는다.
  b. 다양한 방향으로 실시한다. 다양한 면에서 실시한다.
  c. 이동하는 경우와 이동하지 않는 경우.
  d. 한 발 또는 두 발 지지, 한 손 또는 두 손 사용.
  
3. 스틱(봉)의 조작
스틱의 움직임은 면을 변경하는 경우에도 멈추어서는 안 되며, 스틱 자체의 무게에서 오는 관성을 이용하여 계속 움직여야 한다. 스틱의 프로펠러 회전 및 흔들기를 실시하는 경우에는 팔의 연장처럼 다루어야 한다. 스틱의 조작에는 몸의 움직임이 동반되어야 한다.

4. 스틱(봉)을 잡는 법
크게 펼쳐지는 움직임(예를 들어 흔들기, 프로펠러 회전 등) 중에는 통상 스틱의 끝부분 또는 중앙(중심) 부분을 손가락으로 가볍게 쥐어야 한다. 또한 스틱을 편 손 위에 올려놓는 것도 일시적으로 가능하다.`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              ko: '구성에 요구되는 것',
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
              ko: `1. 프로펠러 회전
프로펠러 회전은 2회 이상 넣어야 한다.

2. 굴리기
굴리기는 1회 이상, 길이는 1m 이상 넣어야 한다.

3. 던지기
  a. 던지기의 최저 조건
    ⅰ. 3회 이상의 던지기를 넣어야 한다.
    ⅱ. 왼손으로 던져 왼손으로 받기 1회 이상, 오른손으로 던져 오른손으로 받기 1회 이상을 넣어야 한다.
  b. 던지기의 높이
    ⅰ. 던지기의 높이는 경기자가 던진 지점에서 최저 2m 이상의 높이로 한다.
    
4. 공중돌기 계열의 요소
  a. 전방·후방·측방 계열의 공중돌기를 넣어야 한다.  
  b. 공중돌기를 실시하고 있을 때 스틱이 살려져야 한다.
  
5. 제반 요소
  a. 신체 요소와 조합된, 각종 다른 방향 및 면에서의 프로펠러 회전.
  b. 다양한 종류의 던지기.(수평 던지기·세로 던지기·수평 및 세로 프로펠러 회전 던지기·한 손, 두 손 던지기)
  c. 다양한 회전(소, 중, 대)(각각 손목, 팔뚝, 팔을 사용하여 실시한다).
  d. 리듬감 있는 스틱 돌리기.
  e. 다양한 잡는 법.
  f. 다양한 굴리기.
  
※ 스틱을 던지는 경우에는 반드시 신체가 움직이고 있어야 한다. 연기 전체를 통하여 스틱이 항상 신체와 조화를 유지하며 움직이고 있다는 것이 스틱 연기에는 불가결하다.`,
            },
          },
          {
            title: {
              ja: '難度のレベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              ko: '난도의 수준을 판단하기 위한 일반적 기준',
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
              ko: `스틱에 특징적인 제반 요소는 통상 그것이 신체 B 난도의 요소와 조합된 경우에는 B 난도, 신체 C 난도의 요소와 조합되어 실시된 경우에는 C 난도로 센다.
1. A 난도
다음 요소는 신체 계열이나 공중돌기 계열의 요소와 조합하여 실시한 경우 A 난도로 센다.
  a. 스틱을 잡은 채로 A 난도의 공중돌기 운동을 실시한 경우.
  b. A 난도의 공중돌기 운동을 실시하고 있는 동안에 스틱을 1회 조작한 경우.
  c. 스틱을 던져 올리고 있는 동안에 아무것도 실시하지 않고 스틱을 받은 경우.
  d. 그 밖에 A 난도로서의 조합의 기술 가치가 있는 경우.
  
2. B 난도
다음 스틱의 요소는 신체 B 난도의 요소와 조합한 경우 B 난도로 센다.
  a. 스틱의 컨트롤이 어려운 경우
    i. 스틱을 던져서 받는다.(예: 신체 난도의 요소와 조합하여 스틱을 2m 이상 던져서 받는다.)
  b. 움직임을 조화시키기 어려운 경우
    i. 신체 요소와 스틱을 조합하여 실시한다.(예: 신체 B 난도의 요소와 조합하여 프로펠러 회전을 실시한다.)
  c. 스틱을 받기가 어려운 경우
    i. 스틱을 던져 올리고 있는 동안에 회전한 후 스틱을 받는다.(예: 앞구르기를 1회 한 후 스틱을 받는 등, 다양한 던지기 방법으로 스틱을 던지고 그 던지고 있는 동안에 다양한 회전 등을 넣어 받는다.)
    ii. 시야 밖에서 스틱의 던지기와 받기를 실시한다.(예: 다양한 던지기 방법으로 스틱을 던져 시야 밖에서 받는다.)
    
3. C 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 C 난도로 센다.
  a. 스틱을 던져 올리고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  b. B 난도의 공중돌기 운동 동안에 수구를 2회 이상 조작한 경우.
  c. C 난도의 공중돌기 운동을 실시한 경우.
  d. 스틱을 던져 올리고 있는 동안에 2개의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 C 난도로서의 조합의 기술 가치가 높은 경우.
  
4. D 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 D 난도로 센다.
  a. 스틱을 던져 올리고 있는 동안에 C 난도의 공중돌기 운동을 실시한 경우.
  b. C 난도의 공중돌기 운동을 실시하고 있는 동안에 스틱을 2회 이상 조작한 경우.
  c. D 난도의 공중돌기 운동을 실시한 경우.
  d. 스틱을 던져 올리고 있는 동안에 3개 이상의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 D 난도로서의 조합의 기술 가치가 높은 경우.`,
            },
          },
        ],
      },
      {
        title: {
          ja: 'リング（輪）の演技',
          en: 'Ring Routines',
          ko: '링(고리)의 연기',
        },
        block: [
          {
            title: {
              ja: 'リング（輪）の規格',
              en: 'Ring Specifications',
              ko: '링(고리)의 규격',
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
              ko: `1. 소재
목제 또는 합성 소재.

2. 중량
하나당 최저 200그램.

3. 형상
크기는 안지름 40cm~45cm로 하고 굵기(지름)는 2.5cm~3.5cm로 한다. 또는 전체나 일부에 테이프를 감아도 된다.

4. 색채
자유. 각 링의 색을 달리해도 된다.`,
            },
          },
          {
            title: {
              ja: 'リング（輪）の技術',
              en: 'Ring Technique',
              ko: '링(고리)의 기술',
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
              ko: `【제반 요소군】
1. 기초 요소군
  a. 돌리기(손·신체)
  b. 굴리기
  c. 던지기
  d. 링을 사용한 회전 계열
  
2. 그 밖의 요소군
  a. 흔들기
  b. 회전
  c. 좌우 따로따로의 움직임
  
이상의 제반 요소는 다음 사항을 고려하여 실시할 수 있다.
  a. 2개의 링을 동시에 조작한다.
  b. 연속해서 조작한다.
  c. 다양한 방향으로 실시한다.
  d. 이동하는 경우와 하지 않는 경우.
  e. 한 발 또는 두 발 지지, 한 손 또는 두 손 사용.
  
3. 링(고리)의 조작
링의 움직임은 면을 변경하는 경우에도 멈추어서는 안 되며, 링 자체의 무게에서 오는 관성을 이용하여 계속 움직여야 한다. 링의 돌리기 및 흔들기를 실시하는 경우에는 링을 팔의 연장처럼 다루어야 한다. 링의 조작에는 신체의 움직임이 동반되어야 한다.

4. 링(고리)을 잡는 법
링에 특징적인 제반 요소를 실시하기 위해서는 링이 자유롭게 움직이도록 가볍게 잡아야 한다. 또한 일시적으로 꽉 쥐는 것도 가능하다.`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              ko: '구성에 요구되는 것',
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
              ko: `
1. 돌리기(손·신체)
2회전 이상의 돌리기를 2회 넣어야 한다.

2. 굴리기
굴리기는 1회 이상, 길이는 1m 이상 넣어야 한다.

3. 던지기
  a. 던지기의 조건
    ⅰ. 3회 이상의 던지기를 넣어야 한다.
    ⅱ. 2개 동시 던지기를 1회 이상 넣어야 한다. 다만 링을 결합(조합)시킨 던지기는 2개 동시 던지기로 보지 않는다.
    ⅲ. 2개 동시 던지기는 한 손 또는 두 손 또는 발로 던질 것. 받기는 자유.
    
  b. 던지기의 높이
    ⅰ. 던지기의 높이는 경기자가 던진 지점에서 최저 2m 이상의 높이로 한다.
    
4. 공중돌기 계열의 요소
  a. 전방·후방·측방 계열을 넣어야 한다.
  b. 공중돌기를 실시하고 있을 때 링이 살려져야 한다.
  
5. 제반 요소
  a. 다양한 종류의 돌리기.
  b. 다양한 종류의 던지기.
  c. 면의 변화를 동반한 흔들기, 회전 등.
  d. 좌우 따로따로의 움직임.
  e. 다양한 잡는 법.
  f. 다양한 종류의 굴리기.
  
  ※ 링을 하나만 던지는 경우에는 다른 링도 반드시 움직이고 있어야 한다. 연기 전체를 통하여 2개의 링이 항상 몸과 조화를 유지하며 움직이고 있다는 것이 링 연기에는 불가결하다.`,
            },
          },
          {
            title: {
              ja: '難度レベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              ko: '난도 수준을 판단하기 위한 일반적 기준',
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
              ko: `링에 특징적인 제반 요소는 통상 그것이 신체 B 난도의 요소와 조합한 경우에는 B 난도, 신체 C 난도의 요소와 조합하여 실시한 경우에는 C 난도로 센다.
1. A 난도
다음 요소는 신체 계열이나 공중돌기 계열의 요소와 조합하여 실시한 경우 A 난도로 센다.
  a. 링을 잡은 채로 A 난도의 공중돌기 운동을 실시한 경우.
  b. A 난도의 공중돌기 운동을 실시하고 있는 동안에 링을 1회 조작한 경우.
  c. 링을 던져 올리고 있는 동안에 아무것도 실시하지 않고 링을 받은 경우.
  d. 그 밖에 A 난도로서의 조합의 기술 가치가 있는 경우.
  
2. B 난도
다음 요소는 신체 B 난도의 요소와 조합한 경우 B 난도로 센다.
  a. 링과 신체의 움직임 사이의 리듬 관계가 특히 복잡한 경우
    ⅰ. 링의 움직임과 신체의 움직임 사이에 완전한 동시성을 필요로 하는 요소.
  b. 링의 움직임에 사용되는 표면의 성질로 인해 링의 면을 유지하기 어려운 경우
    ⅰ. 불규칙한 표면 위에서의 큰 굴리기. 예: B 난도의 신체 요소와 조합하여 옆으로 뻗은 두 팔 전체를 따라 링을 굴린다.
    ⅱ. 링의 비틀어 돌리기의 크기와 횟수를 제어하는 데 필요한 탄력을 조절해야 하는 경우.(예: B 난도의 신체 요소와 결합하여 2회 이상 링을 비틀어 돌리면서 던진다.)
  c. 링의 컨트롤이 어려운 경우
    ⅰ. 링을 던져서 받는다.(예: 신체 B 난도의 요소와 조합하여 링을 2회전 이상 시키면서 던져서 받는다.)
  d. 움직임을 조화시키기 어려운 경우
    ⅰ. 신체 요소와 링을 조합하여 실시한다.(예: 신체 B 난도의 요소와 조합하여 2개 동시 돌리기를 실시한다.)
  e. 링을 받기가 어려운 경우
    ⅰ. 링을 던져 올리고 있는 동안에 회전을 한 후 받는다.(예: 앞구르기를 1회 한 후 링을 받는 등, 다양한 던지기 방법으로 링을 던지고 그 던지고 있는 동안에 다양한 회전 등을 넣어 받는다.)
    ⅱ. 시야 밖에서 링의 던지기나 받기를 실시한다.(예: 다양한 던지기 방법으로 링을 던져 시야 밖에서 받는다.)
    
3. C 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 C 난도로 센다.
  a. 링을 던지고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  b. B 난도의 공중돌기 운동 동안에 링을 2회 조작한 경우.
  c. C 난도의 공중돌기 운동을 실시한 경우.
  d. 링을 던져 올리고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  e. 그 밖에 C 난도로서의 조합의 기술 가치가 높은 경우.
  
4. D 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 D 난도로 센다.
  a. 링을 던져 올리고 있는 동안에 C 난도의 공중돌기 운동을 실시한 경우.
  b. C 난도의 공중돌기 운동을 실시하고 있는 동안에 링을 2회 이상 조작한 경우.
  c. D 난도의 공중돌기 운동을 실시한 경우.
  d. 링을 던져 올리고 있는 동안에 3개 이상의 신체 계열이나 공중돌기 운동을 조합하여 실시한 경우.
  e. 그 밖에 D 난도로서의 조합의 기술 가치가 높은 경우.`,
            },
          },
        ],
      },
      {
        title: {
          ja: 'ロープ（縄）の演技',
          en: 'Rope Routines',
          ko: '줄(로프)의 연기',
        },
        block: [
          {
            title: {
              ja: 'ロープ（縄）の規格',
              en: 'Rope Specifications',
              ko: '줄(로프)의 규격',
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
              ko: `1. 소재
마 제품 또는 합성 섬유. 다만 합성 섬유인 경우에는 마 제품처럼 가볍고 부드러운 것으로 한다.

2. 중량
특별히 없음.

3. 형상
길이는 자유로 한다. 양 끝에는 손잡이를 달아서는 안 되지만 한 개 또는 두 개의 매듭을 양 끝에 만들어도 된다. 지름에 대해서는 소재가 같다면 전체가 같은 굵기여도 되고 중심부가 양 끝보다 굵어도 된다. 매듭 양 끝의 풀림은 3cm 이내는 인정한다.

4. 색채
자유.`,
            },
          },
          {
            title: {
              ja: 'ロープ（縄）の技術',
              en: 'Rope Technique',
              ko: '줄(로프)의 기술',
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
              ko: `【제반 요소군】
1. 기초 요소군
  a. 다양한 종류의 연속 뛰기
  b. 던지기
  c. 줄을 사용한 공중돌기 계열
  
2. 그 밖의 요소군
  a. 흔들기
  b. 회전
  
이상의 요소군은 다음 사항을 고려하여 실시할 수 있다.
  a. 줄을 펴서 또는 접어서 사용한다.
  b. 한 손 또는 두 손으로 잡고 실시한다.
  c. 다양한 방향으로 실시한다. 다양한 면에서 실시한다.
  d. 이동하는 경우와 하지 않는 경우.
  e. 이동하는 경우와 하지 않는 경우.
  f. 한 발 또는 두 발 지지, 다양한 방향으로 줄을 회전시키면서 실시한다.
  
3. 줄의 조작
줄은 항상 명확한 형상이 유지된 상태여야 한다. 움직임은 연속성을 가진 것이어야 한다. 즉 줄은 언제나 움직이고 있으며, 팽팽함이 없고 활기가 없는 느낌을 나타내지 않도록 충분한 탄력이 붙어 있어야 한다. 움직임의 크기는 리듬과 관계를 가진다(빠른 리듬 = 제한된 움직임, 느린 리듬 = 여유로운 움직임).

4. 줄을 잡는 법
줄에 특징적인 제반 요소를 실시하기 위해서는 줄이 자유롭게 움직이도록 가볍게 잡아야 한다. 또한 줄을 일시적으로 몸에 감거나 두 팔에 팽팽하게 편 상태로 하는 것도 가능하다.`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              ko: '구성에 요구되는 것',
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
              ko: `1. 뛰기
아래의 ①~④의 뛰기를 넣어야 한다. 다만 공중돌기 계열의 줄 뛰기는 제외한다.
  a. 제자리에서의 2회 이상의 연속 앞돌리기 뛰기(예: 앞돌리기의 1중 뛰기나 2중 뛰기를 2회 이상 실시한다.)
  b. 제자리에서의 2회 이상의 연속 뒤돌리기 뛰기(예: 뒤돌리기의 1중 뛰기나 2중 뛰기를 2회 이상 실시한다.)
  c. 6m 이상의 이동을 동반한 2회 이상의 연속 뛰기(예: 이동하면서 회전 뛰기를 2회 이상 실시한다.)
  d. 3중 뛰기(예: 앞돌리기의 3중 뛰기를 1회 이상 실시한다.)
  ※ a~d 중에서 d를 실시한 경우에는 각각의 요소로 센다.(예: 앞돌리기의 3중 뛰기를 조합하여 실시하면서 6m 이상 이동한 경우.)
  
2. 던지기
  a. 던지기의 조건
  3회 이상의 던지기를 넣어야 한다.
  b. 던지기의 높이
  던지기의 높이는 경기자가 던진 지점에서 최저 2m 이상의 높이로 한다.
  
3. 공중돌기 계열의 요소
  a. 전방·후방·측방 계열의 공중돌기를 넣어야 한다.
  b. 공중돌기를 실시하고 있을 때 줄이 살려져야 한다.
  
4. 제반 요소
  a. 앞돌리기 또는 뒤돌리기 등 다양한 종류의 연속 뛰기
  b. 다양한 방향, 면에서 실시되는 다양한 종류의 움직임(흔들기, 회전, 8자 운동.)
  c. 다양한 종류의 던지기
  d. 줄의 속도 변화
  e. 줄을 잡는 법의 변화(편 줄, 접은 줄, 한 손 잡기, 두 손 잡기, 끝을 잡기, 중앙을 잡기 등)
  ※ 줄을 접은 상태에서의 조작은 이 수구의 특징적인 것이지만 그것에 치우친 연기여서는 안 된다. 줄을 편 상태의 연기가 중요하다. 한 손 잡기로 요소를 실시할 때에는 왼손과 오른손을 고르게 사용해야 한다.`,
            },
          },
          {
            title: {
              ja: '難度のレベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              ko: '난도의 수준을 판단하기 위한 일반적 기준',
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
              ko: `줄에 특징적인 제반 요소는 통상 그것이 신체 B 난도의 요소와 조합된 경우에는 B 난도, 신체 C 난도의 요소와 조합되어 실시된 경우에는 C 난도로 센다.
                  
1. A 난도
다음 요소는 신체 계열이나 공중돌기 계열의 요소와 조합하여 실시한 경우 A 난도로 센다.
  a. 줄을 잡은 채로 A 난도의 공중돌기 운동을 실시한 경우.
  b. A 난도의 공중돌기 운동을 실시하고 있는 동안에 줄을 1회 조작한 경우.
  c. 줄을 던져 올리고 있는 동안에 아무것도 실시하지 않고 줄을 받은 경우.
  d. 그 밖에 A 난도로서의 조합의 기술 가치가 있는 경우.
  
2. B 난도
다음 요소는 신체 B 난도의 요소와 조합한 경우 B 난도로 센다.
  a. 줄과 몸의 움직임 사이의 리듬 관계가 복잡하게 구성되어 있는 경우.
    ⅰ. 신체 B 난도를 1개 실시하는 동안에 줄의 움직임을 2개(또는 그 이상) 실시한다.(예: 줄을 2회전시켜 B 난도의 점프를 1회 하는 동안에 줄로 머리 위와 발 아래에 번갈아 수평의 원을 그린다.)
    ⅱ. 줄의 운동과 신체의 움직임 사이에 완전한 동시성을 필요로 하는 요소.(예: 던진 후 받는 것과 동시에 줄 위를 뛰어넘는다.)
  b. 움직임의 변화가 줄의 조작을 어렵게 만드는 경우.
    ⅰ. 줄을 크게 다루는 움직임에서 느린 움직임으로 이행한다.(예: 점프하면서 줄을 던지고 줄의 궤도를 방해하지 않고 받아 곧바로 느린 줄의 움직임으로 연결한다.)
  c. 줄의 길이 때문에 조작이 어려운 경우.
    ⅰ. 처음에 줄의 한쪽 끝을 던지고 이어서 다른 쪽 끝을 던져 1회전시켜 받는다. 편 줄을 발목에서 위쪽으로, 또는 그 반대 방향으로 중단 없이 여러 차례 신체 주위에 감는다.
  d. 줄을 받기가 어려운 경우.
    ⅰ. 줄을 던져 올리고 있는 동안에 회전한 후 받는다.(예: 앞구르기를 1회 한 후 줄을 받는 등, 다양한 던지기 방법으로 줄을 던지고 그 던지고 있는 동안에 다양한 회전 등을 넣어 받는다.)
    ⅱ. 시야 밖에서 줄의 던지기와 받기를 실시한다.(예: 다양한 던지기 방법으로 줄을 던져 시야 밖에서 받는다.)
    
3. C 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 C 난도로 센다.
  a. 줄을 던지고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  b. B 난도의 공중돌기 운동 동안에 줄을 2회 조작한 경우.
  c. C 난도의 공중돌기 운동을 실시한 경우.
  d. 줄을 던져 올리고 있는 동안에 2개의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 C 난도로서의 조합의 기술 가치가 높은 경우.
  
4. D 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 D 난도로 센다.
  a. 줄을 던져 올리고 있는 동안에 C 난도의 공중돌기 운동을 실시한 경우.
  b. C 난도의 공중돌기 운동을 실시하고 있는 동안에 줄을 2회 이상 조작한 경우.
  c. D 난도의 공중돌기 운동을 실시한 경우.
  d. 줄을 던져 올리고 있는 동안에 3개 이상의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 D 난도로서의 조합의 기술 가치가 높은 경우.`,
            },
          },
        ],
      },
      {
        title: {
          ja: 'クラブ（棍）の演技',
          en: 'Club Routines',
          ko: '곤봉(클럽)의 연기',
        },
        block: [
          {
            title: {
              ja: '',
              en: '',
              ko: '',
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
              ko: `1. 소재
목제 또는 합성 소재.

2. 중량
1개당 최저 200그램.

3. 형상
병 모양과 비슷한 것으로 머리·목·몸통의 3개 부분으로 이루어진다. 길이는 40cm~50cm로 하고 끝의 머리(구체)는 최대 지름 4cm 이내, 목의 지름은 1.5cm~3.5cm, 몸통은 지름 6cm~9cm, 길이는 12cm~18cm로 한다. 또한 전체 또는 일부에 테이프를 감아도 된다.

4. 색채
자유. 각 곤봉(클럽)의 색을 달리해도 된다.`,
            },
          },
          {
            title: {
              ja: 'クラブ（棍）の技術',
              en: 'Club Technique',
              ko: '곤봉(클럽)의 기술',
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
              ko: `【각 요소군】
1. 기초 요소군
  a. 프로펠러 회전(풍차)
  b. 굴리기
  c. 던지기
  d. 곤봉을 사용한 공중돌기 계열
  
2. 그 밖의 요소군
  a. 흔들기
  b. 회전
  c. 좌우 따로따로의 움직임
  d. 작은 원
  
이상의 제반 요소는 다음 사항을 고려하여 실시할 수 있다.
  a. 2개의 곤봉을 동시에 조작한다. 연속해서 조작한다.
  b. 다양한 방향으로 실시한다.
  c. 이동하는 경우와 하지 않는 경우. 한 발 또는 두 발 지지.
  
【곤봉의 조작】
  곤봉의 움직임은 면을 변경하는 경우에도 멈추어서는 안 되며, 곤봉 자체의 무게에서 오는 관성을 이용하여 움직여야 한다. 곤봉의 작은 원, 프로펠러 회전 및 흔들기를 실시하는 동안에는 곤봉은 손목의 움직임에 의해 움직여진다. 그 밖의 움직임 동안에는 곤봉은 팔의 연장처럼 다루어져야 한다. 또한 목 부분을 오랜 시간 잡고 연기해서는 안 된다.
  
【곤봉을 잡는 법】
  크게 펼쳐지는 움직임(예를 들어 흔들기, 프로펠러 회전 등) 중에는 통상 곤봉의 머리 부분을 손가락으로 가볍게 쥐어야 한다. 프로펠러 회전, 작은 원, 곤봉 쥐기 등의 동안에는 곤봉의 머리 부분이 손바닥 오목한 곳 안에서 자유롭게 돌도록 손가락으로 가볍게 쥐어야 한다. 또한 곤봉의 목 부분이나 굵은 부분을 잡거나 편 손 위에 올려놓는 것도 일시적으로는 가능하다.`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              ko: '구성에 요구되는 것',
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
              ko: `1. 프로펠러 회전(풍차)
프로펠러 회전은 2회전 이상을 2회 이상 넣어야 한다.

2. 굴리기
굴리기는 1회 이상, 길이는 50cm 이상을 넣어야 한다.

3. 던지기
  a. 던지기의 조건
    ⅰ. 3회 이상의 던지기를 넣어야 한다.
    ⅱ. 동시 던지기를 1회 이상 넣어야 한다.
    ⅲ. 2개 동시 던지기는 한 손 또는 두 손 또는 발로 던질 것. 받기는 자유.
    
  b. 던지기의 높이
    ⅰ. 던지기의 높이는 경기자가 던진 지점에서 최저 2m 이상의 높이로 한다.
    
4. 공중돌기 계열의 요소
  a. 전방·후방·측방 계열의 공중돌기를 넣어야 한다.
  b. 공중돌기를 실시하고 있을 때 곤봉이 살려져야 한다.
  
5. 제반 요소
  a. 신체 요소와 조합된, 각종 다른 방향 및 면에서의 프로펠러 회전.
  b. 다양한 종류의 던지기(1개 던지기, 2개 동시 던지기, 2개 연속 던지기).
  c. 다양한 회전(소, 중, 대)(각각 손목, 팔뚝, 팔을 사용하여 실시한다).
  d. 좌우 따로따로의 움직임.
  e. 다채로운 잡는 법.
  f. 다양한 굴리기.
  
※ 곤봉 1개만 던지는 경우에는 다른 곤봉도 반드시 움직이고 있어야 한다. 연기 전체를 통하여 2개의 곤봉이 항상 신체와 조화를 유지하며 움직이고 있다는 것이 곤봉 연기에는 불가결하다.`,
            },
          },
          {
            title: {
              ja: '難度レベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              ko: '난도 수준을 판단하기 위한 일반적 기준',
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
              ko: `곤봉에 특징적인 제반 요소는 통상 그것이 신체 B 난도의 요소와 조합된 경우에는 B 난도, 신체 C 난도와 조합되어 실시된 경우에는 C 난도로 센다.
1. A 난도
다음 요소는 신체 계열이나 공중돌기 계열의 요소와 조합하여 실시한 경우 A 난도로 센다.
  a. 곤봉을 잡은 채로 A 난도의 공중돌기 운동을 실시한 경우.
  b. A 난도의 공중돌기 운동을 실시하고 있는 동안에 곤봉을 1회 조작한 경우. 다만 곤봉의 굴리기는 제외한다.
  c. 곤봉을 던져 올리고 있는 동안에 아무것도 실시하지 않고 곤봉을 받은 경우.
  d. 그 밖에 A 난도로서의 조합의 기술 가치가 있는 경우.
  
2. B 난도
다음 곤봉의 요소는 신체 B 난도의 요소와 조합된 경우 B 난도로 센다.
  a. 곤봉의 컨트롤이 어려운 경우.
    ⅰ. 2개의 곤봉을 동시에 던진다.(예: 신체 B 난도와 조합하여 2개의 곤봉을 동시에 던져서 받는다. 또는 2개의 곤봉을 2m 이상 던져서 받는다.)
  b. 움직임을 조화시키기 어려운 경우.
    ⅰ. 다른 요소를 동시에 실시한다.(예: 각각의 곤봉으로 다른 요소를 동시에 실시한다.)
    ⅱ. 같은 요소를 시차를 두고 실시한다.(예: 신체 B 난도의 요소와 조합하여 프로펠러 회전을 실시한다.)
  c. 곤봉의 던지기와 받기가 어려운 경우.
    ⅰ. 시야 밖에서 곤봉의 던지기와 받기를 실시한다.(예: 다양한 던지기 방법으로 곤봉을 던져 시야 밖에서 받는다.)
    ⅱ. 곤봉을 던져 올리고 있는 동안에 회전을 한 후 받는다.(예: 앞구르기를 1회 한 후 곤봉을 받는 등, 다양한 던지기 방법으로 곤봉을 던지고 그 던지고 있는 동안에 다양한 회전 등을 넣어 받는다.)
   
3. C 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 C 난도로 센다.
  a. 곤봉을 던지고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  b. B 난도의 공중돌기 운동 동안에 곤봉을 2회 조작한 경우.
  c. C 난도의 공중돌기 운동을 실시한 경우.
  d. 곤봉을 던져 올리고 있는 동안에 2개의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 C 난도로서의 조합 기술 가치가 높은 경우.
  
4. D 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 D 난도로 센다.
  a. 곤봉을 던져 올리고 있는 동안에 C 난도의 공중돌기 운동을 실시한 경우.
  b. C 난도의 공중돌기 운동을 실시하고 있는 동안에 곤봉을 2회 이상 조작한 경우.
  c. D 난도의 공중돌기 운동을 실시한 경우.
  d. 곤봉을 던져 올리고 있는 동안에 3개 이상의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 D 난도로서의 조합의 기술 가치가 높은 경우.`,
            },
          },
        ],
      },
    ],
  },
]
