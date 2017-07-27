import React from 'react';
import {Link} from 'react-router';

class Users extends React.Component {
	render(){
		return (
			<div>
				<h1>Inside root</h1>
				<ul>
					<li><Link activeClassName={"active"} to="/">Home</Link></li>
					<li><Link activeClassName={"active"} to="/users">Users</Link></li>
					<li><Link activeClassName={"active"} to="/list">List</Link></li>
					<li><Link activeClassName={"active"} to="/user/345">User</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}
export default Users;