import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'



import Users from './Users'
import User from './User'

class Home extends React.Component {
	render(){
		return (
			<div>
				<ul>
					<li><Link to="/">Homw</Link></li>
					<li><Link to="/user">User</Link></li>
				</ul>	
				{this.props.children}
			</div>
		);
	}
}
export default Home;