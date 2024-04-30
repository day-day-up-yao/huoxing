import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getAndroidDownloadUrl } from '../../../redux/actions/public'

import './index.scss'
import Toast from '../../Toast'
import iconIos from '../../../public/img/right-download-ios.png'
import iconAnd from '../../../public/img/right-download-android.png'
import iconQRCaod from '../../../public/img/right-download-QRcode.jpg'

export default (props) => {
    const { t } = useTranslation()
    const {
        isLive // 直播间样式
    } = props
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
    }, [and])
    return (
        <div className={`right-download-box ${isLive !== undefined ? 'right-download-box-live' : ''}`}>
            <div className="right-download-box-title">
                {t('download_marsbit_app')}
            </div>
            <div className="right-download-box-content">
                {t('marsbit_app_desc')}
            </div>
            <div className="right-download-box-btn-box">
                <a className="right-download-box-btn right-download-box-btn-color1" href="https://apps.apple.com/cn/app/id1343659925" target="_blank">
                    <img className="right-download-box-btn-img" src={iconIos} style={{ marginRight: '8px' }} />
                    <div className="right-download-box-btn-text">iPhone 版</div>
                </a>
                <a className="right-download-box-btn right-download-box-btn-color2" href={and} target="_blank">
                    <img className="right-download-box-btn-img" src={iconAnd} style={{ marginRight: '6px' }} />
                    <div className="right-download-box-btn-text">Android 版</div>
                </a>
                <div className="right-download-box-btn-code">
                    <div className="right-download-box-btn-code-show">
                        <img className="right-download-box-btn-code-show-img" src={iconQRCaod} />
                    </div>
                </div>
            </div>
        </div>
    )
}
