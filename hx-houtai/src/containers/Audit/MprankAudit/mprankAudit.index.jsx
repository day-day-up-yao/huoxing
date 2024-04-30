/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Modal, message, Spin, Select, Form } from 'antd'
import './mprankAudit.scss'
import {getMpRankList, getMpRankType} from '../../../actions/mpRank/mpRank.action'
import {formatTime, axiosAjax, cutString, channelIdOptions} from '../../../public/index'
const confirm = Modal.confirm
const Option = Select.Option
let columns = []
let optionsTwo = ''
class MprankIndexList extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            firstType: null,
            secondType: null
        }
    }

    // 获取列表
    getMprankList = (firstType, secondType, page) => {
        const { dispatch } = this.props
        let This = this
        dispatch(getMpRankList({
            firstType: firstType,
            secondType: secondType,
            page: page,
            pageSize: 20
        }, () => {
            This.setState({
                loading: false
            })
        }))
    }

    // 删除
    delRankAudit = (item) => {
        const _this = this
        console.log(item)
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                _this.setState({
                    loading: true
                })
                let sendData = {
                    rankId: item.rankId
                }
                axiosAjax('POST', '/rank/delete', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.getMprankList(1, _this.state.firstType, _this.state.secondType)
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(getMpRankType())
        this.getMprankList(null, null, 1)
    }

    componentDidMount () {
        columns = [{
            title: '榜单名称',
            key: 'name',
            width: 450,
            render: (text, record) => (
                <div>
                    <h4 title={record.name} dangerouslySetInnerHTML={this.createMarkup(cutString(record.name, 30))} />
                </div>
            )
        }, {
            title: '一级分别',
            key: 'firstTypeName',
            width: 150,
            render: (record) => (
                <div>{record.firstTypeName}</div>
            )
        }, {
            title: '二级分别',
            key: 'secondTypeName',
            width: 150,
            render: (record) => (
                <div>{record.secondTypeName}</div>
            )
        }, {
            title: '时间',
            key: 'rankMonth',
            width: 140,
            render: (record) => (record && formatTime(record.rankMonth, 'yyyy-MM'))
        }, {
            title: '操作',
            key: 'id',
            width: 150,
            render: (record) => (
                <div>
                    <a href={`/#/audit-mprankAdd?id=${record.rankId}`} className="mr10 opt-btn" style={{background: '#2e55a3'}}>编辑</a>
                    <a onClick={() => this.delRankAudit(record)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                </div>
            )
        }]
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

    createMarkup (str) { return {__html: str} }

    changePage (page) {
        this.setState({
            loading: true
        })
        this.getMprankList(this.state.firstType, this.state.secondType, page)
    }

    // 榜单类别
    channelChangeOne = (value) => {
        let val = value === 'null' ? null : value
        this.setState({
            firstType: val
        })
        let twoType = []
        for (let key in this.props.rankType[value]) {
            twoType.push(this.props.rankType[value][key])
        }
        optionsTwo = twoType.map(d => {
            return <Option value={d.typeId.toString()} key={d.typeId}>{d.typeName}</Option>
        })
        this.getMprankList(val, null, 1)
    }
    channelChangeTwo = (value) => {
        let val = value === 'null' ? null : value
        this.setState({
            secondType: val
        })
        this.getMprankList(this.state.firstType, val, 1)
    }

    render () {
        const {list, rankType} = this.props
        let oneType = []
        for (let key in rankType[0]) {
            oneType.push(rankType[0][key])
        }
        const options = oneType.map((d, i) => {
            return <Option value={d.typeId.toString()} key={i}>{d.typeName}</Option>
        })
        return <div className="videoAudit-index">
            <Row>
                <Col>
                    <span>榜单类别：</span>
                    <Select defaultValue={'null'} style={{ width: 100 }} d onChange={this.channelChangeOne}>
                        <Option value='null'>全部</Option>
                        {options}
                    </Select>
                    <span style={{marginLeft: 15}}></span>
                    <Select style={{ width: 100 }} defaultValue={'null'} onChange={this.channelChangeTwo}>
                        <Option value='null'>全部</Option>
                        {optionsTwo}
                    </Select>
                    <span style={{marginLeft: 100}}>
                        <a className="mr10 opt-btn" href='/#/audit-mprankAdd' style={{background: '#108ee9', width: '70px', height: '26px', lineHeight: '23px', textAlign: 'center'}}>新增榜单</a>
                    </span>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.inforList.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: list.currentPage, total: list.recordCount, pageSize: list.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.mpRankInfo.rankData,
        rankType: state.mpRankInfo.rankType
    }
}

export default connect(mapStateToProps)(Form.create()(MprankIndexList))
