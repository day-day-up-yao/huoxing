import React from 'react'
import { func } from 'prop-types'
import { useTranslation } from 'react-i18next'

import { getWechatQrCodeUrl } from '../../redux/actions/login'

import sms from './images/icon-sms.png'
import account from './images/icon-account.png'

const WeChat = (props) => {
    /** @desc 获取props */
    const { loginStatus } = props
    const { t } = useTranslation()

    return <div className="content wechat">
        <div className="body">
            <div className="wechat-qrcode">
                <iframe
                    scrolling="no"
                    frameBorder="0"
                    src={getWechatQrCodeUrl()}
                />
            </div>
            <div className="other-way">
                <p>{t('other_ways_login')}</p>
                <div className="ways">
                    <a className="account" title={t('account_login')} onClick={() => {
                        loginStatus('account', true)
                    }}><img src={account} alt={t('account_login')}/></a>
                    <a className="sms" title={t('message_login')} onClick={() => {
                        loginStatus('sms', true)
                    }}><img src={sms} alt={t('message_login')}/></a>
                </div>
            </div>
        </div>
    </div>
}

WeChat.propTypes = {
    loginStatus: func.isRequired
}

export default WeChat
