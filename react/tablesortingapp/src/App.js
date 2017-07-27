import React, { Component } from 'react';
import logo from './logo.svg';
import Table from './components/Table.jsx';
import './App.css';

var users = [
  {name:"Aman", age:21, rollno:211, marks:66},
  {name:"Ajay", age:19, rollno:201, marks:76},
  {name:"Boby", age:18, rollno:212, marks:65},
  {name:"Soham", age:20, rollno:209, marks:86},
  {name:"Sunil", age:21, rollno:208, marks:57},
  {name:"Barkha", age:19, rollno:214, marks:71},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table data={users} />
      </div>
    );
  }
}

export default App;
