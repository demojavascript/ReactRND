import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

var allCars = [
  {id:1, name:"Car 1", model:"3421", price:"8756734", img:"https://cdn.scotch.io/undefined/mpqblTRFQ1mK414CXoTW_Sidebar_300x300__2_.png.jpg"},
  {id:2, name:"Car 2", model:"3422", price:"9634563", img:"https://cdn.scotch.io/undefined/mpqblTRFQ1mK414CXoTW_Sidebar_300x300__2_.png.jpg"},
  {id:3, name:"Car 3", model:"3423", price:"7745333", img:"https://cdn.scotch.io/undefined/mpqblTRFQ1mK414CXoTW_Sidebar_300x300__2_.png.jpg"},
  {id:4, name:"Car 4", model:"3424", price:"9243544", img:"https://cdn.scotch.io/undefined/mpqblTRFQ1mK414CXoTW_Sidebar_300x300__2_.png.jpg"},
  {id:5, name:"Car 5", model:"3425", price:"4897879", img:"https://cdn.scotch.io/undefined/mpqblTRFQ1mK414CXoTW_Sidebar_300x300__2_.png.jpg"},
  {id:6, name:"Car 6", model:"3426", price:"8674354", img:"https://cdn.scotch.io/undefined/mpqblTRFQ1mK414CXoTW_Sidebar_300x300__2_.png.jpg"},
  {id:7, name:"Car 7", model:"3427", price:"5689766", img:"https://cdn.scotch.io/undefined/mpqblTRFQ1mK414CXoTW_Sidebar_300x300__2_.png.jpg"}
];

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
          </div>
        </Router>
    );
  }
}

class Home extends Component {
  render() {
    return(
      <div>
          <header>Home - lkfs gusdg sdufg sdfgusd fg -shgjfd</header>
      </div>
    )
  }
}

class About extends Component {
  constructor(props){
    super(props)
    this.state = {vehicle:allCars}
  }
  render() {
    return(
      <div>
          <Router>
          <div>

          <header>About - lkfs gusdg sdufg sdfgusd fg -  - beryerbnwbhjer</header>
            <ul>
            {
              this.state.vehicle.map(function(veh, key){
                return (<li key={key}><Link to={"/about/"+veh.id}>{veh.name}</Link></li>)
              })
            }
            </ul>
            <hr/>
            <Route path="/about/:id" component={MCar}/>
          </div>
        </Router>
          
      </div>
    )
  }
}
class MCar extends Component {
  constructor(props){
    super(props)
    this.state = {vehicle:allCars}
  }
  render() {
    var cveh = this.state.vehicle[this.props.match.params.id - 1];

    console.log(cveh);

    return(
      <div>
          <div>Name - {cveh.name}</div>
          <div>Model - {cveh.model}</div>
          <div>Price - {cveh.price}</div>
          <img src={cveh.img} />
      </div>
    )
  }
}
class Topics extends Component {
  render() {
    return(
      <div>
          <header>Topics - lkfs gusdg sdufg sdfgusd -</header>
      </div>
    )
  }
}

export default App;
