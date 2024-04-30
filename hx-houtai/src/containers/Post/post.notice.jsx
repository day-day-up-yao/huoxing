import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Row, Col, Modal, message, Spin, Input, Select, Button, Form} from 'antd'
import './post.scss'
import {getPostNoticeList} from '../../actions/post/postNotice.action'
import {axiosAjax} from '../../public/index'

const confirm = Modal.confirm
const Option = Select.Option
let columns = []

class PostNewsNotice extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            visible: false,
            type: '',
            searchVal: ''
        }
    }

    componentWillMount () {
        this.doSearch(this.state.type, 1, this.state.searchVal)
        columns = [{
            title: '公告标题',
            key: 'channelName',
            render: (text, record) => (record && <div className="post-info clearfix">
                <div>
                    <h4 title={record.title}>{record.title}</h4>
                </div>
            </div>)
        }, {
            title: '操作',
            key: 'action',
            render: (item) => (<div className="btns">
                <p>
                    <a onClick={() => {
                        this.isRecommend(item)
                    }}>
                        {(() => {
                            if (item.recCreaterType === 1) {
                                return <span className="mr10 opt-btn" style={{background: '#f68e15'}}>取消推荐</span>
                            } else if (item.recCreaterType === 0) {
                                return <span className="mr10 opt-btn" style={{background: '#108ee9'}}>推荐至首页</span>
                            }
                        })()}
                    </a>
                </p>
                <p>
                    <a onClick={() => this.delChannel(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                </p>
                <p>
                    <a className="mr10 opt-btn" target="_blank" href={`https://news.marsbit.co.com/noticeDetail/${item.noticeId}`} style={{background: '#18d8ef'}}>查看</a>
                </p>
            </div>)
        }]
    }

    createMarkup (str) {
        return {__html: str}
    }

    doSearch (recCreaterType, currentPage, search) {
        const {dispatch} = this.props
        let sendData = {
            recCreaterType: recCreaterType,
            search: search,
            currentPage: currentPage,
            pageSize: 20
        }
        dispatch(getPostNoticeList(sendData, (res) => {
            this.setState({
                loading: false
            })
        }))
    }

    changePage (page) {
        this.setState({
            loading: true
        })
        this.doSearch(this.state.type, page, this.state.searchVal)
    }

    // 删除
    delChannel (item) {
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    noticeId: item.noticeId,
                    status: -1
                }
                axiosAjax('POST', '/notice/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.doSearch(_this.state.type, _this.props.selectedData.currentPage, _this.state.searchVal)
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    isRecommend = (item) => {
        const _this = this
        confirm({
            title: '提示',
            content: `确认要${item.recCreaterType === 1 ? '回撤' : '推荐'}吗?`,
            onOk () {
                let sendData = {
                    noticeId: item.noticeId,
                    status: item.recCreaterType === 1 ? 0 : 1
                }
                axiosAjax('POST', '/notice/changeRecCreaterType', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success(`${item.recCreaterType === 1 ? '回撤' : '推荐'}成功`)
                        _this.doSearch(_this.state.type, _this.props.selectedData.currentPage, _this.state.searchVal)
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 筛选推荐状态
    handleChange = (value) => {
        this.setState({
            searchVal: '',
            type: value
        })
        this.doSearch(value, 1, '')
    }

    changeVal = (e) => {
        let val = e.target.value
        this.setState({
            searchVal: val
        })
    }
    render () {
        let {selectedData} = this.props
        let list = !selectedData.inforList ? [] : selectedData.inforList
        return <div className="post-index">
            <Row>
                <Col>
                    <span style={{marginLeft: 15}}>推荐：</span>
                    <Select defaultValue={``} style={{width: 100}} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        <Option value="1">已推荐</Option>
                        <Option value="0">未推荐</Option>
                    </Select>
                    <Input
                        defaultValue={this.state.searchVal === '' ? '' : this.state.searchVal}
                        style={{width: 250, margin: '0 15px'}}
                        placeholder="搜索内容"
                        onChange={this.changeVal}
                    />
                    <span>
                        <Button type="primary" onClick={() => {
                            this.doSearch(this.state.type, 1, this.state.searchVal)
                        }}>搜索</Button>
                    </span>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{ current: selectedData.currentPage, total: selectedData.recordCount, pageSize: selectedData.pageSize, onChange: (page) => this.changePage(page) }}/>
                </Spin>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        selectedData: state.newsNoticeInfo.selectedData
    }
}
export default connect(mapStateToProps)(Form.create()(PostNewsNotice))
