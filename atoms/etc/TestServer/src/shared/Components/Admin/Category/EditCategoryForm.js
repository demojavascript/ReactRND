import React from 'react';
import {Link} from 'react-router-dom';
import Api from '../../.././apimanager/api';

class EditCategoryForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {"title":this.props.editcategory.title, "desc":this.props.editcategory.desc, "_id":this.props.editcategory._id, "error":"", showform:this.props.editform};
	}
	onHideEditCatForm(){
		this.props.onHideEditCatForm();
	}
	handleChange(e){
		var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  onSubmitCatForm(){
    var self = this;
    Api.editCategories(self.state._id, self.state.title, self.state.desc, function(data){
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

		const _editcatform = (
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
					<button onClick={this.onSubmitCatForm.bind(this)}>Update Category</button>
					<button className="pull-right" onClick={this.onHideEditCatForm.bind(this)}>Cancel</button>
				</div>
				{error}
			</div>
		);
		return (
			<div>
        {this.props.editform? _editcatform:''}
			</div>
		);
	}
}
export default EditCategoryForm;
