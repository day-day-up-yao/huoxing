import React from 'react'
import { useTranslation } from 'react-i18next'
import { isSecure1475 } from '../../public/js/index'

export default (props) => {
    const { userinfo } = props
    const { t } = useTranslation()
    return <div className="second-con">
        <h3>{t('public.an')}</h3>
        <h4>{t('public.antitle')}</h4>
        <div className='second-box'>
            <div className="box-left">
                {isSecure1475() ? (
                    <a href="/secure/enbindgoogle">{t('header.sign.googlecode')}</a>
                ) : (
                    <a href="/bindgoogle">{t('header.sign.googlecode')}</a>
                )}
                <i>{t('public.tj')}</i>
            </div>
            <div className="box-left">
                {isSecure1475() ? (
                    <a href={userinfo.mobile === '' ? '/secure/enbindmobile' : '/secure/enbindemail'}>{userinfo.email === '' ? t('header.sign.yzemail') : t('header.sign.yzphone')}</a>
                ) : (
                    <a href={userinfo.mobile === '' ? '/bindmobile' : '/bindemail'}>{userinfo.email === '' ? t('header.sign.yzemail') : t('header.sign.yzphone')}</a>
                )}
            </div>
        </div>
        <div className="noneed" onClick={() => {
            window.location.reload()
        }}>{t('userkyc.noneed')}</div>
    </div>
}
