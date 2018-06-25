// webpack.config.js
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',  // production
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "postcss-loader", options: {
            plugins: (loader) => [
            require('autoprefixer')(), //CSS浏览器兼容
            ]}
          },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif?g)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" }
        ]
      }
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      //   loader: 'file-loader'
      // },
      // {
    ],
    // devServer: {
    //   contentBase: './',
    //   host: serverHost,
    //   port: 9090, //默认9090
    //   inline: true, //可以监控js变化
    //   hot: true//热启动
    // }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
};