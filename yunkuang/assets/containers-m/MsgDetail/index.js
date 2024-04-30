import React, { useEffect, useState } from 'react'

import Header from '../../components-m/Headers'
import importimg from '../../public/imgs/h5img/other/important.png'
import { queryParam, formatTime } from '../../public/js/index'

import './index.scss'

export default () => {
    const msgnews = JSON.parse(queryParam('msginfo'))
    const [titlename, setTitlename] = useState()
    useEffect(() => {
        if (queryParam('title') === '1') {
            setTitlename('系统公告')
        }
        if (queryParam('title') === '2') {
            setTitlename('消息通知')
        }
        if (queryParam('title') === '3') {
            setTitlename('活动推荐')
        }
    }, [])
    console.log(msgnews)
    return <div className="msg-detail">
        <Header title={titlename} leftfg />
        <div className="detail-con">
            <div className="detail-title">{msgnews.title}</div>
            <div className="detail-time">
                <div>
                    {msgnews.messageImportance === 1 && <div className="detail-time-left">
                        <img src={importimg} alt=""/>
                        <span>important</span>
                    </div>}
                </div>
                <div className="detail-time-at">{formatTime(Number(queryParam('title') !== '2' ? msgnews.createdAt : msgnews.pushAt), 'yyyy-MM-dd hh:mm')}</div>
            </div>
            <div className="msgdetail-line" />
            <div className="msgdetail-detail">{msgnews.content}</div>
        </div>
    </div>
}
