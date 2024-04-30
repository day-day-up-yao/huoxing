import React, {Component} from 'react'
import { Modal, Form, Input } from 'antd'
import {axiosAjax} from '../../../../public'
const FormItem = Form.Item

class CollectionCreateForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            previewVisible: false,
            loading: true
        }
    }

    // 议程分类
    agendaSubmit () {
        let This = this
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            let url = this.props.data.id ? '/power4/updateHall' : '/power4/addHall'
            axiosAjax('POST', url, {
                id: this.props.data.id,
                hallName: values.hallName
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
                title="添加/编辑 议程分类"
                okText="确定"
                onCancel={onCancel}
                onOk={() => { this.agendaSubmit() }}
                confirmLoading={loading}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="议程名称">
                        {getFieldDecorator('hallName', {
                            initialValue: data.id ? data.hallName : '',
                            rules: [{ required: true, message: '请输入议程名称！' }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(CollectionCreateForm)
