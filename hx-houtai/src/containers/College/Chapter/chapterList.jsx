/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Modal, message, Spin, Input, Button, Form, DatePicker } from 'antd'
import './index.scss'
import { Link } from 'react-router'
import {getChapterList, setSearchQuery, setPageData, setFilterData, newsToTop, editChapterList, selectedData, getCourseDuration} from '../../../actions/college/chapter.action'
import {formatDate, axiosAjax, cutString, channelIdOptions} from '../../../public/index'
import moment from 'moment'
const confirm = Modal.confirm
// const Option = Select.Option
const FormItem = Form.Item
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
class ChapterIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            newsStatus: null,
            editNewsId: ''
        }
    }

    channelName (id) {
        let name = ''
        channelIdOptions.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    componentWillMount () {
        const {dispatch, location} = this.props
        /* {
         title: '推荐/置顶',
         key: 'option',
         render: (item) => (<div className="btns">
         <p>
         <a className={`mr10 recommend-btn opt-btn ${item.status !== 1 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this._isTop(item)} disabled={item.status !== 1 && true}>
         {item.recommend === 1 ? '取消推荐' : '推荐'}
         </a>
         </p>
         <p>
         {item.recommendToMiniApp === 1 ? <a className={`mr10 toMiniApp-btn opt-btn`} href="javascript:void(0)" onClick={() => this.backFromMiniApp(item)}>
         从小程序撤回
         </a> : <a className={`mr10 toMiniApp-btn opt-btn`} href="javascript:void(0)" onClick={() => this._isToMiniApp(item)}>
         推至小程序
         </a>}
         </p>

         <p>
         {parseInt(item.topOrder) ? <Tooltip placement="bottom" title={`置顶失效时间: ${moment(item.topEndTime).format('YYYY年MM月DD日 HH:mm:ss')}; 失效热度: ${item.topEndHotcount}`} >
         <a
         className="mr10 opt-btn"
         href="javascript:void(0)"
         style={{background: '#ff4f3e'}}
         onClick={() => this.showToTopModal(parseInt(item.topOrder), item.id, item)}
         >取消置顶</a>
         </Tooltip> : <a
         className={`mr10 opt-btn top-btn ${item.status !== 1 ? 'disabled' : ''}`}
         disabled={item.status !== 1 && true}
         href="javascript:void(0)"
         onClick={() => this.showToTopModal(parseInt(item.topOrder), item.id, item)}
         >置顶</a>}
         </p>

         </div>)
         }
         */
        dispatch(getCourseDuration({
            resourceId: location.query.id
        }))
        this.doSearch('init')
        columns = [{
            title: '章节标题',
            width: 250,
            key: 'title',
            render: (text, record) => (record && <div className="chapter-info clearfix">
                <div>
                    <h4 title={record.title} dangerouslySetInnerHTML={this.createMarkup(cutString(record.title, 30))} />
                    <div>
                        {(record.isPay && parseInt(record.isPay) === 1) ? <div style={{'display': 'inline-block'}}><span className="green-bg mr10">收费</span></div> : ''}
                        {!parseInt(record.recommend) ? '' : <div style={{'display': 'inline-block', verticalAlign: 'middle'}}><span className="org-bg mr10">推荐</span></div>}
                        {!parseInt(record.forbidComment) ? '' : <span className="pre-bg">禁评</span>}
                        {/*
                        {parseInt(record.topOrder) === 0 ? '' : <Tooltip placement="bottom" title={`失效时间: ${moment(record.topEndTime).format('YYYY年MM月DD日 HH:mm:ss')}; 失效热度: ${record.topEndHotcount}`} >
                            <div className="news-top clearfix">
                                <span className="top-bg">置顶</span>
                                <Input
                                    className="top-num"
                                    onBlur = {(e) => this._editTopValue(e, record)}
                                    onChange={(e) => this.changeTopValue(e, record)}
                                    value={record.topOrder}
                                />
                            </div>
                        </Tooltip>}
                        */}
                    </div>
                </div>
                {!record.pictureUrl ? '' : <img src={record.pictureUrl.split(',')[0]} />}
            </div>)
        }, {
            title: '章节类型',
            key: 'resType',
            width: 70,
            render: (record) => {
                if (record && record.resType === 1) {
                    return <span className="news-status">音频</span>
                } else if (record && record.resType === 2) {
                    return <span className="news-status will-publish">视频</span>
                } else {
                    return <span className="news-status pre-publish">暂无</span>
                }
            }
        }, {
            title: '章节时长',
            key: 'duration',
            width: 85,
            render: (record) => <span>{!record.duration ? '0 秒' : `${parseInt(record.duration / 60)} 分 ${record.duration % 60} 秒` }</span>
        }, {
            title: '资源链接',
            key: 'url',
            render: (record) => <a target="_blank" onClick={() => this.getResorceUrl({id: record.id})}>{record.item_url}</a>
        }, {
            title: '章节简介 ',
            dataIndex: 'text',
            key: 'text',
            render: (text) => (!text ? '无' : <span title={text} dangerouslySetInnerHTML={this.createMarkup(cutString(text, 50))} />)
        }, {
            title: '发布时间',
            key: 'createTime',
            width: 150,
            render: (record) => (record && formatDate(record.createTime))
        }, {
            title: '操作',
            key: 'action',
            render: (item) => (<div className="btns">
                {/*
                <p>
                    <Link target="_blank" className="mr10 opt-btn" to={{pathname: '/chapter-detail', query: {id: item.id}}} style={{background: '#108ee9'}}>详情</Link>
                </p>
                <p>
                    <a className="mr10 opt-btn" href="javascript:void(0)" onClick={() => this._isPublish(item)} style={{background: '#00a854'}}>
                        {(() => {
                            if (item.status === 1) {
                                return '撤回到草稿'
                            } else if (item.status === 0) {
                                if (item.publishTime > Date.parse(new Date())) {
                                    return '定时发表'
                                } else {
                                    return '发表'
                                }
                            }
                        })()}
                    </a>
                </p>
                <a className="mr10" href="javascript:void(0)" onClick={() => this._forbidcomment(item)}>{item.forbidComment === '1' ? '取消禁评' : '禁评'}</a>
                */}
                <p>
                    <Link target="_blank" className="mr10 opt-btn" to={{pathname: '/college-chapterSend', query: {id: item.id}}} style={{background: '#4382ea'}}>修改</Link>
                </p>
                <p>
                    <a onClick={() => this.delChapter(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                </p>
            </div>)
        }]
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'nickName': ''}))
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
    }
    createMarkup (str) { return {__html: str} }

    getResorceUrl (params) {
        axiosAjax('post', '/college/lesson/chapterUrl', params, (res) => {
            if (res.code === 1) {
                window.open(res.obj)
            } else {
                message.error('获取课程链接错误, 请重试！')
            }
        })
    }

    // 推送到小程序
    _isToMiniApp (item) {
        const {dispatch} = this.props
        this.setState({
            loading: true
        })
        let sendData = {
            'id': item.id,
            'recommendToMiniApp': item.recommendToMiniApp && item.recommendToMiniApp === 1 ? 0 : 1
        }
        axiosAjax('post', '/chapter/recommendtominiapp', sendData, (res) => {
            if (res.code === 1) {
                message.success('操作成功!')
                this.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
            } else {
                message.error(res.msg)
            }
        })
    }

    // 从小程序撤回
    backFromMiniApp (item) {
        const {dispatch} = this.props
        this.setState({
            loading: true
        })
        let sendData = {
            'id': item.id
        }
        axiosAjax('post', '/miniappchapter/delete', sendData, (res) => {
            if (res.code === 1) {
                message.success('操作成功!')
                this.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
            } else {
                message.error(res.msg)
            }
        })
    }

    // 章节置顶
    showToTopModal (topOrder, id, item) {
        const {dispatch} = this.props
        if (!topOrder) {
            this.setState({
                editNewsId: id,
                topIsShow: true
            })
            dispatch(selectedData(item))
        } else {
            this.newsIsToTop({
                'id': id,
                topEndHotcount: 0,
                'topOrder': 0,
                topEndTime: 0
            })
        }
    }

    newsIsToTop (sendData) {
        const {dispatch} = this.props
        dispatch(newsToTop(sendData, () => {
            this.doSearch('init')
            dispatch(setSearchQuery({'type': 'init'}))
        }))
    }

    setNewsTop () {
        const form = this.props.form
        form.validateFields((err, values) => {
            if (err) {
                return
            }
            this.setState({ topIsShow: false })
            this.newsIsToTop({
                'id': this.state.editNewsId,
                'topOrder': values.order,
                'topEndHotcount': values.topEndHotcount,
                topEndTime: Date.parse(values.topEndTime.format('YYYY-MM-DD HH:mm:ss'))
            })
            form.resetFields()
        })
    }

    disabledDate = (current) => {
        return current && current < moment().endOf('hours')
    }

    changeTopValue (e, record) {
        const {dispatch} = this.props
        let val = e.target.value
        if (parseInt(val) === 0) {
            // this.newsIsToTop({'id': record.id, 'topOrder': val})
            message.warning('置顶权重值不能为0！')
            return
        }
        dispatch(editChapterList({topOrder: val}, record.key))
    }

    _editTopValue (e, item) {
        // console.log(item)
        // const {dispatch} = this.props
        let val = e.target.value
        // let index = item.key
        let id = item.id
        // editChapterList(data, index)
        if (!val) {
            message.warning('请输入置顶权重值！')
        } else if (!(/^\d+$/.test(val))) {
            message.warning('置顶权重值必须是整数！')
        } else {
            this.newsIsToTop({
                'id': id,
                topEndHotcount: item.topEndHotcount || 10000,
                'topOrder': val,
                topEndTime: item.topEndTime || Date.parse(moment().add('day', 1).format('YYYY-MM-DD HH:mm:ss'))
            })
        }
    }

    doSearch (type, data) {
        this.setState({
            loading: true
        })
        const {dispatch, pageData, location} = this.props
        let sendData = {
            // ...filter,
            // title: search.title,
            pageSize: 20,
            resourceId: location.query.id,
            currentPage: pageData.currPage
        }
        sendData = {...sendData, ...data}
        dispatch(getChapterList('init', sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    _search () {
        const {dispatch} = this.props
        this.setState({
            loading: true
        })
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
        this.doSearch(search.type, {'currentPage': page, ...filter})
    }
    // 删除
    delChapter (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                _this.setState({
                    loading: true
                })
                let sendData = {
                    id: item.id
                }
                axiosAjax('POST', '/college/lesson/deleteChapter', {...sendData}, (res) => {
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
        // if (item.status === 0 && item.publishTime > Date.parse(new Date())) {
        //     message.error('章节发布时间大于当前时间，直接发表请先修改发布时间！')
        //     return false
        // }
        let status = () => {
            if (item.status === 0) {
                return 1
            } else {
                return 0
            }
        }

        confirm({
            title: '提示',
            content: `确认要${item.status === 1 ? '撤回' : '发表'}吗 ?`,
            onOk () {
                let sendData = {
                    // 'appId': $.cookie('gameId'),
                    id: item.id,
                    status: status()
                }
                axiosAjax('POST', '/chapter/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success(`${item.status === 1 ? '撤回' : '发表'}成功`)
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 禁评、取消禁评
    _forbidcomment (item) {
        const {dispatch} = this.props
        let sendData = {
            // 'appId': $.cookie('gameId'),
            'id': item.id,
            'operate': !parseInt(item.forbidComment) ? '1' : '0'
        }
        axiosAjax('post', '/post/forbidcomment', sendData, (res) => {
            if (res.status === 200) {
                this.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
            } else {
                message.error(res.msg)
            }
        })
    }

    // 推荐
    _isTop (item) {
        const {dispatch} = this.props
        this.setState({
            loading: true
        })
        let sendData = {
            // 'appId': $.cookie('gameId'),
            'id': item.id,
            'recommend': item.recommend === 1 ? 0 : 1
        }
        axiosAjax('post', '/chapter/recommend', sendData, (res) => {
            if (res.code === 1) {
                // this.doSearch(search.type)
                this.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
            } else {
                message.error(res.msg)
            }
        })
    }

    // 筛选章节状态
    handleChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({'status': value}))
        this.setState({
            newsStatus: value
        })
        this.doSearch('init', {'currentPage': 1, status: value})
    }

    // 筛选推荐状态
    handleChange1 = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({'recommend': value}))
        this.doSearch('init', {'currentPage': 1, recommend: value})
    }

    // 筛选章节类别
    handleChange2 = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({'channelId': value}))
        this.doSearch('init', {'currentPage': 1, channelId: value})
    }

    render () {
        const {list, pageData, form, selectedData, location, courseDuration, dispatch} = this.props
        const { getFieldDecorator } = form
        const calDuration = (time) => {
            return !time ? '0 秒' : `${parseInt(time / 60)} 分 ${time % 60} 秒`
        }
        return <div className="chapter-index">

            <Row>
                {/*
                <Col style={{margin: '0 0 20px'}}>
                    <span>章节来源：</span>
                    <span> MarsBit官方</span>
                </Col>
                <Col>
                    <span>章节状态：</span>
                    <Select defaultValue={`${filter.status}`} style={{ width: 100 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        <Option value="1">已发表</Option>
                        <Option value="2">定时发表</Option>
                        <Option value="0">草稿箱</Option>
                    </Select>
                    <span style={{marginLeft: 15}}>推荐：</span>
                    <Select defaultValue={`${filter.recommend}`} style={{ width: 100 }} onChange={this.handleChange1}>
                        <Option value="">全部</Option>
                        <Option value="0">未推荐</Option>
                        <Option value="1">推荐</Option>
                    </Select>
                    <span style={{marginLeft: 15}}>章节类别：</span>
                    <Select defaultValue={`${filter.channelId}`} style={{ width: 100 }} onChange={this.handleChange2}>
                        <Option value="">全部</Option>
                        {channelIdOptions.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>)}
                    </Select>
                    <span style={{marginLeft: 15}}>章节标题：</span>
                    <Input
                        value={search.title}
                        style={{width: 150, marginRight: 15}}
                        onChange={(e) => dispatch(setSearchQuery({title: e.target.value}))}
                        placeholder="请输入章节标题"
                        onPressEnter={() => { this._search() }}
                    />
                    <span>
                        <Button type="primary" onClick={() => { this._search() }}>搜索</Button>
                    </span>
                </Col>
                */}
                <Button type="primary" style={{margin: '0 15px 0 0'}} onClick={() => { window.open(`${window.location.origin}/#/college-chapterSend?resourceId=${location.query.id}`) }}>新增</Button>
                <Button type="primary" title="刷新" onClick={() => {
                    this.doSearch('init')
                    dispatch(getCourseDuration({resourceId: location.query.id}))
                }} shape="circle" icon="reload" />
                {courseDuration.duration && <span style={{marginLeft: 10}}>课程总时长：{calDuration(courseDuration.duration)}；章节数：{courseDuration.chapterNums}</span>}
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
            <Modal
                title="置顶权重"
                visible={this.state.topIsShow}
                onOk={() => this.setNewsTop()}
                onCancel={() => { this.setState({topIsShow: false}); form.resetFields() }}
            >
                <Form>
                    <FormItem {...formItemLayout} label="置顶权重">
                        {getFieldDecorator('order', {
                            rules: [{
                                required: true, message: '请输入置顶权重!'
                            }, {
                                pattern: /^[1-9]\d*$/, message: '设置权重必须大于0!'
                            }],
                            initialValue: selectedData.topOrder === 0 ? 1 : selectedData.topOrder
                        })(
                            <Input min={1}/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="失效热度">
                        {getFieldDecorator('topEndHotcount', {
                            rules: [{
                                required: true, message: '请输入置顶失效热度!'
                            }, {
                                pattern: /^[1-9]\d*$/, message: '置顶失效热度必须大于0!'
                            }],
                            initialValue: selectedData.topEndHotcount && selectedData.topEndHotcount !== 0 ? selectedData.topEndHotcount : 10000
                        })(
                            <Input min={10000}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="失效时间: "
                    >
                        {getFieldDecorator('topEndTime', {
                            rules: [{required: true, message: '请选择置顶失效时间！'}],
                            initialValue: (selectedData.topEndTime && selectedData.topEndTime !== '') ? moment(formatDate(selectedData.topEndTime), 'YYYY-MM-DD HH:mm:ss') : moment().add('hours', 1)
                        })(
                            <DatePicker
                                showTime
                                disabledDate={this.disabledDate}
                                format="YYYY-MM-DD HH:mm:ss"
                            />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        chapterInfo: state.chapterInfo,
        list: state.chapterInfo.list,
        search: state.chapterInfo.search,
        filter: state.chapterInfo.filter,
        pageData: state.chapterInfo.pageData,
        courseDuration: state.chapterInfo.courseDuration,
        selectedData: state.chapterInfo.selectedData
    }
}

export default connect(mapStateToProps)(Form.create()(ChapterIndex))
