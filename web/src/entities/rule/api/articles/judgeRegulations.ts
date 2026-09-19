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
      ko: '공인 심판원 규칙',
      es: 'Reglamento de los jueces oficiales',
      fr: 'Règlement des juges officiels',
      ru: 'Положение об аттестованных судьях',
      hi: 'प्रमाणित निर्णायकों के लिए नियम',
    },
    section: [
      {
        title: {
          ja: '趣旨',
          en: 'Purpose',
          zh: '宗旨',
          ko: '취지',
          es: 'Objeto',
          fr: 'Objet',
          ru: 'Назначение',
          hi: 'उद्देश्य',
        },
        content: {
          ja: 'この規定は、公認審判員に関する事項について定める。',
          en: 'These regulations set out matters concerning certified judges.',
          zh: '本规定对有关公认裁判员的事项作出规定。',
          ko: '이 규정은 공인 심판원에 관한 사항에 대하여 정한다.',
          es: 'Este reglamento establece las disposiciones relativas a los jueces oficiales.',
          fr: 'Le présent règlement fixe les dispositions relatives aux juges officiels.',
          ru: 'Настоящее положение определяет вопросы, связанные с аттестованными судьями.',
          hi: 'यह नियमावली प्रमाणित निर्णायकों से संबंधित विषय निर्धारित करती है।',
        },
      },
      {
        title: {
          ja: '公認審判員の任務と区別',
          en: 'Duties and Categories of Certified Judges',
          zh: '公认裁判员的任务与分类',
          ko: '공인 심판원의 임무와 구분',
          es: 'Funciones y categorías de los jueces oficiales',
          fr: 'Fonctions et catégories des juges officiels',
          ru: 'Обязанности и категории аттестованных судей',
          hi: 'प्रमाणित निर्णायकों के कर्तव्य और श्रेणियाँ',
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
          ko: `공인 심판원은 체조 경기와 리듬체조의 남자 및 여자 4개 경기 종별마다 다음 4종류로 한다.
1. 제3종 공인 심판원(이하 3종이라 한다)은 지역·도도부현 선수권 대회 및 이에 준하는 경기회의 심판을 할 수 있다.
2. 제2종 공인 심판원(이하 2종이라 한다)은 도도부현 블록 대회, 서일본 대회, 동일본 대회 및 이에 준하는 경기회의 심판을 할 수 있다.
3. 다만 특별한 사정이 있는 경우에는 대회 책임자의 승낙을 받아 전국 대회 수준의 대회에서도 심판을 할 수 있다.
4. 제1종 공인 심판원(이하 1종이라 한다)은 전국 수준 대회, 전일본 학생 선수권 대회, 전국 고교 선수권 대회, 국민 체육 대회 및 그 밖의 모든 국내 대회의 심판을 할 수 있다.
5. 명예 심판원(이하 명예라 한다)은 각종 경기회의 심판 의무를 지지 않는다.
6. (1)~(3)의 선심·계시 심판에 대해서는 어느 하나의 심판 자격을 가진 자로 한다.`,
          es: `Los jueces oficiales se dividen en las cuatro categorías siguientes para cada una de las cuatro modalidades: gimnasia artística y gimnasia rítmica, masculina y femenina.
1. El juez oficial de 3.ª categoría (en adelante, «3.ª categoría») puede juzgar los campeonatos comarcales y de prefectura y las competiciones similares.
2. El juez oficial de 2.ª categoría (en adelante, «2.ª categoría») puede juzgar las competiciones de bloque de prefecturas, las competiciones del Oeste de Japón y del Este de Japón y las competiciones similares.
3. No obstante, en circunstancias especiales y con la autorización del responsable de la competición, puede juzgar competiciones de nivel nacional.
4. El juez oficial de 1.ª categoría (en adelante, «1.ª categoría») puede juzgar las competiciones de nivel nacional, el Campeonato Universitario de Japón, el Campeonato Nacional de Enseñanza Secundaria Superior, el Festival Deportivo Nacional de Japón y todas las demás competiciones nacionales.
5. El juez de honor (en adelante, «honor») no tiene la obligación de juzgar ninguna competición.
6. Los jueces de línea y los cronometradores de los apartados (1) a (3) deben poseer alguna de estas titulaciones de juez.`,
          fr: `Les juges officiels se répartissent en quatre catégories, pour chacune des quatre disciplines : gymnastique artistique masculine et féminine, gymnastique rythmique masculine et féminine.
1. Les juges officiels de 3e catégorie (ci-après « 3e catégorie ») peuvent juger les championnats de district et de préfecture ainsi que les compétitions de même niveau.
2. Les juges officiels de 2e catégorie (ci-après « 2e catégorie ») peuvent juger les compétitions interpréfectorales, les Championnats de l'Ouest et de l'Est du Japon ainsi que les compétitions de même niveau.
3. Dans des circonstances particulières, avec l'accord du responsable de la compétition, ils peuvent également juger des compétitions de niveau national.
4. Les juges officiels de 1re catégorie (ci-après « 1re catégorie ») peuvent juger les compétitions de niveau national, les Championnats universitaires du Japon, les Championnats nationaux des lycées, les Jeux nationaux du Japon et toutes les autres compétitions nationales.
5. Les juges honoraires (ci-après « honoraires ») ne jugent pas de compétition.
6. Les juges de ligne et les chronométreurs doivent détenir l'une des qualifications mentionnées aux points 1 à 3.`,
          ru: `Аттестованные судьи делятся на четыре категории по каждой из четырёх дисциплин: спортивная гимнастика мужская и женская, художественная гимнастика мужская и женская.
1. Аттестованный судья 3-й категории (далее — 3-я категория) может судить окружные и префектурные чемпионаты и подобные им соревнования.
2. Аттестованный судья 2-й категории (далее — 2-я категория) может судить межпрефектурные соревнования, чемпионаты Западной и Восточной Японии и подобные им соревнования.
3. При этом в особых обстоятельствах с согласия ответственного за соревнования он может судить и соревнования всеяпонского уровня.
4. Аттестованный судья 1-й категории (далее — 1-я категория) может судить соревнования всеяпонского уровня, всеяпонский студенческий чемпионат, всеяпонский чемпионат среди старших школ, Национальный спортивный фестиваль и все прочие внутренние соревнования.
5. Почётный судья (далее — почётный) не обязан судить соревнования.
6. Линейные судьи и судьи-хронометристы, указанные в пунктах (1)–(3), должны иметь одну из судейских квалификаций.`,
          hi: `प्रमाणित निर्णायक, आर्टिस्टिक जिम्नास्टिक तथा लयबद्ध जिम्नास्टिक के पुरुष और महिला, इन 4 प्रतियोगिता वर्गों में से प्रत्येक के लिए निम्नलिखित 4 प्रकार के होते हैं।
1. श्रेणी 3 के प्रमाणित निर्णायक (आगे श्रेणी 3) क्षेत्रीय तथा प्रीफ़ेक्चर चैंपियनशिप और इनके समान प्रतियोगिताओं में निर्णय कर सकते हैं।
2. श्रेणी 2 के प्रमाणित निर्णायक (आगे श्रेणी 2) कई प्रीफ़ेक्चरों की ब्लॉक प्रतियोगिता, पश्चिमी जापान तथा पूर्वी जापान प्रतियोगिता और इनके समान प्रतियोगिताओं में निर्णय कर सकते हैं।
3. किंतु विशेष परिस्थिति होने पर, प्रतियोगिता के उत्तरदायी व्यक्ति की सहमति से, राष्ट्रीय स्तर की प्रतियोगिता में भी निर्णय कर सकते हैं।
4. श्रेणी 1 के प्रमाणित निर्णायक (आगे श्रेणी 1) राष्ट्रीय स्तर की प्रतियोगिता, ऑल जापान विद्यार्थी चैंपियनशिप, राष्ट्रीय हाई स्कूल चैंपियनशिप, राष्ट्रीय खेल उत्सव तथा अन्य सभी घरेलू प्रतियोगिताओं में निर्णय कर सकते हैं।
5. मानद निर्णायक (आगे मानद) विभिन्न प्रतियोगिताओं में निर्णय का कर्तव्य नहीं निभाते।
6. (1) – (3) के लाइन निर्णायक तथा समयपाल के लिए, इनमें से कोई एक निर्णायक योग्यता होनी चाहिए।`,
        },
      },
      {
        title: {
          ja: '認定の権限',
          en: 'Authority for Certification',
          zh: '认定的权限',
          ko: '인정의 권한',
          es: 'Competencia para la acreditación',
          fr: 'Compétence en matière de qualification',
          ru: 'Полномочия по аттестации',
          hi: 'प्रमाणन का अधिकार',
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
          ko: `공인 심판원의 인정은 다음과 같이 한다.
1. 인정 및 계속 심사에 관한 업무는 남자 리듬체조 위원회가 실시하고 회장이 이를 인정한다. 3종 및 2종의 인정 심사는 가맹 단체가 실시한다. 다만 인정과 계속의 신청은 도도부현 체조협회를 거쳐서 실시한다.
2. 남자 리듬체조 위원회는 이러한 업무 수행을 위하여 전문 위원 약간 명을 선임한다.`,
          es: `La acreditación de los jueces oficiales se realiza del modo siguiente.
1. Las tareas relativas a la evaluación para la acreditación y para su renovación las lleva a cabo el Comité de Gimnasia Rítmica Masculina, y el presidente concede la acreditación. La evaluación para la acreditación de 3.ª y 2.ª categoría la llevan a cabo las organizaciones afiliadas. No obstante, las solicitudes de acreditación y de renovación se tramitan a través de las federaciones de gimnasia de cada prefectura.
2. Para desempeñar estas tareas, el Comité de Gimnasia Rítmica Masculina designa a un número reducido de vocales especializados.`,
          fr: `Les juges officiels sont qualifiés comme suit.
1. L'examen des dossiers de qualification et de renouvellement est assuré par la Commission de gymnastique rythmique masculine, et le président prononce la qualification. L'examen des dossiers de 3e et de 2e catégorie est assuré par les associations membres. Les demandes de qualification et de renouvellement sont transmises par l'intermédiaire des associations préfectorales de gymnastique.
2. Pour mener à bien ces travaux, la Commission de gymnastique rythmique masculine désigne quelques membres experts.`,
          ru: `Аттестация судей проводится так.
1. Проверку при аттестации и продлении проводит Комитет мужской художественной гимнастики, а аттестует президент. Проверку для 3-й и 2-й категорий проводят организации-члены. При этом заявления об аттестации и продлении подаются через префектурные ассоциации гимнастики.
2. Для выполнения этой работы Комитет мужской художественной гимнастики назначает нескольких профильных специалистов.`,
          hi: `प्रमाणित निर्णायकों का प्रमाणन निम्नलिखित रूप में होता है।
1. प्रमाणन तथा नवीनीकरण की जाँच से जुड़ा कार्य पुरुष लयबद्ध जिम्नास्टिक समिति करती है, और अध्यक्ष इसे प्रमाणित करते हैं। श्रेणी 3 तथा श्रेणी 2 के प्रमाणन की जाँच सदस्य संगठन करते हैं। किंतु प्रमाणन तथा नवीनीकरण का आवेदन प्रीफ़ेक्चर जिम्नास्टिक संघ के माध्यम से किया जाता है।
2. इन कार्यों को पूरा करने के लिए पुरुष लयबद्ध जिम्नास्टिक समिति कुछ विशेषज्ञ सदस्यों का चयन करती है।`,
        },
      },
      {
        title: {
          ja: '受験・名誉資格',
          en: 'Eligibility and Honorary Status',
          zh: '报考资格与荣誉资格',
          ko: '응시·명예 자격',
          es: 'Requisitos para el examen y para el título de honor',
          fr: "Conditions d'accès à l'examen et statut honoraire",
          ru: 'Допуск к экзамену и почётное звание',
          hi: 'परीक्षा तथा मानद योग्यता',
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
          ko: `공인 심판원의 응시 자격 및 명예 자격은 다음과 같이 한다.
1. 3종은 경기 경력을 가지고 해당 연도에 만 16세 이상인 자.
2. 2종은 만 18세 이상으로 3종 취득 연도로부터 1년 이상 지난 자이며, 공식 경기회에서 1회 이상 심판 실무를 한 자.
3. 1종은 해당 연도에 만 20세 이상으로 다음 중 어느 하나에 해당하는 자. 또는 이에 상당하는 자격을 가맹 단체가 인정하여 추천한 자.
  a. 2종 자격을 취득하고 도도부현 또는 그 이상의 공식 경기회에서 2회 이상 심판 실무 경험을 가진 자.
  b. 국제 대회가 개최된 경우 대표 선수였던 자로서 대회에 추천된 자.
4. 명예는 2종과 1종의 자격을 통틀어 20년 이상 보유하고 해당 연도에 만 45세 이상인 자로서, 가맹 단체가 인정하여 본 협회에 신청한 자.
5. 국제 심판원 자격을 취득하는 경우에는 본 협회가 인정하는 1종 자격을 취득하고 본 협회에서 추천된 자이어야 한다.`,
          es: `Los requisitos para presentarse al examen de juez oficial y para obtener el título de honor son los siguientes.
1. Para la 3.ª categoría: haber competido y haber cumplido 16 años en el año correspondiente.
2. Para la 2.ª categoría: haber cumplido 18 años, haber transcurrido al menos 1 año desde el ejercicio en que se obtuvo la 3.ª categoría y haber juzgado al menos 1 vez en una competición oficial.
3. Para la 1.ª categoría: haber cumplido 20 años en el año correspondiente y cumplir alguna de las condiciones siguientes; o bien que una organización afiliada reconozca una titulación equivalente y proponga a la persona.
 a. Haber obtenido la 2.ª categoría y haber juzgado al menos 2 veces en competiciones oficiales de ámbito de prefectura o superior.
 b. Haber sido seleccionado nacional cuando se haya celebrado una competición internacional y haber sido propuesto para esa competición.
4. Para el título de honor: haber poseído de forma continuada la 2.ª y la 1.ª categoría durante 20 años o más, haber cumplido 45 años en el año correspondiente y haber sido reconocido por una organización afiliada, que lo solicita a la Federación.
5. Para obtener la titulación de juez internacional hay que poseer la 1.ª categoría acreditada por la Federación y ser propuesto por esta.`,
          fr: `Les conditions d'accès à l'examen et au statut honoraire sont les suivantes.
1. 3e catégorie : personnes ayant une expérience de la compétition et âgées d'au moins 16 ans dans l'année concernée.
2. 2e catégorie : personnes âgées d'au moins 18 ans, au moins un an après l'obtention de la 3e catégorie, ayant jugé au moins une fois lors d'une compétition officielle.
3. 1re catégorie : personnes âgées d'au moins 20 ans dans l'année concernée et remplissant l'une des conditions suivantes, ou titulaires d'une qualification équivalente reconnue et proposée par une association membre.
  a. Personnes titulaires de la 2e catégorie ayant jugé au moins deux fois lors de compétitions officielles de niveau préfectoral ou supérieur.
  b. Personnes ayant représenté le Japon lors d'une compétition internationale et proposées pour la compétition.
4. Honoraire : personnes ayant détenu la 2e et la 1re catégorie pendant au moins 20 ans au total, âgées d'au moins 45 ans dans l'année concernée, reconnues par une association membre qui en fait la demande auprès de la Fédération.
5. Pour obtenir une qualification de juge international, il faut être titulaire de la 1re catégorie délivrée par la Fédération et être proposé par celle-ci.`,
          ru: `Допуск к экзамену на квалификацию аттестованного судьи и к почётному званию таков.
1. 3-я категория — лица с соревновательным опытом, которым в соответствующем году исполняется 16 лет и более.
2. 2-я категория — лица 18 лет и старше, у которых прошёл год и более с года получения 3-й категории и которые не менее одного раза судили официальные соревнования.
3. 1-я категория — лица 20 лет и старше в соответствующем году, отвечающие одному из условий ниже, либо лица, чью равнозначную квалификацию признала и рекомендовала организация-член.
  a. лица с квалификацией 2-й категории, судившие не менее двух раз официальные соревнования уровня префектуры и выше;
  b. лица, входившие в сборную на международных соревнованиях и рекомендованные на данные соревнования.
4. Почётное звание — лица, обладавшие квалификацией 2-й и 1-й категорий в общей сложности 20 лет и более, которым в соответствующем году исполняется 45 лет и более, признанные организацией-членом, подавшей заявление в Ассоциацию.
5. Для получения квалификации международного судьи необходимо иметь аттестованную Ассоциацией 1-ю категорию и рекомендацию Ассоциации.`,
          hi: `प्रमाणित निर्णायक की परीक्षा योग्यता तथा मानद योग्यता निम्नलिखित है।
1. श्रेणी 3: प्रतियोगिता का अनुभव रखने वाले और उस वर्ष में 16 वर्ष या अधिक आयु के व्यक्ति।
2. श्रेणी 2: 18 वर्ष या अधिक आयु के, श्रेणी 3 प्राप्त करने के वर्ष से 1 वर्ष से अधिक बीत चुके, और आधिकारिक प्रतियोगिता में 1 बार या अधिक निर्णय का कार्य कर चुके व्यक्ति।
3. श्रेणी 1: उस वर्ष में 20 वर्ष या अधिक आयु के, और निम्नलिखित में से किसी एक पर खरे उतरने वाले व्यक्ति। अथवा समकक्ष योग्यता को सदस्य संगठन द्वारा मान्यता देकर संस्तुत किए गए व्यक्ति।
  a. श्रेणी 2 की योग्यता प्राप्त कर, प्रीफ़ेक्चर या उससे ऊपर की आधिकारिक प्रतियोगिता में 2 बार या अधिक निर्णय के कार्य का अनुभव रखने वाले व्यक्ति।
  b. अंतरराष्ट्रीय प्रतियोगिता होने पर, प्रतिनिधि जिम्नास्ट रहे और प्रतियोगिता के लिए संस्तुत किए गए व्यक्ति।
4. मानद: श्रेणी 2 तथा श्रेणी 1 की योग्यता कुल मिलाकर 20 वर्ष या अधिक समय तक रखने वाले, उस वर्ष में 45 वर्ष या अधिक आयु के, और सदस्य संगठन द्वारा मान्यता पाकर संघ को आवेदन किए गए व्यक्ति।
5. अंतरराष्ट्रीय निर्णायक योग्यता प्राप्त करने के लिए, संघ द्वारा प्रमाणित श्रेणी 1 योग्यता प्राप्त कर संघ द्वारा संस्तुत होना आवश्यक है।`,
        },
      },
      {
        title: {
          ja: '認定講習会',
          en: 'Certification Courses',
          zh: '认定讲习会',
          ko: '인정 강습회',
          es: 'Cursos de acreditación',
          fr: 'Stages de qualification',
          ru: 'Аттестационные курсы',
          hi: 'प्रमाणन पाठ्यक्रम',
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
          ko: `인정 강습회의 실시 요강은 다음과 같이 한다.
1. 1종 인정 강습회에 대해서는 원칙적으로 2년에 1회 본 협회가 개최하고, 3종 및 2종 인정 강습회는 가맹 단체가 개최한다.
2. 인정 강습회는 원칙적으로 최소 2일간으로 하고 다음 내용으로 한다.
  a. 3종  강습회의 강사는 주최 가맹 단체 또는 인접한 가맹 단체의 1종이 맡으며, 강의 및 채점 시험을 실시한다.
  b. 2종  강습회의 강사는 주최 가맹 단체 또는 인접한 가맹 단체의 1종 2명 이상이 맡으며, 강의 및 채점 시험을 실시한다.
  c. 1종  강습회의 강사는 본 협회의 담당자 2명 이상이 맡는다. 강의와 채점 시험 및 이론 시험을 실시한다.`,
          es: `Las normas de celebración de los cursos de acreditación son las siguientes.
1. El curso de acreditación de 1.ª categoría lo organiza, por regla general, la Federación una vez cada 2 años; los cursos de acreditación de 3.ª y 2.ª categoría los organizan las organizaciones afiliadas.
2. Por regla general, el curso de acreditación dura como mínimo 2 días y tiene el contenido siguiente.
 a. 3.ª categoría: imparten el curso jueces de 1.ª categoría de la organización afiliada organizadora o de una organización afiliada vecina, con clases teóricas y una prueba de puntuación.
 b. 2.ª categoría: imparten el curso 2 o más jueces de 1.ª categoría de la organización afiliada organizadora o de una organización afiliada vecina, con clases teóricas y una prueba de puntuación.
 c. 1.ª categoría: imparten el curso 2 o más responsables de la Federación, con clases teóricas, una prueba de puntuación y un examen teórico.`,
          fr: `Les stages de qualification se déroulent comme suit.
1. En principe, le stage de 1re catégorie est organisé par la Fédération tous les deux ans, et les stages de 3e et de 2e catégorie sont organisés par les associations membres.
2. En principe, un stage de qualification dure au moins deux jours et comporte le contenu suivant.
  a. 3e catégorie : les formateurs sont des juges de 1re catégorie de l'association membre organisatrice ou d'une association membre voisine ; ils assurent les cours et l'épreuve de notation.
  b. 2e catégorie : les formateurs sont au moins deux juges de 1re catégorie de l'association membre organisatrice ou d'une association membre voisine ; ils assurent les cours et l'épreuve de notation.
  c. 1re catégorie : les formateurs sont au moins deux responsables de la Fédération ; ils assurent les cours, l'épreuve de notation et l'épreuve théorique.`,
          ru: `Порядок проведения аттестационных курсов таков.
1. Курсы 1-й категории, как правило, Ассоциация проводит раз в два года; курсы 3-й и 2-й категорий проводят организации-члены.
2. Как правило, аттестационные курсы длятся не менее двух дней и имеют следующее содержание.
  a. 3-я категория — занятия ведёт судья 1-й категории из принимающей организации-члена или соседней организации-члена; проводятся лекции и экзамен по судейству.
  b. 2-я категория — занятия ведут двое и более судей 1-й категории из принимающей организации-члена или соседней организации-члена; проводятся лекции и экзамен по судейству.
  c. 1-я категория — занятия ведут двое и более ответственных лиц Ассоциации; проводятся лекции, экзамен по судейству и теоретический экзамен.`,
          hi: `प्रमाणन पाठ्यक्रम के आयोजन की व्यवस्था निम्नलिखित है।
1. श्रेणी 1 का प्रमाणन पाठ्यक्रम सिद्धांततः 2 वर्ष में 1 बार संघ आयोजित करता है, और श्रेणी 3 तथा श्रेणी 2 के प्रमाणन पाठ्यक्रम सदस्य संगठन आयोजित करते हैं।
2. प्रमाणन पाठ्यक्रम सिद्धांततः कम से कम 2 दिन का होता है, और उसकी विषयवस्तु निम्नलिखित है।
  a. श्रेणी 3: पाठ्यक्रम के प्रशिक्षक आयोजक सदस्य संगठन या पड़ोसी सदस्य संगठन के श्रेणी 1 निर्णायक होते हैं, जो व्याख्यान तथा अंक निर्धारण की परीक्षा लेते हैं।
  b. श्रेणी 2: पाठ्यक्रम के प्रशिक्षक आयोजक सदस्य संगठन या पड़ोसी सदस्य संगठन के 2 या अधिक श्रेणी 1 निर्णायक होते हैं, जो व्याख्यान तथा अंक निर्धारण की परीक्षा लेते हैं।
  c. श्रेणी 1: पाठ्यक्रम के प्रशिक्षक संघ के 2 या अधिक उत्तरदायी व्यक्ति होते हैं। वे व्याख्यान, अंक निर्धारण की परीक्षा तथा सैद्धांतिक परीक्षा लेते हैं।`,
        },
      },
      {
        title: {
          ja: '研修会',
          en: 'Training Sessions',
          zh: '培训会',
          ko: '연수회',
          es: 'Sesiones de reciclaje',
          fr: 'Sessions de formation continue',
          ru: 'Семинары',
          hi: 'प्रशिक्षण सत्र',
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
          ko: `FIG의 개정 시기에 맞추어 4년에 한 번을 원칙으로 한다. 중간 연도에 경기 규칙 또는 채점 규칙에 변경이 생긴 경우의 전달 방법은 다음과 같이 한다.
1. 1종 및 가맹 단체에 대하여 본 협회 홈페이지를 통하여 전달한다. 또는 변경의 정도에 따라 필요한 경우 전달을 위한 연수회를 신속히 개최한다.
2. 2종 및 3종을 위한 전달 또는 연수의 개최는 가맹 단체가 실시한다.
3. 연수회는 인정 강습회를 겸하여 실시할 수도 있다.`,
          es: `Por regla general se celebran una vez cada 4 años, coincidiendo con el ciclo de revisión de la FIG. Si en los años intermedios se modifican el reglamento de competición o el código de puntuación, los cambios se comunican del modo siguiente.
1. A los jueces de 1.ª categoría y a las organizaciones afiliadas se les comunican a través de la página web de la Federación. También se puede convocar sin demora una sesión de reciclaje para comunicarlos, si el alcance de los cambios lo hace necesario.
2. La comunicación o el reciclaje para los jueces de 2.ª y 3.ª categoría corren a cargo de las organizaciones afiliadas.
3. La sesión de reciclaje puede celebrarse junto con un curso de acreditación.`,
          fr: `En principe, les sessions de formation continue ont lieu tous les quatre ans, au rythme des révisions de la FIG. Si le règlement des compétitions ou le code de pointage change dans l'intervalle, les modifications sont communiquées comme suit.
1. Les modifications sont communiquées aux juges de 1re catégorie et aux associations membres sur le site Internet de la Fédération. Selon leur ampleur, une session de formation est organisée rapidement si nécessaire.
2. La communication ou la formation des juges de 2e et de 3e catégorie est assurée par les associations membres.
3. Une session de formation peut être organisée conjointement avec un stage de qualification.`,
          ru: `Как правило, семинары проводятся раз в четыре года, вместе с циклом изменений правил FIG. Если в промежуточные годы изменяются Правила соревнований или Правила судейства, об этом сообщается так.
1. Судьям 1-й категории и организациям-членам сообщается на сайте Ассоциации. В зависимости от объёма изменений при необходимости незамедлительно проводится семинар.
2. Оповещение и обучение судей 2-й и 3-й категорий проводят организации-члены.
3. Семинар может проводиться одновременно с аттестационными курсами.`,
          hi: `FIG के संशोधन चक्र के अनुसार सिद्धांततः 4 वर्ष में एक बार आयोजित होता है। बीच के वर्ष में प्रतियोगिता नियम या अंक निर्धारण नियम में परिवर्तन होने पर उसे बताने का तरीका निम्नलिखित है।
1. श्रेणी 1 तथा सदस्य संगठनों को संघ की वेबसाइट के माध्यम से सूचित किया जाता है। अथवा परिवर्तन की मात्रा के अनुसार आवश्यकता होने पर, सूचना देने के लिए प्रशिक्षण सत्र शीघ्र आयोजित किया जाता है।
2. श्रेणी 2 तथा श्रेणी 3 के लिए सूचना देना या प्रशिक्षण आयोजित करना सदस्य संगठन करते हैं।
3. प्रशिक्षण सत्र को प्रमाणन पाठ्यक्रम के साथ मिलाकर भी आयोजित किया जा सकता है।`,
        },
      },
      {
        title: {
          ja: '資格の有効期間',
          en: 'Period of Validity',
          zh: '资格的有效期',
          ko: '자격의 유효 기간',
          es: 'Periodo de validez de la titulación',
          fr: 'Durée de validité',
          ru: 'Срок действия квалификации',
          hi: 'योग्यता की वैधता अवधि',
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
          ko: `자격의 유효 기간은 다음과 같이 한다.
1. 공인 심판 인정증의 유효 기간은 4월 1일부터 다음 해 3월 31일까지 1년간으로 한다. 인정 신청이 7월 1일 이후부터 다음 해 3월 31일까지 사이에 이루어진 경우에는 다음 해 4월 1일에 인정하고 그 기간 내에 유효한 것으로 한다.
2. 제8조 및 제10조에 제시하는 계속 신청에 따라 자격을 계속한 경우의 유효 기간도 앞 항과 같은 1년간으로 한다.
3. 명예의 유효 기간은 영구로 한다.`,
          es: `El periodo de validez de la titulación es el siguiente.
1. El certificado de juez oficial tiene una validez de 1 año, desde el 1 de abril hasta el 31 de marzo del año siguiente. Si la solicitud de acreditación se presenta entre el 1 de julio y el 31 de marzo del año siguiente, la acreditación se concede el 1 de abril del año siguiente y es válida durante ese periodo.
2. El periodo de validez de la titulación renovada mediante la solicitud de renovación prevista en los artículos 8 y 10 es también de 1 año, igual que en el apartado anterior.
3. El título de honor tiene validez permanente.`,
          fr: `La durée de validité de la qualification est la suivante.
1. La carte de juge officiel est valable un an, du 1er avril au 31 mars de l'année suivante. Si la demande de qualification est déposée entre le 1er juillet et le 31 mars de l'année suivante, la qualification prend effet le 1er avril suivant et est valable pour cette période.
2. Une qualification renouvelée selon la demande prévue aux articles 8 et 10 est également valable un an, comme au point précédent.
3. Le statut honoraire n'expire pas.`,
          ru: `Срок действия квалификации таков.
1. Удостоверение аттестованного судьи действует один год, с 1 апреля по 31 марта следующего года. Если заявление об аттестации подано в период с 1 июля по 31 марта следующего года, аттестация производится 1 апреля следующего года и действует в течение этого срока.
2. Квалификация, продлённая по заявлению, указанному в статьях 8 и 10, также действует один год, как и в предыдущем пункте.
3. Почётное звание бессрочно.`,
          hi: `योग्यता की वैधता अवधि निम्नलिखित है।
1. प्रमाणित निर्णायक प्रमाणपत्र की वैधता अवधि 1 अप्रैल से अगले वर्ष 31 मार्च तक 1 वर्ष की होती है। प्रमाणन का आवेदन 1 जुलाई के बाद से अगले वर्ष 31 मार्च तक के बीच किया जाए, तो अगले वर्ष 1 अप्रैल को प्रमाणन होता है और वह उस अवधि में वैध रहता है।
2. अनुच्छेद 8 तथा अनुच्छेद 10 में दिखाए गए नवीनीकरण आवेदन से योग्यता जारी रखने पर वैधता अवधि भी पिछले मद के समान 1 वर्ष की होती है।
3. मानद की वैधता अवधि आजीवन होती है।`,
        },
      },
      {
        title: {
          ja: '資格の継続',
          en: 'Renewal of the Qualification',
          zh: '资格的延续',
          ko: '자격의 계속',
          es: 'Renovación de la titulación',
          fr: 'Renouvellement de la qualification',
          ru: 'Продление квалификации',
          hi: 'योग्यता का नवीनीकरण',
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
          ko: `자격의 계속에 대해서는 다음과 같이 한다.
1. 계속을 희망하는 자는 정해진 신청 절차에 따라 계속 신청을 하여야 한다. 다만 명예는 계속 신청을 할 필요가 없다.
2. 계속 신청을 하는 자는 다음 조건을 충족하여야 한다.
  a. 심판 자격의 유효 1년간에 도도부현 또는 그 이상의 공식 경기회에서 심판 임원으로서 적어도 1회 이상의 실무 경험을 가지는 것이 바람직하다.
  b. 본 협회 또는 본 협회가 위탁한 가맹 단체가 개최하는 연수회를 수강할 것.
  c. 유효 기간 내의 경기 규칙·채점 규칙의 변경 부분에 대하여 정통할 것.`,
          es: `La renovación de la titulación se rige por lo siguiente.
1. Quien desee renovarla debe presentar la solicitud de renovación por el procedimiento establecido. No obstante, el título de honor no requiere solicitud de renovación.
2. Quien solicite la renovación debe cumplir las condiciones siguientes.
 a. Es deseable que, durante el año de validez de la titulación, haya ejercido al menos 1 vez como oficial de jueces en una competición oficial de ámbito de prefectura o superior.
 b. Asistir a una sesión de reciclaje organizada por la Federación o por una organización afiliada en quien esta delegue.
 c. Conocer a fondo las modificaciones del reglamento de competición y del código de puntuación introducidas durante el periodo de validez.`,
          fr: `Le renouvellement de la qualification se fait comme suit.
1. Les personnes souhaitant renouveler leur qualification doivent en faire la demande selon la procédure prévue. Les juges honoraires n'ont pas à en faire la demande.
2. Les demandeurs doivent remplir les conditions suivantes.
  a. Au cours de l'année de validité, il est souhaitable qu'ils aient officié au moins une fois comme officiel de jugement lors d'une compétition officielle de niveau préfectoral ou supérieur.
  b. Ils doivent suivre une session de formation organisée par la Fédération ou par une association membre mandatée par celle-ci.
  c. Ils doivent maîtriser les modifications apportées au règlement des compétitions et au code de pointage pendant la période de validité.`,
          ru: `Продление квалификации происходит так.
1. Желающий продлить квалификацию обязан подать заявление в установленном порядке. Почётным судьям заявление подавать не нужно.
2. Заявитель на продление должен отвечать следующим условиям.
  a. Желательно, чтобы в течение года действия квалификации он не менее одного раза работал судейским официальным лицом на официальных соревнованиях уровня префектуры и выше.
  b. Пройти семинар, проводимый Ассоциацией либо организацией-членом по её поручению.
  c. Хорошо знать изменения Правил соревнований и Правил судейства, внесённые в течение срока действия.`,
          hi: `योग्यता के नवीनीकरण के बारे में निम्नलिखित है।
1. नवीनीकरण चाहने वाले व्यक्ति को निर्धारित आवेदन प्रक्रिया से नवीनीकरण का आवेदन करना होगा। किंतु मानद को नवीनीकरण का आवेदन करने की आवश्यकता नहीं है।
2. नवीनीकरण का आवेदन करने वाले व्यक्ति को निम्नलिखित शर्तें पूरी करनी होंगी।
  a. निर्णायक योग्यता की 1 वर्ष की वैधता अवधि में, प्रीफ़ेक्चर या उससे ऊपर की आधिकारिक प्रतियोगिता में निर्णायक अधिकारी के रूप में कम से कम 1 बार कार्य का अनुभव होना वांछनीय है।
  b. संघ या संघ द्वारा नियुक्त सदस्य संगठन के आयोजित प्रशिक्षण सत्र में भाग लेना।
  c. वैधता अवधि के भीतर प्रतियोगिता नियम तथा अंक निर्धारण नियम के परिवर्तित भागों से भली भाँति परिचित होना।`,
        },
      },
      {
        title: {
          ja: '資格の保留・取消',
          en: 'Suspension and Revocation of the Qualification',
          zh: '资格的保留与取消',
          ko: '자격의 보류·취소',
          es: 'Suspensión y retirada de la titulación',
          fr: 'Suspension et retrait de la qualification',
          ru: 'Приостановление и аннулирование квалификации',
          hi: 'योग्यता का स्थगन तथा निरस्तीकरण',
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
          ko: `자격의 보류·취소 조건은 다음과 같이 한다.
1. 자격의 계속을 희망하는 자가 제8조에 제시하는 조건을 충족하지 못한 경우 또는 계속 신청을 게을리한 경우에는 그 자격을 1년간 보류한다.
2. 앞 항의 조건을 충족하지 못한 경우에는 실효된다. 다만 특별한 사정에 따른 경우에는 고려할 수 있다.
3. 명예는 자격의 보류·취소 대상으로 하지 않는다.
4. 그 밖에 위원회가 공인 심판원으로서 부적당하다고 인정한 때에는 그 자격을 보류하거나 취소할 수 있다.`,
          es: `Las condiciones de suspensión y de retirada de la titulación son las siguientes.
1. Si quien desea renovar la titulación no cumple las condiciones del artículo 8, o si no presenta la solicitud de renovación, la titulación queda suspendida durante 1 año.
2. Si tampoco se cumplen las condiciones del apartado anterior, la titulación caduca. No obstante, pueden tenerse en cuenta circunstancias especiales.
3. El título de honor no está sujeto a suspensión ni a retirada.
4. Además, cuando el comité considere que la persona no es apta como juez oficial, puede suspender o retirar su titulación.`,
          fr: `Les conditions de suspension et de retrait de la qualification sont les suivantes.
1. Si une personne souhaitant renouveler sa qualification ne remplit pas les conditions de l'article 8 ou omet d'en faire la demande, sa qualification est suspendue pendant un an.
2. Si les conditions du point précédent ne sont toujours pas remplies, la qualification devient caduque. Des circonstances particulières peuvent toutefois être prises en compte.
3. Le statut honoraire ne peut être ni suspendu ni retiré.
4. La qualification peut également être suspendue ou retirée si la commission estime que la personne n'est pas apte à être juge officiel.`,
          ru: `Условия приостановления и аннулирования квалификации таковы.
1. Если желающий продлить квалификацию не отвечает условиям статьи 8 либо не подал заявление о продлении, его квалификация приостанавливается на один год.
2. Если условия предыдущего пункта так и не выполнены, квалификация утрачивает силу. Особые обстоятельства могут быть учтены.
3. Почётное звание приостановлению и аннулированию не подлежит.
4. Квалификация также может быть приостановлена или аннулирована, если комитет сочтёт человека непригодным для работы аттестованным судьёй.`,
          hi: `योग्यता के स्थगन तथा निरस्तीकरण की शर्तें निम्नलिखित हैं।
1. योग्यता का नवीनीकरण चाहने वाला व्यक्ति अनुच्छेद 8 में दिखाई गई शर्तें पूरी न करे, अथवा नवीनीकरण का आवेदन न करे, तो उसकी योग्यता 1 वर्ष के लिए स्थगित रहती है।
2. पिछले मद की शर्तें पूरी न होने पर योग्यता समाप्त हो जाती है। किंतु विशेष कारण होने पर विचार किया जा सकता है।
3. मानद योग्यता स्थगन तथा निरस्तीकरण के दायरे में नहीं आती।
4. इसके अतिरिक्त समिति किसी को प्रमाणित निर्णायक के रूप में अनुपयुक्त माने, तो उसकी योग्यता स्थगित या निरस्त की जा सकती है।`,
        },
      },
      {
        title: {
          ja: '認定・継続の申請手続き',
          en: 'Applying for Certification and Renewal',
          zh: '认定、延续的申请手续',
          ko: '인정·계속의 신청 절차',
          es: 'Procedimiento de solicitud de acreditación y de renovación',
          fr: 'Demandes de qualification et de renouvellement',
          ru: 'Порядок подачи заявления об аттестации и продлении',
          hi: 'प्रमाणन तथा नवीनीकरण की आवेदन प्रक्रिया',
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
          ko: `인정 및 계속의 신청은 다음 요령으로 실시한다.
1. 본 협회가 정한 신청 절차에 따라 가맹 단체를 통하여 필요한 요금을 납입한다.
2. 가맹 단체는 본 협회가 정한 신청 절차(웹 등록)에 대하여 이해하고 협력한다.
3. 인정 신청은 인정 강습회가 끝난 후 신속히 실시한다. 계속 신청 기간은 매년 4월 1일부터 6월 30일까지로 한다.
4. 명예의 신청은 필요할 때마다 실시하고 특별히 기한을 정하지 않는다.`,
          es: `Las solicitudes de acreditación y de renovación se tramitan del modo siguiente.
1. Se abona el importe correspondiente siguiendo el procedimiento establecido por la Federación, a través de la organización afiliada.
2. Las organizaciones afiliadas comprenden y apoyan el procedimiento establecido por la Federación (inscripción por internet).
3. La solicitud de acreditación se presenta sin demora una vez finalizado el curso de acreditación. El plazo de solicitud de renovación es del 1 de abril al 30 de junio de cada año.
4. La solicitud del título de honor se presenta cuando sea necesario, sin plazo determinado.`,
          fr: `Les demandes de qualification et de renouvellement se font comme suit.
1. Les demandeurs suivent la procédure prévue par la Fédération par l'intermédiaire de leur association membre et acquittent les frais requis.
2. Les associations membres comprennent et soutiennent la procédure prévue par la Fédération (inscription en ligne).
3. Les demandes de qualification sont déposées rapidement après le stage de qualification. Les demandes de renouvellement sont reçues du 1er avril au 30 juin de chaque année.
4. Les demandes de statut honoraire sont déposées au besoin, sans date limite particulière.`,
          ru: `Заявления об аттестации и продлении подаются так.
1. Заявитель действует по установленному Ассоциацией порядку через свою организацию-член и вносит необходимую плату.
2. Организации-члены с пониманием относятся к установленному Ассоциацией порядку (регистрация через интернет) и содействуют ему.
3. Заявление об аттестации подаётся сразу после окончания аттестационных курсов. Заявления о продлении принимаются ежегодно с 1 апреля по 30 июня.
4. Заявление о почётном звании подаётся по мере необходимости, без особого срока.`,
          hi: `प्रमाणन तथा नवीनीकरण का आवेदन निम्नलिखित तरीके से किया जाता है।
1. संघ की निर्धारित आवेदन प्रक्रिया से सदस्य संगठन के माध्यम से आवश्यक शुल्क जमा किया जाता है।
2. सदस्य संगठन संघ की निर्धारित आवेदन प्रक्रिया (वेब पंजीकरण) को समझते हैं और उसमें सहयोग करते हैं।
3. प्रमाणन का आवेदन प्रमाणन पाठ्यक्रम समाप्त होने के तुरंत बाद किया जाता है। नवीनीकरण के आवेदन की अवधि हर वर्ष 1 अप्रैल से 30 जून तक होती है।
4. मानद का आवेदन आवश्यकता पड़ने पर हर बार किया जाता है, और इसके लिए कोई विशेष समय सीमा निर्धारित नहीं है।`,
        },
      },
      {
        title: {
          ja: '申請料',
          en: 'Application Fees',
          zh: '申请费',
          ko: '신청료',
          es: 'Tasas de solicitud',
          fr: 'Frais de dossier',
          ru: 'Плата за подачу заявления',
          hi: 'आवेदन शुल्क',
        },
        content: {
          ja: '認定および継続に要する料金は、本会の定める料金とする。また、申請手数料は加盟団体が別に定める。',
          en: 'The fees for certification and renewal are set by the Association. Application handling fees are set separately by the member organizations.',
          zh: '认定及延续所需的费用，按本会规定的费用执行。此外，申请手续费由加盟团体另行规定。',
          ko: '인정 및 계속에 드는 요금은 본 협회가 정하는 요금으로 한다. 또한 신청 수수료는 가맹 단체가 따로 정한다.',
          es: 'Las tasas de acreditación y de renovación son las que fija la Federación. Los gastos de tramitación de la solicitud los fijan aparte las organizaciones afiliadas.',
          fr: 'Les frais de qualification et de renouvellement sont fixés par la Fédération. Les frais de traitement des demandes sont fixés séparément par les associations membres.',
          ru: 'Плата за аттестацию и продление устанавливается Ассоциацией. Сбор за оформление заявления организации-члены устанавливают отдельно.',
          hi: 'प्रमाणन तथा नवीनीकरण के लिए आवश्यक शुल्क संघ द्वारा निर्धारित शुल्क होता है। साथ ही आवेदन का सेवा शुल्क सदस्य संगठन अलग से निर्धारित करते हैं।',
        },
      },
      {
        title: {
          ja: '認定証の携行義務',
          en: 'Obligation to Carry the Certificate',
          zh: '认定证的携带义务',
          ko: '인정증의 휴대 의무',
          es: 'Obligación de llevar el certificado',
          fr: 'Obligation de porter sa carte sur soi',
          ru: 'Обязанность иметь при себе удостоверение',
          hi: 'प्रमाणपत्र साथ रखने का कर्तव्य',
        },
        content: {
          ja: '公認審判員は、各種協議会の審判員として参加する場合および研修会に受講者として参加する場合には、公認審判員認定証を携行し、公認審判員認定証の該当欄に必要事項を記入して、審判役員は審判長に、受講者は講師にそれぞれ掲示し押印を受けなければならない。または、公認審判員は本会がはっ呼応している認定バッヂを国内あらゆる競技会で、審判業務を行う場合装着することを義務づける。',
          en: "When taking part in a competition as a judge or in a training session as a participant, certified judges must carry their certified judge's certificate, fill in the required details in the relevant section, and present it for a stamp: judging officials to the Jury President, participants to the instructor. Certified judges are also required to wear the certification badge issued by the Association when judging at any competition in Japan.",
          zh: '公认裁判员作为各类比赛的裁判员参加时，以及作为学员参加培训会时，必须携带公认裁判员认定证，在公认裁判员认定证的相应栏内填写必要事项，裁判工作人员向裁判长、学员向讲师分别出示并接受盖章。此外，公认裁判员在国内的任何比赛中从事裁判工作时，有义务佩戴本会颁发的认定徽章。',
          ko: '공인 심판원은 각종 경기회에 심판원으로서 참가하는 경우 및 연수회에 수강자로서 참가하는 경우에는 공인 심판원 인정증을 휴대하고, 공인 심판원 인정증의 해당란에 필요 사항을 기입하여 심판 임원은 심판장에게, 수강자는 강사에게 각각 제시하고 날인을 받아야 한다. 또한 공인 심판원은 본 협회가 발행하는 인정 배지를 국내의 모든 경기회에서 심판 업무를 실시할 때 착용하여야 한다.',
          es: 'Cuando participen como jueces en una competición o como asistentes en una sesión de reciclaje, los jueces oficiales deben llevar consigo el certificado de juez oficial, cumplimentar los datos necesarios en el apartado correspondiente y presentarlo para su sellado: los oficiales de jueces, al juez árbitro; los asistentes, al profesor del curso. Asimismo, los jueces oficiales están obligados a llevar puesta la insignia de acreditación expedida por la Federación siempre que ejerzan como jueces en cualquier competición celebrada en Japón.',
          fr: "Lorsqu'ils participent à une compétition comme juges ou à une session de formation comme stagiaires, les juges officiels doivent avoir sur eux leur carte de juge officiel, en remplir la rubrique correspondante et la présenter pour être tamponnée : au président du jury pour les officiels de jugement, au formateur pour les stagiaires. Les juges officiels sont en outre tenus de porter l'insigne de qualification délivré par la Fédération lorsqu'ils officient dans une compétition au Japon.",
          ru: 'Участвуя в соревнованиях в качестве судьи или в семинаре в качестве слушателя, аттестованный судья обязан иметь при себе удостоверение аттестованного судьи, заполнить нужные графы и предъявить его для печати: судейские официальные лица — главному судье, слушатели — преподавателю. Кроме того, аттестованный судья обязан носить выданный Ассоциацией аттестационный значок при работе на любых соревнованиях внутри страны.',
          hi: 'प्रमाणित निर्णायक, विभिन्न प्रतियोगिताओं में निर्णायक के रूप में भाग लेते समय तथा प्रशिक्षण सत्र में प्रतिभागी के रूप में भाग लेते समय, प्रमाणित निर्णायक प्रमाणपत्र साथ रखें, प्रमाणपत्र के संबंधित खाने में आवश्यक विवरण भरें, और निर्णायक अधिकारी मुख्य निर्णायक को तथा प्रतिभागी प्रशिक्षक को उसे दिखाकर मुहर लगवाएँ, यह अनिवार्य है। साथ ही प्रमाणित निर्णायकों के लिए, संघ द्वारा जारी प्रमाणन बैज को देश की हर प्रतियोगिता में निर्णय का कार्य करते समय पहनना अनिवार्य है।',
        },
      },
    ],
  },
  {
    title: { ja: '', en: '', zh: '', ko: '', es: '', fr: '', ru: '', hi: '' },
    section: [
      {
        title: {
          ja: '付則',
          en: 'Supplementary Provisions',
          zh: '附则',
          ko: '부칙',
          es: 'Disposiciones adicionales',
          fr: 'Dispositions complémentaires',
          ru: 'Дополнительные положения',
          hi: 'अनुपूरक प्रावधान',
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
          es: `1. Si quien posee la titulación de 1.ª categoría en vigor no ha podido ejercer como juez durante el año de validez por razón de su cargo, puede suplirlo con su experiencia como oficial de competición.
2. Las cuestiones no previstas en este reglamento se establecen aparte, como normas de desarrollo, por cada comité.
3. La modificación o derogación de este reglamento se aprueba por acuerdo de la junta directiva, previa deliberación en la asamblea general de cada comité.

En vigor desde el 12 de febrero de 1967
Modificación parcial del 11 de febrero de 1979
Modificación parcial del 1 de abril de 1980
Modificación parcial del 17 de marzo de 1985
Modificación parcial del 1 de abril de 1989
Modificación parcial del 23 de enero de 1993
Modificación parcial del 13 de marzo de 1994
Modificación parcial del 12 de marzo de 1995
Modificación parcial del 1 de abril de 2001
Modificación parcial del 16 de marzo de 2003
Modificación parcial del 18 de febrero de 2006
Modificación parcial del 24 de febrero de 2007`,
          fr: `1. Si un titulaire d'une qualification de 1re catégorie en cours de validité n'a pas pu officier comme juge pendant l'année de validité en raison de ses fonctions, son expérience d'officiel de compétition peut être prise en compte à la place.
2. Les questions non prévues par le présent règlement sont fixées séparément, sous forme de règles détaillées, par chaque commission.
3. Le présent règlement est modifié ou abrogé par décision du conseil d'administration, après examen par l'assemblée générale de chaque commission.

En vigueur depuis le 12 février 1967
Modifié en partie le 11 février 1979
Modifié en partie le 1er avril 1980
Modifié en partie le 17 mars 1985
Modifié en partie le 1er avril 1989
Modifié en partie le 23 janvier 1993
Modifié en partie le 13 mars 1994
Modifié en partie le 12 mars 1995
Modifié en partie le 1er avril 2001
Modifié en partie le 16 mars 2003
Modifié en partie le 18 février 2006
Modifié en partie le 24 février 2007`,
          ru: `1. Если обладатель действующей квалификации 1-й категории не смог отработать судьёй в течение года действия по служебным причинам, это может быть восполнено работой в качестве официального лица соревнований.
2. Вопросы, не предусмотренные настоящим положением, устанавливаются отдельно как подробные правила соответствующих комитетов.
3. Изменение и отмена настоящего положения производятся решением совета директоров после обсуждения на общем собрании соответствующего комитета.

Введено в действие 12 февраля 1967 года
Частично изменено 11 февраля 1979 года
Частично изменено 1 апреля 1980 года
Частично изменено 17 марта 1985 года
Частично изменено 1 апреля 1989 года
Частично изменено 23 января 1993 года
Частично изменено 13 марта 1994 года
Частично изменено 12 марта 1995 года
Частично изменено 1 апреля 2001 года
Частично изменено 16 марта 2003 года
Частично изменено 18 февраля 2006 года
Частично изменено 24 февраля 2007 года`,
          hi: `1. श्रेणी 1 की वैध योग्यता रखने वाला व्यक्ति 1 वर्ष की वैधता अवधि में कर्तव्यों के कारण निर्णायक के रूप में कार्य न कर सके, तो प्रतियोगिता अधिकारी के रूप में किए गए कार्य से उसकी पूर्ति की जा सकती है।
2. इस नियमावली में निर्धारित न किए गए विषय, प्रत्येक समिति अलग से विस्तृत नियमों के रूप में निर्धारित करती है।
3. इस नियमावली का संशोधन या निरसन प्रत्येक समिति की आम सभा में विचार के बाद, निदेशक मंडल के निर्णय से किया जाता है।

12 फ़रवरी 1967 को लागू
11 फ़रवरी 1979 को आंशिक संशोधन
1 अप्रैल 1980 को आंशिक संशोधन
17 मार्च 1985 को आंशिक संशोधन
1 अप्रैल 1989 को आंशिक संशोधन
23 जनवरी 1993 को आंशिक संशोधन
13 मार्च 1994 को आंशिक संशोधन
12 मार्च 1995 को आंशिक संशोधन
1 अप्रैल 2001 को आंशिक संशोधन
16 मार्च 2003 को आंशिक संशोधन
18 फ़रवरी 2006 को आंशिक संशोधन
24 फ़रवरी 2007 को आंशिक संशोधन`,
        },
      },
    ],
  },
]
