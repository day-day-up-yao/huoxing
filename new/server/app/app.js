import path from 'path'
import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import expressWinston from 'express-winston'
import logger from './logger'
import proxy from './proxy'
import routes from '../routes/root'
import i18n from './i18n'

const app = express()

// 接口代理
proxy(app)

// react程序国际化挂载到req上
i18n(app)

const rootPath = path.join(__dirname).split('server')[0]

app.use(compression())
app.set('views', path.join(`${rootPath}/server/views`))
app.set('view engine', 'ejs')
app.use(expressWinston.logger({
    winstonInstance: logger
}))
app.use(function (req, res, next) {
    res.logger = logger
    next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
const staticOptions = {
    index: false,
    maxAge: 365 * 24 * 60 * 60 * 1000,
    setHeaders: function (res, path, stat) {
        res.set('Access-Control-Allow-Origin', '*')
    }
}
app.use(express.static(path.join(`${rootPath}/static`), staticOptions))

routes(app)

app.use(function (req, res, next) {
    next(createError(404))
})

expressWinston.requestWhitelist.push('body') // 把post参数打印至日志文件
app.use(expressWinston.errorLogger({
    winstonInstance: logger
}))
app.use(function (err, req, res, next) {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500)
    res.render('error')
})

export default app
