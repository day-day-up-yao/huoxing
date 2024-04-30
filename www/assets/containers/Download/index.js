import React, { useEffect, useState } from 'react'

import './index.scss'

import { getAndroidDownloadUrl } from 'multiRedux/actions/public'
import Toast from 'multiComps/Toast'
// import PhoneIcon from './Image/phone.png'
import LogoIcon from './Image/pc-download-logo.png'
// import IosIcon from './Image/ios.svg'
// import AndIcon from './Image/and.svg'
// import EwmIcon from './Image/ewm.png'
import appDonwload from './Image/apple.png'
import googleDownload from './Image/google.png'
import androidDonwload from './Image/android.png'
import downloadright from './Image/download_right.png'
import downloadcode from '../../public/img/downloadimg.png'

export default () => {
    const [and, setAnd] = useState('')
    useEffect(() => {
        getAndroidDownloadUrl().then(function (res) {
            if (res.code === 1) {
                setAnd(res.obj)
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            throw err
        })
    }, [])
    // console.log(and)
    return (
        <div className="download-page">
            <div className="down-cont">
                <div className="phone">
                    <img src={downloadright} />
                </div>
                <div className="down-load-box">
                    <div className="down-log">
                        <img src={LogoIcon} />
                        <h6>聚焦全球区块链科技前沿动态</h6>
                    </div>
                    <div className="down-btn">
                        <a className="download-btn hoverable ios" href="https://apps.apple.com/cn/app/id1343659925" target="_blank" >
                            <img src={appDonwload} alt="iOS版下载" />
                        </a>
                        <a id="androidBtn" className="download-btn hoverable android" href='https://play.google.com/store/apps/details?id=com.linekong.mars24' target="_blank">
                            <img src={googleDownload} alt="google store版下载" />
                        </a>
                        <a id="androidBtn" className="download-btn hoverable android" href={and} target="_blank">
                            <img src={androidDonwload} alt="安卓版本下载" />
                        </a>
                        <div className="ewm-btn">
                            <div className="down-box-ios">
                                <img src={downloadcode} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
