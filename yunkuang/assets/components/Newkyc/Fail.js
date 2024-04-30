import React, { useCallback } from 'react'
import failimg from '../../public/imgs/new/fail.png'
export default ({ verinfo, t, setLevelkyc }) => {
    const handleToanew = useCallback(() => {
        // setInfostatus(2)
        // setAgain(2)
        setLevelkyc(
            {
                kycLevel: 10,
                verifyStatus: 0
            }
        )
    })
    return <div className="kyc-fail">
        <div className="fail-img">
            <img src={failimg} alt=""/>
        </div>
        <h3>{t('usercenter.kycfail')}</h3>
        <p>{verinfo.refusedReason}</p>
        <div className="fail-rz" onClick={handleToanew}>{t('userkyc.againkyc')}</div>
    </div>
}
