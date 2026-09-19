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
      zh: '总则',
    },
    section: [
      {
        title: {
          ja: '採点規則の適用',
          en: 'Application of the Code of Points',
          zh: '评分规则的适用',
        },
        content: {
          ja: `
1. 採点規則は、国際および国内競技における競技を共通の基準をもって判定し、その評価を客観的にならしめるものである。
2. 審判員の能力と採点の技術を高め、また競技者や指導者に競技のための練習の指針として役立たせるものである。
3. 審判員は、本規則を厳守しなければならない。厳守しない審判員は審判長によって改心されることがある。`,
          en: `1. The Code of Points is used to judge international and national competitions by common standards and to make their evaluation objective.
2. It serves to improve the ability of judges and their scoring technique, and guides gymnasts and coaches in their training for competition.
3. Judges must strictly observe these rules. Judges who do not may be replaced by the Jury President.`,
          zh: `
1. 评分规则以共同的标准判定国际及国内比赛中的成套动作，使其评价客观化。
2. 评分规则用于提高裁判员的能力和评分技术，并作为参赛者和指导者为比赛进行训练的指南。
3. 裁判员必须严格遵守本规则。不严格遵守的裁判员，可能会被裁判长予以纠正。`,
        },
      },
    ],
  },
  {
    title: {
      ja: '審判',
      en: 'Judging',
      zh: '裁判',
    },
    section: [
      {
        title: {
          ja: '競技と審判',
          en: 'Competition and Judging',
          zh: '比赛与裁判',
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
          zh: `1. 艺术体操是判定类项目，方向性和引导性由裁判员决定，因此其责任极为重大。
2. 裁判员必须具有广阔的视野、高度的见识和丰富的经验，并且在人格上认真、公正。
3. 裁判员基于其特别的权限和职务上的立场，必须深刻领会在其面前完成的成套动作，并能够正确判定。
4. 裁判员需要具备观察并理解成套动作的完成质量、编排中动作的难度和价值、与音乐伴奏的和谐等全部内容的能力。
5. 裁判员除技术的进步之外，还需要判定和谐的柔韧性以及作为男子的力量感。
6. 裁判员必须不受观众的掌声和毫无价值的表演性成套动作的影响，根据信念进行判定。
7. 不公正或错误的判定，不仅会对指导者和参赛者产生巨大影响，也会妨碍艺术体操的普及。`,
        },
      },
      {
        title: {
          ja: '審判員規定',
          en: 'Regulations for Judges',
          zh: '裁判员规定',
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
          zh: `1. 在本协会监督下举办的比赛中，由依据公认裁判认定规定取得资格的裁判员担任裁判工作。
2. 裁判长、裁判员应专任其职责，无论以任何名义，都不得指导队伍、参加比赛或接受其他任务。
3. 裁判员必须在所任命比赛的全部期间内，在比赛场地完成其任务。
4. 裁判员在任何情况下都不得在评分上受到影响。
5. 裁判员有义务在比赛前出席裁判会议和裁判研修会，未出席者不得执行工作。
6. 全体裁判员对各自的评分负有完全属于本人的责任。
7. 裁判员必须始终遵守作为专业人员的礼仪，以没有偏见、符合伦理的模范态度行动。
8. 裁判长以及裁判员应在比赛开始1小时前在比赛场地集合，接受关于比赛进行顺序、临时变更等事项的通知。
9. 裁判员应穿着规定的服装执行工作。
  a. 灰色长裤
  b. 藏青色上衣
  c. 白色衬衫
  d. 领带
  e. 裁判徽章`,
        },
      },
      {
        title: {
          ja: '審判研修会と審判会議',
          en: "Judges' Training Sessions and Judges' Meetings",
          zh: '裁判研修会与裁判会议',
        },
        content: {
          ja: `1. 審判会議および審判研修会では、規定演技のついては公式解説文または公式映像を参考にし、自由演技については、演技の構成・実施の良否を十分に審議し、採点の焦点を明らかにしなければならない。
2. 審判会議で能力不十分と認められた審判員は競技会から除名されることがある。`,
          en: `1. At the judges' meeting and training session, compulsory routines are reviewed with the official written explanation or the official video, and free routines are reviewed thoroughly for the quality of composition and execution, so that the focus of scoring is made clear.
2. Judges found to be insufficiently capable at the judges' meeting may be removed from the competition.`,
          zh: `1. 在裁判会议及裁判研修会上，规定成套动作应参考官方解说文或官方影像，自选成套动作应充分审议成套动作的编排、完成的优劣，明确评分的重点。
2. 在裁判会议上被认定能力不足的裁判员，可能被从比赛中除名。`,
        },
      },
      {
        title: {
          ja: '審判員宣誓',
          en: "Judges' Oath",
          zh: '裁判员宣誓',
        },
        content: {
          ja: `審判員は、次の宣誓文を厳粛に宣誓する。
              
『私は、審判員の資格において、スポーツの品位および誠実の精神を持ってのみ行動すること。ならびに、人物・所属を念頭に置かず、実施された演技を良心的に審判することを誓います。』
              `,
          en: `Judges solemnly take the following oath.

"As a judge, I promise to act only in the spirit of sporting dignity and integrity, and to judge the routines performed conscientiously, without regard to the person or the organization."`,
          zh: `裁判员庄严宣读下列誓词。
              
“我以裁判员的资格，保证仅以体育的品格和诚实的精神行动。并且不顾及人物、所属单位，本着良心对所完成的成套动作进行裁判。”
              `,
        },
      },
      {
        title: {
          ja: '審判団の構成',
          en: 'Composition of the Judging Panel',
          zh: '裁判组的组成',
        },
        content: {
          ja: `1. 競技会の審判団は原則として男子で編成する。
2. 審判団は原則として上級審判員、審判長、それぞれの種目において構成と実施に分かれ、主任審判員１名と審判員４名ずつ、ならびに線審２名、計時審１名と補審で構成される。
3. 予選競技と決勝競技か行われる競技会では、種目ならびに構成と実施を入れ替えて審判する。`,
          en: `1. As a rule, the judging panel of a competition consists of men.
2. As a rule, the judging panel consists of the Superior Jury, the Jury President, and, for each event, a composition panel and an execution panel, each with one chief judge and four judges, as well as two line judges, one timekeeper and reserve judges.
3. At competitions with a qualification and a final, the judges switch events and switch between composition and execution.`,
          zh: `1. 比赛的裁判组原则上由男子组成。
2. 裁判组原则上由上级裁判员、裁判长，以及各项目中分为编排和完成的主裁判员各1名和裁判员各4名，还有线裁判2名、计时裁判1名和替补裁判组成。
3. 在举行预赛和决赛的比赛中，调换项目以及编排与完成进行裁判。`,
        },
      },
      {
        title: {
          ja: '上級審判員',
          en: 'Superior Jury',
          zh: '上级裁判员',
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
          zh: `上级裁判员依据上级裁判部内部规定担任以下职务。

1. 监督比赛，并处理犯规以及影响比赛执行的特殊情况。
2. 当一名或数名裁判员出现重大裁判失误时，采取必要的措施。
3. 持续复审裁判员所给出的分数，对工作被认为不充分或不公正的裁判员发出警告。
4. 警告后结果仍不令人满意时，将该裁判人员排除并予以更换。`,
        },
      },
      {
        title: {
          ja: '審判長',
          en: 'Jury President',
          zh: '裁判长',
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
          zh: `1. 裁判长由男子艺术体操委员会任命。
2. 裁判长在规定的日期时间、地点召集裁判部，为比赛的评分及成绩制作顺利进行作出一切必要的决定。
3. 可以将在裁判会议上被认定能力不足的裁判员从比赛中除名。
4. 裁判长可以在比赛的任何场合对裁判员进行干预。对于未以正确且令人满意的方式行动的裁判员，在听取主裁判员的意见后，可以将其除名并予以更换。`,
        },
      },
      {
        title: {
          ja: '主任審判員',
          en: 'Chief Judges',
          zh: '主裁判员',
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
          zh: `1. 主裁判对其担任主裁判的所有成套动作进行评分。但主裁判员的评分不计入分数的计算。
2. 主裁判应注意检查各裁判员提交的评分，当出现违反规则的评分，或分数出现混乱时，出示主裁判的得分并进行协商。
3. 主裁判员在第一名参赛者结束后，如有必要可召集各裁判员协商，以求得共同的出发点。
4. 主裁判参与裁定裁判部的决议。
5. 如有主裁判员适用的扣分，则将其从有效分的平均分中扣除，以确定最后得分。`,
        },
      },
      {
        title: {
          ja: '構成（Ｄ・Ａ）審判',
          en: 'Composition (D/A) Judges',
          zh: '编排（D、A）裁判',
        },
        content: {
          ja: '構成審判は実施された演技の構成的価値を判断し10点満点で採点する。',
          en: 'Composition judges assess the compositional value of the routine performed and score it out of 10 points.',
          zh: '编排裁判判断所完成成套动作的编排价值，以10分满分进行评分。',
        },
      },
      {
        title: {
          ja: '実施（Ｅ）審判',
          en: 'Execution (E) Judges',
          zh: '完成（E）裁判',
        },
        content: {
          ja: '実施審判は実施された演技の出来栄えを判断し10点満点で採点する。',
          en: 'Execution judges assess the quality of the routine performed and score it out of 10 points.',
          zh: '完成裁判判断所完成成套动作的完成质量，以10分满分进行评分。',
        },
      },
      {
        title: {
          ja: '線審',
          en: 'Line Judges',
          zh: '线裁判',
        },
        content: {
          ja: '線審は、演技面のコーナーに位置し、競技者の身体または手具の場外違反の有無を判定する。違反の都度、赤旗で合図し演技後に実施主任審判員に回数および減点を報告する。',
          en: "Line judges sit at the corners of the floor area and judge whether the gymnast's body or apparatus goes out of bounds. They signal each violation with a red flag and, after the routine, report the number of violations and the deductions to the execution chief judge.",
          zh: '线裁判位于场地的角落，判定参赛者的身体或器械有无出界违例。每次违例时用红旗示意，成套动作结束后向完成主裁判员报告次数及扣分。',
        },
      },
      {
        title: {
          ja: '計時審',
          en: 'Timekeeper',
          zh: '计时裁判',
        },
        content: {
          ja: `計時審は以下の時間を計時し、構成主任審判員に報告する。

1. 入場から演技開始までの時間
2. 演技開始から演技終了までの時間`,
          en: `The timekeeper measures the following times and reports them to the composition chief judge.

1. The time from entering the floor area to the start of the routine
2. The time from the start to the end of the routine`,
          zh: `计时裁判计量以下时间，并向编排主裁判员报告。

1. 从入场到成套动作开始的时间
2. 从成套动作开始到成套动作结束的时间`,
        },
      },
      {
        title: {
          ja: '補審',
          en: 'Reserve Judges',
          zh: '替补裁判',
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
          zh: `替补裁判担任裁判工作的辅助。另外在紧急情况下接受裁判的更换。
                
【上级裁判部】
裁判部长、FIG技术委员（由JGA选出）组成上级裁判部。但可根据需要选出由裁判部指定的专家1名（裁判部成员，或熟练裁判员）。（合计2—3名）
上级裁判部长由部员互选决定。
上级裁判部的职务为：
                
1. 监督比赛，并处理犯规以及影响比赛执行的特殊情况
2. 当一名或数名裁判员出现重大裁判失误时，采取必要的措施
3. 持续复核裁判员所给出的分数，对工作被认为不充分或不公正的裁判员发出警告
4. 警告后结果仍不令人满意时，将该裁判人员排除并予以更换
                
【裁定裁判部】内部规定
裁定裁判部由理事会成员2名（其中一人担任部长）和裁判部成员1名（未参与评分工作者），或由裁判部指名的专家裁判员组成。（合计3名）
理事会的成员由理事会指名，裁判部成员由相关裁判部指名。
裁定裁判部的职务为：

1. 裁定裁判部在比赛结束后的适当时候，处理被上级裁判部警告或排除的裁判员提出的申诉。
2. 裁定裁判部还监督章程、竞赛规则、规则与指南的条件是否得到遵守。发生犯规时，裁定裁判部向负责处分的机构报告。`,
        },
      },
    ],
  },
  {
    title: {
      ja: '一般的な採点規則',
      en: 'General Scoring Rules',
      zh: '一般评分规则',
    },
    section: [
      {
        title: {
          ja: '採点方法と採点の開き',
          en: 'Scoring Method and Score Ranges',
          zh: '评分方法与评分的差距',
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
          zh: `1. 裁判员以0分至10分之间每1分分成20等分的分数进行评分。

2. 主裁判员和4名裁判的情况
编排、完成各自去掉除主裁判员以外的5名裁判员的最高分和最低分，求出有效分的平均分（小数点后第4位以下舍去）并相加。如有主裁判员适用的扣分，则从该平均分的合计中扣除。

3. 主裁判员兼任1名裁判的情况
编排、完成各自去掉包含主裁判员在内的4名裁判员的最高分和最低分，求出有效分的平均分（小数点后第4位以下舍去）并相加。如有主裁判员适用的扣分，则从该平均分的合计中扣除。

4. 有效分的差距不得大于以下分数。

5. 全体裁判员评分的最高分与最低分的差距不得大于以下分数。`,
        },
        image: [
          {
            src: '/images/rules/yuukouten.png',
            alt: {
              ja: '有効点の開き',
              en: 'Allowed range of the counting scores',
              zh: '有效分的差距',
            },
          },
          {
            src: '/images/rules/tennsuu.png',
            alt: {
              ja: '全審判員の点数の開き',
              en: "Allowed range of all judges' scores",
              zh: '全体裁判员分数的差距',
            },
          },
        ],
      },
      {
        title: {
          ja: '基準点',
          en: 'Base Score',
          zh: '基准分',
        },
        content: {
          ja: `基準点は、全審判員と主任審判員が集合して話し合っても問題が解決されない場合に適用される。計算は次のように行う。
（有効点の平均＋主任審判員の採点）／２＝基準点`,
          en: `The base score is used when the judges and the chief judge cannot resolve a problem even after discussing it together. It is calculated as follows.
(Average of the counting scores + chief judge's score) / 2 = base score`,
          zh: `基准分在全体裁判员与主裁判员集合协商后问题仍未解决时适用。计算方法如下。
（有效分的平均分＋主裁判员的评分）／2＝基准分`,
        },
      },
      {
        title: {
          ja: '演技時間',
          en: 'Duration of the Routine',
          zh: '成套时间',
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
          zh: `1. 违反竞赛规则第47条的时间时，无论过长还是过短均予以扣分。
【由编排主裁判扣分：每1秒……0.005分】

2. 成套时间未达到下列时间时，得分按如下处理。
团体比赛　2分30秒　　　个人比赛　1分00秒
【得分：编排、完成均为0.00分】`,
        },
      },
      {
        title: {
          ja: '演技開始までの時間',
          en: 'Time Before the Start of the Routine',
          zh: '至成套动作开始的时间',
        },
        content: {
          ja: `入場から演技開始までの時間が次の時間を超えた場合は減点とする。
団体競技・・・３０秒　　　個人競技・・・２０秒
【実施主任審判より減点・・・0．20点】`,
          en: `A deduction is applied if the time from entering the floor area to the start of the routine exceeds the following.
Group competition: 30 s    Individual competition: 20 s
[Deduction by the execution chief judge: 0.20 points]`,
          zh: `从入场到成套动作开始的时间超过下列时间时予以扣分。
团体比赛……30秒　　　个人比赛……20秒
【由完成主裁判扣分……0.20分】`,
        },
      },
      {
        title: {
          ja: '演技面への入退場',
          en: 'Entering and Leaving the Floor Area',
          zh: '进入和退出场地',
        },
        content: {
          ja: `演技面への入退場は、徒歩または駆け足で速やかに行わなければならない。
【違反した場合　実施審判より減点・・・0．20点】`,
          en: `Gymnasts must enter and leave the floor area promptly, walking or running.
[Violation: deduction by the execution judges, 0.20 points]`,
          zh: `进入和退出场地必须以步行或小跑迅速进行。
【违反时　由完成裁判扣分……0.20分】`,
        },
      },
      {
        title: {
          ja: '場外',
          en: 'Out of Bounds',
          zh: '出界',
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
          zh: `出界的处理如下，由完成主裁判扣分。
＊5、6中所说的各器械，是指成对的两件器械中的每一件。

1. 身体的一部分或器械越过比赛场地触及地面的情况视为出界。
在空中越过界线不作为扣分对象。

2. 持握的器械越过界线时，视为身体的一部分予以扣分。

3. 单脚、双脚或身体的一部分越过界线的情况。【扣分：每1次……0.10分】

4. 关于团体比赛，数名参赛者同时越过界线的情况。
【扣分：每1名……0.10分】

5. 器械脱离身体越过界线的情况。
【扣分：每1名……0.10分】

6. 因1次失误导致身体或器械反复越过界线的情况。
【扣分：身体或各器械每1次……0.10分】`,
        },
      },
      {
        title: {
          ja: '試合着',
          en: 'Competition Attire',
          zh: '比赛服',
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
          zh: `与比赛服有关的违例按以下规定扣分。
                
1. 违反竞赛规则第39条的情况（含所属标志）。但印花图案的些许差异不予扣分。
【由编排主裁判扣分：每1名……0.20分】

2. 穿着破损的服装完成成套动作的情况。但在成套动作中破损的不予扣分。
【由完成裁判扣分：每1名……0.10分】

3. 服装明显凌乱的情况。
【由完成裁判扣分：每1名……0.10分】`,
        },
      },
      {
        title: {
          ja: '伴奏音楽',
          en: 'Accompanying Music',
          zh: '伴奏音乐',
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
          zh: `依据竞赛规则第45条，作1至4的扣分。

1. 没有伴奏音乐的情况。　【由编排主裁判扣分：0.50分】

2. 进出场时配有伴奏音乐的情况。　【由编排主裁判员扣分：0.20分】

3. 音乐出现3秒以上停止的情况　【由编排裁判扣分：0.20分】

4. 因组织者方面不负责任的原因导致音乐中断时，原则上不能重做。
出现中断时，裁判长和竞赛部长应迅速确认原因并进行处理。`,
        },
      },
      {
        title: {
          ja: '手具',
          en: 'Apparatus',
          zh: '器械',
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
          zh: `1. 成套动作途中器械破损时，参赛者必须更换器械。
2. 为更换器械而出界不作为扣分对象。
3. 为更换而造成的中断，作为成套动作的中断予以扣分。　【由完成裁判扣分：每1秒……0.10分】
4. 破损后未进行器械更换的，破损之后的成套动作视为没有价值进行评分。
5. 器械在成套动作结束时破损的，视为未触及器械而结束。
6. 成套动作中器械破损时，不能重做该成套动作。
7. 使用不符合规格的器械的情况　【得分：编排、完成均为0.00分】
8. 使用备用器械的情况　【由编排主裁判员扣分……0.50分】`,
        },
      },
      {
        title: {
          ja: '規律',
          en: 'Discipline',
          zh: '纪律',
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
          zh: `1. 参赛者违反竞赛规则第41条的情况
【由完成裁判扣分：0.20分】

2. 领队违反竞赛规则第42条的情况，在严重警告的基础上决定扣分或处分。
【由完成主裁判员扣分……0.20分】`,
        },
      },
    ],
  },
]
