import React, { Component } from 'react'
import { connect } from 'react-redux'
import {hashHistory} from 'react-router'
import { Form, Input, Radio, Button, message } from 'antd'

import { getVersionItemInfo } from '../../../actions/app/version.action'
import { axiosAjax } from '../../../public/index'

import './version.scss'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const { TextArea } = Input

const forceUpdateOpts = [
    {label: '强制', value: '1'},
    {label: '不强制', value: '0'}
]
const platformOpts = [
    { label: 'Android', value: '1' },
    {label: 'iOS', value: '3'}
]
const channelOpts = [
    {
        label: 'Web', value: 'web'
    },
    {
        label: '在线更新', value: 'mars_xs0000'
    },
    { label: 'iOS', value: 'mars_ios0000' }
]
class VersionUpload extends Component {
    constructor (props) {
        super(props)
        this.state = {
            updateOrNot: false,
            appType: '',
            channel: ''
        }
    }
    handleCancel = () => {
        const form = this.props.form
        form.resetFields()
    }

    handleSubmit = (e) => {
        const form = this.props.form
        const { id } = this.state
        form.validateFields((err, value) => {
            if (err) {
                return false
            }
            if (id) {
                axiosAjax('post', '/app/version/updatecontent', {
                    id: id,
                    ...value
                }, (data) => {
                    if (data.code === 1) {
                        message.success('更新成功')
                        form.resetFields()
                        if (value.channel === 'web') {
                            hashHistory.push('/version-uploadweb?id=' + data.obj)
                        } else if (value.channel === 'mars_xs0000') {
                            hashHistory.push('/version-upfile?id=' + data.obj)
                        } else {
                            hashHistory.push('/version-list')
                        }
                    } else {
                        message.sucess(data.msg)
                    }
                })
            } else {
                axiosAjax('post', '/app/version/addcontent', {
                    ...value
                }, (data) => {
                    message.success('添加成功')
                    form.resetFields()
                    if (value.channel === 'web') {
                        hashHistory.push('/version-uploadweb?id=' + data.obj)
                    } else if (value.channel === 'mars_xs0000') {
                        hashHistory.push('/version-upfile?id=' + data.obj)
                    } else {
                        hashHistory.push('/version-list')
                    }
                })
            }
        })
    }

    componentDidMount () {
        const { dispatch, location } = this.props
        if (location.query.id) {
            // 编辑
            this.setState({
                loading: true
            })
            dispatch(getVersionItemInfo({ 'id': location.query.id }, (res) => {
                // console.log(res)
                if (res.code === 1) {
                    this.setState({
                        loading: false
                    })
                } else {
                    this.setState({
                        loading: false
                    })
                }
                this.renderData(res)
            }))
        } else {
            // 新增,不用编辑
        }
    }
    renderData = (data) => {
        this.setState({
            updateOrNot: true,
            id: data.id,
            version: data.version,
            build: data.version,
            appType: data.appType,
            channel: data.channel,
            newFeatures: data.newFeatures,
            forceUpdate: data.forceUpdate,
            versionStatus: data.versionStatus,
            createTime: data.createTime,
            type: data.type
        })
    }
    platformChange = (event) => {
        this.setState({
            channel: event.target.value === '1' ? 'mars_xs0000' : 'mars_ios0000'
        })
    }
    forceUpdateChange = () => {
        //
    }

    render () {
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: {span: 8, offset: 1}
        }

        const { getFieldDecorator } = this.props.form
        const { versionInfo } = this.props
        const { updateOrNot } = this.state
        return <div>
            <Form>
                <FormItem {...formItemLayout} label="版本号：">
                    {getFieldDecorator('version', {
                        initialValue: (updateOrNot && versionInfo) ? `${versionInfo.version}` : '',
                        rules: [
                            { required: true, message: '字段不能为空!' },
                            {
                                pattern: /^\d(?:\.\d){2}$/,
                                message: '请输入正确的版本号，三位版本，且每位不得大于10'
                            }
                        ]
                    })(
                        <Input placeholder="请输入版本号" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="平台：">
                    {
                        getFieldDecorator('appType', {
                            initialValue: (updateOrNot && versionInfo) ? `${versionInfo.appType || '1'}` : null,
                            rules: [{required: true, message: '请选择平台'}]
                        })(
                            <RadioGroup
                                options={platformOpts}
                                onChange={this.platformChange}
                                setFieldsValue={this.state.appType}
                            >
                            </RadioGroup>
                        )
                    }

                </FormItem>
                <FormItem {...formItemLayout} label="更新内容：">
                    {
                        getFieldDecorator('newFeatures', {
                            initialValue: (updateOrNot && versionInfo ? `${versionInfo.newFeatures}` : ''),
                            rules: [{ required: true, message: '请输入版本更新说明！' }]
                        })(
                            <TextArea style={{ height: 80 }} placeholder='请输入版本更新说明' />
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="强制更新：">
                    {
                        getFieldDecorator('forceUpdate', {
                            initialValue: (updateOrNot && versionInfo ? `${versionInfo.forceUpdate}` : 0),
                            rules: [{required: true, message: '请选择！'}]
                        })(
                            <RadioGroup
                                options={forceUpdateOpts}
                                onChange={this.forceUpdateChange}
                                setFieldsValue={this.state.forceUpdate}>
                            </RadioGroup>
                        )
                    }

                </FormItem>
                <FormItem {...formItemLayout} label="版本channel：">
                    {
                        getFieldDecorator('channel', {
                            rules: [{
                                required: true, message: '请输入版本渠道'
                            }],
                            initialValue: (updateOrNot && versionInfo) ? this.state.channel : null
                        })(
                            <RadioGroup
                                options={channelOpts}
                                onChange={this.channelChange}
                                setFieldsValue={this.state.channel}>
                            </RadioGroup>
                        )
                    }
                </FormItem>
                <FormItem wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" onClick={this.handleSubmit}>确定</Button>
                    <Button type="primary" onClick={this.handleCancel} className="cancelUpdate">取消</Button>
                </FormItem>
            </Form>
        </div>
    }
    // 取消应该是reset,而不是回去
}
const mapStateToProps = (state) => {
    return {
        versionInfo: state.versionInfo.info
    }
}
export default connect(mapStateToProps)(Form.create()(VersionUpload))
