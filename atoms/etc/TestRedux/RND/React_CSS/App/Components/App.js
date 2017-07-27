import React, { Component } from "react";
require('.././Resources/css/font-awesome.css');
require('.././Resources/css/base.scss');
import img from '.././Resources/images/app.png'
import Dash from '.././Containers/Dash'

export default class App extends Component {
  render() {
    return (
      <div>
        <Dash/>
        <i className="fa fa-cc-diners-club" aria-hidden="true"></i>
        <i className="fa fa-circle-o-notch" aria-hidden="true"></i>
        <img src={img} />
        <h1>skghjsdkjf22</h1>
      </div>
    );
  }
}
