import React from 'react'
import './index.scss'
import imgIcon from '../Image/search-no.png'

export default (props) => {
    return (
        <div className="no-data">
            <div className="no-data-wrap">
                <img className="no-data-img" src={imgIcon} />
                <div className="no-data-title">暂无相关内容</div>
                <div className="no-data-text">请修改或者尝试其他搜索词</div>
            </div>
        </div>
    )
}
