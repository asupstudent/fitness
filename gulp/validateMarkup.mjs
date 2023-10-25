import gulp from 'gulp';
import bemlinter from 'gulp-html-bemlinter';
import {htmlValidator} from 'gulp-w3c-html-validator';

const validateW3C = () => {
  return gulp.src('source/*.html').pipe(htmlValidator.analyzer()).pipe(htmlValidator.reporter({throwErrors: true}));
};

const lintBem = () => {
  return gulp.src('source/*.html').pipe(bemlinter());
};

export {validateW3C, lintBem};
