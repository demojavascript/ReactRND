import React, { Component } from 'react';
import './card.css'

class Addcard extends Component {
  addNewcard(){
    var txt = false;
    var cardname = prompt("Please enter card name", "Harry Potter");
    if (cardname === null || cardname === "") {
        txt = false;
    } else {
        txt = true;
    }
    if(txt){
      this.props.addnewcard(cardname);
    }
  }
  render() {
    return (
      <li key={this.props.index} className="card">
      	<a onClick={this.addNewcard.bind(this)} >
      		<div className="cardBox add">
      			<span>Add new Card</span>
      		</div>
      	</a>	
      </li>
    );
  }
}

export default Addcard;
