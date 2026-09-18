import { m } from '$lib/paraglide/messages'

/**
 * 男子新体操の手具。
 *
 * @remarks
 * 並びは競技で使う順（スティック・リング・ロープ・クラブ）。
 * `label` は表示中の言語の表記を返す関数なので、サーバーからブラウザーへ渡すデータには入れられない。
 * 渡すときは `slug` だけにする
 */
export const Apparatus = {
  STICK: { slug: 'stick', label: m.apparatus_stick, isPair: false },
  RING: { slug: 'ring', label: m.apparatus_ring, isPair: true },
  ROPE: { slug: 'rope', label: m.apparatus_rope, isPair: false },
  CLUB: { slug: 'club', label: m.apparatus_club, isPair: true },
} as const

/** 手具を競技で使う順に並べたもの */
export const APPARATUSES = Object.values(Apparatus)
