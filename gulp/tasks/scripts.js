const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

exports.scripts = (slugInput, slugOutput) => {
  gulp.src(slugInput)
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(slugOutput))
  //.pipe(browserSync.stream())
};
