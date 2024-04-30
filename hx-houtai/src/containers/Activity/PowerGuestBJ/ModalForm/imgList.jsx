import React, {Component} from 'react'
import { Modal, Form, Input, message, Icon, Upload, InputNumber } from 'antd'
import {URL, getSig, axiosAjax} from '../../../../public/index'
const FormItem = Form.Item

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
            url: this.props.data.imageUrl
        }]
        this.setState({
            fileList: this.props.data.imageUrl ? aimg : []
        })
    }

    // 提交
    addImgSubmit () {
        let This = this
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            let imageUrl = this.state.imgUrl || this.props.data.imageUrl
            let url = this.props.data.id ? '/power2/updateImage' : '/power2/addImage'
            axiosAjax('POST', url, {
                id: this.props.data.id,
                imageTitle: values.imageTitle,
                imageSeq: values.imageSeq,
                imageUrl: imageUrl
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
                title="添加/编辑 现场图集"
                okText="确定"
                onCancel={onCancel}
                onOk={() => { this.addImgSubmit() }}
                confirmLoading={loading}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="标题"
                    >
                        {getFieldDecorator('imageTitle', {
                            initialValue: data.id ? data.imageTitle : '',
                            rules: [{required: true, message: '请输入标题！'}]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="排序权重"
                    >
                        {getFieldDecorator('imageSeq', {
                            initialValue: data.id ? data.imageSeq : 0,
                            rules: [{required: true, message: '请输入排序权重！'}]
                        })(
                            <InputNumber placeholder="权重越大排序越靠前"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="缩略图"
                        className='upload-div'
                    >
                        <div className="dropbox">
                            {getFieldDecorator('imageUrl', {
                                initialValue: data.id ? data.imageUrl : '',
                                rules: [{required: true, message: '请上传缩略图！'}]
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
                            <span className="cover-img-tip" style={{display: 'inline-block', marginTop: '70px', position: 'absolute'}}><font style={{color: 'red'}}>1 : 1</font></span>
                        </div>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(CollectionCreateForm)
