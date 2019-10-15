import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {FixedSizeList as List} from './react-window';
//index 代表索引 style代表样式
const Row = ({index,style})=>(
    <div key={index} style={{...style,backgroundColor:getRandomColor(),lineHeight:'30px',textAlign:'center'}}>
        Row{index+1}
    </div>
)
const Container = ()=>(
    <List
      height={150}
      itemSize={30}
      itemCount={100}
      width={'100%'}
    >
     {Row}
    </List>
)
ReactDOM.render(<Container/>,document.getElementById('root'));
function getRandomColor(){
    let rand = Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase();
    if(rand.length == 6){
        return "#"+rand;
    }else{
         return getRandomColor();
    }
   
}