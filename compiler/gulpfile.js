var path = require('path');

var gulp = require('gulp');
// sass compiler
var sass = require('gulp-sass');
// add vender prifix
var autoprefixer = require('gulp-autoprefixer');
// error handling
var plumber = require('gulp-plumber');
// local server
var server = require('gulp-webserver');

gulp.task('sass', function() {
    gulp.src(path.join('sass/*.scss'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.join('css/')
    ));
});

// index.htmlじゃなきゃだめ
gulp.task('server', function () {
    gulp.src('./')
        .pipe(server({
            host: 'localhost',
            port: 8000,
            livereload: true,
            open: true
    }));
});

gulp.task('default', ['server'], function() {
    gulp.watch(path.join('sass/**/*.scss'),['sass']);
});