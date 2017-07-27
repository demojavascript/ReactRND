import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import ReactDOM from 'react-dom';

class Dashboard extends Component {
  onLogin(){
  	console.log(ReactDOM.findDOMNode(this.refs.title).value);
  }	
  render() {
    return (
      <DocumentTitle title={'Dashboard'}> 	
	      <section className="dashboard">
	      		<input type="text" ref="title" />
	      		<textarea ref="body">

	      		</textarea>
	      		<button onClick={this.onLogin.bind(this)}>Post</button>
	      </section>
      </DocumentTitle>
    );
  }
}

export default Dashboard;
