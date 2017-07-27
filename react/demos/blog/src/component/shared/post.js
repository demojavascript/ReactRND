import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Post extends Component {
  render() {
    return (
      	<li className="post"><Link to={""+this.props.post.slug}>{this.props.post.title}</Link></li>
    );
  }
}

export default Post;
