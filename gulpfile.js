const gulp = require("gulp");
const sassCompiler = require("gulp-sass")(require("sass"));
const postCSS = require("gulp-postcss");
const cssNano = require("cssnano");
const autoPrefixer = require("autoprefixer");
const gulpUglify = require("gulp-uglify");
// files path
const pathes = {
    css: "css",
    scss: "scss/**/*.scss",
    uglifiedJS: "uglified-js",
    js: "js/**/*.js",
};
// tasks
function style() {
    return gulp
        .src(pathes.scss)
        .pipe(sassCompiler())
        .pipe(postCSS([autoPrefixer(), cssNano()]))
        .pipe(gulp.dest(pathes.css));
}
function script() {
    return gulp
        .src(pathes.js)
        .pipe(gulpUglify())
        .pipe(gulp.dest(pathes.uglifiedJS));
}
// gulp watch
function watch() {
    gulp.watch([pathes.scss, pathes.js], gulp.parallel(style, script));
}
// gulp commands
exports.default = gulp.series(style, script, watch);
