// requirements
var gulp = require('gulp')
var gulpBrowser = require('gulp-browser')
var reactify = require('reactify')
var del = require('del')
var size = require('gulp-size')

// tasks
gulp.task('transform', function () {
  var stream = gulp.src('./src/static/jsx/*.jsx')
    .pipe(gulpBrowser.browserify({transform: ['reactify']}))
    .pipe(gulp.dest('./src/static/js/'))
    .pipe(size())
  return stream
})

gulp.task('del', function () {
  return del(['./src/static/js/*.js'])
})

gulp.task('default', ['del'], function () {
  gulp.start('transform')
  gulp.watch('./src/static/jsx/*.jsx', ['transform'])
})
