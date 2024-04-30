import React from 'react'
import './index.scss'
import tipsImg from './images/wechat-download-tips.png'

export default (props) => {
    return props.openInBrowser && <div
        className="download-app-wechat-tips"
        onClick={() => props.setOpenInBrowser(false)}>
        <div className="download-app-img">
            <img src={tipsImg} alt="请在浏览器中打开" />
        </div>
    </div>
}
