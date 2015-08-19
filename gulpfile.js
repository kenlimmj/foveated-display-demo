'use strict';

var gulp = require('gulp');

var babel = require('gulp-babel');
var concat = require('gulp-concat');
var jpegtran = require('imagemin-jpegtran');
var jpegoptim = require('imagemin-jpegoptim');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('default', ['watch']);

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      stage: 0,
      comments: false,
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('img', function() {
  return gulp.src('src/img/*.jpg')
    .pipe(jpegtran({
      progressive: true,
    })())
    .pipe(jpegoptim({
      progressive: true,
      max: 60,
    })())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['js']);
});
