import React, { useState, useEffect } from 'react'
import './index.scss'

import { isIphoneX } from 'multiPublic/index'
// import WebchatOpenInBrowser from '../../components-m/WebchatOpenInBrowser'
// import useAppDownload from '../../public/hooks/useAppDownload'

export default (props) => {
    const [iphonex, setIphonex] = useState(false)
    // const [openInBrowser, setOpenInBrowser] = useState(false)
    // const appDownload = useAppDownload()
    // const clickDownload = useCallback(() => {
    //     setOpenInBrowser(appDownload(props.type, props.id))
    // }, [])
    useEffect(() => {
        isIphoneX() && setIphonex(true)
        console.log('绑定事件')
        const btn = document.getElementById('launch-btn')
        btn.addEventListener('launch', function (e) {
            console.log('success')
            alert('success')
        })
        btn.addEventListener('error', function (e) {
            console.log('fail', e.detail)
            alert(`fail= ${JSON.stringify(e)}`)
            alert(JSON.stringify(e.detail))
        })
    }, [])

    const htmlText = `<wx-open-launch-app id="launch-btn" appid="wx8885cf0644d6a01a" extinfo="extinfo" style="height: 100%; width: 100%;">
        <template style="display: block; height: 100%; width: 100%;">
            <div style="height: 100%; width: 100%; background: rgba(0, 0, 0, 1); color: #fff;">去MarsBit观看直播</div>
        </template>
    </wx-open-launch-app>`

    // return <div className={`download-app-wrapper ${iphonex ? 'iphonex' : ''}`} dangerouslySetInnerHTML={{ __html: htmlText }}>
    return <div className={`download-app-wrapper ${iphonex ? 'iphonex' : ''}`}>
        <div className="download-app-btn" style={{ position: 'absolute' }}>去MarsBit观看直播</div>
        <div className="download-app-btn" style={{ opacity: 0 }} dangerouslySetInnerHTML={{ __html: htmlText }} ></div>
        {/* <a className="download-app-btn" onClick={clickDownload}>
            去火星财经APP观看直播
        </a>
        <WebchatOpenInBrowser openInBrowser={openInBrowser} setOpenInBrowser={setOpenInBrowser} /> */}
        {/* <wx-open-launch-app id="launch-btn" appid="wx8885cf0644d6a01a" extinfo="extinfo" style={{ height: '30px', width: '200px' }}>
            <template style={{ display: 'block', height: '30px', width: '200px' }}>
                <div style={{ height: '30px', width: '200px', borderRadius: '50px', background: 'rgba(243, 78, 61, 1)', color: '#fff', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>去火星财经APP观看直播</div>
            </template>
        </wx-open-launch-app> */}
    </div>
}
