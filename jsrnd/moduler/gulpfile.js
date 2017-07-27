var devpath      = "dev/";
var buildpath    = "production/";

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassLint     = require('gulp-sass-lint');
var minifyCss    = require('gulp-cssnano');

var coffee       = require('gulp-coffee')
var coffeelint   = require('gulp-coffeelint');
var uglify       = require('gulp-uglify');

var imagemin     = require('gulp-imagemin');
var cache        = require('gulp-cache');

var handlebars   = require('gulp-handlebars');
var wrap         = require('gulp-wrap');
var declare      = require('gulp-declare');

var gulpSequence = require('gulp-sequence')
var notify       = require('gulp-notify');
var concat       = require('gulp-concat')
var util         = require('gulp-util')
var del          = require('del');
var browserify   = require('browserify-incremental');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');

gulp.task('htmlchanged', function() {
   gulp.src(devpath+'**/*.html')
   .pipe(gulp.dest(buildpath));
});

gulp.task('hbs', function(){
  gulp.src(devpath+'templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(buildpath+'js/'));
});

gulp.task('clean', function() {
  //util.log('Gulp is running!')
  return del.sync('production');
})

gulp.task('images', function(){
  return gulp.src(devpath+'images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest(buildpath+'images'))
});

gulp.task('scss', function(){
  gulp.src(devpath+'scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(minifyCss())  
    .pipe(concat('app.css')) 
    .pipe(gulp.dest(buildpath+'css'))
});

gulp.task('vendorcss', function(){
  gulp.src(devpath+'vendor/css/**/*.css')
    .pipe(gulp.dest(buildpath+'vendor/css'))
});
gulp.task('vendorjs', function(){
  gulp.src(devpath+'vendor/js/**/*.js')
    .pipe(gulp.dest(buildpath+'vendor/js'))
});

gulp.task('scsslint', function () {
  return gulp.src(devpath+'scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('coffeelint', function () {
    return gulp.src(devpath+'coffee/**/*.coffee')
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
      .pipe(uglify())
      .pipe(gulp.dest(buildpath+'js'))
});

gulp.task('build', gulpSequence('clean', 'coffeelint', 'coffee', "scsslint", "scss", "images", "htmlchanged"))

gulp.task('watch', function() {
    gulp.watch(devpath+'coffee/**/*.coffee', ['coffeelint', 'coffee']);
    gulp.watch(devpath+'scss/**/*.scss', ['scsslint', 'scss']);
    gulp.watch(devpath+'**/*.html', ['htmlchanged']);
});

// Default Task
gulp.task('default', ['build', 'watch']);





