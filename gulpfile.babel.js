const babel = require('gulp-babel');
const gulp = require('gulp');
const gulp_sequence = require('gulp-sequence')

gulp.task('world', () => {
    console.log('Hello world!')
});

gulp.task('es6', () => {
    console.log('Hello es6!')
});

gulp.task('default', gulp_sequence(['world', 'es6']));
