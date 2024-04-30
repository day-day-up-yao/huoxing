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
const isJp = process.env.NODE_LANG && process.env.NODE_LANG === 'jp'

// 注(1): 热替换服务端暂时未实现先注释

/** @Desc 后端调试在chrome中输入: chrome://inspect 然后单击Remote Target下的inspect */
/** @Desc 安装多系统共享组件: npm install --save gitlab:leonchou/multiAppSharing。此处建议使用npm换用淘宝源（废弃）。暂时用gulp拷贝 */
/** @Desc 配置环境变量取值：config、configDB、server/render/render.js、multiPublic/index.js、webpack-config、Layout/Header/Navigation */

/**
 * @Desc 服务端配置用到publicPath：
 * webpack前端资源路径
 * layout.js的css+js路径
 * */

// mclouds老接口地址
const apiOldTest = env === 'test' ? '172.16.1.106:8890' : '161.189.15.170:8890'
const apiOldPrd = 'www.mclouds.io'

// mclouds接口地址
const apiHostTest = env === 'test' ? '172.16.1.106:8888' : '161.189.15.170:8888'
// const apiHostTest = 'www.mclouds.io/mine'
// const apiHostPrd = '10.16.38.240:9080'
const apiHostPrd = 'www.mclouds.io'

// 资产账户接口地址
const apiAssetTest = env === 'test' ? '172.16.1.106:8180' : '161.189.15.170:8180'
// const apiAssetTest = 'www.mclouds.io/wallet'
// const apiAssetTest = '10.0.8.205:8180' // 本地调试IP
const apiAssetPrd = 'www.mclouds.io'

// UC接口地址
// const apiDomainTest = '10.0.8.53:8098' // 后台本地
const apiDomainTest = env === 'test' ? '172.16.1.106:8098' : '161.189.15.170:8098'
// const apiDomainTest = 'www.mclouds.io/uc'
const apiDomainPrd = 'www.mclouds.io'
const apiLoanTest = 'borrow-api.mclouds.io'
const apiLoanPrd = 'borrow-api.mclouds.io'

// 财经接口地址
const apiMarsTest = 'www.huoxing24.com'
const apiMarsPrd = 'www.huoxing24.com'

// 静态资源服务器
const publicPathTest = 'mclouds.marslib.com'
const publicPathPrd = 'mclouds.marsbit.io/static'
const publicPathTestJp = 'mcloudsjp.marslib.com'
const publicPathPrdJp = 'www.mclouds.jp'

// 前端访问域名
const domainTest = 'mclouds.marslib.com'
const domainPrd = 'www.mclouds.io'
const domainTestJp = 'mcloudsjp.marslib.com'
const domainPrdJp = 'www.mclouds.jp'

let config = {
    idRsaPath: '/Users/zhoushuanglong/.ssh/id_rsa',
    // idRsaPath: path.join(process.cwd(), '../', 'id_rsa_1024.pub'),
    // idRsaPsd: 'yaohong',
    ip: (port) => `http://${typeof window !== 'undefined' ? ipClient() : ipServer()}:${port}`,
    webpackPort: isJp ? 8028 : 8026, // webpack服务端口
    serverPort: isJp ? 3028 : 3026 // 网站服务端口
}
if (env === 'development') {
    config = Object.assign(config, {
        domain: config.ip(config.serverPort).split('http://')[1],
        publicPath: config.ip(config.webpackPort),
        apiHost: `http://${apiHostTest}`,
        apiDomain: `http://${apiDomainTest}`,
        apiMars: `https://${apiMarsTest}`,
        apiLoan: `https://${apiLoanTest}`,
        apiAsset: `http://${apiAssetTest}`,
        apiOld: `http://${apiOldTest}`
    })
}

if (env === 'test') {
    config = Object.assign(config, {
        domain: isJp ? domainTestJp : domainTest,
        // publicPath: config.ip(config.serverPort), // localTest test时使用这个地址
        publicPath: ``,
        // publicPath: `http://${isJp ? publicPathTestJp : publicPathTest}`,
        apiHost: `http://${apiHostTest}`,
        apiDomain: `http://${apiDomainTest}`,
        apiMars: `https://${apiMarsTest}`,
        apiLoan: `https://${apiLoanTest}`,
        apiAsset: `http://${apiAssetTest}`,
        apiOld: `http://${apiOldTest}`
    })
}

if (env === 'production') {
    config = Object.assign(config, {
        domain: isJp ? domainPrdJp : domainPrd,
        // publicPath: config.ip(config.serverPort), // localTest production时使用这个地址
        publicPath: `https://${isJp ? publicPathPrdJp : publicPathPrd}`,
        apiHost: `https://${apiHostPrd}`,
        apiDomain: `https://${apiDomainPrd}`,
        apiMars: `https://${apiMarsPrd}`,
        apiLoan: `https://${apiLoanPrd}`,
        apiAsset: `https://${apiAssetPrd}`,
        apiOld: `https://${apiOldPrd}`
    })
}

module.exports = config
