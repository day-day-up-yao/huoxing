import React, {Component} from 'react'
import { Modal, Form, Input, Radio, message, Icon, Upload } from 'antd'
import {URL, getSig} from '../../../public/index'
const FormItem = Form.Item

class CollectionCreateForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            coverImgUrl: '',
            description: '',
            loading: true,
            userType: '1'
        }
    }
    componentDidUpdate (prevProps, prevState, snapshot) {
        if (!this.props.visible && this.props.visible !== prevProps.visible) {
            this.setState({
                coverImgUrl: '',
                fileList: []
            })
        }
    }

    // 上传图片
    handleCancel = () => this.setState({previewVisible: false})

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }

    handleChange = ({file, fileList}) => {
        this.setState({
            fileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                coverImgUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    coverImgUrl: file.response.obj
                })
                this.props.getImgData(file.response.obj)
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    coverImgUrl: '',
                    fileList: []
                })
            }
        }
    }

    render () {
        const { visible, onCancel, onCreate, form } = this.props
        const { getFieldDecorator } = form
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 17, offset: 1}
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
                title="新增用户"
                okText="确定"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="用户名">
                        {getFieldDecorator('userName', {
                            initialValue: '',
                            rules: [{ required: true, message: '请输入直播用户名！' }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="用户类型"
                    >
                        {getFieldDecorator('userType', {
                            initialValue: '1',
                            rules: [{ required: true, message: '请选择用户类型！' }]
                        })(
                            <Radio.Group>
                                <Radio value="1">嘉宾</Radio>
                                <Radio value="2">主持人</Radio>
                            </Radio.Group>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="MarsBit专栏账号">
                        {getFieldDecorator('marsPhone', {
                            initialValue: '',
                            rules: [{ required: false, message: 'MarsBit注册手机号！' }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="用户头像"
                        className='upload-div'
                    >
                        <div className="dropbox">
                            {getFieldDecorator('headUrl', {
                                initialValue: '',
                                rules: [{required: true, message: '请上传用户头像！'}]
                            })(
                                <Upload
                                    headers={{'Sign-Param': getSig()}}
                                    action={`${URL}/pic/upload`}
                                    name='uploadFile'
                                    listType="picture-card"
                                    fileList={this.state.fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {this.state.fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            )}
                            <Modal footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{width: '100%'}} src={this.state.coverImgUrl}/>
                            </Modal>
                            <span className="cover-img-tip" style={{display: 'inline-block', marginTop: '70px', position: 'absolute'}}>用于直播页面头像展示, 长宽比例: <font style={{color: 'red'}}>1 : 1</font></span>
                        </div>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="用户简介">
                        {getFieldDecorator('description', {
                            initialValue: '',
                            rules: [{required: true, message: '请输入用户简介！'}]
                        })(<Input rows={4} type="textarea" />)}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(CollectionCreateForm)
