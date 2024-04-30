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
import {getChanceLists} from '../../actions/calendarChance/chance.action'
import {formatDate, axiosAjax} from '../../public/index'
import Cookies from 'js-cookie'
const confirm = Modal.confirm
let columns = []
class ChanceLists extends Component {
    constructor () {
        super()
        this.state = {
            visible: false,
            loading: true,
            searchVal: ''
        }
    }

    componentWillMount () {
        this.getChanceListFn(1)
        columns = [{
            title: '机会标题',
            key: 'title',
            width: 300,
            render: (text, record) => {
                return <div className="flash-info clearfix">
                    <div>
                        <h3>{record.title}</h3>
                    </div>
                </div>
            }
        }, {
            title: '关联标签',
            key: 'tagsV2',
            width: 200,
            dataIndex: 'tagsV2',
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
            title: '图片',
            dataIndex: 'bgPicUrl',
            width: 100,
            render: (text, record) => <img src={record.bgPicUrl} alt=""/>
        }, {
            title: '发表时间',
            width: 80,
            key: 'publishTime',
            render: (record) => <div style={{textAlign: 'center'}} dangerouslySetInnerHTML={this.createMarkup(formatDate(record.publishTime * 1000, '-', true))}/>
        }, {
            title: '操作',
            key: 'action',
            width: 70,
            render: (record) => (<div className="btns">
                <p>
                    <Link className="mr10 opt-btn" onClick={() => { this.setEditorCookies(record) }} to={{pathname: '/cc-chanceAdd', query: {id: record.id}}} style={{background: '#e35ba3'}}>编辑</Link>
                </p>
                <p>
                    <a onClick={() => this.delChance(record)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                </p>
            </div>)
        }]
    }

    createMarkup (str) { return {__html: str} }

    // 删除
    delChance (item) {
        const {dispatch, pageData} = this.props
        const This = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id
                }
                axiosAjax('POST', '/chance/delete', {...sendData}, (res) => {
                    if (res.code === 1) {
                        This.setState({
                            loading: true
                        })
                        message.success('删除成功')
                        dispatch(getChanceLists({'currentPage': pageData.currPage}, () => {
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
    // 分页
    changePage (page) {
        const {dispatch} = this.props
        this.setState({
            loading: true
        })
        dispatch(getChanceLists({'currentPage': page}, () => {
            this.setState({
                loading: false
            })
        }))
    }

    getChanceListFn (page) {
        const {dispatch} = this.props
        let sendData = {
            'pageSize': 20,
            'currentPage': page,
            'search': this.state.searchVal
        }
        dispatch(getChanceLists({...sendData}, () => {
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

    // 设置编辑列的cookies
    setEditorCookies (obj) {
        for (let key in obj) {
            Cookies.set('hx_chance_' + key, obj[key])
        }
    }

    render () {
        const {chanceList, pageData} = this.props
        return <div className="flash-index">
            <span style={{marginLeft: 15}}>机会标题/内容：</span>
            <Input
                onPressEnter={() => { this.getChanceListFn(1) }}
                style={{width: 150, marginRight: 15}}
                onChange={(e) => { this.searchValue(e) }}
                placeholder="请输入要搜索的内容"
            />
            <Button type="primary" style={{marginRight: 15}} onClick={() => { this.getChanceListFn(1) }}>搜索</Button>
            <Button type="primary" onClick={() => { hashHistory.push('/cc-chanceAdd') }}>新增机会</Button>
            <div style={{marginTop: 15}}>
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={chanceList.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        chanceList: state.chanceInfo.chanceList,
        pageData: state.chanceInfo.pageData
    }
}

export default connect(mapStateToProps)(Form.create()(ChanceLists))
