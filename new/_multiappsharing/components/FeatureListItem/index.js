import React from 'react'
import { object } from 'prop-types'
import { mixUrl } from 'multiPublic/index'
import featureBackImg from '../../public/img/feature-backImg.png'

import './index.scss'

const FeatureListItem = (props) => {
    const { item } = props
    const { topic, contentList } = item
    const featureLink = mixUrl.news(`/feature/${topic.id}`)
    const newsLink = contentList && contentList[0].url
    return <li className="feature-list-item-wrapper" key={topic.id}>
        <div className="content">
            <a className="info" href={featureLink} title={topic.topicName} target="_blank">
                <img src={topic.newSmallPcImgSrc || topic.pcImgSrc || featureBackImg} alt={topic.topicName}/>
                <p>{topic.topicName}</p>
            </a>
            {contentList && <a className="news" href={newsLink} title={contentList[0].title} target="_blank">
                {contentList[0].title}
            </a>}
        </div>
    </li>
}

FeatureListItem.propTypes = {
    item: object.isRequired
}

export default FeatureListItem
