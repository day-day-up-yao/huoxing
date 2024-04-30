/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Table, Modal, message, Spin, Button, Input, Checkbox, Form, Radio, Select } from 'antd'
import { Table, Modal, message, Spin, Button, Input, Form, Radio, Select } from 'antd'
import './flash.scss'
import { Link, hashHistory } from 'react-router'
import {getFlashList, setSearchQuery, setPageData, selectedData} from '../../actions/flash/flash.action'
import {addFlashPush} from '../../actions/flash/flashPush.action'
import {getTypeList} from '../../actions/index'
import {formatDate, axiosAjax, cutString, getTitle, getContent, getpureContent} from '../../public/index'
const confirm = Modal.confirm
// const CheckboxGroup = Checkbox.Group
const RadioGroup = Radio.Group
const FormItem = Form.Item
const { TextArea } = Input
const Option = Select.Option
let columns = []
const formItemLayout = {
    labelCol: {
        sm: { span: 6 }
    },
    wrapperCol: {
        sm: { span: 16 }
    }
}

class FlashIndex extends Component {
    constructor () {
        super()
        this.state = {
            visible: false,
            loading: true,
            terminal: '1, 2',
            apiAdd: ''
        }
    }

    channelName (id) {
        let name = ''
        this.props.flashTypeList.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    componentWillMount () {
        const {dispatch, search} = this.props
        dispatch(getTypeList())
        this.doSearch(!search.type ? 'init' : search.type)
        const getMyTitle = (str) => {
            return `【${str.split('【')[1].split('】')[0]}】`
        }
        columns = [{
            title: '快讯标题',
            key: 'title',
            width: 250,
            render: (text, record) => {
                return <div className="flash-info clearfix">
                    <div>
                        <h3>{parseInt(record.apiAdd) === 1 ? <span className='hint'>爬虫</span> : (parseInt(record.apiAdd) === 2 ? <span className='hint'>算法</span> : '')}{!record.title ? getMyTitle(record.content) : `【${record.title}】`}</h3>
                    </div>
                </div>
            }
        }, {
            title: '内容',
            key: 'content',
            render: (text, record) => (<div className="flash-info clearfix">
                <div>
                    <h3 title={getContent(record.content)} dangerouslySetInnerHTML={this.createMarkup(cutString(getContent(record.content), 300))} />
                </div>
            </div>)
        }, {
            title: '频道',
            dataIndex: 'channelId',
            width: 70,
            key: 'channelId',
            render: (record) => (this.channelName(record))
        },
        // , {
        //     title: '标签',
        //     dataIndex: 'tagsV2',
        //     width: 150,
        //     key: 'tags',
        //     render: (record) => ((record && record.trim() !== '') ? JSON.parse(record).map((item, index) => {
        //         if (item.name.trim() === '') {
        //             return ''
        //         } else if (item.type === 1) {
        //             return <Tag key={index} color="rgba(248, 195, 205, 1)" style={{margin: '5px'}}>{`${item.name}`}</Tag>
        //         } else if (item.type === 2) {
        //             return <Tag key={index} color="rgba(168, 216, 185, 1)" style={{margin: '5px'}}>{`${item.name}`}</Tag>
        //         } else if (item.type === 3) {
        //             return <Tag key={index} color="rgba(165, 222, 228, 1)" style={{margin: '5px'}}>{`${item.name}`}</Tag>
        //         } else {
        //             return <Tag key={index} color="red" style={{margin: '5px'}}>{item.name}</Tag>
        //         }
        //     }) : '无')
        // }
        {
            title: '利好',
            dataIndex: 'upCounts',
            key: 'upCounts',
            width: 45
        }, {
            title: '利空 ',
            dataIndex: 'downCounts',
            key: 'downCounts',
            width: 45
        }, {
            title: '发表时间',
            width: 80,
            key: 'createdTime',
            render: (record) => <div style={{textAlign: 'center'}} dangerouslySetInnerHTML={this.createMarkup(formatDate(record.createdTime, '-', true))}/>
        }, {
            title: '操作',
            key: 'action',
            width: 100,
            render: (item) => (<div className="btns">
                <p>
                    <Link className="mr10 opt-btn" to={{pathname: '/flash-detail', query: {id: item.id}}} style={{background: '#108ee9'}}>详情</Link>
                </p>
                <p>
                    <Link className="mr10 opt-btn" to={{pathname: '/flash-edit', query: {id: item.id}}} style={{background: '#e35ba3'}}>编辑</Link>
                </p>
                {/* <a className="mr10" href="javascript:void(0)" onClick={() => this._isTop(item)}>{item.isTop === '1' ? '取消置顶' : '置顶'}</a> */}
                {/* <a className="mr10" href="javascript:void(0)" onClick={() => this._forbidcomment(item)}>{item.forbidComment === '1' ? '取消禁评' : '禁评'}</a> */}
                <p>
                    <a onClick={() => this.delFlash(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                </p>
                <p>
                    <a onClick={() => this.handleRecommend(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#1048ae', padding: '2px 6px'}}>
                        {
                            item.recCreaterType === 1 ? '从首页撤回' : '推至首页'
                        }
                    </a>
                </p>
                <p>
                    <a onClick={() => {
                        this.setState({visible: true})
                        dispatch(selectedData(item))
                    }} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#f9b724'}}>一键推送</a>
                </p>
            </div>)
        }]
    }

    createMarkup (str) { return {__html: str} }

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
        // this.setState({'currPage': page})
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page, 'apiAdd': this.state.apiAdd})
    }
    // 删除
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

    cancelModal = () => {
        const {form} = this.props
        form.resetFields()
        this.setState({
            visible: false
        })
    }

    // 筛选新闻状态
    handleChange = (value) => {
        this.setState({
            apiAdd: value
        })
        this.doSearch('init', {'currentPage': 1, 'apiAdd': value})
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
            // console.log(values)
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

    terminalChange = (value) => {
        this.setState({
            terminal: value.join(',')
        })
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
        return <div className="flash-index">
            <span style={{marginLeft: 15}}>发布状态：</span>
            <Select defaultValue={``} style={{ width: 100, marginBottom: 10 }} onChange={this.handleChange}>
                <Option value="">全部</Option>
                <Option value="1">爬虫发布</Option>
                <Option value="2">算法发布</Option>
                <Option value="0">人工发布</Option>
            </Select>
            <span style={{marginLeft: 15}}>快讯标题/内容：</span>
            <Input
                onPressEnter={() => { this._search() }}
                value={search.title}
                style={{width: 150, marginRight: 15}}
                onChange={(e) => dispatch(setSearchQuery({title: e.target.value}))}
                placeholder="请输入要搜索的内容"
            />
            <Button type="primary" style={{marginRight: 15}} onClick={() => { this._search() }}>搜索</Button>
            <Button type="primary" onClick={() => { hashHistory.push('/flash-edit') }}>新增快讯</Button>
            <div style={{marginTop: 15}}>
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
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
                        {/* {getFieldDecorator('type', {
                            initialValue: 'flash',
                            rules: [{required: true, message: '请选择推送类型！'}]
                        })(
                            <RadioGroup>
                                <Radio value="flash">快讯</Radio>
                            </RadioGroup>
                        )} */}
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
                    {/* <FormItem
                        {...formItemLayout}
                        label="推送方"
                    >
                        {getFieldDecorator('terminal', {
                            initialValue: ['1', '2'],
                            rules: [{required: true, message: '请选择推送方！'}]
                        })(
                            <CheckboxGroup onChange={this.terminalChange}>
                                <Checkbox value="1">MarsBitAPP</Checkbox>
                                // <Checkbox value="3">火星社区APP</Checkbox>
                                <Checkbox value="2">第三方(币优)</Checkbox>
                            </CheckboxGroup>
                        )}
                    </FormItem> */}
                    <FormItem
                        {...formItemLayout}
                        label="快讯ID: ">
                        {/* {getFieldDecorator('id', {
                            initialValue: selectedData.id ? selectedData.id : '',
                            rules: [
                                {required: true, message: '请输入快讯 ID！'}
                            ]
                        })(
                            <Input placeholder="快讯 ID"/>
                        )} */}
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
                    {/* <FormItem
                        {...formItemLayout}
                        label="内容: ">
                        {getFieldDecorator('content', {
                            initialValue: selectedData.id ? getContent(selectedData.content) : '',
                            rules: [{required: true, message: '请输入快讯内容！'}]
                        })(
                            <TextArea rows={6} placeholder="快讯内容"/>
                        )}
                    </FormItem> */}
                    <FormItem
                        {...formItemLayout}
                        label="推送描述: ">
                        {getFieldDecorator('notifyContent', {
                            initialValue: selectedData.id ? getpureContent(selectedData.content) : '',
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

export default connect(mapStateToProps)(Form.create()(FlashIndex))
