import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Row, Col, Modal, message, Select, Pagination } from 'antd'
import {getAdList, setSearchQuery, setPageData, setFilterData, selectedData} from '../../actions/others/ad.action'
import Mainheader from './header'
import { hashHistory, Link } from 'react-router'
import {formatDate, axiosAjax, appAdPosition} from '../../public/index'
const confirm = Modal.confirm
const Option = Select.Option

class WebAdIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            adStatus: null,
            visible: false,
            previewVisible: false,
            previewImage: '',
            order: 1
        }
    }

    componentWillMount () {
        const {search, filter} = this.props
        this.doSearch(!search.type ? 'init' : search.type, {adPlace: filter.adMobilePlace})
    }

    doSearch (type, data) {
        this.setState({
            loading: true
        })
        const {dispatch, pageData, search, filter} = this.props
        let sendData = {
            serach: search.search,
            status: filter.mStatus || '',
            adPlaceL: filter.adMobilePlace,
            type: 2,
            pageSize: 20,
            currentPage: pageData.currPage
        }
        sendData = {...sendData, ...data}
        dispatch(getAdList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'nickName': '', 'title': ''}))
        dispatch(setPageData({'pageData': 20, 'totalCount': 0}))
        dispatch(selectedData({}))
    }
    adPosition (id) {
        let name = ''
        appAdPosition.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, search, filter} = this.props
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page, adPlace: filter.adMobilePlace, status: filter.mStatus})
    }

    // 删除
    delAd (item) {
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
    _isPublish (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要${item.status === 2 ? '发表' : '撤回广告'}吗 ?`,
            onOk () {
                let sendData = {
                    // 'appId': $.cookie('gameId'),
                    id: item.id,
                    status: item.status === 2 ? 1 : 2
                }
                axiosAjax('POST', '/ad/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success(`${item.status === 2 ? '发表' : '撤回到草稿箱'}成功`)
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }
    getOrderNum = (value) => {
        this.setState({
            order: value
        })
    }

    recommendTopic (item) {
        const _this = this
        if (!item.topOrder || parseInt(item.status) === 2) {
            this.setState({
                order: 1
            })
        } else {
            this.setState({
                order: item.topOrder
            })
        }

        confirm({
            title: '提示',
            content: <div className="modal-input">
                <span style={{marginRight: 10}}>请输入排序号：(序号越小越靠前, 最小为 1)</span>
                <InputNumber min={1} max={999} defaultValue={item.topOrder || 1} autoFocus type="number" onChange={_this.getOrderNum}/>
            </div>,
            onOk () {
                let {order} = _this.state
                if (order.toString().trim() === '') {
                    message.error('序号不能为空！')
                    return false
                }
                let sendData = {
                    id: item.id,
                    status: 1,
                    type: item.type,
                    topOrder: order,
                    adPlace: item.adPlace
                }

                if (item.status === 2) {
                    axiosAjax('POST', '/ad/status', {
                        id: item.id,
                        status: item.status === 2 ? 1 : 2
                    }, (res) => {
                        if (res.code === 1) {
                            axiosAjax('POST', '/ad/settoporder', {...sendData}, (res) => {
                                if (res.code === 1) {
                                    message.success('操作成功')
                                    _this.doSearch('init')
                                } else {
                                    message.error(res.msg)
                                }
                            })
                        } else {
                            message.error(res.msg)
                        }
                    })
                } else if (item.status === 1) {
                    axiosAjax('POST', '/ad/settoporder', {...sendData}, (res) => {
                        if (res.code === 1) {
                            message.success('操作成功')
                            _this.doSearch('init')
                        } else {
                            message.error(res.msg)
                        }
                    })
                }
            }
        })
    }
    // 筛选广告位置
    handleChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({adMobilePlace: value}))
        this.setState({
            adStatus: value
        })
        this.doSearch('init', {'currentPage': 1, adPlace: value})
    }
    // 筛选广告状态
    handleStatusChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({mStatus: value}))
        // this.setState({
        //     adStatus: value
        // })
        this.doSearch('init', {'currentPage': 1, status: value})
    }
    // 新增
    incAd = () => {
        hashHistory.push('/adM-edit')
    }

    // 详情弹框
    detailModal (obj) {
        this.setState({
            visible: true
        })
        const {dispatch} = this.props
        dispatch(selectedData(obj))
    }

    handleOk = (e) => {
        this.setState({
            visible: false
        })
    }
    handleCancel = (e) => {
        this.setState({
            visible: false
        })
    }

    handleImgModalCancel = () => this.setState({previewVisible: false})

    handlePreview = (e) => {
        this.setState({
            previewImage: e.target.getAttribute('src'),
            previewVisible: true
        })
    }
    render () {
        const { list, filter, pageData } = this.props
        // 其他方法
        return (
            <div>
                <Mainheader title='appAd-edit'/>
                <div className="webAdBox">
                    <Row>
                        <Col span={12}>
                            <Select defaultValue={`${filter.adMobilePlace}`} style={{ margin: '10px auto', width: '80%', display: 'block' }} onChange={this.handleChange}>
                                <Option value="">全部位置</Option>
                                {appAdPosition.map((d, index) => <Option value={d.value} key={index}>{d.label}</Option>)}
                            </Select>
                        </Col>
                        <Col span={12}>
                            <Select defaultValue={`${filter.mStatus}`} style={{ margin: '10px auto', width: '80%', display: 'block' }} onChange={this.handleStatusChange}>
                                <Option value="">全部状态</Option>
                                <Option value="1">展示中</Option>
                                <Option value="2">未展示</Option>
                            </Select>
                        </Col>
                    </Row>
                    <div className="content-list">
                        {list.map((item, index) => {
                            return <div id={index} key={index}>
                                <div className="title">{item.title}</div>
                                <div className="info">
                                    <span>
                                        位置：{this.adPosition(item.adPlace)}
                                    </span>
                                    <span>
                                        更新时间：{formatDate(item.updateTime)}
                                    </span>
                                </div>
                                <div className="options">
                                    <p><Link className="mr10 opt-btn" to={{pathname: '/appAd-edit', query: {id: item.id}}}>编辑</Link></p>
                                    <p style={{ marginBottom: '10px' }}>
                                        <a className="mr10 opt-btn" href="javascript:void(0)" onClick={() => this._isPublish(item)} style={{background: '#00a854'}}>{item.status === 1 ? '撤回' : '发布'}</a>
                                    </p>
                                    <p>
                                        <a onClick={() => this.delAd(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                                    </p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="pagination">
                        <Pagination current={pageData.currPage} total={pageData.totalCount} pageSize={pageData.pageSize} onChange={(page) => this.changePage(page)} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adInfo: state.adInfo,
        selectedData: state.adInfo.selectedData,
        list: state.adInfo.list,
        search: state.adInfo.search,
        filter: state.adInfo.filter,
        pageData: state.adInfo.pageData
    }
}
export default connect(mapStateToProps)(Form.create()(WebAdIndex))
