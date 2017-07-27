var Auth = {
	isloggedin(){
		var login = false;
		if(window.localStorage.getItem('banadb') == undefined || window.localStorage.getItem('banadb') == '0'){
      login = false;
    }else{
			login = true;
		}
		return login;
	},
	login(user){
		localStorage.setItem('banadb', JSON.stringify(user));
	},
	logout(cb){
	  localStorage.setItem('banadb', '0');
		cb()
	},
  getUser(){
    return JSON.parse(localStorage.getItem('banadb'));
  }
}
export default Auth;
