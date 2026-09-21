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
  - [x] **1-3b. runesへ書き換える**（2026-09-18。3-2と同時に全ページを書き換えた）（`$props` `$state` `$derived` `onclick`）。ページ単位で少しずつ。FSDへの再配置（3-2）と同時に行うと手戻りが少ない
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
- [x] **3-2. FSD へ再配置**（2026-09-18）：`web/src/views/page/*` → `app` / `pages` / `widgets` / `features` / `entities` / `shared`
  - カレンダーはすでに近い形（`_components` `_data` `_lib`）なので、ここから着手すると移行しやすい
  - [x] 3-2a. 共通の部分（2026-09-18）
    - `app`（hooks・全体のCSS）・`shared`（`ROUTES`・`META_DATA`・`AppError`・i18n・端末判定・sitemap・Image）・`widgets`（ヘッダー・フッター・head・お問い合わせ・規約の枠）を作り、runesで書き直した
    - メタ情報は全ページ `META_DATA`（文言は `messages/meta`）から出し、`+page.svelte` は `PageHead` とページを置くだけにした
    - 文言ファイルを領域ごと（`messages/<領域>/<言語>.json`）に分け、翻訳済みページの登録も `shared/config/translation/<ページ>.ts` に分けた（ページの作業を並行してもぶつからないように）
    - プライバシーポリシーと利用規約を `pages` へ移し、英語ページを公開の対象にした（本文の英訳はレビューで確認）
    - テストを `web/tests/unit/` へ移した
    - メニューの言語切り替えは、訳し終えたページでだけ出る
  - [x] 3-2b〜3-2g. ページごとに移し、英語ページを作った（カレンダー・トップ・曲編集と手具装飾・推しミツ！・ルール・採点）。移したページはすべてrunesで書き直した
    - カレンダーの生成ファイルは `web/src/entities/calendarEvent/api/events.ts` へ移し、`~/imrg/calendar-data/build_events_ts.py` の書き出し先も合わせた
    - 推しミツ！の並べ替えをブラウザー側だけで行うようにして、ハイドレーションの警告を解消した
    - 採点のフォーム部品は、ストアを読まずにpropsで受け取る形に直した（依存の向きの違反を解消）
    - ルールの本文は、データの各項目に英語（`titleEn` など）を持たせた。ビルド時に表示する言語だけをページへ渡す
  - [x] 3-2h. 旧構成（`views/`）と別名（`$views`・`$images`・`$model`）、使わなくなったdate-fnsを消した
  - デザインシステムに切り出す候補（ページを移したときに見つかったもの。Phase 5で見た目と合わせて決める）
    - 種類のチップ（色の点付きのボタン）、切り替えボタンの組、一覧の行カード（カレンダー）
    - ラジオ・チェックボックスの選択肢、動画カード（推しミツ！）
    - 番号付きの手順カード、押すと裏返る画像カード（曲編集・手具装飾）
    - 数の増減カウンター、段階を選ぶラジオ、テーマ色の決定ボタン（採点）
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
- [x] **3-4. 多言語化の土台を作る**（2026-09-20完了。2026-09-17に、日英併記から言語ごとのページへ移すと決めた）
  - 2026-09-18: 進め方の1〜5は完了。全ページの英語ページを公開の対象にした
  - 2026-09-19: 英語だけでなく**8言語**（ja/en/zh/ko/es/fr/ru/hi）に広げ、大会名312件・日付の書き方・メタ情報まで訳し終えてリリースした
  - 2026-09-20: Search Consoleでsitemap.xml（2,568 URL・8言語のhreflang）を送り直した
    - 登録が進むには数日から数週間かかる。**しばらくしてから、各言語のページが登録されているかを見る**
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
    6. Search Consoleで英語ページの登録を確かめる（本番へリリースしたあと、sitemapを送り直して `/en/` のページが登録されるかを見る）
  - 翻訳の作業量が大きい（ルールのページなど）。訳す順番（案はトップ、カレンダー、推しミツ！、ルールと採点の順）と、機械翻訳を下書きに使うかを着手時に決める
  - 日英併記をやめたときの見た目は、デザインリニューアル（Phase 5）と合わせて決める

## Phase 4: Terraform 導入

Phase 0の「AWS環境の整備」を先に済ませてから着手する。

Phase 4の進め方（2026-09-19に決めた）

