import provider from 'axios'
import URL from '.././config/config.js'

var Posts = {
	getPosts(cb){
		provider
		  .get(URL.getAllPosts())
		  .then(function(result) {    
		    cb(result.data);
		  }).catch(function (error) {
            console.log(error);
          });
	},
	getPostdetail(slug, cb){
		provider
		  .get(URL.getAllPostBySlug(slug))
		  .then(function(result) {    
		    cb(result.data);
		  }).catch(function (error) {
            console.log(error);
          });
	}
}
export default Posts;
