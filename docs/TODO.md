# imrg.work 改修 TODO

imrg.work（このリポジトリー。旧名 `imrg-web-main`）を、oshiageと同じ水準の構成（モノレポ・デザインシステム・FSD・Terraform）へ近づけ、
SEO・SNS・セキュリティー・CIを整えるための作業一覧。**Phase ごとに 1〜数本の PR で少しずつ進める。**

- 作成日： 2026-09-16
- 進め方： 上から順に。Phase 0は他の作業の前提になるので先に片付ける
- ブランチ運用： `feature/*` → `develop` → `main`（mainへのマージでAmplifyが本番へ反映。2026-09-17までは `master`）

---

## 現状メモ（2026-09-16 時点の調査結果）

作業を始める人が同じ調査を繰り返さないための記録。

| 項目                 | 現状                                                                                |
| -------------------- | ----------------------------------------------------------------------------------- |
| フレームワーク       | SvelteKit 2.8 / Svelte 4.2（静的書き出し `adapter-static`、`fallback: index.html`） |
| ホスティング         | AWS Amplify（master ブランチ）。ビルドは `.node-version` の **Node 18.18.0**        |
| 配信                 | **すべての HTML が 1156 バイトの入れ物ページになる**（下記 Phase 0-1）              |
| CI                   | PR 時に `lint` と `test` のみ。`check`（型）と `build` は未実行                     |
| ブランチ保護         | なし。private リポジトリーのため GitHub Free では設定不可（要 Pro か public 化）    |
| セキュリティヘッダー | HSTS・X-Content-Type-Options・Referrer-Policy・CSP いずれも未設定                   |
| sitemap              | ファイルが存在しない（`/sitemap.xml` は 200 を返すが中身は入れ物ページ）            |
| アクセス解析         | Cloudflare Web Analytics（Cookie 不使用）。`.env` の `PUBLIC_CF_BEACON_TOKEN`       |
| テスト               | Jest（`src/test/*.spec.ts`、47 件）。oshiage は Vitest                              |
| 構成                 | `src/views/page/<ページ>/` 独自構成。FSD ではない。デザインシステムなし             |

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
- [x] **1-2. Node を上げる**（`.node-version` 18.18.0 → 24.21.0）。Amplifyのビルドも追随する
  - 当初は22系の予定だったが、22系は2027年4月でサポートが終わるため、oshiageと同じ24系にした
  - Amplifyは `nvm install $(cat .node-version)` で入れるので、設定の変更は不要
- [x] **1-3. Svelte 4 → 5**（runesへの移行は段階的に。まず動かし、後からコンポーネントごとに書き換え）
  - 書き方は今のまま（`export let` `$:` `on:click`）。Svelte 5はこの書き方も動かせる
  - `svelte-motion` はCSSのtransitionに置き換えて削除した
  - [ ] **1-3b. runesへ書き換える**（`$props` `$state` `$derived` `onclick`）。ページ単位で少しずつ。FSDへの再配置（3-2）と同時に行うと手戻りが少ない
- [x] **1-4. SvelteKit・Vite・svelte-check を最新へ**（`svelte-check` 3 → 4）
  - Vite 5 → 8、vite-plugin-svelte 7、vite-imagetools 12、SvelteKit 2.70
  - TypeScriptは5系の最新まで。6はJestの設定ファイルを読めなくなるため、Jestを外す1-6で上げる（7はSvelteKitが未対応）
- [x] **1-5. ESLint 8 → 9（flat config へ移行）**。oshiageの `eslint.config.mjs` に合わせる
  - 現在の `.eslintrc.json` は配列を1要素ずつ改行させるなど癖が強い。移行時に見直す
  - `eslint.config.mjs` へ移し、typescript-eslint 8・eslint-plugin-svelte 3にした。使っていなかった `eslint-config-standard-with-typescript` などは削除
  - 対象を `src` だけから、設定ファイルを含むリポジトリー全体に広げた
- [x] **1-5b. 整形をPrettierに任せる**（oshiageの `.prettierrc.json` に合わせ、ESLintの見た目のルールを外す。全ファイルを一度だけ整形する）
  - あわせてhusky 9・lint-staged 17へ上げた。`npm install` でコミット時のフックが有効になる
- [x] **1-6. Jest → Vitest**（oshiageと揃える。既存47件のテストを移植）
  - Vitest 5にした。テストは55件（カレンダーとsitemapの分が増えていた）。置き場所は `src/test/` のまま。FSDへの再配置（3-2）で見直す
  - Jestを外したので、TypeScriptを6へ上げた
