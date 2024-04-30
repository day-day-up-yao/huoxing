import React from 'react'
import { useTranslation } from 'react-i18next'

import PopupBg from '../../PopupBg'
import succimg from '../../../public/imgs/new/changesucc.png'

import './index.scss'

export default (props) => {
    const { title, onsureFn } = props
    const { t } = useTranslation()
    return <PopupBg
        children={
            <div className="set-succc">
                <img src={succimg} alt=""/>
                <div className="succ-title">{title}</div>
                <div className="succ-desc">{t('public.succdesc')}</div>
                <div className="succ-btn"
                    onClick={() => {
                        onsureFn()
                    }}
                >{t('header.sign.sures')}</div>
            </div>
        }
    />
}
