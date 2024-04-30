/**
 * @Author：zhangaoxiang
 * @Date：2019/3/6
 * @Last Modified By: zhangaoxiang
 * @Last Modified Time: 2019/3/6
 **/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Row, Col, Modal, message, Spin, Button, Select} from 'antd'
import CollectionCreateForm from './ModalForm/collaborate'
import './index.scss'
import {
    getAgendaCollaborate
} from '../../../actions/activity/powerBj/guestList.action'
import {axiosAjax} from '../../../public/index'
const {Option} = Select

const confirm = Modal.confirm
let columns = []

class PowerCooperation extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            changeType: '',
            data: {
                visible: false,
                id: '',
                title: '',
                companyImageUrl: '',
                companySeq: '',
                companyType: ''
            },
            imgUrl: '',
            previewVisible: false,
            previewImage: '',
            order: 1,
            confirmLoading: false
        }
    }

    componentWillMount () {
        this.doSearch('', 1)
        columns = [{
            title: '标题',
            key: 'title',
            render: (record) => {
                return <p>{record.title}</p>
            }
        }, {
            title: '所属分类',
            key: 'companyType',
            render: (record) => {
                let companyType = ''
                if (record.companyType === 0) {
                    companyType = '联合发起方'
                } else if (record.companyType === 1) {
                    companyType = '全球战略合作媒体'
                } else if (record.companyType === 2) {
                    companyType = '合作伙伴'
                } else if (record.companyType === 3) {
                    companyType = '首席合作媒体'
                } else if (record.companyType === 4) {
                    companyType = '社区战略合作媒体'
                } else if (record.companyType === 5) {
                    companyType = '特别支持媒体'
                } else if (record.companyType === 6) {
                    companyType = '战略合作媒体'
                }
                return <h4 title={record.companyType}>{companyType}</h4>
            }
        }, {
            title: '图片 ',
            key: 'companyImageUrl',
            render: (record) => (<img
                className="shrinkPic"
                key={record}
                src={record.companyImageUrl}
                onClick={this.handlePreview}
            />)
        }, {
            title: '排序',
            key: 'companySeq',
            render: (record) => {
                return <p>{record.companySeq}</p>
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
    doSearch (type, page) {
        this.setState({
            loading: true
        })
        const {dispatch} = this.props
        let sendData = {
            companyType: type,
            pageSize: 20,
            currentPage: page
        }
        sendData = {...sendData}
        dispatch(getAgendaCollaborate(sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }

    changePage (page) {
        this.setState({
            loading: true
        })
        let type = this.state.changeType
        this.doSearch(type, page)
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
                axiosAjax('POST', '/power2/deleteCooperation', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.doSearch(_this.state.changeType, _this.props.pageData.page)
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
            changeType: value
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

    getImgUrl = (data) => {
        this.setState({
            imgUrl: data
        })
    }

    // 编辑
    handleCompile = (item) => {
        this.setState({
            data: {
                visible: true,
                id: item.id,
                title: item.title,
                companyImageUrl: item.companyImageUrl,
                companySeq: item.companySeq,
                companyType: item.companyType
            }
        })
    }

    render () {
        const {cooperationList, pageData} = this.props
        return <div className="powerGuest-index">
            <Row>
                <Col>
                    <span>选择类型：</span>
                    <Select defaultValue='' style={{ width: 120, marginRight: 15 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        <Option value="0">联合发起方</Option>
                        <Option value="1">全球战略合作媒体</Option>
                        <Option value="2">星级合作伙伴</Option>
                        <Option value="3">首席合作媒体</Option>
                        <Option value="4">社区战略合作媒体</Option>
                        <Option value="5">特别支持媒体</Option>
                        <Option value="6">战略合作媒体</Option>
                        <Option value="7">合作伙伴</Option>
                        <Option value="8">独家售票平台</Option>
                    </Select>
                    <Button type="primary" onClick={this.showModal}>新增合作方</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table
                        dataSource={cooperationList.map((item, index) => ({...item, key: index}))}
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
                getImgData={(data) => {
                    this.getImgUrl(data)
                }}
            />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        cooperationList: state.powerBjCooperation.cooperationList,
        pageData: state.powerBjCooperation.pageData
    }
}

export default connect(mapStateToProps)(PowerCooperation)
