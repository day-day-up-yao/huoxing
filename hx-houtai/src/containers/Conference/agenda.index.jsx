import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { getAgendaList } from '../../actions/conference/agenda.action' // , setFilterData, setPageData, setSearchQuery
import { Form, Spin, Table, Select, Button, Row, Col } from 'antd'
import { getConferenceList } from '../../actions/index'

const Option = Select.Option

class AgendaIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: false,
            filter: ''
        }
    }

    componentWillMount () {
        const { dispatch, filter } = this.props
        dispatch(getConferenceList())
        this.doSearch('init', { ...filter })
    }
    doSearch (type, data) {
        const { dispatch, pageData, filter, conferenceList } = this.props
        console.log('过滤数据:' + JSON.stringify(conferenceList))
        let sendData = {
            ...filter,
            pageSize: 20,
            currentPage: pageData.currPage,
            conferenceId: 1,
            agendaDate: 1
        }
        this.setState({
            loading: true
        })
        sendData = { ...sendData, ...data }
        console.log(sendData)
        dispatch(getAgendaList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    handleChange () {
        //
    }
    render () {
        const columns = [{
            title: '主题',
            width: 220,
            key: 'titleEN',
            render: (text, record) => (record && <div>{record.titleEN}/{ record.titleZHCN}</div>)
        }, {
            title: '演讲时间',
            width: 220,
            key: 'speakTime',
            render: (text, record) => (record && <div>{record.speakTime}</div>)
        }]
        const { conferenceList, list, pageData } = this.props
        console.log('最后拿到的数据:' + JSON.stringify(conferenceList))
        return <div className="conference-index">
            <Row>
                <Col>
                    <span>大会：</span>
                    <Select defaultValue="全部" style={{ width: 140, marginRight: 20 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        {this.props.conferenceList.map((item, index) => <Option key={item.id} value={String(item.id)}>{item.label}</Option>)}
                    </Select>
                    <span style={{marginRight: 15}}>日期：</span>
                    <Select style={{ width: 100, marginRight: 10 }}>
                        <Option value="111">哈哈哈</Option>
                    </Select>
                    <Button type="primary" onClick={ () => hashHistory.push('/agender-send')}>新 增</Button>
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
        agendaInfo: state.agendaInfo,
        list: state.agendaInfo.list,
        search: state.agendaInfo.search,
        filter: state.agendaInfo.filter,
        pageData: state.agendaInfo.pageData,
        selectedData: state.agendaInfo.selectedData,
        conferenceList: state.conferenceInfo
    }
}
export default connect(mapStateToProps)(Form.create()(AgendaIndex))
