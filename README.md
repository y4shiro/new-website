# website

ポートフォリオページのリポジトリです  
ブログにはしない予定

[y4shiro.net](https://y4shiro.net/)

## 開発環境

### ローカル

- Node.js v14.15.1
- npm 7.14.0
- Git 2.31.1

### NPM

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
