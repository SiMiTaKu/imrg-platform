import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第1章 競技規則のうち、競技会・表彰・競技者・監督者・一般的な競技規則・手具。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const COMPETITION_CONDUCT_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '競技会',
      en: 'Competitions',
    },
    section: [
      {
        title: {
          ja: '大会要項',
          en: 'Competition Guidelines',
        },
        content: {
          ja: '競技会は、その年度の定める大会要項により実施する。',
          en: 'Each competition is held according to the competition guidelines set for that year.',
        },
      },
      {
        title: {
          ja: '競技会の日程と試技順の抽選',
          en: 'Competition Schedule and Draw for the Order of Performance',
        },
        content: {
          ja: '男子新体操委員会は、競技会の日程細案作成および公平な抽選による試技順の編成と審判団の編成を行う。',
          en: "The Men's Rhythmic Gymnastics Committee draws up the detailed competition schedule, sets the order of performance by a fair draw, and forms the judging panel.",
        },
      },
      {
        title: {
          ja: '競技方法の種類',
          en: 'Competition Formats',
        },
        content: {
          ja: `競技会は、団体演技、個人演技の２部に分け、以下の競技方法のいずれかで行う

1. 団体演技

  a. 競技 I　（例　全日本選手権大会等）
  
    【競技種目】
      Ａ　予選競技（自由演技）　Ｂ　決勝競技（自由演技）
      
    【順位決定方法】
      決勝には得点上位８チームが出場できる。
      予選競技の１／２の得点と決勝競技の得点合計（30点満点）で順位を決定する。（第28条参照）
      
  b. 競技 Ⅱ
  
    【競技種目と順序】
      Ａ　予選競技（規定演技）　Ｂ　決勝競技（自由演技）
      
    【順位決定方法】
      決勝には得点上位８チームが出場できる。
      予選競技の得点（実施10点）と決勝競技の得点（20点満点）の合計（30点満点）で順位を決定する。（第28条参照）
      規定・自由の種目別順位は、各種目の得点で決定する。
      
  c. 競技 Ⅲ　（例　団体選手権、全日本ジュニア、インターハイ、全国高校選抜等）
  
    【競技種目と順序】
      Ａ　決勝競技（自由演技）
      
    【順位決定方法】
      決勝競技の得点（20点満点）で順位を決定する。（第28条参照）
  
2. 個人競技

  a. 競技 I　（例　全日本選手権大会　インカレ等）
  
    【競技種目と順序】
      Ａ　個人総合（自由演技）　Ｂ　種目別決勝（自由演技）
      a　スティック　b　リング　c　ロープ　d　クラブ
  
    【順位決定方法】
      個人総合は４種目の合計（80点満点）で順位を決定する。
      種目別決勝は各種濁の上位８名が出場でき、決勝得点（20点満点）で順位を決定する。
  
  b. 競技 Ⅱ　（例　全日本ジュニア、全国高校選抜大会等）
  
    【競技種目と順序】
      Ａ　個人総合（自由演技）　Ｂ　種目別（自由演技）
      a　スティック　b　リング　c　ロープ　d　クラブ
      競技種目の順番は大会要項に定める。
  
    【順位決定方法】
      個人総合は４種目の合計（80点満点）で順位を決定する。
      種目別は、各種目の得点（20点満点）で順位を決定する。
  
  c. 競技Ⅲ　（例　全日本ユース等）
  
    【競技種目と順序】
      Ａ　個人総合（自由演技）
      a　スティック　b　リング　c　ロープ　d　クラブ
  
    【順位決定方法】
      指定した２種目の得点上位者が、決勝競技に出場し、残りの２種目を実施する。
      各種目別（20点満点）の得点合計で順位を決定する。
      種目の指定と決勝競技の人数は大会要項に定める。

3. 団体個人総合競技
  
  a. 競技Ⅰ　（例　国民体育大会等）
  
    【競技種目と順序】
      Ａ　個人競技
      a　スティック　b　リング　c　ロープ　d　クラブ
      Ｂ　団体競技
      団体競技に出場する競技者のうち４名が、a〜bの種目を各一人ずつ実施する。
  
  b. 順位決定方法
    個人４種目の得点合計の１／４（20点満点）と団体競技（20点満点）の得点合計で順位を決定する。`,
          en: `Competitions are divided into two parts, group routines and individual routines, and are held in one of the following formats.

1. Group competition

  a. Competition I (e.g. All Japan Championships)

    [Events]
      A. Qualification (free routine)  B. Final (free routine)

    [Ranking]
      The top 8 teams by score qualify for the final.
      Teams are ranked by the sum of half the qualification score and the final score (maximum 30 points). (See Article 28.)

  b. Competition II

    [Events and order]
      A. Qualification (compulsory routine)  B. Final (free routine)

    [Ranking]
      The top 8 teams by score qualify for the final.
      Teams are ranked by the sum (maximum 30 points) of the qualification score (execution, 10 points) and the final score (maximum 20 points). (See Article 28.)
      Rankings for the compulsory and free routines are decided by the score of each event.

  c. Competition III (e.g. All Japan Group Championships, Inter-High School Championships, National High School Selection Championships)

    [Events and order]
      A. Final (free routine)

    [Ranking]
      Teams are ranked by the final score (maximum 20 points). (See Article 28.)

2. Individual competition

  a. Competition I (e.g. All Japan Championships, Intercollegiate Championships)

    [Events and order]
      A. Individual all-around (free routines)  B. Apparatus finals (free routines)
      a. Stick  b. Ring  c. Rope  d. Club

    [Ranking]
      The all-around is ranked by the total of the four apparatus (maximum 80 points).
      The top 8 gymnasts on each apparatus qualify for the apparatus finals, which are ranked by the final score (maximum 20 points).

  b. Competition II (e.g. All Japan Junior Championships, National High School Selection Championships)

    [Events and order]
      A. Individual all-around (free routines)  B. Apparatus rankings (free routines)
      a. Stick  b. Ring  c. Rope  d. Club
      The order of the apparatus is set in the competition guidelines.

    [Ranking]
      The all-around is ranked by the total of the four apparatus (maximum 80 points).
      Each apparatus is ranked by its score (maximum 20 points).

  c. Competition III (e.g. All Japan Youth Championships)

    [Events and order]
      A. Individual all-around (free routines)
      a. Stick  b. Ring  c. Rope  d. Club

    [Ranking]
      The top gymnasts on two designated apparatus advance to the final and perform on the remaining two apparatus.
      Gymnasts are ranked by the total of their apparatus scores (maximum 20 points each).
      The designated apparatus and the number of finalists are set in the competition guidelines.

3. Combined group and individual competition

  a. Competition I (e.g. National Sports Festival)

    [Events and order]
      A. Individual competition
      a. Stick  b. Ring  c. Rope  d. Club
      B. Group competition
      Four of the gymnasts entered in the group competition each perform one of the apparatus a to d.

  b. Ranking
    Teams are ranked by the sum of one quarter of the total of the four individual apparatus (maximum 20 points) and the group score (maximum 20 points).`,
        },
      },
      {
        title: {
          ja: '団体競技の申し込み',
          en: 'Entries for the Group Competition',
        },
        content: {
          ja: `団体競技は競技者を８名まで申し込むことができる。
団体競技者は、監督会議において承認された競技者のうち６名が演技を行う。ただし、５名または４名の競技者でも演技を行うこともできる。`,
          en: `Up to 8 gymnasts may be entered in the group competition.
Six of the gymnasts approved at the team managers' meeting perform the group routine. A group may also perform with five or four gymnasts.`,
        },
      },
      {
        title: {
          ja: '個人競技の申し込み',
          en: 'Entries for the Individual Competition',
        },
        content: {
          ja: `個人競技は、当該当年度の競技会に定めた競技者を申し込むことができる。

1. 個人競技は、競技Ⅰ・Ⅱ・Ⅲのいずれかを行う。
2. 個人競技に出場した競技者は、所属団体の団体競技に出場することができる。
3. 申し込み後の競技者の交代はできない。
4. 個人競技の１所属に対する出場制限は原則８名までとする。`,
          en: `Gymnasts may be entered in the individual competition as set for that year's competition.

1. The individual competition is held as Competition I, II or III.
2. Gymnasts who compete in the individual competition may also compete in their organization's group competition.
3. Gymnasts cannot be substituted after entry.
4. As a rule, each organization may enter up to 8 gymnasts in the individual competition.`,
        },
      },
      {
        title: {
          ja: '音響機器の使用',
          en: 'Use of Audio Equipment',
        },
        content: {
          ja: `伴奏音楽は音響機器を使用するものとする。

1. 音響機器は、組織委員会で準備したもの、または自己で準備したものを使用することができる。
2. 音楽媒体等には、所属名または競技者名を示していかなければならない。
3. 規定演技の伴奏音楽は、協会制定のものを使用することができる。`,
          en: `The accompanying music is played on audio equipment.

1. Gymnasts may use the audio equipment prepared by the Organizing Committee or their own.
2. Music media must be labeled with the organization's name or the gymnast's name.
3. For compulsory routines, the music issued by the Association may be used.`,
        },
      },
      {
        title: {
          ja: '音響機器の欠陥の処置',
          en: 'Faulty Audio Equipment',
        },
        content: {
          ja: '審判長・競技部長が当然と認める音響機器に欠点があった場合は、団体競技でも個人競技でも減点なしの復興ができる。',
          en: 'If the Jury President and the Competition Director agree that the audio equipment was faulty, the routine may be repeated without deduction in both the group and the individual competition.',
        },
      },
      {
        title: {
          ja: '順位決定方法',
          en: 'Ranking',
        },
        content: {
          ja: `すべての競技において、獲得した得点で順位を決定する。

  1. 得点の合計は、各競技の順位決定方法に従う。
  
  2. 予選競技から決勝競技への出場資格を得たチーム・競技者は必ず出場しなければならない。決勝競技に出場しない場合は失格となり、本大会のあらゆる賞典を失う。ただし不可抗力の場合、または正当と認められた場合は除く。
  
  3. 個人競技で、種目別決勝の競技出場者が得点上位８名の場合は、同一所属からの出場者が３名を超えることはできない。
  
  4. 予選競技から決勝競技を行う際の欠員は、次位のチーム・競技者を持ってこれに代える。
  
  5. 予選競技から決勝競技を行う際の試技順は、１位〜４位、５位〜８位までの２グループで抽選して決定する。
  
  【同点順位の決定方法】
    同点の順位は同順位とするが、決勝競技または上級大会への優先獲得権は次の手順で行う。
  
    a. 団体競技
    
      ⅰ すべての審判員の採点合計（主任審判および最高点・最低点と減点を含む）の高いチーム。
      ⅱ ⅰにおいて同点の場合、すべての構成審判員の採点合計が高いチーム。
      ⅲ ⅱにおいて同点の場合、主任審判員の採点合計の高いチーム。
      ⅳ ⅲにおいて同点の場合、抽選とする。
 
    b. 個人競技
    
      個人総合は予選で演技したすべての種目、種目別競技者権は、その種目を対象として次の手順で行う。
  
      ⅰ すべての審判員の採点合計（主任審判および最高点・最低点と減点を含む）の高い競技者。
      ⅱ ⅰにおいて同点の場合、すべての構成審判員の採点合計が高い競技者。
      ⅲ ⅱにおいて同点の場合、主任審判員の採点合計の高い競技者。
      ⅳ ⅲにおいて同点の場合、抽選とする。
  
    c. 国民体育大会および同ブロック予選
  
      ⅰ 団体競技の得点の（本来の得点）の高いチーム。
      ⅱ ⅰにおいて同点の場合、団体競技および個人競技４種目のすべての審判員（主任審判および最高点・最低点）の採点合計の高いチーム。
      ⅲ ⅱにおいて同点の場合、団体競技すべての審判員（主任審判および最高点・最低点）の採点合計の高いチーム。
      ⅳ ⅲにおいて同点の場合、抽選とする。`,
          en: `In all competitions, rankings are decided by the scores obtained.

  1. Scores are totaled according to the ranking method of each competition.

  2. Teams and gymnasts who qualify from the qualification to the final must compete in the final. Those who do not compete in the final are disqualified and lose all awards of the competition, except in cases of force majeure or for reasons accepted as legitimate.

  3. In the individual competition, when the top 8 gymnasts qualify for an apparatus final, no more than three gymnasts from the same organization may qualify.

  4. If a place in the final becomes vacant, it is filled by the next-ranked team or gymnast.

  5. The order of performance in the final is decided by draw in two groups: 1st to 4th and 5th to 8th.

  [Breaking ties]
    Tied scores share the same rank, but priority for the final or for a higher-level competition is decided as follows.

    a. Group competition

      i. The team with the higher total of all judges' scores (including the chief judges, the highest and lowest scores, and deductions).
      ii. If still tied, the team with the higher total of all composition judges' scores.
      iii. If still tied, the team with the higher total of the chief judges' scores.
      iv. If still tied, by draw.

    b. Individual competition

      For the all-around, all apparatus performed in the qualification are considered; for apparatus titles, only that apparatus is considered, as follows.

      i. The gymnast with the higher total of all judges' scores (including the chief judges, the highest and lowest scores, and deductions).
      ii. If still tied, the gymnast with the higher total of all composition judges' scores.
      iii. If still tied, the gymnast with the higher total of the chief judges' scores.
      iv. If still tied, by draw.

    c. National Sports Festival and its regional qualifiers

      i. The team with the higher group competition score (the original score).
      ii. If still tied, the team with the higher total of all judges' scores (including the chief judges and the highest and lowest scores) in the group competition and the four individual apparatus.
      iii. If still tied, the team with the higher total of all judges' scores (including the chief judges and the highest and lowest scores) in the group competition.
      iv. If still tied, by draw.`,
        },
      },
      {
        title: {
          ja: '所属団体と監督者',
          en: 'Organizations and Team Managers',
        },
        content: {
          ja: '競技会に出場する所属団体は全期間１名の監督者を置かなければならない。',
          en: 'Each organization taking part in a competition must have one team manager for the whole competition.',
        },
      },
      {
        title: {
          ja: '演技中の不快不慮の事故',
          en: 'Illness or Accident During a Routine',
        },
        content: {
          ja: '演技中の不快不慮の事故が起きた場合は、監督者を通じて直ちに審判長に連絡し演技を中断し、医師の診断を受けなければならない。',
          en: 'If a gymnast becomes ill or has an accident during a routine, the Jury President must be informed immediately through the team manager, the routine must be stopped, and the gymnast must be examined by a doctor.',
        },
      },
      {
        title: {
          ja: '競技場への入場',
          en: 'Access to the Competition Hall',
        },
        content: {
          ja: `競技場に入場できる者は、審判長、競技部長審判員、競技者および監督者と音楽係、審判補助員、音楽機器および演技上の保持に必要欠くべからざる人員に限る。
その他のっ競技場内への入場に関しては、競技の順調な進行を妨げない条件のもとに許可を得て入場できる。また、次の人々のために特別席を設ける。

1. 出場加盟団体の会長
2. 控えの審判員
3. 補審
4. 演技を直ちに実施しない競技者と監督`,
          en: `Access to the competition hall is limited to the Jury President, the Competition Director, the judges, the gymnasts and team managers, the music operators, the judges' assistants, and the staff essential for the audio equipment and for the routines.
Other people may enter the competition hall with permission, provided they do not interfere with the smooth running of the competition. Special seats are provided for the following people.

1. Presidents of the participating member organizations
2. Reserve judges
3. Assistant judges
4. Gymnasts and team managers who are not about to perform`,
        },
      },
    ],
  },
  {
    title: {
      ja: '表彰',
      en: 'Awards',
    },
    section: [
      {
        title: {
          ja: '表彰式の開催',
          en: 'Award Ceremony',
        },
        content: {
          ja: '成績の表彰および賞典の授与は、全競技者（各加盟団体代表）、審判団、組織委員会および公衆の参列のもと、厳粛な儀式を持って行う。',
          en: 'Results are honored and awards presented at a formal ceremony attended by all gymnasts (representatives of each member organization), the judging panel, the Organizing Committee and the public.',
        },
      },
      {
        title: {
          ja: '選手権大会の表彰内容',
          en: 'Awards at Championships',
        },
        content: {
          ja: `選手権大会は、それぞれ入賞したチームには個人にメダルと賞状を授与し、全競技者および審判員には参加賞を付与する。
1. 団体競技選手権
競技Ⅰ・Ⅱ・Ⅲの各競技の得点により順位を決定する。第１位のチームは選手権チームとして表彰され、そのチーム全員に対してそれぞれ金メダル１個ずつ授与する。また、第８位までには賞状を授与する。

2. 団体競技種目別選手権
規定演技、自由演技の各演技得点で順位を決定する。これらの各種目の第１位のチームは選手権チームとして表彰され、チーム全員に対して、それぞれ金メダル１個ずつ授与する。同様にして第２位のチームには銀メダル、第３位のチームには銅メダルを授与する。また、第６位までには賞状を授与する。

3. 個人総合選手権
競技Ⅰ・Ⅱ・Ⅲの各競技の得点により順位を決定する。第１位の競技者には日本選手権者として表彰され、これに金メダルを１個を授与する。第２位には銀メダル、第３位には銅メダル１個を授与する。また第８位までには賞状を授与する。

4. 個人種目別選手権
種目別決勝競技、または種目別のそれぞれの得点によって順位を決定する。これらの各種目の第１位の競技者には、選手権者として表彰され、これに金メダル１個を授与する。第２位には銀メダル、第３位には銅メダルを授与する。また第６位までには賞状を授与する。              `,
          en: `At championships, medals and certificates are presented to the placing teams and individuals, and all gymnasts and judges receive a participation award.
1. Group championship
Teams are ranked by the scores of Competition I, II or III. The first-place team is honored as the champion team, and each member of the team receives a gold medal. Certificates are presented to the top 8 teams.

2. Group event championships
Teams are ranked by the score of each routine, compulsory and free. The first-place team in each event is honored as the champion team, and each member receives a gold medal. In the same way, each member of the second-place team receives a silver medal and each member of the third-place team a bronze medal. Certificates are presented to the top 6 teams.

3. Individual all-around championship
Gymnasts are ranked by the scores of Competition I, II or III. The first-place gymnast is honored as the national champion and receives a gold medal. The second-place gymnast receives a silver medal and the third-place gymnast a bronze medal. Certificates are presented to the top 8 gymnasts.

4. Individual apparatus championships
Gymnasts are ranked by the score of the apparatus final or of each apparatus. The first-place gymnast on each apparatus is honored as the champion and receives a gold medal. The second-place gymnast receives a silver medal and the third-place gymnast a bronze medal. Certificates are presented to the top 6 gymnasts.`,
        },
      },
    ],
  },
  {
    title: {
      ja: '競技者',
      en: 'Gymnasts',
    },
    section: [
      {
        title: {
          ja: '会費の滞納',
          en: 'Unpaid Membership Fees',
        },
        content: {
          ja: '会費滞納の加盟団体および未登録の競技者は、本協会主催の競技会に出場できない。',
          en: 'Member organizations with unpaid membership fees and unregistered gymnasts may not take part in competitions organized by the Association.',
        },
      },
      {
        title: {
          ja: '出場資格とアマチュア規定',
          en: 'Eligibility and Amateur Rules',
        },
        content: {
          ja: '本協会の監督下に行われる競技会には、本協会アマチュア規定によるアマチュアでなければ競技者として承認されない。',
          en: "Only amateurs as defined by the Association's amateur rules are accepted as gymnasts at competitions held under the supervision of the Association.",
        },
      },
      {
        title: {
          ja: '年齢',
          en: 'Age',
        },
        content: {
          ja: '競技者は、競技会の年（４月２日現在）に満12歳に達し、本協会の加盟団体所属の登録会員でなければならない。１１歳以下の競技者は、その連盟の責任のもとに本協会で承認された競技者にかぎり出場することができる。',
          en: 'Gymnasts must be at least 12 years old in the year of the competition (as of April 2) and be registered members of a member organization of the Association. Gymnasts aged 11 or younger may compete only if approved by the Association under the responsibility of their federation.',
        },
      },
      {
        title: {
          ja: '競技者の義務',
          en: 'Duties of Gymnasts',
        },
        content: {
          ja: '競技者は、競技会の演技を実施することを第一義とし、この義務を完遂した後でなければ、他の任務を受諾することはできない。',
          en: "A gymnast's first duty is to perform at the competition, and a gymnast may not accept any other role until this duty has been fulfilled.",
        },
      },
      {
        title: {
          ja: '競技会の出場種目',
          en: 'Events a Gymnast May Enter',
        },
        content: {
          ja: '競技者は団体競技および歌人競技の両方に出場することができる。',
          en: 'Gymnasts may compete in both the group and the individual competition.',
        },
      },
      {
        title: {
          ja: '競技者の服装',
          en: "Gymnasts' Attire",
        },
        content: {
          ja: `競技者の服装は身体にフィットする体操用の上着・体操用ズボンで、頭・顔・首・手・腕以外は肌が見える状態にしてはいけない。色は自由で不透明な布とする。装飾のスパンコールは可とするが、固定されていなければならない。また、所属マークを上半身の前面または上腕部で審判が確認できるところにつけなければならない。
              
1. 体操用の上着の形状
  a. 上着の袖・襟はあってもなくても良いが、密着しているものとする
  b. 襟首を開ける場合、形は自由とするが、カットの内側は左右の首筋とし、前後の開きは両脇の下を結んだラインより下げてはならない
  c. 上着はズボンの外に出してはならない

2. 体操用ズボンの形状
  a. ストレートタイプの場合は、裾を土踏まずの下を通し、スッキリまとめられていなければならない。
  b. ズボンの裾を広げる場合、膝までは密着していること。裾幅は足長を超えてはならない。また、裾が乱れるような場合は原点となる。

3. 所属マークの色は自由とするが、試合着の色と区別できるものとする。形状と大きさは次のいずれかを上回るものとする。
  a. 4.5cm×4.5cmの正方形
  b. 4.0cm×5.0cmの長方形
  c. 一辺が5.0cmの正三角形
  d. 直径が4.5cmの円
  e. 一辺が4.0cmで辺の交わる角度が60°と120°の菱形
  
4. 団体競技では全員が同型、同色の服装で統一のマークをつけて出場しなければならない。

5. 体操シューズまたは靴下着用で演技しなければならない。色は自由とする。`,
          en: `Gymnasts wear a close-fitting gymnastics top and gymnastics trousers, with no skin showing except on the head, face, neck, hands and arms. Any color may be used, but the fabric must be opaque. Decorative sequins are allowed if they are securely attached. The organization's emblem must be worn on the front of the upper body or on the upper arm where the judges can see it.

1. Gymnastics top
  a. The top may have sleeves and a collar or not, but it must be close-fitting.
  b. If the neck is open, any shape is allowed, but the inner edge of the cut must be at the sides of the neck, and the front and back openings must not go below the line joining the armpits.
  c. The top must be tucked into the trousers.

2. Gymnastics trousers
  a. Straight trousers must pass under the arch of the foot and be neatly finished.
  b. Flared trousers must be close-fitting down to the knees. The width of the hem must not exceed the length of the foot. A deduction is applied if the hems become untidy.

3. The emblem may be any color, but it must be distinguishable from the color of the competition attire. It must be at least as large as one of the following shapes.
  a. A 4.5 cm × 4.5 cm square
  b. A 4.0 cm × 5.0 cm rectangle
  c. An equilateral triangle with 5.0 cm sides
  d. A circle 4.5 cm in diameter
  e. A rhombus with 4.0 cm sides and angles of 60° and 120°

4. In the group competition, all gymnasts must wear attire of the same design and color with the same emblem.

5. Gymnasts must perform in gymnastics shoes or socks, which may be any color.`,
        },
      },
      {
        title: {
          ja: '競技者の権利',
          en: 'Rights of Gymnasts',
        },
        content: {
          ja: `競技者には以下の権利が保障される
              
1. 演技は採点規則の規約によって正確で公平に採点される。
2. 本会場での公式練習と綿密に準備された演技場での演技が実施できる。
3. 演技終了後、得点が速やかに表示される。または当該競技会の競技規則に応じた公開がされる。
4. 演技の中断が競技者に原因がない場合や裁定審判部に認められた不可抗力の事については、演技全体のやり直しができる。
5. 競技会でのすべての得点は、主催者より公式演技結果として受け取ることができる。`,
          en: `Gymnasts are guaranteed the following rights.

1. Their routines are scored accurately and fairly according to the Code of Points.
2. They may take part in official training at the venue and perform on a carefully prepared floor.
3. Their scores are displayed promptly after the routine, or published according to the rules of the competition.
4. They may repeat the whole routine if it was interrupted for a reason not caused by the gymnast, or by force majeure recognized by the Appeals Jury.
5. They may receive all their scores at the competition from the organizer as official results.`,
        },
      },
      {
        title: {
          ja: '競技者の規律',
          en: 'Discipline of Gymnasts',
        },
        content: {
          ja: `競技者は以下の規則を厳守しなければならない。
               
1. 競技者と審判は、お互いに信頼と尊重をしなければならない。
2. 競技規則及び採点規則を熟知し、それに従って競技者としてふさわしい行動をしなければならない。
3. 採点規則に基づいた採点結果を受け入れなければならない。
4. マイクロホンまたは主任審判員の呼び出しを受けた後でなければ演技面に入ることはできない。また、呼び出し後は速やかに入場しなければならない。
5. 演技終了後、競技者は速やかに演技面より退場しなければならない。
6. 競技場で指定された場所以外でのウォーミングアップをしてはならない。
7. 競技者は演技中、審判員に話しかけてはならない。
8. 規律なく乱暴な言動をとったり、他の競技者の妨害をしてはならない。
9. 競技者は演技中に故意に号令などの合図をしたり、話したりしてはいけない。
10. 競技者は演技中に試合を放棄する態度をとってはいけない。
11. 競技エリア内において、観衆に対して不快な言動をとってはならない。`,
          en: `Gymnasts must strictly observe the following rules.

1. Gymnasts and judges must trust and respect each other.
2. Gymnasts must know the competition rules and the Code of Points well and behave as befits a gymnast.
3. Gymnasts must accept the results of scoring under the Code of Points.
4. Gymnasts may enter the floor area only after being called by the announcer or the chief judge, and must enter promptly once called.
5. Gymnasts must leave the floor area promptly after their routine.
6. Gymnasts must not warm up anywhere in the competition hall other than the designated areas.
7. Gymnasts must not speak to the judges during a routine.
8. Gymnasts must not behave in an undisciplined or rough manner or disturb other gymnasts.
9. Gymnasts must not deliberately give verbal cues or talk during a routine.
10. Gymnasts must not show an attitude of giving up during a routine.
11. Gymnasts must not behave offensively toward the audience in the competition area.`,
        },
      },
    ],
  },
  {
    title: {
      ja: '監督者・コーチ',
      en: 'Team Managers and Coaches',
    },
    section: [
      {
        title: {
          ja: '監督者・コーチの責務と規律',
          en: 'Duties and Discipline of Team Managers and Coaches',
        },
        content: {
          ja: `監督者およびコーチは競技会が円滑に開催できるために、マナーやモラルを守るとともに、以下の規則を厳守しなければならない。

1. 監督者は所属選手に対しすべての責任を負い、競技が円滑に進行するための指示を与えなければならない。
2. 監督者は競技開始前に開催される監督会議に出席しなければならない。
3. 監督者は監督会議の内容を所属選手および関係者への連絡を報告する責任がある。
4. 競技会が円滑に開催できるために大会競技規則を厳守しなければならない。
5. 監督者は演技面に位置できない。
6. 監督者は緊急時を除き、演技中の競技者に干渉してはならない。
7. 監督者は演技城内において、観衆や競技役員に対して不愉快な行動をとってはならない。
8. 採点結果についての疑問点について審判長に問い合わせはできるが、審判員個人へ直接の抗議はしてはならない。,
              `,
          en: `So that the competition runs smoothly, team managers and coaches must observe good manners and ethics and strictly follow the rules below.

1. Team managers are fully responsible for their gymnasts and must give the instructions needed for the competition to run smoothly.
2. Team managers must attend the team managers' meeting held before the competition.
3. Team managers are responsible for passing on the content of the team managers' meeting to their gymnasts and others concerned.
4. Team managers must strictly follow the competition rules so that the competition runs smoothly.
5. Team managers may not stand on the floor area.
6. Team managers must not interfere with a gymnast during a routine except in an emergency.
7. Team managers must not behave offensively toward the audience or officials in the competition area.
8. Team managers may ask the Jury President about questions regarding scores, but must not protest directly to individual judges.`,
        },
      },
      {
        title: {
          ja: '第43条 規律違反',
          en: 'Violations of Discipline',
        },
        content: {
          ja: '競技者および監督・コーチに規律違反があった場合は、採点規則によって原点または処分をされることがある。',
          en: 'If a gymnast, team manager or coach violates the rules of discipline, a deduction or other penalty may be imposed under the Code of Points.',
        },
      },
    ],
  },
  {
    title: {
      ja: '一般的な競技規則',
      en: 'General Competition Rules',
    },
    section: [
      {
        title: {
          ja: '新体操の演技',
          en: 'Rhythmic Gymnastics Routines',
        },
        content: {
          ja: '新体操の演技は、徒手系要素と回転系要素を織り交ぜ、団体競技では６人の同調性と力強さを、個人競技では４種類の手具の特性に合わせた操作を、体を極限まで運動させながら表現する種目である。各競技に求められた要素を全て含み、高い技術的価値と各種要素の多様性音楽と動きの関係や独創性を持ち、すべての運動が合理性と安定性を持って実施されなければならない。',
          en: "A men's rhythmic gymnastics routine combines free-hand elements and tumbling elements. In the group competition it expresses the synchronization and power of six gymnasts, and in the individual competition it expresses handling suited to the character of each of the four apparatus, while moving the body to its limits. A routine must contain all the elements required in each competition, have high technical value, a variety of elements, a good relationship between music and movement, and originality, and every movement must be performed rationally and with stability.",
        },
      },
      {
        title: {
          ja: '伴奏音楽',
          en: 'Accompanying Music',
        },
        content: {
          ja: `1. すべての競技において伴奏音楽をつけなければならない。
2. 伴奏音楽はよりよい音色とメロディーによって、特徴付けられるものでなければならない。すなわち演技の性格に合致し、途切れずはっきりとしたリズムを持ち、競技者の動きのリズムと調和していなければならない。
3. 伴奏音楽は楽器（シンセサイザーを含む）で演奏されたもの、または人の声に限る。
4. 伴奏音楽は、音楽を記録した記録媒体等を使用する。大会要項で別途指定された場合はそれに準じる。
5. 演技面の入退場には伴奏音楽をつけてはならない。
6. 組織者側に責任のない理由で伴奏音楽が中断された場合は、原則として演技の復行はできない。`,
          en: `1. All routines must be performed to accompanying music.
2. The music must be characterized by good tone and melody. It must suit the character of the routine, have a clear, continuous rhythm and be in harmony with the rhythm of the gymnasts' movements.
3. The music must be played on instruments (including synthesizers) or sung by the human voice.
4. The music is played from recorded media. If the competition guidelines specify otherwise, those instructions apply.
5. No music may be played while gymnasts enter or leave the floor area.
6. If the music stops for a reason for which the organizers are not responsible, as a rule the routine may not be repeated.`,
        },
      },
      {
        title: {
          ja: '得点',
          en: 'Scores',
        },
        content: {
          ja: `1. 自由演技は構成（Ｄ）と実施（Ｅ）のそれぞれ10点満点の計20点満点で採点される。また規定演技は実施（Ｅ）の10点満点で採点される。
2. 主任審判員を除いた４名の審判員の最高点及び最低点を除外し、有効点の平均点を小数点第３位までとし、第４位は切り捨て得点とする。主任審判員が適用する原点があった場合は、その得点から減点し最終得点とする。
`,
          en: `1. Free routines are scored out of 20 points: composition (D) out of 10 points and execution (E) out of 10 points. Compulsory routines are scored for execution (E) out of 10 points.
2. The highest and lowest scores of the four judges, excluding the chief judge, are dropped, and the average of the counting scores is calculated to three decimal places, truncating the fourth. If the chief judge applies a deduction, it is subtracted from that score to give the final score.`,
        },
      },
      {
        title: {
          ja: '演技時間',
          en: 'Duration of the Routine',
        },
        content: {
          ja: `すべての演技は演技時間が下記のとおりに定められる。団体演技ではチームのうち１人以上の動き始めからチーム全員が完全に動きを止めるまでの時間とし、個人競技では競技者の動き始めから完全に動きを止めるまでとする。
              
1. 団体競技　２分45秒から３分00秒
2. 個人競技　１分15秒から１分30秒`,
          en: `The duration of every routine is set as below. In the group competition, it is measured from the moment at least one gymnast starts moving until all gymnasts have completely stopped. In the individual competition, it is measured from the moment the gymnast starts moving until the gymnast has completely stopped.

1. Group competition: 2 min 45 s to 3 min 00 s
2. Individual competition: 1 min 15 s to 1 min 30 s`,
        },
      },
      {
        title: {
          ja: '演技人数',
          en: 'Number of Gymnasts in a Group',
        },
        content: {
          ja: '団体競技の演技人数は６名で行うものとする。ただし５名または４名でも競技に参加することができるが減点される。',
          en: 'A group routine is performed by six gymnasts. A group may also compete with five or four gymnasts, but a deduction is applied.',
        },
      },
    ],
  },
  {
    title: {
      ja: '手具',
      en: 'Apparatus',
    },
    section: [
      {
        title: {
          ja: '手具の規格',
          en: 'Apparatus Specifications',
        },
        content: {
          ja: `競技に使用する器具ならびに手具は、（公財）基本体操協会認定規格による。
＊ジュニアは、ジュニア適用規則を参照`,
          en: `Equipment and apparatus used in competition must meet the certified specifications of the Japan Gymnastics Association.
* For juniors, see the rules for juniors.`,
        },
        image: [
          {
            src: '/images/rules/syugukikakuhyou.png',
            alt: {
              ja: '手具規格',
              en: 'Apparatus specifications',
            },
          },
        ],
      },
      {
        title: {
          ja: '手具点検',
          en: 'Apparatus Inspection',
        },
        content: {
          ja: `1. 競技開始前には手具点検を行う。予備手具も含め、合格した手具のみ競技会に使用することができる。
2. 合格した手具には組織委員会が準備した合格シールを貼る。
3. 競技場に入る直前に合格シール点検を行う。
4. 審判長または当該主任審判から要求があった場合は、演技終了時に再度手具点検が行われることもある。
5. 手具が検定品であっても劣化等により規格外になった場合は、手具点検によって規格外となることがある。`,
          en: `1. Apparatus are inspected before the competition. Only apparatus that pass the inspection, including spare apparatus, may be used in the competition.
2. Apparatus that pass are marked with a sticker prepared by the Organizing Committee.
3. The stickers are checked just before gymnasts enter the competition hall.
4. If the Jury President or the chief judge concerned requests it, the apparatus may be inspected again after the routine.
5. Even certified apparatus may be judged out of specification at the inspection if they have deteriorated.`,
        },
      },
      {
        title: {
          ja: '競技規則に定めない問題',
          en: 'Matters Not Covered by the Competition Rules',
        },
        content: {
          ja: '本規則に定めない審判および採点に関する問題は、すべて採点規則による。',
          en: 'All matters of judging and scoring not covered by these rules follow the Code of Points.',
        },
      },
    ],
  },
]
