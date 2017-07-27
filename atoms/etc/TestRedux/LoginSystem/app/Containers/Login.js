import { render } from 'react-dom';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '.././Actions/User';
require('./Login.css')


class Login extends React.Component {
  handleLogin(){
    this.props.loginHandler({email:"hhh@sss.com", name:"Aman", login:true});
  }
  render(){
    console.log(this.props.User);
    return(
        <section className="login">
          <div className="loginBox">
            <h1 className="txt-a-c">Login Here</h1>
            <div className="row">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter email" name="email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control"  placeholder="Enter password" name="pwd" />
              </div>
              <div className="form-group">
                <button onClick={this.handleLogin.bind(this)} className="btn blue">Login</button>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loginHandler:userLogin}, dispatch)
}

function mapStateToProps(state){
  return{
    User:state.User
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
