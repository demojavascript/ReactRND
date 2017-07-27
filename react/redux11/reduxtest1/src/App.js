import React, { Component } from 'react';
import Commentlist from './components/commentlist.js'
import CommentForm from './components/CommentForm.js'
import './App.css';
let comment = [
    {id: 1, author: "Cory Brown", text: "My 2 scents"},
    {id: 2, author: "Jared Anderson", text: "Let me put it this way. You've heard of Socrates? Aristotle? Plato? Morons!"},
    {id: 3, author: "Matt Poulson", text: "It's just a function!"},
    {id: 4, author: "Bruce Campbell", text: "Fish in a tree? How can that be?"}
];
class App extends Component {
  constructor(props){
    super(props)
    this.state = {comments:comment};
  }
  stateChanged(cmnt){
    this.setState({comments:cmnt});
  }
  render() {
    return (
      <div className="App">
        <CommentForm commentupdate={this.stateChanged.bind(this)} comments={this.state.comments} />
        <Commentlist comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
