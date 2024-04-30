import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { Link, hashHistory } from 'react-router'
import {Form, Table, Spin, Row, Col, Button, Modal, message, Select, Input} from 'antd'
import {getAmendPhone} from '../../actions/amendPhone/index'
import {formatDate, axiosAjax} from '../../public/index'
import './amendPhone.index.scss'
import IconItem from '../../components/icon/icon'
const Option = Select.Option

const FormItem = Form.Item
let columns = []
const formItemLayout = {
    labelCol: {
        xs: {span: 2},
        sm: {span: 4}
    },
    wrapperCol: {
        xs: {span: 4},
        sm: {span: 16}
    }
}

class AmendPhone extends Component {
    state = {
        loading: true,
        visible: false,
        previewVisible: false,
        serchVal: ''
    }

    componentDidMount () {
        this.doInit(this.state.serchVal, 1, '')
        columns = [{
            title: '旧手机号',
            key: 'authorOriginPhone',
            render: (text, record) => <p>{record.authorOriginPhone}</p>
        }, {
            title: '新手机号',
            key: 'authorNewPhone',
            render: (text, record) => (record && <div className="flashAccount-info clearfix">
                <div>
                    <h4 title={record.authorNewPhone}>{record.authorNewPhone}</h4>
                </div>
            </div>)
        }, {
            title: '昵称',
            key: 'authorNickName',
            render: (text, record) => record && <p>{record.authorNickName}</p>
        }, {
            title: '修改人',
            key: 'adminNickName',
            render: (text, record) => <p>{record.adminNickName}</p>
        }, {
            title: '状态',
            key: 'result',
            render: (text, record) => <p className="phone-state">{record.result === 0 ? <span className="defeated">修改失败</span> : <span className="succeed">修改成功</span> }</p>
        }, {
            title: '修改时间',
            key: 'createTime',
            render: (text, record) => <p>{formatDate(record.updateTime) || '时间格式错误'}</p>
        }]
    }

    doInit = (search, page, status) => {
        let {dispatch} = this.props
        let sendData = {
            pageSize: 20,
            search: search,
            page: page,
            status: status
        }
        dispatch(getAmendPhone(sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }

    changePage = (page) => {
        this.setState({
            loading: true
        })
        this.doInit(this.state.serchVal, page, '')
    }

    // 提交表单
    submitForm = () => {
        let that = this
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            if (values.newMarsPhone2 === values.newMarsPhone) {
                axiosAjax('post', '/account/author/phone/update', {
                    originMarsPhone: values.originMarsPhone,
                    newMarsPhone: values.newMarsPhone
                }, (data) => {
                    if (data.code === 1) {
                        message.success('修改成功!')
                        that.doInit(that.state.serchVal, 1, '')
                        that.setState({visible: false})
                        form.resetFields()
                    } else {
                        message.success(data.msg)
                    }
                })
            } else {
                message.success('输入手机号码不一致!')
            }
        })
    }
    // 取消
    cancelModal = () => {
        const {form} = this.props
        form.resetFields()
        this.setState({visible: false})
    }
    // 筛选状态
    handleChange = (e) => {
        let val = e.target.value
        this.setState({
            serchVal: val
        })
    }
    handleSelectChange = (val) => {
        this.doInit('', 1, val)
    }

    render () {
        let {form, phoneObj} = this.props
        const {visible} = this.state
        const {getFieldDecorator} = form
        let list = phoneObj.inforList === undefined ? [] : phoneObj.inforList
        const phoneSelect = [
            {
                type: '',
                text: '全部'
            },
            {
                type: '0',
                text: '修改失败'
            },
            {
                type: '1',
                text: '修改成功'
            }
        ]
        return (
            <div className="cooperation">
                <Row>
                    <Col>
                        <Input
                            style={{width: 150, marginRight: '15px'}}
                            onChange={(e) => {
                                this.handleChange(e)
                            }}
                            placeholder="请输入手机号搜索"
                        />
                        <Button type="primary" onClick={() => {
                            this.doInit(this.state.serchVal, 1)
                        }}>搜索</Button>
                        <span style={{ marginLeft: 20 }}>状态筛选：</span>
                        <Select defaultValue={``} style={{ width: 120 }} onChange={this.handleSelectChange}>
                            {phoneSelect.map((d, index) => <Option value={d.type} key={index}>{d.text}</Option>)}
                        </Select>
                        <span>
                            <Button type="primary" style={{margin: '0 0 0 15px'}} onClick={() => {
                                this.setState({
                                    imageList: [],
                                    image: '',
                                    visible: true
                                })
                            }}><IconItem type="icon-post-send"/>更换注册账号</Button>
                        </span>
                    </Col>
                </Row>
                <div className="mt30">
                    <Spin spinning={this.state.loading} size="large">
                        <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{
                            current: phoneObj.currentPage,
                            total: phoneObj.recordCount,
                            pageSize: phoneObj.pageSize,
                            onChange: (page) => this.changePage(page)
                        }}/>
                    </Spin>
                </div>
                <Modal
                    title="用户手机号替换"
                    visible={visible}
                    maskClosable={false}
                    onOk={this.submitForm}
                    onCancel={this.cancelModal}
                >
                    <Form>
                        <FormItem {...formItemLayout} label="当前手机号">
                            {getFieldDecorator('originMarsPhone', {
                                rules: [{
                                    required: true,
                                    pattern: /^1\d{10}$/,
                                    message: '手机号码不正确!'
                                }],
                                initialValue: ''
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="新手机号">
                            {getFieldDecorator('newMarsPhone', {
                                rules: [{
                                    required: true,
                                    pattern: /^1\d{10}$/,
                                    message: '手机号码不正确!'
                                }],
                                initialValue: ''
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="确认手机号">
                            {getFieldDecorator('newMarsPhone2', {
                                rules: [{
                                    required: true,
                                    pattern: /^1\d{10}$/,
                                    message: '手机号码不正确!'
                                }],
                                initialValue: ''
                            })(
                                <Input/>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        phoneObj: state.amendPhoneInfo.phoneObj
    }
}

export default connect(mapStateToProps)(Form.create()(AmendPhone))
