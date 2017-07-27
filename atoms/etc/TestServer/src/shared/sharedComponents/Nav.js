import React from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '.././logic/Auth';

class Nav extends React.Component {
	constructor(props){
			super(props);
			this.state = {islogin:false}
	}
	componentDidMount() {
		const self = this;
		if(Auth.isloggedin()){
			self.setState({islogin:true});
		}
	}
	onLogout(){
		Auth.logout(function(){
			window.location.reload();
		});
	}
	render(){
		var _content = (
			<ul className="pull-right">
				<li><NavLink to="/login">Login</NavLink></li>
				<li><NavLink to="/register">Regsiter</NavLink></li>
			</ul>
		)
		if(this.state.islogin){
			_content = (
				<ul className="pull-right">
					<li><NavLink to="/admin">Dashboard</NavLink></li>
					<li><button onClick={this.onLogout.bind(this)}>Logout</button></li>
				</ul>
			)
		}
		return (
			<section>
				<nav>
					<ul>
						<li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
						<li><NavLink activeClassName="active" to="/about">About</NavLink></li>
						<li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
					</ul>
					{_content}
				</nav>
			</section>
		);
	}
}
export default Nav;
