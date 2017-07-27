var gulp = require('gulp');
var coffee  = require ('gulp-coffee');
var concat  = require ('gulp-concat');
var gutil   = require ('gulp-util');


gulp.task('coffee', function(){
	return gulp.src(['*.coffee', 'coffee/**/*.coffee'])
        .pipe(coffee({"bare":true}))
        .pipe(concat("test.js"))
        .pipe(gulp.dest('dist'));
});


//var coffeeConcat = require('gulp-coffeescript-concat');
 
//gulp.task('coffee', function() {
  //  return gulp.src(['*.coffee', 'coffee/**/*.coffee'])
    //    .pipe(coffeeConcat('all.coffee'))
      //  .pipe(gulp.dest('dist'));
//});