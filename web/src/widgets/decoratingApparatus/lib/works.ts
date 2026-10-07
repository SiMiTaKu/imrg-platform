/** 手具の識別子だけを持つもの（並べ方の関数は、写真や表記に触らない） */
interface HasSlug {
  slug: string
}

/** 手具を持つ作品 */
interface HasApparatus {
  apparatus: HasSlug
}

/** 番号を付けた作品 */
export type NumberedWork<T> = T & {
  /** 作品の番号（1 始まり）。並べ替えても変えない */
  number: number
}

/**
 * 作品に番号を付ける
 * @param works - 作品（この並びが番号になる）
 * @returns 番号を付けた作品
 */
export const numberWorks = <T>(works: readonly T[]): NumberedWork<T>[] =>
  works.map((work, index) => ({ ...work, number: index + 1 }))

/**
 * 作品を手具ごとにまとめて並べる。同じ手具の中は元の順のまま
 * @param works - 作品
 * @param order - 手具の並び（競技で使う順）
 * @returns 手具ごとにまとめた作品。`order` に無い手具の作品は落とす
 */
export const groupByApparatus = <T extends HasApparatus>(
  works: readonly T[],
  order: readonly HasSlug[],
): T[] =>
  order.flatMap((apparatus) => works.filter((work) => work.apparatus.slug === apparatus.slug))

/**
 * 手具で絞り込む
 * @param works - 作品
 * @param slug - 絞り込む手具。null ならすべて
 * @returns 絞り込んだ作品
 */
export const filterByApparatus = <T extends HasApparatus>(
  works: readonly T[],
  slug: string | null,
): T[] => (slug === null ? [...works] : works.filter((work) => work.apparatus.slug === slug))

/**
 * 作品のある手具と、その作品数
 * @param works - 作品
 * @param order - 手具の並び（競技で使う順）
 * @returns 作品が1つ以上ある手具だけを、`order` の順で
 */
export const apparatusCounts = <A extends HasSlug, T extends HasApparatus>(
  works: readonly T[],
  order: readonly A[],
): { apparatus: A; count: number }[] =>
  order
    .map((apparatus) => ({
      apparatus,
      count: works.filter((work) => work.apparatus.slug === apparatus.slug).length,
    }))
    .filter(({ count }) => count > 0)
