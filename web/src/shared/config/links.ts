/**
 * サイトの外へのリンク先。
 *
 * @remarks
 * 同じ URL を何か所にも書かないよう、外部リンクはここにまとめる。
 * SNS のアイコンや大きさなど、見せ方の情報は使う側（`widgets/layout` の `SNS_LINKS` など）が持つ
 */
export const LINKS = {
  /** 問い合わせ先。YouTube チャンネルの運営者の Instagram */
  instagram: 'https://www.instagram.com/takumi.rg/',
  /** YouTube チャンネル（登録の確認付き） */
  youtube: 'https://www.youtube.com/channel/UCK-OUvWo6IQz2W6Z-fH27BQ?sub_confirmation=1',
  /** X（旧 Twitter） */
  x: 'https://twitter.com/TakumiShimizu43',
  /** TikTok */
  tiktok: 'https://www.tiktok.com/@takumishimizu43?lang=ja-JP',
  /** YouTube の利用規約 */
  youtubeTerms: 'https://www.youtube.com/t/terms',
  /** Google のプライバシーポリシー */
  googlePrivacy: 'https://policies.google.com/privacy',
  /** Google API サービスのユーザーデータに関するポリシー */
  googleUserDataPolicy: 'https://developers.google.com/terms/api-services-user-data-policy',
  /** Google アカウントの、連携アプリの権限の設定 */
  googlePermissions: 'https://security.google.com/settings/security/permissions',
  /** Cloudflare のプライバシーポリシー */
  cloudflarePrivacy: 'https://www.cloudflare.com/privacypolicy/',
} as const
