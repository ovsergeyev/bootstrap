module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/sass/main.sass')
            .pipe($.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            //.pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({}))
            .pipe($.gp.autoprefixer({
                browsers: ['last 1 versions'],
                cascade: false
            }))
            // .on("error", $.gp.notify.onError({
            //     titile: "stile"
            // }))
            // .pipe($.gp.csso())
            // .pipe($.gp.sourcemaps.write())
            .pipe($.gp.cssbeautify())
            .pipe($.gulp.dest('build/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}
