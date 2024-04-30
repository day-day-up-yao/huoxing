import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default ({ newsContent }) => {
    const { t } = useTranslation()
    let authStyle = null
    let authStyleBg = null
    let authName = null
    switch (parseInt(newsContent.vGrade)) {
        case 1:
            authStyle = 'rgba(255, 123, 1, 1)'
            authStyleBg = 'rgba(255, 123, 1, 0.1)'
            authName = t('author_info_self')
            break
        case 2:
            authStyle = 'rgba(10, 127, 242, 1)'
            authStyleBg = 'rgba(10, 127, 242, 0.1)'
            authName = t('author_info_media')
            break
        case 3:
            authStyle = 'rgba(10, 127, 242, 1)'
            authStyleBg = 'rgba(10, 127, 242, 0.1)'
            authName = t('author_info_enterprise')
            break
    }
    return <div className="author-type" style={{ display: authStyle && parseInt(newsContent.cateId) === 1 ? 'inline-block' : 'none', background: authStyleBg, color: authStyle }}>
        {authName}
    </div>
}
