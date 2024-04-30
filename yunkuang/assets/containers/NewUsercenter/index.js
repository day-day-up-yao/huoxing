import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import PerSonal from './PerSonal'
import AccountSety from './AccountSety'
import KycCertif from './KycCertif'
import Toast from '../../components/Toast'

export default () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [userinfo, setUserinfo] = useState()
    const [selectnum, setSelectnum] = useState(0)
    const [history, setHistory] = useState()
    const [verifyinfo, setVerifyinfo] = useState()
    // const [kycinfo, setKycinfo] = useState()
    const selectlist = [
        { name: t('public.personcenter'), type: 0 },
        { name: t('h5.mine.user'), type: 1 }
        // { name: t('public.kycrenz'), type: 2 }
    ]
    useEffect(() => {
        dispatch.public.getUseinfo().then((res) => {
            if (res.code === 0) {
                setUserinfo(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.public
            .loginHistory({
                pageNum: 1,
                pageSize: 20
            })
            .then((res) => {
                if (res.code === 0) {
                    setHistory(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        dispatch.public.verifyInfo().then((res) => {
            if (res.code === 0) {
                setVerifyinfo(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return (
        <div className="new-usercenter">
            <div className="header">
                <div className="header-center">
                    {selectlist.map((item, index) => {
                        return (
                            <div
                                className={`select-item ${selectnum === index && 'pitch-on'}`}
                                key={index}
                                onClick={() => {
                                    setSelectnum(index)
                                }}
                            >
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="usercenter-con">
                {selectnum === 0 && (
                    <PerSonal
                        userinfos={userinfo}
                        historylist={history}
                        gettypes={(type) => {
                            setSelectnum(type)
                        }}
                    />
                )}
                {selectnum === 1 && <AccountSety userinfo={userinfo} />}
                {selectnum === 2 && <KycCertif kycinfo={userinfo} verify={verifyinfo} />}
            </div>
        </div>
    )
}
