import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    var self = this;
    return (
      <form className="commentForm"
      onSubmit={ (e) => {

              e.preventDefault();
              self.props.comments.push({
                  id:Math.floor(Math.random()*200)-100,
                  author: e.target.elements.author.value,
                  text: e.target.elements.text.value
              });
              self.props.commentupdate(self.props.comments);
          }}
      >

          <input type="text"
                 name="author"
                 placeholder="Your name"
          />
          <input type="text"
                 name="text"
                 placeholder="Say something..."
          />
          <button>Post</button>
      </form>
    );
  }
}

export default CommentForm;
