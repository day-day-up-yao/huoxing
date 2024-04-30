import React, { useState, useCallback, useEffect } from 'react'
import './index.scss'

import { isIphoneX } from 'multiPublic/index'
import WebchatOpenInBrowser from '../../components-m/WebchatOpenInBrowser'
import useAppDownload from '../../public/hooks/useAppDownload'
import phoneIcon from './images/cellphone-icon.png'

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
            <img src={phoneIcon} alt="下载MarsBit"/>
            下载MarsBit APP
        </a>
        <WebchatOpenInBrowser openInBrowser={openInBrowser} setOpenInBrowser={setOpenInBrowser} />
    </div >
}
