import React from 'react';
import {browserHistory} from 'react-router';

class Users extends React.Component {
	clickHandler() {
		browserHistory.push("/home");
	}
	render(){
		return (
			<div>
				<h1>Users</h1>
				<button onClick={this.clickHandler}>Go To Home</button>
			</div>
		);
	}
}
export default Users;