import React from 'react'
import { SimpleImg } from 'react-simple-img'
import { string, number } from 'prop-types'

import './index.scss'

import RightItemWrapper from '../RightItemWrapper'

import { mixUrl, formatPublishTime, stringJsonItem, isArray } from '../../public/index'
import featureBackImg from '../../public/img/feature-backImg.png'

/** @desc 右侧新闻item */
const RightNewsItem = (props) => {
    const {
        title, // 标题
        id, // 唯一标识id
        coverPic, // 图片数据，为json字符串
        // publishTime, // 发布时间
        // serverTime, // 服务器时间
        author, // 作者
        rank, // 顺序
        tags
    } = props

    // 新闻链接
    const newsLink = mixUrl.news(`/${id}.html`)
    return <div className="right-news-item">
        <a className="left" title={title} href={newsLink} target="_blank">
            <span>{rank + 1}</span>
            <SimpleImg
                applyAspectRatio
                width={90}
                height={65}
                placeholder={'#f6f8fa'}
                src={stringJsonItem(coverPic, 'pc')}
                alt={tags}
            />
        </a>
        <div className="right">
            <a title={title} href={newsLink} target="_blank">{title}</a>
            <time>{author}</time>
            {/* <time>{formatPublishTime(publishTime, (serverTime && serverTime !== '') && serverTime)}</time> */}
        </div>
    </div>
}
RightNewsItem.propTypes = {
    title: string.isRequired,
    id: string.isRequired,
    coverPic: string.isRequired,
    publishTime: number.isRequired,
    author: string.isRequired
}

/** @desc 右侧专题item */
const RightFeatureItem = (props) => {
    const {
        id, // 唯一标识id
        topicName, // 标题
        newSmallPcImgSrc, // 图片地址
        pcImgSrc, // 图片地址
        createTime, // 发布时间
        serverTime // 服务器时间
    } = props

    // 专题链接
    const featureLink = mixUrl.news(`/feature/${id}`)

    return <div className="right-news-item">
        <a className="left" title={topicName} href={featureLink} target="_blank">
            <SimpleImg
                applyAspectRatio
                width={90}
                height={65}
                placeholder={'#f6f8fa'}
                src={newSmallPcImgSrc || pcImgSrc || featureBackImg}
            />
        </a>
        <div className="right">
            <a title={topicName} href={featureLink} target="_blank">{topicName}</a>
            <time>{formatPublishTime(createTime, (serverTime && serverTime !== '') && serverTime)}</time>
        </div>
    </div>
}
RightFeatureItem.propTypes = {
    topicName: string.isRequired,
    id: string.isRequired,
    createTime: number.isRequired
}

/** @desc 右侧推荐,热门,相关新闻等 */
const RightNews = (props) => {
    return <RightItemWrapper
        id={props.id || ''}
        titleBtn={
            <a className="more-icon" style={{ display: props.ismore === false ? 'none' : 'block' }} href={props.feature ? mixUrl.news('/feature') : mixUrl.news()} target="_blank" />}
        title={props.title}>
        <div className="right-news-wrapper">
            {isArray(props.data) && (props.data.length !== 0 ? props.data.map(function (item, index) {
                return props.feature
                    ? <RightFeatureItem
                        key={item.topic.id}
                        {...item.topic}
                    />
                    : <RightNewsItem
                        key={item.id}
                        rank={index}
                        {...item}
                    />
            }) : <div className="no-news">暂无内容</div>)}
        </div>
    </RightItemWrapper>
}

export default RightNews
