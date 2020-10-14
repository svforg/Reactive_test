'use strict';
const gulp = require('gulp');
const preproc = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rigger = require('gulp-rigger');

const path = {
  release: {
    stylePath: './release/css/',
    stylePathFilesWatch: './release/**/*.css',

    mainJSPath: './release/js/',

    imgPathGeneral: './release/img/',

    html: './release/',
    fonts: './release/fonts/',
  },
  app: {
    fonts: './app/fonts/**/*.*',
    styleFiles: './app/styles/*.scss',
    styleFilesWatch: './app/styles/**/*.scss',


    imgFilesThisProject: './app/img/**/*.*',

    filesWatchConcatHtml: './app/template/sections/*.html',
    fileConcatHtml: './app/template/*.html'
  }
};

exports.watch = watch;
function watch(){
  browserSync.init({
    server: {
      baseDir: path.release.html
    }
  });
  gulp.watch(path.app.styleFilesWatch, styleCommon);
  gulp.watch(path.release.stylePathFilesWatch).on('change', browserSync.reload);
  gulp.watch(path.app.filesWatchConcatHtml).on('change', concatHtml);
  gulp.watch(path.release.html).on('change', browserSync.reload);
}

const vendorJSFiles =  [
    './app/js/vendor/jquery/*.js',
    './app/js/vendor/bootstrapJS/*.js',
    './app/js/scripts/general/*.js',
];
const commonJSFiles =  [
    './app/js/scripts/**/*.js'
];

function vendorScripts() {
    return (
        gulp.src(vendorJSFiles)
            .pipe(concat('vendor.min.js'))
            .pipe(uglify({toplevel: true}))
            .pipe(gulp.dest(path.release.mainJSPath))
    );
}

function commonScripts() {
    return (
        gulp.src(commonJSFiles)
            .pipe(concat('common.min.js'))
            .pipe(uglify({toplevel: true}))
            .pipe(gulp.dest(path.release.mainJSPath))
    );
}

function styleCommon() {
  return (
    gulp.src(path.app.styleFiles)
      .pipe(sourcemaps.init())
      .pipe(preproc())
      .on("error", preproc.logError)
      .pipe(gcmq())
      .pipe(autoprefixer({
        browsers: ['> 0.01%'],
        cascade: false
      }))
      .pipe(cleanCSS({
        level: 2
      }))
      .pipe(sourcemaps.write('/map/.'))
      .pipe(gulp.dest(path.release.stylePath))
  );
}

function imagesGeneral() {
  return (
    gulp.src(path.app.imgFilesThisProject)
      .pipe(imagemin())
      .pipe(gulp.dest(path.release.imgPathGeneral))
  );
}

function fonts() {
  return (
    gulp.src(path.app.fonts)
      .pipe(gulp.dest(path.release.fonts))
  );
}

function concatHtml() {
  return (
    gulp.src(path.app.fileConcatHtml)
      .pipe(rigger())
      .pipe(gulp.dest(path.release.html))
  );
}

gulp.task('build', gulp.series(
  gulp.parallel(styleCommon, imagesGeneral, vendorScripts, commonScripts, fonts),
  concatHtml
));


