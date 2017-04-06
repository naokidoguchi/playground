var gulp = require('gulp');
var haml = require('gulp-haml');

gulp.task('haml', function () {
  gulp.src('./index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./haml'));
});

gulp.task('default', function(){
  gulp.run('haml');
});