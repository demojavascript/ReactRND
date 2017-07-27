var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');


gulp.task('scripts', function(){
  return gulp.src(['./public/lib/**/*.js.js'])
          .pipe(concat('scripts.js'))
          .pipe(rename('scripts.min.js'))
          .pipe(uglify())
          .pipe(gulp.dest('./public/dist/'));
});

gulp.task('watch-public', function(){
  gulp.watch(['public/lib/**/*.js', '!public/dist/*.js'], ['scripts']);
});

gulp.task('develop', function(){
  gulp.start('scripts');
  nodemon({ 
    script: './server.js',
    env: { 'NODE_ENV': 'development' },
    ignore: ['public/dist/']
  })
  //have nodemon run watch on start
  .on('start', ['watch-public']);
});