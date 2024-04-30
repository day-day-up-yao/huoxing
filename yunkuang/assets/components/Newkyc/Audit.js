import React from 'react'
import zhongimg from '../../public/imgs/new/zhong.png'
export default ({ verinfo, t }) => {
    return <div className="kyc-fail">
        <div className="fail-img">
            <img src={zhongimg} alt=""/>
        </div>
        <h3>{t('userkyc.audit')}</h3>
    </div>
}
