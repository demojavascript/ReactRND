import { render } from 'react-dom';
import React from 'react';
import {connect} from 'react-redux';
import Login from '.././Containers/Login'
import Dashboard from '.././Containers/Dashboard'

require('./Css/App.css');

class App extends React.Component {
  render(){
    var _content = (
      <Login/>
    )
    if(this.props.User.login){
      _content = (
        <Dashboard/>
      )
    }
    return(
      <div>
        {_content}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    User:state.User
  }
}

export default connect(mapStateToProps)(App);
