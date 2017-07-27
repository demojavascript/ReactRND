import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Auth from '.././logic/auth.js'
import './theme.css';

class Card extends Component {	
  componentWillMount() {
  	if(!Auth.isloggedin()){
  		this.props.history.push("/login");
  	}
  }
  render() {
    return (
      <DocumentTitle title={'Card'}> 
      	<section className="card">

      	</section>
      </DocumentTitle>
    );
  }
}

export default Card;
