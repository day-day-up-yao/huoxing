import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import { Spin, Table, Row, Col, Form, Input, Button, Select, message, Modal } from 'antd'
import { getTagsv2List, setFilterData, setPageData, setSearchQuery } from '../../actions/tagsv2/tagsv2.action'
import './tagsv2.scss'
import {axiosAjax} from '../../public/index'
const Option = Select.Option
const confirm = Modal.confirm

// import IconItem from '../../components/icon/icon' // 小按钮
// import moment from 'moment' // 小工具
// const FormItem = Form.Item // 弹窗用

// // 也是弹窗用
// const formItemLayout = {
//     labelCol: {
//         xs: { span: 2 },
//         sm: { span: 4 }
//     },
//     wrapperCol: {
//         xs: { span: 4 },
//         sm: { span: 16 }
//     }
// }
let columns = []

class Tagsv2Index extends Component {
    constructor () {
        super()
        this.state = {
            loading: false
        }
    }
    componentWillMount () {
        const { search, filter } = this.props
        columns = [{
            title: 'Tag名称',
            width: 220,
            key: 'name',
            render: (text, record) => (record && <div>{record.name}</div>)
        }, {
            title: '图标',
            width: 220,
            key: 'tagImg',
            render: (text, record) => (record && <div>{record.tagImg && <img src={record.tagImg} alt="标签图标" />}</div>)
        }, {
            title: '说明',
            width: 220,
            key: 'description',
            render: (text, record) => <div>{ record.description }</div>
        }, {
            title: '类型',
            width: 220,
            key: 'tagLevel',
            render: (text, record) => <div>{ record.tagLevel === 0 ? '普通' : '重要' }</div>
        }, {
            title: '状态',
            width: 220,
            key: 'tagStatus',
            render: (text, record) => <div>{record.tagStatus !== 2 ? (record.tagStatus === 0 ? '未启用' : '启用') : '删除'}</div>
        }, {
            title: '操作',
            width: 220,
            key: 'option',
            render: (item) => (<div className="btns">
                <p>
                    <Link className="mr10 opt-btn" to={{pathname: '/tagv2-send', query: {id: item.id}}} style={{background: '#108ee8'}}>编辑</Link>
                </p>
                <p>
                    <a className="mr10 opt-btn" onClick={() => this.deleteTagsv2(item)} style={{ background: '#f68e15' }}>{ item.tagStatus === 1 ? '禁用' : '启用'}</a>
                </p>
                <p>
                    <a className='mr10 opt-btn' onClick={() => this.updateTagsv2(item)} style={{ background: '#d73435' }}>{ item.tagLevel === 0 ? '重要' : '普通'}</a>
                </p>
            </div>)
        }]
        this.doSearch('init', { ...filter, title: search.title })
    }
    componentWillUnmount () {
        const { dispatch } = this.props
        dispatch(setSearchQuery({ 'type': 'init', 'nickName': '' }))
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
    }
    doSearch (type, data) {
        const { dispatch, pageData, filter, search } = this.props
        let sendData = {
            ...filter,
            names: search.name,
            pageSize: 20,
            currentPage: pageData.currPage
        }
        this.setState({
            loading: true
        })
        sendData = { ...sendData, ...data }
        dispatch(getTagsv2List(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    changePage (page) {
        this.setState({
            loading: true
        })

        const {dispatch, search, filter} = this.props
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page, ...filter})
    }
    // 筛选状态
    handleChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({tagLevel: value}))
        this.setState({
            adStatus: value
        })
        this.doSearch('init', {'currentPage': 1, tagLevel: value})
    }

    // 筛选类型
    handleStatusChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({tagStatus: value}))
        this.doSearch('init', {'currentPage': 1, tagStatus: value})
    }
    // 设置
    deleteTagsv2 (item) {
        const { dispatch } = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要${item.tagStatus === 1 ? '禁用' : '启用'}吗`,
            onOk () {
                let sendData = {
                    id: item.id,
                    tagStatus: item.tagStatus === 0 ? 1 : 0
                }
                axiosAjax('POST', '/tagmgr/editTag', { ...sendData }, (res) => {
                    if (res.code === 1) {
                        message.success('修改成功')
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }
    updateTagsv2 (item) {
        const { dispatch } = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要设为${item.tagLevel === 0 ? '重要' : '普通'}吗`,
            onOk () {
                let sendData = {
                    id: item.id,
                    tagLevel: item.tagLevel === 0 ? 1 : 0
                }
                axiosAjax('POST', '/tagmgr/editTag', { ...sendData }, (res) => {
                    if (res.code === 1) {
                        message.success('修改成功')
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    _search () {
        const {dispatch} = this.props
        this.setState({
            loading: true
        })
        this.doSearch('init', {'currentPage': 1})
        dispatch(setSearchQuery({'type': 'init'}))
        dispatch(setPageData({'currPage': 1}))
    }

    render () {
        const { list, pageData, filter, search, dispatch } = this.props // , , , , form, selectedData
        return <div className="tags-index">
            <Row>
                <Col span={2}>
                    <span>类型：</span>
                    <Select onChange={this.handleChange} style={{ width: 60, marginRight: 15 }} defaultValue={`${filter.tagLevel}`}>
                        <Option value="">全部</Option>
                        <Option value="0">普通</Option>
                        <Option value="1">重要</Option>
                    </Select>
                </Col>
                <Col span={2}>
                    <span>状态：</span>
                    <Select onChange={this.handleStatusChange} style={{ width: 60, marginRight: 15 }} defaultValue={`${filter.tagStatus}`}>
                        <Option value="">全部</Option>
                        <Option value="0">未启用</Option>
                        <Option value="1">启用</Option>
                    </Select>
                </Col>
                <Col span={8}>
                    <span>名字：</span>
                    <Input value={search.name} onChange={(e) => dispatch(setSearchQuery({ name: e.target.value }))} style={{ width: 150, marginRight: 15 }} placeholder="请输入关键词搜索" onPressEnter={ () => this._search() } />
                    <Button type="primary" onClick={ () => { this.doSearch('init') }} style={{ marginRight: 15 }}>搜索</Button>
                    <Button type="primary" onClick={ () => { hashHistory.push('/tagv2-send') }} >新增</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({ ...item, key: index }))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}}/>
                </Spin>
            </div>
        </div>
    }
}
const mapStateToProps = (state) => {
    return {
        tagsv2: state.tagsv2,
        list: state.tagsv2.list,
        search: state.tagsv2.search,
        filter: state.tagsv2.filter,
        pageData: state.tagsv2.pageData,
        selectedData: state.tagsv2.selectedData
    }
}
export default connect(mapStateToProps)(Form.create()(Tagsv2Index))
