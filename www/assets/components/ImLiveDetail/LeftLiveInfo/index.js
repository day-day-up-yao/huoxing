import React from 'react'

import './index.scss'

export default (props) => {
    const {
        brief // 直播简介
    } = props

    return (
        <div className="im-live-detail-left-live-info">
            <div className="ql-container ql-snow">
                <div className="ql-editor" dangerouslySetInnerHTML={{ __html: brief }} />
            </div>
        </div>
    )
}
