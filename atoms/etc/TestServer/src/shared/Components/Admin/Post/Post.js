import React from 'react';
import {Link, Route} from 'react-router-dom';
import Api from '../../.././apimanager/api';
import AddPostForm from './AddPostForm';
import EditPostForm from './EditPostForm'
import Auth from '../../.././logic/Auth';

class Post extends React.Component {
	constructor(props){
		super(props);
		this.state = {user:null,error:"", posts:null, isLoading:true, showform:false, editform:false, currentpost:""};
	}
	componentDidMount() {
		this.setState({user:Auth.getUser()});
		this.refreshData();
	}
	refreshData(){
    var self = this;
		Api.getPostByUser(function(data){ 
			if(data.status == 0){
				self.setState({error:data.msg});
			}else{
				if(data.data != null && data.data.length > 0){
					self.setState({posts:data.data});
				}else{
					self.setState({error:data.msg});
				}
				self.setState({isLoading:false, showform:false, editform:false});
			}
		});
  }
	onShowPostForm(){
		this.onHideEditPostForm();
		this.setState({currentpost:""});
		this.setState({showform:true});
	}
	onHideNewPostForm(){
		this.setState({showform:false});
	}
	onShowEditPostForm(post){
		this.onHideNewPostForm();
		this.setState({currentpost:""});
		this.onHideEditPostForm();
		this.setState({currentpost:post});
		this.setState({editform:true});
	}
	onHideEditPostForm(){
		this.setState({editform:false});
	}
	render(){
		const self = this;
		const postform = (
      <AddPostForm refreshData = {this.refreshData.bind(this)}   onHideNewPostForm ={this.onHideNewPostForm.bind(this)}  showform={this.state.showform} />
    )
		const editform = (
      <EditPostForm post={this.state.currentpost} refreshData = {this.refreshData.bind(this)}   onHideEditPostForm ={this.onHideEditPostForm.bind(this)}  editform={this.state.editform} />
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
		if(this.state.posts){
			_content = (
				<div className="row">
					<table className="table">
						<thead>
							<tr>
								<td>S.No</td>
								<td>Name</td>
								<td>Desc</td>
								<td>Category</td>
								<td>By</td>
								<td>Action</td>
							</tr>
						</thead>
						<tbody>
							{
								this.state.posts.map(function(post, key){
									return (<tr key={key}><td>{key}</td><td>{post.title}</td><td>{post.desc}</td><td>{post.catname}</td><td>{post.user.name}</td><td><button onClick={self.onShowEditPostForm.bind(self, post)}>Edit</button></td></tr>)
								})
							}
						</tbody>
					</table>
				</div>
			);
		}
		return (
			<div>
				<h1>Post({this.state.user? this.state.user.name:""})<button onClick={this.onShowPostForm.bind(this)} className="pull-right">Add New</button></h1>
				{this.state.showform? postform:''}
				{this.state.editform? editform:''}
				{this.state.isLoading? loading:_content}
			</div>
		);
	}
}
export default Post;
