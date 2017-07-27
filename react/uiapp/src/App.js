import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>  
          <div className="App">
            <ul>
               <li><Link to="/">Home</Link></li> 
               <li><Link to="/about">About</Link></li> 
               <li><Link to="/about/1">About/2</Link></li> 
               <li><Link to="/contact">contact</Link></li> 
            </ul>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/about/:id" component={About2} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
    );
  }
}

class Home extends Component {
  render(){
    return(
      <div>
          <h1>Home - kjhsfgs</h1>
      </div>
    )
  }
}
class About extends Component {
  render(){
    return(
      <div>
          <h1>About - kjhsfgs</h1>
      </div>
    )
  }
}
class About2 extends Component {
  render(){
    return(
      <div>
          <h1>About2 - kjhsfgs - {this.props.match.params.id}</h1>
      </div>
    )
  }
}
class Contact extends Component {
  render(){
    return(
      <div>
          <h1>Contact - kjhsfgs</h1>
      </div>
    )
  }
}
export default App;
