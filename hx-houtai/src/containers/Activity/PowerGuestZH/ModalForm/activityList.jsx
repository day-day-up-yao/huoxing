import React, {Component} from 'react'
import { Modal, Form, Input, Select, InputNumber } from 'antd'
import {axiosAjax} from '../../../../public/index'
const {Option} = Select
const FormItem = Form.Item

class CollectionCreateForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            previewVisible: false,
            loading: true
        }
    }
    // 新增活动
    agendaAddSubmit () {
        let This = this
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            let url = this.props.data.id ? '/power3/activity/update' : '/power3/activity/add'
            axiosAjax('POST', url, {
                id: this.props.data.id,
                activityDate: values.activityDate,
                activityTime: values.activityTime,
                activityTheme: values.activityTheme,
                activityUrl: values.activityUrl,
                activitySeq: values.activitySeq
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
        let dateType = [
            {
                id: 1,
                date: '12月15日'
            },
            {
                id: 2,
                date: '12月16日'
            },
            {
                id: 3,
                date: '12月17日'
            }
        ]
        return (
            <Modal
                visible={visible}
                title="添加/编辑 议程"
                okText="确定"
                onCancel={onCancel}
                onOk={() => { this.agendaAddSubmit() }}
                confirmLoading={loading}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="日期">
                        {getFieldDecorator('activityDate', {
                            initialValue: data.id ? `${data.activityDate}` : '12月15日',
                            rules: [{required: true, message: '请选择活动日期！'}]
                        })(
                            <Select style={{ width: 120, marginRight: 15 }}>
                                {
                                    dateType.map((item) => <Option value={`${item.date}`} key={item.id}>{item.date}</Option>)
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="时间">
                        {getFieldDecorator('activityTime', {
                            initialValue: data.id ? `${data.activityTime}` : '',
                            rules: [{required: true, message: '请输入活动时间！'}]
                        })(
                            <Input rows={2} type="text" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="主题">
                        {getFieldDecorator('activityTheme', {
                            initialValue: data.id ? data.activityTheme : '',
                            rules: [{ required: true, message: '请输入择议主题"！' }]
                        })(<Input rows={2} type="textarea" />)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="链接">
                        {getFieldDecorator('activityUrl', {
                            initialValue: data.id ? data.activityUrl : '',
                            rules: [{ required: true, message: '请输入链接"！' }]
                        })(<Input rows={2} type="textarea" />)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="排序权重"
                    >
                        {getFieldDecorator('activitySeq', {
                            initialValue: data.id ? data.activitySeq : 0,
                            rules: [{ required: true, message: '请输入择排序权重"！' }]
                        })(
                            <InputNumber placeholder="权重越大排序越靠前"/>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(CollectionCreateForm)
