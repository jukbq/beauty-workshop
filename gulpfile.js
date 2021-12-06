const { src, dest, parallel, series, watch } = require('gulp');

const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const file_include = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const beautify = require('beautify');
const del = require('del');



function browsersync() {
    browserSync.init({
        server: { baseDir: 'dist/' },
        notify: false,
        online: true
    })
}

function scripts() {
    return src([
            'app/js/main.js',
            'app/js/scroll.js',
            'app/js/plugin.js',
        ])
        .pipe(concat('main.js'))
        .pipe(dest('dist/js/'))
    pipe(browserSync.stream())
}

function scriptMin() {
    return src([
            'app/js/*.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/js/'))
        .pipe(browserSync.stream())
}

function styles() {
    return src([
            'app/css/*.css'
        ])
        .pipe(concat('style.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(dest('dist/css/'))
        .pipe(browserSync.stream())
}

function stylesMin() {
    return src([
            'app/css/**/*.css'
        ])
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleanCSS())
        .pipe(dest('dist/css/'))
        .pipe(browserSync.stream())
}



function images() {
    return src([
            'app/img/**/*'
        ])
        .pipe(dest('dist/img/'))
        .pipe(browserSync.stream())
}




function html() {
    return src([
            'app/**/*.html', '!app/**/_*.html'
        ])
        .pipe(file_include())
        .pipe(dest('dist/'))
        .pipe(browserSync.stream())

}

function cleanimg() {
    return del('dist', { force: true })
}

function startwatch() {
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch(['app/**/*.js', '!app/**/*.min.js'], scriptMin);
    watch(['app/**/*.css', '!app/**/*.min.css'], stylesMin);
    watch(['app/**/*.css', '!app/**/*.min.css'], styles);
    watch(['app/**/*.html'], html);
    watch('app/img/**/*.*', images);
}

exports.cleanimg = cleanimg;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = stylesMin;
exports.scripts = scriptMin;
exports.styles = styles;
exports.html = html;
exports.images = images;



exports.default = parallel(images, html, stylesMin, styles, scriptMin, scripts, browsersync, startwatch);