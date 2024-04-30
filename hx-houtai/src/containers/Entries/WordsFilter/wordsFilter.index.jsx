/**
 * Author：quboshen
 * Time：2020/10/12
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Modal, message, Spin, Button, Form, Select } from 'antd'
import './index.scss'
import IconItem from '../../../components/icon/icon'
import CollectionCreateForm from './ModalForm'
import {getWordsFilterList, setSearchQuery, setPageData, addWords, selectData, setFilterData} from '../../../actions/entries/wordsFilter.action'
import {axiosAjax, cutString, channelIdOptions, formatDate} from '../../../public/index'
const confirm = Modal.confirm
let columns = []
const {Option} = Select
class WordsFilterIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            newsStatus: null,
            editNewsId: '',
            visible: false,
            passwordModal: false,
            confirmDirty: false,
            sensitivewordArr: []
        }
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

    componentWillMount () {
        axiosAjax('POST', '/sensitiveword/typeList', {
            search: ''
        }, (res) => {
            if (res.code === 1) {
                let arr = !res.obj ? [] : res.obj
                this.setState({
                    sensitivewordArr: arr
                })
            } else {
                message.error(res.msg)
            }
        })
        const {filter} = this.props
        this.doSearch('init', {...filter})
        columns = [{
            title: '敏感词',
            key: 'word',
            render: (text, record) => (record && <div className="wordsFilter-info clearfix">
                <div>
                    <h4 title={record.word} dangerouslySetInnerHTML={this.createMarkup(cutString(record.word, 30))} />
                </div>
            </div>)
        }, {
            title: '类型',
            key: 'type',
            render: (text, record) => (record && <div className="wordsFilter-info clearfix">
                <span className="news-status comment-btn">{record.typeName}</span>
            </div>)
        }, {
            title: '创建时间',
            key: 'createTime',
            render: (record) => (formatDate(record.createTime))
        }, {
            title: '操作',
            key: 'action',
            render: (item) => (<div className="btns">
                <p>
                    <a onClick={() => this.delNewsWordsFilter(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                </p>
            </div>)
        }]
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
    }

    createMarkup (str) { return {__html: str} }

    updateAccount (item) {
        const {dispatch} = this.props
        dispatch(selectData(item))
        this.setState({
            visible: true
        })
    }

    doSearch (type, data) {
        const {filter, dispatch, pageData} = this.props
        this.setState({
            loading: true
        })
        let sendData = {
            type: filter.type,
            pageSize: 20,
            currentPage: pageData.currPage
        }
        sendData = {...sendData, ...data}
        dispatch(getWordsFilterList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }

    _search () {
        const {dispatch} = this.props
        let type = 'init'
        this.doSearch(type, {'currentPage': 1})
        dispatch(setSearchQuery({'type': type}))
        dispatch(setPageData({'currPage': 1}))
    }

    // 改变页数
    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, search, filter} = this.props
        dispatch(setPageData({'currentPage': page}))
        this.doSearch(search.type, {'currentPage': page, ...filter})
    }

    // 删除
    delNewsWordsFilter (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    type: item.type,
                    sensitiveWord: item.word
                }
                axiosAjax('POST', '/sensitiveword/delsensitiveword', {...sendData}, (res) => {
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

    cancelModal = () => {
        const form = this.formRef.props.form
        this.setState({visible: false})
        form.resetFields()
    }

    submitAccount = () => {
        const {dispatch} = this.props
        const form = this.formRef.props.form
        form.validateFields((err, values) => {
            if (err) {
                return false
            }
            dispatch(addWords({
                ...values
            }, () => {
                form.resetFields()
                this.setState({ visible: false })
                this.doSearch('init')
            }))
        })
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef
    }

    openModal = () => {
        const {dispatch} = this.props
        this.setState({visible: true})
        dispatch(selectData({}))
    }

    // 筛选类别
    handleChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({'type': value}))
        this.doSearch('init', {'currentPage': 1, type: value})
    }

    render () {
        const {list, pageData, filter} = this.props
        return <div className="wordsFilter-index">
            <Row>
                <Col>
                    <span>类型：</span>
                    <Select defaultValue={`${filter.type}`} style={{ width: 150, marginBottom: 10 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        {
                            this.state.sensitivewordArr.map((item, index) => {
                                return <Option value={item.order.toString()} key={index}>{item.typeName}</Option>
                            })
                        }
                    </Select>
                    <Button type="primary" style={{marginLeft: 15}} onClick={this.openModal}><IconItem type="icon-post-send"/>新增</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currentPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
            {this.state.visible ? <CollectionCreateForm
                sensitivewordArr={this.state.sensitivewordArr}
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.cancelModal}
                onCreate={this.submitAccount}
            /> : ''}

        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.wordsFilterInfo.list,
        search: state.wordsFilterInfo.search,
        filter: state.wordsFilterInfo.filter,
        pageData: state.wordsFilterInfo.pageData
    }
}

export default connect(mapStateToProps)(Form.create()(WordsFilterIndex))
