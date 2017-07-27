import React from 'react';
import {Link} from 'react-router-dom';
import API from '.././apimanager/api';
import Auth from '.././logic/Auth'

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {email:"", password:"", isloading:false, iserror:""};
	}
	onLogin(){
		var self = this;
		this.setState({isloading:true});
		API.getLogin(this.state.email, this.state.password, function(res){
			self.setState({isloading:false});
			if(res.status == 0){
				self.setState({iserror:res.msg});
			}else{
				Auth.login(res.data);
				self.props.history.push('/admin');
			}
		})
	}
	handleChange(e){
		var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
	render(){
		var error;
		if(this.state.iserror.length > 0){
			error = (
				<div className="row">
					<div className="error">{this.state.iserror}</div>
				</div>
			)
		}
		return (
			<div>
				<div className="form">
          <div className="row">
            <input
							name="email"
							value={this.state.email}
							onChange={this.handleChange.bind(this)}
              type="text"
              placeholder="Username"
						/>
          </div>
          <div className="row">
            <input
							name="password"
							value={this.state.password}
							onChange={this.handleChange.bind(this)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="row">
            <button onClick={this.onLogin.bind(this)}>Login</button>
          </div>
					{error}
        </div>
			</div>
		);
	}
}
export default Login;
