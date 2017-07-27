var gulp = require('gulp');
var sass = require('gulp-sass');
var scsslint = require('gulp-scsslint');


gulp.task("test", function(){
	console.log('test started....');
});

gulp.task("sass", function(){
	return gulp.src("*.scss")
	   .pipe(sass())
	   .pipe(gulp.dest("app.css"))
});
gulp.task('scss-lint', function() {
  	gulp.src('*.scss')
    	.pipe(scsslint())
    	.pipe(scsslint.reporter());
});
gulp.task("watch", function(){
	gulp.watch('app/scss/**/*.scss', ['sass']); 
});