import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// 长列表优化
import { FixedSizeList as List} from './react-window';

const Row = ({ index, style}) => (
  <div style={style} className={index % 2 ? 'listItemOdd' : 'listItemEven'}>
    Row {index}
  </div>
)
const App = () => (
  <List 
    className='list'
    height={150}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
)
ReactDOM.render(<App/>, document.getElementById("root"))
