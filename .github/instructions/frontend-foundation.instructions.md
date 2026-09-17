---
description: フロントエンド実装の基本思想と設計原則。UI実装・状態管理・命名・品質判断で常時参照
applyTo: 'web/src/**/*.{ts,js,css,scss,svelte}'
name: フロントエンド開発基盤ルール
---

# Frontend Foundation - フロントエンド開発基盤ルール

oshiage の同名ルールをもとにしている。

## 基本方針

- 仕様駆動で実装する
- 実装前に関連資料を確認し、不明点は推測せず確認する
- 再利用可能な既存部品を優先し、重複実装を避ける
- 保守性・拡張性を優先し、短期的な場当たり実装を避ける

## UI実装方針

- 共通部品は `@imrg-platform/design-system` を最優先で利用する（`import { Button } from '@imrg-platform/design-system'`）。サイトだけで使う汎用部品は `web/src/shared/ui/` にある
- 複数のページで使う見た目の部品は、デザインシステムに作る。runes で書き、Storybook のストーリー（`*.stories.ts`）と `design-system/tests/unit/` のテストを付ける
- デザインシステムの部品は、サイトのストアや文言を持たない。文言は引数で受け取る
- **端末の判定（`isMobile`・`pageData`）は web だけで使う。** デザインシステムの部品は端末を知らず、幅・高さ・文字の大きさなどを px の数値で受け取る。web 側で `fontSize={$pageData.isMobile ? 20 : 24}` のように分けて渡す
- 部品の動作に欠かせない引数（`type="button"` の `onclick`、リンクの `target` など）は省略可能にしない
- アイコンだけのボタンには、読み上げ用の名前（`aria-label`）を付ける。名前は使う側が、多言語化の文言（`m.xxx()`）で渡す
- 同等コンポーネントの再実装は行わない
- 新しいUI部品が必要な場合は、共通化前提で設計する
- アクセシビリティ属性（ラベル、role、キーボード操作）を欠かさない
- 文言は多言語化を前提に書く（[frontend-architecture-design.instructions.md](./frontend-architecture-design.instructions.md) の「多言語対応」）。日本語だけを部品に直書きしない
- PC とスマホで見た目を分けるときは、既存の `pageData.isMobile`（`@shared/lib/device`）と `.pc` / `.sp` の CSS 変数の書き方に合わせる

## Svelte の書き方

- Svelte 5 を使っている。移行前のページ（`views/`）には Svelte 4 の書き方（`export let`・`$:`・`on:click`・`<slot>`）が残っている。FSD へ移すときに runes へ書き換える（TODO 1-3b）
- **コンポーネントは runes で書く**（`$props`・`$state`・`$derived`・`onclick`・snippet）。oshiage と同じ書き方
- 1つのコンポーネントの中で2つの書き方を混ぜない（Svelte 5 はコンポーネント単位でどちらかになる）
- 既存のコンポーネントを少し直すだけなら、そのコンポーネントの書き方に合わせる

## コーディング規則

- メタ情報（title・description・OGP）は `shared/config/meta` の `META_DATA` を参照し、ハードコーディングを禁止する（[static-site-hosting.instructions.md](./static-site-hosting.instructions.md)）
- パスは `shared/routes` の `ROUTES` を参照し、文字列で直書きしない
- **自己終了タグ（`<x />`）は空要素（`img` `br` `input` `hr` など）とコンポーネントだけに使う。** `<div />` や `<span />` は閉じタグを書く（`<div></div>`）。Svelte 5 が曖昧な書き方として警告するため。oshiage のルール（閉じタグを省略できるタグは自己完結タグ）とはここが違う
- 再代入可能な変数 `let` の定義は避け、状態管理で使用する場合を除いて、基本は不変な定数 `const` で定義する

## CSSレイアウト方針

- 余白はできる限り `margin` / `padding` ではなく `gap`（grid/flex）で表現する
- 中央配置は `place-items: center` を優先し、個別の `margin: auto` を避ける
- 要素間の空間は `gap` で統一し、個別 `margin` は使わない
  - stylelint で `margin` を禁止している。既存の箇所が残っているため今は警告にとどめているが（TODO 5-5）、**新しいコードでは使わない**
- UI 崩れ防止のため、重要な要素には `width` / `height` / `min-width` / `min-height` を明示する
- `margin` / `padding` で余白を作るのは、要素自体のボーダーや背景との関係で不可避な場合のみ許可する
- 色・余白・フォント・影・角丸は `design-system/src/styles/` の SCSS 変数を使う（web とデザインシステムの全コンポーネントで読み込み済み。設定は `design-system/scss.config.js`）
- プロパティの並び順は stylelint（`order/properties-order`）に従う。`pnpm run lint:fix` で直せる
- `:global` は使わない。スロットで渡す中身に体裁を当てるなど、どうしても必要な場合だけ、理由を書いて stylelint の該当ルールを止める

## ルーティング方針

- リンクは末尾スラッシュ付きで書く（`/calendar/`）
- 移行後は、リンク先パスをすべて `shared/routes` の `ROUTES` 定数から参照し、文字列リテラルのハードコーディングを禁止する。ページタイトルは `PAGE_TITLE` 定数から参照し、動的セグメントを含むパスは `ROUTES.xxx.detail(id)` の関数形式を使う

## エラー方針

