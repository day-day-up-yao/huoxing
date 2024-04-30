import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { mixUrl } from 'multiPublic'

import './index.scss'
import defaultImg from '../image/default-img.png'

export default () => {
    const { t } = useTranslation()
    const { subjectData } = useSelector((state) => ({
        subjectData: state.home.subjectData
    }), shallowEqual)

    return (
        <div className="right-subject" style={{ display: subjectData.length > 0 ? 'block' : 'none' }}>
            <a className="right-subject-title" href={mixUrl.news(`/feature`)} target="_blank">
                {t('most_new_topic')}
                <div className="right-subject-arrow"></div>
            </a>
            <div className="right-subject-list">
                {
                    subjectData && subjectData.map((item, index) => {
                        return (
                            <a className="right-subject-item" key={index} title={item.dTopic.topicName} target="_blank" href={item.aUrl}>
                                <img className="right-subject-item-img" src={item.dTopic.newSmallPcImgSrc ? item.dTopic.newSmallPcImgSrc : defaultImg} alt={item.dTopic.topicName} />
                                <h5 className="right-subject-item-title">{item.dTopic.topicName}</h5>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}
