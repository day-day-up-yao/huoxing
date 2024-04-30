import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Row, Col, Modal, message, Spin, Button, Input, Select} from 'antd'
import CollectionCreateForm from './ModalForm/guest'
import './index.scss'
import {
    getGuestList
} from '../../../actions/activity/powerSZ/guestList.action'
import {axiosAjax, cutString} from '../../../public/index'
const {Option} = Select

const confirm = Modal.confirm
let columns = []

class PowerGuest extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            typeVal: '0',
            data: {
                visible: false,
                id: '',
                guestName: '',
                guestCompany: '',
                guestIntroduce: '',
                guestSeq: '',
                guestHeadUrl: '',
                guestType: ''
            },
            searchVal: '',
            imgUrl: '',
            previewVisible: false,
            previewImage: '',
            order: 1,
            confirmLoading: false
        }
    }

    componentWillMount () {
        this.doSearch('', 1, 0)
        columns = [{
            title: '嘉宾名',
            key: 'guestName',
            render: (text, record) => (
                <h4 title={record.guestName} dangerouslySetInnerHTML={this.createMarkup(cutString(record.guestName, 30))}/>
            )
        }, {
            title: '公司',
            key: 'guestCompany',
            render: (record) => {
                if (!record.guestCompany) {
                    return '无'
                } else {
                    return <h4 title={record.guestCompany}>{record.guestCompany}</h4>
                }
            }
        }, {
            title: '头像 ',
            dataIndex: 'guestHeadUrl',
            key: 'guestHeadUrl',
            render: (record) => (<img
                className="shrinkPic"
                key={record}
                src={record}
                onClick={this.handlePreview}
            />)
        }, {
            title: '嘉宾简介',
            key: 'guestIntroduce',
            render: (record) => {
                if (!record.guestIntroduce) {
                    return '无'
                } else {
                    return <h4 title={record.guestIntroduce}>{record.guestIntroduce}</h4>
                }
            }
        }, {
            title: '排序',
            key: 'guestSeq',
            render: (record) => {
                return <p>{record.guestSeq}</p>
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
    doSearch (key, page, type) {
        this.setState({
            loading: true
        })
        const {dispatch} = this.props
        let sendData = {
            guestType: type,
            keyword: key,
            pageSize: 20,
            currentPage: page
        }
        dispatch(getGuestList(sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }

    // 点击搜索
    _search () {
        let key = this.state.searchVal
        this.doSearch(key, 1, this.state.typeVal)
    }

    // 改变页数
    changePage (page) {
        this.setState({
            loading: true
        })
        let key = this.state.searchVal
        this.doSearch(key, page, this.state.typeVal)
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

    getImgUrl = (data) => {
        this.setState({
            imgUrl: data
        })
    }

    // 删除
    delIco (item) {
        const {pageData} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id
                }
                axiosAjax('POST', '/power6/delete/guest', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.doSearch('', pageData.page)
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 筛选状态
    handleChange = (value) => {
        this.setState({
            typeVal: value
        })
        this.doSearch('', 1, value)
    }

    handleImgModalCancel = () => this.setState({previewVisible: false})

    handlePreview = (e) => {
        this.setState({
            previewImage: e.target.getAttribute('src'),
            previewVisible: true
        })
    }

    searchValue (e) {
        let val = e.target.value
        this.setState({
            searchVal: val
        })
    }

    // 编辑
    handleCompile = (item) => {
        console.log(item)
        this.setState({
            data: {
                id: item.id,
                visible: true,
                guestName: item.guestName,
                guestCompany: item.guestCompany,
                guestIntroduce: item.guestIntroduce,
                guestSeq: item.guestSeq,
                guestHeadUrl: item.guestHeadUrl,
                guestType: item.guestType
            }
        })
    }

    render () {
        const {list, pageData} = this.props
        return <div className="powerGuest-index">
            <Row>
                <Col>
                    <span>选择类型：</span>
                    <Select defaultValue="0" onChange={this.handleChange} style={{ width: 100, marginRight: 15 }}>
                        <Option value="0">本期嘉宾</Option>
                        <Option value="1">往期嘉宾</Option>
                    </Select>
                    <Input
                        style={{width: 200, marginRight: '10px'}}
                        placeholder="嘉宾姓名"
                        onChange={(e) => { this.searchValue(e) }}
                        onPressEnter={() => {
                            this._search()
                        }}
                    />
                    <Button
                        type="primary"
                        onClick={() => {
                            this._search()
                        }}
                        style={{marginRight: '20px'}}
                    >搜索</Button>

                    <Button type="primary" onClick={this.showModal}>新增嘉宾</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table
                        dataSource={list.map((item, index) => ({...item, key: index}))}
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
                data={this.state.data}
                onCancel={this.handleCancel}
                getImgData={(data) => {
                    this.getImgUrl(data)
                }}
            />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.powerSZGuestList.list,
        pageData: state.powerSZGuestList.pageData
    }
}

export default connect(mapStateToProps)(PowerGuest)
