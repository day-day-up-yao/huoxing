import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, DatePicker, Rate, Spin, message, Row, Col, Select } from 'antd'
import './calendar.add.scss'
import {axiosAjax, formatDate, titleTrans} from '../../public'
import { hashHistory } from 'react-router'
import Cookies from 'js-cookie'
import moment from 'moment'

const FormItem = Form.Item
const { TextArea } = Input
const {Option} = Select

let timeout, currentValue
class CalendarAdd extends Component {
    constructor () {
        super()
        this.state = {
            content: '',
            title: '',
            publishTime: '',
            url: '',
            tagsV2: [],
            star: 1,
            loading: false,
            searching: false,
            data: [],
            searchText: '',
            noCurrResult: false,
            tagsIconLoading: false,
            selectedTags: []
        }
    }

    componentWillMount () {
        let id = this.props.location.query.id

        if (id && window.sessionStorage.getItem('hx_calendar_id')) {
            let title = window.sessionStorage.getItem('hx_calendar_title')
            let content = window.sessionStorage.getItem('hx_calendar_content')
            let time = window.sessionStorage.getItem('hx_calendar_publishTime')
            let url = window.sessionStorage.getItem('hx_calendar_url')
            let tagsV2 = window.sessionStorage.getItem('hx_calendar_tagsV2')
            let star = window.sessionStorage.getItem('hx_calendar_star')
            this.setState({
                title: title,
                content: content,
                publishTime: time,
                url: url,
                tagsV2: tagsV2,
                star: parseInt(star)
            })
        }
    }

