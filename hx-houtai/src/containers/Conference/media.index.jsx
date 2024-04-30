import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import { getMediaList, setSearchQuery, setPageData } from '../../actions/conference/media.action'
import { Spin, Form, Row, Col, Select, Modal, Button, Input, Table, message } from 'antd'
import { getConferenceList } from '../../actions/index'

import './conference.scss'
import { axiosAjax } from '../../public'

const Option = Select.Option
const confirm = Modal.confirm
let columns = []
class MediaIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: false,
            filter: ''
        }
    }

    componentWillMount () {
        const { dispatch, filter } = this.props
        columns = [
            {
                title: '合作媒体名称',
                width: 220,
                key: 'name',
                render: (text, record) => (record && <div>{record.name}</div>)
            }, {
                title: '媒体logo',
                width: 220,
                key: 'logo',
                render: (text, record) => (record && <div style={{textAlign: 'center'}}><img width="50" height="50" src={record.speakerIcon} alt="嘉宾头像"/></div>)
            }, {
                title: '排序权重',
                width: 220,
                key: 'topOrder',
                render: (text, record) => (record && <div>{record.topOrder}</div>)
            }, {
                title: '操作',
                width: 220,
                key: 'option',
                render: (item) => (<div className="btns">
                    <p>
                        <Link className="mr10 opt-btn" to={{pathname: '/guest-send', query: {id: item.id}}} style={{ background: '#f68e15' }}>编辑</Link>
                    </p>
                    <p>
                        <a className="mr10 opt-btn" onClick={() => this.deleteGuestItem(item)} style={{ background: '#d73435' }}>删除</a>
                    </p>
                </div>)
            }]
        dispatch(getConferenceList())
        this.doSearch('init', { ...filter })
    }
    changePage (page) {
        this.setState({
            loading: true
        })

        const {dispatch, search, filter} = this.props
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page, ...filter})
    }

    doSearch (type, data) {
        const { dispatch, pageData, filter } = this.props
        let sendData = {
            ...filter,
            pageSize: 20,
            currentPage: pageData.currPage,
            conferenceId: 1
        }
        this.setState({
            loading: true
        })
        sendData = { ...sendData, ...data }
        dispatch(getMediaList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }

    // 删除媒体
    deleteMediaItem (item) {
        const { dispath } = this.props
        const _this = this
        confirm({
            title: '提示',
            content: '确认要删除吗',
            onOk () {
                let sendData = {
                    id: item.id
                }
                axiosAjax('POST', '/power/deleteMedia', { ...sendData }, (res) => {
                    if (res.code === 1) {
                        message.success('修改成功')
                        _this.doSearch('init')
                        dispath(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    render () {
        const { conferenceList, list, pageData } = this.props
        return <div className="conference-index">
            <Row>
                <Col>
                    <span>大会：</span>
                    <Select defaultValue="全部" style={{ width: 140, marginRight: 20 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        {conferenceList.map((item, index) => <Option key={item.id} value={String(item.id)}>{item.label}</Option>)}
                    </Select>
                    <Input type="text" style={{width: 150, marginRight: 20}} placeholder="输入媒体名称搜索" />
                    <Button type="primary" style={{marginRight: 20}}>搜 索</Button>
                    <Button type="primary" onClick={ () => hashHistory.push('/guest-send')}>新 增</Button>
                </Col>
                <div className="mt30">
                    <Spin spinning={this.state.loading} size="large">
                        <Table dataSource={list.map((item, index) => ({ ...item, key: index }))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}}/>
                    </Spin>
                </div>
            </Row>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.MediaInfo.list,
        search: state.MediaInfo.search,
        filter: state.MediaInfo.filter,
        pageData: state.MediaInfo.pageData,
        selectedData: state.MediaInfo.selectedData,
        conferenceList: state.conferenceInfo
    }
}

export default connect(mapStateToProps)(Form.create()(MediaIndex))
