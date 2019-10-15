import React from "react";
import ReactDOM from "react-dom";
let data = [
    {id:1,name:'zhufeng',age:10},
    {id:2,name:'jiagou',age:10}
]
//Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
class Columns extends React.Component{
    render(){
        let data = this.props.data;
        return (
            <React.Fragment><td>{data.id}</td><td>{data.name}</td><td>{data.age}</td></React.Fragment>
        )
    }
}
class Table extends React.Component{
    render(){
        let data = this.props.data;
        return (
            <table>
                <thead>
                  <tr><td>ID</td><td>姓名</td><td>年龄</td></tr>
                </thead>
                <tbody>
                {
                    this.props.data.map((item,index)=>(
                        <tr><Columns data={item}/></tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
}
ReactDOM.render(<Table data={data}/>, document.getElementById("root"));