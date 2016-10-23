var gulp = require('gulp');
var connect = require('gulp-connect');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

gulp.task('connect', function() {
    connect.server({
        port: 47,
        livereload: true,
        root: ['dist', 'dist/html']
    });
});

gulp.task('jade', function() {
    gulp.src('source/jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist/html'))
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    gulp.src('source/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('source/jade/*.jade', ['jade']);
    gulp.watch('source/sass/*.sass',['sass']);
    // add watch for .sass and .js files
});

gulp.task('default', ['jade', 'sass', 'connect', 'watch']);