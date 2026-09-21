import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第3章 付録のうち、難度解図・特別規則・徒手の演技。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const APPENDIX_SPECIAL_RULES_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '難度解図',
      en: 'Illustrated Difficulties',
      zh: '难度图解',
      ko: '난도 해설도',
      es: 'Dificultades ilustradas',
      fr: 'Difficultés illustrées',
      ru: 'Трудности в рисунках',
      hi: 'कठिनाइयों के चित्र',
    },
    section: [
      {
        title: {
          ja: '徒手系難度',
          en: 'Free-Hand Difficulties',
          zh: '徒手难度',
          ko: '신체 난도',
          es: 'Dificultades de manos libres',
          fr: 'Difficultés corporelles',
          ru: 'Трудности без предмета',
          hi: 'बिना उपकरण की कठिनाइयाँ',
        },
        block: [
          {
            title: {
              ja: '徒手系難度',
              en: 'Free-Hand Difficulties',
              zh: '徒手难度',
              ko: '신체 난도',
              es: 'Dificultades de manos libres',
              fr: 'Difficultés corporelles',
              ru: 'Трудности без предмета',
              hi: 'बिना उपकरण की कठिनाइयाँ',
            },
            element: { ja: '', en: '', zh: '', ko: '', es: '', fr: '', ru: '', hi: '' },
          },
          {
            title: {
              ja: '転回系難度',
              en: 'Tumbling Difficulties',
              zh: '翻腾难度',
              ko: '공중돌기 난도',
              es: 'Dificultades de tumbling',
              fr: 'Difficultés de tumbling',
              ru: 'Акробатические трудности',
              hi: 'टम्बलिंग कठिनाइयाँ',
            },
            element: { ja: '', en: '', zh: '', ko: '', es: '', fr: '', ru: '', hi: '' },
          },
        ],
      },
    ],
  },
  {
    title: {
      ja: '特別規則',
      en: 'Special Rules',
      zh: '特别规则',
      ko: '특별 규칙',
      es: 'Reglas especiales',
      fr: 'Règles particulières',
      ru: 'Особые правила',
      hi: 'विशेष नियम',
    },
    section: [
      {
        title: {
          ja: 'ジュニア適用規則',
          en: 'Rules for Juniors',
          zh: '少年组适用规则',
          ko: '주니어 적용 규칙',
          es: 'Reglas para la categoría júnior',
          fr: 'Règlement applicable aux juniors',
          ru: 'Правила для юниоров',
          hi: 'जूनियर के लिए नियम',
        },
        content: {
          ja: `次に示すものを除き、（公財）日本体操協会新体操採点規則による。

【禁止技】
団体競技、個人競技共に以下の技を禁止する。なお、禁止技を行なった場合は構成・実施ともに０点とする。

1. 前方宙返り転（１と１／２回転）以上
2. 後方２回宙返り以上
3. 前方宙返り直接正面支持臥
4. 後方２回宙返り直接正面支持臥
※いずれも組運動からの実施を含む。また（１）（３）は後ろとびからのひねりを含む。

【難度の要求要素】
団体競技、個人競技とも１Ｄ２Ｃ３Ｂとする。

【特別難度】
団体競技で以下の転回系を実施した場合は、特別難度として採用する。

【減点緩和】
ロープの３重跳びの要素不足

【手具の規格】
体格差が大きいため、（公財）日本体操協会指定業者が販売する手具が使用できない場合は、規格通りであれば自作でも可とする。`,
          en: `Except as shown below, the Rhythmic Gymnastics Code of Points of the Japan Gymnastics Association applies.

[Prohibited elements]
The following elements are prohibited in both the group and the individual competition. If a prohibited element is performed, both composition and execution are scored 0 points.

1. Forward salto with 1½ rotations or more
2. Double back salto or more
3. Forward salto landing directly in front lying support
4. Double back salto landing directly in front lying support
* All of these include performance from partner elements. (1) and (3) also include twists from a back handspring.

[Difficulty requirements]
1 D, 2 C and 3 B for both the group and the individual competition.

[Special difficulties]
In the group competition, the following tumbling elements are counted as special difficulties.

[Relaxed deductions]
Missing triple under with the rope

[Apparatus specifications]
Because of large differences in body size, if apparatus sold by suppliers designated by the Japan Gymnastics Association cannot be used, self-made apparatus are allowed as long as they meet the specifications.`,
          zh: `除以下所示内容外，依据（公益财团法人）日本体操协会艺术体操评分规则。

【禁止动作】
团体比赛、个人比赛均禁止以下动作。此外，做出禁止动作时，编排与完成均记0分。

1. 前空翻转体（1又1/2周）以上
2. 后空翻两周以上
3. 前空翻直接成正面支撑卧
4. 后空翻两周直接成正面支撑卧
※以上均包含从组合动作中做出的情况。另外（1）（3）包含从向后跳接转体的情况。

【难度的要求要素】
团体比赛、个人比赛均为1D2C3B。

【特别难度】
在团体比赛中做出以下翻腾动作时，作为特别难度采用。

【扣分放宽】
绳的三摇跳要素不足

【器械规格】
由于体格差异较大，无法使用（公益财团法人）日本体操协会指定厂商销售的器械时，只要符合规格，自制器械也可使用。`,
          ko: `아래에 제시하는 것을 제외하고는 (공익재단법인) 일본체조협회 리듬체조 채점 규칙에 따른다.

【금지 기술】
단체 경기와 개인 경기 모두 아래의 기술을 금지한다. 또한 금지 기술을 실시한 경우에는 구성과 실시 모두 0점으로 한다.

1. 앞 공중돌기(1과 1/2회전) 이상
2. 뒤 2회 공중돌기 이상
3. 앞 공중돌기에서 직접 앞으로 엎드려 지지
4. 뒤 2회 공중돌기에서 직접 앞으로 엎드려 지지
※ 모두 조 운동에서의 실시를 포함한다. 또한 (1)과 (3)은 뒤로 뛰기에서의 비틀기를 포함한다.

【난도의 요구 요소】
단체 경기와 개인 경기 모두 1D 2C 3B로 한다.

【특별 난도】
단체 경기에서 아래의 공중돌기 계열을 실시한 경우에는 특별 난도로 인정한다.

【감점 완화】
줄 3중 뛰기의 요소 부족

【수구 규격】
체격 차이가 크기 때문에 (공익재단법인) 일본체조협회 지정 업체가 판매하는 수구를 사용할 수 없는 경우에는 규격에 맞으면 직접 제작한 것도 사용할 수 있다.`,
          es: `Salvo en lo que se indica a continuación, se aplica el código de puntuación de gimnasia rítmica de la Federación Japonesa de Gimnasia (fundación de interés público).

[Elementos prohibidos]
Los siguientes elementos están prohibidos tanto en la competición por conjuntos como en la individual. Si se realiza un elemento prohibido, se puntúan con 0 puntos tanto la composición como la ejecución.

1. Mortal adelante de 1 vuelta y 1/2 o más
2. Doble mortal atrás o más
3. Mortal adelante directamente a apoyo facial tendido
4. Doble mortal atrás directamente a apoyo facial tendido
* En todos los casos se incluye su realización a partir de elementos con compañeros. Además, (1) y (3) incluyen las piruetas desde un salto hacia atrás.

[Elementos requeridos de dificultad]
Tanto en la competición por conjuntos como en la individual: 1 D, 2 C y 3 B.

[Dificultades especiales]
En la competición por conjuntos, los siguientes elementos de tumbling se consideran dificultades especiales.

[Penalizaciones atenuadas]
Elemento incompleto en el triple paso de la cuerda

[Especificaciones de los aparatos]
Dadas las grandes diferencias de constitución física, cuando no puedan utilizarse los aparatos que venden los proveedores designados por la Federación Japonesa de Gimnasia (fundación de interés público), se admiten aparatos de fabricación propia siempre que cumplan las especificaciones.`,
          fr: `Sauf indication contraire ci-dessous, le code de pointage de gymnastique rythmique de la Fédération japonaise de gymnastique s'applique.

[Éléments interdits]
Les éléments suivants sont interdits en compétition par ensembles comme en compétition individuelle. Si un élément interdit est présenté, la composition et l'exécution sont notées 0 point.

1. Salto avant d'un tour et demi ou plus
2. Double salto arrière ou plus
3. Salto avant avec réception directe en appui facial couché
4. Double salto arrière avec réception directe en appui facial couché
* Tous ces éléments s'entendent y compris à partir d'éléments en duo. Les points 1 et 3 incluent également les vrilles à partir d'un flic-flac.

[Exigences en matière de difficultés]
1 D, 2 C et 3 B, en compétition par ensembles comme en compétition individuelle.

[Difficultés spéciales]
En compétition par ensembles, les éléments de tumbling suivants sont comptés comme difficultés spéciales.

[Pénalités allégées]
Absence du triple saut à la corde

[Caractéristiques des engins]
En raison des grandes différences de gabarit, si les engins vendus par les fournisseurs agréés par la Fédération japonaise de gymnastique ne peuvent pas être utilisés, des engins fabriqués soi-même sont admis à condition d'être conformes aux caractéristiques.`,
          ru: `За исключением указанного ниже, применяются Правила судейства по художественной гимнастике Японской ассоциации гимнастики.

[Запрещённые элементы]
В групповых и индивидуальных соревнованиях запрещены следующие элементы. При исполнении запрещённого элемента и композиция, и исполнение оцениваются в 0 баллов.

1. Сальто вперёд в полтора оборота и более
2. Двойное сальто назад и более
3. Сальто вперёд с приходом сразу в упор лёжа
4. Двойное сальто назад с приходом сразу в упор лёжа
※ Всё перечисленное включает исполнение из парных элементов. Пункты (1) и (3) включают также повороты с фляка.

[Требуемые трудности]
И в групповых, и в индивидуальных соревнованиях: 1 трудность D, 2 трудности C, 3 трудности B.

[Особые трудности]
Если в групповых соревнованиях выполнены следующие акробатические элементы, они засчитываются как особые трудности.

[Смягчение сбавок]
Отсутствие тройного прыжка со скакалкой

[Требования к предметам]
Из-за большой разницы в телосложении, если предметы, продаваемые поставщиками, назначенными Японской ассоциацией гимнастики, не подходят, допускаются самодельные предметы при условии соответствия требованиям.`,
          hi: `नीचे दी गई बातों को छोड़कर, (सार्वजनिक हित फाउंडेशन) जापान जिम्नास्टिक संघ की लयबद्ध जिम्नास्टिक अंक निर्धारण नियम पुस्तिका लागू होती है।

[निषिद्ध तत्व]
समूह प्रतियोगिता और व्यक्तिगत प्रतियोगिता, दोनों में निम्नलिखित तत्व निषिद्ध हैं। निषिद्ध तत्व किए जाने पर संरचना और निष्पादन, दोनों के 0 अंक दिए जाते हैं।

1. आगे की ओर साल्टो 1 और 1/2 घुमाव या उससे अधिक
2. पीछे की ओर दोहरा साल्टो या उससे अधिक
3. आगे की ओर साल्टो से सीधे सामने की ओर लेटे हुए सहारे में
4. पीछे की ओर दोहरा साल्टो से सीधे सामने की ओर लेटे हुए सहारे में
* ये सभी जोड़ी गतिविधियों से किया गया प्रदर्शन भी शामिल करते हैं। साथ ही (1) और (3) में पीछे की छलांग से किया गया ट्विस्ट भी शामिल है।

[कठिनाई के आवश्यक तत्व]
समूह प्रतियोगिता और व्यक्तिगत प्रतियोगिता, दोनों के लिए 1 D, 2 C, 3 B।

[विशेष कठिनाइयाँ]
समूह प्रतियोगिता में निम्नलिखित टम्बलिंग तत्व किए जाने पर उन्हें विशेष कठिनाई के रूप में गिना जाता है।

[कटौती में छूट]
रस्सी की तिहरी छलांग में तत्व की कमी

[उपकरण के विनिर्देश]
शरीर के आकार में बड़े अंतर के कारण, यदि (सार्वजनिक हित फाउंडेशन) जापान जिम्नास्टिक संघ के नामित विक्रेताओं द्वारा बेचा गया उपकरण प्रयोग नहीं किया जा सकता, तो विनिर्देशों के अनुरूप होने पर स्वयं बनाया गया उपकरण भी मान्य है।`,
        },
        image: [
          {
            src: '/images/rules/syugukikaku(J).png',
            alt: {
              ja: 'ジュニア手具規格表',
              en: 'Table of apparatus specifications for juniors',
              zh: '少年组器械规格表',
              ko: '주니어 수구 규격표',
              es: 'Tabla de especificaciones de los aparatos para la categoría júnior',
              fr: 'Tableau des caractéristiques des engins pour les juniors',
              ru: 'Таблица требований к предметам для юниоров',
              hi: 'जूनियर उपकरण विनिर्देश तालिका',
            },
          },
        ],
      },
      {
        title: {
          ja: '小学生適用規則',
          en: 'Rules for Elementary School Students',
          zh: '小学生适用规则',
          ko: '초등학생 적용 규칙',
          es: 'Reglas para escolares de primaria',
          fr: "Règlement applicable aux élèves de l'école primaire",
          ru: 'Правила для учащихся начальной школы',
          hi: 'प्राथमिक विद्यालय के विद्यार्थियों के लिए नियम',
        },
        content: {
          ja: `次に示すものを除き、（公財）日本体操協会新体操採点規則による。

【団体競技】
自由演技
1. 自由演技はラジオ体操１を基本とし、徒手体操で構成する。
2. 演技時間はラジオ体操１の演技時間とする。
3. 団体競技は、４名以上で演技を行う。

4. 自由演技の配点
次の５項目を基準とする。各項目は10点満点で採点し、その平均点を各審判の得点とする。各チームの得点は、全審判員の平均点とする。

採点基準
a. 運動の大きさ・深さ・アクセントなど体操が正確にできたか。
b. 音楽と体操の調和がとれていたか。
c. 隊形の変化や移動が工夫されていたか。
d. 演技全体を通じてリズミカルにできたか。
e. チーム全体が元気よく楽しく演技できたか。

5. 伴奏音楽はつけることが望ましいが、号令で実施しても良い。
6. 転回系は宙返りを除いた程度のものを入れてもよい。
7. 隊形の変化や体型移動を工夫する。
8. 服装は自由とする。
9. 審判構成は10名を基準とする。
10. 表彰は大会要項による。

【採点用紙】
次の観点から、演技の採点を行う。`,
          en: `Except as shown below, the Rhythmic Gymnastics Code of Points of the Japan Gymnastics Association applies.

[Group competition]
Free routine
1. The free routine is based on Radio Taiso No. 1 and composed of free-hand exercises.
2. The duration of the routine is that of Radio Taiso No. 1.
3. The group routine is performed by four or more gymnasts.

4. Points for the free routine
The following five criteria are used. Each is scored out of 10 points, and the average is each judge's score. Each team's score is the average of all judges' scores.

Scoring criteria
a. Were the exercises performed accurately, with amplitude, depth and accents?
b. Was there harmony between the music and the exercises?
c. Were changes of formation and movement across the floor well designed?
d. Was the whole routine performed rhythmically?
e. Did the whole team perform energetically and joyfully?

5. Accompanying music is recommended, but the routine may also be performed to spoken counts.
6. Tumbling may be included, excluding saltos.
7. Changes and movements of formations should be well designed.
8. Attire is free.
9. As a standard, the judging panel has 10 judges.
10. Awards follow the competition guidelines.

[Score sheet]
Routines are scored from the following viewpoints.`,
          zh: `除以下所示内容外，依据（公益财团法人）日本体操协会艺术体操评分规则。

【团体比赛】
自由成套
1. 自由成套以广播体操第1套为基础，由徒手体操构成。
2. 成套时间为广播体操第1套的时间。
3. 团体比赛由4人以上完成成套动作。

4. 自由成套的分值
以下列5个项目为基准。各项目按10分满分评分，其平均分为各裁判的得分。各队的得分为全体裁判员的平均分。

评分基准
a. 动作的幅度、深度、重音等体操是否做得准确。
b. 音乐与体操是否协调。
c. 队形的变化和移动是否经过精心设计。
d. 整套动作是否富有节奏感。
e. 全队是否精神饱满、愉快地完成成套动作。

5. 建议配伴奏音乐，也可以用口令完成。
6. 翻腾可以加入除空翻以外程度的动作。
7. 精心设计队形的变化和位置移动。
8. 服装自由。
9. 裁判组成以10人为基准。
10. 表彰依据比赛规程。

【评分表】
从以下角度对成套动作进行评分。`,
          ko: `아래에 제시하는 것을 제외하고는 (공익재단법인) 일본체조협회 리듬체조 채점 규칙에 따른다.

【단체 경기】
자유 연기
1. 자유 연기는 라디오 체조 1을 기본으로 하고 신체 체조로 구성한다.
2. 연기 시간은 라디오 체조 1의 연기 시간으로 한다.
3. 단체 경기는 4명 이상이 연기를 실시한다.

4. 자유 연기의 배점
다음 5개 항목을 기준으로 한다. 각 항목은 10점 만점으로 채점하고 그 평균 점수를 각 심판의 득점으로 한다. 각 팀의 득점은 전체 심판원의 평균 점수로 한다.

채점 기준
a. 운동의 크기와 깊이, 악센트 등 체조를 정확하게 실시하였는가.
b. 음악과 체조의 조화가 이루어졌는가.
c. 대형의 변화와 이동이 잘 구성되었는가.
d. 연기 전체를 통하여 리듬감 있게 실시하였는가.
e. 팀 전체가 활기차고 즐겁게 연기하였는가.

5. 반주 음악은 붙이는 것이 바람직하나 구령으로 실시하여도 된다.
6. 공중돌기 계열은 공중돌기를 제외한 정도의 것을 넣어도 된다.
7. 대형의 변화와 대형 이동을 잘 구성한다.
8. 복장은 자유로 한다.
9. 심판 구성은 10명을 기준으로 한다.
10. 시상은 대회 요강에 따른다.

【채점 용지】
다음 관점에서 연기를 채점한다.`,
          es: `Salvo en lo que se indica a continuación, se aplica el código de puntuación de gimnasia rítmica de la Federación Japonesa de Gimnasia (fundación de interés público).

[Competición por conjuntos]
Ejercicio libre
1. El ejercicio libre se basa en el Radio Taiso n.º 1 (tabla de gimnasia de la radio japonesa) y se compone de trabajo corporal.
2. La duración del ejercicio es la del Radio Taiso n.º 1.
3. En la competición por conjuntos actúan 4 o más gimnastas.

4. Puntuación del ejercicio libre
Se toman como referencia los cinco apartados siguientes. Cada apartado se puntúa sobre 10 puntos y la media de los apartados es la puntuación de cada juez. La puntuación de cada equipo es la media de las puntuaciones de todos los jueces.

Criterios de puntuación
a. ¿Se ha ejecutado la gimnasia con precisión, con amplitud, profundidad y acentos?
b. ¿Ha habido armonía entre la música y la gimnasia?
c. ¿Se han trabajado los cambios de formación y los desplazamientos?
d. ¿Se ha mantenido el ritmo a lo largo de todo el ejercicio?
e. ¿Ha actuado todo el equipo con energía y alegría?

5. Es preferible utilizar música de acompañamiento, aunque también puede actuarse con voces de mando.
6. Puede incluirse tumbling, siempre que no llegue al nivel de los mortales.
7. Deben trabajarse los cambios de formación y los desplazamientos del conjunto.
8. La indumentaria es libre.
9. Como norma general, el cuerpo de jueces se compone de 10 jueces.
10. La entrega de premios se rige por las bases de la competición.

[Hoja de puntuación]
El ejercicio se puntúa desde los puntos de vista siguientes.`,
          fr: `Sauf indication contraire ci-dessous, le code de pointage de gymnastique rythmique de la Fédération japonaise de gymnastique s'applique.

[Compétition par ensembles]
Exercice libre
1. L'exercice libre repose sur le Radio Taiso no 1 et se compose de mouvements corporels.
2. La durée de l'exercice est celle du Radio Taiso no 1.
3. L'exercice d'ensemble est présenté par quatre gymnastes ou plus.

4. Barème de l'exercice libre
Les cinq critères suivants sont retenus. Chacun est noté sur 10 points, et la moyenne constitue la note de chaque juge. La note de chaque équipe est la moyenne des notes de tous les juges.

Critères de notation
a. Les mouvements ont-ils été exécutés correctement, avec amplitude, profondeur et accents ?
b. Y avait-il harmonie entre la musique et les mouvements ?
c. Les changements de formation et les déplacements étaient-ils bien pensés ?
d. L'exercice a-t-il été présenté de façon rythmée d'un bout à l'autre ?
e. Toute l'équipe a-t-elle présenté l'exercice avec énergie et plaisir ?

5. Une musique d'accompagnement est recommandée, mais l'exercice peut aussi être présenté au commandement.
6. Le tumbling est autorisé, à l'exception des saltos.
7. Les changements et les déplacements de formation doivent être bien pensés.
8. La tenue est libre.
9. Le corps de juges comprend en principe 10 juges.
10. Les récompenses sont fixées par le règlement particulier de la compétition.

[Feuille de notation]
Les exercices sont notés selon les points suivants.`,
          ru: `За исключением указанного ниже, применяются Правила судейства по художественной гимнастике Японской ассоциации гимнастики.

[Групповые соревнования]
Произвольное упражнение
1. Произвольное упражнение строится на основе комплекса «Радио тайсо № 1» и состоит из движений без предмета.
2. Продолжительность упражнения равна продолжительности комплекса «Радио тайсо № 1».
3. Групповое упражнение выполняют четыре и более гимнаста.

4. Оценка произвольного упражнения
За основу берутся следующие пять пунктов. Каждый оценивается по 10-балльной шкале, и среднее становится оценкой каждого судьи. Оценка команды — это среднее оценок всех судей.

Критерии оценки
a. Точно ли выполнены движения — размах, глубина, акценты и прочее?
b. Была ли согласованность музыки и движений?
c. Продуманы ли смены построений и перемещения?
d. Ритмично ли выполнено упражнение в целом?
e. Выступила ли вся команда бодро и радостно?

5. Музыкальное сопровождение желательно, но упражнение можно выполнять и под счёт.
6. Акробатику можно включать в объёме, исключающем сальто.
7. Смены и перемещения построений следует продумывать.
8. Форма свободная.
9. За основу берётся судейская бригада из 10 человек.
10. Награждение — согласно положению о соревнованиях.

[Оценочный лист]
Упражнение оценивается со следующих точек зрения.`,
          hi: `नीचे दी गई बातों को छोड़कर, (सार्वजनिक हित फाउंडेशन) जापान जिम्नास्टिक संघ की लयबद्ध जिम्नास्टिक अंक निर्धारण नियम पुस्तिका लागू होती है।

[समूह प्रतियोगिता]
स्वतंत्र प्रदर्शन
1. स्वतंत्र प्रदर्शन रेडियो ताइसो 1 पर आधारित होता है और बिना उपकरण के व्यायामों से बनाया जाता है।
2. प्रदर्शन का समय रेडियो ताइसो 1 के समय के बराबर होता है।
3. समूह प्रतियोगिता में 4 या उससे अधिक जिम्नास्ट प्रदर्शन करते हैं।

4. स्वतंत्र प्रदर्शन के अंक
निम्नलिखित 5 मानदंड आधार होते हैं। हर मानदंड 10 अंकों में से आँका जाता है और उनका औसत हर निर्णायक का अंक होता है। हर टीम का अंक सभी निर्णायकों के अंकों का औसत होता है।

अंक निर्धारण के मानदंड
a. क्या गतिविधि का विस्तार, गहराई और आघात सही रहे, यानी व्यायाम सटीक ढंग से किया गया।
b. क्या संगीत और व्यायाम के बीच तालमेल रहा।
c. क्या रचना के बदलाव और स्थान परिवर्तन सोच-समझकर बनाए गए थे।
d. क्या पूरा प्रदर्शन लयबद्ध ढंग से किया गया।
e. क्या पूरी टीम ने उत्साह और आनंद के साथ प्रदर्शन किया।

5. साथ में संगीत रखना वांछनीय है, पर गिनती की आवाज़ पर भी प्रदर्शन किया जा सकता है।
6. टम्बलिंग में साल्टो को छोड़कर उस स्तर के तत्व रखे जा सकते हैं।
7. रचना के बदलाव और स्थान परिवर्तन सोच-समझकर बनाए जाएँ।
8. पोशाक स्वतंत्र है।
9. निर्णायक मंडल में 10 निर्णायक होना मानक है।
10. पुरस्कार प्रतियोगिता की नियमावली के अनुसार दिए जाते हैं।

[अंक पत्र]
निम्नलिखित दृष्टिकोणों से प्रदर्शन का अंक निर्धारण किया जाता है।`,
        },
        image: [
          {
            src: '/images/rules/junior(PCS).png',
            alt: {
              ja: '新体操小学校適用規則採点用紙',
              en: 'Score sheet under the rules for elementary school students',
              zh: '艺术体操小学适用规则评分表',
              ko: '리듬체조 초등학교 적용 규칙 채점 용지',
              es: 'Hoja de puntuación de las reglas de gimnasia rítmica para escolares de primaria',
              fr: "Feuille de notation du règlement de gymnastique rythmique applicable à l'école primaire",
              ru: 'Оценочный лист по правилам для учащихся начальной школы',
              hi: 'प्राथमिक विद्यालय के विद्यार्थियों के लिए नियमों का अंक पत्र',
            },
          },
        ],
      },
      {
        title: {
          ja: '高体連規則',
          en: 'Rules of the All Japan High School Athletic Federation',
          zh: '高体连规则',
          ko: '고등학교 체육 연맹 규칙',
          es: 'Reglamento de la Federación Japonesa de Deporte Escolar de Secundaria Superior',
          fr: 'Règlement de la Fédération nationale du sport scolaire des lycées',
          ru: 'Правила Всеяпонской федерации школьного спорта',
          hi: 'अखिल जापान उच्च विद्यालय खेल महासंघ के नियम',
        },
        content: {
          ja: `次に示すものを除き、（公財）日本体操協会男子新体操採点規則による。

【禁止技について】
団体競技・個人競技ともに下記の技を禁止する。なお、禁止技を行なった場合は、その演技を０点とする。
※いずれも組運動を含む。
1. 前方宙返り転（１と１／２回転）以上（後ろとびからのひねりを含む）
2. 後方２回宙返り以上

【制限技について】
後方系の跳躍技からひねりをともなって直接正面支持臥の技は、男子採点規則　第２章　第31条の構成条件の中で使用できる回数を１回限りとする。上記の回数を超えて使用した場合はその演技の構成点を０点とする。

【所属マークについて】
マークは規定どおりとし、ユニフォームと区別がつくようにする。

【同点順位の決定方法について】
1. 団体競技
  a. 構成得点の上位チーム
  b. 上記の条件が全て同点の場合、主任審判員（構成・実施）の合計得点の上位チーム。
  c. 上記の条件が全て同点の場合、主任審判員を除く８名の審判員の合計得点の上位チーム。
  d. 上記の条件が全て同点の場合、主催団体に一任する。

2. 個人競技
  a. ２種のうち、最高得点を獲得したもの。
  b. 上記の条件が全て同点の場合、２種目の主任審判員の合計点の上位者。
  c. 上記の条件が全て同点の場合、主任審判員を除く８名の審判員の合計得点の上位者。
  d. 上記の条件が全て同点の場合、主催団体に一任する。

【演技中の停電・選手のゲガの処置について】
1. 落雷などにより競技場が停電し、伴奏音楽が停止した場合には、審判長の判断により演技を中断してもよい。再演技を行わせる。
2. 演技中、選手が怪我をした場合、監督の判断により演技を中断させてもよい。

【成績順位および表彰について】
不慮の事故等で種目の危険があった場合、種目別選手権の表彰対象とする。`,
          en: `Except as shown below, the Men's Rhythmic Gymnastics Code of Points of the Japan Gymnastics Association applies.

[Prohibited elements]
The following elements are prohibited in both the group and the individual competition. If a prohibited element is performed, the routine is scored 0 points.
* All of these include partner elements.
1. Forward salto with 1½ rotations or more (including twists from a back handspring)
2. Double back salto or more

[Restricted elements]
An element going from a backward tumbling element with a twist directly into front lying support may be used only once within the composition requirements of Article 31, Chapter 2 of the men's Code of Points. If it is used more often, the composition score of the routine is 0 points.

[Emblem]
The emblem must follow the rules and be distinguishable from the uniform.

[Breaking ties]
1. Group competition
  a. The team with the higher composition score.
  b. If still tied, the team with the higher total of the chief judges' scores (composition and execution).
  c. If still tied, the team with the higher total of the eight judges' scores, excluding the chief judges.
  d. If still tied, the decision is left to the organizer.

2. Individual competition
  a. The gymnast with the highest score on either of the two apparatus.
  b. If still tied, the gymnast with the higher total of the chief judges' scores on the two apparatus.
  c. If still tied, the gymnast with the higher total of the eight judges' scores, excluding the chief judges.
  d. If still tied, the decision is left to the organizer.

[Power failures and injuries during a routine]
1. If the power fails in the competition hall because of lightning or similar and the accompanying music stops, the routine may be stopped at the Jury President's discretion and performed again.
2. If a gymnast is injured during a routine, the routine may be stopped at the team manager's discretion.

[Rankings and awards]
If a gymnast has to withdraw from an apparatus because of an unforeseen accident or similar, the gymnast remains eligible for the apparatus championship awards.`,
          zh: `除以下所示内容外，依据（公益财团法人）日本体操协会男子艺术体操评分规则。

【关于禁止动作】
团体比赛、个人比赛均禁止下列动作。此外，做出禁止动作时，该成套动作记0分。
※以上均包含组合动作。
1. 前空翻转体（1又1/2周）以上（包含从向后跳接转体）
2. 后空翻两周以上

【关于限制动作】
从向后的跳跃动作带转体直接成正面支撑卧的动作，在男子评分规则 第2章 第31条的编排条件中最多只能使用1次。超过上述次数使用时，该成套动作的编排分记0分。

【关于所属标志】
标志按规定制作，并使其与比赛服有所区别。

【关于同分名次的判定方法】
1. 团体比赛
  a. 编排得分较高的队
  b. 上述条件全部相同时，主裁判员（编排、完成）合计得分较高的队。
  c. 上述条件全部相同时，除主裁判员以外的8名裁判员合计得分较高的队。
  d. 上述条件全部相同时，交由主办单位决定。

2. 个人比赛
  a. 两个项目中获得最高得分者。
  b. 上述条件全部相同时，两个项目主裁判员合计得分较高者。
  c. 上述条件全部相同时，除主裁判员以外的8名裁判员合计得分较高者。
  d. 上述条件全部相同时，交由主办单位决定。

【关于成套动作中停电、运动员受伤的处理】
1. 因雷击等导致比赛场馆停电、伴奏音乐停止时，可由裁判长判断中断成套动作，并让其重新比赛。
2. 成套动作进行中运动员受伤时，可由领队判断中断成套动作。

【关于成绩名次及表彰】
因意外事故等使某一项目出现危险情况时，仍作为单项锦标赛的表彰对象。`,
          ko: `아래에 제시하는 것을 제외하고는 (공익재단법인) 일본체조협회 남자 리듬체조 채점 규칙에 따른다.

【금지 기술에 대하여】
단체 경기와 개인 경기 모두 아래의 기술을 금지한다. 또한 금지 기술을 실시한 경우에는 그 연기를 0점으로 한다.
※ 모두 조 운동을 포함한다.
1. 앞 공중돌기(1과 1/2회전) 이상(뒤로 뛰기에서의 비틀기를 포함한다)
2. 뒤 2회 공중돌기 이상

【제한 기술에 대하여】
뒤 계열의 도약 기술에서 비틀기를 동반하여 직접 앞으로 엎드려 지지를 하는 기술은 남자 채점 규칙 제2장 제31조의 구성 조건 안에서 사용할 수 있는 횟수를 1회로 한정한다. 위의 횟수를 넘겨 사용한 경우에는 그 연기의 구성 점수를 0점으로 한다.

【소속 마크에 대하여】
마크는 규정대로 하고 유니폼과 구별이 되도록 한다.

【동점 순위의 결정 방법에 대하여】
1. 단체 경기
  a. 구성 득점이 높은 팀.
  b. 위의 조건이 모두 동점인 경우에는 주임 심판원(구성·실시)의 합계 득점이 높은 팀.
  c. 위의 조건이 모두 동점인 경우에는 주임 심판원을 제외한 8명 심판원의 합계 득점이 높은 팀.
  d. 위의 조건이 모두 동점인 경우에는 주최 단체에 일임한다.

2. 개인 경기
  a. 2종목 가운데 최고 득점을 획득한 자.
  b. 위의 조건이 모두 동점인 경우에는 2종목 주임 심판원의 합계 점수가 높은 자.
  c. 위의 조건이 모두 동점인 경우에는 주임 심판원을 제외한 8명 심판원의 합계 득점이 높은 자.
  d. 위의 조건이 모두 동점인 경우에는 주최 단체에 일임한다.

【연기 중의 정전·선수 부상의 조치에 대하여】
1. 낙뢰 등으로 경기장이 정전되어 반주 음악이 멈춘 경우에는 심판장의 판단에 따라 연기를 중단하여도 된다. 재연기를 실시하게 한다.
2. 연기 중에 선수가 부상을 입은 경우에는 감독의 판단에 따라 연기를 중단시켜도 된다.

【성적 순위 및 시상에 대하여】
뜻밖의 사고 등으로 종목에 위험이 있었던 경우에는 종목별 선수권의 시상 대상으로 한다.`,
          es: `Salvo en lo que se indica a continuación, se aplica el código de puntuación de gimnasia rítmica masculina de la Federación Japonesa de Gimnasia (fundación de interés público).

[Elementos prohibidos]
Los siguientes elementos están prohibidos tanto en la competición por conjuntos como en la individual. Si se realiza un elemento prohibido, ese ejercicio se puntúa con 0 puntos.
* En todos los casos se incluyen los elementos con compañeros.
1. Mortal adelante de 1 vuelta y 1/2 o más (incluidas las piruetas desde un salto hacia atrás)
2. Doble mortal atrás o más

[Elementos restringidos]
El elemento que, desde un elemento de salto hacia atrás y con pirueta, pasa directamente a apoyo facial tendido solo puede utilizarse una vez dentro de las condiciones de composición del artículo 31 del capítulo 2 del código de puntuación masculino. Si se utiliza más veces de las indicadas, la nota de composición de ese ejercicio será de 0 puntos.

[Emblema del club]
El emblema debe ajustarse a lo establecido y distinguirse claramente del maillot.

[Criterios de desempate]
1. Competición por conjuntos
  a. El conjunto con la nota de composición más alta.
  b. Si persiste el empate en todo lo anterior, el conjunto con la suma más alta de las puntuaciones de los jueces principales (composición y ejecución).
  c. Si persiste el empate en todo lo anterior, el conjunto con la suma más alta de las puntuaciones de los 8 jueces restantes, excluidos los jueces principales.
  d. Si persiste el empate en todo lo anterior, la decisión corresponde a la entidad organizadora.

2. Competición individual
  a. El gimnasta que haya obtenido la puntuación más alta en una de las dos pruebas.
  b. Si persiste el empate en todo lo anterior, el gimnasta con la suma más alta de las puntuaciones de los jueces principales en las dos pruebas.
  c. Si persiste el empate en todo lo anterior, el gimnasta con la suma más alta de las puntuaciones de los 8 jueces restantes, excluidos los jueces principales.
  d. Si persiste el empate en todo lo anterior, la decisión corresponde a la entidad organizadora.

[Cortes de luz y lesiones durante el ejercicio]
1. Si el recinto de competición se queda sin luz por la caída de un rayo u otra causa y se interrumpe la música de acompañamiento, el ejercicio puede interrumpirse a criterio del juez árbitro. En tal caso, el ejercicio se repite.
2. Si un gimnasta se lesiona durante el ejercicio, este puede interrumpirse a criterio del entrenador.

[Clasificación y entrega de premios]
Cuando, por un accidente imprevisto u otra causa, un gimnasta tenga que retirarse de una prueba, seguirá optando a los premios del campeonato por pruebas.`,
          fr: `Sauf indication contraire ci-dessous, le code de pointage de gymnastique rythmique masculine de la Fédération japonaise de gymnastique s'applique.

[Éléments interdits]
Les éléments suivants sont interdits en compétition par ensembles comme en compétition individuelle. Si un élément interdit est présenté, l'exercice est noté 0 point.
* Tous ces éléments s'entendent y compris à partir d'éléments en duo.
1. Salto avant d'un tour et demi ou plus (vrilles à partir d'un flic-flac comprises)
2. Double salto arrière ou plus

[Éléments limités]
L'élément consistant à passer d'un élément arrière avec vrille directement en appui facial couché ne peut être utilisé qu'une seule fois dans le cadre des exigences de composition de l'article 31 du chapitre 2 du code de pointage masculin. S'il est utilisé plus souvent, la note de composition de l'exercice est de 0 point.

[Écusson]
L'écusson doit être conforme au règlement et se distinguer de la tenue.

[Départage des ex æquo]
1. Compétition par ensembles
  a. L'ensemble ayant la note de composition la plus élevée.
  b. En cas de nouvelle égalité, l'ensemble dont le total des notes des juges-arbitres (composition et exécution) est le plus élevé.
  c. En cas de nouvelle égalité, l'ensemble dont le total des notes des huit juges, juges-arbitres non compris, est le plus élevé.
  d. En cas de nouvelle égalité, la décision revient à l'organisateur.

2. Compétition individuelle
  a. Le gymnaste ayant obtenu la meilleure note à l'un des deux engins.
  b. En cas de nouvelle égalité, le gymnaste dont le total des notes des juges-arbitres aux deux engins est le plus élevé.
  c. En cas de nouvelle égalité, le gymnaste dont le total des notes des huit juges, juges-arbitres non compris, est le plus élevé.
  d. En cas de nouvelle égalité, la décision revient à l'organisateur.

[Coupure de courant ou blessure pendant un exercice]
1. Si la salle de compétition subit une coupure de courant, à la suite de la foudre par exemple, et que la musique d'accompagnement s'arrête, l'exercice peut être interrompu sur décision du président du jury et présenté de nouveau.
2. Si un gymnaste se blesse pendant un exercice, celui-ci peut être interrompu sur décision du responsable d'équipe.

[Classement et récompenses]
Si un gymnaste doit renoncer à un engin à la suite d'un accident imprévu ou d'une cause analogue, il reste éligible aux récompenses du championnat par engin.`,
          ru: `За исключением указанного ниже, применяются Правила судейства по мужской художественной гимнастике Японской ассоциации гимнастики.

[О запрещённых элементах]
В групповых и индивидуальных соревнованиях запрещены следующие элементы. При исполнении запрещённого элемента упражнение оценивается в 0 баллов.
※ Всё перечисленное включает парные элементы.
1. Сальто вперёд в полтора оборота и более (включая повороты с фляка)
2. Двойное сальто назад и более

[Об ограниченных элементах]
Элемент, в котором из акробатики назад с поворотом гимнаст приходит сразу в упор лёжа, может использоваться в рамках требований к композиции статьи 31 главы 2 мужских Правил судейства только один раз. При превышении этого числа оценка за композицию упражнения составляет 0 баллов.

[Об эмблеме организации]
Эмблема должна отвечать правилам и отличаться от формы.

[О разделении равных результатов]
1. Групповые соревнования
  a. Команда с более высокой оценкой за композицию.
  b. Если все указанные показатели равны — команда с большей суммой оценок старших судей (композиции и исполнения).
  c. Если все указанные показатели равны — команда с большей суммой оценок восьми судей, не считая старших судей.
  d. Если все указанные показатели равны — решение остаётся за организатором.

2. Индивидуальные соревнования
  a. Гимнаст с наивысшей оценкой в одном из двух видов.
  b. Если все указанные показатели равны — гимнаст с большей суммой оценок старших судей в двух видах.
  c. Если все указанные показатели равны — гимнаст с большей суммой оценок восьми судей, не считая старших судей.
  d. Если все указанные показатели равны — решение остаётся за организатором.

[О сбоях электропитания и травмах во время упражнения]
1. Если из-за удара молнии или подобного в зале пропало электричество и музыкальное сопровождение остановилось, упражнение по решению главного судьи может быть прервано. Упражнение выполняется заново.
2. Если во время упражнения гимнаст получил травму, упражнение по решению представителя команды может быть прервано.

[О местах и награждении]
Если из-за непредвиденного происшествия гимнаст не смог выступить в каком-либо виде, он всё равно участвует в награждении первенства в отдельных видах.`,
          hi: `नीचे दी गई बातों को छोड़कर, (सार्वजनिक हित फाउंडेशन) जापान जिम्नास्टिक संघ की पुरुष लयबद्ध जिम्नास्टिक अंक निर्धारण नियम पुस्तिका लागू होती है।

[निषिद्ध तत्वों के बारे में]
समूह प्रतियोगिता और व्यक्तिगत प्रतियोगिता, दोनों में नीचे दिए गए तत्व निषिद्ध हैं। निषिद्ध तत्व किए जाने पर उस प्रदर्शन के 0 अंक दिए जाते हैं।
* ये सभी जोड़ी गतिविधियों को भी शामिल करते हैं।
1. आगे की ओर साल्टो 1 और 1/2 घुमाव या उससे अधिक (पीछे की छलांग से किया गया ट्विस्ट भी शामिल)
2. पीछे की ओर दोहरा साल्टो या उससे अधिक

[सीमित तत्वों के बारे में]
पीछे की ओर की छलांग वाले तत्व से ट्विस्ट के साथ सीधे सामने की ओर लेटे हुए सहारे में जाने वाला तत्व, पुरुष अंक निर्धारण नियम पुस्तिका के अध्याय 2, अनुच्छेद 31 की संरचना की शर्तों के भीतर केवल 1 बार ही प्रयोग किया जा सकता है। ऊपर बताई गई संख्या से अधिक बार प्रयोग करने पर उस प्रदर्शन के संरचना अंक 0 कर दिए जाते हैं।

[संबद्धता चिह्न के बारे में]
चिह्न नियमों के अनुसार हो और पोशाक से अलग पहचाना जा सके।

[समान अंक होने पर क्रम तय करने की विधि]
1. समूह प्रतियोगिता
  a. संरचना के अंक में ऊपर रहने वाली टीम।
  b. ऊपर की सभी शर्तों में समान अंक होने पर, प्रधान निर्णायकों (संरचना और निष्पादन) के कुल अंक में ऊपर रहने वाली टीम।
  c. ऊपर की सभी शर्तों में समान अंक होने पर, प्रधान निर्णायकों को छोड़कर 8 निर्णायकों के कुल अंक में ऊपर रहने वाली टीम।
  d. ऊपर की सभी शर्तों में समान अंक होने पर, निर्णय आयोजक संस्था पर छोड़ दिया जाता है।

2. व्यक्तिगत प्रतियोगिता
  a. 2 उपकरणों में से सबसे अधिक अंक पाने वाला।
  b. ऊपर की सभी शर्तों में समान अंक होने पर, 2 उपकरणों के प्रधान निर्णायकों के कुल अंक में ऊपर रहने वाला।
  c. ऊपर की सभी शर्तों में समान अंक होने पर, प्रधान निर्णायकों को छोड़कर 8 निर्णायकों के कुल अंक में ऊपर रहने वाला।
  d. ऊपर की सभी शर्तों में समान अंक होने पर, निर्णय आयोजक संस्था पर छोड़ दिया जाता है।

[प्रदर्शन के दौरान बिजली जाने और जिम्नास्ट के घायल होने पर की जाने वाली कार्रवाई के बारे में]
1. बिजली गिरने आदि के कारण प्रतियोगिता स्थल की बिजली चली जाए और साथ का संगीत रुक जाए, तो मुख्य निर्णायक के निर्णय पर प्रदर्शन रोका जा सकता है। प्रदर्शन दोबारा कराया जाता है।
2. प्रदर्शन के दौरान जिम्नास्ट के घायल होने पर, कोच के निर्णय पर प्रदर्शन रोका जा सकता है।

[परिणाम क्रम और पुरस्कार के बारे में]
अप्रत्याशित दुर्घटना आदि के कारण किसी उपकरण में खतरा रहा हो, तो उपकरण-वार चैंपियनशिप के पुरस्कार का पात्र माना जाता है।`,
        },
      },
    ],
  },
  {
    title: {
      ja: '徒手の演技',
      en: 'Free-Hand Routines',
      zh: '徒手成套动作',
      ko: '신체 연기',
      es: 'Ejercicio de manos libres',
      fr: 'Exercices corporels',
      ru: 'Упражнения без предмета',
      hi: 'बिना उपकरण के प्रदर्शन',
    },
    section: [
      {
        title: {
          ja: '徒手の基礎要素群',
          en: 'Basic Free-Hand Element Groups',
          zh: '徒手基础要素组',
          ko: '신체의 기초 요소군',
          es: 'Grupos de elementos básicos de manos libres',
          fr: "Groupes d'éléments corporels de base",
          ru: 'Базовые группы элементов без предмета',
          hi: 'बिना उपकरण के आधारभूत तत्वों के वर्ग',
        },
        content: {
          ja: `1. 各種徒手
上肢、下肢、体前屈、体側屈、体回旋、腕の振動、脚の屈伸、胸の後反、体の弾性、波動（蛇動）など様々な複合運動

2. 各種跳躍（ジャンプ）
鹿跳び、前後開脚跳び、左右開脚跳びなどさまざまな跳躍。

3. 柔軟
左右開脚体前屈柔軟、前後開脚柔軟、閉脚体前屈柔軟なさまざまな柔軟。

4. バランス
さまざまなバランスなど。

5. 倒立
さまざまな倒立など。

6. 各種の歩走
さまざまなステップなど。

7. 回転及び転向
ターン・ピヴォット。

以上の要素は、さまざまな方向、さまざまな面、移動を伴うあるいは伴わない、片足支持あるいは両足支持、腕の動きと結びつけるなどの多彩な動きを考慮に入れて実施することができる。`,
          en: `1. Various free-hand movements
Arm and leg movements, forward bends, side bends, trunk rotations, arm swings, knee bends, chest arches, body springs, body waves and other combined movements

2. Various jumps
Stag jumps, split leaps, straddle jumps and other jumps.

3. Flexibility
Straddle forward bends, splits, pike forward bends and other flexibility elements.

4. Balances
Various balances.

5. Handstands
Various handstands.

6. Various steps and runs
Various steps.

7. Turns and pivots
Turns and pivots.

These elements can be performed with a wide range of movements: in various directions and planes, with or without traveling, on one foot or both feet, combined with arm movements, and so on.`,
          zh: `1. 各种徒手动作
上肢、下肢、体前屈、体侧屈、体回旋、摆臂、腿的屈伸、挺胸后屈、身体的弹动、波浪（蛇形动作）等各种复合动作

2. 各种跳跃
鹿跳、前后分腿跳、左右分腿跳等各种跳跃。

3. 柔韧
左右分腿体前屈、前后分腿柔韧、并腿体前屈等各种柔韧动作。

4. 平衡
各种平衡等。

5. 倒立
各种倒立等。

6. 各种走和跑
各种步法等。

7. 转体及转向
转体、单足转体（pivot）。

以上要素可以在多种多样的动作方式下完成：各种方向、各种平面、伴随或不伴随移动、单脚支撑或双脚支撑、与手臂动作相结合等。`,
          ko: `1. 각종 신체 운동
상지, 하지, 몸통 앞으로 굽히기, 몸통 옆으로 굽히기, 몸통 돌리기, 팔 흔들기, 다리 굽혔다 펴기, 가슴 뒤로 젖히기, 몸의 탄성, 파동(뱀 모양 움직임) 등 다양한 복합 운동

2. 각종 도약(점프)
사슴 뛰기, 앞뒤 다리 벌려 뛰기, 좌우 다리 벌려 뛰기 등 다양한 도약.

3. 유연성
좌우 다리 벌려 몸통 앞으로 굽히기 유연성, 앞뒤 다리 벌리기 유연성, 다리 모아 몸통 앞으로 굽히기 유연성 등 다양한 유연성.

4. 밸런스
다양한 밸런스 등.

5. 물구나무서기
다양한 물구나무서기 등.

6. 각종 걷기와 달리기
다양한 스텝 등.

7. 회전 및 방향 전환
턴·피벗.

이상의 요소는 다양한 방향, 다양한 면, 이동을 동반하거나 동반하지 않는 형태, 한 발 지지 또는 두 발 지지, 팔 동작과 연결하는 등 다채로운 움직임을 고려하여 실시할 수 있다.`,
          es: `1. Movimientos de manos libres
Movimientos de brazos y de piernas, flexión del tronco al frente, flexión lateral, rotación del tronco, balanceos de brazos, flexiones y extensiones de piernas, arqueo del pecho hacia atrás, rebotes del cuerpo, ondas (serpentinas) y otros movimientos combinados

2. Saltos
Salto de ciervo, salto con las piernas abiertas adelante y atrás, salto con las piernas abiertas lateralmente y otros saltos.

3. Flexibilidad
Flexión del tronco al frente con las piernas abiertas lateralmente, spagat adelante y atrás, flexión del tronco al frente con las piernas juntas y otros elementos de flexibilidad.

4. Equilibrios
Equilibrios de todo tipo.

5. Verticales
Verticales de todo tipo.

6. Pasos y carreras
Pasos de todo tipo.

7. Giros y cambios de dirección
Giros y pivotes.

Todos estos elementos pueden realizarse con movimientos muy variados: en distintas direcciones, en distintos planos, con desplazamiento o sin él, con apoyo sobre un pie o sobre los dos, combinados con movimientos de brazos, etc.`,
          fr: `1. Mouvements corporels divers
Mouvements des bras et des jambes, flexions avant, flexions latérales, rotations du tronc, balancers des bras, flexions-extensions des jambes, cambrés de la poitrine, ressorts du corps, ondes (mouvements serpentins) et autres mouvements combinés

2. Sauts divers
Sauts de biche, sauts écart avant-arrière, sauts écart latéral et autres sauts.

3. Souplesse
Flexions avant en écart latéral, grands écarts avant-arrière, flexions avant jambes serrées et autres éléments de souplesse.

4. Équilibres
Équilibres divers.

5. Appuis tendus renversés
ATR divers.

6. Marches et courses diverses
Pas divers.

7. Rotations et changements de direction
Tours et pivots.

Ces éléments peuvent être exécutés avec une grande variété de mouvements : dans différentes directions et différents plans, avec ou sans déplacement, en appui sur un pied ou sur les deux, associés à des mouvements de bras, etc.`,
          ru: `1. Различные движения без предмета
Движения рук и ног, наклоны вперёд, наклоны в сторону, повороты туловища, махи руками, сгибание и разгибание ног, прогибы в груди, пружинные движения тела, волны (змейка) и прочие комбинированные движения

2. Различные прыжки
Прыжок «олень», прыжок шагом, прыжок в шпагат в стороны и прочие прыжки.

3. Гибкость
Наклон вперёд из положения ноги врозь, шпагат, наклон вперёд с сомкнутыми ногами и прочие элементы гибкости.

4. Равновесия
Различные равновесия.

5. Стойки на руках
Различные стойки на руках.

6. Различные шаги и бег
Различные шаги.

7. Повороты и вращения
Тёрны и пивоты.

Перечисленные элементы можно выполнять с учётом самых разных вариантов движения: в разных направлениях и плоскостях, с перемещением и без него, с опорой на одну или на две ноги, в сочетании с движениями рук и так далее.`,
          hi: `1. विभिन्न बिना उपकरण की गतिविधियाँ
ऊपरी अंग, निचले अंग, शरीर का आगे की ओर झुकाव, शरीर का बगल की ओर झुकाव, शरीर का घुमाव, बाँहों का झूलना, टाँगों का मोड़ना और सीधा करना, छाती का पीछे की ओर मोड़, शरीर का उछाल, तरंग गति (साँप जैसी गति) आदि विभिन्न मिश्रित गतिविधियाँ

2. विभिन्न छलांगें (जंप)
हिरण छलांग, आगे-पीछे टाँगें खोलकर छलांग, दाएँ-बाएँ टाँगें खोलकर छलांग आदि विभिन्न छलांगें।

3. लचीलापन
दाएँ-बाएँ टाँगें खोलकर आगे झुकने वाला लचीलापन, आगे-पीछे टाँगें खोलने वाला लचीलापन, टाँगें जोड़कर आगे झुकने वाला लचीलापन आदि विभिन्न लचीलापन तत्व।

4. संतुलन
विभिन्न संतुलन आदि।

5. हैंडस्टैंड
विभिन्न हैंडस्टैंड आदि।

6. विभिन्न चाल और दौड़
विभिन्न स्टेप आदि।

7. घुमाव और दिशा परिवर्तन
टर्न, पिवट।

ऊपर दिए गए तत्व विभिन्न दिशाओं में, विभिन्न तलों में, स्थान परिवर्तन के साथ या उसके बिना, एक पैर के सहारे या दोनों पैरों के सहारे, बाँहों की गति के साथ जोड़कर आदि अनेक प्रकार की गतिविधियों को ध्यान में रखते हुए किए जा सकते हैं।`,
        },
      },
      {
        title: {
          ja: '構成に要求されるもの',
          en: 'Requirements for the Composition',
          zh: '编排的要求',
          ko: '구성에 요구되는 것',
          es: 'Exigencias de la composición',
          fr: 'Exigences de la composition',
          ru: 'Требования к композиции',
          hi: 'संरचना के लिए आवश्यक बातें',
        },
        content: {
          ja: '演技の構成は、あらゆる徒手の要素を含め、跳躍力、柔軟性、巧緻性などを十分発揮し、あらゆる動きの変化で、その技術は独創的であり、迅速な動きで精神（３秒以上）を含まず、流れるように実施されなければならない。その動きのつなぎとして、前転・後転・側転・ブリッジを使用することは認める。',
          en: 'The composition of a routine must include all kinds of free-hand elements, make full use of jumping power, flexibility and dexterity, show all kinds of changes in movement, use original technique, and flow with quick movements without static pauses (of 3 seconds or more). Forward rolls, backward rolls, cartwheels and bridges may be used as links between movements.',
          zh: '成套动作的编排必须包含各种徒手要素，充分发挥跳跃力、柔韧性、灵巧性等，通过各种动作变化，技术富有独创性，以迅速的动作完成，不得含有静止（3秒以上），并且必须流畅地完成。作为动作之间的衔接，允许使用前滚翻、后滚翻、侧手翻、桥。',
          ko: '연기의 구성은 모든 신체 요소를 포함하고 도약력, 유연성, 숙련성 등을 충분히 발휘하며, 온갖 움직임의 변화로 그 기술이 독창적이고, 신속한 움직임으로 정지(3초 이상)를 포함하지 않으며 흐르듯이 실시되어야 한다. 그 움직임의 연결로서 앞구르기·뒤구르기·옆돌기·브리지를 사용하는 것은 인정한다.',
          es: 'La composición del ejercicio debe incluir todo tipo de elementos de manos libres, aprovechar plenamente la capacidad de salto, la flexibilidad y la destreza, presentar todo tipo de cambios de movimiento, ser original en su técnica y ejecutarse de forma fluida, con movimientos rápidos y sin posiciones mantenidas (de 3 segundos o más). Como enlace entre los movimientos se admite el uso de la voltereta adelante, la voltereta atrás, la rueda lateral y el puente.',
          fr: "La composition de l'exercice doit comprendre toutes sortes d'éléments corporels, mettre pleinement en valeur la détente, la souplesse et l'adresse, présenter toutes sortes de variations de mouvement, faire appel à une technique originale et s'enchaîner avec fluidité, dans des mouvements rapides et sans temps d'arrêt (de 3 secondes ou plus). Les roulades avant, les roulades arrière, les roues et les ponts sont admis comme liaisons entre les mouvements.",
          ru: 'Композиция упражнения должна включать всевозможные элементы без предмета, в полной мере раскрывать прыгучесть, гибкость и ловкость, показывать всевозможные смены движений, отличаться оригинальной техникой и выполняться слитно, быстрыми движениями, без статических пауз (3 секунды и более). В качестве связок между движениями допускаются кувырок вперёд, кувырок назад, колесо и мост.',
          hi: 'प्रदर्शन की संरचना में हर तरह के बिना उपकरण के तत्व शामिल हों, छलांग की शक्ति, लचीलापन और कौशल का पूरा उपयोग हो, गतिविधि के हर तरह के बदलाव के साथ तकनीक मौलिक हो, और तेज़ गतियों के साथ, स्थिर मुद्रा (3 सेकंड या उससे अधिक) के बिना, बहती हुई तरह से निष्पादन होना चाहिए। उन गतियों को जोड़ने के लिए आगे की लुढ़कन, पीछे की लुढ़कन, कार्टव्हील और ब्रिज का प्रयोग करने की अनुमति है।',
        },
      },
      {
        title: {
          ja: '実施',
          en: 'Execution',
          zh: '完成',
          ko: '실시',
          es: 'Ejecución',
          fr: 'Exécution',
          ru: 'Исполнение',
          hi: 'निष्पादन',
        },
        content: {
          ja: '実施に際しては新体操の特徴を正確に生かしたものでなくてはならない。すなわち、正しい身体の位置、スケールの大きさ、支点の制御、移動の正確さなどである。身体の動きはすべて、緩急の変化、及び力動感、大きさ、スピードのひつな結びつきをともなった継続的な動作でなくてはならない。また、すべての要素は、頭と腕を含む身体全体で行われなくてはならない。つまり、動きは局部的であってはならない。',
          en: 'Execution must bring out the characteristics of rhythmic gymnastics accurately: correct body position, amplitude, control of the points of support, accuracy of movement across the floor, and so on. All body movements must be continuous, with changes between fast and slow and a close connection of dynamics, amplitude and speed. All elements must be performed with the whole body, including the head and arms; that is, movements must not be isolated to one part of the body.',
          zh: '完成时必须准确地体现艺术体操的特点。即正确的身体位置、动作幅度、支点的控制、移动的准确性等。身体的所有动作都必须是伴随快慢变化以及力度感、幅度、速度紧密结合的连续动作。此外，所有要素都必须用包括头和手臂在内的全身来完成。也就是说，动作不能是局部的。',
          ko: '실시에 있어서는 리듬체조의 특징을 정확하게 살린 것이어야 한다. 즉 올바른 신체의 위치, 스케일의 크기, 지지점의 제어, 이동의 정확성 등이다. 신체의 움직임은 모두 완급의 변화 및 역동감, 크기, 속도의 긴밀한 결합을 동반한 연속적인 동작이어야 한다. 또한 모든 요소는 머리와 팔을 포함한 신체 전체로 이루어져야 한다. 즉 움직임이 국부적이어서는 안 된다.',
          es: 'La ejecución debe reflejar con exactitud las características de la gimnasia rítmica, es decir, posiciones correctas del cuerpo, amplitud, control de los puntos de apoyo, precisión en los desplazamientos, etc. Todos los movimientos del cuerpo deben ser continuos, con cambios de ritmo y una unión estrecha entre el dinamismo, la amplitud y la velocidad. Además, todos los elementos deben realizarse con todo el cuerpo, incluidos la cabeza y los brazos; es decir, el movimiento no puede quedar limitado a una parte del cuerpo.',
          fr: "L'exécution doit mettre en valeur avec justesse les caractéristiques de la gymnastique rythmique : position correcte du corps, amplitude, contrôle des points d'appui, précision des déplacements, etc. Tous les mouvements du corps doivent être continus, avec des alternances de vitesse et un lien étroit entre dynamisme, amplitude et rapidité. Tous les éléments doivent être exécutés avec le corps entier, tête et bras compris : le mouvement ne doit donc pas être localisé.",
          ru: 'Исполнение должно точно раскрывать особенности художественной гимнастики: верное положение тела, размах, владение точками опоры, точность перемещений и прочее. Все движения тела должны быть непрерывными, с чередованием быстрого и медленного и с тесной связью динамики, размаха и скорости. Все элементы должны выполняться всем телом, включая голову и руки, то есть движение не должно быть локальным.',
          hi: 'निष्पादन के समय लयबद्ध जिम्नास्टिक की विशेषताओं को सटीक ढंग से उभारना चाहिए। यानी शरीर की सही स्थिति, गतिविधि का विस्तार, सहारे के बिंदुओं का नियंत्रण, स्थान परिवर्तन की सटीकता आदि। शरीर की सभी गतियाँ, तेज़ और धीमी के बदलाव तथा शक्ति के प्रवाह, विस्तार और गति के घनिष्ठ जुड़ाव के साथ निरंतर होनी चाहिए। साथ ही सभी तत्व सिर और बाँहों सहित पूरे शरीर से किए जाने चाहिए। यानी गति शरीर के किसी एक हिस्से तक सीमित नहीं होनी चाहिए।',
        },
      },
      {
        title: {
          ja: '徒手の要素の典型的な欠点',
          en: 'Typical Faults in Free-Hand Elements',
          zh: '徒手要素的典型错误',
          ko: '신체 요소의 전형적인 결점',
          es: 'Faltas típicas en los elementos de manos libres',
          fr: 'Fautes courantes dans les éléments corporels',
          ru: 'Типичные ошибки в элементах без предмета',
          hi: 'बिना उपकरण के तत्वों की विशिष्ट खामियाँ',
        },
        content: {
          ja: `【構成の欠点】
下記に欠点表を示す。

【実施の欠点】
徒手難度のレベルを判断するための一般的な目安
1. 徒手の基礎要素は通常Ａ難度として数えられる。
2. 以下のような場合、徒手の要素はＢ難度としてみなされる。
  a. 実施に際して高い水準の運動能力を必要とする場合。
  （例：水平面以下の背面屈、ジャンプしながら複雑な動きを空中で行うなど）
  b. 実施に当たって高い水準の調整力が必要とされる場合。
  （例：狭い面積の上（つま先）で身体を支持する。より長い時間バランスを保つ１回転半以上（540°以上）のピヴォットを行うなど）
  c. ２つの異なった要素を同時に行う場合。
  （例：バランスのポーズをとりながら身体を完全に蛇動させるなど）
  d. ２つ以上の要素（同じ、または異なった種類の）を、途中に別の動作を入れずに連続して行う場合。
  （例：中間にステップを入れずに連続ジャンプを行うなど）`,
          en: `[Composition faults]
The table of faults is shown below.

[Execution faults]
General guidelines for judging the level of free-hand difficulties
1. Basic free-hand elements are usually counted as A difficulties.
2. Free-hand elements are regarded as B difficulties in the following cases.
  a. When a high level of physical ability is needed to perform them.
  (e.g. a back bend below the horizontal, or complex movements in the air during a jump)
  b. When a high level of coordination is needed to perform them.
  (e.g. supporting the body on a small area (the toes), holding a balance longer, or a pivot of 1½ turns (540°) or more)
  c. When two different elements are performed at the same time.
  (e.g. a full body wave while holding a balance)
  d. When two or more elements (of the same or different kinds) are performed in a row without other movements in between.
  (e.g. consecutive jumps without steps in between)`,
          zh: `【编排错误】
下面列出错误表。

【完成错误】
判断徒手难度等级的一般标准
1. 徒手基础要素通常计为A难度。
2. 在以下情况下，徒手要素被视为B难度。
  a. 完成时需要高水平的运动能力。
  （例：水平面以下的背屈、在跳跃中于空中完成复杂动作等）
  b. 完成时需要高水平的协调能力。
  （例：在很小的面积上（脚尖）支撑身体。更长时间地保持平衡，完成1周半以上（540°以上）的单足转体等）
  c. 同时完成2个不同的要素。
  （例：在保持平衡姿势的同时做完整的身体蛇形波浪等）
  d. 连续完成2个以上的要素（相同或不同种类），中间不加入其他动作。
  （例：中间不加步法连续跳跃等）`,
          ko: `【구성의 결점】
아래에 결점표를 제시한다.

【실시의 결점】
신체 난도의 수준을 판단하기 위한 일반적인 기준
1. 신체의 기초 요소는 보통 A 난도로 센다.
2. 다음과 같은 경우 신체 요소는 B 난도로 간주한다.
  a. 실시할 때 높은 수준의 운동 능력이 필요한 경우.
  (예: 수평면 이하의 등 뒤로 굽히기, 점프하면서 복잡한 움직임을 공중에서 실시하는 등)
  b. 실시할 때 높은 수준의 조정력이 필요한 경우.
  (예: 좁은 면적 위(발끝)에서 몸을 지지한다. 더 긴 시간 밸런스를 유지하는 1회전 반 이상(540도 이상)의 피벗을 실시하는 등)
  c. 서로 다른 2개의 요소를 동시에 실시하는 경우.
  (예: 밸런스 자세를 취하면서 몸을 완전히 파동시키는 등)
  d. 2개 이상의 요소(같은 종류 또는 다른 종류)를 도중에 다른 동작을 넣지 않고 연속해서 실시하는 경우.
  (예: 중간에 스텝을 넣지 않고 연속 점프를 실시하는 등)`,
          es: `[Faltas de composición]
A continuación se muestra la tabla de faltas.

[Faltas de ejecución]
Criterios generales para determinar el nivel de las dificultades de manos libres
1. Los elementos básicos de manos libres cuentan normalmente como dificultad A.
2. Los elementos de manos libres se consideran dificultad B en los casos siguientes.
  a. Cuando su ejecución exige un alto nivel de capacidad física.
  (p. ej.: arqueo de espalda por debajo de la horizontal, o realizar movimientos complejos en el aire durante un salto)
  b. Cuando su ejecución exige un alto nivel de coordinación.
  (p. ej.: sostener el cuerpo sobre una superficie reducida (las puntas de los pies), o realizar un pivote de una vuelta y media (540°) o más manteniendo el equilibrio durante más tiempo)
  c. Cuando se realizan a la vez dos elementos distintos.
  (p. ej.: hacer una onda completa del cuerpo manteniendo una posición de equilibrio)
  d. Cuando se realizan dos o más elementos (del mismo tipo o de tipos distintos) de forma consecutiva, sin ningún otro movimiento intermedio.
  (p. ej.: saltos consecutivos sin pasos intermedios)`,
          fr: `[Fautes de composition]
Le tableau des fautes figure ci-dessous.

[Fautes d'exécution]
Repères généraux pour apprécier le niveau des difficultés corporelles
1. Les éléments corporels de base sont habituellement comptés comme difficultés A.
2. Un élément corporel est considéré comme une difficulté B dans les cas suivants.
  a. Lorsque son exécution exige un niveau élevé de qualités physiques.
  (ex. : un cambré arrière sous l'horizontale, ou des mouvements complexes en l'air pendant un saut)
  b. Lorsque son exécution exige un niveau élevé de coordination.
  (ex. : se maintenir sur une petite surface d'appui (les pointes de pieds), tenir un équilibre plus longtemps, ou effectuer un pivot d'un tour et demi (540°) ou plus)
  c. Lorsque deux éléments différents sont exécutés simultanément.
  (ex. : une onde complète du corps tout en tenant un équilibre)
  d. Lorsque deux éléments ou plus (de même nature ou de nature différente) sont exécutés à la suite, sans autre mouvement intercalé.
  (ex. : des sauts enchaînés sans pas intermédiaire)`,
          ru: `[Ошибки композиции]
Таблица ошибок приводится ниже.

[Ошибки исполнения]
Общие ориентиры для определения уровня трудностей без предмета
1. Базовые элементы без предмета обычно засчитываются как трудность A.
2. Элемент без предмета считается трудностью B в следующих случаях.
  a. Когда для его исполнения нужен высокий уровень физических качеств.
  (например, прогиб назад ниже горизонтали, сложные движения в воздухе во время прыжка)
  b. Когда для его исполнения нужен высокий уровень координации.
  (например, опора тела на малую площадь (носки), более длительное удержание равновесия, пивот в полтора оборота (540°) и более)
  c. Когда два разных элемента выполняются одновременно.
  (например, полная волна телом при удержании равновесия)
  d. Когда два и более элемента (одного или разных видов) выполняются подряд без промежуточных движений.
  (например, прыжки подряд без шагов между ними)`,
          hi: `[संरचना की खामियाँ]
नीचे खामियों की तालिका दी गई है।

[निष्पादन की खामियाँ]
बिना उपकरण की कठिनाइयों का स्तर तय करने के लिए सामान्य दिशानिर्देश
1. बिना उपकरण के आधारभूत तत्व आमतौर पर A कठिनाई के रूप में गिने जाते हैं।
2. निम्नलिखित स्थितियों में बिना उपकरण के तत्व B कठिनाई माने जाते हैं।
  a. जब उन्हें करने के लिए ऊँचे स्तर की शारीरिक क्षमता आवश्यक हो।
  (उदाहरण: क्षैतिज तल से नीचे पीठ का पीछे की ओर मोड़, छलांग लगाते हुए हवा में जटिल गतियाँ करना आदि)
  b. जब उन्हें करने के लिए ऊँचे स्तर की समन्वय क्षमता आवश्यक हो।
  (उदाहरण: छोटे क्षेत्र (पंजों) पर शरीर को सहारा देना, अधिक लंबे समय तक संतुलन बनाए रखते हुए 1 और आधे घुमाव (540° या उससे अधिक) से अधिक का पिवट करना आदि)
  c. जब 2 अलग-अलग तत्व एक साथ किए जाएँ।
  (उदाहरण: संतुलन की मुद्रा बनाए रखते हुए शरीर को पूरी तरह लहराना आदि)
  d. जब 2 या उससे अधिक तत्व (एक ही या अलग-अलग प्रकार के) बीच में कोई दूसरी गति डाले बिना लगातार किए जाएँ।
  (उदाहरण: बीच में स्टेप डाले बिना लगातार छलांगें लगाना आदि)`,
        },
        image: [
          {
            src: '/images/rules/tosyukettenhyou.png',
            alt: {
              ja: '徒手欠点表',
              en: 'Table of free-hand faults',
              zh: '徒手错误表',
              ko: '신체 결점표',
              es: 'Tabla de faltas de manos libres',
              fr: 'Tableau des fautes corporelles',
              ru: 'Таблица ошибок в элементах без предмета',
              hi: 'बिना उपकरण की खामियों की तालिका',
            },
          },
        ],
      },
      {
        title: {
          ja: '徒手難度表',
          en: 'Tables of Free-Hand Difficulties',
          zh: '徒手难度表',
          ko: '신체 난도표',
          es: 'Tablas de dificultades de manos libres',
          fr: 'Tableaux des difficultés corporelles',
          ru: 'Таблицы трудностей без предмета',
          hi: 'बिना उपकरण की कठिनाइयों की तालिकाएँ',
        },
        content: {
          ja: `以下の表においては、諸要素はグループ別に記されている。これらの要素には非常に多くの実施方法および配列が考えられる。難度のレベルを決定するには、一般目安の項を参照のこと。
※徒手の難度は、団体競技の場合、全員が実施すれば１ランクあがる。`,
          en: `In the tables below, the elements are listed by group. These elements can be performed and arranged in a great many ways. To determine the level of difficulty, see the section on general guidelines.
* In the group competition, free-hand difficulties rise one rank when all gymnasts perform them.`,
          zh: `在下列表格中，各要素按组别列出。这些要素有非常多的完成方法和排列组合。要确定难度等级，请参照一般标准一节。
※徒手难度在团体比赛中，如果全体运动员都完成，则提升1个等级。`,
          ko: `아래의 표에서는 여러 요소가 그룹별로 기재되어 있다. 이들 요소에는 매우 많은 실시 방법과 배열을 생각할 수 있다. 난도의 수준을 결정하려면 일반 기준 항목을 참조한다.
※ 신체의 난도는 단체 경기의 경우 전원이 실시하면 한 단계 올라간다.`,
          es: `En las tablas siguientes, los elementos aparecen ordenados por grupos. Estos elementos admiten muchísimas formas de ejecución y de combinación. Para determinar el nivel de dificultad, véase el apartado de criterios generales.
* En la competición por conjuntos, la dificultad de manos libres sube un nivel cuando la realizan todos los gimnastas.`,
          fr: `Dans les tableaux ci-dessous, les éléments sont présentés par groupe. Ils peuvent être exécutés et agencés d'une multitude de façons. Pour déterminer le niveau de difficulté, se reporter à la section des repères généraux.
* En compétition par ensembles, les difficultés corporelles montent d'un rang lorsque tous les gymnastes les exécutent.`,
          ru: `В таблицах ниже элементы перечислены по группам. Эти элементы можно исполнять и выстраивать очень по-разному. Для определения уровня трудности см. раздел общих ориентиров.
※ В групповых соревнованиях трудность без предмета повышается на один ранг, если её выполняют все гимнасты.`,
          hi: `नीचे दी गई तालिकाओं में तत्वों को वर्ग के अनुसार लिखा गया है। इन तत्वों के निष्पादन और क्रम के बहुत सारे तरीके सोचे जा सकते हैं। कठिनाई का स्तर तय करने के लिए सामान्य दिशानिर्देश वाला भाग देखें।
* समूह प्रतियोगिता में, बिना उपकरण की कठिनाई सभी के करने पर 1 रैंक बढ़ जाती है।`,
        },
        image: [
          {
            src: '/images/rules/jump(D).png',
            alt: {
              ja: '徒手の難度表（跳躍）',
              en: 'Table of free-hand difficulties (jumps)',
              zh: '徒手难度表（跳跃）',
              ko: '신체의 난도표(도약)',
              es: 'Tabla de dificultades de manos libres (saltos)',
              fr: 'Tableau des difficultés corporelles (sauts)',
              ru: 'Таблица трудностей без предмета (прыжки)',
              hi: 'बिना उपकरण की कठिनाइयों की तालिका (छलांग)',
            },
          },
          {
            src: '/images/rules/handstand(D).png',
            alt: {
              ja: '徒手の難度表（倒立）',
              en: 'Table of free-hand difficulties (handstands)',
              zh: '徒手难度表（倒立）',
              ko: '신체의 난도표(물구나무서기)',
              es: 'Tabla de dificultades de manos libres (verticales)',
              fr: 'Tableau des difficultés corporelles (appuis tendus renversés)',
              ru: 'Таблица трудностей без предмета (стойки на руках)',
              hi: 'बिना उपकरण की कठिनाइयों की तालिका (हैंडस्टैंड)',
            },
          },
          {
            src: '/images/rules/sijikaiten(D).png',
            alt: {
              ja: '徒手の難度表（支持回転表）',
              en: 'Table of free-hand difficulties (support rotations)',
              zh: '徒手难度表（支撑转体表）',
              ko: '신체의 난도표(지지 회전표)',
              es: 'Tabla de dificultades de manos libres (giros en apoyo)',
              fr: 'Tableau des difficultés corporelles (rotations en appui)',
              ru: 'Таблица трудностей без предмета (вращения в упоре)',
              hi: 'बिना उपकरण की कठिनाइयों की तालिका (सहारे के साथ घुमाव)',
            },
          },
          {
            src: '/images/rules/kaisen(D).png',
            alt: {
              ja: '徒手の難度表（旋回・ 回旋)',
              en: 'Table of free-hand difficulties (circles and rotations)',
              zh: '徒手难度表（绕环、回旋）',
              ko: '신체의 난도표(선회·회선)',
              es: 'Tabla de dificultades de manos libres (círculos y rotaciones)',
              fr: 'Tableau des difficultés corporelles (moulinets et rotations)',
              ru: 'Таблица трудностей без предмета (круги и вращения)',
              hi: 'बिना उपकरण की कठिनाइयों की तालिका (चक्कर, घुमाव)',
            },
          },
          {
            src: '/images/rules/turn(D).png',
            alt: {
              ja: '徒手の難度表（転向（ターン））',
              en: 'Table of free-hand difficulties (turns)',
              zh: '徒手难度表（转向（转体））',
              ko: '신체의 난도표(방향 전환(턴))',
              es: 'Tabla de dificultades de manos libres (cambios de dirección: giros)',
              fr: 'Tableau des difficultés corporelles (tours)',
              ru: 'Таблица трудностей без предмета (повороты)',
              hi: 'बिना उपकरण की कठिनाइयों की तालिका (दिशा परिवर्तन (टर्न))',
            },
          },
          {
            src: '/images/rules/balance(D).png',
            alt: {
              ja: '徒手の難度表（平均）',
              en: 'Table of free-hand difficulties (balances)',
              zh: '徒手难度表（平衡）',
              ko: '신체의 난도표(평균)',
              es: 'Tabla de dificultades de manos libres (equilibrios)',
              fr: 'Tableau des difficultés corporelles (équilibres)',
              ru: 'Таблица трудностей без предмета (равновесия)',
              hi: 'बिना उपकरण की कठिनाइयों की तालिका (संतुलन)',
            },
          },
          {
            src: '/images/rules/stretchA(D).png',
            alt: {
              ja: '徒手の難度表（静的柔軟）',
              en: 'Table of free-hand difficulties (static flexibility)',
              zh: '徒手难度表（静态柔韧）',
              ko: '신체의 난도표(정적 유연성)',
              es: 'Tabla de dificultades de manos libres (flexibilidad estática)',
              fr: 'Tableau des difficultés corporelles (souplesse statique)',
              ru: 'Таблица трудностей без предмета (статическая гибкость)',
              hi: 'बिना उपकरण की कठिनाइयों की तालिका (स्थिर लचीलापन)',
            },
          },
          {
            src: '/images/rules/stretchB(D).png',
            alt: {
              ja: '徒手の難度表（動的柔軟）',
              en: 'Table of free-hand difficulties (dynamic flexibility)',
              zh: '徒手难度表（动态柔韧）',
              ko: '신체의 난도표(동적 유연성)',
              es: 'Tabla de dificultades de manos libres (flexibilidad dinámica)',
              fr: 'Tableau des difficultés corporelles (souplesse dynamique)',
              ru: 'Таблица трудностей без предмета (динамическая гибкость)',
              hi: 'बिना उपकरण की कठिनाइयों की तालिका (गतिशील लचीलापन)',
            },
          },
        ],
      },
    ],
  },
]
