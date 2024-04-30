import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {Form, Button, Pagination, Row, Col, Select, Input, message, Modal} from 'antd'
import {getNewLiveList, setSearchQuery, setPageData, setFilterData, selectedData} from '../../actions/newlive/newlive.action'
import { axiosAjax, formatDate } from '../../public'
import AddLiveheader from './addLiveHeader'
import './index.scss'
const Option = Select.Option
const confirm = Modal.confirm
class OffiLiveIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true
        }
    }

    componentWillMount () {
        const {search} = this.props
        this.doSearch(!search.type ? 'init' : search.type, {})
    }

    doSearch (type, data) {
        this.setState({
            loading: true
        })
        const {dispatch, pageData, search, filter} = this.props
        let sendData = {
            search: search.search,
            displayFlag: filter.displayFlag || '1', // 临时展示为展示
            recommend: filter.recommend || '',
            status: filter.status || '',
            adminCreateFlag: 1,
            pageSize: 20,
            page: pageData.currPage
        }
        sendData = {...sendData, ...data}
        dispatch(getNewLiveList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }

    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'name': '', 'title': ''}))
        dispatch(setPageData({'pageData': 20, 'totalCount': 0}))
        dispatch(selectedData({}))
    }
    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, search, filter} = this.props
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'page': page, status: filter.status, recommend: filter.recommend, displayFlag: filter.displayFlag})
    }

    handledisplayFlagChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({displayFlag: value}))
        this.doSearch('init', {'page': 1, displayFlag: value})
    }
    handledrecommendChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({recommend: value}))
        this.doSearch('init', {'page': 1, recommend: value})
    }
    handleStatusChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({status: value}))
        this.doSearch('init', {'page': 1, status: value})
    }

    _search () {
        const {dispatch} = this.props
        this.doSearch('init', {'page': 1})
        dispatch(setSearchQuery({'page': 1}))
    }
    hanleRecommend = (item) => {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `${item.recommend === 1 ? '确认取消推荐吗？' : '确认要推荐吗？'}`,
            onOk () {
                let sendData = {
                    roomId: item.roomId,
                    recommend: item.recommend === 1 ? 0 : 1
                }
                axiosAjax('POST', '/video/live/room/recommend', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('操作成功')
                        _this.doSearch('init')
                        dispatch(setSearchQuery)
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    delLiveroom (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗？`,
            onOk () {
                let sendData = {
                    roomId: item.roomId,
                    status: -1
                }
                axiosAjax('POST', '/video/live/room/status', {...sendData}, (res) => {
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

    changeRoomAutoCommentFlag (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要${item.autoCommentFlag === 1 ? '关闭？' : '开启'}自动评论吗？`,
            onOk () {
                let sendData = {
                    roomId: item.roomId,
                    autoCommentFlag: item.autoCommentFlag === 1 ? 0 : 1
                }
                axiosAjax('POST', '/video/live/room/auto_comment', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('操作成功')
                        _this.doSearch('init')
                        dispatch(setSearchQuery)
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }
    render () {
        const { list, pageData, filter, search, dispatch } = this.props
        return (
            <div>
                <AddLiveheader title="userLive"/>
                <div className="webAdBox">
                    <div className="filter">
                        <Row style={{ padding: '5px' }}>
                            <Col span="18">
                                <Input value={search.search} placeholder="输入关键词" onChange={(e) => dispatch(setSearchQuery({search: e.target.value}))} onPressEnter={() => this._search() }/>
                            </Col>
                            <Col span="6" style={{ textAlign: 'center' }}>
                                <Button type="primary" onClick={() => { this._search() }}>搜索</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <span style={{ margin: 2 }}>直播状态:</span>
                                <Select defaultValue={`${filter.status}`} style={{ width: 60 }} onChange={this.handleStatusChange}>
                                    <Option value=''>全部</Option>
                                    <Option value='0'>即将开始</Option>
                                    <Option value='1'>直播中</Option>
                                    <Option value='2'>回放中</Option>
                                </Select>
                            </Col>
                            <Col span={8}>
                                <span style={{ margin: 3 }}>推荐状态:</span>
                                <Select defaultValue={`${filter.recommend}`} style={{ width: 60 }} onChange={this.handledrecommendChange}>
                                    <Option value=''>全部</Option>
                                    <Option value='0'>未推荐</Option>
                                    <Option value='1'>已推荐</Option>
                                </Select>
                            </Col>
                            <Col span={8}>
                                <span style={{ margin: 3 }}>展示状态:</span>
                                <Select defaultValue='1' style={{ width: 60 }} onChange={this.handledisplayFlagChange}>
                                    <Option value=''>全部</Option>
                                    <Option value='0'>未展示</Option>
                                    <Option value='1'>已展示</Option>
                                </Select>
                            </Col>
                        </Row>
                    </div>
                    <div className="content-list">
                        {list.map((item, index) => {
                            return <div id={index} key={index}>
                                <div className="title">{item.name}</div>
                                <div className="info">
                                    <span>开始时间：{formatDate(item.beginTime)}</span>
                                    <span>类型：{item.roomType === 0 ? '移动直播' : '大会直播'}</span>
                                </div>
                                <div className="options">
                                    <Link to={{pathname: '/userLive-edit', query: {id: item.roomId}}} className="mr10 opt-btn">编辑</Link>
                                    <p>
                                        <a onClick={() => this.hanleRecommend(item)} className="mr10 opt-btn" href="javascript:void(0)">{item.recommend === 1 ? '已推荐' : '未推荐'}</a>
                                    </p>
                                    <Link to={{pathname: '/chatLive-index', query: {id: item.roomId}}} className="mr10 opt-btn">聊天</Link>
                                    <p>
                                        <a onClick={() => this.changeRoomAutoCommentFlag(item)} className="mr10 opt-btn" href="javascript:void(0)">自动评论:{item.autoCommentFlag === 1 ? '开' : '关'}</a>
                                    </p>
                                    <p>
                                        <a onClick={() => this.delLiveroom(item)} className="mr10 opt-btn" href="javascript:void(0)">删除</a>
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
        newliveInfo: state.newliveInfo,
        selectedData: state.newliveInfo.selectedData,
        list: state.newliveInfo.list,
        search: state.newliveInfo.search,
        filter: state.newliveInfo.filter,
        pageData: state.newliveInfo.pageData
    }
}
export default connect(mapStateToProps)(Form.create()(OffiLiveIndex))
