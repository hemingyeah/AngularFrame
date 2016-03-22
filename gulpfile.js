/**
 * gulp启动文件
 */

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
    clean = require('gulp-clean'),
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

/**
 * 处理图片
 */
gulp.task('custom-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist/images'));
});

/**
 * 处理js
 */
gulp.task('custom-js', function() {
    return gulp.src(paths.scripts)
        .pipe(gulp.dest('dist/js'));
});

/**
 * 处理less
 */
gulp.task('custom-less', function() {
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

/**
 * 监视文件变化
 */
gulp.task('watch', function() {
    gulp.watch([paths.images], ['custom-images']);
    gulp.watch([paths.styles], ['custom-less']);
    gulp.watch([paths.scripts], ['custom-js']);
    gulp.watch([paths.index], ['usemin']);
});

/**
 * web服务
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

/**
 * 重启web服务
 */
gulp.task('livereload', function() {
    gulp.src(['dist/**/*.*'])
        .pipe(watch(['dist/**/*.*']))
        .pipe(connect.reload());
});

/*
//清除dist文件夹
gulp.task('clean', function() {
    gulp.src('dist',{read: false})
        .pipe(clean());
});
*/

/**
 * Gulp任务
*/
gulp.task('build', ['usemin', 'build-custom']);
gulp.task('default', ['build', 'webserver', 'livereload', 'watch']);