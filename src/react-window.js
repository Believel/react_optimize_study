import React from 'react';
// 原理：
// 用数组保存所有列表元素的位置，只渲染可视区内的列表元素，当可视区滚动时，根据滚动的 offset 大小以及所有列表元素的位置，计算在可视区应该渲染哪些元素
export class FixedSizeList extends React.Component{
    constructor(){
        super();
        this.containerRef = React.createRef();
    }
    state = {start:0}//要显示的元素的起始索引 0~4 
    componentDidMount(){
        // 监听最外层容器的滚动事件
        this.containerRef.current.addEventListener('scroll',()=>{
            // 计算外层容器的滚动top值
            let scrollTop = this.containerRef.current.scrollTop;
            // 重新计算初始的显示元素的索引值
            let start = Math.floor(scrollTop/this.props.itemSize);
            this.setState({start});
        });
    }
    render(){
        let { width,height,itemSize,itemCount } = this.props;
        //width height 是list宽度和高度 itemSize itemCount 条目的高度和条数的总数量
        // 存储条目元素
        let children = [];
        // 计算要展示的条目数
        let pageSize = Math.floor(height/itemSize)+1;
        // 条目数的样式
        let itemStyle = {height:itemSize,width:'100%',position:'absolute',left:0,top:0};

        for(let i=this.state.start;i<this.state.start+pageSize;i++){
            // 更新条目的top值
            let style = {...itemStyle,top:i*itemSize};//0 30px 60px
            children.push(this.props.children({index:i,style}));
        }
        // 外层容器的样式
        let containerStyle = {width,height,position:'relative',overflow:'auto'};
        return (
            <div style={containerStyle} ref={this.containerRef}>
                <div style={{width:'100%',height:itemSize*itemCount}}>
                  {children}
                </div>
            </div>
        )
    }
}