import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第3章 付録のうち、難度解図・特別規則・徒手の演技。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const APPENDIX_SPECIAL_RULES_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '難度解図',
      en: 'Illustrated Difficulties',
      ko: '난도 해설도',
    },
    section: [
      {
        title: {
          ja: '徒手系難度',
          en: 'Free-Hand Difficulties',
          ko: '신체 난도',
        },
        block: [
          {
            title: {
              ja: '徒手系難度',
              en: 'Free-Hand Difficulties',
              ko: '신체 난도',
            },
            element: {
              ja: '',
              en: '',
              ko: '',
            },
          },
          {
            title: {
              ja: '転回系難度',
              en: 'Tumbling Difficulties',
              ko: '공중돌기 난도',
            },
            element: {
              ja: '',
              en: '',
              ko: '',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      ja: '特別規則',
      en: 'Special Rules',
      ko: '특별 규칙',
    },
    section: [
      {
        title: {
          ja: 'ジュニア適用規則',
          en: 'Rules for Juniors',
          ko: '주니어 적용 규칙',
        },
        content: {
          ja: `次に示すものを除き、（公財）日本体操協会新体操採点規則による。

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
          en: `Except as shown below, the Rhythmic Gymnastics Code of Points of the Japan Gymnastics Association applies.

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
          ko: `아래에 제시하는 것을 제외하고는 (공익재단법인) 일본체조협회 리듬체조 채점 규칙에 따른다.

【금지 기술】
단체 경기와 개인 경기 모두 아래의 기술을 금지한다. 또한 금지 기술을 실시한 경우에는 구성과 실시 모두 0점으로 한다.

1. 앞 공중돌기(1과 1/2회전) 이상
2. 뒤 2회 공중돌기 이상
3. 앞 공중돌기에서 직접 앞으로 엎드려 지지
4. 뒤 2회 공중돌기에서 직접 앞으로 엎드려 지지
※ 모두 조 운동에서의 실시를 포함한다. 또한 (1)과 (3)은 뒤로 뛰기에서의 비틀기를 포함한다.

【난도의 요구 요소】
단체 경기와 개인 경기 모두 1D 2C 3B로 한다.

【특별 난도】
단체 경기에서 아래의 공중돌기 계열을 실시한 경우에는 특별 난도로 인정한다.

【감점 완화】
줄 3중 뛰기의 요소 부족

【수구 규격】
체격 차이가 크기 때문에 (공익재단법인) 일본체조협회 지정 업체가 판매하는 수구를 사용할 수 없는 경우에는 규격에 맞으면 직접 제작한 것도 사용할 수 있다.`,
        },
        image: [
          {
            src: '/images/rules/syugukikaku(J).png',
            alt: {
              ja: 'ジュニア手具規格表',
              en: 'Table of apparatus specifications for juniors',
              ko: '주니어 수구 규격표',
            },
          },
        ],
      },
      {
        title: {
          ja: '小学生適用規則',
          en: 'Rules for Elementary School Students',
          ko: '초등학생 적용 규칙',
        },
        content: {
          ja: `次に示すものを除き、（公財）日本体操協会新体操採点規則による。
              
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
          en: `Except as shown below, the Rhythmic Gymnastics Code of Points of the Japan Gymnastics Association applies.

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
          ko: `아래에 제시하는 것을 제외하고는 (공익재단법인) 일본체조협회 리듬체조 채점 규칙에 따른다.
              
【단체 경기】
자유 연기
1. 자유 연기는 라디오 체조 1을 기본으로 하고 신체 체조로 구성한다.
2. 연기 시간은 라디오 체조 1의 연기 시간으로 한다.
3. 단체 경기는 4명 이상이 연기를 실시한다.

4. 자유 연기의 배점
다음 5개 항목을 기준으로 한다. 각 항목은 10점 만점으로 채점하고 그 평균 점수를 각 심판의 득점으로 한다. 각 팀의 득점은 전체 심판원의 평균 점수로 한다.

채점 기준
a. 운동의 크기와 깊이, 악센트 등 체조를 정확하게 실시하였는가.
b. 음악과 체조의 조화가 이루어졌는가.
c. 대형의 변화와 이동이 잘 구성되었는가.
d. 연기 전체를 통하여 리듬감 있게 실시하였는가.
e. 팀 전체가 활기차고 즐겁게 연기하였는가.

5. 반주 음악은 붙이는 것이 바람직하나 구령으로 실시하여도 된다.
6. 공중돌기 계열은 공중돌기를 제외한 정도의 것을 넣어도 된다.
7. 대형의 변화와 대형 이동을 잘 구성한다.
8. 복장은 자유로 한다.
9. 심판 구성은 10명을 기준으로 한다.
10. 시상은 대회 요강에 따른다.

【채점 용지】
다음 관점에서 연기를 채점한다.`,
        },
        image: [
          {
            src: '/images/rules/junior(PCS).png',
            alt: {
              ja: '新体操小学校適用規則採点用紙',
              en: 'Score sheet under the rules for elementary school students',
              ko: '리듬체조 초등학교 적용 규칙 채점 용지',
            },
          },
        ],
      },
      {
        title: {
          ja: '高体連規則',
          en: 'Rules of the All Japan High School Athletic Federation',
          ko: '고등학교 체육 연맹 규칙',
        },
        content: {
          ja: `次に示すものを除き、（公財）日本体操協会男子新体操採点規則による。
              
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
          en: `Except as shown below, the Men's Rhythmic Gymnastics Code of Points of the Japan Gymnastics Association applies.

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
          ko: `아래에 제시하는 것을 제외하고는 (공익재단법인) 일본체조협회 남자 리듬체조 채점 규칙에 따른다.
              
【금지 기술에 대하여】
단체 경기와 개인 경기 모두 아래의 기술을 금지한다. 또한 금지 기술을 실시한 경우에는 그 연기를 0점으로 한다.  
※ 모두 조 운동을 포함한다.
1. 앞 공중돌기(1과 1/2회전) 이상(뒤로 뛰기에서의 비틀기를 포함한다)
2. 뒤 2회 공중돌기 이상

【제한 기술에 대하여】
뒤 계열의 도약 기술에서 비틀기를 동반하여 직접 앞으로 엎드려 지지를 하는 기술은 남자 채점 규칙 제2장 제31조의 구성 조건 안에서 사용할 수 있는 횟수를 1회로 한정한다. 위의 횟수를 넘겨 사용한 경우에는 그 연기의 구성 점수를 0점으로 한다.

【소속 마크에 대하여】
마크는 규정대로 하고 유니폼과 구별이 되도록 한다.

【동점 순위의 결정 방법에 대하여】
1. 단체 경기
  a. 구성 득점이 높은 팀.
  b. 위의 조건이 모두 동점인 경우에는 주임 심판원(구성·실시)의 합계 득점이 높은 팀.
  c. 위의 조건이 모두 동점인 경우에는 주임 심판원을 제외한 8명 심판원의 합계 득점이 높은 팀.
  d. 위의 조건이 모두 동점인 경우에는 주최 단체에 일임한다.

2. 개인 경기
  a. 2종목 가운데 최고 득점을 획득한 자.
  b. 위의 조건이 모두 동점인 경우에는 2종목 주임 심판원의 합계 점수가 높은 자.
  c. 위의 조건이 모두 동점인 경우에는 주임 심판원을 제외한 8명 심판원의 합계 득점이 높은 자.
  d. 위의 조건이 모두 동점인 경우에는 주최 단체에 일임한다.
  
【연기 중의 정전·선수 부상의 조치에 대하여】
1. 낙뢰 등으로 경기장이 정전되어 반주 음악이 멈춘 경우에는 심판장의 판단에 따라 연기를 중단하여도 된다. 재연기를 실시하게 한다.
2. 연기 중에 선수가 부상을 입은 경우에는 감독의 판단에 따라 연기를 중단시켜도 된다.

【성적 순위 및 시상에 대하여】
뜻밖의 사고 등으로 종목에 위험이 있었던 경우에는 종목별 선수권의 시상 대상으로 한다.`,
        },
      },
    ],
  },
  {
    title: {
      ja: '徒手の演技',
      en: 'Free-Hand Routines',
      ko: '신체 연기',
    },
    section: [
      {
        title: {
          ja: '徒手の基礎要素群',
          en: 'Basic Free-Hand Element Groups',
          ko: '신체의 기초 요소군',
        },
        content: {
          ja: `1. 各種徒手
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
          en: `1. Various free-hand movements
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
          ko: `1. 각종 신체 운동
상지, 하지, 몸통 앞으로 굽히기, 몸통 옆으로 굽히기, 몸통 돌리기, 팔 흔들기, 다리 굽혔다 펴기, 가슴 뒤로 젖히기, 몸의 탄성, 파동(뱀 모양 움직임) 등 다양한 복합 운동

2. 각종 도약(점프)
사슴 뛰기, 앞뒤 다리 벌려 뛰기, 좌우 다리 벌려 뛰기 등 다양한 도약.

3. 유연성
좌우 다리 벌려 몸통 앞으로 굽히기 유연성, 앞뒤 다리 벌리기 유연성, 다리 모아 몸통 앞으로 굽히기 유연성 등 다양한 유연성.

4. 밸런스
다양한 밸런스 등.

5. 물구나무서기
다양한 물구나무서기 등.

6. 각종 걷기와 달리기
다양한 스텝 등.

7. 회전 및 방향 전환
턴·피벗.   

이상의 요소는 다양한 방향, 다양한 면, 이동을 동반하거나 동반하지 않는 형태, 한 발 지지 또는 두 발 지지, 팔 동작과 연결하는 등 다채로운 움직임을 고려하여 실시할 수 있다.`,
        },
      },
      {
        title: {
          ja: '構成に要求されるもの',
          en: 'Requirements for the Composition',
          ko: '구성에 요구되는 것',
        },
        content: {
          ja: '演技の構成は、あらゆる徒手の要素を含め、跳躍力、柔軟性、巧緻性などを十分発揮し、あらゆる動きの変化で、その技術は独創的であり、迅速な動きで精神（３秒以上）を含まず、流れるように実施されなければならない。その動きのつなぎとして、前転・後転・側転・ブリッジを使用することは認める。',
          en: 'The composition of a routine must include all kinds of free-hand elements, make full use of jumping power, flexibility and dexterity, show all kinds of changes in movement, use original technique, and flow with quick movements without static pauses (of 3 seconds or more). Forward rolls, backward rolls, cartwheels and bridges may be used as links between movements.',
          ko: '연기의 구성은 모든 신체 요소를 포함하고 도약력, 유연성, 숙련성 등을 충분히 발휘하며, 온갖 움직임의 변화로 그 기술이 독창적이고, 신속한 움직임으로 정지(3초 이상)를 포함하지 않으며 흐르듯이 실시되어야 한다. 그 움직임의 연결로서 앞구르기·뒤구르기·옆돌기·브리지를 사용하는 것은 인정한다.',
        },
      },
      {
        title: {
          ja: '実施',
          en: 'Execution',
          ko: '실시',
        },
        content: {
          ja: '実施に際しては新体操の特徴を正確に生かしたものでなくてはならない。すなわち、正しい身体の位置、スケールの大きさ、支点の制御、移動の正確さなどである。身体の動きはすべて、緩急の変化、及び力動感、大きさ、スピードのひつな結びつきをともなった継続的な動作でなくてはならない。また、すべての要素は、頭と腕を含む身体全体で行われなくてはならない。つまり、動きは局部的であってはならない。',
          en: 'Execution must bring out the characteristics of rhythmic gymnastics accurately: correct body position, amplitude, control of the points of support, accuracy of movement across the floor, and so on. All body movements must be continuous, with changes between fast and slow and a close connection of dynamics, amplitude and speed. All elements must be performed with the whole body, including the head and arms; that is, movements must not be isolated to one part of the body.',
          ko: '실시에 있어서는 리듬체조의 특징을 정확하게 살린 것이어야 한다. 즉 올바른 신체의 위치, 스케일의 크기, 지지점의 제어, 이동의 정확성 등이다. 신체의 움직임은 모두 완급의 변화 및 역동감, 크기, 속도의 긴밀한 결합을 동반한 연속적인 동작이어야 한다. 또한 모든 요소는 머리와 팔을 포함한 신체 전체로 이루어져야 한다. 즉 움직임이 국부적이어서는 안 된다.',
        },
      },
      {
        title: {
          ja: '徒手の要素の典型的な欠点',
          en: 'Typical Faults in Free-Hand Elements',
          ko: '신체 요소의 전형적인 결점',
        },
        content: {
          ja: `【構成の欠点】
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
          en: `[Composition faults]
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
          ko: `【구성의 결점】
아래에 결점표를 제시한다.

【실시의 결점】
신체 난도의 수준을 판단하기 위한 일반적인 기준
1. 신체의 기초 요소는 보통 A 난도로 센다.
2. 다음과 같은 경우 신체 요소는 B 난도로 간주한다.
  a. 실시할 때 높은 수준의 운동 능력이 필요한 경우.
  (예: 수평면 이하의 등 뒤로 굽히기, 점프하면서 복잡한 움직임을 공중에서 실시하는 등)
  b. 실시할 때 높은 수준의 조정력이 필요한 경우.
  (예: 좁은 면적 위(발끝)에서 몸을 지지한다. 더 긴 시간 밸런스를 유지하는 1회전 반 이상(540도 이상)의 피벗을 실시하는 등)
  c. 서로 다른 2개의 요소를 동시에 실시하는 경우.
  (예: 밸런스 자세를 취하면서 몸을 완전히 파동시키는 등)
  d. 2개 이상의 요소(같은 종류 또는 다른 종류)를 도중에 다른 동작을 넣지 않고 연속해서 실시하는 경우.
  (예: 중간에 스텝을 넣지 않고 연속 점프를 실시하는 등)`,
        },
        image: [
          {
            src: '/images/rules/tosyukettenhyou.png',
            alt: {
              ja: '徒手欠点表',
              en: 'Table of free-hand faults',
              ko: '신체 결점표',
            },
          },
        ],
      },
      {
        title: {
          ja: '徒手難度表',
          en: 'Tables of Free-Hand Difficulties',
          ko: '신체 난도표',
        },
        content: {
          ja: `以下の表においては、諸要素はグループ別に記されている。これらの要素には非常に多くの実施方法および配列が考えられる。難度のレベルを決定するには、一般目安の項を参照のこと。
※徒手の難度は、団体競技の場合、全員が実施すれば１ランクあがる。`,
          en: `In the tables below, the elements are listed by group. These elements can be performed and arranged in a great many ways. To determine the level of difficulty, see the section on general guidelines.
* In the group competition, free-hand difficulties rise one rank when all gymnasts perform them.`,
          ko: `아래의 표에서는 여러 요소가 그룹별로 기재되어 있다. 이들 요소에는 매우 많은 실시 방법과 배열을 생각할 수 있다. 난도의 수준을 결정하려면 일반 기준 항목을 참조한다.
※ 신체의 난도는 단체 경기의 경우 전원이 실시하면 한 단계 올라간다.`,
        },
        image: [
          {
            src: '/images/rules/jump(D).png',
            alt: {
              ja: '徒手の難度表（跳躍）',
              en: 'Table of free-hand difficulties (jumps)',
              ko: '신체의 난도표(도약)',
            },
          },
          {
            src: '/images/rules/handstand(D).png',
            alt: {
              ja: '徒手の難度表（倒立）',
              en: 'Table of free-hand difficulties (handstands)',
              ko: '신체의 난도표(물구나무서기)',
            },
          },
          {
            src: '/images/rules/sijikaiten(D).png',
            alt: {
              ja: '徒手の難度表（支持回転表）',
              en: 'Table of free-hand difficulties (support rotations)',
              ko: '신체의 난도표(지지 회전표)',
            },
          },
          {
            src: '/images/rules/kaisen(D).png',
            alt: {
              ja: '徒手の難度表（旋回・ 回旋)',
              en: 'Table of free-hand difficulties (circles and rotations)',
              ko: '신체의 난도표(선회·회선)',
            },
          },
          {
            src: '/images/rules/turn(D).png',
            alt: {
              ja: '徒手の難度表（転向（ターン））',
              en: 'Table of free-hand difficulties (turns)',
              ko: '신체의 난도표(방향 전환(턴))',
            },
          },
          {
            src: '/images/rules/balance(D).png',
            alt: {
              ja: '徒手の難度表（平均）',
              en: 'Table of free-hand difficulties (balances)',
              ko: '신체의 난도표(평균)',
            },
          },
          {
            src: '/images/rules/stretchA(D).png',
            alt: {
              ja: '徒手の難度表（静的柔軟）',
              en: 'Table of free-hand difficulties (static flexibility)',
              ko: '신체의 난도표(정적 유연성)',
            },
          },
          {
            src: '/images/rules/stretchB(D).png',
            alt: {
              ja: '徒手の難度表（動的柔軟）',
              en: 'Table of free-hand difficulties (dynamic flexibility)',
              ko: '신체의 난도표(동적 유연성)',
            },
          },
        ],
      },
    ],
  },
]
