/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Input, Row, Col, Button, Table, Modal, message } from 'antd'
import { Table, Row, Col, Modal, message, Spin, Select, Input, Button, Form } from 'antd'
import './index.scss'
import { Link, hashHistory } from 'react-router'
// import IconItem from '../../components/icon/icon'
import {getCourseList, setSearchQuery, setPageData, setFilterData, editCourseList, selectedData} from '../../../actions/college/course.action'
// import {getLecturerList} from '../../../actions/college/lecturer.action'
import {formatDate, axiosAjax, cutString} from '../../../public/index'
import moment from 'moment'
// import Cookies from 'js-cookie'
const confirm = Modal.confirm
const Option = Select.Option
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
class CourseIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            newsStatus: null,
            courseId: ''
        }
    }

    channelName (id) {
        let name = ''
        this.props.lecturerList.map((item, index) => {
            if (parseInt(item.lecturerId) === id) {
                name = item.name
            }
        })
        return name
    }

    componentWillMount () {
        const {search, filter} = this.props
        // dispatch(getLecturerList('init', {pageSize: 1000, currentPage: 1}))
        this.doSearch('init', {...filter, title: search.title})
        let optionCol = [{
            title: '推荐',
            key: 'option',
            width: 110,
            render: (item) => (<div className="btns">
                <p>
                    <a className={`mr10 recommend-btn opt-btn ${item.status === -1 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this.isRecommend(item)} disabled={item.status === -1 && true}>
                        {item.recommend === 1 ? '取消推荐' : '推荐到轮播'}
                    </a>
                </p>
                {/*
                <p>
                    {parseInt(item.topOrder) ? <a
                        className="mr10 opt-btn"
                        href="javascript:void(0)"
                        style={{background: '#ff4f3e'}}
                        onClick={() => this.cancelTop(item.id)}
                    >取消置顶</a> : <a
                        className={`mr10 top-btn opt-btn ${item.status !== 1 ? 'disabled' : ''}`}
                        disabled={item.status !== 1 && true}
                        href="javascript:void(0)"
                        onClick={() => this.showToTopModal(item.id, item)}
                    >置顶</a>}
                </p>
                {parseInt(item.topOrder) ? <p><a
                    className={`mr10 top-btn opt-btn ${item.status !== 1 ? 'disabled' : ''}`}
                    disabled={item.status !== 1 && true}
                    href="javascript:void(0)"
                    onClick={() => this.showToTopModal(item.id, item)}
                >修改置顶位</a></p> : ''}
                */}
            </div>)
        }, {
            title: '操作',
            key: 'action',
            width: 130,
            render: (item) => {
                return <div className="btns">
                    {/*
                    <p>
                        <Link className="mr10 opt-btn" to={{pathname: '/college-courseDetail', query: {id: item.id}}} style={{background: '#108ee9'}}>详情</Link>
                    </p>

                     <p>
                     <a onClick={() => this.delCourse(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                     </p>
                    */}
                    <p>
                        <Link className="mr10 opt-btn" to={{pathname: '/college-courseSend', query: {id: item.resourceId}}} style={{background: '#e35ba3'}}>编辑</Link>
                    </p>
                    <p>
                        <a disabled={item.status !== 1 && item.status !== 0} className="mr10 opt-btn" href="javascript:void(0)" onClick={() => this._isPublish(item)} style={{background: '#00a854'}}>
                            {(() => {
                                if (item.status === 1 || item.status === 2) {
                                    return '下架'
                                } else if (item.status === -1) {
                                    return '上架'
                                } else {
                                    return '不可操作'
                                }
                            })()}
                        </a>
                    </p>
                    <p>
                        <Link className="mr10 opt-btn" to={{pathname: '/college-chapterList', query: {id: item.resourceId}}} style={{background: '#58b1ea'}}>章节列表</Link>
                    </p>
                </div>
            }
        }]
        let basicCol = [{
            title: '标题',
            width: 200,
            key: 'name',
            render: (text, record) => (record && <div className="course-info clearfix">
                <div>
                    <h4 title={record.title} dangerouslySetInnerHTML={this.createMarkup(cutString(record.title, 50))} />
                    {!parseInt(record.recommend) ? '' : <div style={{'display': 'inline-block', verticalAlign: 'middle'}}><span className="org-bg mr10">推荐</span></div>}
                    {record.mark !== 1 ? '' : <span className="green-bg mr10">精品</span>}
                    {!record.topOrder || parseInt(record.topOrder) === 0 ? '' : <div style={{'display': 'inline-block', verticalAlign: 'middle'}} className="news-top clearfix">
                        <span className="top-bg">置顶({record.topOrder})</span>
                    </div>}
                    {record.resType && parseInt(record.resType) === 1
                        ? <span style={{background: '#6ac3ea'}} className="mr10">音频</span>
                        : <span style={{background: '#4382ea'}} className="mr10">视频</span>
                    }
                </div>
            </div>)
        }, {
            title: '状态',
            key: 'status',
            width: 80,
            render: (record) => {
                if (record && record.status === 2) {
                    return <span className="course-status recommend-btn">推荐</span>
                } else if (record && record.status === 1) {
                    return <span className="course-status">上架</span>
                } else if (record && record.status === -1) {
                    return <span className="course-status pre-publish">下架</span>
                } else {
                    return <span className="course-status will-publish">暂无</span>
                }
            }
        }, {
            title: '讲师',
            width: 80,
            dataIndex: 'lecturer',
            key: 'lecturer'
        }, {
            title: '课程信息',
            key: 'message',
            width: 100,
            render: (record) => {
                return <div className="message">
                    <p>售价：{record.money} 元</p>
                    <p>时长：{!record.duration ? '0 秒' : `${parseInt(record.duration / 60)} 分 ${record.duration % 60} 秒` }</p>
                    <p>章节数：{record.chapterNums}</p>
                    <p>已售数：{record.buyNums}</p>
                </div>
            }
        }, {
            title: '简介',
            key: 'brief',
            width: 220,
            render: (record) => <h4 title={record.brief} dangerouslySetInnerHTML={this.createMarkup(cutString(record.brief, 80))} />
        }, {
            title: '创建时间',
            key: 'createTime',
            width: 80,
            render: (record) => <div style={{textAlign: 'center'}} dangerouslySetInnerHTML={this.createMarkup(formatDate(record.createTime, '-', true))} />
        }]
        columns = [...basicCol, ...optionCol]
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'nickName': ''}))
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
    }
    createMarkup (str) { return {__html: str} }

    // 取消置顶
    cancelTop (id) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要取消置顶吗 ?`,
            onOk () {
                let sendData = {
                    id: id,
                    topOrder: 0
                }
                axiosAjax('POST', '/course/settoporder', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('取消置顶成功')
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 活动置顶
    showToTopModal (id, item) {
        const {dispatch} = this.props
        this.setState({
            courseId: id,
            topIsShow: true
        })
        dispatch(selectedData(item))
    }

    setNewsTop () {
        const form = this.props.form
        const _this = this
        form.validateFields((err, values) => {
            if (err) {
                return
            }
            this.setState({ topIsShow: false })
            axiosAjax('post', '/course/settoporder', {
                'id': this.state.courseId,
                'topOrder': values.order
            }, function (res) {
                if (res.code === 1) {
                    message.success('操作成功！')
                    _this.doSearch('init')
                } else {
                    message.error(res.msg)
                }
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
        dispatch(editCourseList({topOrder: val}, record.key))
    }

    _editTopValue (e, item) {
        // console.log(item)
        // const {dispatch} = this.props
        let val = e.target.value
        // let index = item.key
        let id = item.id
        // editCourseList(data, index)
        if (!val) {
            message.warning('请输入置顶权重值！')
        } else if (!(/^\d+$/.test(val))) {
            message.warning('置顶权重值必须是整数！')
        } else {
            this.newsIsToTop({
                'id': id,
                'topOrder': val
            })
        }
    }

    doSearch (type, data) {
        const {dispatch, pageData, filter} = this.props
        let sendData = {
            ...filter,
            // title: search.title,
            pageSize: 20,
            currentPage: pageData.currPage
        }
        this.setState({
            loading: true
        })
        sendData = {...sendData, ...data}
        dispatch(getCourseList('init', sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    _search () {
        const {dispatch, search} = this.props
        let type = 'init'
        if (!search.nickName && !search.title) {
            type = 'init'
        } else {
            type = 'init'
        }
        this.doSearch(type, {'currentPage': 1})
        dispatch(setSearchQuery({'type': type}))
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
    delCourse (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id,
                    status: -1
                }
                axiosAjax('POST', '/course/status', {...sendData}, (res) => {
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

    // 上下架
    _isPublish (item) {
        const {dispatch} = this.props
        const _this = this
        let status = () => {
            if (item.status === -1) {
                return 1
            } else {
                return -1
            }
        }

        confirm({
            title: '提示',
            content: `确认要${item.status === 1 ? '下架' : '上架'}吗 ?`,
            onOk () {
                _this.setState({
                    loading: true
                })
                let sendData = {
                    resourceId: item.resourceId,
                    status: status()
                }
                axiosAjax('POST', '/college/lesson/update', {...sendData}, (res) => {
                    _this.setState({
                        loading: false
                    })
                    if (res.code === 1) {
                        message.success(`${item.status === 1 ? '下架' : '上架'}成功`)
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 推荐
    isRecommend (item) {
        const This = this
        confirm({
            title: '提示',
            content: `确认要${item.status === 2 ? '撤销推荐（从轮播位撤回）' : '推荐到轮播位'}吗 ?`,
            onOk () {
                This.setState({
                    loading: true
                })
                let sendData = {
                    resourceId: item.resourceId,
                    status: item.status === 2 ? 1 : 2
                }
                axiosAjax('POST', '/college/lesson/update', sendData, (res) => {
                    This.setState({
                        loading: false
                    })
                    if (res.code === 1) {
                        message.success(`操作成功`)
                        This.doSearch('init')
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 筛选活动状态
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

    // 筛选活动类别
    handleChange2 = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({'ingOrEnd': value}))
        this.doSearch('init', {'currentPage': 1, ingOrEnd: value})
    }

    render () {
        const {list, pageData, filter, form, selectedData} = this.props
        const { getFieldDecorator } = form
        return <div className="course-index">
            <Row>
                <Col>
                    <span>未发布/已发布：</span>
                    <Select defaultValue={`${filter.status}`} style={{ width: 100, marginBottom: 10 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        <Option value="1">上架</Option>
                        <Option value="-1">下架</Option>
                        <Option value="2">推荐</Option>
                    </Select>
                    {/*
                    <span style={{marginLeft: 15}}>状态：</span>
                    <Select defaultValue={`${filter.ingOrEnd}`} style={{ width: 100 }} onChange={this.handleChange2}>
                        <Option value="">全部</Option>
                        <Option value="1">进行中</Option>
                        <Option value="2">已结束</Option>
                    </Select>
                    <span style={{marginLeft: 15}}>推荐：</span>
                    <Select defaultValue={`${filter.recommend}`} style={{ width: 100 }} onChange={this.handleChange1}>
                        <Option value="">全部</Option>
                        <Option value="0">未推荐</Option>
                        <Option value="1">推荐</Option>
                    </Select>
                    <span style={{marginLeft: 15}}>城市：</span>
                    <Select defaultValue={`${filter.channelId}`} style={{ width: 100 }} onChange={this.handleChange2}>
                        <Option value="">全部</Option>
                        {this.props.lecturerList.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>)}
                    </Select>
                    <span style={{marginLeft: 15}}>活动标题：</span>
                    <Input
                        value={search.title}
                        style={{width: 150, marginRight: 15}}
                        onChange={(e) => dispatch(setSearchQuery({title: e.target.value}))}
                        placeholder="请输入活动标题"
                        onPressEnter={() => { this._search() }}
                    />
                    <Button type="primary" onClick={() => { this._search() }}>搜索</Button>
                    */}
                    <Button type="primary" style={{margin: '0 0 0 15px'}} onClick={() => { hashHistory.push('/college-courseSend') }}>新增</Button>
                </Col>
            </Row>
            <div className="mt10">
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
                    {/*
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
                     */}
                </Form>
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        courseInfo: state.courseInfo,
        list: state.courseInfo.list,
        search: state.courseInfo.search,
        filter: state.courseInfo.filter,
        pageData: state.courseInfo.pageData,
        selectedData: state.courseInfo.selectedData,
        lecturerList: state.lecturerInfo.list
    }
}

export default connect(mapStateToProps)(Form.create()(CourseIndex))
