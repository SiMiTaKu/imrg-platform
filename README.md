# 男子新体操国際化プロジェクトのメインサイト

改修の計画と積み残しは [docs/TODO.md](docs/TODO.md) にまとめてあります。作業を始める前に読んでください。

## Init

```bash
npm install
```

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```bash
npm run build
```

> [!NOTE]
> Nodeのバージョンは `.node-version` で指定しています（24系）。Amplifyもビルドの最初に `nvm install $(cat .node-version)` で同じバージョンを入れます。
> 以前はAmplifyのビルドが失敗するため18系に留めていました。Amplifyのビルドイメージが古い（Amazon Linux 2）と新しいNodeが動かないため、上げたあとにビルドが失敗したら、コンソールでビルドイメージがAmazon Linux 2023になっているかを確かめてください。

## Lint

### Check

```bash
npm run lint
```

### Fix

```bash
npm run lint:fix
```

### Format

整形はPrettierに任せています（設定はoshiageと同じ `.prettierrc.json`）。
コミット時にlint-stagedが変更したファイルだけを整形・lintします。

```bash
npm run format        # 整形する
npm run format:check  # 整形済みか確かめる
```
