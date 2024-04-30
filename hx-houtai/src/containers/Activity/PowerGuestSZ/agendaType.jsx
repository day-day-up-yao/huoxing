/**
 * @Author：zhangaoxiang
 * @Date：2019/3/6
 * @Last Modified By: zhangaoxiang
 * @Last Modified Time: 2019/3/6
 **/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Row, Col, Modal, message, Spin, Button} from 'antd'
import CollectionCreateForm from './ModalForm/agendaType'
import './index.scss'
import {
    getAgendaListType
} from '../../../actions/activity/powerSZ/guestList.action'
import {axiosAjax} from '../../../public/index'

const confirm = Modal.confirm
let columns = []

class PowerAgendaType extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            type: null,
            data: {
                visible: false,
                id: '',
                hallName: ''
            },
            imgUrl: '',
            previewVisible: false,
            previewImage: '',
            order: 1,
            confirmLoading: false
        }
    }

    componentWillMount () {
        this.doSearch()
        columns = [{
            title: '会场 ',
            key: 'hallName',
            render: (record) => (<p>{record.hallName}</p>)
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

    // 列表请求
    doSearch () {
        this.setState({
            loading: true
        })
        const {dispatch, pageData} = this.props
        let sendData = {
            pageSize: 40,
            currentPage: pageData.page
        }
        dispatch(getAgendaListType(sendData, () => {
            this.setState({
                loading: false
            })
        }))
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

    // 提交表单
    handleCreate = () => {
        const form = this.form
        form.setFieldsValue({
            imgUrl: this.state.data.imgUrl
        })
        form.validateFields((err, values) => {
            if (err) {
                return
            }
            this.setState({
                confirmLoading: true
            })
            values.category = 1
            axiosAjax('POST', '/commonGuest/addGuest', values, (res) => {
                this.setState({
                    confirmLoading: false
                })
                if (res.code === 1) {
                    message.success('添加成功！')
                    form.resetFields()
                    this.setState({
                        data: {
                            visible: false
                        }
                    })
                    this.doSearch('init')
                } else {
                    message.error(res.msg)
                }
            })
        })
    }
    saveFormRef = (form) => {
        this.form = form
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
                axiosAjax('POST', '/power6/deleteHall', {...sendData}, (res) => {
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

    // 编辑
    handleCompile = (item) => {
        this.setState({
            data: {
                visible: true,
                id: item.id,
                hallName: item.hallName
            }
        })
    }

    render () {
        const {agendaListType, pageData} = this.props
        return <div className="powerGuest-index">
            <Row>
                <Col>
                    <Button type="primary" onClick={this.showModal}>新增议程分类</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table
                        dataSource={agendaListType.map((item, index) => ({...item, key: index}))}
                        columns={columns}
                        bordered
                        pagination={{
                            current: pageData.page,
                            total: pageData.totalCount,
                            pageSize: pageData.pageSize,
                            onChange: (page) => this.changePage(page)
                        }}
                    />
                </Spin>
            </div>
            {this.state.data.visible && <CollectionCreateForm
                loading={this.state.confirmLoading}
                getImgData={(data) => {
                    this.getImgUrl(data)
                }}
                ref={this.saveFormRef}
                visible={this.state.data.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
                data={this.state.data}
            />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        agendaListType: state.powerSZAgendaList.agendaListType,
        pageData: state.powerSZAgendaList.pageData
    }
}

export default connect(mapStateToProps)(PowerAgendaType)
