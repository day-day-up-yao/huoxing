// const fs = require('fs')
const env = process.env.NODE_ENV
const isJp = process.env.NODE_LANG && process.env.NODE_LANG === 'jp'

const folderAddressPrd = isJp ? 'www.mclouds.jp' : 'www.mclouds.io'
const { idRsaPsd } = require('./config')
let config = {
    sshServer: [ // 部署ssh服务器
        {
            config: {
                host: '182.92.213.215',
                port: 22,
                username: 'root',
                password: 'l8.LuQrR7xXtQM',
                readyTimeout: 200000
            },
            logs: 'deploy',
            // path: `/data/node/${folderAddressTest}/node/publish.zip`,
            path: `/data/website/${folderAddressPrd}/node/server/build`,
            shell: ['']
        }
    ]
}

// 打包的时候执添加sshServer属性
if (env === 'production' && process.env.NODE_BUILD_PRD === 'production') {
    const serverStatic = {
        host: '39.105.67.14',
        port: 22,
        username: 'root',
        password: 'l8.LuQrR7xXtQM',
        readyTimeout: 200000
    }

    const serverOne = {
        host: '18.182.146.14',
        port: 22,
        username: 'ubuntu',
        // privateKey: fs.readFileSync(idRsaPath),
        readyTimeout: 200000
    }
    const serverTwo = {
        host: '13.231.100.233',
        port: 22,
        username: 'ubuntu',
        // privateKey: fs.readFileSync(idRsaPath),
        readyTimeout: 200000
    }
    if (idRsaPsd) {
        serverOne.passphrase = idRsaPsd
        serverTwo.passphrase = idRsaPsd
    }

    config.sshServer = [
        {
            config: serverOne,
            logs: 'deploy',
            path: `/data/website/${folderAddressPrd}/node/publish.zip`,
            // path: `/data/node_site/${folderAddressPrd}/node/publish.zip`,
            shell: ['']
        }, {
            config: serverTwo,
            logs: 'deploy',
            // path: `/data/node_site/${folderAddressPrd}/node/publish.zip`,
            path: `/data/website/${folderAddressPrd}/node/publish.zip`,
            shell: ['']
        }
    ]

    if (!isJp) {
        config.sshServerStatic = [
            {
                config: serverStatic,
                logs: 'deploy',
                path: `/data/website/${folderAddressPrd}/static/static.zip`,
                shell: ['']
            }
        ]
    }
}

module.exports = config
