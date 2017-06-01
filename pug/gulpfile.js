const gulp = require('gulp');
const browserSync = require("browser-sync");
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const notifier = require('node-notifier');

const errorHandler = function(error) {
    notifier.notify({
      message: 'しっぱいしたワン',
      title: 'パグ',
      appIcon: __dirname + '/pug.jpg',
    }, function () {
      console.log(error.message);
    });
  };

gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("html/*.html", browserSync.reload);
});

gulp.task('views', function() {
  return gulp.src(['./*.pug', '!./_*.pug'])
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('./html/'));
});

gulp.task('watch', () => {
  gulp.watch(['./**/*.pug'], () => {
    gulp.start(['views']);
  });
});

gulp.task('default', ['browser-sync', 'views', 'watch']);