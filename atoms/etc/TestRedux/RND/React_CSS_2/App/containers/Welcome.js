import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDefaultMsg, setDefaultMsg} from '.././actions/Default'
import { Button } from 'react-bootstrap';
import appImg from '.././Resources/images/app.png'

class Welcome extends Component {
  componentDidMount(){
    this.props.defaultMsg();
    this.props.setDefaultMsg("Hi");
  }
  render(){
    console.log(this.props.default);
    return(
      <div>
        <Button>Click me!</Button>
        <img src={appImg} />
        <h1>sjdhfgasjhd</h1>
      </div>
    )
  }
}

function matachDispatchToProps(dispatch){
  return bindActionCreators({defaultMsg:getDefaultMsg, setDefaultMsg:setDefaultMsg}, dispatch);
}

function mapStateToProps(state){
  return{
    default:state.wlcm
  }
}

export default connect(mapStateToProps, matachDispatchToProps)(Welcome);
