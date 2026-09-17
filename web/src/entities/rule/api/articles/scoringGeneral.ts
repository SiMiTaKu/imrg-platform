import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、総則・審判・一般的な採点規則。
 * 英語（`titleEnglish` など）は日本語の本文を訳したもの
 */
export const SCORING_GENERAL_ARTICLES: RuleArticle[] = [
  {
    title: '総則',
    titleEnglish: 'General Provisions',
    section: [
      {
        title: '採点規則の適用',
        titleEnglish: 'Application of the Code of Points',
        content: `
1. 採点規則は、国際および国内競技における競技を共通の基準をもって判定し、その評価を客観的にならしめるものである。
2. 審判員の能力と採点の技術を高め、また競技者や指導者に競技のための練習の指針として役立たせるものである。
3. 審判員は、本規則を厳守しなければならない。厳守しない審判員は審判長によって改心されることがある。`,
        contentEnglish: `1. The Code of Points is used to judge international and national competitions by common standards and to make their evaluation objective.
2. It serves to improve the ability of judges and their scoring technique, and guides gymnasts and coaches in their training for competition.
3. Judges must strictly observe these rules. Judges who do not may be replaced by the Jury President.`,
      },
    ],
  },
  {
    title: '審判',
    titleEnglish: 'Judging',
    section: [
      {
        title: '競技と審判',
        titleEnglish: 'Competition and Judging',
        content: `1. 新体操は判定競技であるから、審判員によって方向性と指導性とが決まるので、その責任は極めて重大である。
2. 審判員は、広い視野と高い見識と深い経験とを有し、かつ人格において良心的、公平でなければならない。
3. 審判員は、その特別の権限と職務上の立場から、その面前で実施した演技を深く感得し、正しく判定できなければならない。
4. 審判員は、演技の出来ばえ、構成における運動の難度および価値、その音楽伴奏との調和など、すべてを観察理解する能力が必要である。
5. 審判員は、技術の進歩以外に調和のある柔軟性および男子としての力強さを判定することも必要である。
6. 審判員は、観衆の拍手や見世物で価値のない演技に影響を受けることなく信念に基づく判定が必要である。
7. 不正または誤った判定は、指導者および競技者に大きな影響を与えるばかりでなく、新体操の普及にも支障をきたす。`,
        contentEnglish: `1. Rhythmic gymnastics is a judged sport, so the judges set its direction and guide its development. Their responsibility is therefore very great.
2. Judges must have a broad perspective, sound judgment and deep experience, and must be conscientious and fair.
3. Given their special authority and position, judges must fully understand the routines performed before them and judge them correctly.
4. Judges need the ability to observe and understand everything: the quality of execution, the difficulty and value of the movements in the composition, their harmony with the accompanying music, and so on.
5. Besides technical progress, judges must also assess harmonious flexibility and masculine power.
6. Judges must judge by their own convictions, without being influenced by the audience's applause or by showy routines of no value.
7. Unfair or wrong judgments not only greatly affect coaches and gymnasts but also hinder the spread of rhythmic gymnastics.`,
      },
      {
        title: '審判員規定',
        titleEnglish: 'Regulations for Judges',
        content: `1. 本協会の監督下に開催される競技会では、公認審判認定規定に基づき資格を有した審判員が審判業務を行う。
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
        contentEnglish: `1. At competitions held under the supervision of the Association, judging is done by judges certified under the regulations for certified judges.
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
      },
      {
        title: '審判研修会と審判会議',
        titleEnglish: "Judges' Training Sessions and Judges' Meetings",
        content: `1. 審判会議および審判研修会では、規定演技のついては公式解説文または公式映像を参考にし、自由演技については、演技の構成・実施の良否を十分に審議し、採点の焦点を明らかにしなければならない。
2. 審判会議で能力不十分と認められた審判員は競技会から除名されることがある。`,
        contentEnglish: `1. At the judges' meeting and training session, compulsory routines are reviewed with the official written explanation or the official video, and free routines are reviewed thoroughly for the quality of composition and execution, so that the focus of scoring is made clear.
2. Judges found to be insufficiently capable at the judges' meeting may be removed from the competition.`,
      },
      {
        title: '審判員宣誓',
        titleEnglish: "Judges' Oath",
        content: `審判員は、次の宣誓文を厳粛に宣誓する。
              
『私は、審判員の資格において、スポーツの品位および誠実の精神を持ってのみ行動すること。ならびに、人物・所属を念頭に置かず、実施された演技を良心的に審判することを誓います。』
              `,
        contentEnglish: `Judges solemnly take the following oath.

"As a judge, I promise to act only in the spirit of sporting dignity and integrity, and to judge the routines performed conscientiously, without regard to the person or the organization."`,
      },
      {
        title: '審判団の構成',
        titleEnglish: 'Composition of the Judging Panel',
        content: `1. 競技会の審判団は原則として男子で編成する。
2. 審判団は原則として上級審判員、審判長、それぞれの種目において構成と実施に分かれ、主任審判員１名と審判員４名ずつ、ならびに線審２名、計時審１名と補審で構成される。
3. 予選競技と決勝競技か行われる競技会では、種目ならびに構成と実施を入れ替えて審判する。`,
        contentEnglish: `1. As a rule, the judging panel of a competition consists of men.
2. As a rule, the judging panel consists of the Superior Jury, the Jury President, and, for each event, a composition panel and an execution panel, each with one chief judge and four judges, as well as two line judges, one timekeeper and reserve judges.
3. At competitions with a qualification and a final, the judges switch events and switch between composition and execution.`,
      },
      {
        title: '上級審判員',
        titleEnglish: 'Superior Jury',
        content: `上級審判員は上級審判部内規に基づき以下の職務にあたる。

1. 競技を監督する事と反則や競技執行に影響を及ぼす特別な状況に対処する事。
2. 審判員一人または数名による重大な審判エラーがある場合、必要な処置を取る事。
3. 継続して審判員が授与する点数を再審して業務が不十分または不公平と思われる審判員に対して警告を発する事。
4. 警告の不満足な結果の後、審判人員を排除して交賛する事。`,
        contentEnglish: `The Superior Jury carries out the following duties under its internal rules.

1. Supervising the competition and dealing with violations and special situations that affect the running of the competition.
2. Taking the necessary action when one or more judges make a serious judging error.
3. Continuously reviewing the scores given by the judges and warning judges whose work seems inadequate or unfair.
4. Removing and replacing judges if a warning does not lead to a satisfactory result.`,
      },
      {
        title: '審判長',
        titleEnglish: 'Jury President',
        content: `1. 審判長は男子新体操委員会で任命する。
2. 審判長は、定めた日時・場所に審判部を招集し、競技会の採点および成績作成の順調な進行のために必要なあらゆる決定を行う。
3. 審判会議で能力不十分と認める審判員を競技会から除名することができる。
4. 審判長は、競技会のあらゆる機会に審判員に干渉できる。正しく、かつ満足すべき方法で行動しない審判員に対しては、主任審判員の意見を聞いた上で、これを除名し交代させることができる。`,
        contentEnglish: `1. The Jury President is appointed by the Men's Rhythmic Gymnastics Committee.
2. The Jury President convenes the judges at the set time and place and makes all decisions necessary for the smooth running of scoring and the preparation of results.
3. The Jury President may remove from the competition judges found to be insufficiently capable at the judges' meeting.
4. The Jury President may intervene with the judges at any time during the competition. After hearing the chief judge's opinion, the Jury President may remove and replace judges who do not act correctly and satisfactorily.`,
      },
      {
        title: '主任審判員',
        titleEnglish: 'Chief Judges',
        content: `1. 主任審判は、主任を務めるすべての演技を採点する。ただし主任審判員の採点は採点計算には加えられない。
2. 主任審判は、各審判員が提出した採点を注意して点検し、規則に反する採点が行われた場合、または点数に乱れがあった時には、主任審判の得点を示して協議する。
3. 主任審判員は最初の競技者終了後、必要があれば各審判員を招集して協議し、共通の出発点を求める。
4. 主任審判は、裁定審判部の決議に参与する。
5. 主任審判員が適用する減点があった場合は、これを有効点の平均から減点し最終得点を決定する。`,
        contentEnglish: `1. The chief judge scores every routine on the panel they lead, but the chief judge's score is not included in the calculation.
2. The chief judge carefully checks the scores submitted by each judge. If a score breaks the rules or the scores are inconsistent, the chief judge shows their own score and discusses it with the judges.
3. After the first gymnast, the chief judge calls the judges together if necessary to agree on a common starting point.
4. The chief judge takes part in the decisions of the Appeals Jury.
5. If the chief judge applies a deduction, it is subtracted from the average of the counting scores to determine the final score.`,
      },
      {
        title: '構成（Ｄ・Ａ）審判',
        titleEnglish: 'Composition (D/A) Judges',
        content: '構成審判は実施された演技の構成的価値を判断し10点満点で採点する。',
        contentEnglish:
          'Composition judges assess the compositional value of the routine performed and score it out of 10 points.',
      },
      {
        title: '実施（Ｅ）審判',
        titleEnglish: 'Execution (E) Judges',
        content: '実施審判は実施された演技の出来栄えを判断し10点満点で採点する。',
        contentEnglish:
          'Execution judges assess the quality of the routine performed and score it out of 10 points.',
      },
      {
        title: '線審',
        titleEnglish: 'Line Judges',
        content:
          '線審は、演技面のコーナーに位置し、競技者の身体または手具の場外違反の有無を判定する。違反の都度、赤旗で合図し演技後に実施主任審判員に回数および減点を報告する。',
        contentEnglish:
          "Line judges sit at the corners of the floor area and judge whether the gymnast's body or apparatus goes out of bounds. They signal each violation with a red flag and, after the routine, report the number of violations and the deductions to the execution chief judge.",
      },
      {
        title: '計時審',
        titleEnglish: 'Timekeeper',
        content: `計時審は以下の時間を計時し、構成主任審判員に報告する。

1. 入場から演技開始までの時間
2. 演技開始から演技終了までの時間`,
        contentEnglish: `The timekeeper measures the following times and reports them to the composition chief judge.

1. The time from entering the floor area to the start of the routine
2. The time from the start to the end of the routine`,
      },
      {
        title: '補審',
        titleEnglish: 'Reserve Judges',
        content: `補審は審判業務の補助を務める。また緊急の場合は審判交代に応じる。
                
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
        contentEnglish: `Reserve judges assist with the judging work and replace judges in an emergency.

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
      },
    ],
  },
  {
    title: '一般的な採点規則',
    titleEnglish: 'General Scoring Rules',
    section: [
      {
        title: '採点方法と採点の開き',
        titleEnglish: 'Scoring Method and Score Ranges',
        content: `1. 審判員は０点から10点までの各１点を20等分した点数で採点する。

2. 主任審判員と４名の審判の場合
構成・実施それぞれに主任審判員を除いた５名の審判員の最高点および最低点を除外し、有効点の平均（小数第４位以下を切り捨て）を求め合計する。主任審判員が適用する原点があった場合は、その平均点の合計から減点する。

3. 主任審判員が１審を兼ねる場合
構成実施それぞれに主任審判員を含めた４名の審判員の最高点および最低点を除外し、有効点の平均（少数第４位以下を切り捨て）を求め合計する。主任審判員が適用する減点があった場合は、その平均点の合計から原点する。

4. "有効点の開きは以下の点数より大きくてはならない。

5. 全審判員の採点最高点と最低点の開きは以下の点数より大きくてはならない。`,
        contentEnglish: `1. Judges score from 0 to 10 points in steps of one twentieth of a point.

2. With a chief judge and four judges
For composition and execution separately, the highest and lowest scores of the judges other than the chief judge are dropped, the average of the counting scores is calculated (truncated after the third decimal place), and the two averages are added. If the chief judge applies a deduction, it is subtracted from this total.

3. When the chief judge also serves as one of the judges
For composition and execution separately, the highest and lowest scores of the four judges including the chief judge are dropped, the average of the counting scores is calculated (truncated after the third decimal place), and the two averages are added. If the chief judge applies a deduction, it is subtracted from this total.

4. The range of the counting scores must not exceed the following.

5. The range between the highest and lowest scores of all judges must not exceed the following.`,
        image: [
          {
            src: '/images/rules/yuukouten.png',
            alt: '有効点の開き',
            altEnglish: 'Allowed range of the counting scores',
          },
          {
            src: '/images/rules/tennsuu.png',
            alt: '全審判員の点数の開き',
            altEnglish: "Allowed range of all judges' scores",
          },
        ],
      },
      {
        title: '基準点',
        titleEnglish: 'Base Score',
        content: `基準点は、全審判員と主任審判員が集合して話し合っても問題が解決されない場合に適用される。計算は次のように行う。
（有効点の平均＋主任審判員の採点）／２＝基準点`,
        contentEnglish: `The base score is used when the judges and the chief judge cannot resolve a problem even after discussing it together. It is calculated as follows.
(Average of the counting scores + chief judge's score) / 2 = base score`,
      },
      {
        title: '演技時間',
        titleEnglish: 'Duration of the Routine',
        content: `1. 競技規則47条の時間に違反した場合は、長すぎても短すぎても減点とする。
【構成主任審判より原点：１秒につき・・・0.005点】

2. 演技時間が下記に満たなかった場合は得点を次の通りにする。
団体競技　２分３０秒　　　個人競技　１分００秒
【得点：構成・実施とも0．00点】`,
        contentEnglish: `1. If the duration in Article 47 of the competition rules is not respected, a deduction is applied whether the routine is too long or too short.
[Deduction by the composition chief judge: 0.005 points per second]

2. If the routine is shorter than the following, the score is as follows.
Group competition: 2 min 30 s    Individual competition: 1 min 00 s
[Score: 0.00 points for both composition and execution]`,
      },
      {
        title: '演技開始までの時間',
        titleEnglish: 'Time Before the Start of the Routine',
        content: `入場から演技開始までの時間が次の時間を超えた場合は減点とする。
団体競技・・・３０秒　　　個人競技・・・２０秒
【実施主任審判より減点・・・0．20点】`,
        contentEnglish: `A deduction is applied if the time from entering the floor area to the start of the routine exceeds the following.
Group competition: 30 s    Individual competition: 20 s
[Deduction by the execution chief judge: 0.20 points]`,
      },
      {
        title: '演技面への入退場',
        titleEnglish: 'Entering and Leaving the Floor Area',
        content: `演技面への入退場は、徒歩または駆け足で速やかに行わなければならない。
【違反した場合　実施審判より減点・・・0．20点】`,
        contentEnglish: `Gymnasts must enter and leave the floor area promptly, walking or running.
[Violation: deduction by the execution judges, 0.20 points]`,
      },
      {
        title: '場外',
        titleEnglish: 'Out of Bounds',
        content: `場外の扱いは以下のとおりとし、実施主任審判より減点する。
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
        contentEnglish: `Out of bounds is treated as follows, and the deduction is applied by the execution chief judge.
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
      },
      {
        title: '試合着',
        titleEnglish: 'Competition Attire',
        content: `試合着に関する違反は以下のとおり減点する。
                
1. 競技規則39条に違反した場合（含所属マーク）ただし、プリント柄の若干の違いは減点しない。
【構成主任審判より減点：１名につき・・・0.20点】

2. 破れた服装で演技した場合。ただし演技中に敗れたものは減点しない。
【実施審判より減点：１名につき・・・0．10点】

3. 著しく服装が乱れた場合。
【実施審判より減点：１名につき・・・0．10点】`,
        contentEnglish: `Violations concerning competition attire are penalized as follows.

1. Violation of Article 39 of the competition rules (including the emblem). Slight differences in printed patterns are not penalized.
[Deduction by the composition chief judge: 0.20 points per gymnast]

2. Performing in torn attire. Attire torn during the routine is not penalized.
[Deduction by the execution judges: 0.10 points per gymnast]

3. Attire that becomes badly disordered.
[Deduction by the execution judges: 0.10 points per gymnast]`,
      },
      {
        title: '伴奏音楽',
        titleEnglish: 'Accompanying Music',
        content: `競技規則第45条に基づき、１から４の減点をする。

1. 伴奏音楽がなかった場合。　【構成主任審判より減点：0．50点】

2. 入退場に伴奏音楽をつけた場合。　【構成主任審判員より減点：0．20点】

3. 音楽に３秒以上の停止があった場合　【構成審判より減点：0．20点】

4. 組織者側に責任のない理由で音楽が中断された場合は、原則として復興できない。
中断があった場合、審判長と競技部長は原因を速やかに確認し処理に当たる。`,
        contentEnglish: `Under Article 45 of the competition rules, deductions 1 to 4 are applied.

1. No accompanying music.  [Deduction by the composition chief judge: 0.50 points]

2. Music played while entering or leaving the floor area.  [Deduction by the composition chief judge: 0.20 points]

3. A pause of 3 seconds or more in the music.  [Deduction by the composition judges: 0.20 points]

4. If the music stops for a reason for which the organizers are not responsible, as a rule the routine may not be repeated.
If the music stops, the Jury President and the Competition Director promptly determine the cause and deal with it.`,
      },
      {
        title: '手具',
        titleEnglish: 'Apparatus',
        content: `1. 演技途中で手具が破損した場合、競技者は手部の差し替えをしなければならない。
2. 手具の差し替えのための場外は減点の対象とならない。
3. 差し変えのための中断は、演技の中断として減点する。　【実施審判より減点：１秒につき・・・0．10点】
4. 破損した後、手具の差し替えを行わなかった場合は、破損後の演技の価値はないものとして採点する。
5. 手具が演技終了時に破損した場合は、手具に触れずに終了したものとして扱う。
6. 演技中の手具が破損した場合その演技をやり直すことはできない。
7. 規格外の手具の使用した場合　【得点：構成・実施とも0.00点】
8. 予備手具を使用した場合　【構成主任審判員より減点・・・0.50点】`,
        contentEnglish: `1. If an apparatus breaks during the routine, the gymnast must replace it.
2. Going out of bounds to replace the apparatus is not penalized.
3. An interruption to replace the apparatus is penalized as an interruption of the routine.  [Deduction by the execution judges: 0.10 points per second]
4. If the apparatus is not replaced after it breaks, the rest of the routine after the break is scored as having no value.
5. If the apparatus breaks at the end of the routine, the routine is treated as having ended without the gymnast touching the apparatus.
6. A routine in which the apparatus broke may not be repeated.
7. Use of an apparatus that does not meet the specifications  [Score: 0.00 points for both composition and execution]
8. Use of a spare apparatus  [Deduction by the composition chief judge: 0.50 points]`,
      },
      {
        title: '規律',
        titleEnglish: 'Discipline',
        content: `1. 競技者が競技規則第41条に違反した場合
【実施審判より減点：0．20点】

2. 監督者が競技規則第42条に違反した場合は厳重に注意をした上で減点や処分を決める。
【実施主任審判員より減点・・・0．20点】`,
        contentEnglish: `1. A gymnast violates Article 41 of the competition rules.
[Deduction by the execution judges: 0.20 points]

2. If a team manager violates Article 42 of the competition rules, a strict warning is given and the deduction or penalty is decided.
[Deduction by the execution chief judge: 0.20 points]`,
      },
    ],
  },
]
