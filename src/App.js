import React, { Component } from 'react';
import Form from './Form';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[
        {id:1 ,list:'k xa garna '},
         {id:2 ,list:'k kk xa garna '},
         ]
    }
  }
  handledelete=(index)=>{
    const todo=this.state.todos.filter((users)=>{
      return users!== this.state.todos[index];
    })
    this.setState({todos:todo});
  }
   handlebar=(e)=>{
e.preventDefault();
const entered=e.target.inputform.value;
    this.setState({todos:[...this.state.todos,{list:entered}]});
  }

render(){
return(
<div className="App">
<div className="wrapper">
<div><h1>TODO LIST</h1>
<hr/></div>
<div><Form handleform={this.handlebar}/></div>
<div><ul>
  {this.state.todos.map((x,index)=>{
    return(<li>
      <div className="lists">{x.list}</div>
     <div className="buttons"> <button onClick={()=>this.handledelete(index)}>x</button></div>
      </li>);
  })}
</ul></div>

</div></div>
);}
}

export default App;
