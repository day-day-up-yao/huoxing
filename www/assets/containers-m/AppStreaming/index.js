import React, { useCallback } from 'react'

import './index.scss'

import Toast from 'multiComps/Toast'
import { execCommandCopy } from 'multiPublic'
import imgIcon1 from './Image/m-live-app-streaming-img1.png'
import imgIcon2 from './Image/m-live-app-streaming-img2.png'
import imgIcon3 from './Image/m-live-app-streaming-img3.png'

const url = 'https://www.marsbit.co/live/start'

export default () => {
    // 点击一键复制按钮事件
    const onBtnCopyClick = useCallback(
        () => {
            if (execCommandCopy(url)) {
                Toast.success('复制成功')
            } else {
                Toast.info('复制失败，该浏览器不支持点击复制到剪贴板')
            }
        },
        [url]
    )

    return (
        <div className="m-app-streaming-page">
            <div className="m-app-streaming-page-box">
                <div className="m-app-streaming-page-item">
                    <div className="m-app-streaming-page-num">1</div>
                    <div className="m-app-streaming-page-title">复制地址在电脑浏览器中打开</div>
                    <div className="m-app-streaming-page-text">{url}</div>
                    <div className="m-app-streaming-page-copy" onClick={onBtnCopyClick}>点击复制</div>
                </div>
                <div className="m-app-streaming-page-item">
                    <div className="m-app-streaming-page-num">2</div>
                    <div className="m-app-streaming-page-title">点击创建直播，填写资料创建直播间</div>
                    <img className="m-app-streaming-page-img" src={imgIcon1} />
                </div>
                <div className="m-app-streaming-page-item">
                    <div className="m-app-streaming-page-num">3</div>
                    <div className="m-app-streaming-page-title">在OBS或其他直播软件中填写服务器地址与串流密钥</div>
                    <img className="m-app-streaming-page-img" src={imgIcon2} />
                </div>
                <div className="m-app-streaming-page-item">
                    <div className="m-app-streaming-page-num">4</div>
                    <div className="m-app-streaming-page-title">点击开始直播</div>
                    <img className="m-app-streaming-page-img" src={imgIcon3} />
                </div>
            </div>
        </div>
    )
}
