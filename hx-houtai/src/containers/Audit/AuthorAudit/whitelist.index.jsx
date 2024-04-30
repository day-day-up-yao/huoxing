/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Modal, message, Spin, Input, Button, Switch } from 'antd'
import '../index.scss'
import {getWhiteList} from '../../../actions/audit/whiteList.action'
import {axiosAjax, cutString, formatDate, isPhoneAvailable} from '../../../public/index'
const confirm = Modal.confirm

let columns = []
class WhiteListAudit extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            auditStatus: null,
            visible: false,
            visibleBlack: false,
            previewVisible: false,
            previewImage: '',
            phone: '',
            funs: 0,
            disabled: false,
            authorInfo: {},
            searchVal: '',
            passportId: '',
            symbolVisible: false,
            identityAuth: 0,
            nickName: '', // 昵称
            remarks: '',
            isEdit: false,
            whiteListStatus: false // 非白名单用户权限默认权限
        }
    }

    componentWillMount () {
        const {dispatch} = this.props
        const This = this
        dispatch(getWhiteList({
            currentPage: 1,
            pageSize: 20,
            search: this.state.searchVal
        }, function () {
            This.setState({
                loading: false
            })
        }))
        columns = [{
            title: '昵称',
            width: 200,
            key: 'nickName',
            render: (text, record) => (<div className="audit-info clearfix">
                <div>
                    <h4 title={record.nickName} dangerouslySetInnerHTML={this.createMarkup(record.nickName ? cutString(record.nickName, 100) : '暂无')} />
                </div>
            </div>)
        }, {
            title: '手机号 ',
            dataIndex: 'phoneNum',
            key: 'phoneNum',
            width: 200,
            render: (text, record) => (<h3 title={record.phoneNum}>{record.phoneNum ? cutString(record.phoneNum, 30) : '暂无'}</h3>)
        },
        {
            title: '备注',
            dataIndex: 'remarks ',
            key: 'remarks',
            width: 200,
            render: (text, record) => (<h3 title={record.remarks}>{record.remarks ? cutString(record.remarks, 500) : '暂无'}</h3>)
        }, {
            title: '添加时间',
            key: 'realFollow',
            width: 90,
            render: (item) => (<div>
                <p dangerouslySetInnerHTML={this.createMarkup(formatDate(item.createTime, '-', true))}/>
            </div>)
        }, {
            title: '操作',
            key: 'action',
            width: 100,
            render: (item) => (<div>
                <p>
                    <a className="mr10 opt-btn" onClick={() => { this.editAudit(item) }} style={{background: '#2e55a3'}}>编辑</a>
                    <a className="mr10 opt-btn" onClick={() => { this.delAudit(item) }} style={{background: '#d73435'}}>删除</a>
                </p>
            </div>)
        }]
    }

    createMarkup (str) { return {__html: str} }

    doSearch (page) {
        const {dispatch} = this.props
        let sendData = {
            currentPage: page,
            pageSize: 20,
            search: this.state.searchVal
        }
        dispatch(getWhiteList({...sendData}, () => {
            this.setState({
                loading: false
            })
        }))
    }

    searchValue (e) {
        let val = e.target.value
        this.setState({
            searchVal: val
        })
    }
    updateRemarks (e) {
        let val = e.target.value
        this.setState({
            remarks: val
        })
    }
    changePage (page) {
        const {dispatch} = this.props
        this.setState({
            loading: true
        })
        dispatch(getWhiteList({'currentPage': page, 'pageSize': 20, 'search': this.state.searchVal}, () => {
            this.setState({
                loading: false
            })
        }))
    }
    editAudit (item) {
        this.setState({
            disabled: false,
            visible: true,
            isEdit: true,
            nickName: item.nickName,
            phone: item.phoneNum,
            remarks: item.records,
            passportId: item.passportId
        })
    }

    // 打开非白名单用户设置弹窗
    openNotWhiteListUser = async () => {
        axiosAjax('get', '/author/nonwhitelist/canPublish', {}, (res) => {
            if (res.code === 1) {
                const status = res.obj.nonCanPublish
                const a = status ? '关闭' : '开启'
                console.log(`打开弹窗是：${a}`)
                this.setState({
                    visibleBlack: true,
                    whiteListStatus: !status
                })
            }
        })
    }
    // 设置非白名单用户发文章权限
    setNotWhiteListUser = async () => {
        const b = this.state.whiteListStatus ? '打开' : '关闭'
        // 获取switch的值
        // 这里判断switch的值
        console.log(`获取值确定：${b}`)
        axiosAjax('get', '/author/nonwhitelist/canPublish', {canPublish: b === '关闭' ? 1 : 0}, (res) => {
            if (res.code === 1) {
                this.setState({
                    visibleBlack: false
                })
            } else {
                message.error(res.msg)
            }
        })
    }
    // // // 改变非白名单用户状态
    chanageWhiteListStatus = () => {
        console.log('改变值' + !this.state.whiteListStatus)
        this.setState({
            whiteListStatus: !this.state.whiteListStatus
        })
    }
    handleCancelBlack = (e) => {
        this.setState({
            visibleBlack: false
        })
    }
    // 删除
    delAudit (item) {
        const {dispatch, pageData} = this.props
        const This = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                console.log(item)
                let sendData = {
                    phonenum: item.phoneNum
                }
                axiosAjax('POST', '/author/whitelist/remove', {...sendData}, (res) => {
                    if (res.code === 1) {
                        This.setState({
                            loading: true
                        })
                        message.success('删除成功')
                        dispatch(getWhiteList({'currentPage': pageData.currPage, 'pageSize': 20}, () => {
                            This.setState({
                                loading: false
                            })
                        }))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 匹配手机号
    setPhone = (e) => {
        this.setState({
            phone: e.target.value,
            authorInfo: {}
        })
    }

    inquireWhiteList = () => {
        if (!isPhoneAvailable(this.state.phone)) {
            return message.error('请输入正确的手机号！')
        }
        axiosAjax('post', '/author/whitelist/queryAccount', {phonenum: this.state.phone}, (data) => {
            if (data.code === 1) {
                message.success('查询成功！')
                this.setState({
                    nickName: data.obj.nickName,
                    introduce: !data.obj.introduce ? '' : data.obj.introduce,
                    remarks: !data.obj.remarks ? '暂无备注' : data.obj.remarks
                })
            } else if (data.code === -1) {
                message.error('未查到入驻的MarsBit专栏！')
            }
        })
    }

    handleOk = (e) => {
        const {phone, isEdit, passportId} = this.state
        if (phone.trim() === '' || phone.length !== 11) {
            message.error('输入手机号有误，请检查后重新提交！')
            return false
        }
        console.log(this.state.remarks)
        // 点击确定按钮编辑
        if (isEdit) {
            axiosAjax('post', '/author/whitelist/update', {phonenum: phone, passportId: passportId, remarks: this.state.remarks}, (data) => {
                if (data.code === 1) {
                    message.success('添加成功！')
                    this.setState({
                        visible: false,
                        phone: '',
                        name: '',
                        nickName: '',
                        remarks: ''
                    })
                    const {dispatch} = this.props
                    const This = this
                    dispatch(getWhiteList({
                        currentPage: 1,
                        pageSize: 20,
                        search: ''
                    }, function () {
                        This.setState({
                            loading: false
                        })
                    }))
                } else if (data.code === -1) {
                    message.error('添加失败！')
                } else {
                    message.error(data.msg)
                }
            })
        } else {
            axiosAjax('post', '/author/whitelist/add', {phonenum: phone, remarks: this.state.remarks}, (data) => {
                if (data.code === 1) {
                    message.success('添加成功！')
                    this.setState({
                        visible: false,
                        phone: '',
                        name: '',
                        nickName: ''
                    })
                    const {dispatch} = this.props
                    const This = this
                    dispatch(getWhiteList({
                        currentPage: 1,
                        pageSize: 20,
                        search: ''
                    }, function () {
                        This.setState({
                            loading: false
                        })
                    }))
                } else if (data.code === -1) {
                    message.error('添加失败！')
                } else {
                    message.error(data.msg)
                }
            })
        }
    }

    handleCancel = (e) => {
        this.setState({
            disabled: false,
            visible: false,
            isEdit: false,
            nickName: '',
            phone: '',
            remarks: ''
        })
    }

    render () {
        const { whiteList, pageData } = this.props
        const {isEdit, whiteListStatus} = this.state
        return <div className="audit-index">
            <Row>
                <Col span={20}>
                    <Input
                        style={{width: 200}}
                        onChange={(e) => { this.searchValue(e) }}
                        placeholder="手机号/昵称/姓名"
                        onPressEnter={() => { this.doSearch(1) }}
                    />
                    <Button style={{margin: '0 15px'}} type="primary" onClick={() => { this.doSearch(1) }}>搜索</Button>
                    <Button style={{margin: '0 15px'}} type="primary" onClick={() => { this.setState({visible: true}) }}>添加白名单</Button>
                    <Button type="primary" onClick={this.openNotWhiteListUser}>非白名单用权限</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={whiteList.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
            <Modal
                title="非白名单作者权限开关"
                visible={this.state.visibleBlack}
                onOk={this.setNotWhiteListUser}
                onCancel={this.handleCancelBlack}>
                <p><span style={{ marginRight: '10px' }}>限制打开后，非白名单MarsBit专栏用户将无法发布文章与视频</span><Switch checkedChildren="开启" unCheckedChildren="关闭" onChange={this.chanageWhiteListStatus} checked={whiteListStatus} /></p>
            </Modal>
            <Modal
                title={`${!isEdit ? '添加' : '编辑'}白名单作者`}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <div className="auditModalInfo" style={{padding: '0 10px 10px'}}>
                    <Row>
                        <Col
                            span={3}
                            className="audit-title"
                            style={{lineHeight: '28px', fontWeight: 'bold'}}>手机号: </Col>
                        {isEdit ? <Col span={12}><div style={{lineHeight: '28px'}}>{this.state.phone}</div></Col> : <Col span={12}>
                            <Input
                                placeholder="输入手机号进行搜索"
                                onPressEnter={this.checkAuthor}
                                type='tel'
                                disabled={this.state.disabled}
                                value={this.state.phone}
                                style={{width: '100%'}}
                                className=""
                                onChange={(e) => { this.setPhone(e) }}
                            />
                        </Col>
                        }
                        {isEdit ? <div></div> : <Col span={5} offset={1} >
                            <Button type="primary" onClick={this.inquireWhiteList}>匹配</Button>
                        </Col>
                        }

                    </Row>
                    <Row>
                        <Col span={3} className="audit-title" style={{lineHeight: '28px', fontWeight: 'bold'}}>昵称: </Col>
                        <Col span={16} className="audit-title" style={{lineHeight: '28px', fontWeight: 'bold'}}>{this.state.nickName}</Col>
                    </Row>
                    <Row>
                        <Col span={3} className="audit-title" style={{lineHeight: '28px', fontWeight: 'bold'}}>备注：</Col>
                        <Col span={16} className="audit-title" style={{lineHeight: '28px', fontWeight: 'bold'}}><textarea rows="4"cols="50" style={{ padding: '5px' }} onChange={ (e) => this.updateRemarks(e)} value={this.state.remarks} /></Col>
                    </Row>
                </div>
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        whiteList: state.whiteListInfo.whiteList,
        pageData: state.whiteListInfo.pageData
    }
}

export default connect(mapStateToProps)(WhiteListAudit)
