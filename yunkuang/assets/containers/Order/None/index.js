import React from 'react'
import { useTranslation } from 'react-i18next'
import noorder from '../../../public/imgs/new/noorder.png'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    return <div className="none">
        <div className="none-con">
            <div className="none-img">
                <img src={noorder} alt=""/>
            </div>
            <div className="none-text">{t('notorder')}</div>
        </div>
    </div>
}
