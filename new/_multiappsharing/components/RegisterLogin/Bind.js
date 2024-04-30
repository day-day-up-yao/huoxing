import React, { Component } from 'react'
import { func } from 'prop-types'

import { GraphSms, loginSuccess, wechatLogin } from './public'
import { queryParam } from '../../public/index'
import Toast from '../Toast'

import { isRegister, bindPhoneNew, bindPhoneOld } from '../../redux/actions/login'

class Bind extends Component {
    state = {
        pageShow: false,
        userInfo: this.props.wechatUserInfo || null
    }

    /** @desc 绑定手机号 */
    bindHandle = () => {
        const { userInfo } = this.state
        const graphSms = this.graphSms
        graphSms.phoneVerify()
        graphSms.smsVerify()

        const { phoneRight, smsRight } = graphSms.state

        async function bindPhone () {
            const isExist = await isRegister(graphSms.phoneNum.value).catch(function (err) {
                Toast.info('手机是否有注册验证错误')
                throw err
            })

            let bind = {
                code: -100,
                msg: '绑定手机号失败'
            }
            const params = {
                phonenum: graphSms.phoneNum.value,
                // verifycode: graphSms.smsCode.value, // 因为服务器接口 参数拼错，改动较大，临时处理
                unionid: userInfo.unionid,
                nickName: userInfo.nickName,
                iconUrl: userInfo.iconUrl,
                platform: 'pc'
            }

            if (isExist.code === 1) {
                params.verifycode = graphSms.smsCode.value // 因为服务器接口 参数拼错，改动较大，临时处理
                bind = await bindPhoneOld(params).catch(function (err) {
                    Toast.info('已注册手机号绑定错误')
                    throw err
                })
            } else if (isExist.code === -1) {
                params.verifcode = graphSms.smsCode.value // 因为服务器接口 参数拼错，改动较大，临时处理
                bind = await bindPhoneNew(params).catch(function (err) {
                    Toast.info('未注册手机号绑定错误')
                    throw err
                })
            } else {
                console.log(isExist)
                Toast.info('手机是否有注册验证失败')
                return
            }

            if (bind.code === 1) {
                loginSuccess(bind)
            } else {
                Toast.info(bind.msg)
            }
        }

        if (phoneRight && smsRight) {
            bindPhone()
        }
    }

    componentDidMount () {
        const This = this

        const { loginStatus } = this.props

        if (this.state.userInfo) { // 此处为微信登录，服务端跳转到首页时，/RegisterLogin/index.js请求接口获取wechatLogin,传递wechatUserinfo
            this.setState({ pageShow: true })
        } else { // 如果直接跳转到bind页面时，自己请求接口获取wechatLogin
            if (!queryParam('huoxing24_not') && !queryParam('huoxing24')) {
                loginStatus('wechat', true)
                return
            }
            wechatLogin({
                bindFn: (info) => {
                    This.setState({
                        pageShow: true,
                        userInfo: info.obj
                    })
                },
                wechatLoginFn: () => {
                    loginStatus('wechat', true)
                }
            })
        }
    }

    render () {
        const { pageShow } = this.state
        const { loginStatus } = this.props
        return <div className="content" style={{ display: pageShow ? 'block' : 'none' }}>
            <div className="header">
                <h1>绑定账号</h1>
                <a className="new-account" onClick={() => {
                    loginStatus('register', true)
                }}>
                    注册新账号
                    <span className="arrow-icon"/>
                </a>
            </div>
            <div className="body">
                <GraphSms
                    ref={(ref) => {
                        this.graphSms = ref
                    }}
                    loginType="bind"
                />
                <button className="submit" onClick={this.bindHandle}>确认</button>
                <a className="tips" onClick={() => {
                    loginStatus('account', true)
                }}>
                    <span>已有账号，直接登录</span>
                    <span className="arrow-icon"/>
                </a>
            </div>
        </div>
    }
}

Bind.propTypes = {
    loginStatus: func.isRequired
}

export default Bind
