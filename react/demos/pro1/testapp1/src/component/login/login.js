import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DocumentTitle from 'react-document-title';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect, withRouter,
  Link
} from 'react-router-dom'
import Auth from '../.././logic/auth.js'
import './login.css'

class Login extends Component {
	constructor(props) {
    super(props)

    /** @type BrowserRouter */
    this.router = undefined
  }
	onLogin() {
		var self = this;
		var _email = ReactDOM.findDOMNode(this.refs.email).value;
		console.log(_email);
		//window.location.href = "/"
		Auth.login(function(){
			console.log("sad - "+Auth.islogin);
    		self.props.history.push("/");
		});
	}
	render() {
		return (
			<DocumentTitle title={'Login'}>
				<div className="loginBox">
					<div className="form">
						<div className="row">
							<input ref="email" placeholder="Email" type="text" />
						</div>
						<div className="row">
							<input ref="pwd" placeholder="Password" type="password" />
						</div>
						<div className="row">
							<button onClick={this.onLogin.bind(this)}>Login</button>
						</div>
					</div>
				</div>
			</DocumentTitle>	
		)
	}
}
export default withRouter(Login);