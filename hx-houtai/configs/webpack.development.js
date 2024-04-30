const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const baseConfig = require('./webpack.base')

const ROOT_PATH = resolve(__dirname, '..')
const DIST_PATH = resolve(ROOT_PATH, 'dist')

const interfaces = require('os').networkInterfaces()
let IPAddress = ''
for (let devName in interfaces) {
    let iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
        let alias = iface[i]
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
            IPAddress = alias.address
        }
    }
}
const config = merge(baseConfig, {
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    devServer: {
        inline: true,
        hot: true,
        historyApiFallback: true,
        contentBase: ROOT_PATH,
        host: IPAddress,
        port: '3020',
        proxy: {
            '/**': {
                // target: 'https://api.marsbit.cc',
                target: 'http://api.marslib.com',
                secure: true,
                changeOrigin: true
                // pathRewrite: {
                //  '^/help': ''
                // }
            }
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        hotOnly: false,
        disableHostCheck: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: `http://${IPAddress}:3020` })
    ]
})
module.exports = config
