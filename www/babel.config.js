const path = require('path')
const STATIC_PATH = path.resolve(path.resolve(process.cwd()), 'static')
const MULTI_PATH = path.resolve(path.resolve(process.cwd()), '_multiappsharing')

module.exports = function (api) {
    if (api) {
        api.cache(true)
    }
    return {
        compact: false,
        ignore: [/node_modules\/(?!multiAppSharing)/],
        presets: [
            '@babel/preset-react',
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['last 10 versions', 'ie >= 11'],
                        node: 'current'
                    }
                }
            ]
        ],
        plugins: [
            '@loadable/babel-plugin',
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            ['@babel/plugin-proposal-decorators', { 'legacy': true }],
            ['@babel/plugin-proposal-class-properties', { 'loose': true }],
            [
                'module-resolver',
                {
                    cwd: 'babelrc',
                    root: ['./'],
                    alias: {
                        '/static': STATIC_PATH,
                        'multiPublic': path.join(MULTI_PATH, '/public'),
                        'multiComps': path.join(MULTI_PATH, '/components'),
                        'multiCompsM': path.join(MULTI_PATH, '/components-m'),
                        'multiRedux': path.join(MULTI_PATH, '/redux')
                    }
                }
            ]
        ]
    }
}
