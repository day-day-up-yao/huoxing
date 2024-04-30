import React from 'react'
import { useTranslation } from 'react-i18next'
import stoplogo from '../../public/imgs/new/blocklogo.png'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    return <div className="stop">
        <div className="stop-con">
            <div className="stop-img">
                <img src={stoplogo} alt="" />
            </div>
            <div className="stop-text">
                <p>{t('public.gengju')}</p>
                <p>{t('public.county')}</p>
                <p>{t('public.zence')}</p>
                <p>{t('public.ifyou')}</p>
            </div>
        </div>
    </div>
}
