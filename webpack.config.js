const base = require('./webpack.base');
const {smart} = require('webpack-merge');
const SkeletonWebpackPlugin = require('./SkeletonWebpackPlugin');
module.exports = smart(base,{
  entry: "./src/index.js",
  output: {
    filename: "main.js"
  },
  plugins: [
      new SkeletonWebpackPlugin({
        webpackConfig:require('./webpack.skeleton')
      })
  ]
});
