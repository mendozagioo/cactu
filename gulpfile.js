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

gulp.task('sass', () => gulp.src(cactuUrl)
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./css'))
);

gulp.task('sass-compressed', () => gulp.src(cactuUrl)
  .pipe(sass(sassOpts).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest('./css'))
);

gulp.task('sass-doc', () => gulp.src(docUrl)
  .pipe(sass(sassOpts).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest('./assets/css'))
);

gulp.task('sass-build', ['sass', 'sass-compressed']);

gulp.task('sass:watch', () => {
  gulp.watch(cactuUrl, ['sass-build']);
});

gulp.task('doc:watch', () => {
  gulp.watch(docUrl, ['sass-doc']);
});