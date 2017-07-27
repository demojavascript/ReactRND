import React, { Component } from 'react';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Login from './pages/login.js';
import Logout from './pages/logout.js';
import Signup from './pages/signup.js';
import Settings from './pages/settings.js';
import Dashboard from './pages/dashboard.js';
import Card from './pages/card.js';
import NotFound from './pages/notfound.js';


import Header from './layout/shared/header.js';
import Footer from './layout/shared/footer.js';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import PrivateRoute from './logic/privateroute.js'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/logout" component={Logout}/> 
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              <PrivateRoute exact path="/settings" component={Settings}/>
              <Route exact path="/card/:cardid" component={Card}/>
              <Route component={NotFound}/> 
            </Switch> 
            <Footer/>
          </div> 
        </Router>
      
    );
  }
}



export default App;
