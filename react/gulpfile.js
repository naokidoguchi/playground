'use strict'
var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
        host: 'localhost',
        port: 8000,
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['webserver'], function() {
  console.log('webserver started');
});
