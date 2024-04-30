import React, { useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import './index.scss'

import { trim, mixUrl, encodeSearchKey } from 'multiPublic'
import searchIcon from '../Image/search-icon.png'

export default () => {
    const { searchQuery } = useParams() // url参数
    const [nowInputValue, setNowInputValue] = useState(searchQuery) // 当前输入框内容

    // 输入框当前输入内容改变事件
    const onInputValueChange = useCallback(
        (e) => {
            setNowInputValue(e.target.value)
        },
        []
    )

    // 搜索确定按钮
    const onBtnSearchClick = useCallback(
        () => {
            if (trim(nowInputValue) !== '') {
                window.location.href = mixUrl.main(`/search/${encodeSearchKey(nowInputValue)}`)
            }
        },
        [nowInputValue]
    )

    // 点击键盘事件
    const onKeySearchEnterDown = useCallback(
        (e) => {
            if (e.keyCode && e.keyCode !== 13) {
                return false
            }
            onBtnSearchClick()
        },
        [nowInputValue]
    )

    return (
        <div className="search-top">
            <div className="search-top-title">
                关键字：
                <span>{searchQuery}</span>
            </div>
            <div className="search-top-input-wrap">
                <div className="search-top-input-box">
                    <img className="search-top-input-icon" src={searchIcon} />
                    <input className="search-top-input" value={nowInputValue} onChange={(e) => onInputValueChange(e)} onKeyDown={(e) => onKeySearchEnterDown(e)} />
                </div>
                <div className="search-top-btn" onClick={() => onBtnSearchClick()}>搜索</div>
            </div>
        </div>
    )
}
