import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Row, Col, Modal, message, Spin, Button, Input} from 'antd'
import CollectionCreateForm from './ModalForm/prizeList'
import './index.scss'
import {
    getPrizeList
} from '../../../actions/activity/powerZH/guestList.action'
import {axiosAjax} from '../../../public/index'
const confirm = Modal.confirm
let columns = []

class PowerPrizeList extends Component {
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
            searchVal: '',
            previewVisible: false,
            previewImage: '',
            order: 1,
            confirmLoading: false
        }
    }

    componentWillMount () {
        this.doSearch(1, '')
        columns = [{
            title: '揭晓时间',
            key: 'awardTime',
            render: (record) => {
                if (!record.awardTime) {
                    return '无'
                } else {
                    return <p>{record.awardTime}</p>
                }
            }
        }, {
            title: '奖项名称',
            key: 'awardName',
            render: (record) => {
                return <p>{record.awardName}</p>
            }
        }, {
            title: '获奖人员 ',
            key: 'winner',
            width: 600,
            render: (record) => (<p>{record.winner}</p>)
        }, {
            title: '排序',
            key: 'awardSeq',
            render: (record) => {
                return <p>{record.awardSeq}</p>
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
    doSearch (page, search) {
        this.setState({
            loading: true
        })
        const {dispatch} = this.props
        let sendData = {
            pageSize: 20,
            currentPage: page || 1,
            search: search
        }
        dispatch(getPrizeList(sendData, () => {
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

        this.doSearch(page, '')
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
                axiosAjax('POST', '/power2/deleteAgenda', {...sendData}, (res) => {
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

    handleImgModalCancel = () => this.setState({previewVisible: false})

    handlePreview = (e) => {
        this.setState({
            previewImage: e.target.getAttribute('src'),
            previewVisible: true
        })
    }

    onChangeVal = (e) => {
        let val = e.target.value
        this.setState({
            searchVal: val
        })
    }
    onSearchVal = () => {
        this.doSearch(1, this.state.searchVal)
    }

    // 编辑
    handleCompile = (item) => {
        this.setState({
            data: {
                visible: true,
                awardName: item.awardName,
                awardTime: item.awardTime,
                id: item.id,
                winner: item.winner,
                awardSeq: item.awardSeq
            }
        })
    }

    render () {
        const {prizeList, pageData} = this.props
        return <div className="powerGuest-index">
            <Row>
                <Col>
                    <span>搜索：</span>
                    <Input onChange={this.onChangeVal} style={{width: 250, marginRight: 15}}/>
                    <Button type="primary" onClick={this.onSearchVal} style={{marginRight: 100}}>确定</Button>
                    <Button type="primary" onClick={this.showModal}>添加奖项</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table
                        dataSource={prizeList.map((item, index) => ({...item, key: index}))}
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
            />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        prizeList: state.powerZHPrizeList.prizeList,
        pageData: state.powerZHAgendaList.pageData
    }
}

export default connect(mapStateToProps)(PowerPrizeList)
