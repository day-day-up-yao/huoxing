import React, { Component } from 'react'
import { string } from 'prop-types'
import Cookies from 'js-cookie'
import Toast from '../Toast'

import { isNum, isPhone, trim, cookiesName, mixUrl, queryParam } from '../../public/index'
import { getSmsCode, isRegister, loginShowHide, getWechatUserInfo } from '../../redux/actions/login'

/**
 * @desc：判断是否登录
 * @method isLogin(passportId, dispatch)
 */
export const isLogin = (passportId, dispatch) => {
    if (!passportId) {
        dispatch(loginShowHide('account', true))
        // Toast.info('请先登录', 800)
        return false
    } else {
        return true
    }
}

/**
 * @desc：判断微信登录+是否绑定手机
 * @method wechatLogin ({ bindFn, wechatLoginFn })
 */
export async function wechatLogin ({ bindFn, wechatLoginFn }) {
    if (!queryParam('huoxing24_not') && !queryParam('huoxing24')) return
    const res = await getWechatUserInfo({
        accountKey: queryParam('huoxing24_not') || queryParam('huoxing24')
    }).catch(function (err) {
        Toast.info('微信用户信息获取错误')
        throw err
    })

    if (res.code === 1) {
        try {
            const info = Object.assign(res, {
                obj: JSON.parse(res.obj) // 转换obj
            })

            if (queryParam('huoxing24_not')) {
                if (bindFn) bindFn(info)
            } else if (queryParam('huoxing24')) {
                loginSuccess(info)
            }
        } catch (err) {
            Toast.info('微信用户信息解析错误')
        }
    } else {
        if (wechatLoginFn) wechatLoginFn()
    }
}

/**
 * @desc：登录成功
 * @method loginSucceeded(res)
 */
export const loginSuccess = (res) => {
    const info = res.obj

    let domain = ''
    const env = process.env.NODE_ENV
    if (env === 'test') domain = 'marslib.com'
    if (env === 'production') {
        const networkurl = window.location.hostname
        if (networkurl.indexOf('marsbit.cc') > -1) domain = 'marsbit.cc'
        if (networkurl.indexOf('marsbit.co') > -1) domain = 'marsbit.co'
        if (networkurl.indexOf('marstelegram.com') > -1) domain = 'marstelegram.com'
    }
    Cookies.set(cookiesName.nickName, info.nickName, { domain: domain, expires: 28 })
    Cookies.set(cookiesName.passportId, info.passportId, { domain: domain, expires: 28 })
    Cookies.set(cookiesName.iconUrl, info.iconUrl, { domain: domain, expires: 28 })
    Cookies.set(cookiesName.realAuth, info.realAuth, { domain: domain, expires: 28 })
    Cookies.set(cookiesName.faceAuth, info.faceAuth, { domain: domain, expires: 28 })
    Cookies.set(cookiesName.intro, info.introduce, { domain: domain })
    Cookies.set(cookiesName.token, encodeURI(info.token), { domain: domain, expires: 28 })
    Cookies.set(cookiesName.phone, info.phoneNum, { domain: domain, expires: 28 })

    /** @desc 如果为统一登陆界面，登录完成后跳转到首页，否则刷新页面 */
    let loginPath = false
    switch (window.location.pathname) {
        case '/account':
        case '/account/':
        case '/sms':
        case '/sms/':
        case '/wechat':
        case '/wechat/':
        case '/register':
        case '/register/':
        case '/retrievePassword':
        case '/retrievePassword/':
        case '/bind':
        case '/bind/':
            loginPath = true
            break
        default:
            loginPath = false
    }
    if (mixUrl.main().indexOf(window.location.host) > -1 && (loginPath || window.location.href.indexOf('/index?huoxing24') > -1)) {
        window.location.href = mixUrl.main()
    } else {
        window.location.reload()
    }
}

/**
 * @desc：图像验证码，短信验证码
 */
export class GraphSms extends Component {
    state = {
        graphAjaxRight: false, // 发送短信验证码时，图形验证码验证通过
        phoneRight: false, // 电话号码是否验证成功
        phoneTips: '', // 电话验证提示信息
        graphRight: false, // 图形验证
        graphToken: '', // 图形验证token
        graphAuth: '', // 图形验证Auth
        graphTips: '', // 图形验证码提示信息
        smsRight: false, // 短信验证码已经输入
        smsCodeBtnTxt: '发送验证码', // 发生验证码按钮文字
        smsTips: '' // 短信验证码提示信息
    }

    /** @desc 短信验证码接口返回错误 */
    smsApiFailed = (res) => {
        switch (res.code) {
            case -5:
            case -8:
            case -14:
                this.setState({
                    phoneTips: res.msg
                })
                break
            case -15:
                this.setState({
                    graphTips: res.msg
                })
                break
            case -6:
            case -7:
                this.setState({
                    smsTips: res.msg
                })
                break
            default:
                Toast.info(res.msg)
        }
    }

