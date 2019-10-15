const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
  mode:'development',
  context: process.cwd(),//上下文目录是当前的工作
  devtool:'none',
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // 表示匹配以.js或者以.jsx后缀的文件
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            // 从右向左执行
            presets: ["@babel/preset-env","@babel/preset-react"],
            // 按顺序执行
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
          },
        },
        include: path.join(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test:/\.(jpg|png|gif)$/,
        use:{loader:'url-loader',options:{limit:0}}
      },
      {
        test:/\.css$/,
        use:["style-loader",'css-loader']
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
            template:'./src/index.html',//指定模板文件
            filename:'index.html',//产出后的文件名
        })
  ]
};
