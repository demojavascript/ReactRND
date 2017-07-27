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

gulp.task('hbs', function(){
  return gulp.src(devpath+'handlebars/**/*.handlebars')
    .pipe(handlebars({ handlebars: require('handlebars') }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(gulp.dest(devpath+'js/handlebars'));
});
gulp.task('coffee', function() {
  return gulp.src(devpath+'coffee/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest(devpath+'js/coffee'));
});
gulp.task('scss', function() {
  return gulp.src(devpath+'scss/**/*.scss')
    .pipe(gulp.dest(devpath+'css'));
});


gulp.task('watch', function() {
    gulp.watch(devpath+'handlebars/**/*.handlebars', ['hbs']);
    gulp.watch(devpath+'coffee/**/*.coffee', ['coffee']);
    gulp.watch(devpath+'scss/**/*.scss', ['scss']);
    //gulp.watch(devpath+'**/*.html', ['html']);
});
