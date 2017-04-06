var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src('dist')
    .pipe(webserver({
        host: 'localhost',
        port: 8000,
<<<<<<< HEAD
        livereload: true,
        open: true
=======
        livereload: true
>>>>>>> origin/master
    }));
});

gulp.task('default', ['webserver'], function() {
  console.log('きたか…!!\n　 ( ﾟдﾟ)　ｶﾞﾀｯ\n　 /　　 ヾ\n＿_L| /￣￣￣/＿\n　 ＼/　　　/');
});
