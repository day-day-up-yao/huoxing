import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    return <div className="hx">
        <h3>{t('huoxingintroduce.hx')}</h3>
        <div className="hx-con">
            <p>{t('huoxingintroduce.top')}</p>
            <p>{t('huoxingintroduce.cent')}</p>
            <p>{t('huoxingintroduce.con')}</p>
            <p>{t('huoxingintroduce.nav')}</p>
        </div>
    </div>
}
