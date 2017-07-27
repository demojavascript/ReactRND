import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header.js';
import TaskList from './components/tasklist.js';
import Footer from './components/footer.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TaskList />
        <Footer />
      </div>
    );
  }
}

export default App;
