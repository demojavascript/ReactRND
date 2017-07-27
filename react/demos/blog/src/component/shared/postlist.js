import React, { Component } from 'react';
import Post from './post.js'
import Api from '../.././logic/apimanager.js'

class PostList extends Component {
  constructor(props){
  	super(props);
  	this.state = {posts:[]};
  }
  componentWillMount() {
  	var self = this;
  	Api.getPosts(function(data){
  		self.setState({posts:data.data});
  	})
  }
  render() {
    return (
      <div className="postList">
      	<ul>
      		{
      			this.state.posts.map(function(post, key){
      				return(<Post key={key} post={post} />)
      			})
      		}
      	</ul>
      </div>
    );
  }
}

export default PostList;