    /** @desc 电话号码验证 */
    phoneVerify = (phoneNumParam) => {
        const phoneNum = phoneNumParam || this.phoneNum.value
        if (phoneNum === '') {
            this.setState({
                phoneTips: '手机号不能为空'
            })
        } else if (!isPhone(phoneNum)) {
            this.setState({
                phoneTips: '请输入有效的手机号'
            })
        } else {
            this.setState({
                phoneTips: ''
            })
        }
    }
    phoneInput = (event) => {
        const val = event.target.value
        if (val.length > 11) {
            this.phoneNum.value = val.substr(0, 11)
        }
        if (val.length === 11 && isPhone(val)) {
            this.setState({
                phoneRight: true
            })
        } else {
            this.setState({
                phoneRight: false
            })
        }
    }

    /** @desc 短信验证码验证 */
    smsVerify = (smsCodeParam) => {
        const smsCode = smsCodeParam || this.smsCode.value
        if (smsCode === '') {
            this.setState({
                smsTips: '短信验证码不能为空'
            })
        } else if (smsCode.length < 6) {
            this.setState({
                smsTips: '短信验证码为6位数字'
            })
        } else if (!isNum(smsCode)) {
            this.setState({
                smsTips: '短信验证码为6位数字'
            })
        } else {
            this.setState({
                smsTips: ''
            })
        }
    }
    smsInput = () => {
        const val = event.target.value
        if (val.length > 6) {
            this.smsCode.value = val.substr(0, 6)
        }
        const lastVal = this.smsCode.value
        if (lastVal.length === 6 && isNum(lastVal)) {
            this.setState({
                smsRight: true
            })
        } else {
            this.setState({
                smsRight: false
            })
        }
    }

    /** @desc 图形验证是否成功并设置返回值 */
    graphVerify = () => {
        const { graphAuth, graphToken } = this.state
        if (graphAuth === '' || graphToken === '') {
            this.setState({
                graphTips: '请先进行图形验证'
            })
        }
    }

    /** @desc 清除电话提示 */
    clearPhoneTips = () => {
        this.setState({
            phoneTips: ''
        })
    }

    /** @desc 清除短信验证码提示 */
    clearSmsTips = () => {
        this.setState({
            smsTips: ''
        })
    }

    /** @desc 图形验证程序初始化 */
    graphVerifyProgram = () => {
        const This = this
        /* eslint-disable no-new */
        new YpRiddler({
            expired: 10,
            mode: 'dialog',
            winWidth: 440,
            lang: 'zh-cn', // 界面语言, 目前支持: 中文简体 zh-cn, 英语 en
            // langPack: LANG_OTHER, // 你可以通过该参数自定义语言包, 其优先级高于lang
            container: document.getElementById('graphCodeBox'),
            appId: 'a8c0a90197e14dbda2621a071fd256fa',
            version: 'v1',
            onError: function (param) {
                This.setState({
                    graphRight: false
                })

                if (!param.code) {
                    This.setState({
                        graphTips: '错误请求'
                    })
                } else if (parseInt(param.code / 100) === 5) {
                    // 服务不可用时，开发者可采取替代方案
                    This.setState({
                        graphTips: '验证服务暂不可用'
                    })
                } else if (param.code === 429) {
                    This.setState({
                        graphTips: '请求过于频繁，请稍后再试'
                    })
                } else if (param.code === 403) {
                    This.setState({
                        graphTips: '请求受限，请稍后再试'
                    })
                } else if (param.code === 400) {
                    This.setState({
                        graphTips: '非法请求，请检查参数'
                    })
                }
                // 异常回调
                This.setState({
                    graphTips: '验证服务异常'
                })
            },
            onSuccess: function (validInfo, close, defaultSuccess) {
                This.setState({
                    graphRight: true,
                    graphToken: validInfo.token,
                    graphAuth: validInfo.authenticate,
                    graphTips: ''
                })
                // 成功回调
                console.log('验证通过! token=' + validInfo.token + ', authenticate=' + validInfo.authenticate)
                // 验证成功默认样式
                defaultSuccess(true)
                close()
            },
            onFail: function (code, msg, retry) {
                This.setState({
                    graphRight: false
                })

                // 失败回调
                This.setState({
                    graphTips: `图形验证失败`
                })
                console.error('出错啦：' + msg + ' code: ' + code)
                retry()
            },
            beforeStart: function (next) {
                console.log('验证马上开始')
                next()
            },
            onExit: function () {
                // 退出验证 （仅限dialog模式有效）
                console.log('退出验证')
            }
        })
    }

