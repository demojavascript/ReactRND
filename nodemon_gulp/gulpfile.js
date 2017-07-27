var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

var nodemon = require('gulp-nodemon');
var bs = require('browser-sync').create();

var livereload = require('gulp-livereload'); 
gulp.task('browser-sync', function () {
   var files = [
      '*.html'
   ];

   bs.init(files, {
      server: {
         baseDir: './'
      }
   });
});

gulp.task('serve', ['server','watch']); 