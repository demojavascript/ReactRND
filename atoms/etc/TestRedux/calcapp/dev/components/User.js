import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {numberIncreased, numberDecreased} from '.././actions/Number'
import AddUser from '../containers/AddUser'
import ListUser from '../containers/ListUser'

class User extends Component {
  render(){
		var self = this;
		return(
			<div>
				<h1>Users</h1>
        <AddUser />
        <ListUser/>
      </div>
		)
	}
}

export default User;
