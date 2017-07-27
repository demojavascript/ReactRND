import React, { Component } from 'react';
import logo from './logo.svg';
import Loading from './Loading.js';
import Users from './users.js';
import './App.css';

var alldata = [
    {name:"AMan 1", marks:"2001"},
    {name:"AMan 2", marks:"2002"},
    {name:"AMan 3", marks:"2003"},
    {name:"AMan 4", marks:"2004"}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {<Loading/>}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {<Users userdata = {alldata} />}
      </div>
    );
  }
}

export default App;
