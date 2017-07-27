import React, { Component } from 'react';
import '.././App.css';

class Task extends Component {
  deleteTask(task){
  	this.props.deleteMe(task);
  }	
  render() {
    return (
      <li className="task">{this.props.data.title}<button onClick={this.deleteTask.bind(this, this.props.data)} className="btndelete">Delete</button></li>
    );
  }
}

export default Task;
