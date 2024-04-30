import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import Toast from '../../components/Toast'
import { isMobile } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    // const [kycstatus, setKycstatus] = useState()
    const [userinfo, setUserinfo] = useState({
        bindGA: false,
        bindPassword: true,
        bindTradePwd: false,
        defaultAccountId: '',
        displayLevel: '',
        email: '',
        isAgent: 0,
        kycLevel: 0,
        kycVerifyStatus: 0,
        mobile: '',
        nationalCode: '',
        registerDate: '',
        registerType: 0,
        source: null,
        userId: '',
        userType: 0,
        verifyStatus: 0
    })
    useEffect(() => {
        dispatch.public
            .getUseinfo()
            .then((res) => {
                if (res.code === 0) {
                    setUserinfo(res.data)
                } else {
                    Toast.info(res.msg)
                }
                // setKycstatus(res.data.verifyStatus)
            })
            .catch(function (err) {
                console.log(err)
                Toast.info('获取用户信息错误')
            })
    }, [])
    return (
        <div>
            {!isMobile() ? '' : <Header title={t('usercenter.usercenter')} />}
            <div className="usernew">
                <h2>{userinfo.email !== '' ? userinfo.email : userinfo.mobile}</h2>
                <div className="user_uid">
                    <span>UID：</span>
                    <span>{userinfo.userId}</span>
                </div>
                <div className="user-center-list">
                    <div className="user_con_ter">
                        <div className="user_con_google">
                            <h3>{t('header.sign.googlecode')}</h3>
                            <p className="usercenter-desc-con">{t('usercenter.promptone')}</p>
                            {userinfo.bindGA === true ? (
                                <p className="user_con_google_no">{t('usercenter.binded')}</p>
                            ) : (
                                <p
                                    className="user_con_google_to"
                                    onClick={() => {
                                        window.location.href = '/bindgoogle'
                                    }}
                                >
                                    {t('usercenter.bind')}
                                </p>
                            )}
                        </div>
                        <div className="user_con_google">
                            <h3>{t('usercenter.bindphone')}</h3>
                            <p className="usercenter-desc-con">{t('usercenter.promptone')}</p>
                            {userinfo.mobile !== '' ? (
                                <p className="user_con_google_no">{t('usercenter.binded')}</p>
                            ) : (
                                <p
                                    className="user_con_google_to"
                                    onClick={() => {
                                        window.location.href = '/bindmobile'
                                    }}
                                >
                                    {t('usercenter.bind')}
                                </p>
                            )}
                        </div>
                        <div className="user_con_google">
                            <h3>{t('usercenter.bindemail')}</h3>
                            <p className="usercenter-desc-con">{t('usercenter.promptone')}</p>
                            {userinfo.email !== '' ? (
                                <p className="user_con_google_no">{t('usercenter.binded')}</p>
                            ) : (
                                <p
                                    className="user_con_google_to"
                                    onClick={() => {
                                        window.location.href = '/bindemail'
                                    }}
                                >
                                    {t('usercenter.bind')}
                                </p>
                            )}
                        </div>
                        <div className="user_con_google">
                            <h3>{t('usercenter.paswd')}</h3>
                            <p className="usercenter-desc-con">{t('usercenter.prompttwo')}</p>
                            {userinfo.bindTradePwd === true ? (
                                <p
                                    className="user_con_google_to"
                                    onClick={() => {
                                        window.location.href = '/moneypasswd'
                                    }}
                                >
                                    {t('usercenter.amend')}
                                </p>
                            ) : (
                                <p
                                    className="user_con_google_to"
                                    onClick={() => {
                                        window.location.href = '/moneypasswd'
                                    }}
                                >
                                    {t('usercenter.setting')}
                                </p>
                            )}
                        </div>
                        <div className="user_con_google">
                            <h3>{t('usercenter.setting')}</h3>
                            <p className="usercenter-desc-con">{t('usercenter.promptkyc')}</p>
                            {userinfo.kycVerifyStatus === 0 && (
                                <p
                                    className="user_con_google_to"
                                    onClick={() => {
                                        window.location.href = '/Newkyc'
                                    }}
                                >
                                    {t('usercenter.nokyc')}
                                </p>
                            )}
                            {userinfo.kycVerifyStatus === 1 && (
                                <p
                                    className="user_con_google_to"
                                    onClick={() => {
                                        window.location.href = '/Newkyc'
                                    }}
                                >
                                    {t('usercenter.kycing')}
                                </p>
                            )}
                            {userinfo.kycVerifyStatus === 2 && (
                                <p
                                    className="user_con_google_to"
                                    onClick={() => {
                                        window.location.href = '/Newkyc'
                                    }}
                                >
                                    {t('usercenter.kyced')}
                                </p>
                            )}
                            {userinfo.kycVerifyStatus === 3 && (
                                <p
                                    className="user_con_google_to"
                                    onClick={() => {
                                        window.location.href = '/Newkyc'
                                    }}
                                >
                                    {t('usercenter.kycfail')}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
