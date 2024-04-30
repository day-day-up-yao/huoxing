import React, { Component } from 'react'
import { func } from 'prop-types'

import { GraphSms, loginSuccess } from './public'
import Toast from '../Toast'
import { sendLogin } from '../../redux/actions/login'
import { mixUrl } from '../../public/index'

import account from './images/icon-account.png'
import wechat from './images/icon-wechat.png'

class Sms extends Component {
    /** @desc 登录接口返回错误 */
    loginApiFailed = (res) => {
        switch (res.code) {
            case -5:
            case -6:
            case -14:
                this.graphSms.setState({
                    phoneTips: res.msg
                })
                break
            case -4:
                this.graphSms.setState({
                    smsTips: res.msg
                })
                break
            default:
                Toast.info(res.msg)
        }
    }

    /** @desc 确认短信登录 */
    smsHandle = () => {
        const graphSms = this.graphSms
        graphSms.phoneVerify()
        graphSms.smsVerify()

        const { phoneRight, smsRight } = graphSms.state
        if (!phoneRight || !smsRight) return false

        const This = this
        sendLogin('/login', {
            phonenum: graphSms.phoneNum.value,
            verifycode: graphSms.smsCode.value,
            verifycategory: 3
        }).then(function (res) {
            if (res.code === 1) {
                loginSuccess(res)
            } else {
                This.loginApiFailed(res)
            }
        }).catch(function (err) {
            Toast.info('短信登录错误')
            throw err
        })
    }

    componentDidMount () {
        // 回车确认
        const This = this
        window.onkeyup = function (event) {
            if (event.keyCode === 13) {
                This.smsHandle()
            }
        }
    }

    render () {
        const { loginStatus, mobile, t } = this.props
        return <div className="content">
            <div className="header">
                <h1>{t('message_login')}</h1>
                <a className="new-account" onClick={() => {
                    loginStatus('register', true)
                }}>
                    {t('register_new_account')}
                    <span className="arrow-icon"/>
                </a>
            </div>
            <div className="body">
                <GraphSms
                    ref={(ref) => {
                        this.graphSms = ref
                    }}
                    loginType="sms"
                    t={t}
                />
                <button className="submit" onClick={this.smsHandle}>{t('sure')}</button>
                <div className="other-way">
                    <p>{t('other_ways_login')}</p>
                    <div className="ways">
                        {!mobile && <a className="wechat" title={t('wechat_login')} onClick={() => {
                            if (mixUrl.main().indexOf(window.location.host) > -1) {
                                loginStatus('wechat', true)
                            } else {
                                window.location.href = mixUrl.main('/wechat')
                            }
                        }}><img src={wechat} alt={t('wechat_login')}/></a>}
                        <a className="account" title={t('account_login')} onClick={() => {
                            loginStatus('account', true)
                        }}><img src={account} alt={t('account_login')}/></a>
                    </div>
                </div>
            </div>
        </div>
    }
}

Sms.propTypes = {
    loginStatus: func.isRequired
}

export default Sms
