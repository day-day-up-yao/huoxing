import React, { useState, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react'
import './index.scss'

import { isIphoneX } from 'multiPublic/index'
import WebchatOpenInBrowser from '../../components-m/WebchatOpenInBrowser'
import useAppDownload from '../../public/hooks/useAppDownload'

export default forwardRef((props, ref) => {
    const [iphonex, setIphonex] = useState(false)
    const [openInBrowser, setOpenInBrowser] = useState(false)
    const appDownload = useAppDownload()
    const clickDownload = useCallback(() => {
        setOpenInBrowser(appDownload(props.type, props.id))
    }, [])
    useEffect(() => {
        isIphoneX() && setIphonex(true)
    }, [])
    // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
    useImperativeHandle(
        props.cRef,
        () => ({
            // clickDownload 就是暴露给父组件的方法
            clickDownload
        })
    )

    return <div className={`download-app-wrapper ${iphonex ? 'iphonex' : ''}`}>
        <div className="download-app-btn" onClick={() => { clickDownload() }} style={props.setBtnStyle}>
            下载MarsBit看直播
        </div>
        <WebchatOpenInBrowser openInBrowser={openInBrowser} setOpenInBrowser={setOpenInBrowser} />
    </div>
})
