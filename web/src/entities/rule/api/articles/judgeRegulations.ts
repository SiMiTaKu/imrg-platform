import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第3章 付録のうち、公認審判員規則と付則。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const JUDGE_REGULATIONS_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '公認審判員規則',
      en: 'Regulations for Certified Judges',
      zh: '公认裁判员规则',
    },
    section: [
      {
        title: {
          ja: '趣旨',
          en: 'Purpose',
          zh: '宗旨',
        },
        content: {
          ja: 'この規定は、公認審判員に関する事項について定める。',
          en: 'These regulations set out matters concerning certified judges.',
          zh: '本规定对有关公认裁判员的事项作出规定。',
        },
      },
      {
        title: {
          ja: '公認審判員の任務と区別',
          en: 'Duties and Categories of Certified Judges',
          zh: '公认裁判员的任务与分类',
        },
        content: {
          ja: `公認審判員は、体操競技、新体操の男子ならびに女子の４競技種別ごとに次の４種類とする。
1. 第３種公認審判員（以下３種という）は地区・都道府県選手権大会およびこれに類する競技会の審判を行うことができる。
2. 第２種公認審判員（以下２種という）は、都道府県ブロック大会、西日本、東日本大会およびこれに類する競技会の審判を行うことができる。
3. ただし、特別な事情がある場合は、大会責任者の承諾のもと、全国大会レベルの大会が行うことができる。
4. 第１種公認審判員（以下１種という）は、全国レベル大会、全日本学生選手権大会、全国高校選手権大会、国民体育大会やその他すべての国内大会の審判を行うことができる。
5. 名誉審判員（以下名誉という）は、各種の競技会の審判義務を行わない。
6. （１）〜（３）の線審・計時審判については、いずれかの審判資格を有するものとする。`,
          en: `Certified judges are divided into the following four categories for each of the four disciplines: men's and women's artistic gymnastics and men's and women's rhythmic gymnastics.
1. Category 3 certified judges (hereinafter "Category 3") may judge district and prefectural championships and similar competitions.
2. Category 2 certified judges (hereinafter "Category 2") may judge regional competitions covering several prefectures, the West Japan and East Japan Championships, and similar competitions.
3. In special circumstances, with the consent of the person in charge of the competition, they may also judge national-level competitions.
4. Category 1 certified judges (hereinafter "Category 1") may judge national-level competitions, the All Japan Student Championships, the National High School Championships, the National Sports Festival and all other national competitions.
5. Honorary judges (hereinafter "Honorary") do not judge competitions.
6. Line judges and timekeepers must hold one of the qualifications in (1) to (3).`,
          zh: `公认裁判员按竞技体操、艺术体操的男子及女子共4个竞赛项别，分为以下4类。
1. 第3级公认裁判员（以下简称3级）可以担任地区、都道府县锦标赛及与之类似的比赛的裁判工作。
2. 第2级公认裁判员（以下简称2级）可以担任都道府县大区比赛、西日本比赛、东日本比赛及与之类似的比赛的裁判工作。
3. 但在有特殊情况时，经比赛负责人同意，也可以担任全国级别比赛的裁判工作。
4. 第1级公认裁判员（以下简称1级）可以担任全国级别比赛、全日本学生锦标赛、全国高中锦标赛、国民体育大会以及其他所有国内比赛的裁判工作。
5. 荣誉裁判员（以下简称荣誉）不承担各类比赛的裁判义务。
6. 关于（1）—（3）的线裁判、计时裁判，应当持有上述任意一种裁判资格。`,
        },
      },
      {
        title: {
          ja: '認定の権限',
          en: 'Authority for Certification',
          zh: '认定的权限',
        },
        content: {
          ja: `公認審判員の認定は次の通りにする。
1. 認定および継続の審査に関わる業務は、男子新体操委員会が行い、会長がこれを認定する。３種および２種の認定の審査は加盟団体が行うこととする。ただし、認定、継続の申請は、都道府県体操協会を経由して行うこととする。
2. 男子新体操委員会はこれらの業務遂行のため、専門委員若干名を選任するものとする。`,
          en: `Certified judges are certified as follows.
1. The review for certification and renewal is carried out by the Men's Rhythmic Gymnastics Committee, and the President certifies the judges. The review for Category 3 and Category 2 is carried out by the member organizations. Applications for certification and renewal are made through the prefectural gymnastics associations.
2. To carry out this work, the Men's Rhythmic Gymnastics Committee appoints a small number of expert members.`,
          zh: `公认裁判员的认定按以下方式进行。
1. 有关认定及延续审查的工作由男子艺术体操委员会负责，由会长予以认定。3级及2级的认定审查由加盟团体负责。但认定、延续的申请，须经由都道府县体操协会提出。
2. 男子艺术体操委员会为开展上述工作，应选任若干名专门委员。`,
        },
      },
      {
        title: {
          ja: '受験・名誉資格',
          en: 'Eligibility and Honorary Status',
          zh: '报考资格与荣誉资格',
        },
        content: {
          ja: `公認審判員の受験資格および名誉資格は次のとおりとする。
1. ３種は、競技経歴を有し当該年度において満１６歳以上の者。
2. ２種は、満18歳以上で３種取得年度から１年以上経過した者で、公式競技会で１回以上審判実務を有する者。
3. １種は、当該年度において、満20歳以上で、次のいずれかに当該する者。または、相当する資格を加盟団体が認め推薦した者。
  a. ２種の資格を取得し、都道府県またはそれ以上の公式競技会において２回以上審判実務の経験を有する者。
  b. 国際大会開催された場合、代表選手であった者で大会に推薦された者。
4. 名誉は、２種と１種の資格を通年20年以上有し、当該年度において満45際以上の者で、加盟団体が認め本会に申請した者。
5. 国際審判員資格を取得する場合は、本会認定の１種資格を取得し、本会で推薦された者でなければならない。`,
          en: `Eligibility for the examination and for honorary status is as follows.
1. Category 3: people with competitive experience who are at least 16 years old in the year concerned.
2. Category 2: people at least 18 years old, at least one year after obtaining Category 3, who have judged at least once at an official competition.
3. Category 1: people at least 20 years old in the year concerned who meet one of the following, or who hold an equivalent qualification recognized and recommended by a member organization.
  a. People who hold Category 2 and have judged at least twice at official competitions at prefectural level or higher.
  b. People who represented Japan at an international competition and are recommended for the competition.
4. Honorary: people who have held Category 2 and Category 1 for a total of at least 20 years, are at least 45 years old in the year concerned, and are recognized by a member organization, which applies to the Association.
5. To obtain an international judge qualification, a person must hold Category 1 certified by the Association and be recommended by the Association.`,
          zh: `公认裁判员的报考资格及荣誉资格如下。
1. 3级为具有比赛经历，且在当年度年满16周岁者。
2. 2级为年满18周岁，自取得3级的年度起已满1年以上，并在正式比赛中有1次以上裁判实务经历者。
3. 1级为在当年度年满20周岁，且符合下列任意一项者。或者经加盟团体认可并推荐、具有相当资格者。
  a. 已取得2级资格，并在都道府县或以上级别的正式比赛中有2次以上裁判实务经历者。
  b. 举办国际比赛时，曾为代表运动员并被推荐参加该比赛者。
4. 荣誉为持有2级及1级资格累计20年以上，在当年度年满45周岁，经加盟团体认可并向本会提出申请者。
5. 取得国际裁判员资格时，必须已取得本会认定的1级资格，并经本会推荐。`,
        },
      },
      {
        title: {
          ja: '認定講習会',
          en: 'Certification Courses',
          zh: '认定讲习会',
        },
        content: {
          ja: `認定講習会の実施要項は次のとおりとする。
1. １種の認定講習会については、原則として２年に１回本会が開催し、３種および２種の認定講習会は加盟団体が開催する。
2. 認定講習会は、原則として最小限２日間として、次の内容とする。
  a. ３種　講習会の講師は、主催加盟団体または隣接する加盟団体の１種がこれにあたり、講義および採点試験を行う。
  b. ２種　講習会の講師は、主催加盟団体または隣接する加盟団体の１種が２名以上がこれにあたり、講義および採点試験を行う。
  c. １種　講習会の講師は、本会の担当者２名以上でこれにあたる。講義と採点試験および理論試験を行う。`,
          en: `Certification courses are held as follows.
1. As a rule, the Category 1 course is held by the Association once every two years, and the Category 3 and Category 2 courses are held by the member organizations.
2. As a rule, a certification course lasts at least two days, with the following content.
  a. Category 3: the instructors are Category 1 judges of the host member organization or a neighboring member organization, who give lectures and a scoring test.
  b. Category 2: the instructors are two or more Category 1 judges of the host member organization or a neighboring member organization, who give lectures and a scoring test.
  c. Category 1: the instructors are two or more people in charge from the Association, who give lectures, a scoring test and a theory test.`,
          zh: `认定讲习会的实施要点如下。
1. 1级的认定讲习会原则上由本会每2年举办1次，3级及2级的认定讲习会由加盟团体举办。
2. 认定讲习会原则上最少为2天，内容如下。
  a. 3级　讲习会的讲师由主办加盟团体或邻近加盟团体的1级担任，进行讲课及评分考试。
  b. 2级　讲习会的讲师由主办加盟团体或邻近加盟团体的2名以上1级担任，进行讲课及评分考试。
  c. 1级　讲习会的讲师由本会的2名以上负责人担任，进行讲课、评分考试及理论考试。`,
        },
      },
      {
        title: {
          ja: '研修会',
          en: 'Training Sessions',
          zh: '培训会',
        },
        content: {
          ja: `FIGの改正期に併せて４年に一度を原則とする。中間年で、競技規則または採点規則に変更が生じた場合の伝達方法は次のとおりとする。
1. １種および加盟団体に対し本会ホームページをもって伝達する。もしくは変更の程度により必要に応じて伝達のための研修会を速やかに開催する。
2. ２種および３種のための伝達または研修の開催は加盟団体が行う。
3. 研修会は、認定講習会を兼ねて行うこともできる。`,
          en: `As a rule, training sessions are held once every four years, in line with the FIG revision cycle. If the competition rules or the Code of Points change in the years in between, the changes are communicated as follows.
1. Changes are communicated to Category 1 judges and member organizations on the Association's website. Depending on the extent of the changes, a training session to communicate them is held promptly if necessary.
2. Communication or training for Category 2 and Category 3 judges is carried out by the member organizations.
3. A training session may be held together with a certification course.`,
          zh: `原则上配合FIG的修订周期，每4年举办1次。在中间年度，竞赛规则或评分规则发生变更时，其传达方法如下。
1. 对1级及加盟团体，通过本会主页进行传达。或者根据变更的程度，必要时迅速举办用于传达的培训会。
2. 面向2级及3级的传达或培训，由加盟团体举办。
3. 培训会也可以与认定讲习会合并举办。`,
        },
      },
      {
        title: {
          ja: '資格の有効期間',
          en: 'Period of Validity',
          zh: '资格的有效期',
        },
        content: {
          ja: `資格の有効期間は次のとおりとする。
1. 公認審判認定証有効期間は４月１日より翌年の３月31日までの１年間とする。認定申請が７月１日以降翌年３月31日までの間に行われた場合は、翌年４月１日に認定し、期間内有効とする。
2. 第８条および第10条に示す継続申請により資格を継続した場合の有効期限も前項と同じ１年間とする。
3. 名誉の有効期間は永年とする。`,
          en: `The period of validity of the qualification is as follows.
1. A certified judge's certificate is valid for one year, from April 1 to March 31 of the following year. If the application for certification is made between July 1 and March 31 of the following year, the certification takes effect on April 1 of the following year and is valid for that period.
2. A qualification renewed by the application in Articles 8 and 10 is also valid for one year, as in the previous item.
3. Honorary status does not expire.`,
          zh: `资格的有效期如下。
1. 公认裁判员认定证的有效期为自4月1日起至次年3月31日止的1年。认定申请在7月1日以后至次年3月31日之间提出时，于次年4月1日予以认定，并在该期间内有效。
2. 依据第8条及第10条所示的延续申请而延续资格时，其有效期也与前项相同，为1年。
3. 荣誉的有效期为终身。`,
        },
      },
      {
        title: {
          ja: '資格の継続',
          en: 'Renewal of the Qualification',
          zh: '资格的延续',
        },
        content: {
          ja: `資格の継続については、次のとおりとする。
1. 継続を希望する者は、所定の申請手続きにより、継続申請をしなければならない。ただし、名誉は継続申請をする必要はない。
2. 継続申請をする者は、次の条件を満足していなければならない。
  a. 審判資格の有効１年間に、都道府県もしくはそれ以上の公式競技会において、審判役員として少なくとも１回以上の実務の経験を有することが望ましい。
  b. 本会または本会が委託した加盟団体が開催する研修会を受講すること。
  c. 有効期間内における競技規則・採点規則の変更部分について精通すること。`,
          en: `Renewal of the qualification is as follows.
1. Those who wish to renew must apply for renewal by the prescribed procedure. Honorary judges do not need to apply.
2. Applicants for renewal must meet the following conditions.
  a. During the one-year period of validity, they should have judged at least once as a judging official at an official competition at prefectural level or higher.
  b. They must attend a training session held by the Association or by a member organization entrusted by the Association.
  c. They must be familiar with the changes to the competition rules and the Code of Points during the period of validity.`,
          zh: `关于资格的延续，规定如下。
1. 希望延续者，必须按照规定的申请手续提出延续申请。但荣誉无需提出延续申请。
2. 提出延续申请者，必须满足下列条件。
  a. 在裁判资格有效的1年内，希望其在都道府县或以上级别的正式比赛中，作为裁判工作人员具有至少1次以上的实务经历。
  b. 参加由本会或本会委托的加盟团体举办的培训会。
  c. 熟知有效期内竞赛规则、评分规则的变更部分。`,
        },
      },
      {
        title: {
          ja: '資格の保留・取消',
          en: 'Suspension and Revocation of the Qualification',
          zh: '资格的保留与取消',
        },
        content: {
          ja: `資格の保留・取消の条件は次のとおりとする。
1. 資格の継続を希望するものが、第８条に示す条件を満足しない場合、もしくは継続申請を怠った場合は、その資格を１年間保留する。
2. 前項の条件を満足しない場合は、失効する。ただし、特別の事項による場合は考慮することがある。
3. 名誉は、資格の保留・取消の対象をとらない。
4. その他委員会が公認審判員として不適当と認めたときは、その資格を保留または取り消すことがある。`,
          en: `The conditions for suspending or revoking the qualification are as follows.
1. If a person who wishes to renew does not meet the conditions in Article 8 or fails to apply for renewal, the qualification is suspended for one year.
2. If the conditions in the previous item are still not met, the qualification lapses. Special circumstances may be taken into account.
3. Honorary status is not subject to suspension or revocation.
4. The qualification may also be suspended or revoked if the committee finds the person unsuitable as a certified judge.`,
          zh: `资格保留、取消的条件如下。
1. 希望延续资格者未满足第8条所示条件时，或怠于提出延续申请时，将其资格保留1年。
2. 仍未满足前项条件时，资格失效。但因特殊事项时，可予以考虑。
3. 荣誉不作为资格保留、取消的对象。
4. 此外，当委员会认定其不适合担任公认裁判员时，可以保留或取消其资格。`,
        },
      },
      {
        title: {
          ja: '認定・継続の申請手続き',
          en: 'Applying for Certification and Renewal',
          zh: '认定、延续的申请手续',
        },
        content: {
          ja: `認定および継続の申請は、次の要領で行うものとする。
1. 本会所定の申請手続きにより加盟団体をとおして、必要料金を納入する。
2. 加盟団体は、本会所定の申請手続き（Web登録）に理解と協力する。
3. 認定の申請は、認定講習会の終了後すみやかに行う。継続申請の期間は、毎年４月１日から６月30日までとする。
4. 名誉の申請は、必要の都度行うこととし、特に期限は定めない。`,
          en: `Applications for certification and renewal are made as follows.
1. Applicants follow the Association's prescribed procedure through their member organization and pay the required fee.
2. Member organizations support and cooperate with the Association's prescribed procedure (online registration).
3. Applications for certification are made promptly after the certification course. Applications for renewal are accepted from April 1 to June 30 each year.
4. Applications for honorary status are made whenever needed, with no particular deadline.`,
          zh: `认定及延续的申请按以下要领进行。
1. 按照本会规定的申请手续，通过加盟团体缴纳必要费用。
2. 加盟团体应理解并配合本会规定的申请手续（Web登记）。
3. 认定的申请在认定讲习会结束后迅速进行。延续申请的期间为每年4月1日至6月30日。
4. 荣誉的申请根据需要随时进行，不特别设定期限。`,
        },
      },
      {
        title: {
          ja: '申請料',
          en: 'Application Fees',
          zh: '申请费',
        },
        content: {
          ja: '認定および継続に要する料金は、本会の定める料金とする。また、申請手数料は加盟団体が別に定める。',
          en: 'The fees for certification and renewal are set by the Association. Application handling fees are set separately by the member organizations.',
          zh: '认定及延续所需的费用，按本会规定的费用执行。此外，申请手续费由加盟团体另行规定。',
        },
      },
      {
        title: {
          ja: '認定証の携行義務',
          en: 'Obligation to Carry the Certificate',
          zh: '认定证的携带义务',
        },
        content: {
          ja: '公認審判員は、各種協議会の審判員として参加する場合および研修会に受講者として参加する場合には、公認審判員認定証を携行し、公認審判員認定証の該当欄に必要事項を記入して、審判役員は審判長に、受講者は講師にそれぞれ掲示し押印を受けなければならない。または、公認審判員は本会がはっ呼応している認定バッヂを国内あらゆる競技会で、審判業務を行う場合装着することを義務づける。',
          en: "When taking part in a competition as a judge or in a training session as a participant, certified judges must carry their certified judge's certificate, fill in the required details in the relevant section, and present it for a stamp: judging officials to the Jury President, participants to the instructor. Certified judges are also required to wear the certification badge issued by the Association when judging at any competition in Japan.",
          zh: '公认裁判员作为各类比赛的裁判员参加时，以及作为学员参加培训会时，必须携带公认裁判员认定证，在公认裁判员认定证的相应栏内填写必要事项，裁判工作人员向裁判长、学员向讲师分别出示并接受盖章。此外，公认裁判员在国内的任何比赛中从事裁判工作时，有义务佩戴本会颁发的认定徽章。',
        },
      },
    ],
  },
  {
    title: {
      ja: '',
      en: '',
      zh: '',
    },
    section: [
      {
        title: {
          ja: '付則',
          en: 'Supplementary Provisions',
          zh: '附则',
        },
        content: {
          ja: `1. 1種有効資格者で有効１年間に、役務上審判員としての実務ができなかった場合、競技役員としての含むを持って補充できるものとする。
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
          en: `1. If a holder of a valid Category 1 qualification could not judge during the one-year period of validity because of their duties, experience as a competition official may be counted instead.
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
          zh: `1. 具有1级有效资格者，在有效的1年内因职务原因未能从事裁判员实务时，可以以担任比赛工作人员的经历予以补充。
2. 本规定未作规定的事项，由各委员会另行制定细则。
3. 本规定的修改与废止，经各委员会全体会议审议后，由理事会议决进行。

昭和42年2月12日 施行
昭和54年2月11日 部分修订
昭和55年4月1日 部分修订
昭和60年3月17日 部分修订
平成元年4月1日 部分修订
平成5年1月23日 部分修订
平成6年3月13日 部分修订
平成7年3月12日 部分修订
平成13年4月1日 部分修订
平成15年3月16日 部分修订
平成18年2月18日 部分修订
平成19年2月24日 部分修订`,
        },
      },
    ],
  },
]
