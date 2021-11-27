const path = require("path"); // pathモジュールを読み込む
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js", // エントリーポイントを設定
  output: {
    path: path.resolve(__dirname, "./dist"), // 絶対パスを取得
    filename: "./src/js/index.js", // ビルドされるファイルの名前を設定
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
  devServer: {
    port: 8080,
    static: "dist",
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/, // 変更
        use: [
          {
            loader: "style-loader",
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader", // 追加
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
        use: [
          // 追加
          {
            loader: "image-webpack-loader",
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hello react",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
  ],
};
