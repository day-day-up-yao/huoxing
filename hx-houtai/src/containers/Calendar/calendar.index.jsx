/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Modal, message, Spin, Button, Input, Form } from 'antd'
import './calendar.scss'
import { Link, hashHistory } from 'react-router'
import {getCalendarLists} from '../../actions/calendarChance/calendar.action'
import {formatDate, axiosAjax, cutString, getContent} from '../../public/index'
const confirm = Modal.confirm
let columns = []
class CalendarIndex extends Component {
    constructor () {
        super()
        this.state = {
            visible: false,
            loading: true,
            searchVal: ''
        }
    }

    componentWillMount () {
        this.getCalendarListFn(1)
        columns = [{
            title: '日历标题',
            key: 'title',
            width: 250,
            render: (text, record) => {
                return <div className="flash-info clearfix">
                    <div>
                        <h3>{record.title}</h3>
                    </div>
                </div>
            }
        }, {
            title: '日历内容',
            key: 'content',
            render: (text, record) => (<div className="flash-info clearfix">
                <div>
                    <h3 title={getContent(record.content)} dangerouslySetInnerHTML={this.createMarkup(cutString(getContent(record.content), 300))} />
                </div>
            </div>)
        }, {
            title: '关联标签',
            dataIndex: 'tagsV2',
            width: 200,
            key: 'tagsV2',
            render: tags => (
                <p>
                    {tags === '' ? [] : JSON.parse(tags).map(tag => {
                        return (
                            <span style={{'marginLeft': '10px'}} key={tag.id}>{tag.name}</span>
                        )
                    })}
                </p>
            )
        }, {
            title: '重要程度',
            dataIndex: 'star',
            width: 70,
            key: 'star',
            render: (record) => <p>{record}</p>
        }, {
            title: '发表时间',
            width: 80,
            key: 'publishTime',
            render: (record) => <div style={{textAlign: 'center'}} dangerouslySetInnerHTML={this.createMarkup(formatDate(record.publishTime * 1000, '-', true))}/>
        }, {
            title: '操作',
            key: 'action',
            width: 70,
            render: (item) => (<div className="btns">
                <p>
                    <Link className="mr10 opt-btn" onClick={() => { this.setEditorCookies(item) }} to={{pathname: '/cc-calendarAdd', query: {id: item.id}}} style={{background: '#e35ba3'}}>编辑</Link>
                </p>
                <p>
                    <a onClick={() => this.delCalendar(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                </p>
            </div>)
        }]
    }

    getCalendarListFn (page) {
        const {dispatch} = this.props
        let sendData = {
            'pageSize': 20,
            'currentPage': page,
            'search': this.state.searchVal
        }
        dispatch(getCalendarLists({...sendData}, () => {
            this.setState({
                loading: false
            })
        }))
    }

    createMarkup (str) { return {__html: str} }

    changePage (page) {
        const {dispatch} = this.props
        this.setState({
            loading: true
        })
        dispatch(getCalendarLists({'currentPage': page}, () => {
            this.setState({
                loading: false
            })
        }))
    }
    searchValue (e) {
        let val = e.target.value
        this.setState({
            searchVal: val
        })
    }
    // 删除
    delCalendar (item) {
        const {dispatch, pageData} = this.props
        const This = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id,
                    status: -1
                }
                axiosAjax('POST', '/calendar/delete', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        dispatch(getCalendarLists({'currentPage': pageData.currPage}, () => {
                            This.setState({
                                loading: false
                            })
                        }))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 设置编辑列的cookies 更换为sessionStorage
    setEditorCookies (obj) {
        for (let key in obj) {
            window.sessionStorage.setItem('hx_calendar_' + key, obj[key])
        }
    }

    render () {
        const {calendarList, pageData} = this.props
        return <div className="flash-index">
            <span style={{marginLeft: 15}}>日历标题/内容：</span>
            <Input
                onPressEnter={() => { this.getCalendarListFn(1) }}
                style={{width: 150, marginRight: 15}}
                onChange={(e) => { this.searchValue(e) }}
                placeholder="请输入要搜索的内容"
            />
            <Button type="primary" style={{marginRight: 15}} onClick={() => { this.getCalendarListFn(1) }}>搜索</Button>
            <Button type="primary" onClick={() => { hashHistory.push('/cc-calendarAdd') }}>新增日历</Button>
            <div style={{marginTop: 15}}>
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={calendarList.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        calendarList: state.calendarInfo.calendarList,
        pageData: state.chanceInfo.pageData
    }
}

export default connect(mapStateToProps)(Form.create()(CalendarIndex))
