import React from 'react'
import './index.scss'

import IconLogo from '../images/invite-logo.png'
import IconSlogan from '../images/slogan-share.png'
import IconTitle from '../images/invite-title.png'
import EwmBg from '../images/invite-ewm-bg.png'

export default () => {
    return (
        <div className="invite-app">
            <div className="invite-logo"><img src={IconLogo} alt="" /></div>
            <div className="invite-slogan"><img src={IconSlogan} alt="" /></div>
            <div className="invite-title"><img src={IconTitle} alt="" /></div>
            <div className="invite-name">我是</div>
            <div className="invite-ewm">
                <div className="ewm" id="qrcode"></div>
                <div className="ewm-bg"><img src={EwmBg} alt="" /></div>
            </div>
        </div>
    )
}
