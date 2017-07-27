import React, { Component } from 'react';
import '.././App.css';

class AddTask extends Component {
  addNewTask(event){
  	var keypressed = event.keyCode || event.which;
    if (keypressed === 13) {
  		this.props.addtask(event.target.value);
  		event.target.value ="";
    }
  }		
  render() {
    return (
      <section className="addtask">
      	<input placeholder="Add New Task" type="text" onKeyDown={this.addNewTask.bind(this)} className="txt" />
      </section>
    );
  }
}

export default AddTask;
