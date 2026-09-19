import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、団体競技。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const GROUP_SCORING_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '団体競技',
      en: 'Group Competition',
      zh: '团体比赛',
      ko: '단체 경기',
      es: 'Competición por conjuntos',
      fr: 'Compétition par ensembles',
      ru: 'Групповые соревнования',
      hi: 'समूह प्रतियोगिता',
    },
    section: [
      {
        title: {
          ja: '団体競技（自由演技）の採点',
          en: 'Scoring of the Group Competition (Free Routine)',
          zh: '团体比赛（自选成套动作）的评分',
          ko: '단체 경기(자유 연기)의 채점',
          es: 'Puntuación de la competición por conjuntos (ejercicio libre)',
          fr: 'Notation de la compétition par ensembles (exercice libre)',
          ru: 'Оценка групповых соревнований (произвольное упражнение)',
          hi: 'समूह प्रतियोगिता (स्वतंत्र प्रदर्शन) का अंक निर्धारण',
        },
        block: [
          {
            title: {
              ja: '団体（自由演技）の採点項目と配点',
              en: 'Scoring Criteria and Points for the Group (Free Routine)',
              zh: '团体（自选成套动作）的评分项目与分值',
              ko: '단체(자유 연기)의 채점 항목과 배점',
              es: 'Criterios de puntuación y valores del conjunto (ejercicio libre)',
              fr: "Critères de notation et barème de l'ensemble (exercice libre)",
              ru: 'Критерии оценки и баллы для группового произвольного упражнения',
              hi: 'समूह (स्वतंत्र प्रदर्शन) के अंक निर्धारण के मद और अंक विभाजन',
            },
            element: {
              ja: '自由演技の配点と採点項目は以下の通りとする。',
              en: 'The points and scoring criteria for the free routine are as follows.',
              zh: '自选成套动作的分值与评分项目如下。',
              ko: '자유 연기의 배점과 채점 항목은 다음과 같이 한다.',
              es: 'Los valores y los criterios de puntuación del ejercicio libre son los siguientes.',
              fr: "Le barème et les critères de notation de l'exercice libre sont les suivants.",
              ru: 'Баллы и критерии оценки произвольного упражнения таковы.',
              hi: 'स्वतंत्र प्रदर्शन का अंक विभाजन और अंक निर्धारण के मद निम्नानुसार हैं।',
            },
            image: [
              {
                src: '/images/rules/SK(D)group.png',
                alt: {
                  ja: '採点項目（Ｄ）',
                  en: 'Scoring criteria (D)',
                  zh: '评分项目（D）',
                  ko: '채점 항목(D)',
                  es: 'Criterios de puntuación (D)',
                  fr: 'Critères de notation (D)',
                  ru: 'Критерии оценки (D)',
                  hi: 'अंक निर्धारण के मद (D)',
                },
              },
              {
                src: '/images/rules/SK(E)group.png',
                alt: {
                  ja: '採点項目（Ｅ）',
                  en: 'Scoring criteria (E)',
                  zh: '评分项目（E）',
                  ko: '채점 항목(E)',
                  es: 'Criterios de puntuación (E)',
                  fr: 'Critères de notation (E)',
                  ru: 'Критерии оценки (E)',
                  hi: 'अंक निर्धारण के मद (E)',
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
          ko: '구성(D·A)',
          es: 'Composición (D·A)',
          fr: 'Composition (D / A)',
          ru: 'Композиция (D/A)',
          hi: 'संरचना (D, A)',
        },
        block: [
          {
            title: {
              ja: '演技人数不足',
              en: 'Too Few Gymnasts',
              zh: '参演人数不足',
              ko: '연기 인원 부족',
              es: 'Número insuficiente de gimnastas',
              fr: 'Nombre de gymnastes insuffisant',
              ru: 'Неполный состав группы',
              hi: 'जिम्नास्टों की संख्या में कमी',
            },
            element: {
              ja: `演技人数が以下に満たない場合は、以下の通りとする。

1. ４名未満の場合は出場できない
1. ４〜５名の場合　【構成主任審判より減点：１名につき・・・1.50点】`,
              en: `If the number of gymnasts is below six, the following applies.

1. A group with fewer than four gymnasts may not compete.
1. A group with four or five gymnasts  [Deduction by the composition chief judge: 1.50 points per missing gymnast]`,
              zh: `参演人数不足以下规定时，按以下处理。

1. 不足4名时不得参赛
1. 4至5名时　【由编排主裁判员扣分：每1名……1.50分】`,
              ko: `연기 인원이 다음에 미치지 못하는 경우에는 다음과 같이 한다.

1. 4명 미만인 경우에는 출전할 수 없다
1. 4~5명인 경우  【구성 주임 심판원의 감점: 1명당...1.50점】`,
              es: `Cuando el número de gimnastas no alcance la cifra exigida, se aplicará lo siguiente.

1. Con menos de 4 gimnastas no se puede competir.
1. Con 4 o 5 gimnastas [Penalización del juez principal de composición: por cada gimnasta... 1.50 puntos]`,
              fr: `Si l'ensemble compte moins de six gymnastes, les dispositions suivantes s'appliquent.

1. Un ensemble de moins de quatre gymnastes ne peut pas concourir.
1. Un ensemble de quatre ou cinq gymnastes  [Pénalité du juge-arbitre de composition : 1,50 point par gymnaste manquant]`,
              ru: `Если гимнастов меньше шести, применяется следующее.

1. Группа менее чем из четырёх гимнастов к соревнованиям не допускается.
1. Группа из четырёх или пяти гимнастов  [Сбавка старшего судьи композиции: 1,50 балла за каждого недостающего гимнаста]`,
              hi: `यदि प्रदर्शन करने वाले जिम्नास्टों की संख्या नीचे दी गई संख्या से कम हो, तो निम्नानुसार होगा।

1. 4 से कम जिम्नास्ट होने पर भाग नहीं ले सकते
1. 4–5 जिम्नास्ट होने पर [संरचना के मुख्य निर्णायक द्वारा कटौती: प्रति जिम्नास्ट ... 1.50 अंक]`,
            },
          },
          {
            title: {
              ja: '構成に求められるもの',
              en: 'Requirements for the Composition',
              zh: '对编排的要求',
              ko: '구성에 요구되는 것',
              es: 'Requisitos de la composición',
              fr: 'Exigences de la composition',
              ru: 'Требования к композиции',
              hi: 'संरचना से अपेक्षाएँ',
            },
            element: {
              ja: '演技は徒手系要素と回転系要素を持って構成され、高い技術的価値と各種要素の多様性、音楽と動きの関係や独創性が求められる。また、すべての運動が合理性と安定性を持った組み合わせで、豊富な運動量を持って構成されなければならない。',
              en: 'A routine is composed of free-hand elements and tumbling elements, and must have high technical value, a variety of elements, a good relationship between music and movement, and originality. All movements must be combined rationally and with stability, and the routine must contain a large amount of movement.',
              zh: '成套动作由徒手类要素与翻腾类要素构成，要求具有高度的技术价值、各类要素的多样性、音乐与动作的关系以及独创性。此外，所有动作必须以合理而稳定的组合进行编排，并具有丰富的运动量。',
              ko: '연기는 신체 요소와 텀블링 요소를 가지고 구성되며, 높은 기술적 가치와 각종 요소의 다양성, 음악과 움직임의 관계나 독창성이 요구된다. 또한 모든 운동이 합리성과 안정성을 갖춘 조합으로, 풍부한 운동량을 가지고 구성되어야 한다.',
              es: 'El ejercicio se compone de elementos de manos libres y de elementos de tumbling, y se le exige un alto valor técnico, variedad en los distintos elementos, relación entre la música y el movimiento, y originalidad. Además, todos los movimientos deben combinarse de manera racional y estable, y la composición debe contener una gran cantidad de movimiento.',
              fr: "L'exercice se compose d'éléments corporels et d'éléments de tumbling ; il doit présenter une valeur technique élevée, une variété d'éléments, un bon rapport entre la musique et le mouvement ainsi que de l'originalité. Tous les mouvements doivent être enchaînés de façon rationnelle et avec stabilité, et l'exercice doit comporter une grande quantité de mouvement.",
              ru: 'Упражнение строится из элементов без предмета и акробатических элементов и должно обладать высокой технической ценностью, разнообразием элементов, связью музыки и движения и оригинальностью. Кроме того, все движения должны сочетаться рационально и устойчиво, а упражнение — содержать большой объём движения.',
              hi: 'प्रदर्शन बिना उपकरण के तत्वों और टम्बलिंग तत्वों से बनता है, और इसमें उच्च तकनीकी मूल्य, विभिन्न तत्वों की विविधता, संगीत और गति का संबंध तथा मौलिकता अपेक्षित है। साथ ही, सभी गतियाँ तर्कसंगत और स्थिर ढंग से संयोजित होनी चाहिए, और प्रदर्शन में गति की प्रचुर मात्रा होनी चाहिए।',
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
              ja: `1. 難度要素の価値
競技では、事故の体を完全に支配すべきものであるから、演技は競技者の能力に応じた力強さと美しさと安定が必要である。

2. 難度要素の価値とレベル
団体競技の難度要素としては以下の難度を入れなければならない。

【違反した場合　　減点：　
Ｂ難度不足　１つにつき・・・0.10点
Ｃ難度不足　１つにつき・・・0.30点
Ｄ難度不足　１つにつき・・・0.50点】

※要求された数以上の難度は、ランク下の難度として数えることができる。`,
              en: `1. Value of difficulty elements
Gymnasts must have complete control of their bodies in competition, so a routine requires power, beauty and stability suited to the gymnasts' ability.

2. Value and level of difficulty elements
A group routine must include the following difficulties.

[Violation: deductions
Each missing B difficulty: 0.10 points
Each missing C difficulty: 0.30 points
Each missing D difficulty: 0.50 points]

* Difficulties beyond the required number can be counted as difficulties of a lower rank.`,
              zh: `1. 难度要素的价值
比赛中必须完全支配自己的身体，因此成套动作需要与参赛者能力相适应的力度、美感与稳定性。

2. 难度要素的价值与等级
团体比赛的难度要素必须编入以下难度。

【违反时　　扣分：　
B难度不足　每1个……0.10分
C难度不足　每1个……0.30分
D难度不足　每1个……0.50分】

※超出要求数量的难度，可作为低一等级的难度计算。`,
              ko: `1. 난도 요소의 가치
경기에서는 자신의 몸을 완전히 지배하여야 하므로, 연기는 경기자의 능력에 맞는 힘참과 아름다움과 안정이 필요하다.

2. 난도 요소의 가치와 레벨
단체 경기의 난도 요소로서 다음의 난도를 넣어야 한다.

【위반한 경우  감점: 
B 난도 부족 1개당...0.10점
C 난도 부족 1개당...0.30점
D 난도 부족 1개당...0.50점】

※요구된 수 이상의 난도는 한 단계 아래의 난도로 셀 수 있다.`,
              es: `1. Valor de los elementos de dificultad
En competición hay que dominar por completo el propio cuerpo, por lo que el ejercicio exige fuerza, belleza y estabilidad acordes con la capacidad de los gimnastas.

2. Valor y nivel de los elementos de dificultad
Como elementos de dificultad de la competición por conjuntos hay que incluir las dificultades siguientes.

[En caso de incumplimiento, penalización:
Por cada dificultad B que falte... 0.10 puntos
Por cada dificultad C que falte... 0.30 puntos
Por cada dificultad D que falte... 0.50 puntos]

* Las dificultades que superen el número exigido pueden contarse como dificultades de un rango inferior.`,
              fr: `1. Valeur des éléments de difficulté
En compétition, les gymnastes doivent maîtriser parfaitement leur corps : l'exercice exige donc puissance, beauté et stabilité, en rapport avec les capacités des gymnastes.

2. Valeur et niveau des éléments de difficulté
L'exercice d'ensemble doit comporter les difficultés suivantes.

[En cas de manquement, pénalités :
chaque difficulté B manquante : 0,10 point
chaque difficulté C manquante : 0,30 point
chaque difficulté D manquante : 0,50 point]

* Les difficultés présentées au-delà du nombre exigé peuvent être comptées comme des difficultés du rang inférieur.`,
              ru: `1. Ценность элементов трудности
На соревнованиях гимнаст должен полностью владеть своим телом, поэтому упражнение требует силы, красоты и устойчивости, отвечающих возможностям гимнастов.

2. Ценность и уровень элементов трудности
Групповое упражнение должно включать следующие трудности.

[При нарушении сбавка:
за каждую недостающую трудность B — 0,10 балла
за каждую недостающую трудность C — 0,30 балла
за каждую недостающую трудность D — 0,50 балла]

※ Трудности сверх требуемого числа могут засчитываться как трудности рангом ниже.`,
              hi: `1. कठिनाई तत्वों का मूल्य
प्रतियोगिता में जिम्नास्ट को अपने शरीर पर पूर्ण नियंत्रण रखना चाहिए, इसलिए प्रदर्शन में जिम्नास्ट की क्षमता के अनुरूप शक्ति, सौंदर्य और स्थिरता आवश्यक है।

2. कठिनाई तत्वों का मूल्य और स्तर
समूह प्रतियोगिता के कठिनाई तत्वों के रूप में नीचे दी गई कठिनाइयाँ शामिल करनी होंगी।

[उल्लंघन होने पर कटौती:
B कठिनाई की कमी, प्रति एक ... 0.10 अंक
C कठिनाई की कमी, प्रति एक ... 0.30 अंक
D कठिनाई की कमी, प्रति एक ... 0.50 अंक]

* आवश्यक संख्या से अधिक कठिनाइयाँ निचले वर्ग की कठिनाई के रूप में गिनी जा सकती हैं।`,
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
              zh: '徒手类的要求要素',
              ko: '신체의 요구 요소',
              es: 'Elementos requeridos de manos libres',
              fr: "Exigences en matière d'éléments corporels",
              ru: 'Требования к элементам без предмета',
              hi: 'बिना उपकरण की आवश्यकताएँ',
            },
            element: {
              ja: `演技には徒手系基礎要素群１〜５全て入れなければならない。
２〜５は難度要素として数えることができるが、全員が同時または時間差で行われるものでなければならない。
また、静止は全員が同時に行うものでなければならない。

1. 徒手系基礎要素群の１つが全くない場合　　　【減点：１つにつき・・・1.00点】
2. 徒手系基礎要素群の１つが不十分な場合　　　【減点：１名につき・・・0.20点】
※不十分とは実施しない競技者がいた場合を示し、静止時間不足や柔軟性不足は実施減点とする。`,
              en: `A routine must include all the basic free-hand element groups 1 to 5.
Groups 2 to 5 can be counted as difficulty elements, but they must be performed by all gymnasts, either at the same time or one after another.
Static positions must be held by all gymnasts at the same time.

1. A basic free-hand element group is missing entirely.  [Deduction: 1.00 point per group]
2. A basic free-hand element group is incomplete.  [Deduction: 0.20 points per gymnast]
* Incomplete means that some gymnasts did not perform it. Holding a static position too briefly or insufficient flexibility is penalized in execution.`,
              zh: `成套动作必须编入徒手类基础要素组1至5的全部内容。
2至5可作为难度要素计算，但必须由全体队员同时或错时完成。
此外，静止必须由全体队员同时完成。

1. 完全没有徒手类基础要素组中的某一组时　　　【扣分：每1组……1.00分】
2. 徒手类基础要素组中的某一组不充分时　　　【扣分：每1名……0.20分】
※不充分是指有参赛者未做该动作，静止时间不足或柔韧性不足按完成扣分处理。`,
              ko: `연기에는 신체 기초 요소군 1~5를 모두 넣어야 한다.
2~5는 난도 요소로 셀 수 있으나, 전원이 동시에 또는 시간차로 실시하는 것이어야 한다.
또한 정지는 전원이 동시에 실시하는 것이어야 한다.

1. 신체 기초 요소군 중 하나가 전혀 없는 경우   【감점: 1개당...1.00점】
2. 신체 기초 요소군 중 하나가 불충분한 경우   【감점: 1명당...0.20점】
※불충분이란 실시하지 않은 경기자가 있는 경우를 가리키며, 정지 시간 부족이나 유연성 부족은 실시 감점으로 한다.`,
              es: `El ejercicio debe incluir todos los grupos de elementos básicos de manos libres, del 1 al 5.
Los grupos 2 a 5 pueden contarse como elementos de dificultad, pero deben realizarlos todos los gimnastas, a la vez o de forma escalonada.
Además, los mantenidos deben realizarlos todos los gimnastas a la vez.

1. Cuando falte por completo uno de los grupos de elementos básicos de manos libres [Penalización: por cada grupo... 1.00 punto]
2. Cuando uno de los grupos de elementos básicos de manos libres sea insuficiente [Penalización: por cada gimnasta... 0.20 puntos]
* Insuficiente significa que algún gimnasta no lo ha realizado; la falta de tiempo de mantenido o de flexibilidad se penaliza como falta de ejecución.`,
              fr: `L'exercice doit comporter l'ensemble des groupes d'éléments corporels de base 1 à 5.
Les groupes 2 à 5 peuvent être comptés comme éléments de difficulté, mais ils doivent être exécutés par tous les gymnastes, simultanément ou en décalé.
Les positions tenues doivent être maintenues par tous les gymnastes en même temps.

1. Un groupe d'éléments corporels de base est totalement absent.  [Pénalité : 1,00 point par groupe]
2. Un groupe d'éléments corporels de base est incomplet.  [Pénalité : 0,20 point par gymnaste]
* « Incomplet » signifie que certains gymnastes ne l'ont pas exécuté. Une position tenue trop brièvement ou un manque de souplesse relève des pénalités d'exécution.`,
              ru: `Упражнение должно включать все базовые группы элементов без предмета с 1-й по 5-ю.
Группы со 2-й по 5-ю можно засчитывать как элементы трудности, но их должны выполнять все гимнасты — одновременно или друг за другом.
Удержание статического положения должны выполнять все гимнасты одновременно.

1. Одна из базовых групп элементов без предмета полностью отсутствует.  [Сбавка: 1,00 балла за каждую группу]
2. Одна из базовых групп элементов без предмета выполнена неполностью.  [Сбавка: 0,20 балла за каждого гимнаста]
※ Неполностью означает, что кто-то из гимнастов элемент не выполнил; недостаточное время удержания или недостаточная гибкость наказываются как ошибки исполнения.`,
              hi: `प्रदर्शन में बिना उपकरण के आधारभूत तत्व वर्ग 1–5 सभी शामिल करने होंगे।
2–5 को कठिनाई तत्व के रूप में गिना जा सकता है, परंतु उन्हें सभी जिम्नास्ट एक साथ या क्रमवार समयांतर से करें।
साथ ही, स्थिर मुद्रा सभी जिम्नास्ट एक साथ करें।

1. बिना उपकरण के आधारभूत तत्व वर्गों में से एक पूरी तरह अनुपस्थित हो [कटौती: प्रति एक ... 1.00 अंक]
2. बिना उपकरण के आधारभूत तत्व वर्गों में से एक अपर्याप्त हो [कटौती: प्रति जिम्नास्ट ... 0.20 अंक]
* अपर्याप्त का अर्थ है कि कोई जिम्नास्ट उसे न करे; स्थिर मुद्रा के समय की कमी या लचीलेपन की कमी पर निष्पादन की कटौती होगी।`,
            },
            image: [
              {
                src: '/images/rules/(BM)requirement.png',
                alt: {
                  ja: '徒手系の要求要素表',
                  en: 'Table of free-hand requirements',
                  zh: '徒手类要求要素表',
                  ko: '신체의 요구 요소 표',
                  es: 'Tabla de elementos requeridos de manos libres',
                  fr: "Tableau des exigences en matière d'éléments corporels",
                  ru: 'Таблица требований к элементам без предмета',
                  hi: 'बिना उपकरण की आवश्यकताओं की तालिका',
                },
              },
            ],
          },
          {
            title: {
              ja: '転回系の種類',
              en: 'Types of Tumbling',
              zh: '翻腾类的种类',
              ko: '텀블링의 종류',
              es: 'Tipos de tumbling',
              fr: 'Types de tumbling',
              ru: 'Виды акробатических элементов',
              hi: 'टम्बलिंग के प्रकार',
            },
            element: {
              ja: `回転系には、助走を含めた転回運動と組および組立運動が含まれ、次の種類に分類される。

1. 同時技
全員が同時にスタートし、同時に技を終えるもの。
ただし同時技が終了後、直ちに数名が続けて転回系を行った場合も同時技として扱う。

2. シリーズ
競技者が一人ずつ、またはグループに分かれて、次々と途切れずに転回系を行ったもの。

3. 交差技
他の競技者の上を転回系で飛び越えるもの。

4. 組・組立運動
２人以上の競技者が組んで行う体操で、交互に体や力を利用しあうものをいう。
１名以上の競技者が接触したところから回転系として扱う。`,
              en: `Tumbling includes tumbling movements with their run-up, and partner and pyramid elements, and is classified into the following types.

1. Simultaneous elements
All gymnasts start and finish the element at the same time.
If several gymnasts continue with tumbling immediately after a simultaneous element, it is still treated as a simultaneous element.

2. Series
Gymnasts perform tumbling one after another without a break, individually or in groups.

3. Crossing elements
A gymnast tumbles over other gymnasts.

4. Partner and pyramid elements
Gymnastics performed by two or more gymnasts together, using each other's bodies and strength.
They count as tumbling from the moment one or more gymnasts make contact.`,
              zh: `翻腾类包括含助跑在内的翻腾动作以及双人、叠罗汉动作，分为以下种类。

1. 同时动作
全体队员同时开始、同时结束动作。
但同时动作结束后，若有数名队员立即接着完成翻腾类动作，也按同时动作处理。

2. 系列动作
参赛者逐个或分成小组，接连不断地完成翻腾类动作。

3. 交叉动作
以翻腾类动作从其他参赛者上方越过。

4. 双人、叠罗汉动作
指两名以上参赛者结伴进行的体操，相互利用身体和力量。
从1名以上参赛者接触之时起按翻腾类处理。`,
              ko: `텀블링에는 도움닫기를 포함한 텀블링 운동과 짝 및 조립 운동이 포함되며, 다음의 종류로 분류된다.

1. 동시 기술
전원이 동시에 출발하여 동시에 기술을 마치는 것.
단, 동시 기술이 끝난 후 곧바로 몇 명이 이어서 텀블링을 실시한 경우도 동시 기술로 취급한다.

2. 시리즈
경기자가 한 명씩, 또는 그룹으로 나뉘어 차례차례 끊김 없이 텀블링을 실시한 것.

3. 교차 기술
다른 경기자의 위를 텀블링으로 뛰어넘는 것.

4. 짝·조립 운동
2명 이상의 경기자가 짝을 이루어 실시하는 체조로, 서로 몸이나 힘을 이용하는 것을 말한다.
1명 이상의 경기자가 접촉한 지점부터 텀블링으로 취급한다.`,
              es: `El tumbling comprende los movimientos de volteo, incluida la carrera previa, y los elementos por parejas y las pirámides, y se clasifica en los tipos siguientes.

1. Elementos simultáneos
Todos los gimnastas empiezan a la vez y terminan el elemento a la vez.
No obstante, si justo después de terminar un elemento simultáneo varios gimnastas encadenan tumbling, también se considera elemento simultáneo.

2. Serie
Los gimnastas realizan el tumbling uno tras otro, sin interrupción, de forma individual o repartidos en grupos.

3. Elementos cruzados
Pasar por encima de otros gimnastas mediante tumbling.

4. Elementos por parejas y pirámides
Gimnasia realizada por dos o más gimnastas juntos, aprovechando alternativamente el cuerpo y la fuerza del otro.
Se considera tumbling desde el momento en que uno o más gimnastas entran en contacto.`,
              fr: `Le tumbling comprend les mouvements de rotation avec leur course d'élan ainsi que les éléments en duo et les pyramides ; il se classe dans les catégories suivantes.

1. Éléments simultanés
Tous les gymnastes commencent et terminent l'élément en même temps.
Si plusieurs gymnastes enchaînent immédiatement un tumbling après un élément simultané, celui-ci reste considéré comme un élément simultané.

2. Séries
Les gymnastes exécutent le tumbling les uns après les autres sans interruption, individuellement ou par groupes.

3. Éléments croisés
Un gymnaste franchit d'autres gymnastes en tumbling.

4. Éléments en duo et pyramides
Mouvements réalisés par deux gymnastes ou plus ensemble, en s'appuyant mutuellement sur leur corps et leur force.
Ils comptent comme tumbling à partir du moment où un ou plusieurs gymnastes entrent en contact.`,
              ru: `К акробатическим элементам относятся акробатические движения вместе с разбегом, а также парные элементы и пирамиды. Они делятся на следующие виды.

1. Одновременные элементы
Все гимнасты начинают и заканчивают элемент одновременно.
Если сразу после одновременного элемента несколько гимнастов продолжают акробатику, это тоже считается одновременным элементом.

2. Серия
Гимнасты по одному или группами выполняют акробатику друг за другом без перерыва.

3. Пересекающиеся элементы
Гимнаст перелетает акробатическим элементом через других гимнастов.

4. Парные элементы и пирамиды
Гимнастика, выполняемая двумя и более гимнастами вместе, с взаимным использованием тела и силы друг друга.
Они считаются акробатикой с момента, когда один или несколько гимнастов вступают в контакт.`,
              hi: `टम्बलिंग में दौड़ सहित पलटने की गतियाँ तथा जोड़ी और पिरामिड गतियाँ शामिल हैं, और इन्हें निम्नलिखित प्रकारों में बाँटा जाता है।

1. एक साथ किया जाने वाला तत्व
सभी जिम्नास्ट एक साथ शुरू करें और एक साथ तत्व समाप्त करें।
यदि एक साथ किए गए तत्व के तुरंत बाद कुछ जिम्नास्ट लगातार टम्बलिंग करें, तो उसे भी एक साथ किया गया तत्व माना जाता है।

2. शृंखला
जिम्नास्ट एक-एक करके, या समूहों में बँटकर, बिना रुके एक के बाद एक टम्बलिंग करें।

3. पार करने वाला तत्व
अन्य जिम्नास्टों के ऊपर से टम्बलिंग करते हुए कूदना।

4. जोड़ी और पिरामिड गतियाँ
दो या अधिक जिम्नास्टों द्वारा मिलकर की जाने वाली जिम्नास्टिक, जिसमें वे बारी-बारी से एक दूसरे के शरीर और बल का उपयोग करते हैं।
एक या अधिक जिम्नास्टों के संपर्क में आने के क्षण से इसे टम्बलिंग माना जाता है।`,
            },
          },
          {
            title: {
              ja: '回転系の条件',
              en: 'Conditions for Tumbling',
              zh: '翻腾类的条件',
              ko: '텀블링의 조건',
              es: 'Condiciones del tumbling',
              fr: 'Conditions du tumbling',
              ru: 'Условия зачёта акробатики',
              hi: 'टम्बलिंग की शर्तें',
            },
            element: {
              ja: `演技で実施された以下のものは転回系として数える。

1. １名以上が転回運動を単一（１回）または連続して実施した場合。
2. 組または組立運動を実施した場合。
3. 全員がいくつかのグループに分かれて次々と途切れずに（１）や（２）の転回運動を実施した場合。
4. 転回運動を行う際の助走は、転回系の一部として認める。
5. 側転を除く接転運動（前転・後転・横転・倒立回転）は転回系として数えないが、宙返りの後に補助的運動として行う前転および後転は回転系の一部として認める。
6. ３歩以上の助走つきのとびこみ前転（両足踏切）、２歩以内の助走つきのとびこみ前転（含片足踏切）でもひねりを加えた場合。`,
              en: `The following count as tumbling when performed in a routine.

1. One or more gymnasts perform a tumbling movement, once or in a series.
2. A partner or pyramid element is performed.
3. All gymnasts, divided into groups, perform the tumbling in (1) or (2) one after another without a break.
4. The run-up to a tumbling movement is accepted as part of the tumbling.
5. Rolling movements other than cartwheels (forward roll, backward roll, sideways roll, walkover) do not count as tumbling, but a forward or backward roll performed after a salto as a supporting movement is accepted as part of the tumbling.
6. A dive roll with a run-up of three or more steps (two-foot take-off), or a dive roll with a run-up of two steps or fewer (including a one-foot take-off) with an added twist.`,
              zh: `成套动作中完成的以下内容按翻腾类计算。

1. 1名以上队员单个（1次）或连续完成翻腾动作时。
2. 完成双人或叠罗汉动作时。
3. 全体队员分成若干小组，接连不断地完成（1）或（2）的翻腾动作时。
4. 完成翻腾动作时的助跑，认定为翻腾类的一部分。
5. 除侧手翻以外的滚翻动作（前滚翻、后滚翻、侧滚翻、手翻）不按翻腾类计算，但在空翻之后作为辅助动作完成的前滚翻和后滚翻，认定为翻腾类的一部分。
6. 带3步以上助跑的鱼跃前滚翻（双脚起跳），或带2步以内助跑的鱼跃前滚翻（含单脚起跳）但加入转体时。`,
              ko: `연기에서 실시된 다음의 것은 텀블링으로 센다.

1. 1명 이상이 텀블링 운동을 단일(1회) 또는 연속으로 실시한 경우.
2. 짝 또는 조립 운동을 실시한 경우.
3. 전원이 몇 개의 그룹으로 나뉘어 차례차례 끊김 없이 (1)이나 (2)의 텀블링 운동을 실시한 경우.
4. 텀블링 운동을 할 때의 도움닫기는 텀블링의 일부로 인정한다.
5. 옆돌기를 제외한 구르기 운동(앞구르기·뒤구르기·옆구르기·물구나무서기 돌기)은 텀블링으로 세지 않으나, 공중돌기 뒤에 보조적 운동으로 실시하는 앞구르기 및 뒤구르기는 텀블링의 일부로 인정한다.
6. 3보 이상의 도움닫기가 있는 다이빙 앞구르기(양발 구름), 2보 이내의 도움닫기가 있는 다이빙 앞구르기(한발 구름 포함)라도 비틀기를 더한 경우.`,
              es: `Se cuenta como tumbling lo siguiente cuando se realiza en el ejercicio.

1. Cuando uno o más gimnastas realizan un movimiento de volteo, aislado (una vez) o encadenado.
2. Cuando se realiza un elemento por parejas o una pirámide.
3. Cuando todos los gimnastas, repartidos en varios grupos, realizan uno tras otro y sin interrupción los movimientos de volteo de (1) o (2).
4. La carrera previa al movimiento de volteo se acepta como parte del tumbling.
5. Los movimientos rodados, salvo la rueda (voltereta adelante, voltereta atrás, rodada lateral, paloma), no se cuentan como tumbling; sin embargo, la voltereta adelante o atrás realizada tras un mortal como movimiento auxiliar se acepta como parte del tumbling.
6. La voltereta adelante lanzada con carrera de 3 pasos o más (batida con los dos pies), y la voltereta adelante lanzada con carrera de 2 pasos o menos (incluida la batida con un pie) cuando se le añade una pirueta.`,
              fr: `Les éléments suivants, lorsqu'ils sont présentés dans l'exercice, comptent comme tumbling.

1. Un ou plusieurs gymnastes exécutent un mouvement de rotation, isolé ou en série.
2. Un élément en duo ou une pyramide est exécuté.
3. Tous les gymnastes, répartis en groupes, exécutent les mouvements du point (1) ou (2) les uns après les autres sans interruption.
4. La course d'élan précédant un mouvement de rotation est considérée comme faisant partie du tumbling.
5. Les roulades autres que la roue (roulade avant, roulade arrière, roulade latérale, renversement) ne comptent pas comme tumbling ; en revanche, une roulade avant ou arrière exécutée après un salto comme mouvement d'appui est considérée comme faisant partie du tumbling.
6. Une roulade plongée avec une course d'élan de trois pas ou plus (appel des deux pieds), ou une roulade plongée avec une course d'élan de deux pas ou moins (appel d'un pied compris) assortie d'une vrille.`,
              ru: `Следующее, исполненное в упражнении, засчитывается как акробатика.

1. Один или несколько гимнастов выполнили акробатическое движение однократно или подряд.
2. Выполнен парный элемент или пирамида.
3. Все гимнасты, разделившись на группы, друг за другом без перерыва выполнили акробатику по пункту (1) или (2).
4. Разбег перед акробатическим движением засчитывается как часть акробатики.
5. Перекаты и кувырки, кроме колеса (кувырок вперёд, кувырок назад, перекат в сторону, переворот), акробатикой не считаются, однако кувырок вперёд или назад, выполненный после сальто как вспомогательное движение, засчитывается как часть акробатики.
6. Кувырок прыжком с разбегом в три шага и более (толчок двумя ногами), а также кувырок прыжком с разбегом в два шага и менее (в том числе с толчком одной ногой), если добавлен поворот.`,
              hi: `प्रदर्शन में किए गए निम्नलिखित को टम्बलिंग के रूप में गिना जाता है।

1. एक या अधिक जिम्नास्ट पलटने की गति एक बार या लगातार करें।
2. जोड़ी या पिरामिड गति की जाए।
3. सभी जिम्नास्ट कई समूहों में बँटकर, बिना रुके एक के बाद एक (1) या (2) की पलटने की गति करें।
4. पलटने की गति करते समय की दौड़ को टम्बलिंग का भाग माना जाता है।
5. कार्टव्हील को छोड़कर लुढ़कने की गतियाँ (आगे लुढ़कना, पीछे लुढ़कना, बगल में लुढ़कना, वॉकओवर) टम्बलिंग में नहीं गिनी जातीं, परंतु सॉल्टो के बाद सहायक गति के रूप में किया गया आगे या पीछे लुढ़कना टम्बलिंग का भाग माना जाता है।
6. 3 या अधिक कदम की दौड़ के साथ डाइव रोल (दोनों पैरों से उछाल), या 2 या कम कदम की दौड़ के साथ डाइव रोल (एक पैर से उछाल सहित) जिसमें घुमाव जोड़ा गया हो।`,
            },
          },
          {
            title: {
              ja: '転回系の要求要素',
              en: 'Tumbling Requirements',
              zh: '翻腾类的要求要素',
              ko: '텀블링의 요구 요소',
              es: 'Elementos requeridos de tumbling',
              fr: 'Exigences en matière de tumbling',
              ru: 'Требования к акробатике',
              hi: 'टम्बलिंग की आवश्यकताएँ',
            },
            element: {
              ja: `1. 回転系は４回入れなければならない。
【違反した場合　減点・・・0.30点】

2. 演技には次の転回系基礎要素群１・２を入れなければならない。
また転回系基礎要素群３は２回まで入れることができる。
【違反した場合：減点・・・0.30点】
※組・組立運動または接触でのスタートは３群扱いとする。`,
              en: `1. A routine must include four tumbling passes.
[Violation: deduction 0.30 points]

2. A routine must include the basic tumbling element groups 1 and 2 below.
Basic tumbling element group 3 may be included up to two times.
[Violation: deduction 0.30 points]
* A start from a partner or pyramid element or from contact is treated as group 3.`,
              zh: `1. 翻腾类必须编入4次。
【违反时　扣分……0.30分】

2. 成套动作必须编入下列翻腾类基础要素组1、2。
另外，翻腾类基础要素组3最多可编入2次。
【违反时：扣分……0.30分】
※以双人、叠罗汉动作或接触开始的，按第3组处理。`,
              ko: `1. 텀블링은 4회 넣어야 한다.
【위반한 경우 감점...0.30점】

2. 연기에는 다음의 텀블링 기초 요소군 1·2를 넣어야 한다.
또한 텀블링 기초 요소군 3은 2회까지 넣을 수 있다.
【위반한 경우: 감점...0.30점】
※짝·조립 운동 또는 접촉으로의 출발은 3군으로 취급한다.`,
              es: `1. Hay que incluir 4 pasos de tumbling.
[En caso de incumplimiento, penalización... 0.30 puntos]

2. El ejercicio debe incluir los grupos 1 y 2 de elementos básicos de tumbling.
Además, el grupo 3 de elementos básicos de tumbling puede incluirse hasta 2 veces.
[En caso de incumplimiento: penalización... 0.30 puntos]
* La salida desde un elemento por parejas o una pirámide, o desde un contacto, se considera del grupo 3.`,
              fr: `1. L'exercice doit comporter quatre passages de tumbling.
[En cas de manquement : pénalité de 0,30 point]

2. L'exercice doit comporter les groupes d'éléments de tumbling de base 1 et 2 ci-dessous.
Le groupe d'éléments de tumbling de base 3 peut y figurer jusqu'à deux fois.
[En cas de manquement : pénalité de 0,30 point]
* Un départ à partir d'un élément en duo, d'une pyramide ou d'un contact est considéré comme relevant du groupe 3.`,
              ru: `1. Упражнение должно включать четыре акробатические связки.
[При нарушении сбавка 0,30 балла]

2. Упражнение должно включать базовые акробатические группы 1 и 2, указанные ниже.
Базовую акробатическую группу 3 можно включить не более двух раз.
[При нарушении сбавка 0,30 балла]
※ Начало из парного элемента, пирамиды или из контакта относится к группе 3.`,
              hi: `1. टम्बलिंग 4 बार शामिल करनी होगी।
[उल्लंघन होने पर कटौती ... 0.30 अंक]

2. प्रदर्शन में निम्नलिखित टम्बलिंग आधारभूत तत्व वर्ग 1 और 2 शामिल करने होंगे।
साथ ही टम्बलिंग आधारभूत तत्व वर्ग 3 को अधिकतम 2 बार शामिल किया जा सकता है।
[उल्लंघन होने पर कटौती ... 0.30 अंक]
* जोड़ी या पिरामिड गति से अथवा संपर्क से की गई शुरुआत को वर्ग 3 माना जाता है।`,
            },
            image: [
              {
                src: '/images/rules/(AM)requirement.png',
                alt: {
                  ja: '転回系の要求要素表',
                  en: 'Table of tumbling requirements',
                  zh: '翻腾类要求要素表',
                  ko: '텀블링의 요구 요소 표',
                  es: 'Tabla de elementos requeridos de tumbling',
                  fr: 'Tableau des exigences en matière de tumbling',
                  ru: 'Таблица требований к акробатике',
                  hi: 'टम्बलिंग की आवश्यकताओं की तालिका',
                },
              },
            ],
          },
          {
            title: {
              ja: '制限技',
              en: 'Restricted Elements',
              zh: '限制动作',
              ko: '제한 기술',
              es: 'Elementos restringidos',
              fr: 'Éléments limités',
              ru: 'Ограниченные элементы',
              hi: 'प्रतिबंधित तत्व',
            },
            element: { ja: '', en: '', zh: '', ko: '', es: '', fr: '', ru: '', hi: '' },
          },
          {
            title: {
              ja: '隊形の要求要素',
              en: 'Formation Requirements',
              zh: '队形的要求要素',
              ko: '대형의 요구 요소',
              es: 'Elementos requeridos de las formaciones',
              fr: 'Exigences en matière de formations',
              ru: 'Требования к построениям',
              hi: 'रचना की आवश्यकताएँ',
            },
            element: {
              ja: '隊形は最低５つ異なったものを含まなければならない。【違反した場合　減点・・・0.30点】',
              en: 'A routine must include at least five different formations. [Violation: deduction 0.30 points]',
              zh: '队形必须包含至少5种不同的形式。【违反时　扣分……0.30分】',
              ko: '대형은 최소 5가지의 서로 다른 것을 포함하여야 한다.【위반한 경우 감점...0.30점】',
              es: 'Hay que incluir al menos 5 formaciones diferentes. [En caso de incumplimiento, penalización... 0.30 puntos]',
              fr: "L'exercice doit comporter au moins cinq formations différentes. [En cas de manquement : pénalité de 0,30 point]",
              ru: 'Упражнение должно включать не менее пяти разных построений. [При нарушении сбавка 0,30 балла]',
              hi: 'रचनाओं में कम से कम 5 अलग-अलग रचनाएँ शामिल करनी होंगी। [उल्लंघन होने पर कटौती ... 0.30 अंक]',
            },
          },
          {
            title: {
              ja: '演技の開始',
              en: 'Start of the Routine',
              zh: '成套动作的开始',
              ko: '연기의 시작',
              es: 'Comienzo del ejercicio',
              fr: "Début de l'exercice",
              ru: 'Начало упражнения',
              hi: 'प्रदर्शन का आरंभ',
            },
            element: {
              ja: `1. 演技の開始は、演技面のどこ位置からでも良いが、全員が配置について開始のポーズをとり、動きを止めてから始めなければならない。
2. 演技開始時における接触および組・組立運動は転回系としては扱わないものとする。ただし解除までは３秒以内とし、それを超えた場合や宙返りを入れた場合は転回系として数える。`,
              en: `1. The routine may start anywhere on the floor area, but all gymnasts must take their positions, hold a starting pose and be still before starting.
2. Contact and partner or pyramid elements at the start of the routine are not treated as tumbling. They must be released within 3 seconds; if they last longer or include a salto, they count as tumbling.`,
              zh: `1. 成套动作可从场地的任何位置开始，但全体队员必须就位、摆出开始造型并静止后才能开始。
2. 成套动作开始时的接触以及双人、叠罗汉动作不按翻腾类处理。但解除接触须在3秒以内，超过该时间或加入空翻时，按翻腾类计算。`,
              ko: `1. 연기의 시작은 연기 면의 어느 위치에서라도 좋으나, 전원이 자리를 잡고 시작 포즈를 취하여 움직임을 멈춘 뒤에 시작하여야 한다.
2. 연기 시작 시의 접촉 및 짝·조립 운동은 텀블링으로 취급하지 않는다. 다만 해제까지는 3초 이내로 하며, 이를 초과한 경우나 공중돌기를 넣은 경우에는 텀블링으로 센다.`,
              es: `1. El ejercicio puede comenzar desde cualquier punto del practicable, pero todos los gimnastas deben ocupar su sitio, adoptar la pose inicial y detener el movimiento antes de empezar.
2. Los contactos y los elementos por parejas o pirámides realizados al comienzo del ejercicio no se consideran tumbling. No obstante, deben deshacerse en un máximo de 3 segundos; si se supera ese tiempo o se incluye un mortal, se cuentan como tumbling.`,
              fr: `1. L'exercice peut commencer depuis n'importe quel endroit du praticable, mais tous les gymnastes doivent avoir pris leur place, adopté une pose de départ et cessé tout mouvement avant de commencer.
2. Les contacts et les éléments en duo ou pyramides au début de l'exercice ne sont pas considérés comme du tumbling. Ils doivent être rompus en moins de 3 secondes ; au-delà, ou s'ils comportent un salto, ils comptent comme tumbling.`,
              ru: `1. Упражнение можно начинать из любой точки ковра, но все гимнасты должны занять свои места, принять исходную позу и замереть.
2. Контакт, парные элементы и пирамиды в начале упражнения акробатикой не считаются. Однако они должны быть разомкнуты в течение 3 секунд; если они длятся дольше или включают сальто, они засчитываются как акробатика.`,
              hi: `1. प्रदर्शन फ़्लोर पर किसी भी स्थान से आरंभ किया जा सकता है, परंतु सभी जिम्नास्ट अपने स्थान पर आकर आरंभ की मुद्रा लें और गति रोकने के बाद ही आरंभ करें।
2. प्रदर्शन के आरंभ में संपर्क तथा जोड़ी और पिरामिड गतियाँ टम्बलिंग नहीं मानी जातीं। परंतु उन्हें 3 सेकंड के भीतर छोड़ना होगा; इससे अधिक समय लगने पर या सॉल्टो शामिल होने पर उन्हें टम्बलिंग के रूप में गिना जाएगा।`,
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
              ja: `1. 演技終了は演技面内であればどの位置でもよいが、全員が終了のポーズをとり完全に動きを止めなければならない。
2. 演技終了時の接触および組・組立運動は転回系としては扱わない。ただし、終了ポーズに入る前の動作から３秒以内とし、それを超えた場合や宙返りを入れた場合は転回系として数える。`,
              en: `1. The routine may end anywhere on the floor area, but all gymnasts must hold a final pose and stop moving completely.
2. Contact and partner or pyramid elements at the end of the routine are not treated as tumbling. They must be completed within 3 seconds of the movement leading into the final pose; if they last longer or include a salto, they count as tumbling.`,
              zh: `1. 成套动作可在场地内的任何位置结束，但全体队员必须摆出结束造型并完全静止。
2. 成套动作结束时的接触以及双人、叠罗汉动作不按翻腾类处理。但须在进入结束造型之前的动作起3秒以内完成，超过该时间或加入空翻时，按翻腾类计算。`,
              ko: `1. 연기 종료는 연기 면 안이라면 어느 위치라도 좋으나, 전원이 종료 포즈를 취하고 완전히 움직임을 멈추어야 한다.
2. 연기 종료 시의 접촉 및 짝·조립 운동은 텀블링으로 취급하지 않는다. 다만, 종료 포즈에 들어가기 전의 동작부터 3초 이내로 하며, 이를 초과한 경우나 공중돌기를 넣은 경우에는 텀블링으로 센다.`,
              es: `1. El ejercicio puede terminar en cualquier punto del practicable, pero todos los gimnastas deben adoptar la pose final y detener por completo el movimiento.
2. Los contactos y los elementos por parejas o pirámides realizados al final del ejercicio no se consideran tumbling. No obstante, deben realizarse en un máximo de 3 segundos desde el movimiento previo a la pose final; si se supera ese tiempo o se incluye un mortal, se cuentan como tumbling.`,
              fr: `1. L'exercice peut se terminer à n'importe quel endroit du praticable, mais tous les gymnastes doivent adopter une pose finale et cesser complètement tout mouvement.
2. Les contacts et les éléments en duo ou pyramides à la fin de l'exercice ne sont pas considérés comme du tumbling. Ils doivent être achevés dans les 3 secondes suivant le mouvement qui amène à la pose finale ; au-delà, ou s'ils comportent un salto, ils comptent comme tumbling.`,
              ru: `1. Упражнение можно заканчивать в любой точке ковра, но все гимнасты должны принять заключительную позу и полностью остановиться.
2. Контакт, парные элементы и пирамиды в конце упражнения акробатикой не считаются. Однако они должны занимать не более 3 секунд с начала движения, ведущего к заключительной позе; если они длятся дольше или включают сальто, они засчитываются как акробатика.`,
              hi: `1. प्रदर्शन फ़्लोर के भीतर किसी भी स्थान पर समाप्त किया जा सकता है, परंतु सभी जिम्नास्ट समापन की मुद्रा लेकर गति पूरी तरह रोकें।
2. प्रदर्शन के समापन पर संपर्क तथा जोड़ी और पिरामिड गतियाँ टम्बलिंग नहीं मानी जातीं। परंतु समापन की मुद्रा में जाने से पहले की गति से 3 सेकंड के भीतर पूरा करना होगा; इससे अधिक समय लगने पर या सॉल्टो शामिल होने पर उन्हें टम्बलिंग के रूप में गिना जाएगा।`,
            },
          },
          {
            title: {
              ja: '技術的価値の採点',
              en: 'Scoring of Technical Value',
              zh: '技术价值的评分',
              ko: '기술적 가치의 채점',
              es: 'Puntuación del valor técnico',
              fr: 'Notation de la valeur technique',
              ru: 'Оценка технической ценности',
              hi: 'तकनीकी मूल्य का अंक निर्धारण',
            },
            element: {
              ja: `演技の技術の価値は次の項目によって採点する。

【難度の数とレベル】
第28条による。
                      
【難度要素】
1. 徒手系要素をともなって実施される難度
第66条による。

2. 転回系要素をともなって実施される難度
第67条による。

【各種要素の組み合わせ】
1. 各運動の組み合わせによる技術的価値　
演技は各運動の組み合わせによっても技術価値を異にする。

2. 難度要素の同一性
演技は競技者全員が同じ技術、または同価値の難度で構成されることが求められる。

3. 難度要素の配分
難度要素は演技全体に均一に配分されることが求められる。

4. 難度要素の安定
難度要素は競技者ののy力に応じて構成されなければならない。`,
              en: `The technical value of a routine is scored on the following points.

[Number and level of difficulties]
See Article 28.

[Difficulty elements]
1. Difficulties performed with free-hand elements
See Article 66.

2. Difficulties performed with tumbling elements
See Article 67.

[Combination of elements]
1. Technical value from combining movements
The technical value of a routine also depends on how the movements are combined.

2. Uniformity of difficulty elements
All gymnasts are required to perform the same technique or difficulties of the same value.

3. Distribution of difficulty elements
Difficulty elements should be distributed evenly throughout the routine.

4. Stability of difficulty elements
Difficulty elements must be chosen according to the gymnasts' ability.`,
              zh: `成套动作的技术价值按以下项目评分。

【难度的数量与等级】
依据第28条。
                      
【难度要素】
1. 伴随徒手类要素完成的难度
依据第66条。

2. 伴随翻腾类要素完成的难度
依据第67条。

【各类要素的组合】
1. 各动作组合所产生的技术价值　
成套动作的技术价值也因各动作的组合方式而不同。

2. 难度要素的同一性
要求成套动作由全体参赛者以相同技术或同等价值的难度构成。

3. 难度要素的分配
要求难度要素在整套动作中均匀分配。

4. 难度要素的稳定
难度要素必须根据参赛者的能力进行编排。`,
              ko: `연기의 기술의 가치는 다음 항목에 따라 채점한다.

【난도의 수와 레벨】
제28조에 따른다.
                      
【난도 요소】
1. 신체 요소를 수반하여 실시되는 난도
제66조에 따른다.

2. 텀블링 요소를 수반하여 실시되는 난도
제67조에 따른다.

【각종 요소의 조합】
1. 각 운동의 조합에 의한 기술적 가치 
연기는 각 운동의 조합에 따라서도 기술 가치가 달라진다.

2. 난도 요소의 동일성
연기는 경기자 전원이 같은 기술, 또는 같은 가치의 난도로 구성될 것이 요구된다.

3. 난도 요소의 배분
난도 요소는 연기 전체에 균일하게 배분될 것이 요구된다.

4. 난도 요소의 안정
난도 요소는 경기자의 능력에 맞추어 구성되어야 한다.`,
              es: `El valor técnico del ejercicio se puntúa según los apartados siguientes.

[Número y nivel de las dificultades]
Según el artículo 28.

[Elementos de dificultad]
1. Dificultades realizadas con elementos de manos libres
Según el artículo 66.

2. Dificultades realizadas con elementos de tumbling
Según el artículo 67.

[Combinación de los distintos elementos]
1. Valor técnico derivado de la combinación de los movimientos
El valor técnico del ejercicio también varía según cómo se combinen los movimientos.

2. Uniformidad de los elementos de dificultad
Se exige que el ejercicio esté compuesto por la misma técnica para todos los gimnastas, o por dificultades del mismo valor.

3. Distribución de los elementos de dificultad
Se exige que los elementos de dificultad se distribuyan de manera uniforme a lo largo de todo el ejercicio.

4. Estabilidad de los elementos de dificultad
Los elementos de dificultad deben componerse de acuerdo con la capacidad de los gimnastas.`,
              fr: `La valeur technique de l'exercice est notée sur les points suivants.

[Nombre et niveau des difficultés]
Voir l'article 28.

[Éléments de difficulté]
1. Difficultés exécutées avec des éléments corporels
Voir l'article 66.

2. Difficultés exécutées avec des éléments de tumbling
Voir l'article 67.

[Combinaison des éléments]
1. Valeur technique issue de la combinaison des mouvements
La valeur technique de l'exercice dépend aussi de la manière dont les mouvements sont combinés.

2. Homogénéité des éléments de difficulté
Tous les gymnastes doivent présenter la même technique ou des difficultés de même valeur.

3. Répartition des éléments de difficulté
Les éléments de difficulté doivent être répartis de manière homogène sur l'ensemble de l'exercice.

4. Stabilité des éléments de difficulté
Les éléments de difficulté doivent être choisis en fonction des capacités des gymnastes.`,
              ru: `Техническая ценность упражнения оценивается по следующим пунктам.

[Число и уровень трудностей]
Согласно статье 28.

[Элементы трудности]
1. Трудности, выполняемые с элементами без предмета
Согласно статье 66.

2. Трудности, выполняемые с акробатическими элементами
Согласно статье 67.

[Сочетание элементов]
1. Техническая ценность сочетания движений
Техническая ценность упражнения зависит и от того, как сочетаются движения.

2. Единообразие элементов трудности
От упражнения требуется, чтобы все гимнасты выполняли одну и ту же технику либо трудности равной ценности.

3. Распределение элементов трудности
Элементы трудности должны быть равномерно распределены по всему упражнению.

4. Устойчивость элементов трудности
Элементы трудности должны подбираться по возможностям гимнастов.`,
              hi: `प्रदर्शन के तकनीकी मूल्य का अंक निर्धारण निम्नलिखित मदों के अनुसार किया जाता है।

[कठिनाइयों की संख्या और स्तर]
अनुच्छेद 28 के अनुसार।

[कठिनाई तत्व]
1. बिना उपकरण के तत्वों के साथ की जाने वाली कठिनाइयाँ
अनुच्छेद 66 के अनुसार।

2. टम्बलिंग तत्वों के साथ की जाने वाली कठिनाइयाँ
अनुच्छेद 67 के अनुसार।

[विभिन्न तत्वों का संयोजन]
1. गतियों के संयोजन से बनने वाला तकनीकी मूल्य
गतियों के संयोजन के अनुसार भी प्रदर्शन का तकनीकी मूल्य भिन्न होता है।

2. कठिनाई तत्वों की एकरूपता
प्रदर्शन में सभी जिम्नास्टों से समान तकनीक, या समान मूल्य की कठिनाइयाँ अपेक्षित हैं।

3. कठिनाई तत्वों का वितरण
कठिनाई तत्वों का पूरे प्रदर्शन में समान रूप से वितरण अपेक्षित है।

4. कठिनाई तत्वों की स्थिरता
कठिनाई तत्व जिम्नास्टों की क्षमता के अनुसार चुने जाने चाहिए।`,
            },
          },
          {
            title: {
              ja: '多様性の採点',
              en: 'Scoring of Variety',
              zh: '多样性的评分',
              ko: '다양성의 채점',
              es: 'Puntuación de la variedad',
              fr: 'Notation de la variété',
              ru: 'Оценка разнообразия',
              hi: 'विविधता का अंक निर्धारण',
            },
            element: {
              ja: `構成は、以下の項目において多様性に富むという印象を与えなければならない。

1. 徒手系要素の多様性
様々な徒手系の運動要素と組み合わせにおいて、多様性に富むものでなければならない。

2. 転回系要素の多様性
様々な転回系の要素や種類、その組み合わせにおいて、多様性の富むものでなければならない。

3. 空間仕様の多様性
様々な隊形や移動を含め、その方向、大きさ、軌道、高さにおいて、演技面全体を使うものでなければならない。

4. リズム変化の多様性
音楽の性格、そのリズムと完全に一致した運動で、そのリズムの変化が多様性に富むものでなければならない。

5.ダイナミズム（力動感）の変化の多様性
ダイナミズムとはスピードと力強さの変化によって表現される力動感のことで、その緩急の変化において、多様性に富むものでなければならない。`,
              en: `The composition must give an impression of great variety in the following respects.

1. Variety of free-hand elements
The routine must be rich in variety of free-hand movements and their combinations.

2. Variety of tumbling elements
The routine must be rich in variety of tumbling elements, their types and their combinations.

3. Variety in the use of space
The routine must use the whole floor area, with a variety of formations and movements across the floor, in their directions, sizes, paths and levels.

4. Variety of rhythm
The movements must match the character and rhythm of the music exactly, and the changes of rhythm must be rich in variety.

5. Variety of dynamics
Dynamics means the sense of power expressed by changes in speed and strength. The changes between fast and slow must be rich in variety.`,
              zh: `编排必须在以下项目上给人以富于多样性的印象。

1. 徒手类要素的多样性
在各种徒手类动作要素及其组合上，必须富于多样性。

2. 翻腾类要素的多样性
在各种翻腾类要素、种类及其组合上，必须富于多样性。

3. 空间使用的多样性
包括各种队形与移动在内，在其方向、幅度、路线、高度上，必须使用整个场地。

4. 节奏变化的多样性
动作必须与音乐的性格及其节奏完全一致，并且其节奏变化必须富于多样性。

5.动感（力度感）变化的多样性
动感是指通过速度与力量的变化所表现出的力度感，在其快慢变化上必须富于多样性。`,
              ko: `구성은 다음 항목에서 다양성이 풍부하다는 인상을 주어야 한다.

1. 신체 요소의 다양성
다양한 신체 운동 요소와 그 조합에서 다양성이 풍부한 것이어야 한다.

2. 텀블링 요소의 다양성
다양한 텀블링 요소와 종류, 그 조합에서 다양성이 풍부한 것이어야 한다.

3. 공간 사용의 다양성
다양한 대형과 이동을 포함하여, 그 방향, 크기, 궤도, 높이에서 연기 면 전체를 사용하는 것이어야 한다.

4. 리듬 변화의 다양성
음악의 성격, 그 리듬과 완전히 일치한 운동으로, 그 리듬의 변화가 다양성이 풍부한 것이어야 한다.

5.다이너미즘(역동감)의 변화의 다양성
다이너미즘이란 스피드와 힘참의 변화로 표현되는 역동감을 말하며, 그 완급의 변화에서 다양성이 풍부한 것이어야 한다.`,
              es: `La composición debe dar una impresión de gran variedad en los apartados siguientes.

1. Variedad de los elementos de manos libres
Debe ser rica en variedad de movimientos de manos libres y en sus combinaciones.

2. Variedad de los elementos de tumbling
Debe ser rica en variedad de elementos de tumbling, de sus tipos y de sus combinaciones.

3. Variedad en el uso del espacio
Debe utilizar todo el practicable, con formaciones y desplazamientos variados en su dirección, amplitud, trayectoria y altura.

4. Variedad en los cambios de ritmo
Los movimientos deben coincidir por completo con el carácter de la música y con su ritmo, y los cambios de ese ritmo deben ser ricos en variedad.

5. Variedad en los cambios de dinamismo (sensación de fuerza)
El dinamismo es la sensación de fuerza que se expresa mediante los cambios de velocidad y de potencia, y sus contrastes entre lo rápido y lo lento deben ser ricos en variedad.`,
              fr: `La composition doit donner une impression de grande variété sur les points suivants.

1. Variété des éléments corporels
L'exercice doit être riche en mouvements corporels variés et en combinaisons variées.

2. Variété des éléments de tumbling
L'exercice doit être riche en éléments de tumbling variés, dans leurs types comme dans leurs combinaisons.

3. Variété dans l'utilisation de l'espace
L'exercice doit occuper tout le praticable, avec des formations et des déplacements variés dans leurs directions, leur amplitude, leurs trajectoires et leurs niveaux.

4. Variété des changements de rythme
Les mouvements doivent correspondre exactement au caractère et au rythme de la musique, et les changements de rythme doivent être riches et variés.

5. Variété des changements de dynamisme
Le dynamisme est l'impression de force exprimée par les variations de vitesse et d'intensité. Les alternances entre rapidité et lenteur doivent être riches et variées.`,
              ru: `Композиция должна производить впечатление большого разнообразия по следующим пунктам.

1. Разнообразие элементов без предмета
Упражнение должно быть богато разнообразием движений без предмета и их сочетаний.

2. Разнообразие акробатических элементов
Упражнение должно быть богато разнообразием акробатических элементов, их видов и сочетаний.

3. Разнообразие использования пространства
Упражнение должно охватывать весь ковёр, включая разные построения и перемещения — по направлению, размаху, траектории и высоте.

4. Разнообразие смены ритма
Движения должны в точности совпадать с характером музыки и её ритмом, а смены ритма — быть разнообразными.

5. Разнообразие динамики
Динамика — это ощущение силы, выраженное сменой скорости и мощности; чередование быстрого и медленного должно быть разнообразным.`,
              hi: `संरचना को निम्नलिखित मदों में विविधता से भरपूर होने का प्रभाव देना चाहिए।

1. बिना उपकरण के तत्वों की विविधता
विभिन्न बिना उपकरण की गति तत्वों और उनके संयोजनों में विविधता से भरपूर होना चाहिए।

2. टम्बलिंग तत्वों की विविधता
विभिन्न टम्बलिंग तत्वों, उनके प्रकारों और उनके संयोजनों में विविधता से भरपूर होना चाहिए।

3. स्थान के उपयोग की विविधता
विभिन्न रचनाओं और स्थानांतरण सहित, उनकी दिशा, आकार, पथ और ऊँचाई में पूरे फ़्लोर का उपयोग होना चाहिए।

4. लय परिवर्तन की विविधता
गतियाँ संगीत के स्वभाव और उसकी लय से पूरी तरह मेल खाएँ, और उस लय का परिवर्तन विविधता से भरपूर हो।

5.गतिशीलता (शक्ति के आभास) के परिवर्तन की विविधता
गतिशीलता का अर्थ है गति और शक्ति के परिवर्तन से व्यक्त होने वाला शक्ति का आभास, और उसके तेज़ तथा धीमे परिवर्तन में विविधता से भरपूर होना चाहिए।`,
            },
          },
          {
            title: {
              ja: '音楽と動きの関係の採点',
              en: 'Scoring of the Relationship Between Music and Movement',
              zh: '音乐与动作关系的评分',
              ko: '음악과 움직임의 관계의 채점',
              es: 'Puntuación de la relación entre la música y el movimiento',
              fr: 'Notation du rapport entre la musique et le mouvement',
              ru: 'Оценка связи музыки и движения',
              hi: 'संगीत और गति के संबंध का अंक निर्धारण',
            },
            element: {
              ja: '新体操の伴奏音楽は、よい音色とメロディーによって特徴付けられるものでなければならない。演技は音楽の性格やリズムに合致しなければならない。',
              en: 'The accompanying music for rhythmic gymnastics must be characterized by good tone and melody. The routine must match the character and rhythm of the music.',
              zh: '艺术体操的伴奏音乐必须以优美的音色与旋律为特征。成套动作必须与音乐的性格和节奏相吻合。',
              ko: '리듬체조의 반주 음악은 좋은 음색과 멜로디로 특징지어지는 것이어야 한다. 연기는 음악의 성격이나 리듬에 합치하여야 한다.',
              es: 'La música de acompañamiento de la gimnasia rítmica debe caracterizarse por un buen timbre y una buena melodía. El ejercicio debe ajustarse al carácter y al ritmo de la música.',
              fr: "La musique d'accompagnement de la gymnastique rythmique doit se distinguer par la qualité de sa sonorité et de sa mélodie. L'exercice doit correspondre au caractère et au rythme de la musique.",
              ru: 'Музыкальное сопровождение в художественной гимнастике должно отличаться хорошим звучанием и мелодией. Упражнение должно соответствовать характеру и ритму музыки.',
              hi: 'लयबद्ध जिम्नास्टिक का संगत संगीत अच्छे स्वर और मधुर धुन से युक्त होना चाहिए। प्रदर्शन संगीत के स्वभाव और लय से मेल खाना चाहिए।',
            },
          },
          {
            title: {
              ja: '独創性の採点',
              en: 'Scoring of Originality',
              zh: '独创性的评分',
              ko: '독창성의 채점',
              es: 'Puntuación de la originalidad',
              fr: "Notation de l'originalité",
              ru: 'Оценка оригинальности',
              hi: 'मौलिकता का अंक निर्धारण',
            },
            element: {
              ja: '構成は、新しい技術や新しい組み合わせなど、新しさの探求と技術的な創造性によって特徴付けられる独創性が求められる。',
              en: 'The composition must show originality, characterized by the pursuit of novelty and technical creativity, such as new techniques and new combinations.',
              zh: '编排要求具有独创性，即以新技术、新组合等对新颖性的追求和技术上的创造性为特征。',
              ko: '구성은 새로운 기술이나 새로운 조합 등, 새로움의 추구와 기술적인 창조성으로 특징지어지는 독창성이 요구된다.',
              es: 'Se exige que la composición tenga originalidad, caracterizada por la búsqueda de la novedad y por la creatividad técnica, como nuevas técnicas y nuevas combinaciones.',
              fr: "La composition doit faire preuve d'originalité, marquée par une recherche de nouveauté et une créativité technique : techniques inédites, combinaisons inédites, etc.",
              ru: 'От композиции требуется оригинальность, выраженная в поиске нового и в технической изобретательности: новых элементах и новых сочетаниях.',
              hi: 'संरचना में मौलिकता अपेक्षित है, जो नई तकनीकों और नए संयोजनों जैसी नवीनता की खोज तथा तकनीकी रचनात्मकता से पहचानी जाती है।',
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
              hi: 'संरचना की त्रुटियाँ',
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
              zh: `以上未列出缺点的编排扣分依下表。
                  
编排缺点标准
【大缺点　　明显欠缺时　　　　扣分……0.30分】
【中缺点　　欠缺时　　　　　　　扣分……0.20分】
【小缺点　　略有欠缺时　　　　　扣分……0.10分】
【微小缺点　稍有欠缺时　　　扣分……0.05分】

编排缺点表`,
              ko: `위에 결점을 제시하지 않은 구성의 감점은 다음 표에 따른다.
                  
구성 결점 기준
【대결점   현저히 부족한 경우    감점...0.30점】
【중결점   부족한 경우       감점...0.20점】
【소결점   조금 부족한 경우     감점...0.10점】
【미소결점  약간 부족한 경우     감점...0.05점】

구성 결점 표`,
              es: `Las penalizaciones de composición no indicadas arriba se aplican según la tabla siguiente.

Criterios de las faltas de composición
[Falta grande: cuando falta de forma evidente, penalización... 0.30 puntos]
[Falta media: cuando falta, penalización... 0.20 puntos]
[Falta pequeña: cuando falta un poco, penalización... 0.10 puntos]
[Falta muy pequeña: cuando falta ligeramente, penalización... 0.05 puntos]

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
              hi: `ऊपर न बताई गई संरचना की कटौतियाँ नीचे दी गई तालिका के अनुसार होंगी।

संरचना त्रुटि के मानक
[बड़ी त्रुटि, अत्यधिक कमी होने पर कटौती ... 0.30 अंक]
[मध्यम त्रुटि, कमी होने पर कटौती ... 0.20 अंक]
[छोटी त्रुटि, थोड़ी कमी होने पर कटौती ... 0.10 अंक]
[अति छोटी त्रुटि, बहुत थोड़ी कमी होने पर कटौती ... 0.05 अंक]

संरचना त्रुटि तालिका`,
            },
            image: [
              {
                src: '/images/rules/(D)kettenhyou.png',
                alt: {
                  ja: '構成欠点表',
                  en: 'Table of composition faults',
                  zh: '编排缺点表',
                  ko: '구성 결점 표',
                  es: 'Tabla de faltas de composición',
                  fr: 'Tableau des fautes de composition',
                  ru: 'Таблица ошибок композиции',
                  hi: 'संरचना त्रुटि तालिका',
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
              ja: '演技は徒手系の技術、転回系の技術、伴奏音楽との調和など全体の調和と安定性があり、全体を通じて途切れない印象で伸び伸びと行わなければならない。伴奏音楽に合わせ、軽快で美しく、かつ優美な表現を持った実施が求められる。',
              en: 'A routine must show overall harmony and stability in free-hand technique, tumbling technique and harmony with the accompanying music, and must be performed freely, giving an impression of continuity throughout. Execution that is light, beautiful and graceful, in time with the music, is required.',
              zh: '成套动作在徒手类技术、翻腾类技术以及与伴奏音乐的协调等方面必须具有整体的协调与稳定，并且自始至终给人以连贯不断的印象，舒展大方地完成。要求配合伴奏音乐，做出轻快、优美且富有优雅表现力的完成。',
              ko: '연기는 신체의 기술, 텀블링의 기술, 반주 음악과의 조화 등 전체의 조화와 안정성이 있고, 전체를 통하여 끊김 없는 인상으로 시원하게 실시하여야 한다. 반주 음악에 맞추어 경쾌하고 아름다우며, 우아한 표현을 지닌 실시가 요구된다.',
              es: 'El ejercicio debe presentar armonía y estabilidad en su conjunto —técnica de manos libres, técnica de tumbling y concordancia con la música de acompañamiento— y debe realizarse con soltura, dando una impresión de continuidad de principio a fin. Se exige una ejecución ligera, bella y con una expresión elegante, ajustada a la música de acompañamiento.',
              fr: "L'exercice doit présenter une harmonie et une stabilité d'ensemble dans la technique corporelle, la technique de tumbling et l'accord avec la musique d'accompagnement ; il doit être présenté avec aisance et donner une impression de continuité du début à la fin. Une exécution légère, belle et gracieuse, en accord avec la musique, est exigée.",
              ru: 'Упражнение должно обладать цельностью и устойчивостью во всём: в технике без предмета, в акробатической технике и в согласии с музыкальным сопровождением, и выполняться свободно, оставляя впечатление непрерывности от начала до конца. Требуется лёгкое, красивое и изящное исполнение в такт музыке.',
              hi: 'प्रदर्शन में बिना उपकरण की तकनीक, टम्बलिंग की तकनीक और संगत संगीत के साथ मेल जैसे समग्र सामंजस्य तथा स्थिरता होनी चाहिए, और उसे आरंभ से अंत तक बिना रुकावट के प्रभाव के साथ खुलकर किया जाना चाहिए। संगत संगीत के साथ, हल्का, सुंदर और लावण्यपूर्ण अभिव्यक्ति वाला निष्पादन अपेक्षित है।',
            },
          },
          {
            title: {
              ja: '体の動きの技術の採点',
              en: 'Scoring of Body Movement Technique',
              zh: '身体动作技术的评分',
              ko: '몸의 움직임의 기술의 채점',
              es: 'Puntuación de la técnica de los movimientos corporales',
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
演技は軽快に伸びやかに行わなければならない。

4.個人および全体の欠点
次の個人および全体の欠点があった場合は実施欠点表に応じて減点される。

5. 個人の姿勢やうお機に不正確鯖あった場合
6. 動きや隊形に乱れがあった場合`,
              en: `Body movement technique is scored on the following points.

1. Free-hand technique
Free-hand movements must be performed with beautiful posture and flexibility. Movements starting from the solar plexus must be natural, deep and large, with pauses and accents, height in jumps and changes of speed, and must be controlled to the tips of the limbs.

2. Tumbling technique
Tumbling must be dynamic, with speed and height, an accurate axis of rotation and stable landings.

3. Rhythmic execution
The routine must be performed lightly and expansively.

4. Individual and collective faults
Individual and collective faults such as the following are penalized according to the table of execution faults.

5. Inaccurate posture or movement of an individual gymnast
6. Disorder in movements or formations`,
              zh: `身体动作的技术按以下项目评分。

1. 徒手类的技术
徒手类动作必须以优美的姿势和柔韧性完成，由心窝处发起的动作要具有自然性、深度和幅度，动作的停顿与重音、跳跃的高度以及速度要有变化，并且必须控制到四肢末端。

2.翻腾类的技术
翻腾类必须是具有速度与高度、转体轴准确、落地稳定的富有动感的动作。

3. 富有节奏的完成
成套动作必须轻快舒展地完成。

4.个人及全体的缺点
出现以下个人及全体的缺点时，依据完成缺点表扣分。

5. 个人姿势或动作不准确时
6. 动作或队形出现混乱时`,
              ko: `신체의 움직임의 기술은 다음 항목으로 채점된다.

1. 신체의 기술
신체 운동은 아름다운 자세와 유연성을 가지고 실시되며, 명치에서 시작되는 움직임의 자연스러움과 깊이, 크기, 움직임의 사이와 악센트, 도약의 높이, 그리고 스피드에 변화가 있고, 신체의 사지 부분까지 제어된 움직임이어야 한다.

2.텀블링의 기술
텀블링은 스피드와 높이, 회전축의 정확성과 착지의 안정성을 지닌 다이내믹한 움직임이어야 한다.

3. 리드미컬한 실시
연기는 경쾌하고 시원하게 실시하여야 한다.

4.개인 및 전체의 결점
다음의 개인 및 전체의 결점이 있었던 경우에는 실시 결점 표에 따라 감점된다.

5. 개인의 자세나 움직임에 부정확함이 있었던 경우
6. 움직임이나 대형에 흐트러짐이 있었던 경우`,
              es: `La técnica de los movimientos corporales se puntúa según los apartados siguientes.

1. Técnica de manos libres
Las manos libres se realizan con una postura bella y con flexibilidad; los movimientos que nacen del plexo solar deben ser naturales, profundos y amplios, con pausas y acentos, con altura en los saltos y con cambios de velocidad, y deben estar controlados hasta los extremos de las extremidades.

2. Técnica de tumbling
El tumbling debe ser un movimiento dinámico, con velocidad y altura, con un eje de giro preciso y con aterrizajes estables.

3. Ejecución rítmica
El ejercicio debe realizarse con ligereza y amplitud.

4. Faltas individuales y del conjunto
Cuando se produzcan las siguientes faltas individuales o del conjunto, se penalizan según la tabla de faltas de ejecución.

5. Cuando haya imprecisiones en la postura o en el movimiento de un gimnasta
6. Cuando haya desorden en los movimientos o en las formaciones`,
              fr: `La technique du mouvement corporel est notée sur les points suivants.

1. Technique corporelle
Les éléments corporels doivent être exécutés avec une belle posture et de la souplesse. Partant du plexus solaire, les mouvements doivent être naturels, profonds et amples, avec des temps d'arrêt et des accents, de la hauteur dans les sauts et des variations de vitesse, et être contrôlés jusqu'aux extrémités des membres.

2. Technique de tumbling
Le tumbling doit être dynamique, avec de la vitesse et de la hauteur, un axe de rotation précis et des réceptions stables.

3. Exécution rythmique
L'exercice doit être présenté avec légèreté et ampleur.

4. Fautes individuelles et collectives
Les fautes individuelles et collectives ci-dessous sont pénalisées conformément au tableau des fautes d'exécution.

5. Posture ou mouvement inexact d'un gymnaste
6. Désordre dans les mouvements ou les formations`,
              ru: `Техника движений тела оценивается по следующим пунктам.

1. Техника без предмета
Движения без предмета выполняются с красивой осанкой и гибкостью. Движение, идущее от солнечного сплетения, должно быть естественным, глубоким и размашистым, с паузами и акцентами, с высотой прыжков и сменой скорости, и должно быть подконтрольным вплоть до кончиков конечностей.

2. Акробатическая техника
Акробатика должна быть динамичной, со скоростью и высотой, точной осью вращения и устойчивыми приземлениями.

3. Ритмичность исполнения
Упражнение должно выполняться легко и широко.

4. Индивидуальные и общие ошибки
При следующих индивидуальных и общих ошибках применяются сбавки по таблице ошибок исполнения.

5. Неточная осанка или движение отдельного гимнаста
6. Разнобой в движениях или построениях`,
              hi: `शरीर की गति की तकनीक का अंक निर्धारण निम्नलिखित मदों के अनुसार किया जाता है।

1. बिना उपकरण की तकनीक
बिना उपकरण की गतियाँ सुंदर मुद्रा और लचीलेपन के साथ की जाएँ; पेट के ऊपरी मध्य भाग से शुरू होने वाली गति में स्वाभाविकता, गहराई और विस्तार हो, गति के बीच ठहराव और बल हों, छलांग में ऊँचाई हो, गति में परिवर्तन हो, और गति शरीर के हाथ-पैरों के सिरों तक नियंत्रित हो।

2.टम्बलिंग की तकनीक
टम्बलिंग गति और ऊँचाई, घूर्णन अक्ष की सटीकता तथा लैंडिंग की स्थिरता के साथ ऊर्जावान होनी चाहिए।

3. लयबद्ध निष्पादन
प्रदर्शन हल्के और खुले ढंग से किया जाना चाहिए।

4.व्यक्तिगत और सामूहिक त्रुटियाँ
निम्नलिखित व्यक्तिगत और सामूहिक त्रुटियाँ होने पर निष्पादन त्रुटि तालिका के अनुसार कटौती की जाती है।

5. किसी एक जिम्नास्ट की मुद्रा या गति में अशुद्धि होने पर
6. गतियों या रचनाओं में गड़बड़ी होने पर`,
            },
          },
          {
            title: {
              ja: '全体的な調和の採点',
              en: 'Scoring of Overall Harmony',
              zh: '整体协调性的评分',
              ko: '전체적인 조화의 채점',
              es: 'Puntuación de la armonía general',
              fr: "Notation de l'harmonie d'ensemble",
              ru: 'Оценка общей слаженности',
              hi: 'समग्र सामंजस्य का अंक निर्धारण',
            },
            element: {
              ja: `全体的な調和は次の項目で採点される。

1. 団体的同時性
演技は、最初から終了まで同じ動きや異なる動きが一体感を持って組み合わされ、そのスケールの大きさとスピード、リズム、ダイナミズムにおいて調和と一致のある実施が求められる。" +

2. 音楽との調和

3. 音楽が演技を妨害している場合
【減点：0.20点】

4. 音量が著しく大きい場合
【減点：0.20点】

5. 終末動作が音楽と一致しなかった場合
【減点：0.20点】

6. 芸術性と表現
演技には芸術性を持った表現が求められる。芸術性とは、身体の技術を用いて、音楽のテーマと構成のメッセージを観衆に表現し、伝え感動させることをいう。" +

7. 競技者の躊躇や演技の中断
【減点：１秒につき0.10点】`,
              en: `Overall harmony is scored on the following points.

1. Group synchronization
From start to finish, identical and different movements must be combined with a sense of unity, and the execution must be harmonious and unified in amplitude, speed, rhythm and dynamics.

2. Harmony with the music

3. The music disturbs the routine
[Deduction: 0.20 points]

4. The volume is excessively loud
[Deduction: 0.20 points]

5. The final movement does not match the music
[Deduction: 0.20 points]

6. Artistry and expression
A routine requires artistic expression. Artistry means using body technique to express the theme of the music and the message of the composition to the audience, conveying it and moving them.

7. Hesitation by a gymnast or interruption of the routine
[Deduction: 0.10 points per second]`,
              zh: `整体协调性按以下项目评分。

1. 团体的同时性
成套动作从开始到结束，相同动作与不同动作必须富有整体感地组合在一起，要求在幅度、速度、节奏和动感上做到协调一致。

2. 与音乐的协调

3. 音乐妨碍成套动作时
【扣分：0.20分】

4. 音量明显过大时
【扣分：0.20分】

5. 结束动作与音乐不一致时
【扣分：0.20分】

6. 艺术性与表现
成套动作要求具有艺术性的表现。艺术性是指运用身体技术，向观众表现并传达音乐的主题与编排所要传递的信息，使观众受到感染。

7. 参赛者犹豫或成套动作中断
【扣分：每1秒0.10分】`,
              ko: `전체적인 조화는 다음 항목으로 채점된다.

1. 단체적 동시성
연기는 처음부터 끝까지 같은 움직임이나 다른 움직임이 일체감을 가지고 조합되어, 그 스케일의 크기와 스피드, 리듬, 다이너미즘에서 조화와 일치가 있는 실시가 요구된다.

2. 음악과의 조화

3. 음악이 연기를 방해하고 있는 경우
【감점: 0.20점】

4. 음량이 현저히 큰 경우
【감점: 0.20점】

5. 종말 동작이 음악과 일치하지 않은 경우
【감점: 0.20점】

6. 예술성과 표현
연기에는 예술성을 지닌 표현이 요구된다. 예술성이란 신체의 기술을 사용하여 음악의 테마와 구성의 메시지를 관중에게 표현하고 전달하여 감동시키는 것을 말한다.

7. 경기자의 주저나 연기의 중단
【감점: 1초당 0.10점】`,
              es: `La armonía general se puntúa según los apartados siguientes.

1. Simultaneidad del conjunto
De principio a fin, los movimientos iguales y los distintos deben combinarse con sensación de unidad, y se exige una ejecución armónica y coincidente en amplitud, velocidad, ritmo y dinamismo.

2. Armonía con la música

3. Cuando la música perjudica al ejercicio
[Penalización: 0.20 puntos]

4. Cuando el volumen es excesivamente alto
[Penalización: 0.20 puntos]

5. Cuando el movimiento final no coincide con la música
[Penalización: 0.20 puntos]

6. Artisticidad y expresión
Al ejercicio se le exige una expresión con valor artístico. La artisticidad consiste en emplear la técnica corporal para expresar al público el tema de la música y el mensaje de la composición, transmitirlo y emocionarlo.

7. Vacilación de un gimnasta o interrupción del ejercicio
[Penalización: 0.10 puntos por segundo]`,
              fr: `L'harmonie d'ensemble est notée sur les points suivants.

1. Synchronisation de l'ensemble
Du début à la fin, les mouvements identiques et différents doivent être combinés avec un sentiment d'unité, et l'exécution doit être harmonieuse et homogène en amplitude, en vitesse, en rythme et en dynamisme.

2. Accord avec la musique

3. La musique gêne l'exercice
[Pénalité : 0,20 point]

4. Le volume sonore est excessif
[Pénalité : 0,20 point]

5. Le mouvement final ne coïncide pas avec la musique
[Pénalité : 0,20 point]

6. Artistique et expression
L'exercice exige une expression artistique. L'artistique consiste à utiliser la technique corporelle pour exprimer au public le thème de la musique et le message de la composition, le lui transmettre et l'émouvoir.

7. Hésitation d'un gymnaste ou interruption de l'exercice
[Pénalité : 0,10 point par seconde]`,
              ru: `Общая слаженность оценивается по следующим пунктам.

1. Групповая синхронность
От начала и до конца одинаковые и разные движения должны сочетаться с ощущением единства, а исполнение — быть слаженным и согласованным по размаху, скорости, ритму и динамике.

2. Согласованность с музыкой

3. Музыка мешает упражнению
[Сбавка: 0,20 балла]

4. Чрезмерно большая громкость
[Сбавка: 0,20 балла]

5. Заключительное движение не совпало с музыкой
[Сбавка: 0,20 балла]

6. Художественность и выразительность
От упражнения требуется художественная выразительность. Художественность — это умение средствами техники тела выразить зрителю тему музыки и замысел композиции, донести их и тронуть зрителя.

7. Заминка гимнаста или прерывание упражнения
[Сбавка: 0,10 балла за каждую секунду]`,
              hi: `समग्र सामंजस्य का अंक निर्धारण निम्नलिखित मदों के अनुसार किया जाता है।

1. समूह की एकसाथता
प्रदर्शन में आरंभ से समापन तक समान और भिन्न गतियाँ एकता के भाव के साथ संयोजित हों, और उनके विस्तार, गति, लय तथा गतिशीलता में सामंजस्य और एकरूपता वाला निष्पादन अपेक्षित है।

2. संगीत के साथ सामंजस्य

3. संगीत प्रदर्शन में बाधा डाल रहा हो
[कटौती: 0.20 अंक]

4. ध्वनि अत्यधिक तेज़ हो
[कटौती: 0.20 अंक]

5. अंतिम गति संगीत से मेल न खाए
[कटौती: 0.20 अंक]

6. कलात्मकता और अभिव्यक्ति
प्रदर्शन में कलात्मकता वाली अभिव्यक्ति अपेक्षित है। कलात्मकता का अर्थ है शरीर की तकनीक का उपयोग करके संगीत के विषय और संरचना के संदेश को दर्शकों तक व्यक्त करना, पहुँचाना और उन्हें प्रभावित करना।

7. जिम्नास्ट की हिचक या प्रदर्शन में रुकावट
[कटौती: प्रति 1 सेकंड 0.10 अंक]`,
            },
          },
          {
            title: {
              ja: '禁止事項',
              en: 'Prohibited Actions',
              zh: '禁止事项',
              ko: '금지 사항',
              es: 'Prohibiciones',
              fr: 'Actions interdites',
              ru: 'Запрещённые действия',
              hi: 'निषिद्ध कार्य',
            },
            element: {
              ja: '演技中に漕いでない体の接触はしてはいけない。',
              en: 'Unnecessary body contact must not be made during the routine.',
              zh: '成套动作中不得有不必要的身体接触。',
              ko: '연기 중에 불필요한 몸의 접촉을 해서는 안 된다.',
              es: 'Durante el ejercicio no se pueden realizar contactos corporales innecesarios.',
              fr: "Aucun contact corporel superflu ne doit avoir lieu pendant l'exercice.",
              ru: 'Во время упражнения не допускается ненужный контакт телами.',
              hi: 'प्रदर्शन के दौरान अनावश्यक शारीरिक संपर्क नहीं करना चाहिए।',
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
              hi: 'निष्पादन की त्रुटियाँ',
            },
            element: {
              ja: `上記に示していない実施の減点は次の表による。実施欠点基準
                  
実施欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

実施欠点表

倒立、バランス、柔軟の実施減点`,
              en: `Execution deductions not listed above follow the table below.

Execution fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of execution faults

Execution deductions for handstands, balances and flexibility`,
              zh: `以上未列出的完成扣分依下表。完成缺点标准
                  
完成缺点标准
【大缺点　　明显欠缺时　　　　扣分……0.30分】
【中缺点　　欠缺时　　　　　　　扣分……0.20分】
【小缺点　　略有欠缺时　　　　　扣分……0.10分】
【微小缺点　稍有欠缺时　　　扣分……0.05分】

完成缺点表

倒立、平衡、柔韧的完成扣分`,
              ko: `위에 제시하지 않은 실시의 감점은 다음 표에 따른다. 실시 결점 기준
                  
실시 결점 기준
【대결점   현저히 부족한 경우    감점...0.30점】
【중결점   부족한 경우       감점...0.20점】
【소결점   조금 부족한 경우     감점...0.10점】
【미소결점  약간 부족한 경우     감점...0.05점】

실시 결점 표

물구나무서기, 밸런스, 유연성의 실시 감점`,
              es: `Las penalizaciones de ejecución no indicadas arriba se aplican según la tabla siguiente. Criterios de las faltas de ejecución

Criterios de las faltas de ejecución
[Falta grande: cuando falta de forma evidente, penalización... 0.30 puntos]
[Falta media: cuando falta, penalización... 0.20 puntos]
[Falta pequeña: cuando falta un poco, penalización... 0.10 puntos]
[Falta muy pequeña: cuando falta ligeramente, penalización... 0.05 puntos]

Tabla de faltas de ejecución

Penalizaciones de ejecución de las verticales, los equilibrios y la flexibilidad`,
              fr: `Les pénalités d'exécution non mentionnées ci-dessus figurent dans le tableau ci-dessous.

Barème des fautes d'exécution
[Grande faute  manque très marqué  pénalité de 0,30 point]
[Faute moyenne  manque  pénalité de 0,20 point]
[Petite faute  léger manque  pénalité de 0,10 point]
[Très petite faute  manque minime  pénalité de 0,05 point]

Tableau des fautes d'exécution

Pénalités d'exécution pour les appuis tendus renversés, les équilibres et la souplesse`,
              ru: `Сбавки за ошибки исполнения, не перечисленные выше, определяются по таблице ниже.

Критерии ошибок исполнения
[Грубая ошибка — заметно недостаёт  сбавка 0,30 балла]
[Средняя ошибка — недостаёт  сбавка 0,20 балла]
[Мелкая ошибка — немного недостаёт  сбавка 0,10 балла]
[Незначительная ошибка — чуть-чуть недостаёт  сбавка 0,05 балла]

Таблица ошибок исполнения

Сбавки за исполнение стоек на руках, равновесий и элементов гибкости`,
              hi: `ऊपर न बताई गई निष्पादन की कटौतियाँ नीचे दी गई तालिका के अनुसार होंगी। निष्पादन त्रुटि के मानक

निष्पादन त्रुटि के मानक
[बड़ी त्रुटि, अत्यधिक कमी होने पर कटौती ... 0.30 अंक]
[मध्यम त्रुटि, कमी होने पर कटौती ... 0.20 अंक]
[छोटी त्रुटि, थोड़ी कमी होने पर कटौती ... 0.10 अंक]
[अति छोटी त्रुटि, बहुत थोड़ी कमी होने पर कटौती ... 0.05 अंक]

निष्पादन त्रुटि तालिका

हैंडस्टैंड, संतुलन और लचीलेपन की निष्पादन कटौती`,
            },
            image: [
              {
                src: '/images/rules/(E)kettenhyou1.png',
                alt: {
                  ja: '実施欠点表（D）１',
                  en: 'Table of execution faults, part 1',
                  zh: '完成缺点表（D）1',
                  ko: '실시 결점 표(D) 1',
                  es: 'Tabla de faltas de ejecución (D) 1',
                  fr: "Tableau des fautes d'exécution, partie 1",
                  ru: 'Таблица ошибок исполнения, часть 1',
                  hi: 'निष्पादन त्रुटि तालिका (D) 1',
                },
              },
              {
                src: '/images/rules/(E)kettenhyou2.png',
                alt: {
                  ja: '実施欠点表（D）２',
                  en: 'Table of execution faults, part 2',
                  zh: '完成缺点表（D）2',
                  ko: '실시 결점 표(D) 2',
                  es: 'Tabla de faltas de ejecución (D) 2',
                  fr: "Tableau des fautes d'exécution, partie 2",
                  ru: 'Таблица ошибок исполнения, часть 2',
                  hi: 'निष्पादन त्रुटि तालिका (D) 2',
                },
              },
              {
                src: '/images/rules/(E)kettenhyou3.png',
                alt: {
                  ja: '実施欠点表（D）３',
                  en: 'Table of execution faults, part 3',
                  zh: '完成缺点表（D）3',
                  ko: '실시 결점 표(D) 3',
                  es: 'Tabla de faltas de ejecución (D) 3',
                  fr: "Tableau des fautes d'exécution, partie 3",
                  ru: 'Таблица ошибок исполнения, часть 3',
                  hi: 'निष्पादन त्रुटि तालिका (D) 3',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
