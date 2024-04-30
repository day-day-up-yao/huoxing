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
            description: '',
            brief: '',
            loading: true,
            userType: '1'
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
            url: this.props.data.companyImageUrl
        }]
        this.setState({
            fileList: this.props.data.companyImageUrl ? aimg : []
        })
    }

    // 提交
    collaborateSubmit () {
        let This = this
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            let companyImageUrl = this.state.imgUrl || this.props.data.companyImageUrl
            let url = this.props.data.id ? '/power6/updateCooperation' : '/power6/addCooperation'
            axiosAjax('POST', url, {
                id: this.props.data.id,
                title: values.title,
                companyImageUrl: companyImageUrl,
                companySeq: values.companySeq,
                companyType: values.companyType
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
                title="添加/编辑 合作方"
                okText="确定"
                onCancel={onCancel}
                onOk={() => { this.collaborateSubmit() }}
                confirmLoading={loading}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="标题">
                        {getFieldDecorator('title', {
                            initialValue: data.id ? data.title : '',
                            rules: [{ required: true, message: '请输入标题！' }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="选择类型">
                        {getFieldDecorator('companyType', {
                            initialValue: data.id ? data.companyType.toString() : '',
                            rules: [{required: true, message: '请选择类型！'}]
                        })(
                            <RadioGroup>
                                <Radio value="0">主办方</Radio>
                                <Radio value="1">联合主办</Radio>
                                <Radio value="5">首席战略合作</Radio>
                                <Radio value="7">合作伙伴</Radio>
                                <Radio value="6">MarsBit生态支持</Radio>
                                <Radio value="3">首席合作媒体</Radio>
                                <Radio value="2">战略合作媒体</Radio>
                                <Radio value="4">战略合作社区</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="排序权重"
                    >
                        {getFieldDecorator('companySeq', {
                            initialValue: data.id ? data.companySeq : 0,
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
                            {getFieldDecorator('companyImageUrl', {
                                initialValue: data.id ? data.companyImageUrl : '',
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
