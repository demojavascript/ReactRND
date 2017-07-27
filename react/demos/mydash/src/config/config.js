var Config = {
	baseurl:"http://localhost:8080/api/",
	addCardUrl(){
		return this.baseurl+"cards";	
	},
	getAllCardUrl(){
		return this.baseurl+"cards";	
	},
	getRemoveCardUrl(id){
		return this.baseurl+"cards/"+id;	
	}
}
export default Config;