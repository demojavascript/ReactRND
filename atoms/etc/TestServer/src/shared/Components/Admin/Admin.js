import React from 'react';
import {Link, Route} from 'react-router-dom';
import Nav from './Nav';
import User from './User/User';
import Category from './Category/Category';
import Post from './Post/Post';
import Auth from '../.././logic/Auth'

class Admin extends React.Component {
	constructor(props){
		super(props);
		this.state = {"user":null};
	}
	onLogout(){
		var self = this;
		Auth.logout(function(){
			self.props.history.push("/");
		});
	}
	componentDidMount() {
		if(!Auth.isloggedin()){
			this.props.history.push('/logina');
		}else{
			this.setState({user:Auth.getUser()});
		}
	}
	render(){
		return (
			<div>
				<Nav onlogout={this.onLogout.bind(this)} />
				<section className="content">
	        {this.props.children}
					<div>
	          <Route path={`${this.props.match.url}/category`} component={Category} />
						<Route path={`${this.props.match.url}/post`} component={Post} />
						<Route path={`${this.props.match.url}/users`} component={User} />
	        </div>
				</section>

			</div>
		);
	}
}
export default Admin;
