import React, {Component} from 'react'
import { Modal, Form, Input, Radio, Select, InputNumber } from 'antd'
import {axiosAjax} from '../../../../public/index'
const {Option} = Select
const FormItem = Form.Item
const RadioGroup = Radio.Group

class CollectionCreateForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            previewVisible: false,
            loading: true
        }
    }
    // 新增议程
    agendaAddSubmit () {
        let This = this
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            let url = this.props.data.id ? '/power3/agenda/update' : '/power3/agenda/add'
            axiosAjax('POST', url, {
                id: this.props.data.id,
                holdingTime: values.holdingTime,
                holdingDate: values.holdingDate,
                agendaTheme: values.agendaTheme,
                guestIntroduce: values.guestIntroduce,
                agendaSeq: values.agendaSeq,
                agendaType: values.agendaType,
                guestName: values.guestName,
                holdingApm: values.holdingApm
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
                        {getFieldDecorator('holdingDate', {
                            initialValue: data.id ? `${data.holdingDate}` : '',
                            rules: [{required: true, message: '请选择议程日期！'}]
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
                        label="上/下午">
                        {getFieldDecorator('holdingApm', {
                            initialValue: data.id ? data.holdingApm : '',
                            rules: [{required: true, message: '请选择议程时间！'}]
                        })(
                            <RadioGroup>
                                <Radio value="上午">上午</Radio>
                                <Radio value="下午">下午</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="时间">
                        {getFieldDecorator('holdingTime', {
                            initialValue: data.id ? `${data.holdingTime}` : '',
                            rules: [{required: true, message: '请选择议程议时间！'}]
                        })(
                            <Input rows={2} type="text" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="议程类型">
                        {getFieldDecorator('agendaType', {
                            initialValue: data.id ? `${data.agendaType}` : '',
                            rules: [{required: false, message: '请选择议程议程类型！'}]
                        })(
                            <Input rows={2} type="text" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="主题">
                        {getFieldDecorator('agendaTheme', {
                            initialValue: data.id ? data.agendaTheme : '',
                            rules: [{ required: true, message: '请输入择议主题"！' }]
                        })(<Input rows={2} type="textarea" />)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="嘉宾">
                        {getFieldDecorator('guestName', {
                            initialValue: data.id ? data.guestName : '',
                            rules: [{ required: true, message: '请输入择议嘉宾"！' }]
                        })(<Input rows={2} type="textarea" />)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="排序权重"
                    >
                        {getFieldDecorator('agendaSeq', {
                            initialValue: data.id ? data.agendaSeq : 0,
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
