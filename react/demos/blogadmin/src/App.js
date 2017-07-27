import React, { Component } from 'react';
import './App.css';import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import PrivateRoute from './logic/privateroute.js'
import NotFound from './pages/notfound.js';
import Home from './pages/home.js';
import Login from './pages/login.js';
import Dashboard from './pages/dashboard.js';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/login" component={Login}/>
              <Route component={NotFound}/> 
            </Switch> 
          </div> 
        </Router>
    );
  }
}

export default App;
