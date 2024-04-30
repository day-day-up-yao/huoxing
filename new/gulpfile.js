const gulp = require('gulp')
const clean = require('gulp-clean')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const gulpZip = require('gulp-zip')
const shell = require('gulp-shell')
const versionGit = require('./config/version-git')
const execSync = require('child_process').execSync

const configServer = require('./config/config-server')
const webpackConfig = require('./config/webpack.config')

// 清除_temp文件夹
gulp.task('cleanTemp', () => {
    return gulp.src(['_temp'], { read: false, allowEmpty: true })
        .pipe(clean({ force: true }))
})

// 打包前端资源
gulp.task('frontEnd', () => {
    return gulp.src('browser/index.js')
        .pipe(webpackStream(webpackConfig.web, webpack, function (err, stats) {
            if (err) console.log(err)
        }))
        .on('error', function (err) {
            console.error(err)
            this.emit('end')
        })
        .pipe(gulp.dest('_temp/static/build'))
})

// 打包后端资源
gulp.task('backEnd', () => {
    return gulp.src(['server/app/index.js', 'assets/App.js'])
        .pipe(webpackStream(webpackConfig.node, webpack, function (err, stats) {
            if (err) console.log(err)
        }))
        .on('error', function (err) {
            console.error(err)
            this.emit('end')
        })
        .pipe(gulp.dest('_temp/server/build'))
})

// 打包服务端程序
gulp.task('backEndServer', () => {
    return gulp.src(['server/app/index.js'])
        .pipe(webpackStream(webpackConfig.nodeSever, webpack, function (err, stats) {
            if (err) console.log(err)
        }))
        .on('error', function (err) {
            console.error(err)
            this.emit('end')
        })
        .pipe(gulp.dest('_temp/server/build'))
})

// 删除打包后server/build中的img
const imgExt = (ext) => `_temp/server/build/*.${ext}`
gulp.task('cleanServerImg', () => {
    return gulp.src([imgExt('png'), imgExt('jpg'), imgExt('jpeg'), imgExt('gif'), imgExt('svg')], { read: false })
        .pipe(clean({ force: true }))
})
// 拷贝www.huoxing24.com.打包后的静态文件到news静态目录下，实现build目录共享
// 需要先执行www打包，后执行news打包
gulp.task('copyBuild', () => {
    return gulp.src([
        '../www.huoxing24.com/_temp/static/build/*'
    ]).pipe(gulp.dest('./_temp/static/build'))
})
gulp.task('copyResource', () => {
    return gulp.src([
        '../www.huoxing24.com/_temp/static/resource/plugin/TcPlayer-2.3.2.js'
    ]).pipe(gulp.dest('./_temp/static/resource/plugin'))
})
// 拷贝公共资源
gulp.task('copyMultiAppSharing', () => {
    return gulp.src([
        '../multiappsharing/_multiappsharing/**',
        '../multiappsharing/assets/App.js',
        '../multiappsharing/browser/**',
        '../multiappsharing/static/resource/**',
        '../multiappsharing/config/deploy-ssh.js',
        '../multiappsharing/config/version-git.js',
        '../multiappsharing/config/webpack.config.js',
        '../multiappsharing/server/app/**',
        '../multiappsharing/server/render/**',
        '../multiappsharing/server/routes/**',
        '../multiappsharing/server/views/**',
        '../multiappsharing/.eslintignore',
        '../multiappsharing/.eslintrc',
        '../multiappsharing/.gitignore',
        '../multiappsharing/.stylelintignore',
        '../multiappsharing/.stylelintrc',
        '../multiappsharing/babel.config.js'
    ], { base: '../multiappsharing/', allowEmpty: true })
        .pipe(gulp.dest('./'))
})

// 运行shell命令
gulp.task('shell', function () {
    return gulp
        .src(['./_multiappsharing'], { base: '.' })
        .pipe(shell(['cross-env NODE_ENV=development node ./server/app/webpackServer.js']))
})

/* ----------------------------------------以下为zip及ssh上传部分---------------------------------------- */

// 拷贝文件到上传目录
gulp.task('copyFile', function () {
    return gulp.src([
        'config/config.js',
        'config/config-server.js',
        'server/views/**',
        'static/*.txt',
        'static/*.html',
        'static/*.xml',
        'static/*.ico',
        'static/resource/**',
        'package.json',
        'package-lock.json'
    ], { base: '.' }).pipe(gulp.dest('./_temp'))
})

// 更改版本号
gulp.task('changeVersion', function () {
    const version = execSync('git rev-parse HEAD').toString()
    return gulp
        .src(['package.json'], { base: '.' })
        .pipe(versionGit(version.replace('\n', '')))
        .pipe(gulp.dest('./_temp'))
})

// 打包上传目录文件
gulp.task('zipFile', function () {
    return gulp.src(['_temp/**'])
        .pipe(gulpZip('publish.zip'), { base: '.' })
        .pipe(gulp.dest('./_temp'))
})

// 部署已打包好文件
gulp.task('deploy', function () {
    const deploySSH = require('./config/deploy-ssh')
    return gulp.src('./_temp/publish.zip', { base: '.' })
        .pipe(deploySSH({
            sshServer: configServer.sshServer
        }))
})

/* ----------------------------------------开发打包---------------------------------------- */
gulp.task('dev', gulp.series(
    'copyMultiAppSharing',
    'shell'
))

gulp.task('build', gulp.series(
    'copyMultiAppSharing',
    'cleanTemp',
    gulp.parallel(
        'frontEnd',
        'backEnd',
        'backEndServer'
    ),
    'cleanServerImg',
    'copyFile',
    // 'copyBuild',
    // 'copyResource',
    'changeVersion',
    'zipFile'
    // 'deploy'
))
