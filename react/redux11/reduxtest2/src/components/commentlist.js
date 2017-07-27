import React, { Component } from 'react';
import Comment from './comment.js'

class Commentlist extends Component {
  render() { 
    return (
      <div className="commentList">
        { this.props.comments.map(comment => (
            <Comment author={ comment.author } key={comment.id} >
                { comment.text }
            </Comment>
        )) }
      </div>
    );
  }
}

export default Commentlist;
