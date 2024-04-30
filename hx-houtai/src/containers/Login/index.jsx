/**
 * Author：zhoushuanglong
 * Time：2017/7/31
 * Description：login
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Row, Col, message } from 'antd'
import './index.scss'
import { login, getSmsCode } from '../../actions/index'
import { trim, isPhone } from '../../public/index'

// const confirm = Modal.confirm
const FormItem = Form.Item
class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: '',
            graphToken: '',
            graphAuth: '',
            smsCode: '',
            smsCodeBtnTxt: '发送验证码',
            iconLoading: false
        }
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const _this = this
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.enterIconLoading()
                _this.props.actions.login(values, (data) => {
                    if (data.code !== 1 || !data.code) {
                        _this.setState({
                            iconLoading: false
                        })
                    }
                })
            }
        })
    }

    accountChange = (e) => {
        this.setState({
            value: e.target.value
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
                    graphToken: '',
                    graphAuth: ''
                })

                if (!param.code) {
                    message.info('错误请求')
                } else if (parseInt(param.code / 100) === 5) {
                    // 服务不可用时，开发者可采取替代方案
                    message.info('验证服务暂不可用')
                } else if (param.code === 429) {
                    message.info('请求过于频繁，请稍后再试')
                } else if (param.code === 403) {
                    message.info('请求受限，请稍后再试')
                } else if (param.code === 400) {
                    message.info('非法请求，请检查参数')
                }
                // 异常回调
                message.info('验证服务异常')
            },
            onSuccess: function (validInfo, close, defaultSuccess) {
                This.setState({
                    graphToken: validInfo.token,
                    graphAuth: validInfo.authenticate
                })
                // 成功回调
                console.log('验证通过! token=' + validInfo.token + ', authenticate=' + validInfo.authenticate)
                // 验证成功默认样式
                defaultSuccess(true)
                close()
            },
            onFail: function (code, msg, retry) {
                This.setState({
                    graphToken: '',
                    graphAuth: ''
                })
                // 失败回调
                message.info('图形验证失败')
                console.error('出错啦：' + msg + ' code: ' + code)
                retry()
            },
            beforeStart: function (next) {
                console.log('验证马上开始')
                next()
            },
            onExit: function () {
                This.setState({
                    graphToken: '',
                    graphAuth: ''
                })
                // 退出验证 （仅限dialog模式有效）
                console.log('退出验证')
            }
        })
    }

    /** @desc 获取短信验证码 */
    getSmsCodeFunc = () => {
        const This = this
        const phoneNum = trim(this.state.value)
        const { graphToken, graphAuth, smsCodeBtnTxt } = this.state
        if (smsCodeBtnTxt !== '发送验证码') return

        if (!isPhone(phoneNum)) {
            message.info('手机格式不正确')
            return
        }

        if (graphAuth === '' || graphAuth === '') {
            message.info('请进行图形验证')
            return
        }

        (async function countDown () { // 图形验证码是否正确，并发送短信验证码
            const smsCodeRes = await getSmsCode({
                'phonenum': phoneNum,
                'countrycode': '86',
                'verifcategory': '3',
                'token': graphToken,
                'authenticate': graphAuth
            }).catch(function (err) {
                message.info('获取验证码错误')
                throw err
            })

            if (!smsCodeRes) return
            if (smsCodeRes.code !== 1) {
                This.graphVerifyProgram()
                This.setState({
                    graphToken: '',
                    graphAuth: ''
                })
            } else {
                This.setState({
                    smsCodeBtnTxt: '60s'
                }, function () {
                    This.setState({
                        codeTimer: setInterval(function () {
                            const txt = parseInt(This.state.smsCodeBtnTxt)
                            if (txt > 0) {
                                This.setState({
                                    smsCodeBtnTxt: `${txt - 1}s`
                                })
                            } else {
                                clearInterval(This.state.codeTimer)
                                This.graphVerifyProgram()
                                This.setState({
                                    smsCodeBtnTxt: `发送验证码`
                                })
                            }
                        }, 1000)
                    })
                })
            }
        })()
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
        const {getFieldDecorator} = this.props.form
        return <div className="login-wrap">
            <header className="clearfix"><div className="logo">{/* <img src={logo}/> */}</div><h3>MarsBit管理后台</h3></header>
            <div className="login-main">
                <div className="login-contain">
                    {/* <div className="login-icon"></div> */}
                    <h3>用户登录</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form" name="login">
                        <FormItem name="nickNameOrphoneNum">
                            {getFieldDecorator('nickNameOrphoneNum', {
                                rules: [{required: true, message: '请输入账号'}],
                                initialValue: this.state.value
                            })(
                                <Input onChange={(e) => { this.accountChange(e) }} prefix={<Icon type="user"/>} type="text" placeholder="请输入账号"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <div className="input-box" id="graphCodeBox"/>
                        </FormItem>
                        <FormItem name="phoneCode">
                            <Row gutter={8}>
                                <Col span={16}>
                                    {getFieldDecorator('phoneCode', {
                                        rules: [{ required: true, message: '请输入短信验证码' }]
                                    })(
                                        <Input prefix={<Icon type="cloud-o"/>} placeholder="短信验证码" />
                                    )}
                                </Col>
                                <Col span={8}>
                                    <Button onClick={this.getSmsCodeFunc}>{this.state.smsCodeBtnTxt}</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem name="password">
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码'}],
                                initialValue: ''
                            })(
                                <Input prefix={
                                    <Icon type="lock"/>
                                } type="password" placeholder="请输入密码"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {/* <a className="login-form-forgot" href="">忘记密码</a> */}
                            <Button type="primary" htmlType="submit" loading={this.state.iconLoading} className="login-form-button">登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        loginInfo: state.loginInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({login}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login))
