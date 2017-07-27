import React, { Component } from 'react';

class Row extends Component {
	render() {
		return (
			<tr key={this.props.keyy}>
				<td>{this.props.keyy+1}</td>
				<td>{this.props.user.name}</td>
				<td>{this.props.user.age}</td>
				<td>{this.props.user.salary}</td>
			</tr>
		)
	}
}
export default Row;