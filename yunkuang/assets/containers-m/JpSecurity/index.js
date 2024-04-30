import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'
import Toast from '../../components/Toast'

export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [uid, setUid] = useState()
    const [bindga, setBindga] = useState()
    const [bindmobile, setBindmobile] = useState()
    const [bindemail, setBindemail] = useState()
    const [bindpwd, setBindpwd] = useState()
    const [kycstatus, setKycstatus] = useState()
    useEffect(() => {
        dispatch.public.getUseinfo({}).then((res) => {
            if (res.code === 30000) {
                Toast.info(res.msg)
                window.location.href = '/jplogin'
                return
            }
            setUid(res.data.userId)
            setBindga(res.data.bindGA)
            setBindmobile(res.data.mobile)
            setBindemail(res.data.email)
            setBindpwd(res.data.bindTradePwd)
            setKycstatus(res.data.verifyStatus)
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取用户信息错误')
        })
    }, [])
    return (
        <div className="jp-security-page">
            <div className="jp-security-item-box">
                <div className="jp-security-item">
                    <div className="jp-security-item-text">アカウントUID</div>
                    <div className="jp-security-item-text jp-security-item-text-color2">{uid}</div>
                </div>
            </div>
            <div className="jp-security-item-box">
                <div className="jp-security-item">
                    <div className="jp-security-item-text">Google認証</div>
                    {bindga === true ? (<p className="jp-security-item-text">{t('usercenter.binded')}</p>) : (<p className="jp-security-item-text" onClick={() => {
                        window.location.href = '/bindgoogle'
                    }}>{t('usercenter.bind')}</p>)}
                </div>
                <div className="jp-security-item">
                    <div className="jp-security-item-text">メール認証</div>
                    {bindemail !== '' ? (<p className="jp-security-item-text">{bindemail}</p>) : (<p className="jp-security-item-text" onClick={() => {
                        window.location.href = '/bindemail'
                    }}>{t('usercenter.bind')}</p>)}
                </div>
                <div className="jp-security-item">
                    <div className="jp-security-item-text">メッセージ認証</div>
                    {/* <div className="jp-security-item-text">{bindmobile !== '' ? bindmobile : ''}</div> */}
                    {bindmobile !== '' ? (<p className="jp-security-item-text">{bindmobile}</p>) : (<p className="jp-security-item-text" onClick={() => {
                        window.location.href = '/bindmobile'
                    }}>{t('usercenter.bind')}</p>)}
                </div>
            </div>
            <div className="jp-security-item-box">
                <div className="jp-security-item">
                    <div className="jp-security-item-text">実名認証</div>
                    {kycstatus === 0 ? (<p className="jp-security-item-text" onClick={() => {
                        window.location.href = '/newkyc'
                    }}>{t('usercenter.nokyc')}</p>) : kycstatus === 1 ? (<p className="jp-security-item-text" onClick={() => {
                        window.location.href = '/newkyc'
                    }}>{t('usercenter.kycing')}</p>) : kycstatus === 3 ? (<p className="jp-security-item-text" onClick={() => {
                        window.location.href = '/newkyc'
                    }}>{t('usercenter.kycfail')}</p>) : kycstatus === 2 ? (<p className="jp-security-item-text" onClick={() => {
                        window.location.href = '/newkyc'
                    }}>{t('usercenter.kyced')}</p>) : ''}
                </div>
                <div className="jp-security-item">
                    <div className="jp-security-item-text">資金パスワード</div>
                    {bindpwd === true ? (<p className="jp-security-item-text" onClick={() => {
                        window.location.href = '/moneypasswd'
                    }}>{t('usercenter.amend')}</p>) : (<p className="jp-security-item-text" onClick={() => {
                        window.location.href = '/moneypasswd'
                    }}>{t('usercenter.setting')}</p>)}
                </div>
            </div>
        </div>
    )
}
