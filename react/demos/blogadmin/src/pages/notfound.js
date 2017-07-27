import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class NotFound extends Component {
  render() {
    return (
      <DocumentTitle title={'404 Page Not Found'}> 		
	      <section className="notfound">
	      	<span className="notfound">404 Page Not Found</span>
	      </section>
      </DocumentTitle>
    );
  }
}

export default NotFound;
