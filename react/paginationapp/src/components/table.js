import React, { Component } from 'react';
import TBody from './tbody.js';

class Table extends Component {
	render() {
		return (
			<div className="tableBox">
				<TBody data={this.props.data} />
			</div>
		)
	}
}
export default Table;