/**
 * ViewValueLayout
 * @description レイアウト用の値を定義
 * @export
 * @interface ViewValueLayout
 * @property {string} title ページタイトル
 * @property {string} description ページの説明
 * @property {boolean} noindex noindexの設定
 * @property {boolean} nofollow nofollowの設定
 * @property {string} canonical canonicalの設定
 * @property {object} ogp OGPの設定
 * @property {string} ogp.title OGPのタイトル
 * @property {string} ogp.description OGPの説明
 * @property {string} ogp.url OGPのURL
 * @property {string} ogp.type OGPのタイプ
 * - website: indexページ
 * - website: articleに該当しない個別ページ, アーカイブとかも含む
 * - article: 記事, 投稿, ブログ記事など
 * - profile: プロフィール, プロフィールページ SNSのホーム画面とか
 * - book: 本, 電子書籍のブラウザビューアとか
 * - music: 音楽, 音楽プレイヤーがメインのページ
 * - video: 動画, 動画プレイヤーがメインのページ
 */
export interface ViewValueLayout {
  title: string;
  description: string;
  noindex: boolean;
  nofollow: boolean;
  canonical: string | undefined;
  ogp: OGP;
}

interface OGP {
  title: string;
  description: string;
  url: string;
  type: OGPType;
}

type OGPType = "website" | "article" | "profile" | "book" | "music" | "video";
