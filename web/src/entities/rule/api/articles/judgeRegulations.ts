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
      ko: '공인 심판원 규칙',
    },
    section: [
      {
        title: {
          ja: '趣旨',
          en: 'Purpose',
          ko: '취지',
        },
        content: {
          ja: 'この規定は、公認審判員に関する事項について定める。',
          en: 'These regulations set out matters concerning certified judges.',
          ko: '이 규정은 공인 심판원에 관한 사항에 대하여 정한다.',
        },
      },
      {
        title: {
          ja: '公認審判員の任務と区別',
          en: 'Duties and Categories of Certified Judges',
          ko: '공인 심판원의 임무와 구분',
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
          ko: `공인 심판원은 체조 경기와 리듬체조의 남자 및 여자 4개 경기 종별마다 다음 4종류로 한다.
1. 제3종 공인 심판원(이하 3종이라 한다)은 지역·도도부현 선수권 대회 및 이에 준하는 경기회의 심판을 할 수 있다.
2. 제2종 공인 심판원(이하 2종이라 한다)은 도도부현 블록 대회, 서일본 대회, 동일본 대회 및 이에 준하는 경기회의 심판을 할 수 있다.
3. 다만 특별한 사정이 있는 경우에는 대회 책임자의 승낙을 받아 전국 대회 수준의 대회에서도 심판을 할 수 있다.
4. 제1종 공인 심판원(이하 1종이라 한다)은 전국 수준 대회, 전일본 학생 선수권 대회, 전국 고교 선수권 대회, 국민 체육 대회 및 그 밖의 모든 국내 대회의 심판을 할 수 있다.
5. 명예 심판원(이하 명예라 한다)은 각종 경기회의 심판 의무를 지지 않는다.
6. (1)~(3)의 선심·계시 심판에 대해서는 어느 하나의 심판 자격을 가진 자로 한다.`,
        },
      },
      {
        title: {
          ja: '認定の権限',
          en: 'Authority for Certification',
          ko: '인정의 권한',
        },
        content: {
          ja: `公認審判員の認定は次の通りにする。
1. 認定および継続の審査に関わる業務は、男子新体操委員会が行い、会長がこれを認定する。３種および２種の認定の審査は加盟団体が行うこととする。ただし、認定、継続の申請は、都道府県体操協会を経由して行うこととする。
2. 男子新体操委員会はこれらの業務遂行のため、専門委員若干名を選任するものとする。`,
          en: `Certified judges are certified as follows.
1. The review for certification and renewal is carried out by the Men's Rhythmic Gymnastics Committee, and the President certifies the judges. The review for Category 3 and Category 2 is carried out by the member organizations. Applications for certification and renewal are made through the prefectural gymnastics associations.
2. To carry out this work, the Men's Rhythmic Gymnastics Committee appoints a small number of expert members.`,
          ko: `공인 심판원의 인정은 다음과 같이 한다.
1. 인정 및 계속 심사에 관한 업무는 남자 리듬체조 위원회가 실시하고 회장이 이를 인정한다. 3종 및 2종의 인정 심사는 가맹 단체가 실시한다. 다만 인정과 계속의 신청은 도도부현 체조협회를 거쳐서 실시한다.
2. 남자 리듬체조 위원회는 이러한 업무 수행을 위하여 전문 위원 약간 명을 선임한다.`,
        },
      },
      {
        title: {
          ja: '受験・名誉資格',
          en: 'Eligibility and Honorary Status',
          ko: '응시·명예 자격',
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
          ko: `공인 심판원의 응시 자격 및 명예 자격은 다음과 같이 한다.
1. 3종은 경기 경력을 가지고 해당 연도에 만 16세 이상인 자.
2. 2종은 만 18세 이상으로 3종 취득 연도로부터 1년 이상 지난 자이며, 공식 경기회에서 1회 이상 심판 실무를 한 자.
3. 1종은 해당 연도에 만 20세 이상으로 다음 중 어느 하나에 해당하는 자. 또는 이에 상당하는 자격을 가맹 단체가 인정하여 추천한 자.
  a. 2종 자격을 취득하고 도도부현 또는 그 이상의 공식 경기회에서 2회 이상 심판 실무 경험을 가진 자.
  b. 국제 대회가 개최된 경우 대표 선수였던 자로서 대회에 추천된 자.
4. 명예는 2종과 1종의 자격을 통틀어 20년 이상 보유하고 해당 연도에 만 45세 이상인 자로서, 가맹 단체가 인정하여 본 협회에 신청한 자.
5. 국제 심판원 자격을 취득하는 경우에는 본 협회가 인정하는 1종 자격을 취득하고 본 협회에서 추천된 자이어야 한다.`,
        },
      },
      {
        title: {
          ja: '認定講習会',
          en: 'Certification Courses',
          ko: '인정 강습회',
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
          ko: `인정 강습회의 실시 요강은 다음과 같이 한다.
1. 1종 인정 강습회에 대해서는 원칙적으로 2년에 1회 본 협회가 개최하고, 3종 및 2종 인정 강습회는 가맹 단체가 개최한다.
2. 인정 강습회는 원칙적으로 최소 2일간으로 하고 다음 내용으로 한다.
  a. 3종  강습회의 강사는 주최 가맹 단체 또는 인접한 가맹 단체의 1종이 맡으며, 강의 및 채점 시험을 실시한다.
  b. 2종  강습회의 강사는 주최 가맹 단체 또는 인접한 가맹 단체의 1종 2명 이상이 맡으며, 강의 및 채점 시험을 실시한다.
  c. 1종  강습회의 강사는 본 협회의 담당자 2명 이상이 맡는다. 강의와 채점 시험 및 이론 시험을 실시한다.`,
        },
      },
      {
        title: {
          ja: '研修会',
          en: 'Training Sessions',
          ko: '연수회',
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
          ko: `FIG의 개정 시기에 맞추어 4년에 한 번을 원칙으로 한다. 중간 연도에 경기 규칙 또는 채점 규칙에 변경이 생긴 경우의 전달 방법은 다음과 같이 한다.
1. 1종 및 가맹 단체에 대하여 본 협회 홈페이지를 통하여 전달한다. 또는 변경의 정도에 따라 필요한 경우 전달을 위한 연수회를 신속히 개최한다.
2. 2종 및 3종을 위한 전달 또는 연수의 개최는 가맹 단체가 실시한다.
3. 연수회는 인정 강습회를 겸하여 실시할 수도 있다.`,
        },
      },
      {
        title: {
          ja: '資格の有効期間',
          en: 'Period of Validity',
          ko: '자격의 유효 기간',
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
          ko: `자격의 유효 기간은 다음과 같이 한다.
1. 공인 심판 인정증의 유효 기간은 4월 1일부터 다음 해 3월 31일까지 1년간으로 한다. 인정 신청이 7월 1일 이후부터 다음 해 3월 31일까지 사이에 이루어진 경우에는 다음 해 4월 1일에 인정하고 그 기간 내에 유효한 것으로 한다.
2. 제8조 및 제10조에 제시하는 계속 신청에 따라 자격을 계속한 경우의 유효 기간도 앞 항과 같은 1년간으로 한다.
3. 명예의 유효 기간은 영구로 한다.`,
        },
      },
      {
        title: {
          ja: '資格の継続',
          en: 'Renewal of the Qualification',
          ko: '자격의 계속',
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
          ko: `자격의 계속에 대해서는 다음과 같이 한다.
1. 계속을 희망하는 자는 정해진 신청 절차에 따라 계속 신청을 하여야 한다. 다만 명예는 계속 신청을 할 필요가 없다.
2. 계속 신청을 하는 자는 다음 조건을 충족하여야 한다.
  a. 심판 자격의 유효 1년간에 도도부현 또는 그 이상의 공식 경기회에서 심판 임원으로서 적어도 1회 이상의 실무 경험을 가지는 것이 바람직하다.
  b. 본 협회 또는 본 협회가 위탁한 가맹 단체가 개최하는 연수회를 수강할 것.
  c. 유효 기간 내의 경기 규칙·채점 규칙의 변경 부분에 대하여 정통할 것.`,
        },
      },
      {
        title: {
          ja: '資格の保留・取消',
          en: 'Suspension and Revocation of the Qualification',
          ko: '자격의 보류·취소',
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
          ko: `자격의 보류·취소 조건은 다음과 같이 한다.
1. 자격의 계속을 희망하는 자가 제8조에 제시하는 조건을 충족하지 못한 경우 또는 계속 신청을 게을리한 경우에는 그 자격을 1년간 보류한다.
2. 앞 항의 조건을 충족하지 못한 경우에는 실효된다. 다만 특별한 사정에 따른 경우에는 고려할 수 있다.
3. 명예는 자격의 보류·취소 대상으로 하지 않는다.
4. 그 밖에 위원회가 공인 심판원으로서 부적당하다고 인정한 때에는 그 자격을 보류하거나 취소할 수 있다.`,
        },
      },
      {
        title: {
          ja: '認定・継続の申請手続き',
          en: 'Applying for Certification and Renewal',
          ko: '인정·계속의 신청 절차',
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
          ko: `인정 및 계속의 신청은 다음 요령으로 실시한다.
1. 본 협회가 정한 신청 절차에 따라 가맹 단체를 통하여 필요한 요금을 납입한다.
2. 가맹 단체는 본 협회가 정한 신청 절차(웹 등록)에 대하여 이해하고 협력한다.
3. 인정 신청은 인정 강습회가 끝난 후 신속히 실시한다. 계속 신청 기간은 매년 4월 1일부터 6월 30일까지로 한다.
4. 명예의 신청은 필요할 때마다 실시하고 특별히 기한을 정하지 않는다.`,
        },
      },
      {
        title: {
          ja: '申請料',
          en: 'Application Fees',
          ko: '신청료',
        },
        content: {
          ja: '認定および継続に要する料金は、本会の定める料金とする。また、申請手数料は加盟団体が別に定める。',
          en: 'The fees for certification and renewal are set by the Association. Application handling fees are set separately by the member organizations.',
          ko: '인정 및 계속에 드는 요금은 본 협회가 정하는 요금으로 한다. 또한 신청 수수료는 가맹 단체가 따로 정한다.',
        },
      },
      {
        title: {
          ja: '認定証の携行義務',
          en: 'Obligation to Carry the Certificate',
          ko: '인정증의 휴대 의무',
        },
        content: {
          ja: '公認審判員は、各種協議会の審判員として参加する場合および研修会に受講者として参加する場合には、公認審判員認定証を携行し、公認審判員認定証の該当欄に必要事項を記入して、審判役員は審判長に、受講者は講師にそれぞれ掲示し押印を受けなければならない。または、公認審判員は本会がはっ呼応している認定バッヂを国内あらゆる競技会で、審判業務を行う場合装着することを義務づける。',
          en: "When taking part in a competition as a judge or in a training session as a participant, certified judges must carry their certified judge's certificate, fill in the required details in the relevant section, and present it for a stamp: judging officials to the Jury President, participants to the instructor. Certified judges are also required to wear the certification badge issued by the Association when judging at any competition in Japan.",
          ko: '공인 심판원은 각종 경기회에 심판원으로서 참가하는 경우 및 연수회에 수강자로서 참가하는 경우에는 공인 심판원 인정증을 휴대하고, 공인 심판원 인정증의 해당란에 필요 사항을 기입하여 심판 임원은 심판장에게, 수강자는 강사에게 각각 제시하고 날인을 받아야 한다. 또한 공인 심판원은 본 협회가 발행하는 인정 배지를 국내의 모든 경기회에서 심판 업무를 실시할 때 착용하여야 한다.',
        },
      },
    ],
  },
  {
    title: {
      ja: '',
      en: '',
      ko: '',
    },
    section: [
      {
        title: {
          ja: '付則',
          en: 'Supplementary Provisions',
          ko: '부칙',
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
          ko: `1. 1종 유효 자격자가 유효 1년간에 직무상 심판원으로서의 실무를 할 수 없었던 경우에는 경기 임원으로서의 경험으로 보충할 수 있다.
2. 이 규정에 정하지 않은 사항은 각 위원회에서 세칙으로 따로 정한다.
3. 이 규정의 개정과 폐지는 각 위원회 총회의 심의를 거쳐 이사회의 의결로 실시한다.

쇼와 42년 2월 12일 시행
쇼와 54년 2월 11일 일부 개정
쇼와 55년 4월 1일 일부 개정
쇼와 60년 3월 17일 일부 개정
헤이세이 원년 4월 1일 일부 개정
헤이세이 5년 1월 23일 일부 개정
헤이세이 6년 3월 13일 일부 개정
헤이세이 7년 3월 12일 일부 개정
헤이세이 13년 4월 1일 일부 개정
헤이세이 15년 3월 16일 일부 개정
헤이세이 18년 2월 18일 일부 개정
헤이세이 19년 2월 24일 일부 개정`,
        },
      },
    ],
  },
]
