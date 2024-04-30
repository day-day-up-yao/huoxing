/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Modal, message, Spin, Input, Button, InputNumber, Radio, Select } from 'antd'
import '../index.scss'
// import { hashHistory } from 'react-router'
// import IconItem from '../../components/icon/icon'
import {getOfficialAuditList, setSearchQuery, setPageData, setFilterData} from '../../../actions/audit/officialAudit.action'
import {selectedData} from '../../../actions/audit/audit.action'
import {axiosAjax, cutString, auditStatus} from '../../../public/index'
const confirm = Modal.confirm
const RadioGroup = Radio.Group
const Option = Select.Option
const { TextArea } = Input

let columns = []
class officialAuditIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            auditStatus: null,
            visible: false,
            previewVisible: false,
            previewImage: '',
            phone: '',
            funs: 0,
            disabled: false,
            authorInfo: {},
            value: 0,
            passportId: '',
            symbolVisible: false,
            identityAuth: 0,
            identityDesc: '',
            noPassReason: ''
        }
    }

    componentWillMount () {
        const {search, filter} = this.props
        this.doSearch(!search.type ? 'init' : search.type, {state: filter.status, type: filter.type, identityAuth: filter.identityAuth})
        columns = [{
            title: 'MarsBit专栏昵称',
            width: 100,
            key: 'nickName',
            render: (text, record) => (<div className="audit-info clearfix">
                <div>
                    <h4 title={record.nickName} dangerouslySetInnerHTML={this.createMarkup(record.nickName ? cutString(record.nickName, 30) : '暂无')} />
                </div>
            </div>)
        }, {
            title: 'MarsBit账号 ',
            dataIndex: 'phoneNum',
            key: 'phoneNum',
            width: 114,
            render: (text, record) => (<h3 title={record.phoneNum}>{record.phoneNum ? cutString(record.phoneNum, 30) : '暂无'}</h3>)
        },
        // {
        //     title: '简介',
        //     key: 'introduce',
        //     render: (text, record) => (<div className="audit-info clearfix">
        //         <div>
        //             <h4 title={record.introduce} dangerouslySetInnerHTML={this.createMarkup(record.introduce ? cutString(record.introduce, 100) : '暂无')} />
        //         </div>
        //     </div>)
        // },
        {
            title: '认证类型',
            width: 96,
            dataIndex: 'vGrade',
            key: 'vGrade',
            render: (record) => {
                if (record === 0) {
                    return <span className="state-btns ordinary-v">普通</span>
                } else if (record === 1) {
                    return <span className="state-btns personal-v">个人认证</span>
                } else if (record === 3) {
                    return <span className="state-btns company-v">企业认证</span>
                } else if (record === 2) {
                    return <span className="state-btns media-v">媒体认证</span>
                } else {
                    return <span className="state-btns ordinary-v">普通</span>
                }
            }
        }, {
            title: '分类',
            width: 96,
            dataIndex: 'identityAuth',
            key: 'identityAuth',
            render: (record) => {
                if (record === 0) {
                    return <span className="state-btns ordinary-v">其他</span>
                } else if (record === 1) {
                    return <span className="state-btns personal-v">媒体</span>
                } else if (record === 2) {
                    return <span className="state-btns company-v">KOL</span>
                } else if (record === 3) {
                    return <span className="state-btns media-v">投研</span>
                } else if (record === 4) {
                    return <span className="state-btns pass-identify">项目</span>
                } else if (record === 5) {
                    return <span className="state-btns cant-identify">行情</span>
                } else if (record === 6) {
                    return <span className="state-btns newColor1">社群</span>
                } else {
                    return <span className="state-btns ordinary-v">其他</span>
                }
            }
        },
        // {
        //     title: '用户头像',
        //     width: 80,
        //     key: 'iconUrl',
        //     render: (record) => <div
        //         className="shrinkPic"
        //         key={record.iconUrl}
        //         style={{
        //             background: `url(${record.iconUrl || 'http://static.huoxing24.com/images/2018/03/31/1522470188490129.png'}) no-repeat center / cover`
        //         }}
        //         src={record.iconUrl || 'http://static.huoxing24.com/images/2018/03/31/1522470188490129.png'}
        //         onClick={this.handlePreview}
        //     />
        // }, {
        //     title: '真实粉丝',
        //     key: 'realFollow',
        //     width: 70,
        //     dataIndex: 'realFollow'
        // }, {
        //     title: '展示粉丝',
        //     key: 'jiaFollow',
        //     width: 70,
        //     dataIndex: 'jiaFollow'
        // },
        {
            title: '操作',
            key: 'action',
            width: 120,
            render: (item) => (<div style={{display: 'flex'}}>
                {/* <p style={{marginBottom: 10}}>
                    <a className="mr10 opt-btn" onClick={() => { this.funsChange(item) }} style={{background: '#108ee9', marginBottom: 10}}>修改粉丝数</a>
                </p>
                <p>
                    <a className="mr10 opt-btn" onClick={() => { this.symbolModalVisible(item) }} style={{background: '#108ee9'}}>修改认证标识</a>
                </p> */}
                <div>
                    <a className="mr10 opt-btn" onClick={() => { this.onBtnChangeUpdateClick(item) }} style={{background: '#108ee9', marginRight: 50}}>编辑</a>
                </div>
                <div>
                    {/* <a className="mr10 opt-btn" onClick={() => { this.onBtnUpdateStateClick(item) }} style={{background: '#ee250a'}}>取消认证</a> */}
                </div>
            </div>)
        }]
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'nickName': '', 'title': ''}))
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
    }
    createMarkup (str) { return {__html: str} }

    // 认证状态
    auditStatus (id) {
        let name = ''
        auditStatus.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    changeIdentityAuth = (e) => {
        this.setState({
            identityAuth: e.target.value
        })
    }

    changeIdentityDesc= (e) => {
        this.setState({
            identityDesc: e.target.value
        })
    }

    doSearch (type, data) {
        this.setState({
            loading: true
        })
        const {dispatch, pageData, search, filter} = this.props
        let sendData = {
            phoneOrName: search.search,
            state: filter.status,
            type: filter.type,
            identityAuth: filter.identityAuth,
            pageSize: 20,
            currentPage: pageData.currPage
        }
        sendData = {...sendData, ...data}
        dispatch(getOfficialAuditList('init', sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    _search () {
        const {dispatch} = this.props
        this.doSearch('init', {'currentPage': 1})
        dispatch(setPageData({'currPage': 1}))
    }
    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, search, filter} = this.props
        // this.setState({'currPage': page})
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page, state: filter.status, type: filter.type, identityAuth: filter.identityAuth})
    }
    // 删除
    delAudit (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    // 'appId': $.cookie('gameId'),
                    id: item.id,
                    status: 0
                }
                axiosAjax('POST', '/ad/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 发表或存草稿
    // _isPublish (item) {
    //     const {dispatch} = this.props
    //     const _this = this
    //     confirm({
    //         title: '提示',
    //         content: `确认要${item.status === 2 ? '发表' : '撤回广告'}吗 ?`,
    //         onOk () {
    //             let sendData = {
    //                 // 'appId': $.cookie('gameId'),
    //                 id: item.id,
    //                 status: item.status === 2 ? 1 : 2
    //             }
    //             axiosAjax('POST', '/ad/status', {...sendData}, (res) => {
    //                 if (res.code === 1) {
    //                     message.success(`${item.status === 2 ? '发表' : '撤回到草稿箱'}成功`)
    //                     _this.doSearch('init')
    //                     dispatch(setSearchQuery({'type': 'init'}))
    //                 } else {
    //                     message.error(res.msg)
    //                 }
    //             })
    //         }
    //     })
    // }

    // 禁评、取消禁评
    // _forbidcomment (item) {
    //     const {dispatch} = this.props
    //     let sendData = {
    //         // 'appId': $.cookie('gameId'),
    //         'id': item.id,
    //         'operate': !parseInt(item.forbidComment) ? '1' : '0'
    //     }
    //     axiosAjax('post', '/ad/forbidcomment', sendData, (res) => {
    //         if (res.status === 200) {
    //             this.doSearch('init')
    //             dispatch(setSearchQuery({'type': 'init'}))
    //         } else {
    //             message.error(res.msg)
    //         }
    //     })
    // }

    // 置顶
    // _isTop (item) {
    //     const {dispatch} = this.props
    //     let sendData = {
    //         // 'appId': $.cookie('gameId'),
    //         'id': item.id,
    //         'recommend': item.recommend === 1 ? 0 : 1
    //     }
    //     axiosAjax('post', '/ad/recommend', sendData, (res) => {
    //         if (res.code === 1) {
    //             // this.doSearch(search.type)
    //             this.doSearch('init')
    //             dispatch(setSearchQuery({'type': 'init'}))
    //         } else {
    //             message.error(res.msg)
    //         }
    //     })
    // }

    // 筛选广告状态
    // handleChange = (value) => {
    //     const {dispatch} = this.props
    //     dispatch(setFilterData({status: value}))
    //     this.setState({
    //         auditStatus: value
    //     })
    //     this.doSearch('init', {'currentPage': 1, state: value})
    // }

    // 筛选分类
    identityAuthChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({identityAuth: value}))
        this.setState({
            loading: true
        })
        this.doSearch('init', {'currentPage': 1, identityAuth: value})
    }

    // 筛选类型
    typeChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({type: value}))
        this.setState({
            loading: true
        })
        this.doSearch('init', {'currentPage': 1, type: value})
    }

    // 改变粉丝数
    funsChange (obj) {
        this.setState({
            phone: obj.phoneNum,
            disabled: true,
            visible: true
        })
    }

    // symbolModalVisible = (e) => {
    //     this.setState({
    //         passportId: e.passportId,
    //         value: e.vGrade,
    //         symbolVisible: true,
    //         identityAuth: e.identityAuth,
    //         identityDesc: e.identityDesc
    //     })
    // }

    symbolModalCancelVisible = () => {
        this.setState({
            value: 0,
            symbolVisible: false,
            identityDesc: ''
        })
    }

    symbolValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    // 改变标识
    symbolChange = (obj) => {
        const This = this
        let sendData = {
            passportId: this.state.passportId,
            ifAddV: this.state.value,
            identityAuth: this.state.identityAuth,
            identityDesc: this.state.identityDesc
        }
        axiosAjax('POST', '/account/updaterealauth', {...sendData}, (res) => {
            if (res.code === 1) {
                This.setState({
                    value: 0,
                    symbolVisible: false
                })
                message.success('修改成功')
                This.doSearch('init')
            } else {
                message.error(res.msg)
            }
        })
    }

    handleImgModalCancel = () => this.setState({previewVisible: false})

    handlePreview = (e) => {
        this.setState({
            previewImage: e.target.getAttribute('src'),
            previewVisible: true
        })
    }

    checkAuthor = () => {
        let myreg = /^[1][3, 4, 5, 6, 7, 8, 9][0-9]{9}$/
        if (!myreg.test(this.state.phone)) {
            message.error('手机号输入错误！')
            return false
        } else {
            axiosAjax('post', '/account/getaccountinfo', {phoneNumOrNickName: this.state.phone}, (data) => {
                if (data.code === 1) {
                    message.success('查询成功！')
                    this.setState({
                        authorInfo: data.obj
                    })
                } else if (data.code === -1) {
                    message.error('未查询到此账号！')
                }
            })
        }
    }

    setPhone = (e) => {
        this.setState({
            phone: e.target.value,
            authorInfo: {}
        })
    }

    setFuns = (funs) => {
        this.setState({funs})
    }

    handleOk = (e) => {
        const {phone, funs} = this.state
        if (phone.trim() === '' || phone.length !== 11) {
            message.error('输入内容有误，请检查后重新提交！')
            return false
        }

        axiosAjax('post', '/account/addfollow', {phoneNum: phone, followCount: funs}, (data) => {
            if (data.code === 1) {
                message.success('添加成功！')
                this.setState({
                    visible: false
                })
                this.doSearch('init')
            } else if (data.code === -1) {
                message.error('参数错误！')
            } else if (data.code === -3) {
                message.error('未查询到此账号！')
            } else if (data.code === -5) {
                message.error('手机号码格式不对！')
            }
        })
    }

    handleCancel = (e) => {
        this.setState({
            disabled: false,
            visible: false,
            phone: ''
        })
    }

    // 点击编辑按钮事件
    onBtnChangeUpdateClick = (obj) => {
        console.log('obj', obj)
        const {dispatch} = this.props
        const params = {
            passportId: obj.passportId
        }
        axiosAjax('get', '/account/getRealAuthByPassportId', params, (res) => {
            if (res.code === 1) {
                let item = res.obj
                item.realFollow = obj.realFollow
                item.jiaFollow = obj.jiaFollow
                dispatch(selectedData(item))
                window.sessionStorage.setItem('hx_identify_info', JSON.stringify(res.obj))
                window.location.href = `${window.location.origin}/#/audit-update?id=${obj.passportId}`
            } else {
                message.error(res.msg)
            }
        })
    }

    // 点击取消认证按钮事件
    onBtnUpdateStateClick = (obj) => {
        const This = this
        const params = {
            passportId: obj.passportid,
            state: -1
        }
        confirm({
            title: '提示',
            content: '确认要取消认证吗 ?',
            onOk () {
                confirm({
                    title: '提示',
                    content: <div className="modal-input">
                        <span style={{marginRight: 10}}>请填写认证不通过原因：</span>
                        <TextArea rows={3} autoFocus onChange={(e) => {
                            This.getReason(e)
                        }}/>
                    </div>,
                    onOk () {
                        if (This.state.noPassReason.trim() !== '') {
                            This.setState({
                                loading: true
                            })
                            params.noPassReason = This.state.noPassReason
                            params.ifAddV = 0
                            axiosAjax('get', '/account/updateauthstate', params, (res) => {
                                if (res.code === 1) {
                                    message.success('操作成功！')
                                    This.doSearch('init')
                                    // Cookies.remove('hx_identify_info')
                                    // hashHistory.push('/audit-identify')
                                } else {
                                    message.error(res.msg)
                                    This.setState({
                                        loading: true
                                    })
                                }
                            })
                        } else {
                            message.error('请填写驳回原因!')
                        }
                    }
                })
            }
        })
    }

    getReason = (e) => {
        this.setState({
            noPassReason: e.target.value
        })
    }

    // 点击添加作者按钮事件
    onBtnAddClick = () => {
        window.location.href = `${window.location.origin}/#/audit-add`
    }

    render () {
        const {list, pageData, search, dispatch, filter} = this.props
        // const classifyItem = ['其他', '媒体', 'KOL', '投研', '项目', '行情', '社群']
        // const typeItem = ['普通', '个人', '媒体', '机构']
        return <div className="audit-index">
            <Row>
                <Col span={20}>
                    <span>认证类型：</span>
                    <Select defaultValue={`${filter.type}`} style={{ width: 120 }} onChange={this.typeChange}>
                        <Option value=''>全部</Option>
                        <Option value='1'>个人认证</Option>
                        <Option value='2'>媒体认证</Option>
                        <Option value='3'>企业/机构认证</Option>
                    </Select>
                    <span style={{ marginLeft: 15 }}>分类：</span>
                    <Select defaultValue={`${filter.identityAuth}`} style={{ width: 120, marginRight: 15 }} onChange={this.identityAuthChange}>
                        <Option value=''>全部</Option>
                        <Option value='1'>媒体</Option>
                        <Option value='2'>KOL</Option>
                        <Option value='3'>投研</Option>
                        <Option value='4'>项目</Option>
                        <Option value='5'>行情</Option>
                        <Option value='6'>社群</Option>
                        <Option value='0'>其他</Option>
                    </Select>
                    <Input
                        value={search.search}
                        style={{width: 150}}
                        onChange={(e) => dispatch(setSearchQuery({search: e.target.value}))}
                        placeholder="手机号/昵称/姓名"
                        onPressEnter={() => { this._search() }}
                    />
                    <Button style={{margin: '0 15px'}} type="primary" onClick={() => { this._search() }}>搜索</Button>
                    {/* <Button type="primary" onClick={() => { this.setState({visible: true}) }}>添加作者</Button> */}
                    <Button type="primary" onClick={this.onBtnAddClick}>添加作者</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
            <Modal className="pre-Modal" visible={this.state.previewVisible} footer={null} onCancel={this.handleImgModalCancel}>
                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
            </Modal>
            <Modal
                title="添加认证作者"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <div className="auditModalInfo" style={{padding: '0 10px 10px'}}>
                    <Row>
                        <Col
                            span={6}
                            className="audit-title"
                            style={{lineHeight: '28px', fontWeight: 'bold'}}>手机号: </Col>
                        <Col span={12}>
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
                        <Col span={5} offset={1}>
                            <Button type="primary" onClick={this.checkAuthor}>查询</Button>
                        </Col>
                    </Row>
                    {this.state.authorInfo && this.state.authorInfo.nickName !== undefined ? <Row>
                        <Col span={6} className="audit-title" style={{fontWeight: 'bold'}}>查询结果: </Col>
                        <Col span={16} className="">{this.state.authorInfo.nickName}</Col>
                    </Row> : ''}
                    <Row>
                        <Col span={6} className="audit-title" style={{lineHeight: '28px', fontWeight: 'bold'}}>添加/修改粉丝数: </Col>
                        <Col span={16} className="audit-title" style={{fontWeight: 'bold'}}>
                            <InputNumber defaultValue={0} min={0} className="" onChange={this.setFuns}/>
                        </Col>
                    </Row>
                </div>
            </Modal>
            <Modal
                className=""
                title="修改认证标识"
                visible={this.state.symbolVisible}
                onOk={this.symbolChange}
                onCancel={this.symbolModalCancelVisible}>
                <Row className="" style={{margin: '0 0 20px'}}>
                    <span className="name" style={{marginRight: 10}}>认证类型：</span>
                    <RadioGroup onChange={this.symbolValueChange} value={this.state.value}>
                        <Radio value={1}>个人认证</Radio>
                        <Radio value={2}> 媒体认证</Radio>
                        <Radio value={3}>企业认证</Radio>
                    </RadioGroup>
                </Row>
                <Row className="" style={{margin: '0 0 20px'}}>
                    <span className="name" style={{marginRight: 10}}>身份属性：</span>
                    <RadioGroup onChange={this.changeIdentityAuth} value={this.state.identityAuth}>
                        <Radio value={1}>媒体</Radio>
                        <Radio value={2}>KOL</Radio>
                        <Radio value={3}>投研</Radio>
                        <Radio value={4}>项目</Radio>
                        <Radio value={6}>社群</Radio>
                        <Radio value={5}>行情</Radio>
                        <Radio value={0}>其他</Radio>
                    </RadioGroup>
                </Row>
                <Row className="" style={{margin: '0 0 20px'}}>
                    <span className="name" style={{marginRight: 10}}>认证信息：</span>
                    <Input
                        style={{width: 400}}
                        placeholder="认证信息"
                        onChange={this.changeIdentityDesc}
                        value={this.state.identityDesc}
                    />
                </Row>
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        auditInfo: state.officialAuditInfo,
        selectedData: state.officialAuditInfo.selectedData,
        list: state.officialAuditInfo.list,
        search: state.officialAuditInfo.search,
        filter: state.officialAuditInfo.filter,
        pageData: state.officialAuditInfo.pageData
    }
}

export default connect(mapStateToProps)(officialAuditIndex)
