import React from 'react'
export default ({ t }) => {
    return <div className="hashheader">
        <div className="headers">
            <div className="left">{t('newpage.header.myhash')}</div>
            {/* <div className='right'>
                <span onClick={() => {
                    setGetincome(true)
                }}>{t('hasgrate.tqsy')}</span>
                <span onClick={() => {
                    window.location.href = '/extractrecords'
                }}>{t('hasgrate.tqjl')}</span>
            </div> */}
        </div>
    </div>
}
