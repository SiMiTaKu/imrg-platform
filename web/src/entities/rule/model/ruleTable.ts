/**
 * 規則集の表。
 *
 * @remarks
 * いまは表を画像で載せているが、画像だと言葉で探せず、訳せず、スマホで読みにくい。
 * 文字で持ち直した表をここに置き、画像の代わりに出す。
 * 画像の `src` を鍵にして引くので、文字にできたものから少しずつ置き換えられる。
 *
 * 表のまわりの用紙は `rulePaper.ts`、表以外の図は `ruleTree.ts`（分類図）・
 * `ruleSeating.ts`（座席図）・`ruleShape.ts`（寸法図）にある。
 * 表を読み解く関数は `lib/ruleTableColumns.ts`（列）と `lib/ruleTableCells.ts`（ます目）
 */

import type { RulePaper } from './rulePaper'

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
  /** 縦に何行ぶん使うか。既定は 1 */
  readonly rowSpan?: number
  /**
   * 斜線を引くか。
   *
   * @remarks
   * 冊子の採点票では「ここには書かない」ます目に斜線が引いてある。
   * 空のまま置くと書き込む場所に見えてしまうので、同じように斜線で示す。
   * 向きは右上から左下へ。どのます目でも同じ向きに引く
   */
  readonly slash?: boolean
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

/** ます目の文字の寄せ方 */
export type RuleTableAlign = 'start' | 'center' | 'end'

/**
 * 棒人間を出す列の指定。
 *
 * @remarks
 * 技の名前から姿勢を選ぶので、名前の列と絵の列の両方を指す。
 * 絵の列のます目は空のままにしておく
 */
export interface StickFigureColumns {
  /** 技の名前が入っている列（0 から数える） */
  readonly nameColumn: number
  /** 絵を出す列（0 から数える）。ます目は空にしておく */
  readonly figureColumn: number
}

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
   * 左から何列を、行の見出しとして出すか。
   *
   * @remarks
   * 分類のように、その行が何のことかを表す列に使う。見出しにした列は灰色の地になり、
   * 横に送っても左に貼り付いたまま残る（いちばん左の1列だけ）。
   * ます目の中身は書き換えず、出し方だけを変える
   */
  readonly headerColumns?: number
  /**
   * 縦に続く空のます目を、上のます目にまとめるか。
   *
   * @remarks
   * 欠点表のように「分類」「内容」が何行かにわたって同じ表では、
   * 2行目から先を空にして書いてある。そのまま出すと空の枠が並んで
   * 読みにくいので、上のます目を縦に伸ばして1つにする。
   *
   * 書き込むための様式（`purpose: 'form'`）では、空のます目は
   * 書き込む場所なので、この指定を立てない
   *
   * 列の番号を並べて書くと、その列だけをまとめる。難度表のように、
   * 空のます目が「その難度に当たる技が無い」という意味を持つ表では、
   * まとめてしまうと意味が変わるので、まとめる列を選ぶ
   */
  readonly mergeEmptyCells?: boolean | readonly number[]
  /**
   * 列ごとの幅の割り当て。列の数だけ、百分率で並べる。
   *
   * @remarks
   * 「具体的な内容」のように書くことが多い列は広く、「減点」のように
   * 数字だけの列は狭くする。書かないときは、中身に応じて振り分けられる
   */
  readonly columnWidths?: readonly string[]
  /**
   * いちばん左の行の見出しを縦書きにするか。
   *
   * @remarks
   * 分類のように、同じ言葉が何行にもまたがる列に使う。
   * 縦に書くと列が1行ぶんの幅で済み、そのぶんを本文の列に回せる。
   * `headerColumns` と合わせて使う
   */
  readonly verticalHeader?: boolean
  /**
   * 審判が書き込む用紙の、表のまわりにある欄。
   *
   * @remarks
   * 冊子の採点票は、表の上に大会名・種別・手具・選手名の欄があり、
   * 下に合計と署名の欄がある。表だけを出すと紙面と別物になるので、
   * まわりの欄もここに持たせて、用紙の形に組み立てる。
   * `purpose: 'form'` の表にだけ書く
   */
  readonly paper?: RulePaper
  /**
   * 仮の棒人間を出す列。
   *
   * @remarks
   * 冊子の図解は枠の中に線画が入っているが、線画は文字にできず画像も無い。
   * 技の名前から姿勢を選んで棒人間を描き、絵の列に出す。
   * いずれプロジェクトのキャラクターのイラストに差し替える
   */
  readonly stickFigures?: StickFigureColumns
  /**
   * 列ごとの文字の寄せ方。列の数だけ並べる。
   *
   * @remarks
   * 難度や減点のように記号や数字しか入らない列は真ん中に寄せる。
   * 書かないときは左に寄せる
   */
  readonly columnAligns?: readonly RuleTableAlign[]
  /**
   * 列ごとの幅（px）。左から順に、行の見出しの列も含めて並べる。
   *
   * @remarks
   * 採点票のように、紙に出したときと画面で同じ形に見せたい表に使う。
   * 百分率だと画面の幅で形が変わり、PC・スマホ・PDF で別物になってしまう。
   * 狭い画面では縮めず、入れ物の中で横に送る
   */
  readonly columnPixels?: readonly number[]
  /**
   * どの行も同じ高さにそろえるか。
   *
   * @remarks
   * 書き込む用紙は、空のます目が潰れないように高さを足している。
   * そのため空のます目がある行だけ高くなる。難度の一覧のように、
   * 書き込む場所ではなく「その難度に当たる技が無い」ことを表す空欄が並ぶ表では、
   * 高さを足さずにそろえる
   */
  readonly uniformRowHeight?: boolean
  /**
   * 書いてある改行だけで折るか。
   *
   * @remarks
   * 冊子の難度表のように、改行の位置そのものが読みやすさを作っている表に使う。
   * 立てると列の幅で勝手に折り返さなくなり、収まらないときは横に送る
   */
  readonly preserveLineBreaks?: boolean
  /**
   * 見出しの行の、もう一段上に置くまとめの見出し。
   *
   * @remarks
   * 冊子の「要求数」のように、いくつかの列をまとめて呼ぶ見出しがある表に使う。
   * 列の数だけ並べ、`colSpan` でまたぐ列の数を書く。
   * 空文字にした列は、下の見出しがそのまま2段ぶんに伸びる
   */
  readonly columnGroups?: readonly RuleTableCellSource[]
  /**
   * まとめて紙に出す組の名前。
   *
   * @remarks
   * 冊子61ページのように、何枚かの用紙が1ページに並んでいるものがある。
   * 同じ名前を付けた用紙は、どれの印刷ボタンを押しても一緒に紙へ出る
   */
  readonly printGroup?: string
  /** 表の下に置く補足 */
  readonly note?: string
  /**
   * 元にした資料。冊子名・節番号・ページ番号まで書く。
   * あとで規則が変わったとき、どこを見直せばよいか分かるようにするためのもの
   */
  readonly source: string
}
