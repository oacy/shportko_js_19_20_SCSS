var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('javascript', function () {
    return gulp.src('js/*.js')

        .pipe(concat('all.js'))

        .pipe(gulp.dest('build/js'));
});

gulp.task('sass', function () {
    return gulp.src('css/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('style', function () {
    return gulp.src('css/*.css')

        .pipe(concat('all.css'))

        .pipe(gulp.dest('build/css'));
});

gulp.task('js_min', function (cb) {
    pump([
            gulp.src('build/js/all.js'),
            uglify(),
            concat('all_min.js'),
            gulp.dest('build/js')
        ],
        cb
    );
});

gulp.task('css_min', function () {
    return gulp.src('build/css/all.css')
        .pipe(cssnano())
        .pipe(concat('all_min.css'))

        .pipe(gulp.dest('build/css'));
});



gulp.task('default', function () {
    gulp.run('javascript', 'sass', 'style', 'css_min', 'js_min');
});







