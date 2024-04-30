import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { getTagv2ItemInfo } from '../../actions/tagsv2/tagsv2.action'
import { Spin, Form, Input, Radio, Button, Icon, Modal, Upload, message } from 'antd'
import './tagsv2.scss'
import { axiosAjax, getSig, URL } from '../../public/index'
import Cookies from 'js-cookie'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const { TextArea } = Input

const tagLevelOptions = [
    { label: '普通', value: 0 },
    { label: '重要', value: 1 }
]

class Tagsv2Send extends Component {
    constructor (props) {
        super(props)
        this.state = {
            updateOrNot: false,
            loading: false,
            previewVisible: false,
            previewImage: '',
            fileList: [],
            tagImg: '',
            tagLevel: ''
        }
    }

    componentDidUpdate (prevProps, prevState) {
        // if(prevProps.)
    }
    componentWillMount () {
        const { dispatch, location } = this.props
        if (location.query.id) {
            dispatch(getTagv2ItemInfo({ id: location.query.id }, (data) => {
                this.setState({
                    name: data.name,
                    updateOrNot: true,
                    loading: false,
                    tagImg: data.tagImg,
                    tagLevel: data.tagLevel,
                    description: data.description,
                    fileList: data.tagImg ? [{
                        uid: 0,
                        name: 'xxx.png',
                        status: 'done',
                        url: data.tagImg
                    }] : []
                })
            }))
        } else {
            // 新增
            this.setState({
                loading: false
            })
        }
    }

    FormItem = (opt) => {

    }

    handleCancel = () => this.setState({previewVisible: false})

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }

    handleChange = ({ file, fileList }) => {
        this.setState({
            fileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                tagsV2: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    tagImg: file.response.obj
                })
            }

            if (file.status === 'error') {
                message.error('网络错误，上传失败')
                this.setState({
                    tagsV2: '',
                    fileList: []
                })
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.setFieldsValue({
            tagImg: this.state.tagImg
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                values.id = this.props.location.query.id || ''
                values.typeId = 3
                values.passportId = Cookies.get('hx_passportId')
                values.creator = Cookies.get('hx_passportId')
                axiosAjax('post', `${(this.state.updateOrNot && this.props.location.query.id) ? '/tagmgr/editTag' : '/tagmgr/addTag'}`, values, (res) => {
                    this.setState({
                        loading: false
                    })
                    if (res.code === 1) {
                        message.success(this.state.updateOrNot ? '修改成功' : '添加成功')
                        hashHistory.goBack()
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    render () {
        // const This = this
        const { getFieldDecorator } = this.props.form
        const { tagsv2Info } = this.props
        const formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: {span: 20, offset: 1}
        }
        const { updateOrNot, previewVisible, previewImage, fileList, tagLevel, name, description } = this.state

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传图片</div>
            </div>
        )

        let appImgSize = ''

        return <div className="tagv3-send">
            <Spin spinning={this.state.loading} size="large">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="名称：">
                        {getFieldDecorator('name', {
                            initialValue: (updateOrNot && tagsv2Info) ? name : '',
                            rules: [{required: true, message: '请输入标签名称'}]
                        })(
                            <Input placeholder="输入标签名称" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="图标">
                        <div className="dropbox">
                            {getFieldDecorator('tagImg', {
                                initialValue: (updateOrNot && tagsv2Info ? fileList : ''),
                                rules: [{required: true, message: '请上传图标'}]
                            })(
                                <Upload
                                    headers={{ 'Sign-Param': getSig() }}
                                    action={`${URL}/pic/upload`}
                                    name="uploadFile"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            )}
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img src={previewImage} style={{width: '100%'}} alt="example" />
                            </Modal>
                            <span className="cover-img-tip">
                                <font style={{color: 'red'}}>{appImgSize}</font>
                            </span>
                        </div>
                    </FormItem>
                    <FormItem {...formItemLayout} label="说明：">
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: '请输入说明', whitespace: true }],
                            initialValue: (updateOrNot && tagsv2Info) ? description : ''
                        })(
                            <TextArea className="" rows={8} placeholder="请输入标签说明"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="类型：">
                        {getFieldDecorator('tagLevel', {
                            initialValue: (updateOrNot && tagsv2Info) ? tagLevel : '',
                            rules: [{required: true, message: '请选择标签类型'}]
                        })(
                            <RadioGroup options={tagLevelOptions}></RadioGroup>
                            // 必有onchange，setFieldValue
                        )}
                    </FormItem>
                    <FormItem wrapperCol={{ span: 12, offset: 2 }}>
                        <Button type="primary" data-status="1" htmlType="submit" style={{marginRight: '30px'}}>发布</Button>
                        <Button type="primary" className="cancel" onClick={() => { hashHistory.goBack() }}>取消</Button>
                    </FormItem>
                </Form>
            </Spin>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        tagsv2Info: state.tagsv2
    }
}

export default connect(mapStateToProps)(Form.create()(Tagsv2Send))
