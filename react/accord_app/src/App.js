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
  {title:"Heading Accord 1", content:"This function is responsible for the sorting, if you take a look at the code you’ll see that in order to “decide” how the table should be sorted it uses and modifies the two new variables we added to the state, at the end it sets the state again with the modified values."},
  {title:"Heading Accord 2", content:"The _renderHeader() function tells the Column what should be rendered on it’s header, in this case it’s just adding an input so the user can type and filter the data, on its onChange event I’m calling the function _onFilterChange which will actually do the filtering and update the filteredDataList value."},
  {title:"Heading Accord 3", content:"As you can see I took the rows variable out of the state and replaced it with filteredDataList, now you must think of rows as our data source, like a database table or a web service it shouldn’t be part of our state, what should be is the data we are actually displaying on the table, which will be the filteredDataList. Initially it will have the exact same data as the rows variable, but as the user starts filtering, its value will change."},
  {title:"Heading Accord 4", content:"A few months ago I’ve made this post about how to create a reactjs datatable using the FixedDataTable module, I didn’t cover much, I just gave a simple example explaining how to populate the table with JSON data. Today we’re going a little further"}
];

class Accordion extends Component {
  constructor(props){
    super(props);
    this.state = {copen:true, cindex:0, cdata:cntData}
  }
  resetState(key){
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
                return (<li onClick={self.handleonClick.bind(self, key)} className="show" key={key}><h1>{pane.title}</h1><div className="contentBox">{pane.content}</div></li>)
              }else{
                return (<li onClick={self.handleonClick.bind(self, key)} key={key}><h1>{pane.title}</h1></li>)
              }
            })
          }
        </ul>  
      </div>
    )
  }
}

export default App;
