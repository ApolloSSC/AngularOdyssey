/// <binding ProjectOpened='default' />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'ng2-toastr/**',
            'ng2-table/**',
            'ng2-bootstrap/**',
            'angular-confirmation-popover/**',
            'file-saver/**'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./libs"));
});

var tsProject = ts.createProject('tsScripts/tsconfig.json', {
    typescript: require('typescript')
});
gulp.task('ts', function (done) {
    var tsResult = gulp.src([
            "tsScripts/**/*.ts"
    ])
        .pipe(tsProject(), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Scripts'));
});

gulp.task("html", () => {
    gulp.src([
            'tsScripts/**/*.html'
    ]).pipe(gulp.dest("./Scripts"));
});

gulp.task('watch', ['watch.ts', 'watch.html']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('tsScripts/**/*.ts', ['ts']);
});

gulp.task('watch.html', ['html'], function () {
    return gulp.watch('tsScripts/**/*.html', ['html']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);