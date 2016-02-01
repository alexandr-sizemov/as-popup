var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
	htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    templateCache = require('gulp-angular-templatecache'),
    minifycss = require('gulp-minify-css');

gulp.task('scripts', function() {
  gulp.src('./src/**/*.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', function() {
  gulp.src('./src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(templateCache())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', function() {
  gulp.src('src/scss/*.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(gulp.dest('dist/'))
    .pipe(rename({suffix: '.min'} ))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/'));
});

gulp.task('lint-src', function() {
  return gulp.src([
      'src/**/*.js',
    ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(jshintStylish));
});
gulp.task('build', [ 'html', 'styles', 'scripts']);

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['lint-src', 'scripts']);
  gulp.watch('./src/**/*.scss', ['styles']);
  gulp.watch('./src/**/*.html', ['html']);
});