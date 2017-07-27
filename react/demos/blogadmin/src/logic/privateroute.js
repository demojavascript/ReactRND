import React from 'react';
import {Route, Redirect } from 'react-router-dom'
import Auth from '.././logic/auth.js'

const PrivateRoute = ({ component: Component}) => (
  <Route render={props => (
    Auth.isloggedin() ? (
      <Component />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute;