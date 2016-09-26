'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('clean', function () {
  return gulp.src('docs/*', {read: false})
    .pipe(clean());
});

gulp.task('sass', function () {
  return gulp.src('./src/site/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./docs/css'));
});

gulp.task('concat-css', ['sass'], function () {
  return gulp.src(['node_modules/normalize.css/normalize.css', 'docs/css/site.css'])
    .pipe(concatCss("css/site.css"))
    .pipe(gulp.dest('docs/'));
});

gulp.task('minify-css', ['concat-css'], function() {
  return gulp.src('docs/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('docs/css'));
});

gulp.task('default', ['clean', 'minify-css'], function() {

});

