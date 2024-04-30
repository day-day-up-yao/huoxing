import React from 'react'
import { useTranslation } from 'react-i18next'

import aiimg from '../../public/img/aiicon.png'

import './index.scss'

export default (props) => {
  const { isH5 } = props
  const { t } = useTranslation()
  return <div className={`news-synopsis-ai ${isH5 && 'news-synopsis-ai-h5'}`} >
    <div className={`news-synopsis-ai-text ${isH5 && 'news-synopsis-ai-text-h5'}`}>
      <img src={aiimg} alt=""/>
      <span>{t('abstract-title')}</span>
      <div className="news-synopsis-ai-text-tip">
          {t('abstract-news')}
      </div>
      {/* <ReactTooltip extraClass="news-synopsis-ai-text-tip" place="bottom" effect="solid" desiredPlace="left"/> */}
    </div>
  </div>
}
