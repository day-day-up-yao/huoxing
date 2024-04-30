import React from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'

export default ({ num }) => {
    const { t } = useTranslation()
    return <div className="prompt-order">
        <div className="prompt-order-con">
            <div className="con-order-title">{t('property.title')}</div>
            <div className="con-order-info">{t('orderdetail.ofteninfo')}{num}{t('orderdetail.feeorderinfo')}</div>
            <div className="con-order-know" onClick={() => {
                window.localStorage.setItem('costorder', true)
                window.location.href = '/order?num=2'
            }}>{t('orderdetail.knowm')}</div>
        </div>
    </div>
}
