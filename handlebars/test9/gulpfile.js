var devpath      = "dev/";
var devtemppath  = devpath+"temp/";
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
var runSequence  = require('run-sequence');
var notify       = require('gulp-notify');
var concat       = require('gulp-concat')
var util         = require('gulp-util')
var del          = require('del');
var browserify   = require('browserify-incremental');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');

gulp.task('clean:prod', function() {
  return del.sync(['production']);
})

gulp.task('clean:dev', function() {
  return del.sync([devtemppath]);
})

gulp.task('clean:script', function() {
  return del.sync([devtemppath+'js']);
})

gulp.task('clean:css', function() {
  return del.sync([devtemppath+'css']);
})

gulp.task('scsslint', function () {
  return gulp.src(devpath+'scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('scss_custom', ["scsslint"], function(){
  return gulp
  .src(devpath+'scss/app.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('app.css'))
  .pipe(minifyCss())
  .pipe(gulp.dest(devtemppath+"css"));
});

gulp.task('scss_vendor', function(){
  return ess.merge(
      gulp.src([devpath+'vendor/css/animate.min.css'])
          .pipe(concat("vendor.css"))
          .pipe(minifyCss())
          .pipe(gulp.dest(devtemppath+"css"))
      );
});

gulp.task('scss_pro', function(){
  return gulp
    .src([devtemppath+"css/vendor.css", devtemppath+"css/app.css"])
    .pipe(concat("theme.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest(buildpath))
});

gulp.task('scss', gulpSequence('scss_custom', 'scss_vendor', 'scss_pro'))

gulp.task('handlebars', function(){
  return gulp.src(devpath+'templates/handlebars/*.handlebars')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('hbs.js'))
    .pipe(gulp.dest(devtemppath+'hbs'));
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

    return bundle
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(devtemppath+"js"))
});

gulp.task('vendorjs', function(){
    return ess.merge(
              gulp.src([devpath+"vendor/js/jquery-2.2.4.min.js", devpath+"vendor/js/handlebars.js"])
              .pipe(concat('vendor.js'))
              .pipe(gulp.dest(devtemppath+"js"))
           );   
});

gulp.task('scripts', function() {
  return ess.merge(
              gulp.src([devtemppath+"js/vendor.js", devtemppath+"hbs/hbs.js", devtemppath+"js/app.js"])
              .pipe(concat('scripts.js'))
              .pipe(buffer())
              .pipe(uglify())
              .pipe(gulp.dest(buildpath))
          );    
});
gulp.task('js',  gulpSequence('handlebars', 'coffee', 'vendorjs', 'scripts'));

gulp.task('html', function() {
   return gulp.src(devpath+'**/*.html')
              .pipe(gulp.dest(buildpath));
});

gulp.task('build', gulpSequence('clean:dev', "html", 'js', 'scss', 'clean:dev'));

gulp.task('watch', function() {
    gulp.watch(devpath+'templates/handlebars/**/*.handlebars', ['js']);
    gulp.watch(devpath+'coffee/**/*.coffee', ['js']);
    gulp.watch(devpath+'scss/**/*.scss', ['scss']);
    gulp.watch(devpath+'**/*.html', ['html']);
});
gulp.task('default', ['build', 'watch']);

