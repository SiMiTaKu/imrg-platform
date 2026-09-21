import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、難度。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const DIFFICULTY_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '難度',
      en: 'Difficulty',
      zh: '难度',
      ko: '난도',
      es: 'Dificultad',
      fr: 'Difficultés',
      ru: 'Трудность',
      hi: 'कठिनाई',
    },
    section: [
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
            element: {
              ja: `徒手系の難度は以下のとおりにする。

1. 個人競技で手具操作をともなって実施した場合は基礎難度を採用する。
2. 団体競技は３〜５人以上が実施した場合は基礎難度、６人が実施した場合は６名実施の難度を採用する。ただし実施は同時、または次々に実施した場合とする。
  a. 同じ群（下記の１〜４のそれぞれ）の技で、異なる種類を組み合わせて実施した場合６名が実施すれば難度が上がる種目の組み合わせはランクアップされる。
  b. 群の違う技の組み合わせは、難度として数えない。
  c. 静止の２秒は同時でなければならない。

【基礎難度表】
跳躍・バランス・倒立（静止2秒）・柔軟A〜静的柔軟〜を以下に示す`,
              en: `Free-hand difficulties are determined as follows.

1. In the individual competition, when performed with apparatus handling, the basic difficulty applies.
2. In the group competition, the basic difficulty applies when three to five gymnasts perform the element, and the six-gymnast difficulty applies when all six perform it. The element must be performed at the same time or one after another.
  a. When different elements of the same group (each of groups 1 to 4 below) are combined, combinations whose difficulty rises when performed by six gymnasts are upgraded if all six perform them.
  b. Combinations of elements from different groups are not counted as difficulties.
  c. Static positions of 2 seconds must be held at the same time.

[Table of basic difficulties]
Jumps, balances, handstands (held for 2 seconds) and flexibility A (static flexibility) are shown below.`,
              zh: `徒手难度按以下规定执行。

1. 在个人比赛中伴随器械操作完成时，采用基础难度。
2. 在团体比赛中，3 至 5 人以上完成时采用基础难度，6 人完成时采用 6 人完成的难度。但完成必须是同时，或依次连续完成。
  a. 同一组（下列 1 至 4 的各组）的动作中，将不同种类组合完成时，6 人完成即可提高难度的项目组合将被升级。
  b. 不同组动作的组合，不计为难度。
  c. 静止 2 秒必须同时完成。

【基础难度表】
跳跃、平衡、倒立（静止 2 秒）、柔韧 A（静态柔韧）如下所示`,
              ko: `신체 난도는 다음과 같이 한다.

1. 개인 경기에서 수구 조작을 동반하여 실시한 경우에는 기초 난도를 적용한다.
2. 단체 경기는 3~5명 이상이 실시한 경우에는 기초 난도, 6명이 실시한 경우에는 6명 실시의 난도를 적용한다. 다만 실시는 동시에, 또는 잇따라 실시한 경우로 한다.
  a. 같은 군(아래 1~4의 각각)의 기술로 서로 다른 종류를 조합하여 실시한 경우, 6명이 실시하면 난도가 올라가는 종목의 조합은 등급이 올라간다.
  b. 군이 다른 기술의 조합은 난도로 세지 않는다.
  c. 정지 2초는 동시여야 한다.

【기초 난도표】
도약 · 밸런스 · 물구나무서기(정지 2초) · 유연성 A ~정적 유연성~ 을 아래에 제시한다`,
              es: `Las dificultades de manos libres se determinan como sigue.

1. En la competición individual, cuando el elemento se realiza con manejo del aparato, se aplica la dificultad básica.
2. En la competición por conjuntos, cuando el elemento lo realizan de 3 a 5 gimnastas se aplica la dificultad básica, y cuando lo realizan 6 gimnastas se aplica la dificultad correspondiente a la ejecución por 6 gimnastas. La ejecución debe ser simultánea o sucesiva.
  a. Cuando se combinan elementos de distinto tipo pertenecientes a un mismo grupo (cada uno de los grupos 1 a 4 indicados abajo), las combinaciones cuya dificultad aumenta al realizarlas 6 gimnastas suben de rango si las realizan los 6.
  b. Las combinaciones de elementos de grupos distintos no se cuentan como dificultad.
  c. Los 2 segundos de mantenido deben ser simultáneos.

[Tabla de dificultades básicas]
A continuación se indican los saltos, los equilibrios, las verticales (mantenido 2 segundos) y la flexibilidad A –flexibilidad estática–`,
              fr: `Les difficultés corporelles sont déterminées comme suit.

1. En compétition individuelle, lorsque l'élément est exécuté avec maniement de l'engin, la difficulté de base s'applique.
2. En compétition par ensembles, la difficulté de base s'applique lorsque trois à cinq gymnastes exécutent l'élément, et la difficulté « à six » lorsque les six l'exécutent. L'élément doit être exécuté simultanément ou successivement.
  a. Lorsque des éléments différents d'un même groupe (chacun des groupes 1 à 4 ci-dessous) sont combinés, les combinaisons dont la difficulté augmente lorsqu'elles sont exécutées par six gymnastes montent d'un rang si les six les exécutent.
  b. Les combinaisons d'éléments de groupes différents ne sont pas comptées comme difficultés.
  c. Les positions tenues 2 secondes doivent l'être simultanément.

[Tableau des difficultés de base]
Les sauts, les équilibres, les appuis tendus renversés (tenus 2 secondes) et la souplesse A (souplesse statique) figurent ci-dessous.`,
              ru: `Трудности без предмета определяются так.

1. В индивидуальных соревнованиях, если элемент выполнен с работой предметом, применяется базовая трудность.
2. В групповых соревнованиях при исполнении элемента тремя — пятью гимнастами применяется базовая трудность, а при исполнении шестью — трудность для шести гимнастов. При этом элемент должен выполняться одновременно или друг за другом.
  a. Если сочетаются разные элементы одной группы (каждой из групп 1–4 ниже), то сочетания, трудность которых повышается при исполнении шестью гимнастами, повышаются в ранге, если их выполнили все шестеро.
  b. Сочетания элементов из разных групп трудностью не считаются.
  c. Двухсекундная фиксация должна выполняться одновременно.

[Таблица базовых трудностей]
Ниже приводятся прыжки, равновесия, стойки на руках (фиксация 2 секунды) и гибкость A (статическая гибкость).`,
              hi: `बिना उपकरण की कठिनाइयाँ निम्नानुसार निर्धारित की जाती हैं।

1. व्यक्तिगत प्रतियोगिता में उपकरण संचालन के साथ किए जाने पर आधार कठिनाई ली जाती है।
2. समूह प्रतियोगिता में 3–5 जिम्नास्ट द्वारा किए जाने पर आधार कठिनाई और 6 जिम्नास्ट द्वारा किए जाने पर 6 जिम्नास्ट वाली कठिनाई ली जाती है। परन्तु यह एक साथ या एक के बाद एक किया जाना चाहिए।
  a. एक ही वर्ग (नीचे दिए 1–4 में से प्रत्येक) के तत्वों में भिन्न प्रकारों को मिलाकर किए जाने पर, 6 जिम्नास्ट के करने से जिन संयोजनों की कठिनाई बढ़ती है, वे अपग्रेड किए जाते हैं।
  b. भिन्न वर्गों के तत्वों का संयोजन कठिनाई के रूप में नहीं गिना जाता।
  c. स्थिर मुद्रा के 2 सेकंड एक साथ होने चाहिए।

[आधार कठिनाई तालिका]
छलांग, संतुलन, हैंडस्टैंड (स्थिर 2 सेकंड) और लचीलापन A –स्थिर लचीलापन– नीचे दिए गए हैं`,
            },
            image: [
              {
                src: '/images/rules/jumpdifficulties.png',
                alt: {
                  ja: '徒手系難度（跳躍）',
                  en: 'Free-hand difficulties (jumps)',
                  zh: '徒手难度（跳跃）',
                  ko: '신체 난도(도약)',
                  es: 'Dificultades de manos libres (saltos)',
                  fr: 'Difficultés corporelles (sauts)',
                  ru: 'Трудности без предмета (прыжки)',
                  hi: 'बिना उपकरण की कठिनाइयाँ (छलांग)',
                },
              },
              {
                src: '/images/rules/balansedifficulties.png',
                alt: {
                  ja: '徒手系難度（バランス）',
                  en: 'Free-hand difficulties (balances)',
                  zh: '徒手难度（平衡）',
                  ko: '신체 난도(밸런스)',
                  es: 'Dificultades de manos libres (equilibrios)',
                  fr: 'Difficultés corporelles (équilibres)',
                  ru: 'Трудности без предмета (равновесия)',
                  hi: 'बिना उपकरण की कठिनाइयाँ (संतुलन)',
                },
              },
              {
                src: '/images/rules/handstanddifficulties.png',
                alt: {
                  ja: '倒立（静止２秒',
                  en: 'Handstands (held for 2 seconds)',
                  zh: '倒立（静止 2 秒',
                  ko: '물구나무서기(정지 2초',
                  es: 'Verticales (mantenido 2 segundos',
                  fr: 'Appuis tendus renversés (tenus 2 secondes)',
                  ru: 'Стойки на руках (фиксация 2 секунды)',
                  hi: 'हैंडस्टैंड (स्थिर 2 सेकंड)',
                },
              },
              {
                src: '/images/rules/stretchdifficulties.png',
                alt: {
                  ja: '柔軟Ａ　〜静的柔軟〜',
                  en: 'Flexibility A (static flexibility)',
                  zh: '柔韧 A（静态柔韧）',
                  ko: '유연성 A　~정적 유연성~',
                  es: 'Flexibilidad A –flexibilidad estática–',
                  fr: 'Souplesse A — souplesse statique',
                  ru: 'Гибкость A — статическая гибкость',
                  hi: 'लचीलापन A –स्थिर लचीलापन–',
                },
              },
            ],
          },
        ],
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
        block: [
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
            element: {
              ja: `転回系の難度は次の基礎難度をもとに価値が決められる。

とび技ひねり技・前方系の跳躍技・後方系の跳躍技・宙返りの連続・転回系の連続の表を以下に示す。

※※宙返り以外の技では２ー３、３ー15の転回系も同等の扱いとする。
※テンポ宙返りは直ちに後方系の展開に続けた場合のみ、その扱いとする。
※６人全員が同時に実施した場合のみ格上げの対象とする。
３回以上の連続後転とびの一部がＢ難度以上の転回系に変わったものも同等として扱う。
後方伸身宙返りにひねりが加わった場合も同等の扱いとする。`,
              en: `The value of tumbling difficulties is determined from the following basic difficulties.

Tables of twisting elements, forward tumbling elements, backward tumbling elements, salto combinations and tumbling combinations are shown below.

** For elements other than saltos, tumbling in 2-3 and 3-15 is treated in the same way.
* A tempo salto is treated as such only when followed immediately by backward tumbling.
* Upgrades apply only when all six gymnasts perform the element at the same time.
Three or more consecutive back handsprings in which some are replaced by tumbling of B difficulty or higher are treated in the same way.
A layout back salto with an added twist is also treated in the same way.`,
              zh: `翻腾难度依据以下基础难度确定其价值。

跳转体动作、前方跳跃动作、后方跳跃动作、空翻连续、翻腾连续的表格如下所示。

※※除空翻以外的动作中，2-3、3-15 的翻腾也同等对待。
※节奏空翻仅在紧接后方翻腾展开时，方按此对待。
※仅在 6 人全部同时完成时，才作为升级对象。
3 次以上的连续后手翻中，其中一部分变为 B 难度以上翻腾的，也同等对待。
后方直体空翻加转体时，也同等对待。`,
              ko: `공중돌기 난도는 다음의 기초 난도를 바탕으로 가치가 정해진다.

뛰기 기술 · 비틀기 기술 · 전방 계열의 도약 기술 · 후방 계열의 도약 기술 · 공중돌기의 연속 · 공중돌기 계열의 연속에 관한 표를 아래에 제시한다.

※※공중돌기 이외의 기술에서는 2-3, 3-15의 공중돌기 계열도 동등하게 취급한다.
※템포 공중돌기는 곧바로 후방 계열의 전개로 이어간 경우에만 그와 같이 취급한다.
※6명 전원이 동시에 실시한 경우에만 등급 상향의 대상으로 한다.
3회 이상의 연속 백핸드스프링의 일부가 B 난도 이상의 공중돌기 계열로 바뀐 것도 동등하게 취급한다.
후방 몸펴 공중돌기에 비틀기가 더해진 경우도 동등하게 취급한다.`,
              es: `El valor de las dificultades de tumbling se determina a partir de las dificultades básicas siguientes.

A continuación se muestran las tablas de los saltos con pirueta, de los elementos acrobáticos hacia delante, de los elementos acrobáticos hacia atrás, de las series de mortales y de las series de elementos de tumbling.

** En los elementos distintos de los mortales, el tumbling de 2-3 y de 3-15 recibe el mismo tratamiento.
* El mortal de tempo recibe ese tratamiento únicamente cuando se enlaza de inmediato con un elemento acrobático hacia atrás.
* Solo se sube de rango cuando los 6 gimnastas lo realizan a la vez.
Las series de 3 o más flic-flac hacia atrás en las que una parte se sustituye por un elemento de tumbling de dificultad B o superior reciben el mismo tratamiento.
El mortal atrás extendido al que se añade una pirueta recibe también el mismo tratamiento.`,
              fr: `La valeur des difficultés de tumbling est établie à partir des difficultés de base suivantes.

Les tableaux des éléments avec vrille, des éléments avant, des éléments arrière, des enchaînements de saltos et des enchaînements de tumbling figurent ci-dessous.

** Pour les éléments autres que les saltos, le tumbling des points 2-3 et 3-15 est traité de la même manière.
* Le salto tempo n'est traité comme tel que s'il est immédiatement suivi d'un enchaînement arrière.
* La montée de rang ne s'applique que si les six gymnastes exécutent l'élément simultanément.
Trois flic-flac enchaînés ou plus dont une partie est remplacée par un tumbling de difficulté B ou supérieure sont traités de la même manière.
Un salto arrière corps tendu assorti d'une vrille est également traité de la même manière.`,
              ru: `Ценность акробатических трудностей определяется на основе следующих базовых трудностей.

Ниже приводятся таблицы элементов с поворотом, акробатических элементов вперёд, акробатических элементов назад, связок сальто и акробатических связок.

※※ Для элементов, кроме сальто, акробатика 2-3 и 3-15 приравнивается к ним же.
※ Темповое сальто считается таковым только тогда, когда сразу переходит в акробатику назад.
※ Повышение ранга применяется только при одновременном исполнении всеми шестью гимнастами.
Три и более фляка подряд, часть которых заменена акробатикой трудности B и выше, приравниваются к ним же.
Сальто назад прогнувшись с добавленным поворотом также приравнивается к ним же.`,
              hi: `टम्बलिंग की कठिनाई का मूल्य निम्नलिखित आधार कठिनाइयों के आधार पर तय किया जाता है।

मुड़ान वाले तत्व, आगे की ओर के छलांग तत्व, पीछे की ओर के छलांग तत्व, साल्टो की लगातार श्रृंखला और टम्बलिंग की लगातार श्रृंखला की तालिकाएँ नीचे दी गई हैं।

** साल्टो के अलावा के तत्वों में 2-3, 3-15 की टम्बलिंग को भी समान माना जाता है।
* टेम्पो साल्टो को यह दर्जा केवल तब दिया जाता है जब उसके तुरंत बाद पीछे की ओर की टम्बलिंग की जाए।
* अपग्रेड केवल तब लागू होता है जब सभी 6 जिम्नास्ट एक साथ करें।
3 या अधिक लगातार बैक हैंडस्प्रिंग में से कुछ के B कठिनाई या उससे ऊपर की टम्बलिंग में बदल जाने को भी समान माना जाता है।
पीछे की ओर के सीधे साल्टो में मुड़ान जुड़ने पर भी उसे समान माना जाता है।`,
            },
            image: [
              {
                src: '/images/rules/jumpturndifficulties.png',
                alt: {
                  ja: 'とびひねり技の難度表',
                  en: 'Table of twisting element difficulties',
                  zh: '跳转体动作难度表',
                  ko: '뛰기 비틀기 기술의 난도표',
                  es: 'Tabla de dificultades de los saltos con pirueta',
                  fr: 'Tableau des difficultés des éléments avec vrille',
                  ru: 'Таблица трудностей элементов с поворотом',
                  hi: 'मुड़ान वाले तत्वों की कठिनाई तालिका',
                },
              },
              {
                src: '/images/rules/forwardjumpdifficulties.png',
                alt: {
                  ja: '前方系跳躍技の難度表',
                  en: 'Table of forward tumbling difficulties',
                  zh: '前方跳跃动作难度表',
                  ko: '전방 계열 도약 기술의 난도표',
                  es: 'Tabla de dificultades de los elementos acrobáticos hacia delante',
                  fr: 'Tableau des difficultés des éléments avant',
                  ru: 'Таблица трудностей акробатических элементов вперёд',
                  hi: 'आगे की ओर के छलांग तत्वों की कठिनाई तालिका',
                },
              },
              {
                src: '/images/rules/backwardjumpdifficulties.png',
                alt: {
                  ja: '後方系の跳躍技の難度表',
                  en: 'Table of backward tumbling difficulties',
                  zh: '后方跳跃动作难度表',
                  ko: '후방 계열 도약 기술의 난도표',
                  es: 'Tabla de dificultades de los elementos acrobáticos hacia atrás',
                  fr: 'Tableau des difficultés des éléments arrière',
                  ru: 'Таблица трудностей акробатических элементов назад',
                  hi: 'पीछे की ओर के छलांग तत्वों की कठिनाई तालिका',
                },
              },
              {
                src: '/images/rules/combinationdifficulties.png',
                alt: {
                  ja: '宙返りの連続の難度表',
                  en: 'Table of salto combination difficulties',
                  zh: '空翻连续难度表',
                  ko: '공중돌기 연속의 난도표',
                  es: 'Tabla de dificultades de las series de mortales',
                  fr: 'Tableau des difficultés des enchaînements de saltos',
                  ru: 'Таблица трудностей связок сальто',
                  hi: 'साल्टो की लगातार श्रृंखला की कठिनाई तालिका',
                },
              },
              {
                src: '/images/rules/combinationdifficulties2.png',
                alt: {
                  ja: '転回系の連続の難度表',
                  en: 'Table of tumbling combination difficulties',
                  zh: '翻腾连续难度表',
                  ko: '공중돌기 계열 연속의 난도표',
                  es: 'Tabla de dificultades de las series de elementos de tumbling',
                  fr: 'Tableau des difficultés des enchaînements de tumbling',
                  ru: 'Таблица трудностей акробатических связок',
                  hi: 'टम्बलिंग की लगातार श्रृंखला की कठिनाई तालिका',
                },
              },
            ],
          },
        ],
      },
      {
        title: {
          ja: '団体競技における難度の組み合わせ',
          en: 'Difficulty Combinations in the Group Competition',
          zh: '团体比赛中的难度组合',
          ko: '단체 경기에서의 난도 조합',
          es: 'Combinaciones de dificultades en la competición por conjuntos',
          fr: 'Combinaisons de difficultés en compétition par ensembles',
          ru: 'Сочетания трудностей в групповых соревнованиях',
          hi: 'समूह प्रतियोगिता में कठिनाइयों का संयोजन',
        },
        block: [
          {
            title: {
              ja: '交差技と組運動の難度',
              en: 'Difficulty of Crossing Elements and Partner Elements',
              zh: '交叉动作与双人动作的难度',
              ko: '교차 기술과 조 운동의 난도',
              es: 'Dificultad de los elementos de cruce y de los elementos en grupo',
              fr: 'Difficulté des éléments croisés et des éléments en duo',
              ru: 'Трудность пересекающихся и парных элементов',
              hi: 'क्रॉसिंग तत्वों और जोड़ी तत्वों की कठिनाई',
            },
            element: {
              ja: `【交差技】
交差技の難度は以下の通りとする。

1. 徒手系の上を転回系で跳び越えた場合は転回系の種目の難度を採用する。
2. 転回系の交差技は、転回系の途中を飛び越えていなければならない。最低条件として、転回系の着地寸前に跳び越えることとする。
3. 転回系の交差技は、転回系の途中を跳び越えていなければならない。
4. 着地後に跳び越えた場合は（１）の扱いとする。
5. ２段の交差技の難度（以下の表を参照）
6. ３段以上の交差技をすべてＢ難度以上の展開系で実施した場合はＤ難度とする。Ａ難度が入っていた場合は、この扱いにはならない。

【組・組立運動】
組・組立運動の難度は以下のとおりとする。

1. 組み・組立運動の難度表（以下の表を参照）
※次に展開系に続けた場合に難度として扱う。
※Ｃ難度以上の転回系の場合は、その転回系の難度とする。

2. 組・組立運動での難度の格上げ
  a. 肩上倒立をとばし技で超えた場合は、跳躍系は１ランク、宙返り系は２ランク難度が上がる。
  b. 組倒立で片手倒立または支持者が伸腕で支持した場合は、１ランク難度が上がる。

【シリーズの難度の判定】
競技者が、いくつかのグループに分かれ、次々と転回系を行なった場合、難度の判定は以下のとおりとする。

1. 原則として交差技と組・組立運動を除き、３名以上が実施した難度を採用する。ただし高い難度の技を低い難度として読み替えることはできる。
2. いくつかのグループに分かれて同じ難度の転回系を実施した場合
  a. ３：３に分かれた場合
    i. 原則として、高い難度を実施したグループの難度を採用する。
    ii. 異なる種目であっても、６名以上が実施すれば難度が上がる種目の組み合わせの場合は、ランクアップされる。
    ※６名で実施した場合に難度が格上げになる技を以下に示す
  b. ４・２または５・１に分かれた場合
    i. 原則として、高い難度を実施したグループの難度を採用する。
    ii. 異なる種目であっても、６名以上が実施すれば難度が上がる種目の組み合わせの場合は、ランクアップされる。
    iii. 人数の少ないグループが、交差技または組・組立運動の場合は難度として採用し、難度の高いグループを採用する。
3. いくつかのグループに分かれて同じ難度の転回系を実施した場合
  1. ３名以上が実施した難度を採用する。
  2. シリーズに含まれる交差技または組・組立運動が、シリーズに中で最も高い難度の場合は、人数にかかわらず、その難度を採用する。
  3. 高い難度を低い難度で読み替えても、すべての難度が３名未満の場合は、難度として認めない。`,
              en: `[Crossing elements]
The difficulty of crossing elements is as follows.

1. When a gymnast tumbles over gymnasts performing free-hand elements, the difficulty of the tumbling element applies.
2. A tumbling crossing element must pass over the other gymnast during their tumbling. As a minimum, it must pass over just before the other gymnast lands.
3. A tumbling crossing element must pass over the other gymnast during their tumbling.
4. If it passes over after the landing, it is treated as in (1).
5. Difficulty of two-level crossing elements (see the table below)
6. A crossing element of three or more levels performed entirely with tumbling of B difficulty or higher is a D difficulty. If an A difficulty is included, this does not apply.

[Partner and pyramid elements]
The difficulty of partner and pyramid elements is as follows.

1. Table of partner and pyramid element difficulties (see the table below)
* They count as difficulties when followed by tumbling.
* When the tumbling is C difficulty or higher, the difficulty of that tumbling applies.

2. Upgrades in partner and pyramid elements
  a. When a gymnast jumps over a handstand on a partner's shoulders, jumping elements rise one rank and saltos rise two ranks.
  b. In a partner handstand, a one-arm handstand or support with straight arms by the supporting gymnast raises the difficulty one rank.

[Judging the difficulty of a series]
When gymnasts divide into groups and perform tumbling one after another, the difficulty is judged as follows.

1. As a rule, except for crossing elements and partner and pyramid elements, the difficulty performed by three or more gymnasts applies. A higher difficulty may be counted as a lower one.
2. When groups perform tumbling of the same difficulty
  a. Divided 3 and 3
    i. As a rule, the difficulty of the group that performed the higher difficulty applies.
    ii. Even with different elements, combinations whose difficulty rises when performed by six or more gymnasts are upgraded.
    * Elements whose difficulty is upgraded when performed by six gymnasts are shown below.
  b. Divided 4 and 2, or 5 and 1
    i. As a rule, the difficulty of the group that performed the higher difficulty applies.
    ii. Even with different elements, combinations whose difficulty rises when performed by six or more gymnasts are upgraded.
    iii. If the smaller group performs a crossing element or a partner or pyramid element, it is counted as a difficulty, and the group with the higher difficulty applies.
3. When groups perform tumbling of the same difficulty
  1. The difficulty performed by three or more gymnasts applies.
  2. If a crossing element or a partner or pyramid element in the series is the highest difficulty in the series, that difficulty applies regardless of the number of gymnasts.
  3. If every difficulty is performed by fewer than three gymnasts, even after counting higher difficulties as lower ones, no difficulty is recognized.`,
              zh: `【交叉动作】
交叉动作的难度规定如下。

1. 从徒手动作上方以翻腾跃过时，采用该翻腾项目的难度。
2. 翻腾的交叉动作，必须跃过翻腾的过程之中。最低条件为在翻腾落地前的瞬间跃过。
3. 翻腾的交叉动作，必须跃过翻腾的过程之中。
4. 在落地之后跃过时，按（1）对待。
5. 2 层交叉动作的难度（参见下表）
6. 3 层以上的交叉动作全部以 B 难度以上的翻腾完成时，定为 D 难度。其中含有 A 难度时，不按此对待。

【双人、叠罗汉动作】
双人、叠罗汉动作的难度规定如下。

1. 双人、叠罗汉动作的难度表（参见下表）
※紧接翻腾时，方作为难度对待。
※为 C 难度以上的翻腾时，采用该翻腾的难度。

2. 双人、叠罗汉动作中难度的升级
  a. 以跃过动作越过肩上倒立时，跳跃类提高 1 个等级，空翻类提高 2 个等级。
  b. 双人倒立中为单手倒立，或支撑者以直臂支撑时，提高 1 个等级。

【系列难度的判定】
参赛者分为若干组、依次进行翻腾时，难度的判定如下。

1. 原则上除交叉动作与双人、叠罗汉动作外，采用 3 人以上完成的难度。但可以将高难度的动作按低难度计算。
2. 分为若干组完成相同难度的翻腾时
  a. 分为 3：3 时
    i. 原则上采用完成较高难度的组的难度。
    ii. 即使项目不同，若为 6 人以上完成即可提高难度的项目组合，则予以升级。
    ※6 人完成时难度升级的动作如下所示
  b. 分为 4、2 或 5、1 时
    i. 原则上采用完成较高难度的组的难度。
    ii. 即使项目不同，若为 6 人以上完成即可提高难度的项目组合，则予以升级。
    iii. 人数较少的组为交叉动作或双人、叠罗汉动作时，将其作为难度采用，并采用难度较高的组。
3. 分为若干组完成相同难度的翻腾时
  1. 采用 3 人以上完成的难度。
  2. 系列中包含的交叉动作或双人、叠罗汉动作为该系列中最高难度时，不论人数，均采用该难度。
  3. 即使将高难度按低难度计算，所有难度均不足 3 人完成时，不认定为难度。`,
              ko: `【교차 기술】
교차 기술의 난도는 다음과 같이 한다.

1. 신체 계열 위를 공중돌기 계열로 뛰어넘은 경우에는 공중돌기 계열 종목의 난도를 적용한다.
2. 공중돌기 계열의 교차 기술은 공중돌기 계열의 도중을 뛰어넘어야 한다. 최저 조건으로 공중돌기 계열의 착지 직전에 뛰어넘는 것으로 한다.
3. 공중돌기 계열의 교차 기술은 공중돌기 계열의 도중을 뛰어넘어야 한다.
4. 착지 후에 뛰어넘은 경우에는 (1)의 취급으로 한다.
5. 2단 교차 기술의 난도(아래 표 참조)
6. 3단 이상의 교차 기술을 모두 B 난도 이상의 전개 계열로 실시한 경우에는 D 난도로 한다. A 난도가 들어 있는 경우에는 이 취급이 되지 않는다.

【조 · 조립 운동】
조 · 조립 운동의 난도는 다음과 같이 한다.

1. 조 · 조립 운동의 난도표(아래 표 참조)
※다음에 전개 계열로 이어간 경우에 난도로 취급한다.
※C 난도 이상의 공중돌기 계열인 경우에는 그 공중돌기 계열의 난도로 한다.

2. 조 · 조립 운동에서의 난도 등급 상향
  a. 어깨 위 물구나무서기를 뛰어넘기 기술로 넘은 경우, 도약 계열은 1등급, 공중돌기 계열은 2등급 난도가 올라간다.
  b. 조 물구나무서기에서 한 손 물구나무서기 또는 받치는 사람이 팔을 편 채로 지지한 경우에는 1등급 난도가 올라간다.

【시리즈의 난도 판정】
경기자가 몇 개의 그룹으로 나뉘어 잇따라 공중돌기 계열을 실시한 경우, 난도의 판정은 다음과 같이 한다.

1. 원칙적으로 교차 기술과 조 · 조립 운동을 제외하고 3명 이상이 실시한 난도를 적용한다. 다만 높은 난도의 기술을 낮은 난도로 바꾸어 볼 수는 있다.
2. 몇 개의 그룹으로 나뉘어 같은 난도의 공중돌기 계열을 실시한 경우
  a. 3:3으로 나뉜 경우
    i. 원칙적으로 높은 난도를 실시한 그룹의 난도를 적용한다.
    ii. 서로 다른 종목이라 하더라도 6명 이상이 실시하면 난도가 올라가는 종목의 조합인 경우에는 등급이 올라간다.
    ※6명이 실시한 경우에 난도가 상향되는 기술을 아래에 제시한다
  b. 4 · 2 또는 5 · 1로 나뉜 경우
    i. 원칙적으로 높은 난도를 실시한 그룹의 난도를 적용한다.
    ii. 서로 다른 종목이라 하더라도 6명 이상이 실시하면 난도가 올라가는 종목의 조합인 경우에는 등급이 올라간다.
    iii. 인원이 적은 그룹이 교차 기술 또는 조 · 조립 운동인 경우에는 난도로 적용하고, 난도가 높은 그룹을 적용한다.
3. 몇 개의 그룹으로 나뉘어 같은 난도의 공중돌기 계열을 실시한 경우
  1. 3명 이상이 실시한 난도를 적용한다.
  2. 시리즈에 포함된 교차 기술 또는 조 · 조립 운동이 시리즈 안에서 가장 높은 난도인 경우에는 인원과 관계없이 그 난도를 적용한다.
  3. 높은 난도를 낮은 난도로 바꾸어 보아도 모든 난도가 3명 미만인 경우에는 난도로 인정하지 않는다.`,
              es: `[Elementos de cruce]
La dificultad de los elementos de cruce es la siguiente.

1. Cuando se pasa por encima de un elemento de manos libres con un elemento de tumbling, se aplica la dificultad del elemento de tumbling.
2. En los elementos de cruce sobre tumbling hay que pasar por encima del compañero mientras este realiza el elemento de tumbling. Como condición mínima, hay que pasar justo antes de su recepción.
3. En los elementos de cruce sobre tumbling hay que pasar por encima del compañero durante su elemento de tumbling.
4. Si se pasa por encima después de la recepción, se aplica lo indicado en (1).
5. Dificultad de los elementos de cruce de dos niveles (véase la tabla siguiente)
6. Los elementos de cruce de tres o más niveles realizados íntegramente con elementos de tumbling de dificultad B o superior se consideran dificultad D. Si se incluye una dificultad A, no se aplica este tratamiento.

[Elementos en grupo y pirámides]
La dificultad de los elementos en grupo y de las pirámides es la siguiente.

1. Tabla de dificultades de los elementos en grupo y de las pirámides (véase la tabla siguiente)
* Se cuentan como dificultad cuando a continuación se enlaza un elemento de tumbling.
* Cuando el elemento de tumbling es de dificultad C o superior, se aplica la dificultad de ese elemento.

2. Subida de rango en los elementos en grupo y en las pirámides
  a. Cuando se pasa por encima de una vertical sobre los hombros con un elemento de salto, los saltos suben 1 rango y los mortales suben 2 rangos.
  b. En las verticales en grupo, la vertical a una mano o el sostén con los brazos extendidos por parte del gimnasta que sostiene suben la dificultad 1 rango.

[Determinación de la dificultad de una serie]
Cuando los gimnastas se dividen en varios grupos y realizan elementos de tumbling uno tras otro, la dificultad se determina como sigue.

1. Por regla general, salvo en los elementos de cruce y en los elementos en grupo y pirámides, se aplica la dificultad realizada por 3 o más gimnastas. No obstante, un elemento de dificultad alta puede contarse como una dificultad inferior.
2. Cuando, divididos en varios grupos, realizan elementos de tumbling de la misma dificultad
  a. División 3:3
    i. Por regla general se aplica la dificultad del grupo que ha realizado la dificultad más alta.
    ii. Aunque se trate de elementos distintos, si forman una combinación cuya dificultad aumenta cuando la realizan 6 o más gimnastas, sube de rango.
    * A continuación se indican los elementos cuya dificultad sube de rango cuando los realizan 6 gimnastas
  b. División 4:2 o 5:1
    i. Por regla general se aplica la dificultad del grupo que ha realizado la dificultad más alta.
    ii. Aunque se trate de elementos distintos, si forman una combinación cuya dificultad aumenta cuando la realizan 6 o más gimnastas, sube de rango.
    iii. Si el grupo con menos gimnastas realiza un elemento de cruce o un elemento en grupo o pirámide, este se cuenta como dificultad y se aplica la dificultad del grupo con la dificultad más alta.
3. Cuando, divididos en varios grupos, realizan elementos de tumbling de la misma dificultad
  1. Se aplica la dificultad realizada por 3 o más gimnastas.
  2. Cuando el elemento de cruce o el elemento en grupo o pirámide incluido en la serie es la dificultad más alta de la serie, se aplica esa dificultad con independencia del número de gimnastas.
  3. Si, aun contando las dificultades altas como dificultades inferiores, todas las dificultades las realizan menos de 3 gimnastas, no se reconoce ninguna dificultad.`,
              fr: `[Éléments croisés]
La difficulté des éléments croisés est la suivante.

1. Lorsqu'un gymnaste franchit en tumbling des gymnastes exécutant des éléments corporels, la difficulté de l'élément de tumbling s'applique.
2. Un élément croisé en tumbling doit franchir l'autre gymnaste pendant son tumbling. Au minimum, il doit le franchir juste avant sa réception.
3. Un élément croisé en tumbling doit franchir l'autre gymnaste pendant son tumbling.
4. S'il le franchit après la réception, il est traité comme au point (1).
5. Difficulté des éléments croisés à deux niveaux (voir le tableau ci-dessous)
6. Un élément croisé à trois niveaux ou plus exécuté intégralement avec un tumbling de difficulté B ou supérieure est une difficulté D. Si une difficulté A y figure, cette règle ne s'applique pas.

[Éléments en duo et pyramides]
La difficulté des éléments en duo et des pyramides est la suivante.

1. Tableau des difficultés des éléments en duo et des pyramides (voir le tableau ci-dessous)
* Ils comptent comme difficultés lorsqu'ils sont suivis d'un tumbling.
* Lorsque le tumbling est de difficulté C ou supérieure, c'est la difficulté de ce tumbling qui s'applique.

2. Montée de rang dans les éléments en duo et les pyramides
  a. Lorsqu'un gymnaste franchit d'un saut un ATR sur les épaules d'un partenaire, les éléments de saut montent d'un rang et les saltos de deux rangs.
  b. Dans un ATR à deux, un ATR sur un bras ou un maintien à bras tendus par le porteur fait monter la difficulté d'un rang.

[Appréciation de la difficulté d'une série]
Lorsque les gymnastes se répartissent en groupes et exécutent le tumbling les uns après les autres, la difficulté s'apprécie comme suit.

1. En principe, hormis pour les éléments croisés et les éléments en duo et pyramides, c'est la difficulté exécutée par trois gymnastes ou plus qui s'applique. Une difficulté plus élevée peut être comptée comme une difficulté inférieure.
2. Lorsque les groupes exécutent un tumbling de même difficulté
  a. Répartition 3 et 3
    i. En principe, c'est la difficulté du groupe ayant exécuté la difficulté la plus élevée qui s'applique.
    ii. Même avec des éléments différents, les combinaisons dont la difficulté augmente lorsqu'elles sont exécutées par six gymnastes ou plus montent d'un rang.
    * Les éléments dont la difficulté monte d'un rang lorsqu'ils sont exécutés par six gymnastes figurent ci-dessous.
  b. Répartition 4 et 2, ou 5 et 1
    i. En principe, c'est la difficulté du groupe ayant exécuté la difficulté la plus élevée qui s'applique.
    ii. Même avec des éléments différents, les combinaisons dont la difficulté augmente lorsqu'elles sont exécutées par six gymnastes ou plus montent d'un rang.
    iii. Si le groupe le moins nombreux exécute un élément croisé ou un élément en duo ou une pyramide, celui-ci est compté comme difficulté, et c'est le groupe à la difficulté la plus élevée qui s'applique.
3. Lorsque les groupes exécutent un tumbling de même difficulté
  1. C'est la difficulté exécutée par trois gymnastes ou plus qui s'applique.
  2. Si un élément croisé ou un élément en duo ou une pyramide de la série est la difficulté la plus élevée de celle-ci, cette difficulté s'applique quel que soit le nombre de gymnastes.
  3. Si toutes les difficultés sont exécutées par moins de trois gymnastes, même après avoir compté les difficultés supérieures comme inférieures, aucune difficulté n'est reconnue.`,
              ru: `[Пересекающиеся элементы]
Трудность пересекающихся элементов определяется так.

1. Если гимнаст перелетает акробатическим элементом над гимнастами, выполняющими элементы без предмета, применяется трудность этого акробатического элемента.
2. Акробатический пересекающийся элемент должен проходить над другим гимнастом во время его акробатики. Как минимум он должен проходить над ним непосредственно перед приземлением.
3. Акробатический пересекающийся элемент должен проходить над другим гимнастом во время его акробатики.
4. Если перелёт произошёл после приземления, применяется пункт (1).
5. Трудность двухъярусных пересекающихся элементов (см. таблицу ниже)
6. Пересекающийся элемент в три и более яруса, выполненный целиком акробатикой трудности B и выше, относится к трудности D. Если в нём есть трудность A, это правило не применяется.

[Парные элементы и пирамиды]
Трудность парных элементов и пирамид определяется так.

1. Таблица трудностей парных элементов и пирамид (см. таблицу ниже)
※ Они засчитываются как трудность, если за ними следует акробатика.
※ Если акробатика имеет трудность C и выше, применяется трудность этой акробатики.

2. Повышение ранга в парных элементах и пирамидах
  a. Если гимнаст перепрыгивает через стойку на руках на плечах партнёра, прыжковые элементы поднимаются на один ранг, а сальто — на два.
  b. В парной стойке на руках стойка на одной руке либо поддержка прямыми руками со стороны нижнего гимнаста повышает трудность на один ранг.

[Определение трудности серии]
Когда гимнасты разделяются на группы и выполняют акробатику друг за другом, трудность определяется так.

1. Как правило, кроме пересекающихся элементов и парных элементов с пирамидами, применяется трудность, выполненная тремя и более гимнастами. При этом более высокую трудность можно засчитать как более низкую.
2. Если группы выполнили акробатику одинаковой трудности
  a. Деление 3 и 3
    i. Как правило, применяется трудность группы, выполнившей более высокую трудность.
    ii. Даже при разных элементах сочетания, трудность которых повышается при исполнении шестью и более гимнастами, повышаются в ранге.
    ※ Ниже приводятся элементы, трудность которых повышается при исполнении шестью гимнастами.
  b. Деление 4 и 2 либо 5 и 1
    i. Как правило, применяется трудность группы, выполнившей более высокую трудность.
    ii. Даже при разных элементах сочетания, трудность которых повышается при исполнении шестью и более гимнастами, повышаются в ранге.
    iii. Если меньшая группа выполняет пересекающийся элемент либо парный элемент или пирамиду, он засчитывается как трудность, и применяется трудность группы с более высокой трудностью.
3. Если группы выполнили акробатику одинаковой трудности
  1. Применяется трудность, выполненная тремя и более гимнастами.
  2. Если входящий в серию пересекающийся элемент либо парный элемент или пирамида имеет наивысшую трудность в серии, эта трудность применяется независимо от числа гимнастов.
  3. Если даже после пересчёта более высоких трудностей в более низкие все трудности выполнены менее чем тремя гимнастами, трудность не засчитывается.`,
              hi: `[क्रॉसिंग तत्व]
क्रॉसिंग तत्वों की कठिनाई इस प्रकार है।

1. बिना उपकरण के तत्वों के ऊपर से टम्बलिंग द्वारा कूदने पर टम्बलिंग तत्व की कठिनाई ली जाती है।
2. टम्बलिंग का क्रॉसिंग तत्व दूसरे जिम्नास्ट की टम्बलिंग के बीच में ऊपर से पार होना चाहिए। न्यूनतम शर्त यह है कि टम्बलिंग के उतरने से ठीक पहले ऊपर से पार किया जाए।
3. टम्बलिंग का क्रॉसिंग तत्व टम्बलिंग के बीच में ऊपर से पार होना चाहिए।
4. उतरने के बाद ऊपर से पार करने पर उसे (1) के अनुसार माना जाता है।
5. 2 स्तर के क्रॉसिंग तत्वों की कठिनाई (नीचे दी गई तालिका देखें)
6. 3 या अधिक स्तर के क्रॉसिंग तत्व को पूरी तरह B कठिनाई या उससे ऊपर की टम्बलिंग से करने पर वह D कठिनाई होती है। यदि उसमें A कठिनाई शामिल हो, तो यह लागू नहीं होता।

[जोड़ी और पिरामिड तत्व]
जोड़ी और पिरामिड तत्वों की कठिनाई इस प्रकार है।

1. जोड़ी और पिरामिड तत्वों की कठिनाई की तालिका (नीचे दी गई तालिका देखें)
* इसके तुरंत बाद टम्बलिंग की जाए तभी उसे कठिनाई माना जाता है।
* C कठिनाई या उससे ऊपर की टम्बलिंग होने पर उसी टम्बलिंग की कठिनाई ली जाती है।

2. जोड़ी और पिरामिड तत्वों में कठिनाई का अपग्रेड
  a. कंधे पर हैंडस्टैंड के ऊपर से कूदकर पार करने पर छलांग तत्वों की कठिनाई 1 रैंक और साल्टो तत्वों की 2 रैंक बढ़ जाती है।
  b. जोड़ी हैंडस्टैंड में एक हाथ का हैंडस्टैंड हो या सहारा देने वाला जिम्नास्ट सीधी भुजाओं से सहारा दे, तो कठिनाई 1 रैंक बढ़ जाती है।

[श्रृंखला की कठिनाई का निर्धारण]
जब जिम्नास्ट कई समूहों में बँटकर एक के बाद एक टम्बलिंग करें, तो कठिनाई का निर्धारण इस प्रकार होता है।

1. सिद्धांत रूप में, क्रॉसिंग तत्वों तथा जोड़ी और पिरामिड तत्वों को छोड़कर, 3 या अधिक जिम्नास्ट द्वारा की गई कठिनाई ली जाती है। परन्तु ऊँची कठिनाई के तत्व को नीची कठिनाई के रूप में गिना जा सकता है।
2. कई समूहों में बँटकर समान कठिनाई की टम्बलिंग करने पर
  a. 3:3 में बँटने पर
    i. सिद्धांत रूप में, ऊँची कठिनाई करने वाले समूह की कठिनाई ली जाती है।
    ii. भिन्न तत्व होने पर भी, 6 या अधिक जिम्नास्ट के करने से जिन संयोजनों की कठिनाई बढ़ती है, वे अपग्रेड किए जाते हैं।
    * 6 जिम्नास्ट द्वारा किए जाने पर जिन तत्वों की कठिनाई बढ़ती है, वे नीचे दिए गए हैं
  b. 4:2 या 5:1 में बँटने पर
    i. सिद्धांत रूप में, ऊँची कठिनाई करने वाले समूह की कठिनाई ली जाती है।
    ii. भिन्न तत्व होने पर भी, 6 या अधिक जिम्नास्ट के करने से जिन संयोजनों की कठिनाई बढ़ती है, वे अपग्रेड किए जाते हैं।
    iii. कम जिम्नास्ट वाला समूह क्रॉसिंग तत्व या जोड़ी और पिरामिड तत्व करे, तो उसे कठिनाई के रूप में लिया जाता है, और ऊँची कठिनाई वाले समूह की कठिनाई ली जाती है।
3. कई समूहों में बँटकर समान कठिनाई की टम्बलिंग करने पर
  1. 3 या अधिक जिम्नास्ट द्वारा की गई कठिनाई ली जाती है।
  2. श्रृंखला में शामिल क्रॉसिंग तत्व या जोड़ी और पिरामिड तत्व यदि श्रृंखला की सबसे ऊँची कठिनाई हो, तो जिम्नास्ट की संख्या चाहे जो हो, वही कठिनाई ली जाती है।
  3. ऊँची कठिनाई को नीची कठिनाई के रूप में गिनने पर भी यदि सभी कठिनाइयाँ 3 से कम जिम्नास्ट द्वारा की गई हों, तो उसे कठिनाई के रूप में मान्यता नहीं दी जाती।`,
            },
          },
        ],
      },
      {
        title: {
          ja: '個人競技における難度',
          en: 'Difficulty in the Individual Competition',
          zh: '个人比赛中的难度',
          ko: '개인 경기에서의 난도',
          es: 'Dificultad en la competición individual',
          fr: 'Difficultés en compétition individuelle',
          ru: 'Трудность в индивидуальных соревнованиях',
          hi: 'व्यक्तिगत प्रतियोगिता में कठिनाई',
        },
        block: [
          {
            title: {
              ja: '転回系における手具操作と難度',
              en: 'Apparatus Handling and Difficulty in Tumbling',
              zh: '翻腾中的器械操作与难度',
              ko: '공중돌기 계열에서의 수구 조작과 난도',
              es: 'Manejo del aparato y dificultad en el tumbling',
              fr: "Maniement de l'engin et difficulté dans le tumbling",
              ru: 'Работа с предметом и трудность в акробатике',
              hi: 'टम्बलिंग में उपकरण संचालन और कठिनाई',
            },
            element: {
              ja: `演技の中で転回系を実施した場合の難度は、基礎難度表によって価値が決められる。ただし、以下の条件に当てはまる場合は、その難度から１ランクアップされる。

1. 手具の投げ受けの間に転回系を実施した場合は、その転回系の難度から１ランクアップされる。
2. ２回以上の手具操作をともなって、実施した場合。

  a. スティック
    ⅰ. 端または中央部などを持って２回以上回す。
    ⅱ. 左右の手を持ち替えて１回以上回す。

  b. リング
    ⅰ. １つのリングまたは２つのリングを２回以上回す。
    ⅱ. ２つのリングを１回転づつ順番に回す。
    ⅲ. １つのリングを左右の手を持ち替えて１回以上回す。

  c. ロープ
    ⅰ. 片手または両手で、１本、２つ折り、３つ折り、４つ折りなどにして２回転以上回す。
    ⅱ. 左右の手を持ち替えて、１回以上回す。

  d. クラブ
    ⅰ. 頭、または首を持って２回以上回す。
    ⅱ. ２本のクラブを１回転ずつ順番に回す。
    ⅲ. １つのクラブを左右の手を持ち替えて、１回以上回す。

  e. その他の手具操作
    ⅰ. 転回系を実施している間に手具を床に打ちつけてとる。
    ⅱ. 転回系を実施している間に手具を転がして、着地と同時にとる。`,
              en: `The difficulty of tumbling performed in a routine is determined by the table of basic difficulties. However, it rises one rank in the following cases.

1. Tumbling performed while the apparatus is in the air rises one rank from the difficulty of that tumbling.
2. Tumbling performed with two or more apparatus handlings.

  a. Stick
    i. Rotating the stick two or more times, holding it at the end or in the middle.
    ii. Rotating the stick one or more times while passing it between the hands.

  b. Ring
    i. Spinning one ring or both rings two or more times.
    ii. Spinning the two rings one rotation each, one after the other.
    iii. Spinning one ring one or more times while passing it between the hands.

  c. Rope
    i. Turning the rope two or more times with one or both hands, open, folded in two, three or four, and so on.
    ii. Turning the rope one or more times while passing it between the hands.

  d. Club
    i. Rotating the club two or more times, holding it by the head or the neck.
    ii. Rotating the two clubs one rotation each, one after the other.
    iii. Rotating one club one or more times while passing it between the hands.

  e. Other apparatus handling
    i. Bouncing the apparatus on the floor and catching it during tumbling.
    ii. Rolling the apparatus during tumbling and catching it on landing.`,
              zh: `在成套动作中完成翻腾时，其难度依据基础难度表确定价值。但符合以下条件时，在该难度的基础上提高 1 个等级。

1. 在器械抛接之间完成翻腾时，在该翻腾的难度基础上提高 1 个等级。
2. 伴随 2 次以上的器械操作完成时。

  a. 短棒
    ⅰ. 握住端部或中部等，旋转 2 次以上。
    ⅱ. 左右手交换，旋转 1 次以上。

  b. 环
    ⅰ. 将 1 个环或 2 个环旋转 2 次以上。
    ⅱ. 将 2 个环各旋转 1 周，依次进行。
    ⅲ. 将 1 个环左右手交换，旋转 1 次以上。

  c. 绳
    ⅰ. 用单手或双手，将绳以单根、对折、三折、四折等形式旋转 2 周以上。
    ⅱ. 左右手交换，旋转 1 次以上。

  d. 棍棒
    ⅰ. 握住棒头或棒颈，旋转 2 次以上。
    ⅱ. 将 2 根棍棒各旋转 1 周，依次进行。
    ⅲ. 将 1 根棍棒左右手交换，旋转 1 次以上。

  e. 其他器械操作
    ⅰ. 在完成翻腾的过程中，将器械击打地面后接住。
    ⅱ. 在完成翻腾的过程中，将器械滚动，并在落地的同时接住。`,
              ko: `연기 중에 공중돌기 계열을 실시한 경우의 난도는 기초 난도표에 따라 가치가 정해진다. 다만 다음 조건에 해당하는 경우에는 그 난도에서 1등급 올라간다.

1. 수구를 던지고 받는 사이에 공중돌기 계열을 실시한 경우에는 그 공중돌기 계열의 난도에서 1등급 올라간다.
2. 2회 이상의 수구 조작을 동반하여 실시한 경우.

  a. 스틱
    ⅰ. 끝 또는 중앙부 등을 잡고 2회 이상 돌린다.
    ⅱ. 좌우의 손을 바꾸어 잡고 1회 이상 돌린다.

  b. 링
    ⅰ. 1개의 링 또는 2개의 링을 2회 이상 돌린다.
    ⅱ. 2개의 링을 1회전씩 차례로 돌린다.
    ⅲ. 1개의 링을 좌우의 손을 바꾸어 잡고 1회 이상 돌린다.

  c. 줄
    ⅰ. 한 손 또는 양손으로 1줄, 2겹, 3겹, 4겹 등으로 하여 2회전 이상 돌린다.
    ⅱ. 좌우의 손을 바꾸어 잡고 1회 이상 돌린다.

  d. 곤봉
    ⅰ. 머리 또는 목을 잡고 2회 이상 돌린다.
    ⅱ. 2개의 곤봉을 1회전씩 차례로 돌린다.
    ⅲ. 1개의 곤봉을 좌우의 손을 바꾸어 잡고 1회 이상 돌린다.

  e. 그 밖의 수구 조작
    ⅰ. 공중돌기 계열을 실시하는 동안에 수구를 바닥에 쳐서 받는다.
    ⅱ. 공중돌기 계열을 실시하는 동안에 수구를 굴려서 착지와 동시에 받는다.`,
              es: `La dificultad de los elementos de tumbling realizados en el ejercicio se valora según la tabla de dificultades básicas. No obstante, cuando se cumplen las condiciones siguientes, esa dificultad sube 1 rango.

1. Cuando el elemento de tumbling se realiza mientras el aparato está en el aire, entre el lanzamiento y la recogida, la dificultad de ese elemento de tumbling sube 1 rango.
2. Cuando se realiza con dos o más manejos del aparato.

  a. Palo
    ⅰ. Hacerlo girar dos o más veces sujetándolo por un extremo, por el centro, etc.
    ⅱ. Hacerlo girar una o más veces cambiándolo de una mano a la otra.

  b. Aro
    ⅰ. Hacer girar un aro o los dos aros dos o más veces.
    ⅱ. Hacer girar los dos aros una vuelta cada uno, uno tras otro.
    ⅲ. Hacer girar un aro una o más veces cambiándolo de una mano a la otra.

  c. Cuerda
    ⅰ. Hacerla girar dos o más vueltas con una mano o con las dos, extendida, doblada en dos, en tres, en cuatro, etc.
    ⅱ. Hacerla girar una o más veces cambiándola de una mano a la otra.

  d. Mazas
    ⅰ. Hacer girar la maza dos o más veces sujetándola por la cabeza o por el cuello.
    ⅱ. Hacer girar las dos mazas una vuelta cada una, una tras otra.
    ⅲ. Hacer girar una maza una o más veces cambiándola de una mano a la otra.

  e. Otros manejos del aparato
    ⅰ. Golpear el aparato contra el suelo y recogerlo mientras se realiza el elemento de tumbling.
    ⅱ. Hacer rodar el aparato mientras se realiza el elemento de tumbling y recogerlo al llegar a la recepción.`,
              fr: `La difficulté d'un tumbling exécuté dans un exercice est déterminée par le tableau des difficultés de base. Elle monte toutefois d'un rang dans les cas suivants.

1. Un tumbling exécuté pendant que l'engin est en l'air monte d'un rang par rapport à la difficulté de ce tumbling.
2. Un tumbling exécuté avec au moins deux maniements de l'engin.

  a. Bâton
    i. Faire tourner le bâton au moins deux fois, en le tenant par une extrémité ou par le milieu.
    ii. Faire tourner le bâton au moins une fois en le passant d'une main à l'autre.

  b. Anneau
    i. Faire tourner un anneau ou les deux anneaux au moins deux fois.
    ii. Faire tourner les deux anneaux d'un tour chacun, l'un après l'autre.
    iii. Faire tourner un anneau au moins une fois en le passant d'une main à l'autre.

  c. Corde
    i. Faire tourner la corde au moins deux tours, d'une main ou des deux mains, déployée, pliée en deux, en trois ou en quatre, etc.
    ii. Faire tourner la corde au moins une fois en la passant d'une main à l'autre.

  d. Massues
    i. Faire tourner la massue au moins deux fois, en la tenant par la tête ou par le col.
    ii. Faire tourner les deux massues d'un tour chacune, l'une après l'autre.
    iii. Faire tourner une massue au moins une fois en la passant d'une main à l'autre.

  e. Autres maniements
    i. Faire rebondir l'engin au sol et le reprendre pendant le tumbling.
    ii. Faire rouler l'engin pendant le tumbling et le reprendre à la réception.`,
              ru: `Ценность акробатики, выполненной в упражнении, определяется по таблице базовых трудностей. Однако в следующих случаях трудность повышается на один ранг.

1. Акробатика, выполненная, пока предмет находится в полёте после броска, повышается на один ранг от трудности этой акробатики.
2. Акробатика, выполненная с двумя и более приёмами работы с предметом.

  a. Палочки
    i. Два и более оборота, держа палочку за конец или за середину.
    ii. Один и более оборот с перекладыванием из руки в руку.

  b. Кольцо
    i. Два и более вращения одного кольца или двух колец.
    ii. Вращение двух колец по одному обороту поочерёдно.
    iii. Одно и более вращение одного кольца с перекладыванием из руки в руку.

  c. Скакалка
    i. Два и более оборота одной или двумя руками — скакалкой целиком, вдвое, втрое, вчетверо сложенной и так далее.
    ii. Один и более оборот с перекладыванием из руки в руку.

  d. Булавы
    i. Два и более оборота, держа булаву за головку или за шейку.
    ii. Вращение двух булав по одному обороту поочерёдно.
    iii. Один и более оборот одной булавы с перекладыванием из руки в руку.

  e. Прочие приёмы работы с предметом
    i. Во время акробатики ударить предметом об пол и поймать его.
    ii. Во время акробатики прокатить предмет и поймать его одновременно с приземлением.`,
              hi: `प्रदर्शन के दौरान टम्बलिंग करने पर उसकी कठिनाई का मूल्य आधार कठिनाई तालिका से तय होता है। परन्तु नीचे दी गई शर्तों के लागू होने पर उस कठिनाई से 1 रैंक ऊपर कर दिया जाता है।

1. उपकरण के फेंकने और पकड़ने के बीच टम्बलिंग करने पर उस टम्बलिंग की कठिनाई से 1 रैंक ऊपर कर दिया जाता है।
2. 2 या अधिक बार उपकरण संचालन के साथ किए जाने पर।

  a. स्टिक
    i. सिरे या बीच के हिस्से आदि को पकड़कर 2 या अधिक बार घुमाना।
    ii. दाएँ-बाएँ हाथ बदलते हुए 1 या अधिक बार घुमाना।

  b. रिंग
    i. एक रिंग या दो रिंग को 2 या अधिक बार घुमाना।
    ii. दो रिंग को एक-एक चक्कर बारी-बारी से घुमाना।
    iii. एक रिंग को दाएँ-बाएँ हाथ बदलते हुए 1 या अधिक बार घुमाना।

  c. रस्सी
    i. एक हाथ या दोनों हाथों से, खुली, दोहरी, तिहरी, चौहरी आदि करके 2 या अधिक चक्कर घुमाना।
    ii. दाएँ-बाएँ हाथ बदलते हुए 1 या अधिक बार घुमाना।

  d. क्लब
    i. सिर या गर्दन को पकड़कर 2 या अधिक बार घुमाना।
    ii. दो क्लब को एक-एक चक्कर बारी-बारी से घुमाना।
    iii. एक क्लब को दाएँ-बाएँ हाथ बदलते हुए 1 या अधिक बार घुमाना।

  e. अन्य उपकरण संचालन
    i. टम्बलिंग करते समय उपकरण को फ़र्श पर मारकर पकड़ना।
    ii. टम्बलिंग करते समय उपकरण को लुढ़काकर उतरने के साथ ही पकड़ना।`,
            },
          },
          {
            title: {
              ja: '投げ受けの難度',
              en: 'Throw-and-Catch Difficulty',
              zh: '抛接的难度',
              ko: '던지고 받기의 난도',
              es: 'Dificultad del lanzamiento y la recogida',
              fr: 'Difficulté des lancers-rattrapés',
              ru: 'Трудность броска и ловли',
              hi: 'फेंकने और पकड़ने की कठिनाई',
            },
            element: {
              ja: `演技の中で投げ受けを実施した場合、その間に実施した徒手系（※）または転回系の数によって以下のように難度が決められる。ただし、転回系が含まれていた場合は第69条の１の条件と比較して、高い方の難度を採用する。
※ここでの徒手系は、縦軸または横軸で、360°回転したもののみを１つとして数える。`,
              en: `When a throw and catch is performed in a routine, the difficulty is determined as follows by the number of free-hand elements (*) or tumbling elements performed during the throw. If tumbling is included, the difficulty is compared with the condition in Article 69 (1), and the higher one applies.
* Here, a free-hand element counts as one only when it is a 360° rotation around the vertical or horizontal axis.`,
              zh: `在成套动作中完成抛接时，根据其间完成的徒手动作（※）或翻腾的数量，按以下规定确定难度。但含有翻腾时，与第 69 条第 1 款的条件相比较，采用较高的难度。
※此处的徒手动作，仅将绕纵轴或横轴旋转 360° 的动作计为 1 个。`,
              ko: `연기 중에 던지고 받기를 실시한 경우, 그 사이에 실시한 신체 계열(※) 또는 공중돌기 계열의 수에 따라 다음과 같이 난도가 정해진다. 다만 공중돌기 계열이 포함되어 있는 경우에는 제69조 1의 조건과 비교하여 높은 쪽의 난도를 적용한다.
※여기에서의 신체 계열은 세로축 또는 가로축으로 360° 회전한 것만을 1개로 센다.`,
              es: `Cuando en el ejercicio se realiza un lanzamiento y recogida, la dificultad se determina como se indica a continuación, según el número de elementos de manos libres (*) o de elementos de tumbling realizados mientras el aparato está en el aire. No obstante, si se incluye un elemento de tumbling, se compara con la condición del apartado 1 del artículo 69 y se aplica la dificultad más alta de las dos.
* Aquí los elementos de manos libres solo se cuentan como uno cuando giran 360° sobre el eje longitudinal o sobre el eje transversal.`,
              fr: `Lorsqu'un lancer-rattrapé est exécuté dans un exercice, la difficulté est déterminée comme suit, d'après le nombre d'éléments corporels (*) ou d'éléments de tumbling exécutés pendant le lancer. Si un tumbling y figure, la difficulté est comparée à la condition du point 1 de l'article 69, et la plus élevée s'applique.
* Ici, un élément corporel n'est compté que s'il s'agit d'une rotation de 360° autour de l'axe vertical ou horizontal.`,
              ru: `Если в упражнении выполнены бросок и ловля, трудность определяется числом элементов без предмета (※) или акробатических элементов, выполненных за это время, как указано ниже. Если среди них есть акробатика, трудность сравнивается с условием пункта 1 статьи 69 и применяется более высокая.
※ Элементом без предмета здесь считается только поворот на 360° вокруг продольной или поперечной оси — он считается за один.`,
              hi: `प्रदर्शन के दौरान फेंकना और पकड़ना करने पर, उसके बीच किए गए बिना उपकरण के तत्वों (*) या टम्बलिंग तत्वों की संख्या के अनुसार कठिनाई नीचे दिए अनुसार तय होती है। परन्तु टम्बलिंग शामिल होने पर अनुच्छेद 69 के 1 की शर्त से तुलना करके, जो कठिनाई ऊँची हो वह ली जाती है।
* यहाँ बिना उपकरण के तत्व के रूप में केवल उन्हें 1 गिना जाता है जो ऊर्ध्व अक्ष या क्षैतिज अक्ष पर 360° घूमे हों।`,
            },
            image: [
              {
                src: '/images/rules/tossdifficulties.png',
                alt: {
                  ja: '投げ受けの難度表',
                  en: 'Table of throw-and-catch difficulties',
                  zh: '抛接难度表',
                  ko: '던지고 받기의 난도표',
                  es: 'Tabla de dificultades del lanzamiento y la recogida',
                  fr: 'Tableau des difficultés des lancers-rattrapés',
                  ru: 'Таблица трудностей броска и ловли',
                  hi: 'फेंकने और पकड़ने की कठिनाइयों की तालिका',
                },
              },
            ],
          },
          {
            title: {
              ja: '手具操作をともなった徒手系の難度',
              en: 'Difficulty of Free-Hand Elements with Apparatus Handling',
              zh: '伴随器械操作的徒手难度',
              ko: '수구 조작을 동반한 신체 난도',
              es: 'Dificultad de los elementos de manos libres con manejo del aparato',
              fr: "Difficulté des éléments corporels avec maniement de l'engin",
              ru: 'Трудность элементов без предмета, выполняемых с работой предметом',
              hi: 'उपकरण संचालन के साथ बिना उपकरण की कठिनाई',
            },
            element: {
              ja: '演技の中で手具操作をともなって徒手系難度を実施した場合は、徒手系難度を採用する。',
              en: 'When a free-hand difficulty is performed with apparatus handling in a routine, the free-hand difficulty applies.',
              zh: '在成套动作中伴随器械操作完成徒手难度时，采用徒手难度。',
              ko: '연기 중에 수구 조작을 동반하여 신체 난도를 실시한 경우에는 신체 난도를 적용한다.',
              es: 'Cuando en el ejercicio se realiza una dificultad de manos libres con manejo del aparato, se aplica la dificultad de manos libres.',
              fr: "Lorsqu'une difficulté corporelle est exécutée avec maniement de l'engin dans un exercice, c'est la difficulté corporelle qui s'applique.",
              ru: 'Если в упражнении трудность без предмета выполнена с работой предметом, применяется трудность без предмета.',
              hi: 'प्रदर्शन के दौरान उपकरण संचालन के साथ बिना उपकरण की कठिनाई करने पर, बिना उपकरण की कठिनाई ली जाती है।',
            },
          },
        ],
      },
    ],
  },
]
