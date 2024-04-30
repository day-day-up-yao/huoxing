import React, { useState } from 'react'
// import Toast from '../../components/Toast'
// import { useDispatch } from 'react-redux'
import Transferlist from '../../components/Transferlist'
export default ({ myhasrate, t }) => {
    // const dispatch = useDispatch()
    const [getincome, setGetincome] = useState(false)
    return <div className="hashheader">
        <div className="headers">
            <div className="left">{t('newpage.header.myhash')}</div>
            <div className='right'>
                <span onClick={() => {
                    setGetincome(true)
                }}>{t('hasgrate.tqsy')}</span>
                <span onClick={() => {
                    window.location.href = '/secure/enextractrecords'
                }}>{t('hasgrate.tqjl')}</span>
            </div>
        </div>
        {getincome && <Transferlist myhasrate={myhasrate} onClose={(e) => {
            // console.log(e)
            setGetincome(e)
        }} />}
    </div>
}
