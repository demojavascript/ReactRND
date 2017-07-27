import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Accordion />
      </div>
    );
  }
}

var cntData = [
  {title:"Heading Accord 1", content:"jsdf asf asjf asdfja sfaksdf asdf 1"},
  {title:"Heading Accord 2", content:"jsdf asf asjf asdfja sfaksdf asdf 2"},
  {title:"Heading Accord 3", content:"jsdf asf asjf asdfja sfaksdf asdf 3"},
  {title:"Heading Accord 4", content:"jsdf asf asjf asdfja sfaksdf asdf 4"}
];

class Accordion extends Component {
  constructor(props){
    super(props);
    this.state = {copen:true, cindex:0, cdata:cntData}
  }
  resetState(key){
    console.log(this.state.cindex +" === "+key); 
    if(this.state.cindex === key){
      this.setState({copen:false, cindex:undefined, cdata:cntData});
    }else{
      this.setState({copen:true, cindex:key, cdata:cntData});
    }
  }
  render (){
    return (
      <div className="accordionBox">
        <Panes clickHandle={this.resetState.bind(this)} index={this.state.cindex} data={this.state.cdata} />
        <Panels index={this.state.cindex} data={this.state.cdata} />
      </div>
    )
  }
}
class Panes extends Component {
  handleonClick(key){
    this.props.clickHandle(key)
  }
  render (){
    var self = this;
    return (
      <div className="panesBox">
        <ul>
          {
            this.props.data.map(function(pane, key){
              if(key === self.props.index){
                return (<li onClick={self.handleonClick.bind(self, key)} className="show" key={key}>{pane.title}</li>)
              }else{
                return (<li onClick={self.handleonClick.bind(self, key)} key={key}>{pane.title}</li>)
              }
            })
          }
        </ul>  
      </div>
    )
  }
}
class Panels extends Component {
  render (){
    var self = this;
    return (
      <div className="panelsBox">
        {
          this.props.data.map(function(pane, key){
            if(key === self.props.index){
              return (<div className="show" key={key}>{pane.content}</div>)
            }
          })
        }
      </div>
    )
  }
}
export default App;
