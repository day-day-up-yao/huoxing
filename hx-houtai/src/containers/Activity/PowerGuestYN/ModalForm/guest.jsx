import React, {Component} from 'react'
import { Modal, Form, Input, message, Radio, Icon, Upload, InputNumber } from 'antd'
import {URL, getSig, axiosAjax} from '../../../../public/index'
const FormItem = Form.Item
const RadioGroup = Radio.Group

class CollectionCreateForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            imgUrl: '',
            loading: true
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
                imgUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    imgUrl: file.response.obj
                })
                this.props.getImgData(file.response.obj)
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    imgUrl: '',
                    fileList: []
                })
            }
        }
    }

    componentWillMount () {
        let aimg = [{
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: this.props.data.guestHeadUrl
        }]
        this.setState({
            fileList: this.props.data.guestHeadUrl ? aimg : []
        })
    }

    // 提交
    guestSubmit () {
        let This = this
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            let guestHeadUrl = this.state.imgUrl || this.props.data.guestHeadUrl
            let url = this.props.data.id ? '/power4/updateGuest' : '/power4/addGuest'
            axiosAjax('POST', url, {
                id: this.props.data.id,
                guestName: values.guestName,
                guestCompany: values.guestCompany,
                guestIntroduce: values.guestIntroduce,
                guestSeq: values.guestSeq,
                guestHeadUrl: guestHeadUrl,
                guestType: values.guestType
            }, (res) => {
                if (res.code === 1) {
                    this.props.onCancel()
                    location.reload()
                    This.setState({
                        loading: false
                    })
                }
            })
        })
    }

    onCancel = () => {
        this.setState({
            previewVisible: true
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
                title="添加/编辑 本期嘉宾"
                okText="确定"
                onCancel={onCancel}
                onOk={() => { this.guestSubmit() }}
                confirmLoading={loading}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="嘉宾姓名">
                        {getFieldDecorator('guestName', {
                            initialValue: data.id ? data.guestName : '',
                            rules: [{ required: true, message: '请输入嘉宾姓名！' }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="嘉宾公司"
                    >
                        {getFieldDecorator('guestCompany', {
                            initialValue: data.id ? data.guestCompany : ''
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="嘉宾介绍">
                        {getFieldDecorator('guestIntroduce', {
                            initialValue: data.id ? data.guestIntroduce : '',
                            rules: [{ required: true, message: '请输入嘉宾介绍"！' }]
                        })(<Input rows={4} type="textarea" />)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="选择类型">
                        {getFieldDecorator('guestType', {
                            initialValue: data.id ? data.guestType : 0,
                            rules: [{required: true, message: '请选择类型！'}]
                        })(
                            <RadioGroup>
                                <Radio value={0}>本期嘉宾</Radio>
                                <Radio value={1}>往期嘉宾</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="排序权重"
                    >
                        {getFieldDecorator('guestSeq', {
                            initialValue: data.id ? data.guestSeq : 0,
                            rules: [{required: true, message: '请输入排序权重！'}]
                        })(
                            <InputNumber placeholder="权重越大排序越靠前"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="头像"
                        className='upload-div'
                    >
                        <div className="dropbox">
                            {getFieldDecorator('guestHeadUrl', {
                                initialValue: data.id ? data.guestHeadUrl : '',
                                rules: [{required: true, message: '请上传嘉宾头像！'}]
                            })(
                                <Upload
                                    headers={{'Sign-Param': getSig()}}
                                    action={`${URL}/picture/upload`}
                                    name='uploadFile'
                                    data={{type: 'news'}}
                                    listType="picture-card"
                                    fileList={this.state.fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {this.state.fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            )}
                            <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
                            </Modal>
                            <span className="cover-img-tip" style={{display: 'inline-block', marginTop: '70px', position: 'absolute'}}>用于直播页面头像展示, 长宽比例: <font style={{color: 'red'}}>1 : 1</font></span>
                        </div>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(CollectionCreateForm)
