import React from 'react';
import {Link} from 'react-router-dom';
import Api from '../../.././apimanager/api';
import Auth from '../../.././logic/Auth';

class EditPostForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {title:this.props.post.title, categories:"", catid:this.props.post.catid, desc:this.props.post.desc, catname:this.props.post.catname, "error":"", editform:this.props.editform};
	}
  componentDidMount() {
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
      }
		});
	}
	onHideEditPostForm(){
		this.props.onHideEditPostForm();
	}
	handleChange(e){
    var self = this;
		var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)

    if(e.target.name == "catid"){
      var _data = self.state.categories.map(function(cat){
        return cat._id
      }).indexOf(e.target.value);
      if(self.state.categories[_data] !== undefined){
        self.setState({catname:self.state.categories[_data].title});
      }
    }

  }
  onSubmitPostForm(){
    var self = this;
    console.log(self.state);
		const user = Auth.getUser();
    Api.editPost(self.props.post._id, self.state.title, self.state.desc, self.state.catid, self.state.catname, user._id, user.name, user.email, function(data){
      console.log(data);
      if(data.status == 0){
        self.setState({error:data.msg});
      }else{
  			self.props.refreshData();
      }
		});
	}
	render(){
    var _options="";
    if(this.state.categories){
      _options = (
        this.state.categories.map(function(cat, key){
          return (<option value={cat._id} key={key}>{cat.title}</option>)
        })
      )
    }

		var error;
		if(this.state.error.length > 0){
			error = (
				<div className="row">
					<div className="error">{this.state.error}</div>
				</div>
			)
		}

		const _editpostform = (
			<div className="form">
				<div className="row">
					<input
						name="title"
						value={this.state.title}
						onChange={this.handleChange.bind(this)}
						type="text"
						placeholder="Post Title"
     />
				</div>
				<div className="row">
					<input
						name="desc"
						value={this.state.desc}
						onChange={this.handleChange.bind(this)}
						type="text"
						placeholder="Post Desc"
     />
				</div>
        <div className="row">
					<select
            name="catid"
            value={this.state.catid}
            onChange={this.handleChange.bind(this)}>
            <option disabled value="-1">select category</option>
            {_options}
          </select>
				</div>
				<div className="row">
					<button onClick={this.onSubmitPostForm.bind(this)}>Update Post</button>
					<button className="pull-right" onClick={this.onHideEditPostForm.bind(this)}>Cancel</button>
				</div>
				{error}
			</div>
		);
		return (
			<div>
        {this.state.editform? _editpostform:''}
			</div>
		);
	}
}
export default EditPostForm;
