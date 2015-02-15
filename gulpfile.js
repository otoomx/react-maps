var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var es6transpiler = require('gulp-es6-transpiler');

gulp.task('browserify', function(){
	gulp.src('scripts/js/main.js')
		.pipe(browserify({transform:'reactify'}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function(){
	gulp.src('scripts/index.html')
	.pipe(gulp.dest('dist/html'))
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function(){
	gulp.watch('scripts/**/*.*', ['default']);
});