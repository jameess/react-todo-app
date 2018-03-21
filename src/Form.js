import React from 'react';
import './App.css';
const Form=(props)=>{
return(
<div>
  <form onSubmit={props.handleform}>
  <input type="text"  name="inputform"/>
  <button>Add</button>
</form>
</div>);

 
}
export default Form;
