---
description: プロジェクトの資料の正本リンク集。実装前・設計判断時に必ず参照する
applyTo: '**/*'
name: プロジェクト仕様ドキュメント参照ルール
---

# Project Documents - 仕様ドキュメント参照ルール

## 目的

このファイルは、プロジェクトで参照すべき資料のリンク集です。
設計・実装・レビューの判断は、本ファイルの資料を正本として扱ってください。

## 参照ルール

- 実装開始前に、対象機能に関係する資料を必ず確認する
- 資料間で不整合がある場合は、推測実装せず確認を優先する
- 資料不足の場合は、必要資料の提示または仕様確定を依頼する
- 新規資料が追加された場合は、このファイルへ追記し、以後は追記済みリンクを参照する

## リポジトリ内の資料

- [README.md](../../README.md) … 開発環境の準備と、よく使うコマンド
- [docs/TODO.md](../../docs/TODO.md) … 改修計画（Phase 0〜6）と、調査済みの現状。作業はこの番号単位で進める
- [docs/rules-guide.md](../../docs/rules-guide.md) … ルール解説（`/rules/`）の作り直しの方針と決まりごと。書ける／書けないの線引き、URL の階層、文章のルール、作る順。`/rules/` を触る前に必ず読む
- [docs/aws-setup.md](../../docs/aws-setup.md) … AWS と Amplify のコンソール作業の手順（書き換えルール、権限、CloudTrail、本番ブランチの切り替えなど）
- [terraform/README.md](../../terraform/README.md) … S3 + CloudFront の全体像、配り方、戻し方、監視
- [src/routes/oshimitsu/README_V1.md](../../web/src/routes/oshimitsu/README_V1.md) … 推しミツ！の要件（`README_V0.md` はブレスト時の記録）

## リポジトリ外の資料

- `~/imrg/calendar-data/README.md` … 大会カレンダーの元データ（JSON）と、`web/src/entities/calendarEvent/api/events.ts` を生成するスクリプトの使い方。`events.ts` は手で編集しない（TODO 6-1 で取り込み予定）
- `~/imrg/imrg-hub/knowledge/` … 新体操の知識ベース。ルール解説（`/rules/`）の本文の出典にする。同じリポジトリーの `vendor/` には公式規則集を退避してある（git 管理しない・公開しない）
- `~/imrg/imrg-hub/projects/weekly-report/` … 検索順位とアクセスの分析。どのページを作るかの根拠にする
- `~/imrg/oshiage/` … 構成の手本にしている兄弟リポジトリ（モノレポ・FSD・デザインシステム・Terraform）。lint・整形・CI の設定は oshiage と揃える
- `~/imrg/oshiage/.github/instructions/` … このディレクトリのルールの元
