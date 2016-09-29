/// <binding Clean='clean' />

var gulp = require("gulp");
var plugins = {
    rm: require("gulp-rm"),
    typings: require("gulp-typings")
};

gulp.task('default', ['clean:tmp'], function () {

});
gulp.task('clean', ['clean:tmp']);
gulp.task('clean:tmp', function () {
    return gulp.src(
        ['app/**/*.js', "app/**/*.js.map"],
        { read: false }
        )
        .pipe(plugins.rm());
});

gulp.task('typings:install', function () {
    return gulp.src("./typings.json")
        .pipe(plugins.typings());
});

