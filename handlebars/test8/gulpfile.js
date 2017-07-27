var devpath      = "dev/";
var buildpath    = "production/";

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassLint     = require('gulp-sass-lint');
var minifyCss    = require('gulp-cssnano');
var sourcemaps   = require('gulp-sourcemaps');

var coffee       = require('gulp-coffee')
var coffeelint   = require('gulp-coffeelint');
var uglify       = require('gulp-uglify');

var imagemin     = require('gulp-imagemin');
var cache        = require('gulp-cache');

var handlebars   = require('gulp-handlebars');
var wrap         = require('gulp-wrap');
var declare      = require('gulp-declare');

var ess          = require('event-stream');
var gulpSequence = require('gulp-sequence')
var notify       = require('gulp-notify');
var concat       = require('gulp-concat')
var util         = require('gulp-util')
var del          = require('del');
var browserify   = require('browserify-incremental');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');

gulp.task('clean', function() {
  return del.sync('production');
})
gulp.task('html', function() {
   gulp.src(devpath+'**/*.html')
   .pipe(gulp.dest(buildpath));
});
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
  .pipe(concat('app.css'))
  .pipe(minifyCss())
  .pipe(gulp.dest(buildpath));
}); 

gulp.task('coffeelint', function () {
  return gulp
    .src(devpath+'coffee/**/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
});
gulp.task('coffee', function(){
  let bundle = browserify({
      entries: devpath+'coffee/app.coffee',
      paths: [devpath+"coffee"],
      transform: [ 'coffeeify' ],
      extensions: [ '.coffee' ]
    }).bundle();

    bundle
      .pipe(source('app.js'))
      .pipe(buffer())
      //.pipe(uglify())
      .pipe(gulp.dest(buildpath))
});
gulp.task('coffee2', function () {
let bundle = browserify({
      entries: devpath+'coffee/app.coffee',
      paths: [devpath+"coffee"],
      transform: [ 'coffeeify' ],
      extensions: [ '.coffee' ]
    }).bundle();

    bundle
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(devpath+"vendor/js"))
});
gulp.task('hbs', function(){
  gulp.src(devpath+'templates/handlebars/*.handlebars')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('handlebars.js'))
    .pipe(gulp.dest(buildpath+'hbs'));
});
gulp.task('hbs2', function(){
  gulp.src(devpath+'templates/handlebars/*.handlebars')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('hbs.js'))
    .pipe(gulp.dest(devpath+'vendor/js/'));
});
gulp.task('vendorcss', function(){
  gulp.src(devpath+'vendor/css/**/*.css')
    .pipe(gulp.dest(buildpath+'vendor/css'))
});
gulp.task('vendorjs', function(){
  gulp.src(devpath+'vendor/js/**/*.js')
    .pipe(gulp.dest(buildpath+'vendor/js'))
});
gulp.task('coffee3', function(){
  ess.merge(
      gulp.src([devpath+'vendor/js/jquery-2.2.4.min.js', devpath+'vendor/js/handlebars.js', devpath+'vendor/js/hbs.js', devpath+'vendor/js/app.js'])
          .pipe(concat("script.js"))
          .pipe(uglify())
          .pipe(gulp.dest(buildpath))
      );
});

gulp.task('scripts', function() {
  return es.merge(gulp.src(["public-dev/app.js", "public-dev/scripts/**/*.js"]), gulp.src("public-dev/**/*.coffee").pipe(coffee())).pipe(concat('all.js')).pipe(gulp.dest("build"));
});

gulp.task('buildscript', gulpSequence('clean', 'coffeelint', 'coffee', "scsslint", "scss", "images", "htmlchanged"))


