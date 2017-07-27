import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import Home from './component/home.js'
import Header from './component/shared/header.js'
import Footer from './component/shared/footer.js'
import NotFound from './component/notfound.js'
import PostDetail from './component/postdetail.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:postid" component={PostDetail}/>
            <Route component={NotFound}/>
          </Switch> 
          <Footer/>
        </div> 
      </Router>
    );
  }
}

export default App;
