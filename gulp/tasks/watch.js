module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        //$.gulp.watch('src/less/**/*.less', $.gulp.series('less'));
        $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'));
        //$.gulp.watch('src/stylus/**/*.styl', $.gulp.series('stylus'));
        $.gulp.watch('src/scss/**/*.scss', $.gulp.series('sass'));
    });
}
