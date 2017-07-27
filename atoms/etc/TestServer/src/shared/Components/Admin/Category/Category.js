import React from 'react';
import {Link} from 'react-router-dom';
import Api from '../../.././apimanager/api';
import AddCategoryForm from './AddCategoryForm';
import EditCategoryForm from './EditCategoryForm'

class Category extends React.Component {
	constructor(props){
		super(props);
		this.state = {error:"", catformerror:"", currentCategory:"", categories:null, isLoading:true, showform:false, editform:false};
	}
	componentDidMount() {
		this.refreshData();
	}

  refreshData(){
    var self = this;
		Api.getCategories(function(data){
      if(data.status == 0){
        self.setState({error:data.msg});
      }else{
        if(data.data != null && data.data.length > 0){
          self.setState({categories:data.data});
        }else{
          self.setState({error:data.msg});
        }
			  self.setState({isLoading:false, showform:false, editform:false});
      }
		});
  }

	onShowNewCatForm(){
		this.onHideEditCatForm();
		this.setState({currentCategory:""});
		this.setState({showform:true});
	}
	onHideNewCatForm(){
		this.setState({showform:false});
	}
	onShowEdiCatForm(cat){
		this.onHideNewCatForm();
		this.setState({currentCategory:""});
		this.onHideEditCatForm();
		this.setState({currentCategory:cat});
		this.setState({editform:true});
	}
	onHideEditCatForm(){
		this.setState({editform:false});
	}

	render(){
		var self = this;
    const catform = (
      <AddCategoryForm refreshData = {this.refreshData.bind(this)} catformerror = {this.state.catformerror}   onHideNewCatForm ={this.onHideNewCatForm.bind(this)}  showform={this.state.showform} />
    )
		const editform = (
      <EditCategoryForm editcategory={this.state.currentCategory} refreshData = {this.refreshData.bind(this)}  onHideEditCatForm ={this.onHideEditCatForm.bind(this)}  editform={this.state.editform} />
    )
		const loading = (
			<div className="form">
				<p>---loading----</p>
			</div>
		)
		var _content = (
			<div className="row">
				<div className="info">{this.state.error}</div>
			</div>
		);
		if(this.state.categories){
			_content = (
				<div className="row">
					<table className="table">
						<thead>
							<tr>
								<td>S.No</td>
								<td>Name</td>
								<td>Desc</td>
								<td>Action</td>
							</tr>
						</thead>
						<tbody>
							{
								this.state.categories.map(function(cat, key){
									return (<tr key={key}><td>{key}</td><td>{cat.title}</td><td>{cat.desc}</td><td><button onClick={self.onShowEdiCatForm.bind(self, cat)}>Edit</button></td></tr>)
								})
							}
						</tbody>
					</table>
				</div>
			);
		}
		return (
			<div>
				<h1>Category<button onClick={this.onShowNewCatForm.bind(this)} className="pull-right">Add New</button></h1>
        {this.state.showform? catform:''}
				{this.state.editform? editform:''}
				{this.state.isLoading? loading:_content}
			</div>
		);
	}
}
export default Category;
