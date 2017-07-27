import provider from 'axios'
import URL from './config';
import Auth from '.././logic/Auth';

var Api = {
	getUsers(cb){
		provider.get(URL.getUsersUrl())
		.then(function(result){
			cb(result.data);
		});
	},
	getLogin(email, password, cb){
    provider.post(URL.getLoginUrl(), { "email": email, "password": password })
    .then(function(result){
      cb(result.data);
    });
  },
  getRegister(email, password, name, cb){
    provider.post(URL.getRegisterUrl(), { "name": name, "email": email, "password": password })
    .then(function(result){
      cb(result.data);
    });
  },
	getCategories(cb){
    provider.get(URL.getAllCatUrl(), {})
    .then(function(result){
      cb(result.data);
    });
  },
	addCategories(title, desc, cb){
    provider.post(URL.getCatCreateUrl(), {"title":title, "desc":desc})
    .then(function(result){
      cb(result.data);
    });
  },
	editCategories(_id, title, desc, cb){
    provider.put(URL.getUpdateCatUrl(_id), {"title":title, "desc":desc})
    .then(function(result){
      cb(result.data);
    });
  },
	getPosts(cb){
		provider.get(URL.getAllPostsUrl(),{})
		.then(function(result){
      cb(result.data);
    });
	},
	addPost(title, desc, catid, catname, _id, name, email, cb){
    provider.post(URL.getPostCreateUrl(), {"title":title, "desc":desc, "catname":catname, "catid":catid, "id":_id, "name":name, "email":email})
    .then(function(result){
      cb(result.data);
    });
  },
	editPost(_id, title, desc, catid, catname, id, name, email, cb){
    provider.put(URL.getUpdatePostUrl(_id), {"title":title, "desc":desc, "catname":catname, "catid":catid, "id":id, "name":name, "email":email})
    .then(function(result){
      cb(result.data);
    });
  },
	getPost(slug, cb){
    provider.get(URL.getPostBySlugrl(slug), {})
    .then(function(result){
      cb(result.data);
    });
  },
	getPostByUser(cb){
    provider.get(URL.getPostByUserUrl(Auth.getUser()), {})
    .then(function(result){
      cb(result.data);
    });
  }
}
export default Api;
