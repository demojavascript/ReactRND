module.exports = {
	entry: [ __dirname+"/src/app.jsx"],
	output: {
		path: __dirname+"/dist",
		filename: "bundle.js"
	},
	module: {
	  loaders: [
	    {
	      test: [/\.js$/, /\.jsx?$/],
	      exclude: /node_modules/,
	      loader: 'babel-loader',
	      query: {
	         presets: ['react', 'es2015'] 
	       }
	    }
	  ]
	},
	/*module: {	
	   loaders: [
	     {
	       test: [/\.js$/, /\.jsx$/],
	       exclude: /node_modules/,
	       loader: 'babel-loader',
	       query: {
	         presets: ['react', 'es2015'] 
	       }
	     }
	   ]
	 },*/
	 resolve: {
	   extensions: ['.js', '.jsx']
	 },
	watch: true
}