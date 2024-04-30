import React, { useState, useCallback } from 'react'
import './index.scss'
import { mixUrl, formatPublishTime } from 'multiPublic/index'
import WebchatOpenInBrowser from 'multiCompsM/WebchatOpenInBrowser'
// import useAppDownload from 'multiPublic/hooks/useAppDownload'
const NewsList = (props) => {
    const [openInBrowser, setOpenInBrowser] = useState(false)
    // const appDownload = useAppDownload()
    const handleClick = useCallback((nType, type, id, index) => {
        // if (index <= 3) {
        //     let appType = ''
        //     if (nType === 'news') {
        //         appType = 'newsDetail'
        //     } else if (nType === 'video') {
        //         appType = 'videoDetail'
        //     }
        //     setOpenInBrowser(appDownload(appType, id))
        //     return false
        // } else {
        //     if (type === 'news') {
        //         window.location.href = mixUrl.m(`/newsdetailshare/${id}.html`)
        //     } else {
        //         window.location.href = mixUrl.m(`/videoDetails/${id}`)
        //     }
        // }
        if (type === 'news') {
            window.location.href = `/newsdetailshare/${id}.html`
        } else {
            window.location.href = `/videoDetails/${id}`
        }
    }, [])
    return <div className="news-correlation">
        <h6>{props.title}</h6>
        <div className="news-list-box">
            {
                props.data.map((item, index) => {
                    let imgUrl = ''
                    if (item.infoType === 'news') {
                        imgUrl = `${!item.infoObj.coverPic ? '' : JSON.parse(item.infoObj.coverPic).wap_small}`
                    } else {
                        imgUrl = `${!item.infoObj.coverPic ? '' : JSON.parse(item.infoObj.coverPic).video_m}`
                    }
                    return <div className="news-list-more" key={item.infoObj.id}>
                        <div title={item.infoObj.title} data-id={item.infoObj.id} onClick={() => { handleClick(item.infoType, item.infoType, item.infoObj.id, index) }} className="b-down" data-text={item.infoObj.title}>
                            <div className="title">{item.infoObj.title}</div>
                            <div className="list-text">
                                {/* <div className="app" style={{ display: `${index < 4 ? 'block' : 'none'}` }}>打开APP</div> */}
                                {/* <div className="author">{item.infoObj.author}</div> */}
                                <div><time>{formatPublishTime(item.publishTime)}</time></div>
                                {/* <div className="time clearfix"><span>{item.infoType === 'news' ? item.infoObj.author : item.infoObj.nickName}</span></div> */}
                            </div>
                            <div className="cover-img-sma">
                                <p style={{ background: `url(${imgUrl}) center no-repeat`, backgroundSize: 'auto 100%' }}></p>
                                <span style={{ display: `${item.infoType === 'video' ? 'block' : 'none'}` }}></span>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        <WebchatOpenInBrowser openInBrowser={openInBrowser} setOpenInBrowser={setOpenInBrowser} />
    </div>
}
export default NewsList
