// Importando os módulos necessários
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Caminhos dos arquivos
const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dist/styles/'
        },
        scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/scripts/'
        },
        images: {
        src: 'src/images/**/*',
        dest: 'dist/images/'
        }
};

// Tarefa para compilar SASS
function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
}

// Tarefa para comprimir imagens
function images() {
    return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Tarefa para comprimir JavaScript
function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

// Tarefa para observar mudanças nos arquivos
function watchFiles() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}

// Definindo as tarefas padrão
const build = gulp.series(gulp.parallel(styles, images, scripts), watchFiles);

exports.styles = styles;
exports.images = images;
exports.scripts = scripts;
exports.watch = watchFiles;
exports.default = build;
