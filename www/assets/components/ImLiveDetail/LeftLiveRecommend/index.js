import React from 'react'

import './index.scss'
import imgIcon from '../image/notfound-icon.png'
import ImLiveListItem from 'multiComps/Home/RightLive/ImLiveListItem'

export default (props) => {
    const {
        listData, // 列表
        onBtnMoreClick, // 点击加载更多事件
        isHaveMore // 是否还有更多内容
    } = props
    return (
        <div className="im-live-detail-left-live-recommend">
            <div className="im-live-detail-left-live-recommend-list">
                {
                    listData && listData.length > 0 && listData.map((item, index) => {
                        return (
                            <ImLiveListItem {...item} key={index} />
                        )
                    })
                }
                {
                    listData && listData.length === 0 && <div className="no-data"><div className="no-data-wrap"><img className="no-data-img" src={`${imgIcon}`} /><div className="no-data-title">暂无内容</div></div></div>
                }
            </div>

            {listData && listData.length > 0 && onBtnMoreClick && isHaveMore ? <div className="im-live-detail-left-live-recommend-btn" onClick={onBtnMoreClick}>加载更多</div> : null}
        </div>
    )
}
