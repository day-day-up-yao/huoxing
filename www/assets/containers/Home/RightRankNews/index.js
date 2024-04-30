import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { mixUrl } from 'multiPublic'

import './index.scss'

export default () => {
    const { rankNews } = useSelector((state) => ({
        rankNews: state.home.rankNews
    }), shallowEqual)
    return (
        <div className="right-rank-news" style={{ display: rankNews && rankNews.length > 0 ? 'block' : 'none' }}>
            <h3 className="right-rank-news-title">24H热门新闻</h3>
            <div className="right-rank-news-sort">
                {
                    rankNews && rankNews.map((item, index) => {
                        return (
                            <div className="right-rank-news-list" key={index}>
                                <span>{index + 1}</span>
                                <a className="right-text" title={item.title} target="_blank" href={mixUrl.news(`/${item.id}.html`)}>
                                    {item.title}
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
