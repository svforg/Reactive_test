const gulp = require('gulp');

exports.fonts = function(slugInput, slugOutput) {
    return (
        gulp.src(slugInput)
            .pipe(gulp.dest(slugOutput))
    )
};