- **Amplifyを取り込むのではなく、S3 + CloudFrontへ移す。** PRプレビューは使っていないため、費用の安いほうを選んだ
  - ビルドはGitHub Actions（無料枠）、配信はCloudFront（毎月1TBまでの恒久無料枠）。Amplifyはビルドが約 $0.01/分、配信が $0.15/GB
  - Amplifyのコンソールで手作業になっていたヘッダーと書き換えルールも、まとめてコードへ移せる
- 状態ファイルのロックはS3のロックファイル（Terraform 1.10以降）を使い、DynamoDBを立てない。版は `terraform/.terraform-version` で固定する
- 環境は本番とステージングの2つ。**PRごとのプレビューは作らない**（PRの数だけ増えて管理が増えるため）
  - ステージングは `stg.imrg.work`。`develop` へのpushで自動、手で動かすときはブランチを選べる
  - 本番と同じ中身が別のURLで見つかると本番の順位が下がるため、`X-Robots-Tag: noindex` と合言葉（Basic認証）で二重に隠す
  - 足してもお金はほぼ変わらない（S3が88MBで月数円、CloudFrontは見るのが自分たちだけなので無料枠に収まる）

- [x] **4-2. state 置き場を用意**（`modules/state_backend`。S3のみ）
- [x] **4-4. 環境変数・ヘッダー・書き換えルールをコード管理にする**
  - `customHeaders` はCloudFrontのレスポンスヘッダーポリシーへ
  - 末尾スラッシュとindex.htmlの解決、wwwの転送はCloudFront Functionsへ
  - `/oshimitsu/content_type/<*>` の書き換え4件は、転送先の `index.html` がビルド結果に無く動いていなかったため落とした
- [x] **4-5. 戻し方と監視を用意する**
  - 配ったビルドを `<バケット>-releases` へ90日残す。作り直さなくても前の版へ戻せる（手動デプロイの `release` 入力）
  - サイトの死活はGitHub Actionsで30分ごとに外から確かめる（費用ゼロ。Route53のヘルスチェックは月$0.50かかる）
  - CloudFrontの5xx・4xxと証明書の残り日数はCloudWatchのアラームからメールで知らせる（10個まで無料枠の範囲）
- [x] **4-0. AWSの片づけ**（2026-09-20完了。手順は [aws-cleanup.md](aws-cleanup.md)）
  - 棚卸しは `terraform/scripts/aws-audit.sh`（読むだけ。何も消さない）。2026-09-20に実施
  - 残っていたものは、ほぼ2023〜2024年に試したAmplifyのチュートリアル（`d1o1ui2gd5pshh` `d295caw51lipy2` `d7q1eopfj7aj0` `src-owner-sandbox` `reacttutorial`）
  - [x] RDSのスナップショット `rds-mysql-10mintutorial-snapshot`（20GB・2023-10-21）を消した。**毎月の $0.11 はこれだった**（2026-09-20）
    - 2022-11-06に作ったMySQLインスタンスの分。インスタンス本体は2023年に消えており、スナップショットだけ3年残っていた
  - [x] 古いAmplifyのアプリ `d2e38588w4qs62`（svelte-kit-to-amplify）を消した（2026-09-20）
    - アプリを消すと、CloudFormationのスタック5つ・Cognito・AppSync・DynamoDB・Lambda 6個・S3・IAMロール7個が連鎖して消えた。**個別に消さずアプリから消すのが正しい**
  - [x] 孤立したCognito（ユーザープールとIDプール）、Lambda 4個、IAMロール、ログ117個、`CDKToolkit`一式を消した（2026-09-20）
    - 片づけ後の棚卸しでは、CloudFormation・Lambda・ログ・Cognito・AppSync・DynamoDB・ECRがすべて0になった。S3はCloudTrailのログだけ
    - つまずいた点：ユーザープールを消してもトリガーのLambdaとIDプールは残る／`AWSLambdaBasicExecutionRole-*` のポリシーは `policy/service-role/` の下にありARNを組み立てると失敗する／CDKのS3は版が有効なので `aws s3 rm` では空にならない
  - [x] IAMユーザー `takumi-shimizu-iam-amplify` を消した（2026-09-20）
    - **`AdministratorAccess` が付いたまま、鍵が有効な状態で1年以上放置されていた**（最終使用は2025-07-30）。片づけのなかでいちばん危なかったもの
    - 使っていた相手（旧Amplify）をすでに消していたため、無効にして様子を見る手順は飛ばした
  - IAMユーザーは `admin` だけになった
  - いまのAmplifyアプリは `iamServiceRoleArn` が `None` で `platform` が `WEB` のため、残っている `amplifyconsole-*` と `AmplifySSRLoggingRole-*` はどれも使われていない。移行後にまとめて消す
  - ACMに証明書が1つも無い。Amplifyが内部で持っているため、Terraformでは新しく作ることになる（取り込みは不要）
