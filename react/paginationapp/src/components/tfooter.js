import React, { Component } from 'react';

class TFooter extends Component {
	onPrevHandle(){
		this.props.prev();
	}
	onNextHandle(){
		this.props.next();
	}
	onPagination(e){
		this.props.pagination(e.target.value);
	}
	render() {
		return (
			<tfoot>
				<tr>
					<td><button disabled={this.props.prevstate} onClick={this.onPrevHandle.bind(this)}>Prev</button></td>
					<td colSpan='2'>
						<select onChange={this.onPagination.bind(this)}>
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="15">15</option>
						</select>
					</td>
					<td><button disabled={this.props.nextstate} onClick={this.onNextHandle.bind(this)}>Next</button></td>
				</tr>
			</tfoot>
		)
	}
}
export default TFooter;