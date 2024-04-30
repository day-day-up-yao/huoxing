import Router from 'express-promise-router'
import https from 'https'
import render from '../render/render'

import { mixUrl } from 'multiPublic/index'
import TLSSigAPIv2 from './imLive/TLSSigAPIv2'

const router = new Router()

router.get('*', render)

router.get('/newsdetailShare/:newsId', async function (req, res, next) {
    res.redirect(301, mixUrl.news(`/${req.params.newsId}`))
})

router.get('/authorCenter/:authorId', async function (req, res, next) {
    res.redirect(301, mixUrl.m(`/authorCenter/${req.params.authorId}`))
})

router.get('/news/:useTypeId', async function (req, res, next) {
    res.redirect(301, mixUrl.news(`/list/${req.params.useTypeId}`))
})

router.get('/newsdetail/:newsId', async function (req, res, next) {
    res.redirect(301, mixUrl.news(`/${req.params.newsId}`))
})

router.get('/imlive/list', async function (req, res, next) {
    res.redirect(301, mixUrl.main(`/live`))
})

router.get(['/imlive/detail/:liveId', '/live:liveId'], async function (req, res, next) {
    res.redirect(301, mixUrl.main(`/live/${req.params.liveId}`))
})

router.get('/imlive/recommendlist', async function (req, res, next) {
    res.redirect(301, mixUrl.main(`/live/recommend`))
})

// router.get('/liveNewsDetail/:flashId', async function (req, res, next) {
//     res.redirect(301, mixUrl.news(`/flash/${req.params.flashId}`))
// })

// im-user-sig
router.get('/imusersig/:userId', async function (req, res, next) {
    const imSdkAppId = 1400383128
    const imSecretKey = '734e752d070bafe347a9831a18c451877273dc675b9a41b2c72fa2c89f93d3a7'
    const api = new TLSSigAPIv2.Api(imSdkAppId, imSecretKey)
    const sig = api.genUserSig(req.params.userId, 86400 * 180)
    res.send({ code: 1, msg: 'sig success', data: sig })

    // var sig = api.genPrivateMapKey('xiaojun', 86400 * 180, 10000, 255)
    // console.log('sig with userbuf ' + sig)
    // var sig = api.genPrivateMapKeyWithStringRoomID('xiaojun', 86400 * 180, '1000000040', 255)
})

router.get('/format', function (req, res, next) {
    let { imgUrl } = req.query

    let getImgP = (url) => new Promise((resolve, reject) => {
        let chunks = []
        let size = 0

        https.get(url, function (res) {
            if (!res) {
                reject(res)
                return
            }
            res.on('data', function (chunk) {
                chunks.push(chunk)
                size += chunk.length
            })
            res.on('end', function (err) {
                console.log(err)
                let data = Buffer.concat(chunks, size)
                let base64Img = data.toString('base64')
                resolve(base64Img)
            })
        })
    })

    getImgP(imgUrl).then((data) => {
        res.send(JSON.stringify({ imgUrl: `data:image/jpeg;base64,${data}` }))
    }).catch(() => {
        res.send(JSON.stringify({ imgUrl: '' }))
    })
})

router.get('/test', async function (req, res, next) {
    const test = await new Promise(function (resolve, reject) {
        resolve({ name: 'test' })
    })

    console.log(test)
    res.send(test)
})

export default router
