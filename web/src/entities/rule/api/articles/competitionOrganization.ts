import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第1章 競技規則のうち、総則・大会の組織・大会の運営。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const COMPETITION_ORGANIZATION_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '総則',
      en: 'General Provisions',
      zh: '总则',
    },
    section: [
      {
        title: {
          ja: '本規則の指針',
          en: 'Purpose of These Rules',
          zh: '本规则的方针',
        },
        content: {
          ja: '本規則は公益財団法人日本体操協会寄付行為第７章、男子新体操協会により協議会の組織運営・審判刑部の組織運営・研修・認定に関する指針となるものである。',
          en: "Under Chapter 7 of the Articles of Endowment of the Japan Gymnastics Association (a public interest incorporated foundation), these rules serve as the guidelines of the Men's Rhythmic Gymnastics Committee for organizing and running competitions, and for organizing, training and certifying judges.",
          zh: '本规则依据公益财团法人日本体操协会捐助章程第７章，由男子艺术体操协会制定，作为比赛会的组织运营、裁判部门的组织运营、培训及认定的方针。',
        },
      },
      {
        title: {
          ja: '本規則の改正',
          en: 'Amendment of These Rules',
          zh: '本规则的修订',
        },
        content: {
          ja: '本規則の改正は、男子新体操委員会で過半数を持って議決する。',
          en: "These rules are amended by a majority vote of the Men's Rhythmic Gymnastics Committee.",
          zh: '本规则的修订，由男子艺术体操委员会以过半数表决通过。',
        },
      },
    ],
  },
  {
    title: {
      ja: '協議会及び各種大会の組織',
      en: 'Organization of Competitions',
      zh: '比赛会及各类比赛的组织',
    },
    section: [
      {
        title: {
          ja: '各種大会',
          en: 'Types of Competitions',
          zh: '各类比赛',
        },
        content: {
          ja: `【全日本選手権大会】
  毎年、男子および女子の「全日本新体操選手権大会」を組織する。
  この組織は（公財）日本体操協会で１加盟団体に委嘱される。
  
【国民体育大会】
  国民体育大会の新体操競技の組織は、全日本選手権大会に準ずる。
  
【国際競技大会】
  本協会は、適当と認める場合には国際競技会を組織することができる。
  その競技組織・運営の具体的計画は、ＦＩＧ諸規則に基づき男子新体操委員会で起案資本協会理事会の承認を受ける。`,
          en: `[All Japan Championships]
  Every year, the "All Japan Rhythmic Gymnastics Championships" are organized for men and for women.
  The Japan Gymnastics Association entrusts their organization to one member organization.

[National Sports Festival]
  The rhythmic gymnastics events of the National Sports Festival are organized in the same way as the All Japan Championships.

[International Competitions]
  The Association may organize international competitions when it considers it appropriate.
  The concrete plan for organizing and running such a competition is drafted by the Men's Rhythmic Gymnastics Committee in accordance with the FIG regulations and approved by the Board of Directors of the Association.`,
          zh: `【全日本锦标赛】
  每年组织男子和女子的「全日本艺术体操锦标赛」。
  该组织工作由（公财）日本体操协会委托给１个加盟团体。
  
【国民体育大会】
  国民体育大会艺术体操比赛的组织，比照全日本锦标赛。
  
【国际比赛】
  本协会在认为适当时，可以组织国际比赛会。
  其比赛组织、运营的具体计划，依据ＦＩＧ各项规则由男子艺术体操委员会起草，并经本协会理事会批准。`,
        },
      },
      {
        title: {
          ja: '各競技会場の場所',
          en: 'Competition Venues',
          zh: '各比赛场馆的地点',
        },
        content: {
          ja: '本協会の監督下に組織される競技会および各種競技会は、目的に適した場所（体育館または競技場）で行わなければならない。',
          en: 'Competitions organized under the supervision of the Association must be held in a place suited to their purpose (a gymnasium or an arena).',
          zh: '在本协会监督下组织的比赛会及各类比赛，必须在适合其目的的场所（体育馆或比赛场）举行。',
        },
      },
    ],
  },
  {
    title: {
      ja: '協議会及び各種大会の運営',
      en: 'Running Competitions',
      zh: '比赛会及各类比赛的运营',
    },
    section: [
      {
        title: {
          ja: '組織協会の責任',
          en: 'Responsibilities of the Organizing Association',
          zh: '组织协会的责任',
        },
        content: {
          ja: `組織協会はその構成する組織委員会においても全責任をもつ。組織協会は宣伝および組織の全経費を負担する。その中に以下のものを含む。

1. 必要な冊子および印刷物の印刷ならびに送付
 
2. メダルおよび賞状の準備

3. 競技場および練習場の整理、練習および競技用として十分な数量の正式器械器具の準備
 
4. 伴奏音楽に必要な音響機器の準備
 
5. 競技会進行に必要な音響設備の準備
 
6. 競技会の順調な進行、特に掲示採点の伝達などに必要な人員の確保
 
7. 計算作業、競技会経過中の成績および決定成績の公表、報道機関用書類の作成。組織委員会は、審判に必要な情報を提供し、業務を援助する。一般に組織委員会は、男子新体操委員会と連絡を密にし、必要な事項を処理する`,
          en: `The organizing association bears full responsibility, including for the Organizing Committee it forms. It bears all costs of publicity and organization, including the following.

1. Printing and sending the necessary booklets and printed materials

2. Preparing medals and certificates

3. Arranging the competition and training halls, and preparing enough official equipment for training and competition

4. Preparing the audio equipment needed for the accompanying music

5. Preparing the sound system needed to run the competition

6. Securing the staff needed for the competition to run smoothly, especially for displaying and communicating scores

7. Calculating results, announcing results during the competition and the final results, and preparing documents for the press. The Organizing Committee provides the judges with the information they need and supports their work. In general, the Organizing Committee keeps in close contact with the Men's Rhythmic Gymnastics Committee and handles the necessary matters.`,
          zh: `组织协会对其组成的组织委员会也负有全部责任。组织协会承担宣传和组织的全部经费，其中包括以下各项。

1. 必要的手册及印刷品的印制与寄送
 
2. 奖牌及奖状的准备

3. 比赛场及训练场的整理，以及准备足够数量的训练和比赛用正式器械用具
 
4. 伴奏音乐所需音响设备的准备
 
5. 比赛会进行所需扩音设备的准备
 
6. 确保比赛会顺利进行、特别是评分公示与传达等所需的人员
 
7. 计算工作、比赛会进行过程中的成绩及最后成绩的公布、供新闻媒体使用的文件的编制。组织委员会向裁判提供必要的信息，协助其工作。一般而言，组织委员会与男子艺术体操委员会保持密切联系，处理必要的事项`,
        },
      },
      {
        title: {
          ja: '出場の申し込み',
          en: 'Entries',
          zh: '参赛报名',
        },
        content: {
          ja: `出場申し込みは、所定の時期に本協会事務局から、各加盟団体に送付する様式、またはホームページに掲載された様式による

1. 出場申し込みは、本協会事務局に所定の申し込み用紙１部を指定された期日までに提出しなければならない

2. 競技者決定名簿の作成にあたっては、各競技者の登録番号、氏名、生年月日、出身地ならびに加盟団体所属登録会員であることを確認しなければならない

3. 出場申込書提出後、選手変更の必要が生じた場合には、書面で競技会の前日までに組織委員会に提出し監督者会議において確認する。ただし、監督者会議後においては申し込みされた選手でなければ交代できない
`,
          en: `Entries are made on the form that the Association's secretariat sends to each member organization at the specified time, or on the form posted on the website.

1. One copy of the specified entry form must be submitted to the Association's secretariat by the specified deadline.

2. When preparing the final list of gymnasts, the registration number, name, date of birth and home prefecture of each gymnast, and their registration as a member of a member organization, must be confirmed.

3. If a gymnast needs to be changed after the entry has been submitted, the change must be submitted in writing to the Organizing Committee by the day before the competition and confirmed at the team managers' meeting. After the team managers' meeting, only gymnasts who were entered may be substituted.`,
          zh: `参赛报名使用本协会事务局在规定时期寄送给各加盟团体的表格，或网站上公布的表格

1. 参赛报名必须在指定的日期之前，向本协会事务局提交规定的报名表１份

2. 编制参赛者确定名册时，必须确认各参赛者的注册号、姓名、出生年月日、出生地，以及其为加盟团体所属的注册会员

3. 提交参赛报名表后，如需变更运动员，应于比赛会前一日之前以书面形式提交组织委员会，并在领队会议上确认。但在领队会议之后，只能由已报名的运动员进行替换
`,
        },
      },
      {
        title: {
          ja: '規定演技の作成',
          en: 'Creation of Compulsory Routines',
          zh: '规定成套动作的编制',
        },
        content: {
          ja: '規定演技の協議を開催する場合は男子新体操委員会で作成し、競技の１２か月前に、本協会公式用語によって正確に加盟団体に連絡しなければならない。解説の補助手段として、演技ビデオや、図解を作成することがあるが、その内容に問題のある場合には、男子新体操委員会の公式解説文または公式ビデオによるものとする。',
          en: "When a competition with compulsory routines is held, the routines are created by the Men's Rhythmic Gymnastics Committee and communicated precisely to the member organizations in the Association's official terminology 12 months before the competition. Videos or diagrams of the routines may be made as aids to the explanation; if their content is problematic, the official written explanation or the official video of the Men's Rhythmic Gymnastics Committee prevails.",
          zh: '举办规定成套动作的比赛时，由男子艺术体操委员会编制，并须在比赛的１２个月前，以本协会的正式用语准确地通知各加盟团体。作为讲解的辅助手段，可以制作成套动作的录像或图解，但其内容存在问题时，以男子艺术体操委员会的正式讲解文本或正式录像为准。',
        },
      },
      {
        title: {
          ja: '競技規則及び採点規則に定めない事項',
          en: 'Matters Not Covered by the Competition Rules or the Code of Points',
          zh: '比赛规则及评分规则未作规定的事项',
        },
        content: {
          ja: '競技ならびに採点規則の定めない事項については、男子新体操委員会の責任者として服務する審判長と審判団がこれを決定し、それに対する抗議はできない。',
          en: "Matters not covered by the competition rules or the Code of Points are decided by the Jury President, who serves on behalf of the Men's Rhythmic Gymnastics Committee, together with the judging panel. No protest may be made against such decisions.",
          zh: '比赛及评分规则未作规定的事项，由作为男子艺术体操委员会负责人任职的裁判长与裁判组决定，对此不得提出申诉。',
        },
      },
      {
        title: {
          ja: '旗・クラブ旗',
          en: 'Flags and Club Flags',
          zh: '旗、俱乐部旗',
        },
        content: {
          ja: '部旗（クラブ旗）は１枚を限度とし、大きさは４m<sup>2</sup>以内とする。ただし、掲示する場所は組織委員会の指定するところとする。',
          en: 'Each team may display one team flag (club flag), no larger than 4 m². It must be displayed where the Organizing Committee designates.',
          zh: '部旗（俱乐部旗）以１面为限，大小在４m<sup>2</sup>以内。但悬挂的位置由组织委员会指定。',
        },
      },
      {
        title: {
          ja: '審判団の選定',
          en: 'Selection of the Judging Panel',
          zh: '裁判组的选定',
        },
        content: {
          ja: '本協会の組織する競技会では、審判団は（公財）日本体操協会の作成する公認名簿に記載のものから選定する。競技の審判長および採点規則に定める主任審判員は、男子新体操委員会で任命する。審判団の詳細は、第２章採点規則第6条による。',
          en: "At competitions organized by the Association, judges are selected from the official list prepared by the Japan Gymnastics Association. The Jury President and the chief judges defined in the Code of Points are appointed by the Men's Rhythmic Gymnastics Committee. Details of the judging panel are set out in Article 6 of Chapter 2, Code of Points.",
          zh: '在本协会组织的比赛会上，裁判组从（公财）日本体操协会编制的公认名册中选定。比赛的裁判长及评分规则所规定的主裁判员，由男子艺术体操委员会任命。裁判组的详细内容，依照第２章评分规则第6条。',
        },
      },
      {
        title: {
          ja: '競技部長の任命',
          en: 'Appointment of the Competition Director',
          zh: '比赛部长的任命',
        },
        content: {
          ja: '競技部長は、男子新体操委員会および組織委員会で協議の上にこれを任命し、審判長の指導のもとに競技場および記録部ならびに広報部における補佐員全部を監督指導する。会場係長は、競技部長と同様にしてこれを任命し、競技場、練習場の器械およびあらゆる施設の設備ならびに状態を監視する。',
          en: "The Competition Director is appointed after consultation between the Men's Rhythmic Gymnastics Committee and the Organizing Committee, and, under the direction of the Jury President, supervises all assistants in the competition hall, the records section and the public relations section. The Venue Manager is appointed in the same way as the Competition Director and oversees the equipment and all facilities of the competition and training halls and their condition.",
          zh: '比赛部长由男子艺术体操委员会与组织委员会协商后任命，并在裁判长的指导下，监督指导比赛场、记录部及宣传部的全体助理人员。场馆负责人与比赛部长以同样方式任命，负责监督比赛场、训练场的器械及各项设施的设备与状态。',
        },
      },
      {
        title: {
          ja: '審判団・競技部長・会場係長の責務',
          en: 'Duties of the Judging Panel, the Competition Director and the Venue Manager',
          zh: '裁判组、比赛部长、场馆负责人的职责',
        },
        content: {
          ja: '審判長・審判員・競技部長および会場係長は、上記の職責に完全に専任し、いかなる名目をもってもチームを指導し、競技に参加し、また他の任務を受諾することはできない。審判長・審判員および当該監督者は、競技開始１時間前に競技場に集合し、競技の進行順序・臨時の変更などについて通知を受ける。',
          en: 'The Jury President, the judges, the Competition Director and the Venue Manager must devote themselves entirely to the duties above, and may not coach a team, take part in the competition or accept any other role under any pretext. The Jury President, the judges and the team managers concerned gather at the competition hall one hour before the start of the competition and are informed of the order of the competition and any temporary changes.',
          zh: '裁判长、裁判员、比赛部长及场馆负责人，必须完全专任上述职责，不得以任何名义指导队伍、参加比赛或接受其他任务。裁判长、裁判员及有关领队，应在比赛开始１小时前在比赛场集合，接受关于比赛进行顺序、临时变更等事项的通知。',
        },
      },
      {
        title: {
          ja: '裁定審判部の設置',
          en: 'Establishment of the Appeals Jury',
          zh: '裁定裁判部的设置',
        },
        content: {
          ja: '競技会は裁定審判部を設ける。裁定審判部は、競技会の期間およびその後に問題のある場合にこの処理にあたるもので、本協会会長または理事会の一役員・審判長・主任審判員および競技部長またはその代表者で構成する。',
          en: 'An Appeals Jury is set up for each competition. It deals with any problems that arise during or after the competition, and consists of the President of the Association or one officer of the Board of Directors, the Jury President, the chief judges, and the Competition Director or their representative.',
          zh: '比赛会设置裁定裁判部。裁定裁判部负责处理比赛会期间及其后出现的问题，由本协会会长或理事会的一名成员、裁判长、主裁判员及比赛部长或其代表组成。',
        },
      },
      {
        title: {
          ja: '裁定審判部の裁決',
          en: 'Decisions of the Appeals Jury',
          zh: '裁定裁判部的裁决',
        },
        content: {
          ja: '審判団および裁定審判部の裁決は、決定的で変更することができない。ただし実質的過失のあった場合はこの限りではない。',
          en: 'Decisions of the judging panel and the Appeals Jury are final and cannot be changed, except in the case of a material error.',
          zh: '裁判组及裁定裁判部的裁决是最终的，不得变更。但存在实质性过失的情况除外。',
        },
      },
      {
        title: {
          ja: '決定点の公開',
          en: 'Display of Final Scores',
          zh: '最后得分的公开',
        },
        content: {
          ja: '組織委員会は、決定点を公衆および競技者に示し得る装置を設置する。競技における、すべての採点に関する問題、特に審判団の編成・主任審判員の任務・演技採点・当初および途中の審判員の競技については、採点規則の示すところによる。',
          en: 'The Organizing Committee installs equipment that can show the final scores to the public and the gymnasts. All matters concerning scoring at the competition, especially the composition of the judging panel, the duties of the chief judges, the scoring of routines, and the judges at the start and during the competition, follow the Code of Points.',
          zh: '组织委员会应设置能够向观众和参赛者显示最后得分的装置。比赛中所有与评分有关的问题，特别是裁判组的编成、主裁判员的职务、成套动作的评分、开始时及比赛过程中裁判员的相关事项，均依照评分规则。',
        },
      },
      {
        title: {
          ja: '音響設備の準備',
          en: 'Preparation of Audio Equipment',
          zh: '音响设备的准备',
        },
        content: {
          ja: '組織委員会は伴奏音楽を使用するための音響機器を準備しなければならない。',
          en: 'The Organizing Committee must prepare audio equipment for playing the accompanying music.',
          zh: '组织委员会必须准备用于播放伴奏音乐的音响设备。',
        },
      },
      {
        title: {
          ja: '審判会議および監督会議の開催',
          en: "Judges' Meeting and Team Managers' Meeting",
          zh: '裁判会议及领队会议的召开',
        },
        content: {
          ja: '組織委員会は、競技会の前日または前々日に審判会議と監督者会議を行う。この会議では、あらかじめ抽選で決定された出場チームおよび個人の演技順を承認し、競技会の順調な進行に関する最終の指示を与える。',
          en: "The Organizing Committee holds a judges' meeting and a team managers' meeting the day before or two days before the competition. At these meetings, the order of performance of the teams and individuals, decided in advance by draw, is approved, and final instructions for the smooth running of the competition are given.",
          zh: '组织委员会在比赛会的前一日或前两日召开裁判会议和领队会议。会议上，承认事先通过抽签确定的参赛队伍及个人的出场顺序，并就比赛会的顺利进行给予最终指示。',
        },
      },
      {
        title: {
          ja: '採点表の写しと全記録',
          en: 'Copies of Score Sheets and Complete Records',
          zh: '评分表副本与全部记录',
        },
        content: {
          ja: '採点表の写しは、できるだけ各演技実施の直後に各チームに交付する。各チームには競技会の終わりに、決定成績表の一部を授与する。成績は逐次競技中に公表し、決定成績は競技終了後に公表する。全記録の副本は、これを本協会の文庫に納める。',
          en: "Copies of the score sheets are given to each team as soon as possible after each routine. At the end of the competition, each team receives a copy of the final results. Results are announced progressively during the competition, and the final results are announced after the competition ends. A duplicate of the complete records is kept in the Association's archives.",
          zh: '评分表的副本，尽可能在每套动作完成后立即交给各队。各队在比赛会结束时获得一份最后成绩表。成绩在比赛过程中陆续公布，最后成绩在比赛结束后公布。全部记录的副本存入本协会的资料库。',
        },
      },
      {
        title: {
          ja: '競技会場と演技面',
          en: 'Competition Hall and Floor Area',
          zh: '比赛场馆与场地',
        },
        content: {
          ja: '競技場は、約50m×30mの面積を競技エリアとし、最低12m以上の高さがなければならない。競技エリアには競技関係者以外の立ち入りを禁止する。演技面は内側13m×13mとする。その周りには２m以上の安全地帯を設ける。なお、演技代を設ける場合の安全地帯は３m以上とする。演技面を２面（男女）設置する場合は、その間の距離を４m以上とする。審判の位置は演技面より４m以上離れた場所に設置する。',
          en: "The competition hall must have a competition area of about 50 m × 30 m and a height of at least 12 m. Only people involved in the competition may enter the competition area. The floor area is 13 m × 13 m (inside measurement), surrounded by a safety zone of at least 2 m. If a podium is used, the safety zone must be at least 3 m. If two floor areas (men's and women's) are set up, they must be at least 4 m apart. The judges are seated at least 4 m from the floor area.",
          zh: '比赛场以约50m×30m的面积作为比赛区域，高度必须在12m以上。比赛区域禁止比赛相关人员以外的人进入。场地为内侧13m×13m。其周围设置２m以上的安全地带。另外，设置比赛台时，安全地带为３m以上。设置２块场地（男女）时，其间距离为４m以上。裁判的位置设在距场地４m以上的地方。',
        },
      },
      {
        title: {
          ja: '器械器具の準備',
          en: 'Preparation of Equipment',
          zh: '器械用具的准备',
        },
        content: {
          ja: 'すべての器械器具は、組織委員会がこれを準備する。組織委員会は器械器具認定規則および男子新体操委員会の与える指示に従わなければならない。',
          en: "All equipment is prepared by the Organizing Committee, which must follow the equipment certification rules and the instructions of the Men's Rhythmic Gymnastics Committee.",
          zh: '所有器械用具均由组织委员会准备。组织委员会必须遵守器械用具认定规则及男子艺术体操委员会给予的指示。',
        },
      },
    ],
  },
]
