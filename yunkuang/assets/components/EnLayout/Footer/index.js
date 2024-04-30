import React, { useState, useEffect } from 'react'
// import { useTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next'
import './index.scss'
// import { isJp } from '../../../public/js/index'
import Enlogob from '../../../public/imgs/newpage/enlogob.png'

export default (props) => {
    const { t, i18n } = useTranslation()
    const [lang, setLang] = useState('en')
    useEffect(() => {
        if ((i18n.language).toLowerCase().substring(0, 2) === 'en') {
            setLang('en')
        } else {
            setLang('ja')
        }
    }, [])
    return <div className="layout-footer-pc">
        <div className="content">
            <div className="contact">
                <a className="information" href="" target="_blank"><img src={Enlogob} title={t('public.logo')} /></a>

                <div className="contact">
                    <p><span>{t('footer.contact.service')}</span>Support@secure1475.com</p>
                    <p><span>Copyright secure1475 All Rights Reserved</span></p>
                </div>
            </div>
            <div className="business">
                <div className="business-list">
                    <h3>{t('footer.contact.support')}</h3>
                    <div className="business-list-con">
                        <ul>
                            <li>
                                {lang === 'en' && <a href="/resource/docs/HelpCenter.pdf">{t('footer.contact.help')}</a>}
                                {lang === 'ja' && <a href="/resource/docs/HelpCenterJP.pdf">{t('footer.contact.help')}</a>}
                            </li>
                            <li>
                                {lang === 'en' && <a href="/resource/docs/TermsofUse.pdf">{t('footer.contact.user')}</a>}
                                {lang === 'ja' && <a href="/resource/docs/TermsofUseJP.pdf">{t('footer.contact.user')}</a>}
                            </li>
                            <li>
                                {lang === 'en' && <a href="/resource/docs/PrivacyPolicy.pdf">{t('footer.contact.privacy')}</a>}
                                {lang === 'ja' && <a href="/resource/docs/PrivacyPolicyJP.pdf">{t('footer.contact.privacy')}</a>}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {lang === 'en' && <a href="/resource/docs/LegalNotice.pdf">{t('footer.contact.law')}</a>}
                                {lang === 'ja' && <a href="/resource/docs/LegalNoticeJP.pdf">{t('footer.contact.law')}</a>}
                            </li>
                            <li>
                                {lang === 'en' && <a href="/resource/docs/AboutUs.pdf">{t('footer.contact.aboutour')}</a>}
                                {lang === 'ja' && <a href="/resource/docs/AboutusJP.pdf">{t('footer.contact.aboutour')}</a>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
