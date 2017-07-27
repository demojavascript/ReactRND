var Utility = {
	showHello:function(){
		console.log("jsdkf sadfhjas fd");
		return false;
	},
  	finddata(mainStr, substr){
    	return mainStr.toUpperCase().trim().indexOf(substr.toUpperCase());
  	},
	compareValues(key, order=true) {
	    return function(a, b) {
	      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
	          return 0; 
	      }

	      const varA = (typeof a[key] === 'string') ? 
	        a[key].toUpperCase() : a[key];
	      const varB = (typeof b[key] === 'string') ? 
	        b[key].toUpperCase() : b[key];

	      let comparison = 0;
	      if (varA > varB) {
	        comparison = 1;
	      } else if (varA < varB) {
	        comparison = -1;
	      }
	      return (
	        (order === false) ? (comparison * -1) : comparison
	      );
	    };
	}
}

export default Utility;