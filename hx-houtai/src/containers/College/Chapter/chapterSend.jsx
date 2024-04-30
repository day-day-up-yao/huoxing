/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {hashHistory} from 'react-router'
import '../../../../node_modules/cropperjs/dist/cropper.css'
import CloseWindow from '../../../components/CloseWindow/index'

import {
    Form,
    Input,
    Upload,
    Icon,
    Modal,
    Button,
    message,
    Spin,
    // DatePicker,
    Radio,
    Switch,
    Progress
} from 'antd'
// import moment from 'moment'
import {getChapterItemInfo} from '../../../actions/college/chapter.action'
import {axiosFormData, axiosAjax, URL, getSig} from '../../../public/index'
import './index.scss'

const FormItem = Form.Item
const {TextArea} = Input
const RadioGroup = Radio.Group

let uploadId = ''
let currIndex = 1
let pause = false

const resTypeOptions = [
    {label: '音频', value: '1'},
    {label: '视频', value: '2'}
]

// http://hx24-media.huoxing24.com/

class ChapterSend extends Component {
    constructor (props) {
        super(props)
        this.state = {
            cancel: false,
            closeLoading: false,
            updateOrNot: false,
            topOrder: 0,
            chapterfileList: [],
            chapterList: [],
            inputVisible: false,
            inputValue: '',
            channelId: '1',
            chapterVisible: false,
            cateId: '1',
            previewVisible: false,
            previewImage: '',
            chapterUrl: '',
            uploading: false,
            progressNum: 0,
            loading: true,
            isPay: true,
            resType: '2',
            hasChanged: false,
            confirmLoading: false
        }
    }

    insertState = (arr) => {
        arr.map((item) => {
            this.state[item + 'fileList'] = []
            this.state[item + 'coverImgUrl'] = ''
        })
    }

    componentWillMount () {
        this.insertState([''])
    }

    componentDidMount () {
        const {dispatch, location} = this.props
        if (location.query.id || location.query.url) {
            dispatch(getChapterItemInfo({'id': location.query.id}, (res) => { this.renderData(res) }))
        } else {
            this.setState({
                loading: false
            })
            sessionStorage.setItem('hx_content', '')
        }
    }

    fileList = (imgUrl) => {
        return [{
            uid: 0,
            name: 'xxx.png',
            status: 'done',
            url: imgUrl
        }]
    }

    renderData = (data) => {
        let fileList = this.fileList(data.coverUrl)

        this.setState({
            updateOrNot: true,
            fileList: fileList,
            chapterfileList: [{
                uid: 'uid-00000',
                fileName: data.title,
                name: data.title,
                fileUrl: data.key
            }],
            coverImgUrl: data.coverUrl,
            chapterUrl: data.key,
            loading: false
        })
    }

    // 频道改变
    channelIdChange = (e) => {
        this.setState({
            channelId: e.target.value
        })
    }

    cateIdChange = (e) => {
        this.setState({
            cateId: e.target.value
        })
    }

    // 上传图片预览
    handleCancel = () => this.setState({previewVisible: false})

    handlePreview = (file) => {
        if (file.hasOwnProperty('target')) {
            const type = file.target.getAttribute('data-type')
            if (this.state[type] !== '') {
                this.setState({
                    previewImage: this.state[type],
                    previewVisible: true
                })
            } else {
                message.info('请先上传图片')
            }
        } else {
            this.setState({
                previewImage: file.url || file.thumbUrl,
                previewVisible: true
            })
        }
    }

