var Config = {
	baseurl:"http://localhost:3000/api/",
	getLoginUrl(){
		return this.baseurl+"login";
	},
	getRegisterUrl(){
		return this.baseurl+"user";
	},
	getProfileUpdateUrl(id){
		return this.baseurl+"user/"+id;
	},
	getUserDeleteUrl(id){
		return this.baseurl+"user/"+id;
	},
	getUserByIdUrl(id){
		return this.baseurl+"user/"+id;
	},
	getUsersUrl(){
		return this.baseurl+"user";
	},
	getCatCreateUrl(){
		return this.baseurl+"category";
	},
	getAllCatUrl(){
		return this.baseurl+"category";
	},
	getCatByIdUrl(id){
		return this.baseurl+"category/"+id;
	},
	getUpdateCatUrl(id){
		return this.baseurl+"category/"+id;
	},
	getPostCreateUrl(){
		return this.baseurl+"post";
	},
	getAllPostsUrl(){
		return this.baseurl+"post";
	},
	getPostByIdUrl(id){
		return this.baseurl+"post/"+id;
	},
	getPostByUserUrl(user){
		if(user.role == 1){
			return this.baseurl+"post";
		}else{
			return this.baseurl+"postbyuser/"+user._id;
		}
	},
	getPostBySlugrl(slug){
		return this.baseurl+"postbyslug/"+slug;
	},
	getUpdatePostUrl(id){
		return this.baseurl+"post/"+id;
	},
	getDeletePostUrl(id){
		return this.baseurl+"post/"+id;
	}
}
export default Config;
