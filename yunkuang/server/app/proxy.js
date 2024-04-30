import proxyMiddleware from 'http-proxy-middleware'
import querystring from 'querystring'
import { apiHost, apiDomain, apiMars, apiLoan, apiAsset, apiOld } from '../../config/config'

export default (app) => {
    const onError = (err, req, res) => {
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        })
        res.end(
            'Something went wrong. And we are reporting a custom error message.' + err
        )
    }
    const onProxyReq = (proxyReq, req, res) => {
        if (req.method.toLowerCase() === 'post' && req.body) {
            if (!req.body || !Object.keys(req.body).length) return

            const contentType = proxyReq.getHeader('Content-Type')
            const writeBody = (bodyData) => {
                proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
                proxyReq.write(bodyData)
            }

            if (contentType === 'application/json') {
                writeBody(JSON.stringify(req.body))
            }

            if (contentType === 'application/x-www-form-urlencoded') {
                writeBody(querystring.stringify(req.body))
            }
        }
    }

    const onProxyRes = (proxyRes, req, res) => {
        // const cookies = proxyRes.headers['set-cookie']
        // const cookieRegex = /Path=\/XXX\//i
        // // 修改cookie Path
        // if (cookies) {
        //     const newCookie = cookies.map(function (cookie) {
        //         if (cookieRegex.test(cookie)) {
        //             return cookie.replace(cookieRegex, 'Path=/')
        //         }
        //         return cookie
        //     })
        //     // 修改cookie path
        //     delete proxyRes.headers['set-cookie']
        //     proxyRes.headers['set-cookie'] = newCookie
        // }
    }

    const ucapiList = ['/api/common', '/mapi/user', '/mapi/file', '/ms_api', '/mapi/invitation', '/api/invitation']

    // cococoin接口代理
    app.use(ucapiList, proxyMiddleware({
        target: apiDomain,
        changeOrigin: true,
        ws: true,
        https: true,
        headers: {
            Referer: apiDomain
        },
        cookieDomainRewrite: '',
        onError,
        onProxyReq,
        onProxyRes
    }))

    const otherapiList = ['/mapi/asset', '/mapi/account', '/mapi/payment', '/mapi/v1', '/api/quote']

    // 资产，账户接口代理
    app.use(otherapiList, proxyMiddleware({
        target: apiAsset,
        changeOrigin: true,
        ws: true,
        https: true,
        headers: {
            Referer: apiAsset
        },
        cookieDomainRewrite: '',
        onError,
        onProxyReq,
        onProxyRes
    }))

    // 云矿接口代理
    app.use(['/v1/hashrate'], proxyMiddleware({
        target: apiHost,
        changeOrigin: true,
        ws: true,
        https: true,
        headers: {
            Referer: apiHost
        },
        cookieDomainRewrite: '',
        onError,
        onProxyReq,
        onProxyRes
    }))

    // 借贷和算力质押贷接口代理
    app.use(['/v1/loan', '/v1/hr-loan'], proxyMiddleware({
        target: apiLoan,
        changeOrigin: true,
        ws: true,
        https: true,
        headers: {
            Referer: apiLoan
        },
        cookieDomainRewrite: '',
        onError,
        onProxyReq,
        onProxyRes
    }))

    // 财经借口代理
    app.use(['/info', '/market'], proxyMiddleware({
        target: apiMars,
        changeOrigin: true,
        ws: true,
        https: true,
        headers: {
            Referer: apiMars
        },
        cookieDomainRewrite: '',
        onError,
        onProxyReq,
        onProxyRes
    }))

    // 老接口云矿
    app.use(['/v1/mfi', '/v1/cbb'], proxyMiddleware({
        target: apiOld,
        changeOrigin: true,
        ws: true,
        https: true,
        headers: {
            Referer: apiOld
        },
        cookieDomainRewrite: '',
        onError,
        onProxyReq,
        onProxyRes
    }))
}
