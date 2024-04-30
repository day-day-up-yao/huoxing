import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Input, message, Radio, Pagination, Modal } from 'antd'
import { Link } from 'react-router'
import { getFlashList, setSearchQuery, setPageData, selectedData } from '../../actions/flash/flash.action'
// import {getTypeList} from '../../actions/index'
import {addFlashPush} from '../../actions/flash/flashPush.action'
import {formatTime, axiosAjax, getTitle, getContent} from '../../public/index'
const confirm = Modal.confirm
const { TextArea } = Input
const FormItem = Form.Item
const RadioGroup = Radio.Group
const formItemLayout = {
    labelCol: {
        sm: { span: 6 }
    },
    wrapperCol: {
        sm: { span: 16 }
    }
}

class FlashContent extends Component {
    constructor () {
        super()
        this.state = {
            visible: false,
            loading: true,
            terminal: '1, 2',
            apiAdd: ''
        }
    }

    componentWillMount () {
        const { search } = this.props
        this.doSearch(!search.type ? 'init' : search.type)
    }
    doSearch (type, data) {
        const {dispatch, pageData, search} = this.props
        let sendData = {
            'title': search.title,
            'currentPage': pageData.currPage,
            'apiAdd': this.state.apiAdd
        }
        this.setState({
            loading: true
        })
        sendData = {...sendData, ...data}
        dispatch(getFlashList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    _search () {
        const {dispatch} = this.props
        this.doSearch('init', {'currentPage': 1, 'apiAdd': this.state.apiAdd})
        dispatch(setPageData({'currPage': 1}))
    }
    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, search} = this.props
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page, 'apiAdd': this.state.apiAdd})
    }

    delFlash (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    // 'appId': $.cookie('gameId'),
                    id: item.id,
                    status: -1
                }
                axiosAjax('POST', '/lives/status', {...sendData}, (res) => {
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
    submitAccount () {
        const {dispatch, form, selectedData} = this.props
        const This = this
        form.validateFields((err, values) => {
            values.type = 'flash'
            values.id = selectedData.id
            values.terminal = '1'
            values.content = values.notifyContent
            values.createTime = Date.parse(new Date())
            if (err) {
                return false
            }
            confirm({
                title: '提示',
                content: `确认要推送本条快讯吗 ?`,
                onOk () {
                    dispatch(addFlashPush(values, () => {
                        This.setState({
                            visible: false
                        })
                        form.resetFields()
                        This.doSearch('init')
                    }))
                }
            })
        })
    }
    cancelModal = () => {
        const {form} = this.props
        form.resetFields()
        this.setState({
            visible: false
        })
    }
    showTopModal = (item) => {
        const {dispatch} = this.props
        this.setState({visible: true})
        dispatch(selectedData(item))
    }
    handleRecommend = (item) => {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `${item.recCreaterType === 1 ? '确认要撤回吗' : '确认要推荐吗'} `,
            onOk () {
                let sendData = {
                    livesId: item.id,
                    status: item.recCreaterType === 1 ? 0 : 1
                }
                axiosAjax('POST', '/lives/changeRecCreaterType', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success(`${item.recCreaterType === 1 ? '撤回成功' : '推荐成功'} `)
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    render () {
        const {list, pageData, search, dispatch, form, selectedData} = this.props
        const { getFieldDecorator } = form
        const getMyTitle = (str) => {
            return `【${str.split('【')[1].split('】')[0]}】`
        }
        return <div className="flash-index">
            <div style={{padding: '2% 3%'}}>
                <Input
                    onPressEnter={() => { this._search() }}
                    value={search.title}
                    style={{width: '75%', marginRight: '7%'}}
                    onChange={(e) => dispatch(setSearchQuery({title: e.target.value}))}
                    placeholder="请输入要搜索的内容"
                />
                <Button type="primary" onClick={() => { this._search() }}>搜索</Button>
            </div>
            {list.map((item, index) => {
                return <div id={index} key={index}>
                    <div className="item">{getMyTitle(item.content)}</div>
                    <span>{formatTime(item.createdTime, 'MM月dd日 h:m')}</span>
                    <div className="option">
                        <p>
                            <a onClick={() => this.handleRecommend(item)} className="mr10 opt-btn" href="javascript:void(0)">
                                {
                                    item.recCreaterType === 1 ? '从首页撤回' : '推至首页'
                                }
                            </a>
                        </p>
                        <p>
                            <a onClick={() => {
                                this.showTopModal(item)
                            }} className="mr10 opt-btn" href="javascript:void(0)">一键推送</a>
                        </p>
                        <Link className="mr10 opt-btn" to={{pathname: '/mflash-edit', query: {id: item.id}}}>编辑</Link>
                        <p>
                            <a onClick={() => this.delFlash(item)} className="mr10 opt-btn" href="javascript:void(0)">删除</a>
                        </p>
                    </div>
                </div>
            })}
            <div className="pagination">
                <Pagination current={pageData.currPage} total={pageData.totalCount} pageSize={pageData.pageSize} onChange={(page) => this.changePage(page)} />
            </div>
            <Modal
                title="添加推送信息"
                visible={this.state.visible}
                onOk={() => this.submitAccount()}
                onCancel={ this.cancelModal }
                footer={[
                    <Button key="back" onClick={this.cancelModal}>取消</Button>,
                    <Button key="submit" type="primary" onClick={() => { this.submitAccount() }}>确定</Button>
                ]}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="推送类型"
                    >
                        快讯
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="目标用户"
                    >
                        {getFieldDecorator('pastDays', {
                            initialValue: '3',
                            rules: [{required: true, message: '请选择目标用户类型！'}]
                        })(
                            <RadioGroup>
                                <Radio value="3">3日活跃</Radio>
                                <Radio value="7">7日活跃</Radio>
                                <Radio value="14">14日活跃</Radio>
                                <Radio value="0">全部</Radio>
                            </RadioGroup>
                        )}
                        <div style={{color: 'rgb(255, 79, 62)'}}>推荐使用3日活跃，推送的目标用户过多会导致推送无法到达</div>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="快讯ID: ">
                        {selectedData.id ? selectedData.id : ''}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="推送标题: ">
                        {getFieldDecorator('title', {
                            initialValue: selectedData.id ? getTitle(selectedData.content, true) : '',
                            rules: [{required: true, message: '请输入推送标题！'}]
                        })(
                            <Input placeholder="推送标题"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="推送描述: ">
                        {getFieldDecorator('notifyContent', {
                            initialValue: selectedData.id ? getContent(selectedData.content) : '',
                            rules: [
                                {required: true, message: '请输入推送描述！'},
                                {max: 200, message: '推送描述保持在200字以内！'}
                            ]
                        })(
                            <TextArea rows={6} placeholder="推送描述" maxLength={200}/>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    }
}
const mapStateToProps = (state) => {
    return {
        selectedData: state.flashInfo.selectedData,
        flashInfo: state.flashInfo,
        list: state.flashInfo.list,
        search: state.flashInfo.search,
        pageData: state.flashInfo.pageData,
        flashTypeList: state.flashTypeListInfo
    }
}

export default connect(mapStateToProps)(Form.create()(FlashContent))
