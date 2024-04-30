import React from 'react'
export default ({ verinfo, t }) => {
    return <div className="newkyc-success-list">
        <p>{t('userkyc.kycsucc')}</p>
        <ul>
            <li>
                <span>{t('userkyc.contry')}</span>
                <span>{verinfo.nationality}</span>
            </li>
            <li>
                <span>{t('userkyc.name')}</span>
                <span>{verinfo.firstName}</span>
            </li>
            <li>
                <span>{t('userkyc.names')}</span>
                <span>{verinfo.secondName}</span>
            </li>
            <li>
                <span>{verinfo.cardType}</span>
                <span>{verinfo.cardNo}</span>
            </li>
        </ul>
    </div>
}
