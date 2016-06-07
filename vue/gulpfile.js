var gulp = require('gulp');
var haml = require('gulp-haml');

gulp.task('haml', function () {
  gulp.src('./haml/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});

gulp.task('watch',function(){
  gulp.watch('./haml/*.haml',['haml']);
});

gulp.task('default',['haml','watch']);

console.log('hamlをコンパイル(´・ω・`)');
