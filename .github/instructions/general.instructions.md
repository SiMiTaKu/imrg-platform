---
description: プロジェクト全体のルール探索と適用順序を定義するメタルール
applyTo: '**/*'
name: プロジェクトルール管理システム
---

# General Rules - プロジェクトルール管理システム

## 目的

このファイルは、実装時に参照すべきルールと資料への導線を定義します。
ルールは兄弟リポジトリ oshiage の `.github/instructions/` をもとにしており、このリポジトリの実情に合わせて書き換えています。

## 常時参照ルール

すべての実装で以下を必ず参照してください。

- [project-documents.instructions.md](./project-documents.instructions.md)
- [development-workflow.instructions.md](./development-workflow.instructions.md)

## タスク別参照ルール

- フロントエンドのUI実装をする場合: [frontend-foundation.instructions.md](./frontend-foundation.instructions.md)
- フロントエンドを実装する場合: [frontend-architecture-design.instructions.md](./frontend-architecture-design.instructions.md)
- 静的書き出し・SEO・配信設定を触る場合: [static-site-hosting.instructions.md](./static-site-hosting.instructions.md)
- 単体テストを実装する場合: [frontend-unit-test.instructions.md](./frontend-unit-test.instructions.md)
- 結合テストを実装する場合: [frontend-integration-test.instructions.md](./frontend-integration-test.instructions.md)
- E2Eテストを実装する場合: [frontend-e2e-test.instructions.md](./frontend-e2e-test.instructions.md)

## 作業前チェック

- `docs/TODO.md` に該当する項目があるか。あれば番号を控え、PR とコミットに書く
- 対象機能に必要な資料を特定したか
- 不明点・矛盾点を洗い出したか
- 推測実装ではなく確認フローを取れる状態か

## 判断ルール

- 仕様が明示されている場合は仕様を優先する
- 実装都合で仕様を変更しない
- 資料不足や矛盾がある場合は、確認依頼を先に行う
- 新規ドキュメント追加時は project-documents.instructions.md に追記し、参照元を一元化する
- 新しい実装ルールを追加した場合は、general.instructions.md の参照導線を更新する
- 作業の途中で TODO と違う判断をした場合は、`docs/TODO.md` にその理由を書き残す
- プロダクト全体で外部公開する関数・型・クラス・公開 API には tsDoc を必ず付与する（ESLint で強制）
- tsDoc では引数がある場合 `@param 名前 - 説明`、戻り値がある場合 `@returns` を必須とする
- 業務要件・制約・外部連携事情など設計判断に影響する背景がある場合は、可能な限り `@remarks` を付与する
- 数値文字列の変換ではグローバル `parseInt` ではなく `Number.parseInt` を使用する（ESLint で強制）
- ファイル肥大化時は config / model / store / lib への責務分離を優先し、UI ファイルへロジックを溜め込まない
- 画面の文言は多言語化を前提に扱う（既定は日本語、まず英語を加える）
- 応答・コメント・コミットメッセージ・PR・ドキュメントは日本語で書く。識別子は英語のままでよい
