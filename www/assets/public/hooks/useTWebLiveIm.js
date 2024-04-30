import { useState, useCallback } from 'react'
import axios from 'axios'
import TIM from 'tim-js-sdk'
// import { imSdkAppId } from '../../../config/config-server'

export default () => {
    const [im, setIm] = useState(null)
    const [imReady, setImReady] = useState(false)
    const [imLogin, setImLogin] = useState(false)
    const [imJoin, setImJoin] = useState(false)

    const createIM = useCallback((setTextMessageReceived) => {
        const TWebLive = require('tweblive')

        const im = TWebLive.createIM({
            SDKAppID: 1400383128
        })

        const onIMReady = function (event) {
            setImReady(true)
        }
        const onSdkNotReady = function (event) {
            console.log(`用户被NotReady触发`)
            setImReady(false)
        }
        // const onTextMessageReceived = function (event) {
        //     event.data.forEach(function (message) {
        //         console.log((message.from || message.nick) + ' : ', message.payload.text)
        //     })
        //     setTextMessageReceived(event)
        // }
        const onCustomMessageReceived = function (event) {
            console.log('custom message received', event.data)
            event.data.forEach(function (message) {
                console.log((message.from || message.nick) + ' : ', message.payload.text)
            })
            setTextMessageReceived(event)
        }
        const onRemoteUserJoin = function (event) {
            event.data.forEach(function (message) {
                console.log((message.nick || message.payload.userIDList[0]) + ' 来了')
            })
        }
        const onRemoteUserLeave = function (event) {
            event.data.forEach(function (message) {
                console.log((message.nick || message.payload.userIDList[0]) + ' 走了')
            })
        }
        const onKickedOut = function (event) {
            console.log(`用户被踢下线时触发`)
            console.log(event.data.type)
            // TWebLive.TYPES.KICKED_OUT_MULT_ACCOUNT(Web端，同一账号，多页面登录被踢)
            // TWebLive.TYPES.KICKED_OUT_MULT_DEVICE(同一账号，多端登录被踢)
            // TWebLive.TYPES.KICKED_OUT_USERSIG_EXPIRED(签名过期)
        }
        let onNetStateChange = function (event) {
            console.log(`网络状态发生改变`)
            console.log(event.data.state)
            // event.data.state 当前网络状态，枚举值及说明如下：
            // TWebLive.TYPES.NET_STATE_CONNECTED - 已接入网络
            // TWebLive.TYPES.NET_STATE_CONNECTING - 连接中。很可能遇到网络抖动，SDK 在重试。接入侧可根据此状态提示“当前网络不稳定”或“连接中”
            // TWebLive.TYPES.NET_STATE_DISCONNECTED - 未接入网络。接入侧可根据此状态提示“当前网络不可用”。SDK 仍会继续重试，若用户网络恢复，SDK 会自动同步消息
        }
        let onPushStopped = function (event) {
            console.log(`主播停止推流时触发`)
            console.log('postscript: ', event.data)
        }

        // 接入侧监听此事件，然后可调用 SDK 发送消息等
        im.on(TWebLive.EVENT.IM_READY, onIMReady)
        // 接入侧监听此事件，然后可调用 SDK 发送消息等
        im.on(TWebLive.EVENT.IM_NOT_READY, onSdkNotReady)
        // // 收到文本消息，上屏
        // im.on(TWebLive.EVENT.IM_TEXT_MESSAGE_RECEIVED, onTextMessageReceived)
        // // 收到自定义消息时触发
        // im.on(TWebLive.EVENT.IM_CUSTOM_MESSAGE_RECEIVED, onCustomMessageReceived)
        // 远程用户进入触发
        im.on(TWebLive.EVENT.IM_REMOTE_USER_JOIN, onRemoteUserJoin)
        // 远程用户离开触发
        im.on(TWebLive.EVENT.IM_REMOTE_USER_LEAVE, onRemoteUserLeave)
        // 远程用户离开
        im.on(TWebLive.EVENT.IM_KICKED_OUT, onKickedOut)
        // 网络状态改变
        im.on(TWebLive.EVENT.IM_NET_STATE_CHANGED, onNetStateChange)
        // 主播停止推流
        im.on(TWebLive.EVENT.IM_PUSH_STOPPED, onPushStopped)
        // tweblive不能接收到系统消息，通过tim接收
        im._tim.on(TIM.EVENT.MESSAGE_RECEIVED, onCustomMessageReceived)

        setIm(im)
    }, [])

    const getImLogin = useCallback(async (passportId) => {
        const sigRes = await axios({ url: `/imusersig/${passportId}` })

        // 2、登录
        // im.registerPlugin({ 'cos-js-sdk': COS })
        im.login({ userID: passportId, userSig: sigRes.data.data }).then((imResponse) => {
            console.log('im.login')
            console.log('登录成功')
            console.log(imResponse) // 登录成功
            // if (imResponse.data.repeatLogin === true) {
            //     // 标识账号已登录，本次登录操作为重复登录
            //     console.log(imResponse.data.errorInfo)
            // }
            setImLogin(true)
        }).catch((imError) => {
            console.log('登录失败')
            console.warn('im | login | failed', imError) // 登录失败的相关信息
            setImLogin(false)
        })
    }, [im])

    const joinImRoom = useCallback((roomId) => {
        const TWebLive = require('tweblive')

        if (im.enterRoom) {
            // 3、加入直播间
            im.enterRoom(roomId).then((imResponse) => {
                console.log(imResponse.data)
                switch (imResponse.data.status) {
                    case TWebLive.TYPES.ENTER_ROOM_SUCCESS: // 加入直播间成功
                        console.log('成功加入直播间')
                        setImJoin(true)
                        break
                    case TWebLive.TYPES.ALREADY_IN_ROOM: // 已经在直播间内
                        console.log('已经在直播间里')
                        setImJoin(true)
                        break
                    default:
                        setImJoin(false)
                        break
                }
            }).catch((imError) => {
                console.warn('im | enterRoom | failed', imError) // 加入直播间失败的相关信息
                setImJoin(false)
            })
        }
    }, [im])

    return {
        imReady,
        imLogin,
        imJoin,
        createIM,
        getImLogin,
        joinImRoom,
        setImLogin,
        setImJoin,
        im
    }
}
