import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Auth from '.././logic/auth.js'

class Login extends Component {
  onLogin(){
  	var self = this;
	Auth.login(function(){
  		self.props.history.push("/dashboard");
  	});
  }	
  render() {
    return (
      <DocumentTitle title={'Login'}> 	
	      <section className="login">
	      	<div className="loginBox">
	  			<div className="row">
	  				<input type="text" placeholder="Email" />	
	  			</div>	
	  			<div className="row">
	  				<input type="password" placeholder="Password" />	
	  			</div>
	  			<div className="row">
	  				<button onClick={this.onLogin.bind(this)}>Login</button>
	  			</div>
	  		</div>
	      </section>
      </DocumentTitle>
    );
  }
}

export default Login;
