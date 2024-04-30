import { useState, useEffect, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import Toast from 'multiComps/Toast'
import { isAutoplaySupported, fileExtension, isPc } from 'multiPublic/index'

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
    // const dispatch = useDispatch()
    const { videoDetail } = useSelector((state) => ({
        videoDetail: state.video.videoDetail
    }), shallowEqual)

    // elementID 播放器绑定ID
    const { elementID } = props

    // 播放
    const [mutedBtnShow, setMutedBtnShow] = useState(false)
    const [player, setPlayer] = useState(null) // 直播中实例
    useEffect(() => {
        if (!player || mutedBtnShow) return

        document.querySelector('.xgplayer-icon-large').removeAttribute('style')
        document.querySelector('.xgplayer-icon-muted').removeAttribute('style')
        player.video.muted = false
    }, [mutedBtnShow])
    const startPlay = useCallback((url) => {
        if (!url) return

        let options = {
            id: elementID,
            url: url,
            poster: JSON.parse(videoDetail.current.coverPic).video_pc,
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
            // screenShot: true, // 截图功能
            autoplay: true, // 自动播放，行为会受到浏览器规则限制
            // videoInit: true, // 在没有设置poster的情况下显示视频首帧,移动端无效
            width: 840,
            height: 470,
            lang: 'zh-cn',
            // useHls: true, // 插件解码
            playsinline: true,
            controls: isPc() // 控制条显示（移动端禁止）
        }

        // 变速按钮，弹幕数组
        options = {
            ...options,
            playbackRate: [0.5, 0.75, 1, 1.5, 2],
            defaultPlaybackRate: 1
        }

        let player = null
        if (fileExtension(url) === 'flv') {
            // iphone不支持flv----->https://github.com/bytedance/xgplayer/issues/385
            require('xgplayer')
            const HlsJsPlayer = require('xgplayer-hls.js')
            options = {
                ...options,
                url: options.url.replace('.flv', '.m3u8')
            }
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

    useEffect(() => {
        if (!videoDetail) {
            setTimeout(() => {
                Toast.info('视频不存在或已删除')
            }, 500)
            return
        }

        let playbackUrl = JSON.parse(videoDetail.current.url)
        if (!playbackUrl) {
            Toast.info('未获取到视频地址，请刷新试试')
            return
        }

        if (player !== null) {
            player.destroy(true)
            setPlayer(null)
        }

        playbackUrl = playbackUrl[0].fileUrl
        startPlay(playbackUrl)
    }, [videoDetail])

    // 监听移动端点击播放
    useEffect(() => {
        if (!isPc() && player) {
            document.body.onclick = () => {
                player.play()
            }
        }
    }, [player])

    return { player, setMutedBtnShow, mutedBtnShow }
}
