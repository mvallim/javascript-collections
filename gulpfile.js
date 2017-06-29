/* eslint-disable */
const gulp = require('gulp');
const gutil = require('gulp-util');
const clean = require('gulp-clean');
const uglify = require('gulp-uglifyjs');
const eslint = require('gulp-eslint');
const descriptor = require('./package.json');
const config = require('./package.json');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

config.path = {
  src: 'src/main/index.js',
  watch: 'src/**/*.js',
  dist: './dist/',
};
config.browserify = {
  entries: config.path.src,
  debug: true,
  standalone: 'JsCollections', //adds UMD pattern to final bundle
};

gulp.task('clean', function() {
  return gulp
    .src(config.path.dist, {read: false})
    .pipe(clean());
});

// Gulp + Browserify
// from: https://github.com/gulpjs/gulp/tree/master/docs/recipes
gulp.task('build', ['clean'], () => {
  const b = browserify(config.browserify);

  return b
    .bundle()
    .pipe(source(config.path.src))
    .pipe(buffer())
    .pipe(uglify(descriptor.name + '.min.js'))
    .on('error', gutil.log)
    .pipe(gulp.dest(config.path.dist));
});

gulp.task('lint', function() {
  return gulp
    .src(config.path.src)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch', function() {
  return gulp
    .watch(`${config.path.watch}`, [
      'lint',
      'build',
    ]);
});

gulp.task('default', ['build']);