- [x] **4-6. ステージング環境を用意する**（`envs/stg`。配る手順は `_deploy.yml` に共通化し、本番とステージングで同じものを使う）
- [x] **4-1. 現在の AWS 構成を洗い出す**（2026-09-20。4-0の棚卸しで判明した）
  - Route53のホストゾーン `imrg.work` … `Z09326151SBEIRMAZRJNN`（レコード6件）
  - ACMの証明書 … **1つも無い**（Amplifyが内部で持っているため外から見えない）
  - CloudFrontの配信 … **無い**（同上）
  - Amplifyのアプリ … `d3fj0jchd8ri0z`（`iamServiceRoleArn` は `None`、`platform` は `WEB`）
  - S3 … CloudTrailのログ置き場だけ
- [x] **4-3. 作って切り替える**（2026-09-20完了）
  - 取り込み（`import`）はしない。Amplifyの構成をそのまま写すのではなく、別の構成へ移した
  - [x] 置き場を作り、状態をS3へ移した。`backend.tf` を分けて、コメントアウトの往復をやめた
  - [x] GitHubのEnvironments（`production`・`staging`）にSecretsを入れた
  - [x] `envs/stg` を作り、`stg.imrg.work` へ配れるようにした（合言葉つき・検索よけあり）
  - [x] CloudFrontのドメインで8言語・転送・404・ヘッダーを確かめた
  - [x] **17:23〜17:27に切り替えた。落ちていたのは3分30秒**
    - Amplifyのカスタムドメインを外す → `attach_domain = true` で `terraform apply`
    - 切り替え後、8言語・転送・404・証明書・www転送すべて意図どおり。死活監視も全項目通過
  - 途中でつまずいた点
    - **CloudFrontは同じ別名を2つの配信に付けられない。** Amplifyがドメインを持つ間は `CNAMEAlreadyExists` で落ちる。`attach_domain` で別名・証明書・DNSをまとめて後付けする形にした
    - **IAMの `description` はASCIIしか受け付けない。** 日本語だと `ValidationError`
    - **このリポジトリーのOIDCは `sub` に所有者IDとリポジトリーIDを埋め込む**（`repo:SiMiTaKu@34091968/imrg-platform@1373814129:environment:staging`）。ドキュメントどおりの形では一致しない
    - `gh workflow run` は、既定ブランチにワークフローが無いと起動できない
  - [x] Amplifyのアプリ `d3fj0jchd8ri0z` と、残りのAmplify用IAM（ロール5つ・ポリシー3つ）を消した（2026-09-20）
    - 切り替えが済み、全項目を確かめたあとだったので、数日待たずに消した。消したあともサイトは無事
    - `amplify.yml` と、指示書・PRテンプレートに残っていたAmplifyの記述も直した

## Phase 5: デザインリニューアル

- [x] **5-0. サイトのボタンを1つにそろえる**（2026-09-21。運営者からの指摘）
  - 角が6px・8px・10px・全丸と散らばり、部品もdesign-systemの `Button` / `ButtonLink` とwebの `ActionButton`、ページの直書きの3系統に分かれていた
  - design-systemの `Button` を作り直して1つにまとめ、`ActionButton` と `ButtonLink` を消した。引数は `href` `target` `variant`（fill / outline / yellow）`size`（medium / large）`width`（full / auto / pxの数値。必須）`label`
  - **角はどのボタンも全丸（`$border-radius-64`）**。文字はmedium 16px・large 18px（これまでは14pxのところがあった）
  - **【解決済み】いったんは `block` を省いてもスマホで横いっぱいになるよう、部品が `html[data-device]` を見ていた。**これは3-3の「部品は端末を知らず、pxで受け取る」に反していたため、2026-09-21に取り消した
    - `block?: boolean` をやめ、**必須の `width`（`full` / `auto` / pxの数値）** にした。端末で変えるところは使う側が `width={isMobile ? 'full' : 'auto'}` と渡す
    - `:global(html:not([data-device='desktop']))` の指定は消した。**端末を見るのはweb層だけ**という決まりに戻った
    - pxの数値は**最大幅**として扱う（`max-width` + `width: 100%`）。昔の `ButtonLink` のように決め打ちにすると、狭い画面で横にはみ出すため
  - 採点の送りボタンとモーダルのボタンは、手具ごとのテーマ色で塗っていた。黄の手具では白い文字が読めない（色の決まり4に反する）ので、サイト共通の青の塗りにした。見出しの帯は手具の色のまま
  - 札（バッジ）・チップ（絞り込みの選択肢）・カード全体のリンク・目次の行・章の開け閉めの見出し・入力欄はボタンではないので触っていない
