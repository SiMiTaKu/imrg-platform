import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、総則・審判・一般的な採点規則。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const SCORING_GENERAL_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '総則',
      en: 'General Provisions',
      ko: '총칙',
    },
    section: [
      {
        title: {
          ja: '採点規則の適用',
          en: 'Application of the Code of Points',
          ko: '채점 규칙의 적용',
        },
        content: {
          ja: `
1. 採点規則は、国際および国内競技における競技を共通の基準をもって判定し、その評価を客観的にならしめるものである。
2. 審判員の能力と採点の技術を高め、また競技者や指導者に競技のための練習の指針として役立たせるものである。
3. 審判員は、本規則を厳守しなければならない。厳守しない審判員は審判長によって改心されることがある。`,
          en: `1. The Code of Points is used to judge international and national competitions by common standards and to make their evaluation objective.
2. It serves to improve the ability of judges and their scoring technique, and guides gymnasts and coaches in their training for competition.
3. Judges must strictly observe these rules. Judges who do not may be replaced by the Jury President.`,
          ko: `
1. 채점 규칙은 국제 및 국내 경기에서의 경기를 공통된 기준으로 판정하고, 그 평가를 객관적인 것이 되게 하는 것이다.
2. 심판원의 능력과 채점 기술을 높이고, 또한 경기자나 지도자에게 경기를 위한 연습의 지침으로 도움이 되게 하는 것이다.
3. 심판원은 본 규칙을 엄수하여야 한다. 엄수하지 아니하는 심판원은 심판장에 의하여 교체될 수 있다.`,
        },
      },
    ],
  },
  {
    title: {
      ja: '審判',
      en: 'Judging',
      ko: '심판',
    },
    section: [
      {
        title: {
          ja: '競技と審判',
          en: 'Competition and Judging',
          ko: '경기와 심판',
        },
        content: {
          ja: `1. 新体操は判定競技であるから、審判員によって方向性と指導性とが決まるので、その責任は極めて重大である。
2. 審判員は、広い視野と高い見識と深い経験とを有し、かつ人格において良心的、公平でなければならない。
3. 審判員は、その特別の権限と職務上の立場から、その面前で実施した演技を深く感得し、正しく判定できなければならない。
4. 審判員は、演技の出来ばえ、構成における運動の難度および価値、その音楽伴奏との調和など、すべてを観察理解する能力が必要である。
5. 審判員は、技術の進歩以外に調和のある柔軟性および男子としての力強さを判定することも必要である。
6. 審判員は、観衆の拍手や見世物で価値のない演技に影響を受けることなく信念に基づく判定が必要である。
7. 不正または誤った判定は、指導者および競技者に大きな影響を与えるばかりでなく、新体操の普及にも支障をきたす。`,
          en: `1. Rhythmic gymnastics is a judged sport, so the judges set its direction and guide its development. Their responsibility is therefore very great.
2. Judges must have a broad perspective, sound judgment and deep experience, and must be conscientious and fair.
3. Given their special authority and position, judges must fully understand the routines performed before them and judge them correctly.
4. Judges need the ability to observe and understand everything: the quality of execution, the difficulty and value of the movements in the composition, their harmony with the accompanying music, and so on.
5. Besides technical progress, judges must also assess harmonious flexibility and masculine power.
6. Judges must judge by their own convictions, without being influenced by the audience's applause or by showy routines of no value.
7. Unfair or wrong judgments not only greatly affect coaches and gymnasts but also hinder the spread of rhythmic gymnastics.`,
          ko: `1. 리듬체조는 판정 경기이므로 심판원에 의하여 방향성과 지도성이 정해지며, 그 책임은 극히 중대하다.
2. 심판원은 넓은 시야와 높은 식견과 깊은 경험을 갖추고, 또한 인격에 있어서 양심적이고 공평하여야 한다.
3. 심판원은 그 특별한 권한과 직무상의 위치에서, 자신의 면전에서 실시된 연기를 깊이 헤아리고 올바르게 판정할 수 있어야 한다.
4. 심판원은 연기의 완성도, 구성에 있어서의 운동의 난도 및 가치, 그 음악 반주와의 조화 등 모든 것을 관찰하고 이해하는 능력이 필요하다.
5. 심판원은 기술의 진보 이외에 조화로운 유연성 및 남자로서의 힘참을 판정하는 것도 필요하다.
6. 심판원은 관중의 박수나 볼거리에 치우친 가치 없는 연기에 영향을 받지 아니하고 신념에 근거하여 판정하여야 한다.
7. 부정하거나 잘못된 판정은 지도자 및 경기자에게 큰 영향을 줄 뿐만 아니라, 리듬체조의 보급에도 지장을 초래한다.`,
        },
      },
      {
        title: {
          ja: '審判員規定',
          en: 'Regulations for Judges',
          ko: '심판원 규정',
        },
        content: {
          ja: `1. 本協会の監督下に開催される競技会では、公認審判認定規定に基づき資格を有した審判員が審判業務を行う。
2. 審判長・審判員は職責に専任し、いかなる名目を持っても、チームを指導し、競技に参加し、または他の任務を受諾することはできない。
3. 審判員は任命された競技会の全期間を通じ競技場でその任務を全うしなければならない。
4. 審判員は、いかなる場合にも採点について影響を受けてはならない。
5. 審判員は、競技会前に審判会議と審判研修会に出席する義務があり、これに出席しないと服務できない。
6. すべての審判員において各自の採点に対しての責任は全面的に自分自身にある。
7. 審判員は常に専門家としてのマナーを守り、偏見のない、倫理的に正しい模範的な態度で行動しなければならない。
8. 審判長ならびに審判員は競技開始１時間前に競技場に集合し、競技の移行順序・臨時の変更などについて通知を受ける。
9. 審判員は、定められた服装を着用し業務を行う。
  a. グレーのズボン
  b. ネイビーブルーの上衣
  c. 白のＹシャツ
  d. ネクタイ
  e. 審判バッヂ`,
          en: `1. At competitions held under the supervision of the Association, judging is done by judges certified under the regulations for certified judges.
2. The Jury President and the judges must devote themselves to their duties and may not coach a team, take part in the competition or accept any other role under any pretext.
3. Judges must carry out their duties at the competition hall throughout the competition to which they are appointed.
4. Judges must never be influenced in their scoring.
5. Judges must attend the judges' meeting and the judges' training session before the competition; those who do not may not serve.
6. Every judge is fully responsible for their own scores.
7. Judges must always behave professionally, without prejudice, in an ethical and exemplary manner.
8. The Jury President and the judges gather at the competition hall one hour before the start of the competition and are informed of the order of the competition and any temporary changes.
9. Judges carry out their duties in the prescribed attire.
  a. Gray trousers
  b. Navy blue jacket
  c. White shirt
  d. Tie
  e. Judge's badge`,
          ko: `1. 본 협회의 감독하에 개최되는 경기회에서는 공인 심판 인정 규정에 근거하여 자격을 가진 심판원이 심판 업무를 수행한다.
2. 심판장·심판원은 그 직책에 전임하며, 어떠한 명목으로도 팀을 지도하거나 경기에 참가하거나 다른 임무를 수락할 수 없다.
3. 심판원은 임명된 경기회의 전 기간에 걸쳐 경기장에서 그 임무를 완수하여야 한다.
4. 심판원은 어떠한 경우에도 채점에 관하여 영향을 받아서는 아니 된다.
5. 심판원은 경기회 전에 심판 회의와 심판 연수회에 출석할 의무가 있으며, 이에 출석하지 아니하면 복무할 수 없다.
6. 모든 심판원에게 있어서 각자의 채점에 대한 책임은 전면적으로 자기 자신에게 있다.
7. 심판원은 항상 전문가로서의 예의를 지키고, 편견 없이 윤리적으로 올바른 모범적인 태도로 행동하여야 한다.
8. 심판장 및 심판원은 경기 개시 1시간 전에 경기장에 집합하여, 경기의 진행 순서·임시 변경 등에 대하여 통지를 받는다.
9. 심판원은 정해진 복장을 착용하고 업무를 수행한다.
  a. 회색 바지
  b. 네이비블루 상의
  c. 흰색 와이셔츠
  d. 넥타이
  e. 심판 배지`,
        },
      },
      {
        title: {
          ja: '審判研修会と審判会議',
          en: "Judges' Training Sessions and Judges' Meetings",
          ko: '심판 연수회와 심판 회의',
        },
        content: {
          ja: `1. 審判会議および審判研修会では、規定演技のついては公式解説文または公式映像を参考にし、自由演技については、演技の構成・実施の良否を十分に審議し、採点の焦点を明らかにしなければならない。
2. 審判会議で能力不十分と認められた審判員は競技会から除名されることがある。`,
          en: `1. At the judges' meeting and training session, compulsory routines are reviewed with the official written explanation or the official video, and free routines are reviewed thoroughly for the quality of composition and execution, so that the focus of scoring is made clear.
2. Judges found to be insufficiently capable at the judges' meeting may be removed from the competition.`,
          ko: `1. 심판 회의 및 심판 연수회에서는 규정 연기에 대하여는 공식 해설문 또는 공식 영상을 참고하고, 자유 연기에 대하여는 연기의 구성·실시의 좋고 나쁨을 충분히 심의하여 채점의 초점을 명확히 하여야 한다.
2. 심판 회의에서 능력이 불충분하다고 인정된 심판원은 경기회에서 제명될 수 있다.`,
        },
      },
      {
        title: {
          ja: '審判員宣誓',
          en: "Judges' Oath",
          ko: '심판원 선서',
        },
        content: {
          ja: `審判員は、次の宣誓文を厳粛に宣誓する。
              
『私は、審判員の資格において、スポーツの品位および誠実の精神を持ってのみ行動すること。ならびに、人物・所属を念頭に置かず、実施された演技を良心的に審判することを誓います。』
              `,
          en: `Judges solemnly take the following oath.

"As a judge, I promise to act only in the spirit of sporting dignity and integrity, and to judge the routines performed conscientiously, without regard to the person or the organization."`,
          ko: `심판원은 다음의 선서문을 엄숙히 선서한다.
              
『저는 심판원의 자격에 있어서 스포츠의 품위 및 성실의 정신으로만 행동할 것, 그리고 인물·소속을 염두에 두지 아니하고 실시된 연기를 양심적으로 심판할 것을 맹세합니다.』
              `,
        },
      },
      {
        title: {
          ja: '審判団の構成',
          en: 'Composition of the Judging Panel',
          ko: '심판진의 구성',
        },
        content: {
          ja: `1. 競技会の審判団は原則として男子で編成する。
2. 審判団は原則として上級審判員、審判長、それぞれの種目において構成と実施に分かれ、主任審判員１名と審判員４名ずつ、ならびに線審２名、計時審１名と補審で構成される。
3. 予選競技と決勝競技か行われる競技会では、種目ならびに構成と実施を入れ替えて審判する。`,
          en: `1. As a rule, the judging panel of a competition consists of men.
2. As a rule, the judging panel consists of the Superior Jury, the Jury President, and, for each event, a composition panel and an execution panel, each with one chief judge and four judges, as well as two line judges, one timekeeper and reserve judges.
3. At competitions with a qualification and a final, the judges switch events and switch between composition and execution.`,
          ko: `1. 경기회의 심판진은 원칙적으로 남자로 편성한다.
2. 심판진은 원칙적으로 상급 심판원, 심판장, 각 종목에서 구성과 실시로 나뉘어 주임 심판원 1명과 심판원 4명씩, 그리고 선심 2명, 계시심 1명과 보조 심판으로 구성된다.
3. 예선 경기와 결승 경기가 행해지는 경기회에서는 종목 및 구성과 실시를 바꾸어 심판한다.`,
        },
      },
      {
        title: {
          ja: '上級審判員',
          en: 'Superior Jury',
          ko: '상급 심판원',
        },
        content: {
          ja: `上級審判員は上級審判部内規に基づき以下の職務にあたる。

1. 競技を監督する事と反則や競技執行に影響を及ぼす特別な状況に対処する事。
2. 審判員一人または数名による重大な審判エラーがある場合、必要な処置を取る事。
3. 継続して審判員が授与する点数を再審して業務が不十分または不公平と思われる審判員に対して警告を発する事。
4. 警告の不満足な結果の後、審判人員を排除して交賛する事。`,
          en: `The Superior Jury carries out the following duties under its internal rules.

1. Supervising the competition and dealing with violations and special situations that affect the running of the competition.
2. Taking the necessary action when one or more judges make a serious judging error.
3. Continuously reviewing the scores given by the judges and warning judges whose work seems inadequate or unfair.
4. Removing and replacing judges if a warning does not lead to a satisfactory result.`,
          ko: `상급 심판원은 상급 심판부 내규에 근거하여 다음의 직무를 담당한다.

1. 경기를 감독하는 것과 반칙이나 경기 운영에 영향을 미치는 특별한 상황에 대처하는 것.
2. 심판원 1명 또는 여러 명에 의한 중대한 심판 오류가 있는 경우, 필요한 조치를 취하는 것.
3. 계속하여 심판원이 부여하는 점수를 재심사하여 업무가 불충분하거나 불공평하다고 여겨지는 심판원에 대하여 경고를 발하는 것.
4. 경고 후에도 만족스러운 결과에 이르지 못한 경우, 해당 심판원을 배제하고 교체하는 것.`,
        },
      },
      {
        title: {
          ja: '審判長',
          en: 'Jury President',
          ko: '심판장',
        },
        content: {
          ja: `1. 審判長は男子新体操委員会で任命する。
2. 審判長は、定めた日時・場所に審判部を招集し、競技会の採点および成績作成の順調な進行のために必要なあらゆる決定を行う。
3. 審判会議で能力不十分と認める審判員を競技会から除名することができる。
4. 審判長は、競技会のあらゆる機会に審判員に干渉できる。正しく、かつ満足すべき方法で行動しない審判員に対しては、主任審判員の意見を聞いた上で、これを除名し交代させることができる。`,
          en: `1. The Jury President is appointed by the Men's Rhythmic Gymnastics Committee.
2. The Jury President convenes the judges at the set time and place and makes all decisions necessary for the smooth running of scoring and the preparation of results.
3. The Jury President may remove from the competition judges found to be insufficiently capable at the judges' meeting.
4. The Jury President may intervene with the judges at any time during the competition. After hearing the chief judge's opinion, the Jury President may remove and replace judges who do not act correctly and satisfactorily.`,
          ko: `1. 심판장은 남자 리듬체조 위원회에서 임명한다.
2. 심판장은 정해진 일시·장소에 심판부를 소집하고, 경기회의 채점 및 성적 작성이 순조롭게 진행되도록 필요한 모든 결정을 한다.
3. 심판 회의에서 능력이 불충분하다고 인정되는 심판원을 경기회에서 제명할 수 있다.
4. 심판장은 경기회의 어떠한 기회에도 심판원에게 개입할 수 있다. 올바르고 만족스러운 방법으로 행동하지 아니하는 심판원에 대하여는 주임 심판원의 의견을 들은 후 이를 제명하고 교체할 수 있다.`,
        },
      },
      {
        title: {
          ja: '主任審判員',
          en: 'Chief Judges',
          ko: '주임 심판원',
        },
        content: {
          ja: `1. 主任審判は、主任を務めるすべての演技を採点する。ただし主任審判員の採点は採点計算には加えられない。
2. 主任審判は、各審判員が提出した採点を注意して点検し、規則に反する採点が行われた場合、または点数に乱れがあった時には、主任審判の得点を示して協議する。
3. 主任審判員は最初の競技者終了後、必要があれば各審判員を招集して協議し、共通の出発点を求める。
4. 主任審判は、裁定審判部の決議に参与する。
5. 主任審判員が適用する減点があった場合は、これを有効点の平均から減点し最終得点を決定する。`,
          en: `1. The chief judge scores every routine on the panel they lead, but the chief judge's score is not included in the calculation.
2. The chief judge carefully checks the scores submitted by each judge. If a score breaks the rules or the scores are inconsistent, the chief judge shows their own score and discusses it with the judges.
3. After the first gymnast, the chief judge calls the judges together if necessary to agree on a common starting point.
4. The chief judge takes part in the decisions of the Appeals Jury.
5. If the chief judge applies a deduction, it is subtracted from the average of the counting scores to determine the final score.`,
          ko: `1. 주임 심판은 주임을 맡는 모든 연기를 채점한다. 다만 주임 심판원의 채점은 점수 계산에는 더하지 아니한다.
2. 주임 심판은 각 심판원이 제출한 채점을 주의 깊게 점검하고, 규칙에 반하는 채점이 이루어진 경우 또는 점수에 혼란이 있을 때에는 주임 심판의 득점을 제시하여 협의한다.
3. 주임 심판원은 최초의 경기자가 끝난 후 필요가 있으면 각 심판원을 소집하여 협의하고 공통의 출발점을 구한다.
4. 주임 심판은 재정 심판부의 결의에 참여한다.
5. 주임 심판원이 적용하는 감점이 있는 경우에는 이를 유효점의 평균에서 감점하여 최종 득점을 결정한다.`,
        },
      },
      {
        title: {
          ja: '構成（Ｄ・Ａ）審判',
          en: 'Composition (D/A) Judges',
          ko: '구성(D·A) 심판',
        },
        content: {
          ja: '構成審判は実施された演技の構成的価値を判断し10点満点で採点する。',
          en: 'Composition judges assess the compositional value of the routine performed and score it out of 10 points.',
          ko: '구성 심판은 실시된 연기의 구성적 가치를 판단하여 10점 만점으로 채점한다.',
        },
      },
      {
        title: {
          ja: '実施（Ｅ）審判',
          en: 'Execution (E) Judges',
          ko: '실시(E) 심판',
        },
        content: {
          ja: '実施審判は実施された演技の出来栄えを判断し10点満点で採点する。',
          en: 'Execution judges assess the quality of the routine performed and score it out of 10 points.',
          ko: '실시 심판은 실시된 연기의 완성도를 판단하여 10점 만점으로 채점한다.',
        },
      },
      {
        title: {
          ja: '線審',
          en: 'Line Judges',
          ko: '선심',
        },
        content: {
          ja: '線審は、演技面のコーナーに位置し、競技者の身体または手具の場外違反の有無を判定する。違反の都度、赤旗で合図し演技後に実施主任審判員に回数および減点を報告する。',
          en: "Line judges sit at the corners of the floor area and judge whether the gymnast's body or apparatus goes out of bounds. They signal each violation with a red flag and, after the routine, report the number of violations and the deductions to the execution chief judge.",
          ko: '선심은 연기 면의 코너에 위치하여 경기자의 신체 또는 수구의 장외 위반 여부를 판정한다. 위반이 있을 때마다 붉은 기로 신호하고 연기 후에 실시 주임 심판원에게 횟수 및 감점을 보고한다.',
        },
      },
      {
        title: {
          ja: '計時審',
          en: 'Timekeeper',
          ko: '계시심',
        },
        content: {
          ja: `計時審は以下の時間を計時し、構成主任審判員に報告する。

1. 入場から演技開始までの時間
2. 演技開始から演技終了までの時間`,
          en: `The timekeeper measures the following times and reports them to the composition chief judge.

1. The time from entering the floor area to the start of the routine
2. The time from the start to the end of the routine`,
          ko: `계시심은 다음의 시간을 계시하여 구성 주임 심판원에게 보고한다.

1. 입장부터 연기 개시까지의 시간
2. 연기 개시부터 연기 종료까지의 시간`,
        },
      },
      {
        title: {
          ja: '補審',
          en: 'Reserve Judges',
          ko: '보조 심판',
        },
        content: {
          ja: `補審は審判業務の補助を務める。また緊急の場合は審判交代に応じる。
                
【上級審判部】
審判部長、ＦＩＧ技術委員（ＪＧＡ選出）が上級審判部を構成する。但し、必要に応じて審判部が指定するエキスパート１名（審判部員メンバー、または熟練審判員）を選出することができる。（合計２〜３名）
上級審判部長は部員の互選のより定める。
上級審判部の職務は：
                
1. 競技を監督する事と反則や競技執行に影響を及ぼす特別な状況に対処する事
2. 審判員一人または数名による重大な審判エラーがある場合、必要な処置をとる事
3. 継続して審判員が授与する点数を最新して業務が不十分または不公平と思われる審判員に対して警告を発する事
4. 警告の不満足な結果の後、審判人員を排除して交賛する事
                
【裁定審判部】内規
最低審判部は、理事会メンバー２名（うち一人は部長を務める）と審判部メンバー１名（採点業務に関与していないも者）または審判部が指名したエキスパート審判員で構成される。（合計３名）
理事会のメンバーは理事会が指名し、審判部メンバーは関連審判部が指名する。
裁定審判部の職務は：

1. 最低審判部は競技終了後適切な時に上級審判部によって警告されたり外された審判員からの嘆願を取り扱う。
2. 最低審判部は定款・競技規則、ルールとガイドラインの条件が守られているかも監視する。反則の場合には、最低審判部は処分に責任がある機関に報告する。`,
          en: `Reserve judges assist with the judging work and replace judges in an emergency.

[Superior Jury]
The Superior Jury consists of the head of the Judges' Department and the FIG Technical Committee member (nominated by the JGA). If necessary, one expert designated by the Judges' Department (a member of the department or an experienced judge) may be added (two or three members in total).
The head of the Superior Jury is chosen by the members from among themselves.
The duties of the Superior Jury are:

1. Supervising the competition and dealing with violations and special situations that affect the running of the competition
2. Taking the necessary action when one or more judges make a serious judging error
3. Continuously reviewing the scores given by the judges and warning judges whose work seems inadequate or unfair
4. Removing and replacing judges if a warning does not lead to a satisfactory result

[Appeals Jury] Internal rules
The Appeals Jury consists of two members of the Board of Directors (one of whom serves as its head) and one member of the Judges' Department who is not involved in scoring, or an expert judge nominated by the Judges' Department (three members in total).
The members from the Board of Directors are nominated by the Board, and the member from the Judges' Department is nominated by the department concerned.
The duties of the Appeals Jury are:

1. After the competition, at an appropriate time, the Appeals Jury handles petitions from judges who were warned or removed by the Superior Jury.
2. The Appeals Jury also monitors whether the statutes, the competition rules, and the rules and guidelines are observed. In the case of a violation, it reports to the body responsible for sanctions.`,
          ko: `보조 심판은 심판 업무의 보조를 맡는다. 또한 긴급한 경우에는 심판 교체에 응한다.
                
【상급 심판부】
심판부장, FIG 기술위원(JGA 선출)이 상급 심판부를 구성한다. 다만 필요에 따라 심판부가 지정하는 전문가 1명(심판부원 멤버 또는 숙련 심판원)을 선출할 수 있다. (합계 2~3명)
상급 심판부장은 부원의 호선으로 정한다.
상급 심판부의 직무는:
                
1. 경기를 감독하는 것과 반칙이나 경기 운영에 영향을 미치는 특별한 상황에 대처하는 것
2. 심판원 1명 또는 여러 명에 의한 중대한 심판 오류가 있는 경우, 필요한 조치를 취하는 것
3. 계속하여 심판원이 부여하는 점수를 확인하여 업무가 불충분하거나 불공평하다고 여겨지는 심판원에 대하여 경고를 발하는 것
4. 경고 후에도 만족스러운 결과에 이르지 못한 경우, 해당 심판원을 배제하고 교체하는 것
                
【재정 심판부】내규
재정 심판부는 이사회 멤버 2명(그중 1명은 부장을 맡는다)과 심판부 멤버 1명(채점 업무에 관여하지 아니한 자) 또는 심판부가 지명한 전문 심판원으로 구성된다. (합계 3명)
이사회의 멤버는 이사회가 지명하고, 심판부 멤버는 관련 심판부가 지명한다.
재정 심판부의 직무는:

1. 재정 심판부는 경기 종료 후 적절한 때에 상급 심판부에 의하여 경고를 받거나 배제된 심판원으로부터의 탄원을 취급한다.
2. 재정 심판부는 정관·경기 규칙, 규칙과 가이드라인의 조건이 지켜지고 있는지도 감시한다. 반칙의 경우에는 재정 심판부는 처분에 책임이 있는 기관에 보고한다.`,
        },
      },
    ],
  },
  {
    title: {
      ja: '一般的な採点規則',
      en: 'General Scoring Rules',
      ko: '일반적인 채점 규칙',
    },
    section: [
      {
        title: {
          ja: '採点方法と採点の開き',
          en: 'Scoring Method and Score Ranges',
          ko: '채점 방법과 채점의 폭',
        },
        content: {
          ja: `1. 審判員は０点から10点までの各１点を20等分した点数で採点する。

2. 主任審判員と４名の審判の場合
構成・実施それぞれに主任審判員を除いた５名の審判員の最高点および最低点を除外し、有効点の平均（小数第４位以下を切り捨て）を求め合計する。主任審判員が適用する原点があった場合は、その平均点の合計から減点する。

3. 主任審判員が１審を兼ねる場合
構成実施それぞれに主任審判員を含めた４名の審判員の最高点および最低点を除外し、有効点の平均（少数第４位以下を切り捨て）を求め合計する。主任審判員が適用する減点があった場合は、その平均点の合計から原点する。

4. "有効点の開きは以下の点数より大きくてはならない。

5. 全審判員の採点最高点と最低点の開きは以下の点数より大きくてはならない。`,
          en: `1. Judges score from 0 to 10 points in steps of one twentieth of a point.

2. With a chief judge and four judges
For composition and execution separately, the highest and lowest scores of the judges other than the chief judge are dropped, the average of the counting scores is calculated (truncated after the third decimal place), and the two averages are added. If the chief judge applies a deduction, it is subtracted from this total.

3. When the chief judge also serves as one of the judges
For composition and execution separately, the highest and lowest scores of the four judges including the chief judge are dropped, the average of the counting scores is calculated (truncated after the third decimal place), and the two averages are added. If the chief judge applies a deduction, it is subtracted from this total.

4. The range of the counting scores must not exceed the following.

5. The range between the highest and lowest scores of all judges must not exceed the following.`,
          ko: `1. 심판원은 0점부터 10점까지 각 1점을 20등분한 점수로 채점한다.

2. 주임 심판원과 4명의 심판의 경우
구성·실시 각각에 주임 심판원을 제외한 5명의 심판원의 최고점 및 최저점을 제외하고, 유효점의 평균(소수점 넷째 자리 이하 버림)을 구하여 합계한다. 주임 심판원이 적용하는 감점이 있는 경우에는 그 평균점의 합계에서 감점한다.

3. 주임 심판원이 1심을 겸하는 경우
구성·실시 각각에 주임 심판원을 포함한 4명의 심판원의 최고점 및 최저점을 제외하고, 유효점의 평균(소수점 넷째 자리 이하 버림)을 구하여 합계한다. 주임 심판원이 적용하는 감점이 있는 경우에는 그 평균점의 합계에서 감점한다.

4. 유효점의 폭은 다음의 점수보다 커서는 아니 된다.

5. 전 심판원의 채점 최고점과 최저점의 폭은 다음의 점수보다 커서는 아니 된다.`,
        },
        image: [
          {
            src: '/images/rules/yuukouten.png',
            alt: {
              ja: '有効点の開き',
              en: 'Allowed range of the counting scores',
              ko: '유효점의 폭',
            },
          },
          {
            src: '/images/rules/tennsuu.png',
            alt: {
              ja: '全審判員の点数の開き',
              en: "Allowed range of all judges' scores",
              ko: '전 심판원의 점수의 폭',
            },
          },
        ],
      },
      {
        title: {
          ja: '基準点',
          en: 'Base Score',
          ko: '기준점',
        },
        content: {
          ja: `基準点は、全審判員と主任審判員が集合して話し合っても問題が解決されない場合に適用される。計算は次のように行う。
（有効点の平均＋主任審判員の採点）／２＝基準点`,
          en: `The base score is used when the judges and the chief judge cannot resolve a problem even after discussing it together. It is calculated as follows.
(Average of the counting scores + chief judge's score) / 2 = base score`,
          ko: `기준점은 전 심판원과 주임 심판원이 모여 논의하여도 문제가 해결되지 아니하는 경우에 적용된다. 계산은 다음과 같이 한다.
(유효점의 평균 + 주임 심판원의 채점) / 2 = 기준점`,
        },
      },
      {
        title: {
          ja: '演技時間',
          en: 'Duration of the Routine',
          ko: '연기 시간',
        },
        content: {
          ja: `1. 競技規則47条の時間に違反した場合は、長すぎても短すぎても減点とする。
【構成主任審判より原点：１秒につき・・・0.005点】

2. 演技時間が下記に満たなかった場合は得点を次の通りにする。
団体競技　２分３０秒　　　個人競技　１分００秒
【得点：構成・実施とも0．00点】`,
          en: `1. If the duration in Article 47 of the competition rules is not respected, a deduction is applied whether the routine is too long or too short.
[Deduction by the composition chief judge: 0.005 points per second]

2. If the routine is shorter than the following, the score is as follows.
Group competition: 2 min 30 s    Individual competition: 1 min 00 s
[Score: 0.00 points for both composition and execution]`,
          ko: `1. 경기 규칙 제47조의 시간을 위반한 경우에는 너무 길어도 너무 짧아도 감점한다.
【구성 주임 심판으로부터 감점: 1초당…0.005점】

2. 연기 시간이 아래에 미치지 못한 경우에는 득점을 다음과 같이 한다.
단체 경기 2분 30초   개인 경기 1분 00초
【득점: 구성·실시 모두 0.00점】`,
        },
      },
      {
        title: {
          ja: '演技開始までの時間',
          en: 'Time Before the Start of the Routine',
          ko: '연기 개시까지의 시간',
        },
        content: {
          ja: `入場から演技開始までの時間が次の時間を超えた場合は減点とする。
団体競技・・・３０秒　　　個人競技・・・２０秒
【実施主任審判より減点・・・0．20点】`,
          en: `A deduction is applied if the time from entering the floor area to the start of the routine exceeds the following.
Group competition: 30 s    Individual competition: 20 s
[Deduction by the execution chief judge: 0.20 points]`,
          ko: `입장부터 연기 개시까지의 시간이 다음 시간을 초과한 경우에는 감점한다.
단체 경기…30초   개인 경기…20초
【실시 주임 심판으로부터 감점…0.20점】`,
        },
      },
      {
        title: {
          ja: '演技面への入退場',
          en: 'Entering and Leaving the Floor Area',
          ko: '연기 면으로의 입퇴장',
        },
        content: {
          ja: `演技面への入退場は、徒歩または駆け足で速やかに行わなければならない。
【違反した場合　実施審判より減点・・・0．20点】`,
          en: `Gymnasts must enter and leave the floor area promptly, walking or running.
[Violation: deduction by the execution judges, 0.20 points]`,
          ko: `연기 면으로의 입퇴장은 도보 또는 구보로 신속하게 하여야 한다.
【위반한 경우 실시 심판으로부터 감점…0.20점】`,
        },
      },
      {
        title: {
          ja: '場外',
          en: 'Out of Bounds',
          ko: '장외',
        },
        content: {
          ja: `場外の扱いは以下のとおりとし、実施主任審判より減点する。
＊５、６の各種具とは２つ組の手具のそれぞれを指す。

1. 体の一部や手具が競技面を超えて床に触れた場合を場外とする。
空中でラインを超えても減点の対象とはならない。

2. 保持された手具がラインオーバーした場合は、身体の一部として扱い減点する。" +

3. 片足、両足または身体の一部がラインオーバーをした場合。【減点：１回につき・・・0．10点】" +

4. 団体競技について、何人かの競技者が同時にラインオーバーをした場合。
【減点：１名につき・・・0．10点】

5. 手具が身体から離れてラインオーバーした場合。
【減点：１名につき・・・0．10点】

6. １回の過失により身体や手具が、繰り返しラインオーバーをした場合。
【減点：身体または各手具１回につき・・・0．10点】`,
          en: `Out of bounds is treated as follows, and the deduction is applied by the execution chief judge.
* In items 5 and 6, "each apparatus" means each of the two apparatus in a set.

1. Out of bounds means that part of the body or the apparatus touches the floor beyond the floor area.
Crossing the line in the air is not penalized.

2. An apparatus held by the gymnast that crosses the line is treated as part of the body and penalized.

3. One foot, both feet or another part of the body crosses the line. [Deduction: 0.10 points each time]

4. In the group competition, several gymnasts cross the line at the same time.
[Deduction: 0.10 points per gymnast]

5. An apparatus that has left the body crosses the line.
[Deduction: 0.10 points per gymnast]

6. The body or apparatus crosses the line repeatedly because of a single error.
[Deduction: 0.10 points each time for the body or for each apparatus]`,
          ko: `장외의 취급은 다음과 같이 하며, 실시 주임 심판으로부터 감점한다.
* 5, 6의 각 수구란 2개 한 벌의 수구 각각을 가리킨다.

1. 몸의 일부나 수구가 경기 면을 넘어 바닥에 닿은 경우를 장외로 한다.
공중에서 라인을 넘더라도 감점의 대상이 되지 아니한다.

2. 보유한 수구가 라인 오버한 경우에는 신체의 일부로 취급하여 감점한다.

3. 한 발, 두 발 또는 신체의 일부가 라인 오버를 한 경우. 【감점: 1회당…0.10점】

4. 단체 경기에 대하여, 여러 명의 경기자가 동시에 라인 오버를 한 경우.
【감점: 1명당…0.10점】

5. 수구가 신체에서 떨어져 라인 오버한 경우.
【감점: 1명당…0.10점】

6. 1회의 과실로 신체나 수구가 반복하여 라인 오버를 한 경우.
【감점: 신체 또는 각 수구 1회당…0.10점】`,
        },
      },
      {
        title: {
          ja: '試合着',
          en: 'Competition Attire',
          ko: '경기복',
        },
        content: {
          ja: `試合着に関する違反は以下のとおり減点する。
                
1. 競技規則39条に違反した場合（含所属マーク）ただし、プリント柄の若干の違いは減点しない。
【構成主任審判より減点：１名につき・・・0.20点】

2. 破れた服装で演技した場合。ただし演技中に敗れたものは減点しない。
【実施審判より減点：１名につき・・・0．10点】

3. 著しく服装が乱れた場合。
【実施審判より減点：１名につき・・・0．10点】`,
          en: `Violations concerning competition attire are penalized as follows.

1. Violation of Article 39 of the competition rules (including the emblem). Slight differences in printed patterns are not penalized.
[Deduction by the composition chief judge: 0.20 points per gymnast]

2. Performing in torn attire. Attire torn during the routine is not penalized.
[Deduction by the execution judges: 0.10 points per gymnast]

3. Attire that becomes badly disordered.
[Deduction by the execution judges: 0.10 points per gymnast]`,
          ko: `경기복에 관한 위반은 다음과 같이 감점한다.
                
1. 경기 규칙 제39조를 위반한 경우(소속 마크 포함). 다만 프린트 무늬의 약간의 차이는 감점하지 아니한다.
【구성 주임 심판으로부터 감점: 1명당…0.20점】

2. 찢어진 복장으로 연기한 경우. 다만 연기 중에 찢어진 것은 감점하지 아니한다.
【실시 심판으로부터 감점: 1명당…0.10점】

3. 복장이 현저하게 흐트러진 경우.
【실시 심판으로부터 감점: 1명당…0.10점】`,
        },
      },
      {
        title: {
          ja: '伴奏音楽',
          en: 'Accompanying Music',
          ko: '반주 음악',
        },
        content: {
          ja: `競技規則第45条に基づき、１から４の減点をする。

1. 伴奏音楽がなかった場合。　【構成主任審判より減点：0．50点】

2. 入退場に伴奏音楽をつけた場合。　【構成主任審判員より減点：0．20点】

3. 音楽に３秒以上の停止があった場合　【構成審判より減点：0．20点】

4. 組織者側に責任のない理由で音楽が中断された場合は、原則として復興できない。
中断があった場合、審判長と競技部長は原因を速やかに確認し処理に当たる。`,
          en: `Under Article 45 of the competition rules, deductions 1 to 4 are applied.

1. No accompanying music.  [Deduction by the composition chief judge: 0.50 points]

2. Music played while entering or leaving the floor area.  [Deduction by the composition chief judge: 0.20 points]

3. A pause of 3 seconds or more in the music.  [Deduction by the composition judges: 0.20 points]

4. If the music stops for a reason for which the organizers are not responsible, as a rule the routine may not be repeated.
If the music stops, the Jury President and the Competition Director promptly determine the cause and deal with it.`,
          ko: `경기 규칙 제45조에 근거하여 1부터 4의 감점을 한다.

1. 반주 음악이 없었던 경우.  【구성 주임 심판으로부터 감점: 0.50점】

2. 입퇴장에 반주 음악을 붙인 경우.  【구성 주임 심판원으로부터 감점: 0.20점】

3. 음악에 3초 이상의 정지가 있었던 경우  【구성 심판으로부터 감점: 0.20점】

4. 주최자 측에 책임이 없는 이유로 음악이 중단된 경우에는 원칙적으로 다시 할 수 없다.
중단이 있었던 경우, 심판장과 경기부장은 원인을 신속히 확인하여 처리에 임한다.`,
        },
      },
      {
        title: {
          ja: '手具',
          en: 'Apparatus',
          ko: '수구',
        },
        content: {
          ja: `1. 演技途中で手具が破損した場合、競技者は手部の差し替えをしなければならない。
2. 手具の差し替えのための場外は減点の対象とならない。
3. 差し変えのための中断は、演技の中断として減点する。　【実施審判より減点：１秒につき・・・0．10点】
4. 破損した後、手具の差し替えを行わなかった場合は、破損後の演技の価値はないものとして採点する。
5. 手具が演技終了時に破損した場合は、手具に触れずに終了したものとして扱う。
6. 演技中の手具が破損した場合その演技をやり直すことはできない。
7. 規格外の手具の使用した場合　【得点：構成・実施とも0.00点】
8. 予備手具を使用した場合　【構成主任審判員より減点・・・0.50点】`,
          en: `1. If an apparatus breaks during the routine, the gymnast must replace it.
2. Going out of bounds to replace the apparatus is not penalized.
3. An interruption to replace the apparatus is penalized as an interruption of the routine.  [Deduction by the execution judges: 0.10 points per second]
4. If the apparatus is not replaced after it breaks, the rest of the routine after the break is scored as having no value.
5. If the apparatus breaks at the end of the routine, the routine is treated as having ended without the gymnast touching the apparatus.
6. A routine in which the apparatus broke may not be repeated.
7. Use of an apparatus that does not meet the specifications  [Score: 0.00 points for both composition and execution]
8. Use of a spare apparatus  [Deduction by the composition chief judge: 0.50 points]`,
          ko: `1. 연기 도중에 수구가 파손된 경우, 경기자는 수구를 교체하여야 한다.
2. 수구 교체를 위한 장외는 감점의 대상이 되지 아니한다.
3. 교체를 위한 중단은 연기의 중단으로 보아 감점한다.  【실시 심판으로부터 감점: 1초당…0.10점】
4. 파손된 후 수구의 교체를 하지 아니한 경우에는 파손 후의 연기는 가치가 없는 것으로 하여 채점한다.
5. 수구가 연기 종료 시에 파손된 경우에는 수구에 닿지 아니하고 종료한 것으로 취급한다.
6. 연기 중에 수구가 파손된 경우 그 연기를 다시 할 수 없다.
7. 규격 외의 수구를 사용한 경우  【득점: 구성·실시 모두 0.00점】
8. 예비 수구를 사용한 경우  【구성 주임 심판원으로부터 감점…0.50점】`,
        },
      },
      {
        title: {
          ja: '規律',
          en: 'Discipline',
          ko: '규율',
        },
        content: {
          ja: `1. 競技者が競技規則第41条に違反した場合
【実施審判より減点：0．20点】

2. 監督者が競技規則第42条に違反した場合は厳重に注意をした上で減点や処分を決める。
【実施主任審判員より減点・・・0．20点】`,
          en: `1. A gymnast violates Article 41 of the competition rules.
[Deduction by the execution judges: 0.20 points]

2. If a team manager violates Article 42 of the competition rules, a strict warning is given and the deduction or penalty is decided.
[Deduction by the execution chief judge: 0.20 points]`,
          ko: `1. 경기자가 경기 규칙 제41조를 위반한 경우
【실시 심판으로부터 감점: 0.20점】

2. 감독자가 경기 규칙 제42조를 위반한 경우에는 엄중히 주의를 준 후 감점이나 처분을 정한다.
【실시 주임 심판원으로부터 감점…0.20점】`,
        },
      },
    ],
  },
]
