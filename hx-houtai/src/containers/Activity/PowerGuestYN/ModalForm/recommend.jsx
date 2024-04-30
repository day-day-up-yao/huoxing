import React, {Component} from 'react'
import { Modal, Form, Input, message, Icon, Upload, InputNumber } from 'antd'
import {URL, getSig, axiosAjax} from '../../../../public/index'
const FormItem = Form.Item

class CollectionCreateForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            previewVisible: false,
            previewImagePC: '',
            previewImageM: '',
            fileListPC: [],
            fileListM: [],
            imgUrlPc: '',
            imgUrlM: '',
            description: '',
            brief: '',
            loading: true,
            userType: '1'
        }
    }

    // 上传图片
    handleCancel = () => this.setState({previewVisible: false})

    handlePreviewPC = (file) => {
        this.setState({
            previewImagePC: file.url || file.thumbUrl,
            previewVisible: true
        })
    }
    handlePreviewM = (file) => {
        this.setState({
            previewImageM: file.url || file.thumbUrl,
            previewVisible: true
        })
    }

    handleChangePC = ({file, fileList}) => {
        this.setState({
            fileListPC: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                imgUrlPc: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    imgUrlPc: file.response.obj
                })
                this.props.getImgData(file.response.obj)
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    imgUrlPc: '',
                    fileListPC: []
                })
            }
        }
    }
    handleChangeM= ({file, fileList}) => {
        this.setState({
            fileListM: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                imgUrlM: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    imgUrlM: file.response.obj
                })
                this.props.getImgData(file.response.obj)
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    imgUrlM: '',
                    fileListM: []
                })
            }
        }
    }

    componentWillMount () {
        let aimg = [{
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: this.props.data.pcImageUrl
        }]
        let aimg2 = [{
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: this.props.data.mobileImageUrl
        }]
        this.setState({
            fileListPC: this.props.data.pcImageUrl ? aimg : [],
            fileListM: this.props.data.mobileImageUrl ? aimg2 : []
        })
    }

    // 新增议程
    recommendAddSubmit () {
        let This = this
        const {form} = this.props
        form.validateFields((err, values) => {
            console.log(values)
            if (err) {
                return false
            }
            let pcImageUrl = this.props.data.pcImageUrl ? this.props.data.pcImageUrl : this.state.imgUrlPc
            let mobileImageUrl = this.state.imgUrlM || this.props.data.mobileImageUrl
            let url = this.props.data.id ? '/power4/updateBanner' : '/power4/addBanner'
            console.log(pcImageUrl)
            axiosAjax('POST', url, {
                id: this.props.data.id,
                bannerTitle: values.bannerTitle,
                bannerSeq: values.bannerSeq,
                bannerActivityUrl: values.bannerActivityUrl,
                mobileImageUrl: mobileImageUrl,
                pcImageUrl: pcImageUrl
            }, (res) => {
                if (res.code === 1) {
                    this.props.onCancel()
                    location.reload()
                    This.setState({
                        loading: false
                    })
                } else {
                    message.error(res.msg)
                }
            })
        })
    }

    render () {
        const { visible, onCancel, form, loading, data } = this.props
        const { getFieldDecorator } = form
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 18, offset: 1}
        }
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )
        return (
            <Modal
                visible={visible}
                title="添加/编辑 顶部banner"
                okText="确定"
                onCancel={onCancel}
                onOk={() => { this.recommendAddSubmit() }}
                confirmLoading={loading}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="议程标题">
                        {getFieldDecorator('bannerTitle', {
                            initialValue: data.id ? data.bannerTitle : '',
                            rules: [{ required: true, message: '请输入议程标题！' }]
                        })(
                            <Input placeholder="请输入议程标题"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="议程排序"
                    >
                        {getFieldDecorator('bannerSeq', {
                            initialValue: data.id ? data.bannerSeq : 0,
                            rules: [{ required: true, message: '请输入议程排序！' }]
                        })(
                            <InputNumber />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="议程链接">
                        {getFieldDecorator('bannerActivityUrl', {
                            initialValue: data.id ? data.bannerActivityUrl : '',
                            rules: [{ required: true, message: '请输入议程链接"！' }]
                        })(<Input placeholder='请输入议程链接'/>)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="PC端图片"
                        className='upload-div'
                    >
                        <div className="dropbox">
                            {getFieldDecorator('pcImageUrl', {
                                initialValue: data.pcImageUrl ? data.pcImageUrl : '',
                                rules: [{required: true, message: '请上传(PC端)推荐图片！'}]
                            })(
                                <Upload
                                    headers={{'Sign-Param': getSig()}}
                                    action={`${URL}/picture/upload`}
                                    name='uploadFile'
                                    data={{type: 'news'}}
                                    listType="picture-card"
                                    fileList={this.state.fileListPC}
                                    onPreview={this.handlePreviewPC}
                                    onChange={this.handleChangePC}
                                >
                                    {this.state.fileListPC.length >= 1 ? null : uploadButton}
                                </Upload>
                            )}
                            <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{width: '100%'}} src={this.state.previewImagePC}/>
                            </Modal>
                            <span className="cover-img-tip" style={{position: 'absolute', left: '100px', top: '70px'}}>PC端<font style={{color: 'red'}}>620 * 362</font></span>
                        </div>
                    </FormItem>
                    {/* <FormItem
                        {...formItemLayout}
                        label="M端图片"
                        className='upload-div'
                    >
                        <div className="dropbox">
                            {getFieldDecorator('mobileImageUrl', {
                                initialValue: data.id ? data.mobileImageUrl : '',
                                rules: [{required: false, message: '请上传(PC端)推荐图片！'}]
                            })(
                                <Upload
                                    headers={{'Sign-Param': getSig()}}
                                    action={`${URL}/picture/upload`}
                                    name='uploadFile'
                                    data={{type: 'news'}}
                                    listType="picture-card"
                                    fileList={this.state.fileListM}
                                    onPreview={this.handlePreviewM}
                                    onChange={this.handleChangeM}
                                >
                                    {this.state.fileListM.length >= 1 ? null : uploadButton}
                                </Upload>
                            )}
                            <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{width: '100%'}} src={this.state.previewImageM}/>
                            </Modal>
                            <span className="cover-img-tip" style={{position: 'absolute', left: '100px', top: '70px'}}>M端<font style={{color: 'red'}}>2:1</font></span>
                        </div>
                    </FormItem> */}
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(CollectionCreateForm)
