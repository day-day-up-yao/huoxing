const env = process.env.NODE_ENV
const folderAddressTest = 'news.marslib.com'
const folderAddressPrd = 'news.huoxing24.com'

/** @desc 测试服 */
let redisIp = '8.210.39.220' // 开发环境使用外网地址
if (env === 'test') redisIp = '172.16.20.169' // 测试服使用内网地址
let config = {
    redisIp: redisIp, // 微信分享缓存服务器IP
    redisPsd: 'KN9YMBSeKJ4oKl0', // 微信分享缓存服务器Password
    loadableStatsOutputPath: `/data/www/${folderAddressTest}/node/server/build`, // localTest test 时注释此段
    sshServer: [ // 部署ssh服务器
        {
            config: {
                host: '8.210.39.220',
                port: 22,
                username: 'root',
                password: 'l8.LuQrR7xXtQM',
                readyTimeout: 200000
            },
            logs: 'deploy',
            path: `/data/www/${folderAddressTest}/node/publish.zip`,
            // shell: [`cd /data/node_site/${urlTest}`, 'unzip -o publish.zip', 'npm run pm2Test', 'rm -f publish.zip']
            shell: ['']
        }
    ]
}

/** @desc 正式服 */
if (env === 'production') {
    config = {
        redisIp: 'r-j6cwzd7dvux3iybidepd.redis.rds.aliyuncs.com', // 外网IP:39.105.139.238
        redisPsd: 'Qwe123KN9YMB',
        loadableStatsOutputPath: `/data/node_site/${folderAddressPrd}/node/server/build`, // localTest production 时注释此段
        sshServer: [
            {
                config: {
                    host: '39.102.95.60',
                    port: 22,
                    username: 'root',
                    password: '12>R_%Y)5V#.UL',
                    readyTimeout: 200000
                },
                logs: 'deploy',
                path: `/data/node_site/${folderAddressPrd}/node/publish.zip`,
                // shell: [`cd /data/node_site/${urlPed}`, 'unzip -o publish.zip', 'npm run pm2Test', 'rm -f publish.zip']
                shell: ['']
            }, {
                config: {
                    host: '39.102.93.110',
                    port: 22,
                    username: 'root',
                    password: '12>R_%Y)5V#.UL',
                    readyTimeout: 200000
                },
                logs: 'deploy',
                path: `/data/node_site/${folderAddressPrd}/node/publish.zip`,
                // shell: [`cd /data/node_site/${urlPed}`, 'unzip -o publish.zip', 'npm run pm2Test', 'rm -f publish.zip']
                shell: ['']
            }
        ]
    }
}

module.exports = config
