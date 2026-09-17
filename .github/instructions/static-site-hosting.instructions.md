---
description: 静的書き出し（adapter-static）と Amplify での配信、SEO・OGP の決まり
applyTo: '{src/routes/**/*,src/app.html,src/lib/hooks/**/*,src/model/**/*,static/**/*,svelte.config.js,amplify.yml}'
name: 静的サイトの書き出しと配信
---

# Static Site Hosting - 静的サイトの書き出しと配信

## 前提

- サイトは SvelteKit の `adapter-static` で**すべてのページを HTML に書き出し**、AWS Amplify が静的ファイルとして配信する。サーバーで動く処理は無い
- `+page.server.ts` の `load` はビルド時に1回だけ動く。リクエストごとの処理（クッキー・認証・その場の検索など）は書けない
- URL のクエリで中身が変わるページ（推しミツ！の検索結果）は、ブラウザー側で `location` から条件を読む

## ページの追加

- ルートは `src/routes/<パス>/` に `+page.server.ts` と `+page.svelte` を置き、画面の中身は `src/views/page/<パス>/Page.svelte` に書く（Phase 3 で FSD へ移す予定）
- `+page.server.ts` はメタ情報（`layout`: title・description・canonical・OGP）を返す。型は `src/model/view-value-layout.ts`
  - title は `<ページ名> | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~` の形にそろえる
  - `path` は末尾スラッシュなしで書く（canonical と `og:url` は自動で末尾スラッシュを付ける）
- 末尾スラッシュは `trailingSlash = 'always'`（`src/routes/+layout.server.ts`）。リンクも `/calendar/` のように末尾スラッシュ付きで書く
- 動的なパス（`[id]`）は `entries` で書き出すページを列挙し、`prerender = true` にする
- 新しいページは `src/routes/sitemap.xml/+server.ts` の `STATIC_ENTRIES` に足す。クエリで中身が変わるページと、書き換えルールの受け皿は載せない

## SEO・SNS

- `og:image` は絶対 URL の 1200×630 の画像（`static/images/ogp.png`）
- 大会の詳細ページには構造化データ（schema.org の `SportsEvent`）を入れている。項目を変えたら Google のリッチリザルト テストで確かめる
- `<html lang="ja">`。英語の文章は `lang="en"` を付けた要素で囲む（今は日英併記）
- 多言語化（TODO 3-4）のあとは、言語ごとにページを書き出す。守ること:
  - URL に言語を入れる（日本語は今の URL のまま、英語は `/en/...`）。クエリや Cookie で言語を切り替えない（静的に書き出せず、検索エンジンにも別ページと認識されない）
  - `<html lang>` を言語ごとに変え、各ページに `hreflang` の代替リンク（`ja`・`en`・`x-default`）を入れる
  - sitemap に全言語のページを載せ、`xhtml:link` で対応するページを示す
  - canonical はその言語のページ自身を指す。OGP（`og:locale` と `og:locale:alternate`、title・description）も言語ごとに出す
  - 構造化データの名称・会場なども、その言語の値にする

## 環境変数

- 使えるのは `PUBLIC_` で始まる公開値だけ（`.env` に置き、git 管理している）。秘密情報は置かない
- `$env/static/public` から読む。値はビルド時に埋め込まれる
- アクセス解析は Cloudflare Web Analytics（Cookie を使わない）。トークンは `PUBLIC_CF_BEACON_TOKEN`

## Amplify

- ビルド手順・レスポンスヘッダー・リダイレクトは `amplify.yml` にある。書き換えルール（`/<*>` → `/404.html`）はコンソール側の設定
- HTML は毎回取りに行く（`Cache-Control: no-cache`）。ファイル名にハッシュが入る `/_app/immutable/**` は長期キャッシュ
- ビルドの設定・Node の版・依存を変えたら、`main` か `develop` 向けの PR のプレビューでビルドが通ることを確かめてからマージする

## 本番への反映の確かめ方

**HTML の文字列だけでは、新しいビルドが配信されているかを判定しにくい。** 存在しないパスは入れ物の `404.html` を返し、中身はブラウザー側で描かれる（以前は全ページがこの状態で、反映の判定を誤ったことがある）。次で確かめる。

- `https://imrg.work/_app/version.json` … ビルド時刻。デプロイのたびに変わる。マージ前の値と比べる
- そのビルドにしか無いファイル（例: `https://imrg.work/calendar/__data.json`）が返るか
- 実際の表示はヘッドレスブラウザーで確かめる。件数の多いページは描画に時間がかかる
- セキュリティーヘッダーは `curl -sI https://imrg.work/` で確かめる
