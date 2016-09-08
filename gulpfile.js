var gulp = require('gulp');
var concat = require('gulp-concat');
var scss = require('gulp-sass');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


// scss to css
gulp.task('scss', function(){
	gulp.src([ 'src/scss/*.scss' ])
		.pipe(sourcemaps.init())
		.pipe(scss({
			outputStyle: 'compact'
			//outputStyle: 'compressed'
		}).on('error', scss.logError))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('dist/css/'));
});
gulp.task('scss:watch', function(){
	gulp.watch([ 'src/scss/*.scss' ], ['scss']);
});


// concat javascript files
gulp.task('javascript', function(){
	gulp.src('src/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('dist/js/'));
});
// watch react and javascript
gulp.task('javascript:watch', function(){
	gulp.watch('src/js/*.js', ['javascript']);
});


gulp.task('default', function(){
    console.log('hello');
});
