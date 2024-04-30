import React from 'react'

import './index.scss'

import qrCordIcon from '../../image/right-download-QRcode.jpg'
import rightIcon from '../../image/home-live-verify-right.png'

export default () => {
    return (
        <div className="home-popup-live-verify-popup">
            <div className="home-popup-live-verify-popup-title">实名认证</div>
            <div className="home-popup-live-verify-popup-halftitle">应网络实名制要求，身份校验后才可以开启直播</div>
            <div className="home-popup-live-verify-popup-box">
                <div className="home-popup-live-verify-popup-item">
                    <div className="home-popup-live-verify-popup-item-title left">1、打开MarsBit并登录当前账号</div>
                    <div className="home-popup-live-verify-popup-item-code">
                        <img className="home-popup-live-verify-popup-item-code-img" src={qrCordIcon} />
                    </div>
                    <div className="home-popup-live-verify-popup-item-text">扫描二维码可下载MarsBit APP</div>
                </div>
                <div className="home-popup-live-verify-popup-line" />
                <div className="home-popup-live-verify-popup-item">
                    <div className="home-popup-live-verify-popup-item-title right">2. 在APP首页点击 【开播】开始认证</div>
                    <img className="home-popup-live-verify-popup-item-right-img" src={rightIcon} />
                </div>
            </div>
        </div>
    )
}
