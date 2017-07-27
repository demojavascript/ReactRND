import provider from 'axios'
import URL from '.././config/config.js'

var Cards = {
	getCards(cb){
		provider
		  .get(URL.getAllCardUrl())
		  .then(function(result) {    
		    cb(result.data);
		  }).catch(function (error) {
            console.log(error);
          });
	},
	addCards(item, cb){
		provider
	      .post(URL.addCardUrl(), {
	        title: item
	      })
	      .then(function(response) {
	        cb(response.data)
	      }).catch(function (error) {
	        console.log(error);
	      });
	},
	removeCard(id, cb){
		provider
	      .delete(URL.getRemoveCardUrl(id))
	      .then(function(response) {
	        cb(response.data)
	      }).catch(function (error) {
	        console.log(error);
	      });
	}
}
export default Cards;
