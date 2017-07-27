import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
	render(){
		return (
			<ul>
				<li><Link to="/">Homw</Link></li>
				<li><Link to="/user">User</Link></li>
			</ul>
		);
	}
}
export default Nav;