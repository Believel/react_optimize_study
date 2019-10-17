import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// 允许你将组件渲染成静态标记。通常，它被使用在Node服务端上
import ReactDOMServer from 'react-dom/server';
// ReactDOMServer.renderToString(element) 将React 元素渲染为初始HTML
// ReactDOMServer.renderToStaticMarkup(element) 与renderToString相似，但此方法不会在React内部创建额外的DOM属性，例如data-react-root
class App extends Component {
  render() {
    return '12345'
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))