import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Settings extends Component {
  render() {
    return (
      <DocumentTitle title={'Settings'}> 		
	      <section className="settings">
	      	<h1>Settings</h1>	
	      </section>
      </DocumentTitle>
    );
  }
}

export default Settings;
