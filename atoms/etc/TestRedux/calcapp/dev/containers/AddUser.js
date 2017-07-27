import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser} from '.././actions/User'

class AddUser extends Component {
  constructor(props){
    super(props);
    this.state = {name:""}
  }
  addUser(){
    this.props.userAdd(this.state.name);
  }
  handleChange(e){
		var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  render(){
    return (
      <div>
        <h1>Add New User</h1>
        <div className="form">
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.name}
            name="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <button onClick={this.addUser.bind(this)}>Add New User</button>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({userAdd: addUser}, dispatch);
}


function mapStateToProps(state) {
    return {
        User: state.User
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(AddUser);
