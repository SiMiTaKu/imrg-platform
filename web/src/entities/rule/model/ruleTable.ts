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

/**
 * 採点票の、表のまわりにある欄。
 *
 * @remarks
 * 冊子の用紙をなぞる。どれも書き込む場所なので、中身は空のまま枠だけを出す
 */
export interface RulePaper {
  /** 右上に書く種別。冊子では「団体競技・個人競技」のように枠で囲んである */
  readonly categories?: readonly string[]
  /** 手具の欄。冊子では絵と名前が横に並ぶ */
  readonly apparatus?: readonly ApparatusKind[]
  /** 左上の印。難度なら `D`、実施なら `E` */
  readonly mark?: string
  /** 印の上に小さく添える言葉。「難度」「芸術と多様性」など */
  readonly markLabel?: string
  /** 大会名を書く欄の文言 */
  readonly event?: string
  /** 表の上に置く、書き込みの欄（選手名・団体名など） */
  readonly fields?: readonly string[]
  /** 表の下に置く、合計の欄（最終採点・減点合計など） */
  readonly totals?: readonly string[]
  /** いちばん下に置く、署名の欄 */
  readonly signatures?: readonly string[]
}

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

/** 手具の種類。冊子の採点票に絵で並んでいる4つ */
export const ApparatusKind = {
  /** スティック */
  STICK: 'stick',
  /** リング */
  RING: 'ring',
  /** ロープ */
  ROPE: 'rope',
  /** クラブ */
  CLUBS: 'clubs',
} as const

/** 手具の種類のどれか1つ */
export type ApparatusKind = (typeof ApparatusKind)[keyof typeof ApparatusKind]

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
    ? { text: cell, colSpan: 1, rowSpan: 1, slash: false }
    : {
        text: cell.text,
        colSpan: cell.colSpan ?? 1,
        rowSpan: cell.rowSpan ?? 1,
        slash: cell.slash ?? false,
      }

/**
 * 行の見出しの列が要るか。見出しの付いた行が1つでもあれば要る
 * @param table - 表
 * @returns 行の見出しの列を出すなら true
 */
export const hasRowHeader = (table: RuleTable): boolean =>
  table.cornerLabel !== undefined || table.rows.some((row) => row.header !== undefined)

/**
 * 左から何列を行の見出しにするか
 * @param table - 表
 * @returns 行の見出しにする列の数。指定が無ければ 0
 */
export const headerColumnCount = (table: RuleTable): number => table.headerColumns ?? 0

/**
 * 行の見出しが、番号のように短いものばかりか。
 *
 * @remarks
 * 難度表の通し番号のような列に、本文と同じ最小の幅を当てると、
 * 番号1つのために広い列ができてしまう
 *
 * @param table - 表
 * @returns どの見出しも3文字以内なら true
 */
export const hasShortRowHeader = (table: RuleTable): boolean =>
  table.rows.every((row) => (row.header ?? '').length <= 3)

/**
 * 縦に続く空のます目を、上のます目にまとめた結果。
 *
 * @remarks
 * `rowSpan` が 0 のます目は、上のます目に呑まれたので出さない
 */
export interface MergedRuleTableCell {
  /** ます目の中身 */
  readonly text: string
  /** 横にいくつ分か */
  readonly colSpan: number
  /** 縦にいくつ分か。0 なら上に呑まれたので出さない */
  readonly rowSpan: number
  /** 斜線を引くか */
  readonly slash: boolean
}

/**
 * 縦に続く空のます目を、上のます目にまとめる。
 *
 * @remarks
 * 欠点表のように「分類」「内容」が何行かにわたって同じ表では、2行目から先を
 * 空にして書いてある。そのまま出すと空の枠が並んで読みにくいので、上のます目を
 * 縦に伸ばして1つにする。
 *
 * 区分の見出し（`group`）をまたいでは、まとめない。区分が変われば別のかたまりになる
 *
 * @param table - 表
 * @returns 行ごと・ます目ごとの、まとめた結果
 */
export const mergeEmptyCellsDownward = (
  table: RuleTable,
): readonly (readonly MergedRuleTableCell[])[] => {
  const rows = table.rows.map((row) => row.cells.map(normalizeRuleTableCell))
  const merged: MergedRuleTableCell[][] = rows.map((cells) =>
    cells.map((cell) => ({
      text: cell.text,
      colSpan: cell.colSpan,
      rowSpan: cell.rowSpan,
      slash: cell.slash,
    })),
  )

  if (!table.mergeEmptyCells) return merged

  const columnCount = Math.max(...rows.map((cells) => cells.length), 0)
  /** まとめる列。書いていなければすべての列 */
  const targets = Array.isArray(table.mergeEmptyCells) ? table.mergeEmptyCells : undefined

  for (let column = 0; column < columnCount; column += 1) {
    if (targets && !targets.includes(column)) continue

    let anchor = -1
    for (let row = 0; row < merged.length; row += 1) {
      // 区分の見出しで区切る。区分が変われば、まとめ直す
      if (table.rows[row].group !== undefined) anchor = -1

      /*
        左の列が新しい値になった行から、新しいかたまりが始まる。

        大分類が変わったのに小分類の空のます目が前のかたまりにつながると、
        別の分類の見出しに呑まれてしまう。
        かたまりの先頭は、中身が空でもそこを起点にする。
        そうしないと、名前の無い小分類（倒立など）が行ごとに分かれてしまう
      */
      if (rows[row].slice(0, column).some((left) => left.text !== '')) anchor = row

      const cell = merged[row][column]
      if (cell === undefined) continue

      if (cell.text === '' && anchor >= 0 && anchor !== row) {
        merged[anchor][column] = {
          ...merged[anchor][column],
          rowSpan: merged[anchor][column].rowSpan + 1,
        }
        merged[row][column] = { ...cell, rowSpan: 0 }
      } else if (cell.text !== '') {
        anchor = row
      }
    }
  }

  return merged
}
