---
description: フロントエンドアーキテクチャ全体に関わる共通機構の設計指針。FSD の構成と多言語対応
applyTo: 'web/src/**/*'
name: フロントエンドアーキテクチャ設計指針
---

# Architecture Design - フロントエンドアーキテクチャ設計指針

## このドキュメントについて

このドキュメントは、実装時に毎回参照する詳細ルールではなく、開発者が事前に理解しておくべき設計思想と実装方針をまとめた指針です。
oshiage の同名の指針をもとにしています。web は FSD（Feature-Sliced Design）へ移行中です（TODO 3-2）。移し終えていないページは `web/src/views/page/` に残っています（「1. 構成」の末尾）。

## 0. リポジトリーの構成（モノレポ）

pnpm workspace のモノレポ。oshiage と同じく、パッケージごとにフォルダーを分ける。

```text
imrg-platform/
├── web/              @imrg-platform/web … imrg.work のサイト（SvelteKit）
├── design-system/    @imrg-platform/design-system … 共通部品とトークン、Storybook
├── docs/             改修計画・手順書
├── eslint.config.mjs など  lint・整形の設定はルートに置き、全パッケージに効かせる
└── amplify.yml       web をビルドして配信する
```

- パッケージ名は `@imrg-platform/<名前>`。パッケージをまたぐ参照は `workspace:*` で依存に書き、公開境界（`index.ts`）からだけ読む
- コマンドはルートで実行する（`pnpm dev` `pnpm run verify`）。パッケージだけで動かすときは `pnpm --filter @imrg-platform/web <script>`

## 1. 構成（web）

```text
web/src/
├── routes/        SvelteKit のルート。+page.server.ts（META_DATA とデータ）と +page.svelte（PageHead とページを呼ぶだけ）
├── app/           アプリ全体の初期化（hooks・全体の CSS）
├── pages/         URL ごとのページ（privacy/ terms/ など）
├── widgets/       複数の部品を組み合わせた UI ブロック（layout/ contact/ policyLayout/ など）
├── features/      ユーザー操作の単位の振る舞い（絞り込み・採点など）
├── entities/      ドメインの型とデータ（大会・動画・選手など）
├── shared/
│   ├── config/    META_DATA（meta.ts）、翻訳済みページの登録（translation/）
│   ├── routes/    ROUTES（パスの定数）
│   ├── errors/    AppError など
│   ├── lib/       汎用の関数（i18n・device・sitemap）
│   ├── model/     汎用の型
│   └── ui/        サイトだけで使う汎用部品（Image）。見た目の部品はデザインシステムに作る
├── lib/paraglide/ Paraglide JS の生成物（git 管理しない）
├── style/         SCSS の変数（色・余白・フォント・影・角丸）
└── views/         移行前の構成（移し終えたら消す）
```

- 別名は `@app` `@pages` `@widgets` `@features` `@entities` `@shared`（`web/svelte.config.js`）。slice の外からは `index.ts` だけを読む（`import { PageHead } from '@widgets/layout'`）
- テストは `web/tests/unit/<レイヤー>/...` に置く
- 移行前のページ（`views/page/<ページ>/`）を触るときは、そのページを FSD へ移してから直す

## 2. FSD（Feature-Sliced Design）

### 依存方向

`shared -> entities -> features -> widgets -> pages -> app`

- 各 slice は必ず `index.ts` を持ち、公開インターフェースを制御する
- 内部構造は slice 内で閉じる
- この向きに反する依存（共通部品がページの中身を読むなど）を作らない

### レイヤーごとの役割

| レイヤー | 役割                                                                             | 例                                               |
| -------- | -------------------------------------------------------------------------------- | ------------------------------------------------ |
| app      | アプリケーション初期化、ルート制御、全体共通のエラー処理                         | `app/hooks`、`routes/+layout.*`、`+error.svelte` |
| pages    | URL ごとのページ（1 path 1 slice）。ページ単位のデータ取得・ロジック・エラー処理 | `pages/privacy`                                  |
| widgets  | 複数コンポーネントを組み合わせた UI ブロック。データは props で受け取る          | `widgets/layout`（ヘッダー・フッター・head）     |
| features | ユーザー操作や機能単位の振る舞い（絞り込み・採点など）                           | 絞り込みの状態とその部品                         |
| entities | ドメインオブジェクトと、その型・データ                                           | 大会・動画・選手・チーム                         |
| shared   | 全体で使う汎用リソース（`config` / `routes` / `errors` / `lib` / `ui`）          | `ROUTES`、`META_DATA`、`localizeHref`            |

### 実装方針

- pages: データの取得や組み立ては原則 pages に集約する。`ui` は表示制御中心にし、複雑な状態管理は `store` / `model` に分離する
- widgets: pages 内で使う前提。データは props で受け取る。画面単位の slice を基本とし、責務に応じて subslice を作る
- features: 小規模で意味のある振る舞いをカプセル化する
- entities: entity ごとに slice を作り、`model`（型）と `api`（データの取得）を分ける。このサイトの `api` は、今は静的な TS ファイルの読み込み
- shared: 他レイヤーへ依存しない。単純な置き場にしない。パスは `shared/routes` の `ROUTES`、メタ情報は `shared/config/meta` の `META_DATA`、例外は `shared/errors` の `AppError` を使う

