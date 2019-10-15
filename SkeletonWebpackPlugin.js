/**
我是一个插件，在编译 src/index.js的时候生效
我负责启动一次新的webpack编译,用webpack.skeleton.js 做为配置文件，得到输出的结果
输出的其实是一个svg图片，然后我把这个svg图片直接插入到<div id="root"><svg></svg></div>
compiler代表整个编译对象
compilation代表一次编译
 */
let webpack = require('webpack');
let path = require('path');
let requireFromString = require('require-from-string');
let MFS = require('memory-fs');//内存版的fs模块
let mfs = new MFS();
 class SkeletonWebpackPlugin{
     constructor(options){
         this.options = options;//skeletonWebpackOption
     }
     apply(compiler){
         let {webpackConfig} = this.options;
         compiler.hooks.compilation.tap('SkeletonWebpackPlugin',compilation=>{
             //我们在要这监听html处理事件
             //就是一发布 观察者 
             compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('SkeletonWebpackPlugin',(htmlPluginData,callback)=>{
                 //我在这个地方要开启一次新的webpack编译，得到编译的结果
                 let childCompiler = webpack(webpackConfig);
                 let outputPath = path.join(webpackConfig.output.path,webpackConfig.output.filename);
                 //指定webpack编译后用什么模 块进行输出
                 childCompiler.outputFileSystem = mfs;
                 childCompiler.run((err,stat)=>{
                     //以同步的方式读取文件内容
                     let skeletonJS = mfs.readFileSync(outputPath,'utf8');
                     let result = requireFromString(skeletonJS);
                     let svgHtml = result.default;
                     htmlPluginData.html = htmlPluginData.html.replace('<div id="root"></div>',`<div id="root">${svgHtml}</div>`);
                     callback(null,htmlPluginData);
                 });
               
             });
         });
     }
 }
 module.exports = SkeletonWebpackPlugin;