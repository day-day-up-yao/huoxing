import React, {Component} from 'react'
import { Modal, Form, Input, InputNumber } from 'antd'
import {axiosAjax} from '../../../../public/index'
const FormItem = Form.Item

class CollectionCreateForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            previewVisible: false,
            loading: true
        }
    }
    agendaAddSubmit () {
        let This = this
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            let url = this.props.data.id ? '/power3/award/update' : '/power3/award/add'
            axiosAjax('POST', url, {
                id: this.props.data.id,
                awardName: values.awardName,
                awardTime: values.awardTime,
                winner: values.winner,
                awardSeq: values.awardSeq
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
        return (
            <Modal
                visible={visible}
                title="添加/编辑奖项"
                okText="确定"
                onCancel={onCancel}
                onOk={() => { this.agendaAddSubmit() }}
                confirmLoading={loading}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="奖项名称">
                        {getFieldDecorator('awardName', {
                            initialValue: data.id ? `${data.awardName}` : '',
                            rules: [{required: true, message: '请选择奖项名称！'}]
                        })(
                            <Input rows={2} type="text" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="揭晓时间">
                        {getFieldDecorator('awardTime', {
                            initialValue: data.id ? `${data.awardTime}` : '',
                            rules: [{required: true, message: '请选择揭晓时间！'}]
                        })(
                            <Input rows={2} type="text" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="获奖人员">
                        {getFieldDecorator('winner', {
                            initialValue: data.id ? data.winner : '',
                            rules: [{ required: true, message: '请输入获奖人员"！' }]
                        })(<Input rows={4} type="textarea" />)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        className="collection-create-form_last-form-item"
                        label="排序权重"
                    >
                        {getFieldDecorator('awardSeq', {
                            initialValue: data.id ? data.awardSeq : 0,
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
