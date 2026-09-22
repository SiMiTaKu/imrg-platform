/**
 * 規則集の表。
 *
 * @remarks
 * いまは表を画像で載せているが、画像だと言葉で探せず、訳せず、スマホで読みにくい。
 * 文字で持ち直した表をここに置き、画像の代わりに出す。
 * 画像の `src` を鍵にして引くので、文字にできたものから少しずつ置き換えられる
 */

/**
 * 表の組み方。スマホでの見せ方が変わる
 *
 * - `list` … 「区分・内容・減点」のように、左から右へ読む表。
 *   列の幅を割り振って、スマホでも横に送らずに収める
 * - `matrix` … 行の見出しと列の見出しが交わる表（手具の規格など）。
 *   幅が足りないときは入れ物の中だけで横に送り、行の見出しは左に貼り付けておく
 */
export type RuleTableLayout = 'list' | 'matrix'

/** 表のます目。横に続けて使うときだけ `colSpan` を書く */
export interface RuleTableCell {
  /** ます目の中身。改行を入れると、そのまま改行して出る */
  readonly text: string
  /** 横に何列ぶん使うか。既定は 1 */
  readonly colSpan?: number
}

/** ます目の書き方。ただの文字列でも、`colSpan` 付きでも書ける */
export type RuleTableCellSource = string | RuleTableCell

/** 表の行 */
export interface RuleTableRow {
  /**
   * この行から始まる区分の名前。
   * 書くと、行の上に区分の見出しを1行はさむ。長い欠点表を読みやすくするためのもの
   */
  readonly group?: string
  /** 行の見出し。無い表もある */
  readonly header?: string
  /** 列の数だけ並べる。空文字は空欄 */
  readonly cells: readonly RuleTableCellSource[]
}

/**
 * 表の役目。
 *
 * - `reference` … 読むための表。規則の中身が全部書いてある
 * - `form` … 書き込むための様式（採点票・減点票など）。
 *   空欄は書き込む場所なので、印刷して使えるよう高さを持たせて出す
 */
export type RuleTablePurpose = 'reference' | 'form'

/** 画像の代わりに出す、文字で持ち直した表 */
export interface RuleTable {
  /** 置き換える画像のパス（`/images/rules/....png`） */
  readonly imageSource: string
  /** 表の名前 */
  readonly caption: string
  /** 表の組み方。既定は `list` */
  readonly layout?: RuleTableLayout
  /** 表の役目。既定は `reference` */
  readonly purpose?: RuleTablePurpose
  /** 左上の見出し。行の見出しが何を表すかを書く。無い表もある */
  readonly cornerLabel?: string
  /** 列の見出し */
  readonly columns: readonly string[]
  /** 行。見出しと、列ごとの中身 */
  readonly rows: readonly RuleTableRow[]
  /**
   * 右から数えて何列を「幅を詰めた列」にするか。既定は `list` なら 1、`matrix` なら 0。
   *
   * @remarks
   * 難度表のように「A」「B」だけが入る細い列が右に2つ続く表があるため、
   * 詰める列の数を選べるようにしてある。詰めた列は中身の幅まで縮み、折り返さない
   */
  readonly narrowColumns?: number
  /**
   * ます目の中身が短く、折り返さなくても画面に収まる表か。
   *
   * @remarks
   * 既定では列に最小の幅を持たせ、狭い画面では表を縮めずに横へ送る。
   * ただし「A」「0.1」しか入らない表まで送らせるのは煩わしいので、
   * そういう表はこれを立てて、中身の幅に任せる（折り返しもしない）
   */
  readonly compact?: boolean
  /**
   * いちばん左の列を、行の見出しとして出すか。
   *
   * @remarks
   * 「A → 0.1」「難度（D）審判 → 2名」のように、左の列がその行の名前に
   * なっている表で立てる。読み上げのとき「どの行の値か」が伝わる。
   *
   * ます目の中身は書き換えず、出し方だけを変える
   */
  readonly firstColumnIsHeader?: boolean
  /** 表の下に置く補足 */
  readonly note?: string
  /**
   * 元にした資料。冊子名・節番号・ページ番号まで書く。
   * あとで規則が変わったとき、どこを見直せばよいか分かるようにするためのもの
   */
  readonly source: string
}

/**
 * 分類図（採点項目の系統図など）の枝。
 *
 * @remarks
 * 罫線と文字だけでできた図は、画像ではなく入れ子の箇条書きとして持つ。
 * こうすると言葉で探せて、訳せて、狭い画面では縦に積み直せる
 */
export interface RuleTreeNode {
  /** 箱の中の文字 */
  readonly label: string
  /** 箱の中の2行目。配点など、規則に書いてあるときだけ */
  readonly note?: string
  /** そこから枝分かれする箱 */
  readonly children?: readonly RuleTreeNode[]
}

