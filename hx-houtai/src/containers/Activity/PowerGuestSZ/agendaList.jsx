import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Row, Col, Modal, message, Spin, Button, Select} from 'antd'
import CollectionCreateForm from './ModalForm/agendaList'
import './index.scss'
import {
    getAgendaList,
    getAgendaListType
} from '../../../actions/activity/powerSZ/guestList.action'
import {axiosAjax} from '../../../public/index'
const {Option} = Select
const confirm = Modal.confirm
let columns = []

class PowerAgendaList extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            dateType: '',
            agendaType: '',
            data: {
                visible: false,
                holdingTime: '',
                holdingDate: '',
                id: '',
                hallId: '',
                hallName: '',
                agendaTheme: '',
                guestIntroduce: '',
                agendaSeq: ''
            },
            previewVisible: false,
            previewImage: '',
            order: 1,
            confirmLoading: false
        }
    }

    componentWillMount () {
        this.doSearch('', '')
        const {dispatch} = this.props
        dispatch(getAgendaListType({
            pageSize: 40,
            currentPage: 1
        }, () => {
            this.setState({
                loading: false
            })
        }))

        columns = [{
            title: '论坛',
            key: 'hallName',
            render: (record) => (<p>{record.hallName}</p>)
        }, {
            title: '时间',
            key: 'holdingDate',
            render: (record) => {
                return <p>{record.holdingDate}</p>
            }
        }, {
            title: '时段',
            key: 'holdingTime',
            render: (record) => {
                if (!record.holdingTime) {
                    return '无'
                } else {
                    return <h4 title={record.holdingTime}>{record.holdingTime}</h4>
                }
            }
        }, {
            title: '权重',
            key: 'agendaSeq',
            render: (record) => {
                return <p>{record.agendaSeq}</p>
            }
        }, {
            title: '主题与活动',
            key: 'agendaTheme',
            width: 350,
            render: (record) => (<p>{record.agendaTheme}</p>)
        }, {
            title: '嘉宾',
            key: 'guestIntroduce',
            width: 250,
            render: (record) => {
                let br = <br></br>
                let result = ''
                let cc = record.guestIntroduce.split(',')
                for (let i = 0; i < cc.length; i++) {
                    if (i === 0) {
                        result = cc[i]
                    } else {
                        result = <span>{result}{br}{cc[i]}</span>
                    }
                }
                return result
            }
        }, {
            title: '操作',
            key: 'action',
            render: (item) => {
                return <div>
                    <p>
                        <a onClick={() => {
                            this.handleCompile(item)
                        }} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#108ee9'}}>编辑</a>
                    </p>
                    <p style={{marginTop: 10}}>
                        <a onClick={() => this.delIco(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                    </p>
                </div>
            }
        }]
    }

    createMarkup (str) {
        return {__html: str}
    }

    getOrderNum = (value) => {
        this.setState({
            order: value
        })
    }

    // 列表请求
    doSearch (tiem, date, page) {
        this.setState({
            loading: true
        })
        const {dispatch} = this.props
        let sendData = {
            hallId: tiem,
            holdingDate: date,
            pageSize: 20,
            currentPage: page || 1
        }
        dispatch(getAgendaList(sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }

    // 改变页数
    changePage (page) {
        this.setState({
            loading: true
        })
        let dateType = this.state.dateType
        let agendaType = this.state.agendaType

        this.doSearch(agendaType, dateType, page)
    }

    showModal = () => {
        this.setState({
            data: {
                visible: true
            }
        })
    }

    // 取消
    handleCancel = () => {
        this.setState({
            data: {
                visible: false
            }
        })
    }

    // 删除
    delIco (item) {
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id
                }
                axiosAjax('POST', '/power6/deleteAgenda', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.doSearch()
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 筛选时间状态
    handleChangeDate = (value) => {
        this.setState({
            dateType: value
        })
        let agendaType = this.state.agendaType
        this.doSearch(agendaType, value)
    }

    // 筛选类型状态
    handleChangeType = (value) => {
        this.setState({
            agendaType: value
        })
        let dateType = this.state.dateType
        this.doSearch(value, dateType)
    }

    handleImgModalCancel = () => this.setState({previewVisible: false})

    handlePreview = (e) => {
        this.setState({
            previewImage: e.target.getAttribute('src'),
            previewVisible: true
        })
    }

    // 编辑
    handleCompile = (item) => {
        this.setState({
            data: {
                visible: true,
                holdingTime: item.holdingTime,
                holdingDate: item.holdingDate,
                id: item.id,
                hallId: item.hallId,
                hallName: item.hallName,
                agendaTheme: item.agendaTheme,
                guestIntroduce: item.guestIntroduce,
                agendaSeq: item.agendaSeq
            }
        })
    }

    render () {
        const {agendaList, pageData, agendaListType} = this.props
        return <div className="powerGuest-index">
            <Row>
                <Col>
                    <span>日期：</span>
                    <Select defaultValue='' style={{width: 120, marginRight: 15}} onChange={this.handleChangeDate}>
                        <Option value="">全部</Option>
                        <Option value="9月28日">9月28日</Option>
                        <Option value="9月29日">9月29日</Option>
                    </Select>
                    <span>会场：</span>
                    <Select defaultValue='' style={{width: 120, marginRight: 15}} onChange={this.handleChangeType}>
                        <Option value="">全部</Option>
                        {
                            agendaListType.map((item) => <Option value={`${item.id}`} key={item.id}>{item.hallName}</Option>)
                        }
                    </Select>
                    <Button type="primary" onClick={this.showModal}>新增议程</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table
                        dataSource={agendaList.map((item, index) => ({...item, key: index}))}
                        columns={columns}
                        bordered
                        pagination={{
                            current: pageData.page,
                            total: pageData.recordCount,
                            pageSize: pageData.pageSize,
                            onChange: (page) => this.changePage(page)
                        }}
                    />
                </Spin>
            </div>
            <Modal className="pre-Modal" visible={this.state.previewVisible} footer={null} onCancel={this.handleImgModalCancel}>
                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
            </Modal>
            {this.state.data.visible && <CollectionCreateForm
                loading={this.state.confirmLoading}
                visible={this.state.data.visible}
                onCancel={this.handleCancel}
                data={this.state.data}
                agendaListType={agendaListType}
            />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        agendaList: state.powerSZAgendaList.agendaList,
        agendaListType: state.powerSZAgendaList.agendaListType,
        pageData: state.powerSZAgendaList.pageData
    }
}

export default connect(mapStateToProps)(PowerAgendaList)
