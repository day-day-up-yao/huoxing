import React from 'react'
import initSense from './senseApi.js'

class Sense extends React.Component {
    constructor () {
        super()
        this.state = {
            id: '1b140c59a6da8e906cb4b7ca6687e075',
            senseReady: false,
            interactive: 3, // 1:注册2:登录3:短信接口4:领券\抽奖5:下单6:发帖评论0:其他
            sense: false
        }
    }
    componentDidMount () {
        initSense(
            {
                id: this.state.id,
                lang: this.props.lang,
                onError: err => {
                    window.trackPageError({
                        type: 'error_sense',
                        error_code: err.status,
                        error_message: err.statusText
                    })
                }
            },
            sense => {
                // 配置类型,默认3
                sense.setInfos(() => {
                    return {
                        interactive: this.props.type || this.state.interactive
                    }
                })
                // 如果有验证出现，该接口监听验证马上就会显示，如：显示验证弹层时，隐藏页面上一些元素等；
                sense.onNextWillShow(() => {
                    this.props.onNextWillShow && this.props.onNextWillShow()
                })
                // 验证成功
                sense.onSuccess(data => {
                    this.props.onSuccess && this.props.onSuccess(data.challenge)
                })
                // 验证失败
                sense.onError(err => {
                    this.props.onError && this.props.onError(err)
                })
                // 关闭验证,如：用户没点验证，把验证弹层关掉了。
                sense.onClose(() => {
                    this.props.onClose && this.props.onClose()
                })

                this.setState({
                    sense
                })
            }
        )
    }
    // 执行验证
    sense () {
        this.state.sense && this.state.sense.sense()
    }
    // 重置验证
    reset () {
        this.state.sense && this.state.sense.reset()
    }
    render () {
        return <span />
    }
}

export default Sense
