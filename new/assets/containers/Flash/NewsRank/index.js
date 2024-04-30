import React from 'react'

import './index.scss'
import { mixUrl } from 'multiPublic/index'
import RightItemWrapper from 'multiComps/RightItemWrapper'

const NewsRank = (props) => {
    return <RightItemWrapper
        title={props.title}>
        <div className="right-news-wrapper">
            <div className="news-sort-box">
                {props.data.map((item, index) => {
                    return <div className="list-box clearfix" key={item.id}>
                        <span>{index + 1}</span>
                        <a title={item.title} target="_blank" className="right-text" href={mixUrl.news(`/${item.id}.html`)}>
                            {item.title}
                        </a>
                    </div>
                })}
            </div>
        </div>
    </RightItemWrapper>
}

export default NewsRank
