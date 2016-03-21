var gulp = require('gulp'),
    connect = require('gulp-connect'),
    usemin = require('gulp-usemin'),
    watch = require('gulp-watch'),
    minifyCss = require('gulp-cssnano'),
    minifyJs = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-htmlmin'),
    clean = require('gulp-clean');

var express = require('express'),
    path = require('path'),
    historyApiFallback = require('connect-history-api-fallback');

var paths = {
    scripts: 'app/scripts/**/*.*',
    styles: 'app/styles/**/*.*',
    images: 'app/images/**/*.*',
    index: 'app/index.html'
};

//处理首页bower components
gulp.task('usemin', function() {

    return gulp.src(paths.index)
        .pipe(usemin({
            js: [minifyJs(), 'concat'],
            css: [minifyCss({
                keepSpecialComments: 0
            }), 'concat'],
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('build-custom', ['custom-images', 'custom-js', 'custom-less']);

gulp.task('custom-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist/images'));
});

gulp.task('custom-js', function() {
    return gulp.src(paths.scripts)
        .pipe(gulp.dest('dist/js'));
});

gulp.task('custom-less', function() {
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});


/**
 * webserver
 */
gulp.task('webserver', function() {
    connect.server({
        root: 'app',
        livereload: true,
        port: 8080,
        middleware: function(connect, opt) {
            return [historyApiFallback()];
        }
    });
});


gulp.task('livereload', function() {
    gulp.src(['dist/**/*.*'])
        .pipe(watch(['dist/**/*.*']))
        .pipe(connect.reload());
});

//清除dist文件
gulp.task('clean', function() {
    gulp.src('dist/**/*.*')
        .pipe(clean());
});

/**
 * Gulp Tasks
 * 
 */
gulp.task('build', ['usemin', 'build-custom']);
gulp.task('default', ['build', 'webserver']);