import React, { Component } from 'react';
import { createStore } from 'redux';
import commentsReducer from './reducers/commentsReducer.js'
import {addComment} from './actions/actions.js'
import CommentBox from './components/CommentBox.js'
import {Provider} from 'react-redux';
import './App.css';

let commentt = [
    {id: 1, author: "Cory Brown", text: "My 2 scents"},
    {id: 2, author: "Jared Anderson", text: "Let me put it this way. You've heard of Socrates? Aristotle? Plato? Morons!"},
    {id: 3, author: "Matt Poulson", text: "It's just a function!"},
    {id: 4, author: "Bruce Campbell", text: "Fish in a tree? How can that be?"}
];

const store = createStore(commentsReducer);
const { getState, dispatch } = store;
commentt.map(comment => dispatch( addComment(comment) ));


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <CommentBox />
      </Provider>
    );
  }
}

export default App;
