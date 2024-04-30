import React from 'react'
export default ({ agreeflag, setAgreeflag, t }) => {
    return <div className="deposit-reagree" style={{ display: agreeflag ? 'flex' : '' }}>
        <div className="reagree">
            <h3>{t('record.fxxy')}</h3>
            <div className="lend-position-con-close" onClick={() => { setAgreeflag(false) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                        fill="currentColor"></path>
                </svg>
            </div>
            <div className="reagree-text">
                <div>{t('record.xyone')}</div>
                <div>{t('record.xytwo')}</div>
                <div>{t('record.xythree')}</div>
                <div>{t('record.xyfour')}</div>
                <div>{t('record.xyfive')}</div>
                <div>{t('record.xysix')}</div>
                <div>{t('record.xyseven')}</div>
                <div>{t('record.xyeight')}</div>
                <div>{t('record.xynine')}</div>
            </div>
        </div>
    </div>
}
