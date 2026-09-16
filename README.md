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
> Amplifyのビルドが失敗してしまうためNodeのバージョンは18系を使用しています。


## Lint
### Check
```bash
npm run lint
```

### Fix
```bash
npm run lint:fix
```

### format
```bash
npm run format
```