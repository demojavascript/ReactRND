var gulp       = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap       = require('gulp-wrap');
var declare    = require('gulp-declare');
var concat     = require('gulp-concat');
var coffee     = require('gulp-coffee');
 
gulp.task('templates', function(){
  gulp.src('templates/handlebars/*.handlebars')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/js/'));
});

 
gulp.task('coffee', function() {
  gulp.src('templates/coffee/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('build/js/'));
});
/*var rename = require('gulp-rename');
var defineModule = require('gulp-define-module');
var precompileHandlebars = require('gulp-precompile-handlebars');

gulp.task("htask", function(){
	return gulp.src('templates/handlebars/*.handlebars')
	  .pipe(precompileHandlebars())
	  .pipe(rename({ extname: '.js' }))
	  .pipe(gulp.dest("src"));
});*/