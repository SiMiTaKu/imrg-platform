import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、個人競技。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const INDIVIDUAL_SCORING_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '個人競技',
      en: 'Individual Competition',
      zh: '个人比赛',
      ko: '개인 경기',
      es: 'Competición individual',
      fr: 'Compétition individuelle',
      ru: 'Индивидуальные соревнования',
      hi: 'व्यक्तिगत प्रतियोगिता',
    },
    section: [
      {
        title: {
          ja: '配点と採点項目',
          en: 'Points and Scoring Criteria',
          zh: '分值与评分项目',
          ko: '배점과 채점 항목',
          es: 'Puntuación y criterios de evaluación',
          fr: 'Barème et critères de notation',
          ru: 'Баллы и критерии оценки',
          hi: 'अंक वितरण और अंक निर्धारण के मानदंड',
        },
        block: [
          {
            title: {
              ja: '個人競技の採点項目と配点',
              en: 'Scoring Criteria and Points for the Individual Competition',
              zh: '个人比赛的评分项目与分值',
              ko: '개인 경기의 채점 항목과 배점',
              es: 'Criterios de evaluación y puntuación de la competición individual',
              fr: 'Critères de notation et barème de la compétition individuelle',
              ru: 'Критерии оценки и баллы в индивидуальных соревнованиях',
              hi: 'व्यक्तिगत प्रतियोगिता के अंक निर्धारण के मानदंड और अंक वितरण',
            },
            element: {
              ja: '個人競技の配点と採点項目は以下の通りとする。',
              en: 'The points and scoring criteria for the individual competition are as follows.',
              zh: '个人比赛的分值与评分项目如下。',
              ko: '개인 경기의 배점과 채점 항목은 다음과 같이 한다.',
              es: 'La puntuación y los criterios de evaluación de la competición individual son los siguientes.',
              fr: 'Le barème et les critères de notation de la compétition individuelle sont les suivants.',
              ru: 'Баллы и критерии оценки в индивидуальных соревнованиях таковы.',
              hi: 'व्यक्तिगत प्रतियोगिता का अंक वितरण और अंक निर्धारण के मानदंड इस प्रकार हैं।',
            },
            image: [
              {
                src: '/images/rules/SK(D)single.png',
                alt: {
                  ja: '採点項目（Ｄ）',
                  en: 'Scoring criteria (D)',
                  zh: '评分项目（D）',
                  ko: '채점 항목(D)',
                  es: 'Criterios de evaluación (D)',
                  fr: 'Critères de notation (D)',
                  ru: 'Критерии оценки (D)',
                  hi: 'अंक निर्धारण के मानदंड (D)',
                },
              },
              {
                src: '/images/rules/SK(E)single.png',
                alt: {
                  ja: '採点項目（Ｅ）',
                  en: 'Scoring criteria (E)',
                  zh: '评分项目（E）',
                  ko: '채점 항목(E)',
                  es: 'Criterios de evaluación (E)',
                  fr: 'Critères de notation (E)',
                  ru: 'Критерии оценки (E)',
                  hi: 'अंक निर्धारण के मानदंड (E)',
                },
              },
            ],
          },
        ],
      },
      {
        title: {
          ja: '構成（Ｄ・Ａ）',
          en: 'Composition (D/A)',
          zh: '编排（D、A）',
          ko: '구성(D/A)',
          es: 'Composición (D/A)',
          fr: 'Composition (D / A)',
          ru: 'Композиция (D/A)',
          hi: 'संरचना (D, A)',
        },
        block: [
          {
            title: {
              ja: '演技の構成',
              en: 'Composition of the Routine',
              zh: '成套动作的编排',
              ko: '연기의 구성',
              es: 'Composición del ejercicio',
              fr: "Composition de l'exercice",
              ru: 'Композиция упражнения',
              hi: 'प्रदर्शन की संरचना',
            },
            element: {
              ja: '演技は手具操作を伴った徒手系と転回系を持って構成され、高い技術的価値と各要素の多様性、音楽と動きの関係や独創性が求められる。また、すべての運動が合理性と安定性をもった組み合わせで、豊富な運動量を持って構成されなければならない。',
              en: 'A routine is composed of free-hand and tumbling elements with apparatus handling, and must have high technical value, a variety of elements, a good relationship between music and movement, and originality. All movements must be combined rationally and with stability, and the routine must contain a large amount of movement.',
              zh: '成套动作由伴随器械操作的徒手动作与翻腾动作构成，要求具有较高的技术价值、各要素的多样性、音乐与动作的关系以及独创性。此外，所有动作都必须以合理且稳定的组合进行编排，并具有丰富的运动量。',
              ko: '연기는 수구 조작을 동반한 신체 계열과 공중돌기 계열로 구성되며, 높은 기술적 가치와 각 요소의 다양성, 음악과 움직임의 관계 및 독창성이 요구된다. 또한 모든 운동이 합리성과 안정성을 갖춘 조합으로, 풍부한 운동량을 가지고 구성되어야 한다.',
              es: 'El ejercicio se compone de elementos de manos libres y de tumbling realizados con manejo del aparato, y debe presentar un alto valor técnico, variedad en cada uno de sus elementos, una buena relación entre la música y el movimiento y originalidad. Además, todos los movimientos deben combinarse de forma racional y estable, y el ejercicio debe componerse con una gran cantidad de movimiento.',
              fr: "L'exercice se compose d'éléments corporels et d'éléments de tumbling accompagnés du maniement de l'engin ; il doit présenter une valeur technique élevée, une variété d'éléments, un bon rapport entre la musique et le mouvement ainsi que de l'originalité. Tous les mouvements doivent être enchaînés de façon rationnelle et avec stabilité, et l'exercice doit comporter une grande quantité de mouvement.",
              ru: 'Упражнение строится из элементов без предмета и акробатических элементов, сопровождаемых работой с предметом, и должно обладать высокой технической ценностью, разнообразием элементов, связью музыки и движения и оригинальностью. Кроме того, все движения должны сочетаться рационально и устойчиво, а упражнение — содержать большой объём движения.',
              hi: 'प्रदर्शन की संरचना उपकरण संचालन के साथ किए जाने वाले बिना उपकरण के तत्वों और टम्बलिंग तत्वों से बनती है, और इसमें उच्च तकनीकी मूल्य, प्रत्येक तत्व की विविधता, संगीत और गति का संबंध तथा मौलिकता अपेक्षित है। साथ ही, सभी गतियाँ तर्कसंगत और स्थिर संयोजन के साथ, भरपूर गति-मात्रा लिए हुए संरचित होनी चाहिए।',
            },
          },
          {
            title: {
              ja: '難度の要求要素',
              en: 'Difficulty Requirements',
              zh: '难度的要求要素',
              ko: '난도의 요구 요소',
              es: 'Elementos requeridos de dificultad',
              fr: 'Exigences en matière de difficultés',
              ru: 'Требуемые трудности',
              hi: 'कठिनाई की आवश्यकताएँ',
            },
            element: {
              ja: `個人競技の難度要素としては以下の難度を入れなければならない。
                  
違反した場合　　減点　
Ｂ難度不足　１つにつき・・・0.10点
Ｃ難度不足　１つにつき・・・0.30点
Ｄ難度不足　１つにつき・・・0.50点

※要求された数以上の難度は、ランク下の難度として数えることができる。
                  `,
              en: `An individual routine must include the following difficulties.

Violation: deductions
Each missing B difficulty: 0.10 points
Each missing C difficulty: 0.30 points
Each missing D difficulty: 0.50 points

* Difficulties beyond the required number can be counted as difficulties of a lower rank.`,
              zh: `个人比赛的难度要素必须编入以下难度。
                  
违反时　　扣分　
B难度不足　每缺1个……0.10分
C难度不足　每缺1个……0.30分
D难度不足　每缺1个……0.50分

※超过要求数量的难度，可以作为低一级的难度计算。
                  `,
              ko: `개인 경기의 난도 요소로는 다음 난도를 넣어야 한다.
                  
위반한 경우  감점
B난도 부족 1개당...0.10점
C난도 부족 1개당...0.30점
D난도 부족 1개당...0.50점

※요구된 수보다 많은 난도는 한 단계 아래 등급의 난도로 셀 수 있다.
                  `,
              es: `En la competición individual deben incluirse como elementos de dificultad las dificultades siguientes.

En caso de incumplimiento: penalización
Por cada dificultad B que falte: 0.10 puntos
Por cada dificultad C que falte: 0.30 puntos
Por cada dificultad D que falte: 0.50 puntos

* Las dificultades que superen el número exigido pueden contarse como dificultades de un rango inferior.
`,
              fr: `L'exercice individuel doit comporter les difficultés suivantes.

En cas de manquement, pénalités :
chaque difficulté B manquante : 0,10 point
chaque difficulté C manquante : 0,30 point
chaque difficulté D manquante : 0,50 point

* Les difficultés présentées au-delà du nombre exigé peuvent être comptées comme des difficultés du rang inférieur.`,
              ru: `Индивидуальное упражнение должно включать следующие трудности.

При нарушении сбавка:
за каждую недостающую трудность B — 0,10 балла
за каждую недостающую трудность C — 0,30 балла
за каждую недостающую трудность D — 0,50 балла

※ Трудности сверх требуемого числа могут засчитываться как трудности рангом ниже.`,
              hi: `व्यक्तिगत प्रतियोगिता के कठिनाई तत्वों के रूप में नीचे दी गई कठिनाइयाँ शामिल करनी चाहिए।

उल्लंघन की स्थिति में  कटौती
B कठिनाई की कमी  प्रत्येक के लिए 0.10 अंक
C कठिनाई की कमी  प्रत्येक के लिए 0.30 अंक
D कठिनाई की कमी  प्रत्येक के लिए 0.50 अंक

* आवश्यक संख्या से अधिक कठिनाइयों को निचली रैंक की कठिनाई के रूप में गिना जा सकता है।`,
            },
            image: [
              {
                src: '/images/rules/(D)requirement.png',
                alt: {
                  ja: '難度の要求要素表',
                  en: 'Table of difficulty requirements',
                  zh: '难度要求要素表',
                  ko: '난도의 요구 요소 표',
                  es: 'Tabla de elementos requeridos de dificultad',
                  fr: 'Tableau des exigences en matière de difficultés',
                  ru: 'Таблица требуемых трудностей',
                  hi: 'कठिनाई की आवश्यकताओं की तालिका',
                },
              },
            ],
          },
          {
            title: {
              ja: '徒手系の要求要素',
              en: 'Free-Hand Requirements',
              zh: '徒手动作的要求要素',
              ko: '신체 계열의 요구 요소',
              es: 'Elementos requeridos de manos libres',
              fr: "Exigences en matière d'éléments corporels",
              ru: 'Требования к элементам без предмета',
              hi: 'बिना उपकरण की आवश्यकताएँ',
            },
            element: {
              ja: '演技には徒手系基礎要素群（第29条）の１群（各種徒手）を入れなければならない。【違反した場合　減点・・・0.30点】',
              en: 'A routine must include group 1 (various free-hand movements) of the basic free-hand element groups (Article 29). [Violation: deduction 0.30 points]',
              zh: '成套动作中必须编入徒手基础要素组（第29条）的第1组（各种徒手动作）。【违反时　扣分……0.30分】',
              ko: '연기에는 신체 계열 기초 요소군(제29조)의 1군(각종 신체 운동)을 넣어야 한다. 【위반한 경우 감점...0.30점】',
              es: 'El ejercicio debe incluir el grupo 1 (movimientos diversos de manos libres) de los grupos de elementos básicos de manos libres (artículo 29). [En caso de incumplimiento: penalización de 0.30 puntos]',
              fr: "L'exercice doit comporter le groupe 1 (mouvements corporels divers) des groupes d'éléments corporels de base (article 29). [En cas de manquement : pénalité de 0,30 point]",
              ru: 'Упражнение должно включать 1-ю группу (различные движения без предмета) базовых групп элементов без предмета (статья 29). [При нарушении сбавка 0,30 балла]',
              hi: 'प्रदर्शन में बिना उपकरण के मूल तत्व वर्गों (अनुच्छेद 29) का वर्ग 1 (विभिन्न बिना उपकरण गतियाँ) शामिल करना चाहिए। [उल्लंघन की स्थिति में कटौती 0.30 अंक]',
            },
          },
          {
            title: {
              ja: '転回系の要求要素',
              en: 'Tumbling Requirements',
              zh: '翻腾动作的要求要素',
              ko: '공중돌기 계열의 요구 요소',
              es: 'Elementos requeridos de tumbling',
              fr: 'Exigences en matière de tumbling',
              ru: 'Требования к акробатике',
              hi: 'टम्बलिंग की आवश्यकताएँ',
            },
            element: {
              ja: '演技には前方・後方・側方の転回運動をすべてて入れなければならない。【違反した場合　減点：一つにつき・・・0.30点】',
              en: 'A routine must include forward, backward and sideways tumbling. [Violation: deduction 0.30 points for each missing direction]',
              zh: '成套动作中必须编入向前、向后、向侧的全部翻腾动作。【违反时　扣分：每缺1项……0.30分】',
              ko: '연기에는 전방, 후방, 측방의 공중돌기 운동을 모두 넣어야 한다. 【위반한 경우 감점: 1개당...0.30점】',
              es: 'El ejercicio debe incluir movimientos de tumbling hacia delante, hacia atrás y hacia el lateral, todos ellos. [En caso de incumplimiento: penalización de 0.30 puntos por cada uno]',
              fr: "L'exercice doit comporter des rotations vers l'avant, vers l'arrière et sur le côté. [En cas de manquement : pénalité de 0,30 point par direction manquante]",
              ru: 'Упражнение должно включать акробатические движения вперёд, назад и в сторону. [При нарушении сбавка 0,30 балла за каждое недостающее направление]',
              hi: 'प्रदर्शन में आगे, पीछे और बगल की टम्बलिंग गतियाँ सभी शामिल करनी चाहिए। [उल्लंघन की स्थिति में कटौती: प्रत्येक के लिए 0.30 अंक]',
            },
          },
          {
            title: {
              ja: '手具操作の要求要素',
              en: 'Apparatus Handling Requirements',
              zh: '器械操作的要求要素',
              ko: '수구 조작의 요구 요소',
              es: 'Elementos requeridos del manejo del aparato',
              fr: "Exigences en matière de maniement de l'engin",
              ru: 'Требования к работе с предметом',
              hi: 'उपकरण संचालन की आवश्यकताएँ',
            },
            element: {
              ja: `演技には各種目ごとに、次の基礎要素をすべて入れなければならない。

【スティック】

1. 左投げ左受け１回
2. 右投げ右受け１回
3. 1. 2. を含む３回以上の投げ上げ
4. １m以上のころがし
5. プロペラ回旋２回

【要素が不足した場合　減点：１つにつき・・・0.30点】


【リング】

1. ２つ同時なげ
2. 1. を含む３回以上の投げ上げ
3. １m以上のころがし
4. まわし２回

【要素が不足した場合　減点：１つにつき・・・0.30点】


【ロープ】

1. ３回以上の投げ上げ
2. ３重跳び
3. ６m以上の移動を伴う連続跳び
4. ２回以上の連続前まわし跳び
5. ２回以上の連続後ろまわし跳び

【要素が不足した場合　減点：１つにつき・・・0.30点】


【クラブ】

1. ２つ同時なげ
2. 1. を含む３回以上の投げ上げ
3. 50cm以上のころがし
4. プロペラ回旋２回

【要素が不足した場合　減点：１つにつき・・・0.30点】`,
              en: `A routine must include all of the following basic elements for each apparatus.

[Stick]

1. One throw with the left hand caught with the left hand
2. One throw with the right hand caught with the right hand
3. At least three throws, including 1 and 2
4. A roll of at least 1 m
5. Two propeller rotations

[Missing elements: deduction 0.30 points each]


[Ring]

1. A simultaneous throw of both rings
2. At least three throws, including 1
3. A roll of at least 1 m
4. Two spins

[Missing elements: deduction 0.30 points each]


[Rope]

1. At least three throws
2. A triple under
3. Consecutive jumps traveling at least 6 m
4. At least two consecutive forward jumps
5. At least two consecutive backward jumps

[Missing elements: deduction 0.30 points each]


[Club]

1. A simultaneous throw of both clubs
2. At least three throws, including 1
3. A roll of at least 50 cm
4. Two propeller rotations

[Missing elements: deduction 0.30 points each]`,
              zh: `成套动作中，每个项目都必须编入以下全部基础要素。

【短棒】

1. 左手抛左手接1次
2. 右手抛右手接1次
3. 包含1、2在内的3次以上抛起
4. 1m以上的滚动
5. 螺旋桨式旋转2次

【要素不足时　扣分：每缺1个……0.30分】


【环】

1. 2个同时抛
2. 包含1在内的3次以上抛起
3. 1m以上的滚动
4. 绕环2次

【要素不足时　扣分：每缺1个……0.30分】


【绳】

1. 3次以上抛起
2. 三重跳
3. 伴随6m以上移动的连续跳
4. 2次以上的连续向前绕跳
5. 2次以上的连续向后绕跳

【要素不足时　扣分：每缺1个……0.30分】


【棍棒】

1. 2个同时抛
2. 包含1在内的3次以上抛起
3. 50cm以上的滚动
4. 螺旋桨式旋转2次

【要素不足时　扣分：每缺1个……0.30分】`,
              ko: `연기에는 각 종목마다 다음 기초 요소를 모두 넣어야 한다.

【스틱】

1. 왼손 던지기 왼손 받기 1회
2. 오른손 던지기 오른손 받기 1회
3. 1. 2.를 포함한 3회 이상의 던져 올리기
4. 1m 이상의 굴리기
5. 프로펠러 회전 2회

【요소가 부족한 경우 감점: 1개당...0.30점】


【링】

1. 2개 동시 던지기
2. 1.을 포함한 3회 이상의 던져 올리기
3. 1m 이상의 굴리기
4. 돌리기 2회

【요소가 부족한 경우 감점: 1개당...0.30점】


【줄】

1. 3회 이상의 던져 올리기
2. 3중 뛰기
3. 6m 이상의 이동을 동반한 연속 뛰기
4. 2회 이상의 연속 앞돌리기 뛰기
5. 2회 이상의 연속 뒤돌리기 뛰기

【요소가 부족한 경우 감점: 1개당...0.30점】


【곤봉】

1. 2개 동시 던지기
2. 1.을 포함한 3회 이상의 던져 올리기
3. 50cm 이상의 굴리기
4. 프로펠러 회전 2회

【요소가 부족한 경우 감점: 1개당...0.30점】`,
              es: `El ejercicio debe incluir todos los elementos básicos siguientes, según el aparato.

[Palo]

1. Un lanzamiento con la mano izquierda y recogida con la mano izquierda
2. Un lanzamiento con la mano derecha y recogida con la mano derecha
3. Tres o más lanzamientos, incluidos 1. y 2.
4. Un rodamiento de 1 m o más
5. Dos rotaciones en hélice

[Si falta algún elemento: penalización de 0.30 puntos por cada uno]


[Aro]

1. Lanzamiento simultáneo de los dos aros
2. Tres o más lanzamientos, incluido 1.
3. Un rodamiento de 1 m o más
4. Dos rotaciones del aro

[Si falta algún elemento: penalización de 0.30 puntos por cada uno]


[Cuerda]

1. Tres o más lanzamientos
2. Un salto con triple rotación de la cuerda
3. Saltos consecutivos con un desplazamiento de 6 m o más
4. Dos o más saltos consecutivos con la cuerda hacia delante
5. Dos o más saltos consecutivos con la cuerda hacia atrás

[Si falta algún elemento: penalización de 0.30 puntos por cada uno]


[Mazas]

1. Lanzamiento simultáneo de las dos mazas
2. Tres o más lanzamientos, incluido 1.
3. Un rodamiento de 50 cm o más
4. Dos rotaciones en hélice

[Si falta algún elemento: penalización de 0.30 puntos por cada uno]`,
              fr: `L'exercice doit comporter, pour chaque engin, l'ensemble des éléments de base suivants.

[Bâton]

1. Un lancer de la main gauche rattrapé de la main gauche
2. Un lancer de la main droite rattrapé de la main droite
3. Au moins trois lancers, dont les points 1 et 2
4. Un roulé d'au moins 1 m
5. Deux rotations en hélice

[Élément manquant : pénalité de 0,30 point par élément]


[Anneau]

1. Un lancer simultané des deux anneaux
2. Au moins trois lancers, dont le point 1
3. Un roulé d'au moins 1 m
4. Deux rotations

[Élément manquant : pénalité de 0,30 point par élément]


[Corde]

1. Au moins trois lancers
2. Un triple saut
3. Des sauts enchaînés sur un déplacement d'au moins 6 m
4. Au moins deux sauts enchaînés en rotation avant
5. Au moins deux sauts enchaînés en rotation arrière

[Élément manquant : pénalité de 0,30 point par élément]


[Massues]

1. Un lancer simultané des deux massues
2. Au moins trois lancers, dont le point 1
3. Un roulé d'au moins 50 cm
4. Deux rotations en hélice

[Élément manquant : pénalité de 0,30 point par élément]`,
              ru: `Упражнение должно включать все базовые элементы, перечисленные ниже для каждого вида.

[Палочки]

1. Один бросок левой рукой с ловлей левой рукой
2. Один бросок правой рукой с ловлей правой рукой
3. Не менее трёх бросков, включая 1 и 2
4. Прокат не менее 1 м
5. Два вращения «пропеллер»

[За каждый недостающий элемент сбавка 0,30 балла]


[Кольцо]

1. Одновременный бросок двух колец
2. Не менее трёх бросков, включая 1
3. Прокат не менее 1 м
4. Два вращения

[За каждый недостающий элемент сбавка 0,30 балла]


[Скакалка]

1. Не менее трёх бросков
2. Тройной прыжок через скакалку
3. Серия прыжков с перемещением не менее 6 м
4. Не менее двух прыжков подряд с вращением скакалки вперёд
5. Не менее двух прыжков подряд с вращением скакалки назад

[За каждый недостающий элемент сбавка 0,30 балла]


[Булавы]

1. Одновременный бросок двух булав
2. Не менее трёх бросков, включая 1
3. Прокат не менее 50 см
4. Два вращения «пропеллер»

[За каждый недостающий элемент сбавка 0,30 балла]`,
              hi: `प्रदर्शन में प्रत्येक स्पर्धा के अनुसार, निम्नलिखित सभी मूल तत्व शामिल करने चाहिए।

[स्टिक]

1. बाएँ हाथ से फेंककर बाएँ हाथ से पकड़ना 1 बार
2. दाएँ हाथ से फेंककर दाएँ हाथ से पकड़ना 1 बार
3. 1. 2. सहित 3 या अधिक बार ऊपर फेंकना
4. 1 m या अधिक की लुढ़कन
5. प्रोपेलर घुमाव 2 बार

[तत्व की कमी होने पर कटौती: प्रत्येक के लिए 0.30 अंक]


[रिंग]

1. दोनों को एक साथ फेंकना
2. 1. सहित 3 या अधिक बार ऊपर फेंकना
3. 1 m या अधिक की लुढ़कन
4. घुमाव 2 बार

[तत्व की कमी होने पर कटौती: प्रत्येक के लिए 0.30 अंक]


[रस्सी]

1. 3 या अधिक बार ऊपर फेंकना
2. तिहरी छलांग
3. 6 m या अधिक की गति के साथ लगातार छलांगें
4. 2 या अधिक बार लगातार आगे घुमाकर छलांग
5. 2 या अधिक बार लगातार पीछे घुमाकर छलांग

[तत्व की कमी होने पर कटौती: प्रत्येक के लिए 0.30 अंक]


[क्लब]

1. दोनों को एक साथ फेंकना
2. 1. सहित 3 या अधिक बार ऊपर फेंकना
3. 50 cm या अधिक की लुढ़कन
4. प्रोपेलर घुमाव 2 बार

[तत्व की कमी होने पर कटौती: प्रत्येक के लिए 0.30 अंक]`,
            },
          },
          {
            title: {
              ja: '手具の要素と難度',
              en: 'Apparatus Elements and Difficulty',
              zh: '器械的要素与难度',
              ko: '수구의 요소와 난도',
              es: 'Elementos del aparato y dificultad',
              fr: "Éléments à l'engin et difficultés",
              ru: 'Элементы с предметом и трудность',
              hi: 'उपकरण के तत्व और कठिनाई',
            },
            element: {
              ja: `【投げ上げ】

1. 手具の投げ上げの高さは、競技者が投げたところから最低２m以上とする。低い場合は投げ上げとして扱わない。
2. スティックの投げ受けの要素は、受け損じた場合には要素として扱わない。
3. 手具を投げている間に、徒手系や転回系を行い受け損じた場合、投げ上げの要素として数えるが、投げ受けの難度としては扱わない。ただし、リングやクラブの２つの同時投げで片方の手具のみ受け損じた場合は、投げ上げの難度として数える。
4. ２つ同時投げは、片手、両手または足で投げるものとし、受けは自由とする。ただし、２つのリングを結合して投げた場合や、片方の手具が投げたところから２mに満たない場合は要素として認めない。

【ころがし】

ころがしが短かった場合は、要素としては扱わない。

【ロープの様々な跳び】
前回し跳び、後ろ回し跳びが２回連続でなかった場合、移動をともなう跳びの距離が短かった場合は要素としては扱わない。
                  `,
              en: `[Throws]

1. A throw must rise at least 2 m from the point of release. Lower throws are not treated as throws.
2. A stick throw-and-catch element that is not caught is not counted as an element.
3. If the gymnast performs free-hand or tumbling elements during a throw and fails to catch the apparatus, it counts as a throw element but not as a throw-and-catch difficulty. However, in a simultaneous throw of two rings or two clubs, if only one apparatus is not caught, it counts as a throw difficulty.
4. A simultaneous throw of two apparatus may be made with one hand, both hands or the feet, and the catch is free. However, it is not accepted as an element if the two rings are joined together when thrown, or if one of the apparatus rises less than 2 m from the point of release.

[Rolls]

A roll that is too short is not counted as an element.

[Rope jumps]
Forward and backward jumps that are not performed twice in a row, and traveling jumps that cover too short a distance, are not counted as elements.`,
              zh: `【抛起】

1. 器械抛起的高度，从参赛者抛出的位置算起最低为2m以上。低于此高度时不作为抛起处理。
2. 短棒的抛接要素，未能接住时不作为要素处理。
3. 在抛出器械期间完成徒手动作或翻腾动作而未能接住时，计为抛起的要素，但不作为抛接的难度处理。但是，环或棍棒的2个同时抛中只有一个器械未能接住时，计为抛起的难度。
4. 2个同时抛可以用单手、双手或脚抛出，接的方式不限。但是，将2个环连接在一起抛出时，或其中一个器械从抛出的位置算起未达到2m时，不认可为要素。

【滚动】

滚动的距离过短时，不作为要素处理。

【绳的各种跳】
向前绕跳、向后绕跳未连续2次时，以及伴随移动的跳距离过短时，不作为要素处理。
                  `,
              ko: `【던져 올리기】

1. 수구를 던져 올리는 높이는 경기자가 던진 지점에서 최저 2m 이상으로 한다. 낮은 경우에는 던져 올리기로 인정하지 않는다.
2. 스틱의 던져 받기 요소는 받기에 실패한 경우에는 요소로 인정하지 않는다.
3. 수구를 던지고 있는 동안에 신체 계열이나 공중돌기 계열을 실시하고 받기에 실패한 경우, 던져 올리기 요소로는 세지만 던져 받기 난도로는 인정하지 않는다. 다만 링이나 곤봉의 2개 동시 던지기에서 한쪽 수구만 받기에 실패한 경우에는 던져 올리기 난도로 센다.
4. 2개 동시 던지기는 한 손, 양손 또는 발로 던지는 것으로 하며, 받기는 자유로 한다. 다만 2개의 링을 결합하여 던진 경우나, 한쪽 수구가 던진 지점에서 2m에 미치지 못하는 경우에는 요소로 인정하지 않는다.

【굴리기】

굴리기가 짧은 경우에는 요소로 인정하지 않는다.

【줄의 다양한 뛰기】
앞돌리기 뛰기, 뒤돌리기 뛰기가 2회 연속이 아닌 경우, 이동을 동반한 뛰기의 거리가 짧은 경우에는 요소로 인정하지 않는다.
                  `,
              es: `[Lanzamientos]

1. El aparato debe elevarse como mínimo 2 m por encima del punto desde el que lo lanza el gimnasta. Si el lanzamiento es más bajo, no se considera lanzamiento.
2. El elemento de lanzamiento y recogida del palo no se considera elemento cuando falla la recogida.
3. Si el gimnasta realiza elementos de manos libres o de tumbling mientras el aparato está en el aire y falla la recogida, se cuenta como elemento de lanzamiento, pero no como dificultad de lanzamiento y recogida. No obstante, en el lanzamiento simultáneo de los dos aros o de las dos mazas, cuando solo falla la recogida de uno de los aparatos, se cuenta como dificultad de lanzamiento.
4. El lanzamiento simultáneo de los dos aparatos puede realizarse con una mano, con las dos manos o con los pies, y la recogida es libre. No obstante, no se admite como elemento si los dos aros se lanzan unidos o si uno de los aparatos no se eleva 2 m desde el punto de lanzamiento.

[Rodamientos]

Un rodamiento demasiado corto no se considera elemento.

[Saltos diversos con la cuerda]
Los saltos con la cuerda hacia delante y hacia atrás que no se realizan dos veces seguidas, y los saltos con desplazamiento cuya distancia es demasiado corta, no se consideran elementos.
`,
              fr: `[Lancers]

1. Le lancer doit s'élever d'au moins 2 m au-dessus du point de lâcher. Un lancer plus bas n'est pas considéré comme un lancer.
2. Un élément de lancer-rattrapé au bâton qui n'est pas rattrapé n'est pas compté comme élément.
3. Si le gymnaste exécute des éléments corporels ou de tumbling pendant un lancer et ne rattrape pas l'engin, cela compte comme élément de lancer mais non comme difficulté de lancer-rattrapé. Toutefois, lors d'un lancer simultané de deux anneaux ou de deux massues, si un seul engin n'est pas rattrapé, cela compte comme difficulté de lancer.
4. Le lancer simultané de deux engins peut se faire d'une main, des deux mains ou des pieds, et le rattrapé est libre. Il n'est toutefois pas reconnu comme élément si les deux anneaux sont joints au moment du lancer, ou si l'un des engins s'élève de moins de 2 m au-dessus du point de lâcher.

[Roulés]

Un roulé trop court n'est pas compté comme élément.

[Sauts à la corde]
Les sauts en rotation avant et arrière qui ne sont pas exécutés deux fois de suite, ainsi que les sauts avec déplacement couvrant une distance trop courte, ne sont pas comptés comme éléments.`,
              ru: `[Броски]

1. Предмет должен подниматься не менее чем на 2 м от точки выпуска. Более низкий бросок броском не считается.
2. Элемент «бросок и ловля» палочки не засчитывается, если предмет не пойман.
3. Если во время броска гимнаст выполняет элементы без предмета или акробатические элементы и не ловит предмет, это засчитывается как элемент «бросок», но не как трудность «бросок и ловля». Однако при одновременном броске двух колец или двух булав, если не поймана только одна из них, это засчитывается как трудность «бросок».
4. Одновременный бросок двух предметов можно выполнять одной рукой, двумя руками или ногами, ловля свободная. Однако элемент не засчитывается, если два кольца брошены соединёнными или если один из предметов поднялся менее чем на 2 м от точки выпуска.

[Прокаты]

Слишком короткий прокат элементом не считается.

[Прыжки со скакалкой]
Если прыжки с вращением вперёд или назад выполнены не два раза подряд, а также если прыжки с перемещением покрыли слишком короткое расстояние, элемент не засчитывается.`,
              hi: `[ऊपर फेंकना]

1. उपकरण को ऊपर फेंकने की ऊँचाई, जिस स्थान से जिम्नास्ट ने फेंका है वहाँ से कम से कम 2 m होनी चाहिए। कम होने पर उसे ऊपर फेंकना नहीं माना जाता।
2. स्टिक को फेंकने और पकड़ने के तत्व में, यदि पकड़ने में चूक हो जाए तो उसे तत्व के रूप में नहीं माना जाता।
3. उपकरण के हवा में रहने के दौरान बिना उपकरण के या टम्बलिंग तत्व करते हुए यदि पकड़ने में चूक हो जाए, तो उसे ऊपर फेंकने के तत्व के रूप में गिना जाता है, परंतु फेंकने और पकड़ने की कठिनाई के रूप में नहीं। किंतु दो रिंग या दो क्लब एक साथ फेंकने पर यदि केवल एक ही उपकरण पकड़ने में चूक हो, तो उसे ऊपर फेंकने की कठिनाई के रूप में गिना जाता है।
4. दो उपकरण एक साथ फेंकना एक हाथ से, दोनों हाथों से या पैर से किया जाता है और पकड़ना स्वतंत्र है। किंतु दो रिंग को जोड़कर फेंकने पर, या किसी एक उपकरण के फेंके गए स्थान से 2 m तक न पहुँचने पर, उसे तत्व के रूप में मान्यता नहीं दी जाती।

[लुढ़कन]

लुढ़कन छोटी होने पर उसे तत्व के रूप में नहीं माना जाता।

[रस्सी की विभिन्न छलांगें]
आगे घुमाकर छलांग और पीछे घुमाकर छलांग लगातार 2 बार न होने पर, तथा गति के साथ की जाने वाली छलांग की दूरी कम होने पर, उन्हें तत्व के रूप में नहीं माना जाता।`,
            },
          },
          {
            title: {
              ja: '演技の開始',
              en: 'Start of the Routine',
              zh: '成套动作的开始',
              ko: '연기의 시작',
              es: 'Inicio del ejercicio',
              fr: "Début de l'exercice",
              ru: 'Начало упражнения',
              hi: 'प्रदर्शन का आरंभ',
            },
            element: {
              ja: '演技の開始は、演技面のどの位置からでもよいが、手具に触れた状態で配置について開始のポーズをとり、動きを止めてから始めなければならない。【違反した場合　減点・・・0.30点】',
              en: 'The routine may start anywhere on the floor area, but the gymnast must take position touching the apparatus, hold a starting pose and be still before starting. [Violation: deduction 0.30 points]',
              zh: '成套动作可以从场地的任何位置开始，但必须在接触器械的状态下就位、摆出开始姿势，静止后才能开始。【违反时　扣分……0.30分】',
              ko: '연기의 시작은 연기 면의 어느 위치에서 하여도 좋으나, 수구에 닿은 상태로 자리를 잡고 시작 포즈를 취하여 움직임을 멈춘 뒤에 시작하여야 한다. 【위반한 경우 감점...0.30점】',
              es: 'El ejercicio puede comenzar desde cualquier punto del practicable, pero el gimnasta debe colocarse en contacto con el aparato, adoptar la pose inicial y detener el movimiento antes de empezar. [En caso de incumplimiento: penalización de 0.30 puntos]',
              fr: "L'exercice peut commencer depuis n'importe quel endroit du praticable, mais le gymnaste doit prendre place en contact avec son engin, adopter une pose de départ et cesser tout mouvement avant de commencer. [En cas de manquement : pénalité de 0,30 point]",
              ru: 'Упражнение можно начинать из любой точки ковра, но гимнаст должен занять место, касаясь предмета, принять исходную позу и замереть. [При нарушении сбавка 0,30 балла]',
              hi: 'प्रदर्शन का आरंभ फ़्लोर पर किसी भी स्थान से किया जा सकता है, परंतु उपकरण को छूते हुए अपने स्थान पर आकर आरंभ की मुद्रा बनानी चाहिए और गति रोकने के बाद ही आरंभ करना चाहिए। [उल्लंघन की स्थिति में कटौती 0.30 अंक]',
            },
          },
          {
            title: {
              ja: '演技の終了',
              en: 'End of the Routine',
              zh: '成套动作的结束',
              ko: '연기의 종료',
              es: 'Final del ejercicio',
              fr: "Fin de l'exercice",
              ru: 'Окончание упражнения',
              hi: 'प्रदर्शन का समापन',
            },
            element: {
              ja: `演技の終了は、演技面のどの位置でもよいが、手具に触れた状態で終了のポーズをとり、完全に動きを止めて終了しなければならない。
【違反した場合　減点・・・0.30点】

手具を場外へ取りに行き、そのままラストポーズを行わなかった場合
終了なし　　構成審判からの減点・・・0.30点
演技中断　　実施審判からの減点・・・0.50点
場外　　　実施主任審判から減点・・・0.20点
計 1.00点
                  `,
              en: `The routine may end anywhere on the floor area, but the gymnast must hold a final pose touching the apparatus and stop moving completely.
[Violation: deduction 0.30 points]

If the gymnast leaves the floor area to retrieve the apparatus and does not hold a final pose:
No ending: deduction by the composition judges, 0.30 points
Interruption of the routine: deduction by the execution judges, 0.50 points
Out of bounds: deduction by the execution chief judge, 0.20 points
Total: 1.00 point`,
              zh: `成套动作可以在场地的任何位置结束，但必须在接触器械的状态下摆出结束姿势，完全静止后结束。
【违反时　扣分……0.30分】

到场外去捡器械、就此没有做最后姿势时
无结束　　编排裁判员的扣分……0.30分
中断成套　　完成裁判员的扣分……0.50分
出界　　　完成主裁判员的扣分……0.20分
合计 1.00分
                  `,
              ko: `연기의 종료는 연기 면의 어느 위치에서 하여도 좋으나, 수구에 닿은 상태로 종료 포즈를 취하고 완전히 움직임을 멈추고 끝내야 한다.
【위반한 경우 감점...0.30점】

수구를 장외로 가지러 가서 그대로 마지막 포즈를 취하지 않은 경우
종료 없음  구성 심판의 감점...0.30점
연기 중단  실시 심판의 감점...0.50점
장외  실시 주임 심판의 감점...0.20점
계 1.00점
                  `,
              es: `El ejercicio puede terminar en cualquier punto del practicable, pero el gimnasta debe adoptar la pose final en contacto con el aparato y detener por completo el movimiento.
[En caso de incumplimiento: penalización de 0.30 puntos]

Cuando el gimnasta sale del practicable a recoger el aparato y no realiza la pose final:
Sin final: penalización de los jueces de composición: 0.30 puntos
Interrupción del ejercicio: penalización de los jueces de ejecución: 0.50 puntos
Salida del practicable: penalización del juez principal de ejecución: 0.20 puntos
Total: 1.00 puntos
`,
              fr: `L'exercice peut se terminer à n'importe quel endroit du praticable, mais le gymnaste doit adopter une pose finale en contact avec son engin et cesser complètement tout mouvement.
[En cas de manquement : pénalité de 0,30 point]

Si le gymnaste sort du praticable pour récupérer son engin et n'adopte pas de pose finale :
Absence de fin : pénalité des juges de composition, 0,30 point
Interruption de l'exercice : pénalité des juges d'exécution, 0,50 point
Sortie du praticable : pénalité du juge-arbitre d'exécution, 0,20 point
Total : 1,00 point`,
              ru: `Упражнение можно заканчивать в любой точке ковра, но гимнаст должен принять заключительную позу, касаясь предмета, и полностью остановиться.
[При нарушении сбавка 0,30 балла]

Если гимнаст ушёл за пределы ковра за предметом и так и не принял заключительную позу:
нет окончания — сбавка судей композиции 0,30 балла
прерывание упражнения — сбавка судей исполнения 0,50 балла
выход за пределы ковра — сбавка старшего судьи исполнения 0,20 балла
всего 1,00 балла`,
              hi: `प्रदर्शन का समापन फ़्लोर पर किसी भी स्थान पर हो सकता है, परंतु उपकरण को छूते हुए समापन की मुद्रा बनानी चाहिए और पूरी तरह गति रोककर समाप्त करना चाहिए।
[उल्लंघन की स्थिति में कटौती 0.30 अंक]

यदि जिम्नास्ट उपकरण लेने फ़्लोर से बाहर जाए और उसके बाद अंतिम मुद्रा न बनाए:
समापन नहीं  संरचना निर्णायकों से कटौती 0.30 अंक
प्रदर्शन में बाधा  निष्पादन निर्णायकों से कटौती 0.50 अंक
फ़्लोर से बाहर  निष्पादन के प्रमुख निर्णायक से कटौती 0.20 अंक
कुल 1.00 अंक`,
            },
          },
          {
            title: {
              ja: '技術的価値の採点',
              en: 'Scoring of Technical Value',
              zh: '技术价值的评分',
              ko: '기술적 가치의 채점',
              es: 'Valoración del valor técnico',
              fr: 'Notation de la valeur technique',
              ru: 'Оценка технической ценности',
              hi: 'तकनीकी मूल्य का अंक निर्धारण',
            },
            element: {
              ja: `＜難度の数とレベル＞ 第49条による

【難度要素】
1. 徒手系要素をともなって実施される難度  第71条による。
2. 転回系要素をともなって実施される難度  第69条による。
3. 投げ受けをともなって実施される難度  第70条による。
                    
【各種要素の組み合わせ】
1. 各運動の組み合わせによる技術的価値
演技は各運動の組み合わせ価値によっても技術的価値を異にする。

2. 難度要素の配分
難度要素は演技全体に均一に配分されることが求められる。

3. 難度要素の安定
難度要素は競技者の能力に応じて構成されなければらない。


＜手具操作の技術的価値＞

【手具操作における左手と右手の均衡】
手具の操作は、１つの調和のとれた構成として、片寄ることなく、左手と右手で操作されなければならない。

【投げ受けの技術的価値】
手具の投げ受けは、手具操作の流れを止めることなく行われなければならない。また、手だけでなく、その他の部位を使った投げ受けやし野外での投げ受けも高い技術的価値として認めることができる。`,
              en: `<Number and level of difficulties> See Article 49.

[Difficulty elements]
1. Difficulties performed with free-hand elements: see Article 71.
2. Difficulties performed with tumbling elements: see Article 69.
3. Difficulties performed with throws and catches: see Article 70.

[Combination of elements]
1. Technical value from combining movements
The technical value of a routine also depends on the value of how the movements are combined.

2. Distribution of difficulty elements
Difficulty elements should be distributed evenly throughout the routine.

3. Stability of difficulty elements
Difficulty elements must be chosen according to the gymnast's ability.


<Technical value of apparatus handling>

[Balance between the left and right hands]
As a harmonious whole, the apparatus must be handled with both the left and right hands, without favoring one.

[Technical value of throws and catches]
Throws and catches must be performed without stopping the flow of apparatus handling. Throws and catches with parts of the body other than the hands, and throws and catches outside the field of vision, can also be recognized as having high technical value.`,
              zh: `＜难度的数量与等级＞ 依据第49条

【难度要素】
1. 伴随徒手要素完成的难度  依据第71条。
2. 伴随翻腾要素完成的难度  依据第69条。
3. 伴随抛接完成的难度  依据第70条。
                    
【各种要素的组合】
1. 各动作组合产生的技术价值
成套动作的技术价值也因各动作的组合价值而有所不同。

2. 难度要素的分配
要求难度要素在整套动作中均匀分配。

3. 难度要素的稳定
难度要素必须根据参赛者的能力进行编排。


＜器械操作的技术价值＞

【器械操作中左手与右手的均衡】
器械的操作必须作为一个协调的整体，不偏向一侧，用左手和右手进行操作。

【抛接的技术价值】
器械的抛接必须在不中断器械操作流畅性的情况下进行。此外，不仅用手，使用其他部位的抛接以及视野外的抛接，也可以认定为具有较高的技术价值。`,
              ko: `<난도의 수와 레벨> 제49조에 따른다

【난도 요소】
1. 신체 계열 요소를 동반하여 실시되는 난도  제71조에 따른다.
2. 공중돌기 계열 요소를 동반하여 실시되는 난도  제69조에 따른다.
3. 던져 받기를 동반하여 실시되는 난도  제70조에 따른다.
                    
【각종 요소의 조합】
1. 각 운동의 조합에 따른 기술적 가치
연기는 각 운동의 조합 가치에 따라서도 기술적 가치가 달라진다.

2. 난도 요소의 배분
난도 요소는 연기 전체에 균일하게 배분될 것이 요구된다.

3. 난도 요소의 안정
난도 요소는 경기자의 능력에 맞추어 구성되어야 한다.


<수구 조작의 기술적 가치>

【수구 조작에서의 왼손과 오른손의 균형】
수구의 조작은 하나의 조화로운 구성으로서, 한쪽으로 치우치지 않고 왼손과 오른손으로 이루어져야 한다.

【던져 받기의 기술적 가치】
수구의 던져 받기는 수구 조작의 흐름을 멈추지 않고 이루어져야 한다. 또한 손뿐만 아니라 그 밖의 부위를 사용한 던져 받기나 시야 밖에서의 던져 받기도 높은 기술적 가치로 인정할 수 있다.`,
              es: `<Número y nivel de las dificultades> Según el artículo 49.

[Elementos de dificultad]
1. Dificultades realizadas con elementos de manos libres: según el artículo 71.
2. Dificultades realizadas con elementos de tumbling: según el artículo 69.
3. Dificultades realizadas con lanzamiento y recogida: según el artículo 70.

[Combinación de los distintos elementos]
1. Valor técnico de la combinación de los movimientos
El valor técnico del ejercicio varía también según el valor de la combinación de los movimientos.

2. Distribución de los elementos de dificultad
Se exige que los elementos de dificultad estén repartidos de manera uniforme a lo largo de todo el ejercicio.

3. Estabilidad de los elementos de dificultad
Los elementos de dificultad deben componerse de acuerdo con la capacidad del gimnasta.


<Valor técnico del manejo del aparato>

[Equilibrio entre la mano izquierda y la mano derecha en el manejo del aparato]
El aparato debe manejarse con la mano izquierda y con la mano derecha, sin predominio de una sobre la otra, formando una composición armoniosa.

[Valor técnico del lanzamiento y la recogida]
El lanzamiento y la recogida del aparato deben realizarse sin interrumpir la fluidez del manejo del aparato. Además, los lanzamientos y recogidas realizados con partes del cuerpo distintas de las manos, así como los realizados fuera del campo visual, pueden reconocerse como de alto valor técnico.`,
              fr: `< Nombre et niveau des difficultés > Voir l'article 49.

[Éléments de difficulté]
1. Difficultés exécutées avec des éléments corporels : voir l'article 71.
2. Difficultés exécutées avec des éléments de tumbling : voir l'article 69.
3. Difficultés exécutées avec des lancers-rattrapés : voir l'article 70.

[Combinaison des éléments]
1. Valeur technique issue de la combinaison des mouvements
La valeur technique de l'exercice dépend aussi de la valeur des combinaisons de mouvements.

2. Répartition des éléments de difficulté
Les éléments de difficulté doivent être répartis de manière homogène sur l'ensemble de l'exercice.

3. Stabilité des éléments de difficulté
Les éléments de difficulté doivent être choisis en fonction des capacités du gymnaste.


< Valeur technique du maniement de l'engin >

[Équilibre entre la main gauche et la main droite]
Dans un ensemble harmonieux, l'engin doit être manié aussi bien de la main gauche que de la main droite, sans privilégier l'une ou l'autre.

[Valeur technique des lancers-rattrapés]
Les lancers et les rattrapés doivent être exécutés sans interrompre la continuité du maniement. Les lancers et rattrapés réalisés avec une autre partie du corps que les mains, ainsi que ceux réalisés hors du champ de vision, peuvent également être reconnus comme d'une valeur technique élevée.`,
              ru: `<Число и уровень трудностей> Согласно статье 49

[Элементы трудности]
1. Трудности, выполняемые с элементами без предмета — согласно статье 71.
2. Трудности, выполняемые с акробатическими элементами — согласно статье 69.
3. Трудности, выполняемые с броском и ловлей — согласно статье 70.

[Сочетание элементов]
1. Техническая ценность сочетания движений
Техническая ценность упражнения зависит и от ценности сочетания движений.

2. Распределение элементов трудности
Элементы трудности должны быть равномерно распределены по всему упражнению.

3. Устойчивость элементов трудности
Элементы трудности должны подбираться по возможностям гимнаста.


<Техническая ценность работы с предметом>

[Равновесие правой и левой руки]
Как единое гармоничное целое, предмет должен работать и в левой, и в правой руке, без перекоса в одну сторону.

[Техническая ценность бросков и ловли]
Броски и ловля должны выполняться без остановки потока работы с предметом. Броски и ловля не только руками, но и другими частями тела, а также вне поля зрения также могут признаваться высокой технической ценностью.`,
              hi: `<कठिनाइयों की संख्या और स्तर> अनुच्छेद 49 के अनुसार

[कठिनाई तत्व]
1. बिना उपकरण के तत्वों के साथ किए जाने वाली कठिनाइयाँ  अनुच्छेद 71 के अनुसार।
2. टम्बलिंग तत्वों के साथ किए जाने वाली कठिनाइयाँ  अनुच्छेद 69 के अनुसार।
3. फेंकने और पकड़ने के साथ किए जाने वाली कठिनाइयाँ  अनुच्छेद 70 के अनुसार।

[विभिन्न तत्वों का संयोजन]
1. प्रत्येक गति के संयोजन से बनने वाला तकनीकी मूल्य
प्रदर्शन का तकनीकी मूल्य गतियों के संयोजन के मूल्य से भी भिन्न होता है।

2. कठिनाई तत्वों का वितरण
कठिनाई तत्वों का पूरे प्रदर्शन में समान रूप से वितरण अपेक्षित है।

3. कठिनाई तत्वों की स्थिरता
कठिनाई तत्वों की संरचना जिम्नास्ट की क्षमता के अनुसार होनी चाहिए।


<उपकरण संचालन का तकनीकी मूल्य>

[उपकरण संचालन में बाएँ और दाएँ हाथ का संतुलन]
उपकरण का संचालन एक सामंजस्यपूर्ण संरचना के रूप में, किसी एक ओर झुके बिना, बाएँ और दाएँ दोनों हाथों से होना चाहिए।

[फेंकने और पकड़ने का तकनीकी मूल्य]
उपकरण को फेंकना और पकड़ना, उपकरण संचालन के प्रवाह को रोके बिना किया जाना चाहिए। साथ ही, केवल हाथ से ही नहीं, बल्कि शरीर के अन्य भागों से फेंकना और पकड़ना तथा दृष्टि क्षेत्र से बाहर फेंकना और पकड़ना भी उच्च तकनीकी मूल्य के रूप में मान्य किया जा सकता है।`,
            },
          },
          {
            title: {
              ja: '多様性の採点',
              en: 'Scoring of Variety',
              zh: '多样性的评分',
              ko: '다양성의 채점',
              es: 'Valoración de la variedad',
              fr: 'Notation de la variété',
              ru: 'Оценка разнообразия',
              hi: 'विविधता का अंक निर्धारण',
            },
            element: {
              ja: `1. 徒手系要素の多様性
様々な徒手系の運動要素と組み合わせにおいて、多様性に富むものでなければならない。

2. 転回系要素の多様性
様々な転回系の要素や種類、その組み合わせにおいて、多様性の富むものでなければならない。

3. 手具操作の多様性
様々な手具の操作やその組み合わせにおいて、多様性に富むものでなければならない。（付録：各手具の演技参照）

4. 空間使用の多様性
様々な移動を含め、その方向、大きさ、軌道、高さにおいて、演技面全体を使うものでなければならない。

5. リズム変化の多様性
音楽の性格、そのリズムと完全に一致した運動で、そのリズムの変化が多様性に富むものでなければならない。

6. ダイナミズム（力動感）の変化の多様性
ダイナミズムとはスピードと力強さの変化によって表現される力動感のことで、その緩急の変化において、多様性に富むものでなければならない。`,
              en: `1. Variety of free-hand elements
The routine must be rich in variety of free-hand movements and their combinations.

2. Variety of tumbling elements
The routine must be rich in variety of tumbling elements, their types and their combinations.

3. Variety of apparatus handling
The routine must be rich in variety of apparatus handling and its combinations. (See the Appendix: routines with each apparatus.)

4. Variety in the use of space
The routine must use the whole floor area, with a variety of movements across the floor, in their directions, sizes, paths and levels.

5. Variety of rhythm
The movements must match the character and rhythm of the music exactly, and the changes of rhythm must be rich in variety.

6. Variety of dynamics
Dynamics means the sense of power expressed by changes in speed and strength. The changes between fast and slow must be rich in variety.`,
              zh: `1. 徒手要素的多样性
在各种徒手动作要素及其组合上，必须富于多样性。

2. 翻腾要素的多样性
在各种翻腾要素的种类及其组合上，必须富于多样性。

3. 器械操作的多样性
在各种器械操作及其组合上，必须富于多样性。（附录：参见各器械的成套动作）

4. 空间使用的多样性
包括各种移动在内，在其方向、幅度、路线、高度上，必须使用整个场地。

5. 节奏变化的多样性
动作必须与音乐的性格及其节奏完全一致，其节奏的变化必须富于多样性。

6. 动感（力动感）变化的多样性
动感是指通过速度与力度的变化所表现出的力动感，在其快慢变化上，必须富于多样性。`,
              ko: `1. 신체 계열 요소의 다양성
다양한 신체 계열의 운동 요소와 그 조합에서 다양성이 풍부하여야 한다.

2. 공중돌기 계열 요소의 다양성
다양한 공중돌기 계열의 요소와 종류, 그 조합에서 다양성이 풍부하여야 한다.

3. 수구 조작의 다양성
다양한 수구의 조작과 그 조합에서 다양성이 풍부하여야 한다. (부록: 각 수구의 연기 참조)

4. 공간 사용의 다양성
다양한 이동을 포함하여 그 방향, 크기, 궤도, 높이에서 연기 면 전체를 사용하여야 한다.

5. 리듬 변화의 다양성
음악의 성격, 그 리듬과 완전히 일치한 운동으로, 그 리듬의 변화가 다양성이 풍부하여야 한다.

6. 다이내미즘(역동감) 변화의 다양성
다이내미즘이란 스피드와 힘의 변화에 의해 표현되는 역동감을 말하며, 그 완급의 변화에서 다양성이 풍부하여야 한다.`,
              es: `1. Variedad de los elementos de manos libres
El ejercicio debe ser rico en variedad de movimientos de manos libres y de sus combinaciones.

2. Variedad de los elementos de tumbling
El ejercicio debe ser rico en variedad de elementos de tumbling, de sus tipos y de sus combinaciones.

3. Variedad del manejo del aparato
El ejercicio debe ser rico en variedad de manejos del aparato y de sus combinaciones. (Véase el anexo: ejercicios con cada aparato.)

4. Variedad en el uso del espacio
El ejercicio debe utilizar todo el practicable, con desplazamientos variados en su dirección, su amplitud, su trayectoria y su altura.

5. Variedad en los cambios de ritmo
Los movimientos deben coincidir plenamente con el carácter de la música y con su ritmo, y los cambios de ritmo deben ser ricos en variedad.

6. Variedad en los cambios de dinamismo
El dinamismo es la sensación de fuerza que se expresa mediante los cambios de velocidad y de intensidad; sus contrastes entre rapidez y lentitud deben ser ricos en variedad.`,
              fr: `1. Variété des éléments corporels
L'exercice doit être riche en mouvements corporels variés et en combinaisons variées.

2. Variété des éléments de tumbling
L'exercice doit être riche en éléments de tumbling variés, dans leurs types comme dans leurs combinaisons.

3. Variété du maniement de l'engin
L'exercice doit être riche en maniements variés de l'engin et en combinaisons variées. (Voir l'annexe : exercices à chaque engin.)

4. Variété dans l'utilisation de l'espace
L'exercice doit occuper tout le praticable, avec des déplacements variés dans leurs directions, leur amplitude, leurs trajectoires et leurs niveaux.

5. Variété des changements de rythme
Les mouvements doivent correspondre exactement au caractère et au rythme de la musique, et les changements de rythme doivent être riches et variés.

6. Variété des changements de dynamisme
Le dynamisme est l'impression de force exprimée par les variations de vitesse et d'intensité. Les alternances entre rapidité et lenteur doivent être riches et variées.`,
              ru: `1. Разнообразие элементов без предмета
Упражнение должно быть богато разнообразием движений без предмета и их сочетаний.

2. Разнообразие акробатических элементов
Упражнение должно быть богато разнообразием акробатических элементов, их видов и сочетаний.

3. Разнообразие работы с предметом
Упражнение должно быть богато разнообразием приёмов работы с предметом и их сочетаний. (См. приложение: упражнения с каждым предметом.)

4. Разнообразие использования пространства
Упражнение должно охватывать весь ковёр, включая разные перемещения — по направлению, размаху, траектории и высоте.

5. Разнообразие смены ритма
Движения должны в точности совпадать с характером музыки и её ритмом, а смены ритма — быть разнообразными.

6. Разнообразие динамики
Динамика — это ощущение силы, выраженное сменой скорости и мощности; чередование быстрого и медленного должно быть разнообразным.`,
              hi: `1. बिना उपकरण के तत्वों की विविधता
विभिन्न बिना उपकरण की गतियों के तत्वों और उनके संयोजनों में विविधता से भरपूर होना चाहिए।

2. टम्बलिंग तत्वों की विविधता
विभिन्न टम्बलिंग तत्वों, उनके प्रकारों और उनके संयोजनों में विविधता से भरपूर होना चाहिए।

3. उपकरण संचालन की विविधता
विभिन्न उपकरण संचालन और उनके संयोजनों में विविधता से भरपूर होना चाहिए। (परिशिष्ट: प्रत्येक उपकरण का प्रदर्शन देखें)

4. स्थान के उपयोग की विविधता
विभिन्न स्थानांतरणों सहित, उनकी दिशा, आकार, पथ और ऊँचाई में, पूरे फ़्लोर का उपयोग होना चाहिए।

5. लय परिवर्तन की विविधता
संगीत के स्वभाव और उसकी लय से पूर्णतः मेल खाती गतियों में, लय का परिवर्तन विविधता से भरपूर होना चाहिए।

6. गतिशीलता (शक्ति-भाव) के परिवर्तन की विविधता
गतिशीलता का अर्थ है गति और शक्ति के परिवर्तन से व्यक्त होने वाला शक्ति-भाव, और उसके तेज़-धीमे के परिवर्तन में विविधता से भरपूर होना चाहिए।`,
            },
          },
          {
            title: {
              ja: '音楽と動きの関係の採点',
              en: 'Scoring of the Relationship Between Music and Movement',
              zh: '音乐与动作关系的评分',
              ko: '음악과 움직임의 관계의 채점',
              es: 'Valoración de la relación entre la música y el movimiento',
              fr: 'Notation du rapport entre la musique et le mouvement',
              ru: 'Оценка связи музыки и движения',
              hi: 'संगीत और गति के संबंध का अंक निर्धारण',
            },
            element: {
              ja: '新体操の伴奏音楽は、よい音色とメロディーによって特徴付けられるものでなければならない。演技は音楽の性格やリズムに合致しなければならない。',
              en: 'The accompanying music for rhythmic gymnastics must be characterized by good tone and melody. The routine must match the character and rhythm of the music.',
              zh: '艺术体操的伴奏音乐必须以优美的音色和旋律为特征。成套动作必须与音乐的性格和节奏相吻合。',
              ko: '리듬체조의 반주 음악은 좋은 음색과 멜로디로 특징지어지는 것이어야 한다. 연기는 음악의 성격과 리듬에 합치하여야 한다.',
              es: 'La música de acompañamiento de la gimnasia rítmica debe caracterizarse por un buen timbre y una buena melodía. El ejercicio debe corresponderse con el carácter y el ritmo de la música.',
              fr: "La musique d'accompagnement de la gymnastique rythmique doit se distinguer par la qualité de sa sonorité et de sa mélodie. L'exercice doit correspondre au caractère et au rythme de la musique.",
              ru: 'Музыкальное сопровождение в художественной гимнастике должно отличаться хорошим звучанием и мелодией. Упражнение должно соответствовать характеру и ритму музыки.',
              hi: 'लयबद्ध जिम्नास्टिक का संगत संगीत अच्छे स्वर और मधुर धुन से युक्त होना चाहिए। प्रदर्शन संगीत के स्वभाव और लय से मेल खाना चाहिए।',
            },
          },
          {
            title: {
              ja: 'ボーナス加点',
              en: 'Bonus',
              zh: '奖励加分',
              ko: '보너스 가점',
              es: 'Bonificación',
              fr: 'Bonifications',
              ru: 'Бонусные надбавки',
              hi: 'बोनस अतिरिक्त अंक',
            },
            element: {
              ja: `【独創性】
構成は、新しい技術や新しい組み合わせなど、新しさの探求と技術的な創造性によって特徴付けられる独創性が求められる。その独創性が認められる構成にはボーナス加点が与えられる。

独創的な構成とは、以下の事柄などが求められる。
1. 新しい要素（身体の動きの要素、手具操作の要素、転回系またはそれらの連携の要素）
2. 競技者と手具の関係における新しさ
3. すでにある要素の新しい実施方法
4. すでにある要素の新しい組み合わせ
【加点・・・0.20点】

【追加の難度】
演技の技術的な価値は主として難度のレベルと数、その組み合わせ価値によって考慮される。以下の（１）〜（４）の場合に、その「技術の価値」に対しボーナス加点が与えられる。

1. 構成中に４つ以上のＤ難度が入っている場合
2. 手具を投げ上げている間に、４つ以上の徒手系や転回系を組み合わせて実施するもの、またはＤ難度の投げ受けを２本投げで行なった場合。
3. 手具を保持して行うＤ難度の転回系に、投げまたは２回以上の操作を実施するものが入っていた場合
4. 視野外の投げ上げや受け取り、手以外での投げ上げや受け取りが入っていた場合。
【加点：項目一つにつき・・・0.10点】`,
              en: `[Originality]
The composition must show originality, characterized by the pursuit of novelty and technical creativity, such as new techniques and new combinations. A bonus is given to a composition recognized as original.

An original composition includes, for example:
1. New elements (body movement elements, apparatus handling elements, tumbling elements or links between them)
2. Novelty in the relationship between the gymnast and the apparatus
3. New ways of performing existing elements
4. New combinations of existing elements
[Bonus: 0.20 points]

[Additional difficulty]
The technical value of a routine is mainly determined by the level and number of difficulties and the value of their combinations. A bonus for this technical value is given in the following cases (1) to (4).

1. The composition includes four or more D difficulties.
2. Four or more free-hand or tumbling elements are combined during a throw, or a D difficulty throw and catch is performed with two apparatus thrown.
3. A D difficulty tumbling element performed while holding the apparatus includes a throw or two or more handlings.
4. The routine includes a throw or catch outside the field of vision, or a throw or catch with a part of the body other than the hands.
[Bonus: 0.10 points per item]`,
              zh: `【独创性】
编排要求具有独创性，即以新技术、新组合等对新颖性的追求和技术上的创造性为特征。对被认定具有独创性的编排给予奖励加分。

独创的编排要求具备以下内容等。
1. 新的要素（身体动作的要素、器械操作的要素、翻腾动作或它们衔接的要素）
2. 参赛者与器械关系上的新颖性
3. 已有要素的新的完成方法
4. 已有要素的新的组合
【加分……0.20分】

【追加的难度】
成套动作的技术价值主要根据难度的等级与数量及其组合价值来考量。在以下（1）—（4）的情况下，对该“技术价值”给予奖励加分。

1. 编排中编入4个以上D难度时
2. 在抛起器械期间组合完成4个以上徒手动作或翻腾动作，或以抛出2个器械完成D难度的抛接时。
3. 持器械完成的D难度翻腾动作中，含有抛出或2次以上操作时
4. 含有视野外的抛起或接、用手以外部位的抛起或接时。
【加分：每项……0.10分】`,
              ko: `【독창성】
구성에는 새로운 기술이나 새로운 조합 등, 새로움의 탐구와 기술적인 창조성으로 특징지어지는 독창성이 요구된다. 그 독창성이 인정되는 구성에는 보너스 가점이 주어진다.

독창적인 구성이란 다음과 같은 사항이 요구되는 것을 말한다.
1. 새로운 요소(신체 움직임의 요소, 수구 조작의 요소, 공중돌기 계열 또는 그것들의 연계 요소)
2. 경기자와 수구의 관계에서의 새로움
3. 이미 있는 요소의 새로운 실시 방법
4. 이미 있는 요소의 새로운 조합
【가점...0.20점】

【추가 난도】
연기의 기술적인 가치는 주로 난도의 레벨과 수, 그 조합 가치에 의해 고려된다. 다음 (1)~(4)의 경우에 그 "기술의 가치"에 대하여 보너스 가점이 주어진다.

1. 구성 중에 4개 이상의 D난도가 들어 있는 경우
2. 수구를 던져 올리고 있는 동안에 4개 이상의 신체 계열이나 공중돌기 계열을 조합하여 실시하는 것, 또는 D난도의 던져 받기를 2개 던지기로 실시한 경우.
3. 수구를 잡고 실시하는 D난도의 공중돌기 계열에 던지기 또는 2회 이상의 조작을 실시하는 것이 들어 있는 경우
4. 시야 밖에서의 던져 올리기나 받기, 손 이외의 부위에 의한 던져 올리기나 받기가 들어 있는 경우.
【가점: 항목 1개당...0.10점】`,
              es: `[Originalidad]
Se exige que la composición presente originalidad, caracterizada por la búsqueda de lo nuevo y por la creatividad técnica, como nuevas técnicas y nuevas combinaciones. A la composición en la que se reconoce esa originalidad se le concede una bonificación.

Una composición original exige, entre otros, los aspectos siguientes.
1. Elementos nuevos (elementos de movimiento corporal, elementos de manejo del aparato, elementos de tumbling o elementos de enlace entre ellos)
2. Novedad en la relación entre el gimnasta y el aparato
3. Nuevas formas de ejecutar elementos ya existentes
4. Nuevas combinaciones de elementos ya existentes
[Bonificación: 0.20 puntos]

[Dificultades adicionales]
El valor técnico del ejercicio se valora principalmente por el nivel y el número de las dificultades y por el valor de sus combinaciones. En los casos (1) a (4) siguientes se concede una bonificación por ese «valor técnico».

1. Cuando la composición incluye cuatro o más dificultades D
2. Cuando, mientras el aparato está en el aire, se combinan y realizan cuatro o más elementos de manos libres o de tumbling, o cuando se realiza un lanzamiento y recogida de dificultad D lanzando los dos aparatos.
3. Cuando un elemento de tumbling de dificultad D realizado sujetando el aparato incluye un lanzamiento o dos o más manejos del aparato
4. Cuando se incluyen lanzamientos o recogidas fuera del campo visual, o lanzamientos o recogidas con una parte del cuerpo distinta de las manos.
[Bonificación: 0.10 puntos por cada apartado]`,
              fr: `[Originalité]
La composition doit faire preuve d'originalité, marquée par une recherche de nouveauté et une créativité technique : techniques inédites, combinaisons inédites, etc. Une bonification est accordée à une composition reconnue comme originale.

Une composition originale comporte par exemple :
1. des éléments nouveaux (éléments de mouvement corporel, éléments de maniement de l'engin, éléments de tumbling ou liaisons entre eux) ;
2. une nouveauté dans la relation entre le gymnaste et son engin ;
3. de nouvelles façons d'exécuter des éléments existants ;
4. de nouvelles combinaisons d'éléments existants.
[Bonification : 0,20 point]

[Difficultés supplémentaires]
La valeur technique de l'exercice est déterminée principalement par le niveau et le nombre des difficultés ainsi que par la valeur de leurs combinaisons. Une bonification est accordée à ce titre dans les cas (1) à (4) suivants.

1. La composition comporte quatre difficultés D ou plus.
2. Quatre éléments corporels ou de tumbling ou plus sont combinés pendant un lancer, ou un lancer-rattrapé de difficulté D est réalisé avec deux engins lancés.
3. Un élément de tumbling de difficulté D exécuté en tenant l'engin comporte un lancer ou au moins deux maniements.
4. L'exercice comporte un lancer ou un rattrapé hors du champ de vision, ou un lancer ou un rattrapé avec une autre partie du corps que les mains.
[Bonification : 0,10 point par point rempli]`,
              ru: `[Оригинальность]
От композиции требуется оригинальность, выраженная в поиске нового и в технической изобретательности: новых элементах и новых сочетаниях. За композицию, признанную оригинальной, начисляется бонусная надбавка.

Оригинальной считается композиция, в которой есть, например, следующее.
1. Новые элементы (движения тела, приёмы работы с предметом, акробатика или связки между ними)
2. Новизна во взаимодействии гимнаста и предмета
3. Новый способ исполнения уже известного элемента
4. Новое сочетание уже известных элементов
[Надбавка: 0,20 балла]

[Дополнительная трудность]
Техническая ценность упражнения определяется прежде всего уровнем и числом трудностей и ценностью их сочетаний. В случаях (1)–(4) за эту «техническую ценность» начисляется бонусная надбавка.

1. В композиции есть четыре трудности D и более.
2. Во время броска предмета выполнено сочетание из четырёх и более элементов без предмета либо акробатических элементов, либо трудность D «бросок и ловля» выполнена с броском двух предметов.
3. Акробатическая трудность D, выполняемая с предметом в руках, включает бросок или два и более приёмов работы с предметом.
4. В упражнении есть бросок или ловля вне поля зрения либо бросок или ловля не рукой.
[Надбавка: 0,10 балла за каждый пункт]`,
              hi: `[मौलिकता]
संरचना में नई तकनीक और नए संयोजन जैसी नवीनता की खोज तथा तकनीकी सृजनशीलता से युक्त मौलिकता अपेक्षित है। जिस संरचना में वह मौलिकता मानी जाती है, उसे बोनस अतिरिक्त अंक दिया जाता है।

मौलिक संरचना में निम्नलिखित बातें अपेक्षित हैं।
1. नए तत्व (शरीर की गति के तत्व, उपकरण संचालन के तत्व, टम्बलिंग या उनके तालमेल के तत्व)
2. जिम्नास्ट और उपकरण के संबंध में नवीनता
3. पहले से मौजूद तत्वों को करने के नए तरीके
4. पहले से मौजूद तत्वों के नए संयोजन
[अतिरिक्त अंक 0.20 अंक]

[अतिरिक्त कठिनाई]
प्रदर्शन का तकनीकी मूल्य मुख्यतः कठिनाइयों के स्तर और संख्या तथा उनके संयोजन के मूल्य से आँका जाता है। नीचे दिए (1)–(4) की स्थिति में उस "तकनीक के मूल्य" के लिए बोनस अतिरिक्त अंक दिया जाता है।

1. संरचना में 4 या अधिक D कठिनाइयाँ शामिल हों।
2. उपकरण के हवा में रहने के दौरान 4 या अधिक बिना उपकरण के या टम्बलिंग तत्वों को संयोजित करके किया जाए, अथवा D कठिनाई का फेंकना और पकड़ना 2 उपकरण फेंककर किया जाए।
3. उपकरण पकड़े हुए की जाने वाली D कठिनाई की टम्बलिंग में फेंकना या 2 या अधिक संचालन शामिल हो।
4. दृष्टि क्षेत्र से बाहर फेंकना या पकड़ना, अथवा हाथ के अलावा किसी अन्य भाग से फेंकना या पकड़ना शामिल हो।
[अतिरिक्त अंक: प्रत्येक मद के लिए 0.10 अंक]`,
            },
          },
          {
            title: {
              ja: '構成の欠点',
              en: 'Composition Faults',
              zh: '编排的缺点',
              ko: '구성의 결점',
              es: 'Faltas de composición',
              fr: 'Fautes de composition',
              ru: 'Ошибки композиции',
              hi: 'संरचना के दोष',
            },
            element: {
              ja: `上記に欠点を示していない構成の減点は次の表による。
構成欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

構成欠点表`,
              en: `Composition deductions not listed above follow the table below.
Composition fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of composition faults`,
              zh: `上述未列出缺点的编排，其扣分依据下表。
编排缺点标准
【大缺点　　明显欠缺时　　　　扣分……0.30分】
【中缺点　　欠缺时　　　　　　扣分……0.20分】
【小缺点　　略有欠缺时　　　　扣分……0.10分】
【微小缺点　稍有欠缺时　　　　扣分……0.05分】

编排缺点表`,
              ko: `위에 결점을 제시하지 않은 구성의 감점은 다음 표에 따른다.
구성 결점 기준
【대결점  현저하게 부족한 경우  감점...0.30점】
【중결점  부족한 경우  감점...0.20점】
【소결점  조금 부족한 경우  감점...0.10점】
【미소결점  약간 부족한 경우  감점...0.05점】

구성 결점 표`,
              es: `Las penalizaciones de composición no indicadas anteriormente se aplican según la tabla siguiente.
Criterios de faltas de composición
[Falta grande  Carencia notable  Penalización: 0.30 puntos]
[Falta media  Carencia  Penalización: 0.20 puntos]
[Falta pequeña  Carencia leve  Penalización: 0.10 puntos]
[Falta muy pequeña  Carencia mínima  Penalización: 0.05 puntos]

Tabla de faltas de composición`,
              fr: `Les pénalités de composition non mentionnées ci-dessus figurent dans le tableau ci-dessous.
Barème des fautes de composition
[Grande faute  manque très marqué  pénalité de 0,30 point]
[Faute moyenne  manque  pénalité de 0,20 point]
[Petite faute  léger manque  pénalité de 0,10 point]
[Très petite faute  manque minime  pénalité de 0,05 point]

Tableau des fautes de composition`,
              ru: `Сбавки за ошибки композиции, не перечисленные выше, определяются по таблице ниже.
Критерии ошибок композиции
[Грубая ошибка — заметно недостаёт  сбавка 0,30 балла]
[Средняя ошибка — недостаёт  сбавка 0,20 балла]
[Мелкая ошибка — немного недостаёт  сбавка 0,10 балла]
[Незначительная ошибка — чуть-чуть недостаёт  сбавка 0,05 балла]

Таблица ошибок композиции`,
              hi: `ऊपर जिन दोषों का उल्लेख नहीं है, उनकी संरचना की कटौती नीचे दी गई तालिका के अनुसार है।
संरचना दोष मानक
[बड़ा दोष  अत्यधिक कमी होने पर  कटौती 0.30 अंक]
[मध्यम दोष  कमी होने पर  कटौती 0.20 अंक]
[छोटा दोष  थोड़ी कमी होने पर  कटौती 0.10 अंक]
[अति छोटा दोष  बहुत थोड़ी कमी होने पर  कटौती 0.05 अंक]

संरचना दोष तालिका`,
            },
            image: [
              {
                src: '/images/rules/(D)kettenhyou(S).png',
                alt: {
                  ja: '構成欠点表',
                  en: 'Table of composition faults',
                  zh: '编排缺点表',
                  ko: '구성 결점 표',
                  es: 'Tabla de faltas de composición',
                  fr: 'Tableau des fautes de composition',
                  ru: 'Таблица ошибок композиции',
                  hi: 'संरचना दोष तालिका',
                },
              },
            ],
          },
        ],
      },
      {
        title: {
          ja: '実施（Ｅ）',
          en: 'Execution (E)',
          zh: '完成（E）',
          ko: '실시(E)',
          es: 'Ejecución (E)',
          fr: 'Exécution (E)',
          ru: 'Исполнение (E)',
          hi: 'निष्पादन (E)',
        },
        block: [
          {
            title: {
              ja: '演技のできばえ',
              en: 'Quality of the Routine',
              zh: '成套动作的完成质量',
              ko: '연기의 완성도',
              es: 'Calidad del ejercicio',
              fr: "Qualité de l'exercice",
              ru: 'Качество упражнения',
              hi: 'प्रदर्शन की गुणवत्ता',
            },
            element: {
              ja: '演技は手具操作をともなった徒手系の技術、転回系の技術、伴奏音楽との調和など全体の調和と安定性があり、全体を通じて途切れない印象でのびのびと行われなければならない。伴奏音楽に合わせ、軽快で美しく、かつ優美な表現を持った実施が求められる。',
              en: 'A routine must show overall harmony and stability in free-hand technique with apparatus handling, tumbling technique and harmony with the accompanying music, and must be performed freely, giving an impression of continuity throughout. Execution that is light, beautiful and graceful, in time with the music, is required.',
              zh: '成套动作必须在伴随器械操作的徒手技术、翻腾技术以及与伴奏音乐的协调等方面具有整体的协调性与稳定性，并自始至终以不间断的印象舒展地完成。要求配合伴奏音乐，做出轻快、优美且具有优雅表现力的完成。',
              ko: '연기는 수구 조작을 동반한 신체 계열의 기술, 공중돌기 계열의 기술, 반주 음악과의 조화 등 전체의 조화와 안정성을 갖추고, 전체를 통하여 끊김 없는 인상으로 시원스럽게 이루어져야 한다. 반주 음악에 맞추어 경쾌하고 아름다우며 우아한 표현을 지닌 실시가 요구된다.',
              es: 'El ejercicio debe presentar armonía y estabilidad en su conjunto —técnica de manos libres con manejo del aparato, técnica de tumbling y armonía con la música de acompañamiento— y debe realizarse con soltura, dando una impresión de continuidad de principio a fin. Se exige una ejecución ligera, bella y elegante, acorde con la música de acompañamiento.',
              fr: "L'exercice doit présenter une harmonie et une stabilité d'ensemble dans la technique corporelle accompagnée du maniement de l'engin, dans la technique de tumbling et dans l'accord avec la musique d'accompagnement ; il doit être présenté avec aisance et donner une impression de continuité du début à la fin. Une exécution légère, belle et gracieuse, en accord avec la musique, est exigée.",
              ru: 'Упражнение должно обладать цельностью и устойчивостью во всём: в технике без предмета, сопровождаемой работой с предметом, в акробатической технике и в согласии с музыкальным сопровождением, и выполняться свободно, оставляя впечатление непрерывности от начала до конца. Требуется лёгкое, красивое и изящное исполнение в такт музыке.',
              hi: 'प्रदर्शन में उपकरण संचालन के साथ की जाने वाली बिना उपकरण की तकनीक, टम्बलिंग की तकनीक तथा संगत संगीत के साथ सामंजस्य जैसे समग्र सामंजस्य और स्थिरता होनी चाहिए, और पूरे प्रदर्शन में निरंतरता के प्रभाव के साथ खुलकर किया जाना चाहिए। संगत संगीत के साथ, हल्का, सुंदर और लावण्यपूर्ण अभिव्यक्ति वाला निष्पादन अपेक्षित है।',
            },
          },
          {
            title: {
              ja: '手具操作の技術の採点',
              en: 'Scoring of Apparatus Handling Technique',
              zh: '器械操作技术的评分',
              ko: '수구 조작 기술의 채점',
              es: 'Valoración de la técnica del manejo del aparato',
              fr: "Notation de la technique de maniement de l'engin",
              ru: 'Оценка техники работы с предметом',
              hi: 'उपकरण संचालन की तकनीक का अंक निर्धारण',
            },
            element: {
              ja: `【一般的な技術】
演技中の手具は、常に自然性を持ち、その手具自体の重さからくる惰力を利用して、動かなければならない。また演技上必要とされる静止を除いて、手具を止めてはならない。

【振り回しの技術】
手具を手に持って、振ったり回したりする場合は、原則として腕の延長のように扱わなければならない。

【投げ受けの技術】
1. 手で手具を投げる技術
特殊な投げを除き、原則として振りや回しの技術を利用して投げなければならない。

2. 手具を受ける技術
手具の受け取りは、手具の落下に合わせ、その次の操作に必要とされる部分を、自然性を持って受け取り、止めることなく次の操作に移らなければならない。`,
              en: `[General technique]
During the routine, the apparatus must always move naturally, using the momentum that comes from its own weight. The apparatus must not be stopped, except for static positions required by the routine.

[Swinging technique]
When the apparatus is swung or circled in the hand, as a rule it must be handled like an extension of the arm.

[Throwing and catching technique]
1. Throwing the apparatus with the hand
Except for special throws, as a rule the apparatus must be thrown using the swinging or circling technique.

2. Catching the apparatus
The apparatus must be caught naturally, in time with its fall, at the part needed for the next handling, and the gymnast must move on to the next handling without stopping.`,
              zh: `【一般的技术】
成套动作中的器械必须始终保持自然性，利用器械自身重量产生的惯性运动。此外，除成套动作所需要的静止外，不得使器械停止。

【挥摆的技术】
手持器械进行挥摆或绕环时，原则上必须像手臂的延长一样进行操作。

【抛接的技术】
1. 用手抛出器械的技术
除特殊的抛出外，原则上必须利用挥摆或绕环的技术抛出。

2. 接器械的技术
接器械时，必须配合器械的下落，自然地用下一个操作所需要的部位接住，并不停顿地转入下一个操作。`,
              ko: `【일반적인 기술】
연기 중의 수구는 항상 자연성을 지니고, 그 수구 자체의 무게에서 오는 타력을 이용하여 움직여야 한다. 또한 연기상 필요로 하는 정지를 제외하고는 수구를 멈추어서는 안 된다.

【휘두르기의 기술】
수구를 손에 들고 흔들거나 돌리는 경우에는 원칙적으로 팔의 연장처럼 다루어야 한다.

【던져 받기의 기술】
1. 손으로 수구를 던지는 기술
특수한 던지기를 제외하고는 원칙적으로 흔들기나 돌리기의 기술을 이용하여 던져야 한다.

2. 수구를 받는 기술
수구의 받기는 수구의 낙하에 맞추어, 다음 조작에 필요로 하는 부분을 자연성을 지니고 받아, 멈추지 않고 다음 조작으로 옮겨가야 한다.`,
              es: `[Técnica general]
Durante el ejercicio, el aparato debe moverse siempre con naturalidad, aprovechando la inercia que produce su propio peso. Además, el aparato no debe detenerse, salvo en las paradas que el ejercicio requiera.

[Técnica de los balanceos y los giros del aparato]
Cuando el aparato se balancea o se hace girar sujetándolo con la mano, debe manejarse, por regla general, como una prolongación del brazo.

[Técnica del lanzamiento y la recogida]
1. Técnica del lanzamiento del aparato con la mano
Salvo en los lanzamientos especiales, por regla general el lanzamiento debe realizarse aprovechando la técnica del balanceo o del giro del aparato.

2. Técnica de la recogida del aparato
La recogida del aparato debe hacerse con naturalidad, acompañando su caída y tomándolo por la parte necesaria para el manejo siguiente, y debe enlazarse con ese manejo sin detenerse.`,
              fr: `[Technique générale]
Pendant l'exercice, l'engin doit toujours se déplacer avec naturel, en utilisant l'élan que lui donne son propre poids. L'engin ne doit pas être immobilisé, sauf pour les temps d'arrêt exigés par l'exercice.

[Technique des balancers]
Lorsque l'engin est balancé ou tournoyé dans la main, il doit en principe être manié comme un prolongement du bras.

[Technique des lancers-rattrapés]
1. Lancer l'engin avec la main
Sauf lancers particuliers, l'engin doit en principe être lancé en utilisant la technique du balancer ou de la rotation.

2. Rattraper l'engin
L'engin doit être rattrapé avec naturel, au rythme de sa chute, par la partie nécessaire au maniement suivant, et le gymnaste doit enchaîner sans temps d'arrêt.`,
              ru: `[Общая техника]
Во время упражнения предмет должен двигаться естественно, используя инерцию собственного веса. Кроме статических положений, необходимых по замыслу упражнения, останавливать предмет нельзя.

[Техника махов и вращений]
Когда предмет в руке совершает махи или круги, его, как правило, следует вести как продолжение руки.

[Техника броска и ловли]
1. Бросок предмета рукой
За исключением особых бросков, бросать следует, как правило, используя технику маха или круга.

2. Ловля предмета
Предмет нужно ловить естественно, в такт его падению, той частью, которая нужна для следующего приёма, и без остановки переходить к этому приёму.`,
              hi: `[सामान्य तकनीक]
प्रदर्शन के दौरान उपकरण सदैव स्वाभाविकता के साथ, अपने भार से उत्पन्न जड़त्व का उपयोग करते हुए चलना चाहिए। साथ ही, प्रदर्शन के लिए आवश्यक स्थिर मुद्रा को छोड़कर, उपकरण को रोकना नहीं चाहिए।

[झुलाने और घुमाने की तकनीक]
उपकरण को हाथ में पकड़कर झुलाते या घुमाते समय, सिद्धांत रूप में उसे भुजा के विस्तार की तरह संभालना चाहिए।

[फेंकने और पकड़ने की तकनीक]
1. हाथ से उपकरण फेंकने की तकनीक
विशेष फेंक को छोड़कर, सिद्धांत रूप में झुलाने या घुमाने की तकनीक का उपयोग करके फेंकना चाहिए।

2. उपकरण पकड़ने की तकनीक
उपकरण को पकड़ते समय, उसके गिरने के अनुसार, अगले संचालन के लिए आवश्यक भाग को स्वाभाविकता के साथ पकड़ना चाहिए और बिना रोके अगले संचालन में जाना चाहिए।`,
            },
          },
          {
            title: {
              ja: '体の動きの技術の採点',
              en: 'Scoring of Body Movement Technique',
              zh: '身体动作技术的评分',
              ko: '신체 움직임 기술의 채점',
              es: 'Valoración de la técnica de los movimientos corporales',
              fr: 'Notation de la technique du mouvement corporel',
              ru: 'Оценка техники движений тела',
              hi: 'शरीर की गति की तकनीक का अंक निर्धारण',
            },
            element: {
              ja: `身体の動きの技術は、次の項目で採点される。
                  
1. 徒手系の技術
徒手系は、美しい姿勢と柔軟性をもって行われ、みぞおちから始まる動きの自然性や深さ、大きさ、動きの間やアクセント、跳躍の高さ、そしてスピードに変化があり、身体の四肢の部分まで制御された動きでなければならない。

2.転回系の技術
転回系は、スピードと高さ、回転軸の正確性と着地の安定性を持ったダイナミックな動きでなければならない。

3. リズミカルな実施
演技は軽快に伸びやかに行わなければならない。`,
              en: `Body movement technique is scored on the following points.

1. Free-hand technique
Free-hand movements must be performed with beautiful posture and flexibility. Movements starting from the solar plexus must be natural, deep and large, with pauses and accents, height in jumps and changes of speed, and must be controlled to the tips of the limbs.

2. Tumbling technique
Tumbling must be dynamic, with speed and height, an accurate axis of rotation and stable landings.

3. Rhythmic execution
The routine must be performed lightly and expansively.`,
              zh: `身体动作的技术按以下项目评分。
                  
1. 徒手的技术
徒手动作必须以优美的姿势与柔韧性完成，从心窝开始的动作要有自然性、深度与幅度，动作的间歇与重音、跳跃的高度以及速度要有变化，并且必须是控制到身体四肢末端的动作。

2.翻腾的技术
翻腾必须是具有速度与高度、转体轴准确、落地稳定的富有动感的动作。

3. 有节奏的完成
成套动作必须轻快而舒展地完成。`,
              ko: `신체 움직임의 기술은 다음 항목으로 채점된다.
                  
1. 신체 계열의 기술
신체 계열은 아름다운 자세와 유연성을 가지고 이루어지며, 명치에서 시작되는 움직임의 자연성과 깊이, 크기, 움직임의 간격과 악센트, 도약의 높이, 그리고 스피드에 변화가 있고, 신체의 사지 끝부분까지 제어된 움직임이어야 한다.

2.공중돌기 계열의 기술
공중돌기 계열은 스피드와 높이, 회전축의 정확성과 착지의 안정성을 지닌 다이내믹한 움직임이어야 한다.

3. 리드미컬한 실시
연기는 경쾌하고 시원스럽게 이루어져야 한다.`,
              es: `La técnica de los movimientos corporales se valora según los apartados siguientes.

1. Técnica de manos libres
Los elementos de manos libres deben realizarse con una postura bella y con flexibilidad, con naturalidad, profundidad y amplitud en los movimientos que nacen del plexo solar, con pausas y acentos, con altura en los saltos y con cambios de velocidad, y deben estar controlados hasta las extremidades del cuerpo.

2. Técnica de tumbling
El tumbling debe ser un movimiento dinámico, con velocidad y altura, con un eje de giro preciso y con recepciones estables.

3. Ejecución rítmica
El ejercicio debe realizarse con ligereza y amplitud.`,
              fr: `La technique du mouvement corporel est notée sur les points suivants.

1. Technique corporelle
Les éléments corporels doivent être exécutés avec une belle posture et de la souplesse. Partant du plexus solaire, les mouvements doivent être naturels, profonds et amples, avec des temps d'arrêt et des accents, de la hauteur dans les sauts et des variations de vitesse, et être contrôlés jusqu'aux extrémités des membres.

2. Technique de tumbling
Le tumbling doit être dynamique, avec de la vitesse et de la hauteur, un axe de rotation précis et des réceptions stables.

3. Exécution rythmique
L'exercice doit être présenté avec légèreté et ampleur.`,
              ru: `Техника движений тела оценивается по следующим пунктам.

1. Техника без предмета
Движения без предмета выполняются с красивой осанкой и гибкостью. Движение, идущее от солнечного сплетения, должно быть естественным, глубоким и размашистым, с паузами и акцентами, с высотой прыжков и сменой скорости, и должно быть подконтрольным вплоть до кончиков конечностей.

2. Акробатическая техника
Акробатика должна быть динамичной, со скоростью и высотой, точной осью вращения и устойчивыми приземлениями.

3. Ритмичность исполнения
Упражнение должно выполняться легко и широко.`,
              hi: `शरीर की गति की तकनीक का अंक निर्धारण निम्नलिखित बिंदुओं पर होता है।

1. बिना उपकरण की तकनीक
बिना उपकरण की गतियाँ सुंदर मुद्रा और लचीलेपन के साथ की जानी चाहिए, तथा पेट के ऊपरी मध्य भाग से आरंभ होने वाली गति की स्वाभाविकता, गहराई और विशालता, गति के ठहराव और आघात, छलांग की ऊँचाई तथा गति में परिवर्तन हो, और शरीर के अंगों के सिरों तक नियंत्रित गति होनी चाहिए।

2. टम्बलिंग की तकनीक
टम्बलिंग गति और ऊँचाई, घूर्णन अक्ष की शुद्धता तथा अवतरण की स्थिरता के साथ गतिशील होनी चाहिए।

3. लयबद्ध निष्पादन
प्रदर्शन हल्के और खुले ढंग से किया जाना चाहिए।`,
            },
          },
          {
            title: {
              ja: 'ボーナス加点',
              en: 'Bonus',
              zh: '奖励加分',
              ko: '보너스 가점',
              es: 'Bonificación',
              fr: 'Bonifications',
              ru: 'Бонусные надбавки',
              hi: 'बोनस अतिरिक्त अंक',
            },
            element: {
              ja: `【熟練度と芸術性】
熟練度とは、手具を扱う技術と身体の動きの技術とが、完璧にかつ同時にコントロールされていることをいう。また芸術性とは、それらの技術を用いて、音楽のテーマと構成のメッセージを観衆に表現し伝え感動させることを言う。以下を満たした場合、これに対してボーナス加点が与えられる。

1. 演技全体が欠点なく演じられた場合
2. 演技全体を通じて、完璧な技術、ゆとり、卓抜な大きさを持って行われた場合
3. 音楽のテーマと構成のメッセージを完璧に表現し演じられた場合
【加点・・・各0.10点】

※ここでの欠点は第65条実施の欠点表に記載されている「徒手の動きの技術」以外の欠点がない場合をいう。`,
              en: `[Mastery and artistry]
Mastery means that apparatus handling technique and body movement technique are controlled perfectly and simultaneously. Artistry means using these techniques to express the theme of the music and the message of the composition to the audience, conveying it and moving them. A bonus is given when the following are met.

1. The whole routine is performed without faults.
2. The whole routine is performed with perfect technique, ease and outstanding amplitude.
3. The theme of the music and the message of the composition are expressed perfectly.
[Bonus: 0.10 points each]

* "Without faults" here means that there are no faults in the table of execution faults in Article 65 other than those under "free-hand movement technique".`,
              zh: `【熟练度与艺术性】
熟练度是指操作器械的技术与身体动作的技术被完美且同时地控制。艺术性是指运用这些技术，向观众表现并传达音乐的主题与编排的信息，使其受到感动。满足以下各项时，对此给予奖励加分。

1. 整套动作完成得没有缺点时
2. 整套动作自始至终以完美的技术、从容和卓越的幅度完成时
3. 完美地表现并演绎音乐的主题与编排的信息时
【加分……各0.10分】

※这里所说的没有缺点，是指没有第65条完成缺点表中记载的“徒手动作技术”以外的缺点。`,
              ko: `【숙련도와 예술성】
숙련도란 수구를 다루는 기술과 신체 움직임의 기술이 완벽하게 그리고 동시에 제어되고 있는 것을 말한다. 또한 예술성이란 그러한 기술을 사용하여 음악의 주제와 구성의 메시지를 관중에게 표현하고 전달하여 감동시키는 것을 말한다. 다음을 충족한 경우에 이에 대하여 보너스 가점이 주어진다.

1. 연기 전체가 결점 없이 연기된 경우
2. 연기 전체를 통하여 완벽한 기술, 여유, 탁월한 크기를 가지고 이루어진 경우
3. 음악의 주제와 구성의 메시지를 완벽하게 표현하여 연기된 경우
【가점...각 0.10점】

※여기에서의 결점이란 제65조 실시의 결점 표에 기재되어 있는 "신체 움직임의 기술" 이외의 결점이 없는 경우를 말한다.`,
              es: `[Maestría y artisticidad]
La maestría consiste en controlar de forma perfecta y simultánea la técnica del manejo del aparato y la técnica de los movimientos corporales. La artisticidad consiste en emplear esas técnicas para expresar y transmitir al público el tema de la música y el mensaje de la composición, y emocionarlo. Cuando se cumplen los puntos siguientes se concede una bonificación.

1. Cuando todo el ejercicio se realiza sin faltas
2. Cuando todo el ejercicio se realiza con una técnica perfecta, con soltura y con una amplitud sobresaliente
3. Cuando el tema de la música y el mensaje de la composición se expresan e interpretan a la perfección
[Bonificación: 0.10 puntos cada uno]

* Aquí se entiende «sin faltas» cuando no se comete ninguna de las faltas recogidas en la tabla de faltas de ejecución del artículo 65 distintas de las de «técnica de los movimientos de manos libres».`,
              fr: `[Maîtrise et artistique]
La maîtrise signifie que la technique de maniement de l'engin et la technique du mouvement corporel sont contrôlées parfaitement et simultanément. L'artistique consiste à utiliser ces techniques pour exprimer au public le thème de la musique et le message de la composition, le lui transmettre et l'émouvoir. Une bonification est accordée lorsque les conditions suivantes sont remplies.

1. L'exercice est présenté d'un bout à l'autre sans faute.
2. L'exercice est présenté d'un bout à l'autre avec une technique parfaite, de l'aisance et une amplitude remarquable.
3. Le thème de la musique et le message de la composition sont parfaitement exprimés.
[Bonification : 0,10 point pour chaque condition]

* « Sans faute » signifie ici qu'aucune faute du tableau des fautes d'exécution de l'article 65 n'est relevée, hormis celles relevant de la « technique du mouvement corporel ».`,
              ru: `[Мастерство и художественность]
Мастерство — это совершенное и одновременное владение техникой работы с предметом и техникой движений тела. Художественность — это умение средствами этой техники выразить зрителю тему музыки и замысел композиции, донести их и тронуть зрителя. При выполнении перечисленного ниже начисляется бонусная надбавка.

1. Всё упражнение исполнено без ошибок.
2. Всё упражнение исполнено с безупречной техникой, свободно и с выдающимся размахом.
3. Тема музыки и замысел композиции выражены безупречно.
[Надбавка: по 0,10 балла]

※ «Без ошибок» здесь означает отсутствие ошибок из таблицы ошибок исполнения статьи 65, кроме относящихся к «технике движений без предмета».`,
              hi: `[निपुणता और कलात्मकता]
निपुणता का अर्थ है उपकरण संभालने की तकनीक और शरीर की गति की तकनीक का पूर्ण रूप से तथा एक साथ नियंत्रित होना। और कलात्मकता का अर्थ है उन तकनीकों का उपयोग करके संगीत के विषय और संरचना के संदेश को दर्शकों तक व्यक्त करना, पहुँचाना और उन्हें भावविभोर करना। नीचे दी गई बातें पूरी होने पर इसके लिए बोनस अतिरिक्त अंक दिया जाता है।

1. पूरा प्रदर्शन बिना किसी दोष के किया गया हो
2. पूरे प्रदर्शन में पूर्ण तकनीक, सहजता और उत्कृष्ट विशालता के साथ किया गया हो
3. संगीत के विषय और संरचना के संदेश को पूर्ण रूप से व्यक्त करते हुए किया गया हो
[अतिरिक्त अंक: प्रत्येक 0.10 अंक]

* यहाँ दोष से आशय यह है कि अनुच्छेद 65 की निष्पादन दोष तालिका में दी गई "बिना उपकरण की गति की तकनीक" के अलावा कोई दोष न हो।`,
            },
          },
          {
            title: {
              ja: '実施の欠点',
              en: 'Execution Faults',
              zh: '完成的缺点',
              ko: '실시의 결점',
              es: 'Faltas de ejecución',
              fr: "Fautes d'exécution",
              ru: 'Ошибки исполнения',
              hi: 'निष्पादन के दोष',
            },
            element: {
              ja: `上記に欠点を示していない実施の減点は次の表による。
実施欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

実施欠点表`,
              en: `Execution deductions not listed above follow the table below.
Execution fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of execution faults`,
              zh: `上述未列出缺点的完成，其扣分依据下表。
完成缺点标准
【大缺点　　明显欠缺时　　　　扣分……0.30分】
【中缺点　　欠缺时　　　　　　扣分……0.20分】
【小缺点　　略有欠缺时　　　　扣分……0.10分】
【微小缺点　稍有欠缺时　　　　扣分……0.05分】

完成缺点表`,
              ko: `위에 결점을 제시하지 않은 실시의 감점은 다음 표에 따른다.
실시 결점 기준
【대결점  현저하게 부족한 경우  감점...0.30점】
【중결점  부족한 경우  감점...0.20점】
【소결점  조금 부족한 경우  감점...0.10점】
【미소결점  약간 부족한 경우  감점...0.05점】

실시 결점 표`,
              es: `Las penalizaciones de ejecución no indicadas anteriormente se aplican según la tabla siguiente.
Criterios de faltas de ejecución
[Falta grande  Carencia notable  Penalización: 0.30 puntos]
[Falta media  Carencia  Penalización: 0.20 puntos]
[Falta pequeña  Carencia leve  Penalización: 0.10 puntos]
[Falta muy pequeña  Carencia mínima  Penalización: 0.05 puntos]

Tabla de faltas de ejecución`,
              fr: `Les pénalités d'exécution non mentionnées ci-dessus figurent dans le tableau ci-dessous.
Barème des fautes d'exécution
[Grande faute  manque très marqué  pénalité de 0,30 point]
[Faute moyenne  manque  pénalité de 0,20 point]
[Petite faute  léger manque  pénalité de 0,10 point]
[Très petite faute  manque minime  pénalité de 0,05 point]

Tableau des fautes d'exécution`,
              ru: `Сбавки за ошибки исполнения, не перечисленные выше, определяются по таблице ниже.
Критерии ошибок исполнения
[Грубая ошибка — заметно недостаёт  сбавка 0,30 балла]
[Средняя ошибка — недостаёт  сбавка 0,20 балла]
[Мелкая ошибка — немного недостаёт  сбавка 0,10 балла]
[Незначительная ошибка — чуть-чуть недостаёт  сбавка 0,05 балла]

Таблица ошибок исполнения`,
              hi: `ऊपर जिन दोषों का उल्लेख नहीं है, उनके निष्पादन की कटौती नीचे दी गई तालिका के अनुसार है।
निष्पादन दोष मानक
[बड़ा दोष  अत्यधिक कमी होने पर  कटौती 0.30 अंक]
[मध्यम दोष  कमी होने पर  कटौती 0.20 अंक]
[छोटा दोष  थोड़ी कमी होने पर  कटौती 0.10 अंक]
[अति छोटा दोष  बहुत थोड़ी कमी होने पर  कटौती 0.05 अंक]

निष्पादन दोष तालिका`,
            },
            image: [
              {
                src: '/images/rules/(E)kettenhyou(S).png',
                alt: {
                  ja: '実施欠点表',
                  en: 'Table of execution faults',
                  zh: '完成缺点表',
                  ko: '실시 결점 표',
                  es: 'Tabla de faltas de ejecución',
                  fr: "Tableau des fautes d'exécution",
                  ru: 'Таблица ошибок исполнения',
                  hi: 'निष्पादन दोष तालिका',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
