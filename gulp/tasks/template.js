const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();

exports.template = (slugInput, slugOutput) => {
  gulp.src(slugInput)
    .pipe(fileinclude({
      prefix: '@@'
    }))
    .pipe(gulp.dest(slugOutput))
    .pipe(browserSync.stream())
};