    /** @desc 获取短信验证码 */
    getSmsCodeFunc = () => {
        const This = this
        const phoneNum = trim(this.phoneNum.value)
        const { graphToken, graphAuth } = this.state

        this.phoneVerify(phoneNum)
        this.graphVerify()

        async function sendSmsCode () { // 发送短信验证码
            const { loginType } = This.props

            const isExist = await isRegister(phoneNum).catch(function (err) {
                console.log(err)
                Toast.info('手机是否有注册验证错误')
            })

            let verifyType = 1 // 1注册，绑定手机号码， 2找回密码, 3短信登录
            switch (loginType) {
                case 'register':
                    verifyType = 1
                    break
                case 'sms':
                    verifyType = 3
                    break
                case 'bind':
                    if (isExist === 1) {
                        verifyType = 3
                    } else if (isExist === -1) {
                        verifyType = 1
                    } else {
                        console.log(isExist)
                        Toast.info('手机是否有注册验证失败')
                    }
                    break
                case 'retrievePassword':
                    verifyType = 2
                    break
            }

            let getSuccess = false

            const sendCode = () => getSmsCode({
                'phonenum': phoneNum,
                'countrycode': '86',
                'verifcategory': verifyType,
                'token': graphToken,
                'authenticate': graphAuth
            }).catch(function (err) {
                Toast.info('获取验证码错误')
                throw err
            })

            // 短信登录与密码找回直接进入倒计时，注册先验证手机号是否已经注册
            if (loginType === 'sms' || loginType === 'retrievePassword' || loginType === 'bind') {
                getSuccess = await sendCode()
            } else if (loginType === 'register') {
                const isExist = await isRegister(phoneNum).catch(function (err) {
                    Toast.info('手机是否有注册验证错误')
                    throw err
                })

                if (isExist.code === 1) {
                    This.setState({
                        phoneTips: '手机号已存在请直接登录'
                    })
                    return false
                } else if (isExist.code === -1) {
                    getSuccess = await sendCode()
                } else {
                    Toast.info(isExist.msg)
                }
            }

            return getSuccess
        }

        async function countDown () { // 图形验证码是否正确，并发送短信验证码
            const smsCodeRes = await sendSmsCode()

            if (!smsCodeRes.code) return
            if (smsCodeRes.code !== 1) {
                This.graphVerifyProgram()
                This.setState({
                    graphTips: '',
                    graphToken: '',
                    graphAuth: '',
                    graphRight: false
                })

                This.smsApiFailed(smsCodeRes)
            } else {
                This.setState({
                    graphRight: false,
                    smsCodeBtnTxt: '60s'
                }, function () {
                    This.setState({
                        graphAjaxRight: true,
                        codeTimer: setInterval(function () {
                            const txt = parseInt(This.state.smsCodeBtnTxt)
                            if (txt > 0) {
                                This.setState({
                                    smsCodeBtnTxt: `${txt - 1}s`
                                })
                            } else {
                                clearInterval(This.state.codeTimer)
                                This.graphVerifyProgram()
                                This.smsCode.value = ''
                                This.setState({
                                    smsCodeBtnTxt: `发送验证码`,
                                    graphAjaxRight: false
                                })
                            }
                        }, 1000)
                    })
                })
            }
        }

        if (this.state.graphRight && this.state.phoneRight) {
            countDown()
        }
    }

    componentDidMount () {
        this.graphVerifyProgram()
    }

    componentWillUnmount () {
        // 组件卸载前，清除定时器
        clearInterval(this.state.codeTimer)
        this.setState = (state, callback) => {
            return false
        }
    }

    render () {
        const { phoneRight, graphRight, graphTips, smsTips, smsCodeBtnTxt, phoneTips } = this.state
        const { t } = this.props
        return <div className="graph-sms">
            <div className="item">
                <div className="input-box">
                    <input
                        type="text"
                        placeholder={t('input_mobile_code')}
                        ref={(ref) => {
                            this.phoneNum = ref
                        }}
                        onFocus={this.clearPhoneTips}
                        onChange={this.phoneInput}
                    />
                </div>
                <p className="error">{phoneTips}</p>
            </div>

            <div className="item">
                <div className="input-box" id="graphCodeBox"/>
                <p className="error">{graphTips}</p>
            </div>

            <div className="item column">
                <div className="left">
                    <div className="input-box">
                        <input
                            placeholder={t('verify_code')}
                            ref={(ref) => {
                                this.smsCode = ref
                            }}
                            onFocus={this.clearSmsTips}
                            onChange={this.smsInput}
                        />
                    </div>
                    <p className="error">{smsTips}</p>
                </div>
                <div className="right">
                    <a
                        className={`code-btn ${(phoneRight && graphRight) ? '' : 'can-not-click'}`}
                        onClick={this.getSmsCodeFunc}>
                        {smsCodeBtnTxt === '发送验证码' ? t('send_verify_code') : smsCodeBtnTxt}
                    </a>
                </div>
            </div>
        </div>
    }
}

GraphSms.propTypes = {
    loginType: string.isRequired // register注册， retrievePassword找回密码, sms短信登录
}
