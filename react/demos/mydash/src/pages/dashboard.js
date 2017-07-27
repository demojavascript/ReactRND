import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Cardlist from '.././component/cards/cardlist.js'
import Cards from '.././logic/cards.js'
import Loader from '.././component/loader.js'

class Dashboard extends Component {
  constructor(props){
  	super(props);
  	this.state = {cards:[], loading:true};
  }	
  componentWillMount() {
  	var self = this;
  	Cards.getCards(function(data){
  		self.setState({cards:data, loading:false});
  	});
  }
  addNewCard(card){
  	var self = this;
    this.setState({loading:true});
  	Cards.addCards(card, function(data){
  		self.setState({cards:data, loading:false});
  	});	
  }
  removeCard(id){
    var self = this;
    this.setState({loading:true});
    Cards.removeCard(id, function(data){
      self.setState({cards:data, loading:false});
    }); 
  }	
  render() {
    return (
      <DocumentTitle title={'Dashboard'}> 		
	      <section className="dashboard">
	      	<h1>Dashboard </h1>	
	      	<Cardlist removeCard={this.removeCard.bind(this)} addnewcard={this.addNewCard.bind(this)} data={this.state.cards} />
          {this.state.loading? <Loader/>:''}
	      </section>
      </DocumentTitle>
    );
  }
}

export default Dashboard;
