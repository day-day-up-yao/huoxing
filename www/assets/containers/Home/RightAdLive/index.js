import React, { useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import './index.scss'
import { loginShowHide } from 'multiRedux/actions/login'
import { homeLiveVerifyPopupShow } from 'multiRedux/actions/home'
import { mixUrl } from 'multiPublic/index'
import { getRoomLiveList } from '../../../redux/actions/live'
import btnIcon from '../../ImLiveList/Image/im-live-add.png'

export default () => {
    const { userInfo } = useSelector((state) => ({
        userInfo: state.login.userInfo.info
    }), shallowEqual)
    const dispatch = useDispatch()

    // 点击按钮事件
    const onBtnClick = useCallback(
        () => {
            if (!userInfo.passportId) {
                dispatch(loginShowHide('account', true))
                return
            }

            if ((userInfo.realAuth && parseInt(userInfo.realAuth) === 1) || (userInfo.faceAuth && parseInt(userInfo.faceAuth) === 1)) {
                dispatch(getRoomLiveList({ passportId: userInfo.passportId, adminCreateFlag: 0, main: true })).then((res) => {
                    if (res.code === 1) {
                        const list = res.obj.inforList
                        let roomId = -1
                        for (let i = 0; i < list.length; i++) {
                            const element = list[i]
                            if (element.status !== 2) {
                                roomId = element.roomId
                                break
                            }
                        }

                        if (roomId === -1) {
                            window.location.href = mixUrl.main(`/live/start`)
                        } else {
                            window.location.href = mixUrl.main(`/live/control/${roomId}`)
                        }
                    }
                }).catch(function (err) {
                    throw err
                })
            } else {
                dispatch(homeLiveVerifyPopupShow(true))
            }
        },
        [userInfo]
    )

    return (
        <div className="home-right-ad-live" onClick={() => { onBtnClick() }}>
            <img className="home-right-ad-live-img" src={btnIcon} />
        </div>
    )
}
