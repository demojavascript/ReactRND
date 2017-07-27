import React, { Component } from 'react';
import Api from '.././logic/apimanager.js'
import DocumentTitle from 'react-document-title';
import NotFound from './shared/404.js'

class PostDetail extends Component {
  constructor(props){
  	super(props);
  	this.state = {post:undefined, is404:undefined}
  }
  componentWillMount() {
  	var self = this;
  	Api.getPostdetail(this.props.match.params.postid,function(data){
  		if(data.status === 0){
  			self.setState({is404:true});
  		}else{
  			self.setState({is404:false});
  			self.setState({post:data.data});
  		}
  	})
  }	
  render() {
  	var data, post404;
  	if(this.state.post){
		data = (
			<DocumentTitle title={this.state.post.title}> 
				<article className="detail">
					<h1>{this.state.post.title}</h1>
					<div className="body">{this.state.post.body}</div>
				</article>
			</DocumentTitle>
		)
  	}
  	if(this.state.is404 === true){
  		post404 = (<NotFound />)
  	}
    return (
      	<section className="detail">
      		{data}
      		{post404}
      	</section>
    );
  }
}

export default PostDetail;
