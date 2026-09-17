import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第3章 付録のうち、公認審判員規則と付則。
 * 英語（`titleEn` など）は日本語の本文を訳したもの
 */
export const JUDGE_REGULATIONS_ARTICLES: RuleArticle[] = [
  {
    title: '公認審判員規則',
    titleEn: 'Regulations for Certified Judges',
    section: [
      {
        title: '趣旨',
        titleEn: 'Purpose',
        content: 'この規定は、公認審判員に関する事項について定める。',
        contentEn: 'These regulations set out matters concerning certified judges.',
      },
      {
        title: '公認審判員の任務と区別',
        titleEn: 'Duties and Categories of Certified Judges',
        content: `公認審判員は、体操競技、新体操の男子ならびに女子の４競技種別ごとに次の４種類とする。
1. 第３種公認審判員（以下３種という）は地区・都道府県選手権大会およびこれに類する競技会の審判を行うことができる。
2. 第２種公認審判員（以下２種という）は、都道府県ブロック大会、西日本、東日本大会およびこれに類する競技会の審判を行うことができる。
3. ただし、特別な事情がある場合は、大会責任者の承諾のもと、全国大会レベルの大会が行うことができる。
4. 第１種公認審判員（以下１種という）は、全国レベル大会、全日本学生選手権大会、全国高校選手権大会、国民体育大会やその他すべての国内大会の審判を行うことができる。
5. 名誉審判員（以下名誉という）は、各種の競技会の審判義務を行わない。
6. （１）〜（３）の線審・計時審判については、いずれかの審判資格を有するものとする。`,
        contentEn: `Certified judges are divided into the following four categories for each of the four disciplines: men's and women's artistic gymnastics and men's and women's rhythmic gymnastics.
1. Category 3 certified judges (hereinafter "Category 3") may judge district and prefectural championships and similar competitions.
2. Category 2 certified judges (hereinafter "Category 2") may judge regional competitions covering several prefectures, the West Japan and East Japan Championships, and similar competitions.
3. In special circumstances, with the consent of the person in charge of the competition, they may also judge national-level competitions.
4. Category 1 certified judges (hereinafter "Category 1") may judge national-level competitions, the All Japan Student Championships, the National High School Championships, the National Sports Festival and all other national competitions.
5. Honorary judges (hereinafter "Honorary") do not judge competitions.
6. Line judges and timekeepers must hold one of the qualifications in (1) to (3).`,
      },
      {
        title: '認定の権限',
        titleEn: 'Authority for Certification',
        content: `公認審判員の認定は次の通りにする。
1. 認定および継続の審査に関わる業務は、男子新体操委員会が行い、会長がこれを認定する。３種および２種の認定の審査は加盟団体が行うこととする。ただし、認定、継続の申請は、都道府県体操協会を経由して行うこととする。
2. 男子新体操委員会はこれらの業務遂行のため、専門委員若干名を選任するものとする。`,
        contentEn: `Certified judges are certified as follows.
1. The review for certification and renewal is carried out by the Men's Rhythmic Gymnastics Committee, and the President certifies the judges. The review for Category 3 and Category 2 is carried out by the member organizations. Applications for certification and renewal are made through the prefectural gymnastics associations.
2. To carry out this work, the Men's Rhythmic Gymnastics Committee appoints a small number of expert members.`,
      },
      {
        title: '受験・名誉資格',
        titleEn: 'Eligibility and Honorary Status',
        content: `公認審判員の受験資格および名誉資格は次のとおりとする。
1. ３種は、競技経歴を有し当該年度において満１６歳以上の者。
2. ２種は、満18歳以上で３種取得年度から１年以上経過した者で、公式競技会で１回以上審判実務を有する者。
3. １種は、当該年度において、満20歳以上で、次のいずれかに当該する者。または、相当する資格を加盟団体が認め推薦した者。
  a. ２種の資格を取得し、都道府県またはそれ以上の公式競技会において２回以上審判実務の経験を有する者。
  b. 国際大会開催された場合、代表選手であった者で大会に推薦された者。
4. 名誉は、２種と１種の資格を通年20年以上有し、当該年度において満45際以上の者で、加盟団体が認め本会に申請した者。
5. 国際審判員資格を取得する場合は、本会認定の１種資格を取得し、本会で推薦された者でなければならない。`,
        contentEn: `Eligibility for the examination and for honorary status is as follows.
1. Category 3: people with competitive experience who are at least 16 years old in the year concerned.
2. Category 2: people at least 18 years old, at least one year after obtaining Category 3, who have judged at least once at an official competition.
3. Category 1: people at least 20 years old in the year concerned who meet one of the following, or who hold an equivalent qualification recognized and recommended by a member organization.
  a. People who hold Category 2 and have judged at least twice at official competitions at prefectural level or higher.
  b. People who represented Japan at an international competition and are recommended for the competition.
4. Honorary: people who have held Category 2 and Category 1 for a total of at least 20 years, are at least 45 years old in the year concerned, and are recognized by a member organization, which applies to the Association.
5. To obtain an international judge qualification, a person must hold Category 1 certified by the Association and be recommended by the Association.`,
      },
      {
        title: '認定講習会',
        titleEn: 'Certification Courses',
        content: `認定講習会の実施要項は次のとおりとする。
1. １種の認定講習会については、原則として２年に１回本会が開催し、３種および２種の認定講習会は加盟団体が開催する。
2. 認定講習会は、原則として最小限２日間として、次の内容とする。
  a. ３種　講習会の講師は、主催加盟団体または隣接する加盟団体の１種がこれにあたり、講義および採点試験を行う。
  b. ２種　講習会の講師は、主催加盟団体または隣接する加盟団体の１種が２名以上がこれにあたり、講義および採点試験を行う。
  c. １種　講習会の講師は、本会の担当者２名以上でこれにあたる。講義と採点試験および理論試験を行う。`,
        contentEn: `Certification courses are held as follows.
1. As a rule, the Category 1 course is held by the Association once every two years, and the Category 3 and Category 2 courses are held by the member organizations.
2. As a rule, a certification course lasts at least two days, with the following content.
  a. Category 3: the instructors are Category 1 judges of the host member organization or a neighboring member organization, who give lectures and a scoring test.
  b. Category 2: the instructors are two or more Category 1 judges of the host member organization or a neighboring member organization, who give lectures and a scoring test.
  c. Category 1: the instructors are two or more people in charge from the Association, who give lectures, a scoring test and a theory test.`,
      },
      {
        title: '研修会',
        titleEn: 'Training Sessions',
        content: `FIGの改正期に併せて４年に一度を原則とする。中間年で、競技規則または採点規則に変更が生じた場合の伝達方法は次のとおりとする。
1. １種および加盟団体に対し本会ホームページをもって伝達する。もしくは変更の程度により必要に応じて伝達のための研修会を速やかに開催する。
2. ２種および３種のための伝達または研修の開催は加盟団体が行う。
3. 研修会は、認定講習会を兼ねて行うこともできる。`,
        contentEn: `As a rule, training sessions are held once every four years, in line with the FIG revision cycle. If the competition rules or the Code of Points change in the years in between, the changes are communicated as follows.
1. Changes are communicated to Category 1 judges and member organizations on the Association's website. Depending on the extent of the changes, a training session to communicate them is held promptly if necessary.
2. Communication or training for Category 2 and Category 3 judges is carried out by the member organizations.
3. A training session may be held together with a certification course.`,
      },
      {
        title: '資格の有効期間',
        titleEn: 'Period of Validity',
        content: `資格の有効期間は次のとおりとする。
1. 公認審判認定証有効期間は４月１日より翌年の３月31日までの１年間とする。認定申請が７月１日以降翌年３月31日までの間に行われた場合は、翌年４月１日に認定し、期間内有効とする。
2. 第８条および第10条に示す継続申請により資格を継続した場合の有効期限も前項と同じ１年間とする。
3. 名誉の有効期間は永年とする。`,
        contentEn: `The period of validity of the qualification is as follows.
1. A certified judge's certificate is valid for one year, from April 1 to March 31 of the following year. If the application for certification is made between July 1 and March 31 of the following year, the certification takes effect on April 1 of the following year and is valid for that period.
2. A qualification renewed by the application in Articles 8 and 10 is also valid for one year, as in the previous item.
3. Honorary status does not expire.`,
      },
      {
        title: '資格の継続',
        titleEn: 'Renewal of the Qualification',
        content: `資格の継続については、次のとおりとする。
1. 継続を希望する者は、所定の申請手続きにより、継続申請をしなければならない。ただし、名誉は継続申請をする必要はない。
2. 継続申請をする者は、次の条件を満足していなければならない。
  a. 審判資格の有効１年間に、都道府県もしくはそれ以上の公式競技会において、審判役員として少なくとも１回以上の実務の経験を有することが望ましい。
  b. 本会または本会が委託した加盟団体が開催する研修会を受講すること。
  c. 有効期間内における競技規則・採点規則の変更部分について精通すること。`,
        contentEn: `Renewal of the qualification is as follows.
1. Those who wish to renew must apply for renewal by the prescribed procedure. Honorary judges do not need to apply.
2. Applicants for renewal must meet the following conditions.
  a. During the one-year period of validity, they should have judged at least once as a judging official at an official competition at prefectural level or higher.
  b. They must attend a training session held by the Association or by a member organization entrusted by the Association.
  c. They must be familiar with the changes to the competition rules and the Code of Points during the period of validity.`,
      },
      {
        title: '資格の保留・取消',
        titleEn: 'Suspension and Revocation of the Qualification',
        content: `資格の保留・取消の条件は次のとおりとする。
1. 資格の継続を希望するものが、第８条に示す条件を満足しない場合、もしくは継続申請を怠った場合は、その資格を１年間保留する。
2. 前項の条件を満足しない場合は、失効する。ただし、特別の事項による場合は考慮することがある。
3. 名誉は、資格の保留・取消の対象をとらない。
4. その他委員会が公認審判員として不適当と認めたときは、その資格を保留または取り消すことがある。`,
        contentEn: `The conditions for suspending or revoking the qualification are as follows.
1. If a person who wishes to renew does not meet the conditions in Article 8 or fails to apply for renewal, the qualification is suspended for one year.
2. If the conditions in the previous item are still not met, the qualification lapses. Special circumstances may be taken into account.
3. Honorary status is not subject to suspension or revocation.
4. The qualification may also be suspended or revoked if the committee finds the person unsuitable as a certified judge.`,
      },
      {
        title: '認定・継続の申請手続き',
        titleEn: 'Applying for Certification and Renewal',
        content: `認定および継続の申請は、次の要領で行うものとする。
1. 本会所定の申請手続きにより加盟団体をとおして、必要料金を納入する。
2. 加盟団体は、本会所定の申請手続き（Web登録）に理解と協力する。
3. 認定の申請は、認定講習会の終了後すみやかに行う。継続申請の期間は、毎年４月１日から６月30日までとする。
4. 名誉の申請は、必要の都度行うこととし、特に期限は定めない。`,
        contentEn: `Applications for certification and renewal are made as follows.
1. Applicants follow the Association's prescribed procedure through their member organization and pay the required fee.
2. Member organizations support and cooperate with the Association's prescribed procedure (online registration).
3. Applications for certification are made promptly after the certification course. Applications for renewal are accepted from April 1 to June 30 each year.
4. Applications for honorary status are made whenever needed, with no particular deadline.`,
      },
      {
        title: '申請料',
        titleEn: 'Application Fees',
        content:
          '認定および継続に要する料金は、本会の定める料金とする。また、申請手数料は加盟団体が別に定める。',
        contentEn:
          'The fees for certification and renewal are set by the Association. Application handling fees are set separately by the member organizations.',
      },
      {
        title: '認定証の携行義務',
        titleEn: 'Obligation to Carry the Certificate',
        content:
          '公認審判員は、各種協議会の審判員として参加する場合および研修会に受講者として参加する場合には、公認審判員認定証を携行し、公認審判員認定証の該当欄に必要事項を記入して、審判役員は審判長に、受講者は講師にそれぞれ掲示し押印を受けなければならない。または、公認審判員は本会がはっ呼応している認定バッヂを国内あらゆる競技会で、審判業務を行う場合装着することを義務づける。',
        contentEn:
          "When taking part in a competition as a judge or in a training session as a participant, certified judges must carry their certified judge's certificate, fill in the required details in the relevant section, and present it for a stamp: judging officials to the Jury President, participants to the instructor. Certified judges are also required to wear the certification badge issued by the Association when judging at any competition in Japan.",
      },
    ],
  },
  {
    title: '',
    titleEn: '',
    section: [
      {
        title: '付則',
        titleEn: 'Supplementary Provisions',
        content: `1. 1種有効資格者で有効１年間に、役務上審判員としての実務ができなかった場合、競技役員としての含むを持って補充できるものとする。
2. この規定に定めていない事項は、それぞれの委員会で細則として別に定める。
3. この規定の改廃はそれぞれの委員会総会の審議を経て、理事会の議決によって行う。

昭和42年2月12日 施行
昭和54年2月11日 一部改定
昭和55年4月1日 一部改定
昭和60年3月17日 一部改定
平成元年4月1日 一部改定
平成5年1月23日 一部改定
平成6年3月13日 一部改定
平成7年3月12日 一部改定
平成13年4月1日 一部改定
平成15年3月16日 一部改定
平成18年2月18日 一部改定
平成19年2月24日 一部改定`,
        contentEn: `1. If a holder of a valid Category 1 qualification could not judge during the one-year period of validity because of their duties, experience as a competition official may be counted instead.
2. Matters not covered by these regulations are set out separately by each committee as detailed rules.
3. These regulations are amended or abolished by resolution of the Board of Directors after deliberation at the general meeting of each committee.

Effective February 12, 1967
Partly revised February 11, 1979
Partly revised April 1, 1980
Partly revised March 17, 1985
Partly revised April 1, 1989
Partly revised January 23, 1993
Partly revised March 13, 1994
Partly revised March 12, 1995
Partly revised April 1, 2001
Partly revised March 16, 2003
Partly revised February 18, 2006
Partly revised February 24, 2007`,
      },
    ],
  },
]