- [ ] **5-1. 方向性を決める**（参考サイト・配色・写真の使い方・ロゴの扱い）
- [ ] **5-2. トップページから刷新**、続いてカレンダー・推しミツ！・ルール
- [ ] **5-3. ダークモード対応**（`prefers-color-scheme`）
- [ ] **5-4. 表示速度**（画像の最適化・フォント読み込み・LCP改善）
- [ ] **5-5. `margin` を使わない書き方へ直す**（1-8で警告にとどめたもの。`gap` と `padding` で余白を作る。直し終えたらstylelintの `property-disallowed-list` をエラーへ戻す）

## Phase 5 のあとに足すもの（運営者の希望・2026-09-21）

- [ ] **5-6. LINE スタンプを取得するボタン**（トップの案内役の節）
  - スタンプは運営者がこれから作る。できたらトップの「案内役の5人」に取得ボタンを置く
  - それまではLINEスタンプの話をサイトに出さない（2026-09-21に紹介文から外した）
- [ ] **5-7. 規則について自然言語で質問できる AI（Bedrock）**
  - 規則の全文は約6万文字（7〜8万トークン）で、プロンプトにまるごと入る。**RAG（Knowledge Bases）は不要**。OpenSearch Serverlessの固定費（月100ドル前後）を避けられる
  - 構成はLambda Function URL → Bedrock（API Gatewayも不要）。固定費ほぼゼロ、質問数に応じた変動費のみ
  - 規則の全文はプロンプトキャッシュ（1時間TTL）に載せる。Claude Haiku 4.5 / Sonnet 5が対応
  - 回答には必ず出典（節番号・ページ）を出す。`entities/rule/` のデータに出典コメントがあるのでそれを使う
  - **規則の全文をAIに渡すので、著作権の許諾はルールページと同じ論点。**許諾を取りに行くとき、「AIで質問に答える形でも使いたい」もあわせて相談する
  - 単価は実際に見積もるとき、AWSの料金ページで確認する（2026-09-21時点ではページから取れなかった）

## Phase 6: そのほか（提案）

- [ ] **6-1. カレンダーのデータ更新の仕組みをリポジトリーに入れる**
  - 現在は `~/imrg/calendar-data/` に置いてある（リポジトリーの外）。使い方は同じ場所のREADMEにある
  - `tools/calendar/` として取り込み、更新手順を `docs/` に書く
- [ ] **6-2. 404 ページを用意する**（現在は入れ物ページが返るだけ）
- [ ] **6-3. アクセシビリティ点検**（コントラスト・キーボード操作・見出し階層）
- 6-4（日英の切り替え）は、多言語化すると決めたので3-4へ移した
- [ ] **6-5. アクセス解析の活用**（どのページが見られているかを毎月確認し、次の施策を決める）
- [x] **6-6. `PUBLIC_BASE_PATH: 'https//imrg.work'`（`amplify.yml`）のタイポ** … 未使用だったため、`amplify.yml` ごと消した（2026-09-20）
- [ ] **6-7. ファイアウォール（AWS WAF）を今は入れない**（2026-09-17に判断）
  - Amplifyのファイアウォールは、アプリ1つにつき月15ドルに加え、AWS WAFの料金（Web ACL月5ドル、ルール1つ月1ドル、100万リクエストごと0.6ドル）がかかる。最低でも月20ドル強
  - このサイトは静的なファイルだけで、フォーム・ログイン・APIが無い。SQLインジェクションやXSSなど、WAFが主に防ぐ攻撃の対象になる処理を持たない
  - 通信量で押し流す攻撃（L3/L4）は、Amplifyの配信に使われるCloudFrontのAWS Shield Standard（無料）で守られている
  - 残るリスクは、大量のアクセスによる配信料の増加。請求のアラート（0-6）で気付けるようにしてある
  - 見直す時期：フォームやAPIを持つ機能を足すとき、不審なアクセスで配信料が増えたとき。そのときはレート制限のルールだけの小さな構成から検討する
