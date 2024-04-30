import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import Toast from '../../components/Toast'
export default () => {
    const { t } = useTranslation()
    const [usename, setuseName] = useState()
    const [uid, setUid] = useState()
    const dispatch = useDispatch()
    const [bindga, setBindga] = useState()
    // const [bindmobile, setBindmobile] = useState()
    const [bindemail, setBindemail] = useState()
    const [bindpwd, setBindpwd] = useState()
    const [kycstatus, setKycstatus] = useState()
    useEffect(() => {
        dispatch.public.getUseinfo({}).then((res) => {
            if (res.data.email !== '') {
                setuseName(res.data.email)
            } else {
                setuseName(res.data.mobile)
            }
            setUid(res.data.userId)
            setBindga(res.data.bindGA)
            // setBindmobile(res.mobile)
            setBindemail(res.data.email)
            setBindpwd(res.data.bindTradePwd)
            setKycstatus(res.data.verifyStatus)
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取用户信息错误')
        })
    }, [])
    return <div>
        <div className="usernew">
            <h2>{usename}</h2>
            <div className="user_uid">
                <span>UID：</span>
                <span>{uid}</span>
            </div>
            <div className="user_con_ter">
                <div className="user_con_google">
                    <h3>{t('header.sign.googlecode')}</h3>
                    <p style={{ marginBottom: '5px' }}>{t('usercenter.promptone')}</p>
                    <p style={{ margin: '0' }}>{t('usercenter.promptthree')}</p>
                    {bindga === true ? (<p className="user_con_google_no">{t('usercenter.binded')}</p>) : (<p className="user_con_google_to" onClick={() => {
                        window.location.href = '/secure/enbindgoogle?digi=en'
                    }}>{t('usercenter.bind')}</p>)}
                </div>
                {/* <div className="user_con_google">
                    <h3>{t('usercenter.bindphone')}</h3>
                    <p>{t('usercenter.promptone')}</p>
                    {bindmobile !== '' ? (<p className="user_con_google_no">{t('usercenter.binded')}</p>) : (<p className="user_con_google_to" onClick={() => {
                        window.location.href = '/secure/enbindmobile?digi=en'
                    }}>{t('usercenter.bind')}</p>)}
                </div> */}
                <div className="user_con_google">
                    <h3>{t('usercenter.bindemail')}</h3>
                    <p>{t('usercenter.promptone')}</p>
                    {bindemail !== '' ? (<p className="user_con_google_no">{t('usercenter.binded')}</p>) : (<p className="user_con_google_to" onClick={() => {
                        window.location.href = '/secure/enbindemail?digi=en'
                    }}>{t('usercenter.bind')}</p>)}
                </div>
                <div className="user_con_google">
                    <h3>{t('usercenter.paswd')}</h3>
                    <p>{t('usercenter.prompttwo')}</p>
                    {bindpwd === true ? (<p className="user_con_google_to" onClick={() => {
                        window.location.href = '/secure/enmoneypasswd?digi=en'
                    }}>{t('usercenter.amend')}</p>) : (<p className="user_con_google_to" onClick={() => {
                        window.location.href = '/secure/enmoneypasswd?digi=en'
                    }}>{t('usercenter.setting')}</p>)}
                </div>
                <div className="user_con_google">
                    <h3>{t('usercenter.setting')}</h3>
                    <p>{t('usercenter.promptkyc')}</p>
                    {kycstatus === 0 ? (<p className="user_con_google_to" onClick={() => {
                        window.location.href = '/secure/enkyc?digi=en'
                    }}>{t('usercenter.nokyc')}</p>) : kycstatus === 1 ? (<p className="user_con_google_to" onClick={() => {
                        window.location.href = '/secure/enkyc?digi=en'
                    }}>{t('usercenter.kycing')}</p>) : kycstatus === 3 ? (<p className="user_con_google_to" onClick={() => {
                        window.location.href = '/secure/enkyc?digi=en'
                    }}>{t('usercenter.kycfail')}</p>) : kycstatus === 2 ? (<p className="user_con_google_to" onClick={() => {
                        window.location.href = '/secure/enkyc?digi=en'
                    }}>{t('usercenter.kyced')}</p>) : ''}
                </div>
            </div>
        </div>
    </div>
}
