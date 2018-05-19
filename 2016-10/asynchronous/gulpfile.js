var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src('dist')
    .pipe(webserver({
        host: 'localhost',
        port: 8000,
        livereload: true
    }));
});

gulp.task('default', ['webserver'], function() {
  console.log('\n　　　 　 　 _＿_　%\n　　　　γ　　　 　｀ヽ\n　 　 　 i　 ●　 ●　 i\n　　　(ヽ., ¨　∇　¨　|\n　 　 　丶.───⊂λ \n　 　 　 　ヽ　∞　　　　）\n　　　　　　｀-λ──/ \n　　　　　　　∟ヽ＿丿\n               ');
});
