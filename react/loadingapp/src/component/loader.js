import React, { Component } from 'react';
import './loader.css';
class Loader extends Component {
  constructor(props){
  	this.state = {isvisible:true};
  }	
  componentWillMount(){
    document.body.classList.add('popup');
  }
  componentWillUnmount(){
    document.body.classList.remove('popup');
  }
  render() {
  	document.body.classList.add('popup');
    return (
      <div className="loader">
          <div className="spinner"></div>
          <button>Hide It</button>
      </div>
    );
  }
}

export default Loader;