import React from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}



// 第一个参数(child)：任何可渲染的React子元素，例如一个元素，字符串或fragment.
// 第二个参数(container)是一个DOM元素。
// ReactDOM.createPortal(child, container)
// 将子节点渲染到存在于父组件以外的DOM节点
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1
    }))
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <h4>ReactDOM API</h4>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler
        </p>
        <Modal>
          <Child/>
        </Modal>
      </div>
    )
  }
}

function Child() {
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"))
