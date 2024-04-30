import React, { Component } from 'react'
import { string, func } from 'prop-types'

import Toast from '../Toast'

import { isPsd, mixUrl, trim, queryParam } from '../../public/index'
import { sendLogin } from '../../redux/actions/login'
import { GraphSms, loginSuccess } from './public'

class Register extends Component {
    state = {
        codeTimer: null, // 短信倒计时定时器
        psdTips: null, // 密码错误提示
        psdRight: false // 密码输入符合规则
    }

    /** @desc 注册/找回密码接口返回错误 */
    registerApiFailed = (res) => {
        switch (res.code) {
            case -2:
            case -5:
                this.graphSms.setState({
                    phoneTips: res.msg
                })
                break
            case -6:
                this.graphSms.setState({
                    smsTips: res.msg
                })
                break
            default:
                Toast.info(res.msg)
        }
    }

    /** @desc 密码验证 */
    psdVeriry = (passwordParam) => {
        const password = passwordParam.target ? passwordParam.target.value : passwordParam

        if (!isPsd(password)) {
            this.setState({
                psdTips: '密码长度6~16位，且同时包含字母和数字',
                psdRight: false
            })
        } else {
            this.setState({
                psdTips: '',
                psdRight: true
            })
        }
    }

    /** @desc 清除密码提示 */
    clearPsdTips = () => {
        this.setState({
            psdTips: ''
        })
    }

    /** @desc 注册/修改密码后，直接登录 */
    loginHandle = (phoneNum, password) => {
        sendLogin('/login', {
            phonenum: phoneNum,
            password: password
        }).then(function (res) {
            if (res.code === 1) {
                loginSuccess(res)
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            Toast.info('账号登录错误')
            throw err
        })
    }

    /** @desc 确认注册, 找回密码 */
    registerHandle = () => {
        const { psdRight } = this.state
        const password = trim(this.password.value)

        const graphSms = this.graphSms
        graphSms.phoneVerify()
        graphSms.smsVerify()
        const { phoneRight, smsRight } = graphSms.state
        const phoneNum = graphSms.phoneNum.value
        const smsCode = graphSms.smsCode.value

        this.psdVeriry(password)

        let sendOk = phoneRight && smsRight && psdRight
        if (!sendOk) return false

        const This = this
        const { loginType } = this.props
        const { encodePsd } = require('../../public/indexBrowser')
        if (loginType === 'register') { // 注册
            const params = {
                phonenum: phoneNum,
                password: encodePsd(password),
                verifcode: smsCode,
                verifcategory: 1
            }
            if (queryParam('inviteCode')) params.inviteCode = queryParam('inviteCode')
            sendLogin('/register', params).then(function (res) {
                if (res.code === 1) {
                    This.loginHandle(phoneNum, encodePsd(password))
                } else {
                    This.registerApiFailed(res)
                }
            }).catch(function (err) {
                Toast.info('用户注册错误')
                throw err
            })
        } else if (loginType === 'retrievePassword') {
            sendLogin('/getbackuserpw', { // 找回密码
                phonenum: phoneNum,
                password: encodePsd(password),
                verifcode: smsCode,
                verifcategory: 2
            }).then(function (res) {
                if (res.code === 1) {
                    This.loginHandle(phoneNum, encodePsd(password))
                } else {
                    This.registerApiFailed(res)
                }
            }).catch(function (err) {
                Toast.info('修改密码错误')
                throw err
            })
        }
    }

    componentDidMount () {
        // 回车确认
        const This = this
        window.onkeyup = function (event) {
            if (event.keyCode === 13) {
                This.registerHandle()
            }
        }
    }

    render () {
        const { loginType, loginStatus, mobile, t } = this.props
        const { psdTips } = this.state
        return <div className="content">
            <div className="header">
                <h1 className={mobile ? 'mobile' : ''}>{loginType === 'register' ? t('register_marsbit') : t('retrieve_password')}</h1>
            </div>
            <div className="body">
                <GraphSms
                    ref={(ref) => {
                        this.graphSms = ref
                    }}
                    loginType={loginType}
                    t={t}
                />
                <div className="item password">
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder={t('input_password')}
                            ref={(ref) => {
                                this.password = ref
                            }}
                            onFocus={this.clearPsdTips}
                            onBlur={this.psdVeriry}
                        />
                    </div>
                    <p className="error">{psdTips}</p>
                </div>
                <a
                    className="protocol"
                    href={mixUrl.main('/protocol')}
                    target="_blank">
                    {t('register_agree')}
                    <span>《{t('marsbit_user_agreement')}》</span>
                </a>
                <button className="submit" onClick={this.registerHandle}>{t('to_sure')}</button>
                <a className="tips" onClick={() => {
                    loginStatus('account', true)
                }}>
                    <span>{t('haved_account_to_login')}</span>
                    <span className="arrow-icon"/>
                </a>
            </div>
        </div>
    }
}

Register.propTypes = {
    loginStatus: func.isRequired,
    loginType: string.isRequired // register注册， retrievePassword找回密码, sms短信登录
}

export default Register
