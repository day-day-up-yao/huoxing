import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import './index.scss'

import Popup from 'multiComps/Popup'
import Toast from 'multiComps/Toast'
import { formatTime, mixUrl } from 'multiPublic'
import { loginShowHide } from 'multiRedux/actions/login'
import { getRoomStatus, setRoomStatus, getRoomByID } from '../../redux/actions/live'
import { ImLiveControlPictureItem, ImLiveControlTextItem, ImLiveControlInputItem, ImLiveControlExplainItem, ImLiveControlBtnItem } from './ImLiveControlItem'
import ImLiveControlPopup from './ImLiveControlPopup'
import closeIcon from './Image/im-live-control-close.png'
import playIcon from './Image/im-live-control-play.png'
import popupCloseIcon from './Image/im-live-control-popup-close.png'

const explainText = ['直播软件（如OBS软件）设置完成推流后，点击“开始直播”按钮后直播才会正式开始', '直播结束后，点击“结束直播”按钮后，直播间状态会自动更改为回放中', '当前为手机直播，请在MarsBit上开启或关闭直播']

// 火星财经电脑直播教程
const coursUrl = 'https://news.marsbit.co/20210201154152675262.html'

export default () => {
    const { userInfo, room } = useSelector((state) => ({
        userInfo: state.login.userInfo.info,
        room: state.live.room
    }), shallowEqual)
    const dispatch = useDispatch()
    const timer = useRef()
    const [isPopShow, setIsPopShow] = useState(false) // 是否开启弹窗
    const [isPopShow2, setIsPopShow2] = useState(false) // 是否开启弹窗2

    useEffect(() => {
        if (room.status === 2) {
            setIsPopShow2(true)
            return
        }

        // 循环请求直播间状态, 非本页面关闭时，跳转到直播列表页
        if (timer.current) return
        timer.current = setInterval(async () => {
            const getRoomStatusRes = await getRoomStatus({ roomId: room.roomId })
            if (parseInt(getRoomStatusRes.obj) === 2) {
                setIsPopShow2(true)
                clearInterval(timer)
            }
        }, 10000)

        return () => {
            clearInterval(timer)
            timer.current = null
        }
    }, [room])

    // 点击弹窗确定按钮事件
    const onBtnPopupOKClick = useCallback(
        async () => {
            if (!userInfo.passportId) {
                dispatch(loginShowHide('account', true))
            }

            // 请求当前直播间状态
            const getRoomStatusRes = await getRoomStatus({
                roomId: room.roomId
            }).catch(function (err) {
                Toast.info('获取直播间错误')
                throw err
            })

            if (getRoomStatusRes.code === 1) {
                const oldStatus = parseInt(getRoomStatusRes.obj)
                switch (oldStatus) {
                    case 0:
                    case 1:

                        // 改变直播间状态
                        const setRoomStatusRes = await setRoomStatus({
                            roomId: room.roomId,
                            passportId: userInfo.passportId,
                            status: (oldStatus + 1)
                        }).catch(function (err) {
                            Toast.info('获取直播间错误')
                            throw err
                        })

                        if (setRoomStatusRes.code === 1) {
                            // 刷新直播间数据
                            dispatch(getRoomByID({
                                roomId: room.roomId
                            })).then((res) => {
                                if (res.code !== 1) {
                                    Toast.info(res.msg)
                                }
                            }).catch(function (err) {
                                Toast.info('获取直播间错误')
                                throw err
                            })
                        } else {
                            Toast.info(setRoomStatusRes.msg)
                        }

                        break
                    case 2:
                        setIsPopShow2(true)
                        break
                    default:
                        setIsPopShow2(true)
                        break
                }
            } else {
                Toast.info(getRoomStatusRes.msg)
            }

            setIsPopShow(false)
        },
        [dispatch, room, userInfo]
    )

    // 点击开始关闭按钮事件
    const onBtnPlayOrEndClick = useCallback(
        () => {
            setIsPopShow(true)
        },
        []
    )

    // 点击弹窗关闭按钮事件
    const onBtnPopupCloseClick = useCallback(
        () => {
            setIsPopShow(false)
        },
        []
    )

    // 点击直播间已关闭弹窗确定按钮事件
    const onBtnPopupOKClick2 = useCallback(
        () => {
            window.location.href = mixUrl.main('/live')
        },
        []
    )

    return (
        <div className="im-live-control-page">
            <div className="im-live-control-page-main-box">
                <ImLiveControlPictureItem title={'直播封面：'} src={room.coverPicUrl} />
                <ImLiveControlTextItem title={'直播标题：'} text={room.name} />
                <ImLiveControlTextItem title={'直播时间：'} text={formatTime(room.beginTime, 'yyyy-MM-dd hh:mm')} />
                {room.roomType === 1 && room.pushStreamUrl
                    ? <ImLiveControlInputItem title={'服务器：'} value={`${room.pushStreamUrl.split('/')[0]}//${room.pushStreamUrl.split('/')[2]}/${room.pushStreamUrl.split('/')[3]}`} />
                    : <ImLiveControlTextItem title={'服务器：'} text={'手机直播不支持串流'} />}
                {room.roomType === 1 && room.pushStreamUrl
                    ? <ImLiveControlInputItem title={'串流密钥：'} value={room.pushStreamUrl.split('/')[4]} />
                    : <ImLiveControlTextItem title={'串流密钥：'} text={'手机直播不支持串流'} />}
                {/* <ImLiveControlInputItem title={'拉流地址：'} value={room.pullStreamUrl} /> */}
                <ImLiveControlInputItem title={'直播间观看地址：'} value={`https://www.marsbit.co/live/${room.roomId}`} />
                <ImLiveControlExplainItem text={room.roomType === 1 ? explainText[room.status] : explainText[2]} roomType={room.roomType} status={room.status} />
                <ImLiveControlBtnItem text={room.status === 0 ? '开始直播' : '结束直播'} roomType={room.roomType} src={room.status === 0 ? playIcon : closeIcon} click={onBtnPlayOrEndClick} coursUrl={coursUrl} />
            </div>
            <Popup
                children={
                    <ImLiveControlPopup
                        title={'提示'}
                        text={room.status === 0 ? '直播软件（如OBS）设置完成后才可正常开始直播。' : '是否结束直播'}
                        close={onBtnPopupCloseClick}
                        okText={room.status === 0 ? '开始直播' : '结束直播'}
                        ok={onBtnPopupOKClick}
                    />
                }
                show={isPopShow}
                close={onBtnPopupCloseClick}
                closeIcon={popupCloseIcon}
                closeClassName={'im-live-control-popup-close'}
            />
            <Popup
                children={
                    <ImLiveControlPopup
                        title={'提示'}
                        text={'直播间已被关闭'}
                        ok={onBtnPopupOKClick2}
                        okText={'确定'}
                    />
                }
                show={isPopShow2}
                closeClassName={'im-live-control-popup-close2'}
            />
        </div>
    )
}
