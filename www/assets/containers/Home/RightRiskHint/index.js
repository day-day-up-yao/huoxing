import React from 'react'

import './index.scss'
import riskIcon from '../image/risk-hint-icon.png'

export default () => {
    return (
        <div className="right-risk-hint">
            <a
                href="https://news.huoxing24.com/20210924180707489850.html"
                target="_blank"
            >
                <div className="right-risk-hint-img">
                    <img src={riskIcon} /><span>免责声明：</span>
                    <p>本文不构成投资建议，用户应考虑本文中的任何意见、观点或结论是否符合其特定状况，及遵守所在国家和地区的相关法律法规。<br /></p>
                </div>
            </a>
        </div>
    )
}
