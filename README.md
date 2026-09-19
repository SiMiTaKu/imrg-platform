# 男子新体操国際化プロジェクトのメインサイト

改修の計画と積み残しは [docs/TODO.md](docs/TODO.md) にまとめてあります。作業を始める前に読んでください。

実装のルールは [.github/instructions/](.github/instructions/) にあります（兄弟リポジトリーoshiageのルールをもとにしています）。入口は [general.instructions.md](.github/instructions/general.instructions.md) です。

## 構成

pnpm workspaceのモノレポです。

| フォルダー       | パッケージ                     | 内容                                                                                               |
| ---------------- | ------------------------------ | -------------------------------------------------------------------------------------------------- |
| `web/`           | `@imrg-platform/web`           | imrg.work のサイト（SvelteKit の静的書き出し）                                                     |
| `design-system/` | `@imrg-platform/design-system` | 共通部品とトークン。`pnpm --filter @imrg-platform/design-system storybook` で Storybook を開きます |
| `docs/`          | —                              | 改修計画と手順書                                                                                   |

lint・整形の設定はルートにあり、全パッケージに効きます。コマンドはルートで実行します。

## Init

パッケージの管理はpnpmです（版は `package.json` の `packageManager`）。Node 24に付属するcorepackで入れます。

```bash
corepack enable
pnpm install
```

## Developing

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Building

```bash
pnpm run build
```

> [!NOTE]
> Nodeのバージョンは `.node-version` で指定しています（24系）。Amplifyもビルドの最初に `nvm install $(cat .node-version)` で同じバージョンを入れます。
> 以前はAmplifyのビルドが失敗するため18系に留めていました。Amplifyのビルドイメージが古い（Amazon Linux 2）と新しいNodeが動かないため、上げたあとにビルドが失敗したら、コンソールでビルドイメージがAmazon Linux 2023になっているかを確かめてください。

## Verify

CIと同じ確認（整形・lint・型・テスト・ビルド）をまとめて実行します。PRを出す前に通してください。

```bash
pnpm run verify
```

## Lint

### Check

```bash
pnpm run lint
```

### Fix

```bash
pnpm run lint:fix
```

### Format

整形はPrettierに任せています（設定はoshiageと同じ `.prettierrc.json`）。
コミット時にlint-stagedが変更したファイルだけを整形・lintします。

```bash
pnpm run format        # 整形する
pnpm run format:check  # 整形済みか確かめる
```
