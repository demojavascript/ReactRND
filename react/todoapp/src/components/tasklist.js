import React, { Component } from 'react';
import Task from './task.js';
import AddTask from './addtask.js';
import '.././App.css';
var sdata = [
	{title:"sfkja fjasdf 1 "},
	{title:"sfkja fjasdf 2 "},
	{title:"sfkja fjasdf 3 "}
];
class TaskList extends Component {
  constructor(props){
  	super(props);
  	this.state = {tasks:sdata};
  }	
  addTask(task){
  	var oldtask = this.state.tasks;
  	oldtask.push({title:task});
  	this.setState({tasks:oldtask});
  }	
  deleteTask(task){
  	var ddd = this.state.tasks.indexOf(task);
  	var oldtask = this.state.tasks;
    oldtask.splice(ddd, 1);
  	this.setState({tasks:oldtask});
  }
  render() {
  	var _this = this;
    return (
      <div>		
		  <AddTask ntask="" addtask={this.addTask.bind(this)} />
	      <section className="tasklist">
	      	<ul>
	      		{	
	      			this.state.tasks.map(function(task, key){
		      			return(<Task deleteMe={_this.deleteTask.bind(_this)} key={key} data={task} />)
		      		})
	      		}
	      	</ul>
	      </section>
      </div>
    );
  }
}

export default TaskList;
