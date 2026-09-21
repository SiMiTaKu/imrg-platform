import type { RuleArticle } from '../../model/ruleBook'

/**
 * 様式（採点票・減点票・審判メモ）の条項。
 *
 * @remarks
 * 中身は `tables/formTables.ts` に文字の表として入っている。
 * ここでは「どの章のどこに、どの表を出すか」だけを決める。
 * `image.src` の鍵で表を引くので、同じ名前の画像ファイルは置いていない。
 *
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』
 * 「3 採点規則 3.7 採点票等」（61ページ〜）。各表のコメントに節とページを残してある
 */

/**
 * 表だけを持つ条項を作る
 * @param title - 見出し（8言語）。表の代わりに読む文にも使う
 * @param src - 表を引くための鍵
 * @returns 条項1つ
 */
const formSection = (
  title: RuleArticle['section'][number]['title'],
  src: string,
): RuleArticle['section'][number] => ({
  title,
  content: { ja: '', en: '' },
  image: [{ src, alt: title }],
})

/** 審判長（主任審判員）の減点表 */
export const CHIEF_JUDGE_DEDUCTION_ARTICLES: readonly RuleArticle[] = [
  {
    title: {
      ja: '審判長減点表',
      en: "Chief Judge's Deduction Table",
      zh: '裁判长扣分表',
      ko: '심판장 감점표',
      es: 'Tabla de penalizaciones del juez árbitro',
      fr: 'Tableau des pénalités du juge-arbitre',
      ru: 'Таблица сбавок главного судьи',
      hi: 'मुख्य निर्णायक कटौती तालिका',
    },
    section: [
      formSection(
        {
          ja: '審判長減点表（男子）',
          en: "Chief Judge's Deduction Table (Men)",
          zh: '裁判长扣分表（男子）',
          ko: '심판장 감점표（남자）',
          es: 'Tabla de penalizaciones del juez árbitro (masculino)',
          fr: 'Tableau des pénalités du juge-arbitre (hommes)',
          ru: 'Таблица сбавок главного судьи (мужчины)',
          hi: 'मुख्य निर्णायक कटौती तालिका（पुरुष）',
        },
        '/images/rules/forms/chief-judge-deduction.png',
      ),
    ],
  },
]

/** 審判が手元で使うメモの様式 */
export const JUDGE_NOTE_ARTICLES: readonly RuleArticle[] = [
  {
    title: {
      ja: '個人徒手の審判メモ',
      en: 'Judging Notes for Individual Free Hand',
      zh: '个人徒手裁判笔记',
      ko: '개인 도수 심판 메모',
      es: 'Notas de juzgamiento para manos libres individual',
      fr: 'Notes de jugement pour le mains libres individuel',
      ru: 'Заметки судьи для личных упражнений без предмета',
      hi: 'व्यक्तिगत फ्री हैंड के लिए निर्णायक टिप्पणी',
    },
    section: [
      formSection(
        {
          ja: 'D・A共通採点表',
          en: 'Shared Sheet for D and A',
          zh: 'D・A 通用评分表',
          ko: 'D・A 공통 채점표',
          es: 'Hoja común para D y A',
          fr: 'Feuille commune pour D et A',
          ru: 'Общий лист для D и A',
          hi: 'D और A के लिए साझा पत्रक',
        },
        '/images/rules/forms/free-hand-da.png',
      ),
      formSection(
        {
          ja: '難度の確認表',
          en: 'Difficulty Check Sheet',
          zh: '难度确认表',
          ko: '난도 확인표',
          es: 'Hoja de comprobación de dificultades',
          fr: 'Feuille de vérification des difficultés',
          ru: 'Лист проверки трудностей',
          hi: 'कठिनाई जाँच पत्रक',
        },
        '/images/rules/forms/free-hand-d-grid.png',
      ),
      formSection(
        {
          ja: 'E採点票',
          en: 'E Score Sheet',
          zh: 'E 评分表',
          ko: 'E 채점표',
          es: 'Hoja de puntuación E',
          fr: 'Feuille de notation E',
          ru: 'Оценочный лист E',
          hi: 'E अंक पत्रक',
        },
        '/images/rules/forms/free-hand-e.png',
      ),
    ],
  },
]

/** 線審・計時の記録票 */
export const SCORE_SHEET_ARTICLES: readonly RuleArticle[] = [
  {
    title: {
      ja: '線審・計時の記録票',
      en: 'Line and Time Record Sheet',
      zh: '线审、计时记录表',
      ko: '선심・계시 기록표',
      es: 'Hoja de registro de línea y tiempo',
      fr: 'Feuille de relevé des lignes et du temps',
      ru: 'Лист учёта линий и времени',
      hi: 'रेखा और समय अभिलेख पत्रक',
    },
    section: [
      formSection(
        {
          ja: 'line / time 採点票',
          en: 'Line / Time Sheet',
          zh: 'line / time 评分表',
          ko: 'line / time 채점표',
          es: 'Hoja line / time',
          fr: 'Feuille line / time',
          ru: 'Лист line / time',
          hi: 'line / time पत्रक',
        },
        '/images/rules/forms/score-line-time.png',
      ),
    ],
  },
]

/** 難度・芸術と多様性・実施の採点票 */
export const SCORING_SHEET_ARTICLES: readonly RuleArticle[] = [
  {
    title: {
      ja: '審判ごとの採点票',
      en: 'Score Sheets by Judging Panel',
      zh: '各裁判组评分表',
      ko: '심판별 채점표',
      es: 'Hojas de puntuación por panel',
      fr: 'Feuilles de notation par jury',
      ru: 'Оценочные листы по бригадам',
      hi: 'निर्णायक पैनल के अनुसार अंक पत्रक',
    },
    section: [
      formSection(
        {
          ja: '難度（D）採点票',
          en: 'Difficulty (D) Score Sheet',
          zh: '难度（D）评分表',
          ko: '난도（D）채점표',
          es: 'Hoja de puntuación de Dificultad (D)',
          fr: 'Feuille de notation Difficulté (D)',
          ru: 'Оценочный лист трудности (D)',
          hi: 'कठिनाई（D）अंक पत्रक',
        },
        '/images/rules/forms/score-d.png',
      ),
      formSection(
        {
          ja: '芸術と多様性（A）採点票',
          en: 'Artistry and Variety (A) Score Sheet',
          zh: '艺术与多样性（A）评分表',
          ko: '예술성과 다양성（A）채점표',
          es: 'Hoja de puntuación de Artisticidad y Variedad (A)',
          fr: 'Feuille de notation Artistique et Variété (A)',
          ru: 'Оценочный лист артистичности и разнообразия (A)',
          hi: 'कलात्मकता और विविधता（A）अंक पत्रक',
        },
        '/images/rules/forms/score-a.png',
      ),
      formSection(
        {
          ja: '実施（E）採点票',
          en: 'Execution (E) Score Sheet',
          zh: '完成（E）评分表',
          ko: '실시（E）채점표',
          es: 'Hoja de puntuación de Ejecución (E)',
          fr: 'Feuille de notation Exécution (E)',
          ru: 'Оценочный лист исполнения (E)',
          hi: 'निष्पादन（E）अंक पत्रक',
        },
        '/images/rules/forms/score-e.png',
      ),
    ],
  },
]
