import React, { Component } from 'react';
import Table from './components/table.js';
import './App.css';
var users = [];
for(var h=0;h<100;h++){
  users.push({key:h, name:"Gaurav Singh "+h, age:10+h, salary:23000+h});
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Table data={users}/>
      </div>
    );
  }
}

export default App;
