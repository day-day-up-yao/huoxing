/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Modal, message, Spin, Form, Select, Input, Button, Tooltip, DatePicker } from 'antd'
import moment from 'moment'
import './checkArticle.scss'
import { Link } from 'react-router'
import IconItem from '../../../components/icon/icon'
import {getArticleItemInfo, getArticleList, setSearchQuery, setPageData, setFilterData, newsToTop, selectData, editArticleList} from '../../../actions/audit/articleAudit.action'
import {getChannelList} from '../../../actions/index'
import {formatDate, axiosAjax, cutString, isJsonString} from '../../../public/index'
const confirm = Modal.confirm
const {TextArea} = Input
const Option = Select.Option
const FormItem = Form.Item
const reasonArr = ['文章包含广告信息', '文章包含违规信息', '发布内容与行业无关', '请修改默认昵称', '其它']
const blackreasonArr = ['经常发布广告、违规内容', '经常发布与行业无关内容', '头像、简介、昵称包含违规内容', '其他']
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
class ArticleAuditIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            newsStatus: 1,
            reason: ''
        }
    }

    channelName (id) {
        let name = ''
        let hasId = this.props.channelList.every((item) => {
            return parseInt(item.value) !== id
        })
        if (hasId) {
            name = '无'
        } else {
            this.props.channelList.map((item, index) => {
                if (parseInt(item.value) === id) {
                    name = item.label
                }
            })
        }
        return name
    }

    componentWillMount () {
        const { search, filter, dispatch } = this.props
        dispatch(getChannelList())
        this.doSearch('init', {...filter, title: search.title})
        columns = [{
            title: '文章标题',
            key: 'name',
            width: 250,
            render: (text, record) => (record && <div className="post-info clearfix">
                <div>
                    <h4 title={record.title} dangerouslySetInnerHTML={this.createMarkup(record.title, record.autoPass)} />
                    <div>
                        {(record.original && parseInt(record.original) === 1) ? <div style={{'display': 'inline-block', verticalAlign: 'middle'}}><span className="green-bg mr10">独家</span></div> : ''}
                        {!parseInt(record.recommend) ? '' : <div style={{'display': 'inline-block', verticalAlign: 'middle'}}><span className="org-bg mr10">推荐</span></div>}
                        {/* !parseInt(record.status) === 0 ? '' : <span className="pre-bg">草稿状态</span> */}
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
            title: '文章状态',
            key: 'status',
            width: 100,
            render: (record) => {
                if (record && record.status === 4) {
                    return <span className="news-status audit-publish">审核中</span>
                } else if (record && record.status === 0) {
                    return <span className="news-status pre-publish">草稿箱</span>
                } else if (record && record.status === 1) {
                    return <span className="news-status has-publish">审核通过</span>
                } else if (record && record.status === 2) {
                    return <div>
                        <span className="news-status has-forbidden">审核驳回</span>
                        <p className="reason" style={{marginTop: 10}}>( 原因：{record.nopassReason && record.nopassReason.trim() !== '' ? record.nopassReason : '未填写'} )</p>
                    </div>
                } else if (record && record.status === 3) {
                    return <div>
                        <span className="news-status will-publish">定时发表</span>
                    </div>
                } else {
                    return <span>暂无</span>
                }
            }
        }, {
            title: '机审结果',
            key: 'machineAuditStatus',
            width: 100,
            render: (record) => {
                if (!record.machineAuditStatus) {
                    return <span className="news-status machine-pre">未机审</span>
                } else if (record.machineAuditStatus === 2) {
                    return <div>
                        <span className="news-status machine-forbidden">机审未通过</span>
                        <p className="reason" style={{marginTop: 10}}>( 原因：{record.nopassReason && record.nopassReason.trim() !== '' ? record.nopassReason : '未填写'} )</p>
                    </div>
                } else if (record && record.machineAuditStatus === 1) {
                    return <span className="news-status machine-publish">机审通过</span>
                } else {
                    return <span>暂无</span>
                }
            }
        }, {
            title: '文章作者',
            dataIndex: 'author',
            key: 'author',
            width: 100,
            render: (text, record) => (
                record.author && record.author.trim() !== '' ? <span title={record.author}>{cutString(record.author, 25)}{record.isWhite === 1 ? <div className="icon-color"><IconItem type="icon-identify"/></div> : '' }</span> : '无'
            )
        },
        // {
        //     title: '标签',
        //     dataIndex: 'tags',
        //     width: 80,
        //     key: 'tags',
        //     render: (record) => ((record && record.trim() !== '') ? record.split(',').map((item, index) => {
        //         if (item.trim() === '') {
        //             return ''
        //         } else {
        //             return <Tag key={index} color="blue" style={{margin: '5px'}}>{item}</Tag>
        //         }
        //     }) : '无')
        // },
        {
            title: '提交时间',
            key: 'createTime',
            width: 135,
            render: (record) => (record && formatDate(record.createTime))
        }, {
            title: '发表时间',
            key: 'publishTime',
            width: 135,
            render: (record) => (record && formatDate(record.publishTime))
        }, {
            title: '推荐/置顶',
            key: 'option',
            width: 110,
            render: (item) => (item.status === 0 ? '无' : <div className="btns checkBtns">
                <p style={{marginBottom: 10}}>
                    <a className={`mr10 recommend-btn opt-btn ${item.status !== 1 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this.homeShow(item)} disabled={item.status !== 1 && true}>
                        {item.recCreaterType === 1 ? '从头条撤回' : '推至头条'}
                    </a>
                </p>
                {/*
                <p style={{marginBottom: 10}}>
                    <a className={`mr10 recommend-btn opt-btn ${item.status !== 1 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this._isTop(item)} disabled={item.status !== 1 && true}>
                        {item.recommend === 1 ? '取消推荐' : '推荐'}
                    </a>
                </p>
                */}
                <p>
                    {parseInt(item.topOrder) ? <Tooltip placement="bottom" title={`置顶失效时间: ${moment(item.topEndTime).format('YYYY年MM月DD日 HH:mm:ss')}; 失效热度: ${item.topEndHotcount}`} >
                        <a
                            className="mr10 opt-btn"
                            href="javascript:void(0)"
                            style={{background: '#ff4f3e'}}
                            onClick={() => this.showToTopModal(parseInt(item.topOrder), item.id, item)}
                        >取消置顶</a>
                    </Tooltip> : <a
                        className={`mr10 opt-btn topBtn ${(item.status !== 1 || item.recCreaterType !== 1) ? 'disabled' : ''}`}
                        disabled={(item.status !== 1 || item.recCreaterType !== 1) && true}
                        href="javascript:void(0)"
                        onClick={() => this.showToTopModal(parseInt(item.topOrder), item.id, item)}
                    >置顶</a>}
                </p>
            </div>)
        }, {
            title: '操作',
            key: 'action',
            width: 180,
            render: (item, record) => (item.status === 0 ? '无' : <div className="huoxinghao-operation">
                {item.status === 4 ? <Link
                    target="_blank"
                    className="mr10 opt-btn"
                    to={{pathname: '/checkArticle-edit', query: {id: item.id}}}
                    style={{background: '#108ee9'}}>
                    修改
                </Link> : <Link
                    target="_blank"
                    className="mr10 opt-btn"
                    to={{pathname: '/checkArticle-edit', query: {id: item.id}}}
                    style={{background: '#2e55a3'}}>
                    修改
                </Link>}
                <p style={{margin: '10px 0'}}>
                    <a className={`mr10 opt-btn publish-btn ${item.status === 2 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this._isPublish(item)} disabled={item.status === 2 && true}>
                        {(item.status === 1 || item.status === 3) ? '撤回' : '发表'}
                    </a>
                </p>
                <p style={{margin: '10px 0'}}>
                    <a className={`mr10 opt-btn back-btn ${item.status === 2 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this.doReject(item)} disabled={item.status === 2 && true}>
                        驳回
                    </a>
                </p>
                {/* <a className="mr10" href="javascript:void(0)" onClick={() => this._forbidcomment(item)}>{item.forbidComment === '1' ? '取消禁评' : '禁评'}</a> */}
                <a onClick={() => this.doBlack(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>拉黑</a>
                <a onClick={() => this.delPost(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                {!record.isWhite && <a onClick={() => this.addAuthToWhite(record.phoneNum)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#e9cc08'}}>添加白名单</a>}
            </div>)
        }]
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'nickName': ''}))
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
    }
    createMarkup (str, autoPass) {
        let white = ''
        if (autoPass === 1) {
            white = '【白名单】'
        }
        return {__html: white + str}
    }

    // 新闻置顶
    showToTopModal (topOrder, id, item) {
        const {dispatch} = this.props
        if (!topOrder) {
            this.setState({
                editNewsId: id,
                topIsShow: true
            })
            dispatch(selectData(item))
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
        dispatch(editArticleList({topOrder: val}, record.key))
    }

    _editTopValue (e, item) {
        let val = e.target.value
        let id = item.id
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
            pageSize: 20,
            title: search.title,
            authorName: search.authorName,
            currentPage: pageData.currPage
        }
        this.setState({
            loading: true
        })
        sendData = {...sendData, ...data}
        dispatch(getArticleList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    _search () {
        const { dispatch } = this.props
        const { newsStatus } = this.state
        this.doSearch('init', {'currentPage': 1, status: newsStatus})
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
        this.doSearch(search.type, {'currentPage': page, ...filter})
    }
    // 把文章的作者加入到白名单用户中
    addAuthToWhite (phone) {
        axiosAjax('post', '/author/whitelist/add', {phonenum: phone, remarks: '批量添加，请更新备注'}, (data) => {
            if (data.code === 1) {
                message.success('添加成功！')
            } else if (data.code === -1) {
                message.error('添加失败！')
            } else {
                message.error(data.msg)
            }
        })
    }

    // 删除
    delPost (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    // 'appId': $.cookie('gameId'),
                    id: item.id,
                    status: -1
                }
                axiosAjax('POST', '/news/status', {...sendData}, (res) => {
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
    doBlack (item) {
        this.setState({
            author: item.author, // 当前拉黑的listItemId
            passportId: item.createdBy
        }, function () {
            this.setState({
                doBlackShow: true
            })
        })
    }

    // 拉黑
    doBloacktDo = () => {
        // const {dispatch} = this.props
        // const _this = this
        // confirm({
        //     title: '提示',
        //     content: `确认要加入黑名单吗 ?`,
        //     onOk () {
        //         let sendData = {
        //             nickname: item.author
        //         }
        //         axiosAjax('POST', '/blacklist/addblacklist_by_nickname', {...sendData}, (res) => {
        //             if (res.code === 1) {
        //                 message.success('加入黑名单成功')
        //                 _this.doSearch('init')
        //                 dispatch(setSearchQuery({'type': 'init'}))
        //             } else {
        //                 message.error(res.msg)
        //             }
        //         })
        //     }
        // })
        const _this = this
        this.setState({
            loading: true
        })
        if (this.state.reason.trim() !== '') {
            axiosAjax('POST', '/blacklist/addblacklist_by_passportId', {
                passportId: this.state.passportId, // 获取点击的id
                msg: this.state.reason
            }, (res) => {
                if (res.code === 1) {
                    message.success('加入黑名单成功！')
                    _this.doSearch('init')
                    this.setState({
                        doBlackShow: false,
                        passportId: ''
                    })
                    this.doSearch('init') // 干啥的
                } else {
                    this.setState({
                        loading: false
                    })
                    message.error(res.msg)
                }
            })
        } else {
            this.setState({
                loading: false
            })
            message.error('原因不能为空!')
        }
    }

    // 发表或存草稿
    _isPublish (item) {
        const {dispatch} = this.props
        const _this = this
        if (item.status === 4) {
            if (!isJsonString(item.coverPic)) {
                message.error('新闻封面暂无，请先上传相关封面！')
                return false
            } else if (!JSON.parse(item.coverPic).pc && !JSON.parse(item.coverPic).pc_recommend) {
                message.error('新闻封面暂无，请先上传相关封面！')
                return false
            }
        }
        confirm({
            title: '提示',
            content: `确认要${item.status === 4 ? '发表' : '撤回到审核中'}吗 ?`,
            onOk () {
                let sendData = {
                    // 'appId': $.cookie('gameId'),
                    id: item.id,
                    status: item.status === 4 ? 1 : 4
                }
                axiosAjax('POST', '/news/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success(`${item.status === 4 ? '发表' : '撤回'}成功`)
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                        if (item.status === 4) {
                            axiosAjax('post', '/caster/mars/content/sent', {
                                newsId: item.id,
                                title: item.title,
                                synopsis: item.synopsis,
                                coverPic: item.coverPic,
                                createdBy: item.createdBy
                            })
                        }
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 审核驳回
    getReason = (e) => {
        this.setState({
            reason: e.target.value
        })
    }
    doRejectSelect = (value) => {
        this.setState({
            reason: reasonArr[value], // 当前选择驳回原因
            rejectSelectVal: value
        })
    }
    doBlackSelect = (value) => {
        this.setState({
            reason: reasonArr[value],
            blackSelectVal: value
        })
    }
    doReject (item) {
        if (item.nopassReason) {
            this.setState({
                reason: item.nopassReason,
                rejectSelectVal: '4'
            })
        } else {
            this.setState({
                reason: reasonArr[0], // 默认驳回原因
                rejectSelectVal: '0' // 驳回当前选择项
            })
        }

        this.setState({
            listItemId: item.id // 当前驳回listItemId
        }, function () {
            this.setState({
                doRejectShow: true // 驳回弹框是否显示
            })
        })
    }
    doRejectDo = () => {
        const _this = this
        this.setState({
            loading: true
        })
        if (this.state.reason.trim() !== '') {
            axiosAjax('POST', '/news/status', {
                id: _this.state.listItemId,
                status: 2,
                reason: this.state.reason
            }, (res) => {
                if (res.code === 1) {
                    message.success('操作成功！')
                    this.dataGather2(_this.state.listItemId, this.state.reason, res.currentTime)
                    this.setState({
                        doRejectShow: false
                    })
                    this.doSearch('init')
                } else {
                    this.setState({
                        loading: false
                    })
                    message.error(res.msg)
                }
            })
        } else {
            this.setState({
                loading: false
            })
            message.error('原因不能为空!')
        }
    }

    // 清除HTML标签
    removeHTMLTag = (str) => {
        str = str.replace(/<\/?[^>]*>/g, '') // 去除HTML tag
        str = str.replace(/[ | ]*\n/g, '\n') // 去除行尾空白
        // str = str.replace(/\n[\s| | ]*\r/g,'\n') // 去除多余空行
        str = str.replace(/ /ig, '') // 去掉
        return str
    }

    // 埋点数据收集——上报人工驳回
    dataGather2 = (id, reason, time) => {
        const {dispatch} = this.props
        dispatch(getArticleItemInfo({'id': id}, (data) => {
            let params = {
                event_type: 'COMMIT_ANTI_REJECT',
                event_info: {
                    'title': data.title,
                    'content': this.removeHTMLTag(data.content),
                    'reason': reason
                },
                timestamp: time
            }
            axiosAjax('post', `/passport/account/recommend/gather`, {data: JSON.stringify(params)})
        }))
    }

    // 置顶
    _isTop (item) {
        const {dispatch} = this.props
        let sendData = {
            // 'appId': $.cookie('gameId'),
            'id': item.id,
            'recommend': item.recommend === 1 ? 0 : 1
        }
        axiosAjax('post', '/news/recommend', sendData, (res) => {
            if (res.code === 1) {
                this.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
                message.success('操作成功!')
            } else {
                message.error(res.msg)
            }
        })
    }

    // 推至头条
    homeShow (item) {
        const {dispatch} = this.props
        const This = this
        let sendData = {
            'id': item.id,
            'recCreaterType': item.recCreaterType === 1 ? 0 : 1
        }
        confirm({
            title: '提示',
            content: `确认要${item.recCreaterType === 1 ? '从头条撤回(置顶会被取消)' : '推至头条'}吗 ?`,
            onOk () {
                axiosAjax('post', '/news/column/recommend', sendData, (res) => {
                    if (res.code === 1) {
                        This.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                        message.success('操作成功!')
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 筛选文章状态
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

    // 筛选新闻类别
    handleChange2 = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({'channelId': value}))
        this.doSearch('init', {'currentPage': 1, channelId: value})
    }

    // 筛选机器筛选类别
    handleChange3 = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({'machineAuditStatus': value}))
        this.doSearch('init', {'currentPage': 1, machineAuditStatus: value})
    }

    render () {
        const { list, pageData, filter, search, dispatch, selectedData, form } = this.props
        const { getFieldDecorator } = form
        return <div className="article-index">
            <Row>
                <Col style={{margin: '0 0 20px'}}>
                    <span>文章来源：</span>
                    <span>Marsbit专栏</span>
                </Col>
                <Col>
                    <span>文章状态：</span>
                    <Select defaultValue={`${filter.status}`} style={{ width: 120, marginBottom: 10 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        <Option value="4">审核中</Option>
                        <Option value="1">审核通过</Option>
                        <Option value="2">审核驳回</Option>
                        <Option value="3">定时发表</Option>
                    </Select>
                    <div style={{display: `${parseInt(filter.status) === 4 ? 'inline-block' : 'none'}`}} className="machineOption">
                        <span style={{marginLeft: 15}}>智能审核：</span>
                        <Select defaultValue={`${filter.machineAuditStatus}`} style={{ width: 120 }} onChange={this.handleChange3}>
                            <Option value="">全部</Option>
                            <Option value="0">未机审</Option>
                            <Option value="1">机审通过</Option>
                            <Option value="2">机审驳回</Option>
                        </Select>
                    </div>
                    <span style={{marginLeft: 15}}>推荐：</span>
                    <Select defaultValue={`${filter.recommend}`} style={{ width: 120 }} onChange={this.handleChange1}>
                        <Option value="">全部</Option>
                        <Option value="0">未推荐</Option>
                        <Option value="1">推荐</Option>
                    </Select>
                    <span style={{marginLeft: 15}}>新闻类别：</span>
                    <Select defaultValue={`${filter.channelId}`} style={{ width: 120 }} onChange={this.handleChange2}>
                        <Option value="">全部</Option>
                        {this.props.channelList.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>)}
                    </Select>
                </Col>
                <Col>
                    <span>新闻标题: </span>
                    <Input
                        value={search.title}
                        style={{width: 180, marginRight: 15}}
                        onChange={(e) => dispatch(setSearchQuery({title: e.target.value}))}
                        placeholder="请输入新闻标题"
                        onPressEnter={() => { this._search() }}
                    />
                    <span>作者名: </span>
                    <Input
                        value={search.authorName}
                        style={{width: 165, marginRight: 15}}
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
            <Modal
                title="审核驳回"
                visible={this.state.doRejectShow}
                onOk={this.doRejectDo}
                onCancel={() => {
                    this.setState({doRejectShow: false})
                }}
            >
                <div className="modal-input-reject">
                    <span style={{marginRight: 10}}>请{parseInt(this.state.rejectSelectVal) === 4 ? '填写' : '选择'}文章不通过原因：{this.state.reason || ''}</span>
                    <Select value={this.state.rejectSelectVal} style={{ width: 280 }} onChange={this.doRejectSelect}>
                        {reasonArr.map(function (item, index) {
                            return <Option value={`${index}`} key={index}>{item}</Option>
                        })}
                    </Select>
                    <TextArea style={{display: parseInt(this.state.rejectSelectVal) === 4 ? 'block' : 'none'}} rows={3} autoFocus onChange={(e) => { this.getReason(e) }}/>
                </div>
            </Modal>
            <Modal
                title="用户拉黑"
                visible={this.state.doBlackShow}
                onOk={this.doBloacktDo}
                onCancel={() => {
                    this.setState({doBlackShow: false})
                }}
            >
                <div className="modal-input-reject">
                    <span style={{marginRight: 10}}>请{parseInt(this.state.blackSelectVal) === 3 ? '填写' : '选择'}用户被拉黑原因：{this.state.reason || ''}</span>
                    <Select value={this.state.blackSelectVal} style={{ width: 280 }} onChange={this.doBlackSelect}>
                        {blackreasonArr.map(function (item, index) {
                            return <Option value={`${index}`} key={index}>{item}</Option>
                        })}
                    </Select>
                    <TextArea style={{display: parseInt(this.state.blackSelectVal) === 3 ? 'block' : 'none'}} rows={3} autoFocus onChange={(e) => { this.getReason(e) }}/>
                </div>
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        articleAudit: state.articleAudit,
        list: state.articleAudit.list,
        search: state.articleAudit.search,
        filter: state.articleAudit.filter,
        pageData: state.articleAudit.pageData,
        selectedData: state.postInfo.selectedData,
        channelList: state.channelListInfo
    }
}

export default connect(mapStateToProps)(Form.create()(ArticleAuditIndex))
