import React, { Component } from 'react';
import Card from './card.js'
import Addcard from './Addcard.js'
import './card.css'

class Cardlist extends Component {
  addNewCard(card){
  	this.props.addnewcard(card);
  }
  removeCard(_id){
    this.props.removeCard(_id);
  }
  render() {
    var self = this;
    return (
      <div className="cardlist">
      	  <ul>
      		{
      			this.props.data.map(function(card, key){
      				return (<Card removeCard={self.removeCard.bind(self)} index={key} key={key} card={card} />)
      			})
      		}
      		<Addcard addnewcard={this.addNewCard.bind(this)} />
      	  </ul>	
      </div>
    );
  }
}

export default Cardlist;
