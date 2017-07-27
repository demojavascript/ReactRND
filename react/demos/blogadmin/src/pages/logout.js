import React, { Component } from 'react';
import Auth from '.././logic/auth.js'

class Logout extends Component {
  componentWillMount(){
  	var self = this;
  	Auth.logout(function(){
  		self.props.history.push("/");
  	});
  }		
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Logout;
