/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Modal, message, Spin, Button } from 'antd'
import CollectionCreateForm from '../ModalForm/index'
import './index.scss'
// import { Link } from 'react-router'
import {getLecturerList, setSearchQuery, setPageData, setFilterData} from '../../../actions/college/lecturer.action'
import {formatDate, axiosAjax, cutString} from '../../../public/index'
const confirm = Modal.confirm
// const Option = Select.Option
let columns = []
const userTypeOptions = [
    { label: '嘉宾', value: '1' },
    { label: '主持人', value: '2' },
    { label: '全部', value: '0' }
]
class Lecturer extends Component {
    constructor () {
        super()
        this.state = {
            visible: false,
            loading: true,
            type: null,
            data: {},
            imgUrl: '',
            previewVisible: false,
            previewImage: ''
        }
    }

    componentWillMount () {
        const {filter} = this.props
        this.doSearch('init', {...filter})
        columns = [{
            title: '讲师名',
            key: 'name',
            render: (text, record) => (record && <div className="lecturer-info clearfix">
                <div>
                    <h4 title={record.name} dangerouslySetInnerHTML={this.createMarkup(cutString(record.name, 30))} />
                </div>
            </div>)
        },
        // , {
        //     title: '讲师类型',
        //     dataIndex: 'userType',
        //     key: 'userType',
        //     render: (record) => {
        //         if (parseInt(record) === 2) {
        //             return '主持人'
        //         } else if (parseInt(record) === 1) {
        //             return '嘉宾'
        //         } else {
        //             return '其他'
        //         }
        //     }
        // }
        {
            title: '讲师头像 ',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (record) => <div
                className="shrinkPic"
                key={record}
                style={{
                    background: `url(${record || 'http://static.huoxing24.com/images/2018/03/31/1522470188490129.png'}) no-repeat center / cover`
                }}
                src={record || 'http://static.huoxing24.com/images/2018/03/31/1522470188490129.png'}
                onClick={this.handlePreview}
            />
        }, {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            render: (record) => (record && formatDate(record))
        }, {
            title: '讲师描述',
            key: 'brief',
            render: (record) => {
                if (!record.brief) {
                    return '无'
                } else {
                    return <h4 title={record.brief} dangerouslySetInnerHTML={this.createMarkup(cutString(record.brief, 80))} />
                }
            }
        }, {
            title: '操作',
            key: 'action',
            render: (item) => {
                return <div>
                    <a className="mr10 opt-btn" onClick={() => this.updateLecturer(item)} style={{background: '#108ee9'}}>修改</a>
                    {/*
                    <a onClick={() => this.delIco(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                    */}
                </div>
            }
        }]
    }

    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init'}))
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
    }

    createMarkup (str) { return {__html: str} }

    // 状态改变
    channelName (id) {
        let name = ''
        userTypeOptions.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    // 列表请求
    doSearch (type, data) {
        this.setState({
            loading: true
        })
        const {dispatch, pageData} = this.props
        let sendData = {
            // search: search.search,
            // ...filter,
            pageSize: 20,
            currentPage: pageData.page
        }
        sendData = {...sendData, ...data}
        dispatch(getLecturerList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }

    // 点击搜索
    _search () {
        const {dispatch} = this.props
        this.doSearch('init', {'currentPage': 1})
        dispatch(setPageData({'currentPage': 1}))
    }

    // 改变页数
    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, filter} = this.props
        dispatch(setPageData({'currentPage': page}))
        this.doSearch('init', {'currentPage': page, ...filter})
    }

    showModal = () => {
        this.setState({ visible: true })
    }

    updateLecturer (item) {
        this.showModal()
        this.setState({
            data: item
        })
    }

    // 取消
    handleCancel = () => {
        this.setState({
            visible: false,
            data: {}
        })
    }

    getImgUrl = (data) => {
        this.setState({
            imgUrl: data
        })
    }

    // 提交表单
    handleCreate = () => {
        const form = this.form
        const {data} = this.state
        form.setFieldsValue({
            avatar: this.state.imgUrl
        })
        form.validateFields((err, values) => {
            if (err) {
                return
            }
            if (data.lecturerId) {
                values.lecturerId = data.lecturerId
            }
            axiosAjax('POST', !this.state.data.lecturerId ? '/college/lecturer/add' : '/college/lecturer/update', values, (res) => {
                if (res.code === 1) {
                    message.success('操作成功！')
                    form.resetFields()
                    this.setState({ visible: false })
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
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    id: item.userId,
                    status: 0
                }
                axiosAjax('POST', '/caster/user/delete', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 发表或存草稿
    _isPublish (item) {
        const _this = this
        confirm({
            title: '提示',
            content: `确认要${item.type === 0 ? '开启直播' : '结束直播'}吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id,
                    type: item.type === 0 ? 1 : 0
                }
                axiosAjax('POST', '/news/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success(`操作成功！`)
                        _this.doSearch('init')
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 筛选直播状态
    handleChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({'type': value}))
        this.setState({
            type: value
        })
        this.doSearch('init', {'page': 1, type: value})
    }

    handleImgModalCancel = () => this.setState({previewVisible: false})

    handlePreview = (e) => {
        this.setState({
            previewImage: e.target.getAttribute('src'),
            previewVisible: true
        })
    }

    render () {
        const {list, pageData} = this.props
        return <div className="lecturer-index">
            <Row>
                <Col>
                    {/*
                    <span>列表筛选：</span>
                    <Select defaultValue={`${filter.type}`} style={{ width: 120 }} onChange={this.handleChange}>
                        {userTypeOptions.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>)}
                    </Select>
                    <Input
                        value={search.search}
                        style={{width: 150, margin: '0 15px'}}
                        onChange={(e) => dispatch(setSearchQuery({search: e.target.value}))}
                        placeholder="讲师姓名"
                        onPressEnter={() => { this._search() }}
                    />
                    <Button type="primary" onClick={() => { this._search() }}>搜索</Button>
                    */}
                    <Button type="primary" style={{margin: '0 15px 0 0'}} onClick={this.showModal}>新增讲师</Button>
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
                            total: pageData.totalCount,
                            pageSize: pageData.pageSize,
                            onChange: (page) => this.changePage(page)
                        }}
                    />
                </Spin>
            </div>
            <Modal className="pre-Modal" visible={this.state.previewVisible} footer={null} onCancel={this.handleImgModalCancel}>
                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
            </Modal>
            {this.state.visible && <CollectionCreateForm
                getImgData={(data) => { this.getImgUrl(data) }}
                ref={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
                data={this.state.data}
            />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        lecturerInfo: state.lecturerInfo,
        list: state.lecturerInfo.list,
        search: state.lecturerInfo.search,
        filter: state.lecturerInfo.filter,
        pageData: state.lecturerInfo.pageData
    }
}

export default connect(mapStateToProps)(Lecturer)