    // pc 图片上传
    handleChange = ({file, fileList}) => {
        this.setState({
            fileList: fileList
        })
        if (file.status === 'removed') {
            this.setState({
                coverImgUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    coverImgUrl: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    coverImgUrl: '',
                    fileList: []
                })
            }
        }
    }

    // 大文件上传
    handleUpload = () => {
        const {chapterList} = this.state
        let file = chapterList[0]
        let totalSize = file.size // 文件大小
        let blockSize = 1024 * 1024 * 2 // 块大小
        let blockCount = Math.ceil(totalSize / blockSize) // 总块数
        // 创建FormData对象
        let formData = new FormData()
        formData.append('fileName', file.name) // 文件名
        formData.append('blockCount', blockCount) // 总块数
        formData.append('currIndex', currIndex) // 当前上传的块下标
        formData.append('uploadId', uploadId) // 上传编号
        formData.append('uploadFile', null)
        formData.append('type', parseInt(this.state.resType) === 1 ? 'college_audio' : 'college_video')
        this.setState({
            uploading: true
        })
        this.UploadChapter(file, formData, totalSize, blockCount, blockSize)
    }

    UploadChapter = (file, formData, totalSize, blockCount, blockSize) => {
        if (pause) {
            return // 暂停
        }
        try {
            let start = (currIndex - 1) * blockSize
            let end = Math.min(totalSize, start + blockSize)
            let uploadFile = file.slice(start, end)
            formData.set('uploadFile', uploadFile)
            formData.set('currIndex', currIndex)
            formData.set('uploadId', uploadId)

            axiosFormData('post', '/file/upload', formData, (res, source) => {
                if (res.request) {
                    clearInterval(this.timeOut)
                    this.timeOut = setTimeout(() => {
                        this.UploadChapter(file, formData, totalSize, blockCount, blockSize)
                    }, 10000)
                    return false
                }
                if (res.response) {
                    if (/^(5|4)\d{2}/.test(res.response.status)) {
                        clearInterval(this.timeOut)
                        this.timeOut = setTimeout(() => {
                            this.UploadChapter(file, formData, totalSize, blockCount, blockSize)
                        }, 10000)
                    }
                    return false
                }

                /** 取消上传 备用
                if (this.state.cancel) {
                    source.cancel('已取消上传')
                    message.error('已取消上传')
                    this.setState({
                        cancel: false,
                        uploading: false,
                        progressNum: 0
                    })
                    return false
                }
                */

                if (res.code === 1) {
                    clearInterval(this.timeOut)
                    if (currIndex === 1) {
                        uploadId = res.obj
                    }
                    let num = currIndex / blockCount * 100
                    if ((currIndex + 1) === blockCount) {
                        num = 99
                    }
                    this.setState({
                        progressNum: parseFloat(num.toFixed(2))
                    })
                    if (currIndex < blockCount) {
                        currIndex = currIndex + 1
                        this.UploadChapter(file, formData, totalSize, blockCount, blockSize)
                    }
                } else if (res.code < 0) {
                    uploadId = ''
                    currIndex = 1
                    message.error(res.msg)
                } else if (res.code === 2) {
                    clearInterval(this.timeOut)
                    uploadId = ''
                    currIndex = 1
                    let {chapterfileList} = this.state
                    let newChapterFile = []
                    chapterfileList.map((item, index) => {
                        newChapterFile.push({
                            uid: item.uid,
                            fileName: item.name,
                            name: item.name,
                            fileUrl: res.obj
                        })
                    })
                    this.setState({
                        chapterUrl: res.obj,
                        chapterList: [],
                        chapterfileList: newChapterFile,
                        uploading: false,
                        progressNum: 0
                    })
                    if (parseInt(this.state.resType) === 2) {
                        this.getCoverPic(res.obj)
                    }
                    this.getDuration(res.obj)
                    message.success('文件上传成功!')
                } else {
                    this.setState({
                        uploading: false,
                        progressNum: 0
                    })
                    uploadId = ''
                    currIndex = 1
                    message.error(res.msg)
                }
            }, this.state.cancel)
        } catch (e) {
            console.log(e)
        }
    }

    // 上传成功之后自动获取封面
    getCoverPic (url) {
        axiosAjax('get', '/college/media/snapshot', {
            url: url || this.state.chapterUrl,
            time: 6
        }, (data) => {
            if (data.code !== 1) {
                message.error(data.msg)
                return false
            } else {
                this.setState({
                    fileList: this.fileList(data.obj),
                    coverImgUrl: data.obj
                })
            }
        })
    }

    // 上传成功之后自动获取时长
    getDuration (url) {
        axiosAjax('get', '/college/media/duration', {
            url: url || this.state.chapterUrl
        }, (data) => {
            if (data.code !== 1) {
                message.error(data.msg)
                return false
            } else {
                this.setState({
                    duration: data.obj
                })
            }
        })
    }

    chapterVisibleHide = () => {
        this.setState({chapterVisible: false})
    }

    chapterVisibleShow = () => {
        this.setState({chapterVisible: true})
    }

    delChapter = () => {
        this.setState({
            chapterfileList: [],
            chapterList: [],
            fileList: [],
            coverImgUrl: ''
        })
    }

    // 提交
    handleSubmit = (e) => {
        e.preventDefault()
        const This = this
        if (this.state.uploading) {
            message.warning('章节正在上传, 请稍候提交!')
            return false
        }

        this.props.form.setFieldsValue({
            coverUrl: this.state.coverImgUrl,
            isPay: this.state.isPay === 1,
            resourceUrl: this.state.chapterUrl
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                values.id = this.props.location.query.id || ''
                values.resourceId = this.props.location.query.resourceId || this.props.chapterInfo.resourceId || ''
                values.duration = this.state.duration || 0
                values.isPay = values.isPay ? 1 : 0
                if (this.state.updateOrNot && !this.state.hasChanged) {
                    delete values.resourceUrl
                }
                !(this.state.updateOrNot && this.props.location.query.id) && delete values.id
                axiosAjax('post', `${(this.state.updateOrNot && this.props.location.query.id) ? '/college/lesson/updateChapter' : '/college/lesson/chapterAdd'}`, values, (res) => {
                    this.setState({
                        loading: false
                    })
                    if (res.code === 1) {
                        message.success(this.state.updateOrNot ? '修改成功！' : '添加成功！')
                        // hashHistory.push('/chapter-list')
                        This.closeWindow()
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 内容格式化
    createMarkup = (str) => {
        return {__html: str}
    }

    closeWindow = () => {
        this.setState({
            closeLoading: true
        })
    }

    // 类型改变
    resTypeChange = (e) => {
        const {form} = this.props
        if (e.target.value === '1') {
            form.setFieldsValue({
                resType: '1'
            })
        } else {
            form.setFieldsValue({
                resType: '2'
            })
        }
        this.setState({
            resType: e.target.value
        })
    }

    getResorceUrl (params) {
        axiosAjax('post', '/college/lesson/chapterUrl', params, (res) => {
            if (res.code === 1) {
                window.open(res.obj)
            } else {
                message.error('获取课程链接错误, 请重试！')
            }
        })
    }

    // 上传图片组件
    FormItem = (require, imgName, label, imgUrl, chapterInfo, fileList, changeEvent, size, noBtn) => {
        const {updateOrNot} = this.state
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 15, offset: 1}
        }
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )

        return <FormItem
            {...formItemLayout}
            label={label}>
            <div className="dropbox">
                {getFieldDecorator(imgName, {
                    initialValue: (updateOrNot && chapterInfo) ? fileList : '',
                    rules: [{required: require, message: `请上传${label}封面！`}]
                })(
                    <Upload
                        headers={{'Sign-Param': getSig()}}
                        action={`${URL}/pic/upload`}
                        name='uploadFile'
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={changeEvent}>
                        {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                )}
                {noBtn ? '' : <Button
                    data-type={imgUrl}
                    onClick={() => {
                        this.getCoverPic(this.state.chapterUrl)
                        this.getDuration(this.state.chapterUrl)
                    }}
                    className="img-preview"
                    type="primary">获取封面</Button>}
                <span className="cover-img-tip">用于 {label} 的封面展示</span>
            </div>
        </FormItem>
    }

    render () {
        const {getFieldDecorator} = this.props.form
        const {chapterInfo, location} = this.props
        const {hasChanged, progressNum, chapterfileList, uploading, previewVisible, previewImage, fileList, updateOrNot, resType} = this.state
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 15, offset: 1}
        }
        return <div className="chapter-send">
            <Spin spinning={this.state.loading} size='large'>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="章节类型: ">
                        {getFieldDecorator('resType', {
                            initialValue: (updateOrNot && chapterInfo) ? `${chapterInfo.resType || '2'}` : '2'
                        })(
                            <RadioGroup
                                options={resTypeOptions}
                                onChange={this.resTypeChange}
                                setFieldsValue={this.state.resType}>
                            </RadioGroup>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="章节标题: ">
                        {getFieldDecorator('title', {
                            initialValue: (updateOrNot && chapterInfo) ? `${chapterInfo.title}` : '',
                            rules: [{required: true, message: '请输入章节标题！'}]
                        })(
                            <Input placeholder="请输入章节标题"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="章节简介: "
                    >
                        {getFieldDecorator('text', {
                            initialValue: (updateOrNot && chapterInfo) ? `${chapterInfo.text}` : '',
                            rules: [{required: true, message: '请输入章节简介'}]
                        })(
                            <TextArea className="chapter-summary" placeholder="请输入章节简介" rows={4}/>
                        )}
                    </FormItem>

                    {/*
                    <FormItem
                        {...formItemLayout}
                        label="发布日期: "
                    >
                        {getFieldDecorator('publishTime', {
                            rules: [{required: true, message: '请选择章节发布时间！'}],
                            initialValue: (updateOrNot && chapterInfo) ? moment(formatDate(chapterInfo.publishTime), 'YYYY-MM-DD HH:mm:ss') : moment()
                        })(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                        )}
                    </FormItem>
                    */}

                    <FormItem
                        {...formItemLayout}
                        label="章节上传">
                        {getFieldDecorator('resourceUrl', {
                            rules: [{required: true, message: '请上传章节！'}]
                        })(
                            <Upload
                                name='uploadFile'
                                action='/file/upload'
                                accept={parseInt(resType) === 1 ? 'audio/*' : 'video/*'}
                                onRemove={(file) => {
                                    this.setState(({fileList}) => {
                                        const index = fileList.indexOf(file)
                                        const newFileList = fileList.slice()
                                        newFileList.splice(index, 1)
                                        return {
                                            chapterList: newFileList,
                                            chapterfileList: newFileList,
                                            fileList: []
                                        }
                                    })
                                    uploadId = ''
                                    currIndex = 1
                                }}
                                beforeUpload={(file) => {
                                    this.setState({
                                        chapterList: [file],
                                        chapterfileList: [file],
                                        hasChanged: true
                                    })
                                    return false
                                }}
                                fileList={this.state.chapterList}
                            >
                                <Button><Icon type="upload"/> 选择章节</Button>
                            </Upload>
                        )}
                        {(() => {
                            if (chapterfileList.length === 0) {
                                return ''
                            } else if (chapterfileList[0].fileName) {
                                return <div style={{margin: '10px 0 0'}}>
                                    <a target="_blank" onClick={() => {
                                        let params = !hasChanged && location.query.id ? {id: location.query.id} : {url: this.state.chapterUrl}
                                        this.getResorceUrl(params)
                                    }}>{chapterfileList[0].fileName}</a>
                                    {!uploading && !location.query.id && <span> (解码需要1-2分钟, 请稍后点击查看)</span>}
                                    <Button size="small" onClick={this.delChapter} style={{marginLeft: 15, color: '#52b8fc', cursor: 'pointer'}}>删除</Button>
                                </div>
                            }
                        })()}
                        <Button
                            style={{marginTop: 16}}
                            className="upload-demo-start"
                            type="primary"
                            onClick={this.handleUpload}
                            disabled={this.state.chapterList.length === 0}
                            loading={uploading}
                        >
                            {uploading ? '上传中' : '开始上传'}
                        </Button>
                        {uploading &&
                        <Progress
                            strokeWidth={5} style={{width: 300, display: 'block'}}
                            percent={progressNum}
                            status="active"/>}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="是否付费: "
                    >
                        {getFieldDecorator('isPay', {
                            initialValue: (updateOrNot && chapterInfo.isPay) ? parseInt(chapterInfo.isPay) === 1 : false,
                            valuePropName: 'checked'
                        })(
                            <Switch
                                onChange={(checked) => {
                                    this.setState({isPay: checked ? 1 : 0})
                                }}
                                checkedChildren="是"
                                unCheckedChildren="否"
                            />
                        )}
                    </FormItem>

                    {/** 是否独家
                    <FormItem
                        {...formItemLayout}
                        label="是否独家: "
                    >
                        {getFieldDecorator('original', {
                            initialValue: (updateOrNot && chapterInfo.original) ? parseInt(chapterInfo.original) === 1 : false,
                            valuePropName: 'checked'
                        })(
                            <Switch
                                onChange={(checked) => {
                                    this.setState({original: checked ? 1 : 0})
                                }}
                                checkedChildren="是"
                                unCheckedChildren="否"
                            />
                        )}
                    </FormItem>
                     频道和类别
                    <FormItem {...formItemLayout} label="频道: ">
                        {getFieldDecorator('channelId', {
                            initialValue: (updateOrNot && chapterInfo) ? `${chapterInfo.channelId || '1'}` : '1'
                        })(
                            <RadioGroup
                                options={channelIdOptions}
                                onChange={this.channelIdChange}
                                setFieldsValue={this.state.channelId}>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="类别: ">
                        {getFieldDecorator('cateId', {
                            initialValue: (updateOrNot && chapterInfo) ? `${chapterInfo.cateId || '2'}` : '1'
                        })(
                            <RadioGroup
                                options={cateIdOptions}
                                onChange={this.cateIdChange}
                                setFieldsValue={this.state.cateId}>
                            </RadioGroup>
                        )}
                    </FormItem>
                    */}

                    {this.FormItem(true, 'coverUrl', '播放器封面', 'coverImgUrl', chapterInfo, fileList, this.handleChange, '285 * 160', true)}

                    <FormItem
                        wrapperCol={{span: 12, offset: 2}}
                    >
                        <Button
                            type="primary" data-status='1' onClick={this.handleSubmit}
                            style={{marginRight: '10px'}}>添加</Button>
                        {/*
                        <Button
                            type="primary" data-status='0' onClick={this.handleSubmit}
                            style={{marginRight: '10px'}}>存为草稿</Button>
                        */}
                        <Button
                            type="primary" className="cancel"
                            onClick={this.closeWindow}>取消</Button>
                    </FormItem>

                    {/* 图片预览 */}
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{width: '100%'}} src={previewImage}/>
                    </Modal>
                </Form>
            </Spin>
            {this.state.closeLoading && <CloseWindow handleCancel={(timer) => {
                clearInterval(timer)
                this.setState({
                    closeLoading: false
                })
            }} closeLoading = {this.state.closeLoading}/>}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.chapterInfo.userInfo,
        chapterInfo: state.chapterInfo.info
    }
}

export default connect(mapStateToProps)(Form.create()(ChapterSend))
