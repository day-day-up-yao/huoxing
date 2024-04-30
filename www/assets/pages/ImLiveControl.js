import React, { Component } from 'react'
import loadable from '@loadable/component'
import Cookies from 'js-cookie'

import { getRoomLiveList, getNowControlRoom } from '../redux/actions/live'
import { cookiesName, mixUrl } from 'multiPublic'

const ImLiveControl = loadable(() => import('../containers/ImLiveControl'))

export default class ImLiveControlPage extends Component {
    static async getInitialProps (context) {
        const { store, match, isServer, req, res } = context
        const passportId = isServer ? req.cookies[cookiesName.passportId] : Cookies.get(cookiesName.passportId)
        if (!passportId) {
            res.redirect(mixUrl.main(`/live`), req)
            return { customRes: true }
        }

        let tdk = {
            title: '',
            description: ''
        }

        const roomId = match.params.roomId
        const liveListData = await store.dispatch(getRoomLiveList({ passportId: passportId, adminCreateFlag: 0, main: true, req: req }))
        if (liveListData.code === 1) {
            const liveList = liveListData.obj.inforList
            let isHave = -1
            for (let i = 0; i < liveList.length; i++) {
                const element = liveList[i]
                if (parseInt(element.roomId) === parseInt(roomId) && parseInt(element.status) !== 2) {
                    isHave = i
                    break
                }
            }

            if (isHave !== -1) {
                store.dispatch(getNowControlRoom(liveList[isHave]))
                tdk = {
                    title: liveList[isHave].name,
                    description: liveList[isHave].brief.replace(/<[^<>]+>/g, '').replace(/&nbsp;/ig, '')
                }
            } else {
                res.redirect(mixUrl.main(`/live`))
                return { customRes: true }
            }
        } else {
            throw Error(liveListData.msg)
        }

        return {
            clientLink: 'onlyPc',
            cookies: req.cookies,
            ...tdk
        }
    }

    render () {
        return <ImLiveControl {...this.props} />
    }
}
