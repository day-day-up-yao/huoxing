import React from 'react'

import './index.scss'

export default (props) => {
    const {
        synopsis,
        content
    } = props

    return (
        <div className="activity-detail-bottom-info">
            <div className="activity-detail-bottom-info-box">
                <div className="feature">
                    <h6><span></span>活动特色</h6>
                    <div className="feature-cont">
                        <p>{synopsis}</p>
                    </div>
                </div>
                <div className="activity-cont simditor">
                    <h6><span></span>活动内容</h6>
                    <div className="activity-text simditor-body" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </div>
    )
}
