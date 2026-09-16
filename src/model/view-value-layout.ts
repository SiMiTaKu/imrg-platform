/**
 * ViewValueLayout
 *
 * レイアウト用の値を定義
 */
export interface ViewValueLayout {
  /** ページタイトル */
  title: string
  /** ページの説明 */
  description: string
  /** noindexを設定するか */
  noindex: boolean
  /** nofollowを設定するか */
  nofollow: boolean
  /** canonicalを設定するか */
  canonical: boolean
  /** ページのパス */
  path: string
  /** OGPの設定 */
  ogp: OGP
}

/** OGPの設定 */
interface OGP {
  /** OGPのタイトル */
  title: string
  /** OGPの説明 */
  description: string
  /** OGPのタイプ */
  type: OGPType
}

/**
 * OGPのタイプ
 * - website: indexページ
 * - website: articleに該当しない個別ページ, アーカイブとかも含む
 * - article: 記事, 投稿, ブログ記事など
 * - profile: プロフィール, プロフィールページ SNSのホーム画面とか
 * - book: 本, 電子書籍のブラウザビューアとか
 * - music: 音楽, 音楽プレイヤーがメインのページ
 * - video: 動画, 動画プレイヤーがメインのページ
 */
type OGPType = 'website' | 'article' | 'profile' | 'book' | 'music' | 'video'