- 静的サイトなので、存在しないページは `web/src/routes/+error.svelte`（と Amplify の書き換え先 `404.html`）で表示する
- 移行後は `shared/errors` の `AppError` 抽象クラスを継承してエラーを定義し、instanceof チェックで分岐する（404 → `NotFoundError`、500 → `InternalServerError`）

## フォーム実装方針

- Submitボタンは原則クリック可能とし、クリック時にバリデーションを実行する
- 二重送信防止のため、送信中のみ無効化を許可する
- バリデーションエラーは、ユーザーが次に取るべき行動が分かる文言で表示する
- Select系は未選択状態を明示する初期値を持たせる
- 単一行テキスト入力は、onBlur時にtrimして不正な空白混入を防ぐ

## 命名・構成方針

- 関数・変数: lowerCamelCase
- 変数名・関数名に略称を使用しない（`i` → `index`、`e` → `event`、`el` → `element` など）
  - 命名が衝突する場合は文脈を示すプレフィックスを付ける（例: 外側の index と内側の index → `linkIndex` など）
- コンポーネント・型: PascalCase
- 定数: SCREAMING_SNAKE_CASE
- トップレベルの固定配列・固定マップ・表示定義など、再代入しない値は `ICON_GALLERY_ITEMS` のように SCREAMING_SNAKE_CASE で定義する
- 新しく作る ts/js ファイル名: lowerCamelCase（例: `headerConfig.ts`）。既存の kebab-case のファイル（`responsive-design.ts` など）は、移動するときに合わせて直す
- css/scss/png/jpg/svg/webp ファイル名: kebab-case
- Svelte コンポーネントファイル名: UpperCamelCase（例: `IconGallery.svelte`）
- SvelteKit のルーティング専用ファイル（`+page.svelte` / `+layout.svelte` / `+error.svelte`）はフレームワーク仕様を優先して例外とする
- 公開境界は index.ts で明示し、内部実装を外部に漏らさない
- 関数定義は原則 `const foo = () => {}` を採用し、function 宣言はホイスティングや `this` 制御が必要な場合に限定する
- 条件分岐は早期 return を優先し、不要な if / else のネストを増やさない
- 状態変化に伴う見た目は aria 属性・data 属性・要素セレクタで表現し、クラスの付け外しは最終手段とする
- CSS が長い場合は `#region` 相当のコメントやセクションコメントで折りたたみやすく保つ
- Svelte は UI 表示に集中させ、型は model、定数は config、状態管理は store、関数は lib への分離を検討する
- 状態を持たない参照専用の定数・補助処理は `<script lang="ts" module>` への切り出しを検討する
- コンポーネントのディレクトリ構成は [frontend-architecture-design.instructions.md](./frontend-architecture-design.instructions.md) に従う

## 設計原則

- DRY: 本質的に同一な処理のみ共通化する
- YAGNI: 現時点で必要な機能のみ実装する
- SRP: 関心を分離し、責務を最小単位で保つ
- KISS: 複雑さを増やす設計を避ける
- 変更容易性: 将来の仕様変更で影響範囲が局所化される構造にする
- 値の欠損表現は原則 `undefined` を使用し、外部 API / 仕様上 `null` が必須な場合のみ `null` を許可する

## 品質チェック

実装時は以下を必ず確認する。

- この実装は1つの明確な責務を持つか
- より単純に書ける余地がないか
- テストしやすい境界になっているか
- 依存方向が不適切になっていないか
- 3ヶ月後に読んでも意図を理解できるか

## テスト実装補足

- テストは原則 `正常系` / `異常系` / `準正常系` で describe を整理する
- 読み解きに時間がかかるテストファイルでは `#region` コメントで表示テスト・操作テストなどの責務を区切る
- 各テストケース内は `#region Given` / `#region When` / `#region Then` でグルーピングする
- `it` の説明文は必ず `〇〇の場合、〇〇になること` 形式で記述する
- バリエーションの確認は同型の test を並べず、`it.each` を優先する
- 既存のテスト（`web/tests/unit/`）はこの形になっていないものがある。触るときに合わせて直す

## フォーム実装補足

- form 値の更新は bind に依存せず、イベント伝播または明示的なコールバックで制御する
- 値の確定タイミングは原則 onBlur を優先し、必要時のみ onChange / onInput を補助的に使う
- id / name / value / type / label / placeholder などのフォーム基本属性は省略可能にしない

## Svelte テンプレート実装補足

- `{#each}` ブロックには必ずキー式 `(expr)` を付与する（`svelte/require-each-key` で強制）
  - キーはインデックス変数を使用する（`{#each list as item, index (index)}`）
  - インデックス変数が既に存在する場合は文脈を示すプレフィックスを付ける（例: `linkIndex`）
- `{#each}` キーは一意でなければならない（同一リスト内で重複不可）

## ドキュメント補足

- 外部公開する関数・型・クラス・公開 API には tsDoc を必ず付与する
- tsDoc では引数がある場合 `@param 名前 - 説明`、戻り値がある場合 `@returns` を必須とする
- TSDoc に無いタグ（`@return` `@property` `@note` `@description` など）は使わない。フィールドの説明は各フィールドの直前に `/** 説明 */` で書く
- 業務要件・制約・外部連携事情など設計判断に影響する背景がある場合は、可能な限り `@remarks` を付与する
