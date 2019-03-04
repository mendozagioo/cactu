const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// Cactu scss source
const cactuUrl = './scss/**/*.scss';
const docUrl = './_sass/**/*.scss';

const sassOpts = {
  outputStyle: 'compressed',
  precison: 3,
  errLogToConsole: true
};

function styles() {
  return gulp.src(cactuUrl)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
};

function docStyles() {
  return gulp.src(docUrl)
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('./assets/css'))
}

function compressedStyles() {
  return gulp.src(cactuUrl)
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('./css'))
}

gulp.task('sass', styles);

gulp.task('sass-doc', docStyles);

gulp.task('sass-compressed', compressedStyles);

gulp.task('cactu-build', gulp.parallel(styles, compressedStyles));

gulp.task('watch', () => {
  gulp.watch([cactuUrl, docUrl], gulp.series(styles, compressedStyles, docStyles));
});