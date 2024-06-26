import React, {Component} from 'react'
import { Modal, Form, Input } from 'antd'
const FormItem = Form.Item
const {TextArea} = Input

class CollectionCreateForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [],
            value: '',
            description: '',
            disabled: true
        }
    }

    componentWillMount () {
        const {selectedData} = this.props
        this.setState({
            disabled: !selectedData.topOrder
        })
    }

    handleChange = (checked) => {
        const {form} = this.props
        if (!checked) {
            form.setFieldsValue({
                topOrder: 0
            })
        }
        this.setState({
            disabled: !checked
        })
    }

    render () {
        const { visible, onCancel, onCreate, form, selectedData } = this.props
        const { getFieldDecorator } = form
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 18, offset: 1}
        }
        return (
            <Modal
                visible={visible}
                title="新增榜单"
                okText="确定"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="榜单名称"
                    >
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true, message: '字段不能为空!'
                            }],
                            initialValue: selectedData.title || ''
                        })(
                            <Input placeholder="请输入榜单名" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="榜单介绍"
                    >
                        {getFieldDecorator('toplist', {
                            rules: [{
                                required: true, message: '字段不能为空!'
                            }],
                            initialValue: selectedData.content || ''
                        })(
                            <TextArea rows={4} placeholder="请输入榜单介绍" />
                        )}
                    </FormItem>
                    {/*
                    <FormItem
                        {...formItemLayout}
                        label="是否置顶"
                    >
                        {getFieldDecorator('status', {
                            valuePropName: 'checked',
                            initialValue: !!selectedData.topOrder
                        })(
                            <Switch onChange={this.handleChange} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="排序">
                        {getFieldDecorator('topOrder', {
                            rules: [{
                                required: !this.state.disabled, message: '请输入排序号!'
                            }],
                            initialValue: this.state.disabled || !selectedData.topOrder ? 0 : selectedData.topOrder
                        })(
                            <InputNumber min={0} disabled={this.state.disabled} placeholder="值越大, 顺序越靠前" />
                        )}
                        <span>（值越大, 排序越靠前）</span>
                    </FormItem>
                    */}
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(CollectionCreateForm)
