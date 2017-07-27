import React, { Component } from 'react';
import './list.css'

class Item extends Component {
  render() {
    return (
      <li key={this.props.index}>
      		{this.props.user.name}
      </li>
    );
  }
}

export default Item;
