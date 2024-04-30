import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
// import HlsJsPlayer from 'xgplayer-hls.js'

import { getRoomPopularity, getRoomByID } from '../../redux/actions/live'
import Toast from 'multiComps/Toast'
import { isAutoplaySupported, fileExtension, isPc } from 'multiPublic/index'
import liveGather from './useLiveGather'

const timeZero = (num) => {
    if (Number(num) < 10) {
        return `0${num}`
    } else {
        return num
    }
}

export const commentStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '24px',
    textShadow: 'rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px'
    // padding: '5px 11px',
    // border: '1px solid rgba(255, 255, 255, 0.4)',
    // borderRadius: '50px',
    // backgroundColor: 'rgba(255, 255, 255, 0.2)'
}

export default (props) => {
    const dispatch = useDispatch()
    const { room, roomHistoryList } = useSelector((state) => ({
        roomHistoryList: state.live.roomHistoryList,
        room: state.live.room
    }), shallowEqual)

    const [countTime, setCountTime] = useState({
        d: 0,
        h: 0,
        m: 0,
        s: 0
    })

    // elementID 播放器绑定ID
    const { elementID } = props

    // 倒计时
    const getCountTimeText = useCallback(() => {
        let nowTime = new Date().getTime()
        let endTime = Number(room.beginTime)
        let leftTime = endTime - nowTime
        let obj = {
            d: 0,
            h: 0,
            m: 0,
            s: 0
        }
        if (leftTime >= 0) {
            obj.d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
            obj.h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
            obj.m = Math.floor(leftTime / 1000 / 60 % 60)
            obj.s = Math.floor(leftTime / 1000 % 60)
        }

        setCountTime(obj)

        if (room.status === 0) {
            setTimeout(getCountTimeText, 1000)
        }
    }, [])

    // 播放
    const [mutedBtnShow, setMutedBtnShow] = useState(false)
    const [player, setPlayer] = useState(null) // 直播中实例
    useEffect(() => {
        if (!player || mutedBtnShow) return

        document.querySelector('.xgplayer-icon-large').removeAttribute('style')
        document.querySelector('.xgplayer-icon-muted').removeAttribute('style')
        player.video.muted = false
    }, [mutedBtnShow])
    const startPlay = useCallback((url, type) => {
        if (!url) return
        // 移动端的控制条选项
        let mobileoptions = {
            id: elementID,
            url: url,
            poster: room.coverPicUrl,
            width: elementID === 'id_test_video' ? '100%' : 884,
            height: elementID === 'id_test_video' ? '100%' : 500,
            pip: false, // 画中画
            screenShot: false,
            autoplay: true,
            lang: 'zh-cn',
            playsinline: true,
            ignores: ['volume']
        }

        let options = {
            id: elementID,
            url: url,
            poster: room.coverPicUrl,
            // playbackRate: [0.5, 0.75, 1, 1.5, 2],
            // defaultPlaybackRate: 1,
            rotate: { // 视频旋转按钮配置项
                innerRotate: true, // 只旋转内部video
                clockwise: false // 旋转方向是否为顺时针
            },
            pip: true, // 画中画
            pipConfig: {
                bottom: 200,
                right: 0,
                width: 320,
                height: 180
            },
            screenShot: true, // 截图功能
            autoplay: true, // 自动播放，行为会受到浏览器规则限制
            // videoInit: true, // 在没有设置poster的情况下显示视频首帧,移动端无效
            width: elementID === 'id_test_video' ? '100%' : 884,
            height: elementID === 'id_test_video' ? '100%' : 500,
            lang: 'zh-cn',
            // useHls: true, // 插件解码
            playsinline: true,
            controls: true // isPc() // 控制条显示（移动端禁止）
        }

        // 弹幕
        options.danmu = {
            // panel: true,
            comments: [],
            area: { // 弹幕显示区域
                start: 0.02, // 区域顶部到播放器顶部所占播放器高度的比例
                end: 1.02 // 区域底部到播放器顶部所占播放器高度的比例
            }
        }

        // 回放添加，变速按钮，弹幕数组
        // 移动端回翻和pc端回放要区别开来
        if (type === 'playback' && isPc()) {
            options = {
                ...options,
                playbackRate: [0.5, 0.75, 1, 1.5, 2],
                defaultPlaybackRate: 1
            }

            let commentsArray = []
            for (const val of roomHistoryList) {
                // console.log(`${val.content}: ${(val.updateTime - room.beginTime) / 1000}s`)
                commentsArray.push({
                    mode: 'scroll',
                    duration: 10000,
                    id: val.id,
                    start: val.updateTime - room.beginTime,
                    // txt: `${val.nickName}：${val.content}`,
                    txt: val.content,
                    style: commentStyle
                })
            }
            options.danmu.comments = commentsArray
        } else if (type === 'playback' && !isPc()) {
            options = mobileoptions
            // 根据横竖屏，先计算，出一个高度
            if (room.roomType === 1) {
                options.height = 211
                // options.rotateFullscreen = true
                options.cssFullscreen = true
            } else {
                options.height = 310
            }
        } else {
            options.controls = false // 手机直播 隐藏控制条
        }

        let player = null
        if (fileExtension(url) === 'flv') {
            // iphone不支持flv----->https://github.com/bytedance/xgplayer/issues/385

            // options = {
            //     ...options,
            //     isLive: type === 'playing',
            //     cors: true
            // }
            // require('xgplayer')
            // const FlvPlayer = require('xgplayer-flv')
            // player = new FlvPlayer(options)
            // console.log('000')

            require('xgplayer')
            options = {
                ...options,
                url: options.url.replace('.flv', '.m3u8')
            }
            const HlsJsPlayer = require('xgplayer-hls.js')
            player = new HlsJsPlayer(options)
        } else if (fileExtension(url) === 'm3u8') {
            require('xgplayer')
            const HlsJsPlayer = require('xgplayer-hls.js')
            player = new HlsJsPlayer(options)
        } else {
            const Player = require('xgplayer')
            require('xgplayer-mp4')
            player = new Player(options)
        }

        // Usage: isAutoplaySupported(callback);
        // Using a callback assures that support
        // has been properly checked
        isAutoplaySupported(function (supported) {
            if (supported) {
                // HTML5 Video Autoplay Supported!
                console.log('HTML5 Video Autoplay Supported!')
            } else {
                // HTML5 Video Autoplay Not Supported :(
                console.log('HTML5 Video Autoplay Not Supported :(')
                player.once('canplay', function () {
                    document.querySelector('.xgplayer-icon-large').setAttribute('style', 'display:none')
                    document.querySelector('.xgplayer-icon-muted').setAttribute('style', 'display:block')
                    player.video.muted = true
                    player.play()
                    setMutedBtnShow(true)
                })
            }
        })

        setPlayer(player)
        window.livePlayer = player // 挂载到全局，以便发送评论时，发送弹幕

        // roomHistoryList 服务端请求roomHistoryList，此处inputs加与不加，关系不大。服务端请求数据可减少startPlay数据判断
    }, [])

    // 点击上报事件
    const livePush = liveGather()
    useEffect(() => {
        if (!player) return

        console.log(1111)

        player.on('play', function () {
            livePush({ eventId: 'playback_control', eventInfo: { action: 'play' } })
        })
        player.on('pause', function () {
            livePush({ eventId: 'playback_control', eventInfo: { action: 'pause' } })
        })
        player.on('requestFullscreen', function () {
            livePush({ eventId: 'playback_control', eventInfo: { action: 'fullscreen' } })
        })
        player.on('exitFullscreen', function () {
            livePush({ eventId: 'playback_control', eventInfo: { action: 'exit_fullscreen' } })
        })
    }, [player])
    const roomStatus = useCallback((room) => {
        let status = ''
        switch (room.status) {
            case 0:
                status = 'not_started'
                break
            case 1:
                status = 'living'
                break
            case 2:
                status = 'finished'
                break
            default:
                status = 'not_started'
        }
        return status
    }, [])
    useEffect(() => {
        if (!room) return

        // 页面刷新退出前，上报关闭直播间时，直播间状态
        window.onbeforeunload = function () {
            livePush({ eventId: 'exit_room', eventInfo: { state: roomStatus(room) } })
        }
    }, [room])
    const [oldRoomStatus, setOldRoomStatus] = useState()
    useEffect(() => {
        // 未开始和直播中才上报
        if (!room || (room.status !== 0 && room.status !== 1)) return

        if (room.status === oldRoomStatus) return
        setOldRoomStatus(room.status)

        livePush({ eventId: 'enter_room', eventInfo: { state: roomStatus(room) } })
    }, [room])

    useEffect(() => {
        if (!room) return
        switch (room.status) {
            case 0: // 即将开始
                getCountTimeText()
                break
            case 1: // 直播中
                let playingUrl = room.webPullStreamUrl ? room.webPullStreamUrl : room.pullStreamUrl

                if (!playingUrl) {
                    Toast.info('未获取到视频直播地址，请刷新试试')
                    return
                }

                if (player === null) {
                    if (playingUrl.indexOf('?txSecret=') > -1) playingUrl = (playingUrl.split('?txSecret='))[0]
                    if (playingUrl.indexOf('https://') === -1) playingUrl = playingUrl.replace('http://', 'https://')
                    startPlay(playingUrl, 'playing')
                }
                break
            case 2: // 回放中
                livePush({ eventId: 'enter_playback' })
                let playbackUrl = room.recordVideoUrl
                if (!playbackUrl) {
                    // 会因为重复请求，而一直弹出
                    // Toast.info('未获取到视频回放地址，请刷新试试')
                    return
                }

                if (player !== null) {
                    player.destroy(true)
                    setPlayer(null)
                }

                if (playbackUrl.indexOf('https://') === -1) {
                    playbackUrl = playbackUrl.replace('http://', 'https://')
                }
                startPlay(playbackUrl, 'playback')
                break
            default:
                setTimeout(() => {
                    Toast.info('直播间不存在或已删除')
                }, 500)
                break
        }
    }, [room])

    // 监听人气值实时更新
    useEffect(() => {
        const timer = setInterval(() => {
            if (room.status === 1) {
                dispatch(getRoomPopularity({ roomIDs: room.roomId }))
            }
        }, 5000)
        return () => {
            clearInterval(timer)
        }
    }, [dispatch.live, room])

    // 监听直播间状态，即将开始-->直播-->回放
    useEffect(() => {
        console.log(666)
        const timer = setInterval(() => {
            if (room.status === 0 || (room.status === 2 && !room.recordVideoUrl)) {
                dispatch(getRoomByID({ roomId: room.roomId }))
            } else {
                clearInterval(timer)
            }
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    }, [dispatch.live, room])

    // 监听移动端点击播放
    useEffect(() => {
        if (!isPc() && player) {
            document.body.onclick = () => {
                player.play()
            }
        }
    }, [player])

    return { player, countTime, timeZero, setMutedBtnShow, mutedBtnShow }
}
