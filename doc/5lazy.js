import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import Loading from './components/Loading';
const AppTitle = React.lazy(()=> import(/* webpackChunkName:"title"*/'./components/Title'))
// React.Lazy接受一个函数，这个函数内部调用import()动态导入。它必须返回一个Promise，该Promise需要resolve一个
// default export 的 React 组件
// React.Suspense 用于包装延迟组件以在加载组件时显示后备内容
//  - 错误边界(Error Boundaries)
//    1. 如果当一个组件异步加载下载js文件时， 网络错误， 无法下载js文件，Suspense无法处理这种错误的情况，在 react 中有一个错误边界的概念，用来解决这种问题，它是利用了react生命周期的 componentDidCatch 方法来处理
//    2. 有两种方式，一种是生命周期 componentDidCatch 来处理错误，还有一种是静态方法 static getDerivedStateFromError 来处理错误。
class App extends Component{
  static getDerivedStateFromError(error) {
    return {
      isError: true
    }
  }
  state = {
    visible: false,
    isError: false
  }
  componentDidCatch(err, info) {
    console.log(err, info)
  }
  show = ()=> {
    this.setState({
      visible: true
    })
  }
  render(){
    console.log('App render');
    if(this.state.isError) {
      return (<div>error</div>)
    }
    return (
      <>
      {
        this.state.visible && (
          <Suspense fallback={<Loading/>}>
            <AppTitle/>
          </Suspense>
        )
      }
      <button onClick={this.show}>加载</button>
      </>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));