const ipServer = () => {
    const os = require('os')
    const interfaces = os.networkInterfaces()
    for (let devName in interfaces) {
        const iface = interfaces[devName]
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i]
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address
            }
        }
    }
}
const ipClient = () => {
    return window.location.host.split(':')[0]
}

const env = typeof process.env.NODE_ENV !== 'undefined' ? process.env.NODE_ENV : false

// 注(1): 热替换服务端暂时未实现先注释

/** @Desc 后端调试在chrome中输入: chrome://inspect 然后单击Remote Target下的inspect */
/** @Desc 安装多系统共享组件: npm install --save gitlab:leonchou/multiAppSharing。此处建议使用npm换用淘宝源（废弃）。暂时用gulp拷贝 */
/** @Desc 配置环境变量取值：config、configDB、server/render/render.js、multiPublic/index.js、webpack-config、Layout/Header/Navigation */

/**
 * @Desc 服务端配置用到publicPath：
 * webpack前端资源路径
 * layout.js的css+js路径
 * */

const publicPathTest = 'www.marslib.com'
const publicPathPrd = 'www.huoxing24.com'
const apiHostTest = 'api.marslib.com'
const apiHostPrd = 'api.marstelegram.com'
// race.huoxing24.com, publicChainRrank接口有自有项目接口和火星财经借口主要新闻快讯
const hxHostTest = 'api.marslib.com'
const hxHostPrd = 'api.huoxing24.com'
/** @Desc Defi数据api接口地址 */
const apiDomain = 'www.oklink.com'
/** @Desc element接口地址 */
const apiElementPrd = 'java-biz-s1.element.lan'

let config = {
    ip: (port) => `http://${typeof window !== 'undefined' ? ipClient() : ipServer()}:${port}`,
    webpackPort: 8066, // webpack服务端口
    serverPort: 3014 // 网站服务端口
}
if (env === 'development') {
    config = Object.assign(
        config,
        {
            publicPath: config.ip(config.webpackPort),
            // apiHost: `http://${apiHostTest}`,
            apiHost: `https://${apiHostPrd}`,
            apiDomain: `https://${apiDomain}`,
            hxHost: `https://${hxHostTest}`,
            elementPrd: `http://${apiElementPrd}:8000`
        }
    )
}

if (env === 'test') {
    config = Object.assign(
        config,
        {
            // publicPath: config.ip(config.serverPort), // localTest test时使用这个地址
            // publicPath: `http://${publicPathTest}`,
            publicPath: ``,
            apiHost: `https://${apiHostPrd}`,
            apiDomain: `https://${apiDomain}`,
            hxHost: `https://${hxHostTest}`,
            elementPrd: `http://${apiElementPrd}:8000`
        }
    )
}

if (env === 'production') {
    config = Object.assign(
        config,
        {
            // publicPath: config.ip(config.serverPort), // localTest production时使用这个地址
            // publicPath: `https://${publicPathPrd}`,
            publicPath: ``,
            apiHost: `https://${apiHostPrd}`,
            apiDomain: `https://${apiDomain}`,
            hxHost: `https://${hxHostPrd}`,
            elementPrd: `http://${apiElementPrd}:8000`
        }
    )
}

module.exports = config
