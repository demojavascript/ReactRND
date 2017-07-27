import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import PostList from './shared/postlist.js'

class Home extends Component {
  render() {
    return (
      <DocumentTitle title={'Home'}>     
        <section className="home">
            <PostList />
        </section>
      </DocumentTitle>
    );
  }
}

export default Home;
