import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
import { formatTime, isMobile } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [sylist, setSylist] = useState()
    useEffect(() => {
        dispatch.public.ExtractRecords({}).then((res) => {
            if (res.code === 0) {
                setSylist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="extract">
        {!isMobile() ? '' : <Header title={t('hasgrate.tqjl')}/>}
        {!isMobile() ? (
            <h3>{t('hasgrate.tqjl')}</h3>
        ) : ''}
        <div className="extract-con">
            <ul>
                <li>{t('hasgrate.bz')}</li>
                <li>{t('hasgrate.tqbumber')}</li>
                <li>{t('hasgrate.tqtime')}</li>
            </ul>
            {Array.isArray(sylist) && sylist.map((item, index) => {
                return <ol key={index}>
                    <li>{item.currency}</li>
                    <li>{item.amount}</li>
                    <li>{formatTime(item.createAt, 'yyyy-MM-dd hh:mm')}</li>
                </ol>
            })}
        </div>
    </div>
}
