import React, { Component } from 'react';
import './list.css'
import Item from './item.js'

class List extends Component {
  render() {
    return (
      <div className="list">
          <ul>
          		{
          			this.props.users.map(function(user, key){
          				return (<Item key={key} index={key} user={user} />);
          			})
          		}
          </ul>
      </div>
    );
  }
}

export default List;
