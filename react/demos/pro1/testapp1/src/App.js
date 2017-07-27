import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect,
  Link
} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import Login from './component/login/login.js'
import Auth from './logic/auth.js'
console.log(Redirect);
var isLogin = true;
class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/" render={Home} />
                <Route component={Homee}/> 
          </Switch>      
        </Router>
    );
  }
}

class Home extends Component {
  constructor(props){
    super(props);
    console.log(this.props.islogin);
  }
  render() {
    return (
         <DocumentTitle title={'Home'}>
          <h1>jgdjfgjk</h1>
         </DocumentTitle>
    );
  }
}

class Homee extends Component {
  render() {
    return (
         <DocumentTitle title={'Page not found'}>
          <h1>Page not found!</h1>
         </DocumentTitle>
    );
  }
}


const PrivateRoute = ({ component: Component }) => (
  <Route render={props => (
    Auth.islogin ? (
      <Home islogin={true} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


export default App;
