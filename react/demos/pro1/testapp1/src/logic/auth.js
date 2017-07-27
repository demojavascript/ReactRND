var Auth = {
	islogin:true,
	login(cb){
		this.islogin = true;
		setTimeout(cb, 2000);
	}
}
export default Auth;