import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第1章 競技規則のうち、総則・大会の組織・大会の運営。
 * 英語（`titleEnglish` など）は日本語の本文を訳したもの
 */
export const COMPETITION_ORGANIZATION_ARTICLES: RuleArticle[] = [
  {
    title: '総則',
    titleEnglish: 'General Provisions',
    section: [
      {
        title: '本規則の指針',
        titleEnglish: 'Purpose of These Rules',
        content:
          '本規則は公益財団法人日本体操協会寄付行為第７章、男子新体操協会により協議会の組織運営・審判刑部の組織運営・研修・認定に関する指針となるものである。',
        contentEnglish:
          "Under Chapter 7 of the Articles of Endowment of the Japan Gymnastics Association (a public interest incorporated foundation), these rules serve as the guidelines of the Men's Rhythmic Gymnastics Committee for organizing and running competitions, and for organizing, training and certifying judges.",
      },
      {
        title: '本規則の改正',
        titleEnglish: 'Amendment of These Rules',
        content: '本規則の改正は、男子新体操委員会で過半数を持って議決する。',
        contentEnglish:
          "These rules are amended by a majority vote of the Men's Rhythmic Gymnastics Committee.",
      },
    ],
  },
  {
    title: '協議会及び各種大会の組織',
    titleEnglish: 'Organization of Competitions',
    section: [
      {
        title: '各種大会',
        titleEnglish: 'Types of Competitions',
        content: `【全日本選手権大会】
  毎年、男子および女子の「全日本新体操選手権大会」を組織する。
  この組織は（公財）日本体操協会で１加盟団体に委嘱される。
  
【国民体育大会】
  国民体育大会の新体操競技の組織は、全日本選手権大会に準ずる。
  
【国際競技大会】
  本協会は、適当と認める場合には国際競技会を組織することができる。
  その競技組織・運営の具体的計画は、ＦＩＧ諸規則に基づき男子新体操委員会で起案資本協会理事会の承認を受ける。`,
        contentEnglish: `[All Japan Championships]
  Every year, the "All Japan Rhythmic Gymnastics Championships" are organized for men and for women.
  The Japan Gymnastics Association entrusts their organization to one member organization.

[National Sports Festival]
  The rhythmic gymnastics events of the National Sports Festival are organized in the same way as the All Japan Championships.

[International Competitions]
  The Association may organize international competitions when it considers it appropriate.
  The concrete plan for organizing and running such a competition is drafted by the Men's Rhythmic Gymnastics Committee in accordance with the FIG regulations and approved by the Board of Directors of the Association.`,
      },
      {
        title: '各競技会場の場所',
        titleEnglish: 'Competition Venues',
        content:
          '本協会の監督下に組織される競技会および各種競技会は、目的に適した場所（体育館または競技場）で行わなければならない。',
        contentEnglish:
          'Competitions organized under the supervision of the Association must be held in a place suited to their purpose (a gymnasium or an arena).',
      },
    ],
  },
  {
    title: '協議会及び各種大会の運営',
    titleEnglish: 'Running Competitions',
    section: [
      {
        title: '組織協会の責任',
        titleEnglish: 'Responsibilities of the Organizing Association',
        content: `組織協会はその構成する組織委員会においても全責任をもつ。組織協会は宣伝および組織の全経費を負担する。その中に以下のものを含む。

1. 必要な冊子および印刷物の印刷ならびに送付
 
2. メダルおよび賞状の準備

3. 競技場および練習場の整理、練習および競技用として十分な数量の正式器械器具の準備
 
4. 伴奏音楽に必要な音響機器の準備
 
5. 競技会進行に必要な音響設備の準備
 
6. 競技会の順調な進行、特に掲示採点の伝達などに必要な人員の確保
 
7. 計算作業、競技会経過中の成績および決定成績の公表、報道機関用書類の作成。組織委員会は、審判に必要な情報を提供し、業務を援助する。一般に組織委員会は、男子新体操委員会と連絡を密にし、必要な事項を処理する`,
        contentEnglish: `The organizing association bears full responsibility, including for the Organizing Committee it forms. It bears all costs of publicity and organization, including the following.

1. Printing and sending the necessary booklets and printed materials

2. Preparing medals and certificates

3. Arranging the competition and training halls, and preparing enough official equipment for training and competition

4. Preparing the audio equipment needed for the accompanying music

5. Preparing the sound system needed to run the competition

6. Securing the staff needed for the competition to run smoothly, especially for displaying and communicating scores

7. Calculating results, announcing results during the competition and the final results, and preparing documents for the press. The Organizing Committee provides the judges with the information they need and supports their work. In general, the Organizing Committee keeps in close contact with the Men's Rhythmic Gymnastics Committee and handles the necessary matters.`,
      },
      {
        title: '出場の申し込み',
        titleEnglish: 'Entries',
        content: `出場申し込みは、所定の時期に本協会事務局から、各加盟団体に送付する様式、またはホームページに掲載された様式による

1. 出場申し込みは、本協会事務局に所定の申し込み用紙１部を指定された期日までに提出しなければならない

2. 競技者決定名簿の作成にあたっては、各競技者の登録番号、氏名、生年月日、出身地ならびに加盟団体所属登録会員であることを確認しなければならない

3. 出場申込書提出後、選手変更の必要が生じた場合には、書面で競技会の前日までに組織委員会に提出し監督者会議において確認する。ただし、監督者会議後においては申し込みされた選手でなければ交代できない
`,
        contentEnglish: `Entries are made on the form that the Association's secretariat sends to each member organization at the specified time, or on the form posted on the website.

1. One copy of the specified entry form must be submitted to the Association's secretariat by the specified deadline.

2. When preparing the final list of gymnasts, the registration number, name, date of birth and home prefecture of each gymnast, and their registration as a member of a member organization, must be confirmed.

3. If a gymnast needs to be changed after the entry has been submitted, the change must be submitted in writing to the Organizing Committee by the day before the competition and confirmed at the team managers' meeting. After the team managers' meeting, only gymnasts who were entered may be substituted.`,
      },
      {
        title: '規定演技の作成',
        titleEnglish: 'Creation of Compulsory Routines',
        content:
          '規定演技の協議を開催する場合は男子新体操委員会で作成し、競技の１２か月前に、本協会公式用語によって正確に加盟団体に連絡しなければならない。解説の補助手段として、演技ビデオや、図解を作成することがあるが、その内容に問題のある場合には、男子新体操委員会の公式解説文または公式ビデオによるものとする。',
        contentEnglish:
          "When a competition with compulsory routines is held, the routines are created by the Men's Rhythmic Gymnastics Committee and communicated precisely to the member organizations in the Association's official terminology 12 months before the competition. Videos or diagrams of the routines may be made as aids to the explanation; if their content is problematic, the official written explanation or the official video of the Men's Rhythmic Gymnastics Committee prevails.",
      },
      {
        title: '競技規則及び採点規則に定めない事項',
        titleEnglish: 'Matters Not Covered by the Competition Rules or the Code of Points',
        content:
          '競技ならびに採点規則の定めない事項については、男子新体操委員会の責任者として服務する審判長と審判団がこれを決定し、それに対する抗議はできない。',
        contentEnglish:
          "Matters not covered by the competition rules or the Code of Points are decided by the Jury President, who serves on behalf of the Men's Rhythmic Gymnastics Committee, together with the judging panel. No protest may be made against such decisions.",
      },
      {
        title: '旗・クラブ旗',
        titleEnglish: 'Flags and Club Flags',
        content:
          '部旗（クラブ旗）は１枚を限度とし、大きさは４m<sup>2</sup>以内とする。ただし、掲示する場所は組織委員会の指定するところとする。',
        contentEnglish:
          'Each team may display one team flag (club flag), no larger than 4 m². It must be displayed where the Organizing Committee designates.',
      },
      {
        title: '審判団の選定',
        titleEnglish: 'Selection of the Judging Panel',
        content:
          '本協会の組織する競技会では、審判団は（公財）日本体操協会の作成する公認名簿に記載のものから選定する。競技の審判長および採点規則に定める主任審判員は、男子新体操委員会で任命する。審判団の詳細は、第２章採点規則第6条による。',
        contentEnglish:
          "At competitions organized by the Association, judges are selected from the official list prepared by the Japan Gymnastics Association. The Jury President and the chief judges defined in the Code of Points are appointed by the Men's Rhythmic Gymnastics Committee. Details of the judging panel are set out in Article 6 of Chapter 2, Code of Points.",
      },
      {
        title: '競技部長の任命',
        titleEnglish: 'Appointment of the Competition Director',
        content:
          '競技部長は、男子新体操委員会および組織委員会で協議の上にこれを任命し、審判長の指導のもとに競技場および記録部ならびに広報部における補佐員全部を監督指導する。会場係長は、競技部長と同様にしてこれを任命し、競技場、練習場の器械およびあらゆる施設の設備ならびに状態を監視する。',
        contentEnglish:
          "The Competition Director is appointed after consultation between the Men's Rhythmic Gymnastics Committee and the Organizing Committee, and, under the direction of the Jury President, supervises all assistants in the competition hall, the records section and the public relations section. The Venue Manager is appointed in the same way as the Competition Director and oversees the equipment and all facilities of the competition and training halls and their condition.",
      },
      {
        title: '審判団・競技部長・会場係長の責務',
        titleEnglish: 'Duties of the Judging Panel, the Competition Director and the Venue Manager',
        content:
          '審判長・審判員・競技部長および会場係長は、上記の職責に完全に専任し、いかなる名目をもってもチームを指導し、競技に参加し、また他の任務を受諾することはできない。審判長・審判員および当該監督者は、競技開始１時間前に競技場に集合し、競技の進行順序・臨時の変更などについて通知を受ける。',
        contentEnglish:
          'The Jury President, the judges, the Competition Director and the Venue Manager must devote themselves entirely to the duties above, and may not coach a team, take part in the competition or accept any other role under any pretext. The Jury President, the judges and the team managers concerned gather at the competition hall one hour before the start of the competition and are informed of the order of the competition and any temporary changes.',
      },
      {
        title: '裁定審判部の設置',
        titleEnglish: 'Establishment of the Appeals Jury',
        content:
          '競技会は裁定審判部を設ける。裁定審判部は、競技会の期間およびその後に問題のある場合にこの処理にあたるもので、本協会会長または理事会の一役員・審判長・主任審判員および競技部長またはその代表者で構成する。',
        contentEnglish:
          'An Appeals Jury is set up for each competition. It deals with any problems that arise during or after the competition, and consists of the President of the Association or one officer of the Board of Directors, the Jury President, the chief judges, and the Competition Director or their representative.',
      },
      {
        title: '裁定審判部の裁決',
        titleEnglish: 'Decisions of the Appeals Jury',
        content:
          '審判団および裁定審判部の裁決は、決定的で変更することができない。ただし実質的過失のあった場合はこの限りではない。',
        contentEnglish:
          'Decisions of the judging panel and the Appeals Jury are final and cannot be changed, except in the case of a material error.',
      },
      {
        title: '決定点の公開',
        titleEnglish: 'Display of Final Scores',
        content:
          '組織委員会は、決定点を公衆および競技者に示し得る装置を設置する。競技における、すべての採点に関する問題、特に審判団の編成・主任審判員の任務・演技採点・当初および途中の審判員の競技については、採点規則の示すところによる。',
        contentEnglish:
          'The Organizing Committee installs equipment that can show the final scores to the public and the gymnasts. All matters concerning scoring at the competition, especially the composition of the judging panel, the duties of the chief judges, the scoring of routines, and the judges at the start and during the competition, follow the Code of Points.',
      },
      {
        title: '音響設備の準備',
        titleEnglish: 'Preparation of Audio Equipment',
        content: '組織委員会は伴奏音楽を使用するための音響機器を準備しなければならない。',
        contentEnglish:
          'The Organizing Committee must prepare audio equipment for playing the accompanying music.',
      },
      {
        title: '審判会議および監督会議の開催',
        titleEnglish: "Judges' Meeting and Team Managers' Meeting",
        content:
          '組織委員会は、競技会の前日または前々日に審判会議と監督者会議を行う。この会議では、あらかじめ抽選で決定された出場チームおよび個人の演技順を承認し、競技会の順調な進行に関する最終の指示を与える。',
        contentEnglish:
          "The Organizing Committee holds a judges' meeting and a team managers' meeting the day before or two days before the competition. At these meetings, the order of performance of the teams and individuals, decided in advance by draw, is approved, and final instructions for the smooth running of the competition are given.",
      },
      {
        title: '採点表の写しと全記録',
        titleEnglish: 'Copies of Score Sheets and Complete Records',
        content:
          '採点表の写しは、できるだけ各演技実施の直後に各チームに交付する。各チームには競技会の終わりに、決定成績表の一部を授与する。成績は逐次競技中に公表し、決定成績は競技終了後に公表する。全記録の副本は、これを本協会の文庫に納める。',
        contentEnglish:
          "Copies of the score sheets are given to each team as soon as possible after each routine. At the end of the competition, each team receives a copy of the final results. Results are announced progressively during the competition, and the final results are announced after the competition ends. A duplicate of the complete records is kept in the Association's archives.",
      },
      {
        title: '競技会場と演技面',
        titleEnglish: 'Competition Hall and Floor Area',
        content:
          '競技場は、約50m×30mの面積を競技エリアとし、最低12m以上の高さがなければならない。競技エリアには競技関係者以外の立ち入りを禁止する。演技面は内側13m×13mとする。その周りには２m以上の安全地帯を設ける。なお、演技代を設ける場合の安全地帯は３m以上とする。演技面を２面（男女）設置する場合は、その間の距離を４m以上とする。審判の位置は演技面より４m以上離れた場所に設置する。',
        contentEnglish:
          "The competition hall must have a competition area of about 50 m × 30 m and a height of at least 12 m. Only people involved in the competition may enter the competition area. The floor area is 13 m × 13 m (inside measurement), surrounded by a safety zone of at least 2 m. If a podium is used, the safety zone must be at least 3 m. If two floor areas (men's and women's) are set up, they must be at least 4 m apart. The judges are seated at least 4 m from the floor area.",
      },
      {
        title: '器械器具の準備',
        titleEnglish: 'Preparation of Equipment',
        content:
          'すべての器械器具は、組織委員会がこれを準備する。組織委員会は器械器具認定規則および男子新体操委員会の与える指示に従わなければならない。',
        contentEnglish:
          "All equipment is prepared by the Organizing Committee, which must follow the equipment certification rules and the instructions of the Men's Rhythmic Gymnastics Committee.",
      },
    ],
  },
]
