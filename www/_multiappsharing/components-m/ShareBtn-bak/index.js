import React, { useState, useCallback, useEffect } from 'react'
import './index.scss'

import { isIphoneX } from 'multiPublic/index'
import WebchatOpenInBrowser from '../../components-m/WebchatOpenInBrowser'
import useAppDownload from '../../public/hooks/useAppDownload'

export default (props) => {
    const [iphonex, setIphonex] = useState(false)
    const [openInBrowser, setOpenInBrowser] = useState(false)
    const appDownload = useAppDownload()
    const clickDownload = useCallback(() => {
        setOpenInBrowser(appDownload(props.type, props.id))
    }, [])
    useEffect(() => {
        isIphoneX() && setIphonex(true)
    }, [])

    return <div className={`download-app-wrapper ${iphonex ? 'iphonex' : ''}`}>
        <a className="download-app-btn" onClick={clickDownload}>
            下载MarsBit APP，观看精彩直播
        </a>
        <WebchatOpenInBrowser openInBrowser={openInBrowser} setOpenInBrowser={setOpenInBrowser} />
    </div>
}
