# imrg-platform（imrg.work）— AI への指示

**このリポジトリのルールは `.github/instructions/` にある。作業を始める前に必ず読むこと。**
入口は [.github/instructions/general.instructions.md](.github/instructions/general.instructions.md)。そこからタスクごとのルールへたどる。

| 読むもの                                                                                                          | いつ読むか                                                   |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [general.instructions.md](.github/instructions/general.instructions.md)                                           | **常に。** ルールの一覧と判断の決まり                        |
| [project-documents.instructions.md](.github/instructions/project-documents.instructions.md)                       | **常に。** 資料の置き場所                                    |
| [development-workflow.instructions.md](.github/instructions/development-workflow.instructions.md)                 | **常に。** ブランチ・コマンド・コミット・PR・リリース        |
| [frontend-foundation.instructions.md](.github/instructions/frontend-foundation.instructions.md)                   | `src/` の実装                                                |
| [frontend-architecture-design.instructions.md](.github/instructions/frontend-architecture-design.instructions.md) | ファイルの置き場所・責務の分け方                             |
| [static-site-hosting.instructions.md](.github/instructions/static-site-hosting.instructions.md)                   | ページの追加、メタ情報・sitemap・`amplify.yml`、本番への反映 |
| [frontend-unit-test.instructions.md](.github/instructions/frontend-unit-test.instructions.md) ほか                | テストを書くとき                                             |

改修の計画は [docs/TODO.md](docs/TODO.md)。

## 特に外してはいけないこと

1. **パッケージは pnpm。** PR を出す前に `pnpm run verify` を通す
2. **`develop` と `main` へ直接 push しない。** `feature/*` から PR を出す
3. **本番への反映は `https://imrg.work/_app/version.json` で確かめる。** HTML の文字列検索では判定しない
4. **`src/views/page/calendar/_data/events.ts` は手で編集しない。** 元データは `~/imrg/calendar-data/`
