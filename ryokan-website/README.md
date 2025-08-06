# 老舗旅館 Webサイト

伝統と洗練が調和する、老舗旅館の公式ウェブサイトです。

## 🚀 開発環境のセットアップ

1. リポジトリをクローンします
   ```sh
   git clone [repository-url]
   cd ryokan-website
   ```

2. 依存パッケージをインストールします
   ```sh
   npm install
   ```

3. 開発サーバーを起動します
   ```sh
   npm run dev
   ```

4. ブラウザで [http://localhost:4321](http://localhost:4321) を開きます

## 🛠 技術スタック

- [Astro](https://astro.build/) - 静的サイトジェネレータ
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストなCSSフレームワーク
- [DaisyUI](https://daisyui.com/) - Tailwind CSS用のコンポーネントライブラリ

## 📁 プロジェクト構成

```
/
├── public/               # 静的ファイル
│   └── images/           # 画像アセット
├── src/
│   ├── components/       # 再利用可能なコンポーネント
│   ├── layouts/          # ページレイアウト
│   └── pages/            # ページコンポーネント
│       └── index.astro   # ホームページ
└── package.json
```

## 🎨 デザインシステム

### カラーパレット

- プライマリー: `#8B5A2B` (茶色)
- セカンダリー: `#D4B483` (ベージュ)
- アクセント: `#A52A2A` (赤茶色)
- ライト: `#F5F5F0` (オフホワイト)
- ダーク: `#2A2A2A` (ほぼ黒)

### タイポグラフィ

- 日本語: Noto Sans JP, Noto Serif JP
- 欧文: システムフォールバック

## 📝 開発ガイドライン

1. コンポーネントは `src/components` に作成します
2. スタイリングには Tailwind CSS のユーティリティクラスを使用します
3. コンポーネントはできるだけ小さく、単一責任の原則に従います
4. コメントは日本語で記述します

## 📦 ビルドとデプロイ

本番環境用にビルドするには:

```sh
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

## 📄 ライセンス

このプロジェクトはプライベートリポジトリです。無断転載・複製を禁じます。

---

© 2025 老舗旅館. All rights reserved.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
