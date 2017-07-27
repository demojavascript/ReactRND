import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeUser} from '.././actions/User'

class ListUser extends Component {

  removeUser(key){
    this.props.userRemove(key);
  }
  render(){
    const self = this;
    return (
      <div>
        <h1>List User</h1>
        <ul>
          {
            this.props.User.users.map(function(user, key){
              return (<li key={key}>{user}<button onClick={self.removeUser.bind(self, key)}>>Remove</button></li>);
            })
          }
        </ul>
      </div>
    )
  }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({userRemove: removeUser}, dispatch);
}


function mapStateToProps(state) {
    return {
        User: state.User
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(ListUser);