- [x] **1-7. 型チェックのエラーを解消する**（現在11件。`$env/static/public` の解決と `rules` ページの型）
  - 着手時は13件（依存の更新の途中で8件）。0件にした
  - `$env` が解決できなかったのは、`tsconfig.json` の `include` がSvelteKitの生成する型定義を含んでいなかったため
  - 推しミツ！の検索結果ページは、ルートが存在しないプロパティ `criteria` を渡していた。ページはURLから条件を読む作りなので、渡すのをやめた（動作は変わらない）
- [x] **1-8. lintをoshiageと同じ厳しさにする**（1-5のレビューで追加）
  - `eslint.config.mjs` をoshiageと同じ構成にした。exportする関数・型のJSDoc（TSDoc形式）必須、グローバルの `parseInt` 禁止など
  - stylelintを入れ、`.stylelintrc.json` もoshiageと同じにした（プロパティの並び順、`rem` と `:global` の禁止など）
  - 例外が2つある
    - `margin` の禁止（92か所）は警告にとどめた。レイアウトの組み直しになるので5-5で対応する
    - 規約ページの本文（スロットで渡す中身）への体裁は `:global` が必要なので、その箇所だけ止めた
  - typescript-eslintの型情報を使うルール（`strictTypeChecked`）は、oshiageと揃えるため今回は入れていない。入れる場合は両方のリポジトリーで同時に行う

## Phase 2: CI とブランチ運用

- [x] **2-1. CI を強化する**：PRで `lint` → `check` → `test` → `build` を実行（現在はlintとtestのみ）
  - `.github/workflows/ci.yml` で、整形 → lint → 型 → テスト → ビルドを実行する。手元では `pnpm run verify` で同じ確認ができる
  - マージ先を問わずすべてのPRで動かす（スタックPRの途中にも走る）。`develop` と `main` へのpushでも動かす
- [x] **2-2. ブランチ保護**：`main` と `develop` を直push禁止、PR必須、CI必須
  - privateのままならGitHub Proが必要。費用をかけないならpublic化も選択肢（`.env` に秘密情報がないことは確認済み）
  - 2026-09-17に `imrg-platform` を公開し、無料で使えるルールセットを2つ入れた（Settings → Rules → Rulesets）
    - 「develop・mainの保護」：PR必須（承認は0件）、CI（`verify`）の合格必須、強制pushとブランチ削除の禁止。例外なし
    - 「develop・mainを更新できるのはオーナーだけ」：リポジトリー管理者だけが例外（PR経由のとき）
  - 2つ目のルールのため、オーナーがマージするときは例外の指定が要る（画面では「Merge without waiting for requirements」にチェック、CLIでは `gh pr merge --admin`）。1つ目のルールには例外が無いので、この指定を付けてもCIが落ちたPRはマージできない
  - 共同作業者はいない（sou-nkymさんの権限は外した）。外部の人のPRは、CIの実行前に毎回承認が要る設定にした
- [x] **2-3. Dependabot**（npm・GitHub Actions）と `npm audit` をCIに追加
  - `.github/dependabot.yml`：毎週月曜にpnpmの依存とGitHub Actionsの更新PRを `develop` 向けに出す。メジャー以外は1本にまとめ、公開から3日たった版だけを使う
  - 脆弱性の通知と、修正PRの自動作成を有効にした
  - CIで `pnpm audit` を実行する。本番の依存にhigh以上があれば止め、開発用の依存は知らせるだけ
  - 開発用の依存にあった22件は `pnpm-workspace.yaml` の `overrides` で修正版に上げ、0件にした
  - Dependabotで出さないメジャー更新（`.github/dependabot.yml` の `ignore`）
    - `@types/node`：型の版は、実際に使うNode（24系）とそろえる。Nodeの更新と同時に上げる
    - `textlint`：15にすると `textlint-rule-preset-jtf-style` のルール `2.1.6.カタカナの長音` が何も検出しなくなる（2026-09-17に確認。jtf-styleを最新の3系にしても同じ）。ルールが対応したら外す
  - [x] **2-3a. npmからpnpmへ移す**（2-3と同時に行うことにした。pnpm 12。版は `package.json` の `packageManager`）
    - `package-lock.json` の版をそのまま `pnpm-lock.yaml` へ移した（`pnpm import`）
    - pnpm 11以降は依存のインストール時スクリプトを許可制にしているので、`pnpm-workspace.yaml` の `allowBuilds` で決める
    - Amplifyはcorepackでpnpmを入れる。キャッシュは `.pnpm-store`
