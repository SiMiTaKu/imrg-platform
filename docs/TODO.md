# imrg.work 改修 TODO

imrg-web-mainを、oshiageと同じ水準の構成（モノレポ・デザインシステム・FSD・Terraform）へ近づけ、
SEO・SNS・セキュリティー・CIを整えるための作業一覧。**Phase ごとに 1〜数本の PR で少しずつ進める。**

- 作成日： 2026-09-16
- 進め方： 上から順に。Phase 0は他の作業の前提になるので先に片付ける
- ブランチ運用： `feature/*` → `develop` → `master`（masterへのマージでAmplifyが本番へ反映）

---

## 現状メモ（2026-09-16 時点の調査結果）

作業を始める人が同じ調査を繰り返さないための記録。

| 項目 | 現状 |
|---|---|
| フレームワーク | SvelteKit 2.8 / Svelte 4.2（静的書き出し `adapter-static`、`fallback: index.html`） |
| ホスティング | AWS Amplify（master ブランチ）。ビルドは `.node-version` の **Node 18.18.0** |
| 配信 | **すべての HTML が 1156 バイトの入れ物ページになる**（下記 Phase 0-1） |
| CI | PR 時に `lint` と `test` のみ。`check`（型）と `build` は未実行 |
| ブランチ保護 | なし。private リポジトリーのため GitHub Free では設定不可（要 Pro か public 化） |
| セキュリティヘッダ | HSTS・X-Content-Type-Options・Referrer-Policy・CSP いずれも未設定 |
| sitemap | ファイルが存在しない（`/sitemap.xml` は 200 を返すが中身は入れ物ページ） |
| アクセス解析 | Cloudflare Web Analytics（Cookie 不使用）。`.env` の `PUBLIC_CF_BEACON_TOKEN` |
| テスト | Jest（`src/test/*.spec.ts`、47 件）。oshiage は Vitest |
| 構成 | `src/views/page/<ページ>/` 独自構成。FSD ではない。デザインシステムなし |

反映の確認方法（全ページが同じHTMLを返すため、文字列検索では判定できない）:

- `https://imrg.work/_app/version.json` … ビルド時刻。デプロイのたびに変わる
- `https://imrg.work/calendar/__data.json` … そのビルドにしか無いデータファイル
- 実際の描画はヘッドレスChromeで確認（`--virtual-time-budget=20000` 程度必要）

---

## Phase 0: 公開中のサイトの不具合と AWS 環境（最優先）

SEO・SNSカードが機能していない原因と、AWS環境の未整備を片付ける。どちらも先に済ませる必要がある。

コンソールでの操作は [aws-setup.md](aws-setup.md) に手順をまとめた。

### サイトの不具合

- [x] **0-1. 書き出した HTML を配信する**
  - 症状： `/privacy/` と `/privacy/index.html` のどちらも1156バイトの入れ物ページを返す。`.txt` `.json` `.js` はそのまま配信される
  - 原因： AmplifyのSPA用書き換えルールが、許可拡張子に `html` を含まないため `.html` を `/index.html` に差し替えている
  - 対応： 書き換えルールを `/<*>` → `/index.html` の `404-200` に置き換える。手順は [aws-setup.md](aws-setup.md) の4
  - 確認： `curl -s https://imrg.work/privacy/ | grep -c "Cloudflare Web"` が1以上になること
  - **これが直るまで、下の SEO・OGP 施策はクローラーに届かない**
- [x] **0-2. sitemap.xml を用意する**
  - 312件の大会詳細ページを含め、ビルド時に生成（`src/routes/sitemap.xml/+server.ts` で `prerender = true`）
  - `static/robots.txt` に `Sitemap: https://imrg.work/sitemap.xml` を追記
- [x] **0-3. セキュリティヘッダーを追加する**（`amplify.yml` の `customHeaders`）
  - `Strict-Transport-Security`、`X-Content-Type-Options: nosniff`、`Referrer-Policy`、`Permissions-Policy`、`X-Frame-Options`
  - CSPは段階導入（まずReport-Only。Cloudflareのビーコンと画像を許可する必要あり）
  - 現在の `Cache-Control: no-store` は全ファイル対象。ハッシュ付きの `/_app/immutable/*` は長期キャッシュに変える
- [x] **0-4. OGP・構造化データを整える**
  - `og:image` を絶対URLの1200×630のカード画像に（現在はロゴ画像の相対パス）
  - `twitter:card`・`og:locale`・`og:type`（詳細ページは `article`）を見直す
  - 大会詳細ページにJSON-LD（`SportsEvent`）を入れる。日程・会場・URLが検索結果に出る
  - `<html lang="en">` を `ja` に直す（`src/app.html`）

