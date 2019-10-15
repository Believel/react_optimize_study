import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import ContentLoader from 'react-content-loader';
//ReactDOM.render(<ContentLoader/>,document.getElementById('root'));
let html = ReactDOMServer.renderToStaticMarkup(<ContentLoader/>);//<h1></h1>
//html就是一个svg图片
export default html;//es6 默认导出
/**
1.我要写一个webpack插件
2.
 */