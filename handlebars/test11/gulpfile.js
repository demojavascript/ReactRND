var gulp         = require('gulp');
var handlebars   = require('gulp-handlebars');
var wrap         = require('gulp-wrap');
var declare      = require('gulp-declare');


gulp.task('hbs', function(){
  return gulp.src('dev/*.handlebars')
    .pipe(handlebars({ handlebars: require('handlebars') }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(gulp.dest('dev/js'));
});
