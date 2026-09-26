/**
 * 解説のページを指す鍵と、その並び。
 *
 * @remarks
 * **ここが唯一の正**。ページを増やすとき・減らすときは、まずこの木を直す。
 * 木に無い鍵のページは書けず、URL も生えない。
 *
 * 木は「これから作る全体像」で、**本文を書いた鍵だけが公開される**
 * （`api/content/ja` に本文が無い鍵は URL を生やさない）。
 * だから、書く前から全体の形を置いておける。
 *
 * 階層は3段まで。それ以上深くしない。決め方は `docs/rules-guide.md` の5による
 */
export const GUIDE_KEY_TREE = {
  /** そもそもどんな競技か */
  basics: {},
  /** 点はどう決まるか */
  score: {
    /** 難度（D） */
    difficulty: {},
    /** 構成・芸術（A） */
    artistry: {},
    /** 実施（E） */
    execution: {},
    /** 減点 */
    deduction: {},
  },
  /** 団体（5人）のルール */
  group: {
    /** 隊形移動 */
    formation: {},
  },
  /** 個人のルール */
  individual: {
    /** 手具4種 */
    apparatus: {},
  },
  /** 徒手体操 */
  toshu: {},
  /** 用語集 */
  words: {},
} as const

/** 鍵の木の形 */
type KeyTree = { readonly [key: string]: KeyTree }

/**
 * 木を点でつないだ鍵の並びにほどく。
 *
 * @remarks
 * `{ score: { difficulty: {} } }` から `'score' | 'score.difficulty'` を作る
 */
type Paths<T extends KeyTree> = {
  [K in keyof T & string]: keyof T[K] extends never ? K : K | `${K}.${Paths<T[K]>}`
}[keyof T & string]

/**
 * 解説のページを指す鍵。
 *
 * @remarks
 * `score.difficulty` のような、点でつないだ英字の名前
 */
export type GuideKey = Paths<typeof GUIDE_KEY_TREE>

/** いちばん上の鍵（`/rules/basics/` のように、1段目に来るもの） */
export type GuideTopKey = keyof typeof GUIDE_KEY_TREE

/**
 * ある鍵のすぐ下にぶら下がる鍵。孫は含まない。
 *
 * @remarks
 * 親のページに子の一覧を出すときに使う。孤立したページを作らないための型
 */
export type GuideChildKey<K extends GuideKey> = {
  [Child in GuideKey]: Child extends `${K}.${infer Rest}`
    ? Rest extends `${string}.${string}`
      ? never
      : Child
    : never
}[GuideKey]

/**
 * 木をたどって、鍵を全部集める
 * @param tree - 鍵の木
 * @param prefix - ここまでの鍵
 * @returns 上から順に並べた鍵
 */
const collectKeys = (tree: KeyTree, prefix = ''): GuideKey[] =>
  Object.keys(tree).flatMap((name) => {
    const key = prefix === '' ? name : `${prefix}.${name}`
    return [key as GuideKey, ...collectKeys(tree[name], key)]
  })

/** 木にあるすべての鍵。親が子より先に来る */
export const GUIDE_KEYS: readonly GuideKey[] = collectKeys(GUIDE_KEY_TREE)

/**
 * 鍵を URL の一部にする
 * @param key - 解説のページの鍵
 * @returns `score.difficulty` なら `score/difficulty`
 */
export const guideKeyToPath = (key: GuideKey): string => key.split('.').join('/')

/**
 * URL の一部を鍵に戻す
 * @param path - `score/difficulty` の形
 * @returns 木にある鍵。無ければ `undefined`
 */
export const guidePathToKey = (path: string): GuideKey | undefined => {
  const key = path
    .replace(/^\/+|\/+$/g, '')
    .split('/')
    .join('.')
  return GUIDE_KEYS.find((candidate) => candidate === key)
}

/**
 * 親の鍵を返す
 * @param key - 解説のページの鍵
 * @returns `score.difficulty` なら `score`。いちばん上の鍵なら `undefined`
 */
export const guideParentKey = (key: GuideKey): GuideKey | undefined => {
  const at = key.lastIndexOf('.')
  return at === -1 ? undefined : (key.slice(0, at) as GuideKey)
}

/**
 * すぐ下の子の鍵を返す
 * @param key - 解説のページの鍵
 * @returns 子の鍵。無ければ空
 */
export const guideChildKeys = (key: GuideKey): GuideKey[] =>
  GUIDE_KEYS.filter((candidate) => guideParentKey(candidate) === key)
