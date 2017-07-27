import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {timeIncremented, timeDecremented, addUsers, taskAdded} from '.././actions/actions.js'


class Layout extends React.Component {
	render(){
		var self = this;
		console.log(this.props.task.todos);
		return(
			<div>
				<button onClick={function(){ self.props.increment("shdfg"); }}>Increment</button>
				{this.props.time}
				<button onClick={function(){ self.props.decrement("shdfg"); }}>Decrement</button>
				<button onClick={function(){ var ddd = Math.floor((Math.random() * 100) + 1); self.props.adduser("kfhsjdfh "+ddd); }}>Add user</button>
				<ul>
					<li>{this.props.users.users.length}</li>
				</ul>
				<button onClick={function(){ var ddd = Math.floor((Math.random() * 100) + 1); self.props.newtask("kfhsjdfh "+ddd); }}>Add Task</button>
			</div>
		)
	}
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({newtask:taskAdded, adduser:addUsers, increment: timeIncremented, decrement: timeDecremented}, dispatch);
}
function mapStateToProps(state) {
    return {
        time: state.time.time,
        users: state.user,
        task:state.task
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(Layout);