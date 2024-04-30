import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'

import useTWebLivePlayer from '../../../public/hooks/useTWebLivePlayer'
import useTWebLiveIm from '../../../public/hooks/useTWebLiveIm'
import { getRoomByID } from '../../../redux/actions/live'
import { isArray, uuid } from 'multiPublic'

import './index.scss'

export default () => {
    const { room, userInfo } = useSelector((state) => ({
        room: state.live.room,
        userInfo: state.login.userInfo.info
    }), shallowEqual)
    const [style, setStyle] = useState({ paddingTop: '0' })
    const {
        player,
        setMutedBtnShow,
        mutedBtnShow
    } = useTWebLivePlayer({ elementID: 'id_test_video' })
    const dispatch = useDispatch()
    const timeImLogin = useRef()
    const timeImJoin = useRef()

    const onTextMessageReceived = (event) => {
        if (!event || !event.data || !isArray(event.data)) return
        event.data.map((elementItem) => {
            if (!elementItem.type) return
            switch (elementItem.type) {
                case 'TIMGroupSystemNoticeElem':
                    if (!elementItem.payload) return
                    if (elementItem.payload.operationType && elementItem.payload.operationType === 5) {
                        // 直播间直播结束（群被解散）
                        dispatch(getRoomByID({ roomId: room.roomId }))
                        setImJoin(false)
                    }
                    break
                default:
                    break
            }
        })
    }

    const { createIM, getImLogin, joinImRoom, setImJoin, im, imReady, imLogin, imJoin } = useTWebLiveIm()

    // 创建直播间
    useEffect(() => {
        if (room.status !== 1) return
        createIM(onTextMessageReceived)
    }, [room.status])

    // 登录
    useEffect(() => {
        if (!im) return
        // 未登录下用 uuid md5 取第8-24位
        const passportId = !userInfo.passportId ? md5(uuid()).substring(7, 23) : userInfo.passportId
        getImLogin(passportId)
    }, [im, userInfo])
    // 加入聊天室
    useEffect(() => {
        if (timeImLogin.current) {
            clearInterval(timeImLogin.current)
            timeImLogin.current = null
        }

        if (imReady) {
            if (!imLogin && room.status === 1) {
                timeImLogin.current = setInterval(() => {
                    // 未登录下用 uuid md5 取第8-24位
                    const passportId = !userInfo.passportId ? md5(uuid()).substring(7, 23) : userInfo.passportId
                    getImLogin(passportId)
                }, 10000)
            } else {
                clearInterval(timeImLogin.current)
                timeImLogin.current = null
                joinImRoom(room.roomId)
            }
        }

        return () => {
            clearInterval(timeImLogin.current)
        }
    }, [imReady, imLogin, userInfo, room.status])
    // 掉线后循环请求加入
    useEffect(() => {
        if (timeImJoin.current) {
            clearInterval(timeImJoin.current)
            timeImJoin.current = null
        }
        if (!imJoin && room.status === 1) {
            timeImJoin.current = setInterval(() => {
                joinImRoom(room.roomId)
            }, 10000)
        } else {
            clearInterval(timeImJoin.current)
            timeImJoin.current = null
        }

        return () => {
            clearInterval(timeImJoin.current)
            timeImJoin.current = null
        }
    }, [room.status, imJoin])

    useEffect(() => {
        const timer = setInterval(() => {
            if (typeof window !== 'undefined' && player) {
                setStyle(videoStyle())
                clearInterval(timer)
            }
        }, 200)
        return () => {
            clearInterval(timer)
        }
    }, [player])
    const videoStyle = useCallback(() => {
        // 1是obs推流，0是手机
        if (room.roomType === 0) return { width: '57%', margin: '0 auto' }
        if (room.roomType === 1) return { paddingTop: '0' }
    }, [room.roomType])
    return <div className="live-share-live-video-m">
        <div className="video-wrapper" style={{ ...style }}>
            <div id="id_test_video" className={`${room && room.roomType === 0 ? 'vertical' : 'horizontal'}`}></div>
            <div className={`click-cancel-muted ${room && room.roomType === 0 ? 'mobile' : 'pc'}` } style={{ display: mutedBtnShow ? 'block' : 'none' }} onClick={() => {
                if (!player) return
                setMutedBtnShow(false)
            }}>
                <button>点击取消静音</button>
            </div>
        </div>
    </div>
}
