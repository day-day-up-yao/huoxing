import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Modal, message, Spin, Select, Input, Form, Button, Radio } from 'antd'
import './postAccount.scss'
import {axiosAjax, cutString, formatDate} from '../../../public/index'
import {getPostTacticsList} from '../../../actions/account/postTactics.action'

const confirm = Modal.confirm
const Option = Select.Option
const RadioGroup = Radio.Group
const formItemLayout = {
    labelCol: {
        xs: { span: 2 },
        sm: { span: 4 }
    },
    wrapperCol: {
        xs: { span: 4 },
        sm: { span: 16 }
    }
}
let columns = []
const FormItem = Form.Item
class PostTacticsIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            newsStatus: null,
            previewVisible: false,
            previewImage: '',
            visible: false,
            confirmLoading: false,
            statusChang: 1,
            strategyCat: '',
            strategyCatName: '',
            rank: '',
            status: '',
            id: ''
        }
    }

    handleTacticsList = (status) => {
        const {dispatch} = this.props
        const This = this
        dispatch(getPostTacticsList('post', {'pageSize': 20, 'status': status, 'currentPage': 1}, function () {
            This.setState({
                loading: false
            })
        }))
    }

    componentWillMount () {
        this.handleTacticsList('')
        columns = [{
            title: '分类名称',
            key: 'strategyCatName',
            render: (text, record) => (record && <div className="postAccount-info clearfix">
                <div>
                    <h4 title={record.strategyCatName} dangerouslySetInnerHTML={this.createMarkup(cutString(record.strategyCatName, 30))} />
                </div>
            </div>)
        }, {
            title: '分类ID',
            key: 'strategyCat',
            render: (record) => <div
                key={record.strategyCat}
            >{record.strategyCat}</div>
        }, {
            title: '分类状态',
            width: 150,
            key: 'status',
            render: (record) => {
                if (record.status === 1) {
                    return '可用'
                } else if (record.status === 0) {
                    return '禁用'
                } else {
                    return '已删除'
                }
            }
        }, {
            title: '时间',
            width: 300,
            key: 'updateTime',
            render: (record) => <p dangerouslySetInnerHTML={this.createMarkup(formatDate(record.updateTime, '-', true))}></p>
        }, {
            title: '权重',
            key: 'rank',
            render: (record) => {
                return <span>{record.rank}</span>
            }
        }, {
            title: '操作',
            key: 'action',
            render: (item) => (<div className="btns">
                <p>
                    <a className="mr10 opt-btn" onClick={() => { this.updateAccount(item) }} style={{background: '#108ee9'}}>编辑</a>
                </p>
                <p>
                    <a onClick={() => this.delPostTactics(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                </p>
            </div>)
        }]
    }

    handleImgModalCancel = () => this.setState({previewVisible: false})

    createMarkup (str) { return {__html: str} }

    changePage (page) {
        this.setState({
            loading: true
        })
        const This = this
        const {dispatch} = this.props
        dispatch(getPostTacticsList('post', {'pageSize': 20, 'status': this.state.statechange, 'currentPage': page}, function () {
            This.setState({
                loading: false
            })
        }))
    }

    // 删除
    delPostTactics (item) {
        const This = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id
                }
                axiosAjax('POST', '/news/strategyCategory/del', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        This.handleTacticsList(This.state.statusChang)
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 筛选状态
    handleChange = (value) => {
        let This = this
        this.setState({
            statusChang: value
        }, function () {
            This.handleTacticsList(value)
        })
    }

    // 增加策略
    addTactics () {
        const {form} = this.props
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            this.setState({
                confirmLoading: true
            })
            let data = {
                strategyCat: values.strategyCat,
                strategyCatName: values.strategyCatName,
                rank: values.rank,
                status: values.status
            }
            if (this.state.strategyCat !== '') {
                data = { ...data, id: this.state.id }
            }
            let url = this.state.strategyCat === '' ? '/news/strategyCategory/add' : '/news/strategyCategory/update'
            axiosAjax('post', url, data, (data) => {
                if (data.code === 1) {
                    message.success('操作成功!')
                    this.setState({
                        visible: false,
                        confirmLoading: false
                    })
                    this.handleTacticsList()
                    form.resetFields()
                } else {
                    this.setState({
                        confirmLoading: false
                    })
                    message.success(data.msg)
                }
            })
        })
    }

    cancelModal = () => {
        const {form} = this.props
        this.setState({
            visible: false
        })
        form.resetFields()
    }

    updateAccount (item) {
        this.setState({
            visible: true,
            strategyCat: item.strategyCat,
            strategyCatName: item.strategyCatName,
            rank: item.rank,
            status: item.status,
            id: item.id
        })
    }

    render () {
        const {list, pageData, form} = this.props
        const { getFieldDecorator } = form
        const {visible, loading} = this.state

        return <div className="postAccount-index">
            <Row>
                <Col>
                    <span>账号状态：</span>
                    <Select defaultValue='' style={{ width: 100 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        <Option value="1">启用</Option>
                        <Option value="0">禁用</Option>
                    </Select>
                    <Button type="primary" style={{margin: '0 0 0 15px'}} onClick={() => {
                        this.setState({
                            visible: true,
                            strategyCat: '',
                            strategyCatName: '',
                            rank: '',
                            status: '',
                            id: ''
                        })
                    }}>新增账号</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.recordCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
            <Modal
                title="添加/修改分类"
                visible={visible}
                confirmLoading={this.state.confirmLoading}
                onOk={() => this.addTactics()}
                onCancel={ this.cancelModal }
            >
                <Form>
                    <FormItem {...formItemLayout} label="分类昵称">
                        {getFieldDecorator('strategyCatName', {
                            rules: [{
                                required: true, message: '请输入分类昵称!'
                            }],
                            initialValue: this.state.strategyCatName !== '' ? this.state.strategyCatName : ''
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="分类ID">
                        {getFieldDecorator('strategyCat', {
                            rules: [{
                                required: true, message: '请输入分类ID!'
                            }],
                            initialValue: this.state.strategyCat !== '' ? this.state.strategyCat : ''
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="排序权重">
                        {getFieldDecorator('rank', {
                            rules: [{
                                required: true, message: '请输排序权重!'
                            }],
                            initialValue: this.state.rank !== '' ? this.state.rank : ''
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="状态">
                        {getFieldDecorator('status', {
                            rules: [{
                                required: true, message: '请选择状态!'
                            }],
                            initialValue: this.state.status !== '' ? this.state.status : 1
                        })(
                            <RadioGroup>
                                <Radio value={1}>启用</Radio>
                                <Radio value={0}>禁用</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.postTacticsInfo.list,
        pageData: state.postTacticsInfo.pageData
    }
}

export default connect(mapStateToProps)(Form.create()(PostTacticsIndex))
