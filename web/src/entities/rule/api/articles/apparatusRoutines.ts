import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第3章 付録のうち、個人競技の演技（手具ごとの規格と技術）。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const APPARATUS_ROUTINES_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '個人競技の演技',
      en: 'Individual Routines',
      zh: '个人比赛的成套动作',
      ko: '개인 경기의 연기',
      es: 'Ejercicios de la competición individual',
      fr: 'Exercices individuels',
      ru: 'Индивидуальные упражнения',
      hi: 'व्यक्तिगत प्रतियोगिता का प्रदर्शन',
    },
    section: [
      {
        title: {
          ja: 'スティック（棒）の演技',
          en: 'Stick Routines',
          zh: '短棒的成套动作',
          ko: '스틱(봉)의 연기',
          es: 'Ejercicios de palo',
          fr: 'Exercices au bâton',
          ru: 'Упражнение с палочками',
          hi: 'स्टिक (डंडा) का प्रदर्शन',
        },
        block: [
          {
            title: {
              ja: 'スティック（棒）の規格',
              en: 'Stick Specifications',
              zh: '短棒的规格',
              ko: '스틱(봉)의 규격',
              es: 'Especificaciones del palo',
              fr: 'Caractéristiques du bâton',
              ru: 'Требования к палочкам',
              hi: 'स्टिक (डंडा) के विनिर्देश',
            },
            element: {
              ja: `1. 素材
木製または合成素材

2. 重量
最低200グラム

3. 形状
長さは90cm〜110cmとし太さ（直径）は2.5cm〜3.5cm。先端にはゴムは合成素材のキャップ最大直径４cm以内長さ５cm以内でつけることができる。また、全体あるいは一部にテープを巻いてもよい。

4. 色彩
自由`,
              en: `1. Material
Wood or synthetic material

2. Weight
At least 200 g

3. Shape
Length 90 cm to 110 cm, thickness (diameter) 2.5 cm to 3.5 cm. Rubber or synthetic caps with a maximum diameter of 4 cm and a length of up to 5 cm may be attached to the ends. The stick may be wholly or partly wrapped with tape.

4. Color
Free`,
              zh: `1. 材质
木制或合成材料

2. 重量
最低200克

3. 形状
长度为90cm—110cm，粗细（直径）为2.5cm—3.5cm。顶端可以安装橡胶或合成材料的封头，其最大直径在４cm以内、长度在５cm以内。此外，也可以在整体或局部缠绕胶带。

4. 颜色
自由`,
              ko: `1. 소재
목제 또는 합성 소재

2. 중량
최저 200그램

3. 형상
길이는 90cm~110cm로 하고 굵기(지름)는 2.5cm~3.5cm로 한다. 끝부분에는 고무 또는 합성 소재의 캡을 최대 지름 4cm 이내, 길이 5cm 이내로 붙일 수 있다. 또한 전체 또는 일부에 테이프를 감아도 된다.

4. 색채
자유`,
              es: `1. Material
Madera o material sintético

2. Peso
Mínimo 200 gramos

3. Forma
La longitud será de 90cm–110cm y el grosor (diámetro) de 2.5cm–3.5cm. En los extremos se pueden colocar capuchones de goma o de material sintético con un diámetro máximo de 4cm y una longitud máxima de 5cm. También se puede envolver con cinta todo el palo o una parte de él.

4. Color
Libre`,
              fr: `1. Matériau
Bois ou matériau synthétique

2. Poids
Au moins 200 g

3. Forme
Longueur de 90 cm à 110 cm, épaisseur (diamètre) de 2,5 cm à 3,5 cm. Des embouts en caoutchouc ou en matériau synthétique, d'un diamètre maximal de 4 cm et d'une longueur maximale de 5 cm, peuvent être fixés aux extrémités. Le bâton peut être entouré de ruban adhésif, en totalité ou en partie.

4. Couleur
Libre`,
              ru: `1. Материал
Дерево или синтетический материал

2. Вес
Не менее 200 граммов

3. Форма
Длина от 90 до 110 см, толщина (диаметр) от 2,5 до 3,5 см. На концы можно надеть резиновые или синтетические наконечники диаметром не более 4 см и длиной не более 5 см. Палочку можно целиком или частично обмотать лентой.

4. Цвет
Свободный`,
              hi: `1. सामग्री
लकड़ी या सिंथेटिक सामग्री

2. वज़न
कम से कम 200 ग्राम

3. आकार
लंबाई 90cm–110cm हो और मोटाई (व्यास) 2.5cm–3.5cm हो। सिरों पर रबर या सिंथेटिक सामग्री की कैप लगाई जा सकती है, जिसका अधिकतम व्यास 4cm के भीतर और लंबाई 5cm के भीतर हो। साथ ही, पूरे या कुछ हिस्से पर टेप लपेटा जा सकता है।

4. रंग
स्वतंत्र`,
            },
          },
          {
            title: {
              ja: 'スティック（棒）の技術',
              en: 'Stick Technique',
              zh: '短棒的技术',
              ko: '스틱(봉)의 기술',
              es: 'Técnica del palo',
              fr: 'Technique du bâton',
              ru: 'Техника работы с палочками',
              hi: 'स्टिक (डंडा) की तकनीक',
            },
            element: {
              ja: `【諸要素群】
1. 基礎要素群
  a. プロペラ回旋（風車）
  b. ころがし
  c. 投げ
  d. スティック（棒）を用いた転回系

2. その他の要素群
  a. 振り
  b. 回旋
  c. 滑らし

以上の諸要素は、以下のことを考慮に入れて実施することができる。
  a. 手の持ち替えを伴う、伴わない。
  b. 様々な方向で行う。様々な面で行う。
  c. 移動する場合、しない場合。
  d. 片足または両足支持、片手または両手使用。

3. スティック（棒）の操作
スティックの動きは、面を変更するような場合でも止めてはならず、スティック自体の重さから来る惰力を利用して動かされ続けなければならない。スティックのプロペラ回旋および振りを実施する場合は、腕の延長のように扱わなければならない。スティックの操作には体の動きが伴わなければならない。

4. スティック（棒）の持ち方
大きな広がりを持つ動き（例えば、振り・プロペラ回旋など）の間には、通常、スティックの先端あるいは中央（中心）の部分を指で軽くにぎるようにしなければならない。また、スティックを広げた手の上にのせたりすることも一時的に可能である。`,
              en: `[Element groups]
1. Basic element groups
  a. Propeller rotations (mills)
  b. Rolls
  c. Throws
  d. Tumbling with the stick

2. Other element groups
  a. Swings
  b. Circles
  c. Slides

These elements can be performed taking the following into account.
  a. With or without passing the stick between the hands.
  b. In various directions and in various planes.
  c. With or without traveling.
  d. On one foot or both feet, with one hand or both hands.

3. Handling the stick
The stick must not stop moving, even when changing planes, and must keep moving using the momentum that comes from its own weight. For propeller rotations and swings, the stick must be handled like an extension of the arm. Stick handling must be accompanied by body movement.

4. Holding the stick
During wide movements (e.g. swings and propeller rotations), the stick is usually held lightly with the fingers at the end or in the middle. The stick may also rest briefly on the open hand.`,
              zh: `【各要素组】
1. 基础要素组
  a. 螺旋绕环（风车）
  b. 滚动
  c. 抛掷
  d. 使用短棒的翻腾类

2. 其他要素组
  a. 摆动
  b. 绕环
  c. 滑动

以上各要素，可以在考虑以下各点的基础上进行。
  a. 伴有换手或不伴有换手。
  b. 在各种方向进行。在各种平面进行。
  c. 移动或不移动。
  d. 单脚或双脚支撑，用单手或双手。

3. 短棒的操作
短棒的运动即使在变换平面时也不得停止，必须利用短棒自身重量产生的惯性持续运动。做短棒的螺旋绕环和摆动时，必须把短棒当作手臂的延长来处理。短棒的操作必须伴随身体的运动。

4. 短棒的握法
在幅度较大的动作（例如摆动、螺旋绕环等）过程中，通常必须用手指轻握短棒的顶端或中央（中心）部位。此外，也可以暂时将短棒放在摊开的手上。`,
              ko: `【제반 요소군】
1. 기초 요소군
  a. 프로펠러 회전(풍차)
  b. 굴리기
  c. 던지기
  d. 스틱(봉)을 사용한 공중돌기 계열

2. 그 밖의 요소군
  a. 흔들기
  b. 회전
  c. 미끄러뜨리기

이상의 제반 요소는 다음 사항을 고려하여 실시할 수 있다.
  a. 손을 바꿔 잡는 것을 동반하거나 동반하지 않는다.
  b. 다양한 방향으로 실시한다. 다양한 면에서 실시한다.
  c. 이동하는 경우와 이동하지 않는 경우.
  d. 한 발 또는 두 발 지지, 한 손 또는 두 손 사용.

3. 스틱(봉)의 조작
스틱의 움직임은 면을 변경하는 경우에도 멈추어서는 안 되며, 스틱 자체의 무게에서 오는 관성을 이용하여 계속 움직여야 한다. 스틱의 프로펠러 회전 및 흔들기를 실시하는 경우에는 팔의 연장처럼 다루어야 한다. 스틱의 조작에는 몸의 움직임이 동반되어야 한다.

4. 스틱(봉)을 잡는 법
크게 펼쳐지는 움직임(예를 들어 흔들기, 프로펠러 회전 등) 중에는 통상 스틱의 끝부분 또는 중앙(중심) 부분을 손가락으로 가볍게 쥐어야 한다. 또한 스틱을 편 손 위에 올려놓는 것도 일시적으로 가능하다.`,
              es: `[Grupos de elementos]
1. Grupos de elementos básicos
  a. Molinetes (hélices)
  b. Rodamientos
  c. Lanzamientos
  d. Elementos de tumbling con el palo

2. Otros grupos de elementos
  a. Balanceos
  b. Círculos
  c. Deslizamientos

Los elementos anteriores se pueden ejecutar teniendo en cuenta lo siguiente.
  a. Con cambio de mano o sin él.
  b. En diferentes direcciones. En diferentes planos.
  c. Con desplazamiento o sin él.
  d. Con apoyo sobre un pie o sobre los dos, con una mano o con las dos.

3. Manejo del palo
El palo no debe detener su movimiento, ni siquiera al cambiar de plano, y debe seguir moviéndose aprovechando la inercia que le da su propio peso. Al ejecutar molinetes y balanceos, el palo se debe manejar como una prolongación del brazo. El manejo del palo debe ir acompañado del movimiento del cuerpo.

4. Forma de sujetar el palo
Durante los movimientos de gran amplitud (por ejemplo, balanceos o molinetes), el palo se debe sujetar normalmente con los dedos, sin apretar, por un extremo o por la parte central. También es posible apoyarlo momentáneamente sobre la mano abierta.`,
              fr: `[Groupes d'éléments]
1. Groupes d'éléments de base
  a. Rotations en hélice (moulins)
  b. Roulés
  c. Lancers
  d. Tumbling avec le bâton

2. Autres groupes d'éléments
  a. Balancers
  b. Cercles
  c. Glissés

Ces éléments peuvent être exécutés en tenant compte des points suivants.
  a. Avec ou sans passage du bâton d'une main à l'autre.
  b. Dans différentes directions et différents plans.
  c. Avec ou sans déplacement.
  d. En appui sur un pied ou sur les deux, avec une main ou les deux mains.

3. Maniement du bâton
Le bâton ne doit jamais cesser de bouger, même lors d'un changement de plan, et doit continuer de se déplacer grâce à l'élan que lui donne son propre poids. Lors des rotations en hélice et des balancers, il doit être manié comme un prolongement du bras. Le maniement du bâton doit s'accompagner de mouvements du corps.

4. Prise du bâton
Pendant les mouvements de grande amplitude (balancers, rotations en hélice, etc.), le bâton se tient en principe légèrement entre les doigts, par une extrémité ou par le milieu. Il peut aussi reposer brièvement sur la main ouverte.`,
              ru: `[Группы элементов]
1. Базовые группы элементов
  a. вращения «пропеллер» (мельница)
  b. прокаты
  c. броски
  d. акробатика с палочкой

2. Прочие группы элементов
  a. махи
  b. круги
  c. скольжения

Перечисленные элементы можно выполнять с учётом следующего.
  a. с перекладыванием из руки в руку и без него;
  b. в разных направлениях, в разных плоскостях;
  c. с перемещением и без него;
  d. с опорой на одну или на две ноги, одной или двумя руками.

3. Работа с палочкой
Движение палочки нельзя останавливать даже при смене плоскости: оно должно продолжаться за счёт инерции собственного веса палочки. При вращениях «пропеллер» и махах палочку следует вести как продолжение руки. Работа с палочкой должна сопровождаться движением тела.

4. Хват палочки
Во время широких движений (например, махов и вращений «пропеллер») палочку обычно держат, слегка обхватив пальцами её конец или середину. Палочку можно также ненадолго положить на раскрытую ладонь.`,
              hi: `[तत्व वर्ग]
1. बुनियादी तत्व वर्ग
  a. प्रोपेलर घुमाव (पवनचक्की)
  b. लुढ़काव
  c. फेंक
  d. स्टिक (डंडा) के साथ टम्बलिंग

2. अन्य तत्व वर्ग
  a. झुलाव
  b. चक्र
  c. सरकाव

उपर्युक्त तत्वों को निम्नलिखित बातों को ध्यान में रखते हुए किया जा सकता है।
  a. हाथ बदलने के साथ या बिना।
  b. विभिन्न दिशाओं में करना। विभिन्न तलों में करना।
  c. स्थान परिवर्तन के साथ या बिना।
  d. एक पैर या दोनों पैरों पर सहारा, एक हाथ या दोनों हाथों का उपयोग।

3. स्टिक (डंडा) का संचालन
स्टिक की गति को तल बदलते समय भी रोका नहीं जाना चाहिए, और उसे स्टिक के अपने वज़न से मिलने वाली जड़ता का उपयोग करते हुए चलते रहना चाहिए। स्टिक की प्रोपेलर घुमाव और झुलाव करते समय उसे बाजू के विस्तार की तरह संभालना चाहिए। स्टिक के संचालन के साथ शरीर की गति भी होनी चाहिए।

4. स्टिक (डंडा) की पकड़
बड़े विस्तार वाली गतियों के दौरान (उदाहरण के लिए झुलाव, प्रोपेलर घुमाव आदि) सामान्यतः स्टिक के सिरे या बीच (केंद्र) के हिस्से को उंगलियों से हल्के से पकड़ना चाहिए। साथ ही, स्टिक को कुछ समय के लिए खुली हथेली पर रखना भी संभव है।`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              zh: '编排的要求',
              ko: '구성에 요구되는 것',
              es: 'Requisitos de la composición',
              fr: 'Exigences de la composition',
              ru: 'Требования к композиции',
              hi: 'संरचना के लिए आवश्यकताएँ',
            },
            element: {
              ja: `1. プロペラ回旋
プロペラ回旋は２回以上入れなければならない。

2. ころがし
ころがしは１回以上、長さは１m以上入れなければならない。

3. 投げ
  a. 投げの最低条件
    ⅰ. ３回以上の投げを入れなければならない。
    ⅱ. 左手投げ左手受け１回以上、右手投げ右手受け１回以上入れなければならない。
  b. 投げの高さ
    ⅰ. 投げの高さは、競技者が投げたところから最低２m以上の高さとする。

4. 転回系の要素
  a. 前方・後方・側方系の転回系を入れなければならない。
  b. 転回系を実施しているときに、スティックが生かされなければならない。

5. 諸要素
  a. 徒手要素と組み合わされた、各種の異なった方向および面でのプロペラ回旋。
  b. さまざまな種類の投げ。（水平投げ・縦投げ・水平および縦のプロペラ回旋投げ・片手、両手投げ）
  c. さまざまな回旋（小、中、大）（それぞれ手首、前腕、腕を使って行う）。
  d. リズミカルなスティックのまわし。
  e. 多様な持ち方。
  f. さまざまなころがし。

※　スティックを投げる場合には、必ず身体が動いていなければならい。演技全体を通じて、スティックが常に身体と調和を保って動いているということが、スティックの演技には不可欠である。`,
              en: `1. Propeller rotations
At least two propeller rotations must be included.

2. Rolls
At least one roll of at least 1 m must be included.

3. Throws
  a. Minimum requirements for throws
    i. At least three throws must be included.
    ii. At least one throw with the left hand caught with the left hand, and at least one throw with the right hand caught with the right hand, must be included.
  b. Height of throws
    i. A throw must rise at least 2 m from the point of release.

4. Tumbling elements
  a. Forward, backward and sideways tumbling must be included.
  b. The stick must be used actively during tumbling.

5. Elements
  a. Propeller rotations in various directions and planes, combined with free-hand elements.
  b. Various kinds of throws (horizontal throws, vertical throws, horizontal and vertical propeller throws, one-hand and two-hand throws).
  c. Various circles (small, medium and large, using the wrist, forearm and arm respectively).
  d. Rhythmic rotations of the stick.
  e. A variety of grips.
  f. Various rolls.

* When the stick is thrown, the body must always be moving. Throughout the routine, it is essential that the stick always moves in harmony with the body.`,
              zh: `1. 螺旋绕环
必须编入２次以上的螺旋绕环。

2. 滚动
必须编入１次以上、长度１m 以上的滚动。

3. 抛掷
  a. 抛掷的最低条件
    ⅰ. 必须编入３次以上的抛掷。
    ⅱ. 必须编入左手抛左手接１次以上、右手抛右手接１次以上。
  b. 抛掷的高度
    ⅰ. 抛掷的高度，从参赛者抛出的位置算起至少要达到２m 以上。

4. 翻腾类要素
  a. 必须编入前方、后方、侧方的翻腾。
  b. 做翻腾时，必须有效地运用短棒。

5. 各要素
  a. 与徒手要素相结合的、各种不同方向和平面的螺旋绕环。
  b. 各种各样的抛掷。（水平抛、垂直抛、水平及垂直的螺旋绕环抛、单手抛、双手抛）
  c. 各种绕环（小、中、大）（分别用手腕、前臂、手臂进行）。
  d. 有节奏的短棒转动。
  e. 多种多样的握法。
  f. 各种各样的滚动。

※　抛出短棒时，身体必须始终在运动。贯穿整套动作，短棒始终与身体保持协调地运动，这对短棒的成套动作来说是不可或缺的。`,
              ko: `1. 프로펠러 회전
프로펠러 회전은 2회 이상 넣어야 한다.

2. 굴리기
굴리기는 1회 이상, 길이는 1m 이상 넣어야 한다.

3. 던지기
  a. 던지기의 최저 조건
    ⅰ. 3회 이상의 던지기를 넣어야 한다.
    ⅱ. 왼손으로 던져 왼손으로 받기 1회 이상, 오른손으로 던져 오른손으로 받기 1회 이상을 넣어야 한다.
  b. 던지기의 높이
    ⅰ. 던지기의 높이는 경기자가 던진 지점에서 최저 2m 이상의 높이로 한다.

4. 공중돌기 계열의 요소
  a. 전방·후방·측방 계열의 공중돌기를 넣어야 한다.
  b. 공중돌기를 실시하고 있을 때 스틱이 살려져야 한다.

5. 제반 요소
  a. 신체 요소와 조합된, 각종 다른 방향 및 면에서의 프로펠러 회전.
  b. 다양한 종류의 던지기.(수평 던지기·세로 던지기·수평 및 세로 프로펠러 회전 던지기·한 손, 두 손 던지기)
  c. 다양한 회전(소, 중, 대)(각각 손목, 팔뚝, 팔을 사용하여 실시한다).
  d. 리듬감 있는 스틱 돌리기.
  e. 다양한 잡는 법.
  f. 다양한 굴리기.

※ 스틱을 던지는 경우에는 반드시 신체가 움직이고 있어야 한다. 연기 전체를 통하여 스틱이 항상 신체와 조화를 유지하며 움직이고 있다는 것이 스틱 연기에는 불가결하다.`,
              es: `1. Molinetes
Se deben incluir dos molinetes o más.

2. Rodamientos
Se debe incluir un rodamiento o más, de 1m o más de longitud.

3. Lanzamientos
  a. Condiciones mínimas de los lanzamientos
    ⅰ. Se deben incluir tres lanzamientos o más.
    ⅱ. Se debe incluir al menos un lanzamiento con la mano izquierda recogido con la mano izquierda y al menos un lanzamiento con la mano derecha recogido con la mano derecha.
  b. Altura de los lanzamientos
    ⅰ. La altura del lanzamiento será como mínimo de 2m por encima del punto desde el que lanza el gimnasta.

4. Elementos de tumbling
  a. Se deben incluir elementos de tumbling hacia delante, hacia atrás y laterales.
  b. El palo se debe aprovechar mientras se ejecutan los elementos de tumbling.

5. Elementos
  a. Molinetes en diferentes direcciones y planos, combinados con elementos de manos libres.
  b. Lanzamientos de distintos tipos. (lanzamiento horizontal, lanzamiento vertical, lanzamiento en molinete horizontal y vertical, lanzamiento con una mano y con las dos manos)
  c. Círculos diversos (pequeños, medianos y grandes), realizados con la muñeca, el antebrazo y el brazo respectivamente.
  d. Giros rítmicos del palo.
  e. Formas variadas de sujeción.
  f. Rodamientos variados.

* Cuando se lanza el palo, el cuerpo debe estar siempre en movimiento. A lo largo de todo el ejercicio es imprescindible que el palo se mueva siempre en armonía con el cuerpo.`,
              fr: `1. Rotations en hélice
Au moins deux rotations en hélice doivent figurer dans l'exercice.

2. Roulés
Au moins un roulé d'au moins 1 m doit figurer dans l'exercice.

3. Lancers
  a. Conditions minimales des lancers
    i. Au moins trois lancers doivent figurer dans l'exercice.
    ii. Au moins un lancer de la main gauche rattrapé de la main gauche et au moins un lancer de la main droite rattrapé de la main droite doivent y figurer.
  b. Hauteur des lancers
    i. Le lancer doit s'élever d'au moins 2 m au-dessus du point de lâcher.

4. Éléments de tumbling
  a. Du tumbling avant, arrière et latéral doit figurer dans l'exercice.
  b. Le bâton doit être mis en valeur pendant le tumbling.

5. Éléments
  a. Rotations en hélice dans diverses directions et divers plans, combinées à des éléments corporels.
  b. Lancers de types variés (lancers horizontaux, lancers verticaux, lancers en hélice horizontale et verticale, lancers d'une main ou des deux mains).
  c. Cercles variés (petits, moyens, grands), réalisés respectivement avec le poignet, l'avant-bras et le bras.
  d. Rotations rythmées du bâton.
  e. Prises variées.
  f. Roulés variés.

* Lorsque le bâton est lancé, le corps doit impérativement être en mouvement. Il est essentiel, dans un exercice au bâton, que celui-ci reste en permanence en harmonie de mouvement avec le corps, du début à la fin.`,
              ru: `1. Вращения «пропеллер»
Необходимо включить не менее двух вращений «пропеллер».

2. Прокаты
Необходимо включить не менее одного проката длиной не менее 1 м.

3. Броски
  a. Минимальные требования к броскам
    i. Необходимо включить не менее трёх бросков.
    ii. Необходимо включить не менее одного броска левой рукой с ловлей левой рукой и не менее одного броска правой рукой с ловлей правой рукой.
  b. Высота броска
    i. Палочка должна подниматься не менее чем на 2 м от точки выпуска.

4. Акробатические элементы
  a. Необходимо включить акробатику вперёд, назад и в сторону.
  b. Во время акробатики палочка должна быть задействована.

5. Элементы
  a. Вращения «пропеллер» в разных направлениях и плоскостях в сочетании с элементами без предмета.
  b. Разные виды бросков (горизонтальные, вертикальные, горизонтальные и вертикальные броски с «пропеллером», броски одной и двумя руками).
  c. Разные круги (малые, средние, большие — соответственно кистью, предплечьем и всей рукой).
  d. Ритмичные обороты палочки.
  e. Разнообразные хваты.
  f. Разные прокаты.

※ При броске палочки тело обязательно должно быть в движении. Для упражнения с палочками необходимо, чтобы на всём его протяжении палочка двигалась в согласии с телом.`,
              hi: `1. प्रोपेलर घुमाव
प्रोपेलर घुमाव 2 या अधिक बार डालना आवश्यक है।

2. लुढ़काव
लुढ़काव कम से कम 1 बार, और लंबाई 1m या अधिक का डालना आवश्यक है।

3. फेंक
  a. फेंक की न्यूनतम शर्तें
    ⅰ. 3 या अधिक फेंक डालने आवश्यक हैं।
    ⅱ. बाएँ हाथ से फेंककर बाएँ हाथ से लपकना 1 या अधिक बार, दाएँ हाथ से फेंककर दाएँ हाथ से लपकना 1 या अधिक बार डालना आवश्यक है।
  b. फेंक की ऊँचाई
    ⅰ. फेंक की ऊँचाई, जिम्नास्ट के फेंकने के स्थान से कम से कम 2m या अधिक होनी चाहिए।

4. टम्बलिंग तत्व
  a. आगे, पीछे और बगल की टम्बलिंग डालना आवश्यक है।
  b. टम्बलिंग करते समय स्टिक का सक्रिय उपयोग होना चाहिए।

5. तत्व
  a. बिना उपकरण के तत्वों के साथ संयुक्त, विभिन्न अलग-अलग दिशाओं और तलों में प्रोपेलर घुमाव।
  b. विभिन्न प्रकार के फेंक। (क्षैतिज फेंक, ऊर्ध्वाधर फेंक, क्षैतिज और ऊर्ध्वाधर प्रोपेलर घुमाव फेंक, एक हाथ से और दोनों हाथों से फेंक)
  c. विभिन्न चक्र (छोटे, मध्यम, बड़े) (क्रमशः कलाई, अग्रबाहु और बाजू का उपयोग करके किए जाते हैं)।
  d. स्टिक का लयबद्ध घुमाव।
  e. विविध पकड़।
  f. विभिन्न लुढ़काव।

※ स्टिक फेंकते समय शरीर का गतिमान होना अनिवार्य है। पूरे प्रदर्शन के दौरान स्टिक का हमेशा शरीर के साथ तालमेल बनाए रखते हुए चलते रहना, स्टिक के प्रदर्शन के लिए अनिवार्य है।`,
            },
          },
          {
            title: {
              ja: '難度のレベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              zh: '判断难度级别的一般标准',
              ko: '난도의 수준을 판단하기 위한 일반적 기준',
              es: 'Pautas generales para valorar el nivel de dificultad',
              fr: 'Repères généraux pour apprécier le niveau de difficulté',
              ru: 'Общие ориентиры для определения уровня трудности',
              hi: 'कठिनाई का स्तर तय करने के लिए सामान्य दिशानिर्देश',
            },
            element: {
              ja: `スティックに特徴的な諸要素は、通常それが徒手のＢ難度の要素と組み合わされた場合はＢ難度、徒手のＣ難度の要素と組み合わされて実施された場合はＣ難度として数える。
1. Ａ難度
以下の要素は、徒手系や転回系の要素と組み合わせて実施した場合、Ａ難度として数える。
  a. スティックを保持したまま、Ａ難度の転回運動を実施した場合。
  b. Ａ難度の転回運動を実施している間に、スティックを１回操作した場合。
  c. スティックを投げ上げている間に、何も実施せずスティックを受けた場合。
  d. その他、Ａ難度としての組み合わせの技術価値の場合。

2. Ｂ難度
以下のスティックの要素は、徒手のB難度の要素と組み合わせた場合Ｂ難度として数える。
  a. スティックのコントロールが難しい場合
    i. スティックを投げて受け取る。（例：徒手の難度の要素と組み合わせて、スティックを２m以上投げて受ける。）
  b. 動きを調和させるのが難しい場合
    i. 徒手の要素とスティックを組み合わせて行う。（例：徒手のＢ難度の要素と組み合わせて、プロペラ回旋を行う。）
  c. スティックの受け取りが難しい場合
    i. スティックを投げ上げている間に回転してからスティックを受け取る。（例：１回前転をしてからスティックを受け取るなど、様々な投げ方でスティックを投げ、その投げている間に様々な回転などを入れて受け取る。）
    ii. 視野外でスティックの投げ受けを行う。（例：様々な投げ方でスティックを投げ、視界の外で受け取る。）

3. Ｃ難度
以下の要素は、転回系の要素と組み合わせた場合Ｃ難度として数える。
  a. スティックを投げ上げている間に、Ｂ難度の転回運動を実施した場合。
  b. Ｂ難度の転回運動の間に、手具を２回以上操作した場合。
  c. Ｃ難度の転回運動を行なった場合。
  d. スティックを投げ上げている間に、２つの徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｃ難度としての組み合わせの技術価値の高い場合。

4. Ｄ難度
以下の要素は、転回系の要素と組み合わせた場合Ｄ難度として数える。
  a. スティックを投げ上げている間に、Ｃ難度の転回運動を実施した場合。
  b. Ｃ難度の転回運動を行なっている間に、スティックを２回以上操作した場合。
  c. Ｄ難度の転回運動を実施した場合。
  d. スティックを投げ上げている間に、３つ以上の徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｄ難度としての組み合わせの技術価値の高い場合。`,
              en: `Elements characteristic of the stick usually count as B difficulties when combined with B difficulty free-hand elements, and as C difficulties when combined with C difficulty free-hand elements.
1. A difficulty
The following elements count as A difficulties when combined with free-hand or tumbling elements.
  a. An A difficulty tumbling movement performed while holding the stick.
  b. One handling of the stick during an A difficulty tumbling movement.
  c. Catching the stick after a throw without performing anything during the throw.
  d. Other combinations with the technical value of an A difficulty.

2. B difficulty
The following stick elements count as B difficulties when combined with B difficulty free-hand elements.
  a. When controlling the stick is difficult
    i. Throwing and catching the stick. (e.g. throwing the stick at least 2 m and catching it, combined with a free-hand difficulty element.)
  b. When coordinating movements is difficult
    i. Combining free-hand elements with the stick. (e.g. a propeller rotation combined with a B difficulty free-hand element.)
  c. When catching the stick is difficult
    i. Rotating while the stick is in the air before catching it. (e.g. throwing the stick in various ways and catching it after various rotations during the throw, such as a forward roll.)
    ii. Throwing and catching the stick outside the field of vision. (e.g. throwing the stick in various ways and catching it outside the field of vision.)

3. C difficulty
The following elements count as C difficulties when combined with tumbling elements.
  a. A B difficulty tumbling movement performed while the stick is in the air.
  b. Two or more handlings of the apparatus during a B difficulty tumbling movement.
  c. A C difficulty tumbling movement.
  d. Two free-hand or tumbling elements combined while the stick is in the air.
  e. Other combinations with the high technical value of a C difficulty.

4. D difficulty
The following elements count as D difficulties when combined with tumbling elements.
  a. A C difficulty tumbling movement performed while the stick is in the air.
  b. Two or more handlings of the stick during a C difficulty tumbling movement.
  c. A D difficulty tumbling movement.
  d. Three or more free-hand or tumbling elements combined while the stick is in the air.
  e. Other combinations with the high technical value of a D difficulty.`,
              zh: `短棒特有的各要素，通常在与徒手Ｂ难度要素相结合时计为Ｂ难度，与徒手Ｃ难度要素相结合完成时计为Ｃ难度。
1. Ａ难度
以下要素与徒手类或翻腾类要素相结合完成时，计为Ａ难度。
  a. 握持短棒完成Ａ难度翻腾动作。
  b. 在完成Ａ难度翻腾动作期间操作短棒１次。
  c. 在短棒抛起的过程中不做任何动作而接住短棒。
  d. 其他具有Ａ难度组合技术价值的情况。

2. Ｂ难度
以下短棒要素与徒手B难度要素相结合时，计为Ｂ难度。
  a. 短棒难以控制的情况
    i. 抛出并接住短棒。（例：与徒手难度要素相结合，将短棒抛出２m 以上并接住。）
  b. 难以协调动作的情况
    i. 将徒手要素与短棒结合起来完成。（例：与徒手Ｂ难度要素相结合，做螺旋绕环。）
  c. 短棒难以接住的情况
    i. 在短棒抛起的过程中转体后再接住短棒。（例：做１次前滚翻后接住短棒等，用各种抛法抛出短棒，并在抛起期间加入各种转体等再接住。）
    ii. 在视野外进行短棒的抛接。（例：用各种抛法抛出短棒，在视野之外接住。）

3. Ｃ难度
以下要素与翻腾类要素相结合时，计为Ｃ难度。
  a. 在短棒抛起的过程中完成Ｂ难度翻腾动作。
  b. 在Ｂ难度翻腾动作期间操作器械２次以上。
  c. 完成Ｃ难度翻腾动作。
  d. 在短棒抛起的过程中结合完成２个徒手类或翻腾类动作。
  e. 其他具有Ｃ难度组合高技术价值的情况。

4. Ｄ难度
以下要素与翻腾类要素相结合时，计为Ｄ难度。
  a. 在短棒抛起的过程中完成Ｃ难度翻腾动作。
  b. 在完成Ｃ难度翻腾动作期间操作短棒２次以上。
  c. 完成Ｄ难度翻腾动作。
  d. 在短棒抛起的过程中结合完成３个以上徒手类或翻腾类动作。
  e. 其他具有Ｄ难度组合高技术价值的情况。`,
              ko: `스틱에 특징적인 제반 요소는 통상 그것이 신체 B 난도의 요소와 조합된 경우에는 B 난도, 신체 C 난도의 요소와 조합되어 실시된 경우에는 C 난도로 센다.
1. A 난도
다음 요소는 신체 계열이나 공중돌기 계열의 요소와 조합하여 실시한 경우 A 난도로 센다.
  a. 스틱을 잡은 채로 A 난도의 공중돌기 운동을 실시한 경우.
  b. A 난도의 공중돌기 운동을 실시하고 있는 동안에 스틱을 1회 조작한 경우.
  c. 스틱을 던져 올리고 있는 동안에 아무것도 실시하지 않고 스틱을 받은 경우.
  d. 그 밖에 A 난도로서의 조합의 기술 가치가 있는 경우.

2. B 난도
다음 스틱의 요소는 신체 B 난도의 요소와 조합한 경우 B 난도로 센다.
  a. 스틱의 컨트롤이 어려운 경우
    i. 스틱을 던져서 받는다.(예: 신체 난도의 요소와 조합하여 스틱을 2m 이상 던져서 받는다.)
  b. 움직임을 조화시키기 어려운 경우
    i. 신체 요소와 스틱을 조합하여 실시한다.(예: 신체 B 난도의 요소와 조합하여 프로펠러 회전을 실시한다.)
  c. 스틱을 받기가 어려운 경우
    i. 스틱을 던져 올리고 있는 동안에 회전한 후 스틱을 받는다.(예: 앞구르기를 1회 한 후 스틱을 받는 등, 다양한 던지기 방법으로 스틱을 던지고 그 던지고 있는 동안에 다양한 회전 등을 넣어 받는다.)
    ii. 시야 밖에서 스틱의 던지기와 받기를 실시한다.(예: 다양한 던지기 방법으로 스틱을 던져 시야 밖에서 받는다.)

3. C 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 C 난도로 센다.
  a. 스틱을 던져 올리고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  b. B 난도의 공중돌기 운동 동안에 수구를 2회 이상 조작한 경우.
  c. C 난도의 공중돌기 운동을 실시한 경우.
  d. 스틱을 던져 올리고 있는 동안에 2개의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 C 난도로서의 조합의 기술 가치가 높은 경우.

4. D 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 D 난도로 센다.
  a. 스틱을 던져 올리고 있는 동안에 C 난도의 공중돌기 운동을 실시한 경우.
  b. C 난도의 공중돌기 운동을 실시하고 있는 동안에 스틱을 2회 이상 조작한 경우.
  c. D 난도의 공중돌기 운동을 실시한 경우.
  d. 스틱을 던져 올리고 있는 동안에 3개 이상의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 D 난도로서의 조합의 기술 가치가 높은 경우.`,
              es: `Los elementos característicos del palo se cuentan normalmente como dificultad B cuando se combinan con un elemento de manos libres de dificultad B, y como dificultad C cuando se ejecutan combinados con un elemento de manos libres de dificultad C.
1. Dificultad A
Los siguientes elementos se cuentan como dificultad A cuando se ejecutan combinados con elementos de manos libres o de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad A manteniendo el palo sujeto.
  b. Manejar el palo una vez mientras se ejecuta un movimiento de tumbling de dificultad A.
  c. Recoger el palo sin ejecutar nada mientras el palo está en el aire.
  d. Otros casos con el valor técnico de una combinación de dificultad A.

2. Dificultad B
Los siguientes elementos de palo se cuentan como dificultad B cuando se combinan con un elemento de manos libres de dificultad B.
  a. Cuando el control del palo es difícil
    i. Lanzar el palo y recogerlo. (Ejemplo: combinado con un elemento de dificultad de manos libres, lanzar el palo a 2m o más y recogerlo.)
  b. Cuando es difícil armonizar los movimientos
    i. Combinar elementos de manos libres con el palo. (Ejemplo: combinado con un elemento de manos libres de dificultad B, ejecutar un molinete.)
  c. Cuando la recogida del palo es difícil
    i. Girar mientras el palo está en el aire y recogerlo después. (Ejemplo: lanzar el palo de distintas maneras e introducir distintos giros mientras está en el aire antes de recogerlo, como recogerlo después de una voltereta adelante.)
    ii. Lanzar y recoger el palo fuera del campo visual. (Ejemplo: lanzar el palo de distintas maneras y recogerlo fuera del campo visual.)

3. Dificultad C
Los siguientes elementos se cuentan como dificultad C cuando se combinan con elementos de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad B mientras el palo está en el aire.
  b. Manejar el aparato dos veces o más durante un movimiento de tumbling de dificultad B.
  c. Ejecutar un movimiento de tumbling de dificultad C.
  d. Combinar dos elementos de manos libres o de tumbling mientras el palo está en el aire.
  e. Otros casos con un alto valor técnico propio de una combinación de dificultad C.

4. Dificultad D
Los siguientes elementos se cuentan como dificultad D cuando se combinan con elementos de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad C mientras el palo está en el aire.
  b. Manejar el palo dos veces o más mientras se ejecuta un movimiento de tumbling de dificultad C.
  c. Ejecutar un movimiento de tumbling de dificultad D.
  d. Combinar tres o más elementos de manos libres o de tumbling mientras el palo está en el aire.
  e. Otros casos con un alto valor técnico propio de una combinación de dificultad D.`,
              fr: `Les éléments caractéristiques du bâton comptent habituellement comme difficultés B lorsqu'ils sont combinés à des éléments corporels de difficulté B, et comme difficultés C lorsqu'ils sont combinés à des éléments corporels de difficulté C.
1. Difficulté A
Les éléments suivants comptent comme difficultés A lorsqu'ils sont combinés à des éléments corporels ou de tumbling.
  a. Un mouvement de tumbling de difficulté A exécuté en tenant le bâton.
  b. Un maniement du bâton pendant un mouvement de tumbling de difficulté A.
  c. Rattraper le bâton après un lancer sans rien exécuter pendant le lancer.
  d. Toute autre combinaison ayant la valeur technique d'une difficulté A.

2. Difficulté B
Les éléments au bâton suivants comptent comme difficultés B lorsqu'ils sont combinés à des éléments corporels de difficulté B.
  a. Lorsque le contrôle du bâton est difficile
    i. Lancer et rattraper le bâton. (ex. : lancer le bâton à au moins 2 m et le rattraper, en combinaison avec un élément corporel de difficulté B.)
  b. Lorsque la coordination des mouvements est difficile
    i. Combiner des éléments corporels et le bâton. (ex. : exécuter une rotation en hélice en combinaison avec un élément corporel de difficulté B.)
  c. Lorsque le rattrapé du bâton est difficile
    i. Effectuer une rotation pendant que le bâton est en l'air avant de le rattraper. (ex. : lancer le bâton de différentes façons et le rattraper après diverses rotations, comme une roulade avant.)
    ii. Lancer et rattraper le bâton hors du champ de vision. (ex. : lancer le bâton de différentes façons et le rattraper hors du champ de vision.)

3. Difficulté C
Les éléments suivants comptent comme difficultés C lorsqu'ils sont combinés à des éléments de tumbling.
  a. Un mouvement de tumbling de difficulté B exécuté pendant que le bâton est en l'air.
  b. Au moins deux maniements de l'engin pendant un mouvement de tumbling de difficulté B.
  c. Un mouvement de tumbling de difficulté C.
  d. Deux éléments corporels ou de tumbling combinés pendant que le bâton est en l'air.
  e. Toute autre combinaison ayant la valeur technique élevée d'une difficulté C.

4. Difficulté D
Les éléments suivants comptent comme difficultés D lorsqu'ils sont combinés à des éléments de tumbling.
  a. Un mouvement de tumbling de difficulté C exécuté pendant que le bâton est en l'air.
  b. Au moins deux maniements du bâton pendant un mouvement de tumbling de difficulté C.
  c. Un mouvement de tumbling de difficulté D.
  d. Au moins trois éléments corporels ou de tumbling combinés pendant que le bâton est en l'air.
  e. Toute autre combinaison ayant la valeur technique élevée d'une difficulté D.`,
              ru: `Элементы, характерные для палочек, обычно засчитываются как трудность B при сочетании с элементом без предмета трудности B и как трудность C при сочетании с элементом без предмета трудности C.
1. Трудность A
Следующие элементы засчитываются как трудность A при сочетании с элементами без предмета или акробатическими элементами.
  a. Акробатическое движение трудности A, выполненное с палочкой в руках.
  b. Один приём работы с палочкой во время акробатического движения трудности A.
  c. Ловля палочки после броска, если во время полёта ничего не выполнено.
  d. Иные сочетания, имеющие техническую ценность трудности A.

2. Трудность B
Следующие элементы с палочкой засчитываются как трудность B при сочетании с элементом без предмета трудности B.
  a. Когда трудно управлять палочкой
    i. Бросок и ловля палочки. (Например: в сочетании с элементом трудности без предмета бросить палочку не менее чем на 2 м и поймать.)
  b. Когда трудно согласовать движения
    i. Сочетание элемента без предмета с работой палочкой. (Например: вращение «пропеллер» в сочетании с элементом без предмета трудности B.)
  c. Когда трудно поймать палочку
    i. Поворот или вращение во время полёта палочки с последующей ловлей. (Например: поймать палочку после одного кувырка вперёд — разные способы броска и разные вращения во время полёта с последующей ловлей.)
    ii. Бросок и ловля палочки вне поля зрения. (Например: бросить палочку разными способами и поймать вне поля зрения.)

3. Трудность C
Следующие элементы засчитываются как трудность C при сочетании с акробатическими элементами.
  a. Акробатическое движение трудности B, выполненное во время полёта палочки.
  b. Два и более приёма работы с предметом во время акробатического движения трудности B.
  c. Акробатическое движение трудности C.
  d. Сочетание двух элементов без предмета или акробатических элементов во время полёта палочки.
  e. Иные сочетания с высокой технической ценностью трудности C.

4. Трудность D
Следующие элементы засчитываются как трудность D при сочетании с акробатическими элементами.
  a. Акробатическое движение трудности C, выполненное во время полёта палочки.
  b. Два и более приёма работы с палочкой во время акробатического движения трудности C.
  c. Акробатическое движение трудности D.
  d. Сочетание трёх и более элементов без предмета или акробатических элементов во время полёта палочки.
  e. Иные сочетания с высокой технической ценностью трудности D.`,
              hi: `स्टिक के विशिष्ट तत्व सामान्यतः तब B कठिनाई गिने जाते हैं जब वे बिना उपकरण की B कठिनाई के तत्वों के साथ संयुक्त हों, और तब C कठिनाई गिने जाते हैं जब वे बिना उपकरण की C कठिनाई के तत्वों के साथ संयुक्त करके किए जाएँ।
1. A कठिनाई
निम्नलिखित तत्व, बिना उपकरण के या टम्बलिंग के तत्वों के साथ संयुक्त करके किए जाने पर, A कठिनाई गिने जाते हैं।
  a. स्टिक को पकड़े हुए A कठिनाई की टम्बलिंग गति करने पर।
  b. A कठिनाई की टम्बलिंग गति करते समय स्टिक का 1 बार संचालन करने पर।
  c. स्टिक हवा में रहने के दौरान कुछ भी किए बिना स्टिक को लपकने पर।
  d. अन्य, A कठिनाई के समान संयोजन का तकनीकी मूल्य होने पर।

2. B कठिनाई
निम्नलिखित स्टिक के तत्व, बिना उपकरण की B कठिनाई के तत्वों के साथ संयुक्त होने पर B कठिनाई गिने जाते हैं।
  a. जब स्टिक पर नियंत्रण कठिन हो
    i. स्टिक को फेंककर लपकना। (उदाहरण: बिना उपकरण के कठिनाई तत्व के साथ संयुक्त करते हुए, स्टिक को 2m या अधिक फेंककर लपकना।)
  b. जब गतियों में तालमेल बिठाना कठिन हो
    i. बिना उपकरण के तत्वों और स्टिक को संयुक्त करके करना। (उदाहरण: बिना उपकरण की B कठिनाई के तत्व के साथ संयुक्त करते हुए, प्रोपेलर घुमाव करना।)
  c. जब स्टिक को लपकना कठिन हो
    i. स्टिक हवा में रहने के दौरान घूमकर स्टिक को लपकना। (उदाहरण: 1 बार आगे की कलाबाज़ी करने के बाद स्टिक को लपकना आदि, विभिन्न तरीकों से स्टिक फेंककर, उस दौरान विभिन्न घुमाव आदि डालकर लपकना।)
    ii. दृष्टि क्षेत्र के बाहर स्टिक फेंकना और लपकना। (उदाहरण: विभिन्न तरीकों से स्टिक फेंककर, दृष्टि क्षेत्र के बाहर लपकना।)

3. C कठिनाई
निम्नलिखित तत्व, टम्बलिंग के तत्वों के साथ संयुक्त होने पर C कठिनाई गिने जाते हैं।
  a. स्टिक हवा में रहने के दौरान B कठिनाई की टम्बलिंग गति करने पर।
  b. B कठिनाई की टम्बलिंग गति के दौरान उपकरण का 2 या अधिक बार संचालन करने पर।
  c. C कठिनाई की टम्बलिंग गति करने पर।
  d. स्टिक हवा में रहने के दौरान बिना उपकरण के या टम्बलिंग के 2 तत्वों को संयुक्त करके करने पर।
  e. अन्य, C कठिनाई के समान संयोजन का तकनीकी मूल्य अधिक होने पर।

4. D कठिनाई
निम्नलिखित तत्व, टम्बलिंग के तत्वों के साथ संयुक्त होने पर D कठिनाई गिने जाते हैं।
  a. स्टिक हवा में रहने के दौरान C कठिनाई की टम्बलिंग गति करने पर।
  b. C कठिनाई की टम्बलिंग गति करते समय स्टिक का 2 या अधिक बार संचालन करने पर।
  c. D कठिनाई की टम्बलिंग गति करने पर।
  d. स्टिक हवा में रहने के दौरान 3 या अधिक बिना उपकरण के या टम्बलिंग के तत्वों को संयुक्त करके करने पर।
  e. अन्य, D कठिनाई के समान संयोजन का तकनीकी मूल्य अधिक होने पर।`,
            },
          },
        ],
      },
      {
        title: {
          ja: 'リング（輪）の演技',
          en: 'Ring Routines',
          zh: '环的成套动作',
          ko: '링(고리)의 연기',
          es: 'Ejercicios de aro',
          fr: "Exercices à l'anneau",
          ru: 'Упражнение с кольцами',
          hi: 'रिंग (छल्ला) का प्रदर्शन',
        },
        block: [
          {
            title: {
              ja: 'リング（輪）の規格',
              en: 'Ring Specifications',
              zh: '环的规格',
              ko: '링(고리)의 규격',
              es: 'Especificaciones del aro',
              fr: "Caractéristiques de l'anneau",
              ru: 'Требования к кольцам',
              hi: 'रिंग (छल्ला) के विनिर्देश',
            },
            element: {
              ja: `1. 素材
木製または合成素材。

2. 重量
１つにつき最低200グラム。

3. 形状
大きさは内径40cm〜45cmとし太さ（径）は2.5cm〜3.5cmとする。または、全体あるいは一部にテープを巻いてもよい。

4. 色彩
自由。各輪の色を変えてもよい。`,
              en: `1. Material
Wood or synthetic material.

2. Weight
At least 200 g each.

3. Shape
Inner diameter 40 cm to 45 cm, thickness (diameter) 2.5 cm to 3.5 cm. The rings may be wholly or partly wrapped with tape.

4. Color
Free. The two rings may be different colors.`,
              zh: `1. 材质
木制或合成材料。

2. 重量
每个最低200克。

3. 形状
大小为内径40cm—45cm，粗细（直径）为2.5cm—3.5cm。此外，也可以在整体或局部缠绕胶带。

4. 颜色
自由。各环的颜色可以不同。`,
              ko: `1. 소재
목제 또는 합성 소재.

2. 중량
하나당 최저 200그램.

3. 형상
크기는 안지름 40cm~45cm로 하고 굵기(지름)는 2.5cm~3.5cm로 한다. 또는 전체나 일부에 테이프를 감아도 된다.

4. 색채
자유. 각 링의 색을 달리해도 된다.`,
              es: `1. Material
Madera o material sintético.

2. Peso
Mínimo 200 gramos cada uno.

3. Forma
El tamaño será de 40cm–45cm de diámetro interior y el grosor (diámetro) de 2.5cm–3.5cm. También se puede envolver con cinta todo el aro o una parte de él.

4. Color
Libre. Cada aro puede ser de un color distinto.`,
              fr: `1. Matériau
Bois ou matériau synthétique.

2. Poids
Au moins 200 g par anneau.

3. Forme
Diamètre intérieur de 40 cm à 45 cm, épaisseur (diamètre) de 2,5 cm à 3,5 cm. Les anneaux peuvent être entourés de ruban adhésif, en totalité ou en partie.

4. Couleur
Libre. Les deux anneaux peuvent être de couleurs différentes.`,
              ru: `1. Материал
Дерево или синтетический материал.

2. Вес
Не менее 200 граммов каждое.

3. Форма
Внутренний диаметр от 40 до 45 см, толщина (диаметр) от 2,5 до 3,5 см. Кольца можно целиком или частично обмотать лентой.

4. Цвет
Свободный. Кольца могут быть разного цвета.`,
              hi: `1. सामग्री
लकड़ी या सिंथेटिक सामग्री।

2. वज़न
प्रत्येक का कम से कम 200 ग्राम।

3. आकार
आकार में आंतरिक व्यास 40cm–45cm हो और मोटाई (व्यास) 2.5cm–3.5cm हो। या, पूरे या कुछ हिस्से पर टेप लपेटा जा सकता है।

4. रंग
स्वतंत्र। प्रत्येक रिंग का रंग अलग हो सकता है।`,
            },
          },
          {
            title: {
              ja: 'リング（輪）の技術',
              en: 'Ring Technique',
              zh: '环的技术',
              ko: '링(고리)의 기술',
              es: 'Técnica del aro',
              fr: "Technique de l'anneau",
              ru: 'Техника работы с кольцами',
              hi: 'रिंग (छल्ला) की तकनीक',
            },
            element: {
              ja: `【諸要素群】
1. 基礎要素群
  a. まわし（手・身体）
  b. ころがし
  c. 投げ
  d. リングを用いた回転系

2. その他の要素群
  a. 振り
  b. 回旋
  c. 左右別々の動き

以上の諸要素は、以下のことを考慮に入れて実施することができる。
  a. ２つのリングを同時に操作する。
  b. 連続して操作する。
  c. さまざまな方向で行う。
  d. 移動をする場合、しない場合。
  e. 片足または両足支持、片手または両手使用。

3. リング（輪）の操作
リングの動きは、面を変更するような場合でも止めてはならず、リング自体の重さから来る惰力を利用して動かされ続けなければならない。リングの回しおよび振りを実施する場合は、リングは腕の延長のように扱われなければならない。リングの操作には身体の動きが伴わなければならない。

4. リング（輪）の持ち方
リングに特徴的な諸要素の実施のためには、リングに自在に動くように軽く持たななければならない。また、一時的に握りしめることも可能である。`,
              en: `[Element groups]
1. Basic element groups
  a. Spins (on the hand or body)
  b. Rolls
  c. Throws
  d. Tumbling with the rings

2. Other element groups
  a. Swings
  b. Circles
  c. Asymmetric movements

These elements can be performed taking the following into account.
  a. Handling both rings at the same time.
  b. Handling them one after the other.
  c. In various directions.
  d. With or without traveling.
  e. On one foot or both feet, with one hand or both hands.

3. Handling the rings
The rings must not stop moving, even when changing planes, and must keep moving using the momentum that comes from their own weight. For spins and swings, the rings must be handled like an extension of the arm. Ring handling must be accompanied by body movement.

4. Holding the rings
To perform the elements characteristic of the rings, the rings must be held lightly so that they move freely. They may also be gripped firmly for a moment.`,
              zh: `【各要素组】
1. 基础要素组
  a. 转动（手、身体）
  b. 滚动
  c. 抛掷
  d. 使用环的翻腾类

2. 其他要素组
  a. 摆动
  b. 绕环
  c. 左右不同的动作

以上各要素，可以在考虑以下各点的基础上进行。
  a. 同时操作２个环。
  b. 连续操作。
  c. 在各种方向进行。
  d. 移动或不移动。
  e. 单脚或双脚支撑，用单手或双手。

3. 环的操作
环的运动即使在变换平面时也不得停止，必须利用环自身重量产生的惯性持续运动。做环的转动和摆动时，环必须被当作手臂的延长来处理。环的操作必须伴随身体的运动。

4. 环的握法
为完成环特有的各要素，必须轻握环，使其能自由运动。此外，也可以暂时握紧。`,
              ko: `【제반 요소군】
1. 기초 요소군
  a. 돌리기(손·신체)
  b. 굴리기
  c. 던지기
  d. 링을 사용한 회전 계열

2. 그 밖의 요소군
  a. 흔들기
  b. 회전
  c. 좌우 따로따로의 움직임

이상의 제반 요소는 다음 사항을 고려하여 실시할 수 있다.
  a. 2개의 링을 동시에 조작한다.
  b. 연속해서 조작한다.
  c. 다양한 방향으로 실시한다.
  d. 이동하는 경우와 하지 않는 경우.
  e. 한 발 또는 두 발 지지, 한 손 또는 두 손 사용.

3. 링(고리)의 조작
링의 움직임은 면을 변경하는 경우에도 멈추어서는 안 되며, 링 자체의 무게에서 오는 관성을 이용하여 계속 움직여야 한다. 링의 돌리기 및 흔들기를 실시하는 경우에는 링을 팔의 연장처럼 다루어야 한다. 링의 조작에는 신체의 움직임이 동반되어야 한다.

4. 링(고리)을 잡는 법
링에 특징적인 제반 요소를 실시하기 위해서는 링이 자유롭게 움직이도록 가볍게 잡아야 한다. 또한 일시적으로 꽉 쥐는 것도 가능하다.`,
              es: `[Grupos de elementos]
1. Grupos de elementos básicos
  a. Giros (en la mano o en el cuerpo)
  b. Rodamientos
  c. Lanzamientos
  d. Elementos de tumbling con los aros

2. Otros grupos de elementos
  a. Balanceos
  b. Círculos
  c. Movimientos asimétricos

Los elementos anteriores se pueden ejecutar teniendo en cuenta lo siguiente.
  a. Manejar los dos aros a la vez.
  b. Manejarlos de forma sucesiva.
  c. En diferentes direcciones.
  d. Con desplazamiento o sin él.
  e. Con apoyo sobre un pie o sobre los dos, con una mano o con las dos.

3. Manejo de los aros
Los aros no deben detener su movimiento, ni siquiera al cambiar de plano, y deben seguir moviéndose aprovechando la inercia que les da su propio peso. Al ejecutar giros y balanceos, los aros se deben manejar como una prolongación del brazo. El manejo de los aros debe ir acompañado del movimiento del cuerpo.

4. Forma de sujetar los aros
Para ejecutar los elementos característicos del aro, este se debe sujetar sin apretar, de modo que se mueva con libertad. También es posible apretarlo momentáneamente.`,
              fr: `[Groupes d'éléments]
1. Groupes d'éléments de base
  a. Rotations (sur la main ou sur le corps)
  b. Roulés
  c. Lancers
  d. Tumbling avec les anneaux

2. Autres groupes d'éléments
  a. Balancers
  b. Cercles
  c. Mouvements dissociés des deux côtés

Ces éléments peuvent être exécutés en tenant compte des points suivants.
  a. Manier les deux anneaux simultanément.
  b. Les manier l'un après l'autre.
  c. Dans différentes directions.
  d. Avec ou sans déplacement.
  e. En appui sur un pied ou sur les deux, avec une main ou les deux mains.

3. Maniement des anneaux
Les anneaux ne doivent jamais cesser de bouger, même lors d'un changement de plan, et doivent continuer de se déplacer grâce à l'élan que leur donne leur propre poids. Lors des rotations et des balancers, l'anneau doit être manié comme un prolongement du bras. Le maniement des anneaux doit s'accompagner de mouvements du corps.

4. Prise des anneaux
Pour exécuter les éléments caractéristiques de l'anneau, celui-ci doit être tenu légèrement afin de se mouvoir librement. Il peut aussi être serré fermement un court instant.`,
              ru: `[Группы элементов]
1. Базовые группы элементов
  a. вращения (на руке, на теле)
  b. прокаты
  c. броски
  d. акробатика с кольцами

2. Прочие группы элементов
  a. махи
  b. круги
  c. асимметричные движения

Перечисленные элементы можно выполнять с учётом следующего.
  a. работать двумя кольцами одновременно;
  b. работать ими друг за другом;
  c. в разных направлениях;
  d. с перемещением и без него;
  e. с опорой на одну или на две ноги, одной или двумя руками.

3. Работа с кольцами
Движение колец нельзя останавливать даже при смене плоскости: оно должно продолжаться за счёт инерции собственного веса колец. При вращениях и махах кольцо следует вести как продолжение руки. Работа с кольцами должна сопровождаться движением тела.

4. Хват колец
Для исполнения характерных для колец элементов кольцо нужно держать легко, чтобы оно свободно двигалось. Ненадолго кольцо можно и крепко сжать.`,
              hi: `[तत्व वर्ग]
1. बुनियादी तत्व वर्ग
  a. घुमाव (हाथ, शरीर)
  b. लुढ़काव
  c. फेंक
  d. रिंग के साथ टम्बलिंग

2. अन्य तत्व वर्ग
  a. झुलाव
  b. चक्र
  c. बाएँ और दाएँ की अलग-अलग गतियाँ

उपर्युक्त तत्वों को निम्नलिखित बातों को ध्यान में रखते हुए किया जा सकता है।
  a. दोनों रिंगों का एक साथ संचालन करना।
  b. लगातार क्रम में संचालन करना।
  c. विभिन्न दिशाओं में करना।
  d. स्थान परिवर्तन के साथ या बिना।
  e. एक पैर या दोनों पैरों पर सहारा, एक हाथ या दोनों हाथों का उपयोग।

3. रिंग (छल्ला) का संचालन
रिंग की गति को तल बदलते समय भी रोका नहीं जाना चाहिए, और उसे रिंग के अपने वज़न से मिलने वाली जड़ता का उपयोग करते हुए चलते रहना चाहिए। रिंग का घुमाव और झुलाव करते समय रिंग को बाजू के विस्तार की तरह संभालना चाहिए। रिंग के संचालन के साथ शरीर की गति भी होनी चाहिए।

4. रिंग (छल्ला) की पकड़
रिंग के विशिष्ट तत्वों को करने के लिए, रिंग को हल्के से पकड़ना चाहिए ताकि वह स्वतंत्र रूप से घूम सके। साथ ही, कुछ समय के लिए उसे कसकर पकड़ना भी संभव है।`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              zh: '编排的要求',
              ko: '구성에 요구되는 것',
              es: 'Requisitos de la composición',
              fr: 'Exigences de la composition',
              ru: 'Требования к композиции',
              hi: 'संरचना के लिए आवश्यकताएँ',
            },
            element: {
              ja: `
1. まわし（手・身体）
２回転以上のまわしを２回入れなければならない。

2. ころがし
ころがしは１回以上、長さは１m以上入れなければならない。

3. 投げ
  a. 投げの条件
    ⅰ. ３回以上の投げを入れなければならない。
    ⅱ. ２つ同時投げを１回以上入れなければならない。ただし、リングを結合（組み合わせた）させた投げは２つ同時投げとはみなさない。
    ⅲ. ２つ同時投げは片手または両手または足で投げること。受け取りは自由。

  b. 投げの高さ
    ⅰ. 投げの高さは、競技者が投げたところから最低２m以上の高さとする。

4. 転回系の要素
  a. 前方・後方・側方系を入れなければならない。
  b. 転回系を実施しているときに、リングが生かされなければならない。

5. 諸要素
  a. さまざまな種類のまわし。
  b. さまざまな種類の投げ。
  c. 面の変化を伴った振り、回旋など。
  d. 左右別々の動き。
  e. 多様な持ち方。
  f. さまざまな種類のころがし。

  ※　リングを一つのみ投げる場合には、他のリングも必ず動いていなければならない。演技全体を通じて２つのリングが常に体と調和を保って動いているということが、リングに演技には不可欠である。`,
              en: `1. Spins (on the hand or body)
Two spins of at least two rotations must be included.

2. Rolls
At least one roll of at least 1 m must be included.

3. Throws
  a. Requirements for throws
    i. At least three throws must be included.
    ii. At least one simultaneous throw of both rings must be included. A throw with the rings joined (linked together) is not regarded as a simultaneous throw.
    iii. A simultaneous throw must be made with one hand, both hands or the feet. The catch is free.

  b. Height of throws
    i. A throw must rise at least 2 m from the point of release.

4. Tumbling elements
  a. Forward, backward and sideways tumbling must be included.
  b. The rings must be used actively during tumbling.

5. Elements
  a. Various kinds of spins.
  b. Various kinds of throws.
  c. Swings, circles and similar movements with changes of plane.
  d. Asymmetric movements.
  e. A variety of grips.
  f. Various kinds of rolls.

  * When only one ring is thrown, the other ring must also be moving. Throughout the routine, it is essential that both rings always move in harmony with the body.`,
              zh: `
1. 转动（手、身体）
必须编入２次旋转２周以上的转动。

2. 滚动
必须编入１次以上、长度１m 以上的滚动。

3. 抛掷
  a. 抛掷的条件
    ⅰ. 必须编入３次以上的抛掷。
    ⅱ. 必须编入１次以上的２个同时抛。但是，将两个环结合（组合）在一起的抛不视为２个同时抛。
    ⅲ. ２个同时抛必须用单手、双手或脚抛出。接的方式自由。

  b. 抛掷的高度
    ⅰ. 抛掷的高度，从参赛者抛出的位置算起至少要达到２m 以上。

4. 翻腾类要素
  a. 必须编入前方、后方、侧方类动作。
  b. 做翻腾时，必须有效地运用环。

5. 各要素
  a. 各种各样的转动。
  b. 各种各样的抛掷。
  c. 伴有平面变化的摆动、绕环等。
  d. 左右不同的动作。
  e. 多种多样的握法。
  f. 各种各样的滚动。

  ※　只抛出一个环时，另一个环也必须在运动。贯穿整套动作，２个环始终与身体保持协调地运动，这对环的成套动作来说是不可或缺的。`,
              ko: `
1. 돌리기(손·신체)
2회전 이상의 돌리기를 2회 넣어야 한다.

2. 굴리기
굴리기는 1회 이상, 길이는 1m 이상 넣어야 한다.

3. 던지기
  a. 던지기의 조건
    ⅰ. 3회 이상의 던지기를 넣어야 한다.
    ⅱ. 2개 동시 던지기를 1회 이상 넣어야 한다. 다만 링을 결합(조합)시킨 던지기는 2개 동시 던지기로 보지 않는다.
    ⅲ. 2개 동시 던지기는 한 손 또는 두 손 또는 발로 던질 것. 받기는 자유.

  b. 던지기의 높이
    ⅰ. 던지기의 높이는 경기자가 던진 지점에서 최저 2m 이상의 높이로 한다.

4. 공중돌기 계열의 요소
  a. 전방·후방·측방 계열을 넣어야 한다.
  b. 공중돌기를 실시하고 있을 때 링이 살려져야 한다.

5. 제반 요소
  a. 다양한 종류의 돌리기.
  b. 다양한 종류의 던지기.
  c. 면의 변화를 동반한 흔들기, 회전 등.
  d. 좌우 따로따로의 움직임.
  e. 다양한 잡는 법.
  f. 다양한 종류의 굴리기.

  ※ 링을 하나만 던지는 경우에는 다른 링도 반드시 움직이고 있어야 한다. 연기 전체를 통하여 2개의 링이 항상 몸과 조화를 유지하며 움직이고 있다는 것이 링 연기에는 불가결하다.`,
              es: `
1. Giros (en la mano o en el cuerpo)
Se deben incluir dos giros de dos vueltas o más.

2. Rodamientos
Se debe incluir un rodamiento o más, de 1m o más de longitud.

3. Lanzamientos
  a. Condiciones de los lanzamientos
    ⅰ. Se deben incluir tres lanzamientos o más.
    ⅱ. Se debe incluir al menos un lanzamiento simultáneo de los dos aros. No obstante, el lanzamiento de los aros unidos (enlazados entre sí) no se considera un lanzamiento simultáneo de los dos.
    ⅲ. El lanzamiento simultáneo de los dos aros se hará con una mano, con las dos manos o con los pies. La recogida es libre.

  b. Altura de los lanzamientos
    ⅰ. La altura del lanzamiento será como mínimo de 2m por encima del punto desde el que lanza el gimnasta.

4. Elementos de tumbling
  a. Se deben incluir elementos hacia delante, hacia atrás y laterales.
  b. Los aros se deben aprovechar mientras se ejecutan los elementos de tumbling.

5. Elementos
  a. Giros de distintos tipos.
  b. Lanzamientos de distintos tipos.
  c. Balanceos, círculos y otros movimientos con cambios de plano.
  d. Movimientos asimétricos.
  e. Formas variadas de sujeción.
  f. Rodamientos de distintos tipos.

  * Cuando se lanza un solo aro, el otro aro también debe estar en movimiento. A lo largo de todo el ejercicio es imprescindible que los dos aros se muevan siempre en armonía con el cuerpo.`,
              fr: `1. Rotations (sur la main ou sur le corps)
Deux rotations d'au moins deux tours doivent figurer dans l'exercice.

2. Roulés
Au moins un roulé d'au moins 1 m doit figurer dans l'exercice.

3. Lancers
  a. Conditions des lancers
    i. Au moins trois lancers doivent figurer dans l'exercice.
    ii. Au moins un lancer simultané des deux anneaux doit y figurer. Un lancer avec les anneaux joints (emboîtés) n'est pas considéré comme un lancer simultané.
    iii. Le lancer simultané se fait d'une main, des deux mains ou des pieds. Le rattrapé est libre.

  b. Hauteur des lancers
    i. Le lancer doit s'élever d'au moins 2 m au-dessus du point de lâcher.

4. Éléments de tumbling
  a. Du tumbling avant, arrière et latéral doit figurer dans l'exercice.
  b. Les anneaux doivent être mis en valeur pendant le tumbling.

5. Éléments
  a. Rotations de types variés.
  b. Lancers de types variés.
  c. Balancers, cercles et mouvements analogues avec changements de plan.
  d. Mouvements dissociés des deux côtés.
  e. Prises variées.
  f. Roulés de types variés.

  * Lorsqu'un seul anneau est lancé, l'autre doit lui aussi être en mouvement. Il est essentiel, dans un exercice à l'anneau, que les deux anneaux restent en permanence en harmonie de mouvement avec le corps, du début à la fin.`,
              ru: `1. Вращения (на руке, на теле)
Необходимо включить два вращения не менее чем в два оборота.

2. Прокаты
Необходимо включить не менее одного проката длиной не менее 1 м.

3. Броски
  a. Требования к броскам
    i. Необходимо включить не менее трёх бросков.
    ii. Необходимо включить не менее одного одновременного броска двух колец. При этом бросок соединённых (сцепленных) колец одновременным броском не считается.
    iii. Одновременный бросок выполняется одной рукой, двумя руками или ногами. Ловля свободная.

  b. Высота броска
    i. Кольцо должно подниматься не менее чем на 2 м от точки выпуска.

4. Акробатические элементы
  a. Необходимо включить акробатику вперёд, назад и в сторону.
  b. Во время акробатики кольца должны быть задействованы.

5. Элементы
  a. Разные виды вращений.
  b. Разные виды бросков.
  c. Махи, круги и подобные движения со сменой плоскости.
  d. Асимметричные движения.
  e. Разнообразные хваты.
  f. Разные виды прокатов.

  ※ Если бросается только одно кольцо, второе тоже обязательно должно двигаться. Для упражнения с кольцами необходимо, чтобы на всём его протяжении оба кольца двигались в согласии с телом.`,
              hi: `
1. घुमाव (हाथ, शरीर)
2 या अधिक चक्करों वाला घुमाव 2 बार डालना आवश्यक है।

2. लुढ़काव
लुढ़काव कम से कम 1 बार, और लंबाई 1m या अधिक का डालना आवश्यक है।

3. फेंक
  a. फेंक की शर्तें
    ⅰ. 3 या अधिक फेंक डालने आवश्यक हैं।
    ⅱ. दोनों को एक साथ फेंकना 1 या अधिक बार डालना आवश्यक है। परंतु, रिंगों को जोड़कर (संयुक्त करके) किया गया फेंक दोनों को एक साथ फेंकना नहीं माना जाता।
    ⅲ. दोनों को एक साथ फेंकना एक हाथ से या दोनों हाथों से या पैर से किया जाए। लपकना स्वतंत्र है।

  b. फेंक की ऊँचाई
    ⅰ. फेंक की ऊँचाई, जिम्नास्ट के फेंकने के स्थान से कम से कम 2m या अधिक होनी चाहिए।

4. टम्बलिंग तत्व
  a. आगे, पीछे और बगल की टम्बलिंग डालना आवश्यक है।
  b. टम्बलिंग करते समय रिंग का सक्रिय उपयोग होना चाहिए।

5. तत्व
  a. विभिन्न प्रकार के घुमाव।
  b. विभिन्न प्रकार के फेंक।
  c. तल के परिवर्तन के साथ झुलाव, चक्र आदि।
  d. बाएँ और दाएँ की अलग-अलग गतियाँ।
  e. विविध पकड़।
  f. विभिन्न प्रकार के लुढ़काव।

  ※ केवल एक रिंग फेंकने की स्थिति में दूसरी रिंग का भी गतिमान होना अनिवार्य है। पूरे प्रदर्शन के दौरान दोनों रिंगों का हमेशा शरीर के साथ तालमेल बनाए रखते हुए चलते रहना, रिंग के प्रदर्शन के लिए अनिवार्य है।`,
            },
          },
          {
            title: {
              ja: '難度レベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              zh: '判断难度级别的一般标准',
              ko: '난도 수준을 판단하기 위한 일반적 기준',
              es: 'Pautas generales para valorar el nivel de dificultad',
              fr: 'Repères généraux pour apprécier le niveau de difficulté',
              ru: 'Общие ориентиры для определения уровня трудности',
              hi: 'कठिनाई स्तर तय करने के लिए सामान्य दिशानिर्देश',
            },
            element: {
              ja: `リングに特徴的な諸要素は、通常それが徒手のＢ難度の要素と組み合わせた場合はＢ難度、徒手のＣ難度の要素と組み合わせて実施した場合はＣ難度として数える。
1. Ａ難度
以下の要素は、徒手系や、転回系の要素と組み合わせて実施した場合、Ａ難度として数える。
  a. リングを保持したまま、Ａ難度の転回運動を実施した場合。
  b. Ａ難度の転回運動を実施している間に、リングを１回操作した場合。
  c. リングを投げ上げている間に、何も実施せずリングを受けた場合。
  d. その他、Ａ難度としての組み合わせの技術価値の場合。

2. Ｂ難度
以下の要素は、徒手のＢ難度の要素と組み合わせた場合Ｂ難度として数える。
  a. リングと身体の動きとの間のリズミカルな関係が、とりわけ複雑な場合
    ⅰ. リングの動きと身体の動きとの間に、完全な同時性を必要とする要素。
  b. リングの動きに使用される表面の生で、リングの面を保つのが難しい場合
    ⅰ. 不規則な表面上での大きなころがし。例：Ｂ難度の徒手の要素と組み合わせて、横に伸ばした両腕全体に沿ってリングをころがす。
    ⅱ. リングのひねり回しの大きさと数を制御するのに必要な弾みを調節しなければならない場合。（例：Ｂ難度の徒手の要素と結びつけて、２回以上リングをひねり回しながら投げる。）
  c. リングのコントロールが難しい場合
    ⅰ. リングを投げて受け取る。（例：徒手のＢ難度の徒手の要素と組み合わせて、リングを２回転以上させながら投げて受ける。）
  d. 動きを調和させるのが難しい場合
    ⅰ. 徒手の要素と輪を組み合わせて行う。（例：徒手のＢ難度の要素と組み合わせて、２つ同時まわしを行う。）
  e. リングの受け取りが難しい場合
    ⅰ. リングを投げ上げている間に回転をしてから受け取る。（例：１回前転をしてからリングを受けるなど、さまざまな投げ方でリングを投げ、その投げている間にさまざまな回転などを入れて受け取る。）
    ⅱ. 視野外でリングの投げや受けを行う。（例：さまざまな投げ方でリングを投げ、視界の外で受け取る。）

3. Ｃ難度
以下の要素は、転回系の要素と組み合わせた場合Ｃ難度として数える。
  a. リングを投げている間に、Ｂ難度の転回運動を実施した場合。
  b. Ｂ難度の転回運動の間に、リングを２回操作した場合。
  c. Ｃ難度の転回運動を行った場合。
  d. リングを投げ上げている間に、Ｂ難度の転回運動を実施した場合。
  e. その他、Ｃ難度としての組み合わせの技術価値の高い場合。

4. Ｄ難度
以下の要素は、転回系の要素と組み合わせた場合Ｄ難度として数える。
  a. リングを投げ上げている間に、Ｃ難度の転回運動を実施した場合。
  b. Ｃ難度の転回運動を行っている間に、リングを２回以上操作した場合。
  c. Ｄ難度の転回運動を実施した場合。
  d. リングを投げ上げている間に、３つ以上の徒手系や転回運動を組み合わせて実施した場合。
  e. その他、Ｄ難度としての組み合わせの技術価値の高い場合。`,
              en: `Elements characteristic of the rings usually count as B difficulties when combined with B difficulty free-hand elements, and as C difficulties when combined with C difficulty free-hand elements.
1. A difficulty
The following elements count as A difficulties when combined with free-hand or tumbling elements.
  a. An A difficulty tumbling movement performed while holding the rings.
  b. One handling of the rings during an A difficulty tumbling movement.
  c. Catching the ring after a throw without performing anything during the throw.
  d. Other combinations with the technical value of an A difficulty.

2. B difficulty
The following elements count as B difficulties when combined with B difficulty free-hand elements.
  a. When the rhythmic relationship between the rings and the body movement is especially complex
    i. Elements that require complete synchronization between the movement of the rings and the movement of the body.
  b. When keeping the plane of the ring is difficult because of the surface it moves on
    i. A long roll over an uneven surface. e.g. rolling the ring along both arms stretched sideways, combined with a B difficulty free-hand element.
    ii. When the momentum must be adjusted to control the amplitude and number of twisting spins of the ring. (e.g. throwing the ring while twisting it two or more times, combined with a B difficulty free-hand element.)
  c. When controlling the ring is difficult
    i. Throwing and catching the ring. (e.g. throwing the ring with two or more rotations and catching it, combined with a B difficulty free-hand element.)
  d. When coordinating movements is difficult
    i. Combining free-hand elements with the rings. (e.g. spinning both rings at the same time, combined with a B difficulty free-hand element.)
  e. When catching the ring is difficult
    i. Rotating while the ring is in the air before catching it. (e.g. throwing the ring in various ways and catching it after various rotations during the throw, such as a forward roll.)
    ii. Throwing or catching the ring outside the field of vision. (e.g. throwing the ring in various ways and catching it outside the field of vision.)

3. C difficulty
The following elements count as C difficulties when combined with tumbling elements.
  a. A B difficulty tumbling movement performed while the ring is in the air.
  b. Two handlings of the rings during a B difficulty tumbling movement.
  c. A C difficulty tumbling movement.
  d. A B difficulty tumbling movement performed while the ring is in the air.
  e. Other combinations with the high technical value of a C difficulty.

4. D difficulty
The following elements count as D difficulties when combined with tumbling elements.
  a. A C difficulty tumbling movement performed while the ring is in the air.
  b. Two or more handlings of the rings during a C difficulty tumbling movement.
  c. A D difficulty tumbling movement.
  d. Three or more free-hand or tumbling elements combined while the ring is in the air.
  e. Other combinations with the high technical value of a D difficulty.`,
              zh: `环特有的各要素，通常在与徒手Ｂ难度要素相结合时计为Ｂ难度，与徒手Ｃ难度要素相结合完成时计为Ｃ难度。
1. Ａ难度
以下要素与徒手类或翻腾类要素相结合完成时，计为Ａ难度。
  a. 握持环完成Ａ难度翻腾动作。
  b. 在完成Ａ难度翻腾动作期间操作环１次。
  c. 在环抛起的过程中不做任何动作而接住环。
  d. 其他具有Ａ难度组合技术价值的情况。

2. Ｂ难度
以下要素与徒手Ｂ难度要素相结合时，计为Ｂ难度。
  a. 环与身体动作之间的节奏关系特别复杂的情况
    ⅰ. 要求环的运动与身体的运动之间完全同时进行的要素。
  b. 因环所经过的表面而难以保持环的平面的情况
    ⅰ. 在不规则表面上的大幅度滚动。例：与Ｂ难度徒手要素相结合，让环沿着向侧方伸直的双臂整体滚动。
    ⅱ. 必须调节弹力以控制环拧转的幅度和次数的情况。（例：与Ｂ难度徒手要素相结合，一边使环拧转２周以上一边抛出。）
  c. 环难以控制的情况
    ⅰ. 抛出并接住环。（例：与徒手Ｂ难度要素相结合，使环旋转２周以上抛出并接住。）
  d. 难以协调动作的情况
    ⅰ. 将徒手要素与环结合起来完成。（例：与徒手Ｂ难度要素相结合，做２个同时转动。）
  e. 环难以接住的情况
    ⅰ. 在环抛起的过程中转体后再接住。（例：做１次前滚翻后接住环等，用各种抛法抛出环，并在抛起期间加入各种转体等再接住。）
    ⅱ. 在视野外进行环的抛或接。（例：用各种抛法抛出环，在视野之外接住。）

3. Ｃ难度
以下要素与翻腾类要素相结合时，计为Ｃ难度。
  a. 在环抛出的过程中完成Ｂ难度翻腾动作。
  b. 在Ｂ难度翻腾动作期间操作环２次。
  c. 完成Ｃ难度翻腾动作。
  d. 在环抛起的过程中完成Ｂ难度翻腾动作。
  e. 其他具有Ｃ难度组合高技术价值的情况。

4. Ｄ难度
以下要素与翻腾类要素相结合时，计为Ｄ难度。
  a. 在环抛起的过程中完成Ｃ难度翻腾动作。
  b. 在完成Ｃ难度翻腾动作期间操作环２次以上。
  c. 完成Ｄ难度翻腾动作。
  d. 在环抛起的过程中结合完成３个以上徒手类动作或翻腾动作。
  e. 其他具有Ｄ难度组合高技术价值的情况。`,
              ko: `링에 특징적인 제반 요소는 통상 그것이 신체 B 난도의 요소와 조합한 경우에는 B 난도, 신체 C 난도의 요소와 조합하여 실시한 경우에는 C 난도로 센다.
1. A 난도
다음 요소는 신체 계열이나 공중돌기 계열의 요소와 조합하여 실시한 경우 A 난도로 센다.
  a. 링을 잡은 채로 A 난도의 공중돌기 운동을 실시한 경우.
  b. A 난도의 공중돌기 운동을 실시하고 있는 동안에 링을 1회 조작한 경우.
  c. 링을 던져 올리고 있는 동안에 아무것도 실시하지 않고 링을 받은 경우.
  d. 그 밖에 A 난도로서의 조합의 기술 가치가 있는 경우.

2. B 난도
다음 요소는 신체 B 난도의 요소와 조합한 경우 B 난도로 센다.
  a. 링과 신체의 움직임 사이의 리듬 관계가 특히 복잡한 경우
    ⅰ. 링의 움직임과 신체의 움직임 사이에 완전한 동시성을 필요로 하는 요소.
  b. 링의 움직임에 사용되는 표면의 성질로 인해 링의 면을 유지하기 어려운 경우
    ⅰ. 불규칙한 표면 위에서의 큰 굴리기. 예: B 난도의 신체 요소와 조합하여 옆으로 뻗은 두 팔 전체를 따라 링을 굴린다.
    ⅱ. 링의 비틀어 돌리기의 크기와 횟수를 제어하는 데 필요한 탄력을 조절해야 하는 경우.(예: B 난도의 신체 요소와 결합하여 2회 이상 링을 비틀어 돌리면서 던진다.)
  c. 링의 컨트롤이 어려운 경우
    ⅰ. 링을 던져서 받는다.(예: 신체 B 난도의 요소와 조합하여 링을 2회전 이상 시키면서 던져서 받는다.)
  d. 움직임을 조화시키기 어려운 경우
    ⅰ. 신체 요소와 링을 조합하여 실시한다.(예: 신체 B 난도의 요소와 조합하여 2개 동시 돌리기를 실시한다.)
  e. 링을 받기가 어려운 경우
    ⅰ. 링을 던져 올리고 있는 동안에 회전을 한 후 받는다.(예: 앞구르기를 1회 한 후 링을 받는 등, 다양한 던지기 방법으로 링을 던지고 그 던지고 있는 동안에 다양한 회전 등을 넣어 받는다.)
    ⅱ. 시야 밖에서 링의 던지기나 받기를 실시한다.(예: 다양한 던지기 방법으로 링을 던져 시야 밖에서 받는다.)

3. C 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 C 난도로 센다.
  a. 링을 던지고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  b. B 난도의 공중돌기 운동 동안에 링을 2회 조작한 경우.
  c. C 난도의 공중돌기 운동을 실시한 경우.
  d. 링을 던져 올리고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  e. 그 밖에 C 난도로서의 조합의 기술 가치가 높은 경우.

4. D 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 D 난도로 센다.
  a. 링을 던져 올리고 있는 동안에 C 난도의 공중돌기 운동을 실시한 경우.
  b. C 난도의 공중돌기 운동을 실시하고 있는 동안에 링을 2회 이상 조작한 경우.
  c. D 난도의 공중돌기 운동을 실시한 경우.
  d. 링을 던져 올리고 있는 동안에 3개 이상의 신체 계열이나 공중돌기 운동을 조합하여 실시한 경우.
  e. 그 밖에 D 난도로서의 조합의 기술 가치가 높은 경우.`,
              es: `Los elementos característicos del aro se cuentan normalmente como dificultad B cuando se combinan con un elemento de manos libres de dificultad B, y como dificultad C cuando se ejecutan combinados con un elemento de manos libres de dificultad C.
1. Dificultad A
Los siguientes elementos se cuentan como dificultad A cuando se ejecutan combinados con elementos de manos libres o de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad A manteniendo los aros sujetos.
  b. Manejar el aro una vez mientras se ejecuta un movimiento de tumbling de dificultad A.
  c. Recoger el aro sin ejecutar nada mientras el aro está en el aire.
  d. Otros casos con el valor técnico de una combinación de dificultad A.

2. Dificultad B
Los siguientes elementos se cuentan como dificultad B cuando se combinan con un elemento de manos libres de dificultad B.
  a. Cuando la relación rítmica entre el aro y el movimiento del cuerpo es especialmente compleja
    ⅰ. Elementos que exigen una simultaneidad total entre el movimiento del aro y el movimiento del cuerpo.
  b. Cuando, por la superficie sobre la que se desplaza el aro, resulta difícil mantener el plano del aro
    ⅰ. Rodamientos largos sobre una superficie irregular. Ejemplo: combinado con un elemento de manos libres de dificultad B, hacer rodar el aro a lo largo de los dos brazos extendidos lateralmente.
    ⅱ. Cuando hay que regular el impulso necesario para controlar la amplitud y el número de giros con torsión del aro. (Ejemplo: combinado con un elemento de manos libres de dificultad B, lanzar el aro haciéndolo girar sobre sí mismo dos veces o más.)
  c. Cuando el control del aro es difícil
    ⅰ. Lanzar el aro y recogerlo. (Ejemplo: combinado con un elemento de manos libres de dificultad B, lanzar el aro haciéndolo girar dos vueltas o más y recogerlo.)
  d. Cuando es difícil armonizar los movimientos
    ⅰ. Combinar elementos de manos libres con los aros. (Ejemplo: combinado con un elemento de manos libres de dificultad B, ejecutar un giro simultáneo de los dos aros.)
  e. Cuando la recogida del aro es difícil
    ⅰ. Girar mientras el aro está en el aire y recogerlo después. (Ejemplo: lanzar el aro de distintas maneras e introducir distintos giros mientras está en el aire antes de recogerlo, como recogerlo después de una voltereta adelante.)
    ⅱ. Lanzar o recoger el aro fuera del campo visual. (Ejemplo: lanzar el aro de distintas maneras y recogerlo fuera del campo visual.)

3. Dificultad C
Los siguientes elementos se cuentan como dificultad C cuando se combinan con elementos de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad B mientras se lanza el aro.
  b. Manejar el aro dos veces durante un movimiento de tumbling de dificultad B.
  c. Ejecutar un movimiento de tumbling de dificultad C.
  d. Ejecutar un movimiento de tumbling de dificultad B mientras el aro está en el aire.
  e. Otros casos con un alto valor técnico propio de una combinación de dificultad C.

4. Dificultad D
Los siguientes elementos se cuentan como dificultad D cuando se combinan con elementos de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad C mientras el aro está en el aire.
  b. Manejar el aro dos veces o más mientras se ejecuta un movimiento de tumbling de dificultad C.
  c. Ejecutar un movimiento de tumbling de dificultad D.
  d. Combinar tres o más elementos de manos libres o movimientos de tumbling mientras el aro está en el aire.
  e. Otros casos con un alto valor técnico propio de una combinación de dificultad D.`,
              fr: `Les éléments caractéristiques de l'anneau comptent habituellement comme difficultés B lorsqu'ils sont combinés à des éléments corporels de difficulté B, et comme difficultés C lorsqu'ils sont combinés à des éléments corporels de difficulté C.
1. Difficulté A
Les éléments suivants comptent comme difficultés A lorsqu'ils sont combinés à des éléments corporels ou de tumbling.
  a. Un mouvement de tumbling de difficulté A exécuté en tenant les anneaux.
  b. Un maniement des anneaux pendant un mouvement de tumbling de difficulté A.
  c. Rattraper l'anneau après un lancer sans rien exécuter pendant le lancer.
  d. Toute autre combinaison ayant la valeur technique d'une difficulté A.

2. Difficulté B
Les éléments suivants comptent comme difficultés B lorsqu'ils sont combinés à des éléments corporels de difficulté B.
  a. Lorsque le rapport rythmique entre l'anneau et le mouvement du corps est particulièrement complexe
    i. Éléments exigeant une synchronisation parfaite entre le mouvement de l'anneau et celui du corps.
  b. Lorsque la surface sur laquelle l'anneau se déplace rend difficile le maintien de son plan
    i. Un grand roulé sur une surface irrégulière. Ex. : faire rouler l'anneau le long des deux bras tendus sur le côté, en combinaison avec un élément corporel de difficulté B.
    ii. Lorsqu'il faut doser l'élan pour maîtriser l'amplitude et le nombre de rotations vrillées de l'anneau. (ex. : lancer l'anneau en le faisant vriller au moins deux fois, en combinaison avec un élément corporel de difficulté B.)
  c. Lorsque le contrôle de l'anneau est difficile
    i. Lancer et rattraper l'anneau. (ex. : lancer l'anneau en lui faisant faire au moins deux tours et le rattraper, en combinaison avec un élément corporel de difficulté B.)
  d. Lorsque la coordination des mouvements est difficile
    i. Combiner des éléments corporels et les anneaux. (ex. : faire tourner les deux anneaux simultanément, en combinaison avec un élément corporel de difficulté B.)
  e. Lorsque le rattrapé de l'anneau est difficile
    i. Effectuer une rotation pendant que l'anneau est en l'air avant de le rattraper. (ex. : lancer l'anneau de différentes façons et le rattraper après diverses rotations, comme une roulade avant.)
    ii. Lancer ou rattraper l'anneau hors du champ de vision. (ex. : lancer l'anneau de différentes façons et le rattraper hors du champ de vision.)

3. Difficulté C
Les éléments suivants comptent comme difficultés C lorsqu'ils sont combinés à des éléments de tumbling.
  a. Un mouvement de tumbling de difficulté B exécuté pendant que l'anneau est en l'air.
  b. Deux maniements des anneaux pendant un mouvement de tumbling de difficulté B.
  c. Un mouvement de tumbling de difficulté C.
  d. Un mouvement de tumbling de difficulté B exécuté pendant que l'anneau est en l'air.
  e. Toute autre combinaison ayant la valeur technique élevée d'une difficulté C.

4. Difficulté D
Les éléments suivants comptent comme difficultés D lorsqu'ils sont combinés à des éléments de tumbling.
  a. Un mouvement de tumbling de difficulté C exécuté pendant que l'anneau est en l'air.
  b. Au moins deux maniements des anneaux pendant un mouvement de tumbling de difficulté C.
  c. Un mouvement de tumbling de difficulté D.
  d. Au moins trois éléments corporels ou de tumbling combinés pendant que l'anneau est en l'air.
  e. Toute autre combinaison ayant la valeur technique élevée d'une difficulté D.`,
              ru: `Элементы, характерные для колец, обычно засчитываются как трудность B при сочетании с элементом без предмета трудности B и как трудность C при сочетании с элементом без предмета трудности C.
1. Трудность A
Следующие элементы засчитываются как трудность A при сочетании с элементами без предмета или акробатическими элементами.
  a. Акробатическое движение трудности A, выполненное с кольцами в руках.
  b. Один приём работы с кольцами во время акробатического движения трудности A.
  c. Ловля кольца после броска, если во время полёта ничего не выполнено.
  d. Иные сочетания, имеющие техническую ценность трудности A.

2. Трудность B
Следующие элементы засчитываются как трудность B при сочетании с элементом без предмета трудности B.
  a. Когда ритмическая связь движения колец и тела особенно сложна
    i. Элементы, требующие полной одновременности движения кольца и движения тела.
  b. Когда из-за поверхности, по которой движется кольцо, трудно удержать его плоскость
    i. Длинный прокат по неровной поверхности. Например: прокат кольца по обеим разведённым в стороны рукам в сочетании с элементом без предмета трудности B.
    ii. Когда нужно рассчитать импульс, чтобы управлять размахом и числом вращений кольца вокруг своей оси. (Например: бросок кольца с двумя и более оборотами вокруг оси в сочетании с элементом без предмета трудности B.)
  c. Когда трудно управлять кольцом
    i. Бросок и ловля кольца. (Например: бросить кольцо с двумя и более оборотами и поймать — в сочетании с элементом без предмета трудности B.)
  d. Когда трудно согласовать движения
    i. Сочетание элемента без предмета с работой кольцами. (Например: одновременное вращение двух колец в сочетании с элементом без предмета трудности B.)
  e. Когда трудно поймать кольцо
    i. Поворот или вращение во время полёта кольца с последующей ловлей. (Например: поймать кольцо после одного кувырка вперёд — разные способы броска и разные вращения во время полёта с последующей ловлей.)
    ii. Бросок или ловля кольца вне поля зрения. (Например: бросить кольцо разными способами и поймать вне поля зрения.)

3. Трудность C
Следующие элементы засчитываются как трудность C при сочетании с акробатическими элементами.
  a. Акробатическое движение трудности B, выполненное во время полёта кольца.
  b. Два приёма работы с кольцами во время акробатического движения трудности B.
  c. Акробатическое движение трудности C.
  d. Акробатическое движение трудности B, выполненное во время полёта кольца.
  e. Иные сочетания с высокой технической ценностью трудности C.

4. Трудность D
Следующие элементы засчитываются как трудность D при сочетании с акробатическими элементами.
  a. Акробатическое движение трудности C, выполненное во время полёта кольца.
  b. Два и более приёма работы с кольцами во время акробатического движения трудности C.
  c. Акробатическое движение трудности D.
  d. Сочетание трёх и более элементов без предмета или акробатических движений во время полёта кольца.
  e. Иные сочетания с высокой технической ценностью трудности D.`,
              hi: `रिंग के विशिष्ट तत्व सामान्यतः तब B कठिनाई गिने जाते हैं जब वे बिना उपकरण की B कठिनाई के तत्वों के साथ संयुक्त हों, और तब C कठिनाई गिने जाते हैं जब वे बिना उपकरण की C कठिनाई के तत्वों के साथ संयुक्त करके किए जाएँ।
1. A कठिनाई
निम्नलिखित तत्व, बिना उपकरण के या टम्बलिंग के तत्वों के साथ संयुक्त करके किए जाने पर, A कठिनाई गिने जाते हैं।
  a. रिंग को पकड़े हुए A कठिनाई की टम्बलिंग गति करने पर।
  b. A कठिनाई की टम्बलिंग गति करते समय रिंग का 1 बार संचालन करने पर।
  c. रिंग हवा में रहने के दौरान कुछ भी किए बिना रिंग को लपकने पर।
  d. अन्य, A कठिनाई के समान संयोजन का तकनीकी मूल्य होने पर।

2. B कठिनाई
निम्नलिखित तत्व, बिना उपकरण की B कठिनाई के तत्वों के साथ संयुक्त होने पर B कठिनाई गिने जाते हैं।
  a. जब रिंग और शरीर की गति के बीच का लयबद्ध संबंध विशेष रूप से जटिल हो
    ⅰ. ऐसे तत्व जिनमें रिंग की गति और शरीर की गति के बीच पूर्ण समकालिकता आवश्यक हो।
  b. जब रिंग की गति के लिए प्रयुक्त सतह के कारण रिंग का तल बनाए रखना कठिन हो
    ⅰ. असमान सतह पर बड़ा लुढ़काव। उदाहरण: बिना उपकरण की B कठिनाई के तत्व के साथ संयुक्त करते हुए, बगल में फैलाई गई दोनों बाजुओं पर पूरी लंबाई में रिंग को लुढ़काना।
    ⅱ. जब रिंग के मरोड़दार घुमाव के विस्तार और संख्या को नियंत्रित करने के लिए आवश्यक गति-बल को समायोजित करना पड़े। (उदाहरण: बिना उपकरण की B कठिनाई के तत्व से जोड़कर, रिंग को 2 या अधिक बार मरोड़ते हुए घुमाकर फेंकना।)
  c. जब रिंग पर नियंत्रण कठिन हो
    ⅰ. रिंग को फेंककर लपकना। (उदाहरण: बिना उपकरण की B कठिनाई के तत्व के साथ संयुक्त करते हुए, रिंग को 2 या अधिक चक्कर घुमाते हुए फेंककर लपकना।)
  d. जब गतियों में तालमेल बिठाना कठिन हो
    ⅰ. बिना उपकरण के तत्वों और रिंग को संयुक्त करके करना। (उदाहरण: बिना उपकरण की B कठिनाई के तत्व के साथ संयुक्त करते हुए, दोनों का एक साथ घुमाव करना।)
  e. जब रिंग को लपकना कठिन हो
    ⅰ. रिंग हवा में रहने के दौरान घूमकर उसे लपकना। (उदाहरण: 1 बार आगे की कलाबाज़ी करने के बाद रिंग को लपकना आदि, विभिन्न तरीकों से रिंग फेंककर, उस दौरान विभिन्न घुमाव आदि डालकर लपकना।)
    ⅱ. दृष्टि क्षेत्र के बाहर रिंग को फेंकना या लपकना। (उदाहरण: विभिन्न तरीकों से रिंग फेंककर, दृष्टि क्षेत्र के बाहर लपकना।)

3. C कठिनाई
निम्नलिखित तत्व, टम्बलिंग के तत्वों के साथ संयुक्त होने पर C कठिनाई गिने जाते हैं।
  a. रिंग फेंकने के दौरान B कठिनाई की टम्बलिंग गति करने पर।
  b. B कठिनाई की टम्बलिंग गति के दौरान रिंग का 2 बार संचालन करने पर।
  c. C कठिनाई की टम्बलिंग गति करने पर।
  d. रिंग हवा में रहने के दौरान B कठिनाई की टम्बलिंग गति करने पर।
  e. अन्य, C कठिनाई के समान संयोजन का तकनीकी मूल्य अधिक होने पर।

4. D कठिनाई
निम्नलिखित तत्व, टम्बलिंग के तत्वों के साथ संयुक्त होने पर D कठिनाई गिने जाते हैं।
  a. रिंग हवा में रहने के दौरान C कठिनाई की टम्बलिंग गति करने पर।
  b. C कठिनाई की टम्बलिंग गति करते समय रिंग का 2 या अधिक बार संचालन करने पर।
  c. D कठिनाई की टम्बलिंग गति करने पर।
  d. रिंग हवा में रहने के दौरान 3 या अधिक बिना उपकरण के तत्वों या टम्बलिंग गतियों को संयुक्त करके करने पर।
  e. अन्य, D कठिनाई के समान संयोजन का तकनीकी मूल्य अधिक होने पर।`,
            },
          },
        ],
      },
      {
        title: {
          ja: 'ロープ（縄）の演技',
          en: 'Rope Routines',
          zh: '绳的成套动作',
          ko: '줄(로프)의 연기',
          es: 'Ejercicios de cuerda',
          fr: 'Exercices à la corde',
          ru: 'Упражнение со скакалкой',
          hi: 'रस्सी (डोरी) का प्रदर्शन',
        },
        block: [
          {
            title: {
              ja: 'ロープ（縄）の規格',
              en: 'Rope Specifications',
              zh: '绳的规格',
              ko: '줄(로프)의 규격',
              es: 'Especificaciones de la cuerda',
              fr: 'Caractéristiques de la corde',
              ru: 'Требования к скакалке',
              hi: 'रस्सी (डोरी) के विनिर्देश',
            },
            element: {
              ja: `1. 素材
麻製または合成繊維。ただし、合成繊維の場合は麻製のように軽くしなやかなものとする。

2. 重量
特になし。

3. 形状
長さは自由とする。両端には握り手をつけてはならないが１つか２つ両端に結び目をつくってもよい。直径については素材が同じであれば全体が同じ太さであっても中心部が両端より太くなってもよい。結び目の両端の解れは３cm以内は認める。

4. 色彩
自由。`,
              en: `1. Material
Hemp or synthetic fiber. A synthetic rope must be as light and supple as a hemp rope.

2. Weight
No requirement.

3. Shape
Length is free. The rope must not have handles, but one or two knots may be tied at each end. If the material is the same throughout, the rope may be the same thickness throughout or thicker in the middle than at the ends. Frayed ends of up to 3 cm beyond the knots are allowed.

4. Color
Free.`,
              zh: `1. 材质
麻制或合成纤维。但合成纤维必须像麻制的一样轻而柔软。

2. 重量
无特别规定。

3. 形状
长度自由。两端不得安装握把，但可以在两端打１个或２个结。关于直径，只要材质相同，可以整体粗细一致，也可以中间部分比两端粗。结两端散开的部分允许在３cm 以内。

4. 颜色
自由。`,
              ko: `1. 소재
마 제품 또는 합성 섬유. 다만 합성 섬유인 경우에는 마 제품처럼 가볍고 부드러운 것으로 한다.

2. 중량
특별히 없음.

3. 형상
길이는 자유로 한다. 양 끝에는 손잡이를 달아서는 안 되지만 한 개 또는 두 개의 매듭을 양 끝에 만들어도 된다. 지름에 대해서는 소재가 같다면 전체가 같은 굵기여도 되고 중심부가 양 끝보다 굵어도 된다. 매듭 양 끝의 풀림은 3cm 이내는 인정한다.

4. 색채
자유.`,
              es: `1. Material
Cáñamo o fibra sintética. No obstante, si es de fibra sintética, debe ser tan ligera y flexible como la de cáñamo.

2. Peso
Sin requisito.

3. Forma
La longitud es libre. En los extremos no se pueden colocar mangos, pero sí se pueden hacer uno o dos nudos en cada extremo. En cuanto al diámetro, si el material es el mismo, la cuerda puede tener el mismo grosor en toda su longitud o ser más gruesa en la parte central que en los extremos. Se admite que los extremos queden deshilachados hasta 3cm por fuera del nudo.

4. Color
Libre.`,
              fr: `1. Matériau
Chanvre ou fibre synthétique. Une corde synthétique doit être aussi légère et souple qu'une corde de chanvre.

2. Poids
Aucune exigence.

3. Forme
Longueur libre. La corde ne doit pas avoir de poignées, mais un ou deux nœuds peuvent être faits à chaque extrémité. Si le matériau est le même sur toute sa longueur, la corde peut avoir une épaisseur constante ou être plus épaisse au milieu qu'aux extrémités. Les extrémités effilochées sont admises jusqu'à 3 cm au-delà des nœuds.

4. Couleur
Libre.`,
              ru: `1. Материал
Пенька или синтетическое волокно. Синтетическая скакалка должна быть такой же лёгкой и гибкой, как пеньковая.

2. Вес
Не установлен.

3. Форма
Длина свободная. Ручек на концах быть не должно, но на каждом конце можно завязать один-два узла. Если материал одинаков по всей длине, скакалка может быть одной толщины либо толще в середине, чем на концах. Допускается распушение концов за узлами не более 3 см.

4. Цвет
Свободный.`,
              hi: `1. सामग्री
सन से बनी या सिंथेटिक रेशे की। परंतु, सिंथेटिक रेशे की स्थिति में वह सन से बनी रस्सी की तरह हल्की और लचीली हो।

2. वज़न
कोई विशेष आवश्यकता नहीं।

3. आकार
लंबाई स्वतंत्र है। दोनों सिरों पर हत्थे नहीं लगाए जा सकते, परंतु दोनों सिरों पर एक या दो गाँठें बनाई जा सकती हैं। व्यास के बारे में, यदि सामग्री समान हो तो पूरी रस्सी एक ही मोटाई की हो सकती है या बीच का भाग दोनों सिरों से मोटा हो सकता है। गाँठों के दोनों सिरों का 3cm के भीतर बिखरा होना मान्य है।

4. रंग
स्वतंत्र।`,
            },
          },
          {
            title: {
              ja: 'ロープ（縄）の技術',
              en: 'Rope Technique',
              zh: '绳的技术',
              ko: '줄(로프)의 기술',
              es: 'Técnica de la cuerda',
              fr: 'Technique de la corde',
              ru: 'Техника работы со скакалкой',
              hi: 'रस्सी (डोरी) की तकनीक',
            },
            element: {
              ja: `【諸要素群】
1. 基礎要素群
  a. さまざまな種類の連続とび
  b. 投げ
  c. ロープを用いた転回系

2. その他の要素群
  a. 振り
  b. 回旋

以上の要素群は以下のことを考慮に入れて実施することができる。
  a. ロープをひろげてまたは折って用いる。
  b. 片手または両手もちで行う。
  c. さまざまな方向で行う。さまざまな面で行う。
  d. 移動をする場合、しない場合。
  e. 移動をする場合、しない場合。
  f. 片足または両足支持、さまざまな方向にロープを回転させながら行う。

3. ロープの操作
ロープは常に明確な形状が保たれた状態でなければならない。動きは連続性を持ったものであること。すなわち、ロープはいつも動いており、張りがなく不活発な感じを表さないよう十分な弾みがついていなければならない。動きの大きさはリズムと関係を持つ（早いリズム＝制限された動き、遅いリズム＝ゆったりした動き）。

4. ロープの持ち方
ロープに特徴的な諸要素の実施のためには、ロープに自在に動くよう軽く持たなければならない。また、ロープを一時的に体に巻きつけたり両腕に張った状態にすることも可能である。`,
              en: `[Element groups]
1. Basic element groups
  a. Various kinds of consecutive jumps
  b. Throws
  c. Tumbling with the rope

2. Other element groups
  a. Swings
  b. Circles

These element groups can be performed taking the following into account.
  a. With the rope open or folded.
  b. Held in one hand or both hands.
  c. In various directions and in various planes.
  d. With or without traveling.
  e. With or without traveling.
  f. On one foot or both feet, turning the rope in various directions.

3. Handling the rope
The rope must always keep a clear shape. Its movement must be continuous: the rope is always moving, with enough momentum that it never looks slack or lifeless. The amplitude of the movement is related to the rhythm (fast rhythm = restricted movements, slow rhythm = broad movements).

4. Holding the rope
To perform the elements characteristic of the rope, it must be held lightly so that it moves freely. The rope may also be wrapped around the body for a moment or held taut between the arms.`,
              zh: `【各要素组】
1. 基础要素组
  a. 各种各样的连续跳
  b. 抛掷
  c. 使用绳的翻腾类

2. 其他要素组
  a. 摆动
  b. 绕环

以上各要素组，可以在考虑以下各点的基础上进行。
  a. 将绳展开或折叠使用。
  b. 用单手或双手握持进行。
  c. 在各种方向进行。在各种平面进行。
  d. 移动或不移动。
  e. 移动或不移动。
  f. 单脚或双脚支撑，一边向各种方向摇绳一边进行。

3. 绳的操作
绳必须始终保持明确的形状。动作必须具有连续性。也就是说，绳始终在运动，必须有足够的弹力，不得显得松弛、缺乏活力。动作的幅度与节奏相关（节奏快＝动作受限，节奏慢＝动作舒展）。

4. 绳的握法
为完成绳特有的各要素，必须轻握绳，使其能自由运动。此外，也可以暂时将绳缠绕在身上，或在双臂之间拉紧。`,
              ko: `【제반 요소군】
1. 기초 요소군
  a. 다양한 종류의 연속 뛰기
  b. 던지기
  c. 줄을 사용한 공중돌기 계열

2. 그 밖의 요소군
  a. 흔들기
  b. 회전

이상의 요소군은 다음 사항을 고려하여 실시할 수 있다.
  a. 줄을 펴서 또는 접어서 사용한다.
  b. 한 손 또는 두 손으로 잡고 실시한다.
  c. 다양한 방향으로 실시한다. 다양한 면에서 실시한다.
  d. 이동하는 경우와 하지 않는 경우.
  e. 이동하는 경우와 하지 않는 경우.
  f. 한 발 또는 두 발 지지, 다양한 방향으로 줄을 회전시키면서 실시한다.

3. 줄의 조작
줄은 항상 명확한 형상이 유지된 상태여야 한다. 움직임은 연속성을 가진 것이어야 한다. 즉 줄은 언제나 움직이고 있으며, 팽팽함이 없고 활기가 없는 느낌을 나타내지 않도록 충분한 탄력이 붙어 있어야 한다. 움직임의 크기는 리듬과 관계를 가진다(빠른 리듬 = 제한된 움직임, 느린 리듬 = 여유로운 움직임).

4. 줄을 잡는 법
줄에 특징적인 제반 요소를 실시하기 위해서는 줄이 자유롭게 움직이도록 가볍게 잡아야 한다. 또한 줄을 일시적으로 몸에 감거나 두 팔에 팽팽하게 편 상태로 하는 것도 가능하다.`,
              es: `[Grupos de elementos]
1. Grupos de elementos básicos
  a. Saltos consecutivos de distintos tipos
  b. Lanzamientos
  c. Elementos de tumbling con la cuerda

2. Otros grupos de elementos
  a. Balanceos
  b. Círculos

Los grupos de elementos anteriores se pueden ejecutar teniendo en cuenta lo siguiente.
  a. Con la cuerda extendida o plegada.
  b. Sujetándola con una mano o con las dos.
  c. En diferentes direcciones. En diferentes planos.
  d. Con desplazamiento o sin él.
  e. Con desplazamiento o sin él.
  f. Con apoyo sobre un pie o sobre los dos, haciendo girar la cuerda en diferentes direcciones.

3. Manejo de la cuerda
La cuerda debe mantener en todo momento una forma bien definida. El movimiento debe tener continuidad: es decir, la cuerda está siempre en movimiento y debe llevar el impulso suficiente para no parecer floja ni inerte. La amplitud del movimiento está relacionada con el ritmo (ritmo rápido = movimientos limitados, ritmo lento = movimientos amplios).

4. Forma de sujetar la cuerda
Para ejecutar los elementos característicos de la cuerda, esta se debe sujetar sin apretar, de modo que se mueva con libertad. También es posible enrollarla momentáneamente alrededor del cuerpo o mantenerla tensa entre los dos brazos.`,
              fr: `[Groupes d'éléments]
1. Groupes d'éléments de base
  a. Sauts enchaînés de types variés
  b. Lancers
  c. Tumbling avec la corde

2. Autres groupes d'éléments
  a. Balancers
  b. Cercles

Ces groupes d'éléments peuvent être exécutés en tenant compte des points suivants.
  a. Avec la corde déployée ou pliée.
  b. Tenue d'une main ou des deux mains.
  c. Dans différentes directions et différents plans.
  d. Avec ou sans déplacement.
  e. Avec ou sans déplacement.
  f. En appui sur un pied ou sur les deux, en faisant tourner la corde dans différentes directions.

3. Maniement de la corde
La corde doit toujours conserver une forme nette. Son mouvement doit être continu : la corde est toujours en mouvement et doit garder assez d'élan pour ne jamais paraître molle ou inerte. L'amplitude du mouvement est liée au rythme (rythme rapide = mouvements restreints, rythme lent = mouvements amples).

4. Prise de la corde
Pour exécuter les éléments caractéristiques de la corde, celle-ci doit être tenue légèrement afin de se mouvoir librement. La corde peut aussi être enroulée un instant autour du corps ou tendue entre les deux bras.`,
              ru: `[Группы элементов]
1. Базовые группы элементов
  a. разные виды прыжков подряд
  b. броски
  c. акробатика со скакалкой

2. Прочие группы элементов
  a. махи
  b. круги

Перечисленные группы элементов можно выполнять с учётом следующего.
  a. скакалкой целиком или сложенной;
  b. одной или двумя руками;
  c. в разных направлениях, в разных плоскостях;
  d. с перемещением и без него;
  e. с перемещением и без него;
  f. с опорой на одну или на две ноги, вращая скакалку в разных направлениях.

3. Работа со скакалкой
Скакалка должна всегда сохранять чёткую форму. Движение должно быть непрерывным: скакалка всё время движется и имеет достаточный импульс, чтобы не выглядеть провисшей и вялой. Размах движения связан с ритмом (быстрый ритм — ограниченные движения, медленный ритм — размашистые движения).

4. Хват скакалки
Для исполнения характерных для скакалки элементов её нужно держать легко, чтобы она свободно двигалась. Скакалку можно также ненадолго обвить вокруг тела или натянуть между руками.`,
              hi: `[तत्व वर्ग]
1. बुनियादी तत्व वर्ग
  a. विभिन्न प्रकार की लगातार छलांगें
  b. फेंक
  c. रस्सी के साथ टम्बलिंग

2. अन्य तत्व वर्ग
  a. झुलाव
  b. चक्र

उपर्युक्त तत्व वर्गों को निम्नलिखित बातों को ध्यान में रखते हुए किया जा सकता है।
  a. रस्सी को खोलकर या मोड़कर उपयोग करना।
  b. एक हाथ या दोनों हाथों की पकड़ से करना।
  c. विभिन्न दिशाओं में करना। विभिन्न तलों में करना।
  d. स्थान परिवर्तन के साथ या बिना।
  e. स्थान परिवर्तन के साथ या बिना।
  f. एक पैर या दोनों पैरों पर सहारा, रस्सी को विभिन्न दिशाओं में घुमाते हुए करना।

3. रस्सी का संचालन
रस्सी हमेशा स्पष्ट आकार बनाए रखने की स्थिति में होनी चाहिए। गति में निरंतरता होनी चाहिए। अर्थात्, रस्सी हमेशा गतिमान रहे और उसमें इतना पर्याप्त बल हो कि वह ढीली और निष्क्रिय न लगे। गति का विस्तार लय से संबंध रखता है (तेज़ लय = सीमित गति, धीमी लय = खुली हुई गति)।

4. रस्सी की पकड़
रस्सी के विशिष्ट तत्वों को करने के लिए, रस्सी को हल्के से पकड़ना चाहिए ताकि वह स्वतंत्र रूप से चल सके। साथ ही, रस्सी को कुछ समय के लिए शरीर पर लपेटना या दोनों बाजुओं के बीच तानकर रखना भी संभव है।`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              zh: '编排的要求',
              ko: '구성에 요구되는 것',
              es: 'Requisitos de la composición',
              fr: 'Exigences de la composition',
              ru: 'Требования к композиции',
              hi: 'संरचना के लिए आवश्यकताएँ',
            },
            element: {
              ja: `1. とび
下記の①〜④のとびを入れなければならない。ただし、転回系のロープのとびは除く。
  a. その場での２回以上の連続前回しとび（例：前回しの１重とびや２重とびを２回以上行う。）
  b. その場での２回以上の連続後ろ回しとび（例：後ろ回しの１重とびや２重とびを２回以上行う。）
  c. ６m以上の移動を伴う２回以上の連続とび（例：移動をしながら回転とびを２回以上行う。）
  d. ３重とび（例：前回しの３重とびを１回以上行う。）
  ※　a〜dの中でdを行った場合はそれぞれの要素として数える。（例：前回しの３重とびを組み合わせて行いながら６m以上移動した場合。）

2. 投げ
  a. 投げの条件
  ３回以上の投げを入れなければならない。
  b. 投げの高さ
  投げの高さは、競技者が投げたところから最低２m以上の高さとする。

3. 転回系の要素
  a. 前方・後方・側方系の転回系を入れなければならない。
  b. 転回系を実施しているときに、ロープが生かされなければならない。

4. 諸要素
  a. 前回しまたは後ろ回しなど、さまざまな種類の連続とび
  b. さまざまな方向、面で実施されるさまざまな種類の動き（振り、回旋、８の字運動。）
  c. さまざまな種類の投げ
  d. ロープのスピードの変化
  e. ロープの持ち方の変化（ひろげたロープ、折ったロープ、片手持ち、両手持ち、先端を持つ、中央を持つなど）
  ※　ロープを折った状態での操作は、この手具の特徴的なものであるが、それに偏った状態の演技ではいけない。ロープをひろげた状態の演技が重要である。片手持ちでの要素の実施には左手と右手は平均して使わなければならない。`,
              en: `1. Jumps
The jumps a to d below must be included. Rope jumps within tumbling do not count.
  a. At least two consecutive forward jumps on the spot (e.g. two or more forward single or double unders.)
  b. At least two consecutive backward jumps on the spot (e.g. two or more backward single or double unders.)
  c. At least two consecutive jumps traveling at least 6 m (e.g. two or more jumps while traveling.)
  d. A triple under (e.g. one or more forward triple unders.)
  * Among a to d, when d is performed together with another element, each counts as its own element. (e.g. traveling at least 6 m while performing forward triple unders.)

2. Throws
  a. Requirements for throws
  At least three throws must be included.
  b. Height of throws
  A throw must rise at least 2 m from the point of release.

3. Tumbling elements
  a. Forward, backward and sideways tumbling must be included.
  b. The rope must be used actively during tumbling.

4. Elements
  a. Various kinds of consecutive jumps, forward or backward
  b. Various kinds of movements in various directions and planes (swings, circles, figure eights)
  c. Various kinds of throws
  d. Changes in the speed of the rope
  e. Changes in how the rope is held (open, folded, in one hand, in both hands, by the end, by the middle, and so on)
  * Handling the rope folded is characteristic of this apparatus, but the routine must not rely too much on it. Routines with the rope open are important. When elements are performed with the rope in one hand, the left and right hands must be used equally.`,
              zh: `1. 跳
必须编入下列 a—d 的跳。但翻腾中的绳跳除外。
  a. 原地２次以上的连续向前摇跳（例：做２次以上向前摇的单摇跳或双摇跳。）
  b. 原地２次以上的连续向后摇跳（例：做２次以上向后摇的单摇跳或双摇跳。）
  c. 伴随６m 以上移动的２次以上的连续跳（例：一边移动一边做２次以上的转体跳。）
  d. 三摇跳（例：做１次以上向前摇的三摇跳。）
  ※　在 a—d 中做了 d 时，分别计为各自的要素。（例：一边组合做向前摇的三摇跳一边移动６m 以上的情况。）

2. 抛掷
  a. 抛掷的条件
  必须编入３次以上的抛掷。
  b. 抛掷的高度
  抛掷的高度，从参赛者抛出的位置算起至少要达到２m以上。

3. 翻腾类要素
  a. 必须编入前方、后方、侧方的翻腾。
  b. 做翻腾时，必须有效地运用绳。

4. 各要素
  a. 向前摇或向后摇等各种各样的连续跳
  b. 在各种方向、平面完成的各种各样的动作（摆动、绕环、８字运动。）
  c. 各种各样的抛掷
  d. 绳的速度变化
  e. 绳的握法变化（展开的绳、折叠的绳、单手握、双手握、握两端、握中央等）
  ※　在绳折叠状态下的操作是这一器械的特点，但成套动作不可偏重于此。绳展开状态下的成套动作很重要。用单手握持完成要素时，必须平均地使用左手和右手。`,
              ko: `1. 뛰기
아래의 ①~④의 뛰기를 넣어야 한다. 다만 공중돌기 계열의 줄 뛰기는 제외한다.
  a. 제자리에서의 2회 이상의 연속 앞돌리기 뛰기(예: 앞돌리기의 1중 뛰기나 2중 뛰기를 2회 이상 실시한다.)
  b. 제자리에서의 2회 이상의 연속 뒤돌리기 뛰기(예: 뒤돌리기의 1중 뛰기나 2중 뛰기를 2회 이상 실시한다.)
  c. 6m 이상의 이동을 동반한 2회 이상의 연속 뛰기(예: 이동하면서 회전 뛰기를 2회 이상 실시한다.)
  d. 3중 뛰기(예: 앞돌리기의 3중 뛰기를 1회 이상 실시한다.)
  ※ a~d 중에서 d를 실시한 경우에는 각각의 요소로 센다.(예: 앞돌리기의 3중 뛰기를 조합하여 실시하면서 6m 이상 이동한 경우.)

2. 던지기
  a. 던지기의 조건
  3회 이상의 던지기를 넣어야 한다.
  b. 던지기의 높이
  던지기의 높이는 경기자가 던진 지점에서 최저 2m 이상의 높이로 한다.

3. 공중돌기 계열의 요소
  a. 전방·후방·측방 계열의 공중돌기를 넣어야 한다.
  b. 공중돌기를 실시하고 있을 때 줄이 살려져야 한다.

4. 제반 요소
  a. 앞돌리기 또는 뒤돌리기 등 다양한 종류의 연속 뛰기
  b. 다양한 방향, 면에서 실시되는 다양한 종류의 움직임(흔들기, 회전, 8자 운동.)
  c. 다양한 종류의 던지기
  d. 줄의 속도 변화
  e. 줄을 잡는 법의 변화(편 줄, 접은 줄, 한 손 잡기, 두 손 잡기, 끝을 잡기, 중앙을 잡기 등)
  ※ 줄을 접은 상태에서의 조작은 이 수구의 특징적인 것이지만 그것에 치우친 연기여서는 안 된다. 줄을 편 상태의 연기가 중요하다. 한 손 잡기로 요소를 실시할 때에는 왼손과 오른손을 고르게 사용해야 한다.`,
              es: `1. Saltos
Se deben incluir los saltos ①–④ que se indican a continuación. No obstante, no se cuentan los saltos con la cuerda dentro de los elementos de tumbling.
  a. Dos o más saltos consecutivos en el sitio con la cuerda hacia delante (Ejemplo: ejecutar dos o más saltos simples o dobles con la cuerda hacia delante.)
  b. Dos o más saltos consecutivos en el sitio con la cuerda hacia atrás (Ejemplo: ejecutar dos o más saltos simples o dobles con la cuerda hacia atrás.)
  c. Dos o más saltos consecutivos con un desplazamiento de 6m o más (Ejemplo: ejecutar dos o más saltos con la cuerda mientras se desplaza.)
  d. Salto triple (Ejemplo: ejecutar uno o más saltos triples con la cuerda hacia delante.)
  * Entre a y d, cuando se ejecuta d, cada uno se cuenta como un elemento propio. (Ejemplo: cuando se recorren 6m o más combinando saltos triples con la cuerda hacia delante.)

2. Lanzamientos
  a. Condiciones de los lanzamientos
  Se deben incluir tres lanzamientos o más.
  b. Altura de los lanzamientos
  La altura del lanzamiento será como mínimo de 2m por encima del punto desde el que lanza el gimnasta.

3. Elementos de tumbling
  a. Se deben incluir elementos de tumbling hacia delante, hacia atrás y laterales.
  b. La cuerda se debe aprovechar mientras se ejecutan los elementos de tumbling.

4. Elementos
  a. Saltos consecutivos de distintos tipos, con la cuerda hacia delante o hacia atrás
  b. Movimientos de distintos tipos ejecutados en diferentes direcciones y planos (balanceos, círculos, movimientos en ocho.)
  c. Lanzamientos de distintos tipos
  d. Cambios de velocidad de la cuerda
  e. Cambios en la forma de sujetar la cuerda (cuerda extendida, cuerda plegada, con una mano, con las dos manos, por un extremo, por el centro, etc.)
  * El manejo de la cuerda plegada es característico de este aparato, pero el ejercicio no debe apoyarse en exceso en él. El trabajo con la cuerda extendida es importante. Cuando se ejecutan elementos sujetando la cuerda con una mano, se deben usar por igual la mano izquierda y la derecha.`,
              fr: `1. Sauts
Les sauts a à d ci-dessous doivent figurer dans l'exercice. Les sauts à la corde réalisés dans le tumbling ne comptent pas.
  a. Au moins deux sauts enchaînés en rotation avant sur place (ex. : au moins deux sauts simples ou doubles en rotation avant.)
  b. Au moins deux sauts enchaînés en rotation arrière sur place (ex. : au moins deux sauts simples ou doubles en rotation arrière.)
  c. Au moins deux sauts enchaînés sur un déplacement d'au moins 6 m (ex. : au moins deux sauts en se déplaçant.)
  d. Un triple saut (ex. : au moins un triple saut en rotation avant.)
  * Parmi a à d, lorsque d est exécuté conjointement à un autre élément, chacun compte séparément. (ex. : se déplacer d'au moins 6 m en enchaînant des triples sauts en rotation avant.)

2. Lancers
  a. Conditions des lancers
  Au moins trois lancers doivent figurer dans l'exercice.
  b. Hauteur des lancers
  Le lancer doit s'élever d'au moins 2 m au-dessus du point de lâcher.

3. Éléments de tumbling
  a. Du tumbling avant, arrière et latéral doit figurer dans l'exercice.
  b. La corde doit être mise en valeur pendant le tumbling.

4. Éléments
  a. Sauts enchaînés de types variés, en rotation avant ou arrière
  b. Mouvements de types variés dans différentes directions et différents plans (balancers, cercles, mouvements en huit)
  c. Lancers de types variés
  d. Variations de la vitesse de la corde
  e. Variations de la prise de la corde (déployée, pliée, d'une main, des deux mains, par une extrémité, par le milieu, etc.)
  * Le maniement de la corde pliée est caractéristique de cet engin, mais l'exercice ne doit pas y recourir de façon excessive. Le travail avec la corde déployée est important. Lorsque des éléments sont exécutés d'une seule main, la main gauche et la main droite doivent être utilisées de manière équilibrée.`,
              ru: `1. Прыжки
Необходимо включить прыжки a–d, указанные ниже. Прыжки через скакалку внутри акробатики не засчитываются.
  a. не менее двух прыжков подряд на месте с вращением скакалки вперёд (например: два и более одинарных или двойных прыжка с вращением вперёд);
  b. не менее двух прыжков подряд на месте с вращением скакалки назад (например: два и более одинарных или двойных прыжка с вращением назад);
  c. не менее двух прыжков подряд с перемещением не менее 6 м (например: два и более прыжка с вращением при перемещении);
  d. тройной прыжок (например: один и более тройной прыжок с вращением вперёд).
  ※ Если пункт d выполняется вместе с другим из пунктов a–c, каждый засчитывается как свой элемент. (Например: перемещение не менее чем на 6 м с одновременным исполнением тройных прыжков с вращением вперёд.)

2. Броски
  a. Требования к броскам
  Необходимо включить не менее трёх бросков.
  b. Высота броска
  Скакалка должна подниматься не менее чем на 2 м от точки выпуска.

3. Акробатические элементы
  a. Необходимо включить акробатику вперёд, назад и в сторону.
  b. Во время акробатики скакалка должна быть задействована.

4. Элементы
  a. Разные виды прыжков подряд — с вращением вперёд и назад
  b. Разные виды движений в разных направлениях и плоскостях (махи, круги, «восьмёрки»)
  c. Разные виды бросков
  d. Смена скорости скакалки
  e. Смена хвата (скакалка целиком, сложенная, в одной руке, в двух руках, за конец, за середину и так далее)
  ※ Работа со сложенной скакалкой характерна для этого предмета, но увлекаться ею нельзя. Важна и работа с развёрнутой скакалкой. При исполнении элементов одной рукой левая и правая руки должны использоваться поровну.`,
              hi: `1. छलांग
नीचे दी गई ①–④ की छलांगें डालना आवश्यक है। परंतु, टम्बलिंग में की गई रस्सी की छलांगें इसमें शामिल नहीं हैं।
  a. एक ही स्थान पर 2 या अधिक लगातार आगे घुमाते हुए छलांग (उदाहरण: आगे घुमाते हुए एकहरी छलांग या दोहरी छलांग 2 या अधिक बार करना।)
  b. एक ही स्थान पर 2 या अधिक लगातार पीछे घुमाते हुए छलांग (उदाहरण: पीछे घुमाते हुए एकहरी छलांग या दोहरी छलांग 2 या अधिक बार करना।)
  c. 6m या अधिक स्थान परिवर्तन के साथ 2 या अधिक लगातार छलांगें (उदाहरण: स्थान परिवर्तन करते हुए घूमने वाली छलांग 2 या अधिक बार करना।)
  d. तिहरी छलांग (उदाहरण: आगे घुमाते हुए तिहरी छलांग 1 या अधिक बार करना।)
  ※ a–d में से d को करने की स्थिति में उन्हें अलग-अलग तत्वों के रूप में गिना जाता है। (उदाहरण: आगे घुमाते हुए तिहरी छलांग को संयुक्त करते हुए 6m या अधिक स्थान परिवर्तन करने की स्थिति में।)

2. फेंक
  a. फेंक की शर्तें
  3 या अधिक फेंक डालने आवश्यक हैं।
  b. फेंक की ऊँचाई
  फेंक की ऊँचाई, जिम्नास्ट के फेंकने के स्थान से कम से कम 2m या अधिक होनी चाहिए।

3. टम्बलिंग तत्व
  a. आगे, पीछे और बगल की टम्बलिंग डालना आवश्यक है।
  b. टम्बलिंग करते समय रस्सी का सक्रिय उपयोग होना चाहिए।

4. तत्व
  a. आगे घुमाते हुए या पीछे घुमाते हुए आदि, विभिन्न प्रकार की लगातार छलांगें
  b. विभिन्न दिशाओं और तलों में की जाने वाली विभिन्न प्रकार की गतियाँ (झुलाव, चक्र, आठ के आकार की गति।)
  c. विभिन्न प्रकार के फेंक
  d. रस्सी की गति में परिवर्तन
  e. रस्सी की पकड़ में परिवर्तन (खुली रस्सी, मुड़ी रस्सी, एक हाथ की पकड़, दोनों हाथों की पकड़, सिरे को पकड़ना, बीच को पकड़ना आदि)
  ※ रस्सी को मोड़ी हुई स्थिति में संचालित करना इस उपकरण की विशेषता है, परंतु प्रदर्शन उसी पर केंद्रित नहीं होना चाहिए। रस्सी को खुली स्थिति में रखकर किया गया प्रदर्शन महत्वपूर्ण है। एक हाथ की पकड़ से तत्व करते समय बाएँ और दाएँ हाथ का समान रूप से उपयोग करना आवश्यक है।`,
            },
          },
          {
            title: {
              ja: '難度のレベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              zh: '判断难度级别的一般标准',
              ko: '난도의 수준을 판단하기 위한 일반적 기준',
              es: 'Pautas generales para valorar el nivel de dificultad',
              fr: 'Repères généraux pour apprécier le niveau de difficulté',
              ru: 'Общие ориентиры для определения уровня трудности',
              hi: 'कठिनाई का स्तर तय करने के लिए सामान्य दिशानिर्देश',
            },
            element: {
              ja: `ロープに特徴的な諸要素は通常、それが徒手のＢ難度の要素と組み合わされた場合はＢ難度、徒手のＣ難度の要素と組み合わされて実施された場合はＣ難度として数える。

1. Ａ難度
以下の要素は、徒手系や転回系の要素と組み合わせて実施した場合、Ａ難度として数える。
  a. ロープを保持したまま、Ａ難度の転回運動を実施した場合。
  b. Ａ難度の転回運動を実施している間に、ロープを１回操作した場合。
  c. ロープを投げ上げている間に、何も実施せずロープを受けた場合。
  d. その他、Ａ難度としての組み合わせの技術価値の場合。

2. Ｂ難度
以下の要素は、徒手のＢ難度の要素と組み合わせた場合Ｂ難度として数える。
  a. ロープと体の動きとの間のリズミカルな関係が複雑に構成されている場合。
    ⅰ. 徒手のＢ難度を１つ行う間に、ロープの動きを２つ（あるいはそれ以上）行う。（例：ロープを２回転させてＢ難度のジャンプを１回のジャンプの間にロープで頭上、足の下と交互に水平の円を描く。）
    ⅱ. ロープの運動と身体の動きとの間に、完全な同時性を必要とする要素。（例：投げの後、受け取ると同時にロープの上をジャンプする。）
  b. 動きの変化がロープの操作を難しくさせる場合。
    ⅰ. ロープが大きく扱う動きから、ゆっくりした動きに移行する。（例：ジャンプしながらロープを投げ、ロープの軌道を妨げずに受けてすぐにゆっくりしたロープの動きにつなげる。）
  c. ロープの長さのため、操作が難しい場合。
    ⅰ. 最初にロープの一端を投げ、次にもう一端を投げて１回転させ受け取る。開いたロープをくるぶしから上方へ、あるいはその逆方向に中断なく数回身体の周りに巻きつける。
  d. ロープの受け取りが難しい場合。
    ⅰ. ロープを投げ上げいる間に回転してから受け取る。（例：１回前転をしてからロープを受け取るなど、さまざまな投げ方でロープを投げ、その投げている間にさまざまな回転などを入れて受け取る。）
    ⅱ. 視野外でロープの投げ受けを行う。（例：さまざまな投げ方でロープを投げ、視界の外で受け取る。）

3. Ｃ難度
以下の要素は、転回系の要素と組み合わせた場合Ｃ難度として数える。
  a. ロープを投げている間に、Ｂ難度の転回運動を実施した場合。
  b. Ｂ難度の転回運動の間に、ロープを２回操作した場合。
  c. Ｃ難度の転回運動を行った場合。
  d. ロープを投げ上げている間に、２つの徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｃ難度としての組み合わせの技術価値の高い場合。

4. Ｄ難度
以下の要素は、転回系の要素と組み合わせた場合Ｄ難度として数える。
  a. ロープを投げ上げている間に、Ｃ難度の転回運動を実施した場合。
  b. Ｃ難度の転回運動を行なっている間に、ロープを２回以上操作した場合。
  c. Ｄ難度の転回運動を実施した場合。
  d. ロープを投げ上げている間に、３つ以上の徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｄ難度としての組み合わせの技術価値の高い場合。`,
              en: `Elements characteristic of the rope usually count as B difficulties when combined with B difficulty free-hand elements, and as C difficulties when combined with C difficulty free-hand elements.

1. A difficulty
The following elements count as A difficulties when combined with free-hand or tumbling elements.
  a. An A difficulty tumbling movement performed while holding the rope.
  b. One handling of the rope during an A difficulty tumbling movement.
  c. Catching the rope after a throw without performing anything during the throw.
  d. Other combinations with the technical value of an A difficulty.

2. B difficulty
The following elements count as B difficulties when combined with B difficulty free-hand elements.
  a. When the rhythmic relationship between the rope and the body movement is complex.
    i. Two (or more) rope movements during one B difficulty free-hand element. (e.g. turning the rope twice during one B difficulty jump, drawing horizontal circles alternately above the head and under the feet.)
    ii. Elements that require complete synchronization between the movement of the rope and the movement of the body. (e.g. jumping over the rope at the moment of catching it after a throw.)
  b. When a change of movement makes handling the rope difficult.
    i. Moving from large rope movements to slow ones. (e.g. throwing the rope during a jump, catching it without disturbing its path and immediately continuing with slow rope movements.)
  c. When the length of the rope makes handling difficult.
    i. Throwing one end of the rope first, then the other end, making it turn once before catching it. Wrapping the open rope around the body several times without interruption, from the ankles upward or the other way.
  d. When catching the rope is difficult.
    i. Rotating while the rope is in the air before catching it. (e.g. throwing the rope in various ways and catching it after various rotations during the throw, such as a forward roll.)
    ii. Throwing and catching the rope outside the field of vision. (e.g. throwing the rope in various ways and catching it outside the field of vision.)

3. C difficulty
The following elements count as C difficulties when combined with tumbling elements.
  a. A B difficulty tumbling movement performed while the rope is in the air.
  b. Two handlings of the rope during a B difficulty tumbling movement.
  c. A C difficulty tumbling movement.
  d. Two free-hand or tumbling elements combined while the rope is in the air.
  e. Other combinations with the high technical value of a C difficulty.

4. D difficulty
The following elements count as D difficulties when combined with tumbling elements.
  a. A C difficulty tumbling movement performed while the rope is in the air.
  b. Two or more handlings of the rope during a C difficulty tumbling movement.
  c. A D difficulty tumbling movement.
  d. Three or more free-hand or tumbling elements combined while the rope is in the air.
  e. Other combinations with the high technical value of a D difficulty.`,
              zh: `绳特有的各要素，通常在与徒手Ｂ难度要素相结合时计为Ｂ难度，与徒手Ｃ难度要素相结合完成时计为Ｃ难度。

1. Ａ难度
以下要素与徒手类或翻腾类要素相结合完成时，计为Ａ难度。
  a. 握持绳完成Ａ难度翻腾动作。
  b. 在完成Ａ难度翻腾动作期间操作绳１次。
  c. 在绳抛起的过程中不做任何动作而接住绳。
  d. 其他具有Ａ难度组合技术价值的情况。

2. Ｂ难度
以下要素与徒手Ｂ难度要素相结合时，计为Ｂ难度。
  a. 绳与身体动作之间的节奏关系编排得复杂的情况。
    ⅰ. 在做１个徒手Ｂ难度的期间，做２个（或更多）绳的动作。（例：使绳摇转２周，在１次Ｂ难度跳跃的过程中用绳在头上和脚下交替画水平圆。）
    ⅱ. 要求绳的运动与身体的运动之间完全同时进行的要素。（例：抛出后，在接住的同时从绳上跳过。）
  b. 动作的变化使绳的操作变难的情况。
    ⅰ. 从大幅度的绳的动作过渡到缓慢的动作。（例：一边跳跃一边抛出绳，在不妨碍绳的轨迹的情况下接住，并立即衔接缓慢的绳的动作。）
  c. 因绳的长度而操作困难的情况。
    ⅰ. 先抛出绳的一端，接着抛出另一端使其旋转１周后接住。将展开的绳从脚踝向上、或向相反方向不间断地在身体周围缠绕数次。
  d. 绳难以接住的情况。
    ⅰ. 在绳抛起的过程中转体后再接住。（例：做１次前滚翻后接住绳等，用各种抛法抛出绳，并在抛起期间加入各种转体等再接住。）
    ⅱ. 在视野外进行绳的抛接。（例：用各种抛法抛出绳，在视野之外接住。）

3. Ｃ难度
以下要素与翻腾类要素相结合时，计为Ｃ难度。
  a. 在绳抛出的过程中完成Ｂ难度翻腾动作。
  b. 在Ｂ难度翻腾动作期间操作绳２次。
  c. 完成Ｃ难度翻腾动作。
  d. 在绳抛起的过程中结合完成２个徒手类或翻腾类动作。
  e. 其他具有Ｃ难度组合高技术价值的情况。

4. Ｄ难度
以下要素与翻腾类要素相结合时，计为Ｄ难度。
  a. 在绳抛起的过程中完成Ｃ难度翻腾动作。
  b. 在完成Ｃ难度翻腾动作期间操作绳２次以上。
  c. 完成Ｄ难度翻腾动作。
  d. 在绳抛起的过程中结合完成３个以上徒手类或翻腾类动作。
  e. 其他具有Ｄ难度组合高技术价值的情况。`,
              ko: `줄에 특징적인 제반 요소는 통상 그것이 신체 B 난도의 요소와 조합된 경우에는 B 난도, 신체 C 난도의 요소와 조합되어 실시된 경우에는 C 난도로 센다.

1. A 난도
다음 요소는 신체 계열이나 공중돌기 계열의 요소와 조합하여 실시한 경우 A 난도로 센다.
  a. 줄을 잡은 채로 A 난도의 공중돌기 운동을 실시한 경우.
  b. A 난도의 공중돌기 운동을 실시하고 있는 동안에 줄을 1회 조작한 경우.
  c. 줄을 던져 올리고 있는 동안에 아무것도 실시하지 않고 줄을 받은 경우.
  d. 그 밖에 A 난도로서의 조합의 기술 가치가 있는 경우.

2. B 난도
다음 요소는 신체 B 난도의 요소와 조합한 경우 B 난도로 센다.
  a. 줄과 몸의 움직임 사이의 리듬 관계가 복잡하게 구성되어 있는 경우.
    ⅰ. 신체 B 난도를 1개 실시하는 동안에 줄의 움직임을 2개(또는 그 이상) 실시한다.(예: 줄을 2회전시켜 B 난도의 점프를 1회 하는 동안에 줄로 머리 위와 발 아래에 번갈아 수평의 원을 그린다.)
    ⅱ. 줄의 운동과 신체의 움직임 사이에 완전한 동시성을 필요로 하는 요소.(예: 던진 후 받는 것과 동시에 줄 위를 뛰어넘는다.)
  b. 움직임의 변화가 줄의 조작을 어렵게 만드는 경우.
    ⅰ. 줄을 크게 다루는 움직임에서 느린 움직임으로 이행한다.(예: 점프하면서 줄을 던지고 줄의 궤도를 방해하지 않고 받아 곧바로 느린 줄의 움직임으로 연결한다.)
  c. 줄의 길이 때문에 조작이 어려운 경우.
    ⅰ. 처음에 줄의 한쪽 끝을 던지고 이어서 다른 쪽 끝을 던져 1회전시켜 받는다. 편 줄을 발목에서 위쪽으로, 또는 그 반대 방향으로 중단 없이 여러 차례 신체 주위에 감는다.
  d. 줄을 받기가 어려운 경우.
    ⅰ. 줄을 던져 올리고 있는 동안에 회전한 후 받는다.(예: 앞구르기를 1회 한 후 줄을 받는 등, 다양한 던지기 방법으로 줄을 던지고 그 던지고 있는 동안에 다양한 회전 등을 넣어 받는다.)
    ⅱ. 시야 밖에서 줄의 던지기와 받기를 실시한다.(예: 다양한 던지기 방법으로 줄을 던져 시야 밖에서 받는다.)

3. C 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 C 난도로 센다.
  a. 줄을 던지고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  b. B 난도의 공중돌기 운동 동안에 줄을 2회 조작한 경우.
  c. C 난도의 공중돌기 운동을 실시한 경우.
  d. 줄을 던져 올리고 있는 동안에 2개의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 C 난도로서의 조합의 기술 가치가 높은 경우.

4. D 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 D 난도로 센다.
  a. 줄을 던져 올리고 있는 동안에 C 난도의 공중돌기 운동을 실시한 경우.
  b. C 난도의 공중돌기 운동을 실시하고 있는 동안에 줄을 2회 이상 조작한 경우.
  c. D 난도의 공중돌기 운동을 실시한 경우.
  d. 줄을 던져 올리고 있는 동안에 3개 이상의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 D 난도로서의 조합의 기술 가치가 높은 경우.`,
              es: `Los elementos característicos de la cuerda se cuentan normalmente como dificultad B cuando se combinan con un elemento de manos libres de dificultad B, y como dificultad C cuando se ejecutan combinados con un elemento de manos libres de dificultad C.

1. Dificultad A
Los siguientes elementos se cuentan como dificultad A cuando se ejecutan combinados con elementos de manos libres o de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad A manteniendo la cuerda sujeta.
  b. Manejar la cuerda una vez mientras se ejecuta un movimiento de tumbling de dificultad A.
  c. Recoger la cuerda sin ejecutar nada mientras la cuerda está en el aire.
  d. Otros casos con el valor técnico de una combinación de dificultad A.

2. Dificultad B
Los siguientes elementos se cuentan como dificultad B cuando se combinan con un elemento de manos libres de dificultad B.
  a. Cuando la relación rítmica entre la cuerda y el movimiento del cuerpo tiene una construcción compleja.
    ⅰ. Ejecutar dos (o más) movimientos de la cuerda durante un elemento de manos libres de dificultad B. (Ejemplo: durante un salto de dificultad B, hacer girar la cuerda dos veces trazando con ella círculos horizontales alternativamente por encima de la cabeza y por debajo de los pies.)
    ⅱ. Elementos que exigen una simultaneidad total entre el movimiento de la cuerda y el movimiento del cuerpo. (Ejemplo: después de un lanzamiento, saltar por encima de la cuerda en el mismo momento de recogerla.)
  b. Cuando un cambio de movimiento dificulta el manejo de la cuerda.
    ⅰ. Pasar de un movimiento amplio de la cuerda a un movimiento lento. (Ejemplo: lanzar la cuerda durante un salto, recogerla sin alterar su trayectoria y enlazar enseguida con un movimiento lento de la cuerda.)
  c. Cuando la longitud de la cuerda dificulta su manejo.
    ⅰ. Lanzar primero un extremo de la cuerda y después el otro, haciéndola dar una vuelta antes de recogerla. Enrollar la cuerda extendida alrededor del cuerpo varias veces sin interrupción, desde los tobillos hacia arriba o en sentido contrario.
  d. Cuando la recogida de la cuerda es difícil.
    ⅰ. Girar mientras la cuerda está en el aire y recogerla después. (Ejemplo: lanzar la cuerda de distintas maneras e introducir distintos giros mientras está en el aire antes de recogerla, como recogerla después de una voltereta adelante.)
    ⅱ. Lanzar y recoger la cuerda fuera del campo visual. (Ejemplo: lanzar la cuerda de distintas maneras y recogerla fuera del campo visual.)

3. Dificultad C
Los siguientes elementos se cuentan como dificultad C cuando se combinan con elementos de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad B mientras se lanza la cuerda.
  b. Manejar la cuerda dos veces durante un movimiento de tumbling de dificultad B.
  c. Ejecutar un movimiento de tumbling de dificultad C.
  d. Combinar dos elementos de manos libres o de tumbling mientras la cuerda está en el aire.
  e. Otros casos con un alto valor técnico propio de una combinación de dificultad C.

4. Dificultad D
Los siguientes elementos se cuentan como dificultad D cuando se combinan con elementos de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad C mientras la cuerda está en el aire.
  b. Manejar la cuerda dos veces o más mientras se ejecuta un movimiento de tumbling de dificultad C.
  c. Ejecutar un movimiento de tumbling de dificultad D.
  d. Combinar tres o más elementos de manos libres o de tumbling mientras la cuerda está en el aire.
  e. Otros casos con un alto valor técnico propio de una combinación de dificultad D.`,
              fr: `Les éléments caractéristiques de la corde comptent habituellement comme difficultés B lorsqu'ils sont combinés à des éléments corporels de difficulté B, et comme difficultés C lorsqu'ils sont combinés à des éléments corporels de difficulté C.

1. Difficulté A
Les éléments suivants comptent comme difficultés A lorsqu'ils sont combinés à des éléments corporels ou de tumbling.
  a. Un mouvement de tumbling de difficulté A exécuté en tenant la corde.
  b. Un maniement de la corde pendant un mouvement de tumbling de difficulté A.
  c. Rattraper la corde après un lancer sans rien exécuter pendant le lancer.
  d. Toute autre combinaison ayant la valeur technique d'une difficulté A.

2. Difficulté B
Les éléments suivants comptent comme difficultés B lorsqu'ils sont combinés à des éléments corporels de difficulté B.
  a. Lorsque le rapport rythmique entre la corde et le mouvement du corps est complexe.
    i. Deux mouvements de corde (ou plus) pendant un élément corporel de difficulté B. (ex. : faire tourner la corde deux fois pendant un saut de difficulté B, en décrivant des cercles horizontaux alternativement au-dessus de la tête et sous les pieds.)
    ii. Éléments exigeant une synchronisation parfaite entre le mouvement de la corde et celui du corps. (ex. : sauter par-dessus la corde au moment même où on la rattrape après un lancer.)
  b. Lorsqu'un changement de mouvement rend le maniement de la corde difficile.
    i. Passer de mouvements amples de la corde à des mouvements lents. (ex. : lancer la corde pendant un saut, la rattraper sans perturber sa trajectoire et enchaîner aussitôt des mouvements de corde lents.)
  c. Lorsque la longueur de la corde rend le maniement difficile.
    i. Lancer d'abord une extrémité de la corde, puis l'autre, en lui faisant faire un tour avant de la rattraper. Enrouler la corde déployée plusieurs fois autour du corps sans interruption, des chevilles vers le haut ou en sens inverse.
  d. Lorsque le rattrapé de la corde est difficile.
    i. Effectuer une rotation pendant que la corde est en l'air avant de la rattraper. (ex. : lancer la corde de différentes façons et la rattraper après diverses rotations, comme une roulade avant.)
    ii. Lancer et rattraper la corde hors du champ de vision. (ex. : lancer la corde de différentes façons et la rattraper hors du champ de vision.)

3. Difficulté C
Les éléments suivants comptent comme difficultés C lorsqu'ils sont combinés à des éléments de tumbling.
  a. Un mouvement de tumbling de difficulté B exécuté pendant que la corde est en l'air.
  b. Deux maniements de la corde pendant un mouvement de tumbling de difficulté B.
  c. Un mouvement de tumbling de difficulté C.
  d. Deux éléments corporels ou de tumbling combinés pendant que la corde est en l'air.
  e. Toute autre combinaison ayant la valeur technique élevée d'une difficulté C.

4. Difficulté D
Les éléments suivants comptent comme difficultés D lorsqu'ils sont combinés à des éléments de tumbling.
  a. Un mouvement de tumbling de difficulté C exécuté pendant que la corde est en l'air.
  b. Au moins deux maniements de la corde pendant un mouvement de tumbling de difficulté C.
  c. Un mouvement de tumbling de difficulté D.
  d. Au moins trois éléments corporels ou de tumbling combinés pendant que la corde est en l'air.
  e. Toute autre combinaison ayant la valeur technique élevée d'une difficulté D.`,
              ru: `Элементы, характерные для скакалки, обычно засчитываются как трудность B при сочетании с элементом без предмета трудности B и как трудность C при сочетании с элементом без предмета трудности C.

1. Трудность A
Следующие элементы засчитываются как трудность A при сочетании с элементами без предмета или акробатическими элементами.
  a. Акробатическое движение трудности A, выполненное со скакалкой в руках.
  b. Один приём работы со скакалкой во время акробатического движения трудности A.
  c. Ловля скакалки после броска, если во время полёта ничего не выполнено.
  d. Иные сочетания, имеющие техническую ценность трудности A.

2. Трудность B
Следующие элементы засчитываются как трудность B при сочетании с элементом без предмета трудности B.
  a. Когда ритмическая связь скакалки и движения тела сложно выстроена.
    i. Два (и более) движения скакалки за время одного элемента без предмета трудности B. (Например: два оборота скакалки за один прыжок трудности B, с горизонтальными кругами попеременно над головой и под ногами.)
    ii. Элементы, требующие полной одновременности движения скакалки и движения тела. (Например: после броска в момент ловли перепрыгнуть через скакалку.)
  b. Когда смена характера движения затрудняет работу со скакалкой.
    i. Переход от широких движений скакалки к медленным. (Например: бросить скакалку в прыжке, поймать, не нарушив её траектории, и сразу перейти к медленным движениям скакалкой.)
  c. Когда работа затруднена из-за длины скакалки.
    i. Сначала бросить один конец скакалки, затем другой, дать ей сделать один оборот и поймать. Несколько раз без перерыва обвить развёрнутую скакалку вокруг тела снизу от щиколоток вверх или наоборот.
  d. Когда трудно поймать скакалку.
    i. Поворот или вращение во время полёта скакалки с последующей ловлей. (Например: поймать скакалку после одного кувырка вперёд — разные способы броска и разные вращения во время полёта с последующей ловлей.)
    ii. Бросок и ловля скакалки вне поля зрения. (Например: бросить скакалку разными способами и поймать вне поля зрения.)

3. Трудность C
Следующие элементы засчитываются как трудность C при сочетании с акробатическими элементами.
  a. Акробатическое движение трудности B, выполненное во время полёта скакалки.
  b. Два приёма работы со скакалкой во время акробатического движения трудности B.
  c. Акробатическое движение трудности C.
  d. Сочетание двух элементов без предмета или акробатических элементов во время полёта скакалки.
  e. Иные сочетания с высокой технической ценностью трудности C.

4. Трудность D
Следующие элементы засчитываются как трудность D при сочетании с акробатическими элементами.
  a. Акробатическое движение трудности C, выполненное во время полёта скакалки.
  b. Два и более приёма работы со скакалкой во время акробатического движения трудности C.
  c. Акробатическое движение трудности D.
  d. Сочетание трёх и более элементов без предмета или акробатических элементов во время полёта скакалки.
  e. Иные сочетания с высокой технической ценностью трудности D.`,
              hi: `रस्सी के विशिष्ट तत्व सामान्यतः तब B कठिनाई गिने जाते हैं जब वे बिना उपकरण की B कठिनाई के तत्वों के साथ संयुक्त हों, और तब C कठिनाई गिने जाते हैं जब वे बिना उपकरण की C कठिनाई के तत्वों के साथ संयुक्त करके किए जाएँ।

1. A कठिनाई
निम्नलिखित तत्व, बिना उपकरण के या टम्बलिंग के तत्वों के साथ संयुक्त करके किए जाने पर, A कठिनाई गिने जाते हैं।
  a. रस्सी को पकड़े हुए A कठिनाई की टम्बलिंग गति करने पर।
  b. A कठिनाई की टम्बलिंग गति करते समय रस्सी का 1 बार संचालन करने पर।
  c. रस्सी हवा में रहने के दौरान कुछ भी किए बिना रस्सी को लपकने पर।
  d. अन्य, A कठिनाई के समान संयोजन का तकनीकी मूल्य होने पर।

2. B कठिनाई
निम्नलिखित तत्व, बिना उपकरण की B कठिनाई के तत्वों के साथ संयुक्त होने पर B कठिनाई गिने जाते हैं।
  a. जब रस्सी और शरीर की गति के बीच का लयबद्ध संबंध जटिल रूप से बनाया गया हो।
    ⅰ. बिना उपकरण की 1 B कठिनाई करते समय रस्सी की 2 (या उससे अधिक) गतियाँ करना। (उदाहरण: रस्सी को 2 चक्कर घुमाकर B कठिनाई की छलांग करना, एक ही छलांग के दौरान रस्सी से सिर के ऊपर और पैरों के नीचे बारी-बारी से क्षैतिज वृत्त बनाना।)
    ⅱ. ऐसे तत्व जिनमें रस्सी की गति और शरीर की गति के बीच पूर्ण समकालिकता आवश्यक हो। (उदाहरण: फेंक के बाद, लपकने के साथ ही रस्सी के ऊपर से छलांग लगाना।)
  b. जब गति के परिवर्तन से रस्सी का संचालन कठिन हो जाए।
    ⅰ. रस्सी की बड़ी गति से धीमी गति में जाना। (उदाहरण: छलांग लगाते हुए रस्सी फेंकना, रस्सी के पथ में बाधा डाले बिना उसे लपकना और तुरंत धीमी रस्सी की गति से जोड़ना।)
  c. जब रस्सी की लंबाई के कारण संचालन कठिन हो।
    ⅰ. पहले रस्सी का एक सिरा फेंकना, फिर दूसरा सिरा फेंककर उसे 1 चक्कर घुमाकर लपकना। खुली रस्सी को टखनों से ऊपर की ओर, या उसकी विपरीत दिशा में, बिना रुके कई बार शरीर के चारों ओर लपेटना।
  d. जब रस्सी को लपकना कठिन हो।
    ⅰ. रस्सी हवा में रहने के दौरान घूमकर उसे लपकना। (उदाहरण: 1 बार आगे की कलाबाज़ी करने के बाद रस्सी को लपकना आदि, विभिन्न तरीकों से रस्सी फेंककर, उस दौरान विभिन्न घुमाव आदि डालकर लपकना।)
    ⅱ. दृष्टि क्षेत्र के बाहर रस्सी फेंकना और लपकना। (उदाहरण: विभिन्न तरीकों से रस्सी फेंककर, दृष्टि क्षेत्र के बाहर लपकना।)

3. C कठिनाई
निम्नलिखित तत्व, टम्बलिंग के तत्वों के साथ संयुक्त होने पर C कठिनाई गिने जाते हैं।
  a. रस्सी फेंकने के दौरान B कठिनाई की टम्बलिंग गति करने पर।
  b. B कठिनाई की टम्बलिंग गति के दौरान रस्सी का 2 बार संचालन करने पर।
  c. C कठिनाई की टम्बलिंग गति करने पर।
  d. रस्सी हवा में रहने के दौरान बिना उपकरण के या टम्बलिंग के 2 तत्वों को संयुक्त करके करने पर।
  e. अन्य, C कठिनाई के समान संयोजन का तकनीकी मूल्य अधिक होने पर।

4. D कठिनाई
निम्नलिखित तत्व, टम्बलिंग के तत्वों के साथ संयुक्त होने पर D कठिनाई गिने जाते हैं।
  a. रस्सी हवा में रहने के दौरान C कठिनाई की टम्बलिंग गति करने पर।
  b. C कठिनाई की टम्बलिंग गति करते समय रस्सी का 2 या अधिक बार संचालन करने पर।
  c. D कठिनाई की टम्बलिंग गति करने पर।
  d. रस्सी हवा में रहने के दौरान 3 या अधिक बिना उपकरण के या टम्बलिंग के तत्वों को संयुक्त करके करने पर।
  e. अन्य, D कठिनाई के समान संयोजन का तकनीकी मूल्य अधिक होने पर।`,
            },
          },
        ],
      },
      {
        title: {
          ja: 'クラブ（棍）の演技',
          en: 'Club Routines',
          zh: '棍棒的成套动作',
          ko: '곤봉(클럽)의 연기',
          es: 'Ejercicios de mazas',
          fr: 'Exercices aux massues',
          ru: 'Упражнение с булавами',
          hi: 'क्लब (मुग्दर) का प्रदर्शन',
        },
        block: [
          {
            title: { ja: '', en: '', zh: '', ko: '', es: '', fr: '', ru: '', hi: '' },
            element: {
              ja: `1. 素材
木製または合成素材。

2. 重量
１本につき最低200グラム。

3. 形状
瓶の形に似たもので頭・首・胴の３つの部分からなる。長さは40cm〜50cmとし先端の頭（球体）は最大直径４cm以内、首の直径は1.5cm〜3.5cm、胴は直径６cm〜９cm、長さは12cm〜18cmとする。また、全体あるいは一部にテープを巻いてもよい。

4. 色彩
自由。各クラブ（棍）の色を変えてもよい。`,
              en: `1. Material
Wood or synthetic material.

2. Weight
At least 200 g each.

3. Shape
Similar in shape to a bottle, with three parts: head, neck and body. Length 40 cm to 50 cm. The head (ball) at the end has a maximum diameter of 4 cm, the neck a diameter of 1.5 cm to 3.5 cm, and the body a diameter of 6 cm to 9 cm and a length of 12 cm to 18 cm. The clubs may be wholly or partly wrapped with tape.

4. Color
Free. The two clubs may be different colors.`,
              zh: `1. 材质
木制或合成材料。

2. 重量
每根最低200克。

3. 形状
形似瓶子，由头、颈、体３个部分组成。长度为40cm—50cm，顶端的头（球体）最大直径在４cm以内，颈的直径为1.5cm—3.5cm，体的直径为６cm—９cm、长度为12cm—18cm。此外，也可以在整体或局部缠绕胶带。

4. 颜色
自由。各棍棒的颜色可以不同。`,
              ko: `1. 소재
목제 또는 합성 소재.

2. 중량
1개당 최저 200그램.

3. 형상
병 모양과 비슷한 것으로 머리·목·몸통의 3개 부분으로 이루어진다. 길이는 40cm~50cm로 하고 끝의 머리(구체)는 최대 지름 4cm 이내, 목의 지름은 1.5cm~3.5cm, 몸통은 지름 6cm~9cm, 길이는 12cm~18cm로 한다. 또한 전체 또는 일부에 테이프를 감아도 된다.

4. 색채
자유. 각 곤봉(클럽)의 색을 달리해도 된다.`,
              es: `1. Material
Madera o material sintético.

2. Peso
Mínimo 200 gramos cada una.

3. Forma
De forma parecida a una botella, compuesta por tres partes: cabeza, cuello y cuerpo. La longitud será de 40cm–50cm; la cabeza (esfera) del extremo tendrá un diámetro máximo de 4cm, el cuello un diámetro de 1.5cm–3.5cm, y el cuerpo un diámetro de 6cm–9cm y una longitud de 12cm–18cm. También se puede envolver con cinta toda la maza o una parte de ella.

4. Color
Libre. Cada maza puede ser de un color distinto.`,
              fr: `1. Matériau
Bois ou matériau synthétique.

2. Poids
Au moins 200 g par massue.

3. Forme
De forme proche d'une bouteille, en trois parties : la tête, le col et le corps. Longueur de 40 cm à 50 cm. La tête (sphère) à l'extrémité a un diamètre maximal de 4 cm, le col un diamètre de 1,5 cm à 3,5 cm, et le corps un diamètre de 6 cm à 9 cm pour une longueur de 12 cm à 18 cm. Les massues peuvent être entourées de ruban adhésif, en totalité ou en partie.

4. Couleur
Libre. Les deux massues peuvent être de couleurs différentes.`,
              ru: `1. Материал
Дерево или синтетический материал.

2. Вес
Не менее 200 граммов каждая.

3. Форма
Похожа на бутылку и состоит из трёх частей: головки, шейки и корпуса. Длина от 40 до 50 см. Головка (шарик) на конце имеет диаметр не более 4 см, шейка — от 1,5 до 3,5 см, корпус — от 6 до 9 см в диаметре при длине от 12 до 18 см. Булавы можно целиком или частично обмотать лентой.

4. Цвет
Свободный. Булавы могут быть разного цвета.`,
              hi: `1. सामग्री
लकड़ी या सिंथेटिक सामग्री।

2. वज़न
प्रत्येक का कम से कम 200 ग्राम।

3. आकार
बोतल के आकार से मिलता-जुलता, जो सिर, गर्दन और धड़ इन 3 भागों से बना हो। लंबाई 40cm–50cm हो, सिरे का सिर (गोला) अधिकतम व्यास 4cm के भीतर, गर्दन का व्यास 1.5cm–3.5cm, धड़ का व्यास 6cm–9cm और लंबाई 12cm–18cm हो। साथ ही, पूरे या कुछ हिस्से पर टेप लपेटा जा सकता है।

4. रंग
स्वतंत्र। प्रत्येक क्लब (मुग्दर) का रंग अलग हो सकता है।`,
            },
          },
          {
            title: {
              ja: 'クラブ（棍）の技術',
              en: 'Club Technique',
              zh: '棍棒的技术',
              ko: '곤봉(클럽)의 기술',
              es: 'Técnica de las mazas',
              fr: 'Technique des massues',
              ru: 'Техника работы с булавами',
              hi: 'क्लब (मुग्दर) की तकनीक',
            },
            element: {
              ja: `【各要素群】
1. 基礎要素群
  a. プロペラ回旋（風車）
  b. ころがし
  c. 投げ
  d. クラブを用いた転回系

2. その他の要素群
  a. 振り
  b. 回旋
  c. 左右別々の動き
  d. 小円

以上の諸要素は、以下のことを考慮に入れて実施することができる。
  a. ２本のクラブを同時に操作する。連続して操作する。
  b. さまざまな方向で行う。
  c. 移動をする場合、しない場合。片足または両足支持。

【クラブの操作】
  クラブの動きは、面を変更するような場合でも止めてはならず、クラブ自体の重さから来る惰力を利用して動かされなければならない。クラブの小円、プロペラ回旋、および振りを実施する間は、クラブは手首の動きによって動かされる。その他の動きの間は、クラブは腕の延長のように扱われなければならない。また、首を長い時間持って演技してはならない。

【クラブの持ち方】
  大きな広がりを持つ動き（例えば、振り・プロペラ回旋など）の間には、通常、クラブの頭の部分を指で軽く握るようにしなければならない。プロペラ回旋、小円、クラブの握りなどの間には、クラブの頭の部分が手のくぼみの中で自由に回るように、指で軽く握るようにしなければならない。また、クラブの首の部分や太い部分を持ったり、広げた手の上にのせたりすることも、一時的には可能である。`,
              en: `[Element groups]
1. Basic element groups
  a. Propeller rotations (mills)
  b. Rolls
  c. Throws
  d. Tumbling with the clubs

2. Other element groups
  a. Swings
  b. Circles
  c. Asymmetric movements
  d. Small circles

These elements can be performed taking the following into account.
  a. Handling both clubs at the same time, or one after the other.
  b. In various directions.
  c. With or without traveling, on one foot or both feet.

[Handling the clubs]
  The clubs must not stop moving, even when changing planes, and must move using the momentum that comes from their own weight. During small circles, propeller rotations and swings, the clubs are moved by the wrists. During other movements, the clubs must be handled like an extension of the arm. The routine must not be performed holding the clubs by the neck for a long time.

[Holding the clubs]
  During wide movements (e.g. swings and propeller rotations), the club is usually held lightly with the fingers at the head. During propeller rotations, small circles and similar movements, the club must be held lightly with the fingers so that the head turns freely in the hollow of the hand. The club may also be held briefly by the neck or the body, or rest on the open hand.`,
              zh: `【各要素组】
1. 基础要素组
  a. 螺旋绕环（风车）
  b. 滚动
  c. 抛掷
  d. 使用棍棒的翻腾类

2. 其他要素组
  a. 摆动
  b. 绕环
  c. 左右不同的动作
  d. 小绕环

以上各要素，可以在考虑以下各点的基础上进行。
  a. 同时操作２根棍棒。连续操作。
  b. 在各种方向进行。
  c. 移动或不移动。单脚或双脚支撑。

【棍棒的操作】
  棍棒的运动即使在变换平面时也不得停止，必须利用棍棒自身重量产生的惯性来运动。做棍棒的小绕环、螺旋绕环和摆动期间，棍棒由手腕的动作带动。在其他动作期间，棍棒必须被当作手臂的延长来处理。此外，不得长时间握持颈部完成成套动作。

【棍棒的握法】
  在幅度较大的动作（例如摆动、螺旋绕环等）过程中，通常必须用手指轻握棍棒的头部。在螺旋绕环、小绕环、握棍等过程中，必须用手指轻握，使棍棒的头部能在手心的凹处自由转动。此外，也可以暂时握住棍棒的颈部或较粗的部分，或将其放在摊开的手上。`,
              ko: `【각 요소군】
1. 기초 요소군
  a. 프로펠러 회전(풍차)
  b. 굴리기
  c. 던지기
  d. 곤봉을 사용한 공중돌기 계열

2. 그 밖의 요소군
  a. 흔들기
  b. 회전
  c. 좌우 따로따로의 움직임
  d. 작은 원

이상의 제반 요소는 다음 사항을 고려하여 실시할 수 있다.
  a. 2개의 곤봉을 동시에 조작한다. 연속해서 조작한다.
  b. 다양한 방향으로 실시한다.
  c. 이동하는 경우와 하지 않는 경우. 한 발 또는 두 발 지지.

【곤봉의 조작】
  곤봉의 움직임은 면을 변경하는 경우에도 멈추어서는 안 되며, 곤봉 자체의 무게에서 오는 관성을 이용하여 움직여야 한다. 곤봉의 작은 원, 프로펠러 회전 및 흔들기를 실시하는 동안에는 곤봉은 손목의 움직임에 의해 움직여진다. 그 밖의 움직임 동안에는 곤봉은 팔의 연장처럼 다루어져야 한다. 또한 목 부분을 오랜 시간 잡고 연기해서는 안 된다.

【곤봉을 잡는 법】
  크게 펼쳐지는 움직임(예를 들어 흔들기, 프로펠러 회전 등) 중에는 통상 곤봉의 머리 부분을 손가락으로 가볍게 쥐어야 한다. 프로펠러 회전, 작은 원, 곤봉 쥐기 등의 동안에는 곤봉의 머리 부분이 손바닥 오목한 곳 안에서 자유롭게 돌도록 손가락으로 가볍게 쥐어야 한다. 또한 곤봉의 목 부분이나 굵은 부분을 잡거나 편 손 위에 올려놓는 것도 일시적으로는 가능하다.`,
              es: `[Grupos de elementos]
1. Grupos de elementos básicos
  a. Molinetes (hélices)
  b. Rodamientos
  c. Lanzamientos
  d. Elementos de tumbling con las mazas

2. Otros grupos de elementos
  a. Balanceos
  b. Círculos
  c. Movimientos asimétricos
  d. Círculos pequeños

Los elementos anteriores se pueden ejecutar teniendo en cuenta lo siguiente.
  a. Manejar las dos mazas a la vez. Manejarlas de forma sucesiva.
  b. En diferentes direcciones.
  c. Con desplazamiento o sin él. Con apoyo sobre un pie o sobre los dos.

[Manejo de las mazas]
  Las mazas no deben detener su movimiento, ni siquiera al cambiar de plano, y se deben mover aprovechando la inercia que les da su propio peso. Mientras se ejecutan círculos pequeños, molinetes y balanceos, las mazas se mueven con el movimiento de la muñeca. Durante los demás movimientos, las mazas se deben manejar como una prolongación del brazo. Además, no se debe ejecutar el ejercicio sujetando las mazas por el cuello durante mucho tiempo.

[Forma de sujetar las mazas]
  Durante los movimientos de gran amplitud (por ejemplo, balanceos o molinetes), la maza se debe sujetar normalmente con los dedos, sin apretar, por la cabeza. Durante los molinetes, los círculos pequeños y la sujeción de la maza, entre otros, esta se debe sujetar con los dedos sin apretar, de modo que la cabeza gire libremente en el hueco de la mano. También es posible sujetar momentáneamente la maza por el cuello o por la parte gruesa, o apoyarla sobre la mano abierta.`,
              fr: `[Groupes d'éléments]
1. Groupes d'éléments de base
  a. Rotations en hélice (moulins)
  b. Roulés
  c. Lancers
  d. Tumbling avec les massues

2. Autres groupes d'éléments
  a. Balancers
  b. Cercles
  c. Mouvements dissociés des deux côtés
  d. Petits cercles

Ces éléments peuvent être exécutés en tenant compte des points suivants.
  a. Manier les deux massues simultanément ou l'une après l'autre.
  b. Dans différentes directions.
  c. Avec ou sans déplacement, en appui sur un pied ou sur les deux.

[Maniement des massues]
  Les massues ne doivent jamais cesser de bouger, même lors d'un changement de plan, et doivent se déplacer grâce à l'élan que leur donne leur propre poids. Pendant les petits cercles, les rotations en hélice et les balancers, les massues sont mues par les poignets. Pendant les autres mouvements, elles doivent être maniées comme un prolongement du bras. L'exercice ne doit pas être présenté en tenant longtemps les massues par le col.

[Prise des massues]
  Pendant les mouvements de grande amplitude (balancers, rotations en hélice, etc.), la massue se tient en principe légèrement entre les doigts, par la tête. Pendant les rotations en hélice, les petits cercles et les mouvements analogues, elle doit être tenue légèrement entre les doigts de sorte que la tête tourne librement au creux de la main. La massue peut aussi être tenue brièvement par le col ou par le corps, ou reposer sur la main ouverte.`,
              ru: `[Группы элементов]
1. Базовые группы элементов
  a. вращения «пропеллер» (мельница)
  b. прокаты
  c. броски
  d. акробатика с булавами

2. Прочие группы элементов
  a. махи
  b. круги
  c. асимметричные движения
  d. малые круги

Перечисленные элементы можно выполнять с учётом следующего.
  a. работать двумя булавами одновременно или друг за другом;
  b. в разных направлениях;
  c. с перемещением и без него, с опорой на одну или на две ноги.

[Работа с булавами]
  Движение булав нельзя останавливать даже при смене плоскости: оно должно идти за счёт инерции собственного веса булав. При малых кругах, вращениях «пропеллер» и махах булавы ведутся движением кисти. При остальных движениях булаву следует вести как продолжение руки. Кроме того, нельзя долго выполнять упражнение, держа булаву за шейку.

[Хват булав]
  Во время широких движений (например, махов и вращений «пропеллер») булаву обычно держат, слегка обхватив пальцами головку. При вращениях «пропеллер», малых кругах и подобных приёмах булаву нужно держать пальцами легко, чтобы головка свободно вращалась в ладони. Ненадолго булаву можно держать и за шейку или за корпус либо класть на раскрытую ладонь.`,
              hi: `[तत्व वर्ग]
1. बुनियादी तत्व वर्ग
  a. प्रोपेलर घुमाव (पवनचक्की)
  b. लुढ़काव
  c. फेंक
  d. क्लब के साथ टम्बलिंग

2. अन्य तत्व वर्ग
  a. झुलाव
  b. चक्र
  c. बाएँ और दाएँ की अलग-अलग गतियाँ
  d. छोटे वृत्त

उपर्युक्त तत्वों को निम्नलिखित बातों को ध्यान में रखते हुए किया जा सकता है।
  a. दोनों क्लबों का एक साथ संचालन करना। लगातार क्रम में संचालन करना।
  b. विभिन्न दिशाओं में करना।
  c. स्थान परिवर्तन के साथ या बिना। एक पैर या दोनों पैरों पर सहारा।

[क्लब का संचालन]
  क्लब की गति को तल बदलते समय भी रोका नहीं जाना चाहिए, और उसे क्लब के अपने वज़न से मिलने वाली जड़ता का उपयोग करते हुए चलाया जाना चाहिए। क्लब के छोटे वृत्त, प्रोपेलर घुमाव और झुलाव करते समय क्लब कलाई की गति से चलाया जाता है। अन्य गतियों के दौरान क्लब को बाजू के विस्तार की तरह संभालना चाहिए। साथ ही, लंबे समय तक गर्दन को पकड़कर प्रदर्शन नहीं करना चाहिए।

[क्लब की पकड़]
  बड़े विस्तार वाली गतियों के दौरान (उदाहरण के लिए झुलाव, प्रोपेलर घुमाव आदि) सामान्यतः क्लब के सिर के हिस्से को उंगलियों से हल्के से पकड़ना चाहिए। प्रोपेलर घुमाव, छोटे वृत्त, क्लब की पकड़ आदि के दौरान, क्लब का सिर हथेली के गड्ढे में स्वतंत्र रूप से घूम सके, इसके लिए उंगलियों से हल्के से पकड़ना चाहिए। साथ ही, क्लब के गर्दन वाले हिस्से या मोटे हिस्से को पकड़ना, या खुली हथेली पर रखना भी कुछ समय के लिए संभव है।`,
            },
          },
          {
            title: {
              ja: '構成に要求されるもの',
              en: 'Requirements for the Composition',
              zh: '编排的要求',
              ko: '구성에 요구되는 것',
              es: 'Requisitos de la composición',
              fr: 'Exigences de la composition',
              ru: 'Требования к композиции',
              hi: 'संरचना के लिए आवश्यकताएँ',
            },
            element: {
              ja: `1. プロペラ回旋（風車）
プロペラ回旋は２回転以上を２回以上入れなければならない。

2. ころがし
ころがしは１回以上、長さは50cm以上を入れなければならない。

3. 投げ
  a. 投げの条件
    ⅰ. ３回以上の投げを入れなければならない。
    ⅱ. 同時投げを１回以上入れなければならない。
    ⅲ. ２つ同時投げは片手または両手または足で投げること。受けは自由。

  b. 投げの高さ
    ⅰ. 投げの高さは、競技者が投げたところから最低２m以上の高さとする。

4. 転回系の要素
  a. 前方・後方・側方系の転回系を入れなければならない。
  b. 転回系を実施しているときに、クラブが生かされなければならない。

5. 諸要素
  a. 徒手の要素と組み合わされた、各種の異なった方向および面でのプロペラ回旋。
  b. さまざまな種類の投げ（１本投げ、２本同時投げ、２本連続投げ）。
  c. さまざまな回旋（小、中、大）（それぞれ手首、前腕、腕を使って行う）。
  d. 左右別々の動き。
  e. 多彩な持ち方。
  f. さまざまなころがし。

※　クラブ１本のみ投げる場合には、他のクラブも必ず動いていなければならない。演技全体を通じて２本のクラブが常に身体と調和を保って動いているということが、クラブの演技には不可欠である。`,
              en: `1. Propeller rotations (mills)
At least two propeller rotations of at least two turns must be included.

2. Rolls
At least one roll of at least 50 cm must be included.

3. Throws
  a. Requirements for throws
    i. At least three throws must be included.
    ii. At least one simultaneous throw must be included.
    iii. A simultaneous throw of both clubs must be made with one hand, both hands or the feet. The catch is free.

  b. Height of throws
    i. A throw must rise at least 2 m from the point of release.

4. Tumbling elements
  a. Forward, backward and sideways tumbling must be included.
  b. The clubs must be used actively during tumbling.

5. Elements
  a. Propeller rotations in various directions and planes, combined with free-hand elements.
  b. Various kinds of throws (one club, both clubs at the same time, both clubs one after the other).
  c. Various circles (small, medium and large, using the wrist, forearm and arm respectively).
  d. Asymmetric movements.
  e. A variety of grips.
  f. Various rolls.

* When only one club is thrown, the other club must also be moving. Throughout the routine, it is essential that both clubs always move in harmony with the body.`,
              zh: `1. 螺旋绕环（风车）
必须编入２次以上旋转２周以上的螺旋绕环。

2. 滚动
必须编入１次以上、长度50cm以上的滚动。

3. 抛掷
  a. 抛掷的条件
    ⅰ. 必须编入３次以上的抛掷。
    ⅱ. 必须编入１次以上的同时抛。
    ⅲ. ２个同时抛必须用单手、双手或脚抛出。接的方式自由。

  b. 抛掷的高度
    ⅰ. 抛掷的高度，从参赛者抛出的位置算起至少要达到２m 以上。

4. 翻腾类要素
  a. 必须编入前方、后方、侧方的翻腾。
  b. 做翻腾时，必须有效地运用棍棒。

5. 各要素
  a. 与徒手要素相结合的、各种不同方向和平面的螺旋绕环。
  b. 各种各样的抛掷（单根抛、２根同时抛、２根连续抛）。
  c. 各种绕环（小、中、大）（分别用手腕、前臂、手臂进行）。
  d. 左右不同的动作。
  e. 多种多样的握法。
  f. 各种各样的滚动。

※　只抛出１根棍棒时，另一根棍棒也必须在运动。贯穿整套动作，２根棍棒始终与身体保持协调地运动，这对棍棒的成套动作来说是不可或缺的。`,
              ko: `1. 프로펠러 회전(풍차)
프로펠러 회전은 2회전 이상을 2회 이상 넣어야 한다.

2. 굴리기
굴리기는 1회 이상, 길이는 50cm 이상을 넣어야 한다.

3. 던지기
  a. 던지기의 조건
    ⅰ. 3회 이상의 던지기를 넣어야 한다.
    ⅱ. 동시 던지기를 1회 이상 넣어야 한다.
    ⅲ. 2개 동시 던지기는 한 손 또는 두 손 또는 발로 던질 것. 받기는 자유.

  b. 던지기의 높이
    ⅰ. 던지기의 높이는 경기자가 던진 지점에서 최저 2m 이상의 높이로 한다.

4. 공중돌기 계열의 요소
  a. 전방·후방·측방 계열의 공중돌기를 넣어야 한다.
  b. 공중돌기를 실시하고 있을 때 곤봉이 살려져야 한다.

5. 제반 요소
  a. 신체 요소와 조합된, 각종 다른 방향 및 면에서의 프로펠러 회전.
  b. 다양한 종류의 던지기(1개 던지기, 2개 동시 던지기, 2개 연속 던지기).
  c. 다양한 회전(소, 중, 대)(각각 손목, 팔뚝, 팔을 사용하여 실시한다).
  d. 좌우 따로따로의 움직임.
  e. 다채로운 잡는 법.
  f. 다양한 굴리기.

※ 곤봉 1개만 던지는 경우에는 다른 곤봉도 반드시 움직이고 있어야 한다. 연기 전체를 통하여 2개의 곤봉이 항상 신체와 조화를 유지하며 움직이고 있다는 것이 곤봉 연기에는 불가결하다.`,
              es: `1. Molinetes (hélices)
Se deben incluir dos molinetes o más, de dos vueltas o más cada uno.

2. Rodamientos
Se debe incluir un rodamiento o más, de 50cm o más de longitud.

3. Lanzamientos
  a. Condiciones de los lanzamientos
    ⅰ. Se deben incluir tres lanzamientos o más.
    ⅱ. Se debe incluir un lanzamiento simultáneo o más.
    ⅲ. El lanzamiento simultáneo de las dos mazas se hará con una mano, con las dos manos o con los pies. La recogida es libre.

  b. Altura de los lanzamientos
    ⅰ. La altura del lanzamiento será como mínimo de 2m por encima del punto desde el que lanza el gimnasta.

4. Elementos de tumbling
  a. Se deben incluir elementos de tumbling hacia delante, hacia atrás y laterales.
  b. Las mazas se deben aprovechar mientras se ejecutan los elementos de tumbling.

5. Elementos
  a. Molinetes en diferentes direcciones y planos, combinados con elementos de manos libres.
  b. Lanzamientos de distintos tipos (lanzamiento de una maza, lanzamiento simultáneo de las dos, lanzamiento sucesivo de las dos).
  c. Círculos diversos (pequeños, medianos y grandes), realizados con la muñeca, el antebrazo y el brazo respectivamente.
  d. Movimientos asimétricos.
  e. Formas variadas de sujeción.
  f. Rodamientos variados.

* Cuando se lanza una sola maza, la otra maza también debe estar en movimiento. A lo largo de todo el ejercicio es imprescindible que las dos mazas se muevan siempre en armonía con el cuerpo.`,
              fr: `1. Rotations en hélice (moulins)
Au moins deux rotations en hélice d'au moins deux tours doivent figurer dans l'exercice.

2. Roulés
Au moins un roulé d'au moins 50 cm doit figurer dans l'exercice.

3. Lancers
  a. Conditions des lancers
    i. Au moins trois lancers doivent figurer dans l'exercice.
    ii. Au moins un lancer simultané doit y figurer.
    iii. Le lancer simultané des deux massues se fait d'une main, des deux mains ou des pieds. Le rattrapé est libre.

  b. Hauteur des lancers
    i. Le lancer doit s'élever d'au moins 2 m au-dessus du point de lâcher.

4. Éléments de tumbling
  a. Du tumbling avant, arrière et latéral doit figurer dans l'exercice.
  b. Les massues doivent être mises en valeur pendant le tumbling.

5. Éléments
  a. Rotations en hélice dans diverses directions et divers plans, combinées à des éléments corporels.
  b. Lancers de types variés (une massue, les deux massues simultanément, les deux massues l'une après l'autre).
  c. Cercles variés (petits, moyens, grands), réalisés respectivement avec le poignet, l'avant-bras et le bras.
  d. Mouvements dissociés des deux côtés.
  e. Prises variées.
  f. Roulés variés.

* Lorsqu'une seule massue est lancée, l'autre doit elle aussi être en mouvement. Il est essentiel, dans un exercice aux massues, que les deux massues restent en permanence en harmonie de mouvement avec le corps, du début à la fin.`,
              ru: `1. Вращения «пропеллер» (мельница)
Необходимо включить не менее двух вращений «пропеллер» не менее чем в два оборота.

2. Прокаты
Необходимо включить не менее одного проката длиной не менее 50 см.

3. Броски
  a. Требования к броскам
    i. Необходимо включить не менее трёх бросков.
    ii. Необходимо включить не менее одного одновременного броска.
    iii. Одновременный бросок двух булав выполняется одной рукой, двумя руками или ногами. Ловля свободная.

  b. Высота броска
    i. Булава должна подниматься не менее чем на 2 м от точки выпуска.

4. Акробатические элементы
  a. Необходимо включить акробатику вперёд, назад и в сторону.
  b. Во время акробатики булавы должны быть задействованы.

5. Элементы
  a. Вращения «пропеллер» в разных направлениях и плоскостях в сочетании с элементами без предмета.
  b. Разные виды бросков (одной булавы, двух булав одновременно, двух булав друг за другом).
  c. Разные круги (малые, средние, большие — соответственно кистью, предплечьем и всей рукой).
  d. Асимметричные движения.
  e. Разнообразные хваты.
  f. Разные прокаты.

※ Если бросается только одна булава, вторая тоже обязательно должна двигаться. Для упражнения с булавами необходимо, чтобы на всём его протяжении обе булавы двигались в согласии с телом.`,
              hi: `1. प्रोपेलर घुमाव (पवनचक्की)
2 या अधिक चक्करों वाला प्रोपेलर घुमाव 2 या अधिक बार डालना आवश्यक है।

2. लुढ़काव
लुढ़काव कम से कम 1 बार, और लंबाई 50cm या अधिक का डालना आवश्यक है।

3. फेंक
  a. फेंक की शर्तें
    ⅰ. 3 या अधिक फेंक डालने आवश्यक हैं।
    ⅱ. एक साथ फेंकना 1 या अधिक बार डालना आवश्यक है।
    ⅲ. दोनों को एक साथ फेंकना एक हाथ से या दोनों हाथों से या पैर से किया जाए। लपकना स्वतंत्र है।

  b. फेंक की ऊँचाई
    ⅰ. फेंक की ऊँचाई, जिम्नास्ट के फेंकने के स्थान से कम से कम 2m या अधिक होनी चाहिए।

4. टम्बलिंग तत्व
  a. आगे, पीछे और बगल की टम्बलिंग डालना आवश्यक है।
  b. टम्बलिंग करते समय क्लब का सक्रिय उपयोग होना चाहिए।

5. तत्व
  a. बिना उपकरण के तत्वों के साथ संयुक्त, विभिन्न अलग-अलग दिशाओं और तलों में प्रोपेलर घुमाव।
  b. विभिन्न प्रकार के फेंक (एक क्लब का फेंक, दोनों क्लबों का एक साथ फेंक, दोनों क्लबों का लगातार फेंक)।
  c. विभिन्न चक्र (छोटे, मध्यम, बड़े) (क्रमशः कलाई, अग्रबाहु और बाजू का उपयोग करके किए जाते हैं)।
  d. बाएँ और दाएँ की अलग-अलग गतियाँ।
  e. विविध पकड़।
  f. विभिन्न लुढ़काव।

※ केवल एक क्लब फेंकने की स्थिति में दूसरे क्लब का भी गतिमान होना अनिवार्य है। पूरे प्रदर्शन के दौरान दोनों क्लबों का हमेशा शरीर के साथ तालमेल बनाए रखते हुए चलते रहना, क्लब के प्रदर्शन के लिए अनिवार्य है।`,
            },
          },
          {
            title: {
              ja: '難度レベルを判断するための一般的目安',
              en: 'General Guidelines for Judging the Level of Difficulty',
              zh: '判断难度级别的一般标准',
              ko: '난도 수준을 판단하기 위한 일반적 기준',
              es: 'Pautas generales para valorar el nivel de dificultad',
              fr: 'Repères généraux pour apprécier le niveau de difficulté',
              ru: 'Общие ориентиры для определения уровня трудности',
              hi: 'कठिनाई स्तर तय करने के लिए सामान्य दिशानिर्देश',
            },
            element: {
              ja: `クラブに特徴的な諸要素は、通常それが徒手のＢ難度の要素と組み合わされた場合はＢ難度、徒手のＣ難度と組み合わされて実施された場合はＣ難度として数える。
1. A難度
以下の要素は、徒手系や転回系の要素と組み合わせて実施した場合、Ａ難度として数える。
  a. クラブを保持したまま、Ａ難度の転回運動を実施した場合。
  b. Ａ難度の転回運動を実施している間に、クラブを１回操作した場合。ただし、クラブのころがしは除く。
  c. クラブを投げ上げている間に、何も実施せずクラブを受けた場合。
  d. その他、Ａ難度としての組み合わせの技術価値の場合。

2. B難度
以下のクラブの要素は、徒手のＢ難度の要素と組み合わせられた場合Ｂ難度として数える。
  a. クラブのコントロールが難しい場合。
    ⅰ. ２本のクラブを同時に投げる。（例：徒手のＢ難度と組み合わせて２本のクラブを同時に投げて受け取る。または２本のクラブを２m以上投げて受け取る。）
  b. 動きを調和させるのが難しい場合。
    ⅰ. 異なる要素を同時に実施する。（例：それぞれのクラブで異なる要素を同時に行う。）
    ⅱ. 同じ要素をずらして行う。（例：徒手のＢ難度の要素と組み合わせて、プロペラ回旋を行う。）
  c. クラブの投げ受けが難しい場合。
    ⅰ. 視野外でクラブの投げ受けを行う。（例：さまざまな投げ方でクラブを投げ、視界の外で受け取る。）
    ⅱ. クラブを投げ上げている間に回転をしてから受け取る。（例：１回前転をしてからクラブを受け取るなど、さまざまな投げ方でクラブを投げ、その投げている間にさまざまな回転などを入れて受け取る。）

3. C難度
以下の要素は、転回系の要素と組み合わせた場合Ｃ難度として数える。
  a. クラブを投げている間に、Ｂ難度の転回運動を実施した場合。
  b. Ｂ難度の転回運動の間に、クラブを２回操作した場合。
  c. Ｃ難度の転回運動を行った場合。
  d. クラブを投げ上げている間に、２つの徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｃ難度としての組み合わせ技術価値の高い場合。

4. D難度
以下の要素は、転回系の要素と組み合わせた場合Ｄ難度として数える。
  a. クラブを投げ上げている間に、Ｃ難度の転回運動を実施した場合。
  b. Ｃ難度の転回運動を行っている間に、クラブを２回以上操作した場合。
  c. Ｄ難度の転回運動を実施した場合。
  d. クラブを投げ上げている間に、３つ以上の徒手系や転回系を組み合わせて実施した場合。
  e. その他、Ｄ難度としての組み合わせの技術価値の高い場合。`,
              en: `Elements characteristic of the clubs usually count as B difficulties when combined with B difficulty free-hand elements, and as C difficulties when combined with C difficulty free-hand elements.
1. A difficulty
The following elements count as A difficulties when combined with free-hand or tumbling elements.
  a. An A difficulty tumbling movement performed while holding the clubs.
  b. One handling of the clubs during an A difficulty tumbling movement, excluding club rolls.
  c. Catching the club after a throw without performing anything during the throw.
  d. Other combinations with the technical value of an A difficulty.

2. B difficulty
The following club elements count as B difficulties when combined with B difficulty free-hand elements.
  a. When controlling the clubs is difficult.
    i. Throwing both clubs at the same time. (e.g. throwing both clubs at the same time and catching them, combined with a B difficulty free-hand element, or throwing both clubs at least 2 m and catching them.)
  b. When coordinating movements is difficult.
    i. Performing different elements at the same time. (e.g. performing a different element with each club at the same time.)
    ii. Performing the same element with a delay. (e.g. propeller rotations combined with a B difficulty free-hand element.)
  c. When throwing and catching the clubs is difficult.
    i. Throwing and catching the clubs outside the field of vision. (e.g. throwing the clubs in various ways and catching them outside the field of vision.)
    ii. Rotating while the clubs are in the air before catching them. (e.g. throwing the clubs in various ways and catching them after various rotations during the throw, such as a forward roll.)

3. C difficulty
The following elements count as C difficulties when combined with tumbling elements.
  a. A B difficulty tumbling movement performed while the club is in the air.
  b. Two handlings of the clubs during a B difficulty tumbling movement.
  c. A C difficulty tumbling movement.
  d. Two free-hand or tumbling elements combined while the club is in the air.
  e. Other combinations with the high technical value of a C difficulty.

4. D difficulty
The following elements count as D difficulties when combined with tumbling elements.
  a. A C difficulty tumbling movement performed while the club is in the air.
  b. Two or more handlings of the clubs during a C difficulty tumbling movement.
  c. A D difficulty tumbling movement.
  d. Three or more free-hand or tumbling elements combined while the club is in the air.
  e. Other combinations with the high technical value of a D difficulty.`,
              zh: `棍棒特有的各要素，通常在与徒手Ｂ难度要素相结合时计为Ｂ难度，与徒手Ｃ难度相结合完成时计为Ｃ难度。
1. A难度
以下要素与徒手类或翻腾类要素相结合完成时，计为Ａ难度。
  a. 握持棍棒完成Ａ难度翻腾动作。
  b. 在完成Ａ难度翻腾动作期间操作棍棒１次。但棍棒的滚动除外。
  c. 在棍棒抛起的过程中不做任何动作而接住棍棒。
  d. 其他具有Ａ难度组合技术价值的情况。

2. B难度
以下棍棒要素与徒手Ｂ难度要素相结合时，计为Ｂ难度。
  a. 棍棒难以控制的情况。
    ⅰ. 同时抛出２根棍棒。（例：与徒手Ｂ难度相结合，同时抛出２根棍棒并接住。或将２根棍棒抛出２m 以上并接住。）
  b. 难以协调动作的情况。
    ⅰ. 同时完成不同的要素。（例：用每根棍棒同时做不同的要素。）
    ⅱ. 错开时间完成相同的要素。（例：与徒手Ｂ难度要素相结合，做螺旋绕环。）
  c. 棍棒的抛接困难的情况。
    ⅰ. 在视野外进行棍棒的抛接。（例：用各种抛法抛出棍棒，在视野之外接住。）
    ⅱ. 在棍棒抛起的过程中转体后再接住。（例：做１次前滚翻后接住棍棒等，用各种抛法抛出棍棒，并在抛起期间加入各种转体等再接住。）

3. C难度
以下要素与翻腾类要素相结合时，计为Ｃ难度。
  a. 在棍棒抛出的过程中完成Ｂ难度翻腾动作。
  b. 在Ｂ难度翻腾动作期间操作棍棒２次。
  c. 完成Ｃ难度翻腾动作。
  d. 在棍棒抛起的过程中结合完成２个徒手类或翻腾类动作。
  e. 其他具有Ｃ难度组合高技术价值的情况。

4. D难度
以下要素与翻腾类要素相结合时，计为Ｄ难度。
  a. 在棍棒抛起的过程中完成Ｃ难度翻腾动作。
  b. 在完成Ｃ难度翻腾动作期间操作棍棒２次以上。
  c. 完成Ｄ难度翻腾动作。
  d. 在棍棒抛起的过程中结合完成３个以上徒手类或翻腾类动作。
  e. 其他具有Ｄ难度组合高技术价值的情况。`,
              ko: `곤봉에 특징적인 제반 요소는 통상 그것이 신체 B 난도의 요소와 조합된 경우에는 B 난도, 신체 C 난도와 조합되어 실시된 경우에는 C 난도로 센다.
1. A 난도
다음 요소는 신체 계열이나 공중돌기 계열의 요소와 조합하여 실시한 경우 A 난도로 센다.
  a. 곤봉을 잡은 채로 A 난도의 공중돌기 운동을 실시한 경우.
  b. A 난도의 공중돌기 운동을 실시하고 있는 동안에 곤봉을 1회 조작한 경우. 다만 곤봉의 굴리기는 제외한다.
  c. 곤봉을 던져 올리고 있는 동안에 아무것도 실시하지 않고 곤봉을 받은 경우.
  d. 그 밖에 A 난도로서의 조합의 기술 가치가 있는 경우.

2. B 난도
다음 곤봉의 요소는 신체 B 난도의 요소와 조합된 경우 B 난도로 센다.
  a. 곤봉의 컨트롤이 어려운 경우.
    ⅰ. 2개의 곤봉을 동시에 던진다.(예: 신체 B 난도와 조합하여 2개의 곤봉을 동시에 던져서 받는다. 또는 2개의 곤봉을 2m 이상 던져서 받는다.)
  b. 움직임을 조화시키기 어려운 경우.
    ⅰ. 다른 요소를 동시에 실시한다.(예: 각각의 곤봉으로 다른 요소를 동시에 실시한다.)
    ⅱ. 같은 요소를 시차를 두고 실시한다.(예: 신체 B 난도의 요소와 조합하여 프로펠러 회전을 실시한다.)
  c. 곤봉의 던지기와 받기가 어려운 경우.
    ⅰ. 시야 밖에서 곤봉의 던지기와 받기를 실시한다.(예: 다양한 던지기 방법으로 곤봉을 던져 시야 밖에서 받는다.)
    ⅱ. 곤봉을 던져 올리고 있는 동안에 회전을 한 후 받는다.(예: 앞구르기를 1회 한 후 곤봉을 받는 등, 다양한 던지기 방법으로 곤봉을 던지고 그 던지고 있는 동안에 다양한 회전 등을 넣어 받는다.)

3. C 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 C 난도로 센다.
  a. 곤봉을 던지고 있는 동안에 B 난도의 공중돌기 운동을 실시한 경우.
  b. B 난도의 공중돌기 운동 동안에 곤봉을 2회 조작한 경우.
  c. C 난도의 공중돌기 운동을 실시한 경우.
  d. 곤봉을 던져 올리고 있는 동안에 2개의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 C 난도로서의 조합 기술 가치가 높은 경우.

4. D 난도
다음 요소는 공중돌기 계열의 요소와 조합한 경우 D 난도로 센다.
  a. 곤봉을 던져 올리고 있는 동안에 C 난도의 공중돌기 운동을 실시한 경우.
  b. C 난도의 공중돌기 운동을 실시하고 있는 동안에 곤봉을 2회 이상 조작한 경우.
  c. D 난도의 공중돌기 운동을 실시한 경우.
  d. 곤봉을 던져 올리고 있는 동안에 3개 이상의 신체 계열이나 공중돌기 계열을 조합하여 실시한 경우.
  e. 그 밖에 D 난도로서의 조합의 기술 가치가 높은 경우.`,
              es: `Los elementos característicos de las mazas se cuentan normalmente como dificultad B cuando se combinan con un elemento de manos libres de dificultad B, y como dificultad C cuando se ejecutan combinados con una dificultad C de manos libres.
1. Dificultad A
Los siguientes elementos se cuentan como dificultad A cuando se ejecutan combinados con elementos de manos libres o de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad A manteniendo las mazas sujetas.
  b. Manejar la maza una vez mientras se ejecuta un movimiento de tumbling de dificultad A. No obstante, quedan excluidos los rodamientos de la maza.
  c. Recoger la maza sin ejecutar nada mientras la maza está en el aire.
  d. Otros casos con el valor técnico de una combinación de dificultad A.

2. Dificultad B
Los siguientes elementos de mazas se cuentan como dificultad B cuando se combinan con un elemento de manos libres de dificultad B.
  a. Cuando el control de las mazas es difícil.
    ⅰ. Lanzar las dos mazas a la vez. (Ejemplo: combinado con una dificultad B de manos libres, lanzar las dos mazas a la vez y recogerlas; o lanzar las dos mazas a 2m o más y recogerlas.)
  b. Cuando es difícil armonizar los movimientos.
    ⅰ. Ejecutar elementos distintos a la vez. (Ejemplo: ejecutar a la vez un elemento distinto con cada maza.)
    ⅱ. Ejecutar el mismo elemento de forma desfasada. (Ejemplo: combinado con un elemento de manos libres de dificultad B, ejecutar un molinete.)
  c. Cuando el lanzamiento y la recogida de las mazas son difíciles.
    ⅰ. Lanzar y recoger las mazas fuera del campo visual. (Ejemplo: lanzar las mazas de distintas maneras y recogerlas fuera del campo visual.)
    ⅱ. Girar mientras las mazas están en el aire y recogerlas después. (Ejemplo: lanzar las mazas de distintas maneras e introducir distintos giros mientras están en el aire antes de recogerlas, como recogerlas después de una voltereta adelante.)

3. Dificultad C
Los siguientes elementos se cuentan como dificultad C cuando se combinan con elementos de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad B mientras se lanza la maza.
  b. Manejar la maza dos veces durante un movimiento de tumbling de dificultad B.
  c. Ejecutar un movimiento de tumbling de dificultad C.
  d. Combinar dos elementos de manos libres o de tumbling mientras la maza está en el aire.
  e. Otros casos con un alto valor técnico de combinación propio de una dificultad C.

4. Dificultad D
Los siguientes elementos se cuentan como dificultad D cuando se combinan con elementos de tumbling.
  a. Ejecutar un movimiento de tumbling de dificultad C mientras la maza está en el aire.
  b. Manejar la maza dos veces o más mientras se ejecuta un movimiento de tumbling de dificultad C.
  c. Ejecutar un movimiento de tumbling de dificultad D.
  d. Combinar tres o más elementos de manos libres o de tumbling mientras la maza está en el aire.
  e. Otros casos con un alto valor técnico propio de una combinación de dificultad D.`,
              fr: `Les éléments caractéristiques des massues comptent habituellement comme difficultés B lorsqu'ils sont combinés à des éléments corporels de difficulté B, et comme difficultés C lorsqu'ils sont combinés à des éléments corporels de difficulté C.
1. Difficulté A
Les éléments suivants comptent comme difficultés A lorsqu'ils sont combinés à des éléments corporels ou de tumbling.
  a. Un mouvement de tumbling de difficulté A exécuté en tenant les massues.
  b. Un maniement des massues pendant un mouvement de tumbling de difficulté A, à l'exception des roulés de massue.
  c. Rattraper la massue après un lancer sans rien exécuter pendant le lancer.
  d. Toute autre combinaison ayant la valeur technique d'une difficulté A.

2. Difficulté B
Les éléments aux massues suivants comptent comme difficultés B lorsqu'ils sont combinés à des éléments corporels de difficulté B.
  a. Lorsque le contrôle des massues est difficile.
    i. Lancer les deux massues simultanément. (ex. : lancer les deux massues simultanément et les rattraper, en combinaison avec un élément corporel de difficulté B, ou lancer les deux massues à au moins 2 m et les rattraper.)
  b. Lorsque la coordination des mouvements est difficile.
    i. Exécuter des éléments différents simultanément. (ex. : exécuter en même temps un élément différent avec chaque massue.)
    ii. Exécuter le même élément en décalé. (ex. : exécuter une rotation en hélice en combinaison avec un élément corporel de difficulté B.)
  c. Lorsque le lancer-rattrapé des massues est difficile.
    i. Lancer et rattraper les massues hors du champ de vision. (ex. : lancer les massues de différentes façons et les rattraper hors du champ de vision.)
    ii. Effectuer une rotation pendant que les massues sont en l'air avant de les rattraper. (ex. : lancer les massues de différentes façons et les rattraper après diverses rotations, comme une roulade avant.)

3. Difficulté C
Les éléments suivants comptent comme difficultés C lorsqu'ils sont combinés à des éléments de tumbling.
  a. Un mouvement de tumbling de difficulté B exécuté pendant que la massue est en l'air.
  b. Deux maniements des massues pendant un mouvement de tumbling de difficulté B.
  c. Un mouvement de tumbling de difficulté C.
  d. Deux éléments corporels ou de tumbling combinés pendant que la massue est en l'air.
  e. Toute autre combinaison ayant la valeur technique élevée d'une difficulté C.

4. Difficulté D
Les éléments suivants comptent comme difficultés D lorsqu'ils sont combinés à des éléments de tumbling.
  a. Un mouvement de tumbling de difficulté C exécuté pendant que la massue est en l'air.
  b. Au moins deux maniements des massues pendant un mouvement de tumbling de difficulté C.
  c. Un mouvement de tumbling de difficulté D.
  d. Au moins trois éléments corporels ou de tumbling combinés pendant que la massue est en l'air.
  e. Toute autre combinaison ayant la valeur technique élevée d'une difficulté D.`,
              ru: `Элементы, характерные для булав, обычно засчитываются как трудность B при сочетании с элементом без предмета трудности B и как трудность C при сочетании с элементом без предмета трудности C.
1. Трудность A
Следующие элементы засчитываются как трудность A при сочетании с элементами без предмета или акробатическими элементами.
  a. Акробатическое движение трудности A, выполненное с булавами в руках.
  b. Один приём работы с булавами во время акробатического движения трудности A, кроме прокатов булавы.
  c. Ловля булавы после броска, если во время полёта ничего не выполнено.
  d. Иные сочетания, имеющие техническую ценность трудности A.

2. Трудность B
Следующие элементы с булавами засчитываются как трудность B при сочетании с элементом без предмета трудности B.
  a. Когда трудно управлять булавами.
    i. Одновременный бросок двух булав. (Например: в сочетании с элементом без предмета трудности B бросить обе булавы одновременно и поймать; либо бросить обе булавы не менее чем на 2 м и поймать.)
  b. Когда трудно согласовать движения.
    i. Одновременное исполнение разных элементов. (Например: каждой булавой одновременно выполняется свой элемент.)
    ii. Исполнение одного и того же элемента со сдвигом. (Например: вращение «пропеллер» в сочетании с элементом без предмета трудности B.)
  c. Когда труден бросок и ловля булав.
    i. Бросок и ловля булав вне поля зрения. (Например: бросить булавы разными способами и поймать вне поля зрения.)
    ii. Поворот или вращение во время полёта булав с последующей ловлей. (Например: поймать булавы после одного кувырка вперёд — разные способы броска и разные вращения во время полёта с последующей ловлей.)

3. Трудность C
Следующие элементы засчитываются как трудность C при сочетании с акробатическими элементами.
  a. Акробатическое движение трудности B, выполненное во время полёта булавы.
  b. Два приёма работы с булавами во время акробатического движения трудности B.
  c. Акробатическое движение трудности C.
  d. Сочетание двух элементов без предмета или акробатических элементов во время полёта булавы.
  e. Иные сочетания с высокой технической ценностью трудности C.

4. Трудность D
Следующие элементы засчитываются как трудность D при сочетании с акробатическими элементами.
  a. Акробатическое движение трудности C, выполненное во время полёта булавы.
  b. Два и более приёма работы с булавами во время акробатического движения трудности C.
  c. Акробатическое движение трудности D.
  d. Сочетание трёх и более элементов без предмета или акробатических элементов во время полёта булавы.
  e. Иные сочетания с высокой технической ценностью трудности D.`,
              hi: `क्लब के विशिष्ट तत्व सामान्यतः तब B कठिनाई गिने जाते हैं जब वे बिना उपकरण की B कठिनाई के तत्वों के साथ संयुक्त हों, और तब C कठिनाई गिने जाते हैं जब वे बिना उपकरण की C कठिनाई के साथ संयुक्त करके किए जाएँ।
1. A कठिनाई
निम्नलिखित तत्व, बिना उपकरण के या टम्बलिंग के तत्वों के साथ संयुक्त करके किए जाने पर, A कठिनाई गिने जाते हैं।
  a. क्लब को पकड़े हुए A कठिनाई की टम्बलिंग गति करने पर।
  b. A कठिनाई की टम्बलिंग गति करते समय क्लब का 1 बार संचालन करने पर। परंतु, क्लब का लुढ़काव इसमें शामिल नहीं है।
  c. क्लब हवा में रहने के दौरान कुछ भी किए बिना क्लब को लपकने पर।
  d. अन्य, A कठिनाई के समान संयोजन का तकनीकी मूल्य होने पर।

2. B कठिनाई
निम्नलिखित क्लब के तत्व, बिना उपकरण की B कठिनाई के तत्वों के साथ संयुक्त किए जाने पर B कठिनाई गिने जाते हैं।
  a. जब क्लब पर नियंत्रण कठिन हो।
    ⅰ. दोनों क्लबों को एक साथ फेंकना। (उदाहरण: बिना उपकरण की B कठिनाई के साथ संयुक्त करते हुए दोनों क्लबों को एक साथ फेंककर लपकना। या दोनों क्लबों को 2m या अधिक फेंककर लपकना।)
  b. जब गतियों में तालमेल बिठाना कठिन हो।
    ⅰ. अलग-अलग तत्वों को एक साथ करना। (उदाहरण: प्रत्येक क्लब से अलग-अलग तत्व एक साथ करना।)
    ⅱ. एक ही तत्व को आगे-पीछे करके करना। (उदाहरण: बिना उपकरण की B कठिनाई के तत्व के साथ संयुक्त करते हुए, प्रोपेलर घुमाव करना।)
  c. जब क्लब को फेंकना और लपकना कठिन हो।
    ⅰ. दृष्टि क्षेत्र के बाहर क्लब फेंकना और लपकना। (उदाहरण: विभिन्न तरीकों से क्लब फेंककर, दृष्टि क्षेत्र के बाहर लपकना।)
    ⅱ. क्लब हवा में रहने के दौरान घूमकर उसे लपकना। (उदाहरण: 1 बार आगे की कलाबाज़ी करने के बाद क्लब को लपकना आदि, विभिन्न तरीकों से क्लब फेंककर, उस दौरान विभिन्न घुमाव आदि डालकर लपकना।)

3. C कठिनाई
निम्नलिखित तत्व, टम्बलिंग के तत्वों के साथ संयुक्त होने पर C कठिनाई गिने जाते हैं।
  a. क्लब फेंकने के दौरान B कठिनाई की टम्बलिंग गति करने पर।
  b. B कठिनाई की टम्बलिंग गति के दौरान क्लब का 2 बार संचालन करने पर।
  c. C कठिनाई की टम्बलिंग गति करने पर।
  d. क्लब हवा में रहने के दौरान बिना उपकरण के या टम्बलिंग के 2 तत्वों को संयुक्त करके करने पर।
  e. अन्य, C कठिनाई के समान संयोजन का तकनीकी मूल्य अधिक होने पर।

4. D कठिनाई
निम्नलिखित तत्व, टम्बलिंग के तत्वों के साथ संयुक्त होने पर D कठिनाई गिने जाते हैं।
  a. क्लब हवा में रहने के दौरान C कठिनाई की टम्बलिंग गति करने पर।
  b. C कठिनाई की टम्बलिंग गति करते समय क्लब का 2 या अधिक बार संचालन करने पर।
  c. D कठिनाई की टम्बलिंग गति करने पर।
  d. क्लब हवा में रहने के दौरान 3 या अधिक बिना उपकरण के या टम्बलिंग के तत्वों को संयुक्त करके करने पर।
  e. अन्य, D कठिनाई के समान संयोजन का तकनीकी मूल्य अधिक होने पर।`,
            },
          },
        ],
      },
    ],
  },
]
