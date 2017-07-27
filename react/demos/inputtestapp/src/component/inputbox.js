import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './inputbox.css'

class InputBox extends Component {
  constructor(props){
  	super(props);
  	this.state = {name:''};
  }	
  nameChanged() {
     return false;
     //console.log(ReactDOM.findDOMNode(this.refs.inputName).value);
     //ReactDOM.findDOMNode(this.refs.inputName).
     //this.setState({name:ReactDOM.findDOMNode(this.refs.inputName).value});
  }
  render() {
    return (
      <div className="inputBox">
      		<input 
      		  maxLength = {10}
      			type = "text" 
      			 ref = "inputName"
      		onKeyPress = {this.nameChanged.bind(this)}	 
      		/>
      		<br/>
      		<span className={this.state.name.trim().length > 6 ? 'green':'red'}>{this.state.name.trim().length > 0 ? this.state.name.trim().length:''}</span>
      		<span>{100 - this.state.name.trim().length}</span>
      </div>
    );
  }
}

export default InputBox;
