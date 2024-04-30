import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    return <div className="helpcenter">
        <div className="helpcenter_top">
            <h3>{t('termsof.title')}</h3>
        </div>
        <div className="helpcenter_con">
            <div className="helpcenter_con_one" style={{ marginTop: '30px' }}>
                <p>{t('termsof.con')}</p>
            </div>
            <div className="helpcenter_con_one" id="scrollone">
                <h4>{t('termsof.fw')}</h4>
                <p>
                    <span>{t('termsof.fwone')}</span><br/>
                    <span>{t('termsof.fwtwo')}</span><br/>
                </p>
            </div>
            <div className="helpcenter_con_one">
                <h4>{t('termsof.ql')}</h4>
                <p>
                    <span>{t('termsof.qlone')}</span><br/>
                    <span>{t('termsof.qlthree')}</span><br/>
                    <span>{t('termsof.qlfour')}</span><br/>
                </p>
            </div>
            <div className="helpcenter_con_one">
                <h4>{t('termsof.yw')}</h4>
                <p>
                    <span>{t('termsof.ywone')}</span><br/>
                    <span>{t('termsof.ywtwo')}</span><br/>
                    <span>{t('termsof.ywthree')}</span><br/>
                </p>
            </div>
            <div className="helpcenter_con_one">
                <h4>{t('termsof.tk')}</h4>
                <p>
                    <span>{t('termsof.tkone')}</span><br/>
                    <span>{t('termsof.tktwo')}</span><br/>
                    <span>{t('termsof.tkthree')}</span><br/>
                    <span>{t('termsof.tkfour')}</span><br/>
                </p>
            </div>
            <div className="helpcenter_con_one">
                <h4>{t('termsof.bm')}</h4>
                <p>
                    <span>{t('termsof.bmone')}</span><br/>
                    <span>{t('termsof.bmtwo')}</span><br/>
                    <span>{t('termsof.bmthree')}</span><br/>
                </p>
            </div>
            <div className="helpcenter_con_one">
                <h4>{t('termsof.zz')}</h4>
                <p>
                    <span>{t('termsof.zzone')}</span><br/>
                    <span>{t('termsof.zztwo')}</span><br/>
                    <span>{t('termsof.zzthree')}</span><br/>
                </p>
            </div>
            <div className="helpcenter_con_one">
                <h4>{t('termsof.law')}</h4>
                <p>
                    <span>{t('termsof.lawone')}</span><br/>
                    <span>{t('termsof.lawtwo')}</span><br/>
                </p>
            </div>
        </div>
    </div>
}
