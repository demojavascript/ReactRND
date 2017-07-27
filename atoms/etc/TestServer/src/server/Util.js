const passwordValidation = function(pwd){
	 var pattern = /^([a-zA-Z0-9_-]){8,12}$/;
	 return pwd.match(pattern);
}

module.exports = passwordValidation
