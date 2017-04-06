var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src('dist')
    .pipe(webserver({
        host: 'localhost',
        port: 8000,
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['webserver'], function() {
  console.log('きたか…!!\n　 ( ﾟдﾟ)　ｶﾞﾀｯ\n　 /　　 ヾ\n＿_L| /￣￣￣/＿\n　 ＼/　　　/');
});
