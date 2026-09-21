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
      ko: '총칙',
      es: 'Disposiciones generales',
      fr: 'Dispositions générales',
      ru: 'Общие положения',
      hi: 'सामान्य प्रावधान',
    },
    section: [
      {
        title: {
          ja: '採点規則の適用',
          en: 'Application of the Code of Points',
          zh: '评分规则的适用',
          ko: '채점 규칙의 적용',
          es: 'Aplicación del código de puntuación',
          fr: 'Application du code de pointage',
          ru: 'Применение Правил судейства',
          hi: 'अंक निर्धारण नियमों का प्रयोग',
        },
        content: {
          ja: `
1. 採点規則は、国際および国内競技における競技を共通の基準をもって判定し、その評価を客観的にならしめるものである。
2. 審判員の能力と採点の技術を高め、また競技者や指導者に競技のための練習の指針として役立たせるものである。
3. 審判員は、本規則を厳守しなければならない。厳守しない審判員は審判長によって解任されることがある。`,
          en: `1. The Code of Points is used to judge international and national competitions by common standards and to make their evaluation objective.
2. It serves to improve the ability of judges and their scoring technique, and guides gymnasts and coaches in their training for competition.
3. Judges must strictly observe these rules. Judges who do not may be replaced by the Jury President.`,
          zh: `
1. 评分规则以共同的标准判定国际及国内比赛中的成套动作，使其评价客观化。
2. 评分规则用于提高裁判员的能力和评分技术，并作为参赛者和指导者为比赛进行训练的指南。
3. 裁判员必须严格遵守本规则。不严格遵守的裁判员，可能会被裁判长予以纠正。`,
          ko: `
1. 채점 규칙은 국제 및 국내 경기에서의 경기를 공통된 기준으로 판정하고, 그 평가를 객관적인 것이 되게 하는 것이다.
2. 심판원의 능력과 채점 기술을 높이고, 또한 경기자나 지도자에게 경기를 위한 연습의 지침으로 도움이 되게 하는 것이다.
3. 심판원은 본 규칙을 엄수하여야 한다. 엄수하지 아니하는 심판원은 심판장에 의하여 교체될 수 있다.`,
          es: `
1. El código de puntuación sirve para juzgar con criterios comunes las competiciones internacionales y nacionales y para hacer objetiva su valoración.
2. Sirve para mejorar la capacidad de los jueces y su técnica de puntuación, y para orientar a gimnastas y entrenadores en su entrenamiento para la competición.
3. Los jueces deben observar estrictamente este reglamento. El juez árbitro podrá amonestar y corregir a los jueces que no lo hagan.`,
          fr: `1. Le code de pointage sert à juger les compétitions internationales et nationales selon des critères communs et à en rendre l'évaluation objective.
2. Il contribue à développer les compétences des juges et leur technique de notation, et guide les gymnastes et les entraîneurs dans leur préparation à la compétition.
3. Les juges doivent respecter scrupuleusement le présent règlement. Ceux qui ne le respectent pas peuvent être remplacés par le président du jury.`,
          ru: `1. Правила судейства служат для того, чтобы оценивать выступления на международных и внутренних соревнованиях по единым критериям и делать оценку объективной.
2. Они помогают повышать квалификацию судей и технику судейства, а гимнастам и тренерам служат ориентиром в подготовке к соревнованиям.
3. Судьи обязаны строго соблюдать настоящие Правила. Судья, который их не соблюдает, может быть заменён главным судьёй.`,
          hi: `
1. अंक निर्धारण नियम अंतरराष्ट्रीय और राष्ट्रीय प्रतियोगिताओं में प्रदर्शन को समान मानकों से आँकने और उनके मूल्यांकन को वस्तुनिष्ठ बनाने के लिए हैं।
2. ये निर्णायकों की क्षमता और अंक निर्धारण की तकनीक को बेहतर बनाते हैं, और जिम्नास्ट तथा कोच के लिए प्रतियोगिता हेतु अभ्यास का मार्गदर्शन भी करते हैं।
3. निर्णायकों को इन नियमों का कड़ाई से पालन करना चाहिए। पालन न करने वाले निर्णायक को मुख्य निर्णायक द्वारा बदला जा सकता है।`,
        },
      },
    ],
  },
  {
    title: {
      ja: '審判',
      en: 'Judging',
      zh: '裁判',
      ko: '심판',
      es: 'Arbitraje',
      fr: 'Jugement',
      ru: 'Судейство',
      hi: 'निर्णायक कार्य',
    },
    section: [
      {
        title: {
          ja: '競技と審判',
          en: 'Competition and Judging',
          zh: '比赛与裁判',
          ko: '경기와 심판',
          es: 'La competición y el arbitraje',
          fr: 'Compétition et jugement',
          ru: 'Соревнования и судейство',
          hi: 'प्रतियोगिता और निर्णायक कार्य',
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
          ko: `1. 리듬체조는 판정 경기이므로 심판원에 의하여 방향성과 지도성이 정해지며, 그 책임은 극히 중대하다.
2. 심판원은 넓은 시야와 높은 식견과 깊은 경험을 갖추고, 또한 인격에 있어서 양심적이고 공평하여야 한다.
3. 심판원은 그 특별한 권한과 직무상의 위치에서, 자신의 면전에서 실시된 연기를 깊이 헤아리고 올바르게 판정할 수 있어야 한다.
4. 심판원은 연기의 완성도, 구성에 있어서의 운동의 난도 및 가치, 그 음악 반주와의 조화 등 모든 것을 관찰하고 이해하는 능력이 필요하다.
5. 심판원은 기술의 진보 이외에 조화로운 유연성 및 남자로서의 힘참을 판정하는 것도 필요하다.
6. 심판원은 관중의 박수나 볼거리에 치우친 가치 없는 연기에 영향을 받지 아니하고 신념에 근거하여 판정하여야 한다.
7. 부정하거나 잘못된 판정은 지도자 및 경기자에게 큰 영향을 줄 뿐만 아니라, 리듬체조의 보급에도 지장을 초래한다.`,
          es: `1. La gimnasia rítmica es un deporte de valoración y son los jueces quienes determinan su orientación y su desarrollo, por lo que su responsabilidad es enorme.
2. Los jueces deben tener amplitud de miras, criterio elevado y una experiencia profunda, y ser, en lo personal, concienzudos e imparciales.
3. Por su autoridad especial y por su posición, los jueces deben comprender a fondo los ejercicios realizados ante ellos y saber valorarlos correctamente.
4. Los jueces necesitan la capacidad de observar y comprender todos los aspectos: la calidad de la ejecución, la dificultad y el valor de los movimientos de la composición, su armonía con el acompañamiento musical, etc.
5. Además del progreso técnico, los jueces deben valorar también la flexibilidad armoniosa y la fuerza propia del gimnasta masculino.
6. Los jueces deben valorar conforme a su propia convicción, sin dejarse influir por los aplausos del público ni por ejercicios vistosos carentes de valor.
7. Una valoración injusta o errónea no solo afecta gravemente a entrenadores y gimnastas, sino que además dificulta la difusión de la gimnasia rítmica.`,
          fr: `1. La gymnastique rythmique est un sport jugé : ce sont les juges qui en fixent l'orientation et en guident le développement. Leur responsabilité est donc très grande.
2. Les juges doivent avoir une vision large, un jugement sûr et une grande expérience, et faire preuve de conscience professionnelle et d'impartialité.
3. Compte tenu de leur autorité particulière et de leur position, les juges doivent pleinement saisir les exercices présentés devant eux et les juger correctement.
4. Les juges doivent être capables d'observer et de comprendre l'ensemble : la qualité de l'exécution, la difficulté et la valeur des mouvements de la composition, leur harmonie avec la musique d'accompagnement, etc.
5. Au-delà du progrès technique, les juges doivent également apprécier la souplesse harmonieuse et la puissance masculine.
6. Les juges doivent juger selon leur conviction, sans se laisser influencer par les applaudissements du public ni par des exercices spectaculaires mais sans valeur.
7. Un jugement inéquitable ou erroné a de lourdes conséquences pour les entraîneurs et les gymnastes, et nuit en outre au développement de la gymnastique rythmique.`,
          ru: `1. Художественная гимнастика — вид спорта с судейской оценкой, поэтому именно судьи задают её направление и развитие. Их ответственность крайне велика.
2. Судья должен обладать широким кругозором, высокой компетентностью и большим опытом, а также быть добросовестным и беспристрастным человеком.
3. В силу особых полномочий и служебного положения судья обязан глубоко понимать упражнение, исполненное перед ним, и верно его оценивать.
4. Судья должен уметь видеть и понимать всё: качество исполнения, трудность и ценность движений в композиции, их согласованность с музыкальным сопровождением и прочее.
5. Помимо технического прогресса, судья должен уметь оценивать и гармоничную гибкость, и мужскую силу.
6. Судья обязан оценивать по внутреннему убеждению, не поддаваясь аплодисментам зрителей и эффектным, но лишённым ценности упражнениям.
7. Несправедливая или ошибочная оценка не только сильно влияет на тренеров и гимнастов, но и мешает распространению художественной гимнастики.`,
          hi: `1. लयबद्ध जिम्नास्टिक एक ऐसा खेल है जिसमें निर्णय दिया जाता है, इसलिए उसकी दिशा और मार्गदर्शन निर्णायक तय करते हैं, और इसलिए उनका उत्तरदायित्व अत्यंत बड़ा है।
2. निर्णायकों के पास व्यापक दृष्टि, ऊँची समझ और गहरा अनुभव होना चाहिए, तथा वे चरित्र में ईमानदार और निष्पक्ष होने चाहिए।
3. अपने विशेष अधिकार और पद के कारण निर्णायकों को अपने सामने किए गए प्रदर्शन को गहराई से समझकर सही निर्णय देना आना चाहिए।
4. निर्णायकों में प्रदर्शन की गुणवत्ता, संरचना में गतियों की कठिनाई और मूल्य, संगत संगीत के साथ उसका सामंजस्य आदि सब कुछ देखने और समझने की क्षमता आवश्यक है।
5. निर्णायकों को तकनीकी प्रगति के अलावा सामंजस्यपूर्ण लचीलापन और पुरुषोचित शक्ति को भी आँकना आवश्यक है।
6. निर्णायकों को दर्शकों की तालियों या दिखावटी और मूल्यहीन प्रदर्शन से प्रभावित हुए बिना, अपने विश्वास के आधार पर निर्णय देना आवश्यक है।
7. अनुचित या गलत निर्णय न केवल कोच और जिम्नास्ट पर बड़ा असर डालते हैं, बल्कि लयबद्ध जिम्नास्टिक के प्रसार में भी बाधा डालते हैं।`,
        },
      },
      {
        title: {
          ja: '審判員規定',
          en: 'Regulations for Judges',
          zh: '裁判员规定',
          ko: '심판원 규정',
          es: 'Reglamento de los jueces',
          fr: 'Règles applicables aux juges',
          ru: 'Положение о судьях',
          hi: 'निर्णायकों के लिए नियम',
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
          ko: `1. 본 협회의 감독하에 개최되는 경기회에서는 공인 심판 인정 규정에 근거하여 자격을 가진 심판원이 심판 업무를 수행한다.
2. 심판장·심판원은 그 직책에 전임하며, 어떠한 명목으로도 팀을 지도하거나 경기에 참가하거나 다른 임무를 수락할 수 없다.
3. 심판원은 임명된 경기회의 전 기간에 걸쳐 경기장에서 그 임무를 완수하여야 한다.
4. 심판원은 어떠한 경우에도 채점에 관하여 영향을 받아서는 아니 된다.
5. 심판원은 경기회 전에 심판 회의와 심판 연수회에 출석할 의무가 있으며, 이에 출석하지 아니하면 복무할 수 없다.
6. 모든 심판원에게 있어서 각자의 채점에 대한 책임은 전면적으로 자기 자신에게 있다.
7. 심판원은 항상 전문가로서의 예의를 지키고, 편견 없이 윤리적으로 올바른 모범적인 태도로 행동하여야 한다.
8. 심판장 및 심판원은 경기 개시 1시간 전에 경기장에 집합하여, 경기의 진행 순서·임시 변경 등에 대하여 통지를 받는다.
9. 심판원은 정해진 복장을 착용하고 업무를 수행한다.
  a. 회색 바지
  b. 네이비블루 상의
  c. 흰색 와이셔츠
  d. 넥타이
  e. 심판 배지`,
          es: `1. En las competiciones celebradas bajo la supervisión de esta Federación, el arbitraje corre a cargo de jueces titulados conforme al reglamento de acreditación de jueces oficiales.
2. El juez árbitro y los jueces se dedicarán en exclusiva a su función y no podrán, bajo ningún concepto, dirigir a un equipo, participar en la competición ni aceptar ninguna otra tarea.
3. Los jueces deben desempeñar plenamente su función en la sede de competición durante todo el periodo de la competición para la que han sido designados.
4. Los jueces no deben dejarse influir en ningún caso en su puntuación.
5. Los jueces tienen la obligación de asistir a la reunión de jueces y al curso de jueces previos a la competición; quien no asista no podrá ejercer.
6. Cada juez es plenamente responsable de su propia puntuación.
7. Los jueces deben mantener en todo momento una conducta profesional y actuar de forma imparcial, ética y ejemplar.
8. El juez árbitro y los jueces se reunirán en la sede de competición una hora antes del inicio de la competición, donde se les informará del orden de desarrollo y de los cambios de última hora.
9. Los jueces ejercerán su función con la vestimenta establecida.
  a. Pantalón gris
  b. Chaqueta azul marino
  c. Camisa blanca
  d. Corbata
  e. Insignia de juez`,
          fr: `1. Lors des compétitions organisées sous l'autorité de la Fédération, le jugement est assuré par des juges qualifiés selon le règlement de qualification des juges officiels.
2. Le président du jury et les juges se consacrent à leurs fonctions et ne peuvent, à aucun titre, encadrer une équipe, participer à la compétition ni accepter une autre mission.
3. Les juges doivent remplir leurs fonctions dans la salle de compétition pendant toute la durée de la compétition à laquelle ils sont désignés.
4. Les juges ne doivent en aucun cas subir d'influence dans leur notation.
5. Les juges ont l'obligation d'assister à la réunion des juges et à la formation des juges avant la compétition ; à défaut, ils ne peuvent pas officier.
6. Chaque juge est entièrement responsable de ses propres notes.
7. Les juges doivent en toute circonstance observer les usages de leur fonction et adopter une attitude impartiale, éthique et exemplaire.
8. Le président du jury et les juges se réunissent dans la salle de compétition une heure avant le début de la compétition, où l'ordre de passage et les éventuelles modifications de dernière minute leur sont communiqués.
9. Les juges officient dans la tenue prescrite.
  a. Pantalon gris
  b. Veste bleu marine
  c. Chemise blanche
  d. Cravate
  e. Insigne de juge`,
          ru: `1. На соревнованиях, проводимых под контролем Ассоциации, судейство осуществляют судьи, имеющие квалификацию по положению об аттестации судей.
2. Главный судья и судьи посвящают себя своим обязанностям и ни под каким предлогом не могут тренировать команду, участвовать в соревнованиях или принимать на себя иные роли.
3. Судья обязан исполнять свои обязанности в соревновательном зале на протяжении всех соревнований, на которые он назначен.
4. Судья ни при каких обстоятельствах не должен поддаваться влиянию при выставлении оценок.
5. Судья обязан присутствовать на совещании судей и на судейском семинаре перед соревнованиями; не присутствовавший к работе не допускается.
6. Каждый судья несёт полную личную ответственность за свои оценки.
7. Судья обязан всегда вести себя профессионально, без предвзятости, этично и образцово.
8. Главный судья и судьи собираются в соревновательном зале за час до начала соревнований и получают сведения о порядке проведения и о временных изменениях.
9. Судья работает в установленной форме одежды.
  a. серые брюки
  b. тёмно-синий пиджак
  c. белая рубашка
  d. галстук
  e. судейский значок`,
          hi: `1. संघ की देखरेख में आयोजित प्रतियोगिताओं में, मान्यता प्राप्त निर्णायक प्रमाणन नियमों के आधार पर योग्यता रखने वाले निर्णायक ही निर्णायक कार्य करते हैं।
2. मुख्य निर्णायक और निर्णायक अपने कर्तव्य के प्रति समर्पित रहते हैं, और किसी भी बहाने से न तो किसी टीम को प्रशिक्षण दे सकते हैं, न प्रतियोगिता में भाग ले सकते हैं, न ही कोई अन्य दायित्व स्वीकार कर सकते हैं।
3. निर्णायकों को, जिस प्रतियोगिता के लिए वे नियुक्त हुए हैं उसकी पूरी अवधि में, प्रतियोगिता स्थल पर अपना कर्तव्य पूरा करना चाहिए।
4. निर्णायकों को किसी भी स्थिति में अंक निर्धारण के बारे में प्रभावित नहीं होना चाहिए।
5. निर्णायकों के लिए प्रतियोगिता से पहले निर्णायक बैठक और निर्णायक प्रशिक्षण सत्र में उपस्थित होना अनिवार्य है, और उपस्थित न होने पर वे कार्य नहीं कर सकते।
6. हर निर्णायक अपने अंकों के लिए पूरी तरह स्वयं उत्तरदायी है।
7. निर्णायकों को हमेशा पेशेवर शिष्टाचार का पालन करना चाहिए और पूर्वाग्रह रहित, नैतिक रूप से सही तथा अनुकरणीय आचरण करना चाहिए।
8. मुख्य निर्णायक तथा निर्णायक प्रतियोगिता शुरू होने से 1 घंटा पहले प्रतियोगिता स्थल पर एकत्र होते हैं और प्रतियोगिता के क्रम तथा अस्थायी बदलावों की सूचना पाते हैं।
9. निर्णायक निर्धारित पोशाक पहनकर कार्य करते हैं।
  a. स्लेटी रंग की पैंट
  b. नेवी ब्लू जैकेट
  c. सफ़ेद कमीज़
  d. टाई
  e. निर्णायक बैज`,
        },
      },
      {
        title: {
          ja: '審判研修会と審判会議',
          en: "Judges' Training Sessions and Judges' Meetings",
          zh: '裁判研修会与裁判会议',
          ko: '심판 연수회와 심판 회의',
          es: 'Cursos de jueces y reuniones de jueces',
          fr: 'Formations et réunions des juges',
          ru: 'Судейские семинары и совещания судей',
          hi: 'निर्णायक प्रशिक्षण सत्र और निर्णायक बैठक',
        },
        content: {
          ja: `1. 審判会議および審判研修会では、規定演技のついては公式解説文または公式映像を参考にし、自由演技については、演技の構成・実施の良否を十分に審議し、採点の焦点を明らかにしなければならない。
2. 審判会議で能力不十分と認められた審判員は競技会から除名されることがある。`,
          en: `1. At the judges' meeting and training session, compulsory routines are reviewed with the official written explanation or the official video, and free routines are reviewed thoroughly for the quality of composition and execution, so that the focus of scoring is made clear.
2. Judges found to be insufficiently capable at the judges' meeting may be removed from the competition.`,
          zh: `1. 在裁判会议及裁判研修会上，规定成套动作应参考官方解说文或官方影像，自选成套动作应充分审议成套动作的编排、完成的优劣，明确评分的重点。
2. 在裁判会议上被认定能力不足的裁判员，可能被从比赛中除名。`,
          ko: `1. 심판 회의 및 심판 연수회에서는 규정 연기에 대하여는 공식 해설문 또는 공식 영상을 참고하고, 자유 연기에 대하여는 연기의 구성·실시의 좋고 나쁨을 충분히 심의하여 채점의 초점을 명확히 하여야 한다.
2. 심판 회의에서 능력이 불충분하다고 인정된 심판원은 경기회에서 제명될 수 있다.`,
          es: `1. En la reunión de jueces y en el curso de jueces, los ejercicios obligatorios se estudian con el texto explicativo oficial o el vídeo oficial y, en cuanto a los ejercicios libres, se debate a fondo la calidad de la composición y de la ejecución, de modo que quede claro el criterio de puntuación.
2. Los jueces a los que en la reunión de jueces se considere insuficientemente capacitados podrán ser excluidos de la competición.`,
          fr: `1. Lors de la réunion des juges et de la formation des juges, les exercices imposés sont revus à l'aide du texte explicatif officiel ou de la vidéo officielle, et les exercices libres sont examinés en détail quant à la qualité de la composition et de l'exécution, afin de préciser les points sur lesquels porte la notation.
2. Les juges jugés insuffisamment compétents lors de la réunion des juges peuvent être écartés de la compétition.`,
          ru: `1. На совещании судей и судейском семинаре обязательные упражнения разбираются по официальному письменному пояснению или официальной видеозаписи, а произвольные упражнения подробно обсуждаются с точки зрения качества композиции и исполнения, чтобы прояснить ориентиры оценки.
2. Судья, признанный на совещании судей недостаточно подготовленным, может быть отстранён от соревнований.`,
          hi: `1. निर्णायक बैठक और निर्णायक प्रशिक्षण सत्र में, निर्धारित प्रदर्शन के लिए आधिकारिक व्याख्या-पाठ या आधिकारिक वीडियो को आधार बनाया जाता है, और स्वतंत्र प्रदर्शन के लिए प्रदर्शन की संरचना तथा निष्पादन की गुणवत्ता पर पूरी तरह विचार करके अंक निर्धारण का केंद्र-बिंदु स्पष्ट करना चाहिए।
2. निर्णायक बैठक में अपर्याप्त क्षमता वाले पाए गए निर्णायक को प्रतियोगिता से हटाया जा सकता है।`,
        },
      },
      {
        title: {
          ja: '審判員宣誓',
          en: "Judges' Oath",
          zh: '裁判员宣誓',
          ko: '심판원 선서',
          es: 'Juramento de los jueces',
          fr: 'Serment des juges',
          ru: 'Клятва судьи',
          hi: 'निर्णायकों की शपथ',
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
          ko: `심판원은 다음의 선서문을 엄숙히 선서한다.

『저는 심판원의 자격에 있어서 스포츠의 품위 및 성실의 정신으로만 행동할 것, 그리고 인물·소속을 염두에 두지 아니하고 실시된 연기를 양심적으로 심판할 것을 맹세합니다.』
`,
          es: `Los jueces prestan solemnemente el siguiente juramento.

«En mi condición de juez, prometo actuar únicamente con espíritu de dignidad y honradez deportivas, y juzgar a conciencia los ejercicios realizados, sin atender a las personas ni a la entidad a la que pertenecen.»
`,
          fr: `Les juges prêtent solennellement le serment suivant.

« En ma qualité de juge, je promets de n'agir que dans l'esprit de dignité et d'intégrité du sport, et de juger en conscience les exercices présentés, sans considération de personne ni d'appartenance. »`,
          ru: `Судьи торжественно произносят следующую клятву.

«Я обещаю, что как судья буду действовать исключительно в духе спортивного достоинства и честности и буду добросовестно оценивать исполненные упражнения, невзирая на личность гимнаста и его организацию».`,
          hi: `निर्णायक निम्नलिखित शपथ गंभीरता से लेते हैं।

"निर्णायक के रूप में मैं वचन देता हूँ कि मैं केवल खेल की गरिमा और ईमानदारी की भावना से कार्य करूँगा, तथा व्यक्ति या संस्था का ध्यान रखे बिना, किए गए प्रदर्शन का निर्णय अंतरात्मा के अनुसार करूँगा।"`,
        },
      },
      {
        title: {
          ja: '審判団の構成',
          en: 'Composition of the Judging Panel',
          zh: '裁判组的组成',
          ko: '심판진의 구성',
          es: 'Composición del cuerpo de jueces',
          fr: 'Composition du corps de juges',
          ru: 'Состав судейской коллегии',
          hi: 'निर्णायक मंडल की संरचना',
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
          ko: `1. 경기회의 심판진은 원칙적으로 남자로 편성한다.
2. 심판진은 원칙적으로 상급 심판원, 심판장, 각 종목에서 구성과 실시로 나뉘어 주임 심판원 1명과 심판원 4명씩, 그리고 선심 2명, 계시심 1명과 보조 심판으로 구성된다.
3. 예선 경기와 결승 경기가 행해지는 경기회에서는 종목 및 구성과 실시를 바꾸어 심판한다.`,
          es: `1. Por regla general, el cuerpo de jueces de una competición está formado por hombres.
2. Por regla general, el cuerpo de jueces se compone del jurado superior, el juez árbitro y, en cada prueba, un panel de composición y otro de ejecución con un juez principal y cuatro jueces cada uno, además de dos jueces de línea, un juez cronometrador y jueces suplentes.
3. En las competiciones con fase clasificatoria y final, los jueces se intercambian entre pruebas y entre composición y ejecución.`,
          fr: `1. En principe, le corps de juges d'une compétition est composé d'hommes.
2. En principe, le corps de juges comprend le jury supérieur, le président du jury et, pour chaque épreuve, un panel de composition et un panel d'exécution, chacun composé d'un juge-arbitre et de quatre juges, ainsi que deux juges de ligne, un chronométreur et des juges remplaçants.
3. Lors des compétitions comportant des qualifications et une finale, les juges changent d'épreuve et alternent entre composition et exécution.`,
          ru: `1. Как правило, судейская коллегия соревнований формируется из мужчин.
2. Как правило, в судейскую коллегию входят высшее жюри, главный судья, а по каждому виду — бригады композиции и исполнения, в каждой из которых один старший судья и четыре судьи, а также два линейных судьи, один судья-хронометрист и запасные судьи.
3. На соревнованиях с квалификацией и финалом судьи меняются видами программы и меняются местами между композицией и исполнением.`,
          hi: `1. सिद्धांत रूप में प्रतियोगिता का निर्णायक मंडल पुरुषों से बनता है।
2. सिद्धांत रूप में निर्णायक मंडल में वरिष्ठ निर्णायक मंडल, मुख्य निर्णायक, तथा प्रत्येक स्पर्धा में संरचना और निष्पादन के लिए अलग-अलग 1 प्रधान निर्णायक और 4 निर्णायक, साथ ही 2 लाइन निर्णायक, 1 समयपाल और आरक्षित निर्णायक होते हैं।
3. जिन प्रतियोगिताओं में क्वालिफिकेशन और फ़ाइनल होते हैं, वहाँ स्पर्धा तथा संरचना और निष्पादन आपस में बदलकर निर्णय दिया जाता है।`,
        },
      },
      {
        title: {
          ja: '上級審判員',
          en: 'Superior Jury',
          zh: '上级裁判员',
          ko: '상급 심판원',
          es: 'Jurado superior',
          fr: 'Jury supérieur',
          ru: 'Высшее жюри',
          hi: 'वरिष्ठ निर्णायक मंडल',
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
          ko: `상급 심판원은 상급 심판부 내규에 근거하여 다음의 직무를 담당한다.

1. 경기를 감독하는 것과 반칙이나 경기 운영에 영향을 미치는 특별한 상황에 대처하는 것.
2. 심판원 1명 또는 여러 명에 의한 중대한 심판 오류가 있는 경우, 필요한 조치를 취하는 것.
3. 계속하여 심판원이 부여하는 점수를 재심사하여 업무가 불충분하거나 불공평하다고 여겨지는 심판원에 대하여 경고를 발하는 것.
4. 경고 후에도 만족스러운 결과에 이르지 못한 경우, 해당 심판원을 배제하고 교체하는 것.`,
          es: `El jurado superior desempeña las siguientes funciones conforme al reglamento interno del departamento de jueces superior.

1. Supervisar la competición y hacer frente a las infracciones y a las situaciones especiales que afecten al desarrollo de la competición.
2. Adoptar las medidas necesarias cuando uno o varios jueces cometan un error de arbitraje grave.
3. Revisar de forma continua las puntuaciones otorgadas por los jueces y amonestar a aquellos cuyo trabajo se considere insuficiente o parcial.
4. Apartar y sustituir a los jueces cuando la amonestación no dé un resultado satisfactorio.`,
          fr: `Le jury supérieur exerce les fonctions suivantes, conformément à son règlement intérieur.

1. Superviser la compétition et traiter les infractions et les situations particulières ayant une incidence sur son déroulement.
2. Prendre les mesures nécessaires lorsqu'un ou plusieurs juges commettent une erreur de jugement grave.
3. Contrôler en continu les notes attribuées par les juges et avertir ceux dont le travail paraît insuffisant ou partial.
4. Écarter et remplacer un juge lorsqu'un avertissement n'a pas produit de résultat satisfaisant.`,
          ru: `Высшее жюри выполняет следующие обязанности в соответствии со своим внутренним регламентом.

1. Наблюдать за ходом соревнований и решать вопросы, связанные с нарушениями и особыми обстоятельствами, влияющими на проведение соревнований.
2. Принимать необходимые меры при серьёзной судейской ошибке одного или нескольких судей.
3. Постоянно проверять выставляемые судьями оценки и выносить предупреждение судьям, чья работа представляется недостаточной или необъективной.
4. Отстранять и заменять судей, если предупреждение не дало удовлетворительного результата.`,
          hi: `वरिष्ठ निर्णायक मंडल अपने आंतरिक नियमों के आधार पर निम्नलिखित कार्य करता है।

1. प्रतियोगिता की देखरेख करना और नियम-उल्लंघन तथा प्रतियोगिता के संचालन को प्रभावित करने वाली विशेष स्थितियों से निपटना।
2. एक या कई निर्णायकों से गंभीर निर्णय-त्रुटि होने पर आवश्यक कार्रवाई करना।
3. निर्णायकों द्वारा दिए गए अंकों की लगातार पुनः जाँच करना और जिन निर्णायकों का कार्य अपर्याप्त या अनुचित लगे उन्हें चेतावनी देना।
4. चेतावनी के बाद संतोषजनक परिणाम न मिलने पर निर्णायक को हटाकर बदलना।`,
        },
      },
      {
        title: {
          ja: '審判長',
          en: 'Jury President',
          zh: '裁判长',
          ko: '심판장',
          es: 'Juez árbitro',
          fr: 'Président du jury',
          ru: 'Главный судья',
          hi: 'मुख्य निर्णायक',
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
          ko: `1. 심판장은 남자 리듬체조 위원회에서 임명한다.
2. 심판장은 정해진 일시·장소에 심판부를 소집하고, 경기회의 채점 및 성적 작성이 순조롭게 진행되도록 필요한 모든 결정을 한다.
3. 심판 회의에서 능력이 불충분하다고 인정되는 심판원을 경기회에서 제명할 수 있다.
4. 심판장은 경기회의 어떠한 기회에도 심판원에게 개입할 수 있다. 올바르고 만족스러운 방법으로 행동하지 아니하는 심판원에 대하여는 주임 심판원의 의견을 들은 후 이를 제명하고 교체할 수 있다.`,
          es: `1. El juez árbitro es nombrado por el Comité de Gimnasia Rítmica Masculina.
2. El juez árbitro convoca al departamento de jueces en la fecha, hora y lugar establecidos y adopta cuantas decisiones sean necesarias para que la puntuación y la elaboración de los resultados de la competición se desarrollen con normalidad.
3. Puede excluir de la competición a los jueces a los que en la reunión de jueces considere insuficientemente capacitados.
4. El juez árbitro puede intervenir ante los jueces en cualquier momento de la competición. A los jueces que no actúen de forma correcta y satisfactoria puede apartarlos y sustituirlos, tras oír la opinión del juez principal.`,
          fr: `1. Le président du jury est nommé par la Commission de gymnastique rythmique masculine.
2. Le président du jury convoque les juges aux date, heure et lieu fixés et prend toutes les décisions nécessaires au bon déroulement de la notation et de l'établissement des résultats.
3. Le président du jury peut écarter de la compétition les juges jugés insuffisamment compétents lors de la réunion des juges.
4. Le président du jury peut intervenir auprès des juges à tout moment de la compétition. Après avoir recueilli l'avis du juge-arbitre, il peut écarter et remplacer un juge dont le comportement n'est pas correct et satisfaisant.`,
          ru: `1. Главного судью назначает Комитет мужской художественной гимнастики.
2. Главный судья созывает судейскую бригаду в назначенное время и место и принимает все решения, необходимые для бесперебойного судейства и подведения результатов.
3. Главный судья может отстранить от соревнований судью, признанного на совещании судей недостаточно подготовленным.
4. Главный судья вправе вмешаться в работу судей в любой момент соревнований. Выслушав мнение старшего судьи, он может отстранить и заменить судью, который действует неверно или неудовлетворительно.`,
          hi: `1. मुख्य निर्णायक की नियुक्ति पुरुष लयबद्ध जिम्नास्टिक समिति करती है।
2. मुख्य निर्णायक निर्धारित तिथि, समय और स्थान पर निर्णायक विभाग को बुलाता है और प्रतियोगिता के अंक निर्धारण तथा परिणाम तैयार करने के सुचारु संचालन के लिए आवश्यक सभी निर्णय लेता है।
3. निर्णायक बैठक में अपर्याप्त क्षमता वाले पाए गए निर्णायक को वह प्रतियोगिता से हटा सकता है।
4. मुख्य निर्णायक प्रतियोगिता के किसी भी अवसर पर निर्णायकों में हस्तक्षेप कर सकता है। जो निर्णायक सही और संतोषजनक ढंग से कार्य न करें, उनके बारे में प्रधान निर्णायक की राय लेकर वह उन्हें हटा सकता है और बदल सकता है।`,
        },
      },
      {
        title: {
          ja: '主任審判員',
          en: 'Chief Judges',
          zh: '主裁判员',
          ko: '주임 심판원',
          es: 'Jueces principales',
          fr: 'Juges-arbitres',
          ru: 'Старшие судьи',
          hi: 'प्रधान निर्णायक',
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
          ko: `1. 주임 심판은 주임을 맡는 모든 연기를 채점한다. 다만 주임 심판원의 채점은 점수 계산에는 더하지 아니한다.
2. 주임 심판은 각 심판원이 제출한 채점을 주의 깊게 점검하고, 규칙에 반하는 채점이 이루어진 경우 또는 점수에 혼란이 있을 때에는 주임 심판의 득점을 제시하여 협의한다.
3. 주임 심판원은 최초의 경기자가 끝난 후 필요가 있으면 각 심판원을 소집하여 협의하고 공통의 출발점을 구한다.
4. 주임 심판은 재정 심판부의 결의에 참여한다.
5. 주임 심판원이 적용하는 감점이 있는 경우에는 이를 유효점의 평균에서 감점하여 최종 득점을 결정한다.`,
          es: `1. El juez principal puntúa todos los ejercicios del panel que dirige; no obstante, su puntuación no se incluye en el cálculo.
2. El juez principal revisa con atención las puntuaciones presentadas por cada juez y, cuando una puntuación infringe el reglamento o hay discrepancias entre ellas, muestra su propia puntuación y la somete a deliberación.
3. Tras finalizar el primer gimnasta, el juez principal reúne a los jueces, si es necesario, para acordar un punto de partida común.
4. El juez principal participa en las decisiones del jurado de apelación.
5. Si el juez principal aplica una penalización, esta se resta de la media de las puntuaciones válidas para determinar la nota final.`,
          fr: `1. Le juge-arbitre note tous les exercices du panel qu'il dirige, mais sa note n'entre pas dans le calcul.
2. Le juge-arbitre vérifie attentivement les notes remises par chaque juge. Si une note est contraire au règlement ou si les notes sont incohérentes, il présente sa propre note et en discute avec les juges.
3. Après le passage du premier gymnaste, le juge-arbitre réunit si nécessaire les juges pour s'accorder sur une base commune.
4. Le juge-arbitre participe aux décisions du jury d'appel.
5. Lorsque le juge-arbitre applique une pénalité, celle-ci est retranchée de la moyenne des notes retenues pour déterminer la note finale.`,
          ru: `1. Старший судья оценивает все упражнения в бригаде, которую возглавляет, однако его оценка в подсчёт не входит.
2. Старший судья внимательно проверяет оценки, выставленные каждым судьёй; если оценка нарушает правила или оценки расходятся, он показывает свою оценку и обсуждает её с судьями.
3. После выступления первого гимнаста старший судья при необходимости собирает судей, чтобы согласовать общую точку отсчёта.
4. Старший судья участвует в решениях апелляционного жюри.
5. Если старший судья применяет сбавку, она вычитается из среднего зачётных оценок и определяет итоговую оценку.`,
          hi: `1. प्रधान निर्णायक उन सभी प्रदर्शनों को अंक देता है जिनके लिए वह प्रधान है। लेकिन प्रधान निर्णायक के अंक अंकों की गणना में नहीं जोड़े जाते।
2. प्रधान निर्णायक हर निर्णायक द्वारा दिए गए अंकों की ध्यान से जाँच करता है, और यदि नियमों के विरुद्ध अंक दिए गए हों या अंकों में गड़बड़ी हो, तो वह अपने अंक दिखाकर चर्चा करता है।
3. पहले जिम्नास्ट के समाप्त होने के बाद, आवश्यकता होने पर प्रधान निर्णायक सभी निर्णायकों को बुलाकर चर्चा करता है और एक समान शुरुआती बिंदु तय करता है।
4. प्रधान निर्णायक अपील निर्णायक मंडल के निर्णयों में भाग लेता है।
5. यदि प्रधान निर्णायक कोई कटौती लगाता है, तो उसे गिने जाने वाले अंकों के औसत से घटाकर अंतिम अंक तय किया जाता है।`,
        },
      },
      {
        title: {
          ja: '構成（Ｄ・Ａ）審判',
          en: 'Composition (D/A) Judges',
          zh: '编排（D、A）裁判',
          ko: '구성(D·A) 심판',
          es: 'Jueces de composición (D/A)',
          fr: 'Juges de composition (D / A)',
          ru: 'Судьи композиции (D/A)',
          hi: 'संरचना (D, A) निर्णायक',
        },
        content: {
          ja: '構成審判は実施された演技の構成的価値を判断し10点満点で採点する。',
          en: 'Composition judges assess the compositional value of the routine performed and score it out of 10 points.',
          zh: '编排裁判判断所完成成套动作的编排价值，以10分满分进行评分。',
          ko: '구성 심판은 실시된 연기의 구성적 가치를 판단하여 10점 만점으로 채점한다.',
          es: 'Los jueces de composición valoran el valor compositivo del ejercicio realizado y lo puntúan sobre un máximo de 10 puntos.',
          fr: "Les juges de composition apprécient la valeur de composition de l'exercice présenté et le notent sur 10 points.",
          ru: 'Судьи композиции оценивают композиционную ценность исполненного упражнения по 10-балльной шкале.',
          hi: 'संरचना निर्णायक किए गए प्रदर्शन के संरचनात्मक मूल्य को आँकते हैं और 10 अंकों में से अंक देते हैं।',
        },
      },
      {
        title: {
          ja: '実施（Ｅ）審判',
          en: 'Execution (E) Judges',
          zh: '完成（E）裁判',
          ko: '실시(E) 심판',
          es: 'Jueces de ejecución (E)',
          fr: "Juges d'exécution (E)",
          ru: 'Судьи исполнения (E)',
          hi: 'निष्पादन (E) निर्णायक',
        },
        content: {
          ja: '実施審判は実施された演技の出来栄えを判断し10点満点で採点する。',
          en: 'Execution judges assess the quality of the routine performed and score it out of 10 points.',
          zh: '完成裁判判断所完成成套动作的完成质量，以10分满分进行评分。',
          ko: '실시 심판은 실시된 연기의 완성도를 판단하여 10점 만점으로 채점한다.',
          es: 'Los jueces de ejecución valoran la calidad del ejercicio realizado y lo puntúan sobre un máximo de 10 puntos.',
          fr: "Les juges d'exécution apprécient la qualité de l'exercice présenté et le notent sur 10 points.",
          ru: 'Судьи исполнения оценивают качество исполненного упражнения по 10-балльной шкале.',
          hi: 'निष्पादन निर्णायक किए गए प्रदर्शन की गुणवत्ता को आँकते हैं और 10 अंकों में से अंक देते हैं।',
        },
      },
      {
        title: {
          ja: '線審',
          en: 'Line Judges',
          zh: '线裁判',
          ko: '선심',
          es: 'Jueces de línea',
          fr: 'Juges de ligne',
          ru: 'Линейные судьи',
          hi: 'लाइन निर्णायक',
        },
        content: {
          ja: '線審は、演技面のコーナーに位置し、競技者の身体または手具の場外違反の有無を判定する。違反の都度、赤旗で合図し演技後に実施主任審判員に回数および減点を報告する。',
          en: "Line judges sit at the corners of the floor area and judge whether the gymnast's body or apparatus goes out of bounds. They signal each violation with a red flag and, after the routine, report the number of violations and the deductions to the execution chief judge.",
          zh: '线裁判位于场地的角落，判定参赛者的身体或器械有无出界违例。每次违例时用红旗示意，成套动作结束后向完成主裁判员报告次数及扣分。',
          ko: '선심은 연기 면의 코너에 위치하여 경기자의 신체 또는 수구의 장외 위반 여부를 판정한다. 위반이 있을 때마다 붉은 기로 신호하고 연기 후에 실시 주임 심판원에게 횟수 및 감점을 보고한다.',
          es: 'Los jueces de línea se sitúan en las esquinas del practicable y determinan si el cuerpo del gimnasta o el aparato salen fuera del área. Señalan cada infracción con una bandera roja y, al terminar el ejercicio, comunican al juez principal de ejecución el número de infracciones y las penalizaciones.',
          fr: "Les juges de ligne se placent aux angles du praticable et jugent si le corps du gymnaste ou son engin sort des limites. Ils signalent chaque sortie avec un drapeau rouge et, à la fin de l'exercice, indiquent au juge-arbitre d'exécution le nombre de sorties et les pénalités correspondantes.",
          ru: 'Линейные судьи располагаются по углам ковра и определяют, вышли ли тело гимнаста или предмет за пределы ковра. Каждое нарушение они отмечают красным флажком, а после упражнения сообщают их число и сбавки старшему судье исполнения.',
          hi: 'लाइन निर्णायक फ़्लोर के कोनों पर स्थित होते हैं और यह तय करते हैं कि जिम्नास्ट का शरीर या उपकरण सीमा से बाहर गया या नहीं। हर उल्लंघन पर वे लाल झंडी से संकेत देते हैं और प्रदर्शन के बाद निष्पादन के प्रधान निर्णायक को उल्लंघनों की संख्या तथा कटौती की सूचना देते हैं।',
        },
      },
      {
        title: {
          ja: '計時審',
          en: 'Timekeeper',
          zh: '计时裁判',
          ko: '계시심',
          es: 'Juez cronometrador',
          fr: 'Chronométreur',
          ru: 'Судья-хронометрист',
          hi: 'समयपाल',
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
          ko: `계시심은 다음의 시간을 계시하여 구성 주임 심판원에게 보고한다.

1. 입장부터 연기 개시까지의 시간
2. 연기 개시부터 연기 종료까지의 시간`,
          es: `El juez cronometrador mide los siguientes tiempos y los comunica al juez principal de composición.

1. El tiempo desde la entrada al practicable hasta el inicio del ejercicio
2. El tiempo desde el inicio del ejercicio hasta su final`,
          fr: `Le chronométreur mesure les durées suivantes et les communique au juge-arbitre de composition.

1. La durée entre l'entrée sur le praticable et le début de l'exercice
2. La durée entre le début et la fin de l'exercice`,
          ru: `Судья-хронометрист измеряет следующие отрезки времени и сообщает их старшему судье композиции.

1. время от выхода на ковёр до начала упражнения
2. время от начала до окончания упражнения`,
          hi: `समयपाल निम्नलिखित समय मापता है और संरचना के प्रधान निर्णायक को उसकी सूचना देता है।

1. फ़्लोर पर प्रवेश से प्रदर्शन शुरू होने तक का समय
2. प्रदर्शन के आरंभ से प्रदर्शन के अंत तक का समय`,
        },
      },
      {
        title: {
          ja: '補審',
          en: 'Reserve Judges',
          zh: '替补裁判',
          ko: '보조 심판',
          es: 'Jueces suplentes',
          fr: 'Juges remplaçants',
          ru: 'Запасные судьи',
          hi: 'आरक्षित निर्णायक',
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
裁定審判部は、理事会メンバー２名（うち一人は部長を務める）と審判部メンバー１名（採点業務に関与していないも者）または審判部が指名したエキスパート審判員で構成される。（合計３名）
理事会のメンバーは理事会が指名し、審判部メンバーは関連審判部が指名する。
裁定審判部の職務は：

1. 裁定審判部は競技終了後適切な時に上級審判部によって警告されたり外された審判員からの嘆願を取り扱う。
2. 裁定審判部は定款・競技規則、ルールとガイドラインの条件が守られているかも監視する。反則の場合には、裁定審判部は処分に責任がある機関に報告する。`,
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
          ko: `보조 심판은 심판 업무의 보조를 맡는다. 또한 긴급한 경우에는 심판 교체에 응한다.

【상급 심판부】
심판부장, FIG 기술위원(JGA 선출)이 상급 심판부를 구성한다. 다만 필요에 따라 심판부가 지정하는 전문가 1명(심판부원 멤버 또는 숙련 심판원)을 선출할 수 있다. (합계 2~3명)
상급 심판부장은 부원의 호선으로 정한다.
상급 심판부의 직무는:

1. 경기를 감독하는 것과 반칙이나 경기 운영에 영향을 미치는 특별한 상황에 대처하는 것
2. 심판원 1명 또는 여러 명에 의한 중대한 심판 오류가 있는 경우, 필요한 조치를 취하는 것
3. 계속하여 심판원이 부여하는 점수를 확인하여 업무가 불충분하거나 불공평하다고 여겨지는 심판원에 대하여 경고를 발하는 것
4. 경고 후에도 만족스러운 결과에 이르지 못한 경우, 해당 심판원을 배제하고 교체하는 것

【재정 심판부】내규
재정 심판부는 이사회 멤버 2명(그중 1명은 부장을 맡는다)과 심판부 멤버 1명(채점 업무에 관여하지 아니한 자) 또는 심판부가 지명한 전문 심판원으로 구성된다. (합계 3명)
이사회의 멤버는 이사회가 지명하고, 심판부 멤버는 관련 심판부가 지명한다.
재정 심판부의 직무는:

1. 재정 심판부는 경기 종료 후 적절한 때에 상급 심판부에 의하여 경고를 받거나 배제된 심판원으로부터의 탄원을 취급한다.
2. 재정 심판부는 정관·경기 규칙, 규칙과 가이드라인의 조건이 지켜지고 있는지도 감시한다. 반칙의 경우에는 재정 심판부는 처분에 책임이 있는 기관에 보고한다.`,
          es: `Los jueces suplentes colaboran en las tareas de arbitraje. Además, en caso de urgencia sustituyen a un juez.

[Departamento de jueces superior]
El departamento de jueces superior está formado por el director del departamento de jueces y el miembro del Comité Técnico de la FIG (designado por la Federación Japonesa de Gimnasia). No obstante, cuando sea necesario podrá incorporarse un experto designado por el departamento de jueces (un miembro del departamento o un juez experimentado) (de 2 a 3 personas en total).
El director del departamento de jueces superior se elige entre sus propios miembros.
Las funciones del departamento de jueces superior son:

1. Supervisar la competición y hacer frente a las infracciones y a las situaciones especiales que afecten al desarrollo de la competición
2. Adoptar las medidas necesarias cuando uno o varios jueces cometan un error de arbitraje grave
3. Revisar de forma continua las puntuaciones otorgadas por los jueces y amonestar a aquellos cuyo trabajo se considere insuficiente o parcial
4. Apartar y sustituir a los jueces cuando la amonestación no dé un resultado satisfactorio

[Jurado de apelación]Reglamento interno
El jurado de apelación está formado por dos miembros de la junta directiva (uno de los cuales ejerce de director) y un miembro del departamento de jueces que no participe en las tareas de puntuación, o bien un juez experto designado por el departamento de jueces (3 personas en total).
Los miembros de la junta directiva son designados por la propia junta, y el miembro del departamento de jueces, por el departamento correspondiente.
Las funciones del jurado de apelación son:

1. El jurado de apelación atiende, en el momento oportuno una vez finalizada la competición, las reclamaciones de los jueces amonestados o apartados por el departamento de jueces superior.
2. El jurado de apelación vigila asimismo que se cumplan los estatutos, el reglamento de competición y las reglas y directrices. En caso de infracción, lo comunica al órgano responsable de las sanciones.`,
          fr: `Les juges remplaçants assistent les juges dans leur travail et les remplacent en cas d'urgence.

[Jury supérieur]
Le jury supérieur se compose du responsable du département des juges et du membre du comité technique de la FIG (désigné par la JGA). Si nécessaire, un expert désigné par le département des juges (un membre du département ou un juge chevronné) peut s'y ajouter (soit deux à trois membres au total).
Le responsable du jury supérieur est choisi par ses membres parmi eux.
Les fonctions du jury supérieur sont les suivantes :

1. Superviser la compétition et traiter les infractions et les situations particulières ayant une incidence sur son déroulement
2. Prendre les mesures nécessaires lorsqu'un ou plusieurs juges commettent une erreur de jugement grave
3. Contrôler en continu les notes attribuées par les juges et avertir ceux dont le travail paraît insuffisant ou partial
4. Écarter et remplacer un juge lorsqu'un avertissement n'a pas produit de résultat satisfaisant

[Jury d'appel] Règlement intérieur
Le jury d'appel se compose de deux membres du conseil d'administration (dont l'un en assure la présidence) et d'un membre du département des juges n'ayant pas participé à la notation, ou d'un juge expert désigné par le département des juges (soit trois membres au total).
Les membres issus du conseil d'administration sont désignés par celui-ci, et le membre du département des juges est désigné par le département concerné.
Les fonctions du jury d'appel sont les suivantes :

1. Après la compétition, au moment opportun, le jury d'appel examine les recours des juges avertis ou écartés par le jury supérieur.
2. Le jury d'appel veille également au respect des statuts, du règlement des compétitions, des règles et des directives. En cas d'infraction, il en réfère à l'instance compétente en matière de sanctions.`,
          ru: `Запасные судьи помогают в судейской работе, а в экстренном случае заменяют судей.

[Высшее жюри]
В высшее жюри входят руководитель судейского комитета и член технического комитета FIG (выдвинутый JGA). При необходимости может быть добавлен один эксперт по назначению судейского комитета (член комитета или опытный судья) — всего два-три человека.
Руководитель высшего жюри избирается его членами из своего состава.
Обязанности высшего жюри:

1. наблюдать за ходом соревнований и решать вопросы, связанные с нарушениями и особыми обстоятельствами, влияющими на проведение соревнований
2. принимать необходимые меры при серьёзной судейской ошибке одного или нескольких судей
3. постоянно проверять выставляемые судьями оценки и выносить предупреждение судьям, чья работа представляется недостаточной или необъективной
4. отстранять и заменять судей, если предупреждение не дало удовлетворительного результата

[Апелляционное жюри] Внутренний регламент
В апелляционное жюри входят два члена совета директоров (один из них возглавляет жюри) и один член судейского комитета, не участвующий в судействе, либо судья-эксперт, назначенный судейским комитетом, — всего три человека.
Членов от совета директоров назначает совет директоров, члена от судейского комитета — соответствующий судейский комитет.
Обязанности апелляционного жюри:

1. В подходящее время после окончания соревнований апелляционное жюри рассматривает обращения судей, которым высшее жюри вынесло предупреждение или которых оно отстранило.
2. Апелляционное жюри также следит за соблюдением устава, правил соревнований, правил и руководящих указаний. При нарушении оно сообщает об этом органу, отвечающему за взыскания.`,
          hi: `आरक्षित निर्णायक निर्णायक कार्य में सहायता करते हैं। आपातकाल में वे निर्णायक की जगह भी लेते हैं।

[वरिष्ठ निर्णायक मंडल]
निर्णायक विभाग के प्रमुख और FIG तकनीकी समिति सदस्य (JGA द्वारा चुना गया) वरिष्ठ निर्णायक मंडल बनाते हैं। लेकिन आवश्यकता होने पर निर्णायक विभाग द्वारा नामित 1 विशेषज्ञ (विभाग का सदस्य या अनुभवी निर्णायक) चुना जा सकता है। (कुल 2–3 सदस्य)
वरिष्ठ निर्णायक मंडल का प्रमुख सदस्यों के आपसी चुनाव से तय होता है।
वरिष्ठ निर्णायक मंडल के कार्य हैं:

1. प्रतियोगिता की देखरेख करना और नियम-उल्लंघन तथा प्रतियोगिता के संचालन को प्रभावित करने वाली विशेष स्थितियों से निपटना
2. एक या कई निर्णायकों से गंभीर निर्णय-त्रुटि होने पर आवश्यक कार्रवाई करना
3. निर्णायकों द्वारा दिए गए अंकों की लगातार पुनः जाँच करना और जिन निर्णायकों का कार्य अपर्याप्त या अनुचित लगे उन्हें चेतावनी देना
4. चेतावनी के बाद संतोषजनक परिणाम न मिलने पर निर्णायक को हटाकर बदलना

[अपील निर्णायक मंडल] आंतरिक नियम
अपील निर्णायक मंडल में निदेशक मंडल के 2 सदस्य (जिनमें से एक प्रमुख का कार्य करता है) और निर्णायक विभाग का 1 सदस्य (जो अंक निर्धारण के कार्य में शामिल न हो) या निर्णायक विभाग द्वारा नामित विशेषज्ञ निर्णायक होते हैं। (कुल 3 सदस्य)
निदेशक मंडल के सदस्यों को निदेशक मंडल नामित करता है, और निर्णायक विभाग के सदस्य को संबंधित निर्णायक विभाग नामित करता है।
अपील निर्णायक मंडल के कार्य हैं:

1. अपील निर्णायक मंडल प्रतियोगिता समाप्त होने के बाद उपयुक्त समय पर उन निर्णायकों की अपीलें देखता है जिन्हें वरिष्ठ निर्णायक मंडल ने चेतावनी दी हो या हटाया हो।
2. अपील निर्णायक मंडल यह भी देखता है कि नियमावली, प्रतियोगिता नियम तथा नियमों और दिशानिर्देशों की शर्तों का पालन हो रहा है या नहीं। उल्लंघन की स्थिति में वह दंड के लिए उत्तरदायी संस्था को सूचना देता है।`,
        },
      },
    ],
  },
  {
    title: {
      ja: '一般的な採点規則',
      en: 'General Scoring Rules',
      zh: '一般评分规则',
      ko: '일반적인 채점 규칙',
      es: 'Reglas generales de puntuación',
      fr: 'Règles générales de notation',
      ru: 'Общие правила оценки',
      hi: 'सामान्य अंक निर्धारण नियम',
    },
    section: [
      {
        title: {
          ja: '採点方法と採点の開き',
          en: 'Scoring Method and Score Ranges',
          zh: '评分方法与评分的差距',
          ko: '채점 방법과 채점의 폭',
          es: 'Método de puntuación y diferencias entre puntuaciones',
          fr: 'Mode de notation et écarts de notes',
          ru: 'Способ оценки и допустимый разброс оценок',
          hi: 'अंक निर्धारण की विधि और अंकों का अंतर',
        },
        content: {
          ja: `1. 審判員は０点から10点までの各１点を20等分した点数で採点する。

2. 主任審判員と４名の審判の場合
構成・実施それぞれに主任審判員を除いた５名の審判員の最高点および最低点を除外し、有効点の平均（小数第４位以下を切り捨て）を求め合計する。主任審判員が適用する減点があった場合は、その平均点の合計から減点する。

3. 主任審判員が１審を兼ねる場合
構成実施それぞれに主任審判員を含めた４名の審判員の最高点および最低点を除外し、有効点の平均（少数第４位以下を切り捨て）を求め合計する。主任審判員が適用する減点があった場合は、その平均点の合計から減点する。

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
          ko: `1. 심판원은 0점부터 10점까지 각 1점을 20등분한 점수로 채점한다.

2. 주임 심판원과 4명의 심판의 경우
구성·실시 각각에 주임 심판원을 제외한 5명의 심판원의 최고점 및 최저점을 제외하고, 유효점의 평균(소수점 넷째 자리 이하 버림)을 구하여 합계한다. 주임 심판원이 적용하는 감점이 있는 경우에는 그 평균점의 합계에서 감점한다.

3. 주임 심판원이 1심을 겸하는 경우
구성·실시 각각에 주임 심판원을 포함한 4명의 심판원의 최고점 및 최저점을 제외하고, 유효점의 평균(소수점 넷째 자리 이하 버림)을 구하여 합계한다. 주임 심판원이 적용하는 감점이 있는 경우에는 그 평균점의 합계에서 감점한다.

4. 유효점의 폭은 다음의 점수보다 커서는 아니 된다.

5. 전 심판원의 채점 최고점과 최저점의 폭은 다음의 점수보다 커서는 아니 된다.`,
          es: `1. Los jueces puntúan de 0 a 10 puntos con una escala en la que cada punto se divide en 20 partes.

2. Con un juez principal y cuatro jueces
En composición y en ejecución por separado, se descartan la puntuación más alta y la más baja de los cinco jueces, excluido el juez principal, se calcula la media de las puntuaciones válidas (truncada a partir del cuarto decimal) y se suman ambas medias. Si el juez principal aplica una penalización, esta se resta de la suma de las medias.

3. Cuando el juez principal actúa además como uno de los jueces
En composición y en ejecución por separado, se descartan la puntuación más alta y la más baja de los cuatro jueces, incluido el juez principal, se calcula la media de las puntuaciones válidas (truncada a partir del cuarto decimal) y se suman ambas medias. Si el juez principal aplica una penalización, esta se resta de la suma de las medias.

4. La diferencia entre las puntuaciones válidas no puede ser mayor que los valores siguientes.

5. La diferencia entre la puntuación más alta y la más baja de todos los jueces no puede ser mayor que los valores siguientes.`,
          fr: `1. Les juges notent de 0 à 10 points, par paliers d'un vingtième de point.

2. Avec un juge-arbitre et quatre juges
Pour la composition et l'exécution séparément, la note la plus haute et la note la plus basse des juges autres que le juge-arbitre sont écartées, la moyenne des notes retenues est calculée (tronquée après la troisième décimale), puis les deux moyennes sont additionnées. Lorsque le juge-arbitre applique une pénalité, celle-ci est retranchée de ce total.

3. Lorsque le juge-arbitre fait aussi office de juge
Pour la composition et l'exécution séparément, la note la plus haute et la note la plus basse des quatre juges, juge-arbitre compris, sont écartées, la moyenne des notes retenues est calculée (tronquée après la troisième décimale), puis les deux moyennes sont additionnées. Lorsque le juge-arbitre applique une pénalité, celle-ci est retranchée de ce total.

4. L'écart entre les notes retenues ne doit pas dépasser les valeurs suivantes.

5. L'écart entre la note la plus haute et la note la plus basse de l'ensemble des juges ne doit pas dépasser les valeurs suivantes.`,
          ru: `1. Судьи выставляют оценки от 0 до 10 баллов с шагом в одну двадцатую балла.

2. Старший судья и четыре судьи
Отдельно по композиции и по исполнению отбрасываются высшая и низшая оценки судей, не считая старшего судьи, выводится среднее зачётных оценок (с отбрасыванием знаков после третьего десятичного) и эти средние складываются. Если старший судья применяет сбавку, она вычитается из полученной суммы.

3. Старший судья также работает как один из судей
Отдельно по композиции и по исполнению отбрасываются высшая и низшая оценки четырёх судей, включая старшего судью, выводится среднее зачётных оценок (с отбрасыванием знаков после третьего десятичного) и эти средние складываются. Если старший судья применяет сбавку, она вычитается из полученной суммы.

4. Разброс зачётных оценок не должен превышать значений, указанных ниже.

5. Разброс между высшей и низшей оценками всех судей не должен превышать значений, указанных ниже.`,
          hi: `1. निर्णायक 0 से 10 अंकों तक, प्रत्येक 1 अंक को 20 बराबर भागों में बाँटकर अंक देते हैं।

2. प्रधान निर्णायक और 4 निर्णायकों की स्थिति में
संरचना और निष्पादन दोनों में प्रधान निर्णायक को छोड़कर 5 निर्णायकों के उच्चतम और न्यूनतम अंक हटाकर, गिने जाने वाले अंकों का औसत निकाला जाता है (दशमलव के चौथे स्थान से आगे काट दिया जाता है) और दोनों को जोड़ा जाता है। यदि प्रधान निर्णायक कोई कटौती लगाता है, तो उस औसत के जोड़ से कटौती की जाती है।

3. जब प्रधान निर्णायक एक निर्णायक का कार्य भी करता है
संरचना और निष्पादन दोनों में प्रधान निर्णायक सहित 4 निर्णायकों के उच्चतम और न्यूनतम अंक हटाकर, गिने जाने वाले अंकों का औसत निकाला जाता है (दशमलव के चौथे स्थान से आगे काट दिया जाता है) और दोनों को जोड़ा जाता है। यदि प्रधान निर्णायक कोई कटौती लगाता है, तो उस औसत के जोड़ से कटौती की जाती है।

4. गिने जाने वाले अंकों का अंतर नीचे दिए गए अंकों से अधिक नहीं होना चाहिए।

5. सभी निर्णायकों के उच्चतम और न्यूनतम अंक का अंतर नीचे दिए गए अंकों से अधिक नहीं होना चाहिए।`,
        },
        image: [
          {
            src: '/images/rules/yuukouten.png',
            alt: {
              ja: '有効点の開き',
              en: 'Allowed range of the counting scores',
              zh: '有效分的差距',
              ko: '유효점의 폭',
              es: 'Diferencia entre las puntuaciones válidas',
              fr: 'Écart admis entre les notes retenues',
              ru: 'Допустимый разброс зачётных оценок',
              hi: 'गिने जाने वाले अंकों का अंतर',
            },
          },
          {
            src: '/images/rules/tennsuu.png',
            alt: {
              ja: '全審判員の点数の開き',
              en: "Allowed range of all judges' scores",
              zh: '全体裁判员分数的差距',
              ko: '전 심판원의 점수의 폭',
              es: 'Diferencia entre las puntuaciones de todos los jueces',
              fr: 'Écart admis entre les notes de tous les juges',
              ru: 'Допустимый разброс оценок всех судей',
              hi: 'सभी निर्णायकों के अंकों का अंतर',
            },
          },
        ],
      },
      {
        title: {
          ja: '基準点',
          en: 'Base Score',
          zh: '基准分',
          ko: '기준점',
          es: 'Puntuación de referencia',
          fr: 'Note de référence',
          ru: 'Базовая оценка',
          hi: 'आधार अंक',
        },
        content: {
          ja: `基準点は、全審判員と主任審判員が集合して話し合っても問題が解決されない場合に適用される。計算は次のように行う。
（有効点の平均＋主任審判員の採点）／２＝基準点`,
          en: `The base score is used when the judges and the chief judge cannot resolve a problem even after discussing it together. It is calculated as follows.
(Average of the counting scores + chief judge's score) / 2 = base score`,
          zh: `基准分在全体裁判员与主裁判员集合协商后问题仍未解决时适用。计算方法如下。
（有效分的平均分＋主裁判员的评分）／2＝基准分`,
          ko: `기준점은 전 심판원과 주임 심판원이 모여 논의하여도 문제가 해결되지 아니하는 경우에 적용된다. 계산은 다음과 같이 한다.
(유효점의 평균 + 주임 심판원의 채점) / 2 = 기준점`,
          es: `La puntuación de referencia se aplica cuando el problema no se resuelve ni siquiera después de que todos los jueces y el juez principal se reúnan a deliberar. El cálculo se realiza como sigue.
(media de las puntuaciones válidas+puntuación del juez principal)/2=puntuación de referencia`,
          fr: `La note de référence s'applique lorsque les juges et le juge-arbitre, réunis pour en discuter, ne parviennent pas à résoudre le problème. Elle se calcule ainsi.
(Moyenne des notes retenues + note du juge-arbitre) / 2 = note de référence`,
          ru: `Базовая оценка применяется, когда вопрос не удаётся решить даже после совместного обсуждения всех судей и старшего судьи. Она рассчитывается так:
(среднее зачётных оценок + оценка старшего судьи) / 2 = базовая оценка`,
          hi: `आधार अंक तब लगाया जाता है जब सभी निर्णायक और प्रधान निर्णायक एकत्र होकर चर्चा करने पर भी समस्या हल न हो। गणना इस प्रकार की जाती है।
(गिने जाने वाले अंकों का औसत + प्रधान निर्णायक के अंक) / 2 = आधार अंक`,
        },
      },
      {
        title: {
          ja: '演技時間',
          en: 'Duration of the Routine',
          zh: '成套时间',
          ko: '연기 시간',
          es: 'Duración del ejercicio',
          fr: "Durée de l'exercice",
          ru: 'Продолжительность упражнения',
          hi: 'प्रदर्शन का समय',
        },
        content: {
          ja: `1. 競技規則47条の時間に違反した場合は、長すぎても短すぎても減点とする。
【構成主任審判より減点：１秒につき・・・0.005点】

2. 演技時間が下記に満たなかった場合は得点を次の通りにする。
団体競技　２分３０秒　　　個人競技　１分００秒
【得点：構成・実施とも0.00点】`,
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
          ko: `1. 경기 규칙 제47조의 시간을 위반한 경우에는 너무 길어도 너무 짧아도 감점한다.
【구성 주임 심판으로부터 감점: 1초당…0.005점】

2. 연기 시간이 아래에 미치지 못한 경우에는 득점을 다음과 같이 한다.
단체 경기 2분 30초   개인 경기 1분 00초
【득점: 구성·실시 모두 0.00점】`,
          es: `1. Si no se respeta el tiempo establecido en el artículo 47 del reglamento de competición, se penaliza tanto el exceso como el defecto.
[Penalización del juez principal de composición: por cada segundo...0.005 puntos]

2. Si el ejercicio no alcanza la duración indicada a continuación, la puntuación será la siguiente.
Competición por conjuntos 2 min 30 s   Competición individual 1 min 00 s
[Puntuación: 0.00 puntos tanto en composición como en ejecución]`,
          fr: `1. Si la durée prévue à l'article 47 du règlement des compétitions n'est pas respectée, une pénalité est appliquée, que l'exercice soit trop long ou trop court.
[Pénalité du juge-arbitre de composition : 0,005 point par seconde]

2. Si l'exercice est plus court que la durée ci-dessous, la note est la suivante.
Compétition par ensembles : 2 min 30 s    Compétition individuelle : 1 min 00 s
[Note : 0,00 point en composition comme en exécution]`,
          ru: `1. Нарушение времени, установленного статьёй 47 Правил соревнований, влечёт сбавку как при слишком длинном, так и при слишком коротком упражнении.
[Сбавка старшего судьи композиции: 0,005 балла за каждую секунду]

2. Если упражнение короче указанного ниже, оценка выставляется так:
групповые соревнования — 2 минуты 30 секунд; индивидуальные соревнования — 1 минута 00 секунд
[Оценка: 0,00 балла и за композицию, и за исполнение]`,
          hi: `1. प्रतियोगिता नियमों के अनुच्छेद 47 के समय का उल्लंघन होने पर, प्रदर्शन बहुत लंबा हो या बहुत छोटा, कटौती की जाती है।
[संरचना के प्रधान निर्णायक से कटौती: प्रति 1 सेकंड ... 0.005 अंक]

2. यदि प्रदर्शन का समय नीचे दिए गए समय से कम हो, तो अंक इस प्रकार होंगे।
समूह प्रतियोगिता 2 मिनट 30 सेकंड    व्यक्तिगत प्रतियोगिता 1 मिनट 00 सेकंड
[अंक: संरचना और निष्पादन दोनों 0.00 अंक]`,
        },
      },
      {
        title: {
          ja: '演技開始までの時間',
          en: 'Time Before the Start of the Routine',
          zh: '至成套动作开始的时间',
          ko: '연기 개시까지의 시간',
          es: 'Tiempo hasta el inicio del ejercicio',
          fr: "Délai avant le début de l'exercice",
          ru: 'Время до начала упражнения',
          hi: 'प्रदर्शन शुरू होने तक का समय',
        },
        content: {
          ja: `入場から演技開始までの時間が次の時間を超えた場合は減点とする。
団体競技・・・３０秒　　　個人競技・・・２０秒
【実施主任審判より減点・・・0.20点】`,
          en: `A deduction is applied if the time from entering the floor area to the start of the routine exceeds the following.
Group competition: 30 s    Individual competition: 20 s
[Deduction by the execution chief judge: 0.20 points]`,
          zh: `从入场到成套动作开始的时间超过下列时间时予以扣分。
团体比赛……30秒　　　个人比赛……20秒
【由完成主裁判扣分……0.20分】`,
          ko: `입장부터 연기 개시까지의 시간이 다음 시간을 초과한 경우에는 감점한다.
단체 경기…30초   개인 경기…20초
【실시 주임 심판으로부터 감점…0.20점】`,
          es: `Se penaliza cuando el tiempo desde la entrada al practicable hasta el inicio del ejercicio supera los valores siguientes.
Competición por conjuntos...30 s   Competición individual...20 s
[Penalización del juez principal de ejecución...0.20 puntos]`,
          fr: `Une pénalité est appliquée si le temps écoulé entre l'entrée sur le praticable et le début de l'exercice dépasse les valeurs suivantes.
Compétition par ensembles : 30 s    Compétition individuelle : 20 s
[Pénalité du juge-arbitre d'exécution : 0,20 point]`,
          ru: `Сбавка применяется, если время от выхода на ковёр до начала упражнения превышает:
групповые соревнования — 30 секунд; индивидуальные соревнования — 20 секунд
[Сбавка старшего судьи исполнения: 0,20 балла]`,
          hi: `फ़्लोर पर प्रवेश से प्रदर्शन शुरू होने तक का समय नीचे दिए गए समय से अधिक होने पर कटौती की जाती है।
समूह प्रतियोगिता ... 30 सेकंड    व्यक्तिगत प्रतियोगिता ... 20 सेकंड
[निष्पादन के प्रधान निर्णायक से कटौती ... 0.20 अंक]`,
        },
      },
      {
        title: {
          ja: '演技面への入退場',
          en: 'Entering and Leaving the Floor Area',
          zh: '进入和退出场地',
          ko: '연기 면으로의 입퇴장',
          es: 'Entrada y salida del practicable',
          fr: 'Entrée et sortie du praticable',
          ru: 'Выход на ковёр и уход с него',
          hi: 'फ़्लोर पर प्रवेश और निकास',
        },
        content: {
          ja: `演技面への入退場は、徒歩または駆け足で速やかに行わなければならない。
【違反した場合　実施審判より減点・・・0.20点】`,
          en: `Gymnasts must enter and leave the floor area promptly, walking or running.
[Violation: deduction by the execution judges, 0.20 points]`,
          zh: `进入和退出场地必须以步行或小跑迅速进行。
【违反时　由完成裁判扣分……0.20分】`,
          ko: `연기 면으로의 입퇴장은 도보 또는 구보로 신속하게 하여야 한다.
【위반한 경우 실시 심판으로부터 감점…0.20점】`,
          es: `La entrada y la salida del practicable deben realizarse con prontitud, andando o corriendo.
[En caso de infracción, penalización de los jueces de ejecución...0.20 puntos]`,
          fr: `Les gymnastes doivent entrer sur le praticable et en sortir sans tarder, en marchant ou en courant.
[En cas de manquement : pénalité des juges d'exécution, 0,20 point]`,
          ru: `Выходить на ковёр и уходить с него нужно без промедления, шагом или бегом.
[При нарушении сбавка судей исполнения: 0,20 балла]`,
          hi: `फ़्लोर पर प्रवेश और निकास चलकर या दौड़कर तुरंत करना चाहिए।
[उल्लंघन होने पर निष्पादन निर्णायकों से कटौती ... 0.20 अंक]`,
        },
      },
      {
        title: {
          ja: '場外',
          en: 'Out of Bounds',
          zh: '出界',
          ko: '장외',
          es: 'Salida del practicable',
          fr: 'Sortie du praticable',
          ru: 'Выход за пределы ковра',
          hi: 'सीमा से बाहर',
        },
        content: {
          ja: `場外の扱いは以下のとおりとし、実施主任審判より減点する。
＊５、６の各種具とは２つ組の手具のそれぞれを指す。

1. 体の一部や手具が競技面を超えて床に触れた場合を場外とする。
空中でラインを超えても減点の対象とはならない。

2. 保持された手具がラインオーバーした場合は、身体の一部として扱い減点する。" +

3. 片足、両足または身体の一部がラインオーバーをした場合。【減点：１回につき・・・0.10点】" +

4. 団体競技について、何人かの競技者が同時にラインオーバーをした場合。
【減点：１名につき・・・0.10点】

5. 手具が身体から離れてラインオーバーした場合。
【減点：１名につき・・・0.10点】

6. １回の過失により身体や手具が、繰り返しラインオーバーをした場合。
【減点：身体または各手具１回につき・・・0.10点】`,
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
          ko: `장외의 취급은 다음과 같이 하며, 실시 주임 심판으로부터 감점한다.
* 5, 6의 각 수구란 2개 한 벌의 수구 각각을 가리킨다.

1. 몸의 일부나 수구가 경기 면을 넘어 바닥에 닿은 경우를 장외로 한다.
공중에서 라인을 넘더라도 감점의 대상이 되지 아니한다.

2. 보유한 수구가 라인 오버한 경우에는 신체의 일부로 취급하여 감점한다.

3. 한 발, 두 발 또는 신체의 일부가 라인 오버를 한 경우. 【감점: 1회당…0.10점】

4. 단체 경기에 대하여, 여러 명의 경기자가 동시에 라인 오버를 한 경우.
【감점: 1명당…0.10점】

5. 수구가 신체에서 떨어져 라인 오버한 경우.
【감점: 1명당…0.10점】

6. 1회의 과실로 신체나 수구가 반복하여 라인 오버를 한 경우.
【감점: 신체 또는 각 수구 1회당…0.10점】`,
          es: `La salida del practicable se trata como sigue y la penalización la aplica el juez principal de ejecución.
*En los puntos 5 y 6, «cada aparato» se refiere a cada uno de los dos aparatos del par.

1. Se considera salida del practicable cuando una parte del cuerpo o el aparato tocan el suelo más allá del área de competición.
Sobrepasar la línea en el aire no es motivo de penalización.

2. Cuando un aparato sostenido por el gimnasta sobrepasa la línea, se trata como una parte del cuerpo y se penaliza.

3. Cuando un pie, ambos pies o una parte del cuerpo sobrepasan la línea. [Penalización: por cada vez...0.10 puntos]

4. En la competición por conjuntos, cuando varios gimnastas sobrepasan la línea a la vez.
[Penalización: por cada gimnasta...0.10 puntos]

5. Cuando el aparato se separa del cuerpo y sobrepasa la línea.
[Penalización: por cada gimnasta...0.10 puntos]

6. Cuando, por un mismo error, el cuerpo o el aparato sobrepasan la línea repetidamente.
[Penalización: por cada vez del cuerpo o de cada aparato...0.10 puntos]`,
          fr: `Les sorties du praticable sont traitées comme suit, et la pénalité est appliquée par le juge-arbitre d'exécution.
* Aux points 5 et 6, « chaque engin » désigne chacun des deux engins d'une paire.

1. Il y a sortie lorsqu'une partie du corps ou l'engin touche le sol au-delà du praticable.
Franchir la ligne en l'air n'est pas pénalisé.

2. Un engin tenu par le gymnaste qui franchit la ligne est assimilé à une partie du corps et pénalisé.

3. Un pied, les deux pieds ou une autre partie du corps franchit la ligne. [Pénalité : 0,10 point par sortie]

4. En compétition par ensembles, plusieurs gymnastes franchissent la ligne en même temps.
[Pénalité : 0,10 point par gymnaste]

5. Un engin qui a quitté le corps franchit la ligne.
[Pénalité : 0,10 point par gymnaste]

6. Le corps ou l'engin franchit la ligne à plusieurs reprises à la suite d'une seule faute.
[Pénalité : 0,10 point par sortie, pour le corps comme pour chaque engin]`,
          ru: `Выход за пределы ковра учитывается так, сбавку применяет старший судья исполнения.
* В пунктах 5 и 6 «каждый предмет» означает каждый из двух предметов пары.

1. Выходом за пределы ковра считается касание пола частью тела или предметом за границей ковра.
Пересечение линии в воздухе не наказывается.

2. Предмет, который гимнаст держит в руках и который пересёк линию, рассматривается как часть тела и наказывается сбавкой.

3. Одна стопа, обе стопы или иная часть тела пересекли линию. [Сбавка: 0,10 балла за каждый раз]

4. В групповых соревнованиях линию одновременно пересекли несколько гимнастов.
[Сбавка: 0,10 балла за каждого гимнаста]

5. Линию пересёк предмет, отделившийся от тела.
[Сбавка: 0,10 балла за каждого гимнаста]

6. Из-за одной ошибки тело или предмет пересекали линию неоднократно.
[Сбавка: 0,10 балла за каждый раз — за тело и за каждый предмет]`,
          hi: `सीमा से बाहर जाने का निपटारा इस प्रकार होता है, और कटौती निष्पादन का प्रधान निर्णायक करता है।
* बिंदु 5 और 6 में "प्रत्येक उपकरण" का अर्थ 2 के जोड़े वाले उपकरणों में से हर एक है।

1. शरीर का कोई भाग या उपकरण फ़्लोर की सीमा पार करके ज़मीन को छू ले, तो उसे सीमा से बाहर माना जाता है।
हवा में लाइन पार करने पर कटौती नहीं होती।

2. जिम्नास्ट के हाथ में पकड़ा हुआ उपकरण लाइन पार करे, तो उसे शरीर का भाग मानकर कटौती की जाती है।

3. एक पैर, दोनों पैर या शरीर का कोई भाग लाइन पार करे। [कटौती: प्रति बार ... 0.10 अंक]

4. समूह प्रतियोगिता में कई जिम्नास्ट एक साथ लाइन पार करें।
[कटौती: प्रति जिम्नास्ट ... 0.10 अंक]

5. उपकरण शरीर से अलग होकर लाइन पार करे।
[कटौती: प्रति जिम्नास्ट ... 0.10 अंक]

6. एक ही गलती से शरीर या उपकरण बार-बार लाइन पार करे।
[कटौती: शरीर या प्रत्येक उपकरण के लिए प्रति बार ... 0.10 अंक]`,
        },
      },
      {
        title: {
          ja: '試合着',
          en: 'Competition Attire',
          zh: '比赛服',
          ko: '경기복',
          es: 'Vestimenta de competición',
          fr: 'Tenue de compétition',
          ru: 'Соревновательная форма',
          hi: 'प्रतियोगिता पोशाक',
        },
        content: {
          ja: `試合着に関する違反は以下のとおり減点する。

1. 競技規則39条に違反した場合（含所属マーク）ただし、プリント柄の若干の違いは減点しない。
【構成主任審判より減点：１名につき・・・0.20点】

2. 破れた服装で演技した場合。ただし演技中に敗れたものは減点しない。
【実施審判より減点：１名につき・・・0.10点】

3. 著しく服装が乱れた場合。
【実施審判より減点：１名につき・・・0.10点】`,
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
          ko: `경기복에 관한 위반은 다음과 같이 감점한다.

1. 경기 규칙 제39조를 위반한 경우(소속 마크 포함). 다만 프린트 무늬의 약간의 차이는 감점하지 아니한다.
【구성 주임 심판으로부터 감점: 1명당…0.20점】

2. 찢어진 복장으로 연기한 경우. 다만 연기 중에 찢어진 것은 감점하지 아니한다.
【실시 심판으로부터 감점: 1명당…0.10점】

3. 복장이 현저하게 흐트러진 경우.
【실시 심판으로부터 감점: 1명당…0.10점】`,
          es: `Las infracciones relativas a la vestimenta de competición se penalizan como sigue.

1. Infracción del artículo 39 del reglamento de competición (incluido el emblema de la entidad). No obstante, no se penalizan las pequeñas diferencias en los estampados.
[Penalización del juez principal de composición: por cada gimnasta...0.20 puntos]

2. Competir con la vestimenta rota. No obstante, no se penaliza lo que se rompa durante el ejercicio.
[Penalización de los jueces de ejecución: por cada gimnasta...0.10 puntos]

3. Vestimenta notablemente desarreglada.
[Penalización de los jueces de ejecución: por cada gimnasta...0.10 puntos]`,
          fr: `Les manquements relatifs à la tenue de compétition sont pénalisés comme suit.

1. Manquement à l'article 39 du règlement des compétitions (écusson compris). De légères différences dans les motifs imprimés ne sont pas pénalisées.
[Pénalité du juge-arbitre de composition : 0,20 point par gymnaste]

2. Exercice présenté dans une tenue déchirée. Une tenue déchirée pendant l'exercice n'est pas pénalisée.
[Pénalité des juges d'exécution : 0,10 point par gymnaste]

3. Tenue nettement en désordre.
[Pénalité des juges d'exécution : 0,10 point par gymnaste]`,
          ru: `Нарушения, связанные с соревновательной формой, наказываются так.

1. Нарушение статьи 39 Правил соревнований (включая эмблему). Незначительные различия в набивном рисунке не наказываются.
[Сбавка старшего судьи композиции: 0,20 балла за каждого гимнаста]

2. Выступление в порванной форме. Форма, порвавшаяся во время упражнения, не наказывается.
[Сбавка судей исполнения: 0,10 балла за каждого гимнаста]

3. Форма пришла в заметный беспорядок.
[Сбавка судей исполнения: 0,10 балла за каждого гимнаста]`,
          hi: `प्रतियोगिता पोशाक से जुड़े उल्लंघनों पर इस प्रकार कटौती होती है।

1. प्रतियोगिता नियमों के अनुच्छेद 39 का उल्लंघन (संस्था के चिह्न सहित)। लेकिन छपे हुए प्रिंट के थोड़े अंतर पर कटौती नहीं होती।
[संरचना के प्रधान निर्णायक से कटौती: प्रति जिम्नास्ट ... 0.20 अंक]

2. फटी पोशाक में प्रदर्शन करना। लेकिन प्रदर्शन के दौरान फटी पोशाक पर कटौती नहीं होती।
[निष्पादन निर्णायकों से कटौती: प्रति जिम्नास्ट ... 0.10 अंक]

3. पोशाक का बहुत अधिक अस्त-व्यस्त हो जाना।
[निष्पादन निर्णायकों से कटौती: प्रति जिम्नास्ट ... 0.10 अंक]`,
        },
      },
      {
        title: {
          ja: '伴奏音楽',
          en: 'Accompanying Music',
          zh: '伴奏音乐',
          ko: '반주 음악',
          es: 'Música de acompañamiento',
          fr: "Musique d'accompagnement",
          ru: 'Музыкальное сопровождение',
          hi: 'संगत संगीत',
        },
        content: {
          ja: `競技規則第45条に基づき、１から４の減点をする。

1. 伴奏音楽がなかった場合。　【構成主任審判より減点：0.50点】

2. 入退場に伴奏音楽をつけた場合。　【構成主任審判員より減点：0.20点】

3. 音楽に３秒以上の停止があった場合　【構成審判より減点：0.20点】

4. 組織者側に責任のない理由で音楽が中断された場合は、原則として復行できない。
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
          ko: `경기 규칙 제45조에 근거하여 1부터 4의 감점을 한다.

1. 반주 음악이 없었던 경우.  【구성 주임 심판으로부터 감점: 0.50점】

2. 입퇴장에 반주 음악을 붙인 경우.  【구성 주임 심판원으로부터 감점: 0.20점】

3. 음악에 3초 이상의 정지가 있었던 경우  【구성 심판으로부터 감점: 0.20점】

4. 주최자 측에 책임이 없는 이유로 음악이 중단된 경우에는 원칙적으로 다시 할 수 없다.
중단이 있었던 경우, 심판장과 경기부장은 원인을 신속히 확인하여 처리에 임한다.`,
          es: `Conforme al artículo 45 del reglamento de competición, se aplican las penalizaciones 1 a 4.

1. Ausencia de música de acompañamiento. [Penalización del juez principal de composición: 0.50 puntos]

2. Uso de música de acompañamiento en la entrada o en la salida. [Penalización del juez principal de composición: 0.20 puntos]

3. Interrupción de la música de 3 segundos o más [Penalización de los jueces de composición: 0.20 puntos]

4. Cuando la música se interrumpe por causas no imputables a la organización, por regla general el ejercicio no puede repetirse.
Si se produce una interrupción, el juez árbitro y el director de competición determinan sin demora la causa y resuelven la situación.`,
          fr: `En application de l'article 45 du règlement des compétitions, les pénalités 1 à 4 sont appliquées.

1. Absence de musique d'accompagnement.  [Pénalité du juge-arbitre de composition : 0,50 point]

2. Musique diffusée pendant l'entrée ou la sortie du praticable.  [Pénalité du juge-arbitre de composition : 0,20 point]

3. Interruption de la musique de 3 secondes ou plus.  [Pénalité des juges de composition : 0,20 point]

4. Si la musique s'interrompt pour une cause non imputable aux organisateurs, l'exercice ne peut en principe pas être repris.
En cas d'interruption, le président du jury et le directeur de la compétition en déterminent rapidement la cause et y remédient.`,
          ru: `На основании статьи 45 Правил соревнований применяются сбавки 1–4.

1. Музыкальное сопровождение отсутствовало.  [Сбавка старшего судьи композиции: 0,50 балла]

2. Музыка звучала при выходе на ковёр или уходе с него.  [Сбавка старшего судьи композиции: 0,20 балла]

3. Пауза в музыке 3 секунды и более.  [Сбавка судей композиции: 0,20 балла]

4. Если музыка прервалась по причине, за которую организаторы не отвечают, упражнение, как правило, не повторяется.
При остановке музыки главный судья и директор соревнований незамедлительно выясняют причину и принимают меры.`,
          hi: `प्रतियोगिता नियमों के अनुच्छेद 45 के आधार पर 1 से 4 तक की कटौती की जाती है।

1. संगत संगीत न होना।  [संरचना के प्रधान निर्णायक से कटौती: 0.50 अंक]

2. प्रवेश और निकास के समय संगत संगीत बजाना।  [संरचना के प्रधान निर्णायक से कटौती: 0.20 अंक]

3. संगीत में 3 सेकंड या उससे अधिक की रुकावट होना  [संरचना निर्णायकों से कटौती: 0.20 अंक]

4. यदि आयोजकों की जिम्मेदारी न होने वाले कारण से संगीत रुक जाए, तो सिद्धांत रूप में प्रदर्शन दोबारा नहीं किया जा सकता।
रुकावट होने पर मुख्य निर्णायक और प्रतियोगिता विभाग के प्रमुख तुरंत कारण की पुष्टि करके निपटारा करते हैं।`,
        },
      },
      {
        title: {
          ja: '手具',
          en: 'Apparatus',
          zh: '器械',
          ko: '수구',
          es: 'Aparato',
          fr: 'Engins',
          ru: 'Предметы',
          hi: 'उपकरण',
        },
        content: {
          ja: `1. 演技途中で手具が破損した場合、競技者は手部の差し替えをしなければならない。
2. 手具の差し替えのための場外は減点の対象とならない。
3. 差し変えのための中断は、演技の中断として減点する。　【実施審判より減点：１秒につき・・・0.10点】
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
          ko: `1. 연기 도중에 수구가 파손된 경우, 경기자는 수구를 교체하여야 한다.
2. 수구 교체를 위한 장외는 감점의 대상이 되지 아니한다.
3. 교체를 위한 중단은 연기의 중단으로 보아 감점한다.  【실시 심판으로부터 감점: 1초당…0.10점】
4. 파손된 후 수구의 교체를 하지 아니한 경우에는 파손 후의 연기는 가치가 없는 것으로 하여 채점한다.
5. 수구가 연기 종료 시에 파손된 경우에는 수구에 닿지 아니하고 종료한 것으로 취급한다.
6. 연기 중에 수구가 파손된 경우 그 연기를 다시 할 수 없다.
7. 규격 외의 수구를 사용한 경우  【득점: 구성·실시 모두 0.00점】
8. 예비 수구를 사용한 경우  【구성 주임 심판원으로부터 감점…0.50점】`,
          es: `1. Si un aparato se rompe durante el ejercicio, el gimnasta debe sustituirlo.
2. Salir del practicable para sustituir el aparato no es motivo de penalización.
3. La interrupción para sustituirlo se penaliza como interrupción del ejercicio. [Penalización de los jueces de ejecución: por cada segundo...0.10 puntos]
4. Si el aparato no se sustituye tras romperse, la parte del ejercicio posterior a la rotura se puntúa como carente de valor.
5. Si el aparato se rompe al terminar el ejercicio, se considera que este ha finalizado sin que el gimnasta tocara el aparato.
6. Un ejercicio durante el cual se ha roto el aparato no puede repetirse.
7. Uso de un aparato que no cumple las especificaciones [Puntuación: 0.00 puntos tanto en composición como en ejecución]
8. Uso de un aparato de reserva [Penalización del juez principal de composición...0.50 puntos]`,
          fr: `1. Si un engin casse pendant l'exercice, le gymnaste doit le remplacer.
2. La sortie du praticable pour remplacer l'engin n'est pas pénalisée.
3. L'interruption liée au remplacement est pénalisée comme une interruption de l'exercice.  [Pénalité des juges d'exécution : 0,10 point par seconde]
4. Si l'engin n'est pas remplacé après avoir cassé, la suite de l'exercice est notée comme dépourvue de valeur.
5. Si l'engin casse à la fin de l'exercice, celui-ci est considéré comme terminé sans que le gymnaste ait touché l'engin.
6. Un exercice au cours duquel l'engin a cassé ne peut pas être repris.
7. Utilisation d'un engin non conforme aux caractéristiques  [Note : 0,00 point en composition comme en exécution]
8. Utilisation d'un engin de réserve  [Pénalité du juge-arbitre de composition : 0,50 point]`,
          ru: `1. Если предмет сломался по ходу упражнения, гимнаст обязан заменить его.
2. Выход за пределы ковра ради замены предмета не наказывается.
3. Перерыв ради замены наказывается как прерывание упражнения.  [Сбавка судей исполнения: 0,10 балла за каждую секунду]
4. Если после поломки предмет не заменён, часть упражнения после поломки оценивается как не имеющая ценности.
5. Если предмет сломался в момент окончания упражнения, считается, что упражнение завершено без касания предмета.
6. Упражнение, в котором сломался предмет, повторить нельзя.
7. Использование предмета, не отвечающего требованиям  [Оценка: 0,00 балла и за композицию, и за исполнение]
8. Использование запасного предмета  [Сбавка старшего судьи композиции: 0,50 балла]`,
          hi: `1. प्रदर्शन के बीच उपकरण टूट जाए, तो जिम्नास्ट को उसे बदलना चाहिए।
2. उपकरण बदलने के लिए सीमा से बाहर जाने पर कटौती नहीं होती।
3. उपकरण बदलने के लिए हुई रुकावट पर प्रदर्शन की रुकावट के रूप में कटौती होती है।  [निष्पादन निर्णायकों से कटौती: प्रति 1 सेकंड ... 0.10 अंक]
4. टूटने के बाद उपकरण न बदला जाए, तो टूटने के बाद के प्रदर्शन को मूल्यहीन मानकर अंक दिए जाते हैं।
5. प्रदर्शन के अंत में उपकरण टूट जाए, तो माना जाता है कि प्रदर्शन उपकरण को छुए बिना समाप्त हुआ।
6. प्रदर्शन के दौरान उपकरण टूट जाए, तो वह प्रदर्शन दोबारा नहीं किया जा सकता।
7. मानक से बाहर के उपकरण का उपयोग  [अंक: संरचना और निष्पादन दोनों 0.00 अंक]
8. रिज़र्व उपकरण का उपयोग  [संरचना के प्रधान निर्णायक से कटौती ... 0.50 अंक]`,
        },
      },
      {
        title: {
          ja: '規律',
          en: 'Discipline',
          zh: '纪律',
          ko: '규율',
          es: 'Disciplina',
          fr: 'Discipline',
          ru: 'Дисциплина',
          hi: 'अनुशासन',
        },
        content: {
          ja: `1. 競技者が競技規則第41条に違反した場合
【実施審判より減点：0.20点】

2. 監督者が競技規則第42条に違反した場合は厳重に注意をした上で減点や処分を決める。
【実施主任審判員より減点・・・0.20点】`,
          en: `1. A gymnast violates Article 41 of the competition rules.
[Deduction by the execution judges: 0.20 points]

2. If a team manager violates Article 42 of the competition rules, a strict warning is given and the deduction or penalty is decided.
[Deduction by the execution chief judge: 0.20 points]`,
          zh: `1. 参赛者违反竞赛规则第41条的情况
【由完成裁判扣分：0.20分】

2. 领队违反竞赛规则第42条的情况，在严重警告的基础上决定扣分或处分。
【由完成主裁判员扣分……0.20分】`,
          ko: `1. 경기자가 경기 규칙 제41조를 위반한 경우
【실시 심판으로부터 감점: 0.20점】

2. 감독자가 경기 규칙 제42조를 위반한 경우에는 엄중히 주의를 준 후 감점이나 처분을 정한다.
【실시 주임 심판원으로부터 감점…0.20점】`,
          es: `1. Cuando un gimnasta infringe el artículo 41 del reglamento de competición
[Penalización de los jueces de ejecución: 0.20 puntos]

2. Cuando un entrenador infringe el artículo 42 del reglamento de competición, se le llama seriamente la atención y se decide la penalización o la sanción.
[Penalización del juez principal de ejecución...0.20 puntos]`,
          fr: `1. Un gymnaste enfreint l'article 41 du règlement des compétitions.
[Pénalité des juges d'exécution : 0,20 point]

2. Si un responsable d'équipe enfreint l'article 42 du règlement des compétitions, un avertissement sévère lui est adressé et la pénalité ou la sanction est décidée.
[Pénalité du juge-arbitre d'exécution : 0,20 point]`,
          ru: `1. Гимнаст нарушил статью 41 Правил соревнований.
[Сбавка судей исполнения: 0,20 балла]

2. Если представитель команды нарушил статью 42 Правил соревнований, ему выносится строгое замечание и определяются сбавка или взыскание.
[Сбавка старшего судьи исполнения: 0,20 балла]`,
          hi: `1. जिम्नास्ट प्रतियोगिता नियमों के अनुच्छेद 41 का उल्लंघन करे
[निष्पादन निर्णायकों से कटौती: 0.20 अंक]

2. कोच प्रतियोगिता नियमों के अनुच्छेद 42 का उल्लंघन करे, तो कड़ी चेतावनी देकर कटौती या दंड तय किया जाता है।
[निष्पादन के प्रधान निर्णायक से कटौती ... 0.20 अंक]`,
        },
      },
    ],
  },
]
