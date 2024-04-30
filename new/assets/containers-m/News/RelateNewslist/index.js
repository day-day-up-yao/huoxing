import React from 'react'
import { useTranslation } from 'react-i18next'

import RelatedNewsItem from '../RelatedNewsItem'
import { isArray } from 'multiPublic/index'

import '../index.scss'

export default (props) => {
  const { relatedNews } = props
  const { t } = useTranslation()
  return <div className="news-correlation">
    <h6>{t('news_get_you')}</h6>
    <div className="news-list-box">
        {isArray(relatedNews) && relatedNews.map(function (item, index) {
            return <div className="news-list-more" data="">
                <RelatedNewsItem item={item} key={index} />
            </div>
        })}
    </div>
  </div>
}
