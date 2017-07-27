import React from 'react';

class User extends React.Component {
	clickHandler() {
		browserHistory.push("/home");
	}
	render(){
		return (
			<div>
				<h1>Users</h1>
				User Id - {this.props.params.id}
			</div>
		);
	}
}
export default User;