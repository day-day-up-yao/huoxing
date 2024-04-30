import React, { useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { mixUrl } from 'multiPublic'

import './index.scss'
import { isJson } from '../../../../_multiappsharing/public'
// import moreIcon from '../image/ad-recommend-btn.png'

export default () => {
    const { adRecommend } = useSelector((state) => ({
        adRecommend: state.home.adRecommend
    }), shallowEqual)

    const linkFn = useCallback((idlink) => {
        if (typeof window !== 'undefined') {
            const reqhost = window.location
            return mixUrl.news(`/${idlink}.html`, reqhost)
        } else {
            return mixUrl.news(`/${idlink}.html`)
        }
    }, [])

    return (
        <div className="left-ad-news" style={{ display: adRecommend.length > 0 ? 'block' : 'none' }}>
            <div className="left-ad-news-header">
                <div className="left-ad-news-title">精选内容</div>
                {/* <a className="left-ad-news-more" target="_blank" href={mixUrl.news(`/feature/20200622131120211592`)}>
                    更多
                    <img className="left-ad-news-more-img" src={moreIcon} />
                </a> */}
            </div>
            <div className="left-ad-news-list">
                {
                    adRecommend && adRecommend.map((item, index) => {
                        const nameArr = item.tagsV2 && isJson(item.tagsV2) && Array.isArray(JSON.parse(item.tagsV2)) && JSON.parse(item.tagsV2).length > 0 ? JSON.parse(item.tagsV2) : null
                        return (
                            <div className="left-ad-news-item" key={index}>
                                <a className="left-ad-news-text" target="_blank" href={linkFn(item.id)} >
                                    {item.title}
                                </a>
                                <div className="top-news-tags-list" style={{ display: 'none' }}>
                                    {
                                        nameArr && nameArr.map((tagItem, tagIndex) => {
                                            if (tagIndex === 0 || (tagIndex === 1 && (nameArr[0].name.length + nameArr[1].name.length < 10))) {
                                                return (
                                                    <a className="top-news-time" target="_blank" href={mixUrl.news(`/tags/${tagItem.name}`)} key={tagIndex}>
                                                        {tagItem.name}
                                                    </a>
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
