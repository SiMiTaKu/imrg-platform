---
description: 静的書き出し（adapter-static）と S3 + CloudFront での配信、SEO・OGP の決まり
applyTo: '{web/src/routes/**/*,web/src/app.html,web/src/lib/hooks/**/*,web/src/model/**/*,web/static/**/*,web/svelte.config.js,terraform/**/*,.github/workflows/*deploy*.yml}'
name: 静的サイトの書き出しと配信
---

# Static Site Hosting - 静的サイトの書き出しと配信

## 前提

- サイトは SvelteKit の `adapter-static` で**すべてのページを HTML に書き出し**、AWS Amplify が静的ファイルとして配信する。サーバーで動く処理は無い
- `+page.server.ts` の `load` はビルド時に1回だけ動く。リクエストごとの処理（クッキー・認証・その場の検索など）は書けない
- URL のクエリで中身が変わるページ（推しミツ！の検索結果）は、ブラウザー側で `location` から条件を読む

## ページの追加

- ルートは `web/src/routes/<パス>/` に `+page.server.ts` と `+page.svelte` を置き、画面の中身は `web/src/pages/<ページ>/` に書く
- パスは `web/src/shared/routes/index.ts` の `ROUTES` に足す（末尾スラッシュ付き）
- `+page.server.ts` は `meta: META_DATA.xxx()`（`web/src/shared/config/meta.ts`）を返す。文言は `web/messages/meta/<言語>.json`
  - title は `m.meta_page_title({ page })` で `<ページ名> | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~` の形にそろえる
- `+page.svelte` は `<PageHead meta={data.meta} />`（`@widgets/layout`）とページのコンポーネントを置くだけにする。canonical・OGP・hreflang・noindex は `PageHead` が出す
- 末尾スラッシュは `trailingSlash = 'always'`（`web/src/routes/+layout.server.ts`）。リンクは `localizeHref(ROUTES.xxx)` で書く（末尾スラッシュ付きになる）
- 動的なパス（`[id]`）は `entries` で書き出すページを列挙し、`prerender = true` にする
- 新しいページは `web/src/routes/sitemap.xml/+server.ts` の `STATIC_ENTRIES` に足す。クエリで中身が変わるページと、書き換えルールの受け皿は載せない

## SEO・SNS

- `og:image` は絶対 URL の 1200×630 の画像（`web/static/images/ogp.png`）
- 大会の詳細ページには構造化データ（schema.org の `SportsEvent`）を入れている。項目を変えたら Google のリッチリザルト テストで確かめる
- `<html lang>` は表示中の言語。日本語ページで英語を併記するときは `lang="en"` を付けた要素で囲む
- 言語ごとの仕組み（TODO 3-4a で導入済み）
  - Paraglide JS（`web/project.inlang`、文言は `web/messages/<領域>/<言語>.json`）。生成物の `web/src/lib/paraglide/` は git 管理しない
  - すべてのページを日本語（今の URL）と英語（`/en/...`）の両方で書き出す。英語版は、各ページに置いた非表示のリンク（`web/src/widgets/layout/ui/LocalePageLinks.svelte`）をクローラーがたどって書き出す
  - **訳し終えるまで、英語ページは noindex にする。** 訳し終えたページのパスを `web/src/shared/config/translation/<ページ>.ts` に足すと、noindex が外れ、`hreflang` と sitemap に英語ページが載り、メニューに言語の切り替えが出る
- 言語ごとのページで守ること:
  - URL に言語を入れる（日本語は今の URL のまま、英語は `/en/...`）。クエリや Cookie で言語を切り替えない（静的に書き出せず、検索エンジンにも別ページと認識されない）
  - `<html lang>` を言語ごとに変え、各ページに `hreflang` の代替リンク（`ja`・`en`・`x-default`）を入れる
  - sitemap に全言語のページを載せ、`xhtml:link` で対応するページを示す
  - canonical はその言語のページ自身を指す。OGP（`og:locale` と `og:locale:alternate`、title・description）も言語ごとに出す
  - 構造化データの名称・会場なども、その言語の値にする

## 環境変数

- 使えるのは `PUBLIC_` で始まる公開値だけ（`.env` に置き、git 管理している）。秘密情報は置かない
- `$env/static/public` から読む。値はビルド時に埋め込まれる
- アクセス解析は Cloudflare Web Analytics（Cookie を使わない）。トークンは `PUBLIC_CF_BEACON_TOKEN`

## 配信（S3 + CloudFront）

2026-09-20 に Amplify から移した。設定は `terraform/`、説明は `terraform/README.md`。

- ビルドと配信の手順は `.github/workflows/_deploy.yml` に1つだけ書き、3つのワークフローから呼ぶ
  - **自動デプロイ（PROD）** … `main` への push
  - **自動デプロイ（STG）** … `develop` への push
  - **手動デプロイ** … ブランチと配り先を選んで実行。前の版へ戻すときもこれを使う
- レスポンスヘッダー（HSTS ほか）は CloudFront のレスポンスヘッダーポリシー
- URL の整え方（`www` を外す・末尾スラッシュを付ける・`index.html` を返す）は CloudFront Functions（`terraform/modules/static_site/functions/request.js.tftpl`）
- HTML は毎回取りに行く（`public, max-age=0, must-revalidate`）。ファイル名にハッシュが入る `/_app/immutable/**` は長期キャッシュ。配信のたびにキャッシュを捨てる
- 無いページは CloudFront が `/404.html` を 404 で返す
- ビルドの設定・Node の版・依存を変えたら、`develop` へ入れてステージング（`https://stg.imrg.work/`）で確かめてから `main` へ入れる

## 本番への反映の確かめ方

**HTML の文字列だけでは、新しいビルドが配信されているかを判定しにくい。** 存在しないパスは入れ物の `404.html` を返し、中身はブラウザー側で描かれる（以前は全ページがこの状態で、反映の判定を誤ったことがある）。次で確かめる。

- `https://imrg.work/_app/version.json` … ビルド時刻。デプロイのたびに変わる。マージ前の値と比べる
- そのビルドにしか無いファイル（例: `https://imrg.work/calendar/__data.json`）が返るか
- 実際の表示はヘッドレスブラウザーで確かめる。件数の多いページは描画に時間がかかる
- セキュリティーヘッダーは `curl -sI https://imrg.work/` で確かめる
