import React, { Component } from 'react';
import { createStore } from 'redux';
import ReactRedux, {Provider, connect} from 'react-redux';
import commentsReducer from '.././reducers/commentsReducer.js'
import {addComment} from '.././actions/actions.js'

class CommentBox extends Component {
  contextTypes: {
        store: PropTypes.object
  }
  componentDidMount() {
      const { store } = this.context;
      console.log(this.context);
      //console.log(this.props);
      //this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }
  componentWillUnmount() {
      //this.unsubscribe(); 
  }
  render() {
    
    
    return (
      <div className="commentBox">
      <div className="App">
        
      </div>
      </div>
    );
  }
}

var mapStateToProps = function(state){
    // This component will have access to `appstate.heroes` through `this.props.heroes`
    return state;
};

export default ReactRedux.connect(mapStateToProps)(CommentBox);
