import React from 'react'

import './index.scss'

const RightItemWrapper = (props) => {
    const {
        id,
        children, // 子组件
        title, // 标题
        firstItem, // 是否是第一个
        titleBtn, // 标题按钮 propTypes: element
        titleStyle, // 标题样式
        onClick // 标题按钮点击事件
    } = props

    return <div id={id || ''} className={`layout-content-right-item ${firstItem ? 'first-item' : ''}`}>
        {title && <div className="right-item-title">
            <h5 style={titleStyle && { ...titleStyle }}>{title}</h5>
            <div
                className="button"
                style={{ display: (titleBtn && titleBtn !== '') ? 'flex' : 'none' }}
                onClick={onClick && onClick}>
                {titleBtn}
            </div>
        </div>}
        <div className="right-item-content">
            {children}
        </div>
    </div>
}

export default RightItemWrapper
