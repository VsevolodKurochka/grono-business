'use strict';

/* Plugins
********************
gulp-load-plugins
gulp-file-include
gulp-sass
gulp-csso
gulp-notify
gulp-autoprefixer
gulp-sourcemaps
gulp-browserSync
gulp-concat

*/

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
    // $.gulp.parallel('html','sass','scripts:lib','scripts','img','fonts', 'svg'),
    $.gulp.parallel('watch','serve')
));

$.gulp.task('build',$.gulp.series(
    $.gulp.parallel('html','sass','scripts:lib','scripts', 'scripts:main', 'img','fonts', 'svg')
));