## 3. Slice の切り方

### 基本方針

- slice は「見た目」ではなく「責務」で分割する
- UI が似ていても責務が異なる場合は分割する
- 1 コンポーネントに表示・状態管理・データ処理が混在し始めたら分離を検討する

### 分割のサイン

- 1 ファイルまたは 1 slice が 300-400 行を超える
- データ処理・ドメインロジック・表示分岐が同居する
- テスト追加が難しくなる
- 変更時の競合が頻発する

## 4. Slice 内ディレクトリ構成

各 slice は以下のディレクトリに責務を分離する（必要な責務のみ作成する）。

| ディレクトリ | 配置物                                                              |
| ------------ | ------------------------------------------------------------------- |
| `ui/`        | Svelte コンポーネント                                               |
| `config/`    | 定数・ラベルマップ・選択肢など（`fooConfig.ts`）                    |
| `lib/`       | 純粋関数・ユーティリティ（フォーマッタ、バリデータなど）            |
| `store/`     | Svelte ストア・リアクティブ状態                                     |
| `scss/`      | `ui/` 内の複数コンポーネントで共有する SCSS スタイル（`_foo.scss`） |

ディレクトリが単一ファイルで十分な場合は省略可。肥大化したら分離する。

### scss/ ディレクトリの利用方針

- `ui/` 配下の複数コンポーネントが同一スタイルを共有する場合に作成する
- ファイル名は SCSS パーシャル規則に従い `_` プレフィックスを付ける（例: `_button.scss`）
- 共通スタイルは `@mixin styles` として定義し、各コンポーネントで `@include` して使用する
- `scss/` に置くのはスタイル定義のみとし、直接 HTML を出力するロジックは含めない
- 外部 slice から `scss/` ファイルを直接 import することを禁止する（slice の公開境界は `index.ts` のみ）

## 5. 横断的関心事の方針

### 多言語対応（必須）

oshiage と同じく、**多言語対応を前提に実装する**。仕組みは Paraglide JS（inlang）。既定の言語は日本語（今の URL）、英語は `/en/...`。

- 文言は UI コンポーネント内に直書きせず、`web/messages/<領域>/<言語>.json` に置いて `m.xxx()` で使う
  - 領域は `common`（言語名・ページ送り）、`meta`（title・description）、`layout`（ヘッダー・フッター・お問い合わせ・エラー）と、ページごとのフォルダー（`top` `calendar` など）。フォルダーを足したら `web/project.inlang/settings.json` の `pathPattern` にも足す
  - キーは領域名を頭に付ける（`calendar_filter_title`）。ページの作業を並行しても同じファイルを取り合わないようにするため
- 文言キーは責務・画面単位で命名し、将来の言語追加時に影響範囲を局所化する
- 日付・数値などのロケール依存表示は、ロケール対応可能なフォーマッタを使用する（`Intl` など）
- バリデーションメッセージ、エラーメッセージ、通知文言、`alt`・`aria-label`、メタ情報（title・description・OGP）もすべて翻訳対象とする
- 画像内テキストや固定文言を避け、翻訳不能な UI を増やさない
- 表示するデータ（大会・動画・選手など）は、言語ごとの値を持てる形にする。カレンダーの `titleJa` / `titleEn` がその例
- リンクは `localizeHref(ROUTES.xxx)`（`@shared/lib/i18n`）で、表示中の言語のパスにする
- 規約のような長い文章だけは、文言ファイルに分けず、言語ごとの本文コンポーネントにする（`pages/privacy/ui/PrivacyBodyJa.svelte` / `PrivacyBodyEn.svelte`）
- 訳し終えたページは、`web/src/shared/config/translation/<ページ>.ts` にパスを足す。足すまで英語ページは noindex で、メニューの言語切り替えも出ない

日本語ページの英語の併記:

- 日本語ページでは、これまでどおり見出しなどに英語を小さく併記する（見た目の見直しは Phase 5）。英語ページでは併記しない
- 併記するかは `showsSecondaryText()`、併記する英語は `m.xxx({}, { locale: SECONDARY_LOCALE })` で取る（どちらも `@shared/lib/i18n`）
- 英語を併記するときは `lang="en"` を付けた要素に入れる

補足:

- 開発速度を維持するため、デフォルト言語を基準に実装しつつ、同時に翻訳キーを必ず作成する
- 後追いでの多言語化を前提にしない

### データ

- API は持たない。表示するデータは entities の TS ファイルに置き、ビルド時に HTML へ書き出す
- 生成スクリプトの出力（カレンダーの `events.ts`）は手で編集しない

### 例外処理

- ページ単位でのエラーハンドリングを徹底する
- 下位レイヤーの例外は上位へ伝播し、ユーザー向けに適切にマッピングする

### 状態管理

- 状態管理はページ単位を基本とし、グローバル状態は必要最小限にする
- URL で共有したい状態（絞り込み条件など）はクエリに持たせる（カレンダーの `parseState` / `serializeState`）

## 6. 品質特性

- 保守性: レイヤー分離と依存方向の厳守で影響範囲を局所化
- テスタビリティ: 責務分離と公開境界の明確化でテスト容易性を向上
- 再利用性: 適切な責務粒度でコンポーネント再利用を促進
