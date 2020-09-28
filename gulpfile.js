const gulp = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const babel = require("gulp-babel");
const eslint = require('gulp-eslint');

gulp.task('es6', () => {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
                [
                    '@babel/preset-env',
                    {
                        useBuiltIns: 'usage',
                        corejs: 3
                    }
                ]
            ],
            shouldPrintComment: (val) => /^\*/.test(val)
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('eslint', () => {
    return gulp.src(['src/*.js', 'src/*.ts'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
});

gulp.task('copy', () => {
    return gulp.src('src/linkedList.d.ts')
        .pipe(gulp.dest('dist'))
});

gulp.task('build', gulp.parallel(
    gulp.series('es6'),
    gulp.series('copy'))
);

gulp.task('default', gulp.parallel('build'));