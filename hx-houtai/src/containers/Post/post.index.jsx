/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Input, Row, Col, Button, Table, Modal, message } from 'antd'
// import { Table, Row, Col, Modal, message, Spin, Select, Input, Button, Form, DatePicker, Tooltip, Radio, Checkbox } from 'antd'
import { Table, Row, Col, Modal, message, Spin, Select, Input, Button, Form, DatePicker, Tooltip, Radio } from 'antd'
import './post.scss'
import { Link, hashHistory } from 'react-router'
import IconItem from '../../components/icon/icon'
import {getPostList, setSearchQuery, setPageData, setFilterData, newsToTop, editPostList, selectedData} from '../../actions/post/post.action'
import {getChannelList} from '../../actions/index'
import {formatDate, axiosAjax} from '../../public/index'
import moment from 'moment'
// import Cookies from 'js-cookie'
import { addFlashPush } from '../../actions/flash/flashPush.action'
const confirm = Modal.confirm
const Option = Select.Option
const FormItem = Form.Item
const RadioGroup = Radio.Group
// const CheckboxGroup = Checkbox.Group
const { TextArea } = Input
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
class PostIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            newsStatus: null,
            editNewsId: '',
            visible: false,
            terminal: '1',
            quantity1000: false
        }
    }

    channelName (id) {
        let name = ''
        this.props.channelList.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name || '暂无'
    }

    componentWillMount () {
        const {search, filter, dispatch} = this.props
        dispatch(getChannelList())
        this.doSearch('init', {...filter, title: search.title})
        let readCountsCol = [{
            width: 60,
            title: '全部点击量',
            dataIndex: 'readCounts',
            key: 'readCounts'
        }, {
            width: 60,
            title: 'App 点击量',
            dataIndex: 'appReadCount',
            key: 'appReadCount'
        }]
        let optionCol = [{
            title: '推荐/置顶',
            key: 'option',
            width: 120,
            render: (item) => (<div className="btns">
                <p>
                    <a className={`mr10 recommend-btn opt-btn ${item.status !== 1 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this._isTop(item)} disabled={item.status !== 1 && true}>
                        {item.recommend === 1 ? '取消推荐' : '推荐'}
                    </a>
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
                        className={`mr10 top-btn opt-btn ${item.status !== 1 ? 'disabled' : ''}`}
                        disabled={item.status !== 1 && true}
                        href="javascript:void(0)"
                        onClick={() => this.showToTopModal(parseInt(item.topOrder), item.id, item)}
                    >置顶</a>}
                </p>
                {(item.createrType === 1 || item.cateId === 2) && <p>
                    <a className={`mr10 toHead-btn opt-btn ${item.status !== 1 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this.homeShow(item)} disabled={item.status !== 1 && true}>
                        {item.recCreaterType === 1 ? '从头条撤回' : '推至头条'}
                    </a>
                </p>}
                <p>
                    {item.recommendToMiniApp === 1 ? <a className={`mr10 toMiniApp-btn opt-btn`} href="javascript:void(0)" onClick={() => this.backFromMiniApp(item)}>
                        从小程序撤回
                    </a> : <a className={`mr10 toMiniApp-btn opt-btn`} href="javascript:void(0)" onClick={() => this._isToMiniApp(item)}>
                        推至小程序
                    </a>}
                </p>
            </div>)
        }, {
            title: '操作',
            key: 'action',
            width: 110,
            render: (item) => {
                if (item.createrType === 0) {
                    return <div className="btns">
                        <p>
                            {/* <a className="mr10 opt-btn" target={'_blank'} href={`//www.marsbit.co.${location.host.indexOf('com') !== -1 ? 'com' : 'vip'}/newsdetail/${item.id}`} style={{background: '#108ee9'}}>查看</a> */}
                            <a className="mr10 opt-btn" target={'_blank'} href={`https://news.marsbit.co.com/${item.id}.html`} style={{background: '#108ee9'}}>查看</a>
                        </p>
                        <p>
                            <Link className="mr10 opt-btn" to={{pathname: '/post-send', query: {id: item.id, type: 'redact'}}} style={{background: '#e35ba3'}}>编辑</Link>
                        </p>
                        <p>
                            <a className="mr10 opt-btn" href="javascript:void(0)" onClick={() => this._isPublish(item)} style={{background: '#00a854'}}>
                                {(() => {
                                    if (item.status === 1 || item.status === 3) {
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
                        {/* <a className="mr10" href="javascript:void(0)" onClick={() => this._forbidcomment(item)}>{item.forbidComment === '1' ? '取消禁评' : '禁评'}</a> */}
                        <p>
                            <a onClick={() => this.delPost(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                        </p>
                        <p>
                            <a onClick={() => {
                                this.setState({visible: true})
                                dispatch(selectedData(item))
                            }} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#f9b724'}}>一键推送</a>
                        </p>
                    </div>
                } else if (item.createrType === 1) {
                    return <div className="btns">
                        <p>
                            {/* <a className="mr10 opt-btn" target={'_blank'} href={`//www.marsbit.co.${location.host.indexOf('com') !== -1 ? 'com' : 'vip'}/newsdetail/${item.id}`} style={{background: '#108ee9'}}>查看</a> */}
                            <a className="mr10 opt-btn" target={'_blank'} href={`https://news.marsbit.co.com/${item.id}.html`} style={{background: '#108ee9'}}>查看</a>
                        </p>
                        <p>
                            <a onClick={() => this.delPost(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                        </p>
                        {item.status === 0 ? <p>
                            <Link
                                target="_blank"
                                className="mr10 opt-btn"
                                to={{pathname: '/checkArticle-detail', query: {id: item.id}}}
                                style={{background: '#108ee9'}}>
                                审核
                            </Link>
                        </p> : <p>
                            <Link
                                target="_blank"
                                className="mr10 opt-btn"
                                to={{pathname: '/checkArticle-edit', query: {id: item.id}}}
                                style={{background: '#2e55a3'}}>
                                重新审核
                            </Link>
                        </p>}
                        <p>
                            <a onClick={() => {
                                this.setState({visible: true})
                                dispatch(selectedData(item))
                            }} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#f9b724'}}>一键推送</a>
                        </p>
                        {/*
                        <p>
                            <a className={`mr10 opt-btn publish-btn ${item.status === 2 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this._isPublish(item)} disabled={item.status === 2 && true}>
                                {item.status === 1 ? '撤回到审核' : '发表'}
                            </a>
                        </p>
                        */}
                    </div>
                }
            }
        }]
        let basicCol = [{
            title: '新闻标题',
            width: 220,
            key: 'name',
            render: (text, record) => (record && <div className="post-info clearfix">
                <div>
                    <h4 title={record.title}>{record.apiAdd === 0 ? '' : <p className="apiAdd-p machine">机器</p>}{record.title}</h4>
                    <div>
                        {(record.original && parseInt(record.original) === 1) ? <div style={{'display': 'inline-block'}}><span className="green-bg mr10">独家</span></div> : ''}
                        {!parseInt(record.recommend) ? '' : <div style={{'display': 'inline-block', verticalAlign: 'middle'}}><span className="org-bg mr10">推荐</span></div>}
                        {!parseInt(record.forbidComment) ? '' : <span className="pre-bg">禁评</span>}
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
                    </div>
                </div>
                {!record.pictureUrl ? '' : <img src={record.pictureUrl.split(',')[0]} />}
            </div>)
        }, {
            title: '新闻状态',
            key: 'status',
            width: 90,
            render: (record) => {
                if (record && record.status === 0) {
                    return <span className="news-status pre-publish">草稿</span>
                } else if (record && record.status === 1) {
                    return <span className="news-status">已发表</span>
                } if (record && record.status === 3) {
                    return <span className="news-status will-publish">定时发表</span>
                } else {
                    return <span>暂无</span>
                }
            }
        }, {
            title: '频道 ',
            width: 80,
            dataIndex: 'channelId',
            key: 'channelId',
            render: (record) => (record && this.channelName(record))
        }, {
            title: '发表时间',
            key: 'createTime',
            width: 100,
            render: (record) => (record && formatDate(record.publishTime))
        }]
        columns = [...basicCol, ...readCountsCol, ...optionCol]
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'nickName': ''}))
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
    }
    createMarkup (str) { return {__html: str} }

    // 新闻置顶
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

    // 推至头条
    homeShow (item) {
        const {dispatch} = this.props
        const This = this
        let sendData = {
            'id': item.id,
            'recCreaterType': item.recCreaterType === 1 ? 0 : 1
        }
        axiosAjax('post', '/news/column/recommend', sendData, (res) => {
            if (res.code === 1) {
                This.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
                message.success('操作成功!')
            } else {
                message.error(res.msg)
            }
        })
        // confirm({
        //     title: '提示',
        //     content: `确认要${item.recCreaterType === 1 ? '从头条撤回(置顶会被取消)' : '推至头条'}吗 ?`,
        //     onOk () {
        //
        //     }
        // })
    }

    newsIsToTop (sendData) {
        const {dispatch} = this.props
        dispatch(newsToTop(sendData, () => {
            this.doSearch('init')
            dispatch(setSearchQuery({'type': 'init'}))
        }))
    }

    setNewsTop (e) {
        const form = this.props.form
        // console.log(e.target.value)
        form.validateFields((err, values) => {
            // console.log(err, values)
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
        dispatch(editPostList({topOrder: val}, record.key))
    }

    _editTopValue (e, item) {
        // console.log(item)
        // const {dispatch} = this.props
        let val = e.target.value
        // let index = item.key
        let id = item.id
        // editPostList(data, index)
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
        const {dispatch, pageData, search, filter} = this.props
        let sendData = {
            ...filter,
            type: this.state.type,
            title: search.title,
            authorName: search.authorName,
            pageSize: 20,
            currentPage: pageData.currPage
        }
        this.setState({
            loading: true
        })
        sendData = {...sendData, ...data}
        dispatch(getPostList(type, sendData, () => {
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
        dispatch(setSearchQuery({'type': 'init'}))
        dispatch(setPageData({'currPage': 1}))
    }
    changePage (page) {
        this.setState({
            loading: true
        })

        const {dispatch, search, filter} = this.props
        // this.setState({'currPage': page})
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page, 'readCounts': this.state.quantity1000 ? 1000 : '', ...filter})
    }
    // 删除
    delPost (item) {
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
                    // 'appId': $.cookie('gameId'),
                    id: item.id,
                    status: -1
                }
                axiosAjax('POST', '/news/status', {...sendData}, (res) => {
                    _this.setState({
                        loading: false
                    })
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
        //     message.error('新闻发布时间大于当前时间，直接发表请先修改发布时间！')
        //     return false
        // }
        let status = () => {
            if (item.status === 0) {
                if (item.publishTime > Date.parse(new Date())) {
                    return 3
                } else {
                    return 1
                }
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
                axiosAjax('POST', '/news/status', {...sendData}, (res) => {
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
            'id': item.id,
            'recommend': item.recommend === 1 ? 0 : 1
        }
        axiosAjax('post', '/news/recommend', sendData, (res) => {
            this.setState({
                loading: false
            })
            if (res.code === 1) {
                message.success('操作成功!')
                this.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
            } else {
                message.error(res.msg)
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
        axiosAjax('post', '/news/recommendtominiapp', sendData, (res) => {
            this.setState({
                loading: false
            })
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
        axiosAjax('post', '/miniapp/delete', sendData, (res) => {
            this.setState({
                loading: false
            })
            if (res.code === 1) {
                message.success('操作成功!')
                this.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
            } else {
                message.error(res.msg)
            }
        })
    }

    // 筛选新闻状态
    handleChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({'status': value}))
        this.setState({
            loading: true,
            newsStatus: value,
            quantity1000: false
        })
        this.doSearch('init', {'currentPage': 1, status: value})
    }

    // 突破1000
    quantityQ1000 = () => {
        this.setState({
            quantity1000: true
        })
        this.doSearch('init', {'currentPage': 1, 'readCounts': 1000})
    }

    // 筛选推荐状态
    handleChange1 = (value) => {
        const {dispatch} = this.props
        this.setState({
            loading: true,
            quantity1000: false
        })
        dispatch(setFilterData({'recommend': value}))
        this.doSearch('init', {'currentPage': 1, recommend: value})
    }

    // 筛选新闻类别
    handleChange2 = (value) => {
        const {dispatch} = this.props
        this.setState({
            loading: true,
            quantity1000: false
        })
        dispatch(setFilterData({'channelId': value}))
        this.doSearch('init', {'currentPage': 1, channelId: value})
    }

    submitAccount () {
        const {dispatch, form, selectedData} = this.props
        const This = this
        form.validateFields((err, values) => {
            values.type = 'news'
            values.id = selectedData.id
            values.terminal = '1'
            values.content = values.notifyContent
            values.createTime = Date.parse(new Date())
            if (err) {
                return false
            }
            confirm({
                title: '提示',
                content: `确认要推送本条新闻吗 ?`,
                onOk () {
                    dispatch(addFlashPush(values, () => {
                        This.setState({
                            visible: false
                        })
                        form.resetFields()
                        this.doSearch('init')
                    }))
                }
            })
        })
    }

    cancelModal = () => {
        const {form} = this.props
        form.resetFields()
        this.setState({
            visible: false
        })
    }

    terminalChange = (value) => {
        this.setState({
            terminal: value.join(',')
        })
    }

    render () {
        const {list, pageData, filter, search, dispatch, form, selectedData} = this.props
        const { getFieldDecorator } = form
        return <div className="post-index">
            <Row>
                <Col style={{margin: '0 0 20px'}}>
                    <span>文章来源：</span>
                    <span> MarsBit官方</span>
                </Col>
                <Col>
                    <span>新闻状态：</span>
                    <Select defaultValue={`${filter.status}`} style={{ width: 100, marginBottom: 10 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        <Option value="1">已发表</Option>
                        <Option value="3">定时发表</Option>
                        <Option value="0">草稿箱</Option>
                        <Option value="9">机器发布</Option>
                        <Option value="8">人工发布</Option>
                    </Select>
                    <span style={{marginLeft: 15}}>推荐：</span>
                    <Select defaultValue={`${filter.recommend}`} style={{ width: 100 }} onChange={this.handleChange1}>
                        <Option value="">全部</Option>
                        <Option value="0">未推荐</Option>
                        <Option value="1">推荐</Option>
                    </Select>
                    <span style={{marginLeft: 15}}>新闻类别：</span>
                    <Select defaultValue={`${filter.channelId}`} style={{ width: 100 }} onChange={this.handleChange2}>
                        <Option value="">全部</Option>
                        {this.props.channelList.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>)}
                    </Select>
                    <Button type="primary" style={{margin: '0 0 0 15px'}} onClick={() => { hashHistory.push('/post-send') }}><IconItem type="icon-post-send"/>新增</Button>
                    <Button type="primary" style={{margin: '0 0 0 15px'}} onClick={this.quantityQ1000}><IconItem type="icon-post-send"/>阅读量破1000</Button>
                </Col>
                <Col>
                    <span>新闻标题：</span>
                    <Input
                        value={search.title}
                        style={{width: 180, marginRight: 15}}
                        onChange={(e) => dispatch(setSearchQuery({title: e.target.value}))}
                        placeholder="请输入新闻标题"
                        onPressEnter={() => { this._search() }}
                    />
                    <span>作者名：</span>
                    <Input
                        value={search.authorName}
                        style={{width: 150, marginRight: 15}}
                        onChange={(e) => dispatch(setSearchQuery({authorName: e.target.value}))}
                        placeholder="请输入作者名"
                        onPressEnter={() => { this._search() }}
                    />
                    <Button type="primary" onClick={() => { this._search() }}><IconItem type="icon-search"/>搜索</Button>
                    <Button type="primary" style={{marginLeft: 15}} onClick={() => { this.doSearch('init') }} shape="circle" icon="reload" />
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
            <Modal
                title="置顶权重"
                maskClosable={false}
                visible={this.state.topIsShow}
                onOk={(e) => this.setNewsTop(e)}
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
                                required: false, message: '请输入置顶失效热度!'
                            }, {
                                // pattern: /^[1-9]\d*$/, message: '置顶失效热度必须大于0!'
                                pattern: '', message: ''
                            }],
                            initialValue: selectedData.topEndHotcount && selectedData.topEndHotcount !== '' ? selectedData.topEndHotcount.toString() : ''
                        })(
                            <Input min={0}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="失效时间: "
                    >
                        {getFieldDecorator('topEndTime', {
                            rules: [{required: false, message: '请选择置顶失效时间！'}],
                            initialValue: (selectedData.topEndTime && selectedData.topEndTime !== '') ? moment(formatDate(selectedData.topEndTime), 'YYYY-MM-DD HH:mm:ss') : moment().add('hours', 100000)
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
            <Modal
                title="添加推送信息"
                visible={this.state.visible}
                onOk={() => this.submitAccount()}
                onCancel={ this.cancelModal }
                footer={[
                    <Button key="back" onClick={this.cancelModal}>取消</Button>,
                    <Button key="submit" type="primary" onClick={() => { this.submitAccount() }}>确定</Button>
                ]}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="推送类型"
                    >
                        {/* {getFieldDecorator('type', {
                            initialValue: 'news',
                            rules: [{required: true, message: '请选择推送类型！'}]
                        })(
                            <RadioGroup>
                                <Radio value="news">新闻</Radio>
                            </RadioGroup>
                        )} */}
                        新闻
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="目标用户"
                    >
                        {getFieldDecorator('pastDays', {
                            initialValue: '3',
                            rules: [{required: true, message: '请选择目标用户类型！'}]
                        })(
                            <RadioGroup>
                                <Radio value="3">3日活跃</Radio>
                                <Radio value="7">7日活跃</Radio>
                                <Radio value="14">14日活跃</Radio>
                                <Radio value="0">全部</Radio>
                            </RadioGroup>
                        )}
                        <div style={{color: 'rgb(255, 79, 62)'}}>推荐使用3日活跃，推送的目标用户过多会导致推送无法到达</div>
                    </FormItem>
                    {/* <FormItem
                        {...formItemLayout}
                        label="推送方"
                    >
                        {getFieldDecorator('terminal', {
                            initialValue: ['1'],
                            rules: [{required: true, message: '请选择推送方！'}]
                        })(
                            <CheckboxGroup onChange={this.terminalChange}>
                                <Checkbox value="1">火星财经APP</Checkbox>
                                // <Checkbox value="3">火星社区APP</Checkbox>
                                <Checkbox value="2">第三方(币优)</Checkbox>
                            </CheckboxGroup>
                        )}
                    </FormItem> */}
                    <FormItem
                        {...formItemLayout}
                        label="新闻ID: ">
                        {/* {getFieldDecorator('id', {
                            initialValue: selectedData.id ? selectedData.id : '',
                            rules: [
                                {required: true, message: '请输入新闻 ID！'}
                            ]
                        })(
                            <Input placeholder="新闻 ID"/>
                        )} */}
                        {selectedData.id ? selectedData.id : ''}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="推送标题: ">
                        {getFieldDecorator('title', {
                            initialValue: selectedData.id ? selectedData.title : '',
                            rules: [{required: true, message: '请输入推送标题！'}]
                        })(
                            <TextArea rows={3} placeholder="推送标题"/>
                        )}
                    </FormItem>
                    {/* <FormItem
                        {...formItemLayout}
                        label="新闻介绍: ">
                        {getFieldDecorator('content', {
                            initialValue: selectedData.id ? selectedData.synopsis : '',
                            rules: [{required: true, message: '请输入新闻介绍！'}]
                        })(
                            <TextArea rows={3} placeholder="新闻介绍"/>
                        )}
                    </FormItem> */}
                    <FormItem
                        {...formItemLayout}
                        label="推送描述: ">
                        {getFieldDecorator('notifyContent', {
                            initialValue: selectedData.id ? selectedData.synopsis : '',
                            rules: [{required: false, message: '请输入推送描述！'}]
                        })(
                            <TextArea rows={3} placeholder="推送描述"/>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        postInfo: state.postInfo,
        list: state.postInfo.list,
        search: state.postInfo.search,
        filter: state.postInfo.filter,
        pageData: state.postInfo.pageData,
        selectedData: state.postInfo.selectedData,
        channelList: state.channelListInfo
    }
}

export default connect(mapStateToProps)(Form.create()(PostIndex))
