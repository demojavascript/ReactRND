import React, { Component } from 'react';
import THead from './thead.js';
import Row from './row.js';
import TFooter from './tfooter.js';

class TBody extends Component {
	constructor(props){
		super(props);
		this.state = {data:this.props.data, start:0, rcount:5, nextd:false, prevd:true};
	}
	nextClickHandler(){
		var nstart = this.state.start + this.state.rcount;
		this.setState({data:this.props.data, start:nstart,  prevd:false});
		if((this.state.start + 2*this.state.rcount) >= this.state.data.length){
			this.setState({nextd:true});
		}
	}
	prevClickHandler(){
		var nstart = this.state.start - this.state.rcount;
		this.setState({data:this.props.data, start:nstart, nextd:false});
		if(nstart === 0){
			this.setState({prevd:true});
		}
	}
	pagination(page){
		this.setState({data:this.props.data, start:0, rcount:parseInt(page), nextd:false, prevd:true});
	}
	render() {
		var self = this;
		var icount = 0;
		return (
			<table>
				<THead />
				<tbody>
					{
						this.state.data.map(function(user, key){
							if(self.state.start <= key && icount<self.state.rcount){
								++icount;
								return (<Row key={key} keyy={key} user={user}  />)
							}else{
								return false;
							}
						})
					}
				</tbody>
				<TFooter pagination={this.pagination.bind(this)} nextstate={this.state.nextd} prevstate={this.state.prevd} prev={this.prevClickHandler.bind(this)} next={this.nextClickHandler.bind(this)} />
			</table>
		)
	}
}
export default TBody;