import React, { Component } from 'react';
import NumberExp from '.././containers/NumberExp'
import User from './User'
require('./app.css');

export default class App extends Component {
  render(){
    return (
      <div>
        <h1>jfhsdjf</h1>
        <NumberExp />
        <User />
      </div>
    )
  }
}
