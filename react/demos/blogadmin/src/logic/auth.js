var Auth = {
	isloggedin(){
		var login = false;
		if(window.localStorage.getItem('dashlogin') != null){
			if(window.localStorage.getItem('dashlogin') ===  '1'){
				login = true;
			}else{
				login = false;
			}
		}else{
			login = false;
		}
		//console.log(login);
		return login;
	},
	login(cb){
		window.localStorage.setItem('dashlogin', '1');
		setTimeout(cb, 2000);
	},
	logout(cb){
		window.localStorage.setItem('dashlogin', '0');
		setTimeout(cb, 2000);
	}
}
export default Auth;