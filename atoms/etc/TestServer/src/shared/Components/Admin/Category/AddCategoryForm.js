import React from 'react';
import {Link} from 'react-router-dom';
import Api from '../../.././apimanager/api';

class Category extends React.Component {
	constructor(props){
		super(props);
		this.state = {"title":"", "desc":"", "error":this.props.catformerror, showform:this.props.showform};
	}
	onHideNewCatForm(){
		this.props.onHideNewCatForm();
	}
	handleChange(e){
		var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  onSubmitCatForm(){
    var self = this;
    Api.addCategories(self.state.title, self.state.desc, function(data){
      if(data.status == 0){
        self.setState({error:data.msg});
      }else{
  			self.props.refreshData();
      }
		});
	}
	render(){


		var error;
		if(this.state.error.length > 0){
			error = (
				<div className="row">
					<div className="error">{this.state.error}</div>
				</div>
			)
		}

		const _newcatform = (
			<div className="form">
				<div className="row">
					<input
						name="title"
						value={this.state.title}
						onChange={this.handleChange.bind(this)}
						type="text"
						placeholder="Category Title"
					/>
				</div>
				<div className="row">
					<input
						name="desc"
						value={this.state.desc}
						onChange={this.handleChange.bind(this)}
						type="text"
						placeholder="Category Desc"
					/>
				</div>
				<div className="row">
					<button onClick={this.onSubmitCatForm.bind(this)}>Create Category</button>
					<button className="pull-right" onClick={this.onHideNewCatForm.bind(this)}>Cancel</button>
				</div>
				{error}
			</div>
		);
		return (
			<div>
        {this.props.showform? _newcatform:''}
			</div>
		);
	}
}
export default Category;
