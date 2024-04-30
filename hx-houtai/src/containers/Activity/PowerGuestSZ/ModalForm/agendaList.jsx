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
    // 新增议程
    agendaAddSubmit () {
        let This = this
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            let url = this.props.data.id ? '/power6/updateAgenda' : '/power6/add/agenda'
            axiosAjax('POST', url, {
                id: this.props.data.id,
                holdingTime: values.holdingTime,
                holdingDate: values.holdingDate,
                hallId: values.hallId,
                agendaTheme: values.agendaTheme,
                guestIntroduce: values.guestIntroduce,
                agendaSeq: values.agendaSeq
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
        const { visible, onCancel, form, loading, data, agendaListType } = this.props
        const { getFieldDecorator } = form
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 18, offset: 1}
        }
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
                        label="论坛">
                        {getFieldDecorator('hallId', {
                            initialValue: data.id ? `${data.hallId}` : '',
                            rules: [{required: true, message: '请选择议程议程类型！'}]
                        })(
                            <Select>
                                {
                                    agendaListType.map((item) => <Option value={`${item.id}`} key={item.id}>{item.hallName}</Option>)
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="日期">
                        {getFieldDecorator('holdingDate', {
                            initialValue: data.id ? data.holdingDate : '',
                            rules: [{required: true, message: '请选择议程日期！'}]
                        })(
                            <Select style={{ width: 120, marginRight: 15 }}>
                                <Option value="9月28日">9月28日</Option>
                                <Option value="9月29日">9月29日</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="时段">
                        {getFieldDecorator('holdingTime', {
                            initialValue: data.id ? data.holdingTime : '',
                            rules: [{ required: true, message: '请输入议程时间！' }]
                        })(
                            <Select style={{ width: 120, marginRight: 15 }}>
                                <Option value="上午">上午</Option>
                                <Option value="中午">中午</Option>
                                <Option value="下午">下午</Option>
                                <Option value="晚上">晚上</Option>
                                <Option value="全天">全天</Option>
                            </Select>
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
                        {getFieldDecorator('guestIntroduce', {
                            initialValue: data.id ? data.guestIntroduce : '',
                            rules: [{ required: false, message: '请输入择议嘉宾"！' }]
                        })(<Input rows={2} type="textarea" />)}
                        {/* <p>多个嘉宾换行用英文逗号“ , ”隔开</p> */}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="权重"
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
