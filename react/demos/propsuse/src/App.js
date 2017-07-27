import React, { Component } from 'react';
import List from './component/list.js'

var users = [
  {name:"Aman 1"},
  {name:"Aman 2"},
  {name:"Aman 3"},
  {name:"Aman 4"},
];
class App extends Component {
  render() {
    return ( 
      <div className="App">
        <List users = {users}  />
      </div>
    );
  }
}

export default App;