/** 画像の代わりに出す、文字で持ち直した分類図 */
export interface RuleTree {
  /** 置き換える画像のパス（`/images/rules/....png`） */
  readonly imageSource: string
  /** 図の名前 */
  readonly caption: string
  /**
   * いちばん左の箱。1つの図に複数ある。
   *
   * @remarks
   * 2025年版の採点項目の図は「難度(D)」「芸術と多様性(A)」「実施(E)」のように
   * 根が複数あるため、1本ではなく並びで持つ
   */
  readonly roots: readonly RuleTreeNode[]
  /** 図の下に置く補足 */
  readonly note?: string
  /** 元にした資料。冊子名・節番号・ページ番号まで書く */
  readonly source: string
}

/** 座席図の席。箱ひとつぶん */
export interface RuleSeat {
  /** 箱の中の文字。「E4」「セクレタリー」 */
  readonly label: string
  /** 箱の中の2行目。個人徒手のように「E」と「4審」が2段に印刷されているとき */
  readonly note?: string
}

/** 座席図の1列。前列・後列がそれぞれ1つ */
export interface RuleSeatRow {
  /** 列の名前。冊子には書かれていないので、読む人に向けて付ける */
  readonly label: string
  /** 列に添えられた但し書き。「1段高くする」など、矢印で引いてあるもの */
  readonly note?: string
  /** 左から順に並べた席 */
  readonly seats: readonly RuleSeat[]
}

/**
 * 画像の代わりに出す、文字で持ち直した座席図。
 *
 * @remarks
 * 審判席の並びは、行と列が交わる表ではない。前列9席・後列4席のように数がそろわず、
 * 列の見出しに当たるものも無い。`RuleTable` に当てはめると空の見出しが並ぶので、
 * 箱を横に並べた図として別に持つ
 */
export interface RuleSeating {
  /** 置き換える画像のパス（`/images/rules/....png`） */
  readonly imageSource: string
  /** 図の名前 */
  readonly caption: string
  /** 前から順に並べた列 */
  readonly rows: readonly RuleSeatRow[]
  /** 図の下に置く補足 */
  readonly note?: string
  /** 元にした資料。冊子名・節番号・ページ番号まで書く */
  readonly source: string
}

/** 寸法図の図形の種類。描き方はこの種類で決まる */
export type RuleShapeKind = 'square' | 'rectangle' | 'triangle' | 'circle' | 'rhombus'

/** 寸法図の図形ひとつ */
export interface RuleShape {
  /** 図形の種類 */
  readonly kind: RuleShapeKind
  /** 冊子の本文に書かれている形と大きさ。「4.5cm×4.5cm の正方形」 */
  readonly label: string
  /** 図の下に引いてある寸法。円は直径の線に書き込む。無い図形もある */
  readonly bottomLabel?: string
  /** 図の左に引いてある寸法。縦の長さ、または左の辺の長さ */
  readonly sideLabel?: string
  /** 図の中に書き込んである角度。左下の角から順に書く */
  readonly angleLabels?: readonly string[]
}

/**
 * 画像の代わりに出す、罫線と直線だけでできた寸法図。
 *
 * @remarks
 * 所属マークの形と大きさのように、直線と寸法の引き出し線だけでできた図をここに置く。
 * 図形は本物の縦横の比で描き、寸法と角度は冊子に印刷されているまま書き込む。
 * 紙面と違い、実物大にはならない
 */
export interface RuleShapeFigure {
  /** 置き換える画像のパス（`/images/rules/....png`） */
  readonly imageSource: string
  /** 図の名前 */
  readonly caption: string
  /** 並べる図形 */
  readonly shapes: readonly RuleShape[]
  /** 図の下に置く補足 */
  readonly note?: string
  /** 元にした資料。冊子名・節番号・ページ番号まで書く */
  readonly source: string
}

/**
 * 幅を詰める列の数を決める。書かれていなければ組み方から決める
 * @param table - 表
 * @returns 右から数えて幅を詰める列の数
 */
export const narrowColumnCount = (table: RuleTable): number =>
  table.narrowColumns ?? (table.layout === 'matrix' ? 0 : 1)

/**
 * ます目の書き方をそろえる。ただの文字列で書かれていたら `text` だけの形にする
 * @param cell - ます目。文字列か、`colSpan` 付きのもの
 * @returns `text` と `colSpan` を持つ形にそろえたます目
 */
export const normalizeRuleTableCell = (cell: RuleTableCellSource): Required<RuleTableCell> =>
  typeof cell === 'string'
    ? { text: cell, colSpan: 1 }
    : { text: cell.text, colSpan: cell.colSpan ?? 1 }

/**
 * 行の見出しの列が要るか。見出しの付いた行が1つでもあれば要る
 * @param table - 表
 * @returns 行の見出しの列を出すなら true
 */
export const hasRowHeader = (table: RuleTable): boolean =>
  table.cornerLabel !== undefined || table.rows.some((row) => row.header !== undefined)
