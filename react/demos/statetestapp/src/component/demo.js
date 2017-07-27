import React, { Component } from 'react';

class Demo extends Component {
	constructor(props){
		super(props);
		this.state = {name:this.props.name};
	}
	toUpper() {
		var newname = this.state.name.toUpperCase();
		this.setState({name:newname});
	}
	toLower() {
		var newname = this.state.name.toLowerCase();
		this.setState({name:newname});
	}
	toCapital() {
		String.prototype.doCapital = function () {
		    return this.toLowerCase().split(' ').map(function (i) {
		        if (i.length > 2) {
		            return i.charAt(0).toUpperCase() + i.substr(1);
		        } else {
		            return i;
		        }
		    }).join(' ');
		};

		var newname = this.state.name.doCapital();
		this.setState({name:newname});
	}
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				<button onClick={this.toUpper.bind(this)}>To Upper Case</button>
				<button onClick={this.toLower.bind(this)}>To Lower Case</button>
				<button onClick={this.toCapital.bind(this)}>To Capital</button>
			</div>
		)
	}
}

export default Demo