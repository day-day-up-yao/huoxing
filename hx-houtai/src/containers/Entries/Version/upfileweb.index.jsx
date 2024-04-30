import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Form, Row, Col, Button, Upload, Icon, message, Progress, Input } from 'antd'
import { axiosFormData } from '../../../public/index'
import {hashHistory} from 'react-router'
import './version.scss'
const FormItem = Form.Item

let uploadId = ''
let currIndex = 1
let pause = false

class VersionUpfile extends Component {
    constructor () {
        super()
        this.state = {
            updateOrNot: false,
            uploading: false,
            apkfileList: [],
            apkList: [],
            fileUrl: null,
            progressNum: 0,
            videofileList: [],
            videoList: [],
            id: null,
            password: ''
        }
    }

    componentDidMount () {
        const {location} = this.props
        this.setState({
            id: location.query.id
        })
    }
    handleUpload = () => {
        if (this.state.password === '' || this.state.password !== 'passwordAPP') {
            alert('请输入正确的密码')
            return
        }
        const {videoList, id} = this.state
        let file = videoList[0]
        let totalSize = file.size // 文件大小
        let blockSize = 1024 * 1024 * 2 // 块大小
        let blockCount = Math.ceil(totalSize / blockSize) // 总块数
        // 创建FormData对象
        let formData = new FormData()
        formData.append('id', id)
        formData.append('fileName', file.name) // 文件名
        formData.append('blockCount', blockCount) // 总块数
        formData.append('currIndex', currIndex) // 当前上传的块下标
        formData.append('uploadId', uploadId) // 上传编号
        formData.append('uploadFile', null)
        formData.append('password', 'passwordAPP')
        formData.append('channel', 'web')
        formData.append('type', '')
        this.setState({
            uploading: true
        })
        this.UploadVideo(file, formData, totalSize, blockCount, blockSize)
    }

    UploadVideo = (file, formData, totalSize, blockCount, blockSize) => {
        if (pause) {
            return // 暂停
        }
        try {
            let start = (currIndex - 1) * blockSize
            let end = Math.min(totalSize, start + blockSize)
            let uploadFile = file.slice(start, end)
            formData.set('uploadFile', uploadFile)
            formData.set('currIndex', currIndex)
            formData.set('uploadId', uploadId)

            axiosFormData('post', '/app/upload', formData, (res) => {
                if (res.request) {
                    clearInterval(this.timeOut)
                    this.timeOut = setTimeout(() => {
                        this.UploadVideo(file, formData, totalSize, blockCount, blockSize)
                    }, 10000)
                    return false
                }
                if (res.response) {
                    if (/^(5|4)\d{2}/.test(res.response.status)) {
                        clearInterval(this.timeOut)
                        this.timeOut = setTimeout(() => {
                            this.UploadVideo(file, formData, totalSize, blockCount, blockSize)
                        }, 10000)
                    }
                    return false
                }
                if (res.code === 1) {
                    clearInterval(this.timeOut)
                    if (currIndex === 1) {
                        uploadId = res.obj
                    }
                    let num = currIndex / blockCount * 100
                    if ((currIndex + 1) === blockCount) {
                        num = 99
                    }
                    this.setState({
                        progressNum: parseFloat(num.toFixed(2))
                    })
                    if (currIndex < blockCount) {
                        currIndex = currIndex + 1
                        this.UploadVideo(file, formData, totalSize, blockCount, blockSize)
                    }
                } else if (res.code < 0) {
                    uploadId = ''
                    currIndex = 1
                    message.error(res.msg)
                } else if (res.code === 2) {
                    clearInterval(this.timeOut)
                    uploadId = ''
                    currIndex = 1
                    let {videofileList} = this.state
                    let newVideoFile = []
                    videofileList.map((item, index) => {
                        newVideoFile.push({
                            uid: item.uid,
                            fileName: item.name,
                            name: item.name,
                            fileUrl: res.obj
                        })
                    })
                    this.setState({
                        fileUrl: res.obj,
                        videoList: [],
                        videofileList: newVideoFile,
                        uploading: false
                    })
                    message.success('文件上传成功!')
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
    handleSubmit = () => {
        hashHistory.push('/version-list')
    }

    handleChangeMd5 = (value) => {
        this.setState({
            password: value.target.value
        })
    }

    render () {
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: {span: 8, offset: 1}
        }
        const { versionInfo } = this.props
        console.log(versionInfo)

        const { getFieldDecorator } = this.props.form
        const { progressNum, videofileList, uploading } = this.state

        const props = {
            action: '/file/upload',
            accept: 'application/vnd.android.package-archive',
            onRemove: (file) => {
                this.setState(({fileList}) => {
                    const index = fileList.indexOf(file)
                    const newFileList = fileList.slice()
                    newFileList.splice(index, 1)
                    return {
                        videoList: newFileList,
                        videofileList: newFileList
                    }
                })
            },
            beforeUpload: (file) => {
                this.setState({
                    videoList: [file],
                    videofileList: [file]
                })
                return false
            },
            fileList: this.state.videofileList
        }
        return (<div>
            <Form>
                <Row><Col span={4}><div className="updateTitle">官网安装包上传</div></Col><Col span={8}></Col></Row>
                <FormItem {...formItemLayout} label="密码">
                    <Input placeholder='请输入上传密码' onChange={this.handleChangeMd5} />
                </FormItem>
                <FormItem {...formItemLayout} label="文件：">
                    {getFieldDecorator('url', {
                        rules: [{required: true, message: '请上传安装包！'}]
                    })(
                        <Upload {...props} name='uploadFile'>
                            <Button><Icon type="upload"/>选择安装包</Button>
                        </Upload>
                    )}
                    {(() => {
                        if (videofileList.length === 0) {
                            return ''
                        } else if (videofileList[0].fileName) {
                            return <div>
                                <a href={this.state.fileUrl} title="">{this.state.fileName}</a>
                            </div>
                        }
                    })()}
                    <Button
                        style={{marginTop: 16}}
                        className="upload-demo-start"
                        type="primary"
                        onClick={this.handleUpload}
                        disabled={this.state.videoList.length === 0}
                        loading={uploading}
                    >
                        {uploading ? '上传中' : '开始上传'}
                    </Button>
                    {uploading &&
                        <Progress
                            strokeWidth={5} style={{width: 300, display: 'block'}}
                            percent={progressNum}
                            status="active"/>}
                </FormItem>

                <FormItem wrapperCol={{ span: 12, offset: 3 }}>
                    <Button type="primary" onClick={this.handleSubmit}>回到列表</Button>
                </FormItem>
            </Form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        versionInfo: state.versionInfo.info
    }
}
export default connect(mapStateToProps)(Form.create()(VersionUpfile))
