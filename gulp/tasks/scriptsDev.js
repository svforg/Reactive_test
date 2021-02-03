const gulp = require('gulp');
const concat = require('gulp-concat');

exports.scripts = (slugInput, slugOutput) => {
  gulp.src(slugInput)
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest(slugOutput))
  //.pipe(browserSync.stream())
};
