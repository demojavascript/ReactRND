import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Auth from '.././logic/auth.js'
import Loader from '.././component/loader.js'

class Login extends Component {
  constructor(props){
  	super(props);
  	this.state = {loading:false};
  }
  onLogin(){
  	var self = this;
  	self.setState({loading:true});
  	Auth.login(function(){
  		self.setState({loading:false});
  		self.props.history.push("/dashboard");
  	});
  }		
  render() {
  	var loading;
  	if(this.state.loading){
  		loading = <Loader />;
  	}
    return (
      <DocumentTitle title={'Login'}> 		
	      <section className="login">
	      	<div className="fullpopup">
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
	      	</div>

	      {loading}	
	      </section>
      </DocumentTitle>
    );
  }
}

export default Login;
