// 骨架屏相关的webpack配置
const base = require('./webpack.base');
const {smart} = require('webpack-merge');
module.exports = smart(base,{
  target:'node',
  entry: "./src/skeleton.js",
  output: {
    filename: "skeleton.js",
    //导出库的方式
    libraryTarget:'commonjs2'
  },
  plugins: [
       
  ]
});
