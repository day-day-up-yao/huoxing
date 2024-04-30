import React from 'react'
import QRCode from 'qrcode.react'

import './index.scss'

const Codes = () => {
    let url = typeof window !== 'undefined' ? window.location.href : ''
    return <div className="code-page-wrapper">
        <div className="code-page-text">
            <h3>扫二维码,直播随身看</h3><h5>或下载MarsBit,体验更佳</h5>
        </div>
        <div className="code-page-img">
            <QRCode
                value={url}
                size={100}
            />
        </div>
    </div>
}

export default Codes
