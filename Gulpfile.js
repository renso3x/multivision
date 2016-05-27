const gulp = require("gulp");
const source = require("vinyl-source-stream");
const browserify = require("browserify");
const sass = require('gulp-sass');
const concat = require("gulp-concat");
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function(done) {
  gulp.src('public/scss/**/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(concat('styles'))
    .pipe(minifyCss({ keepSpecialComments: 0}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('public/css/'))
    .on('end', done);
});

gulp.task('browserify', function() {
	return browserify('app/app.js')
		.bundle()
		.pipe(source('main.js'))
      	.pipe(ngAnnotate())
      	.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify']);
	gulp.watch('public/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);