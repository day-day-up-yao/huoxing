import React, { useEffect, useState } from 'react'

import './index.scss'

import { formatPublishTime, mixUrl, stringArray, stringJsonItem, encodeSearchKey } from '../../public/index'

export default (props) => {
    const {
        content, // 快讯内容
        createdTime, // 发布时间
        tagsV2, // 标签，json字符串
        serverTime, // 服务器时间
        hotCounts, // 热度值
        tagsHide, // 隐藏标签
        hotShow, // 显示热度
        id // 快讯唯一ID
    } = props

    let startIndex = content.indexOf('【') === -1 ? 0 : content.indexOf('【') + 1
    let endIndex = content.indexOf('】') === -1 ? 0 : content.indexOf('】')
    const newTitle = content.substring(startIndex, endIndex)
    const newContent = content.substring(endIndex === 0 ? 0 : endIndex + 1).replace(/(<\/?p.*?>)/g, '').replace(/(<\/?a.*?>)/g, '')
    // let newUrl = mixUrl.news(`/flash/${id}.html`)
    const [linkurl, setLinkurl] = useState(mixUrl.news(`/${id}.html`))

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const reqhost = window.location
            setLinkurl(mixUrl.news(`/flash/${id}.html`, reqhost))
        }
    }, [id])

    return (
        <div className="news-flash-item">
            <a className="title-synopsis" title={newTitle} href={linkurl} target="_blank">
                <h5>
                    <span>快讯</span>
                    {newTitle}
                </h5>
                <p>{newContent}</p>
            </a>
            <div className="relate-info">
                <div className="author-time">
                    <time>{formatPublishTime(createdTime, (serverTime && serverTime !== '') && serverTime)}</time>
                </div>
                {(!tagsHide && stringArray(tagsV2).length !== 0) && <div className="tags" style={{ display: 'none' }}>关键字:
                    {
                        stringArray(tagsV2).map(function (item, index) {
                            if (index >= 3 || !item.name) return false
                            const symbol = stringJsonItem(item.name, 'symbol')
                            const fullname = stringJsonItem(item.name, 'full_name')
                            const link = ((item.type === 3 || symbol === '') && mixUrl.news(`/tags/${encodeSearchKey(item.name)}`)) || mixUrl.main(`/marketsDetail/${fullname}/${symbol}`)
                            const name = ((item.type === 3 || fullname === '') && item.name) || fullname
                            return (
                                // <a
                                //     key={item.id}
                                //     title={item.name}
                                //     href={link}
                                //     target="_blank">
                                //     &nbsp;&nbsp;
                                //     {name}
                                //     {index < 2 && index !== stringArray(tagsV2).length - 1 && ','}
                                // </a>
                                <a
                                    className="relate-text"
                                    key={item.id}
                                    title={item.name}
                                    href={link}
                                    target="_blank">
                                    {name}
                                </a>
                            )
                        })
                    }
                </div>}
                {hotShow && <div className="hot">热度:&nbsp;{hotCounts}</div>}
            </div>
        </div>
    )
}
