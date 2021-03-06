const {src, dest, series, parallel} = require('gulp');
const del = require('del');
const optimizeimg = require('gulp-imagemin');

function cleanTask() {
  return del('dist');
}

function pagesTask() {
  return src('src/index.html')
    .pipe(dest('dist'))
}

function scriptsTask() {
  return src('src/scripts/**/*.js')
    .pipe(dest('dist/js'));
}

function stylesTask() {
  return src('src/styles/**/*.css')
    .pipe(dest('dist/css'))
}

function imagesTask() {
  return src('src/images/**/*')
    .pipe(optimizeimg())
    .pipe(dest('dist/images'))
}

exports.default = series(cleanTask, parallel(pagesTask,imagesTask, scriptsTask, stylesTask));