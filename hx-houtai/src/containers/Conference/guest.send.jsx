import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { Form, Spin, Input, Checkbox, InputNumber, Modal, Icon, Radio, message, Upload, Button } from 'antd'
import { getConferenceList } from '../../actions/index'
import { getGuestItemInfo } from '../../actions/conference/guest.action'
import { axiosAjax, getSig, URL } from '../../public'

import './conference.scss'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
const guestTypeOptions = [
    { label: '往期嘉宾', value: 1, disabled: false },
    { label: '本期嘉宾', value: 2, disabled: false }
]

class GuestSend extends Component {
    constructor (props) {
        super(props)
        this.state = {
            updateOrNot: false,
            loading: false,
            name: '',
            brief: '',
            topOrder: 0,
            pastType: [],
            fileList: [],
            previewVisible: false,
            previewImage: '',
            speakerIcon: '',
            conferenceId: 1
        }
    }
    componentWillMount () {
        const { dispatch, location } = this.props // , filter
        const { pastType } = this.state
        dispatch(getConferenceList())
        if (location.query.id) {
            dispatch(getGuestItemInfo({ id: location.query.id, conferenceId: 1 }, (res) => {
                const data = res[0]
                // 只有是的时候，才放进去，否则为空
                console.log(JSON.stringify(data) + '结果~~~~~~~~~')
                if (data.pastGuest === 1) pastType.push(data.pastGuest)
                if (data.guest === 1) pastType.push(2)
                this.setState({
                    conferenceId: data.conferenceId,
                    name: data.name,
                    updateOrNot: true,
                    loading: false,
                    brief: data.brief,
                    pastType: pastType,
                    speakerIcon: data.speakerIcon,
                    topOrder: data.topOrder,
                    fileList: data.speakerIcon ? [{
                        uid: 0,
                        name: 'xxx.png',
                        status: 'done',
                        url: data.speakerIcon
                    }] : []
                })
            }))
        } else {
            this.setState({
                loading: false
            })
        }
    }

    typeChange = (values) => {
        const { form } = this.props
        let tmp = []
        if (values.length === 2) tmp = [1, 2]
        if (values.length === 1 && values[1]) tmp = [1]
        if (values.length === 2 && values[2]) tmp = [1]
        this.setState({
            pastType: tmp
        })
        form.setFieldsValue({
            pastType: tmp
        })
    }

    handleCancel = () => this.setState({ previewVisible: false })
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
                speakerIcon: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    speakerIcon: file.response.obj
                })
            }

            if (file.status === 'error') {
                message.error('网络错误，上传失败')
                this.setState({
                    speakerIcon: '',
                    fileList: []
                })
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.setFieldsValue({
            speakerIcon: this.state.speakerIcon
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                // 如何拆分
                values.pastGuest = values.pastType.indexOf(1) > -1 ? 1 : 0
                values.guest = values.pastType.indexOf(2) > -1 ? 1 : 0
                values.speakerIcon = this.state.speakerIcon
                values.intro = '产品原型没有这个字段，暂时冗余'
                values.id = this.props.location.query.id || ''
                delete values.pastType
                axiosAjax('post', `${(this.state.updateOrNot && this.props.location.query.id) ? '/power/updateSpeaker' : '/power/addSpeaker'}`, values, (res) => {
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
        const { getFieldDecorator } = this.props.form
        const { guestInfo, conferenceList } = this.props
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: {span: 19, offset: 1}
        }
        const { updateOrNot, name, brief, topOrder, pastType, fileList, previewImage, previewVisible, conferenceId } = this.state
        const conferenceOptions = conferenceList.map((item) => {
            return { label: item.label, value: item.id }
        })
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传图片</div>
            </div>
        )
        let appImgSize = ''

        return <div className="conference-send">
            <Spin spinning={this.state.loading} size="large">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="大会：">
                        {getFieldDecorator('conferenceId', {
                            initialValue: (updateOrNot && guestInfo) ? conferenceId : 1,
                            rules: [{required: true, message: '必须选择一个大会'}]
                        })(
                            <RadioGroup options={conferenceOptions}></RadioGroup>
                        )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="嘉宾姓名：">
                        {getFieldDecorator('name', {
                            initialValue: (updateOrNot && guestInfo) ? name : '',
                            rules: [{required: true, message: '请输入姓名'}]
                        })(
                            <Input placeholder="输入嘉宾姓名" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="一句话介绍：">
                        {getFieldDecorator('brief', {
                            initialValue: (updateOrNot && guestInfo) ? brief : '',
                            rules: [{required: true, message: '一定要介绍一下'}]
                        })(
                            <Input placeholder='一句话介绍' />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label='头像'>
                        {getFieldDecorator('speakerIcon', {
                            initialValue: (updateOrNot && guestInfo) ? fileList : '',
                            rules: [{required: true, message: '请上传头像'}]
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
                                {fileList.length >= 1 ? null : uploadButton }
                            </Upload>
                        )}
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img src={previewImage} style={{width: '100%'}} alt="example" />
                        </Modal>
                        <span className="cover-img-tip">
                            <font style={{color: 'red'}}>{appImgSize}</font>
                        </span>
                    </FormItem>
                    <FormItem {...formItemLayout} label="身份组">
                        {getFieldDecorator('pastType', {
                            initialValue: (updateOrNot && guestInfo) ? pastType : [],
                            rules: [{required: true, message: '请选择嘉宾类型'}]
                        })(
                            <CheckboxGroup options={guestTypeOptions} onChange={this.typeChange} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="排序">
                        {getFieldDecorator('topOrder', {
                            initialValue: (updateOrNot && guestInfo) ? topOrder : 0,
                            rules: [{required: true, message: ''}]
                        })(
                            <InputNumber placeholder='输入权重排序' />
                        )}
                    </FormItem>
                    <FormItem wrapperCol={{ span: 12, offset: 2 }}>
                        <Button type="primary" style={{marginRight: '30px'}} className="cancel" onClick={() => { hashHistory.goBack() }}>取 消</Button>
                        <Button type="primary" data-status="1" htmlType="submit">确 认</Button>
                    </FormItem>
                </Form>
            </Spin>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        guestInfo: state.guestInfo,
        conferenceList: state.conferenceInfo
    }
}

export default connect(mapStateToProps)(Form.create()(GuestSend))