- [x] **2-4. PR テンプレート・CODEOWNERS・`delete_branch_on_merge` を有効化**
  - PRテンプレートと、Issueのテンプレート（改善・不具合）を置いた
  - マージしたブランチを自動で消す設定を有効にし、マージ済みの古いブランチを整理した
  - CODEOWNERSは、一人で運用しているので作らないことにした
- [x] **2-5. PR ごとのプレビュー環境**（Amplifyのプレビュー機能）
  - 新しいAmplifyアプリ（`d3fj0jchd8ri0z`）で、`main` と `develop` 向けのPRにプレビューが作られる（`https://pr-<番号>.d3fj0jchd8ri0z.amplifyapp.com`）
  - `develop` 自体も `https://develop.d3fj0jchd8ri0z.amplifyapp.com` で見られる
- [x] **2-7. ESLint 9 → 10**（9系のサポートが終わったため。2026-09-17時点の最新は10.10.0）
  - 使っているプラグインはすべて10に対応済みで、設定の変更は不要だった
  - oshiageはまだ9系。揃えるならoshiage側も10へ上げる
- [x] **2-8. 実装のルールを `.github/instructions/` に整える**（oshiageのルールをもとにする）
  - 流用した：共通ルール、資料のリンク集、フロントエンドの基盤ルールと設計指針、単体・結合・E2Eテスト
  - 書き換えた：FSDとデザインシステムへの移行前であること、APIの無い静的サイトであること、日英併記、Svelte 5の自己終了タグ、runesへの移行途中であること
  - 追加した：開発の進め方（ブランチ・pnpm・コミット・PR・スタックPRのマージ）、静的サイトの書き出しと配信
  - バックエンドのルール3本は、このリポジトリーにバックエンドが無いので入れていない
  - Claude Code向けに、ルートの `CLAUDE.md` から同じルールへ案内する。Phase 3でFSDへ移したら、設計指針の「今の構成」を消す
- [x] **2-6. 本番のブランチを `master` から `main` へ変える**（2026-09-17。`imrg.work` と `www` を新しいアプリの `main` に割り当て、`master` ブランチは消した）
  - 運用を `feature/*` → `develop` → `main` にする（`main` へのマージで本番へ反映）
  - 手順
    1. `master` から `main` を作ってpushする
    2. Amplifyで `main` ブランチを接続し、本番（`imrg.work`）のドメインの割り当てを `main` へ移す。反映を `https://imrg.work/_app/version.json` で確かめる
    3. CI（`.github/workflows/`）の対象ブランチ、ブランチ保護（2-2）、README・docs・この表の「ブランチ運用」を `main` に直す
    4. 開いているPRのマージ先を直してから、Amplifyの `master` の接続と `master` ブランチを消す
  - コンソールの操作は [aws-setup.md](aws-setup.md) の8にまとめた（3-0の新しいリポジトリーへのつなぎ替えと同時に行う）
  - ドメインの割り当てを移す間は、切り替わるまで数分かかることがある。アクセスの少ない時間に行う
  - Terraform（Phase 4）へ取り込む前に済ませる。先に取り込むと、ブランチ名の差分が出るため

## Phase 3: モノレポ化・FSD・デザインシステム

- [x] **3-0. リポジトリー名を変える**（`imrg-web-main` → `imrg-platform`。2026-09-17）
  - モノレポにすると `web` 以外のパッケージも入るため、用途を表さない名前にした
  - 名前の変更ではなく、**新しいリポジトリーを作って移した。** コミット履歴の作成者欄に個人のGmailが102件あり、公開前に消すため。履歴を書き換えた（ファイルの中身は同じ）
    - 同じリポジトリーで書き換えても、GitHubが持つ過去のPRの参照（241件）に古いコミットが残り、公開すると見えてしまう
    - 今後のコミットはGitHubの非公開アドレスで作る（手元の `git config user.email`）
  - 移したもの：`develop` `main` `master` `feature/hoge` のブランチ、未完了のIssue 15件（番号は変わった）
  - 移していないもの：過去のPRの画面とレビューの記録。古いリポジトリー `imrg-web-main` を非公開のまま残して参照する
  - 手元のフォルダーは `~/imrg/imrg-platform`
  - [x] Amplifyを新しいリポジトリーへつなぎ替える（手順は [aws-setup.md](aws-setup.md) の8。2026-09-17完了。古いアプリ2つは削除し、`imrg-web-main` は非公開のままアーカイブした）
