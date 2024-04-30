import { useEffect, useCallback, useRef } from 'react'
import { getAndroidDownloadUrl } from '../../redux/actions/public'
import Toast from '../../components/Toast'
import { isAndroid, isIos, isWechat } from '../../public'

const checkOpen = (callback) => {
    let _clickTime = +(new Date())
    // 启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
    let _count = 0
    let intHandle
    intHandle = setInterval(() => {
        _count++
        let elsTime = +(new Date()) - _clickTime
        if (_count >= 100 || elsTime > 3000) {
            clearInterval(intHandle)
            if (elsTime > 3000 || document.hidden || document.webkitHidden) {
                console.log('正在打开app')
            } else {
                callback()
            }
        }
    }, 20)
}

/**
 * @params type 当前页面类型 id文章视频等相对应的id
 * newsDetail新闻详情，newsList新闻列表
 * flashDetail快讯详情，flashList快讯列表
 * videoDetail视频详情，videoList视频列表
 * authorCenter作者中心
 * 不传type默认跳转到首页
 * 返回appDownload 传递以上参数
 * 并返回openInBrowser是否提示浏览器中打开
 * */
export default () => {
    const iosUrl = 'https://itunes.apple.com/cn/app/id1343659925?mt=8'
    const andUrl = useRef('')

    const openApp = useCallback((url, doNotDownload) => {
        location.href = url
        checkOpen(() => {
            if (isIos() && !doNotDownload) location.href = iosUrl
            if (isAndroid() && !doNotDownload) location.href = andUrl.current
        })
    }, [andUrl])

    const appDownload = useCallback((type, id, obj) => {
        const doNotDownload = obj ? obj.doNotDownload : false
        let openInBrowser = false
        if (isWechat() && isIos()) {
            // 打开appStore
            location.href = iosUrl
        } else if (isWechat() && isAndroid()) {
            // 提示浏览器中打开
            openInBrowser = true
        } else {
            switch (type) {
                case 'liveshare':
                    openApp(`marsbusiness://liveshare/${id}`, doNotDownload)
                    break
                case 'newsDetail':
                    openApp(`marsbusiness://news/${id}`, doNotDownload)
                    break
                case 'newsList':
                    openApp(`marsbusiness://newlist/${id}`, doNotDownload)
                    break
                case 'flashDetail':
                    openApp(`marsbusiness://fast/${id}`, doNotDownload)
                    break
                case 'flashList':
                    openApp(`marsbusiness://home/fast`, doNotDownload)
                    break
                case 'videoDetail':
                    openApp(`marsbusiness://video/${id}`, doNotDownload)
                    break
                case 'videoList':
                    openApp(`marsbusiness://home/video`, doNotDownload)
                    break
                case 'authorCenter':
                    openApp(`marsbusiness://authorCenter/${id}`, doNotDownload)
                    break
                case 'noticeDetail':
                    openApp(`marsbusiness://noticeDetail/${id}`, doNotDownload)
                    break
                default:
                    openApp(`marsbusiness://home/new`, doNotDownload)
            }
        }

        return openInBrowser
    }, [andUrl])

    useEffect(() => {
        getAndroidDownloadUrl().then(function (res) {
            if (res.code === 1) {
                andUrl.current = res.obj
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            throw err
        })
    }, [])

    return appDownload
}
