import React from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'
import mLogo from './m-img/m-b-logo.png'

export default function () {
    const { t } = useTranslation()
    return <div className="bottom-cont">
        <p className="logo"><a href="https://www.marsbit.co"><img src={mLogo} alt="" /></a></p>
        <p className="share" style={{ display: 'none' }}>
            <a href="https://twitter.com/Mars_Finance" target="_blank" className="tw"></a>
            <a href="https://t.me/MarsFinance" target="_blank" className="db"></a>
        </p>
        <p className='slogan'>{t('business_cooperation')}：tg: @Ulysses2047</p>
        <p className="copyright">Copyright MarsBit All Rights Reserved.</p>
        <div className="clearfix"></div>
    </div>
}
