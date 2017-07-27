import React, { Component } from 'react';
import axios from 'axios';

class AddForm extends Component {
	constructor(props){
		super(props);
		this.state = {namee:this.props.name};
	}
	changeName(e){
		this.setState({namee: e.target.value});
	}
	AddName() {
		var _this = this;
		axios.post('http://localhost:8080/api/bears', {
		    name: this.state.namee,
		  })
		  .then(function (response) {
		    _this.setState({namee: ""});
		    _this.props.refresh();
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render() {
		return (
			<div className="user-form">
				<input 
					onChange={this.changeName.bind(this)}
					type="text"
 					name="username"
 					value={this.state.namee}
				/>
				<button onClick={this.AddName.bind(this)} className="btnadd">Add</button>
			</div>
		)
	}
}

export default AddForm;