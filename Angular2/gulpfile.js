/// <binding Clean='clean' />

var gulp = require("gulp");
var plugins = {
    rm: require("gulp-rm"),
    typings: require("gulp-typings"),
    webServer: require('gulp-webserver'),
    typescript: require('gulp-typescript'),
    debug: require('gulp-debug')
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
    return gulp.src("typings.json" )
        .pipe(plugins.typings());
});
var tsProject = plugins.typescript.createProject('tsconfig.json');
gulp.task('build',function(){
    var tsResult = tsProject.src() // instead of gulp.src(...) 
        .pipe(plugins.debug())
        .pipe(tsProject());
 
    return tsResult.js.pipe(gulp.dest('app'));
});
gulp.task('run',['build','webserver'],function(){

});
gulp.task('webserver', function() {
    gulp.src('')
    .pipe(plugins.webServer({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: "index.html"
    }));
});