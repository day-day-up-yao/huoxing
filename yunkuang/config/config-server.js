const env = process.env.NODE_ENV
const isJp = process.env.NODE_LANG && process.env.NODE_LANG === 'jp'

const folderAddressTest = isJp ? 'www.mclouds.jp' : 'www.mclouds.io'
const folderAddressPrd = isJp ? 'www.mclouds.jp' : 'www.mclouds.io'

/** @desc 测试服 */
let redisIp = '47.95.247.211' // 开发环境使用外网地址
if (env === 'test') redisIp = '172.17.156.165' // 测试服使用内网地址
let config = {
    redisIp: redisIp, // 微信分享缓存服务器IP
    redisPsd: 'KN9YMBSeKJ4oKl0', // 微信分享缓存服务器Password
    loadableStatsOutputPath: `/data/website/${folderAddressTest}/node/server/build`, // localTest test 时注释此段
}

/** @desc 正式服 */
if (env === 'production') {
    config = {
        redisIp: '172.17.156.129', // 外网IP:39.105.139.238
        redisPsd: 'Qwe123KN9YMB',
        // loadableStatsOutputPath: `/home/ubuntu/website/${folderAddressPrd}/node/server/build` // localTest production 时注释此段
        loadableStatsOutputPath: `/data/website/${folderAddressPrd}/node/server/build` // localTest production 时注释此段
    }
}

module.exports = config
