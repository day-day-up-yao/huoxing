import React, { Component } from 'react'
import loadable from '@loadable/component'
import Cookies from 'js-cookie'

import { getRoomLiveList } from '../redux/actions/live'
import { cookiesName, webTdk, mixUrl } from 'multiPublic/index'

const ImLiveCreate = loadable(() => import('../containers/ImLiveCreate'))

export default class ImLiveCreatePage extends Component {
    static async getInitialProps (context) {
        const { store, isServer, req, res } = context
        const passportId = isServer ? req.cookies[cookiesName.passportId] : Cookies.get(cookiesName.passportId)
        const realAuth = isServer ? req.cookies[cookiesName.realAuth] : Cookies.get(cookiesName.realAuth)
        const faceAuth = isServer ? req.cookies[cookiesName.faceAuth] : Cookies.get(cookiesName.faceAuth)
        if (!passportId) {
            res.redirect(mixUrl.main(`/live`))
            return { customRes: true }
        }

        if (!((realAuth && parseInt(realAuth) === 1) || (faceAuth && parseInt(faceAuth) === 1))) {
            res.redirect(mixUrl.main(`/live`))
            return { customRes: true }
        }

        const liveListData = await store.dispatch(getRoomLiveList({ passportId: passportId, adminCreateFlag: 0, main: true, req: req }))
        if (liveListData.code === 1) {
            const liveList = liveListData.obj.inforList
            let isHave = -1
            for (let i = 0; i < liveList.length; i++) {
                const element = liveList[i]
                if (parseInt(element.status) !== 2) {
                    isHave = i
                    break
                }
            }

            if (isHave !== -1) {
                res.redirect(mixUrl.main(`/live/control/${liveList[isHave].roomId}`))
                return { customRes: true }
            }
        } else {
            throw Error(liveListData.msg)
        }

        return {
            clientLink: 'onlyPc',
            ...webTdk,
            title: 'MarsBit_直播频道_直播室_区块链直播_主题峰会_大咖面对面_开直播，上MarsBit',
            description: 'MarsBit Live，用视频连接区块链产业人物，做区块链行业最具价值的视频直播平台',
            keywords: 'MarsBit Live,MarsBit直播,区块链直播,行情直播,区块链对话'
        }
    }

    render () {
        return <ImLiveCreate {...this.props} />
    }
}
