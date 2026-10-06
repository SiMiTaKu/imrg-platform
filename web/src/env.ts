import { defineEnvVars } from '@sveltejs/kit/env'

/**
 * 公開する環境変数。SvelteKit 3 ではここで宣言したものだけが `$app/env/public` から読める。
 * 値は .env と、配布時に CI が渡すもの（_deploy.yml）。どれもビルド時に埋め込む（static）
 */
export const variables = defineEnvVars({
  PUBLIC_BASE_URL: {
    public: true,
    static: true,
    description: 'サイトの URL。canonical・OGP・サイトマップに使う',
  },
  PUBLIC_CF_BEACON_TOKEN: {
    public: true,
    static: true,
    description: 'Cloudflare Web Analytics のサイトトークン。空なら計測しない',
  },
  PUBLIC_RULES_PUBLISHED: {
    public: true,
    static: true,
    description: '規則集（/rules/）を出すか。"true" のときだけ中身を出す',
  },
})
