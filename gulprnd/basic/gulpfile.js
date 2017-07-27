var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("test", function(){
	console.log('test started....');
});

gulp.task("sass", function(){
	return gulp.src("app/scss/theme.scss")
	   .pipe(sass())
	   .pipe(gulp.dest("app/css"))
});
gulp.task('scss-lint', function() {
  	return gulp.src('/scss/*.scss')
    	.pipe(scsslint());
});
gulp.task("watch", function(){
	gulp.watch('app/scss/**/*.scss', ['sass']); 
});