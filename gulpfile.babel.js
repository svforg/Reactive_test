'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');
const project = requireDir('./gulp');
const ghPages = require('gulp-gh-pages');


gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});


gulp.task('watch',
    project.allFiles.watch
);

gulp.task('default', gulp.parallel(

    project.index.build,

    project.allFiles.build
));
