import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    useEffect(() => {
        document.title = t('defi.defititle')
    }, [])
    return <div className="deftitle">
        <h3>{t('defititle.productezplain')}</h3>
        <div className="deftitle-con">
            <h4>{t('defititle.know')}</h4>
            <p>{t('defititle.dknow')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.jsbj')}</h4>
            <p>{t('defititle.djsbj')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.dqr')}</h4>
            <p>{t('defititle.ddqr')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.ggj')}</h4>
            <p>{t('defititle.dggj')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.hkbz')}</h4>
            <p>{t('defititle.dhkbz')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.hku')}</h4>
            <p>{t('defititle.dhku')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.syrules')}</h4>
            <p>{t('defititle.ifone')}</p>
            <p>{t('defititle.iftwo')}</p>
            <p>{t('defititle.ifthree')}</p>
            <p>{t('defititle.iffour')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.ruleusdt')}</h4>
            <p>{t('defititle.uifone')}</p>
            <p>{t('defititle.uiftwo')}</p>
            <p>{t('defititle.uifthree')}</p>
            <p>{t('defititle.uiffour')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.ehkrule')}</h4>
            <p>{t('defititle.eifone')}</p>
            <p>{t('defititle.eiftwo')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.uhkrule')}</h4>
            <p>{t('defititle.uhifone')}</p>
            <p>{t('defititle.uhintwo')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.undo')}</h4>
            <p>{t('defititle.undot')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.reseem')}</h4>
            <p>{t('defititle.redeemt')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.whatrisk')}</h4>
            <p>{t('defititle.riskt')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.sure')}</h4>
            <p>{t('defititle.suret')}</p>
        </div>
        <div className="deftitle-con">
            <h4>{t('defititle.whatway')}</h4>
            <p>{t('defititle.whatwayt')}</p>
        </div>
    </div>
}
