# CREDEV - ウェブサイト開発環境

## 🔧 開発環境設定

### 必要な開発ツール
- [**Volta**](https://volta.sh/) : Node.jsのパッケージ管理を行うツール

### 環境
- Node.js 18.20.8
- Yarn 3.6.3
- 開発サーバー: localhost:3000

### 初期セットアップ
```bash
# 依存関係のインストール
yarn install
```

## 🚀 使用方法

### 開発環境の起動
```bash
yarn start
```
サーバーが `http://localhost:3000` で起動します。<br>
またはIPアドレスでもアクセスすることができます。

### 本番用ビルド
```bash
yarn build
```

## 📁 ディレクトリ構造・ファイル概要

| カテゴリ/ファイル | 説明 |
|-------------------|------|
| **コア設定** | |
| astro.config.mjs | Astro.jsの設定ファイル（サーバーポート、ホスト設定） |
| website.config.js | サイト全体の設定ファイル（メタデータ、OGP、メディアクエリ等） |
| tsconfig.json | TypeScriptの設定ファイル |
| package.json | プロジェクトの依存関係とスクリプトを定義 |
| yarn.lock | Yarnの依存関係ロックファイル |
| **ソースファイル** | |
| src/ | 開発用のソースファイルを格納 |
| src/layouts/ | サイト全体のレイアウトテンプレートを格納 |
| src/pages/ | 各ページのファイルを格納
| src/components/ | 再利用可能なコンポーネントを格納 |
| src/assets/ | 静的アセット（SCSS、JavaScript）を格納 |
| **コンポーネント** | |
| src/components/Header.astro | サイト共通のヘッダーコンポーネント |
| src/components/Footer.astro | サイト共通のフッターコンポーネント |
| src/components/[page]/ | ページごとのコンポーネントディレクトリ |
| src/components/[page]/section/ | 各ページのセクションコンポーネント |
| src/components/[page]/parts/ | 各ページの汎用パーツコンポーネント |
| **スタイル** | |
| src/assets/scss/ | SCSSファイルを格納 |
| src/assets/scss/styles.scss | メインのスタイルファイル |
| src/assets/scss/_font.scss | フォント関連のスタイル |
| src/assets/scss/_layouts.scss | レイアウト関連のスタイル |
| src/assets/scss/_mediaquery.scss | メディアクエリ関連のスタイル |
| src/assets/scss/_mixin.scss | SCSS mixinを定義 |
| src/assets/scss/_structure.scss | 基本構造のスタイル |
| **JavaScript** | |
| src/assets/js/ | JavaScriptファイルを格納 |
| src/assets/js/main.js | メインのJavaScriptファイル |
| src/assets/js/modules/ | 汎用的なモジュールを格納 |
| src/assets/js/pages/ | ページ固有のJavaScriptを格納 |
| **公開ファイル** | |
| public/ | 静的ファイル（画像、アイコン等）を格納 |
| **開発環境** | |
| .astro/ | Astroのキャッシュディレクトリ |
| .editorconfig | エディタの共通設定ファイル |
| .gitignore | Gitの除外設定ファイル |
| .yarn/ | Yarnの設定ディレクトリ |
| .yarnrc.yml | Yarnの設定ファイル |
| **その他** | |
| node_modules/ | npmパッケージのインストール先ディレクトリ |
| README.md | プロジェクトの説明・セットアップ手順等を記載 |

## 🏗️ 開発ルール

### コンポーネント設計
- **ページごとのディレクトリ**: `/src/components/[page]/`
- **セクション**: `/src/components/[page]/section/` - 各ページのセクション単位のコンポーネント
- **パーツ**: `/src/components/[page]/parts/` - 汎用的な部品コンポーネント
- **インデックスファイル**: 基本的にセクションを呼び出す形で実装

### スタイル管理
- **SCSS**: コンポーネントごとに細分化して実装
- **CSS変数**: Layout.astroで一元的にカスタムプロパティを管理
- **上位スタイル**: セクションレベルまでで実装を推奨

### JavaScript管理
- **コンポーネント単位**: スタイルと同様にコンポーネントごとに実装
- **共通モジュール**: `/src/assets/js/modules/` に汎用的な処理を配置
- **ページ固有**: `/src/assets/js/pages/` でページ単位の処理を実装
- **統合管理**: `/src/assets/js/main.js` で全体を取りまとめ

## 🛠️ 技術スタック

- **フレームワーク**: Astro.js v5.10.2
- **スタイル**: SCSS (sass-embedded)
- **JavaScript**: ES Modules (クラスベース実装)
- **パッケージマネージャー**: Yarn v3.6.3
- **Node.js**: v18.20.8

## 📱 レスポンシブデザイン

`website.config.js` で定義されたメディアクエリを使用：
- **モバイル**: `(max-width: 959px)`
- **デスクトップ**: `(min-width: 960px)`

## 📄 ライセンス

CREBAR FLAVOR.
