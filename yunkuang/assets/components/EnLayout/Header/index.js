import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { cookiesName } from '../../../public/js/index'
import Enlogo from '../../../public/imgs/newpage/enlogot.png'
import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    const [enflag, setEnflag] = useState(false)
    const [pitch, setPitch] = useState(0)
    useEffect(() => {
        if (window.location.pathname === '/secure/enproperty') {
            setPitch(2)
        } else if (window.location.pathname === '/secure/enhashrate') {
            setPitch(1)
        } else if (window.location.pathname === '/secure/enusercenter') {
            setPitch(3)
        } else if (window.location.pathname === '/secure/enorder') {
            setPitch(4)
        }
    }, [])
    return <div className="layout-header-enpc">
        <div className="enpc-con">
            <div className="enpc-con-left" onClick={() => {
                window.location.href = '/secure/enhashrate'
            }}>
                <img src={Enlogo} alt=""/>
            </div>
            <div className="enpc-con-right" onMouseEnter={() => { setEnflag(true) }} onMouseLeave={() => { setEnflag(false) }}>
                <span>{t('header.nav.mine')}</span>
                <div className="enpc-con-right-ul" style={{ display: enflag ? '' : 'none', left: (i18n.language).toLowerCase().substring(0, 2) === 'zh' ? '' : '-10px' }}>
                    <div>
                        <a href="/secure/enhashrate" style={{ color: pitch === 1 ? '#64AFAF' : '' }}>{t('newpage.header.myhash')}</a>
                    </div>
                    <div>
                        <a href="/secure/enproperty" style={{ color: pitch === 2 ? '#64AFAF' : '' }}>{t('newpage.header.myasset')}</a>
                    </div>
                    <div>
                        <a href="/secure/enusercenter" style={{ color: pitch === 3 ? '#64AFAF' : '' }}>{t('newpage.header.usecenter')}</a>
                    </div>
                    <div>
                        <a href="/secure/enorder" style={{ color: pitch === 4 ? '#64AFAF' : '' }}>{t('newpage.header.order')}</a>
                    </div>
                    <div>
                        <a onClick={() => {
                            dispatch.public.userLoginout().then((res) => {
                                if (res.data.success) {
                                    Cookies.remove(cookiesName.userId)
                                    Cookies.remove(cookiesName.cToken)
                                    window.location.href = '/'
                                }
                            })
                        }}>{t('header.nav.getout')}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
