var gulp = require('gulp'),
    connect = require('gulp-connect');

/**
 * webserver
 */
gulp.task('webserver', function() {
    connect.server({
        root: 'app',
        livereload: true,
        port: 8080
    });
});

/**
 * Gulp Tasks
 * 
 */
gulp.task('default', ['webserver']);


