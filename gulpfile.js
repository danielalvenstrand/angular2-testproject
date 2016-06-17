'use strict';
var gulp = require('gulp');
var sync = require('gulp-npm-script-sync');
var sass = require('gulp-sass');

gulp.task('sass:start', ['sass','sass:watch']);

gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
});

sync(gulp);