- [x] **0-9. トップページのHTMLが入れ物ページに上書きされる**
  - 症状： `/` だけ1156バイトのまま。ビルドが `build/index.html` を入れ物ページで上書きしている
  - 対応： `svelte.config.js` の `fallback` を `404.html` へ変える。あわせてAmplifyの書き換え先も `/404.html` にする
  - 順番： まずコードを反映する。そのあとコンソール側の書き換え先を変える

2026-09-16に0-1〜0-4と0-9を反映済み。sitemap 321件、構造化データ、セキュリティーヘッダー、トップページのHTMLを本番で確認した。

### AWS 環境の整備

現在はrootユーザーでログインして運用している。請求事故と権限事故を防ぐため、早い段階で整える。

- [x] **0-5. root ユーザーの常用をやめる**
  - 管理用のIAMユーザー（またはIAM Identity Centerのユーザー）を作り、普段はそちらで作業する
  - rootにMFAを設定する。rootのアクセスキーがあれば削除する
- [x] **0-6. 請求の保護**
  - 予算のしきい値を決めてアラートを設定する。コスト異常検知も有効にする
  - 支払い方法と連絡先のメールアドレスを確認する
- [x] **0-7. 権限の整理**
  - Amplifyとドメインの操作に必要な権限だけを持つロールを用意する
  - Terraform用のロールには、state置き場（S3とDynamoDB）への権限を含める
- [x] **0-8. 記録を残す**
  - CloudTrailを有効にして、ログの保存先を決める
  - どのリソースがどのアカウントにあるかをdocsに書く

## Phase 1: 依存関係の更新と土台の整理

- [x] **1-1. 使っていない依存を削除する**
  - `aws-amplify` `svelte-chartjs` `felte` `cookie` `@types/cookie` `@neoconfetti/svelte` `@fontsource/fira-mono`、そして `latest`（中身のない事故パッケージ）
  - `chart.js`（採点ページのレーダーチャート）と `date-fns`（推しミツ！の日付表示）は使っているので残す
  - `svelte-motion`（採点ページの開閉アニメーション）はSvelte 5で動かないため、1-3でCSSのtransitionに置き換えて削除する
  - textlint系は `dependencies` にあるので `devDependencies` へ移す
- [ ] **1-2. Node を上げる**（`.node-version` 18.18.0 → 22系）。Amplifyのビルドも追随する
- [ ] **1-3. Svelte 4 → 5**（runesへの移行は段階的に。まず動かし、後からコンポーネントごとに書き換え）
- [ ] **1-4. SvelteKit・Vite・svelte-check を最新へ**（`svelte-check` 3 → 4）
- [ ] **1-5. ESLint 8 → 9（flat config へ移行）**。oshiageの `eslint.config.mjs` に合わせる
  - 現在の `.eslintrc.json` は配列を1要素ずつ改行させるなど癖が強い。移行時に見直す
- [ ] **1-6. Jest → Vitest**（oshiageと揃える。既存47件のテストを移植）
- [ ] **1-7. 型チェックのエラーを解消する**（現在11件。`$env/static/public` の解決と `rules` ページの型）

## Phase 2: CI とブランチ運用

- [ ] **2-1. CI を強化する**：PRで `lint` → `check` → `test` → `build` を実行（現在はlintとtestのみ）
- [ ] **2-2. ブランチ保護**：`master` と `develop` を直push禁止、PR必須、CI必須
  - privateのままならGitHub Proが必要。費用をかけないならpublic化も選択肢（`.env` に秘密情報がないことは確認済み）
- [ ] **2-3. Dependabot**（npm・GitHub Actions）と `npm audit` をCIに追加
- [ ] **2-4. PR テンプレート・CODEOWNERS・`delete_branch_on_merge` を有効化**
- [ ] **2-5. PR ごとのプレビュー環境**（Amplifyのプレビュー機能）
- [ ] **2-6. 本番のブランチを `master` から `main` へ変える**
  - 運用を `feature/*` → `develop` → `main` にする（`main` へのマージで本番へ反映）
  - 手順
    1. `master` から `main` を作ってpushする
    2. Amplifyで `main` ブランチを接続し、本番（`imrg.work`）のドメインの割り当てを `main` へ移す。反映を `https://imrg.work/_app/version.json` で確かめる
    3. CI（`.github/workflows/`）の対象ブランチ、ブランチ保護（2-2）、README・docs・この表の「ブランチ運用」を `main` に直す
    4. 開いているPRのマージ先を直してから、Amplifyの `master` の接続と `master` ブランチを消す
  - ドメインの割り当てを移す間は、切り替わるまで数分かかることがある。アクセスの少ない時間に行う
  - Terraform（Phase 4）へ取り込む前に済ませる。先に取り込むと、ブランチ名の差分が出るため

