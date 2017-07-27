import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <div className="comment">
           <h2 className="commentAuthor">
               { this.props.author }
           </h2>
           { this.props.children }
      </div>
    );
  }
}

export default Comments;
