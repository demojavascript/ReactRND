import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class NotFound extends Component {
  render() {
    return (
      <DocumentTitle title={'404 Page Not Found'}> 		
	      <section className="notfound">
	      		
	      </section>
      </DocumentTitle>
    );
  }
}

export default NotFound;
