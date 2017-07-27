var prodPath     = "prod/";
var gulp         = require('gulp');
var scss         = require('gulp-sass'); 
var scsslint     = require('gulp-sass-lint');
var minifyCss    = require('gulp-cssnano');
var sourcemaps   = require('gulp-sourcemaps');
var concat       = require('gulp-concat');
var wrap         = require('gulp-wrap');
var declare      = require('gulp-declare');

var del          = require('del');
var handlebars   = require('gulp-handlebars');

var coffeescript = require('gulp-coffeescript');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var browserify   = require('browserify-incremental');
var uglify       = require('gulp-uglify');


gulp.task('clean', function() {
  return del.sync([prodPath]);
})

gulp.task('scsslint', function () {
    return gulp
       .src('scss/**/*.scss')
       .pipe(scsslint())
       .pipe(scsslint.format())
       .pipe(scsslint.failOnError())
});

gulp.task("scss", ["scsslint"], function(){
	return gulp
	   .src("scss/app.scss")
	   .pipe(sourcemaps.init())
  	   .pipe(scss())
  	   .pipe(concat('cust.css'))
	   .pipe(minifyCss())	
	   .pipe(gulp.dest(prodPath+"css"));
});

gulp.task('hbs2', function(){
    return gulp
       .src('hbs/all.coffee')
       .pipe(sourcemaps.init())
       .pipe(handlebars({
         handlebars: require('handlebars')
       }))
       .pipe(wrap('Handlebars.template(<%= contents %>)'))
       .pipe(declare({
         namespace: 'MyApp.templates',
         noRedeclare: true, 
       }))
       //.pipe(wrap('Handlebars.template(<%= contents %>)'))
       .pipe(concat('hbs.js'))
       .pipe(gulp.dest(prodPath+'hbs'));
});

gulp.task('hbs', function(){
    return gulp.src(['hbs/tbtndelete.hbs', 'hbs/table.hbs'])
       .pipe(handlebars({
         handlebars: require('handlebars')
       }))
       .pipe(wrap('Handlebars.template(<%= contents %>)'))
       .pipe(declare({
         namespace: 'MyApp.templates',
         noRedeclare: true, 
       }))
       .pipe(concat('hbs.js'))
       .pipe(gulp.dest(prodPath+'hbs'));
});

gulp.task('coffee2', function() {
  return gulp
       .src('coffee/**/*.coffee')
       .pipe(sourcemaps.init())
       .pipe(coffeescript({bare: true}))
       .pipe(concat('script.js'))
       .pipe(gulp.dest(prodPath+'js'));
});

gulp.task('coffee', function(){
  let bundle = browserify({
      entries: 'coffee/app.coffee',
      paths: ["coffee"],
      transform: [ 'coffeeify' ],
      extensions: [ '.coffee' ]
    }).bundle();

    return bundle
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(prodPath+"js"))
});


