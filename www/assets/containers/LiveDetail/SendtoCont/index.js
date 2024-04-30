import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendtoCont, uploadImg } from '../../../redux/actions/live'
// import { websocket } from 'multiPublic/index'
import './index.scss'
import Toast from 'multiComps/Toast'

class SendtoCont extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showMore: false,
            setNumber: 0,
            setValue: '',
            valueKey: '',
            textImg: '',
            isUpload: false
        }
    }

    handleChange = (e) => {
        let valueKey = this.textarea.value.length
        if (valueKey > 1000) {
            Toast.info('字数超过限制！')
            return false
        } else {
            this.setState({
                setNumber: valueKey,
                setValue: e.target.value
            })
        }
    }
    getSendtoCont = () => {
        const { dispatch, login, castId } = this.props
        const This = this
        let passportId = login.userInfo.info.passportId
        if (this.state.setValue !== '' || this.state.textImg !== '') {
            dispatch(sendtoCont({
                castId: castId,
                passportId: passportId,
                content: JSON.stringify({ content: { 'content': this.state.setValue, 'imgs': [this.state.textImg] } })
            })).then(function (res) {
                if (res.code === 1) {
                    This.hidden()
                    This.textarea.value = ''
                    This.setState({
                        textImg: '',
                        setValue: ''
                    })
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }

    dataURLtoBlob = (dataurl) => {
        let arr = dataurl.split(',')
        let mime = arr[0].match(/:(.*?);/)[1]
        let bstr = atob(arr[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        return new Blob([u8arr], { type: mime })
    }

    coverImgUpload = (e) => {
        let This = this
        let file = e.target.files[0] // 获取文件
        if (window.FileReader) { // 如果浏览器支持FileReader
            const reader = new FileReader() // 新建一个FileReader对象
            reader.readAsDataURL(file) // 读取文件url
            reader.onloadend = function (e) {
                This.setState({
                    textImg: e.target.result,
                    isUpload: !!true
                })
                uploadImg({
                    uploadFile: This.dataURLtoBlob(e.target.result),
                    type: 'news',
                    data: '',
                    watermark: 0
                }).then(res => {
                    if (res.code === 1) {
                        This.setState({
                            textImg: res.obj,
                            isUpload: !!false
                        })
                    }
                })
            }
        }
    }

    closeImg = () => {
        this.setState({
            textImg: ''
        })
    }

    hidden = () => {
        this.props.contShow(false)
        this.textarea.value = ''
        this.setState({
            textImg: '',
            setValue: ''
        })
    }

    render () {
        const { sendto } = this.props
        return (
            <div style={{ display: sendto ? 'block' : 'none' }}>
                <div className="overspread"></div>
                <div className="newWindow">
                    <div className="newWindow-header">
                        <span className="header-title">发布内容</span>
                        <span className="header-number"><span>{this.state.setNumber}</span>/1000</span>
                    </div>
                    <textarea className="newWindow-text" placeholder="请输入直播内容,保持在1000字以内"
                        id="changeKey"
                        ref={(val) => { this.textarea = val }}
                        onChange={this.handleChange}
                        defaultValue={this.state.setValue}
                        maxLength={1000}
                    />
                    <div className="newWindow-btn">
                        <div className="newWindow-btn-left">
                            <input onChange={this.coverImgUpload} name="file" id="file" type="file" accept=".jpg,.jpeg,.png" className="inputfile"/>
                            <label htmlFor="file" className='btn-left-choose'></label>
                            <div className="btn-right-choose" style={{ display: this.state.textImg === '' ? 'none' : 'block' }}>
                                <img src={this.state.textImg} alt=""/>
                                <div className="choose-close" onClick={this.closeImg}></div>
                            </div>
                        </div>
                        <div className="newWindow-btn-right">
                            <button className="btn-left" onClick={this.hidden}>取消</button>
                            <button className="btn-right" onClick={this.getSendtoCont} disabled={this.state.isUpload}>发布</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(SendtoCont)