    // 星星
    handleChangeStar = value => {
        this.setState({star: value})
    }
    // 提交
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            let id = this.props.location.query.id
            if (!err) {
                this.setState({
                    loading: true
                })
                if (values.tagsV2.length === 0) {
                    values.tagsV2 = ''
                } else {
                    let arr = []
                    values.tagsV2.forEach((item) => {
                        arr.push({
                            name: item.label,
                            ...JSON.parse(item.key)
                        })
                    })
                    values.tagsV2 = JSON.stringify(arr)
                }
                let sendData = {
                    title: values.title,
                    content: values.content,
                    url: values.url,
                    tagsV2: values.tagsV2,
                    star: this.state.star,
                    publishTime: Date.parse(values.publishTime) / 1000
                }
                if (!id) {
                    axiosAjax('post', '/calendar/add', {...sendData}, (res) => {
                        if (res.code === 1) {
                            this.setState({
                                loading: false
                            })
                            message.success('增加成功')
                            hashHistory.push('/cc-calendarLists')
                        } else {
                            message.error(res.msg)
                        }
                    })
                } else {
                    axiosAjax('post', '/calendar/update', {...sendData, id: id}, (res) => {
                        if (res.code === 1) {
                            this.setState({
                                loading: false
                            })
                            // this.deleteEditorCookies(res.obj)
                            message.success('修改成功')
                            hashHistory.push('/cc-calendarLists')
                        } else {
                            message.error(res.msg)
                        }
                    })
                }
            }
        })
    }
    // 删除Cookies
    // deleteEditorCookies (obj) {
    //     for (let key in obj) {
    //         Cookies.remove('hx_calendar_' + key, obj[key])
    //     }
    // }

    // 删除标签时候的联动
    handleDeselect = (value, e) => {
        let selectedTags = this.state.selectedTags.filter(t => JSON.parse(t).id !== JSON.parse(value.key).id)
        this.setState({selectedTags})
    }

    // 新版标签
    handleTagsChange = (value, option) => {
        value.map(item => {
            item.title = titleTrans(JSON.parse(item.key).type, item.label)
        })
        this.setState({value})
    }

    handleBlur = () => {
        this.setState({
            searchText: ''
        })
    }

    handleSelect = (value, e) => {
        value.type = e.props.dataType
    }

    // 删除标签时候的联动
    handleDeselect = (value, e) => {
        let selectedTags = this.state.selectedTags.filter(t => JSON.parse(t).id !== JSON.parse(value.key).id)
        this.setState({selectedTags})
    }

    // 判断输入的标签是否存在
    judgeExist = (str, arr) => {
        let newArr = (!arr || arr.length === 0) ? [] : arr.filter((item) => {
            return item.name === str
        })
        if (newArr.length === 0 && arr.length !== 0) {
            this.setState({
                noCurrResult: true
            })
        } else {
            this.setState({
                noCurrResult: false
            })
        }
    }

    // 获取匹配到的标签
    getTagList = (value) => {
        if (timeout) {
            clearTimeout(timeout)
            timeout = null
        }
        currentValue = value

        const getList = () => {
            this.setState({
                searching: true,
                data: []
            })
            axiosAjax('post', '/tagmgr/like', {
                name: value
            }, (res) => {
                this.setState({
                    searching: false
                })
                this.judgeExist(currentValue, res.obj)
                if (res.obj.length === 0 && value.trim() !== '') {
                    this.setState({
                        searchText: <div>
                            <span>未查询到相关标签, 是否创建?</span>
                            <Button type="primary" loading={this.state.tagsIconLoading} style={{margin: '0 10px'}} onClick={this.addNewTag} size="small">是</Button>
                            <Button type="primary" size="small" onClick={() => {
                                this.setState({
                                    searchText: ''
                                })
                            }}>否</Button>
                        </div>,
                        noCurrResult: false
                    })
                } else {
                    this.setState({
                        searchText: ''
                    })
                }
                if (currentValue === value) {
                    const data = res.obj
                    this.setState({ data })
                }
            })
        }
        timeout = setTimeout(getList, 500)
    }

    // 新增标签
    addNewTag = (e) => {
        e.target.disabled = true
        const {form} = this.props
        this.setState({
            tagsIconLoading: true
        })
        axiosAjax('post', '/tagmgr/addSimpleTag', {
            name: currentValue,
            creator: Cookies.get('hx_passportId')
        }, (res) => {
            this.setState({
                searchText: '',
                tagsIconLoading: false,
                noCurrResult: false
            })
            let newTag = [{title: `${res.obj.name}-聚合`, key: JSON.stringify({id: res.obj.id, type: res.obj.type}), type: res.obj.type, label: res.obj.name}]
            form.setFieldsValue({
                tagsV2: [...form.getFieldValue('tagsV2'), ...newTag]
            })
        })
    }

    // 标签title等格式转换
    transTags = (arr) => {
        let newTags = []
        arr.forEach((item) => {
            newTags.push({
                title: `${titleTrans(item.type, item.name)}`,
                label: item.name,
                key: JSON.stringify({id: item.id, type: item.type})
            })
        })
        return newTags
    }

    // 点击取消按钮事件
    onBtnCloseClick = () => {
        hashHistory.push('/cc-calendarLists')
    }

    render () {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 15 }
        }
        const descStar = ['一般', '重要', '非常重要']
        const { star, content, title, publishTime, url, tagsV2, data } = this.state
        const listId = this.props.location.query.id
        const options = data.map(d => <Option title={titleTrans(d.type, d.name)} dataType={d.type} className={`tagType-${d.type}`} value={JSON.stringify({id: d.id, type: d.type}) } key={d.id}>{d.name}</Option>)
        return <div className="calendar-add">
            <h4>新增日历</h4>
            <Form onSubmit={this.handleSubmit}>
                <Spin spinning={this.state.loading} size="large">
                    <FormItem
                        {...formItemLayout}
                        label={
                            <span>主标题&nbsp;  </span>
                        }
                    >
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: '请输入主标题!', whitespace: true }],
                            initialValue: listId ? title : ''
                        })(<Input className="calendar-title" placeholder="主标题"/>)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={
                            <span>内容&nbsp;  </span>
                        }
                    >
                        {getFieldDecorator('content', {
                            rules: [{ required: false, message: '请输入内容!', whitespace: true }],
                            initialValue: listId ? content : ''
                        })(<TextArea className="calendar-cont" rows={8} placeholder="请输入备注"/>)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={
                            <span>选择时间&nbsp;  </span>
                        }
                    >
                        {getFieldDecorator('publishTime', {
                            rules: [{required: true, message: '请选时间！'}],
                            initialValue: listId ? moment(formatDate(parseInt(publishTime) * 1000), 'YYYY-MM-DD HH:mm:ss') : moment(formatDate(Date.parse(new Date())), 'YYYY-MM-DD HH:mm:ss')
                        })(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={
                            <span>链接地址&nbsp;  </span>
                        }
                    >
                        {getFieldDecorator('url', {
                            rules: [{ required: false, type: 'url', message: '请输入正确的超链接地址！' }],
                            initialValue: listId ? url : ''
                        })(<Input className="calendar-title" placeholder="超链接地址"/>)}
                    </FormItem>
                    <Row>
                        <Col>
                            <FormItem
                                {...formItemLayout}
                                label="关联标签 ："
                            >
                                {getFieldDecorator('tagsV2', {
                                    initialValue: listId ? (!tagsV2 || JSON.parse(tagsV2).length === 0 ? [] : this.transTags(JSON.parse(tagsV2))) : [],
                                    rules: [
                                        { required: false, message: '请选择相关标签！' }
                                    ]
                                })(
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        labelInValue
                                        notFoundContent={this.state.searching ? <Spin size="small" /> : this.state.searchText}
                                        filterOption={false}
                                        optionFilterProp='children'
                                        style={{ width: '100%' }}
                                        onSearch={this.getTagList}
                                        onSelect={this.handleSelect}
                                        onDeselect={this.handleDeselect}
                                        onChange={this.handleTagsChange}
                                        onBlur={this.handleBlur}
                                    >
                                        {options}
                                    </Select>
                                )}
                                {this.state.noCurrResult && <p style={{position: 'absolute', right: '-160px', bottom: 0}}>
                                    <span>未找到结果?</span>
                                    <Button type="primary" loading={this.state.tagsIconLoading} style={{margin: '0 10px'}} onClick={this.addNewTag} size="small">创建</Button>
                                    <span>一个</span>
                                </p>}

                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem
                        {...formItemLayout}
                        label={
                            <span>重要程度&nbsp;  </span>
                        }
                    >
                        <Rate count={3} tooltips={descStar} onChange={this.handleChangeStar} value={star}/>
                        {star ? <span className="ant-rate-text">{descStar[star - 1]}</span> : ''}
                    </FormItem>
                </Spin>
                <FormItem
                    wrapperCol={{ span: 12, offset: 2 }}
                >
                    <Button type="primary" className="submit" onClick={this.handleSubmit}>提交</Button>
                    <Button type="primary" className="cancel" onClick={this.onBtnCloseClick} style={{marginLeft: '10px'}}>取消</Button>
                </FormItem>
            </Form>
        </div>
    }
}

export default connect(null)(Form.create()(CalendarAdd))