## Phase 3: モノレポ化・FSD・デザインシステム

- [ ] **3-0. リポジトリー名を変える**（`imrg-web-main` → 新しい名前。3-1の直前に行う）
  - モノレポにすると `web` 以外のパッケージも入るため、`-main` の付いた今の名前が中身と合わなくなる
  - `imrg-web` のようにWebに限った名前も、デザインシステム・Terraform・ツール類が入ると中身とずれる。特定の用途を表さない名前にする
  - 候補： `imrg-platform`（サイトと、それを支える部品・インフラ一式）、`imrg-workspace`。動画・資料を置く `imrg-hub` と紛れない名前にする
  - GitHubの名前変更は元に戻せる。旧URLからの転送（`git push` `git clone` とブラウザー）も効くので、手元の作業はすぐには止まらない
  - 影響と対応
    - **Amplify**：旧方式（OAuthとwebhook）でつながっている。webhookは2本（アプリID `d1d0cu0fwxm76y` と `d1o1ui2gd5pshh`）。変更後に `develop` へpushしてビルドが走るか確かめる。走らなければコンソールでリポジトリーを再接続し、あわせてGitHub App方式へ移す。使っていないほうのアプリはこのとき整理する
    - **手元のclone**：`git remote set-url origin git@github.com:SiMiTaKu/<新しい名前>.git`。フォルダー名 `~/imrg/imrg-web-main` も合わせて変える（imrg-hubのメモやdocs内のパスも直す）
    - **README・docs・`package.json` の `name`** を新しい名前に揃える
    - 旧名で新しいリポジトリーを作ると転送が切れる。旧名は使わない
  - Phase 4（Terraform）より前に済ませる。先にTerraformへ取り込むと、Amplifyアプリのリポジトリー URLの差分が出るため
- [ ] **3-1. pnpm workspace へ移行**（`web` と `design-system` の2パッケージから始める）
- [ ] **3-2. FSD へ再配置**：`src/views/page/*` → `app` / `pages` / `widgets` / `features` / `entities` / `shared`
  - カレンダーはすでに近い形（`_components` `_data` `_lib`）なので、ここから着手すると移行しやすい
- [ ] **3-3. デザインシステムを作る**
  - トークン（色・余白・字送り・影・角丸）を `src/style` から切り出す
  - 共通部品（Button・ButtonLink・Card・Chip・Badge・Heading・Pagination）をStorybook付きで整理
  - a11yチェック（Storybookのa11yアドオン）を入れる

## Phase 4: Terraform 導入

Phase 0の「AWS環境の整備」を先に済ませてから着手する。

- [ ] **4-1. 現在の AWS 構成を洗い出す**（Amplifyアプリ・独自ドメイン・Route53・証明書）
- [ ] **4-2. state 置き場を用意**（S3 + DynamoDBロック。oshiageの `terraform/README.md` と同じ方針）
- [ ] **4-3. 既存リソースを `import` して差分ゼロにする**（新規作成ではなく取り込みから始める）
- [ ] **4-4. 環境変数・ヘッダー・書き換えルールをコード管理にする**（Phase 0の設定を手作業のままにしない）

## Phase 5: デザインリニューアル

- [ ] **5-1. 方向性を決める**（参考サイト・配色・写真の使い方・ロゴの扱い）
- [ ] **5-2. トップページから刷新**、続いてカレンダー・推しミツ！・ルール
- [ ] **5-3. ダークモード対応**（`prefers-color-scheme`）
- [ ] **5-4. 表示速度**（画像の最適化・フォント読み込み・LCP改善）

## Phase 6: そのほか（提案）

- [ ] **6-1. カレンダーのデータ更新の仕組みをリポジトリーに入れる**
  - 現在は `~/imrg/calendar-data/` に置いてある（リポジトリーの外）。使い方は同じ場所のREADMEにある
  - `tools/calendar/` として取り込み、更新手順を `docs/` に書く
- [ ] **6-2. 404 ページを用意する**（現在は入れ物ページが返るだけ）
- [ ] **6-3. アクセシビリティ点検**（コントラスト・キーボード操作・見出し階層）
- [ ] **6-4. 日英の切り替え**（現在は併記。将来的に `/en/` を分けるか検討）
- [ ] **6-5. アクセス解析の活用**（どのページが見られているかを毎月確認し、次の施策を決める）
- [ ] **6-6. `PUBLIC_BASE_PATH: 'https//imrg.work'`（`amplify.yml`）のタイポを直す**。未使用なら削除する
