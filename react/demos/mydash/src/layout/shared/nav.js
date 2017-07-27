import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Auth from '../.././logic/auth.js';

class Nav extends Component {	
	render() {
		var navitem;
		if(!Auth.isloggedin()){
			navitem = (
				<ul className="pull-right">
					<li><Link to ='/login'>Login</Link></li>
					<li><Link to ='/signup'>Signup</Link></li>
				</ul>
			)
		}else{
			navitem = (
				<ul className="pull-right">
					<li><Link to='/dashboard'>Dashboard</Link></li>
					<li><Link to='/settings'>Settings</Link></li>
					<li><Link to='/logout'>Logout</Link></li>
				</ul>
			)
		}
		return (
			<nav>
				<ul>
					<li><Link to ='/'>Home</Link></li>
					<li><Link to ='/about'>About</Link></li>
					<li><Link to ='/contact'>Contact</Link></li>
				</ul>
				{navitem}
				
			</nav>
		)
	}
}
export default Nav;