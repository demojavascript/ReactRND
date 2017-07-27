import React, {Component} from 'react';
import Welcome from 'containers/Welcome'
import Test from 'components/Test'

export default class App extends Component {
  render(){
    return(
      <div>
        <Welcome/>
        <Test/>
      </div>
    )
  }
}
