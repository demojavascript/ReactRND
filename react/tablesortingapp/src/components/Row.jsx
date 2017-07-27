import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
      <tr key={this.props.keyy}>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.age}</td>
        <td>{this.props.user.rollno}</td>
        <td>{this.props.user.marks}</td>
      </tr>
    )
  }
}

export default Row;