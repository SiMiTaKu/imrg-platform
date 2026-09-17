---
description: ブランチ運用・コマンド・コミットと PR の書き方・マージとリリースの手順
applyTo: '**/*'
name: 開発の進め方
---

# Development Workflow - 開発の進め方

## ブランチ運用

- `feature/*` → `develop` → `main` の順に進める。`main` へのマージで Amplify が本番（`https://imrg.work`）へ反映する
  - 2026-09-17 までは `master` が本番だった。切り替えの手順は `docs/aws-setup.md` の「本番のブランチを master から main へ変える」
- `develop` と `main` へ直接 push しない。docs だけの変更でも PR を通す
- ブランチ名は `feature/<内容>`。TODO の項目なら番号を含める（例: `feature/phase2-1-ci`）
- 大きな作業は、レビューしやすい単位に分けたスタック PR にする（各 PR のマージ先を1つ下のブランチにする）
- マージしたブランチは GitHub が自動で消す

## パッケージとコマンド

- パッケージの管理は pnpm（版は `package.json` の `packageManager`）。npm や yarn は使わない
- Node の版は `.node-version`。CI と Amplify も同じ版を使う
- 依存を足すときは `pnpm add`（開発用は `pnpm add -D`）。依存のインストール時スクリプトは `pnpm-workspace.yaml` の `allowBuilds` で許可したものだけ動く

| コマンド                     | 内容                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------ |
| `pnpm dev`                   | 開発サーバー                                                                   |
| `pnpm run verify`            | CI と同じ確認（脆弱性・整形・lint・型・テスト・ビルド）。PR を出す前に必ず通す |
| `pnpm run lint` / `lint:fix` | ESLint と stylelint                                                            |
| `pnpm run format`            | Prettier で整形                                                                |
| `pnpm run check`             | 型チェック（svelte-check）                                                     |
| `pnpm test`                  | Vitest                                                                         |
| `pnpm run textlint`          | README と docs の日本語の表記チェック                                          |

- コミット時は husky と lint-staged が、変更したファイルだけを整形・lint する（`pnpm install` で有効になる）

## コミット

- メッセージは日本語。1行目に「何をしたか」、本文に「なぜか」を書く。TODO の項目なら1行目に番号を添える（例: `CI で整形・型・ビルドまで確かめる（TODO 2-1）`）
- 生成物や一時ファイルをコミットしない（`build/` `.svelte-kit/` `.pnpm-store/` など）

## PR

- `.github/pull_request_template.md` の形（概要・変更内容・確認したこと・マージ後にやること）で書く
- 「確認したこと」には、実際に確かめた内容だけを書く。見た目に関わる変更は、PC とスマホの両方で確かめる
- TODO の項目を終えたら、同じ PR の中で `docs/TODO.md` のチェックを付け、決めたことを書き足す
- すべての PR で CI（`.github/workflows/ci.yml`）が走る。通らない PR はマージしない
- `main` 向けの PR には Amplify のプレビュー（`https://pr-<番号>.d1o1ui2gd5pshh.amplifyapp.com`）が作られる。ビルドの設定や依存を変えたときは、本番へ入れる前にプレビューで確かめる

## マージとリリース

- GitHub がスタックとして扱っている PR は、`gh pr merge` ではマージできない。一番上の PR を非同期マージの API でマージすると、下の PR もまとめて入る

  ```bash
  gh api -X PUT repos/SiMiTaKu/imrg-platform/pulls/<一番上の PR>/merge-async -f merge_method=merge
  ```

- スタックを作ったあとに上へ足した PR はスタックに含まれない。先にその PR を1つ下のブランチへマージしてから、スタックの一番上をマージする
- リリースは `develop` → `main` の PR をマージして行う。反映の確かめ方は [static-site-hosting.instructions.md](./static-site-hosting.instructions.md)
- `gh` のアカウントが仕事用に戻ることがある。`export GH_TOKEN=$(gh auth token --hostname github.com --user SiMiTaKu)` を付けて実行すると確実

## 依存の更新

- Dependabot が毎週月曜に、pnpm の依存と GitHub Actions の更新 PR を `develop` 向けに出す
- CI は、本番で読み込む依存に high 以上の脆弱性があれば失敗する。開発用の依存の脆弱性は `pnpm audit --fix` で `overrides` に足して解消する
- ESLint・Prettier・stylelint の設定は oshiage と揃える。片方だけ変える場合は、理由を `docs/TODO.md` に書く
