import React, { Component } from 'react';
import axios from 'axios';
import AddForm from './addform.js';

class Article extends Component {
	constructor(props){
		super(props);
		this.state = {users:[], name:""};
	}
	setData(data){
	  this.setState({users:data, name:""});
	}
	editHandler(){
		this.componentDidMount();
	}
	deleteBtnClick(_id) {
	  var _this = this;
      axios.delete('http://localhost:8080/api/bears/'+_id)
        .then(function (response) {
          _this.componentDidMount();
        })
        .catch(function (error) {
          console.log(error);
        });		
	}
    componentDidMount() {
	  var _this = this;
      axios.get('http://localhost:8080/api/bears')
        .then(function (response) {
          _this.setData(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
	render() {
		if(this.state.users.length < 1){
			return (
				<div className="contentArea">
					<div className="loading"></div>
					<AddForm name={this.state.name} />
				</div>
			)
		}else{
			var _this = this;
			return (
				<div className="contentArea">
					<ul>{
						this.state.users.map(function(user, key){
							return (<li key={key}>{user.name}<DeleteBtn deleteBtnClick={_this.deleteBtnClick.bind(_this, user._id)} /><EditBtn id={user._id} name={user.name} editHandler={_this.editHandler.bind(_this)} /></li>)
						})
					}</ul>
					<AddForm refresh={this.componentDidMount.bind(this)} name={this.state.name} />
				</div>
			)
		}
	}
}

class DeleteBtn extends Component {
	deleteClick() {
		this.props.deleteBtnClick();
	}
	render() {
		return (
			<div className="btn">
				<button onClick={this.deleteClick.bind(this)}>Delete</button>
			</div>
		)
	}
}

class EditBtn extends Component {
	editClick() {
		var txt;
	    var person = prompt("Please enter your name:", this.props.name);
	    if (person === null || person === "") {
	        txt = false;
	    } else {
	        txt = true;
	    }
	    if(txt){
	    	var _this = this;
			axios.put('http://localhost:8080/api/bears/'+this.props.id, {
			    name: person,
			  })
			  .then(function (response) {
			    _this.props.editHandler();
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
	    }
	}
	render() {
		return (
			<div className="btn">
				<button onClick={this.editClick.bind(this)}>Edit</button>
			</div>
		)
	}
}

export default Article;