var Config = {
	baseurl:"http://localhost:8080/api/",
	getAllPosts(){
		return this.baseurl+"post";	
	},
	getAllPostBySlug(slug){
		return this.baseurl+"postslug/"+slug;	
	}
}
export default Config;