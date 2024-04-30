import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

import './index.scss'

// import succimg from '../../public/imgs/new/changesucc.png'

export default (props) => {
    const { tbinfo } = props
    const { t } = useTranslation()
    const [dao, setDao] = useState(10)
    useEffect(() => {
        let timer = null
        let num = 10
        timer = setInterval(() => {
            if (num > 0) {
                num--
                setDao(`${num}s`)
            } else {
                Cookies.remove('au_token')
                window.location.href = '/overdue'
                clearInterval(timer)
            }
        }, 1000)
    }, [])
    return <div className="succ-info">
        <div className="succ-con">
            <h3>{t('public.waitsq')}</h3>
            <div className="succ-bottom">
                <ul>
                    <li>
                        <p>{t('property.mony')}</p>
                        <p>{tbinfo.currey}</p>
                    </li>
                    <li>
                        <p>{t('property.adds')}</p>
                        <p>{tbinfo.address}</p>
                    </li>
                    <li>
                        <p>{t('property.headmoney')}</p>
                        <p>{tbinfo.num}{tbinfo.currey}</p>
                    </li>
                    <li>
                        <p>{t('property.getnum')}</p>
                        <p>{tbinfo.poundage}{tbinfo.currey}</p>
                    </li>
                </ul>
                <div className="succ-progress">
                    <div className="succ-progress-one">
                        <div className="progress-left">
                            <div className="progress-left-quan"/>
                        </div>
                        <div className="progress-right">{t('userkyc.submit')}</div>
                    </div>
                    <div className="succ-progress-one">
                        <div className="progress-left other">
                            <div className="progress-left-quan others"/>
                        </div>
                        <div className="progress-right">{t('public.sc')}</div>
                    </div>
                    <div className="succ-progress-one">
                        <div className="progress-left other">
                            <div className="progress-left-quan others"/>
                        </div>
                        <div className="progress-right">{t('public.clz')}</div>
                    </div>
                    <div className="succ-progress-one">
                        <div className="progress-left lastother">
                            <div className="progress-left-quan others"/>
                        </div>
                        <div className="progress-right">{t('public.tbsucc')}</div>
                    </div>
                </div>
            </div>
            <div className="succ-button">{t('public.setsuccess')}({dao})</div>
            {/* <img src={succimg} alt=""/>
            <p>{t('public.setsucc')}({dao})</p> */}
        </div>
    </div>
}
