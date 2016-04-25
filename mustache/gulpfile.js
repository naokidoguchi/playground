const gulp = require('gulp');
const webserver = require('gulp-webserver');
const mustache = require("gulp-mustache");

gulp.task('webserver', function () {
  gulp.src('dist')
    .pipe(webserver({
        host: 'localhost',
        port: 8000,
        livereload: true
    }));
});
