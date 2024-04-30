import React, { useCallback } from 'react'

import './index.scss'

import { execCommandCopy } from 'multiPublic'
import Toast from 'multiComps/Toast'
import btnArrowIcon from '../Image/im-live-control-arrow.png'

/** @desc 图片Item */
export const ImLiveControlPictureItem = (props) => {
    const { title, src } = props

    return (
        <div className="im-live-control-item" style={{ alignItems: 'flex-start' }}>
            <div className="im-live-control-item-title">
                {title}
            </div>
            <img className="im-live-control-item-img" src={src} />
        </div>
    )
}

/** @desc 文字Item */
export const ImLiveControlTextItem = (props) => {
    const { title, text } = props

    return (
        <div className="im-live-control-item">
            <div className="im-live-control-item-title">
                {title}
            </div>
            <div className="im-live-control-item-text">
                {text}
            </div>
        </div>
    )
}

/** @desc 输入框Item */
export const ImLiveControlInputItem = (props) => {
    const { title, value } = props

    // 需要选中状态，但是不能更改，所以不能用readOnly 或 defaultVal
    const onInputChange = useCallback(() => { }, [])

    // 点击一键复制按钮事件
    const onBtnCopyClick = useCallback(
        () => {
            if (execCommandCopy(value)) {
                Toast.success('复制成功')
            } else {
                Toast.info('复制失败，该浏览器不支持点击复制到剪贴板')
            }
        },
        [value]
    )

    return (
        <div className="im-live-control-item">
            <div className="im-live-control-item-title">
                {title}
            </div>
            <input className="im-live-control-item-input" value={value} onChange={onInputChange} spellCheck={false} />
            <div className="im-live-control-item-copy" onClick={() => onBtnCopyClick()}>一键复制</div>
        </div>
    )
}

/** @desc 说明Item */
export const ImLiveControlExplainItem = (props) => {
    const { text, roomType } = props

    return (
        <div className="im-live-control-item">
            <div className="im-live-control-item-explain" style={{ color: roomType === 1 ? '#999' : '#F63C2A' }}>
                {text}
            </div>
        </div>
    )
}

/** @desc 按钮Item */
export const ImLiveControlBtnItem = (props) => {
    const { text, roomType, src, click, coursUrl } = props

    return (
        <div className="im-live-control-item" style={{ marginBottom: 0 }}>
            <div className={`im-live-control-item-btn ${roomType === 1 ? 'backColor1' : 'backColor2'}`} onClick={click}>
                <img className="im-live-control-item-btn-icon" src={src} />
                {text}
            </div>
            <a className="im-live-control-item-btn-explain" href={coursUrl} target="_blank">MarsBit电脑直播教程</a>
            <img className="im-live-control-item-btn-explain-icon" src={btnArrowIcon} />
        </div>
    )
}
