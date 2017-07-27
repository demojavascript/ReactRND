var devpath = "dev/";
var proPath = "prod/";

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassLint     = require('gulp-sass-lint');
var minifyCss    = require('gulp-cssnano');

var coffee       = require('gulp-coffee')
var coffeelint   = require('gulp-coffeelint');
var uglify       = require('gulp-uglify');

var handlebars   = require('gulp-handlebars');
var wrap         = require('gulp-wrap');
var declare      = require('gulp-declare');

var gulpSequence = require('gulp-sequence')
var concat       = require('gulp-concat')
var del          = require('del');


gulp.task('scsslint', function () {
  return gulp
    .src(devpath+'scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
gulp.task('scss', ["scsslint"], function () {
  return gulp
  	.src(devpath+'scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(proPath+'css'));
});
gulp.task('coffeelint', function () {
  return gulp
    .src(devpath+'coffee/**/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
});
gulp.task('coffee', ["coffeelint"], function() {
  return gulp
    .src(devpath+'coffee/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(uglify())
    .pipe(gulp.dest(proPath+'js'));
});

gulp.task('hbs', function(){
  return gulp
    .src(devpath+'hbs/*.hbs')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(gulp.dest(proPath+'js'));
});

gulp.task('clean:prod', function() {
  return del.sync(['prod']);
})
gulp.task('html', function() {
  return gulp
     .src(devpath+'**/*.html')
     .pipe(gulp.dest(proPath));
});
gulp.task('build', gulpSequence('clean:prod', 'scss', 'coffee', 'hbs', 'html', 'watch'));

gulp.task('watch', function() {
    gulp.watch(devpath+'hbs/**/*.hbs', ['hbs']);
    gulp.watch(devpath+'coffee/**/*.coffee', ['coffee']);
    gulp.watch(devpath+'scss/**/*.scss', ['scss']);
    gulp.watch(devpath+'**/*.html', ['html']);
});
