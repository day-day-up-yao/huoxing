import React from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'

export default (props) => {
    const { title, desc, onGofn, onCancel, type, onSurefn } = props
    const { t } = useTranslation()
    return <div className="prompt-box">
        <div className="prompt-box-top">
            <h3>{title}</h3>
            <div className="prompt-box-desc">{desc}</div>
        </div>
        {type === 0 ? (
            <div className="prompt-box-bottom">
                <div className="box-bottom-btn" onClick={onGofn}>{t('public.goon')}</div>
                <div onClick={onCancel}>{t('public.cancel')}</div>
            </div>
        ) : (
            <div className="prompt-box-bottom bottom-center">
                <div className="box-bottom-btn" onClick={onSurefn}>{t('public.sure')}</div>
            </div>
        )}

    </div>
}
