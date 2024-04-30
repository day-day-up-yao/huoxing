const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const WebpackBar = require('webpackbar')
const devEnv = process.env.NODE_ENV !== 'production'
const autoprefixer = require('autoprefixer')
const HappyPack = require('happypack')

const ROOT_PATH = resolve(__dirname, '..')
const SRC_PATH = resolve(ROOT_PATH, 'src')
const DIST_PATH = resolve(ROOT_PATH, 'dist')
const LIBS_PATH = resolve(ROOT_PATH, 'libs')
const TEM_PATH = resolve(LIBS_PATH, 'template')
console.log(`===============  当前环境: ${process.env.NODE_ENV}  =================`)
module.exports = {
    devtool: 'eval-source-map',
    performance: {
        hints: false
    },
    entry: {
        index: resolve(SRC_PATH, 'index.jsx')
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: SRC_PATH,
                exclude: /(node_modules)/,
                use: ['happypack/loader?id=babel']
            }, {
                test: /\.(css|scss)?$/,
                include: ROOT_PATH,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer()]
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|svgz)?$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']
    },
    externals: {
        zepto: '$',
        jquery: '$'
    },
    plugins: [
        new StyleLintPlugin(),
        new HappyPack({
            id: 'babel',
            threads: 4,
            loaders: ['babel-loader?cacheDirectory=true', 'eslint-loader']
        }),
        new webpack.ProvidePlugin({
            $: 'zepto' || 'jquery',
            zepto: 'zepto',
            jQuery: 'jquery',
            'window.zepto': 'zepto',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            title: 'MarsBit管理后台',
            keywords: 'MarsBit管理后台',
            description: 'MarsBit管理后台',
            filepath: DIST_PATH,
            template: resolve(TEM_PATH, 'index.html'),
            chunks: devEnv ? ['index'] : ['index', 'vendors'],
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': devEnv ? JSON.stringify('development') : JSON.stringify('production')
            }
        }),
        new WebpackBar({
            profile: true
        })
    ]
}
