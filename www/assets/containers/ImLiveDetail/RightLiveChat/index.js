import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'
import { useTranslation } from 'react-i18next'

import './index.scss'

import { trim, isArray, uuid, elementOffset } from 'multiPublic'
import { loginShowHide, renameShowHide } from 'multiRedux/actions/login'
import { liveComentSend, getRoomByID } from '../../../redux/actions/live'
import ImLiveChatItem from '../../../components/ImLiveDetail/ImLiveChatItem'
import RightLiveBoxTitle from '../../../components/ImLiveDetail/RightLiveBoxTitle'
import useTWebLiveIm from '../../../public/hooks/useTWebLiveIm'
import noLiveIcon from '../Image/live_chat_nolive.png'
import liveGather from '../../../public/hooks/useLiveGather'
// import { commentStyle } from '../../../public/hooks/useTWebLivePlayer'
import Toast from 'multiComps/Toast'

export default () => {
    const livePush = liveGather()

    const { t } = useTranslation()

    const { room, userInfo, roomHistoryList } = useSelector((state) => ({
        room: state.live.room,
        roomHistoryList: state.live.roomHistoryList,
        userInfo: state.login.userInfo.info
    }), shallowEqual)
    // console.log(roomHistoryList, 2222)
    const dispatch = useDispatch()
    const [listData, setListData] = useState([])
    const [isClickChat, setIsClickChat] = useState(0)
    const curWordsNum = useRef()
    const textArea = useRef()
    const listScroll = useRef()
    const timeImLogin = useRef()
    const timeImJoin = useRef()

    // 发送弹幕
    // const sendDamu = useCallback((val) => {
    //     if (!window.livePlayer) return
    //     window.livePlayer.danmu.sendComment({
    //         mode: 'scroll',
    //         duration: 15000,
    //         id: uuid(),
    //         txt: val,
    //         style: commentStyle
    //     })
    // }, [])

    // console.log(listData)

    // 监听聊天室新信息
    const onTextMessageReceived = (event) => {
        if (!event || !event.data || !isArray(event.data)) return
        event.data.map((elementItem) => {
            if (!elementItem.type) return
            switch (elementItem.type) {
                case 'TIMCustomElem':
                    if (!elementItem.payload || !elementItem.payload.data) return
                    let cmd = JSON.parse(elementItem.payload.data).cmd
                    if (cmd === 'CustomTextMsg') {
                        if (!elementItem._elements || !isArray(elementItem._elements)) return
                        let obj = { type: 0 }
                        elementItem._elements.map((item) => {
                            if (item.type === 'TIMCustomElem') {
                                let data = JSON.parse(item.content.data).data
                                obj.nick = data.nickName
                                obj.msgId = data.msgId

                                let presenterList = !room.presenterList ? [] : room.presenterList
                                presenterList.map((presenterItem) => {
                                    if (data.passportId === presenterItem.passportId) {
                                        obj.type = 1
                                    }
                                })

                                let guestList = !room.guestList ? [] : room.guestList
                                guestList.map((guesItem) => {
                                    if (data.passportId === guesItem.passportId) {
                                        obj.type = 2
                                    }
                                })
                            } else if (item.type === 'TIMTextElem') {
                                obj.text = item.content.text
                            } else {
                                console.log('====================================')
                                console.log(`新的类型参数：${item}`)
                                console.log('====================================')
                            }
                        })

                        setChatItem(obj)
                        // sendDamu(obj.text)
                    }
                    break
                case 'TIMGroupSystemNoticeElem':
                    if (!elementItem.payload) return
                    if (elementItem.payload.userDefinedField && elementItem.payload.userDefinedField !== '') {
                        let userDefinedField = JSON.parse(elementItem.payload.userDefinedField)
                        let cmd = userDefinedField.cmd

                        // 删除评论
                        if (cmd === 'delMsgHx' && userDefinedField.data && userDefinedField.data.msgId) {
                            delChatItem(userDefinedField.data.msgId)
                        }

                        // 禁言
                        if (cmd === 'forbidMsgHx' && userDefinedField.data && userDefinedField.data.passportId && userDefinedField.data.content) {
                            if (userInfo.passportId && userInfo.passportId === userDefinedField.data.passportId) {
                                setChatItem({ type: 99, text: userDefinedField.data.content })
                            }
                        }
                    } else if (elementItem.payload.operationType && elementItem.payload.operationType === 5) {
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

    useEffect(() => {
        let status = room.status ? room.status : 0
        switch (status) {
            case 0:
                setIsClickChat(1)
                break
            case 1:
                setIsClickChat(0)
                break
            case 2:
                setIsClickChat(1)
                break
            default:
                break
        }
    }, [room])

    // 加载回放中历史聊天记录
    useEffect(() => {
        if (room.status === 0) return
        if (roomHistoryList && isArray(roomHistoryList) && roomHistoryList.length > 0) {
            setListData([])
            roomHistoryList.map((item) => {
                let obj = {
                    nick: item.nickName,
                    text: item.content,
                    type: 0
                }

                let presenterList = !room.presenterList ? [] : room.presenterList
                presenterList.map((presenterItem) => {
                    if (item.passportId === presenterItem.passportId) {
                        obj.type = 1
                    }
                })

                let guestList = !room.guestList ? [] : room.guestList
                guestList.map((guesItem) => {
                    if (item.passportId === guesItem.passportId) {
                        obj.type = 2
                    }
                })

                setChatItem(obj)
            })

            setTimeout(() => {
                listScroll.current.scrollIntoView(false) // 移动到列表底部
            }, 500)
        }
    }, [room, roomHistoryList])

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
        if (imReady === true && imLogin === true && imJoin === true) {
            setChatItem({ type: 98, text: '欢迎来到MarsBit直播间！直播间内严禁出现违法违规、低俗色情、吸烟酗酒等内容，若有违规行为请及时举报' })

            setTimeout(() => {
                listScroll.current.scrollIntoView(false) // 移动到列表底部
            }, 500)
        }
    }, [imReady, imLogin, imJoin])

    // 插入聊天
    const setChatItem = useCallback((data) => {
        let list = listData
        list.push(data)

        if (elementOffset(listScroll.current).bottom === 645) {
            setListData(JSON.parse(JSON.stringify(list)))
            listScroll.current.scrollIntoView(false) // 移动到列表底部
        } else {
            setListData(JSON.parse(JSON.stringify(list)))
            // console.log(JSON.parse(JSON.stringify(list)), 222)
        }
    }, [])

    // 删除聊天
    const delChatItem = useCallback(
        (msgId) => {
            let list = listData
            for (let i = 0; i < list.length; i++) {
                if (list[i].msgId && list[i].msgId === msgId) {
                    list.splice(i, 1)
                    break
                }
            }

            if (elementOffset(listScroll.current).bottom === 645) {
                setListData(JSON.parse(JSON.stringify(list)))
                listScroll.current.scrollIntoView(false) // 移动到列表底部
            } else {
                setListData(JSON.parse(JSON.stringify(list)))
            }
        },
        []
    )

    /** @desc 评论输入字数量 */
    const wordsNum = useCallback((event) => {
        const val = trim(event.target.value)
        if (val.length <= 100) {
            curWordsNum.current.innerText = val.length
        } else {
            event.target.value = val.substring(0, 100)
        }
    }, [])

    // 发送评论
    // im.sendCustomMessage() 由于存在自定义消息，故用系统发送消息办法
    const setAddChat = useCallback(async () => {
        if (!imJoin || isClickChat === 1) return

        if (!userInfo.passportId) {
            dispatch(loginShowHide('account', true))
            return
        }

        if (!userInfo.nickName || userInfo.nickName === '') {
            return
        } else {
            const zg = /^[0-9a-zA-Z]*$/
            const text = userInfo.nickName.split('MarsBit')

            if (text.length === 2 && text[0] === '' && zg.test(text[1])) {
                dispatch(renameShowHide(true))
                return
            }
        }

        const val = trim(textArea.current.value)
        if (val === '') return

        try {
            setIsClickChat(1)

            const res = await liveComentSend({
                roomId: room.roomId,
                passportId: userInfo.passportId,
                nickName: userInfo.nickName,
                content: val
            })

            if (!res || res.code !== 1) {
                // console.log(res)
                // textArea.current.value = res.msg ? res.msg : '发送失败'
                Toast.info(res.msg ? res.msg : '发送失败')
                setIsClickChat(0)
            } else {
                setIsClickChat(0)
                livePush({ eventId: 'send_msg' })
            }
            textArea.current.value = ''
            textArea.current.focus()
            listScroll.current.scrollIntoView(false) // 移动到列表底部
        } catch (err) {
            console.log('im | sendCustomMessage | failed', err)
            setIsClickChat(0)
        }
    }, [imJoin, isClickChat, userInfo])

    /** @desc 登录弹出 */
    const loginPopup = useCallback(() => {
        if (room && room.status === 2) return
        dispatch(loginShowHide('account', true))
    }, [])

    return (
        <div className="im-live-detail-right-live-chat">
            <RightLiveBoxTitle title={t('live_commincation')} />
            {room && room.status !== undefined && room.status === 0 && <div className="im-live-detail-right-live-chat-nolive">
                <img className="im-live-detail-right-live-chat-nolive-icon" src={noLiveIcon} />
                {t('live_not_start')}
            </div>}
            <div className="im-live-detail-right-live-chat-list" >
                <div className="im-live-detail-right-live-chat-list-box" id="id_scroll" ref={listScroll}>
                    {
                        listData && listData.map((item, index) => {
                            if (!item.text) return
                            return (
                                <ImLiveChatItem {...item} key={index} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="im-live-detail-right-live-chat-input-box">
                {(!userInfo.passportId || (room && room.status !== undefined && room.status !== 1)) && <div className={`im-live-detail-right-live-chat-input ${room && room.status !== undefined && room.status === 2 ? 'im-live-detail-right-live-chat-input-end' : 'im-live-detail-right-live-chat-input-noload'}`} onClick={loginPopup}>
                    {room && room.status !== undefined && room.status === 2 ? null : <span className="im-live-detail-right-live-chat-input-noload-sp">登录</span>}
                    {room && room.status !== undefined && room.status === 2 ? t('live_finsh') : t('live_to_say')}
                </div>}
                {
                    userInfo &&
                    userInfo.passportId &&
                    room &&
                    room.status !== undefined &&
                    room.status === 1 &&
                    <textarea
                        className="im-live-detail-right-live-chat-input"
                        ref={textArea}
                        onChange={wordsNum}
                        onKeyUp={(event) => {
                            if (event && event.type === 'keyup' && event.keyCode !== 13) return
                            setAddChat()
                        }}
                        disabled={isClickChat === 1 || !imJoin}
                    />
                }
                <div className="im-live-detail-right-live-chat-btn-box">
                    <div className="im-live-detail-right-live-btn-sp"><em ref={curWordsNum}>0</em>/100</div>
                    <div className={`im-live-detail-right-live-chat-btn ${room && room.status !== undefined && room.status !== 2 && isClickChat === 0 && imJoin === true ? 'im-live-detail-right-live-chat-btn-ok' : ''}`} onClick={setAddChat}>{t('live_send')}</div>
                </div>
            </div>
        </div>
    )
}
