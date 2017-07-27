import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav'

class Users extends React.Component {
	render(){
		return (
			<div>
				<Nav/>	
				{this.props.children}
			</div>
		);
	}
}
export default Users;