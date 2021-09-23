# website

[![CI](https://github.com/y4shiro/website/actions/workflows/ci.yml/badge.svg)](https://github.com/y4shiro/website/actions/workflows/ci.yml)

ポートフォリオサイトのリポジトリです  
ブログにはしない予定

[y4shiro.net](https://y4shiro.net/)

## 環境

### ローカル

- Node.js v14.15.1
- npm 7.14.0
- Git 2.31.1

### npm

詳細は package.json を参照

- Gatsby 3.8.1
- React 17.0.1
- TypeScript 4.3.5
- Emotion 11.4

### Gatsby-plugin

- gatsby-plugin-emotion 6.9.0
- gatsby-plugin-google-analytics 3.9.0
- gatsby-plugin-react-helmet 4.13.0

上記は元々 npm で公開されているパッケージを Gatsby で導入しやすくしたもの

- gatsby-source-filesystem 3.12.0

Gatsby でローカルファイル等からデータを取得し、 GraphQL で扱えるようにするプラグイン

- gatsby-plugin-image 1.9.0
- gatsby-plugin-sharp 3.9.0
- gatsby-transformer-sharp 3.9.0

Gatsby 公式の画像処理系プラグイン  
画像を読み込んで GraphQL で読み込んだり、ページの幅に合わせて画像サイズを最適化したり

### クラウド系

- Cloudflare Pages
- Cloudflare DNS
- Firebase (Functions / Storage)

ページ公開は Cloudflare Pages、ドメイン関連は Cloudflare DNS  
一部処理に Firebase を利用している

## ローカルサーバの立ち上げ

リポジトリクローン後に `.env.development` をルートディレクトリに追加  
Firebase を利用しているので、これが無いとビルド時にエラーが出る

```bash
GATSBY_FIREBASE_API_KEY='<Your_Api_Key>'
GATSBY_FIREBASE_AUTH_DOMAIN='<Your_Auth_Domain>'
GATSBY_FIREBASE_PROJECT_ID='<Your_Project_Id>'
GATSBY_FIREBASE_STORAGE_BUCKET='<Your_Storage_Bucket>'
GATSBY_FIREBASE_MESSAGING_SENDER_ID='<Your_Messaging_Sender_Id>'
GATSBY_FIREBASE_APP_ID='<Your_App_Id>'
```

下記コマンドでローカルサーバが立ち上がる

```bash
$ gatsby develop
```

## 本番公開用ファイルのビルド

事前に `.env.production` を用意する必要がある  
内容は上で紹介した `.env.development` を参考にする

下記コマンドを実行すると、`public` ディレクトリに公開用ファイルが出力される  
任意の Web サーバや公開設定にしたクラウドストレージなどに出力されたファイルを設置すると Web ページとして公開される  
ただ、ホスティングサービスとリポジトリを連携してビルド/デプロイを自動で行うほうが圧倒的に楽

```bash
$ gatsby build
```

## ホスティングサービスと連携 / デプロイ

Netlify / Cloudflare Pages など各サービスによって手順が異なるので調べてください  
`.env.*` 系の環境変数ファイルをリポジトリで公開しない方針なので、ホスティングサービスの GUI で環境変数を必ず入力する  
なお、環境変数の接頭詞(prefix)には必ず `GATSBY_` を付与すること
