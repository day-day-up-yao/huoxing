import React, { useState, useCallback } from 'react'
import './index.scss'
import { mixUrl, flashRecognize } from '../../public'
import useAppDownload from '../../public/hooks/useAppDownload'
import WebchatOpenInBrowser from '../WebchatOpenInBrowser'
import iconOk from './images/m-wxShareBox-ok.png'
import iconClear from './images/m-wxShareBox-clear.png'

export default (props) => {
    const { list, type, id } = props
    const [openInBrowser, setOpenInBrowser] = useState(false)
    const appDownload = useAppDownload()
    // 点击关闭按钮事件
    const onBtnClearClick = useCallback(() => {
        document.getElementsByClassName('m-wx-share-box')[0].style.display = 'none'
    }, [])
    const clickDownload = useCallback(() => {
        setOpenInBrowser(appDownload(type, id))
    }, [])

    return <div className="m-wx-share-box">
        <div className="m-wx-share-box-bg"></div>
        <div className="m-wx-share-box-content">
            <div className="m-wx-share-box-content-title">
                <img className="m-wx-share-box-content-ok" src={iconOk}/>
                分享成功
                <img className="m-wx-share-box-content-clear" onClick={onBtnClearClick} src={iconClear}/>
            </div>
            <div className="m-wx-share-box-content-title2">{type === 'flashList' ? '精选快讯' : '今日热点'}</div>
            <div className="m-wx-share-box-content-line"></div>
            {list && list.map((item, index) => {
                const link = type === 'flashList' ? mixUrl.m(`/flashshare/${item.id}.html`) : mixUrl.m(`/newsdetailShare/${item.id}.html`)
                const title = type === 'flashList' ? flashRecognize(item).title : item.title
                return <div className="m-wx-share-box-item" key={index}>
                    <a className="m-wx-share-box-content-text right-text" title={title} href={link} target="_blank">
                        {title}
                    </a>
                    <div className="m-wx-share-box-content-line"></div>
                </div>
            })}
            <div className="m-wx-share-box-btn" onClick={clickDownload}>查看更多热门内容</div>
        </div>
        <WebchatOpenInBrowser openInBrowser={openInBrowser} setOpenInBrowser={setOpenInBrowser} />
    </div>
}
