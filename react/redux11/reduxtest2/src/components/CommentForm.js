import React, { Component } from 'react';
import {addComment, authorChange, textChange} from '.././actions/actions.js'



class CommentForm extends Component {
  render() {
    var self = this;
    console.log(this.props);
    return (
      <form className="commentForm"
      onSubmit={ (e) => {

              e.preventDefault();
              self.props.onCommentSubmit();
          }}
      >

          <input type="text"
                 name="author"
                 placeholder="Your name"
                 value={self.props.author}
                 onChange={ (e) => 
                   self.props.onAuthorChange(e.target.value) }
          />
          <input type="text"
                 name="text"
                 placeholder="Say something..."
                 value={self.props.text}
                 onChange={ (e) => 
                   self.props.onTextChange(e.target.value) }
          />
          <button>Post</button>
      </form>
    );
  }
}

export default CommentForm;
