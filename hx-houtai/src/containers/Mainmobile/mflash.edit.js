
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import { hashHistory } from 'react-router'
import { Spin, Form, Input, Row, Col, Radio, InputNumber, Select, Button, Switch, message, Tag, Icon, Upload, Modal } from 'antd'
import {getTypeList} from '../../actions/index'
import { getFlashItemInfo } from '../../actions/flash/flash.action'
import {axiosAjax, URL, getSig, titleTrans, getTitle, getContent} from '../../public/index'
import './mflash.scss'

const {CheckableTag} = Tag
const FormItem = Form.Item
const { TextArea } = Input
const RadioGroup = Radio.Group
const tagOptions = [
    { label: '普通', value: 1 },
    { label: '重要', value: 2 }
]
const trendOptions = [
    { label: '利好', value: 1 },
    { label: '利空', value: 0 }
]
let hxPassportId = Cookies.get('hx_passportId')
let timeout, currentValue

class MflashEdit extends Component {
    constructor () {
        super()
        this.state = {
            previewVisible: false,
            previewImage: '',
            imageList: [],
            images: '',
            tags: [],
            smartTags: [],
            smartTagsStatus: false,
            selectedTags: [],
            tagsLoading: false,
            updateOrNot: false,
            inputVisible: false,
            channelId: '1',
            inputValue: '',
            content: '',
            title: '',
            imagesRemark: '',
            loading: true,
            tag: 1,
            trend: 1,
            upCounts: 0,
            downCounts: 0,
            url: '',
            searching: false,
            data: [],
            searchText: '',
            iconLoading: false,
            noCurrResult: false,
            watermark: true,
            oldTags: [],
            isRepetition: false,
            isRepetitionEdit: '该快讯与已有快讯高度相似',
            similarityUrl: ''
        }
    }
    componentWillMount () {
        const {dispatch, location} = this.props
        dispatch(getTypeList())
        if (location.query.id) {
            dispatch(getFlashItemInfo({'id': location.query.id}, (data) => {
                let imageList = data.images && data.images !== '' ? [{
                    uid: 0,
                    name: 'xxx.png',
                    status: 'done',
                    url: data.images
                }] : []
                this.setState({
                    content: data.content,
                    title: getTitle(data.content),
                    imagesRemark: data.imagesRemark,
                    url: data.url,
                    updateOrNot: true,
                    loading: false,
                    imageList: imageList,
                    images: data.images
                })
                this.handleSmartTags()
            }))
        } else {
            this.randomNum(1, 1)
            this.setState({
                loading: false
            })
        }

        if (location.query.from === 'twitter') {
            let insert = JSON.parse(localStorage.getItem('insertFlash')).item
            this.inquireRepetition(insert)
            this.isArticleAudit(insert)
        }
    }
    componentDidMount () {
        const {location} = this.props
        if (location.query.from) {
            this.handleSmartTags()
        }
    }
    componentDidUpdate (prevProps, prevState) {
        if (this.state.content !== prevState.content) {
            this.setState({content: this.state.content})
        }
    }
    // 趋势改变
    trendChange = (e) => {
        this.setState({
            trend: e.target.value
        })
        this.randomNum(e.target.value, this.state.tag)
    }
    // 状态改变
    tagChange = (e) => {
        this.setState({
            tag: e.target.value
        })
        this.randomNum(this.state.trend, e.target.value)
    }
    // 频道改变
    channelIdChange = (e) => {
        this.setState({
            channelId: e.target.value
        })
    }
    // 生成两个随机数
    randomNum = (up, tag) => {
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        // let num1 = Math.floor(Math.random() * 30 + 1)
        // let num2 = Math.floor(Math.random() * 30 + 1)
        // if (num1 === num2) num2 -= 1
        // let max = Math.max(num1, num2)
        // let min = Math.min(num1, num2)

        if (tag === 1) {
            if (up) {
                this.setState({
                    upCounts: random(350, 650),
                    downCounts: random(30, 100)
                })
            } else {
                this.setState({
                    upCounts: random(30, 100),
                    downCounts: random(350, 650)
                })
            }
        } else {
            if (up) {
                this.setState({
                    upCounts: random(550, 1200),
                    downCounts: random(30, 100)
                })
            } else {
                this.setState({
                    upCounts: random(30, 100),
                    downCounts: random(550, 1200)
                })
            }
        }
    }
    // 新版标签
    handleTagsChange = (value, option) => {
        value.map(item => {
            item.title = titleTrans(JSON.parse(item.key).type, item.label)
        })
        this.setState({value})
    }
    // 埋点数据收集
    dataGather = (id, type, algoTags, editTags, time) => {
        let params = {
            event_type: 'COMMIT_ARTICLE',
            event_info: {
                'article': {
                    'id': id,
                    'type': '快讯'
                },
                'algo_tags': this.state.oldTags,
                'edit_tags': editTags,
                'algo_category': '其他',
                'edit_category': '其他'
            },
            timestamp: time
        }
        axiosAjax('post', `/passport/account/recommend/gather`, {data: JSON.stringify(params)})
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
        let selectedTags = this.state.selectedTags.filter(t => t.id !== value.key.id)
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

    handleSmartTags = () => {
        let contentCont = $('#content').text()
        let startIndex = contentCont.indexOf('【') === -1 ? 0 : contentCont.indexOf('【') + 1
        let endIndex = contentCont.indexOf('】') === -1 ? 0 : contentCont.indexOf('】')
        let title = contentCont.substring(startIndex, endIndex)
        let content = contentCont.substring(endIndex + 1)
        const getTagsV2 = this.props.form.getFieldValue('tagsV2')
        if (content.trim() === '') {
            message.error('快讯内容不能为空!')
            return false
        }
        this.setState({
            // selectedTags: [],
            tagsLoading: true
        })
        let media = this.props.location.query.from === 'twitter' ? '快讯' : '快讯'
        axiosAjax('post', '/news/tags/predict', {
            content: content,
            title: title,
            media: media,
            passportId: hxPassportId
        }, (res) => {
            let selectedTags = []
            let newTagV2 = []
            let hash = {}
            let reducer = (item, next) => {
                if (hash[next.key]) {
                    hash[next.key] = true
                } else {
                    hash[next.key] = true
                    item.push(next)
                }
                return item
            }
            res.obj.forEach((tag) => {
                let tagsValue = JSON.stringify({id: tag.id, type: tag.type, name: tag.name})
                let newTag = {title: `${tag.name}-行情`, key: JSON.stringify({id: tag.id, type: tag.type}), label: tag.name}
                selectedTags.push(tagsValue)
                newTagV2.push(newTag)
            })
            let newV2 = [...getTagsV2, ...newTagV2].reduce(reducer, [])
            this.props.form.setFieldsValue({
                tagsV2: newV2
            })
            this.setState({
                selectedTags,
                smartTags: res.obj,
                smartTagsStatus: true,
                tagsLoading: false
            })
        })
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
    getPositionForTextArea=(ctrl) => {
        let CaretPos = {
            start: 0,
            end: 0
        }
        if (ctrl.selectionStart) {
            CaretPos.start = ctrl.selectionStart
        }
        if (ctrl.selectionEnd) {
            CaretPos.end = ctrl.selectionEnd
        }
        return (CaretPos)
    }

    handleAddText = () => {
        let props = this.contentProps.textAreaRef
        let position = this.getPositionForTextArea(props)
        const setCursorPosition = (ctrl, pos) => {
            ctrl.focus()
            ctrl.setSelectionRange(pos, pos)
        }
        let startStr = props.value.substr(0, position.start)
        let endStr = props.value.substr(position.start)
        this.props.form.setFieldsValue({
            content: startStr + 'MarsBit，' + endStr
        })
        setTimeout(function () {
            setCursorPosition(props, position.start + 2)
        }, 200)
    }
    handleSmartTagsCancel = () => {
        this.setState({
            smartTags: [],
            smartTagsStatus: false
        })
    }
    handleTagsSelect = (tag, checked) => {
        const tagObj = tag
        const { selectedTags } = this.state
        const getTagsV2 = this.props.form.getFieldValue('tagsV2')
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter(t => t !== tag)

        let {name, ...tagValue} = tagObj
        let newTag = [{title: `${tagObj.name}-行情`, key: JSON.stringify(tagValue), type: tagObj.type, label: tagObj.name}]
        let flag = false
        getTagsV2.forEach(item => {
            if (item.key === newTag[0].key) {
                flag = true
            }
        })
        this.props.form.setFieldsValue({
            tagsV2: checked
                ? flag ? [...getTagsV2] : [...getTagsV2, ...newTag]
                : getTagsV2.filter(t => t.key !== newTag[0].key)
        })
        this.setState({ selectedTags: nextSelectedTags })
    }
    inquireRepetition = (obj, type) => {
        let timestamp = Date.parse(new Date()) / 1000
        let inquire = {
            timeStamp: timestamp,
            title: obj.title,
            content: obj.content,
            media: '快讯'
        }
        axiosAjax('post', '/news/dedup/predict', inquire, (res) => {
            if (res.obj !== '') {
                this.setState({
                    isRepetition: true,
                    isRepetitionEdit: '该快讯与已有快讯高度相似',
                    similarityUrl: res.obj
                })
            } else if (res.obj === '' && type) {
                this.setState({
                    isRepetition: true,
                    isRepetitionEdit: '快讯内容无重复',
                    similarityUrl: ''
                })
            }
        })
    }
    isArticleAudit = (obj, type) => {
        let inquire = {
            title: obj.title,
            content: obj.content,
            media: '快讯'
        }
        axiosAjax('post', '/news/article/filter', inquire, (res) => {
            if (res.code !== 1) {
                // this.setState({
                //     isRepetition: true,
                //     isRepetitionEdit: type
                // })
            }
        })
    }
    // 检查重复
    isRepetition = () => {
        let content = $('#content').val()
        let reg = /【([^【】]+)】([^【】]*)/
        let obj = {
            content: reg.exec(content)[2],
            title: reg.exec(content)[1]
        }
        this.inquireRepetition(obj, 'edit')
        this.isArticleAudit(obj, 'edit')
    }
    isRepetitionOk = () => {
        this.setState({
            isRepetition: false
        })
    }

    isRepetitionCancel = () => {
        this.setState({
            isRepetition: false
        })
    }
    // 提交
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.setFieldsValue({
            images: this.state.images
        })
        this.props.form.validateFields((err, values) => {
            if (values.content.indexOf('【') === -1 || values.content.indexOf('】') === -1 || values.content.split('【')[1].indexOf('】') === -1) {
                message.error('快讯标题格式有误, 请修改后重新发表!')
                return false
            }
            if (!err) {
                this.setState({
                    loading: true
                })
                values.title = ''
                values.channelId = values.channelId || 0
                values.createdBy = Cookies.get('hx_passportId') || ''
                values.id = this.props.location.query.id || ''
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
                if (this.props.location.query.from === 'twitter') {
                    let fromWorkbench = localStorage.getItem('insertFlash')
                    values.fromWorkbench = JSON.parse(fromWorkbench).item.id
                }
                !this.state.updateOrNot && delete values.id
                delete values.watermark
                axiosAjax('post', `${this.state.updateOrNot ? '/lives/update' : '/lives/add'}`, values, (res) => {
                    this.setState({
                        loading: false
                    })
                    if (res.code === 1) {
                        this.dataGather(res.obj, '快讯', this.state.oldTags, values.tagsV2, res.currentTime)
                        message.success(this.state.updateOrNot ? '修改成功！' : '添加成功！')
                        hashHistory.push('/mflash-list')
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }
    // 上传图片
    handleCancel = () => this.setState({previewVisible: false})

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }
    handleTitle = (event) => {
        const { content, updateOrNot } = this.state
        // 更新内容
        if (updateOrNot) {
            this.setState({content: event.target.value + getContent(content)})
        } else {
            console.log(content)
            this.setState({content: '【' + event.target.value + '】'})
        }
    }
    getWAndH = (file) => {
        let data = new Promise((resolve) => {
            let reader = new FileReader()
            let image = new Image()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                image.src = e.target.result
            }
            resolve(image)
        }).then((res) => {
            return new Promise((resolve) => {
                res.onload = () => {
                    let w = res.width
                    let h = res.height
                    resolve({w, h})
                }
            })
        })
        return data
    }

    // m 封面
    handleMImgChange = ({file, fileList}) => {
        this.setState({
            imageList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                images: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                let obj = file.response.obj
                this.getWAndH(file.originFileObj).then((res) => {
                    let url = obj.indexOf('?') !== -1 ? `${obj}&w=${res.w}&h=${res.h}` : `${obj}?w=${res.w}&h=${res.h}`
                    this.setState({
                        images: url,
                        imageList: [{
                            uid: 0,
                            name: 'xxx.png',
                            status: 'done',
                            url: obj
                        }]
                    })
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    images: '',
                    imageList: []
                })
            }
        }
    }

    render () {
        const { getFieldDecorator } = this.props.form
        const { flashTypeList, flashInfo, location } = this.props
        const { selectedTags, imagesRemark, content, updateOrNot, tag, trend, imageList, previewVisible, previewImage, upCounts, downCounts } = this.state
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 19}
        }
        const defaultTag = [
            {
                id: 287,
                name: 'BTC',
                type: 1
            },
            {
                id: 695,
                name: 'ETH',
                type: 1
            },
            {
                id: 1110,
                name: 'LTC',
                type: 1
            },
            {
                id: 2066,
                name: 'XRP',
                type: 1
            },
            {
                id: 177,
                name: 'BCH',
                type: 1
            },
            {
                id: 669,
                name: 'EOS',
                type: 1
            },
            {
                id: 1328,
                name: 'OKB',
                type: 1
            },
            {
                id: 241,
                name: 'BNB',
                type: 1
            }
        ]
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )
        const options = this.state.data.map(d => <Option title={titleTrans(d.type, d.name)} dataType={d.type} className={`tagType-${d.type}`} value={JSON.stringify({id: d.id, type: d.type}) } key={d.id}>{d.name}</Option>)
        let insert = localStorage.getItem('insertFlash')
        return <div className="flash-send">
            <Spin spinning={this.state.loading} size="large">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <FormItem
                                label="内容："
                                {...formItemLayout}>
                                {getFieldDecorator('content', {
                                    initialValue: (updateOrNot && flashInfo) ? content : (!insert || location.query.from !== 'twitter' ? '' : `${JSON.parse(insert).item.brief}`),
                                    rules: [
                                        { required: true, message: '请输入快讯内容' }
                                    ]
                                })(
                                    <TextArea className="flash" ref={(input) => { this.contentProps = input }} rows={5} placeholder="示例：【快讯标题】快讯内容" />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <FormItem
                                labelCol={{span: 12}}
                                wrapperCol={{span: 12}}
                                label="快讯配图: "
                                className='upload-div'
                            >
                                <div className="dropbox">
                                    {getFieldDecorator('images', {
                                        initialValue: (updateOrNot && flashInfo) ? imageList : ''
                                    })(
                                        <Upload
                                            headers={{'Sign-Param': getSig()}}
                                            action={`${URL}/picture/upload`}
                                            data={{
                                                type: 'lives',
                                                watermark: this.state.watermark ? 1 : 0
                                            }}
                                            name='uploadFile'
                                            listType="picture-card"
                                            fileList={imageList}
                                            onPreview={this.handlePreview}
                                            onChange={this.handleMImgChange}
                                        >
                                            {imageList.length >= 1 ? null : uploadButton}
                                        </Upload>
                                    )}
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                        <img alt="example" style={{width: '100%'}} src={previewImage}/>
                                    </Modal>
                                </div>
                            </FormItem>
                        </Col>
                        <Col span={14}>
                            <FormItem labelCol={{span: 12}} wrapperCol={{span: 12}} label="图片注释：">
                                {getFieldDecorator('imagesRemark', {
                                    initialValue: (updateOrNot && flashInfo) ? imagesRemark : '',
                                    rules: [{ required: false }]
                                })(<Input placeholder='图片描述'/>)}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <FormItem
                            {...formItemLayout}
                            label="智能标签: "
                        >
                            {getFieldDecorator('smartTags', {
                                initialValue: this.state.tags.join(','),
                                rules: [{required: false, message: '至少输入一个标签！'}]
                            })(
                                <Input className="tag-item" style={{display: 'none'}}/>
                            )}
                            {!this.state.smartTagsStatus ? <div>
                                点击
                                <Button loading={this.state.tagsLoading} style={{margin: '0 10px'}} size="small" type="primary" onClick={this.handleSmartTags}>此处</Button>
                                根据内容智能生成行情(币)标签
                            </div> : <div>
                                {this.state.smartTags.length !== 0 ? this.state.smartTags.map(tag => {
                                    let tagsValue = {id: tag.id, type: tag.type, name: tag.name}
                                    return <CheckableTag
                                        style={{border: '1px dashed #108ee9'}}
                                        key={tagsValue.id}
                                        checked={selectedTags.indexOf(tagsValue) > -1}
                                        onChange={checked => this.handleTagsSelect(tagsValue, checked)}
                                    >{tag.name}</CheckableTag>
                                }) : '没有查询到相关标签'}
                                {this.state.smartTags.length !== 0 && '(点击选择/取消需要关联的标签)'}
                                <Button loading={this.state.tagsLoading} style={{margin: '0 10px'}} size="small" type="primary" onClick={this.handleSmartTags}>重新生成</Button>
                                <Button size="small" type="primary" onClick={this.handleSmartTagsCancel}>取消</Button>
                            </div>}
                            <div className="default-tag">
                                {defaultTag.map((item, index) => {
                                    let tagsVal = item
                                    return <CheckableTag
                                        key={index}
                                        style={{border: '1px solid #108ee9'}}
                                        onChange={checked => this.handleTagsSelect(tagsVal, checked)}
                                    >
                                        {item.name}</CheckableTag>
                                })}
                            </div>
                        </FormItem>
                    </Row>
                    <Row>
                        <FormItem
                            {...formItemLayout}
                            label="新版标签："
                        >
                            {getFieldDecorator('tagsV2', {
                                initialValue: (updateOrNot && flashInfo) ? (!flashInfo.tagsV2 || JSON.parse(flashInfo.tagsV2).length === 0 ? [] : this.transTags(JSON.parse(flashInfo.tagsV2))) : [],
                                rules: [
                                    { required: false, message: '请选择快讯标签！' }
                                ]
                            })(
                                <Select
                                    mode="multiple"
                                    showSearch
                                    labelInValue
                                    maxTagCount='2'
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
                            {this.state.noCurrResult && <p style={{position: 'absolute', right: '-155px', bottom: 0}}>
                                <span>未找到结果?</span>
                                <Button type="primary" loading={this.state.tagsIconLoading} style={{margin: '0 10px'}} onClick={this.addNewTag} size="small">创建</Button>
                                <span>一个</span>
                            </p>}

                        </FormItem>
                    </Row>
                    <Row>
                        <FormItem {...formItemLayout} label="链接地址：">
                            {getFieldDecorator('url', {
                                initialValue: (updateOrNot && flashInfo) ? `${flashInfo.url ? flashInfo.url : ''}` : '',
                                rules: [{ type: 'url', message: '请输入正确的超链接地址！' }]
                            })(
                                <Input placeholder="快讯中插入的超链接地址" />
                            )}
                        </FormItem>
                    </Row>
                    <Row>
                        <FormItem {...formItemLayout} label="图片水印：">
                            {getFieldDecorator('watermark', {
                                initialValue: true,
                                valuePropName: 'checked'
                            })(
                                <Switch
                                    onChange={(checked) => {
                                        this.setState({watermark: checked})
                                    }}
                                    checkedChildren="是"
                                    unCheckedChildren="否"
                                />)}
                        </FormItem>
                    </Row>
                    <Row>
                        <FormItem label="快讯标识：" labelCol={{span: 5}} wrapperCol={{span: 19}}>
                            {getFieldDecorator('tag', {
                                initialValue: (updateOrNot && flashInfo) ? (flashInfo.tag === 0 ? 1 : flashInfo.tag) : (!insert || location.query.from !== 'twitter' ? 1 : JSON.parse(insert).item.isImportant === 0 ? 1 : 2),
                                rules: [{ required: true, message: '请选择快讯标识！' }]
                            })(
                                <RadioGroup
                                    options={tagOptions}
                                    onChange={this.tagChange}
                                    setFieldsValue={tag}>
                                </RadioGroup>
                            )}
                        </FormItem>
                    </Row>
                    <Row>
                        {flashTypeList.length !== 0 && <FormItem labelCol={{span: 4}} wrapperCol={{span: 20}} label="频道：">
                            {getFieldDecorator('channelId', {
                                initialValue: (updateOrNot && flashInfo) ? `${flashInfo.channelId}` : '0',
                                rules: [{ required: true, message: '请选择快讯频道！' }]
                            })(
                                <RadioGroup options={flashTypeList.filter(item => !item.disabled)} onChange={this.channelIdChange} setFieldsValue={this.state.channelId}></RadioGroup>
                            )}

                        </FormItem>}
                    </Row>
                    <Row>
                        {updateOrNot ? '' : <FormItem labelCol={{span: 4}} wrapperCol={{span: 20}} label="趋势：">
                            {getFieldDecorator('trend', {
                                initialValue: (updateOrNot && flashInfo) ? (flashInfo.trend && flashInfo.trend === 2 ? 2 : 1) : 1,
                                rules: [{ required: true, message: '请选择利好/利空趋势！' }]
                            })(
                                <RadioGroup
                                    options={trendOptions}
                                    onChange={this.trendChange}
                                    setFiledValue={trend}
                                >
                                </RadioGroup>
                            )}
                        </FormItem>}
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem labelCol={{span: 8}} wrapperCol={{span: 14}} label="利好数">
                                {getFieldDecorator('upCounts', {
                                    initialValue: (updateOrNot && flashInfo) ? (flashInfo.upCounts || 0) : upCounts
                                })(<InputNumber />)}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem labelCol={{span: 8}} wrapperCol={{span: 14}} label="利空数">
                                {getFieldDecorator('downCounts', {
                                    initialValue: (updateOrNot && flashInfo) ? (flashInfo.downCounts || 0) : downCounts
                                })(<InputNumber />)}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row style={{textAlign: 'center'}}>
                        <Button type="primary" onClick={this.handleSubmit} style={{width: '35%', marginRight: '20px'}}>发表</Button>
                        <Button type="primary" onClick={() => { hashHistory.goBack() }} style={{width: '35%'}} className="cancel">取消</Button>
                    </Row>
                </Form>
            </Spin>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.flashInfo.userInfo,
        flashInfo: state.flashInfo.info,
        flashTypeList: state.flashTypeListInfo,
        getData: state.publicInfo.tempData
    }
}

export default connect(mapStateToProps)(Form.create()(MflashEdit))
