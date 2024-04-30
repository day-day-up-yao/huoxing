import React, {Component} from 'react'
import {Modal, Button} from 'antd'

let timeOut, timer

export default class CloseWindow extends Component {
    constructor () {
        super()
        this.state = {
            secondsToGo: 5
        }
    }

    componentDidMount () {
        timer = setInterval(() => {
            this.setState({
                secondsToGo: this.state.secondsToGo -= 1
            })
        }, 1000)
        timeOut = setTimeout(() => {
            clearInterval(timer)
            window.close()
        }, this.state.secondsToGo * 1000)
    }

    componentWillUnmount () {
        clearInterval(timer)
        clearInterval(timeOut)
    }

    handleOk = () => {
        window.close()
    }

    render () {
        return <Modal
            visible={this.props.closeLoading}
            title="提示"
            onOk={this.handleOk}
            onCancel={() => { this.props.handleCancel(timeOut) }}
            footer={[
                <Button key="submit" type="primary" onClick={this.handleOk}>
                    立即关闭
                </Button>
            ]}
        >
            此窗口即将在 {this.state.secondsToGo} s 内关闭
        </Modal>
    }
}
