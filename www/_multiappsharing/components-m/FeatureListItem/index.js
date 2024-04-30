import React from 'react'
import { object } from 'prop-types'
import { mixUrl } from 'multiPublic/index'
import featureBackImg from '../../public/img/feature-backImg.png'

import './index.scss'

const FeatureListItem = (props) => {
    const { item } = props
    const { topic } = item
    const featureLink = mixUrl.news(`/feature/${topic.id}`)
    return <li className="m-feature-list-item-wrapper" key={topic.id}>
        <div className="content">
            <a className="info" href={featureLink} title={topic.topicName}>
                <img src={topic.newSmallPcImgSrc || topic.pcImgSrc || featureBackImg} alt={topic.topicName} />
                <h3>{topic.topicName}</h3>
                {/* {contentList && <p>{contentList[0].title}</p>} */}
                {/* <p>{contentList.length}篇文章吧</p> */}
            </a>
        </div>
    </li>
}

FeatureListItem.propTypes = {
    item: object.isRequired
}

export default FeatureListItem