- Phase 3の進め方（2026-09-17に決めた）
  - 見た目は変えない（言語の切り替え部品だけが増える）。毎回、ビルドした全ページの表示内容・全要素の計算済みスタイル・ブラウザーでの操作を変更前と比べる
  - 順番：3-1モノレポ化 → 3-4a多言語化の仕組み → 3-3デザインシステムの土台 → 3-2 FSDへの再配置（ページごと）→ 3-4b英語の中身
  - パッケージ名は `@imrg-platform/<名前>`
  - Storybookは手元だけで見る（公開しない）。CIではビルドが通ることだけ確かめる
  - 英語の文言とデータは、今の併記の英語を使い、無い分はClaudeが下書きしてPRのレビューで確かめる
  - レビューは区切りごと。3-1・3-4a・3-3をまとめて一度レビューとリリース。3-2は数ページずつ
- [x] **3-1. pnpm workspace へ移行**（`web` と `design-system` の2パッケージから始める）
  - サイトを `web/`（`@imrg-platform/web`）へ移し、ルートをpnpm workspaceにした。`design-system` は3-3で足す
  - lint・整形・textlint・huskyの設定はルートに置いたままで、全パッケージが対象（oshiageと同じ）
  - Amplifyはルートの `amplify.yml` から `pnpm --filter @imrg-platform/web build` を実行し、`web/build` を配信する。コンソールのモノレポ設定は使わない
- [ ] **3-2. FSD へ再配置**：`web/src/views/page/*` → `app` / `pages` / `widgets` / `features` / `entities` / `shared`
  - カレンダーはすでに近い形（`_components` `_data` `_lib`）なので、ここから着手すると移行しやすい
  - [x] 3-2a. 共通の部分（2026-09-18）
    - `app`（hooks・全体のCSS）・`shared`（`ROUTES`・`META_DATA`・`AppError`・i18n・端末判定・sitemap・Image）・`widgets`（ヘッダー・フッター・head・お問い合わせ・規約の枠）を作り、runesで書き直した
    - メタ情報は全ページ `META_DATA`（文言は `messages/meta`）から出し、`+page.svelte` は `PageHead` とページを置くだけにした
    - 文言ファイルを領域ごと（`messages/<領域>/<言語>.json`）に分け、翻訳済みページの登録も `shared/config/translation/<ページ>.ts` に分けた（ページの作業を並行してもぶつからないように）
    - プライバシーポリシーと利用規約を `pages` へ移し、英語ページを公開の対象にした（本文の英訳はレビューで確認）
    - テストを `web/tests/unit/` へ移した
    - メニューの言語切り替えは、訳し終えたページでだけ出る
- [x] **3-3. デザインシステムを作る**（土台。2026-09-17）
  - トークン（色・余白・字送り・影・角丸）を `web/src/style` から切り出す
  - 共通部品（Button・ButtonLink・Card・Chip・Badge・Heading・Pagination）をStorybook付きで整理
  - a11yチェック（Storybookのa11yアドオン）を入れる
  - `design-system/`（`@imrg-platform/design-system`）を作り、トークン（`src/styles`）を `web/src/style` から移した。SCSSの読み込み設定（`scss.config.js`）はwebと共有する
  - ButtonとButtonLinkは同じ見た目の共通SCSS（`Button/scss/_button.scss`）を使い、下線やブラウザー既定の余白・文字の違いが出ないようにした
  - 部品はButton・ButtonLink・Heading（旧WithEnglishHeading）・Pagination（カレンダーから移し、「最初・前・番号・次・最後」をアイコンで並べる形に変えた。読み上げ用の名前は多言語化の文言で渡す）の4つ。runesで書き、Storybookのストーリーとテスト（Testing Library）を付けた
  - 端末の判定（`isMobile`）はwebだけで使う。部品は幅・高さ・文字の大きさをpxで受け取り、webが端末に応じて分けて渡す
  - Card・Chip・Badgeは、今のサイトに共通の部品が無いため作っていない。3-2でページを移すときに、実際に使う形から切り出す
  - Storybookは `pnpm --filter @imrg-platform/design-system storybook` で手元に開く。CIではビルド（`pnpm run build`）が通ることだけ確かめる。a11yアドオンの違反はエラー扱い

