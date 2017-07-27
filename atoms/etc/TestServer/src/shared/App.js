import React, { Component } from 'react';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Register from './Components/Register'
import Admin from './Components/Admin/Admin'
import PostDetail from './Components/subComponents/PostDetail'
import Notfound from './sharedComponents/Notfound'
import { Link,  Route, Switch } from 'react-router-dom';



export default class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
        <Route path="/post/:post" component={PostDetail} />
        <Route component={Notfound} />
      </Switch>
    )
  }
}
