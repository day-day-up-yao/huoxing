import React, { Component } from 'react'
import loadable from '@loadable/component'
import Cookies from 'js-cookie'

import { getNewsDetails } from '../redux/actions/news'
import { cookiesName, mixUrl } from 'multiPublic/index'
import { getAuthorInfo } from 'multiRedux/actions/news'
// import icon from '../../static/resource/images/huoxing24.png'

const NewsDetail = loadable(() => import('../containers-m/News'))

export default class DetailsPage extends Component {
    static async getInitialProps (context) {
        const { store, res, req, history, isServer, match } = context
        // console.log(req.hostname)
        const newsId = match.params.newsId
        // 百度 搜索跳转到首页--2020/7/3--后期可删除
        if (newsId === '20200305094124968744') {
            res.redirect(mixUrl.main())
            return { customRes: true }
        }
        if (!newsId) {
            isServer ? res.redirect('/') : history.push('/')
            return { customRes: true }
        }
        // 获取passportId, token
        const passportId = isServer ? req.cookies[cookiesName.passportId] : Cookies.get(cookiesName.passportId)
        const token = isServer ? req.cookies[cookiesName.token] : Cookies.get(cookiesName.token)
        let params = { id: newsId, req: req }
        if (passportId) {
            params = {
                id: newsId,
                passportId: passportId,
                token: token,
                req: req
            }
        }
        let returnData = {
            clientLink: mixUrl.news(`/${match.params.newsId}.html`, req),
            title: '',
            description: '',
            keywords: '',
            twettericon: ''
        }
        await Promise.all([
            store.dispatch(getNewsDetails(params))
        ]).then(function (response) {
            const resDetails = response[0]
            if (resDetails.code === 1) {
                const details = resDetails.obj.current
                returnData.title = `${details.title}_MarsBit`
                returnData.description = `${details.synopsis}来源于MarsBit专栏作家${details.author}`
                returnData.keywords = details.tags
                const htmlinnfo = decodeURIComponent(resDetails.obj.current.content)
                const imglist = htmlinnfo.match(/<img.*?>/g)
                if (imglist) {
                    const imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1]
                    returnData.twettericon = imgurl
                }

                store.dispatch(getAuthorInfo({
                    passportId: resDetails.obj.current.createdBy,
                    myPassportId: passportId || '',
                    req: req
                }))
            }
            // 未查询到记录跳转到404页面
            if (resDetails.code === -1) {
                res.render('error', {
                    message: resDetails.msg || '新闻详情查询错误',
                    error: {
                        status: 200,
                        stack: JSON.stringify(resDetails)
                    }
                })
                returnData = { customRes: true }
            }
        }).catch(function (err) {
            throw new Error(err)
        })
        return returnData
    }

    render () {
        return <NewsDetail {...this.props} />
    }
}
