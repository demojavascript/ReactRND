import React, { Component } from 'react';
import { Link,  Route, Switch, Redirect } from 'react-router-dom';
import Auth from '../logic/Auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
     Auth.isloggedin() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login' ,
        state: { from: props.location }
      }}/>
    )
  )}/>
)
export default PrivateRoute;
