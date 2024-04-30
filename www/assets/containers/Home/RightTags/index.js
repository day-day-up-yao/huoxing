import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

export default () => {
    const { t } = useTranslation()
    const { tagsData } = useSelector((state) => ({
        tagsData: state.home.tagsData
    }), shallowEqual)

    return (
        <div className="right-tags" style={{ display: tagsData.length > 0 ? 'block' : 'none' }}>
            <a className="right-tags-title">
                {t('hot_door_title')}
                {/* <div className="right-tags-arrow"></div> */}
            </a>
            <div className="right-tags-cont">
                {
                    tagsData && tagsData.map((item, index) => {
                        return (
                            <a style={{ display: item.name ? 'flex' : 'none' }} href={item.url} target="_blank" title={item.name} key={index}>
                                {item.name}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}
