import React from 'react'

import './index.scss'

import moreIcon from '../../../public/img/right-load-more-btn.png'

/** @desc 右侧栏查看更多按钮 */
export default (props) => {
    const { url, className } = props
    return <a href={url} className={`right-load-more-btn ${className || ''}`} target="_blank">
        <div className="right-load-more-btn-text">
            查看更多
        </div>
        <img className="right-load-more-btn-img" src={moreIcon} />
    </a>
}
