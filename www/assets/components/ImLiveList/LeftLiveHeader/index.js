import React from 'react'

import './index.scss'

export default (props) => {
    const {
        title, // 标题
        typeList, // 分类数据
        nowType, // 当前分类
        onBtnTypeClick, // 点击分类方法
        notLine, // 不要下边线
        moreUrl // 查看更多链接
    } = props

    return (
        <div className={`im-live-list-left-live-header ${notLine ? 'im-live-list-left-live-header-notLine' : ''}`}>
            <div className="im-live-list-left-live-header-left">
                {title && title !== '' && <div className="im-live-list-left-live-header-title">{title}</div>}
                {
                    typeList && typeList.length > 1 && typeList.map((item) => {
                        return (
                            <div className={`im-live-list-left-live-header-type ${nowType === item.id ? 'im-live-list-left-live-header-type-select' : ''}`}
                                key={item.id} onClick={() => onBtnTypeClick(item.id)} >
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="im-live-list-left-live-header-right">
                {moreUrl !== undefined && moreUrl !== '' && <a className="im-live-list-left-live-header-more" href={moreUrl} target="_blank" >查看更多</a>}
            </div>
        </div>
    )
}
