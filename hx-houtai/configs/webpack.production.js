const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.base')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const autoprefixer = require('autoprefixer')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ROOT_PATH = resolve(__dirname, '..')
const SRC_PATH = resolve(ROOT_PATH, 'src')
const DIST_PATH = resolve(ROOT_PATH, 'dist')
// const LIBS_PATH = resolve(ROOT_PATH, 'libs')

module.exports = merge(baseConfig, {
    devtool: 'cheap-module-source-map',
    entry: {
        index: resolve(SRC_PATH, 'index.jsx'),
        vendors: [
            'antd',
            'axios',
            '@babel/polyfill',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux-devtools-extension',
            'redux',
            'redux-thunk'
        ]
    },
    output: {
        path: DIST_PATH,
        filename: 'js/[name]-[hash:8].js',
        chunkFilename: 'js/[name]-[chunkhash:8].js',
        // publicPath: 'https://admin.marsbit.co/'
        publicPath: '../'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                include: ROOT_PATH,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // publicPath: 'https://admin.marsbit.co/'
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer()],
                            sourceMap: false
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif)?$/,
                // test: /\.(png|jpg|jpeg|gif|svg|svgz)?$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'img/[name]-[hash:8].[ext]?'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            /*
            new UglifyJsPlugin({
                parallel: true,
                exclude: /\/node_modules/,
                uglifyOptions: {
                    ecma: 8,
                    mangle: true,
                    sourceMap: false,
                    warnings: false,
                    compress: true,
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({})
            */
            // 压缩 js 代码
            new TerserPlugin({
                exclude: /\.min\.js$/,
                extractComments: false, // 移除注释
                parallel: true,
                cache: true,
                sourceMap: false
            }),
            // 用于优化css文件
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.(css|scss|sass)$/g,
                cssProcessorOptions: {
                    safe: true,
                    map: false,
                    mergeLonghand: false,
                    discardComments: {
                        removeAll: true // 移除注释
                    }
                },
                canPrint: true
            })
        ],
        splitChunks: {
            minSize: 0,
            minChunks: 2,
            name: false,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    priority: -10
                },
                styles: {
                    name: 'styles',
                    test: /\.css/,
                    enforce: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist/css/*', 'dist/js/*', 'dist/img/*', 'dist/*.*'], {
            root: ROOT_PATH,
            verbose: true,
            dry: false
        }),
        // new ExtractTextPlugin({
        //     filename: 'css/[name]-[contenthash:8].css',
        //     disable: false,
        //     allChunks: true
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     filename: 'js/[name]-[hash:8].js',
        //     names: ['vendors']
        // }),
        new FilterWarningsPlugin({
            exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:8].css',
            chunkFilename: "css/[id].[contenthash:8].css"
        })
    ]
})
