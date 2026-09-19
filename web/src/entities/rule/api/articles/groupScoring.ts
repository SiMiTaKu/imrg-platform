import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、団体競技。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const GROUP_SCORING_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '団体競技',
      en: 'Group Competition',
      ko: '단체 경기',
    },
    section: [
      {
        title: {
          ja: '団体競技（自由演技）の採点',
          en: 'Scoring of the Group Competition (Free Routine)',
          ko: '단체 경기(자유 연기)의 채점',
        },
        block: [
          {
            title: {
              ja: '団体（自由演技）の採点項目と配点',
              en: 'Scoring Criteria and Points for the Group (Free Routine)',
              ko: '단체(자유 연기)의 채점 항목과 배점',
            },
            element: {
              ja: '自由演技の配点と採点項目は以下の通りとする。',
              en: 'The points and scoring criteria for the free routine are as follows.',
              ko: '자유 연기의 배점과 채점 항목은 다음과 같이 한다.',
            },
            image: [
              {
                src: '/images/rules/SK(D)group.png',
                alt: {
                  ja: '採点項目（Ｄ）',
                  en: 'Scoring criteria (D)',
                  ko: '채점 항목(D)',
                },
              },
              {
                src: '/images/rules/SK(E)group.png',
                alt: {
                  ja: '採点項目（Ｅ）',
                  en: 'Scoring criteria (E)',
                  ko: '채점 항목(E)',
                },
              },
            ],
          },
        ],
      },
      {
        title: {
          ja: '構成（Ｄ・Ａ）',
          en: 'Composition (D/A)',
          ko: '구성(D·A)',
        },
        block: [
          {
            title: {
              ja: '演技人数不足',
              en: 'Too Few Gymnasts',
              ko: '연기 인원 부족',
            },
            element: {
              ja: `演技人数が以下に満たない場合は、以下の通りとする。

1. ４名未満の場合は出場できない
1. ４〜５名の場合　【構成主任審判より減点：１名につき・・・1.50点】`,
              en: `If the number of gymnasts is below six, the following applies.

1. A group with fewer than four gymnasts may not compete.
1. A group with four or five gymnasts  [Deduction by the composition chief judge: 1.50 points per missing gymnast]`,
              ko: `연기 인원이 다음에 미치지 못하는 경우에는 다음과 같이 한다.

1. 4명 미만인 경우에는 출전할 수 없다
1. 4~5명인 경우  【구성 주임 심판원의 감점: 1명당...1.50점】`,
            },
          },
          {
            title: {
              ja: '構成に求められるもの',
              en: 'Requirements for the Composition',
              ko: '구성에 요구되는 것',
            },
            element: {
              ja: '演技は徒手系要素と回転系要素を持って構成され、高い技術的価値と各種要素の多様性、音楽と動きの関係や独創性が求められる。また、すべての運動が合理性と安定性を持った組み合わせで、豊富な運動量を持って構成されなければならない。',
              en: 'A routine is composed of free-hand elements and tumbling elements, and must have high technical value, a variety of elements, a good relationship between music and movement, and originality. All movements must be combined rationally and with stability, and the routine must contain a large amount of movement.',
              ko: '연기는 신체 요소와 텀블링 요소를 가지고 구성되며, 높은 기술적 가치와 각종 요소의 다양성, 음악과 움직임의 관계나 독창성이 요구된다. 또한 모든 운동이 합리성과 안정성을 갖춘 조합으로, 풍부한 운동량을 가지고 구성되어야 한다.',
            },
          },
          {
            title: {
              ja: '難度の要求要素',
              en: 'Difficulty Requirements',
              ko: '난도의 요구 요소',
            },
            element: {
              ja: `1. 難度要素の価値
競技では、事故の体を完全に支配すべきものであるから、演技は競技者の能力に応じた力強さと美しさと安定が必要である。

2. 難度要素の価値とレベル
団体競技の難度要素としては以下の難度を入れなければならない。

【違反した場合　　減点：　
Ｂ難度不足　１つにつき・・・0.10点
Ｃ難度不足　１つにつき・・・0.30点
Ｄ難度不足　１つにつき・・・0.50点】

※要求された数以上の難度は、ランク下の難度として数えることができる。`,
              en: `1. Value of difficulty elements
Gymnasts must have complete control of their bodies in competition, so a routine requires power, beauty and stability suited to the gymnasts' ability.

2. Value and level of difficulty elements
A group routine must include the following difficulties.

[Violation: deductions
Each missing B difficulty: 0.10 points
Each missing C difficulty: 0.30 points
Each missing D difficulty: 0.50 points]

* Difficulties beyond the required number can be counted as difficulties of a lower rank.`,
              ko: `1. 난도 요소의 가치
경기에서는 자신의 몸을 완전히 지배하여야 하므로, 연기는 경기자의 능력에 맞는 힘참과 아름다움과 안정이 필요하다.

2. 난도 요소의 가치와 레벨
단체 경기의 난도 요소로서 다음의 난도를 넣어야 한다.

【위반한 경우  감점: 
B 난도 부족 1개당...0.10점
C 난도 부족 1개당...0.30점
D 난도 부족 1개당...0.50점】

※요구된 수 이상의 난도는 한 단계 아래의 난도로 셀 수 있다.`,
            },
            image: [
              {
                src: '/images/rules/(D)requirement.png',
                alt: {
                  ja: '難度の要求要素表',
                  en: 'Table of difficulty requirements',
                  ko: '난도의 요구 요소 표',
                },
              },
            ],
          },
          {
            title: {
              ja: '徒手系の要求要素',
              en: 'Free-Hand Requirements',
              ko: '신체의 요구 요소',
            },
            element: {
              ja: `演技には徒手系基礎要素群１〜５全て入れなければならない。
２〜５は難度要素として数えることができるが、全員が同時または時間差で行われるものでなければならない。
また、静止は全員が同時に行うものでなければならない。

1. 徒手系基礎要素群の１つが全くない場合　　　【減点：１つにつき・・・1.00点】
2. 徒手系基礎要素群の１つが不十分な場合　　　【減点：１名につき・・・0.20点】
※不十分とは実施しない競技者がいた場合を示し、静止時間不足や柔軟性不足は実施減点とする。`,
              en: `A routine must include all the basic free-hand element groups 1 to 5.
Groups 2 to 5 can be counted as difficulty elements, but they must be performed by all gymnasts, either at the same time or one after another.
Static positions must be held by all gymnasts at the same time.

1. A basic free-hand element group is missing entirely.  [Deduction: 1.00 point per group]
2. A basic free-hand element group is incomplete.  [Deduction: 0.20 points per gymnast]
* Incomplete means that some gymnasts did not perform it. Holding a static position too briefly or insufficient flexibility is penalized in execution.`,
              ko: `연기에는 신체 기초 요소군 1~5를 모두 넣어야 한다.
2~5는 난도 요소로 셀 수 있으나, 전원이 동시에 또는 시간차로 실시하는 것이어야 한다.
또한 정지는 전원이 동시에 실시하는 것이어야 한다.

1. 신체 기초 요소군 중 하나가 전혀 없는 경우   【감점: 1개당...1.00점】
2. 신체 기초 요소군 중 하나가 불충분한 경우   【감점: 1명당...0.20점】
※불충분이란 실시하지 않은 경기자가 있는 경우를 가리키며, 정지 시간 부족이나 유연성 부족은 실시 감점으로 한다.`,
            },
            image: [
              {
                src: '/images/rules/(BM)requirement.png',
                alt: {
                  ja: '徒手系の要求要素表',
                  en: 'Table of free-hand requirements',
                  ko: '신체의 요구 요소 표',
                },
              },
            ],
          },
          {
            title: {
              ja: '転回系の種類',
              en: 'Types of Tumbling',
              ko: '텀블링의 종류',
            },
            element: {
              ja: `回転系には、助走を含めた転回運動と組および組立運動が含まれ、次の種類に分類される。

1. 同時技
全員が同時にスタートし、同時に技を終えるもの。
ただし同時技が終了後、直ちに数名が続けて転回系を行った場合も同時技として扱う。

2. シリーズ
競技者が一人ずつ、またはグループに分かれて、次々と途切れずに転回系を行ったもの。

3. 交差技
他の競技者の上を転回系で飛び越えるもの。

4. 組・組立運動
２人以上の競技者が組んで行う体操で、交互に体や力を利用しあうものをいう。
１名以上の競技者が接触したところから回転系として扱う。`,
              en: `Tumbling includes tumbling movements with their run-up, and partner and pyramid elements, and is classified into the following types.

1. Simultaneous elements
All gymnasts start and finish the element at the same time.
If several gymnasts continue with tumbling immediately after a simultaneous element, it is still treated as a simultaneous element.

2. Series
Gymnasts perform tumbling one after another without a break, individually or in groups.

3. Crossing elements
A gymnast tumbles over other gymnasts.

4. Partner and pyramid elements
Gymnastics performed by two or more gymnasts together, using each other's bodies and strength.
They count as tumbling from the moment one or more gymnasts make contact.`,
              ko: `텀블링에는 도움닫기를 포함한 텀블링 운동과 짝 및 조립 운동이 포함되며, 다음의 종류로 분류된다.

1. 동시 기술
전원이 동시에 출발하여 동시에 기술을 마치는 것.
단, 동시 기술이 끝난 후 곧바로 몇 명이 이어서 텀블링을 실시한 경우도 동시 기술로 취급한다.

2. 시리즈
경기자가 한 명씩, 또는 그룹으로 나뉘어 차례차례 끊김 없이 텀블링을 실시한 것.

3. 교차 기술
다른 경기자의 위를 텀블링으로 뛰어넘는 것.

4. 짝·조립 운동
2명 이상의 경기자가 짝을 이루어 실시하는 체조로, 서로 몸이나 힘을 이용하는 것을 말한다.
1명 이상의 경기자가 접촉한 지점부터 텀블링으로 취급한다.`,
            },
          },
          {
            title: {
              ja: '回転系の条件',
              en: 'Conditions for Tumbling',
              ko: '텀블링의 조건',
            },
            element: {
              ja: `演技で実施された以下のものは転回系として数える。

1. １名以上が転回運動を単一（１回）または連続して実施した場合。
2. 組または組立運動を実施した場合。
3. 全員がいくつかのグループに分かれて次々と途切れずに（１）や（２）の転回運動を実施した場合。
4. 転回運動を行う際の助走は、転回系の一部として認める。
5. 側転を除く接転運動（前転・後転・横転・倒立回転）は転回系として数えないが、宙返りの後に補助的運動として行う前転および後転は回転系の一部として認める。
6. ３歩以上の助走つきのとびこみ前転（両足踏切）、２歩以内の助走つきのとびこみ前転（含片足踏切）でもひねりを加えた場合。`,
              en: `The following count as tumbling when performed in a routine.

1. One or more gymnasts perform a tumbling movement, once or in a series.
2. A partner or pyramid element is performed.
3. All gymnasts, divided into groups, perform the tumbling in (1) or (2) one after another without a break.
4. The run-up to a tumbling movement is accepted as part of the tumbling.
5. Rolling movements other than cartwheels (forward roll, backward roll, sideways roll, walkover) do not count as tumbling, but a forward or backward roll performed after a salto as a supporting movement is accepted as part of the tumbling.
6. A dive roll with a run-up of three or more steps (two-foot take-off), or a dive roll with a run-up of two steps or fewer (including a one-foot take-off) with an added twist.`,
              ko: `연기에서 실시된 다음의 것은 텀블링으로 센다.

1. 1명 이상이 텀블링 운동을 단일(1회) 또는 연속으로 실시한 경우.
2. 짝 또는 조립 운동을 실시한 경우.
3. 전원이 몇 개의 그룹으로 나뉘어 차례차례 끊김 없이 (1)이나 (2)의 텀블링 운동을 실시한 경우.
4. 텀블링 운동을 할 때의 도움닫기는 텀블링의 일부로 인정한다.
5. 옆돌기를 제외한 구르기 운동(앞구르기·뒤구르기·옆구르기·물구나무서기 돌기)은 텀블링으로 세지 않으나, 공중돌기 뒤에 보조적 운동으로 실시하는 앞구르기 및 뒤구르기는 텀블링의 일부로 인정한다.
6. 3보 이상의 도움닫기가 있는 다이빙 앞구르기(양발 구름), 2보 이내의 도움닫기가 있는 다이빙 앞구르기(한발 구름 포함)라도 비틀기를 더한 경우.`,
            },
          },
          {
            title: {
              ja: '転回系の要求要素',
              en: 'Tumbling Requirements',
              ko: '텀블링의 요구 요소',
            },
            element: {
              ja: `1. 回転系は４回入れなければならない。
【違反した場合　減点・・・0.30点】

2. 演技には次の転回系基礎要素群１・２を入れなければならない。
また転回系基礎要素群３は２回まで入れることができる。
【違反した場合：減点・・・0.30点】
※組・組立運動または接触でのスタートは３群扱いとする。`,
              en: `1. A routine must include four tumbling passes.
[Violation: deduction 0.30 points]

2. A routine must include the basic tumbling element groups 1 and 2 below.
Basic tumbling element group 3 may be included up to two times.
[Violation: deduction 0.30 points]
* A start from a partner or pyramid element or from contact is treated as group 3.`,
              ko: `1. 텀블링은 4회 넣어야 한다.
【위반한 경우 감점...0.30점】

2. 연기에는 다음의 텀블링 기초 요소군 1·2를 넣어야 한다.
또한 텀블링 기초 요소군 3은 2회까지 넣을 수 있다.
【위반한 경우: 감점...0.30점】
※짝·조립 운동 또는 접촉으로의 출발은 3군으로 취급한다.`,
            },
            image: [
              {
                src: '/images/rules/(AM)requirement.png',
                alt: {
                  ja: '転回系の要求要素表',
                  en: 'Table of tumbling requirements',
                  ko: '텀블링의 요구 요소 표',
                },
              },
            ],
          },
          {
            title: {
              ja: '制限技',
              en: 'Restricted Elements',
              ko: '제한 기술',
            },
            element: {
              ja: '',
              en: '',
              ko: '',
            },
          },
          {
            title: {
              ja: '隊形の要求要素',
              en: 'Formation Requirements',
              ko: '대형의 요구 요소',
            },
            element: {
              ja: '隊形は最低５つ異なったものを含まなければならない。【違反した場合　減点・・・0.30点】',
              en: 'A routine must include at least five different formations. [Violation: deduction 0.30 points]',
              ko: '대형은 최소 5가지의 서로 다른 것을 포함하여야 한다.【위반한 경우 감점...0.30점】',
            },
          },
          {
            title: {
              ja: '演技の開始',
              en: 'Start of the Routine',
              ko: '연기의 시작',
            },
            element: {
              ja: `1. 演技の開始は、演技面のどこ位置からでも良いが、全員が配置について開始のポーズをとり、動きを止めてから始めなければならない。
2. 演技開始時における接触および組・組立運動は転回系としては扱わないものとする。ただし解除までは３秒以内とし、それを超えた場合や宙返りを入れた場合は転回系として数える。`,
              en: `1. The routine may start anywhere on the floor area, but all gymnasts must take their positions, hold a starting pose and be still before starting.
2. Contact and partner or pyramid elements at the start of the routine are not treated as tumbling. They must be released within 3 seconds; if they last longer or include a salto, they count as tumbling.`,
              ko: `1. 연기의 시작은 연기 면의 어느 위치에서라도 좋으나, 전원이 자리를 잡고 시작 포즈를 취하여 움직임을 멈춘 뒤에 시작하여야 한다.
2. 연기 시작 시의 접촉 및 짝·조립 운동은 텀블링으로 취급하지 않는다. 다만 해제까지는 3초 이내로 하며, 이를 초과한 경우나 공중돌기를 넣은 경우에는 텀블링으로 센다.`,
            },
          },
          {
            title: {
              ja: '演技の終了',
              en: 'End of the Routine',
              ko: '연기의 종료',
            },
            element: {
              ja: `1. 演技終了は演技面内であればどの位置でもよいが、全員が終了のポーズをとり完全に動きを止めなければならない。
2. 演技終了時の接触および組・組立運動は転回系としては扱わない。ただし、終了ポーズに入る前の動作から３秒以内とし、それを超えた場合や宙返りを入れた場合は転回系として数える。`,
              en: `1. The routine may end anywhere on the floor area, but all gymnasts must hold a final pose and stop moving completely.
2. Contact and partner or pyramid elements at the end of the routine are not treated as tumbling. They must be completed within 3 seconds of the movement leading into the final pose; if they last longer or include a salto, they count as tumbling.`,
              ko: `1. 연기 종료는 연기 면 안이라면 어느 위치라도 좋으나, 전원이 종료 포즈를 취하고 완전히 움직임을 멈추어야 한다.
2. 연기 종료 시의 접촉 및 짝·조립 운동은 텀블링으로 취급하지 않는다. 다만, 종료 포즈에 들어가기 전의 동작부터 3초 이내로 하며, 이를 초과한 경우나 공중돌기를 넣은 경우에는 텀블링으로 센다.`,
            },
          },
          {
            title: {
              ja: '技術的価値の採点',
              en: 'Scoring of Technical Value',
              ko: '기술적 가치의 채점',
            },
            element: {
              ja: `演技の技術の価値は次の項目によって採点する。

【難度の数とレベル】
第28条による。
                      
【難度要素】
1. 徒手系要素をともなって実施される難度
第66条による。

2. 転回系要素をともなって実施される難度
第67条による。

【各種要素の組み合わせ】
1. 各運動の組み合わせによる技術的価値　
演技は各運動の組み合わせによっても技術価値を異にする。

2. 難度要素の同一性
演技は競技者全員が同じ技術、または同価値の難度で構成されることが求められる。

3. 難度要素の配分
難度要素は演技全体に均一に配分されることが求められる。

4. 難度要素の安定
難度要素は競技者ののy力に応じて構成されなければならない。`,
              en: `The technical value of a routine is scored on the following points.

[Number and level of difficulties]
See Article 28.

[Difficulty elements]
1. Difficulties performed with free-hand elements
See Article 66.

2. Difficulties performed with tumbling elements
See Article 67.

[Combination of elements]
1. Technical value from combining movements
The technical value of a routine also depends on how the movements are combined.

2. Uniformity of difficulty elements
All gymnasts are required to perform the same technique or difficulties of the same value.

3. Distribution of difficulty elements
Difficulty elements should be distributed evenly throughout the routine.

4. Stability of difficulty elements
Difficulty elements must be chosen according to the gymnasts' ability.`,
              ko: `연기의 기술의 가치는 다음 항목에 따라 채점한다.

【난도의 수와 레벨】
제28조에 따른다.
                      
【난도 요소】
1. 신체 요소를 수반하여 실시되는 난도
제66조에 따른다.

2. 텀블링 요소를 수반하여 실시되는 난도
제67조에 따른다.

【각종 요소의 조합】
1. 각 운동의 조합에 의한 기술적 가치 
연기는 각 운동의 조합에 따라서도 기술 가치가 달라진다.

2. 난도 요소의 동일성
연기는 경기자 전원이 같은 기술, 또는 같은 가치의 난도로 구성될 것이 요구된다.

3. 난도 요소의 배분
난도 요소는 연기 전체에 균일하게 배분될 것이 요구된다.

4. 난도 요소의 안정
난도 요소는 경기자의 능력에 맞추어 구성되어야 한다.`,
            },
          },
          {
            title: {
              ja: '多様性の採点',
              en: 'Scoring of Variety',
              ko: '다양성의 채점',
            },
            element: {
              ja: `構成は、以下の項目において多様性に富むという印象を与えなければならない。

1. 徒手系要素の多様性
様々な徒手系の運動要素と組み合わせにおいて、多様性に富むものでなければならない。

2. 転回系要素の多様性
様々な転回系の要素や種類、その組み合わせにおいて、多様性の富むものでなければならない。

3. 空間仕様の多様性
様々な隊形や移動を含め、その方向、大きさ、軌道、高さにおいて、演技面全体を使うものでなければならない。

4. リズム変化の多様性
音楽の性格、そのリズムと完全に一致した運動で、そのリズムの変化が多様性に富むものでなければならない。

5.ダイナミズム（力動感）の変化の多様性
ダイナミズムとはスピードと力強さの変化によって表現される力動感のことで、その緩急の変化において、多様性に富むものでなければならない。`,
              en: `The composition must give an impression of great variety in the following respects.

1. Variety of free-hand elements
The routine must be rich in variety of free-hand movements and their combinations.

2. Variety of tumbling elements
The routine must be rich in variety of tumbling elements, their types and their combinations.

3. Variety in the use of space
The routine must use the whole floor area, with a variety of formations and movements across the floor, in their directions, sizes, paths and levels.

4. Variety of rhythm
The movements must match the character and rhythm of the music exactly, and the changes of rhythm must be rich in variety.

5. Variety of dynamics
Dynamics means the sense of power expressed by changes in speed and strength. The changes between fast and slow must be rich in variety.`,
              ko: `구성은 다음 항목에서 다양성이 풍부하다는 인상을 주어야 한다.

1. 신체 요소의 다양성
다양한 신체 운동 요소와 그 조합에서 다양성이 풍부한 것이어야 한다.

2. 텀블링 요소의 다양성
다양한 텀블링 요소와 종류, 그 조합에서 다양성이 풍부한 것이어야 한다.

3. 공간 사용의 다양성
다양한 대형과 이동을 포함하여, 그 방향, 크기, 궤도, 높이에서 연기 면 전체를 사용하는 것이어야 한다.

4. 리듬 변화의 다양성
음악의 성격, 그 리듬과 완전히 일치한 운동으로, 그 리듬의 변화가 다양성이 풍부한 것이어야 한다.

5.다이너미즘(역동감)의 변화의 다양성
다이너미즘이란 스피드와 힘참의 변화로 표현되는 역동감을 말하며, 그 완급의 변화에서 다양성이 풍부한 것이어야 한다.`,
            },
          },
          {
            title: {
              ja: '音楽と動きの関係の採点',
              en: 'Scoring of the Relationship Between Music and Movement',
              ko: '음악과 움직임의 관계의 채점',
            },
            element: {
              ja: '新体操の伴奏音楽は、よい音色とメロディーによって特徴付けられるものでなければならない。演技は音楽の性格やリズムに合致しなければならない。',
              en: 'The accompanying music for rhythmic gymnastics must be characterized by good tone and melody. The routine must match the character and rhythm of the music.',
              ko: '리듬체조의 반주 음악은 좋은 음색과 멜로디로 특징지어지는 것이어야 한다. 연기는 음악의 성격이나 리듬에 합치하여야 한다.',
            },
          },
          {
            title: {
              ja: '独創性の採点',
              en: 'Scoring of Originality',
              ko: '독창성의 채점',
            },
            element: {
              ja: '構成は、新しい技術や新しい組み合わせなど、新しさの探求と技術的な創造性によって特徴付けられる独創性が求められる。',
              en: 'The composition must show originality, characterized by the pursuit of novelty and technical creativity, such as new techniques and new combinations.',
              ko: '구성은 새로운 기술이나 새로운 조합 등, 새로움의 추구와 기술적인 창조성으로 특징지어지는 독창성이 요구된다.',
            },
          },
          {
            title: {
              ja: '構成の欠点',
              en: 'Composition Faults',
              ko: '구성의 결점',
            },
            element: {
              ja: `上記に欠点を示していない構成の減点は次の表による。
                  
構成欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

構成欠点表`,
              en: `Composition deductions not listed above follow the table below.

Composition fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of composition faults`,
              ko: `위에 결점을 제시하지 않은 구성의 감점은 다음 표에 따른다.
                  
구성 결점 기준
【대결점   현저히 부족한 경우    감점...0.30점】
【중결점   부족한 경우       감점...0.20점】
【소결점   조금 부족한 경우     감점...0.10점】
【미소결점  약간 부족한 경우     감점...0.05점】

구성 결점 표`,
            },
            image: [
              {
                src: '/images/rules/(D)kettenhyou.png',
                alt: {
                  ja: '構成欠点表',
                  en: 'Table of composition faults',
                  ko: '구성 결점 표',
                },
              },
            ],
          },
        ],
      },
      {
        title: {
          ja: '実施（Ｅ）',
          en: 'Execution (E)',
          ko: '실시(E)',
        },
        block: [
          {
            title: {
              ja: '演技のできばえ',
              en: 'Quality of the Routine',
              ko: '연기의 완성도',
            },
            element: {
              ja: '演技は徒手系の技術、転回系の技術、伴奏音楽との調和など全体の調和と安定性があり、全体を通じて途切れない印象で伸び伸びと行わなければならない。伴奏音楽に合わせ、軽快で美しく、かつ優美な表現を持った実施が求められる。',
              en: 'A routine must show overall harmony and stability in free-hand technique, tumbling technique and harmony with the accompanying music, and must be performed freely, giving an impression of continuity throughout. Execution that is light, beautiful and graceful, in time with the music, is required.',
              ko: '연기는 신체의 기술, 텀블링의 기술, 반주 음악과의 조화 등 전체의 조화와 안정성이 있고, 전체를 통하여 끊김 없는 인상으로 시원하게 실시하여야 한다. 반주 음악에 맞추어 경쾌하고 아름다우며, 우아한 표현을 지닌 실시가 요구된다.',
            },
          },
          {
            title: {
              ja: '体の動きの技術の採点',
              en: 'Scoring of Body Movement Technique',
              ko: '몸의 움직임의 기술의 채점',
            },
            element: {
              ja: `身体の動きの技術は、次の項目で採点される。

1. 徒手系の技術
徒手系は、美しい姿勢と柔軟性をもって行われ、みぞおちから始まる動きの自然性や深さ、大きさ、動きの間やアクセント、跳躍の高さ、そしてスピードに変化があり、身体の四肢の部分まで制御された動きでなければならない。

2.転回系の技術
転回系は、スピードと高さ、回転軸の正確性と着地の安定性を持ったダイナミックな動きでなければならない。

3. リズミカルな実施
演技は軽快に伸びやかに行わなければならない。

4.個人および全体の欠点
次の個人および全体の欠点があった場合は実施欠点表に応じて減点される。

5. 個人の姿勢やうお機に不正確鯖あった場合
6. 動きや隊形に乱れがあった場合`,
              en: `Body movement technique is scored on the following points.

1. Free-hand technique
Free-hand movements must be performed with beautiful posture and flexibility. Movements starting from the solar plexus must be natural, deep and large, with pauses and accents, height in jumps and changes of speed, and must be controlled to the tips of the limbs.

2. Tumbling technique
Tumbling must be dynamic, with speed and height, an accurate axis of rotation and stable landings.

3. Rhythmic execution
The routine must be performed lightly and expansively.

4. Individual and collective faults
Individual and collective faults such as the following are penalized according to the table of execution faults.

5. Inaccurate posture or movement of an individual gymnast
6. Disorder in movements or formations`,
              ko: `신체의 움직임의 기술은 다음 항목으로 채점된다.

1. 신체의 기술
신체 운동은 아름다운 자세와 유연성을 가지고 실시되며, 명치에서 시작되는 움직임의 자연스러움과 깊이, 크기, 움직임의 사이와 악센트, 도약의 높이, 그리고 스피드에 변화가 있고, 신체의 사지 부분까지 제어된 움직임이어야 한다.

2.텀블링의 기술
텀블링은 스피드와 높이, 회전축의 정확성과 착지의 안정성을 지닌 다이내믹한 움직임이어야 한다.

3. 리드미컬한 실시
연기는 경쾌하고 시원하게 실시하여야 한다.

4.개인 및 전체의 결점
다음의 개인 및 전체의 결점이 있었던 경우에는 실시 결점 표에 따라 감점된다.

5. 개인의 자세나 움직임에 부정확함이 있었던 경우
6. 움직임이나 대형에 흐트러짐이 있었던 경우`,
            },
          },
          {
            title: {
              ja: '全体的な調和の採点',
              en: 'Scoring of Overall Harmony',
              ko: '전체적인 조화의 채점',
            },
            element: {
              ja: `全体的な調和は次の項目で採点される。

1. 団体的同時性
演技は、最初から終了まで同じ動きや異なる動きが一体感を持って組み合わされ、そのスケールの大きさとスピード、リズム、ダイナミズムにおいて調和と一致のある実施が求められる。" +

2. 音楽との調和

3. 音楽が演技を妨害している場合
【減点：0.20点】

4. 音量が著しく大きい場合
【減点：0.20点】

5. 終末動作が音楽と一致しなかった場合
【減点：0.20点】

6. 芸術性と表現
演技には芸術性を持った表現が求められる。芸術性とは、身体の技術を用いて、音楽のテーマと構成のメッセージを観衆に表現し、伝え感動させることをいう。" +

7. 競技者の躊躇や演技の中断
【減点：１秒につき0.10点】`,
              en: `Overall harmony is scored on the following points.

1. Group synchronization
From start to finish, identical and different movements must be combined with a sense of unity, and the execution must be harmonious and unified in amplitude, speed, rhythm and dynamics.

2. Harmony with the music

3. The music disturbs the routine
[Deduction: 0.20 points]

4. The volume is excessively loud
[Deduction: 0.20 points]

5. The final movement does not match the music
[Deduction: 0.20 points]

6. Artistry and expression
A routine requires artistic expression. Artistry means using body technique to express the theme of the music and the message of the composition to the audience, conveying it and moving them.

7. Hesitation by a gymnast or interruption of the routine
[Deduction: 0.10 points per second]`,
              ko: `전체적인 조화는 다음 항목으로 채점된다.

1. 단체적 동시성
연기는 처음부터 끝까지 같은 움직임이나 다른 움직임이 일체감을 가지고 조합되어, 그 스케일의 크기와 스피드, 리듬, 다이너미즘에서 조화와 일치가 있는 실시가 요구된다.

2. 음악과의 조화

3. 음악이 연기를 방해하고 있는 경우
【감점: 0.20점】

4. 음량이 현저히 큰 경우
【감점: 0.20점】

5. 종말 동작이 음악과 일치하지 않은 경우
【감점: 0.20점】

6. 예술성과 표현
연기에는 예술성을 지닌 표현이 요구된다. 예술성이란 신체의 기술을 사용하여 음악의 테마와 구성의 메시지를 관중에게 표현하고 전달하여 감동시키는 것을 말한다.

7. 경기자의 주저나 연기의 중단
【감점: 1초당 0.10점】`,
            },
          },
          {
            title: {
              ja: '禁止事項',
              en: 'Prohibited Actions',
              ko: '금지 사항',
            },
            element: {
              ja: '演技中に漕いでない体の接触はしてはいけない。',
              en: 'Unnecessary body contact must not be made during the routine.',
              ko: '연기 중에 불필요한 몸의 접촉을 해서는 안 된다.',
            },
          },
          {
            title: {
              ja: '実施の欠点',
              en: 'Execution Faults',
              ko: '실시의 결점',
            },
            element: {
              ja: `上記に示していない実施の減点は次の表による。実施欠点基準
                  
実施欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

実施欠点表

倒立、バランス、柔軟の実施減点`,
              en: `Execution deductions not listed above follow the table below.

Execution fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of execution faults

Execution deductions for handstands, balances and flexibility`,
              ko: `위에 제시하지 않은 실시의 감점은 다음 표에 따른다. 실시 결점 기준
                  
실시 결점 기준
【대결점   현저히 부족한 경우    감점...0.30점】
【중결점   부족한 경우       감점...0.20점】
【소결점   조금 부족한 경우     감점...0.10점】
【미소결점  약간 부족한 경우     감점...0.05점】

실시 결점 표

물구나무서기, 밸런스, 유연성의 실시 감점`,
            },
            image: [
              {
                src: '/images/rules/(E)kettenhyou1.png',
                alt: {
                  ja: '実施欠点表（D）１',
                  en: 'Table of execution faults, part 1',
                  ko: '실시 결점 표(D) 1',
                },
              },
              {
                src: '/images/rules/(E)kettenhyou2.png',
                alt: {
                  ja: '実施欠点表（D）２',
                  en: 'Table of execution faults, part 2',
                  ko: '실시 결점 표(D) 2',
                },
              },
              {
                src: '/images/rules/(E)kettenhyou3.png',
                alt: {
                  ja: '実施欠点表（D）３',
                  en: 'Table of execution faults, part 3',
                  ko: '실시 결점 표(D) 3',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
