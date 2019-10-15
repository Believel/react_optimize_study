import React, { Component } from "react";
import ReactDOM from "react-dom";

class PureComponent extends Component {
  // 如果不需要渲染就返回 false
  shouldComponentUpdate(newProps) {
    // 浅比较
    return !shallowEqual(this.props, newProps)
  }
}
function shallowEqual(obj1, obj2) {
  if(obj1 === obj2) {
    return true
  }
  if(typeof obj1 !== "object" || obj1===null || typeof obj2 !== "object" || obj2 === null){
    return false
  }
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  if(keys1.length !== keys2.length){
    return false
  }
  for(let key of keys1) {
    if(!obj2.hasOwnProperty(key) || obj2[key] !== obj1[key]) {
      return false
    }
  }
  return true;
}
class Counter extends PureComponent{
  render() {
    console.log('Counter render')
    return (
      <div>{this.props.counter.number}</div>
    )
  }
}
class App extends Component{
  state = { counter: {number: 0}}
  add = () => {
    let oldState = this.state
    let amount = parseInt(this.amount.value - 0);
    let newState = {
      ...oldState, 
      counter: amount === 0 ? oldState.counter : { number: oldState.counter.number + amount}
    }
    this.setState(newState)
  }
  render(){
    console.log('App render');
    return (
      <div>
        <Counter counter ={this.state.counter}/>
        <input ref={inst => this.amount = inst}/>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));