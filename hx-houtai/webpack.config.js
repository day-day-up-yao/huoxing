module.exports = function (env, args) {
    if (args.mode === 'development') {
        process.env.NODE_ENV = 'development'
        return require('./configs/webpack.development')
    } else if (args.mode === 'production') {
        process.env.NODE_ENV = 'production'
        return require('./configs/webpack.production')
    } else {
        return require('./configs/webpack.development')
    }
}
