const gulp = require('gulp');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();

let isDev = true;
let isProd = !isDev;

let webPackConfig = {
  output: {
    filename: 'scripts.js'
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
};

exports.scripts = function(slugInput, slugOutput) {
  return (
    gulp.src(slugInput)
      .pipe(webpack(webPackConfig))
      .pipe(gulp.dest(slugOutput))
      .pipe(browserSync.stream())
  )
};
