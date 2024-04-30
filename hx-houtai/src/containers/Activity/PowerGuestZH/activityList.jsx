import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Row, Col, Modal, message, Spin, Button, Select} from 'antd'
import CollectionCreateForm from './ModalForm/activityList'
import './index.scss'
import {
    getActivityList
} from '../../../actions/activity/powerZH/guestList.action'
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
        this.doSearch('', 1)
        const {dispatch} = this.props
        dispatch(getActivityList({
            pageSize: 40,
            currentPage: 1
        }, () => {
            this.setState({
                loading: false
            })
        }))

        columns = [{
            title: '日期',
            key: 'activityDate',
            render: (record) => {
                return <p>{record.activityDate}</p>
            }
        }, {
            title: '时间',
            key: 'activityTime',
            render: (record) => {
                if (!record.activityTime) {
                    return '无'
                } else {
                    return <h4 title={record.activityTime}>{record.activityTime}</h4>
                }
            }
        }, {
            title: '主题',
            key: 'activityTheme',
            width: 500,
            render: (record) => (<p>{record.activityTheme}</p>)
        }, {
            title: '链接',
            key: 'activityUrl',
            width: 250,
            render: (record) => (<a href={record.activityUrl} target="_blank">点击前往</a>)
        }, {
            title: '权重',
            key: 'id',
            width: 250,
            render: (record) => (<p>{record.activitySeq}</p>)
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
    doSearch (activityDate, page) {
        this.setState({
            loading: true
        })
        const {dispatch} = this.props
        let sendData = {
            activityDate: activityDate,
            pageSize: 20,
            currentPage: page || 1
        }
        dispatch(getActivityList(sendData, () => {
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
        let agendaType = this.state.agendaType

        this.doSearch(agendaType, page)
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
                axiosAjax('POST', '/power3/activity/delete', {...sendData}, (res) => {
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
        this.doSearch(value, 1)
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
                activityDate: item.activityDate,
                activityTime: item.activityTime,
                id: item.id,
                activityTheme: item.activityTheme,
                activityUrl: item.activityUrl,
                activitySeq: item.activitySeq
            }
        })
    }

    render () {
        const {activityList, pageData, agendaListType} = this.props
        return <div className="powerGuest-index">
            <Row>
                <Col>
                    <span>日期：</span>
                    <Select defaultValue='' style={{width: 120, marginRight: 15}} onChange={this.handleChangeDate}>
                        <Option value="">全部</Option>
                        <Option value="12月15日">12月15日</Option>
                        <Option value="12月16日">12月16日</Option>
                        <Option value="12月17日">12月17日</Option>
                    </Select>
                    <Button type="primary" onClick={this.showModal}>新增活动</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table
                        dataSource={activityList.map((item, index) => ({...item, key: index}))}
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
        activityList: state.powerZHActivityList.activityList,
        pageData: state.powerZHAgendaList.pageData
    }
}

export default connect(mapStateToProps)(PowerAgendaList)
