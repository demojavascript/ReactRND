import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Section from './content.js';
import Footer from './footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        {<Header />}
        {<Section/>}
        {<Footer />}
      </div>
    );
  }
}

export default App;
