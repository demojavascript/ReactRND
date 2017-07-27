import React, { Component } from 'react';
import Auth from '.././logic/auth.js'
import Loader from '.././component/loader.js'

class Logout extends Component {
  constructor(props){
    super(props);
    this.state = {loading:true};
  }
  componentWillMount(){
  	var self = this;
  	Auth.logout(function(){
      self.setState({loading:false});
  		self.props.history.push("/");
  	});
  }		
  render() {
    var loading;
    if(this.state.loading){
      loading = <Loader />
    }
    return (
      <div>
        {loading}
      </div>
    );
  }
}

export default Logout;
