const gulp = require('gulp')
const clean = require('gulp-clean')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const gulpZip = require('gulp-zip')
const shell = require('gulp-shell')

const deployServer = require('./config/deploy-server')
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
    return gulp.src(['assets/App.js'])
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

// 运行shell命令
gulp.task('shell', function () {
    return gulp
        .src(['./'], { base: '.' })
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

// 打包上传目录文件(所有打包后的包括静态资源，一些不是绝对路径的仍然在static路径下)
gulp.task('zipFile', function () {
    return gulp.src(['_temp/**'])
        .pipe(gulpZip('publish.zip'), { base: '.' })
        .pipe(gulp.dest('./_temp'))
})

// 抽离静态资源单独为nginx服务器(js,css,font)等---只作用于正式服
gulp.task('zipFileStatic', function () {
    return gulp.src(['_temp/static/**'])
        .pipe(gulpZip('static.zip'), { base: '.' })
        .pipe(gulp.dest('./_temp'))
})

// 部署已打包好文件
gulp.task('deploy', function () {
    const deploySSH = require('./config/deploy-ssh')
    return gulp.src('./_temp/publish.zip', { base: '.' })
        .pipe(deploySSH({
            sshServer: deployServer.sshServer
        }))
})

// 部署静态资源到nginx服务器(加过cdn)---只作用于正式服
gulp.task('deployStatic', function () {
    const deploySSH = require('./config/deploy-ssh')
    return gulp.src('./_temp/static.zip', { base: '.' })
        .pipe(deploySSH({
            sshServer: deployServer.sshServerStatic
        }))
})

/* ----------------------------------------开发打包---------------------------------------- */
gulp.task('dev', gulp.series(
    'shell'
))

gulp.task('buildTest', gulp.series(
    'cleanTemp',
    gulp.parallel(
        'frontEnd',
        'backEnd',
        'backEndServer'
    ),
    'cleanServerImg',
    'copyFile',
    'zipFile'
    // 'deploy'
))

gulp.task('buildPrd', gulp.series(
    'cleanTemp',
    gulp.parallel(
        'frontEnd',
        'backEnd',
        'backEndServer'
    ),
    'cleanServerImg',
    'copyFile',
    'zipFile',
    'zipFileStatic'
    // 'deployStatic'
    // 'deploy'
))

gulp.task('buildPrdJp', gulp.series(
    'cleanTemp',
    gulp.parallel(
        'frontEnd',
        'backEnd',
        'backEndServer'
    ),
    'cleanServerImg',
    'copyFile',
    'zipFile'
    // 'deploy'
))
