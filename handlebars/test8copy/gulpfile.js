var devpath      = "dev/";
var buildpath    = "production/";

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassLint     = require('gulp-sass-lint');
var minifyCss    = require('gulp-cssnano');
var sourcemaps   = require('gulp-sourcemaps');
var brw          = require('gulp-browserify');
var rename       = require('gulp-rename');

var coffee       = require('gulp-coffee')
var coffeeify    = require('gulp-coffeeify')
var coffeelint   = require('gulp-coffeelint');
var uglify       = require('gulp-uglify');

var handlebars   = require('gulp-handlebars');
var wrap         = require('gulp-wrap');
var declare      = require('gulp-declare');

var gulpSequence = require('gulp-sequence')
var notify       = require('gulp-notify');
var concat       = require('gulp-concat');
var del          = require('del');
var browserify   = require('browserify-incremental');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');

gulp.task('clean', function() {
  return del.sync('production');
})

gulp.task('scsslint', function () {
  return gulp.src(devpath+'scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('scss', function(){
  return gulp
	.src(devpath+'scss/app.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('styles.css'))
	.pipe(minifyCss())
	.pipe(gulp.dest(buildpath));
}); 

gulp.task('coffeelint', function () {
  return gulp
    .src(devpath+'coffee/**/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
});

gulp.task('scripts', function () {
  return gulp
    .src(devpath+'coffee/**/*.coffee')
    .pipe(source(devpath+'coffee/app.coffee'))
    .pipe(buffer())
    //.pipe(uglify())
    //css.pipe(uglify())
    .pipe(gulp.dest(buildpath));
});

gulp.task('coffee', function(){
  let bundle = browserify({
      entries: devpath+"coffee/app.coffee",
      paths: [devpath+"coffee"],
      extensions: [ '.coffee' ]
    }).bundle();

    bundle
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(buildpath))
});

gulp.task('testjs', function() {
  gulp.src(devpath+"coffee/app.coffee")
    .pipe(rename('app.js'))
    .pipe(gulp.dest(buildpath))
});



