- [x] **3-4a. 多言語化の仕組みを入れる**（3-4の進め方の1と5）
  - Paraglide JS 2を入れ、全ページを日本語と英語（`/en/...`）で書き出すようにした。`<html lang>`・canonical・`og:locale` は言語ごと
  - 英語ページは訳し終えるまでnoindex。訳したページを `TRANSLATED_PATHS` に足すと、`hreflang`（`x-default` も）とsitemapの言語の対応が出る
  - 言語の切り替え部品は、英語のページができるまで表に出さない。代わりに非表示のリンクで、書き出し時に英語ページをたどらせている
  - ページ内のリンクは、まだ言語を付けていない（英語ページから日本語ページへ移る）。3-2でページごとに直す
- [ ] **3-4. 多言語化の土台を作る**（2026-09-17に、日英併記から言語ごとのページへ移すと決めた）
  - 方針
    - 既定は日本語。まず英語を加え、言語は後から足せる作りにする
    - URLに言語を入れる。日本語は今のURLのまま、英語は `/en/...`（既存のURLと検索順位を保つため）
    - 実装のルールは `.github/instructions/frontend-architecture-design.instructions.md` の「多言語対応」
  - ライブラリーを決める。第一候補は **Paraglide JS**（inlang。SvelteKitの公式の追加機能で、静的な書き出しとURLの言語に対応し、文言をキーで型付きに扱える）。oshiageにもまだ仕組みが無いので、同じものを入れる
  - 進め方
    1. ライブラリーを入れ、`/en/` の書き出しと、言語の切り替え部品（ヘッダー）を作る
    2. FSDへの再配置（3-2）と同時に、ページごとに文言をメッセージファイルへ移す。今の日英併記の文言を、そのまま日本語と英語のメッセージにする
    3. メタ情報（title・description・OGP）、`alt`・`aria-label`、エラーページを翻訳する
    4. データに英語の値を持たせる。カレンダーは `titleEn` などがある。推しミツ！（選手・チーム・動画）、ルール、採点には無いので、英語の項目を足して訳す
    5. `hreflang`、sitemapの言語ごとの対応、`og:locale:alternate`、構造化データを言語ごとに出す
    6. Search Consoleで英語ページの登録を確かめる
  - 翻訳の作業量が大きい（ルールのページなど）。訳す順番（案はトップ、カレンダー、推しミツ！、ルールと採点の順）と、機械翻訳を下書きに使うかを着手時に決める
  - 日英併記をやめたときの見た目は、デザインリニューアル（Phase 5）と合わせて決める

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
- [ ] **5-5. `margin` を使わない書き方へ直す**（1-8で警告にとどめたもの。`gap` と `padding` で余白を作る。直し終えたらstylelintの `property-disallowed-list` をエラーへ戻す）

## Phase 6: そのほか（提案）

- [ ] **6-1. カレンダーのデータ更新の仕組みをリポジトリーに入れる**
  - 現在は `~/imrg/calendar-data/` に置いてある（リポジトリーの外）。使い方は同じ場所のREADMEにある
  - `tools/calendar/` として取り込み、更新手順を `docs/` に書く
- [ ] **6-2. 404 ページを用意する**（現在は入れ物ページが返るだけ）
- [ ] **6-3. アクセシビリティ点検**（コントラスト・キーボード操作・見出し階層）
- 6-4（日英の切り替え）は、多言語化すると決めたので3-4へ移した
- [ ] **6-5. アクセス解析の活用**（どのページが見られているかを毎月確認し、次の施策を決める）
- [ ] **6-6. `PUBLIC_BASE_PATH: 'https//imrg.work'`（`amplify.yml`）のタイポを直す**。未使用なら削除する
- [ ] **6-7. ファイアウォール（AWS WAF）を今は入れない**（2026-09-17に判断）
  - Amplifyのファイアウォールは、アプリ1つにつき月15ドルに加え、AWS WAFの料金（Web ACL月5ドル、ルール1つ月1ドル、100万リクエストごと0.6ドル）がかかる。最低でも月20ドル強
  - このサイトは静的なファイルだけで、フォーム・ログイン・APIが無い。SQLインジェクションやXSSなど、WAFが主に防ぐ攻撃の対象になる処理を持たない
  - 通信量で押し流す攻撃（L3/L4）は、Amplifyの配信に使われるCloudFrontのAWS Shield Standard（無料）で守られている
  - 残るリスクは、大量のアクセスによる配信料の増加。請求のアラート（0-6）で気付けるようにしてある
  - 見直す時期：フォームやAPIを持つ機能を足すとき、不審なアクセスで配信料が増えたとき。そのときはレート制限のルールだけの小さな構成から検討する
