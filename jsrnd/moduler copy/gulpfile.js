var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassLint     = require('gulp-sass-lint');
var minifyCss    = require('gulp-cssnano');

var coffee       = require('gulp-coffee')
var coffeelint   = require('gulp-coffeelint');
var uglify       = require('gulp-uglify');

var gulpSequence = require('gulp-sequence')
var notify       = require('gulp-notify');
var concat       = require('gulp-concat')
var util         = require('gulp-util')
var del          = require('del');
var browserify   = require('browserify-incremental');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');

gulp.task('clean', function() {
  //util.log('Gulp is running!')
  return del.sync('build');
})

gulp.task('scss', function(){
  gulp.src('scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(minifyCss())  
    .pipe(concat('app.css')) 
    .pipe(gulp.dest('build/css'))
});

gulp.task('scsslint', function () {
  return gulp.src('scss/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('coffeelint', function () {
    return gulp.src('./coffee/*.coffee')
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
});

gulp.task('coffee', function(){
  let bundle = browserify({
      entries: './coffee/app.coffee',
      paths: ["./coffee"],
      transform: [ 'coffeeify' ],
      extensions: [ '.coffee' ]
    }).bundle();

    bundle
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./build/js'))
});

gulp.task('build', gulpSequence('clean', 'coffeelint', 'coffee', "scsslint", "scss"))

gulp.task('watch', function() {
    gulp.watch('coffee/*.coffee', ['coffeelint', 'coffee']);
    gulp.watch('scss/*.scss', ['scsslint', 'scss']);
});

// Default Task
gulp.task('default', ['build', 'watch']);





