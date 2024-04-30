import React, {Component} from 'react'
import { Modal, Form, Input } from 'antd'
const FormItem = Form.Item
const { TextArea } = Input
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
    changeRadio = (checked) => {

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
                title="版本更新"
                okText="确定"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="版本号"
                    >
                        {getFieldDecorator('version', {
                            rules: [{
                                required: false, message: '字段不能为空!'
                            }],
                            initialValue: selectedData.version || ''
                        })(
                            <Input placeholder="请输入版本号" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="平台"
                    >
                        {
                            getFieldDecorator('appType', {
                                rules: [{
                                    required: true, message: '必选!'
                                }],
                                initialValue: selectedData.appType || ''
                            })(
                                <div className="Radio">
                                    {/* <label forHtml="android"><Input id="android" checked={selectedData.appType === 1} type="radio" name="appType" value='1'/>安卓</label>
                                    <label forHtml="ios"><Input id="ios" checked={selectedData.appType !== 1} type="radio" name="appType" value="2" />iOS</label> */}
                                    <label forHtml="android"><Input id="android" onChange-={this.changeRadio} checked={selectedData && selectedData.appType === 1} type="radio" name="appType" value='1'/>安卓</label>
                                    <label forHtml="ios"><Input id="ios" type="radio" name="appType" value="2" />iOS</label>
                                </div>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="更新内容">
                        {getFieldDecorator('newFeatures', {
                            rules: [{
                                required: true, message: '字段不能为空!'
                            }],
                            initialValue: selectedData.newFeatures || ''
                        })(
                            <TextArea rows={8} placeholder="请输入更新内容" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="强制更新">
                        {
                            getFieldDecorator('forceUpdate', {
                                rules: [{
                                    required: true, message: '字段必选!'
                                }],
                                initialValue: selectedData.forceUpdate || ''
                            })(
                                <div className="Radio">
                                    {/* <label forHtml="force"><Input id="force" checked={selectedData.forceUpdate === 1} type="radio" name="forceUpdate" value="1"/>强制</label>
                                    <label forHtml="unforce"><Input id="unforce" checked={selectedData.forceUpdate === 0} type="radio" name="forceUpdate" value="0" />不强制</label> */}
                                    <label forHtml="force"><Input id="force" type="radio" name="forceUpdate" value="1"/>强制</label>
                                    <label forHtml="unforce"><Input id="unforce" type="radio" name="forceUpdate" value="0" />不强制</label>
                                </div>
                            )
                        }
                    </FormItem>
                    <FormItem style={{ 'display': 'none' }}>
                        {
                            getFieldDecorator('channel', {
                                rules: [{
                                    required: true, message: '必填'
                                }],
                                initialValue: selectedData.channel || '默认渠道'
                            })(
                                <Input placehold="请输入" />
                            )
                        }
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(CollectionCreateForm)
