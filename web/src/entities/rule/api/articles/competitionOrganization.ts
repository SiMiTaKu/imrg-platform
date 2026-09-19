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
      ko: '총칙',
      es: 'Disposiciones generales',
      fr: 'Dispositions générales',
      ru: 'Общие положения',
      hi: 'सामान्य प्रावधान',
    },
    section: [
      {
        title: {
          ja: '本規則の指針',
          en: 'Purpose of These Rules',
          zh: '本规则的方针',
          ko: '본 규칙의 지침',
          es: 'Finalidad de este reglamento',
          fr: 'Objet du présent règlement',
          ru: 'Назначение настоящих Правил',
          hi: 'इन नियमों का मार्गदर्शक सिद्धांत',
        },
        content: {
          ja: '本規則は公益財団法人日本体操協会寄付行為第７章、男子新体操協会により協議会の組織運営・審判刑部の組織運営・研修・認定に関する指針となるものである。',
          en: "Under Chapter 7 of the Articles of Endowment of the Japan Gymnastics Association (a public interest incorporated foundation), these rules serve as the guidelines of the Men's Rhythmic Gymnastics Committee for organizing and running competitions, and for organizing, training and certifying judges.",
          zh: '本规则依据公益财团法人日本体操协会捐助章程第７章，由男子艺术体操协会制定，作为比赛会的组织运营、裁判部门的组织运营、培训及认定的方针。',
          ko: '본 규칙은 공익재단법인 일본체조협회 기부행위 제7장에 따라, 남자 리듬체조 협회에 의한 경기회의 조직 운영 · 심판부의 조직 운영 · 연수 · 인정에 관한 지침이 되는 것이다.',
          es: 'En virtud del capítulo 7 de los estatutos de la Federación Japonesa de Gimnasia (fundación de interés público), este reglamento constituye la orientación del Comité de Gimnasia Rítmica Masculina en lo relativo a la organización y el desarrollo de las competiciones, así como a la organización, la formación y la titulación del cuerpo de jueces.',
          fr: "En application du chapitre 7 des statuts de la Fédération japonaise de gymnastique (fondation d'intérêt public), le présent règlement constitue les directives de la Commission de gymnastique rythmique masculine pour l'organisation et le déroulement des compétitions, ainsi que pour l'organisation, la formation et la qualification des juges.",
          ru: 'В соответствии с главой 7 Устава Японской ассоциации гимнастики (общественный фонд) настоящие Правила служат для Комитета мужской художественной гимнастики руководством по организации и проведению соревнований, а также по формированию судейского корпуса, его обучению и аттестации.',
          hi: 'ये नियम, सार्वजनिक हित निगमित फाउंडेशन जापान जिम्नास्टिक संघ के दान-विलेख के अध्याय 7 के अनुसार, पुरुष लयबद्ध जिम्नास्टिक संघ द्वारा प्रतियोगिता के संगठन तथा संचालन, निर्णायक विभाग के संगठन तथा संचालन, प्रशिक्षण और प्रमाणन के संबंध में मार्गदर्शक सिद्धांत बनते हैं।',
        },
      },
      {
        title: {
          ja: '本規則の改正',
          en: 'Amendment of These Rules',
          zh: '本规则的修订',
          ko: '본 규칙의 개정',
          es: 'Modificación de este reglamento',
          fr: 'Modification du présent règlement',
          ru: 'Изменение настоящих Правил',
          hi: 'इन नियमों में संशोधन',
        },
        content: {
          ja: '本規則の改正は、男子新体操委員会で過半数を持って議決する。',
          en: "These rules are amended by a majority vote of the Men's Rhythmic Gymnastics Committee.",
          zh: '本规则的修订，由男子艺术体操委员会以过半数表决通过。',
          ko: '본 규칙의 개정은 남자 리듬체조 위원회에서 과반수로 의결한다.',
          es: 'La modificación de este reglamento se aprueba por mayoría de votos en el Comité de Gimnasia Rítmica Masculina.',
          fr: 'Le présent règlement est modifié par un vote à la majorité de la Commission de gymnastique rythmique masculine.',
          ru: 'Настоящие Правила изменяются большинством голосов Комитета мужской художественной гимнастики.',
          hi: 'इन नियमों में संशोधन पुरुष लयबद्ध जिम्नास्टिक समिति में बहुमत से तय किया जाता है।',
        },
      },
    ],
  },
  {
    title: {
      ja: '協議会及び各種大会の組織',
      en: 'Organization of Competitions',
      zh: '比赛会及各类比赛的组织',
      ko: '경기회 및 각종 대회의 조직',
      es: 'Organización de las competiciones y campeonatos',
      fr: 'Organisation des compétitions',
      ru: 'Организация соревнований',
      hi: 'प्रतियोगिता तथा विभिन्न प्रतियोगिताओं का संगठन',
    },
    section: [
      {
        title: {
          ja: '各種大会',
          en: 'Types of Competitions',
          zh: '各类比赛',
          ko: '각종 대회',
          es: 'Tipos de competiciones',
          fr: 'Types de compétitions',
          ru: 'Виды соревнований',
          hi: 'विभिन्न प्रतियोगिताएँ',
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
          ko: `【전일본 선수권 대회】
  매년 남자 및 여자의 「전일본 리듬체조 선수권 대회」를 조직한다.
  이 조직은 (공재) 일본체조협회에서 1개 가맹 단체에 위촉된다.
  
【국민체육대회】
  국민체육대회 리듬체조 경기의 조직은 전일본 선수권 대회에 준한다.
  
【국제 경기 대회】
  본 협회는 적당하다고 인정하는 경우에는 국제 경기회를 조직할 수 있다.
  그 경기 조직 · 운영의 구체적 계획은 FIG 제 규칙에 근거하여 남자 리듬체조 위원회에서 기안하고 본 협회 이사회의 승인을 받는다.`,
          es: `[Campeonato de Japón]
  Cada año se organiza el «Campeonato de Japón de Gimnasia Rítmica», masculino y femenino.
  La Federación Japonesa de Gimnasia (fundación de interés público) encomienda su organización a una de sus entidades miembro.

[Juegos Deportivos Nacionales]
  La organización de la competición de gimnasia rítmica de los Juegos Deportivos Nacionales se rige por lo dispuesto para el Campeonato de Japón.

[Competiciones internacionales]
  La Federación puede organizar competiciones internacionales cuando lo considere oportuno.
  El plan concreto de organización y desarrollo de dichas competiciones lo redacta el Comité de Gimnasia Rítmica Masculina conforme a los reglamentos de la FIG y lo aprueba la junta directiva de la Federación.`,
          fr: `[Championnats du Japon]
  Chaque année sont organisés les « Championnats du Japon de gymnastique rythmique », pour les hommes et pour les femmes.
  La Fédération japonaise de gymnastique en confie l'organisation à l'une de ses associations membres.

[Jeux nationaux du Japon]
  Les épreuves de gymnastique rythmique des Jeux nationaux du Japon sont organisées de la même manière que les Championnats du Japon.

[Compétitions internationales]
  La Fédération peut organiser des compétitions internationales lorsqu'elle le juge opportun.
  Le plan détaillé d'organisation et de déroulement d'une telle compétition est rédigé par la Commission de gymnastique rythmique masculine conformément aux règlements de la FIG, puis approuvé par le conseil d'administration de la Fédération.`,
          ru: `[Чемпионат Японии]
  Ежегодно проводится «Чемпионат Японии по художественной гимнастике» среди мужчин и среди женщин.
  Японская ассоциация гимнастики поручает его организацию одной из организаций-членов.

[Национальный спортивный фестиваль]
  Соревнования по художественной гимнастике в рамках Национального спортивного фестиваля организуются так же, как чемпионат Японии.

[Международные соревнования]
  Ассоциация вправе организовывать международные соревнования, когда считает это уместным.
  Конкретный план организации и проведения таких соревнований разрабатывается Комитетом мужской художественной гимнастики в соответствии с правилами FIG и утверждается советом директоров Ассоциации.`,
          hi: `[अखिल जापान चैंपियनशिप]
  हर वर्ष पुरुषों और महिलाओं की "अखिल जापान लयबद्ध जिम्नास्टिक चैंपियनशिप" का आयोजन किया जाता है।
  इसका संगठन (सार्वजनिक हित निगमित फाउंडेशन) जापान जिम्नास्टिक संघ द्वारा 1 सदस्य संगठन को सौंपा जाता है।

[राष्ट्रीय खेल महोत्सव]
  राष्ट्रीय खेल महोत्सव की लयबद्ध जिम्नास्टिक प्रतियोगिता का संगठन अखिल जापान चैंपियनशिप के अनुसार होता है।

[अंतरराष्ट्रीय प्रतियोगिताएँ]
  यह संघ उपयुक्त समझे जाने पर अंतरराष्ट्रीय प्रतियोगिता का आयोजन कर सकता है।
  उसके प्रतियोगिता संगठन तथा संचालन की ठोस योजना FIG के नियमों के आधार पर पुरुष लयबद्ध जिम्नास्टिक समिति द्वारा तैयार की जाती है और इस संघ के निदेशक मंडल की स्वीकृति प्राप्त करती है।`,
        },
      },
      {
        title: {
          ja: '各競技会場の場所',
          en: 'Competition Venues',
          zh: '各比赛场馆的地点',
          ko: '각 경기 회장의 장소',
          es: 'Lugar de celebración de las competiciones',
          fr: 'Lieux de compétition',
          ru: 'Места проведения соревнований',
          hi: 'प्रत्येक प्रतियोगिता स्थल का स्थान',
        },
        content: {
          ja: '本協会の監督下に組織される競技会および各種競技会は、目的に適した場所（体育館または競技場）で行わなければならない。',
          en: 'Competitions organized under the supervision of the Association must be held in a place suited to their purpose (a gymnasium or an arena).',
          zh: '在本协会监督下组织的比赛会及各类比赛，必须在适合其目的的场所（体育馆或比赛场）举行。',
          ko: '본 협회의 감독하에 조직되는 경기회 및 각종 경기회는 목적에 맞는 장소(체육관 또는 경기장)에서 실시하여야 한다.',
          es: 'Las competiciones organizadas bajo la supervisión de la Federación, así como los distintos campeonatos, deben celebrarse en un lugar adecuado a su finalidad (un pabellón deportivo o una instalación de competición).',
          fr: "Les compétitions organisées sous l'autorité de la Fédération, quelles qu'elles soient, doivent se dérouler dans un lieu adapté à leur objet (gymnase ou salle omnisports).",
          ru: 'Соревнования, организуемые под контролем Ассоциации, должны проводиться в подходящем для этого месте (спортивный зал или арена).',
          hi: 'इस संघ की देखरेख में आयोजित प्रतियोगिताएँ तथा विभिन्न प्रतियोगिताएँ उद्देश्य के अनुकूल स्थान (व्यायामशाला या स्टेडियम) में आयोजित की जानी चाहिए।',
        },
      },
    ],
  },
  {
    title: {
      ja: '協議会及び各種大会の運営',
      en: 'Running Competitions',
      zh: '比赛会及各类比赛的运营',
      ko: '경기회 및 각종 대회의 운영',
      es: 'Desarrollo de las competiciones y campeonatos',
      fr: 'Déroulement des compétitions',
      ru: 'Проведение соревнований',
      hi: 'प्रतियोगिता तथा विभिन्न प्रतियोगिताओं का संचालन',
    },
    section: [
      {
        title: {
          ja: '組織協会の責任',
          en: 'Responsibilities of the Organizing Association',
          zh: '组织协会的责任',
          ko: '조직 협회의 책임',
          es: 'Responsabilidades de la entidad organizadora',
          fr: "Responsabilités de l'association organisatrice",
          ru: 'Обязанности организующей ассоциации',
          hi: 'आयोजक संघ की जिम्मेदारी',
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
          ko: `조직 협회는 그 구성하는 조직 위원회에 대하여도 전 책임을 진다. 조직 협회는 홍보 및 조직의 전 경비를 부담한다. 그 안에 다음의 것을 포함한다.

1. 필요한 책자 및 인쇄물의 인쇄 및 송부
 
2. 메달 및 상장의 준비

3. 경기장 및 연습장의 정비, 연습 및 경기용으로 충분한 수량의 정식 용구의 준비
 
4. 반주 음악에 필요한 음향 기기의 준비
 
5. 경기회 진행에 필요한 음향 설비의 준비
 
6. 경기회의 원활한 진행, 특히 게시 채점의 전달 등에 필요한 인원의 확보
 
7. 계산 작업, 경기회 경과 중의 성적 및 최종 성적의 공표, 보도 기관용 서류의 작성. 조직 위원회는 심판에 필요한 정보를 제공하고 업무를 지원한다. 일반적으로 조직 위원회는 남자 리듬체조 위원회와 긴밀히 연락하여 필요한 사항을 처리한다`,
          es: `La entidad organizadora asume toda la responsabilidad, incluida la del comité organizador que constituye. La entidad organizadora corre con todos los gastos de promoción y organización, entre los que se incluyen los siguientes.

1. La impresión y el envío de los folletos e impresos necesarios

2. La preparación de las medallas y los diplomas

3. La preparación del recinto de competición y de la zona de entrenamiento, así como de material oficial en cantidad suficiente para el entrenamiento y la competición

4. La preparación del equipo de sonido necesario para la música de acompañamiento

5. La preparación de la megafonía necesaria para el desarrollo de la competición

6. La dotación del personal necesario para que la competición se desarrolle con normalidad, en especial para mostrar y comunicar las puntuaciones

7. Los trabajos de cálculo, la publicación de los resultados durante la competición y de los resultados definitivos, y la preparación de la documentación para los medios de comunicación. El comité organizador facilita al cuerpo de jueces la información que necesita y presta apoyo a su labor. Con carácter general, el comité organizador mantiene un contacto estrecho con el Comité de Gimnasia Rítmica Masculina y resuelve las cuestiones necesarias`,
          fr: `L'association organisatrice assume l'entière responsabilité de la compétition, y compris celle du comité d'organisation qu'elle constitue. Elle prend en charge l'ensemble des frais de promotion et d'organisation, dont les suivants.

1. Impression et envoi des brochures et des documents imprimés nécessaires

2. Préparation des médailles et des diplômes

3. Aménagement de la salle de compétition et de la salle d'échauffement, et mise à disposition d'un matériel officiel en quantité suffisante pour l'entraînement et la compétition

4. Mise à disposition du matériel audio nécessaire à la diffusion des musiques d'accompagnement

5. Mise à disposition de la sonorisation nécessaire au déroulement de la compétition

6. Recrutement du personnel nécessaire au bon déroulement de la compétition, en particulier pour l'affichage et la transmission des notes

7. Calcul des résultats, publication des résultats en cours de compétition et des résultats définitifs, et préparation des documents destinés à la presse. Le comité d'organisation fournit aux juges les informations dont ils ont besoin et les assiste dans leur travail. De manière générale, il reste en contact étroit avec la Commission de gymnastique rythmique masculine et traite avec elle les questions nécessaires.`,
          ru: `Организующая ассоциация несёт полную ответственность, в том числе за формируемый ею оргкомитет. Она берёт на себя все расходы на рекламу и организацию, включая следующее.

1. Печать и рассылка необходимых брошюр и печатных материалов

2. Подготовка медалей и грамот

3. Подготовка соревновательного и разминочного залов, а также достаточного количества официального инвентаря для разминки и соревнований

4. Подготовка звуковой аппаратуры для музыкального сопровождения

5. Подготовка звукового оборудования, необходимого для проведения соревнований

6. Обеспечение персоналом, необходимым для бесперебойного хода соревнований, прежде всего для показа и передачи оценок

7. Подсчёт результатов, объявление промежуточных и итоговых результатов, подготовка документов для прессы. Оргкомитет предоставляет судьям нужные сведения и помогает в их работе. В целом оргкомитет поддерживает тесную связь с Комитетом мужской художественной гимнастики и решает необходимые вопросы`,
          hi: `आयोजक संघ अपने द्वारा गठित आयोजन समिति के लिए भी पूरी जिम्मेदारी रखता है। आयोजक संघ प्रचार और आयोजन का पूरा खर्च वहन करता है। उसमें निम्नलिखित शामिल हैं।

1. आवश्यक पुस्तिकाओं और मुद्रित सामग्री की छपाई तथा प्रेषण

2. पदक और प्रमाणपत्रों की तैयारी

3. प्रतियोगिता स्थल और अभ्यास स्थल की व्यवस्था, अभ्यास और प्रतियोगिता के लिए पर्याप्त मात्रा में आधिकारिक उपकरणों की तैयारी

4. संगत संगीत के लिए आवश्यक ध्वनि उपकरणों की तैयारी

5. प्रतियोगिता के संचालन के लिए आवश्यक ध्वनि व्यवस्था की तैयारी

6. प्रतियोगिता के सुचारू संचालन के लिए, विशेष रूप से अंकों के प्रदर्शन और सूचना के लिए आवश्यक कर्मियों की व्यवस्था

7. गणना कार्य, प्रतियोगिता के दौरान के परिणामों और अंतिम परिणामों की घोषणा, प्रेस के लिए दस्तावेजों की तैयारी। आयोजन समिति निर्णायकों को आवश्यक जानकारी देती है और उनके कार्य में सहायता करती है। सामान्यतः आयोजन समिति पुरुष लयबद्ध जिम्नास्टिक समिति से निकट संपर्क बनाए रखती है और आवश्यक विषयों का निपटारा करती है`,
        },
      },
      {
        title: {
          ja: '出場の申し込み',
          en: 'Entries',
          zh: '参赛报名',
          ko: '출전 신청',
          es: 'Inscripción en la competición',
          fr: 'Engagements',
          ru: 'Заявки на участие',
          hi: 'भाग लेने का आवेदन',
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
          ko: `출전 신청은 정해진 시기에 본 협회 사무국에서 각 가맹 단체에 송부하는 양식, 또는 홈페이지에 게재된 양식에 따른다

1. 출전 신청은 본 협회 사무국에 소정의 신청 용지 1부를 지정된 기일까지 제출하여야 한다

2. 경기자 확정 명부의 작성에 있어서는 각 경기자의 등록 번호, 성명, 생년월일, 출신지 및 가맹 단체 소속 등록 회원임을 확인하여야 한다

3. 출전 신청서 제출 후에 선수 변경의 필요가 생긴 경우에는 서면으로 경기회 전날까지 조직 위원회에 제출하고 감독자 회의에서 확인한다. 다만 감독자 회의 이후에는 신청된 선수가 아니면 교체할 수 없다
`,
          es: `La inscripción se realiza en el formulario que la secretaría de la Federación envía a cada entidad miembro en la fecha establecida, o bien en el formulario publicado en la página web

1. Debe presentarse a la secretaría de la Federación un ejemplar del formulario de inscripción establecido antes de la fecha fijada

2. Al elaborar la lista definitiva de gimnastas deben comprobarse el número de registro, el nombre, la fecha de nacimiento y el lugar de procedencia de cada gimnasta, así como su condición de miembro inscrito en una entidad miembro

3. Si, una vez presentada la inscripción, resulta necesario cambiar a un gimnasta, el cambio debe presentarse por escrito al comité organizador, a más tardar el día anterior a la competición, y confirmarse en la reunión de entrenadores. No obstante, después de la reunión de entrenadores solo pueden sustituirse gimnastas que figuren en la inscripción
`,
          fr: `Les engagements se font au moyen du formulaire que le secrétariat de la Fédération adresse à chaque association membre à la date prévue, ou du formulaire publié sur le site Internet.

1. Un exemplaire du formulaire d'engagement prévu doit être remis au secrétariat de la Fédération avant la date limite fixée.

2. Lors de l'établissement de la liste définitive des gymnastes, il faut vérifier le numéro de licence, le nom, la date de naissance et la région d'origine de chaque gymnaste, ainsi que son affiliation à une association membre.

3. Si un changement de gymnaste devient nécessaire après le dépôt de l'engagement, il doit être transmis par écrit au comité d'organisation au plus tard la veille de la compétition et confirmé lors de la réunion des entraîneurs. Après cette réunion, seuls les gymnastes engagés peuvent être remplaçants.`,
          ru: `Заявки подаются по форме, которую секретариат Ассоциации рассылает организациям-членам в установленный срок, либо по форме, размещённой на сайте.

1. Один экземпляр установленной формы заявки должен быть подан в секретариат Ассоциации до назначенного срока.

2. При составлении окончательного списка гимнастов необходимо подтвердить регистрационный номер, имя, дату рождения и место происхождения каждого гимнаста, а также его членство в организации-члене.

3. Если после подачи заявки требуется заменить гимнаста, изменение подаётся в оргкомитет в письменном виде не позднее дня, предшествующего соревнованиям, и подтверждается на совещании представителей команд. После совещания представителей команд заменять можно только на гимнастов, указанных в заявке.`,
          hi: `भाग लेने का आवेदन, निर्धारित समय पर इस संघ के सचिवालय से प्रत्येक सदस्य संगठन को भेजे जाने वाले प्रपत्र, अथवा वेबसाइट पर प्रकाशित प्रपत्र के अनुसार होता है

1. भाग लेने के आवेदन के लिए, इस संघ के सचिवालय को निर्धारित आवेदन प्रपत्र की 1 प्रति निर्धारित तिथि तक प्रस्तुत करनी होगी

2. प्रतियोगियों की अंतिम नामावली तैयार करते समय, प्रत्येक प्रतियोगी का पंजीकरण संख्या, नाम, जन्म तिथि, जन्म स्थान तथा सदस्य संगठन का पंजीकृत सदस्य होना सुनिश्चित करना होगा

3. आवेदन प्रस्तुत करने के बाद जिम्नास्ट बदलने की आवश्यकता होने पर, प्रतियोगिता से एक दिन पहले तक लिखित रूप में आयोजन समिति को प्रस्तुत करना होगा और कोच बैठक में उसकी पुष्टि की जाएगी। परंतु कोच बैठक के बाद, केवल आवेदन किए गए जिम्नास्ट ही बदले जा सकते हैं`,
        },
      },
      {
        title: {
          ja: '規定演技の作成',
          en: 'Creation of Compulsory Routines',
          zh: '规定成套动作的编制',
          ko: '규정 연기의 작성',
          es: 'Elaboración de los ejercicios obligatorios',
          fr: 'Élaboration des exercices imposés',
          ru: 'Составление обязательных упражнений',
          hi: 'निर्धारित प्रदर्शन की रचना',
        },
        content: {
          ja: '規定演技の協議を開催する場合は男子新体操委員会で作成し、競技の１２か月前に、本協会公式用語によって正確に加盟団体に連絡しなければならない。解説の補助手段として、演技ビデオや、図解を作成することがあるが、その内容に問題のある場合には、男子新体操委員会の公式解説文または公式ビデオによるものとする。',
          en: "When a competition with compulsory routines is held, the routines are created by the Men's Rhythmic Gymnastics Committee and communicated precisely to the member organizations in the Association's official terminology 12 months before the competition. Videos or diagrams of the routines may be made as aids to the explanation; if their content is problematic, the official written explanation or the official video of the Men's Rhythmic Gymnastics Committee prevails.",
          zh: '举办规定成套动作的比赛时，由男子艺术体操委员会编制，并须在比赛的１２个月前，以本协会的正式用语准确地通知各加盟团体。作为讲解的辅助手段，可以制作成套动作的录像或图解，但其内容存在问题时，以男子艺术体操委员会的正式讲解文本或正式录像为准。',
          ko: '규정 연기의 경기를 개최하는 경우에는 남자 리듬체조 위원회에서 작성하고, 경기 12개월 전에 본 협회 공식 용어로 정확하게 가맹 단체에 통지하여야 한다. 해설의 보조 수단으로 연기 영상이나 도해를 작성하는 경우가 있으나, 그 내용에 문제가 있는 경우에는 남자 리듬체조 위원회의 공식 해설문 또는 공식 영상에 따른다.',
          es: 'Cuando se celebre una competición con ejercicios obligatorios, estos los elabora el Comité de Gimnasia Rítmica Masculina y deben comunicarse con exactitud a las entidades miembro, en la terminología oficial de la Federación, 12 meses antes de la competición. Como apoyo a la explicación pueden elaborarse vídeos o dibujos de los ejercicios; si su contenido plantea problemas, prevalecen el texto explicativo oficial o el vídeo oficial del Comité de Gimnasia Rítmica Masculina.',
          fr: "Lorsqu'une compétition comporte des exercices imposés, ceux-ci sont élaborés par la Commission de gymnastique rythmique masculine et communiqués avec précision aux associations membres, dans la terminologie officielle de la Fédération, douze mois avant la compétition. Des vidéos ou des schémas peuvent être réalisés pour aider à la compréhension ; en cas de difficulté sur leur contenu, le texte explicatif officiel ou la vidéo officielle de la Commission de gymnastique rythmique masculine fait foi.",
          ru: 'Если проводятся соревнования с обязательными упражнениями, эти упражнения составляет Комитет мужской художественной гимнастики и за 12 месяцев до соревнований точно сообщает их организациям-членам официальной терминологией Ассоциации. В помощь пояснениям могут выпускаться видеозаписи упражнений и схемы; если их содержание вызывает вопросы, решающими считаются официальное письменное пояснение или официальная видеозапись Комитета мужской художественной гимнастики.',
          hi: 'निर्धारित प्रदर्शन वाली प्रतियोगिता आयोजित करने पर, उसे पुरुष लयबद्ध जिम्नास्टिक समिति तैयार करती है और प्रतियोगिता से 12 माह पहले, इस संघ की आधिकारिक शब्दावली द्वारा सदस्य संगठनों को सटीक रूप से सूचित करना होगा। व्याख्या के सहायक साधन के रूप में प्रदर्शन का वीडियो या चित्र बनाए जा सकते हैं, परंतु उनकी विषय-वस्तु में समस्या होने पर पुरुष लयबद्ध जिम्नास्टिक समिति की आधिकारिक व्याख्या अथवा आधिकारिक वीडियो मान्य होगा।',
        },
      },
      {
        title: {
          ja: '競技規則及び採点規則に定めない事項',
          en: 'Matters Not Covered by the Competition Rules or the Code of Points',
          zh: '比赛规则及评分规则未作规定的事项',
          ko: '경기 규칙 및 채점 규칙에 정하지 않은 사항',
          es: 'Cuestiones no previstas en el reglamento de competición ni en el código de puntuación',
          fr: 'Questions non prévues par le règlement des compétitions ni par le code de pointage',
          ru: 'Вопросы, не предусмотренные Правилами соревнований и Правилами судейства',
          hi: 'प्रतियोगिता नियम तथा अंक निर्धारण नियम में निर्धारित न किए गए विषय',
        },
        content: {
          ja: '競技ならびに採点規則の定めない事項については、男子新体操委員会の責任者として服務する審判長と審判団がこれを決定し、それに対する抗議はできない。',
          en: "Matters not covered by the competition rules or the Code of Points are decided by the Jury President, who serves on behalf of the Men's Rhythmic Gymnastics Committee, together with the judging panel. No protest may be made against such decisions.",
          zh: '比赛及评分规则未作规定的事项，由作为男子艺术体操委员会负责人任职的裁判长与裁判组决定，对此不得提出申诉。',
          ko: '경기 및 채점 규칙에 정하지 않은 사항에 대하여는 남자 리듬체조 위원회의 책임자로서 복무하는 심판장과 심판진이 이를 결정하며, 그에 대한 항의는 할 수 없다.',
          es: 'Las cuestiones no previstas en el reglamento de competición ni en el código de puntuación las deciden el juez árbitro, que actúa como responsable del Comité de Gimnasia Rítmica Masculina, junto con el cuerpo de jueces, y contra esa decisión no cabe reclamación alguna.',
          fr: "Les questions non prévues par le règlement des compétitions ni par le code de pointage sont tranchées par le président du jury, qui agit au nom de la Commission de gymnastique rythmique masculine, avec le corps de juges. Ces décisions ne peuvent faire l'objet d'aucune réclamation.",
          ru: 'Вопросы, не предусмотренные Правилами соревнований и Правилами судейства, решают главный судья, действующий как ответственное лицо Комитета мужской художественной гимнастики, и судейская коллегия. Такие решения обжалованию не подлежат.',
          hi: 'प्रतियोगिता तथा अंक निर्धारण नियम में जिन विषयों का निर्धारण नहीं है, उन्हें पुरुष लयबद्ध जिम्नास्टिक समिति के उत्तरदायी के रूप में कार्यरत मुख्य निर्णायक तथा निर्णायक दल तय करते हैं, और उस पर आपत्ति नहीं की जा सकती।',
        },
      },
      {
        title: {
          ja: '旗・クラブ旗',
          en: 'Flags and Club Flags',
          zh: '旗、俱乐部旗',
          ko: '깃발 · 클럽 깃발',
          es: 'Banderas y banderas de club',
          fr: 'Drapeaux et fanions de club',
          ru: 'Флаги и клубные флаги',
          hi: 'झंडा, क्लब झंडा',
        },
        content: {
          ja: '部旗（クラブ旗）は１枚を限度とし、大きさは４m²以内とする。ただし、掲示する場所は組織委員会の指定するところとする。',
          en: 'Each team may display one team flag (club flag), no larger than 4 m². It must be displayed where the Organizing Committee designates.',
          zh: '部旗（俱乐部旗）以１面为限，大小在４m²以内。但悬挂的位置由组织委员会指定。',
          ko: '부 깃발(클럽 깃발)은 1장을 한도로 하고, 크기는 4m² 이내로 한다. 다만 게시하는 장소는 조직 위원회가 지정하는 곳으로 한다.',
          es: 'Se admite una sola bandera de sección (bandera de club), de un tamaño máximo de 4 m². El lugar en el que se coloque será el que designe el comité organizador.',
          fr: "Chaque équipe peut arborer un seul drapeau d'équipe (fanion de club), d'une surface maximale de 4 m². Il doit être installé à l'emplacement désigné par le comité d'organisation.",
          ru: 'Команда может вывесить не более одного командного (клубного) флага площадью не более 4 м². Место его размещения определяет оргкомитет.',
          hi: 'टीम का झंडा (क्लब झंडा) अधिकतम 1 ही होगा, और उसका आकार 4m² के भीतर होगा। परंतु उसे लगाने का स्थान आयोजन समिति द्वारा निर्धारित स्थान होगा।',
        },
      },
      {
        title: {
          ja: '審判団の選定',
          en: 'Selection of the Judging Panel',
          zh: '裁判组的选定',
          ko: '심판진의 선정',
          es: 'Selección del cuerpo de jueces',
          fr: 'Désignation du corps de juges',
          ru: 'Формирование судейской коллегии',
          hi: 'निर्णायक दल का चयन',
        },
        content: {
          ja: '本協会の組織する競技会では、審判団は（公財）日本体操協会の作成する公認名簿に記載のものから選定する。競技の審判長および採点規則に定める主任審判員は、男子新体操委員会で任命する。審判団の詳細は、第２章採点規則第6条による。',
          en: "At competitions organized by the Association, judges are selected from the official list prepared by the Japan Gymnastics Association. The Jury President and the chief judges defined in the Code of Points are appointed by the Men's Rhythmic Gymnastics Committee. Details of the judging panel are set out in Article 6 of Chapter 2, Code of Points.",
          zh: '在本协会组织的比赛会上，裁判组从（公财）日本体操协会编制的公认名册中选定。比赛的裁判长及评分规则所规定的主裁判员，由男子艺术体操委员会任命。裁判组的详细内容，依照第２章评分规则第6条。',
          ko: '본 협회가 조직하는 경기회에서는 심판진을 (공재) 일본체조협회가 작성하는 공인 명부에 기재된 사람 중에서 선정한다. 경기의 심판장 및 채점 규칙에 정하는 주임 심판원은 남자 리듬체조 위원회에서 임명한다. 심판진의 상세는 제2장 채점 규칙 제6조에 따른다.',
          es: 'En las competiciones organizadas por la Federación, el cuerpo de jueces se selecciona entre quienes figuran en la lista oficial elaborada por la Federación Japonesa de Gimnasia (fundación de interés público). El juez árbitro de la competición y los jueces principales previstos en el código de puntuación los nombra el Comité de Gimnasia Rítmica Masculina. Los detalles relativos al cuerpo de jueces figuran en el artículo 6 del capítulo 2, Código de puntuación.',
          fr: "Lors des compétitions organisées par la Fédération, les juges sont choisis parmi ceux qui figurent sur la liste officielle établie par la Fédération japonaise de gymnastique. Le président du jury et les juges-arbitres prévus par le code de pointage sont nommés par la Commission de gymnastique rythmique masculine. Le corps de juges est décrit en détail à l'article 6 du chapitre 2, code de pointage.",
          ru: 'На соревнованиях, организуемых Ассоциацией, судьи отбираются из официального списка, составленного Японской ассоциацией гимнастики. Главного судью соревнований и старших судей, предусмотренных Правилами судейства, назначает Комитет мужской художественной гимнастики. Подробности о судейской коллегии — в статье 6 главы 2 «Правила судейства».',
          hi: 'इस संघ द्वारा आयोजित प्रतियोगिताओं में, निर्णायक दल का चयन (सार्वजनिक हित निगमित फाउंडेशन) जापान जिम्नास्टिक संघ द्वारा तैयार की गई आधिकारिक नामावली में दर्ज लोगों में से किया जाता है। प्रतियोगिता के मुख्य निर्णायक तथा अंक निर्धारण नियम में निर्धारित प्रधान निर्णायक की नियुक्ति पुरुष लयबद्ध जिम्नास्टिक समिति करती है। निर्णायक दल का विवरण, अध्याय 2 अंक निर्धारण नियम के अनुच्छेद 6 के अनुसार है।',
        },
      },
      {
        title: {
          ja: '競技部長の任命',
          en: 'Appointment of the Competition Director',
          zh: '比赛部长的任命',
          ko: '경기부장의 임명',
          es: 'Nombramiento del director de competición',
          fr: 'Nomination du directeur de la compétition',
          ru: 'Назначение директора соревнований',
          hi: 'प्रतियोगिता विभाग प्रमुख की नियुक्ति',
        },
        content: {
          ja: '競技部長は、男子新体操委員会および組織委員会で協議の上にこれを任命し、審判長の指導のもとに競技場および記録部ならびに広報部における補佐員全部を監督指導する。会場係長は、競技部長と同様にしてこれを任命し、競技場、練習場の器械およびあらゆる施設の設備ならびに状態を監視する。',
          en: "The Competition Director is appointed after consultation between the Men's Rhythmic Gymnastics Committee and the Organizing Committee, and, under the direction of the Jury President, supervises all assistants in the competition hall, the records section and the public relations section. The Venue Manager is appointed in the same way as the Competition Director and oversees the equipment and all facilities of the competition and training halls and their condition.",
          zh: '比赛部长由男子艺术体操委员会与组织委员会协商后任命，并在裁判长的指导下，监督指导比赛场、记录部及宣传部的全体助理人员。场馆负责人与比赛部长以同样方式任命，负责监督比赛场、训练场的器械及各项设施的设备与状态。',
          ko: '경기부장은 남자 리듬체조 위원회 및 조직 위원회에서 협의한 후에 이를 임명하며, 심판장의 지도 아래 경기장 및 기록부와 홍보부의 보조원 전부를 감독 지도한다. 경기장 담당 책임자는 경기부장과 마찬가지로 이를 임명하며, 경기장과 연습장의 용구 및 모든 시설의 설비와 상태를 감시한다.',
          es: 'El director de competición se nombra previa consulta entre el Comité de Gimnasia Rítmica Masculina y el comité organizador y, bajo la dirección del juez árbitro, supervisa y dirige a todo el personal auxiliar del recinto de competición, del servicio de resultados y del servicio de prensa. El responsable de la sede se nombra del mismo modo que el director de competición y vigila el material y el estado de todas las instalaciones del recinto de competición y de la zona de entrenamiento.',
          fr: "Le directeur de la compétition est nommé après concertation entre la Commission de gymnastique rythmique masculine et le comité d'organisation ; sous l'autorité du président du jury, il encadre l'ensemble des assistants de la salle de compétition, du service des résultats et du service de presse. Le responsable de la salle est nommé de la même manière que le directeur de la compétition et veille au matériel et à l'état de toutes les installations des salles de compétition et d'échauffement.",
          ru: 'Директор соревнований назначается по согласованию между Комитетом мужской художественной гимнастики и оргкомитетом и под руководством главного судьи управляет работой всех помощников в соревновательном зале, в секретариате и в службе информации. Руководитель площадки назначается так же, как директор соревнований, и следит за инвентарём и всем оборудованием соревновательного и разминочного залов и за их состоянием.',
          hi: 'प्रतियोगिता विभाग प्रमुख की नियुक्ति पुरुष लयबद्ध जिम्नास्टिक समिति तथा आयोजन समिति के परामर्श के बाद की जाती है, और वह मुख्य निर्णायक के निर्देशन में प्रतियोगिता स्थल तथा अभिलेख विभाग और जनसंपर्क विभाग के सभी सहायकों का पर्यवेक्षण तथा मार्गदर्शन करता है। स्थल प्रभारी की नियुक्ति भी प्रतियोगिता विभाग प्रमुख की तरह ही की जाती है, और वह प्रतियोगिता स्थल तथा अभ्यास स्थल के उपकरणों और सभी सुविधाओं की व्यवस्था तथा स्थिति की निगरानी करता है।',
        },
      },
      {
        title: {
          ja: '審判団・競技部長・会場係長の責務',
          en: 'Duties of the Judging Panel, the Competition Director and the Venue Manager',
          zh: '裁判组、比赛部长、场馆负责人的职责',
          ko: '심판진 · 경기부장 · 경기장 담당 책임자의 책무',
          es: 'Funciones del cuerpo de jueces, del director de competición y del responsable de la sede',
          fr: 'Obligations du corps de juges, du directeur de la compétition et du responsable de la salle',
          ru: 'Обязанности судейской коллегии, директора соревнований и руководителя площадки',
          hi: 'निर्णायक दल, प्रतियोगिता विभाग प्रमुख तथा स्थल प्रभारी के दायित्व',
        },
        content: {
          ja: '審判長・審判員・競技部長および会場係長は、上記の職責に完全に専任し、いかなる名目をもってもチームを指導し、競技に参加し、また他の任務を受諾することはできない。審判長・審判員および当該監督者は、競技開始１時間前に競技場に集合し、競技の進行順序・臨時の変更などについて通知を受ける。',
          en: 'The Jury President, the judges, the Competition Director and the Venue Manager must devote themselves entirely to the duties above, and may not coach a team, take part in the competition or accept any other role under any pretext. The Jury President, the judges and the team managers concerned gather at the competition hall one hour before the start of the competition and are informed of the order of the competition and any temporary changes.',
          zh: '裁判长、裁判员、比赛部长及场馆负责人，必须完全专任上述职责，不得以任何名义指导队伍、参加比赛或接受其他任务。裁判长、裁判员及有关领队，应在比赛开始１小时前在比赛场集合，接受关于比赛进行顺序、临时变更等事项的通知。',
          ko: '심판장 · 심판원 · 경기부장 및 경기장 담당 책임자는 위의 직책에 완전히 전임하여야 하며, 어떠한 명목으로도 팀을 지도하거나 경기에 참가하거나 다른 임무를 수락할 수 없다. 심판장 · 심판원 및 해당 감독자는 경기 개시 1시간 전에 경기장에 집합하여 경기의 진행 순서 · 임시 변경 등에 대하여 통지를 받는다.',
          es: 'El juez árbitro, los jueces, el director de competición y el responsable de la sede deben dedicarse por completo a las funciones anteriores y no pueden, bajo ningún concepto, entrenar a un equipo, participar en la competición ni aceptar ningún otro cometido. El juez árbitro, los jueces y los entrenadores correspondientes se reúnen en el recinto de competición una hora antes del comienzo de la competición y reciben información sobre el orden de desarrollo y los cambios de última hora.',
          fr: "Le président du jury, les juges, le directeur de la compétition et le responsable de la salle se consacrent entièrement aux fonctions ci-dessus ; à aucun titre ils ne peuvent encadrer une équipe, participer à la compétition ni accepter une autre mission. Le président du jury, les juges et les entraîneurs concernés se réunissent dans la salle de compétition une heure avant le début de la compétition, où l'ordre de passage et les éventuelles modifications de dernière minute leur sont communiqués.",
          ru: 'Главный судья, судьи, директор соревнований и руководитель площадки должны полностью посвятить себя перечисленным обязанностям и ни под каким предлогом не могут тренировать команду, участвовать в соревнованиях или принимать на себя иные роли. Главный судья, судьи и соответствующие представители команд собираются в соревновательном зале за час до начала соревнований и получают сведения о порядке проведения и о временных изменениях.',
          hi: 'मुख्य निर्णायक, निर्णायक, प्रतियोगिता विभाग प्रमुख तथा स्थल प्रभारी उपर्युक्त दायित्वों के लिए पूर्णतः समर्पित रहेंगे, और किसी भी नाम से टीम का मार्गदर्शन नहीं कर सकते, प्रतियोगिता में भाग नहीं ले सकते, और न ही कोई अन्य कार्यभार स्वीकार कर सकते हैं। मुख्य निर्णायक, निर्णायक तथा संबंधित कोच, प्रतियोगिता शुरू होने से 1 घंटा पहले प्रतियोगिता स्थल पर एकत्र होते हैं और प्रतियोगिता के क्रम, अस्थायी परिवर्तन आदि की सूचना प्राप्त करते हैं।',
        },
      },
      {
        title: {
          ja: '裁定審判部の設置',
          en: 'Establishment of the Appeals Jury',
          zh: '裁定裁判部的设置',
          ko: '재정 심판부의 설치',
          es: 'Constitución del jurado de apelación',
          fr: "Constitution du jury d'appel",
          ru: 'Создание апелляционного жюри',
          hi: 'अपील निर्णायक विभाग की स्थापना',
        },
        content: {
          ja: '競技会は裁定審判部を設ける。裁定審判部は、競技会の期間およびその後に問題のある場合にこの処理にあたるもので、本協会会長または理事会の一役員・審判長・主任審判員および競技部長またはその代表者で構成する。',
          en: 'An Appeals Jury is set up for each competition. It deals with any problems that arise during or after the competition, and consists of the President of the Association or one officer of the Board of Directors, the Jury President, the chief judges, and the Competition Director or their representative.',
          zh: '比赛会设置裁定裁判部。裁定裁判部负责处理比赛会期间及其后出现的问题，由本协会会长或理事会的一名成员、裁判长、主裁判员及比赛部长或其代表组成。',
          ko: '경기회는 재정 심판부를 둔다. 재정 심판부는 경기회 기간 및 그 이후에 문제가 있는 경우에 이를 처리하는 곳으로, 본 협회 회장 또는 이사회의 한 임원 · 심판장 · 주임 심판원 및 경기부장 또는 그 대표자로 구성한다.',
          es: 'En cada competición se constituye un jurado de apelación. El jurado de apelación se ocupa de resolver los problemas que surjan durante la competición o después de ella y está formado por el presidente de la Federación o un miembro de su junta directiva, el juez árbitro, los jueces principales y el director de competición o su representante.',
          fr: "Un jury d'appel est constitué pour chaque compétition. Il traite les difficultés qui surviennent pendant la compétition ou après celle-ci et se compose du président de la Fédération ou d'un membre de son conseil d'administration, du président du jury, des juges-arbitres et du directeur de la compétition ou de son représentant.",
          ru: 'На соревнованиях создаётся апелляционное жюри. Оно разбирает вопросы, возникающие во время соревнований и после них, и состоит из президента Ассоциации либо одного из членов совета директоров, главного судьи, старших судей и директора соревнований либо его представителя.',
          hi: 'प्रतियोगिता में अपील निर्णायक विभाग की स्थापना की जाती है। अपील निर्णायक विभाग, प्रतियोगिता की अवधि में तथा उसके बाद समस्या होने पर उसका निपटारा करता है, और इसमें इस संघ के अध्यक्ष अथवा निदेशक मंडल का एक पदाधिकारी, मुख्य निर्णायक, प्रधान निर्णायक तथा प्रतियोगिता विभाग प्रमुख अथवा उसका प्रतिनिधि शामिल होते हैं।',
        },
      },
      {
        title: {
          ja: '裁定審判部の裁決',
          en: 'Decisions of the Appeals Jury',
          zh: '裁定裁判部的裁决',
          ko: '재정 심판부의 재결',
          es: 'Decisiones del jurado de apelación',
          fr: "Décisions du jury d'appel",
          ru: 'Решения апелляционного жюри',
          hi: 'अपील निर्णायक विभाग का निर्णय',
        },
        content: {
          ja: '審判団および裁定審判部の裁決は、決定的で変更することができない。ただし実質的過失のあった場合はこの限りではない。',
          en: 'Decisions of the judging panel and the Appeals Jury are final and cannot be changed, except in the case of a material error.',
          zh: '裁判组及裁定裁判部的裁决是最终的，不得变更。但存在实质性过失的情况除外。',
          ko: '심판진 및 재정 심판부의 재결은 결정적이며 변경할 수 없다. 다만 실질적 과실이 있었던 경우에는 그러하지 아니하다.',
          es: 'Las decisiones del cuerpo de jueces y del jurado de apelación son definitivas e inmodificables. No obstante, no será así cuando se haya producido un error material.',
          fr: "Les décisions du corps de juges et du jury d'appel sont définitives et ne peuvent être modifiées, sauf en cas d'erreur matérielle.",
          ru: 'Решения судейской коллегии и апелляционного жюри окончательны и изменению не подлежат, за исключением случаев существенной ошибки.',
          hi: 'निर्णायक दल तथा अपील निर्णायक विभाग के निर्णय अंतिम होते हैं और उन्हें बदला नहीं जा सकता। परंतु वास्तविक त्रुटि होने पर ऐसा नहीं है।',
        },
      },
      {
        title: {
          ja: '決定点の公開',
          en: 'Display of Final Scores',
          zh: '最后得分的公开',
          ko: '최종 점수의 공개',
          es: 'Publicación de las notas finales',
          fr: 'Affichage des notes finales',
          ru: 'Показ итоговых оценок',
          hi: 'अंतिम अंक का प्रदर्शन',
        },
        content: {
          ja: '組織委員会は、決定点を公衆および競技者に示し得る装置を設置する。競技における、すべての採点に関する問題、特に審判団の編成・主任審判員の任務・演技採点・当初および途中の審判員の競技については、採点規則の示すところによる。',
          en: 'The Organizing Committee installs equipment that can show the final scores to the public and the gymnasts. All matters concerning scoring at the competition, especially the composition of the judging panel, the duties of the chief judges, the scoring of routines, and the judges at the start and during the competition, follow the Code of Points.',
          zh: '组织委员会应设置能够向观众和参赛者显示最后得分的装置。比赛中所有与评分有关的问题，特别是裁判组的编成、主裁判员的职务、成套动作的评分、开始时及比赛过程中裁判员的相关事项，均依照评分规则。',
          ko: '조직 위원회는 최종 점수를 공중 및 경기자에게 보일 수 있는 장치를 설치한다. 경기에서의 모든 채점에 관한 문제, 특히 심판진의 편성 · 주임 심판원의 임무 · 연기 채점 · 최초 및 도중의 심판원의 경기에 대하여는 채점 규칙이 정하는 바에 따른다.',
          es: 'El comité organizador instala un dispositivo que permita mostrar la nota final al público y a los gimnastas. Todas las cuestiones relativas a la puntuación en la competición, en especial la composición del cuerpo de jueces, las funciones de los jueces principales, la puntuación de los ejercicios y la actuación de los jueces al comienzo y a lo largo de la competición, se rigen por lo dispuesto en el código de puntuación.',
          fr: "Le comité d'organisation installe un dispositif permettant d'afficher les notes finales au public et aux gymnastes. Toutes les questions de notation relatives à la compétition, en particulier la composition du corps de juges, les fonctions des juges-arbitres, la notation des exercices et la situation des juges au début et au cours de la compétition, sont régies par le code de pointage.",
          ru: 'Оргкомитет устанавливает оборудование, позволяющее показывать итоговые оценки зрителям и гимнастам. Все вопросы судейства на соревнованиях, прежде всего состав судейской коллегии, обязанности старших судей, оценка упражнений, а также работа судей в начале и по ходу соревнований, решаются согласно Правилам судейства.',
          hi: 'आयोजन समिति, अंतिम अंक को दर्शकों तथा प्रतियोगियों को दिखा सकने वाला उपकरण स्थापित करती है। प्रतियोगिता में, अंक निर्धारण से संबंधित सभी विषय, विशेष रूप से निर्णायक दल का गठन, प्रधान निर्णायक का कार्य, प्रदर्शन का अंक निर्धारण, प्रारंभ में तथा बीच में निर्णायकों की प्रतियोगिता, अंक निर्धारण नियम के अनुसार होंगे।',
        },
      },
      {
        title: {
          ja: '音響設備の準備',
          en: 'Preparation of Audio Equipment',
          zh: '音响设备的准备',
          ko: '음향 설비의 준비',
          es: 'Preparación del equipo de sonido',
          fr: 'Préparation du matériel audio',
          ru: 'Подготовка звуковой аппаратуры',
          hi: 'ध्वनि व्यवस्था की तैयारी',
        },
        content: {
          ja: '組織委員会は伴奏音楽を使用するための音響機器を準備しなければならない。',
          en: 'The Organizing Committee must prepare audio equipment for playing the accompanying music.',
          zh: '组织委员会必须准备用于播放伴奏音乐的音响设备。',
          ko: '조직 위원회는 반주 음악을 사용하기 위한 음향 기기를 준비하여야 한다.',
          es: 'El comité organizador debe preparar el equipo de sonido necesario para reproducir la música de acompañamiento.',
          fr: "Le comité d'organisation doit mettre à disposition le matériel audio permettant de diffuser les musiques d'accompagnement.",
          ru: 'Оргкомитет обязан подготовить звуковую аппаратуру для воспроизведения музыкального сопровождения.',
          hi: 'आयोजन समिति को संगत संगीत के उपयोग के लिए ध्वनि उपकरण तैयार करने होंगे।',
        },
      },
      {
        title: {
          ja: '審判会議および監督会議の開催',
          en: "Judges' Meeting and Team Managers' Meeting",
          zh: '裁判会议及领队会议的召开',
          ko: '심판 회의 및 감독 회의의 개최',
          es: 'Celebración de la reunión de jueces y de la reunión de entrenadores',
          fr: 'Réunion des juges et réunion des entraîneurs',
          ru: 'Совещание судей и совещание представителей команд',
          hi: 'निर्णायक बैठक तथा कोच बैठक का आयोजन',
        },
        content: {
          ja: '組織委員会は、競技会の前日または前々日に審判会議と監督者会議を行う。この会議では、あらかじめ抽選で決定された出場チームおよび個人の演技順を承認し、競技会の順調な進行に関する最終の指示を与える。',
          en: "The Organizing Committee holds a judges' meeting and a team managers' meeting the day before or two days before the competition. At these meetings, the order of performance of the teams and individuals, decided in advance by draw, is approved, and final instructions for the smooth running of the competition are given.",
          zh: '组织委员会在比赛会的前一日或前两日召开裁判会议和领队会议。会议上，承认事先通过抽签确定的参赛队伍及个人的出场顺序，并就比赛会的顺利进行给予最终指示。',
          ko: '조직 위원회는 경기회 전날 또는 그 전전날에 심판 회의와 감독자 회의를 실시한다. 이 회의에서는 미리 추첨으로 정해진 출전 팀 및 개인의 연기 순서를 승인하고, 경기회의 원활한 진행에 관한 최종 지시를 내린다.',
          es: 'El comité organizador celebra la reunión de jueces y la reunión de entrenadores el día anterior o dos días antes de la competición. En estas reuniones se aprueba el orden de actuación de los equipos participantes y de los gimnastas individuales, determinado previamente por sorteo, y se dan las últimas instrucciones para el buen desarrollo de la competición.',
          fr: "Le comité d'organisation tient une réunion des juges et une réunion des entraîneurs la veille ou l'avant-veille de la compétition. Ces réunions valident l'ordre de passage des équipes et des individuels, établi au préalable par tirage au sort, et donnent les dernières consignes pour le bon déroulement de la compétition.",
          ru: 'Оргкомитет проводит совещание судей и совещание представителей команд за день или за два дня до соревнований. На этих совещаниях утверждается определённый заранее жеребьёвкой порядок выступления команд и отдельных гимнастов и даются последние указания для бесперебойного хода соревнований.',
          hi: 'आयोजन समिति, प्रतियोगिता से एक दिन पहले अथवा दो दिन पहले निर्णायक बैठक और कोच बैठक करती है। इस बैठक में, पहले से ड्रॉ द्वारा तय किए गए भाग लेने वाली टीमों तथा व्यक्तिगत के प्रदर्शन क्रम को स्वीकृति दी जाती है, और प्रतियोगिता के सुचारू संचालन के संबंध में अंतिम निर्देश दिए जाते हैं।',
        },
      },
      {
        title: {
          ja: '採点表の写しと全記録',
          en: 'Copies of Score Sheets and Complete Records',
          zh: '评分表副本与全部记录',
          ko: '채점표의 사본과 전 기록',
          es: 'Copias de la hoja de puntuación y registro completo',
          fr: 'Copies des feuilles de notes et archives complètes',
          ru: 'Копии оценочных листов и полные протоколы',
          hi: 'अंक तालिका की प्रति तथा संपूर्ण अभिलेख',
        },
        content: {
          ja: '採点表の写しは、できるだけ各演技実施の直後に各チームに交付する。各チームには競技会の終わりに、決定成績表の一部を授与する。成績は逐次競技中に公表し、決定成績は競技終了後に公表する。全記録の副本は、これを本協会の文庫に納める。',
          en: "Copies of the score sheets are given to each team as soon as possible after each routine. At the end of the competition, each team receives a copy of the final results. Results are announced progressively during the competition, and the final results are announced after the competition ends. A duplicate of the complete records is kept in the Association's archives.",
          zh: '评分表的副本，尽可能在每套动作完成后立即交给各队。各队在比赛会结束时获得一份最后成绩表。成绩在比赛过程中陆续公布，最后成绩在比赛结束后公布。全部记录的副本存入本协会的资料库。',
          ko: '채점표의 사본은 가능한 한 각 연기 실시 직후에 각 팀에 교부한다. 각 팀에는 경기회가 끝날 때 최종 성적표의 일부를 교부한다. 성적은 경기 중에 차례로 공표하고, 최종 성적은 경기 종료 후에 공표한다. 전 기록의 부본은 이를 본 협회의 문고에 보관한다.',
          es: 'Las copias de la hoja de puntuación se entregan a cada equipo, en la medida de lo posible, inmediatamente después de cada ejercicio. Al terminar la competición, cada equipo recibe un ejemplar de la clasificación definitiva. Los resultados se hacen públicos de forma sucesiva durante la competición y los resultados definitivos, una vez finalizada. Una copia del registro completo se deposita en el archivo de la Federación.',
          fr: "Une copie des feuilles de notes est remise à chaque équipe le plus tôt possible après chaque exercice. À l'issue de la compétition, chaque équipe reçoit un exemplaire des résultats définitifs. Les résultats sont publiés au fur et à mesure pendant la compétition, et les résultats définitifs après la fin de celle-ci. Un double des archives complètes est déposé aux archives de la Fédération.",
          ru: 'Копии оценочных листов передаются каждой команде по возможности сразу после исполнения упражнения. По окончании соревнований каждая команда получает экземпляр итоговой таблицы результатов. Результаты объявляются по ходу соревнований, итоговые — после их завершения. Второй экземпляр полных протоколов хранится в архиве Ассоциации.',
          hi: 'अंक तालिका की प्रति, यथासंभव प्रत्येक प्रदर्शन के तुरंत बाद प्रत्येक टीम को दी जाती है। प्रत्येक टीम को प्रतियोगिता के अंत में, अंतिम परिणाम तालिका की एक प्रति दी जाती है। परिणाम प्रतियोगिता के दौरान क्रमशः घोषित किए जाते हैं, और अंतिम परिणाम प्रतियोगिता समाप्त होने के बाद घोषित किए जाते हैं। संपूर्ण अभिलेख की प्रतिलिपि इस संघ के संग्रह में रखी जाती है।',
        },
      },
      {
        title: {
          ja: '競技会場と演技面',
          en: 'Competition Hall and Floor Area',
          zh: '比赛场馆与场地',
          ko: '경기 회장과 연기 면',
          es: 'Recinto de competición y practicable',
          fr: 'Salle de compétition et praticable',
          ru: 'Соревновательный зал и ковёр',
          hi: 'प्रतियोगिता स्थल और फ़्लोर',
        },
        content: {
          ja: '競技場は、約50m×30mの面積を競技エリアとし、最低12m以上の高さがなければならない。競技エリアには競技関係者以外の立ち入りを禁止する。演技面は内側13m×13mとする。その周りには２m以上の安全地帯を設ける。なお、演技代を設ける場合の安全地帯は３m以上とする。演技面を２面（男女）設置する場合は、その間の距離を４m以上とする。審判の位置は演技面より４m以上離れた場所に設置する。',
          en: "The competition hall must have a competition area of about 50 m × 30 m and a height of at least 12 m. Only people involved in the competition may enter the competition area. The floor area is 13 m × 13 m (inside measurement), surrounded by a safety zone of at least 2 m. If a podium is used, the safety zone must be at least 3 m. If two floor areas (men's and women's) are set up, they must be at least 4 m apart. The judges are seated at least 4 m from the floor area.",
          zh: '比赛场以约50m×30m的面积作为比赛区域，高度必须在12m以上。比赛区域禁止比赛相关人员以外的人进入。场地为内侧13m×13m。其周围设置２m以上的安全地带。另外，设置比赛台时，安全地带为３m以上。设置２块场地（男女）时，其间距离为４m以上。裁判的位置设在距场地４m以上的地方。',
          ko: '경기장은 약 50m×30m의 면적을 경기 구역으로 하고, 최저 12m 이상의 높이가 있어야 한다. 경기 구역에는 경기 관계자 이외의 출입을 금지한다. 연기 면은 안쪽 13m×13m로 한다. 그 주위에는 2m 이상의 안전 지대를 둔다. 또한 연기대를 설치하는 경우의 안전 지대는 3m 이상으로 한다. 연기 면을 2면(남녀) 설치하는 경우에는 그 사이의 거리를 4m 이상으로 한다. 심판의 위치는 연기 면에서 4m 이상 떨어진 곳에 설치한다.',
          es: 'El recinto de competición debe contar con un área de competición de unos 50 m × 30 m y una altura mínima de 12 m. Se prohíbe el acceso al área de competición a toda persona ajena a la competición. El practicable mide 13 m × 13 m por el interior. A su alrededor se dispone una zona de seguridad de 2 m como mínimo. Cuando se instale una tarima, la zona de seguridad será de 3 m como mínimo. Si se instalan dos practicables (masculino y femenino), la distancia entre ambos será de 4 m como mínimo. Los jueces se sitúan a 4 m como mínimo del practicable.',
          fr: "La salle de compétition doit offrir une aire de compétition d'environ 50 m × 30 m et une hauteur d'au moins 12 m. L'accès à l'aire de compétition est réservé aux personnes participant à la compétition. Le praticable mesure 13 m × 13 m (mesure intérieure) et est entouré d'une zone de sécurité d'au moins 2 m. Si un podium est utilisé, la zone de sécurité doit être d'au moins 3 m. Lorsque deux praticables (hommes et femmes) sont installés, ils doivent être distants d'au moins 4 m. Les juges sont placés à au moins 4 m du praticable.",
          ru: 'Соревновательная зона в зале должна занимать около 50 м × 30 м при высоте не менее 12 м. Вход в соревновательную зону посторонним запрещён. Ковёр имеет размеры 13 м × 13 м по внутреннему краю. Вокруг него предусматривается зона безопасности шириной не менее 2 м; если используется помост, зона безопасности должна быть не менее 3 м. Если устанавливаются два ковра (мужской и женский), расстояние между ними должно быть не менее 4 м. Места судей располагаются не ближе 4 м от ковра.',
          hi: 'प्रतियोगिता स्थल में लगभग 50m×30m का क्षेत्रफल प्रतियोगिता क्षेत्र होगा, और कम से कम 12m से अधिक ऊँचाई होनी चाहिए। प्रतियोगिता क्षेत्र में प्रतियोगिता से जुड़े लोगों के अतिरिक्त किसी का प्रवेश वर्जित है। फ़्लोर भीतर से 13m×13m होगा। उसके चारों ओर 2m से अधिक का सुरक्षा क्षेत्र रखा जाएगा। इसके अतिरिक्त, मंच बनाने पर सुरक्षा क्षेत्र 3m से अधिक होगा। फ़्लोर 2 (पुरुष और महिला) बनाए जाने पर, उनके बीच की दूरी 4m से अधिक होगी। निर्णायकों का स्थान फ़्लोर से 4m से अधिक दूरी पर रखा जाएगा।',
        },
      },
      {
        title: {
          ja: '器械器具の準備',
          en: 'Preparation of Equipment',
          zh: '器械用具的准备',
          ko: '용구의 준비',
          es: 'Preparación del material',
          fr: 'Mise à disposition du matériel',
          ru: 'Подготовка инвентаря',
          hi: 'उपकरणों की तैयारी',
        },
        content: {
          ja: 'すべての器械器具は、組織委員会がこれを準備する。組織委員会は器械器具認定規則および男子新体操委員会の与える指示に従わなければならない。',
          en: "All equipment is prepared by the Organizing Committee, which must follow the equipment certification rules and the instructions of the Men's Rhythmic Gymnastics Committee.",
          zh: '所有器械用具均由组织委员会准备。组织委员会必须遵守器械用具认定规则及男子艺术体操委员会给予的指示。',
          ko: '모든 용구는 조직 위원회가 이를 준비한다. 조직 위원회는 용구 인정 규칙 및 남자 리듬체조 위원회가 주는 지시에 따라야 한다.',
          es: 'Todo el material lo prepara el comité organizador, que debe atenerse al reglamento de homologación del material y a las instrucciones del Comité de Gimnasia Rítmica Masculina.',
          fr: "L'ensemble du matériel est mis à disposition par le comité d'organisation, qui doit se conformer au règlement d'homologation du matériel et aux consignes de la Commission de gymnastique rythmique masculine.",
          ru: 'Весь инвентарь готовит оргкомитет. Оргкомитет обязан соблюдать правила сертификации инвентаря и указания Комитета мужской художественной гимнастики.',
          hi: 'सभी उपकरण आयोजन समिति तैयार करती है। आयोजन समिति को उपकरण प्रमाणन नियम तथा पुरुष लयबद्ध जिम्नास्टिक समिति द्वारा दिए गए निर्देशों का पालन करना होगा।',
        },
      },
    ],
  },
]
