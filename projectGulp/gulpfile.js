var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	useref = require('gulp-useref'),
	gulpIf = require('gulp-if'),
	browserSync = require('browser-sync'),
	del = require('del'),
	runSequence = require('run-sequence');

gulp.task("sass", function(){
	return gulp.src("app/scss/**/*.scss")
		.pipe(sass())
		//.pipe(cssnano())
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.reload({
      		stream: true
    	 }))
})
gulp.task("scripts", function(){
	return gulp.src("app/js/**/*.js")
		.pipe(gulpIf('*.js', uglify()))
		//.pipe(gulp.dest("dist"))
		.pipe(browserSync.reload({
      		stream: true
    	 }))
})
gulp.task("nano", function(){
	return gulp.src("app/css/**/*.css")
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest("dist"))
		.pipe(browserSync.reload({
      		stream: true
    	 }))
})
gulp.task("useref", function(){
	return gulp.src("app/*.html")
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest("dist"))
})
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
gulp.task('clean:dist', function() {
  return del.sync('dist');
})
gulp.task('build', function (callback) {
  runSequence('clean:dist', ['sass', 'useref'],
    callback
  )
})
gulp.task("watch", ["browserSync"], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload); 
  	gulp.watch('app/js/**/*.js', ['scripts']);
})

gulp.task("default", function(cb){
	 runSequence(['sass','browserSync', 'watch'],
    	cb
  	)
});