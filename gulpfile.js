var gulp = require('gulp');
// 引入此插件需要调用以返回一个对象
var $    = require('gulp-load-plugins')();
var open = require('open');

// 全局变量，用于保存路径信息
var app = {
    srcPath : 'src/',
    devPath : 'build/',
    prdPath : 'dist/'
}

// lib 任务，拷贝开发依赖
gulp.task('lib', function(){
    // 读取文件到内存
    gulp.src('bower_components/**/*.js')
        .pipe(gulp.dest(app.devPath + 'vendor'))
        .pipe(gulp.dest(app.prdPath + 'vendor'))
        .pipe($.connect.reload());
});

// html 任务，拷贝html到相关目录
gulp.task('html', function(){
    gulp.src(app.srcPath + '/**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
        .pipe($.connect.reload());     
});

// 拷贝json
gulp.task('json', function(){
    gulp.src(app.srcPath + 'data/**/*.json')
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.prdPath + 'data'))
        .pipe($.connect.reload());     
});

// 编译less，由于less用的一个index文件引入多个文件，所以只需编译一个总文件即可
gulp.task('less', function(){
    gulp.src(app.srcPath + 'style/index.less')
        .pipe($.plumber())
        .pipe($.less())
        .pipe(gulp.dest(app.devPath + 'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prdPath + 'css'))
        .pipe($.connect.reload());
});

// js任务，合并script下所有js到一个文件，生产环境需要进行压缩
gulp.task('js', function(){
    gulp.src(app.srcPath + 'script/**/*.js')
        .pipe($.plumber())
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath + 'js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.prdPath + 'js'))
        .pipe($.connect.reload());
});

// image文件处理
gulp.task('image', function(){
    gulp.src(app.srcPath + 'images/**/*')
        .pipe($.plumber())
        .pipe(gulp.dest(app.devPath + 'images'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.prdPath + 'images'))
        .pipe($.connect.reload());
});

// 清除发布文件夹
gulp.task('clean', function(){
    gulp.src([app.prdPath, app.devPath])
        .pipe($.clean());
});

// 构建任务
gulp.task('build', ['lib', 'html', 'json', 'less', 'js', 'image']);

// 开发服务器设置，文件修改保存之后自动刷新浏览器
gulp.task('server', ['build'], function(){
    // 启动一个服务,传入一个配置对象
    // root 服务目录
    // livereload 针对高级浏览器的自动刷新功能
    // port 端口
    $.connect.server({
        root        : [app.devPath],
        port        : 1603,
        livereload  : true
    });
    // 服务开启之后自动打开浏览器
    open('http://localhost:1603');
    gulp.watch('bower_components/**/*', ['lib']);
    gulp.watch(app.srcPath + '/**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + 'images/**/*', ['image']);

});

// 默认启动server任务
gulp.task('default', ['server']);