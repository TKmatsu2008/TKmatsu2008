# Portfolio Website

React, TypeScript, Tailwind CSSを使用して構築された個人のポートフォリオサイトです。プロフィール、プロジェクト、研究成果などを掲載しています。

## 🚀 使用技術

- **フレームワーク:** [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **ビルドツール:** [Vite](https://vitejs.dev/)
- **スタイリング:** [Tailwind CSS](https://tailwindcss.com/)
- **UIコンポーネント:** [shadcn/ui](https://ui.shadcn.com/)
- **アイコン:** [Lucide React](https://lucide.dev/)
- **デプロイ:** GitHub Pages (GitHub Actions)

## ✨ 機能

- **Profile:** 自己紹介と経歴。
- **Project:** 開発プロジェクトの紹介（モーダル表示で詳細を確認可能）。
- **Research:** 研究内容や成果の紹介。
- **Others:** 受賞歴やスキルセット。
- **Contact:** GitHub, Email, Wantedlyへのリンク。
- **レスポンシブデザイン:** PCおよびモバイルデバイスに対応。

## 🛠️ 開発環境のセットアップ

### 前提条件

- Node.js (v20以上推奨)
- npm

### インストール

1. リポジトリをクローンします:
   ```bash
   git clone https://github.com/TKmatsu2008/TKmatsu2008.git
   cd TKmatsu2008
   ```

2. 依存関係をインストールします:
   ```bash
   npm install
   ```

### ローカルでの実行

開発サーバーを起動します:

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開いて確認してください。

## 🌍 デプロイ

このプロジェクトは GitHub Actions を使用して GitHub Pages に自動デプロイされるように設定されています。
`main` ブランチにプッシュすると、`.github/workflows/deploy.yml` で定義されたワークフローが実行されます。