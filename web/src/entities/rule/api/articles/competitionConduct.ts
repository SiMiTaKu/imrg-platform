import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第1章 競技規則のうち、競技会・表彰・競技者・監督者・一般的な競技規則・手具。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const COMPETITION_CONDUCT_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '競技会',
      en: 'Competitions',
      zh: '比赛会',
      ko: '경기회',
      es: 'Competiciones',
      fr: 'Compétitions',
      ru: 'Соревнования',
      hi: 'प्रतियोगिताएँ',
    },
    section: [
      {
        title: {
          ja: '大会要項',
          en: 'Competition Guidelines',
          zh: '比赛规程',
          ko: '대회 요강',
          es: 'Bases de la competición',
          fr: 'Règlement particulier de la compétition',
          ru: 'Положение о соревнованиях',
          hi: 'प्रतियोगिता दिशानिर्देश',
        },
        content: {
          ja: '競技会は、その年度の定める大会要項により実施する。',
          en: 'Each competition is held according to the competition guidelines set for that year.',
          zh: '比赛会按照该年度制定的比赛规程举行。',
          ko: '경기회는 해당 연도에 정한 대회 요강에 따라 실시한다.',
          es: 'Cada competición se celebra conforme a las bases de la competición establecidas para ese año.',
          fr: "Chaque compétition se déroule selon le règlement particulier arrêté pour l'année en cours.",
          ru: 'Соревнования проводятся согласно положению, утверждённому на соответствующий год.',
          hi: 'प्रतियोगिता उस वर्ष के लिए निर्धारित प्रतियोगिता दिशानिर्देशों के अनुसार आयोजित की जाती है।',
        },
      },
      {
        title: {
          ja: '競技会の日程と試技順の抽選',
          en: 'Competition Schedule and Draw for the Order of Performance',
          zh: '比赛会的日程与试做顺序的抽签',
          ko: '경기회의 일정과 연기 순서 추첨',
          es: 'Calendario de la competición y sorteo del orden de actuación',
          fr: "Calendrier de la compétition et tirage au sort de l'ordre de passage",
          ru: 'Расписание соревнований и жеребьёвка порядка выступлений',
          hi: 'प्रतियोगिता का कार्यक्रम और प्रदर्शन क्रम का ड्रॉ',
        },
        content: {
          ja: '男子新体操委員会は、競技会の日程細案作成および公平な抽選による試技順の編成と審判団の編成を行う。',
          en: "The Men's Rhythmic Gymnastics Committee draws up the detailed competition schedule, sets the order of performance by a fair draw, and forms the judging panel.",
          zh: '男子艺术体操委员会负责编制比赛会的详细日程方案，并通过公平抽签编排试做顺序和组成裁判团。',
          ko: '남자 리듬체조 위원회는 경기회의 세부 일정 작성 및 공정한 추첨에 의한 연기 순서 편성과 심판진 편성을 실시한다.',
          es: 'El Comité de Gimnasia Rítmica Masculina elabora el calendario detallado de la competición, establece el orden de actuación mediante un sorteo imparcial y compone el cuerpo de jueces.',
          fr: "La Commission de gymnastique rythmique masculine établit le calendrier détaillé de la compétition, fixe l'ordre de passage par un tirage au sort équitable et compose le corps de juges.",
          ru: 'Комитет мужской художественной гимнастики составляет подробное расписание соревнований, определяет порядок выступлений честной жеребьёвкой и формирует судейскую коллегию.',
          hi: 'पुरुष लयबद्ध जिम्नास्टिक समिति, प्रतियोगिता के विस्तृत कार्यक्रम का मसौदा बनाती है, निष्पक्ष ड्रॉ द्वारा प्रदर्शन क्रम तय करती है और निर्णायक मंडल का गठन करती है।',
        },
      },
      {
        title: {
          ja: '競技方法の種類',
          en: 'Competition Formats',
          zh: '比赛方式的种类',
          ko: '경기 방법의 종류',
          es: 'Formatos de competición',
          fr: 'Formules de compétition',
          ru: 'Форматы соревнований',
          hi: 'प्रतियोगिता के प्रारूप',
        },
        content: {
          ja: `競技会は、団体演技、個人演技の２部に分け、以下の競技方法のいずれかで行う

1. 団体演技

  a. 競技 I　（例　全日本選手権大会等）

    【競技種目】
      Ａ　予選競技（自由演技）　Ｂ　決勝競技（自由演技）

    【順位決定方法】
      決勝には得点上位８チームが出場できる。
      予選競技の１／２の得点と決勝競技の得点合計（30点満点）で順位を決定する。（第28条参照）

  b. 競技 Ⅱ

    【競技種目と順序】
      Ａ　予選競技（規定演技）　Ｂ　決勝競技（自由演技）

    【順位決定方法】
      決勝には得点上位８チームが出場できる。
      予選競技の得点（実施10点）と決勝競技の得点（20点満点）の合計（30点満点）で順位を決定する。（第28条参照）
      規定・自由の種目別順位は、各種目の得点で決定する。

  c. 競技 Ⅲ　（例　団体選手権、全日本ジュニア、インターハイ、全国高校選抜等）

    【競技種目と順序】
      Ａ　決勝競技（自由演技）

    【順位決定方法】
      決勝競技の得点（20点満点）で順位を決定する。（第28条参照）

2. 個人競技

  a. 競技 I　（例　全日本選手権大会　インカレ等）

    【競技種目と順序】
      Ａ　個人総合（自由演技）　Ｂ　種目別決勝（自由演技）
      a　スティック　b　リング　c　ロープ　d　クラブ

    【順位決定方法】
      個人総合は４種目の合計（80点満点）で順位を決定する。
      種目別決勝は各種濁の上位８名が出場でき、決勝得点（20点満点）で順位を決定する。

  b. 競技 Ⅱ　（例　全日本ジュニア、全国高校選抜大会等）

    【競技種目と順序】
      Ａ　個人総合（自由演技）　Ｂ　種目別（自由演技）
      a　スティック　b　リング　c　ロープ　d　クラブ
      競技種目の順番は大会要項に定める。

    【順位決定方法】
      個人総合は４種目の合計（80点満点）で順位を決定する。
      種目別は、各種目の得点（20点満点）で順位を決定する。

  c. 競技Ⅲ　（例　全日本ユース等）

    【競技種目と順序】
      Ａ　個人総合（自由演技）
      a　スティック　b　リング　c　ロープ　d　クラブ

    【順位決定方法】
      指定した２種目の得点上位者が、決勝競技に出場し、残りの２種目を実施する。
      各種目別（20点満点）の得点合計で順位を決定する。
      種目の指定と決勝競技の人数は大会要項に定める。

3. 団体個人総合競技

  a. 競技Ⅰ　（例　国民体育大会等）

    【競技種目と順序】
      Ａ　個人競技
      a　スティック　b　リング　c　ロープ　d　クラブ
      Ｂ　団体競技
      団体競技に出場する競技者のうち４名が、a〜bの種目を各一人ずつ実施する。

  b. 順位決定方法
    個人４種目の得点合計の１／４（20点満点）と団体競技（20点満点）の得点合計で順位を決定する。`,
          en: `Competitions are divided into two parts, group routines and individual routines, and are held in one of the following formats.

1. Group competition

  a. Competition I (e.g. All Japan Championships)

    [Events]
      A. Qualification (free routine)  B. Final (free routine)

    [Ranking]
      The top 8 teams by score qualify for the final.
      Teams are ranked by the sum of half the qualification score and the final score (maximum 30 points). (See Article 28.)

  b. Competition II

    [Events and order]
      A. Qualification (compulsory routine)  B. Final (free routine)

    [Ranking]
      The top 8 teams by score qualify for the final.
      Teams are ranked by the sum (maximum 30 points) of the qualification score (execution, 10 points) and the final score (maximum 20 points). (See Article 28.)
      Rankings for the compulsory and free routines are decided by the score of each event.

  c. Competition III (e.g. All Japan Group Championships, Inter-High School Championships, National High School Selection Championships)

    [Events and order]
      A. Final (free routine)

    [Ranking]
      Teams are ranked by the final score (maximum 20 points). (See Article 28.)

2. Individual competition

  a. Competition I (e.g. All Japan Championships, Intercollegiate Championships)

    [Events and order]
      A. Individual all-around (free routines)  B. Apparatus finals (free routines)
      a. Stick  b. Ring  c. Rope  d. Club

    [Ranking]
      The all-around is ranked by the total of the four apparatus (maximum 80 points).
      The top 8 gymnasts on each apparatus qualify for the apparatus finals, which are ranked by the final score (maximum 20 points).

  b. Competition II (e.g. All Japan Junior Championships, National High School Selection Championships)

    [Events and order]
      A. Individual all-around (free routines)  B. Apparatus rankings (free routines)
      a. Stick  b. Ring  c. Rope  d. Club
      The order of the apparatus is set in the competition guidelines.

    [Ranking]
      The all-around is ranked by the total of the four apparatus (maximum 80 points).
      Each apparatus is ranked by its score (maximum 20 points).

  c. Competition III (e.g. All Japan Youth Championships)

    [Events and order]
      A. Individual all-around (free routines)
      a. Stick  b. Ring  c. Rope  d. Club

    [Ranking]
      The top gymnasts on two designated apparatus advance to the final and perform on the remaining two apparatus.
      Gymnasts are ranked by the total of their apparatus scores (maximum 20 points each).
      The designated apparatus and the number of finalists are set in the competition guidelines.

3. Combined group and individual competition

  a. Competition I (e.g. National Sports Festival)

    [Events and order]
      A. Individual competition
      a. Stick  b. Ring  c. Rope  d. Club
      B. Group competition
      Four of the gymnasts entered in the group competition each perform one of the apparatus a to d.

  b. Ranking
    Teams are ranked by the sum of one quarter of the total of the four individual apparatus (maximum 20 points) and the group score (maximum 20 points).`,
          zh: `比赛会分为团体成套、个人成套两部分，按以下比赛方式之一进行

1. 团体成套

  a. 比赛 I　（例　全日本锦标赛等）

    【比赛项目】
      Ａ　预赛（自选成套）　Ｂ　决赛（自选成套）

    【名次确定方法】
      得分列前８名的队可以参加决赛。
      按预赛得分的１／２与决赛得分的合计（满分30分）确定名次。（参照第28条）

  b. 比赛 Ⅱ

    【比赛项目与顺序】
      Ａ　预赛（规定成套）　Ｂ　决赛（自选成套）

    【名次确定方法】
      得分列前８名的队可以参加决赛。
      按预赛得分（完成10分）与决赛得分（满分20分）的合计（满分30分）确定名次。（参照第28条）
      规定、自选的单项名次，按各项目的得分确定。

  c. 比赛 Ⅲ　（例　团体锦标赛、全日本少年赛、全国高中综合体育大会、全国高中选拔赛等）

    【比赛项目与顺序】
      Ａ　决赛（自选成套）

    【名次确定方法】
      按决赛得分（满分20分）确定名次。（参照第28条）

2. 个人比赛

  a. 比赛 I　（例　全日本锦标赛　全国大学生锦标赛等）

    【比赛项目与顺序】
      Ａ　个人全能（自选成套）　Ｂ　单项决赛（自选成套）
      a　短棒　b　环　c　绳　d　棍棒

    【名次确定方法】
      个人全能按４个项目的合计（满分80分）确定名次。
      单项决赛由各项目列前８名的运动员参加，按决赛得分（满分20分）确定名次。

  b. 比赛 Ⅱ　（例　全日本少年赛、全国高中选拔赛等）

    【比赛项目与顺序】
      Ａ　个人全能（自选成套）　Ｂ　单项（自选成套）
      a　短棒　b　环　c　绳　d　棍棒
      比赛项目的顺序在比赛规程中规定。

    【名次确定方法】
      个人全能按４个项目的合计（满分80分）确定名次。
      单项按各项目的得分（满分20分）确定名次。

  c. 比赛Ⅲ　（例　全日本青年赛等）

    【比赛项目与顺序】
      Ａ　个人全能（自选成套）
      a　短棒　b　环　c　绳　d　棍棒

    【名次确定方法】
      在指定的２个项目中得分列前的运动员参加决赛，完成其余的２个项目。
      按各单项（满分20分）的得分合计确定名次。
      项目的指定与决赛人数在比赛规程中规定。

3. 团体个人全能比赛

  a. 比赛Ⅰ　（例　国民体育大会等）

    【比赛项目与顺序】
      Ａ　个人比赛
      a　短棒　b　环　c　绳　d　棍棒
      Ｂ　团体比赛
      参加团体比赛的参赛者中的４名，各一人分别完成 a 至 d 的项目。

  b. 名次确定方法
    按个人４个项目得分合计的１／４（满分20分）与团体比赛（满分20分）的得分合计确定名次。`,
          ko: `경기회는 단체 연기, 개인 연기의 2부로 나누어 다음 경기 방법 중 하나로 실시한다

1. 단체 연기

  a. 경기 I (예 전일본 선수권 대회 등)

    【경기 종목】
      A 예선 경기(자유 연기) B 결승 경기(자유 연기)

    【순위 결정 방법】
      결승에는 득점 상위 8개 팀이 출전할 수 있다.
      예선 경기의 1/2 득점과 결승 경기의 득점 합계(30점 만점)로 순위를 결정한다. (제28조 참조)

  b. 경기 II

    【경기 종목과 순서】
      A 예선 경기(규정 연기) B 결승 경기(자유 연기)

    【순위 결정 방법】
      결승에는 득점 상위 8개 팀이 출전할 수 있다.
      예선 경기의 득점(실시 10점)과 결승 경기의 득점(20점 만점)의 합계(30점 만점)로 순위를 결정한다. (제28조 참조)
      규정·자유의 종목별 순위는 각 종목의 득점으로 결정한다.

  c. 경기 III (예 단체 선수권, 전일본 주니어, 인터하이, 전국 고교 선발 등)

    【경기 종목과 순서】
      A 결승 경기(자유 연기)

    【순위 결정 방법】
      결승 경기의 득점(20점 만점)으로 순위를 결정한다. (제28조 참조)

2. 개인 경기

  a. 경기 I (예 전일본 선수권 대회, 인카레 등)

    【경기 종목과 순서】
      A 개인 종합(자유 연기) B 종목별 결승(자유 연기)
      a 스틱 b 링 c 줄 d 곤봉

    【순위 결정 방법】
      개인 종합은 4종목의 합계(80점 만점)로 순위를 결정한다.
      종목별 결승은 각 종목의 상위 8명이 출전할 수 있으며, 결승 득점(20점 만점)으로 순위를 결정한다.

  b. 경기 II (예 전일본 주니어, 전국 고교 선발 대회 등)

    【경기 종목과 순서】
      A 개인 종합(자유 연기) B 종목별(자유 연기)
      a 스틱 b 링 c 줄 d 곤봉
      경기 종목의 순번은 대회 요강에 정한다.

    【순위 결정 방법】
      개인 종합은 4종목의 합계(80점 만점)로 순위를 결정한다.
      종목별은 각 종목의 득점(20점 만점)으로 순위를 결정한다.

  c. 경기 III (예 전일본 유스 등)

    【경기 종목과 순서】
      A 개인 종합(자유 연기)
      a 스틱 b 링 c 줄 d 곤봉

    【순위 결정 방법】
      지정한 2종목의 득점 상위자가 결승 경기에 출전하여 나머지 2종목을 실시한다.
      각 종목별(20점 만점)의 득점 합계로 순위를 결정한다.
      종목의 지정과 결승 경기의 인원은 대회 요강에 정한다.

3. 단체 개인 종합 경기

  a. 경기 I (예 국민체육대회 등)

    【경기 종목과 순서】
      A 개인 경기
      a 스틱 b 링 c 줄 d 곤봉
      B 단체 경기
      단체 경기에 출전하는 경기자 중 4명이 a~b의 종목을 각각 한 명씩 실시한다.

  b. 순위 결정 방법
    개인 4종목의 득점 합계의 1/4(20점 만점)과 단체 경기(20점 만점)의 득점 합계로 순위를 결정한다.`,
          es: `Las competiciones se dividen en dos partes, ejercicios de conjunto y ejercicios individuales, y se celebran con uno de los siguientes formatos

1. Ejercicios de conjunto

  a. Competición I (por ejemplo, el Campeonato de Japón)

    [Pruebas]
      A. Clasificatoria (ejercicio libre)  B. Final (ejercicio libre)

    [Forma de establecer la clasificación]
      Acceden a la final los 8 equipos con mejor puntuación.
      La clasificación se establece por la suma de la mitad de la puntuación de la clasificatoria y de la puntuación de la final (máximo 30 puntos). (Véase el artículo 28.)

  b. Competición II

    [Pruebas y orden]
      A. Clasificatoria (ejercicio obligatorio)  B. Final (ejercicio libre)

    [Forma de establecer la clasificación]
      Acceden a la final los 8 equipos con mejor puntuación.
      La clasificación se establece por la suma (máximo 30 puntos) de la puntuación de la clasificatoria (ejecución, 10 puntos) y de la puntuación de la final (máximo 20 puntos). (Véase el artículo 28.)
      La clasificación por pruebas, obligatorio y libre, se establece por la puntuación de cada prueba.

  c. Competición III (por ejemplo, el Campeonato de Conjuntos, el Campeonato de Japón Júnior, el Inter-High School o el Campeonato Nacional de Selección de Institutos)

    [Pruebas y orden]
      A. Final (ejercicio libre)

    [Forma de establecer la clasificación]
      La clasificación se establece por la puntuación de la final (máximo 20 puntos). (Véase el artículo 28.)

2. Competición individual

  a. Competición I (por ejemplo, el Campeonato de Japón o el Campeonato Universitario)

    [Pruebas y orden]
      A. Concurso completo individual (ejercicios libres)  B. Finales por aparatos (ejercicios libres)
      a. palo  b. aro  c. cuerda  d. mazas

    [Forma de establecer la clasificación]
      El concurso completo se clasifica por la suma de los cuatro aparatos (máximo 80 puntos).
      A las finales por aparatos acceden los 8 gimnastas con mejor puntuación en cada aparato y la clasificación se establece por la puntuación de la final (máximo 20 puntos).

  b. Competición II (por ejemplo, el Campeonato de Japón Júnior o el Campeonato Nacional de Selección de Institutos)

    [Pruebas y orden]
      A. Concurso completo individual (ejercicios libres)  B. Clasificación por aparatos (ejercicios libres)
      a. palo  b. aro  c. cuerda  d. mazas
      El orden de las pruebas se establece en las bases de la competición.

    [Forma de establecer la clasificación]
      El concurso completo se clasifica por la suma de los cuatro aparatos (máximo 80 puntos).
      La clasificación por aparatos se establece por la puntuación de cada aparato (máximo 20 puntos).

  c. Competición III (por ejemplo, el Campeonato de Japón Juvenil)

    [Pruebas y orden]
      A. Concurso completo individual (ejercicios libres)
      a. palo  b. aro  c. cuerda  d. mazas

    [Forma de establecer la clasificación]
      Los gimnastas con mejor puntuación en los dos aparatos designados pasan a la final y realizan los dos aparatos restantes.
      La clasificación se establece por la suma de las puntuaciones de cada aparato (máximo 20 puntos cada uno).
      Los aparatos designados y el número de finalistas se establecen en las bases de la competición.

3. Competición combinada por conjuntos e individual

  a. Competición I (por ejemplo, los Juegos Deportivos Nacionales de Japón)

    [Pruebas y orden]
      A. Competición individual
      a. palo  b. aro  c. cuerda  d. mazas
      B. Competición por conjuntos
      Cuatro de los gimnastas inscritos en la competición por conjuntos realizan, uno cada uno, las pruebas de la a a la d.

  b. Forma de establecer la clasificación
    La clasificación se establece por la suma de un cuarto del total de los cuatro aparatos individuales (máximo 20 puntos) y de la puntuación de la competición por conjuntos (máximo 20 puntos).`,
          fr: `Les compétitions se divisent en deux parties, les exercices d'ensemble et les exercices individuels, et se déroulent selon l'une des formules suivantes.

1. Compétition par ensembles

  a. Formule I (ex. Championnats du Japon)

    [Épreuves]
      A. Qualifications (exercice libre)  B. Finale (exercice libre)

    [Classement]
      Les 8 meilleurs ensembles accèdent à la finale.
      Le classement se fait sur la somme de la moitié de la note des qualifications et de la note de la finale (30 points maximum). (Voir l'article 28.)

  b. Formule II

    [Épreuves et ordre]
      A. Qualifications (exercice imposé)  B. Finale (exercice libre)

    [Classement]
      Les 8 meilleurs ensembles accèdent à la finale.
      Le classement se fait sur la somme (30 points maximum) de la note des qualifications (exécution, 10 points) et de la note de la finale (20 points maximum). (Voir l'article 28.)
      Les classements de l'imposé et du libre sont établis d'après la note de chaque épreuve.

  c. Formule III (ex. Championnats du Japon par ensembles, Championnats du Japon juniors, Championnats interlycées, Championnats nationaux de sélection des lycées)

    [Épreuves et ordre]
      A. Finale (exercice libre)

    [Classement]
      Le classement se fait sur la note de la finale (20 points maximum). (Voir l'article 28.)

2. Compétition individuelle

  a. Formule I (ex. Championnats du Japon, Championnats universitaires)

    [Épreuves et ordre]
      A. Concours général individuel (exercices libres)  B. Finales par engin (exercices libres)
      a. Bâton  b. Anneau  c. Corde  d. Massues

    [Classement]
      Le concours général est classé sur le total des quatre engins (80 points maximum).
      Les 8 meilleurs gymnastes à chaque engin accèdent aux finales par engin, classées sur la note de la finale (20 points maximum).

  b. Formule II (ex. Championnats du Japon juniors, Championnats nationaux de sélection des lycées)

    [Épreuves et ordre]
      A. Concours général individuel (exercices libres)  B. Classements par engin (exercices libres)
      a. Bâton  b. Anneau  c. Corde  d. Massues
      L'ordre des engins est fixé par le règlement particulier de la compétition.

    [Classement]
      Le concours général est classé sur le total des quatre engins (80 points maximum).
      Chaque engin est classé sur sa note (20 points maximum).

  c. Formule III (ex. Championnats du Japon des jeunes)

    [Épreuves et ordre]
      A. Concours général individuel (exercices libres)
      a. Bâton  b. Anneau  c. Corde  d. Massues

    [Classement]
      Les meilleurs gymnastes à deux engins désignés accèdent à la finale et présentent les deux engins restants.
      Le classement se fait sur le total des notes par engin (20 points maximum chacune).
      Les engins désignés et le nombre de finalistes sont fixés par le règlement particulier de la compétition.

3. Compétition combinée par ensembles et individuelle

  a. Formule I (ex. Jeux nationaux du Japon)

    [Épreuves et ordre]
      A. Compétition individuelle
      a. Bâton  b. Anneau  c. Corde  d. Massues
      B. Compétition par ensembles
      Quatre des gymnastes engagés dans la compétition par ensembles présentent chacun l'un des engins a à d.

  b. Classement
    Le classement se fait sur la somme du quart du total des quatre engins individuels (20 points maximum) et de la note de l'ensemble (20 points maximum).`,
          ru: `Соревнования делятся на две части — групповые и индивидуальные упражнения — и проводятся в одном из следующих форматов.

1. Групповые соревнования

  a. Формат I (например, чемпионат Японии)

    [Виды программы]
      A. Квалификация (произвольное упражнение)  B. Финал (произвольное упражнение)

    [Определение мест]
      В финал выходят восемь команд с лучшими оценками.
      Места определяются по сумме половины оценки квалификации и оценки финала (максимум 30 баллов). (См. статью 28.)

  b. Формат II

    [Виды программы и порядок]
      A. Квалификация (обязательное упражнение)  B. Финал (произвольное упражнение)

    [Определение мест]
      В финал выходят восемь команд с лучшими оценками.
      Места определяются по сумме оценки квалификации (исполнение, 10 баллов) и оценки финала (максимум 20 баллов) — максимум 30 баллов. (См. статью 28.)
      Места в обязательном и произвольном упражнениях определяются по оценке каждого вида.

  c. Формат III (например, командный чемпионат, первенство Японии среди юниоров, межшкольный чемпионат, всеяпонский отборочный турнир среди старших школ)

    [Виды программы и порядок]
      A. Финал (произвольное упражнение)

    [Определение мест]
      Места определяются по оценке финала (максимум 20 баллов). (См. статью 28.)

2. Индивидуальные соревнования

  a. Формат I (например, чемпионат Японии, студенческий чемпионат)

    [Виды программы и порядок]
      A. Личное многоборье (произвольные упражнения)  B. Финалы в отдельных видах (произвольные упражнения)
      a. Палочки  b. Кольцо  c. Скакалка  d. Булавы

    [Определение мест]
      В многоборье места определяются по сумме четырёх видов (максимум 80 баллов).
      В финал в отдельном виде выходят восемь лучших гимнастов в этом виде; места определяются по оценке финала (максимум 20 баллов).

  b. Формат II (например, первенство Японии среди юниоров, всеяпонский отборочный турнир среди старших школ)

    [Виды программы и порядок]
      A. Личное многоборье (произвольные упражнения)  B. Отдельные виды (произвольные упражнения)
      a. Палочки  b. Кольцо  c. Скакалка  d. Булавы
      Порядок видов определяется положением о соревнованиях.

    [Определение мест]
      В многоборье места определяются по сумме четырёх видов (максимум 80 баллов).
      В отдельных видах места определяются по оценке каждого вида (максимум 20 баллов).

  c. Формат III (например, всеяпонские соревнования среди юношей)

    [Виды программы и порядок]
      A. Личное многоборье (произвольные упражнения)
      a. Палочки  b. Кольцо  c. Скакалка  d. Булавы

    [Определение мест]
      Гимнасты с лучшими оценками в двух назначенных видах выходят в финал и выполняют оставшиеся два вида.
      Места определяются по сумме оценок в отдельных видах (максимум 20 баллов за вид).
      Назначенные виды и число финалистов определяются положением о соревнованиях.

3. Командно-личное многоборье

  a. Формат I (например, Национальный спортивный фестиваль)

    [Виды программы и порядок]
      A. Индивидуальные соревнования
      a. Палочки  b. Кольцо  c. Скакалка  d. Булавы
      B. Групповые соревнования
      Четверо из гимнастов, заявленных на групповые соревнования, выполняют по одному виду из a–d.

  b. Определение мест
    Места определяются по сумме четверти общей оценки четырёх индивидуальных видов (максимум 20 баллов) и оценки групповых соревнований (максимум 20 баллов).`,
          hi: `प्रतियोगिता, समूह प्रदर्शन और व्यक्तिगत प्रदर्शन इन 2 भागों में बाँटी जाती है और निम्नलिखित में से किसी एक प्रारूप में आयोजित की जाती है

1. समूह प्रदर्शन

  a. प्रतियोगिता I (उदाहरण ज़ेन-निहोन सेन्शुकेन ताइकाई आदि)

    [स्पर्धाएँ]
      A. क्वालिफिकेशन प्रतियोगिता (स्वतंत्र प्रदर्शन)  B. फाइनल प्रतियोगिता (स्वतंत्र प्रदर्शन)

    [क्रम निर्धारण की विधि]
      फाइनल में अंकों के आधार पर शीर्ष 8 टीमें भाग ले सकती हैं।
      क्वालिफिकेशन प्रतियोगिता के 1/2 अंक और फाइनल प्रतियोगिता के अंकों के योग (अधिकतम 30 अंक) से क्रम निर्धारित किया जाता है। (अनुच्छेद 28 देखें)

  b. प्रतियोगिता II

    [स्पर्धाएँ और क्रम]
      A. क्वालिफिकेशन प्रतियोगिता (अनिवार्य प्रदर्शन)  B. फाइनल प्रतियोगिता (स्वतंत्र प्रदर्शन)

    [क्रम निर्धारण की विधि]
      फाइनल में अंकों के आधार पर शीर्ष 8 टीमें भाग ले सकती हैं।
      क्वालिफिकेशन प्रतियोगिता के अंक (निष्पादन 10 अंक) और फाइनल प्रतियोगिता के अंक (अधिकतम 20 अंक) के योग (अधिकतम 30 अंक) से क्रम निर्धारित किया जाता है। (अनुच्छेद 28 देखें)
      अनिवार्य और स्वतंत्र प्रदर्शन का स्पर्धावार क्रम, प्रत्येक स्पर्धा के अंकों से निर्धारित किया जाता है।

  c. प्रतियोगिता III (उदाहरण समूह चैम्पियनशिप, ज़ेन-निहोन जूनियर, इंटर-हाई, ज़ेनकोकु कोको सेम्बात्सु आदि)

    [स्पर्धाएँ और क्रम]
      A. फाइनल प्रतियोगिता (स्वतंत्र प्रदर्शन)

    [क्रम निर्धारण की विधि]
      फाइनल प्रतियोगिता के अंकों (अधिकतम 20 अंक) से क्रम निर्धारित किया जाता है। (अनुच्छेद 28 देखें)

2. व्यक्तिगत प्रतियोगिता

  a. प्रतियोगिता I (उदाहरण ज़ेन-निहोन सेन्शुकेन ताइकाई, इंकारे आदि)

    [स्पर्धाएँ और क्रम]
      A. व्यक्तिगत ऑल-अराउंड (स्वतंत्र प्रदर्शन)  B. स्पर्धावार फाइनल (स्वतंत्र प्रदर्शन)
      a स्टिक  b रिंग  c रस्सी  d क्लब

    [क्रम निर्धारण की विधि]
      व्यक्तिगत ऑल-अराउंड का क्रम 4 स्पर्धाओं के योग (अधिकतम 80 अंक) से निर्धारित किया जाता है।
      स्पर्धावार फाइनल में प्रत्येक स्पर्धा के शीर्ष 8 जिम्नास्ट भाग ले सकते हैं, और क्रम फाइनल के अंकों (अधिकतम 20 अंक) से निर्धारित किया जाता है।

  b. प्रतियोगिता II (उदाहरण ज़ेन-निहोन जूनियर, ज़ेनकोकु कोको सेम्बात्सु ताइकाई आदि)

    [स्पर्धाएँ और क्रम]
      A. व्यक्तिगत ऑल-अराउंड (स्वतंत्र प्रदर्शन)  B. स्पर्धावार (स्वतंत्र प्रदर्शन)
      a स्टिक  b रिंग  c रस्सी  d क्लब
      स्पर्धाओं का क्रम प्रतियोगिता दिशानिर्देशों में निर्धारित किया जाता है।

    [क्रम निर्धारण की विधि]
      व्यक्तिगत ऑल-अराउंड का क्रम 4 स्पर्धाओं के योग (अधिकतम 80 अंक) से निर्धारित किया जाता है।
      स्पर्धावार क्रम, प्रत्येक स्पर्धा के अंकों (अधिकतम 20 अंक) से निर्धारित किया जाता है।

  c. प्रतियोगिता III (उदाहरण ज़ेन-निहोन यूथ आदि)

    [स्पर्धाएँ और क्रम]
      A. व्यक्तिगत ऑल-अराउंड (स्वतंत्र प्रदर्शन)
      a स्टिक  b रिंग  c रस्सी  d क्लब

    [क्रम निर्धारण की विधि]
      निर्दिष्ट 2 स्पर्धाओं में अधिक अंक पाने वाले जिम्नास्ट फाइनल प्रतियोगिता में भाग लेते हैं और शेष 2 स्पर्धाएँ करते हैं।
      प्रत्येक स्पर्धा (अधिकतम 20 अंक) के अंकों के योग से क्रम निर्धारित किया जाता है।
      स्पर्धाओं का निर्धारण और फाइनल प्रतियोगिता में भाग लेने वालों की संख्या प्रतियोगिता दिशानिर्देशों में तय की जाती है।

3. समूह और व्यक्तिगत ऑल-अराउंड संयुक्त प्रतियोगिता

  a. प्रतियोगिता I (उदाहरण कोकुमिन ताइइकु ताइकाई आदि)

    [स्पर्धाएँ और क्रम]
      A. व्यक्तिगत प्रतियोगिता
      a स्टिक  b रिंग  c रस्सी  d क्लब
      B. समूह प्रतियोगिता
      समूह प्रतियोगिता में भाग लेने वाले जिम्नास्ट में से 4 जिम्नास्ट, a–b की स्पर्धाएँ एक-एक करके करते हैं।

  b. क्रम निर्धारण की विधि
    व्यक्तिगत 4 स्पर्धाओं के अंकों के योग का 1/4 (अधिकतम 20 अंक) और समूह प्रतियोगिता (अधिकतम 20 अंक) के अंकों के योग से क्रम निर्धारित किया जाता है।`,
        },
      },
      {
        title: {
          ja: '団体競技の申し込み',
          en: 'Entries for the Group Competition',
          zh: '团体比赛的报名',
          ko: '단체 경기의 신청',
          es: 'Inscripción en la competición por conjuntos',
          fr: 'Engagements pour la compétition par ensembles',
          ru: 'Заявка на групповые соревнования',
          hi: 'समूह प्रतियोगिता के लिए प्रविष्टि',
        },
        content: {
          ja: `団体競技は競技者を８名まで申し込むことができる。
団体競技者は、監督会議において承認された競技者のうち６名が演技を行う。ただし、５名または４名の競技者でも演技を行うこともできる。`,
          en: `Up to 8 gymnasts may be entered in the group competition.
Six of the gymnasts approved at the team managers' meeting perform the group routine. A group may also perform with five or four gymnasts.`,
          zh: `团体比赛最多可以报名８名参赛者。
团体比赛由在领队会议上获得承认的参赛者中的６名完成成套动作。但是，由５名或４名参赛者完成成套动作也可以。`,
          ko: `단체 경기는 경기자를 8명까지 신청할 수 있다.
단체 경기자는 감독 회의에서 승인된 경기자 중 6명이 연기를 실시한다. 다만 5명 또는 4명의 경기자로도 연기를 실시할 수 있다.`,
          es: `En la competición por conjuntos se pueden inscribir hasta 8 gimnastas.
Realizan el ejercicio seis de los gimnastas aprobados en la reunión de entrenadores. No obstante, el ejercicio también puede realizarse con cinco o cuatro gimnastas.`,
          fr: `Jusqu'à 8 gymnastes peuvent être engagés dans la compétition par ensembles.
Six des gymnastes validés lors de la réunion des entraîneurs présentent l'exercice d'ensemble. Un ensemble peut également concourir à cinq ou à quatre gymnastes.`,
          ru: `На групповые соревнования можно заявить до восьми гимнастов.
Упражнение выполняют шесть гимнастов из числа утверждённых на совещании представителей команд. Допускается выступление и пятью или четырьмя гимнастами.`,
          hi: `समूह प्रतियोगिता में अधिकतम 8 जिम्नास्ट की प्रविष्टि की जा सकती है।
समूह प्रतियोगिता में, कोच बैठक में स्वीकृत जिम्नास्ट में से 6 जिम्नास्ट प्रदर्शन करते हैं। हालाँकि, 5 या 4 जिम्नास्ट के साथ भी प्रदर्शन किया जा सकता है।`,
        },
      },
      {
        title: {
          ja: '個人競技の申し込み',
          en: 'Entries for the Individual Competition',
          zh: '个人比赛的报名',
          ko: '개인 경기의 신청',
          es: 'Inscripción en la competición individual',
          fr: 'Engagements pour la compétition individuelle',
          ru: 'Заявка на индивидуальные соревнования',
          hi: 'व्यक्तिगत प्रतियोगिता के लिए प्रविष्टि',
        },
        content: {
          ja: `個人競技は、当該当年度の競技会に定めた競技者を申し込むことができる。

1. 個人競技は、競技Ⅰ・Ⅱ・Ⅲのいずれかを行う。
2. 個人競技に出場した競技者は、所属団体の団体競技に出場することができる。
3. 申し込み後の競技者の交代はできない。
4. 個人競技の１所属に対する出場制限は原則８名までとする。`,
          en: `Gymnasts may be entered in the individual competition as set for that year's competition.

1. The individual competition is held as Competition I, II or III.
2. Gymnasts who compete in the individual competition may also compete in their organization's group competition.
3. Gymnasts cannot be substituted after entry.
4. As a rule, each organization may enter up to 8 gymnasts in the individual competition.`,
          zh: `个人比赛可以报名该年度比赛会所规定的参赛者。

1. 个人比赛按比赛Ⅰ、Ⅱ、Ⅲ之一进行。
2. 参加个人比赛的参赛者，可以参加所属单位的团体比赛。
3. 报名后不得更换参赛者。
4. 个人比赛每一所属单位的参赛人数原则上最多为８名。`,
          ko: `개인 경기는 해당 연도의 경기회에서 정한 경기자를 신청할 수 있다.

1. 개인 경기는 경기 I·II·III 중 하나를 실시한다.
2. 개인 경기에 출전한 경기자는 소속 단체의 단체 경기에 출전할 수 있다.
3. 신청 후 경기자의 교체는 할 수 없다.
4. 개인 경기의 1개 소속에 대한 출전 제한은 원칙적으로 8명까지로 한다.`,
          es: `En la competición individual se pueden inscribir los gimnastas establecidos para la competición del año correspondiente.

1. La competición individual se celebra como Competición I, II o III.
2. Los gimnastas que participan en la competición individual pueden participar también en la competición por conjuntos de su entidad.
3. No se permite sustituir a un gimnasta una vez formalizada la inscripción.
4. Por regla general, cada entidad puede inscribir un máximo de 8 gimnastas en la competición individual.`,
          fr: `Les gymnastes peuvent être engagés dans la compétition individuelle selon ce qui est prévu pour la compétition de l'année en cours.

1. La compétition individuelle se déroule selon la formule I, II ou III.
2. Les gymnastes qui participent à la compétition individuelle peuvent aussi participer à la compétition par ensembles de leur association.
3. Aucun remplacement de gymnaste n'est possible après l'engagement.
4. En principe, chaque association peut engager jusqu'à 8 gymnastes dans la compétition individuelle.`,
          ru: `На индивидуальные соревнования можно заявить гимнастов в порядке, установленном для соревнований данного года.

1. Индивидуальные соревнования проводятся в формате I, II или III.
2. Гимнаст, выступавший в индивидуальных соревнованиях, может выступать и в групповых соревнованиях своей организации.
3. После подачи заявки замена гимнастов не допускается.
4. Как правило, одна организация может заявить в индивидуальные соревнования не более восьми гимнастов.`,
          hi: `व्यक्तिगत प्रतियोगिता में, उस वर्ष की प्रतियोगिता के लिए निर्धारित जिम्नास्ट की प्रविष्टि की जा सकती है।

1. व्यक्तिगत प्रतियोगिता, प्रतियोगिता I, II, III में से किसी एक रूप में आयोजित की जाती है।
2. व्यक्तिगत प्रतियोगिता में भाग लेने वाले जिम्नास्ट, अपने संगठन की समूह प्रतियोगिता में भी भाग ले सकते हैं।
3. प्रविष्टि के बाद जिम्नास्ट को बदला नहीं जा सकता।
4. व्यक्तिगत प्रतियोगिता में एक संगठन से भाग लेने की सीमा सिद्धांततः अधिकतम 8 जिम्नास्ट है।`,
        },
      },
      {
        title: {
          ja: '音響機器の使用',
          en: 'Use of Audio Equipment',
          zh: '音响设备的使用',
          ko: '음향 기기의 사용',
          es: 'Uso del equipo de sonido',
          fr: 'Utilisation du matériel audio',
          ru: 'Использование звуковой аппаратуры',
          hi: 'ध्वनि उपकरण का उपयोग',
        },
        content: {
          ja: `伴奏音楽は音響機器を使用するものとする。

1. 音響機器は、組織委員会で準備したもの、または自己で準備したものを使用することができる。
2. 音楽媒体等には、所属名または競技者名を示していかなければならない。
3. 規定演技の伴奏音楽は、協会制定のものを使用することができる。`,
          en: `The accompanying music is played on audio equipment.

1. Gymnasts may use the audio equipment prepared by the Organizing Committee or their own.
2. Music media must be labeled with the organization's name or the gymnast's name.
3. For compulsory routines, the music issued by the Association may be used.`,
          zh: `伴奏音乐应使用音响设备播放。

1. 音响设备可以使用组织委员会准备的，也可以使用自行准备的。
2. 音乐载体等上必须标明所属单位名称或参赛者姓名。
3. 规定成套的伴奏音乐，可以使用协会制定的音乐。`,
          ko: `반주 음악은 음향 기기를 사용하는 것으로 한다.

1. 음향 기기는 조직 위원회에서 준비한 것 또는 본인이 준비한 것을 사용할 수 있다.
2. 음악 매체 등에는 소속명 또는 경기자명을 표시하여야 한다.
3. 규정 연기의 반주 음악은 협회가 제정한 것을 사용할 수 있다.`,
          es: `La música de acompañamiento se reproduce con equipo de sonido.

1. Se puede utilizar el equipo de sonido preparado por el comité organizador o el propio.
2. Los soportes musicales deben llevar indicado el nombre de la entidad o del gimnasta.
3. Para los ejercicios obligatorios se puede utilizar la música establecida por la Federación.`,
          fr: `Les musiques d'accompagnement sont diffusées au moyen d'un matériel audio.

1. Les gymnastes peuvent utiliser le matériel audio mis à disposition par le comité d'organisation ou leur propre matériel.
2. Les supports musicaux doivent porter le nom de l'association ou celui du gymnaste.
3. Pour les exercices imposés, la musique établie par la Fédération peut être utilisée.`,
          ru: `Музыкальное сопровождение воспроизводится через звуковую аппаратуру.

1. Можно пользоваться аппаратурой, подготовленной оргкомитетом, либо своей собственной.
2. На носителе с музыкой должно быть указано название организации или имя гимнаста.
3. Для обязательных упражнений можно использовать музыку, утверждённую Ассоциацией.`,
          hi: `संगत संगीत के लिए ध्वनि उपकरण का उपयोग किया जाता है।

1. ध्वनि उपकरण के रूप में, आयोजन समिति द्वारा तैयार किया गया या स्वयं तैयार किया गया उपकरण उपयोग किया जा सकता है।
2. संगीत माध्यम आदि पर संगठन का नाम या जिम्नास्ट का नाम दर्शाया जाना चाहिए।
3. अनिवार्य प्रदर्शन के संगत संगीत के लिए, संघ द्वारा निर्धारित संगीत का उपयोग किया जा सकता है।`,
        },
      },
      {
        title: {
          ja: '音響機器の欠陥の処置',
          en: 'Faulty Audio Equipment',
          zh: '音响设备故障的处理',
          ko: '음향 기기 결함에 대한 조치',
          es: 'Actuación ante fallos del equipo de sonido',
          fr: 'Défaillance du matériel audio',
          ru: 'Действия при неисправности звуковой аппаратуры',
          hi: 'ध्वनि उपकरण में खराबी पर कार्रवाई',
        },
        content: {
          ja: '審判長・競技部長が当然と認める音響機器に欠点があった場合は、団体競技でも個人競技でも減点なしの復行ができる。',
          en: 'If the Jury President and the Competition Director agree that the audio equipment was faulty, the routine may be repeated without deduction in both the group and the individual competition.',
          zh: '裁判长、竞赛部长认可确有音响设备故障时，团体比赛和个人比赛均可不予扣分重做成套动作。',
          ko: '심판장·경기 부장이 당연하다고 인정하는 음향 기기의 결함이 있었을 경우에는 단체 경기에서도 개인 경기에서도 감점 없이 다시 연기할 수 있다.',
          es: 'Si el juez árbitro y el director de competición reconocen que el equipo de sonido ha tenido un fallo, el ejercicio puede repetirse sin penalización tanto en la competición por conjuntos como en la individual.',
          fr: "Si le président du jury et le directeur de la compétition reconnaissent une défaillance du matériel audio, l'exercice peut être repris sans pénalité, aussi bien en compétition par ensembles qu'en compétition individuelle.",
          ru: 'Если главный судья и директор соревнований признают, что звуковая аппаратура была неисправна, упражнение можно повторить без сбавки как в групповых, так и в индивидуальных соревнованиях.',
          hi: 'यदि मुख्य निर्णायक और प्रतियोगिता निदेशक यह मानें कि ध्वनि उपकरण में खराबी थी, तो समूह प्रतियोगिता और व्यक्तिगत प्रतियोगिता दोनों में बिना कटौती के प्रदर्शन दोहराया जा सकता है।',
        },
      },
      {
        title: {
          ja: '順位決定方法',
          en: 'Ranking',
          zh: '名次确定方法',
          ko: '순위 결정 방법',
          es: 'Forma de establecer la clasificación',
          fr: 'Classement',
          ru: 'Определение мест',
          hi: 'क्रम निर्धारण की विधि',
        },
        content: {
          ja: `すべての競技において、獲得した得点で順位を決定する。

  1. 得点の合計は、各競技の順位決定方法に従う。

  2. 予選競技から決勝競技への出場資格を得たチーム・競技者は必ず出場しなければならない。決勝競技に出場しない場合は失格となり、本大会のあらゆる賞典を失う。ただし不可抗力の場合、または正当と認められた場合は除く。

  3. 個人競技で、種目別決勝の競技出場者が得点上位８名の場合は、同一所属からの出場者が３名を超えることはできない。

  4. 予選競技から決勝競技を行う際の欠員は、次位のチーム・競技者を持ってこれに代える。

  5. 予選競技から決勝競技を行う際の試技順は、１位〜４位、５位〜８位までの２グループで抽選して決定する。

  【同点順位の決定方法】
    同点の順位は同順位とするが、決勝競技または上級大会への優先獲得権は次の手順で行う。

    a. 団体競技

      ⅰ すべての審判員の採点合計（主任審判および最高点・最低点と減点を含む）の高いチーム。
      ⅱ ⅰにおいて同点の場合、すべての構成審判員の採点合計が高いチーム。
      ⅲ ⅱにおいて同点の場合、主任審判員の採点合計の高いチーム。
      ⅳ ⅲにおいて同点の場合、抽選とする。

    b. 個人競技

      個人総合は予選で演技したすべての種目、種目別競技者権は、その種目を対象として次の手順で行う。

      ⅰ すべての審判員の採点合計（主任審判および最高点・最低点と減点を含む）の高い競技者。
      ⅱ ⅰにおいて同点の場合、すべての構成審判員の採点合計が高い競技者。
      ⅲ ⅱにおいて同点の場合、主任審判員の採点合計の高い競技者。
      ⅳ ⅲにおいて同点の場合、抽選とする。

    c. 国民体育大会および同ブロック予選

      ⅰ 団体競技の得点の（本来の得点）の高いチーム。
      ⅱ ⅰにおいて同点の場合、団体競技および個人競技４種目のすべての審判員（主任審判および最高点・最低点）の採点合計の高いチーム。
      ⅲ ⅱにおいて同点の場合、団体競技すべての審判員（主任審判および最高点・最低点）の採点合計の高いチーム。
      ⅳ ⅲにおいて同点の場合、抽選とする。`,
          en: `In all competitions, rankings are decided by the scores obtained.

  1. Scores are totaled according to the ranking method of each competition.

  2. Teams and gymnasts who qualify from the qualification to the final must compete in the final. Those who do not compete in the final are disqualified and lose all awards of the competition, except in cases of force majeure or for reasons accepted as legitimate.

  3. In the individual competition, when the top 8 gymnasts qualify for an apparatus final, no more than three gymnasts from the same organization may qualify.

  4. If a place in the final becomes vacant, it is filled by the next-ranked team or gymnast.

  5. The order of performance in the final is decided by draw in two groups: 1st to 4th and 5th to 8th.

  [Breaking ties]
    Tied scores share the same rank, but priority for the final or for a higher-level competition is decided as follows.

    a. Group competition

      i. The team with the higher total of all judges' scores (including the chief judges, the highest and lowest scores, and deductions).
      ii. If still tied, the team with the higher total of all composition judges' scores.
      iii. If still tied, the team with the higher total of the chief judges' scores.
      iv. If still tied, by draw.

    b. Individual competition

      For the all-around, all apparatus performed in the qualification are considered; for apparatus titles, only that apparatus is considered, as follows.

      i. The gymnast with the higher total of all judges' scores (including the chief judges, the highest and lowest scores, and deductions).
      ii. If still tied, the gymnast with the higher total of all composition judges' scores.
      iii. If still tied, the gymnast with the higher total of the chief judges' scores.
      iv. If still tied, by draw.

    c. National Sports Festival and its regional qualifiers

      i. The team with the higher group competition score (the original score).
      ii. If still tied, the team with the higher total of all judges' scores (including the chief judges and the highest and lowest scores) in the group competition and the four individual apparatus.
      iii. If still tied, the team with the higher total of all judges' scores (including the chief judges and the highest and lowest scores) in the group competition.
      iv. If still tied, by draw.`,
          zh: `在所有比赛中，按所获得的得分确定名次。

  1. 得分的合计，依照各项比赛的名次确定方法。

  2. 由预赛获得决赛参赛资格的队、参赛者必须参赛。不参加决赛时取消比赛资格，并丧失本次比赛的一切奖励。但不可抗力的情形，或被认定为正当理由的情形除外。

  3. 个人比赛中，单项决赛的参赛者为得分列前８名时，同一所属单位的参赛者不得超过３名。

  4. 由预赛进入决赛时出现的缺额，由下一名次的队、参赛者递补。

  5. 由预赛进入决赛时的试做顺序，分为第１—４名、第５—８名两组抽签确定。

  【同分名次的确定方法】
    得分相同者名次并列，但进入决赛或上一级比赛的优先权按以下顺序确定。

    a. 团体比赛

      ⅰ 全体裁判员评分合计（含主裁判员以及最高分、最低分与扣分）较高的队。
      ⅱ 在ⅰ中相同时，全体编排裁判员评分合计较高的队。
      ⅲ 在ⅱ中相同时，主裁判员评分合计较高的队。
      ⅳ 在ⅲ中相同时，以抽签确定。

    b. 个人比赛

      个人全能以预赛中完成的所有项目为对象，单项冠军权以该项目为对象，按以下顺序确定。

      ⅰ 全体裁判员评分合计（含主裁判员以及最高分、最低分与扣分）较高的参赛者。
      ⅱ 在ⅰ中相同时，全体编排裁判员评分合计较高的参赛者。
      ⅲ 在ⅱ中相同时，主裁判员评分合计较高的参赛者。
      ⅳ 在ⅲ中相同时，以抽签确定。

    c. 国民体育大会及其分区预选赛

      ⅰ 团体比赛得分（原始得分）较高的队。
      ⅱ 在ⅰ中相同时，团体比赛及个人比赛４个项目的全体裁判员（含主裁判员以及最高分、最低分）评分合计较高的队。
      ⅲ 在ⅱ中相同时，团体比赛全体裁判员（含主裁判员以及最高分、最低分）评分合计较高的队。
      ⅳ 在ⅲ中相同时，以抽签确定。`,
          ko: `모든 경기에서 획득한 득점으로 순위를 결정한다.

  1. 득점의 합계는 각 경기의 순위 결정 방법에 따른다.

  2. 예선 경기에서 결승 경기로의 출전 자격을 얻은 팀·경기자는 반드시 출전하여야 한다. 결승 경기에 출전하지 않을 경우에는 실격이 되어 본 대회의 모든 상을 잃는다. 다만 불가항력의 경우 또는 정당하다고 인정된 경우는 제외한다.

  3. 개인 경기에서 종목별 결승의 경기 출전자가 득점 상위 8명인 경우에는 동일 소속에서의 출전자가 3명을 넘을 수 없다.

  4. 예선 경기에서 결승 경기를 실시할 때의 결원은 다음 순위의 팀·경기자로 이를 대체한다.

  5. 예선 경기에서 결승 경기를 실시할 때의 연기 순서는 1위~4위, 5위~8위까지의 2개 그룹으로 추첨하여 결정한다.

  【동점 순위의 결정 방법】
    동점의 순위는 같은 순위로 하되, 결승 경기 또는 상급 대회로의 우선 획득권은 다음 순서로 정한다.

    a. 단체 경기

      i 모든 심판원의 채점 합계(주임 심판 및 최고점·최저점과 감점을 포함한다)가 높은 팀.
      ii i에서 동점인 경우, 모든 구성 심판원의 채점 합계가 높은 팀.
      iii ii에서 동점인 경우, 주임 심판원의 채점 합계가 높은 팀.
      iv iii에서 동점인 경우, 추첨으로 한다.

    b. 개인 경기

      개인 종합은 예선에서 연기한 모든 종목을, 종목별 경기자 권리는 해당 종목을 대상으로 하여 다음 순서로 정한다.

      i 모든 심판원의 채점 합계(주임 심판 및 최고점·최저점과 감점을 포함한다)가 높은 경기자.
      ii i에서 동점인 경우, 모든 구성 심판원의 채점 합계가 높은 경기자.
      iii ii에서 동점인 경우, 주임 심판원의 채점 합계가 높은 경기자.
      iv iii에서 동점인 경우, 추첨으로 한다.

    c. 국민체육대회 및 동 블록 예선

      i 단체 경기 득점(본래의 득점)이 높은 팀.
      ii i에서 동점인 경우, 단체 경기 및 개인 경기 4종목의 모든 심판원(주임 심판 및 최고점·최저점)의 채점 합계가 높은 팀.
      iii ii에서 동점인 경우, 단체 경기 모든 심판원(주임 심판 및 최고점·최저점)의 채점 합계가 높은 팀.
      iv iii에서 동점인 경우, 추첨으로 한다.`,
          es: `En todas las competiciones, la clasificación se establece por la puntuación obtenida.

  1. Las puntuaciones se suman según la forma de establecer la clasificación de cada competición.

  2. Los equipos y los gimnastas que se clasifican de la fase clasificatoria para la final están obligados a participar en ella. Quien no participe en la final queda descalificado y pierde todos los premios de la competición, salvo en caso de fuerza mayor o por un motivo reconocido como justificado.

  3. En la competición individual, cuando a la final por aparatos acceden los 8 gimnastas con mejor puntuación, no pueden acceder más de tres gimnastas de una misma entidad.

  4. Si al pasar de la clasificatoria a la final queda una plaza vacante, se cubre con el equipo o el gimnasta siguiente en la clasificación.

  5. El orden de actuación al pasar de la clasificatoria a la final se decide por sorteo en dos grupos: del 1.º al 4.º y del 5.º al 8.º.

  [Forma de resolver los empates]
    Las puntuaciones iguales comparten el mismo puesto, pero la prioridad para acceder a la final o a una competición de nivel superior se decide del siguiente modo.

    a. Competición por conjuntos

      ⅰ El equipo con la suma más alta de las puntuaciones de todos los jueces (incluidos el juez principal, las notas más alta y más baja y las penalizaciones).
      ⅱ En caso de empate en ⅰ, el equipo con la suma más alta de las puntuaciones de todos los jueces de composición.
      ⅲ En caso de empate en ⅱ, el equipo con la suma más alta de las puntuaciones de los jueces principales.
      ⅳ En caso de empate en ⅲ, por sorteo.

    b. Competición individual

      En el concurso completo se toman todas las pruebas realizadas en la clasificatoria y, para los títulos por aparatos, el aparato correspondiente; se procede del siguiente modo.

      ⅰ El gimnasta con la suma más alta de las puntuaciones de todos los jueces (incluidos el juez principal, las notas más alta y más baja y las penalizaciones).
      ⅱ En caso de empate en ⅰ, el gimnasta con la suma más alta de las puntuaciones de todos los jueces de composición.
      ⅲ En caso de empate en ⅱ, el gimnasta con la suma más alta de las puntuaciones de los jueces principales.
      ⅳ En caso de empate en ⅲ, por sorteo.

    c. Juegos Deportivos Nacionales de Japón y sus fases clasificatorias regionales

      ⅰ El equipo con la puntuación más alta (la puntuación original) en la competición por conjuntos.
      ⅱ En caso de empate en ⅰ, el equipo con la suma más alta de las puntuaciones de todos los jueces (incluidos el juez principal y las notas más alta y más baja) en la competición por conjuntos y en los cuatro aparatos de la competición individual.
      ⅲ En caso de empate en ⅱ, el equipo con la suma más alta de las puntuaciones de todos los jueces (incluidos el juez principal y las notas más alta y más baja) en la competición por conjuntos.
      ⅳ En caso de empate en ⅲ, por sorteo.`,
          fr: `Dans toutes les compétitions, le classement est établi d'après les notes obtenues.

  1. Les notes sont additionnées selon le mode de classement propre à chaque compétition.

  2. Les ensembles et les gymnastes qualifiés des qualifications pour la finale doivent obligatoirement y participer. Ceux qui ne participent pas à la finale sont disqualifiés et perdent toute récompense de la compétition, sauf cas de force majeure ou motif reconnu légitime.

  3. En compétition individuelle, lorsque les 8 meilleurs gymnastes se qualifient pour une finale par engin, une même association ne peut pas y placer plus de trois gymnastes.

  4. Si une place en finale se libère, elle revient à l'ensemble ou au gymnaste suivant au classement.

  5. L'ordre de passage en finale est déterminé par tirage au sort en deux groupes : du 1er au 4e et du 5e au 8e.

  [Départage des ex æquo]
    Les gymnastes à égalité sont classés au même rang, mais la priorité pour la finale ou pour une compétition de niveau supérieur est déterminée comme suit.

    a. Compétition par ensembles

      i. L'ensemble dont le total de toutes les notes des juges est le plus élevé (y compris les juges-arbitres, les notes la plus haute et la plus basse, et les pénalités).
      ii. En cas de nouvelle égalité, l'ensemble dont le total des notes de tous les juges de composition est le plus élevé.
      iii. En cas de nouvelle égalité, l'ensemble dont le total des notes des juges-arbitres est le plus élevé.
      iv. En cas de nouvelle égalité, par tirage au sort.

    b. Compétition individuelle

      Pour le concours général, tous les engins présentés en qualifications sont pris en compte ; pour les titres par engin, seul l'engin concerné est pris en compte, selon la procédure suivante.

      i. Le gymnaste dont le total de toutes les notes des juges est le plus élevé (y compris les juges-arbitres, les notes la plus haute et la plus basse, et les pénalités).
      ii. En cas de nouvelle égalité, le gymnaste dont le total des notes de tous les juges de composition est le plus élevé.
      iii. En cas de nouvelle égalité, le gymnaste dont le total des notes des juges-arbitres est le plus élevé.
      iv. En cas de nouvelle égalité, par tirage au sort.

    c. Jeux nationaux du Japon et leurs qualifications régionales

      i. L'ensemble dont la note de la compétition par ensembles (note d'origine) est la plus élevée.
      ii. En cas de nouvelle égalité, l'ensemble dont le total de toutes les notes des juges (y compris les juges-arbitres et les notes la plus haute et la plus basse) sur la compétition par ensembles et les quatre engins individuels est le plus élevé.
      iii. En cas de nouvelle égalité, l'ensemble dont le total de toutes les notes des juges (y compris les juges-arbitres et les notes la plus haute et la plus basse) sur la compétition par ensembles est le plus élevé.
      iv. En cas de nouvelle égalité, par tirage au sort.`,
          ru: `Во всех соревнованиях места определяются по набранным баллам.

  1. Баллы суммируются согласно порядку определения мест для каждого формата соревнований.

  2. Команды и гимнасты, получившие право выступать в финале по итогам квалификации, обязаны выступить в финале. Не вышедшие в финал дисквалифицируются и теряют все награды данных соревнований, кроме случаев непреодолимой силы или признанных уважительными причин.

  3. В индивидуальных соревнованиях, когда в финал в отдельном виде выходят восемь лучших гимнастов, от одной организации не может выйти более трёх гимнастов.

  4. Освободившееся место в финале занимает следующая по результату команда или следующий гимнаст.

  5. Порядок выступлений в финале определяется жеребьёвкой в двух группах: с 1-го по 4-е место и с 5-го по 8-е место.

  [Разделение равных результатов]
    При равенстве оценок места считаются одинаковыми, однако преимущество при выходе в финал или на соревнования более высокого уровня определяется в следующем порядке.

    a. Групповые соревнования

      i. Команда с большей суммой оценок всех судей (включая старших судей, высшую и низшую оценки и сбавки).
      ii. При равенстве — команда с большей суммой оценок всех судей за композицию.
      iii. При равенстве — команда с большей суммой оценок старших судей.
      iv. При равенстве — по жребию.

    b. Индивидуальные соревнования

      Для многоборья учитываются все виды, выполненные в квалификации; для звания в отдельном виде — только этот вид. Порядок следующий.

      i. Гимнаст с большей суммой оценок всех судей (включая старших судей, высшую и низшую оценки и сбавки).
      ii. При равенстве — гимнаст с большей суммой оценок всех судей за композицию.
      iii. При равенстве — гимнаст с большей суммой оценок старших судей.
      iv. При равенстве — по жребию.

    c. Национальный спортивный фестиваль и его региональные отборы

      i. Команда с более высокой оценкой групповых соревнований (исходной оценкой).
      ii. При равенстве — команда с большей суммой оценок всех судей (включая старших судей, высшую и низшую оценки) в групповых соревнованиях и четырёх индивидуальных видах.
      iii. При равенстве — команда с большей суммой оценок всех судей (включая старших судей, высшую и низшую оценки) в групповых соревнованиях.
      iv. При равенстве — по жребию.`,
          hi: `सभी प्रतियोगिताओं में, प्राप्त अंकों से क्रम निर्धारित किया जाता है।

  1. अंकों का योग, प्रत्येक प्रतियोगिता की क्रम निर्धारण की विधि के अनुसार किया जाता है।

  2. क्वालिफिकेशन प्रतियोगिता से फाइनल प्रतियोगिता के लिए पात्रता पाने वाली टीम और जिम्नास्ट को अवश्य भाग लेना चाहिए। फाइनल प्रतियोगिता में भाग न लेने पर अयोग्य घोषित किया जाता है और इस प्रतियोगिता के सभी पुरस्कार छिन जाते हैं। हालाँकि अपरिहार्य कारण की स्थिति में, या उचित माने गए कारण की स्थिति में ऐसा नहीं होता।

  3. व्यक्तिगत प्रतियोगिता में, स्पर्धावार फाइनल में भाग लेने वाले अंकों में शीर्ष 8 जिम्नास्ट हों, तो एक ही संगठन से 3 से अधिक जिम्नास्ट भाग नहीं ले सकते।

  4. क्वालिफिकेशन प्रतियोगिता से फाइनल प्रतियोगिता में जाते समय रिक्त स्थान, अगले क्रम की टीम या जिम्नास्ट से भरा जाता है।

  5. क्वालिफिकेशन प्रतियोगिता से फाइनल प्रतियोगिता करते समय प्रदर्शन क्रम, 1–4 स्थान और 5–8 स्थान, इन 2 समूहों में ड्रॉ द्वारा तय किया जाता है।

  [समान अंक पर क्रम निर्धारण की विधि]
    समान अंक होने पर क्रम समान रहता है, पर फाइनल प्रतियोगिता या उच्चतर प्रतियोगिता के लिए प्राथमिकता का अधिकार निम्नलिखित क्रम से तय किया जाता है।

    a. समूह प्रतियोगिता

      i. वह टीम जिसके सभी निर्णायकों के अंकों का योग (प्रधान निर्णायक तथा उच्चतम और निम्नतम अंक और कटौती सहित) अधिक हो।
      ii. i में समान होने पर, वह टीम जिसके सभी संरचना निर्णायकों के अंकों का योग अधिक हो।
      iii. ii में समान होने पर, वह टीम जिसके प्रधान निर्णायक के अंकों का योग अधिक हो।
      iv. iii में समान होने पर, ड्रॉ द्वारा।

    b. व्यक्तिगत प्रतियोगिता

      व्यक्तिगत ऑल-अराउंड के लिए क्वालिफिकेशन में किए गए सभी स्पर्धाओं को, और स्पर्धावार खिताब के लिए उसी स्पर्धा को आधार मानकर, निम्नलिखित क्रम से तय किया जाता है।

      i. वह जिम्नास्ट जिसके सभी निर्णायकों के अंकों का योग (प्रधान निर्णायक तथा उच्चतम और निम्नतम अंक और कटौती सहित) अधिक हो।
      ii. i में समान होने पर, वह जिम्नास्ट जिसके सभी संरचना निर्णायकों के अंकों का योग अधिक हो।
      iii. ii में समान होने पर, वह जिम्नास्ट जिसके प्रधान निर्णायक के अंकों का योग अधिक हो।
      iv. iii में समान होने पर, ड्रॉ द्वारा।

    c. कोकुमिन ताइइकु ताइकाई और उसका ब्लॉक क्वालिफिकेशन

      i. वह टीम जिसके समूह प्रतियोगिता के अंक (मूल अंक) अधिक हों।
      ii. i में समान होने पर, वह टीम जिसके समूह प्रतियोगिता और व्यक्तिगत प्रतियोगिता की 4 स्पर्धाओं के सभी निर्णायकों (प्रधान निर्णायक तथा उच्चतम और निम्नतम अंक सहित) के अंकों का योग अधिक हो।
      iii. ii में समान होने पर, वह टीम जिसके समूह प्रतियोगिता के सभी निर्णायकों (प्रधान निर्णायक तथा उच्चतम और निम्नतम अंक सहित) के अंकों का योग अधिक हो।
      iv. iii में समान होने पर, ड्रॉ द्वारा।`,
        },
      },
      {
        title: {
          ja: '所属団体と監督者',
          en: 'Organizations and Team Managers',
          zh: '所属单位与领队',
          ko: '소속 단체와 감독자',
          es: 'Entidades y entrenadores',
          fr: "Associations et responsables d'équipe",
          ru: 'Организации и представители команд',
          hi: 'संगठन और कोच',
        },
        content: {
          ja: '競技会に出場する所属団体は全期間１名の監督者を置かなければならない。',
          en: 'Each organization taking part in a competition must have one team manager for the whole competition.',
          zh: '参加比赛会的所属单位，在全部期间内必须设置１名领队。',
          ko: '경기회에 출전하는 소속 단체는 전 기간 1명의 감독자를 두어야 한다.',
          es: 'Cada entidad que participa en una competición debe designar a un entrenador responsable durante todo el periodo de la competición.',
          fr: "Chaque association participant à une compétition doit désigner un responsable d'équipe pour toute la durée de celle-ci.",
          ru: 'Каждая организация, участвующая в соревнованиях, обязана иметь одного представителя команды на всё время соревнований.',
          hi: 'प्रतियोगिता में भाग लेने वाले प्रत्येक संगठन को पूरी अवधि के लिए 1 कोच रखना चाहिए।',
        },
      },
      {
        title: {
          ja: '演技中の不快不慮の事故',
          en: 'Illness or Accident During a Routine',
          zh: '成套动作中的身体不适与意外事故',
          ko: '연기 중의 질병 및 불의의 사고',
          es: 'Indisposición o accidente durante el ejercicio',
          fr: 'Malaise ou accident pendant un exercice',
          ru: 'Недомогание или несчастный случай во время упражнения',
          hi: 'प्रदर्शन के दौरान अस्वस्थता या दुर्घटना',
        },
        content: {
          ja: '演技中の不快不慮の事故が起きた場合は、監督者を通じて直ちに審判長に連絡し演技を中断し、医師の診断を受けなければならない。',
          en: 'If a gymnast becomes ill or has an accident during a routine, the Jury President must be informed immediately through the team manager, the routine must be stopped, and the gymnast must be examined by a doctor.',
          zh: '成套动作进行中发生身体不适或意外事故时，必须通过领队立即报告裁判长，中断成套动作，并接受医生的诊断。',
          ko: '연기 중에 질병이나 불의의 사고가 발생한 경우에는 감독자를 통하여 즉시 심판장에게 연락하고 연기를 중단하여 의사의 진단을 받아야 한다.',
          es: 'Si durante el ejercicio se produce una indisposición o un accidente, debe avisarse de inmediato al juez árbitro a través del entrenador, interrumpir el ejercicio y someter al gimnasta a un reconocimiento médico.',
          fr: "En cas de malaise ou d'accident pendant un exercice, le président du jury doit en être informé immédiatement par l'intermédiaire du responsable d'équipe, l'exercice doit être interrompu et le gymnaste doit être examiné par un médecin.",
          ru: 'Если во время упражнения гимнасту стало плохо или произошёл несчастный случай, через представителя команды необходимо немедленно сообщить главному судье, прервать упражнение и обратиться к врачу.',
          hi: 'प्रदर्शन के दौरान अस्वस्थता या दुर्घटना होने पर, कोच के माध्यम से तुरंत मुख्य निर्णायक को सूचित करना चाहिए, प्रदर्शन रोकना चाहिए और डॉक्टर से जाँच करानी चाहिए।',
        },
      },
      {
        title: {
          ja: '競技場への入場',
          en: 'Access to the Competition Hall',
          zh: '进入比赛场地',
          ko: '경기장 입장',
          es: 'Acceso al recinto de competición',
          fr: 'Accès à la salle de compétition',
          ru: 'Доступ в соревновательный зал',
          hi: 'प्रतियोगिता स्थल में प्रवेश',
        },
        content: {
          ja: `競技場に入場できる者は、審判長、競技部長審判員、競技者および監督者と音楽係、審判補助員、音楽機器および演技上の保持に必要欠くべからざる人員に限る。
その他のっ競技場内への入場に関しては、競技の順調な進行を妨げない条件のもとに許可を得て入場できる。また、次の人々のために特別席を設ける。

1. 出場加盟団体の会長
2. 控えの審判員
3. 補審
4. 演技を直ちに実施しない競技者と監督`,
          en: `Access to the competition hall is limited to the Jury President, the Competition Director, the judges, the gymnasts and team managers, the music operators, the judges' assistants, and the staff essential for the audio equipment and for the routines.
Other people may enter the competition hall with permission, provided they do not interfere with the smooth running of the competition. Special seats are provided for the following people.

1. Presidents of the participating member organizations
2. Reserve judges
3. Assistant judges
4. Gymnasts and team managers who are not about to perform`,
          zh: `可以进入比赛场地者，仅限裁判长、竞赛部长、裁判员、参赛者及领队与音乐员、裁判辅助员，以及音响设备和成套动作实施上不可缺少的人员。
其他人员进入比赛场地，须在不妨碍比赛顺利进行的条件下经许可后方可进入。此外，为下列人员设置专席。

1. 参赛加盟单位的会长
2. 替补裁判员
3. 助理裁判
4. 不立即完成成套动作的参赛者与领队`,
          ko: `경기장에 입장할 수 있는 사람은 심판장, 경기 부장, 심판원, 경기자 및 감독자와 음악 담당자, 심판 보조원, 음향 기기 및 연기 진행 유지에 없어서는 안 될 인원으로 한정한다.
그 밖에 경기장 내 입장에 관해서는 경기의 원활한 진행을 방해하지 않는다는 조건하에 허가를 받아 입장할 수 있다. 또한 다음 사람들을 위하여 특별석을 마련한다.

1. 출전 가맹 단체의 회장
2. 대기 심판원
3. 보조 심판
4. 연기를 바로 실시하지 않는 경기자와 감독`,
          es: `Solo pueden acceder al recinto de competición el juez árbitro, el director de competición, los jueces, los gimnastas y los entrenadores, los encargados de la música, los auxiliares de los jueces y el personal imprescindible para el equipo de sonido y para el desarrollo de los ejercicios.
Otras personas pueden acceder al recinto de competición con autorización, siempre que no entorpezcan el desarrollo normal de la competición. Además, se reservan asientos especiales para las siguientes personas.

1. Los presidentes de las entidades afiliadas participantes
2. Los jueces de reserva
3. Los jueces auxiliares
4. Los gimnastas y entrenadores que no vayan a actuar de inmediato`,
          fr: `L'accès à la salle de compétition est réservé au président du jury, au directeur de la compétition, aux juges, aux gymnastes et aux responsables d'équipe, aux opérateurs de musique, aux assistants des juges et au personnel indispensable au matériel audio et au déroulement des exercices.
D'autres personnes peuvent y accéder sur autorisation, à condition de ne pas gêner le bon déroulement de la compétition. Des places réservées sont par ailleurs prévues pour les personnes suivantes.

1. Les présidents des associations membres participantes
2. Les juges remplaçants
3. Les juges assistants
4. Les gymnastes et les responsables d'équipe qui ne vont pas présenter d'exercice dans l'immédiat`,
          ru: `В соревновательный зал допускаются только главный судья, директор соревнований, судьи, гимнасты и представители команд, звукооператоры, помощники судей, а также персонал, без которого невозможна работа звуковой аппаратуры и проведение упражнений.
Остальные могут войти в соревновательный зал по разрешению при условии, что это не мешает ходу соревнований. Кроме того, отдельные места отводятся следующим лицам.

1. Президентам участвующих организаций-членов
2. Запасным судьям
3. Помощникам судей
4. Гимнастам и представителям команд, которые выступают не сразу`,
          hi: `प्रतियोगिता स्थल में प्रवेश केवल मुख्य निर्णायक, प्रतियोगिता निदेशक, निर्णायक, जिम्नास्ट और कोच तथा संगीत प्रभारी, निर्णायक सहायक, ध्वनि उपकरण और प्रदर्शन के संचालन के लिए अनिवार्य कर्मियों तक सीमित है।
अन्य लोगों के प्रतियोगिता स्थल में प्रवेश के बारे में, प्रतियोगिता के सुचारु संचालन में बाधा न डालने की शर्त पर, अनुमति लेकर प्रवेश किया जा सकता है। साथ ही, निम्नलिखित लोगों के लिए विशेष स्थान रखे जाते हैं।

1. भाग लेने वाले सदस्य संगठनों के अध्यक्ष
2. आरक्षित निर्णायक
3. सहायक निर्णायक
4. वे जिम्नास्ट और कोच जो तुरंत प्रदर्शन नहीं कर रहे हैं`,
        },
      },
    ],
  },
  {
    title: {
      ja: '表彰',
      en: 'Awards',
      zh: '表彰',
      ko: '표창',
      es: 'Premios',
      fr: 'Récompenses',
      ru: 'Награждение',
      hi: 'पुरस्कार',
    },
    section: [
      {
        title: {
          ja: '表彰式の開催',
          en: 'Award Ceremony',
          zh: '颁奖仪式的举行',
          ko: '표창식의 개최',
          es: 'Celebración de la ceremonia de entrega de premios',
          fr: 'Cérémonie protocolaire',
          ru: 'Церемония награждения',
          hi: 'पुरस्कार समारोह का आयोजन',
        },
        content: {
          ja: '成績の表彰および賞典の授与は、全競技者（各加盟団体代表）、審判団、組織委員会および公衆の参列のもと、厳粛な儀式を持って行う。',
          en: 'Results are honored and awards presented at a formal ceremony attended by all gymnasts (representatives of each member organization), the judging panel, the Organizing Committee and the public.',
          zh: '成绩的表彰及奖励的颁发，在全体参赛者（各加盟单位代表）、裁判团、组织委员会及公众列席之下，以庄严的仪式进行。',
          ko: '성적의 표창 및 상의 수여는 전 경기자(각 가맹 단체 대표), 심판진, 조직 위원회 및 일반 관중이 참석한 가운데 엄숙한 의식으로 실시한다.',
          es: 'La proclamación de los resultados y la entrega de los premios se realizan en una ceremonia solemne, con la asistencia de todos los gimnastas (representantes de cada entidad afiliada), del cuerpo de jueces, del comité organizador y del público.',
          fr: "La proclamation des résultats et la remise des récompenses ont lieu au cours d'une cérémonie solennelle, en présence de tous les gymnastes (représentants de chaque association membre), du corps de juges, du comité d'organisation et du public.",
          ru: 'Чествование результатов и вручение наград проходят в торжественной обстановке в присутствии всех гимнастов (представителей каждой организации-члена), судейской коллегии, оргкомитета и зрителей.',
          hi: 'परिणामों का सम्मान और पुरस्कारों का वितरण, सभी जिम्नास्ट (प्रत्येक सदस्य संगठन के प्रतिनिधि), निर्णायक मंडल, आयोजन समिति और जनता की उपस्थिति में, एक गरिमामय समारोह के साथ किया जाता है।',
        },
      },
      {
        title: {
          ja: '選手権大会の表彰内容',
          en: 'Awards at Championships',
          zh: '锦标赛的表彰内容',
          ko: '선수권 대회의 표창 내용',
          es: 'Premios en los campeonatos',
          fr: 'Récompenses lors des championnats',
          ru: 'Награды на чемпионатах',
          hi: 'चैम्पियनशिप में दिए जाने वाले पुरस्कार',
        },
        content: {
          ja: `選手権大会は、それぞれ入賞したチームには個人にメダルと賞状を授与し、全競技者および審判員には参加賞を付与する。
1. 団体競技選手権
競技Ⅰ・Ⅱ・Ⅲの各競技の得点により順位を決定する。第１位のチームは選手権チームとして表彰され、そのチーム全員に対してそれぞれ金メダル１個ずつ授与する。また、第８位までには賞状を授与する。

2. 団体競技種目別選手権
規定演技、自由演技の各演技得点で順位を決定する。これらの各種目の第１位のチームは選手権チームとして表彰され、チーム全員に対して、それぞれ金メダル１個ずつ授与する。同様にして第２位のチームには銀メダル、第３位のチームには銅メダルを授与する。また、第６位までには賞状を授与する。

3. 個人総合選手権
競技Ⅰ・Ⅱ・Ⅲの各競技の得点により順位を決定する。第１位の競技者には日本選手権者として表彰され、これに金メダルを１個を授与する。第２位には銀メダル、第３位には銅メダル１個を授与する。また第８位までには賞状を授与する。

4. 個人種目別選手権
種目別決勝競技、または種目別のそれぞれの得点によって順位を決定する。これらの各種目の第１位の競技者には、選手権者として表彰され、これに金メダル１個を授与する。第２位には銀メダル、第３位には銅メダルを授与する。また第６位までには賞状を授与する。`,
          en: `At championships, medals and certificates are presented to the placing teams and individuals, and all gymnasts and judges receive a participation award.
1. Group championship
Teams are ranked by the scores of Competition I, II or III. The first-place team is honored as the champion team, and each member of the team receives a gold medal. Certificates are presented to the top 8 teams.

2. Group event championships
Teams are ranked by the score of each routine, compulsory and free. The first-place team in each event is honored as the champion team, and each member receives a gold medal. In the same way, each member of the second-place team receives a silver medal and each member of the third-place team a bronze medal. Certificates are presented to the top 6 teams.

3. Individual all-around championship
Gymnasts are ranked by the scores of Competition I, II or III. The first-place gymnast is honored as the national champion and receives a gold medal. The second-place gymnast receives a silver medal and the third-place gymnast a bronze medal. Certificates are presented to the top 8 gymnasts.

4. Individual apparatus championships
Gymnasts are ranked by the score of the apparatus final or of each apparatus. The first-place gymnast on each apparatus is honored as the champion and receives a gold medal. The second-place gymnast receives a silver medal and the third-place gymnast a bronze medal. Certificates are presented to the top 6 gymnasts.`,
          zh: `锦标赛向各获奖的队以个人为单位授予奖牌和奖状，并向全体参赛者及裁判员颁发参赛纪念奖。
1. 团体比赛锦标
按比赛Ⅰ、Ⅱ、Ⅲ各项比赛的得分确定名次。第１名的队作为锦标队受到表彰，并向该队全体队员各授予金牌１枚。此外，向第８名以内的队授予奖状。

2. 团体比赛单项锦标
按规定成套、自选成套各自的成套得分确定名次。这些各项目第１名的队作为锦标队受到表彰，并向全队队员各授予金牌１枚。同样，向第２名的队授予银牌，向第３名的队授予铜牌。此外，向第６名以内的队授予奖状。

3. 个人全能锦标
按比赛Ⅰ、Ⅱ、Ⅲ各项比赛的得分确定名次。第１名的参赛者作为日本锦标获得者受到表彰，并授予金牌１枚。第２名授予银牌，第３名授予铜牌１枚。此外，向第８名以内者授予奖状。

4. 个人单项锦标
按单项决赛或各单项各自的得分确定名次。这些各项目第１名的参赛者作为锦标获得者受到表彰，并授予金牌１枚。第２名授予银牌，第３名授予铜牌。此外，向第６名以内者授予奖状。`,
          ko: `선수권 대회는 각각 입상한 팀에는 개인별로 메달과 상장을 수여하고, 전 경기자 및 심판원에게는 참가상을 부여한다.
1. 단체 경기 선수권
경기 I·II·III 각 경기의 득점에 따라 순위를 결정한다. 제1위 팀은 선수권 팀으로 표창되며, 그 팀 전원에게 각각 금메달 1개씩을 수여한다. 또한 제8위까지에는 상장을 수여한다.

2. 단체 경기 종목별 선수권
규정 연기, 자유 연기의 각 연기 득점으로 순위를 결정한다. 이들 각 종목의 제1위 팀은 선수권 팀으로 표창되며, 팀 전원에게 각각 금메달 1개씩을 수여한다. 마찬가지로 제2위 팀에는 은메달, 제3위 팀에는 동메달을 수여한다. 또한 제6위까지에는 상장을 수여한다.

3. 개인 종합 선수권
경기 I·II·III 각 경기의 득점에 따라 순위를 결정한다. 제1위 경기자는 일본 선수권자로 표창되며, 금메달 1개를 수여한다. 제2위에게는 은메달, 제3위에게는 동메달 1개를 수여한다. 또한 제8위까지에는 상장을 수여한다.

4. 개인 종목별 선수권
종목별 결승 경기 또는 종목별 각각의 득점에 따라 순위를 결정한다. 이들 각 종목의 제1위 경기자는 선수권자로 표창되며, 금메달 1개를 수여한다. 제2위에게는 은메달, 제3위에게는 동메달을 수여한다. 또한 제6위까지에는 상장을 수여한다.`,
          es: `En los campeonatos se entregan medallas y diplomas a los equipos y a los gimnastas premiados, y todos los gimnastas y jueces reciben un obsequio de participación.
1. Campeonato por conjuntos
La clasificación se establece por la puntuación de las competiciones I, II o III. El equipo clasificado en primer lugar es proclamado equipo campeón y cada uno de sus integrantes recibe una medalla de oro. Además, se entrega diploma hasta el octavo puesto.

2. Campeonato por pruebas de conjuntos
La clasificación se establece por la puntuación de cada ejercicio, obligatorio y libre. El equipo clasificado en primer lugar en cada una de estas pruebas es proclamado equipo campeón y cada uno de sus integrantes recibe una medalla de oro. Del mismo modo, los integrantes del equipo clasificado en segundo lugar reciben una medalla de plata y los del tercero, una medalla de bronce. Además, se entrega diploma hasta el sexto puesto.

3. Campeonato de concurso completo individual
La clasificación se establece por la puntuación de las competiciones I, II o III. El gimnasta clasificado en primer lugar es proclamado campeón de Japón y recibe una medalla de oro. El segundo clasificado recibe una medalla de plata y el tercero, una medalla de bronce. Además, se entrega diploma hasta el octavo puesto.

4. Campeonato individual por aparatos
La clasificación se establece por la puntuación de la final por aparatos o de cada aparato. El gimnasta clasificado en primer lugar en cada uno de estos aparatos es proclamado campeón y recibe una medalla de oro. El segundo clasificado recibe una medalla de plata y el tercero, una medalla de bronce. Además, se entrega diploma hasta el sexto puesto.`,
          fr: `Lors des championnats, des médailles et des diplômes sont remis aux ensembles et aux gymnastes classés, et tous les gymnastes et tous les juges reçoivent un prix de participation.
1. Championnat par ensembles
Le classement est établi d'après les notes de la formule I, II ou III. L'ensemble classé premier est sacré champion et chacun de ses membres reçoit une médaille d'or. Un diplôme est remis aux 8 premiers ensembles.

2. Championnats par épreuve pour les ensembles
Le classement est établi d'après la note de chaque exercice, imposé et libre. L'ensemble classé premier de chaque épreuve est sacré champion et chacun de ses membres reçoit une médaille d'or. De la même manière, chaque membre de l'ensemble classé deuxième reçoit une médaille d'argent et chaque membre de l'ensemble classé troisième une médaille de bronze. Un diplôme est remis aux 6 premiers ensembles.

3. Championnat du concours général individuel
Le classement est établi d'après les notes de la formule I, II ou III. Le gymnaste classé premier est sacré champion du Japon et reçoit une médaille d'or. Le deuxième reçoit une médaille d'argent et le troisième une médaille de bronze. Un diplôme est remis aux 8 premiers gymnastes.

4. Championnats individuels par engin
Le classement est établi d'après la note de la finale par engin ou de chaque engin. Le gymnaste classé premier à chaque engin est sacré champion et reçoit une médaille d'or. Le deuxième reçoit une médaille d'argent et le troisième une médaille de bronze. Un diplôme est remis aux 6 premiers gymnastes.`,
          ru: `На чемпионатах призёрам — командам и отдельным гимнастам — вручаются медали и грамоты, а все гимнасты и судьи получают памятный приз участника.
1. Командный чемпионат
Места определяются по оценкам формата I, II или III. Команда, занявшая первое место, чествуется как команда-чемпион, и каждый её участник получает золотую медаль. Грамоты вручаются восьми лучшим командам.

2. Командное первенство в отдельных видах
Места определяются по оценке каждого упражнения — обязательного и произвольного. Команда, занявшая первое место в каждом виде, чествуется как команда-чемпион, и каждый её участник получает золотую медаль. Так же каждый участник команды, занявшей второе место, получает серебряную медаль, а третье место — бронзовую. Грамоты вручаются шести лучшим командам.

3. Первенство в личном многоборье
Места определяются по оценкам формата I, II или III. Гимнаст, занявший первое место, чествуется как чемпион Японии и получает золотую медаль. Второе место — серебряная медаль, третье — бронзовая. Грамоты вручаются восьми лучшим гимнастам.

4. Первенство в отдельных видах
Места определяются по оценке финала в отдельном виде либо по оценке каждого вида. Гимнаст, занявший первое место в каждом виде, чествуется как чемпион и получает золотую медаль. Второе место — серебряная медаль, третье — бронзовая. Грамоты вручаются шести лучшим гимнастам.`,
          hi: `चैम्पियनशिप में, स्थान पाने वाली टीमों के सदस्यों को पदक और प्रमाणपत्र दिए जाते हैं, और सभी जिम्नास्ट तथा निर्णायकों को भागीदारी पुरस्कार दिया जाता है।
1. समूह प्रतियोगिता चैम्पियनशिप
प्रतियोगिता I, II, III की प्रत्येक प्रतियोगिता के अंकों से क्रम निर्धारित किया जाता है। पहले स्थान की टीम को चैम्पियन टीम के रूप में सम्मानित किया जाता है और उस टीम के सभी सदस्यों को एक-एक स्वर्ण पदक दिया जाता है। साथ ही, 8वें स्थान तक प्रमाणपत्र दिए जाते हैं।

2. समूह प्रतियोगिता की स्पर्धावार चैम्पियनशिप
अनिवार्य प्रदर्शन और स्वतंत्र प्रदर्शन के प्रत्येक प्रदर्शन के अंकों से क्रम निर्धारित किया जाता है। इन प्रत्येक स्पर्धाओं में पहले स्थान की टीम को चैम्पियन टीम के रूप में सम्मानित किया जाता है और टीम के सभी सदस्यों को एक-एक स्वर्ण पदक दिया जाता है। इसी प्रकार दूसरे स्थान की टीम को रजत पदक और तीसरे स्थान की टीम को कांस्य पदक दिया जाता है। साथ ही, 6ठे स्थान तक प्रमाणपत्र दिए जाते हैं।

3. व्यक्तिगत ऑल-अराउंड चैम्पियनशिप
प्रतियोगिता I, II, III की प्रत्येक प्रतियोगिता के अंकों से क्रम निर्धारित किया जाता है। पहले स्थान के जिम्नास्ट को निहोन चैम्पियन के रूप में सम्मानित किया जाता है और उसे 1 स्वर्ण पदक दिया जाता है। दूसरे स्थान को रजत पदक और तीसरे स्थान को 1 कांस्य पदक दिया जाता है। साथ ही 8वें स्थान तक प्रमाणपत्र दिए जाते हैं।

4. व्यक्तिगत स्पर्धावार चैम्पियनशिप
स्पर्धावार फाइनल प्रतियोगिता, या प्रत्येक स्पर्धा के अंकों से क्रम निर्धारित किया जाता है। इन प्रत्येक स्पर्धाओं में पहले स्थान के जिम्नास्ट को चैम्पियन के रूप में सम्मानित किया जाता है और उसे 1 स्वर्ण पदक दिया जाता है। दूसरे स्थान को रजत पदक और तीसरे स्थान को कांस्य पदक दिया जाता है। साथ ही 6ठे स्थान तक प्रमाणपत्र दिए जाते हैं।`,
        },
      },
    ],
  },
  {
    title: {
      ja: '競技者',
      en: 'Gymnasts',
      zh: '参赛者',
      ko: '경기자',
      es: 'Gimnastas',
      fr: 'Gymnastes',
      ru: 'Гимнасты',
      hi: 'जिम्नास्ट',
    },
    section: [
      {
        title: {
          ja: '会費の滞納',
          en: 'Unpaid Membership Fees',
          zh: '会费的欠缴',
          ko: '회비 체납',
          es: 'Impago de las cuotas',
          fr: 'Cotisations impayées',
          ru: 'Задолженность по членским взносам',
          hi: 'सदस्यता शुल्क का बकाया',
        },
        content: {
          ja: '会費滞納の加盟団体および未登録の競技者は、本協会主催の競技会に出場できない。',
          en: 'Member organizations with unpaid membership fees and unregistered gymnasts may not take part in competitions organized by the Association.',
          zh: '欠缴会费的加盟单位以及未注册的参赛者，不得参加本协会主办的比赛会。',
          ko: '회비를 체납한 가맹 단체 및 미등록 경기자는 본 협회가 주최하는 경기회에 출전할 수 없다.',
          es: 'Las entidades afiliadas que no estén al corriente del pago de las cuotas y los gimnastas no registrados no pueden participar en las competiciones organizadas por la Federación.',
          fr: "Les associations membres dont la cotisation n'est pas réglée et les gymnastes non licenciés ne peuvent pas participer aux compétitions organisées par la Fédération.",
          ru: 'Организации-члены, имеющие задолженность по членским взносам, и незарегистрированные гимнасты не допускаются к соревнованиям, проводимым Ассоциацией.',
          hi: 'सदस्यता शुल्क बकाया रखने वाले सदस्य संगठन और अपंजीकृत जिम्नास्ट, इस संघ द्वारा आयोजित प्रतियोगिताओं में भाग नहीं ले सकते।',
        },
      },
      {
        title: {
          ja: '出場資格とアマチュア規定',
          en: 'Eligibility and Amateur Rules',
          zh: '参赛资格与业余规定',
          ko: '출전 자격과 아마추어 규정',
          es: 'Requisitos de participación y normas de amateurismo',
          fr: "Admissibilité et règles de l'amateurisme",
          ru: 'Допуск и правила о любительском статусе',
          hi: 'भाग लेने की पात्रता और शौकिया नियम',
        },
        content: {
          ja: '本協会の監督下に行われる競技会には、本協会アマチュア規定によるアマチュアでなければ競技者として承認されない。',
          en: "Only amateurs as defined by the Association's amateur rules are accepted as gymnasts at competitions held under the supervision of the Association.",
          zh: '在本协会监督下举行的比赛会中，只有符合本协会业余规定的业余人员，才被承认为参赛者。',
          ko: '본 협회의 감독하에 실시되는 경기회에는 본 협회 아마추어 규정에 따른 아마추어가 아니면 경기자로 승인되지 않는다.',
          es: 'En las competiciones celebradas bajo la supervisión de la Federación solo se admite como gimnasta a quien tenga la condición de amateur según las normas de amateurismo de la Federación.',
          fr: "Seuls les amateurs au sens des règles de l'amateurisme de la Fédération sont admis comme gymnastes aux compétitions organisées sous l'autorité de celle-ci.",
          ru: 'К соревнованиям, проводимым под контролем Ассоциации, допускаются только гимнасты-любители в значении правил Ассоциации о любительском статусе.',
          hi: 'इस संघ की देखरेख में आयोजित प्रतियोगिताओं में, इस संघ के शौकिया नियमों के अनुसार शौकिया न होने पर जिम्नास्ट के रूप में स्वीकृति नहीं दी जाती।',
        },
      },
      {
        title: {
          ja: '年齢',
          en: 'Age',
          zh: '年龄',
          ko: '연령',
          es: 'Edad',
          fr: 'Âge',
          ru: 'Возраст',
          hi: 'आयु',
        },
        content: {
          ja: '競技者は、競技会の年（４月２日現在）に満12歳に達し、本協会の加盟団体所属の登録会員でなければならない。１１歳以下の競技者は、その連盟の責任のもとに本協会で承認された競技者にかぎり出場することができる。',
          en: 'Gymnasts must be at least 12 years old in the year of the competition (as of April 2) and be registered members of a member organization of the Association. Gymnasts aged 11 or younger may compete only if approved by the Association under the responsibility of their federation.',
          zh: '参赛者必须在比赛会当年（以４月２日为准）年满12岁，并且是本协会加盟单位所属的注册会员。１１岁以下的参赛者，仅限在其联盟的责任之下经本协会承认的参赛者方可参赛。',
          ko: '경기자는 경기회가 열리는 해(4월 2일 현재)에 만 12세에 도달하고 본 협회 가맹 단체 소속의 등록 회원이어야 한다. 11세 이하의 경기자는 해당 연맹의 책임하에 본 협회가 승인한 경기자에 한하여 출전할 수 있다.',
          es: 'Los gimnastas deben haber cumplido 12 años en el año de la competición (a fecha de 2 de abril) y estar registrados como miembros de una entidad afiliada a la Federación. Los gimnastas de 11 años o menos solo pueden participar si la Federación los ha autorizado, bajo la responsabilidad de su federación.',
          fr: "Les gymnastes doivent avoir au moins 12 ans dans l'année de la compétition (au 2 avril) et être licenciés auprès d'une association membre de la Fédération. Les gymnastes de 11 ans ou moins ne peuvent concourir que s'ils ont été autorisés par la Fédération, sous la responsabilité de leur ligue.",
          ru: 'Гимнаст должен достичь 12 лет в год соревнований (по состоянию на 2 апреля) и быть зарегистрированным членом организации-члена Ассоциации. Гимнасты 11 лет и младше могут выступать только с разрешения Ассоциации под ответственность своей федерации.',
          hi: 'जिम्नास्ट की आयु प्रतियोगिता के वर्ष में (2 अप्रैल की स्थिति में) पूरे 12 वर्ष होनी चाहिए और उसे इस संघ के किसी सदस्य संगठन का पंजीकृत सदस्य होना चाहिए। 11 वर्ष या उससे कम आयु के जिम्नास्ट, अपने महासंघ की जिम्मेदारी पर इस संघ द्वारा स्वीकृत होने पर ही भाग ले सकते हैं।',
        },
      },
      {
        title: {
          ja: '競技者の義務',
          en: 'Duties of Gymnasts',
          zh: '参赛者的义务',
          ko: '경기자의 의무',
          es: 'Obligaciones del gimnasta',
          fr: 'Obligations des gymnastes',
          ru: 'Обязанности гимнастов',
          hi: 'जिम्नास्ट के कर्तव्य',
        },
        content: {
          ja: '競技者は、競技会の演技を実施することを第一義とし、この義務を完遂した後でなければ、他の任務を受諾することはできない。',
          en: "A gymnast's first duty is to perform at the competition, and a gymnast may not accept any other role until this duty has been fulfilled.",
          zh: '参赛者以在比赛会中完成成套动作为首要义务，在完成该义务之前，不得接受其他任务。',
          ko: '경기자는 경기회의 연기를 실시하는 것을 제일의 임무로 하며, 이 의무를 완수한 후가 아니면 다른 임무를 수락할 수 없다.',
          es: 'La primera obligación del gimnasta es realizar su ejercicio en la competición, y no puede aceptar ninguna otra función hasta haber cumplido con ella.',
          fr: "Le premier devoir d'un gymnaste est de présenter son exercice en compétition ; il ne peut accepter aucune autre mission avant d'avoir rempli cette obligation.",
          ru: 'Первая обязанность гимнаста — выполнить упражнение на соревнованиях; до её исполнения гимнаст не вправе принимать на себя иные поручения.',
          hi: 'जिम्नास्ट का पहला कर्तव्य प्रतियोगिता में प्रदर्शन करना है, और इस कर्तव्य को पूरा करने से पहले वह कोई अन्य दायित्व स्वीकार नहीं कर सकता।',
        },
      },
      {
        title: {
          ja: '競技会の出場種目',
          en: 'Events a Gymnast May Enter',
          zh: '比赛会的参赛项目',
          ko: '경기회의 출전 종목',
          es: 'Pruebas en las que puede participar el gimnasta',
          fr: 'Épreuves auxquelles un gymnaste peut participer',
          ru: 'Виды программы, в которых может выступать гимнаст',
          hi: 'प्रतियोगिता की स्पर्धाएँ जिनमें भाग लिया जा सकता है',
        },
        content: {
          ja: '競技者は団体競技および個人競技の両方に出場することができる。',
          en: 'Gymnasts may compete in both the group and the individual competition.',
          zh: '参赛者可以同时参加团体比赛和个人比赛。',
          ko: '경기자는 단체 경기 및 개인 경기 양쪽 모두에 출전할 수 있다.',
          es: 'El gimnasta puede participar tanto en la competición por conjuntos como en la competición individual.',
          fr: 'Les gymnastes peuvent participer à la fois à la compétition par ensembles et à la compétition individuelle.',
          ru: 'Гимнаст может выступать и в групповых, и в индивидуальных соревнованиях.',
          hi: 'जिम्नास्ट समूह प्रतियोगिता और व्यक्तिगत प्रतियोगिता दोनों में भाग ले सकते हैं।',
        },
      },
      {
        title: {
          ja: '競技者の服装',
          en: "Gymnasts' Attire",
          zh: '参赛者的服装',
          ko: '경기자의 복장',
          es: 'Vestimenta del gimnasta',
          fr: 'Tenue des gymnastes',
          ru: 'Форма гимнастов',
          hi: 'जिम्नास्ट की पोशाक',
        },
        content: {
          ja: `競技者の服装は身体にフィットする体操用の上着・体操用ズボンで、頭・顔・首・手・腕以外は肌が見える状態にしてはいけない。色は自由で不透明な布とする。装飾のスパンコールは可とするが、固定されていなければならない。また、所属マークを上半身の前面または上腕部で審判が確認できるところにつけなければならない。

1. 体操用の上着の形状
  a. 上着の袖・襟はあってもなくても良いが、密着しているものとする
  b. 襟首を開ける場合、形は自由とするが、カットの内側は左右の首筋とし、前後の開きは両脇の下を結んだラインより下げてはならない
  c. 上着はズボンの外に出してはならない

2. 体操用ズボンの形状
  a. ストレートタイプの場合は、裾を土踏まずの下を通し、スッキリまとめられていなければならない。
  b. ズボンの裾を広げる場合、膝までは密着していること。裾幅は足長を超えてはならない。また、裾が乱れるような場合は減点となる。

3. 所属マークの色は自由とするが、試合着の色と区別できるものとする。形状と大きさは次のいずれかを上回るものとする。
  a. 4.5cm×4.5cmの正方形
  b. 4.0cm×5.0cmの長方形
  c. 一辺が5.0cmの正三角形
  d. 直径が4.5cmの円
  e. 一辺が4.0cmで辺の交わる角度が60°と120°の菱形

4. 団体競技では全員が同型、同色の服装で統一のマークをつけて出場しなければならない。

5. 体操シューズまたは靴下着用で演技しなければならない。色は自由とする。`,
          en: `Gymnasts wear a close-fitting gymnastics top and gymnastics trousers, with no skin showing except on the head, face, neck, hands and arms. Any color may be used, but the fabric must be opaque. Decorative sequins are allowed if they are securely attached. The organization's emblem must be worn on the front of the upper body or on the upper arm where the judges can see it.

1. Gymnastics top
  a. The top may have sleeves and a collar or not, but it must be close-fitting.
  b. If the neck is open, any shape is allowed, but the inner edge of the cut must be at the sides of the neck, and the front and back openings must not go below the line joining the armpits.
  c. The top must be tucked into the trousers.

2. Gymnastics trousers
  a. Straight trousers must pass under the arch of the foot and be neatly finished.
  b. Flared trousers must be close-fitting down to the knees. The width of the hem must not exceed the length of the foot. A deduction is applied if the hems become untidy.

3. The emblem may be any color, but it must be distinguishable from the color of the competition attire. It must be at least as large as one of the following shapes.
  a. A 4.5 cm × 4.5 cm square
  b. A 4.0 cm × 5.0 cm rectangle
  c. An equilateral triangle with 5.0 cm sides
  d. A circle 4.5 cm in diameter
  e. A rhombus with 4.0 cm sides and angles of 60° and 120°

4. In the group competition, all gymnasts must wear attire of the same design and color with the same emblem.

5. Gymnasts must perform in gymnastics shoes or socks, which may be any color.`,
          zh: `参赛者的服装为贴身的体操上衣和体操裤，除头部、面部、颈部、手部、臂部以外不得露出皮肤。颜色不限，面料须不透明。装饰用的亮片可以使用，但必须固定牢固。此外，必须在上身正面或上臂处裁判员能够确认的位置佩戴所属单位标志。

1. 体操上衣的式样
  a. 上衣的袖、领可有可无，但须为贴身式样
  b. 领口敞开时，形状不限，但开口的内缘须在左右颈侧，前后的开口不得低于两腋下的连线
  c. 上衣不得露在裤子外面

2. 体操裤的式样
  a. 直筒式样时，裤脚须从足弓下通过，整齐利落。
  b. 裤脚放宽时，至膝部须贴身。裤脚宽度不得超过脚长。此外，裤脚凌乱时予以扣分。

3. 所属单位标志的颜色不限，但须能与比赛服的颜色相区分。形状和大小须不小于下列任意一种。
  a. 4.5cm×4.5cm的正方形
  b. 4.0cm×5.0cm的长方形
  c. 边长5.0cm的等边三角形
  d. 直径4.5cm的圆形
  e. 边长4.0cm、边的夹角为60°和120°的菱形

4. 团体比赛中，全体队员必须穿着同款式、同颜色的服装并佩戴统一的标志出场。

5. 必须穿体操鞋或袜子完成成套动作。颜色不限。`,
          ko: `경기자의 복장은 신체에 밀착되는 체조용 상의와 체조용 바지로 하며, 머리·얼굴·목·손·팔 이외에는 피부가 보이는 상태가 되어서는 안 된다. 색은 자유이며 불투명한 천으로 한다. 장식용 스팽글은 허용하나 고정되어 있어야 한다. 또한 소속 마크를 상반신의 앞면 또는 위팔 부분 등 심판이 확인할 수 있는 곳에 부착하여야 한다.

1. 체조용 상의의 형태
  a. 상의의 소매·깃은 있어도 없어도 되나 밀착된 것으로 한다
  b. 목둘레를 열 경우 형태는 자유로 하되, 컷의 안쪽은 좌우 목줄기까지로 하고 앞뒤의 개방은 양 겨드랑이 아래를 연결한 선보다 내려가서는 안 된다
  c. 상의는 바지 밖으로 내어서는 안 된다

2. 체조용 바지의 형태
  a. 스트레이트 형인 경우에는 밑단을 발바닥 오목한 부분 아래로 통과시켜 단정하게 정리하여야 한다.
  b. 바지의 밑단을 넓힐 경우 무릎까지는 밀착되어 있어야 한다. 밑단 폭은 발 길이를 넘어서는 안 된다. 또한 밑단이 흐트러지는 경우에는 감점 대상이 된다.

3. 소속 마크의 색은 자유로 하되 경기복의 색과 구별할 수 있는 것으로 한다. 형태와 크기는 다음 중 어느 하나 이상이어야 한다.
  a. 4.5cm×4.5cm의 정사각형
  b. 4.0cm×5.0cm의 직사각형
  c. 한 변이 5.0cm인 정삼각형
  d. 지름이 4.5cm인 원
  e. 한 변이 4.0cm이고 변이 만나는 각도가 60°와 120°인 마름모

4. 단체 경기에서는 전원이 같은 형태, 같은 색의 복장으로 통일된 마크를 부착하고 출전하여야 한다.

5. 체조 슈즈 또는 양말을 착용하고 연기하여야 한다. 색은 자유로 한다.`,
          es: `La vestimenta del gimnasta consiste en una camiseta de gimnasia y un pantalón de gimnasia ajustados al cuerpo, sin que pueda quedar piel a la vista salvo en la cabeza, la cara, el cuello, las manos y los brazos. El color es libre y el tejido debe ser opaco. Se permiten lentejuelas decorativas, siempre que estén bien fijadas. Además, debe llevarse el emblema de la entidad en la parte delantera del torso o en la parte superior del brazo, donde los jueces puedan verlo.

1. Forma de la camiseta de gimnasia
  a. La camiseta puede llevar mangas y cuello o no, pero debe quedar ajustada
  b. Si se abre el cuello, la forma es libre, pero el interior del escote debe quedar a los lados del cuello y las aberturas delantera y trasera no deben bajar de la línea que une las axilas
  c. La camiseta no debe llevarse por fuera del pantalón

2. Forma del pantalón de gimnasia
  a. Si es de tipo recto, el bajo debe pasar por debajo del arco del pie y quedar bien recogido.
  b. Si el pantalón se ensancha, debe quedar ajustado hasta la rodilla. El ancho del bajo no debe superar la longitud del pie. Además, si los bajos se desordenan, se aplica una penalización.

3. El color del emblema de la entidad es libre, pero debe distinguirse del color de la vestimenta de competición. Su forma y su tamaño deben ser iguales o superiores a una de las siguientes medidas.
  a. Un cuadrado de 4.5cm×4.5cm
  b. Un rectángulo de 4.0cm×5.0cm
  c. Un triángulo equilátero de 5.0cm de lado
  d. Un círculo de 4.5cm de diámetro
  e. Un rombo de 4.0cm de lado con ángulos de 60° y 120°

4. En la competición por conjuntos, todos los gimnastas deben competir con una vestimenta del mismo modelo y del mismo color y con un emblema común.

5. El ejercicio debe realizarse con zapatillas de gimnasia o con calcetines. El color es libre.`,
          fr: `Les gymnastes portent un haut et un pantalon de gymnastique près du corps ; aucune partie de la peau ne doit être visible en dehors de la tête, du visage, du cou, des mains et des bras. La couleur est libre, mais le tissu doit être opaque. Les paillettes décoratives sont autorisées si elles sont solidement fixées. L'écusson de l'association doit être porté sur le devant du haut du corps ou sur le bras, à un endroit visible par les juges.

1. Forme du haut de gymnastique
  a. Le haut peut avoir ou non des manches et un col, mais il doit être près du corps.
  b. Si l'encolure est ouverte, la forme est libre, mais le bord intérieur de la découpe doit se situer sur les côtés du cou, et les ouvertures avant et arrière ne doivent pas descendre sous la ligne joignant les aisselles.
  c. Le haut doit être rentré dans le pantalon.

2. Forme du pantalon de gymnastique
  a. Le pantalon droit doit passer sous la voûte plantaire et être ajusté proprement.
  b. Le pantalon évasé doit être près du corps jusqu'aux genoux. La largeur du bas ne doit pas dépasser la longueur du pied. Une pénalité est appliquée si le bas du pantalon se défait.

3. La couleur de l'écusson est libre, mais elle doit se distinguer de celle de la tenue de compétition. Ses dimensions doivent être au moins égales à l'une des formes suivantes.
  a. Un carré de 4,5 cm × 4,5 cm
  b. Un rectangle de 4,0 cm × 5,0 cm
  c. Un triangle équilatéral de 5,0 cm de côté
  d. Un cercle de 4,5 cm de diamètre
  e. Un losange de 4,0 cm de côté, avec des angles de 60° et 120°

4. En compétition par ensembles, tous les gymnastes doivent porter une tenue de forme et de couleur identiques, avec le même écusson.

5. Les gymnastes doivent présenter leur exercice en chaussons de gymnastique ou en chaussettes, de la couleur de leur choix.`,
          ru: `Гимнаст выступает в облегающей гимнастической майке и гимнастических брюках; открытыми могут быть только голова, лицо, шея, кисти и руки. Цвет любой, ткань непрозрачная. Декоративные пайетки допускаются, если они надёжно закреплены. Эмблема организации должна быть размещена спереди на верхней части тела или на плече так, чтобы её видели судьи.

1. Гимнастическая майка
  a. Рукава и воротник могут быть или отсутствовать, но майка должна плотно прилегать.
  b. Если вырез открытый, форма любая, но внутренний край выреза проходит по бокам шеи, а вырез спереди и сзади не должен опускаться ниже линии, соединяющей подмышки.
  c. Майка должна быть заправлена в брюки.

2. Гимнастические брюки
  a. Прямые брюки должны проходить под сводом стопы и быть аккуратно подобраны.
  b. Расклешённые брюки должны плотно прилегать до колен. Ширина низа не должна превышать длину стопы. Если низ брюк приходит в беспорядок, применяется сбавка.

3. Цвет эмблемы любой, но он должен отличаться от цвета формы. Форма и размер эмблемы должны быть не меньше одного из следующих вариантов.
  a. квадрат 4,5 см × 4,5 см
  b. прямоугольник 4,0 см × 5,0 см
  c. равносторонний треугольник со стороной 5,0 см
  d. круг диаметром 4,5 см
  e. ромб со стороной 4,0 см и углами 60° и 120°

4. В групповых соревнованиях все гимнасты выступают в форме одного фасона и цвета с одинаковой эмблемой.

5. Упражнение выполняется в гимнастических туфлях или носках. Цвет любой.`,
          hi: `जिम्नास्ट की पोशाक शरीर से चिपकी हुई जिम्नास्टिक की ऊपरी पोशाक और जिम्नास्टिक की पतलून होगी, और सिर, चेहरा, गर्दन, हाथ, भुजाओं के अलावा त्वचा दिखाई नहीं देनी चाहिए। रंग स्वतंत्र है और कपड़ा अपारदर्शी होगा। सजावटी सितारे लगाए जा सकते हैं, पर वे मजबूती से जुड़े होने चाहिए। साथ ही, संगठन का चिह्न शरीर के ऊपरी भाग के सामने या ऊपरी भुजा पर, जहाँ निर्णायक देख सकें, लगाना चाहिए।

1. जिम्नास्टिक की ऊपरी पोशाक का रूप
  a. ऊपरी पोशाक में आस्तीन और कॉलर हों या न हों, पर वह शरीर से चिपकी होनी चाहिए
  b. गला खुला रखने पर आकार स्वतंत्र है, पर कट का भीतरी भाग गर्दन के दोनों ओर तक होगा, और आगे-पीछे का खुलापन दोनों बगलों को जोड़ने वाली रेखा से नीचे नहीं होना चाहिए
  c. ऊपरी पोशाक को पतलून के बाहर नहीं रखना चाहिए

2. जिम्नास्टिक की पतलून का रूप
  a. सीधी पतलून के मामले में, निचला सिरा तलवे के बीच से होकर गुजरना चाहिए और साफ-सुथरा बँधा होना चाहिए।
  b. पतलून का निचला भाग चौड़ा करने पर, घुटनों तक वह चिपकी होनी चाहिए। निचले सिरे की चौड़ाई पैर की लंबाई से अधिक नहीं होनी चाहिए। साथ ही, निचला सिरा अस्त-व्यस्त होने पर कटौती की जाती है।

3. संगठन के चिह्न का रंग स्वतंत्र है, पर वह प्रतियोगिता पोशाक के रंग से अलग दिखना चाहिए। आकार और माप निम्नलिखित में से किसी एक से बड़ा होगा।
  a. 4.5cm×4.5cm का वर्ग
  b. 4.0cm×5.0cm का आयत
  c. 5.0cm भुजा वाला समबाहु त्रिभुज
  d. 4.5cm व्यास वाला वृत्त
  e. 4.0cm भुजा और भुजाओं के मिलने के कोण 60° तथा 120° वाला समचतुर्भुज

4. समूह प्रतियोगिता में सभी को एक ही रूप, एक ही रंग की पोशाक में एक समान चिह्न लगाकर भाग लेना चाहिए।

5. जिम्नास्टिक जूते या मोजे पहनकर प्रदर्शन करना चाहिए। रंग स्वतंत्र है।`,
        },
      },
      {
        title: {
          ja: '競技者の権利',
          en: 'Rights of Gymnasts',
          zh: '参赛者的权利',
          ko: '경기자의 권리',
          es: 'Derechos del gimnasta',
          fr: 'Droits des gymnastes',
          ru: 'Права гимнастов',
          hi: 'जिम्नास्ट के अधिकार',
        },
        content: {
          ja: `競技者には以下の権利が保障される

1. 演技は採点規則の規約によって正確で公平に採点される。
2. 本会場での公式練習と綿密に準備された演技場での演技が実施できる。
3. 演技終了後、得点が速やかに表示される。または当該競技会の競技規則に応じた公開がされる。
4. 演技の中断が競技者に原因がない場合や裁定審判部に認められた不可抗力の事については、演技全体のやり直しができる。
5. 競技会でのすべての得点は、主催者より公式演技結果として受け取ることができる。`,
          en: `Gymnasts are guaranteed the following rights.

1. Their routines are scored accurately and fairly according to the Code of Points.
2. They may take part in official training at the venue and perform on a carefully prepared floor.
3. Their scores are displayed promptly after the routine, or published according to the rules of the competition.
4. They may repeat the whole routine if it was interrupted for a reason not caused by the gymnast, or by force majeure recognized by the Appeals Jury.
5. They may receive all their scores at the competition from the organizer as official results.`,
          zh: `参赛者的下列权利受到保障

1. 成套动作依照评分规则的规定，准确、公正地评分。
2. 可以在本场馆进行正式训练，并在精心准备好的场地上完成成套动作。
3. 成套动作结束后迅速显示得分。或者按该比赛会的比赛规则予以公布。
4. 成套动作的中断非参赛者原因所致，或属仲裁裁判部认定的不可抗力时，可以重做整套动作。
5. 比赛会中的所有得分，可以作为正式的成套动作成绩从主办方处获得。`,
          ko: `경기자에게는 다음의 권리가 보장된다

1. 연기는 채점 규칙의 규정에 따라 정확하고 공평하게 채점된다.
2. 본 경기장에서의 공식 연습과 면밀하게 준비된 연기장에서의 연기를 실시할 수 있다.
3. 연기 종료 후 득점이 신속하게 표시된다. 또는 해당 경기회의 경기 규칙에 따라 공개된다.
4. 연기의 중단이 경기자에게 원인이 없는 경우나 재정 심판부가 인정한 불가항력의 사유에 대해서는 연기 전체를 다시 실시할 수 있다.
5. 경기회에서의 모든 득점은 주최자로부터 공식 연기 결과로 받을 수 있다.`,
          es: `Al gimnasta se le garantizan los siguientes derechos

1. Su ejercicio se puntúa de forma exacta e imparcial conforme a lo dispuesto en el código de puntuación.
2. Puede realizar el entrenamiento oficial en la propia sede y actuar sobre un practicable cuidadosamente preparado.
3. Al terminar el ejercicio, la puntuación se muestra sin demora, o se hace pública según el reglamento de la competición correspondiente.
4. Cuando el ejercicio se interrumpe por una causa ajena al gimnasta o por fuerza mayor reconocida por el jurado de apelación, puede repetirse el ejercicio completo.
5. Puede recibir del organizador todas las puntuaciones de la competición como resultados oficiales.`,
          fr: `Les droits suivants sont garantis aux gymnastes.

1. Leur exercice est noté avec exactitude et équité conformément au code de pointage.
2. Ils peuvent participer à l'entraînement officiel dans la salle et présenter leur exercice sur un praticable soigneusement préparé.
3. Leur note est affichée rapidement après l'exercice, ou publiée selon le règlement de la compétition.
4. Ils peuvent reprendre l'exercice en entier si celui-ci a été interrompu pour une cause qui ne leur est pas imputable, ou pour un cas de force majeure reconnu par le jury d'appel.
5. Ils peuvent recevoir de l'organisateur l'ensemble de leurs notes de la compétition, à titre de résultats officiels.`,
          ru: `Гимнастам гарантируются следующие права.

1. Упражнение оценивается точно и беспристрастно по Правилам судейства.
2. Возможность участвовать в официальной тренировке в зале соревнований и выступать на тщательно подготовленном ковре.
3. Оценка показывается сразу после упражнения либо публикуется в порядке, предусмотренном правилами данных соревнований.
4. Если упражнение было прервано не по вине гимнаста либо по признанным апелляционным жюри обстоятельствам непреодолимой силы, упражнение можно выполнить заново целиком.
5. Все свои оценки на соревнованиях гимнаст может получить у организатора как официальный результат.`,
          hi: `जिम्नास्ट को निम्नलिखित अधिकारों की गारंटी दी जाती है

1. प्रदर्शन का अंक निर्धारण, अंक निर्धारण नियमों के प्रावधानों के अनुसार सही और निष्पक्ष रूप से किया जाता है।
2. वे मुख्य स्थल पर आधिकारिक अभ्यास कर सकते हैं और भली-भाँति तैयार किए गए फ़्लोर पर प्रदर्शन कर सकते हैं।
3. प्रदर्शन समाप्त होने के बाद अंक शीघ्र दिखाए जाते हैं। या उस प्रतियोगिता के नियमों के अनुसार सार्वजनिक किए जाते हैं।
4. यदि प्रदर्शन में रुकावट का कारण जिम्नास्ट न हो, या अपील निर्णायक मंडल द्वारा स्वीकृत कोई अपरिहार्य कारण हो, तो पूरा प्रदर्शन दोबारा किया जा सकता है।
5. प्रतियोगिता के सभी अंक, आयोजक से आधिकारिक प्रदर्शन परिणाम के रूप में प्राप्त किए जा सकते हैं।`,
        },
      },
      {
        title: {
          ja: '競技者の規律',
          en: 'Discipline of Gymnasts',
          zh: '参赛者的纪律',
          ko: '경기자의 규율',
          es: 'Disciplina del gimnasta',
          fr: 'Discipline des gymnastes',
          ru: 'Дисциплина гимнастов',
          hi: 'जिम्नास्ट का अनुशासन',
        },
        content: {
          ja: `競技者は以下の規則を厳守しなければならない。

1. 競技者と審判は、お互いに信頼と尊重をしなければならない。
2. 競技規則及び採点規則を熟知し、それに従って競技者としてふさわしい行動をしなければならない。
3. 採点規則に基づいた採点結果を受け入れなければならない。
4. マイクロホンまたは主任審判員の呼び出しを受けた後でなければ演技面に入ることはできない。また、呼び出し後は速やかに入場しなければならない。
5. 演技終了後、競技者は速やかに演技面より退場しなければならない。
6. 競技場で指定された場所以外でのウォーミングアップをしてはならない。
7. 競技者は演技中、審判員に話しかけてはならない。
8. 規律なく乱暴な言動をとったり、他の競技者の妨害をしてはならない。
9. 競技者は演技中に故意に号令などの合図をしたり、話したりしてはいけない。
10. 競技者は演技中に試合を放棄する態度をとってはいけない。
11. 競技エリア内において、観衆に対して不快な言動をとってはならない。`,
          en: `Gymnasts must strictly observe the following rules.

1. Gymnasts and judges must trust and respect each other.
2. Gymnasts must know the competition rules and the Code of Points well and behave as befits a gymnast.
3. Gymnasts must accept the results of scoring under the Code of Points.
4. Gymnasts may enter the floor area only after being called by the announcer or the chief judge, and must enter promptly once called.
5. Gymnasts must leave the floor area promptly after their routine.
6. Gymnasts must not warm up anywhere in the competition hall other than the designated areas.
7. Gymnasts must not speak to the judges during a routine.
8. Gymnasts must not behave in an undisciplined or rough manner or disturb other gymnasts.
9. Gymnasts must not deliberately give verbal cues or talk during a routine.
10. Gymnasts must not show an attitude of giving up during a routine.
11. Gymnasts must not behave offensively toward the audience in the competition area.`,
          zh: `参赛者必须严格遵守以下规则。

1. 参赛者与裁判员必须相互信任、相互尊重。
2. 必须熟知比赛规则及评分规则，并据此做出与参赛者身份相称的行为。
3. 必须接受依据评分规则得出的评分结果。
4. 只有在接到广播或主裁判员的召唤之后，方可进入场地。此外，接到召唤后必须迅速入场。
5. 成套动作结束后，参赛者必须迅速退出场地。
6. 不得在比赛场地内指定场所以外的地方进行准备活动。
7. 参赛者在成套动作进行中不得与裁判员交谈。
8. 不得有不守纪律的粗暴言行，或妨碍其他参赛者。
9. 参赛者在成套动作进行中不得故意发出口令等信号或讲话。
10. 参赛者在成套动作进行中不得表现出放弃比赛的态度。
11. 在比赛区域内不得对观众做出令人不快的言行。`,
          ko: `경기자는 다음 규칙을 엄수하여야 한다.

1. 경기자와 심판은 서로 신뢰하고 존중하여야 한다.
2. 경기 규칙 및 채점 규칙을 숙지하고 그에 따라 경기자로서 어울리는 행동을 하여야 한다.
3. 채점 규칙에 근거한 채점 결과를 받아들여야 한다.
4. 마이크 또는 주임 심판원의 호출을 받은 후가 아니면 연기 면에 들어갈 수 없다. 또한 호출 후에는 신속하게 입장하여야 한다.
5. 연기 종료 후 경기자는 신속하게 연기 면에서 퇴장하여야 한다.
6. 경기장에서 지정된 장소 이외에서 워밍업을 하여서는 안 된다.
7. 경기자는 연기 중에 심판원에게 말을 걸어서는 안 된다.
8. 규율 없이 난폭한 언동을 하거나 다른 경기자를 방해하여서는 안 된다.
9. 경기자는 연기 중에 고의로 구령 등의 신호를 보내거나 말을 하여서는 안 된다.
10. 경기자는 연기 중에 경기를 포기하는 태도를 취하여서는 안 된다.
11. 경기 구역 내에서 관중에게 불쾌한 언동을 하여서는 안 된다.`,
          es: `El gimnasta debe observar estrictamente las siguientes reglas.

1. Los gimnastas y los jueces deben confiar el uno en el otro y respetarse mutuamente.
2. Debe conocer a fondo el reglamento de competición y el código de puntuación y comportarse conforme a ellos como corresponde a un gimnasta.
3. Debe aceptar los resultados de la puntuación establecidos conforme al código de puntuación.
4. No puede entrar en el practicable hasta que se le llame por megafonía o lo llame el juez principal. Una vez llamado, debe entrar sin demora.
5. Al terminar el ejercicio, el gimnasta debe abandonar el practicable sin demora.
6. No debe calentar en ningún lugar del recinto de competición distinto del designado.
7. El gimnasta no debe dirigir la palabra a los jueces durante el ejercicio.
8. No debe comportarse de forma indisciplinada ni violenta, ni molestar a otros gimnastas.
9. El gimnasta no debe dar voces de mando u otras señales de forma intencionada ni hablar durante el ejercicio.
10. El gimnasta no debe mostrar durante el ejercicio una actitud de abandono de la competición.
11. Dentro del área de competición, no debe dirigirse al público de forma ofensiva.`,
          fr: `Les gymnastes doivent respecter scrupuleusement les règles suivantes.

1. Les gymnastes et les juges doivent se faire confiance et se respecter mutuellement.
2. Les gymnastes doivent bien connaître le règlement des compétitions et le code de pointage, et se comporter comme il sied à un gymnaste.
3. Les gymnastes doivent accepter les résultats de la notation établie selon le code de pointage.
4. Les gymnastes ne peuvent entrer sur le praticable qu'après avoir été appelés au micro ou par le juge-arbitre, et doivent y entrer sans tarder une fois appelés.
5. Les gymnastes doivent quitter le praticable sans tarder à la fin de leur exercice.
6. Les gymnastes ne doivent pas s'échauffer ailleurs que dans les zones prévues à cet effet dans la salle de compétition.
7. Les gymnastes ne doivent pas s'adresser aux juges pendant un exercice.
8. Les gymnastes ne doivent pas adopter un comportement indiscipliné ou brutal, ni gêner les autres gymnastes.
9. Les gymnastes ne doivent pas donner volontairement de signaux verbaux ni parler pendant l'exercice.
10. Les gymnastes ne doivent pas adopter une attitude d'abandon pendant l'exercice.
11. Les gymnastes ne doivent pas avoir de comportement déplacé envers le public dans l'aire de compétition.`,
          ru: `Гимнасты обязаны строго соблюдать следующие правила.

1. Гимнасты и судьи обязаны доверять и уважать друг друга.
2. Гимнаст обязан хорошо знать Правила соревнований и Правила судейства и вести себя подобающим образом.
3. Гимнаст обязан принимать результаты судейства, полученные по Правилам судейства.
4. Выходить на ковёр можно только после вызова по микрофону или вызова старшего судьи; после вызова следует выходить без промедления.
5. После упражнения гимнаст обязан без промедления покинуть ковёр.
6. Разминаться в соревновательном зале можно только в отведённых местах.
7. Во время упражнения гимнаст не должен заговаривать с судьями.
8. Гимнаст не должен вести себя недисциплинированно и грубо и мешать другим гимнастам.
9. Во время упражнения гимнаст не должен намеренно подавать команды или разговаривать.
10. Во время упражнения гимнаст не должен показывать, что отказывается от борьбы.
11. В соревновательной зоне гимнаст не должен допускать неуважительных действий в адрес зрителей.`,
          hi: `जिम्नास्ट को निम्नलिखित नियमों का कड़ाई से पालन करना चाहिए।

1. जिम्नास्ट और निर्णायक को एक-दूसरे पर भरोसा और एक-दूसरे का सम्मान करना चाहिए।
2. प्रतियोगिता नियमों और अंक निर्धारण नियमों को भली-भाँति जानकर, उनके अनुसार जिम्नास्ट के अनुरूप आचरण करना चाहिए।
3. अंक निर्धारण नियमों के आधार पर किए गए अंक निर्धारण के परिणाम को स्वीकार करना चाहिए।
4. माइक्रोफ़ोन से या प्रधान निर्णायक द्वारा बुलाए जाने के बाद ही फ़्लोर पर आया जा सकता है। साथ ही, बुलाए जाने पर शीघ्र प्रवेश करना चाहिए।
5. प्रदर्शन समाप्त होने के बाद जिम्नास्ट को शीघ्र फ़्लोर से बाहर जाना चाहिए।
6. प्रतियोगिता स्थल में निर्धारित स्थान के अलावा कहीं और वार्म-अप नहीं करना चाहिए।
7. जिम्नास्ट को प्रदर्शन के दौरान निर्णायकों से बात नहीं करनी चाहिए।
8. अनुशासनहीन या उग्र व्यवहार नहीं करना चाहिए और न ही अन्य जिम्नास्ट में बाधा डालनी चाहिए।
9. जिम्नास्ट को प्रदर्शन के दौरान जानबूझकर संकेत देने या बात करने की मनाही है।
10. जिम्नास्ट को प्रदर्शन के दौरान प्रतियोगिता छोड़ देने जैसा रवैया नहीं दिखाना चाहिए।
11. प्रतियोगिता क्षेत्र में दर्शकों के प्रति अप्रिय व्यवहार नहीं करना चाहिए।`,
        },
      },
    ],
  },
  {
    title: {
      ja: '監督者・コーチ',
      en: 'Team Managers and Coaches',
      zh: '领队与教练',
      ko: '감독자·코치',
      es: 'Entrenadores y técnicos',
      fr: "Responsables d'équipe et entraîneurs",
      ru: 'Представители команд и тренеры',
      hi: 'कोच',
    },
    section: [
      {
        title: {
          ja: '監督者・コーチの責務と規律',
          en: 'Duties and Discipline of Team Managers and Coaches',
          zh: '领队与教练的职责和纪律',
          ko: '감독자·코치의 책무와 규율',
          es: 'Funciones y disciplina de los entrenadores y los técnicos',
          fr: "Obligations et discipline des responsables d'équipe et des entraîneurs",
          ru: 'Обязанности и дисциплина представителей команд и тренеров',
          hi: 'कोच के दायित्व और अनुशासन',
        },
        content: {
          ja: `監督者およびコーチは競技会が円滑に開催できるために、マナーやモラルを守るとともに、以下の規則を厳守しなければならない。

1. 監督者は所属選手に対しすべての責任を負い、競技が円滑に進行するための指示を与えなければならない。
2. 監督者は競技開始前に開催される監督会議に出席しなければならない。
3. 監督者は監督会議の内容を所属選手および関係者への連絡を報告する責任がある。
4. 競技会が円滑に開催できるために大会競技規則を厳守しなければならない。
5. 監督者は演技面に位置できない。
6. 監督者は緊急時を除き、演技中の競技者に干渉してはならない。
7. 監督者は演技城内において、観衆や競技役員に対して不愉快な行動をとってはならない。
8. 採点結果についての疑問点について審判長に問い合わせはできるが、審判員個人へ直接の抗議はしてはならない。,
`,
          en: `So that the competition runs smoothly, team managers and coaches must observe good manners and ethics and strictly follow the rules below.

1. Team managers are fully responsible for their gymnasts and must give the instructions needed for the competition to run smoothly.
2. Team managers must attend the team managers' meeting held before the competition.
3. Team managers are responsible for passing on the content of the team managers' meeting to their gymnasts and others concerned.
4. Team managers must strictly follow the competition rules so that the competition runs smoothly.
5. Team managers may not stand on the floor area.
6. Team managers must not interfere with a gymnast during a routine except in an emergency.
7. Team managers must not behave offensively toward the audience or officials in the competition area.
8. Team managers may ask the Jury President about questions regarding scores, but must not protest directly to individual judges.`,
          zh: `为使比赛会顺利举行，领队和教练必须遵守礼仪与道德，同时必须严格遵守以下规则。

1. 领队对所属运动员负有全部责任，必须给予使比赛顺利进行的指示。
2. 领队必须出席比赛开始前召开的领队会议。
3. 领队有责任将领队会议的内容传达给所属运动员及相关人员。
4. 为使比赛会顺利举行，必须严格遵守大会比赛规则。
5. 领队不得进入场地。
6. 除紧急情况外，领队不得干扰正在完成成套动作的参赛者。
7. 领队在比赛场地内不得对观众或竞赛工作人员做出令人不快的行为。
8. 对评分结果的疑问可以向裁判长询问，但不得直接向裁判员个人提出抗议。
`,
          ko: `감독자 및 코치는 경기회가 원활하게 개최될 수 있도록 매너와 도덕을 지키는 동시에 다음 규칙을 엄수하여야 한다.

1. 감독자는 소속 선수에 대하여 모든 책임을 지며, 경기가 원활하게 진행되도록 지시하여야 한다.
2. 감독자는 경기 개시 전에 개최되는 감독 회의에 출석하여야 한다.
3. 감독자는 감독 회의의 내용을 소속 선수 및 관계자에게 연락하고 보고할 책임이 있다.
4. 경기회가 원활하게 개최될 수 있도록 대회 경기 규칙을 엄수하여야 한다.
5. 감독자는 연기 면에 위치할 수 없다.
6. 감독자는 긴급 시를 제외하고 연기 중인 경기자에게 간섭하여서는 안 된다.
7. 감독자는 경기장 내에서 관중이나 경기 임원에게 불쾌한 행동을 하여서는 안 된다.
8. 채점 결과에 대한 의문점에 관하여 심판장에게 문의할 수는 있으나, 심판원 개인에게 직접 항의하여서는 안 된다.,
`,
          es: `Para que la competición se desarrolle con normalidad, los entrenadores y los técnicos deben mantener unas buenas formas y una conducta ética y observar estrictamente las siguientes reglas.

1. El entrenador es plenamente responsable de sus gimnastas y debe darles las indicaciones necesarias para que la competición se desarrolle con normalidad.
2. El entrenador debe asistir a la reunión de entrenadores que se celebra antes del comienzo de la competición.
3. El entrenador es responsable de transmitir el contenido de la reunión de entrenadores a sus gimnastas y a las demás personas implicadas.
4. Debe observar estrictamente el reglamento de la competición para que esta se desarrolle con normalidad.
5. El entrenador no puede situarse en el practicable.
6. Salvo en caso de emergencia, el entrenador no debe interferir en el gimnasta durante el ejercicio.
7. Dentro del recinto de competición, el entrenador no debe comportarse de forma ofensiva hacia el público ni hacia los oficiales de la competición.
8. Puede dirigirse al juez árbitro para plantear dudas sobre los resultados de la puntuación, pero no debe protestar directamente ante un juez a título individual.
`,
          fr: `Afin que la compétition se déroule sans encombre, les responsables d'équipe et les entraîneurs doivent faire preuve de savoir-vivre et d'éthique et respecter scrupuleusement les règles suivantes.

1. Le responsable d'équipe est pleinement responsable de ses gymnastes et doit donner les consignes nécessaires au bon déroulement de la compétition.
2. Le responsable d'équipe doit assister à la réunion des entraîneurs organisée avant la compétition.
3. Le responsable d'équipe est chargé de transmettre le contenu de cette réunion à ses gymnastes et aux personnes concernées.
4. Le responsable d'équipe doit respecter scrupuleusement le règlement de la compétition afin que celle-ci se déroule sans encombre.
5. Le responsable d'équipe ne peut pas se tenir sur le praticable.
6. Le responsable d'équipe ne doit pas intervenir auprès d'un gymnaste pendant son exercice, sauf en cas d'urgence.
7. Le responsable d'équipe ne doit pas avoir de comportement déplacé envers le public ou les officiels dans l'aire de compétition.
8. Le responsable d'équipe peut interroger le président du jury sur un point de notation, mais ne doit jamais protester directement auprès d'un juge.`,
          ru: `Чтобы соревнования проходили без сбоев, представители команд и тренеры обязаны соблюдать нормы поведения и этики, а также строго следовать правилам ниже.

1. Представитель команды несёт полную ответственность за своих гимнастов и даёт указания, необходимые для бесперебойного хода соревнований.
2. Представитель команды обязан присутствовать на совещании представителей команд перед началом соревнований.
3. Представитель команды обязан довести содержание совещания до своих гимнастов и других заинтересованных лиц.
4. Представитель команды обязан строго соблюдать правила соревнований, чтобы они проходили без сбоев.
5. Представитель команды не может находиться на ковре.
6. Кроме экстренных случаев, представитель команды не должен вмешиваться в работу гимнаста во время упражнения.
7. В соревновательной зоне представитель команды не должен допускать неуважительных действий в адрес зрителей и официальных лиц.
8. По вопросам об оценках можно обращаться к главному судье, но протестовать напрямую отдельным судьям запрещено.`,
          hi: `कोच को, प्रतियोगिता के सुचारु आयोजन के लिए, शिष्टाचार और नैतिकता का पालन करते हुए निम्नलिखित नियमों का कड़ाई से पालन करना चाहिए।

1. कोच अपने जिम्नास्ट के लिए पूरी जिम्मेदारी लेता है और प्रतियोगिता के सुचारु संचालन के लिए निर्देश देता है।
2. कोच को प्रतियोगिता शुरू होने से पहले होने वाली कोच बैठक में उपस्थित होना चाहिए।
3. कोच की जिम्मेदारी है कि वह कोच बैठक की बातें अपने जिम्नास्ट और संबंधित लोगों तक पहुँचाए।
4. प्रतियोगिता के सुचारु आयोजन के लिए प्रतियोगिता नियमों का कड़ाई से पालन करना चाहिए।
5. कोच फ़्लोर पर खड़ा नहीं हो सकता।
6. कोच को आपात स्थिति को छोड़कर, प्रदर्शन कर रहे जिम्नास्ट में हस्तक्षेप नहीं करना चाहिए।
7. कोच को प्रतियोगिता क्षेत्र में दर्शकों या प्रतियोगिता अधिकारियों के प्रति अप्रिय व्यवहार नहीं करना चाहिए।
8. अंक निर्धारण के परिणाम के बारे में संदेह होने पर मुख्य निर्णायक से पूछा जा सकता है, पर किसी निर्णायक से सीधे आपत्ति नहीं करनी चाहिए।`,
        },
      },
      {
        title: {
          ja: '第43条 規律違反',
          en: 'Violations of Discipline',
          zh: '第43条 违反纪律',
          ko: '제43조 규율 위반',
          es: 'Artículo 43 Infracciones de la disciplina',
          fr: 'Manquements à la discipline',
          ru: 'Статья 43. Нарушения дисциплины',
          hi: 'अनुच्छेद 43 अनुशासन का उल्लंघन',
        },
        content: {
          ja: '競技者および監督・コーチに規律違反があった場合は、採点規則によって減点または処分をされることがある。',
          en: 'If a gymnast, team manager or coach violates the rules of discipline, a deduction or other penalty may be imposed under the Code of Points.',
          zh: '参赛者及领队、教练有违反纪律的行为时，可依据评分规则予以扣分或处分。',
          ko: '경기자 및 감독·코치에게 규율 위반이 있었을 경우에는 채점 규칙에 따라 감점 또는 처분을 받을 수 있다.',
          es: 'Si un gimnasta, un entrenador o un técnico comete una infracción de la disciplina, puede imponérsele una penalización o una sanción conforme al código de puntuación.',
          fr: "En cas de manquement à la discipline de la part d'un gymnaste, d'un responsable d'équipe ou d'un entraîneur, une pénalité ou une autre sanction peut être prononcée en application du code de pointage.",
          ru: 'При нарушении дисциплины гимнастом, представителем команды или тренером по Правилам судейства может быть применена сбавка либо иное взыскание.',
          hi: 'जिम्नास्ट तथा कोच द्वारा अनुशासन का उल्लंघन होने पर, अंक निर्धारण नियमों के अनुसार कटौती या दंड दिया जा सकता है।',
        },
      },
    ],
  },
  {
    title: {
      ja: '一般的な競技規則',
      en: 'General Competition Rules',
      zh: '一般比赛规则',
      ko: '일반적인 경기 규칙',
      es: 'Reglas generales de competición',
      fr: 'Règles générales de compétition',
      ru: 'Общие правила соревнований',
      hi: 'सामान्य प्रतियोगिता नियम',
    },
    section: [
      {
        title: {
          ja: '新体操の演技',
          en: 'Rhythmic Gymnastics Routines',
          zh: '艺术体操的成套动作',
          ko: '리듬체조의 연기',
          es: 'El ejercicio de gimnasia rítmica',
          fr: "L'exercice de gymnastique rythmique",
          ru: 'Упражнения в художественной гимнастике',
          hi: 'लयबद्ध जिम्नास्टिक का प्रदर्शन',
        },
        content: {
          ja: '新体操の演技は、徒手系要素と回転系要素を織り交ぜ、団体競技では６人の同調性と力強さを、個人競技では４種類の手具の特性に合わせた操作を、体を極限まで運動させながら表現する種目である。各競技に求められた要素を全て含み、高い技術的価値と各種要素の多様性音楽と動きの関係や独創性を持ち、すべての運動が合理性と安定性を持って実施されなければならない。',
          en: "A men's rhythmic gymnastics routine combines free-hand elements and tumbling elements. In the group competition it expresses the synchronization and power of six gymnasts, and in the individual competition it expresses handling suited to the character of each of the four apparatus, while moving the body to its limits. A routine must contain all the elements required in each competition, have high technical value, a variety of elements, a good relationship between music and movement, and originality, and every movement must be performed rationally and with stability.",
          zh: '艺术体操的成套动作，是将徒手类要素与转体类要素交织在一起，在团体比赛中表现６人的协调一致与力度，在个人比赛中表现契合４种器械特性的操作，并将身体运动到极限加以表现的项目。必须包含各项比赛所要求的全部要素，具有很高的技术价值、各类要素的多样性、音乐与动作的关系以及独创性，所有动作都必须合理、稳定地完成。',
          ko: '리듬체조의 연기는 신체계 요소와 회전계 요소를 섞어, 단체 경기에서는 6명의 동조성과 힘찬 느낌을, 개인 경기에서는 4종류 수구의 특성에 맞춘 조작을, 몸을 극한까지 움직이면서 표현하는 종목이다. 각 경기에서 요구되는 요소를 모두 포함하고, 높은 기술적 가치와 각종 요소의 다양성, 음악과 움직임의 관계나 독창성을 갖추어야 하며, 모든 운동이 합리성과 안정성을 가지고 실시되어야 한다.',
          es: 'El ejercicio de gimnasia rítmica es una prueba en la que se entrelazan elementos de manos libres y elementos de rotación y en la que, llevando el cuerpo al límite, se expresan la sincronización y la fuerza de los seis gimnastas en la competición por conjuntos y, en la competición individual, un manejo acorde con las características de los cuatro aparatos. El ejercicio debe contener todos los elementos exigidos en cada competición, tener un alto valor técnico, variedad de elementos, una buena relación entre la música y el movimiento y originalidad, y todos los movimientos deben ejecutarse con racionalidad y estabilidad.',
          fr: "Un exercice de gymnastique rythmique masculine associe des éléments corporels et des éléments de tumbling. En compétition par ensembles, il exprime la synchronisation et la puissance de six gymnastes ; en compétition individuelle, il exprime un maniement adapté au caractère de chacun des quatre engins, tout en sollicitant le corps jusqu'à ses limites. L'exercice doit contenir tous les éléments exigés par chaque compétition, présenter une valeur technique élevée, une variété d'éléments, un bon rapport entre la musique et le mouvement ainsi que de l'originalité, et tous les mouvements doivent être exécutés de façon rationnelle et avec stabilité.",
          ru: 'Упражнение в мужской художественной гимнастике сочетает элементы без предмета и акробатические элементы: в групповых соревнованиях оно выражает синхронность и силу шести гимнастов, в индивидуальных — работу с предметом, отвечающую особенностям каждого из четырёх предметов, при движении тела на пределе возможностей. Упражнение должно содержать все элементы, требуемые в данном виде соревнований, обладать высокой технической ценностью, разнообразием элементов, связью музыки и движения и оригинальностью, а все движения должны выполняться рационально и устойчиво.',
          hi: 'लयबद्ध जिम्नास्टिक का प्रदर्शन, बिना उपकरण के तत्वों और घूर्णन वर्ग के तत्वों को मिलाकर, समूह प्रतियोगिता में 6 जिम्नास्ट के तालमेल और शक्ति को, तथा व्यक्तिगत प्रतियोगिता में 4 प्रकार के उपकरणों की विशेषताओं के अनुरूप संचालन को, शरीर को उसकी सीमा तक चलाते हुए व्यक्त करने वाली स्पर्धा है। प्रत्येक प्रतियोगिता में माँगे गए सभी तत्व शामिल होने चाहिए, उच्च तकनीकी मूल्य, तत्वों की विविधता, संगीत और गति का संबंध तथा मौलिकता होनी चाहिए, और सभी गतियाँ तर्कसंगत तथा स्थिर रूप से की जानी चाहिए।',
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
          ja: `1. すべての競技において伴奏音楽をつけなければならない。
2. 伴奏音楽はよりよい音色とメロディーによって、特徴付けられるものでなければならない。すなわち演技の性格に合致し、途切れずはっきりとしたリズムを持ち、競技者の動きのリズムと調和していなければならない。
3. 伴奏音楽は楽器（シンセサイザーを含む）で演奏されたもの、または人の声に限る。
4. 伴奏音楽は、音楽を記録した記録媒体等を使用する。大会要項で別途指定された場合はそれに準じる。
5. 演技面の入退場には伴奏音楽をつけてはならない。
6. 組織者側に責任のない理由で伴奏音楽が中断された場合は、原則として演技の復行はできない。`,
          en: `1. All routines must be performed to accompanying music.
2. The music must be characterized by good tone and melody. It must suit the character of the routine, have a clear, continuous rhythm and be in harmony with the rhythm of the gymnasts' movements.
3. The music must be played on instruments (including synthesizers) or sung by the human voice.
4. The music is played from recorded media. If the competition guidelines specify otherwise, those instructions apply.
5. No music may be played while gymnasts enter or leave the floor area.
6. If the music stops for a reason for which the organizers are not responsible, as a rule the routine may not be repeated.`,
          zh: `1. 所有比赛都必须配有伴奏音乐。
2. 伴奏音乐必须以优美的音色和旋律为特征。即必须契合成套动作的性格，具有不间断而清晰的节奏，并与参赛者动作的节奏相协调。
3. 伴奏音乐仅限于用乐器（含合成器）演奏的音乐，或者人声。
4. 伴奏音乐使用录有音乐的存储载体等。比赛规程另有指定时，从其规定。
5. 进出场地时不得配伴奏音乐。
6. 因组织者不负责任的原因导致伴奏音乐中断时，原则上不得重做成套动作。`,
          ko: `1. 모든 경기에서 반주 음악을 붙여야 한다.
2. 반주 음악은 보다 좋은 음색과 멜로디로 특징지어지는 것이어야 한다. 즉 연기의 성격에 합치하고, 끊기지 않는 명확한 리듬을 가지며, 경기자의 움직임의 리듬과 조화를 이루어야 한다.
3. 반주 음악은 악기(신시사이저를 포함한다)로 연주된 것 또는 사람의 목소리에 한한다.
4. 반주 음악은 음악을 기록한 기록 매체 등을 사용한다. 대회 요강에서 별도로 지정된 경우에는 그에 따른다.
5. 연기 면의 입장과 퇴장에는 반주 음악을 붙여서는 안 된다.
6. 주최자 측에 책임이 없는 이유로 반주 음악이 중단된 경우에는 원칙적으로 연기를 다시 실시할 수 없다.`,
          es: `1. En todas las competiciones el ejercicio debe ir acompañado de música.
2. La música de acompañamiento debe caracterizarse por un buen timbre y una buena melodía; es decir, debe ajustarse al carácter del ejercicio, tener un ritmo claro y sin interrupciones y armonizar con el ritmo de los movimientos del gimnasta.
3. La música de acompañamiento solo puede estar interpretada con instrumentos (incluido el sintetizador) o con voz humana.
4. La música de acompañamiento se reproduce desde un soporte en el que esté grabada. Si las bases de la competición establecen otra cosa, se seguirá lo indicado en ellas.
5. No debe utilizarse música de acompañamiento en la entrada y la salida del practicable.
6. Si la música de acompañamiento se interrumpe por un motivo del que no es responsable la organización, por regla general no se permite repetir el ejercicio.`,
          fr: `1. Tous les exercices doivent être présentés sur une musique d'accompagnement.
2. La musique doit se distinguer par la qualité de sa sonorité et de sa mélodie. Elle doit correspondre au caractère de l'exercice, avoir un rythme net et continu et s'accorder au rythme des mouvements des gymnastes.
3. La musique doit être jouée par des instruments (synthétiseurs compris) ou chantée par la voix humaine.
4. La musique est diffusée à partir d'un support enregistré. Si le règlement particulier de la compétition en dispose autrement, ces consignes s'appliquent.
5. Aucune musique ne doit être diffusée pendant l'entrée et la sortie du praticable.
6. Si la musique s'interrompt pour une cause non imputable aux organisateurs, l'exercice ne peut en principe pas être repris.`,
          ru: `1. Все упражнения выполняются под музыкальное сопровождение.
2. Музыка должна отличаться хорошим звучанием и мелодией: соответствовать характеру упражнения, иметь непрерывный и чёткий ритм и согласовываться с ритмом движений гимнастов.
3. Музыка должна быть исполнена на инструментах (в том числе на синтезаторе) либо человеческим голосом.
4. Музыка воспроизводится с носителя записи. Если в положении о соревнованиях указано иное, действует это указание.
5. Во время выхода на ковёр и ухода с него музыка не звучит.
6. Если музыка прервалась по причине, за которую организаторы не отвечают, упражнение, как правило, не повторяется.`,
          hi: `1. सभी प्रतियोगिताओं में संगत संगीत होना चाहिए।
2. संगत संगीत अच्छे स्वर और धुन से युक्त होना चाहिए। अर्थात वह प्रदर्शन के स्वभाव से मेल खाता हो, बिना रुके स्पष्ट लय रखता हो, और जिम्नास्ट की गति की लय से तालमेल रखता हो।
3. संगत संगीत केवल वाद्ययंत्रों (सिंथेसाइज़र सहित) पर बजाया गया या मानव स्वर में गाया हुआ हो सकता है।
4. संगत संगीत के लिए, संगीत रिकॉर्ड किए गए माध्यम आदि का उपयोग किया जाता है। प्रतियोगिता दिशानिर्देशों में अलग से निर्दिष्ट होने पर उसका पालन किया जाता है।
5. फ़्लोर पर आने और जाने के समय संगत संगीत नहीं बजाया जाना चाहिए।
6. आयोजकों की जिम्मेदारी से बाहर के कारण से संगत संगीत रुक जाने पर, सिद्धांततः प्रदर्शन दोहराया नहीं जा सकता।`,
        },
      },
      {
        title: {
          ja: '得点',
          en: 'Scores',
          zh: '得分',
          ko: '득점',
          es: 'Puntuación',
          fr: 'Notes',
          ru: 'Оценки',
          hi: 'अंक',
        },
        content: {
          ja: `1. 自由演技は構成（Ｄ）と実施（Ｅ）のそれぞれ10点満点の計20点満点で採点される。また規定演技は実施（Ｅ）の10点満点で採点される。
2. 主任審判員を除いた４名の審判員の最高点及び最低点を除外し、有効点の平均点を小数点第３位までとし、第４位は切り捨て得点とする。主任審判員が適用する減点があった場合は、その得点から減点し最終得点とする。
`,
          en: `1. Free routines are scored out of 20 points: composition (D) out of 10 points and execution (E) out of 10 points. Compulsory routines are scored for execution (E) out of 10 points.
2. The highest and lowest scores of the four judges, excluding the chief judge, are dropped, and the average of the counting scores is calculated to three decimal places, truncating the fourth. If the chief judge applies a deduction, it is subtracted from that score to give the final score.`,
          zh: `1. 自选成套由编排（Ｄ）与完成（Ｅ）各满分10分、合计满分20分进行评分。此外，规定成套按完成（Ｅ）满分10分进行评分。
2. 去掉除主裁判员以外的４名裁判员的最高分和最低分，有效分的平均分取至小数点后第３位，第４位舍去作为得分。主裁判员适用扣分时，从该得分中扣除，作为最后得分。
`,
          ko: `1. 자유 연기는 구성(D)과 실시(E) 각각 10점 만점, 합계 20점 만점으로 채점된다. 또한 규정 연기는 실시(E)의 10점 만점으로 채점된다.
2. 주임 심판원을 제외한 4명 심판원의 최고점 및 최저점을 제외하고, 유효점의 평균점을 소수점 셋째 자리까지로 하며 넷째 자리는 버린 득점으로 한다. 주임 심판원이 적용하는 감점이 있었을 경우에는 그 득점에서 감점하여 최종 점수로 한다.
`,
          es: `1. El ejercicio libre se puntúa sobre un total de 20 puntos: composición (D) y ejecución (E), 10 puntos como máximo cada una. El ejercicio obligatorio se puntúa sobre un máximo de 10 puntos de ejecución (E).
2. De los cuatro jueces, excluido el juez principal, se descartan la nota más alta y la más baja y se calcula la media de las notas válidas hasta la tercera cifra decimal, truncando la cuarta. Si el juez principal aplica una penalización, esta se resta de esa puntuación para obtener la nota final.
`,
          fr: `1. L'exercice libre est noté sur 20 points : la composition (D) sur 10 points et l'exécution (E) sur 10 points. L'exercice imposé est noté sur l'exécution (E), sur 10 points.
2. La note la plus haute et la note la plus basse des quatre juges, juge-arbitre non compris, sont écartées, et la moyenne des notes retenues est calculée à trois décimales, la quatrième étant tronquée. Si le juge-arbitre applique une pénalité, celle-ci est retranchée de cette note pour obtenir la note finale.`,
          ru: `1. Произвольное упражнение оценивается по 10 баллов за композицию (D) и 10 баллов за исполнение (E) — всего максимум 20 баллов. Обязательное упражнение оценивается только за исполнение (E), максимум 10 баллов.
2. Из оценок четырёх судей, не считая старшего судьи, отбрасываются высшая и низшая, а из оставшихся выводится среднее с точностью до трёх знаков после запятой, четвёртый знак отбрасывается. Если старший судья применяет сбавку, она вычитается из этой оценки и даёт итоговую оценку.`,
          hi: `1. स्वतंत्र प्रदर्शन का अंक निर्धारण, संरचना (D) और निष्पादन (E) में से प्रत्येक के अधिकतम 10 अंक, कुल अधिकतम 20 अंक में किया जाता है। तथा अनिवार्य प्रदर्शन का अंक निर्धारण निष्पादन (E) के अधिकतम 10 अंक में किया जाता है।
2. प्रधान निर्णायक को छोड़कर 4 निर्णायकों के उच्चतम और निम्नतम अंक हटाकर, मान्य अंकों का औसत दशमलव के तीसरे स्थान तक लिया जाता है और चौथा स्थान छोड़ दिया जाता है। प्रधान निर्णायक द्वारा कोई कटौती लागू की गई हो, तो उस अंक से कटौती करके अंतिम अंक निकाला जाता है।`,
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
          ja: `すべての演技は演技時間が下記のとおりに定められる。団体演技ではチームのうち１人以上の動き始めからチーム全員が完全に動きを止めるまでの時間とし、個人競技では競技者の動き始めから完全に動きを止めるまでとする。

1. 団体競技　２分45秒から３分00秒
2. 個人競技　１分15秒から１分30秒`,
          en: `The duration of every routine is set as below. In the group competition, it is measured from the moment at least one gymnast starts moving until all gymnasts have completely stopped. In the individual competition, it is measured from the moment the gymnast starts moving until the gymnast has completely stopped.

1. Group competition: 2 min 45 s to 3 min 00 s
2. Individual competition: 1 min 15 s to 1 min 30 s`,
          zh: `所有成套动作的成套时间规定如下。团体成套为队中１人以上开始动作起，至全队完全停止动作为止的时间；个人比赛为参赛者开始动作起，至完全停止动作为止。

1. 团体比赛　２分45秒至３分00秒
2. 个人比赛　１分15秒至１分30秒`,
          ko: `모든 연기는 연기 시간이 다음과 같이 정해진다. 단체 연기에서는 팀 중 1명 이상이 움직이기 시작한 때부터 팀 전원이 완전히 움직임을 멈출 때까지의 시간으로 하고, 개인 경기에서는 경기자가 움직이기 시작한 때부터 완전히 움직임을 멈출 때까지로 한다.

1. 단체 경기 2분 45초부터 3분 00초
2. 개인 경기 1분 15초부터 1분 30초`,
          es: `La duración de todos los ejercicios se establece del modo siguiente. En el ejercicio de conjunto se mide desde que al menos uno de los gimnastas del equipo empieza a moverse hasta que todos los gimnastas se detienen por completo, y en la competición individual, desde que el gimnasta empieza a moverse hasta que se detiene por completo.

1. Competición por conjuntos  de 2 min 45 s a 3 min 00 s
2. Competición individual  de 1 min 15 s a 1 min 30 s`,
          fr: `La durée de chaque exercice est fixée comme suit. En compétition par ensembles, elle est mesurée du moment où au moins un gymnaste commence à bouger jusqu'à l'arrêt complet de tous les gymnastes. En compétition individuelle, elle est mesurée du moment où le gymnaste commence à bouger jusqu'à son arrêt complet.

1. Compétition par ensembles : de 2 min 45 s à 3 min 00 s
2. Compétition individuelle : de 1 min 15 s à 1 min 30 s`,
          ru: `Продолжительность всех упражнений устанавливается следующим образом. В групповых соревнованиях она отсчитывается с момента, когда начал двигаться хотя бы один гимнаст, до момента, когда все гимнасты полностью остановились. В индивидуальных соревнованиях — с момента, когда гимнаст начал двигаться, до его полной остановки.

1. Групповые соревнования: от 2 минут 45 секунд до 3 минут 00 секунд
2. Индивидуальные соревнования: от 1 минуты 15 секунд до 1 минуты 30 секунд`,
          hi: `सभी प्रदर्शनों का प्रदर्शन का समय नीचे दिए अनुसार निर्धारित है। समूह प्रदर्शन में यह टीम के कम से कम 1 जिम्नास्ट के चलना शुरू करने से लेकर पूरी टीम के पूरी तरह रुक जाने तक का समय है, और व्यक्तिगत प्रतियोगिता में जिम्नास्ट के चलना शुरू करने से पूरी तरह रुक जाने तक का समय है।

1. समूह प्रतियोगिता  2 मिनट 45 सेकंड से 3 मिनट 00 सेकंड
2. व्यक्तिगत प्रतियोगिता  1 मिनट 15 सेकंड से 1 मिनट 30 सेकंड`,
        },
      },
      {
        title: {
          ja: '演技人数',
          en: 'Number of Gymnasts in a Group',
          zh: '成套动作人数',
          ko: '연기 인원',
          es: 'Número de gimnastas del conjunto',
          fr: 'Nombre de gymnastes dans un ensemble',
          ru: 'Число гимнастов в группе',
          hi: 'प्रदर्शन करने वाले जिम्नास्ट की संख्या',
        },
        content: {
          ja: '団体競技の演技人数は６名で行うものとする。ただし５名または４名でも競技に参加することができるが減点される。',
          en: 'A group routine is performed by six gymnasts. A group may also compete with five or four gymnasts, but a deduction is applied.',
          zh: '团体比赛的成套动作人数为６名。但是，５名或４名也可以参加比赛，此时予以扣分。',
          ko: '단체 경기의 연기 인원은 6명으로 실시하는 것으로 한다. 다만 5명 또는 4명으로도 경기에 참가할 수 있으나 감점된다.',
          es: 'El ejercicio de conjunto se realiza con seis gimnastas. No obstante, también se puede participar en la competición con cinco o cuatro gimnastas, pero se aplica una penalización.',
          fr: "Un exercice d'ensemble est présenté par six gymnastes. Un ensemble peut également concourir à cinq ou à quatre gymnastes, mais une pénalité est alors appliquée.",
          ru: 'Групповое упражнение выполняют шесть гимнастов. Допускается выступление пятью или четырьмя гимнастами, но с применением сбавки.',
          hi: 'समूह प्रतियोगिता का प्रदर्शन 6 जिम्नास्ट द्वारा किया जाता है। हालाँकि 5 या 4 जिम्नास्ट के साथ भी प्रतियोगिता में भाग लिया जा सकता है, पर कटौती की जाती है।',
        },
      },
    ],
  },
  {
    title: {
      ja: '手具',
      en: 'Apparatus',
      zh: '器械',
      ko: '수구',
      es: 'Aparatos',
      fr: 'Engins',
      ru: 'Предметы',
      hi: 'उपकरण',
    },
    section: [
      {
        title: {
          ja: '手具の規格',
          en: 'Apparatus Specifications',
          zh: '器械规格',
          ko: '수구의 규격',
          es: 'Especificaciones de los aparatos',
          fr: 'Caractéristiques des engins',
          ru: 'Требования к предметам',
          hi: 'उपकरण के मानक',
        },
        content: {
          ja: `競技に使用する器具ならびに手具は、（公財）基本体操協会認定規格による。
＊ジュニアは、ジュニア適用規則を参照`,
          en: `Equipment and apparatus used in competition must meet the certified specifications of the Japan Gymnastics Association.
* For juniors, see the rules for juniors.`,
          zh: `比赛中使用的器材及器械，依照（公益财团法人）日本体操协会认定的规格。
＊少年组请参照少年组适用规则`,
          ko: `경기에 사용하는 용구 및 수구는 공익재단법인 일본체조협회 인정 규격에 따른다.
* 주니어는 주니어 적용 규칙을 참조`,
          es: `El material y los aparatos utilizados en competición deben cumplir las especificaciones homologadas por la Federación Japonesa de Gimnasia.
*Para la categoría júnior, véanse las reglas de aplicación para júnior`,
          fr: `Le matériel et les engins utilisés en compétition doivent être conformes aux normes homologuées par la Fédération japonaise de gymnastique.
* Pour les juniors, se reporter au règlement applicable aux juniors.`,
          ru: `Инвентарь и предметы, используемые на соревнованиях, должны отвечать сертифицированным требованиям Японской ассоциации гимнастики.
* Для юниоров — см. правила для юниоров.`,
          hi: `प्रतियोगिता में उपयोग होने वाले साधन तथा उपकरण, (कोज़ाइ) किहोन ताइसो क्योकाई के प्रमाणित मानकों के अनुसार होंगे।
* जूनियर के लिए, जूनियर पर लागू नियम देखें`,
        },
        image: [
          {
            src: '/images/rules/syugukikakuhyou.png',
            alt: {
              ja: '手具規格',
              en: 'Apparatus specifications',
              zh: '器械规格',
              ko: '수구 규격',
              es: 'Especificaciones de los aparatos',
              fr: 'Caractéristiques des engins',
              ru: 'Требования к предметам',
              hi: 'उपकरण के मानक',
            },
          },
        ],
      },
      {
        title: {
          ja: '手具点検',
          en: 'Apparatus Inspection',
          zh: '器械检查',
          ko: '수구 점검',
          es: 'Control de los aparatos',
          fr: 'Contrôle des engins',
          ru: 'Проверка предметов',
          hi: 'उपकरण की जाँच',
        },
        content: {
          ja: `1. 競技開始前には手具点検を行う。予備手具も含め、合格した手具のみ競技会に使用することができる。
2. 合格した手具には組織委員会が準備した合格シールを貼る。
3. 競技場に入る直前に合格シール点検を行う。
4. 審判長または当該主任審判から要求があった場合は、演技終了時に再度手具点検が行われることもある。
5. 手具が検定品であっても劣化等により規格外になった場合は、手具点検によって規格外となることがある。`,
          en: `1. Apparatus are inspected before the competition. Only apparatus that pass the inspection, including spare apparatus, may be used in the competition.
2. Apparatus that pass are marked with a sticker prepared by the Organizing Committee.
3. The stickers are checked just before gymnasts enter the competition hall.
4. If the Jury President or the chief judge concerned requests it, the apparatus may be inspected again after the routine.
5. Even certified apparatus may be judged out of specification at the inspection if they have deteriorated.`,
          zh: `1. 比赛开始前进行器械检查。包括备用器械在内，只有检查合格的器械才可以在比赛会中使用。
2. 合格的器械上贴组织委员会准备的合格标签。
3. 进入比赛场地之前进行合格标签检查。
4. 裁判长或该项目的主裁判员提出要求时，成套动作结束后也可能再次进行器械检查。
5. 器械即使是检定合格品，若因老化等原因不符合规格，也可能在器械检查中被判定为不合格。`,
          ko: `1. 경기 개시 전에는 수구 점검을 실시한다. 예비 수구를 포함하여 합격한 수구만 경기회에 사용할 수 있다.
2. 합격한 수구에는 조직 위원회가 준비한 합격 스티커를 붙인다.
3. 경기장에 들어가기 직전에 합격 스티커 점검을 실시한다.
4. 심판장 또는 해당 주임 심판원으로부터 요구가 있었을 경우에는 연기 종료 시에 다시 수구 점검이 실시될 수 있다.
5. 수구가 검정품이라 하더라도 노후화 등으로 규격에서 벗어난 경우에는 수구 점검에서 규격 외로 판정될 수 있다.`,
          es: `1. Antes del comienzo de la competición se realiza el control de los aparatos. Solo pueden utilizarse en la competición los aparatos que hayan superado el control, incluidos los de repuesto.
2. A los aparatos que superan el control se les coloca el adhesivo de conformidad preparado por el comité organizador.
3. Justo antes de entrar en el recinto de competición se comprueba el adhesivo de conformidad.
4. Si lo solicita el juez árbitro o el juez principal correspondiente, los aparatos pueden volver a controlarse al terminar el ejercicio.
5. Aunque el aparato esté homologado, si por deterioro u otra causa deja de cumplir las especificaciones, el control puede declararlo fuera de especificación.`,
          fr: `1. Les engins sont contrôlés avant le début de la compétition. Seuls les engins ayant passé ce contrôle, engins de réserve compris, peuvent être utilisés en compétition.
2. Les engins conformes reçoivent une vignette de conformité fournie par le comité d'organisation.
3. Les vignettes sont vérifiées juste avant l'entrée dans la salle de compétition.
4. À la demande du président du jury ou du juge-arbitre concerné, les engins peuvent être contrôlés de nouveau à la fin de l'exercice.
5. Même homologué, un engin peut être déclaré non conforme lors du contrôle s'il s'est détérioré.`,
          ru: `1. Перед началом соревнований проводится проверка предметов. На соревнованиях можно использовать только прошедшие проверку предметы, включая запасные.
2. На прошедшие проверку предметы наклеивается стикер, подготовленный оргкомитетом.
3. Наличие стикера проверяется непосредственно перед входом в соревновательный зал.
4. По требованию главного судьи или соответствующего старшего судьи предметы могут быть проверены повторно после упражнения.
5. Даже сертифицированный предмет может быть признан на проверке не соответствующим требованиям, если он износился.`,
          hi: `1. प्रतियोगिता शुरू होने से पहले उपकरण की जाँच की जाती है। अतिरिक्त उपकरण सहित, केवल जाँच में पास हुए उपकरण ही प्रतियोगिता में उपयोग किए जा सकते हैं।
2. पास हुए उपकरण पर आयोजन समिति द्वारा तैयार किया गया पास स्टिकर लगाया जाता है।
3. प्रतियोगिता स्थल में प्रवेश से ठीक पहले पास स्टिकर की जाँच की जाती है।
4. मुख्य निर्णायक या संबंधित प्रधान निर्णायक द्वारा माँग किए जाने पर, प्रदर्शन समाप्त होने पर उपकरण की जाँच फिर से की जा सकती है।
5. उपकरण प्रमाणित होने पर भी, खराब होने आदि से मानक से बाहर हो जाने पर, उपकरण जाँच में मानक से बाहर घोषित किया जा सकता है।`,
        },
      },
      {
        title: {
          ja: '競技規則に定めない問題',
          en: 'Matters Not Covered by the Competition Rules',
          zh: '比赛规则未作规定的问题',
          ko: '경기 규칙에 정하지 않은 문제',
          es: 'Cuestiones no previstas en el reglamento de competición',
          fr: 'Questions non prévues par le règlement des compétitions',
          ru: 'Вопросы, не предусмотренные Правилами соревнований',
          hi: 'प्रतियोगिता नियमों में न दिए गए विषय',
        },
        content: {
          ja: '本規則に定めない審判および採点に関する問題は、すべて採点規則による。',
          en: 'All matters of judging and scoring not covered by these rules follow the Code of Points.',
          zh: '本规则未作规定的有关裁判和评分的问题，全部依照评分规则。',
          ko: '본 규칙에 정하지 않은 심판 및 채점에 관한 문제는 모두 채점 규칙에 따른다.',
          es: 'Todas las cuestiones de arbitraje y de puntuación no previstas en este reglamento se rigen por el código de puntuación.',
          fr: 'Toutes les questions de jugement et de notation non prévues par le présent règlement sont régies par le code de pointage.',
          ru: 'Все вопросы судейства и оценки, не предусмотренные настоящими Правилами, решаются согласно Правилам судейства.',
          hi: 'इन नियमों में न दिए गए निर्णय और अंक निर्धारण से संबंधित सभी विषय, अंक निर्धारण नियमों के अनुसार तय होते हैं।',
        },
      },
    ],
  },
]
