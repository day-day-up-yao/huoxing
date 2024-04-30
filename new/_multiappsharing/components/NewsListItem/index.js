import React, { useEffect, useState } from 'react'
import { string, number } from 'prop-types'

import './index.scss'
import SimpleImg from './SimpleImg'

import { formatPublishTime, mixUrl, stringArray, stringJsonItem, encodeSearchKey } from '../../public/index'

const NewsListItem = (props) => {
    // 简写: auth = author; cat = category
    // tag的type: 1行情，2媒体，3新闻
    const {
        title, // 标题
        synopsis, // 描述
        id, // 唯一标识id
        coverPic, // 图片数据，为json字符串
        author, // 作者
        createdBy, // 作者id
        publishTime, // 发布时间
        tagsV2, // 标签，json字符串
        serverTime, // 服务器时间
        hotCounts, // 热度值
        newsCat, // 新闻类别
        authCat, // 作者类别
        nameHide, // 隐藏作者名称
        tagsHide, // 隐藏标签
        hotShow, // 显示热度
        advertised, // 作者推广
        tags, // 图片标签
        infoType, // 头条文件类型
        content // 视频类型的描述
    } = props

    // 新闻链接
    // let newsLink = ''
    // 作者链接
    const authLink = mixUrl.main(`/userCenter/${createdBy}`)
    // 视频图片类型
    const videoImgType = stringJsonItem(coverPic, 'video_pc') !== '' ? 'video_pc' : 'video_m'

    const [linkurl, setLinkurl] = useState(mixUrl.news(`/${id}.html`))

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const reqhost = window.location
            if (infoType && infoType === 'video') {
                setLinkurl(mixUrl.main(`/video/detail/${id}/${publishTime}`, reqhost))
            } else {
                setLinkurl(mixUrl.news(`/${id}.html`, reqhost))
            }
            // newsLink = (infoType && infoType === 'video') ? mixUrl.main(`/video/detail/${id}/${publishTime}`, reqhost) : mixUrl.news(`/${id}.html`, reqhost)
        }
    }, [infoType, id])

    return <div className="news-list-item">
        <a className="item-left" title={title} href={linkurl} target="_blank">
            {(newsCat && newsCat !== '') && <span>{newsCat}</span>}
            {(infoType && infoType === 'video') && <div className="type-video">视频</div>}
            {(infoType && infoType === 'video') && <div className="type-video-btn"></div>}
            <SimpleImg coverPic={coverPic} tags={tags} type={(infoType && infoType === 'video') ? videoImgType : 'pc'} />
        </a>
        <div className="item-right">
            <a className="title-synopsis" title={title} href={linkurl} target="_blank">
                <h5>
                    {(authCat && authCat !== '') && <span>{authCat}</span>}
                    {title}
                </h5>
                <p>{(infoType && infoType === 'video') ? content : synopsis.replace('【GPT】', '')}</p>
            </a>
            <div className="relate-info">
                <div className="author-time">
                    {(advertised !== null && advertised === 1) && <span style={{ color: `#5a83f9` }}>{`推广 | `}</span>}
                    {!nameHide && <a href={authLink} title={author} target="_blank">{author}</a>}
                    <time>{formatPublishTime(publishTime, (serverTime && serverTime !== '') && serverTime)}</time>
                </div>
                {(!tagsHide && stringArray(tagsV2).length !== 0) && <div className="tags" style={{ display: 'none' }}>
                    关键字:
                    {stringArray(tagsV2).map(function (item, index) {
                        if (index >= 3 || !item.name) return false
                        const symbol = stringJsonItem(item.name, 'symbol')
                        const fullname = stringJsonItem(item.name, 'full_name')
                        const link = ((item.type === 3 || symbol === '') && mixUrl.news(`/tags/${encodeSearchKey(item.name)}`)) || mixUrl.main(`/marketsDetail/${fullname}/${symbol}`)
                        const name = ((item.type === 3 || fullname === '') && item.name) || fullname
                        // return <a
                        //     key={item.id}
                        //     title={item.name}
                        //     href={link}
                        //     target="_blank">
                        //     &nbsp;&nbsp;
                        //     {name}
                        //     {index < 2 && index !== stringArray(tagsV2).length - 1 && ','}
                        // </a>
                        return <a
                            className="relate-text"
                            key={item.id}
                            title={item.name}
                            href={link}
                            target="_blank">
                            {name}
                        </a>
                    })}
                </div>}
                {hotShow && <div className="hot">热度:&nbsp;{hotCounts}</div>}
            </div>
        </div>
    </div>
}

NewsListItem.propTypes = {
    title: string.isRequired,
    id: string.isRequired,
    coverPic: string.isRequired,
    author: string.isRequired,
    createdBy: string.isRequired,
    publishTime: number.isRequired
}

export default NewsListItem
