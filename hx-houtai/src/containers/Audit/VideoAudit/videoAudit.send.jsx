/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Cropper from '../../../../node_modules/cropperjs/dist/cropper.esm.js'
import CloseWindow from '../../../components/CloseWindow/index'
import '../../../../node_modules/cropperjs/dist/cropper.css'
import Cookies from 'js-cookie'

import {
    Form,
    Input,
    Upload,
    Icon,
    Modal,
    Button,
    message,
    Row,
    Col,
    Spin,
    DatePicker,
    Progress,
    Select,
    Tag
} from 'antd'
import moment from 'moment'
import {getVideoAuditItemInfo} from '../../../actions/audit/videoAudit.action'
import {axiosFormData, axiosAjax, URL, formatDate, isJsonString, getSig, dataURLtoBlob, titleTrans} from '../../../public/index'
import './videoAudit.scss'
// import CropperImg from '../../components/CropperImg'

const FormItem = Form.Item
const {TextArea} = Input
const {Option} = Select
const {CheckableTag} = Tag
const confirm = Modal.confirm

let uploadId = ''
let currIndex = 1
let pause = false
let timeout, currentValue
let hxPassportId = Cookies.get('hx_passportId')

class VideoAuditSend extends Component {
    constructor (props) {
        super(props)
        this.state = {
            closeLoading: false,
            reason: '',
            updateOrNot: false,
            topOrder: 0,
            tags: [],
            data: [],
            videofileList: [],
            videoList: [],
            inputVisible: false,
            inputValue: '',
            channelId: '1',
            newsVisible: false,
            cateId: '1',
            previewVisible: false,
            previewImage: '',
            videoUrl: '',
            uploading: false,
            progressNum: 0,
            loading: true,
            original: 0,
            subject: 0,
            uploadAllImgModal: false,
            cropper: null,
            focusImg: -1,
            ratio: 640 / 360,
            cropImgRule: [
                {
                    coverName: 'mcoverImgUrl',
                    coverList: 'mfileList',
                    width: '320px',
                    height: '180px',
                    ratio: 640 / 360,
                    intro: 'M端列表缩略图:640 * 360'
                }, {
                    coverName: 'coverImgUrl',
                    coverList: 'fileList',
                    width: '285px',
                    height: '160px',
                    ratio: 285 / 160,
                    intro: 'PC端列表缩略图:285 * 160'
                }
                // , {
                //     coverName: 'pccoverImgUrl',
                //     coverList: 'pcfileList',
                //     width: '285px',
                //     height: '160px',
                //     ratio: 285 / 160,
                //     intro: 'PC端推荐位视频封面:285 * 160'
                // }, {
                //     coverName: 'mccoverImgUrl',
                //     coverList: 'mcfileList',
                //     width: '320px',
                //     height: '180px',
                //     ratio: 640 / 360,
                //     intro: 'M端推荐位视频封面:640 * 360'
                // }
            ]
        }
    }

    insertState = (arr) => {
        arr.map((item) => {
            this.state[item + 'fileList'] = []
            this.state[item + 'coverImgUrl'] = ''
        })
    }

    componentWillMount () {
        this.insertState(['videoPc', 'videoM', 'all', '', 'pc', 'm', 'mc'])
    }

    componentDidMount () {
        const {dispatch, location} = this.props
        if (location.query.id || location.query.url) {
            dispatch(getVideoAuditItemInfo({'id': location.query.id}, (res) => {
                this.renderData(res)
                console.log(res)
            }))
        } else {
            this.setState({
                loading: false
            })
        }
    }

    closeWindow = () => {
        this.setState({
            closeLoading: true
        })
    }

    fileList = (picJson, imgUrl) => {
        if (picJson[imgUrl] && picJson[imgUrl] !== '') {
            return [{
                uid: 0,
                name: 'xxx.png',
                status: 'done',
                url: picJson[imgUrl]
            }]
        } else {
            return []
        }
    }

    renderData = (data) => {
        let coverPic = isJsonString(data.coverPic) ? JSON.parse(data.coverPic) : {
            pc_recommend: '',
            pc: '',
            wap_big: '',
            wap_small: '',
            video_pc: '',
            video_m: ''
        }
        let pcfileList = this.fileList(coverPic, 'pc_recommend')
        let videoPcfileList = this.fileList(coverPic, 'video_pc')
        let videoMfileList = this.fileList(coverPic, 'video_m')
        let fileList = this.fileList(coverPic, 'pc')
        let mfileList = (('video_m' in coverPic) && coverPic.video_m !== '') ? this.fileList(coverPic, 'video_m') : this.fileList(coverPic, 'wap_small')
        let mcfileList = this.fileList(coverPic, 'wap_big')

        this.setState({
            updateOrNot: true,
            videoPcfileList: videoPcfileList,
            videoMfileList: videoMfileList,
            fileList: fileList,
            pcfileList: pcfileList,
            mfileList: mfileList,
            mcfileList: mcfileList,
            videofileList: isJsonString(data.url) ? JSON.parse(data.url) : [],
            tags: !data.tags ? [] : data.tags.split(','),
            content: data.content,
            coverImgUrl: coverPic.pc || '',
            allcoverImgUrl: coverPic.all,
            pccoverImgUrl: coverPic.pc_recommend || '',
            mcoverImgUrl: (('video_m' in coverPic) && coverPic.video_m !== '') ? coverPic.video_m : coverPic.wap_small || '',
            mccoverImgUrl: coverPic.wap_big || '',
            videoMcoverImgUrl: coverPic.video_m || '',
            videoPccoverImgUrl: coverPic.video_pc || '',
            videoUrl: isJsonString(data.url) ? JSON.parse(data.url)[0].fileUrl : '',
            loading: false,
            original: data.original || 0,
            subject: data.subject || 1,
            topOrder: data.topOrder || 0
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

    // 标签设置
    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag)
        this.setState({tags})
    }

    showInput = () => {
        this.setState({inputVisible: true}, () => this.input.focus())
    }

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    handleInputConfirm = () => {
        const state = this.state
        const inputValue = state.inputValue
        let tags = state.tags
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue.slice(0, 20)]
        }
        this.setState({
            tags,
            inputVisible: false,
            inputValue: ''
        })
    }

    saveInputRef = (input) => {
        this.input = input
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

    // pc 视频展示图上传
    handleVideoAuditPcChange = ({file, fileList}) => {
        this.setState({
            videoPcfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                videoPccoverImgUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    videoPccoverImgUrl: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    videoPccoverImgUrl: '',
                    videoPcfileList: []
                })
            }
        }
    }

    // 手机端视频展示图上传
    handleVideoAuditMChange = ({file, fileList}) => {
        this.setState({
            videoMfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                videoMcoverImgUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    videoMcoverImgUrl: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    videoMcoverImgUrl: '',
                    videoMfileList: []
                })
            }
        }
    }

    // pc 推荐位展示图上传
    handlePcChange = ({file, fileList}) => {
        this.setState({
            pcfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                pccoverImgUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    pccoverImgUrl: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    pccoverImgUrl: '',
                    pcfileList: []
                })
            }
        }
    }

    // 手机端展示图上传
    handleMobileChange = ({file, fileList}) => {
        this.setState({
            mfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                mcoverImgUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    mcoverImgUrl: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    mcoverImgUrl: '',
                    mfileList: []
                })
            }
        }
    }

    // 手机端推荐展示图上传
    handleMobileCommentChange = ({file, fileList}) => {
        this.setState({
            mcfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                mccoverImgUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    mccoverImgUrl: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    mccoverImgUrl: '',
                    mcfileList: []
                })
            }
        }
    }

    // pcSubjectfileList: [],
    // mSubjectfileList: [],
    // pcHotSubjectfileList: [],
    // mHotSubjectfileList: [],
    // pcSubjectcoverImgUrl: '',
    // mSubjectcoverImgUrl: '',
    // pcHotSubjectcoverImgUrl: '',
    // mHotSubjectcoverImgUrl: '',

    // 大文件上传
    handleUpload = () => {
        const {videoList} = this.state
        let file = videoList[0]
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
        formData.append('type', 'video')
        this.setState({
            uploading: true
        })
        this.UploadVideo(file, formData, totalSize, blockCount, blockSize)
    }

    UploadVideo = (file, formData, totalSize, blockCount, blockSize) => {
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

            axiosFormData('post', '/file/upload', formData, (res) => {
                if (res.request) {
                    clearInterval(this.timeOut)
                    this.timeOut = setTimeout(() => {
                        this.UploadVideo(file, formData, totalSize, blockCount, blockSize)
                    }, 10000)
                    return false
                }
                if (res.response) {
                    if (/^(5|4)\d{2}/.test(res.response.status)) {
                        clearInterval(this.timeOut)
                        this.timeOut = setTimeout(() => {
                            this.UploadVideo(file, formData, totalSize, blockCount, blockSize)
                        }, 10000)
                    }
                    return false
                }
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
                        this.UploadVideo(file, formData, totalSize, blockCount, blockSize)
                    }
                } else if (res.code < 0) {
                    uploadId = ''
                    currIndex = 1
                    message.error(res.msg)
                } else if (res.code === 2) {
                    clearInterval(this.timeOut)
                    uploadId = ''
                    currIndex = 1
                    let {videofileList} = this.state
                    let newVideoFile = []
                    videofileList.map((item, index) => {
                        newVideoFile.push({
                            uid: item.uid || 'rc-upload-1532064573892-139',
                            fileName: item.name,
                            name: item.name,
                            fileUrl: res.obj
                        })
                    })
                    this.setState({
                        videoUrl: res.obj,
                        videoList: [],
                        videofileList: newVideoFile,
                        uploading: false
                    })
                    message.success('文件上传成功!')
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    newsVisibleHide = () => {
        this.setState({newsVisible: false})
    }

    newsVisibleShow = () => {
        this.setState({newsVisible: true})
    }

    delVideoAudit = () => {
        this.setState({
            videofileList: []
        })
    }

    // 统一上传
    uploadAllImg = ({file, fileList}) => {
        const This = this
        this.setState({
            allfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                allfilelist: [],
                allcoverImgUrl: ''
            })

            this.state.cropImgRule.map(function (item, index) {
                This.setState({
                    [item.coverName]: '',
                    [item.coverList]: []
                })
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    allcoverImgUrl: file.response.obj,
                    uploadAllImgModal: true,
                    focusImg: -1
                }, () => {
                    const image = document.querySelector('#croppedImg')
                    image.src = file.thumbUrl

                    This.setState({
                        cropper: new Cropper(image, {
                            aspectRatio: this.state.ratio,
                            crop: function (e) {
                                const cropper = this.cropper
                                const imageData = cropper.getCroppedCanvas({
                                    maxWidth: 640
                                })
                                const base64url = imageData.toDataURL('image/jpeg')

                                const $cropperWrap = $('.crop-preview-item')
                                const focusImg = This.state.focusImg
                                if (focusImg === -1) {
                                    $cropperWrap.each(function (item, index) {
                                        $(this).children('img').attr('src', base64url)
                                    })
                                } else {
                                    $cropperWrap.eq(focusImg).children('img').attr('src', base64url)
                                }
                            }
                        })
                    })
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    allcoverImgUrl: '',
                    allfileList: []
                })
            }
        }
    }

    changeActiveImg (e, item, index) {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
        if (index === this.state.focusImg) {
            return false
        }
        this.setState({
            ratio: item.ratio,
            focusImg: index
        }, () => {
            this.state.cropper.setAspectRatio(item.ratio)
        })
    }

    sureCropImg = () => {
        const This = this
        this.setState({
            uploadAllImgModal: false,
            loading: true
        })
        message.warning('上传中，请稍候！')
        this.state.cropper.destroy()
        $('.crop-preview-item').each(function (d, i) {
            const coverName = $(this).data('type')
            const coverList = $(this).data('list')
            This.setState({
                [coverName]: '',
                [coverList]: []
            })
            let blob = dataURLtoBlob($(this).find('img').prop('src'))
            const formData = new FormData()
            formData.append('uploadFile', blob)
            $.ajax(`${URL}/pic/upload`, {
                headers: {'Sign-Param': getSig()},
                method: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (d === 0) {
                        This.setState({
                            loading: false
                        })
                        message.success('上传完毕！')
                    }
                    This.setState({
                        [coverName]: data.obj,
                        [coverList]: [{
                            uid: 0,
                            name: 'xxx.png',
                            status: 'done',
                            url: data.obj
                        }]
                    }, function () {
                        // console.log(This.state[coverName])
                    })
                },
                error: function () {
                    console.log('Upload error')
                }
            })
        })
    }

    uploadAllImgCancel = () => {
        this.setState({
            uploadAllImgModal: false
        })
        this.state.cropper.destroy()
    }

    getReason = (e) => {
        this.setState({
            reason: e.target.value
        })
    }

    // 提交
    handleSubmit = (e) => {
        e.preventDefault()
        let status = e.target.getAttribute('data-status')
        let _this = this
        // 判断是否不通过审核
        if (status === '2') {
            confirm({
                title: '提示',
                content: <div className="modal-input">
                    <span style={{marginRight: 10}}>请填写不通过原因：</span>
                    <TextArea rows={3} autoFocus onChange={(e) => { _this.getReason(e) }}/>
                </div>,
                onOk () {
                    _this.setState({
                        loading: true
                    })
                    if (_this.state.reason.trim() !== '') {
                        axiosAjax('POST', '/video/status', {
                            id: _this.props.newsInfo.id,
                            status: 2,
                            reason: _this.state.reason
                        }, (res) => {
                            if (res.code === 1) {
                                message.success('操作成功！')
                                _this.closeWindow()
                                // hashHistory.push('/audit-video')
                            } else {
                                _this.setState({
                                    loading: false
                                })
                                message.error(res.msg)
                            }
                        })
                    }
                }
            })
            return false
        }

        if (this.state.uploading) {
            message.warning('视频正在上传, 请稍候提交!')
            return false
        }

        let pt = Date.parse(this.props.form.getFieldValue('publishTime').format('YYYY-MM-DD HH:mm:ss'))
        let nt = Date.parse(new Date())

        if (status === '3' && (pt <= nt)) {
            message.warning('预发布时间应 大于 当前时间，请重新设置!')
            return false
        }

        if (status === '1' && (pt > nt)) {
            message.warning('直接发布的时间应 小于等于 当前时间，请重新设置!')
            return false
        }

        this.props.form.setFieldsValue({
            tags: this.state.tags.join(','),
            // original: this.state.original,
            // subject: this.state.subject,
            pc_recommend: this.state.pccoverImgUrl,
            pc: this.state.coverImgUrl,
            wap_small: this.state.mcoverImgUrl,
            wap_big: this.state.mccoverImgUrl,
            url: this.state.videofileList[0] && this.state.videofileList[0].fileUrl ? JSON.stringify(this.state.videofileList) : '',
            video_m: this.state.mcoverImgUrl
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            /* -------------------------------标签功能 start----------------------------- */
            if (!err && status !== '2') {
                if (values.tagsV2.length === 0) {
                    values.tagsV2 = ''
                    values.tags = ''
                } else {
                    let arr = []
                    let str = ''
                    values.tagsV2.forEach((item) => {
                        arr.push({
                            name: item.label,
                            ...JSON.parse(item.key)
                        })
                        str += `${item.label},`
                    })
                    values.tagsV2 = JSON.stringify(arr)
                    values.tags = str
                }
                delete values.smartTags
                /* -------------------------------标签功能 end----------------------------- */

                values.coverPic = JSON.stringify({
                    mainImg: JSON.parse(_this.props.newsInfo.coverPic).mainImg || JSON.parse(_this.props.newsInfo.coverPic).wap_big || '',
                    pc_recommend: values.pc_recommend || '',
                    pc: values.pc,
                    wap_big: values.wap_big,
                    wap_small: values.wap_small,
                    video_pc: this.state.videoPccoverImgUrl,
                    video_m: values.video_m
                })
                values.publishTime = Date.parse(values['publishTime'].format('YYYY/MM/DD HH:mm:ss'))
                values.createdBy = this.props.newsInfo.createdBy
                values.topOrder = this.state.topOrder
                delete values.pc
                delete values.pc_recommend
                delete values.wap_big
                delete values.wap_small
                delete values.video_pc
                delete values.video_m
                values.id = this.props.location.query.id || ''
                values.status = status === '4' ? '4' : 1
                !(this.state.updateOrNot && this.props.location.query.id) && delete values.id
                this.setState({
                    loading: true
                })
                axiosAjax('post', `${this.state.updateOrNot ? '/video/updatevideo' : '/video/addvideo'}`, values, (res) => {
                    _this.setState({
                        loading: false
                    })
                    if (res.code === 1) {
                        if (parseInt(status) === 2) {
                            message.success('已存储!')
                        } else {
                            message.success('操作成功！')
                        }
                        // hashHistory.push('/audit-video')
                        // _this.closeWindow()
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 发布
    sendVideoAudit = (sendData) => {
        let _data = {
            'newsTitle': sendData.postTitle || '',
            'newsContent': `${sendData.postContent}` || ''
        }
        this.setState({...this.state, ..._data})
    }

    // 内容格式化
    createMarkup = (str) => {
        return {__html: str}
    }

    CropperImgCroped = (imgUrl) => {
        console.log(imgUrl)
    }

    handleCheck = (e) => {
        this.setState({
            previewVisible: true,
            previewImage: e.target.src
        })
    }

    // 上传图片组件
    FormItem = (require, imgName, label, imgUrl, newsInfo, fileList, changeEvent, size, noBtn) => {
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
                    initialValue: (updateOrNot && newsInfo) ? fileList : '',
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
                    onClick={this.handlePreview}
                    className="img-preview"
                    type="primary">预览</Button>}
                <span className="cover-img-tip">用于 {label} 的封面展示, 建议尺寸: <font style={{color: 'red'}}>{size}</font></span>
            </div>
        </FormItem>
    }

    /* -------------------------------标签功能 start----------------------------- */
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
                tagsV2: form.getFieldValue('tagsV2').concat(newTag)
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

    // 标签选择与 select 框联动
    handleTagsSelect = (tag, checked) => {
        const tagObj = JSON.parse(tag)
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

    // 智能生成标签
    handleSmartTags = () => {
        let content = $('#content').val()
        let title = $('#title').val()
        const getTagsV2 = this.props.form.getFieldValue('tagsV2')
        if (content.trim() === '') {
            message.error('视频内容不能为空!')
            return false
        }
        this.setState({
            tagsLoading: true
        })
        axiosAjax('post', '/news/tags/predict', {
            content: content,
            title: !this.props.location.query.from ? title : this.state.tagTitle,
            media: '视频',
            passportId: hxPassportId
        }, (res) => {
            if (!res || !Array.isArray(res.obj) || res.obj.length === 0) {
                message.error('没有匹配到符合的标签!')
                this.setState({
                    tagsLoading: false
                })
                return
            }
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
            this.setState({
                oldTags: res.obj
            })
            Array.isArray(res.obj) && res.obj.forEach((tag) => {
                let tagsValue = JSON.stringify({id: tag.id, type: tag.type, name: tag.name})
                let newTag = {title: `${tag.name}-行情`, key: JSON.stringify({id: tag.id, type: tag.type}), label: tag.name}
                selectedTags.push(tagsValue)
                newTagV2.push(newTag)
            })
            const v2Temp = getTagsV2.concat(newTagV2)
            let newV2 = v2Temp.reduce(reducer, [])
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

    // 生成之后取消按钮
    handleSmartTagsCancel = () => {
        this.setState({
            smartTags: [],
            smartTagsStatus: false
        })
    }

    /* -------------------------------标签功能 end----------------------------- */

    render () {
        const This = this
        const {getFieldDecorator} = this.props.form
        const {newsInfo} = this.props
        const {selectedTags, focusImg, allfileList, uploadAllImgModal, progressNum, videofileList, uploading, previewVisible, previewImage, fileList, mfileList, newsContent, updateOrNot, newsVisible} = this.state
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 15, offset: 1}
        }
        const props = {
            action: '/file/upload',
            onRemove: (file) => {
                this.setState(({fileList}) => {
                    const index = fileList.indexOf(file)
                    const newFileList = fileList.slice()
                    newFileList.splice(index, 1)
                    return {
                        videoList: newFileList,
                        videofileList: newFileList
                    }
                })
            },
            beforeUpload: (file) => {
                this.setState({
                    videoList: [file],
                    videofileList: [file]
                })
                return false
            },
            fileList: this.state.videofileList
        }
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )

        /* -------------------------------标签功能----------------------------- */
        const options = this.state.data.map(d => <Option title={titleTrans(d.type, d.name)} dataType={d.type} className={`tagType-${d.type}`} value={JSON.stringify({id: d.id, type: d.type}) } key={d.id}>{d.name}</Option>)

        return <div className="videoAudit-send">
            <Spin spinning={this.state.loading} size='large'>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="作者: ">
                        {getFieldDecorator('author', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.author}` : '',
                            rules: [{required: true, message: '请输入视频作者！'}]
                        })(
                            <Input ref={(input) => {
                                this.authorInput = input
                            }} className="news-author" placeholder="请输入视频作者"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="来源: "
                    >
                        {getFieldDecorator('source', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.author || ''}` : '',
                            rules: [{required: true, message: '请输入视频来源！'}]
                        })(
                            <Input className="news-source" placeholder="请输入视频来源"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="发布日期: "
                    >
                        {getFieldDecorator('publishTime', {
                            rules: [{required: true, message: '请选择视频发布时间！'}],
                            initialValue: (updateOrNot && newsInfo) ? moment(formatDate(newsInfo.publishTime), 'YYYY-MM-DD HH:mm:ss') : moment()
                        })(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="视频上传">
                        {getFieldDecorator('url', {
                            rules: [{required: true, message: '请上传视频！'}]
                        })(
                            <Upload {...props} name='uploadFile'>
                                <Button><Icon type="upload"/> 选择视频</Button>
                            </Upload>
                        )}
                        {(() => {
                            if (videofileList.length === 0) {
                                return ''
                            } else if (videofileList[0].fileName) {
                                return <div>
                                    <video controls style={{width: 150}} src={this.state.videoUrl} />
                                    <p>
                                        <span>{videofileList[0].fileName}</span>
                                        <span
                                            onClick={this.delVideoAudit}
                                            style={{marginLeft: 15, color: '#52b8fc', cursor: 'pointer'}}>删除</span>
                                    </p>
                                </div>
                            }
                        })()}
                        <Button
                            style={{marginTop: 16}}
                            className="upload-demo-start"
                            type="primary"
                            onClick={this.handleUpload}
                            disabled={this.state.videoList.length === 0}
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
                        label="视频标题: ">
                        {getFieldDecorator('title', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.title}` : '',
                            rules: [{required: true, message: '请输入视频标题！'}]
                        })(
                            <Input placeholder="请输入视频标题"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="视频简介: "
                    >
                        {getFieldDecorator('content', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.content || ''}` : '',
                            rules: [{required: true, message: '请输入视频简介'}]
                        })(
                            <TextArea className="news-summary" placeholder="请输入视频简介" rows={4}/>
                        )}
                    </FormItem>

                    {/* -------------------------------标签功能 start----------------------------- */}
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
                                let tagsValue = JSON.stringify({id: tag.id, type: tag.type, name: tag.name})
                                return <CheckableTag
                                    style={{border: '1px dashed #108ee9'}}
                                    key={tagsValue}
                                    checked={selectedTags.indexOf(tagsValue) > -1}
                                    onChange={checked => this.handleTagsSelect(tagsValue, checked)}
                                >{tag.name}</CheckableTag>
                            }) : '没有查询到相关标签'}
                            {this.state.smartTags.length !== 0 && '(点击选择/取消需要关联的标签)'}
                            <Button loading={this.state.tagsLoading} style={{margin: '0 10px'}} size="small" type="primary" onClick={this.handleSmartTags}>重新生成</Button>
                            <Button size="small" type="primary" onClick={this.handleSmartTagsCancel}>取消</Button>
                        </div>}
                    </FormItem>
                    <Row style={{maxWidth: 1200}}>
                        <Col span={18}>
                            <FormItem
                                {...formItemLayout}
                                label="新版标签："
                            >
                                {getFieldDecorator('tagsV2', {
                                    initialValue: (updateOrNot && newsInfo) ? (!newsInfo.tagsV2 || JSON.parse(newsInfo.tagsV2).length === 0 ? [] : this.transTags(JSON.parse(newsInfo.tagsV2))) : [],
                                    rules: [
                                        { required: true, message: '请选择相关标签！' }
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
                    {/* -------------------------------标签功能 end----------------------------- */}

                    <FormItem
                        {...formItemLayout}
                        label="热度: "
                    >
                        {getFieldDecorator('hotCounts', {
                            initialValue: (updateOrNot && newsInfo) ? (newsInfo.hotCounts || 0) : 0,
                            rules: [{required: true, pattern: /^[0-9]+$/, message: '请输入视频热度值(正整数)！'}]
                        })(
                            <Input className="news-source" placeholder="请输入视频热度值"/>
                        )}
                    </FormItem>

                    {/** 是否独家
                    <FormItem
                        {...formItemLayout}
                        label="是否独家: "
                    >
                        {getFieldDecorator('original', {
                            initialValue: (updateOrNot && newsInfo.original) ? parseInt(newsInfo.original) === 1 : false,
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
                    */}
                    {/** 频道和类别
                    <FormItem {...formItemLayout} label="频道: ">
                        {getFieldDecorator('channelId', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.channelId || '1'}` : '1'
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
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.cateId || '2'}` : '1'
                        })(
                            <RadioGroup
                                options={cateIdOptions}
                                onChange={this.cateIdChange}
                                setFieldsValue={this.state.cateId}>
                            </RadioGroup>
                        )}
                    </FormItem>
                    */}

                    <FormItem
                        {...formItemLayout}
                        label="统一上传图片: ">
                        <div className="dropbox">
                            <Upload
                                headers={{'Sign-Param': getSig()}}
                                action={`${URL}/pic/upload`}
                                name='uploadFile'
                                listType="picture-card"
                                fileList={allfileList}
                                onPreview={this.handlePreview}
                                onChange={this.uploadAllImg}>
                                {allfileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            {isJsonString(newsInfo.coverPic) && JSON.parse(newsInfo.coverPic).mainImg && <p className="exImg">
                                <span>原封面图: </span>
                                <img onClick={this.handleCheck} src={JSON.parse(newsInfo.coverPic).mainImg} alt=""/>
                            </p>}
                        </div>
                    </FormItem>

                    {this.FormItem(true, 'pc', 'PC列表缩略图', 'coverImgUrl', newsInfo, fileList, this.handleChange, '285 * 160')}
                    {/* {this.FormItem(false, 'pc_recommend', 'PC-推荐位', 'pccoverImgUrl', newsInfo, pcfileList, this.handlePcChange, '285 * 160 (暂定)')} */}
                    {this.FormItem(true, 'video_m', 'M列表缩略图', 'mcoverImgUrl', newsInfo, mfileList, this.handleMobileChange, '640 * 360')}
                    {/* {this.FormItem(false, 'wap_big', 'M-推荐位', 'mccoverImgUrl', newsInfo, mcfileList, this.handleMobileCommentChange, '640 * 360(暂定)')} */}

                    <FormItem
                        wrapperCol={{ span: 12, offset: 2 }}
                    >
                        <Button type="primary" data-status='1' onClick={this.handleSubmit} style={{marginRight: '10px', marginBottom: 10}}>审核通过</Button>
                        <Button type="primary" data-status='3' onClick={this.handleSubmit} style={{marginRight: '10px', marginBottom: 10}}>定时发表</Button>
                        <Button type="primary" data-status='4' onClick={this.handleSubmit} style={{marginRight: '10px', marginBottom: 10}}>暂存为审核中</Button>
                        <Button type="primary" data-status='2' onClick={this.handleSubmit} style={{marginRight: '10px', marginBottom: 10}}>审核不通过</Button>
                        <Button type="primary" className="cancel" style={{marginRight: '10px', marginBottom: 10}} onClick={this.closeWindow}>取消</Button>
                    </FormItem>

                    {/* 图片剪裁 */}
                    <Modal
                        height="700px"
                        width="1280px"
                        style={{top: '50px'}}
                        visible={uploadAllImgModal}
                        onOk={this.sureCropImg}
                        onCancel={this.uploadAllImgCancel}>
                        <div className="croper-wrap videoAudit clearfix">
                            <div className="crop-img" id="cropImgWrap">
                                <img
                                    id="croppedImg"
                                    src=""
                                    alt="Picture"/>
                            </div>
                            <div
                                onClick={(e) => {
                                    e.stopPropagation()
                                    e.nativeEvent.stopImmediatePropagation()
                                    this.setState({
                                        focusImg: -1
                                    })
                                }}
                                className="crop-preview">
                                {this.state.cropImgRule.map(function (item, index) {
                                    return <div
                                        key={index}
                                        onClick={(e) => { This.changeActiveImg(e, item, index) }}
                                        className="cropper-intro">
                                        <div className={`cropper-item-wrap ${focusImg === index ? 'active' : ''}`}>
                                            <div
                                                data-type={item.coverName}
                                                data-list={item.coverList}
                                                className="crop-preview-item"
                                                style={{width: item.width, height: item.height}}>
                                                <img src="" alt="" style={{width: '100%', height: '100%'}}/>
                                            </div>
                                        </div>
                                        <span>{item.intro}</span>
                                    </div>
                                })}
                            </div>
                        </div>
                    </Modal>

                    {/* 内容编辑 */}
                    <Modal
                        visible={newsVisible} footer={null} className="newsModal" onCancel={this.newsVisibleHide}
                        width={1000}>
                        <Row>
                            <Col
                                className="previewNews simditor">
                                <p
                                    className="simditor-body"
                                    style={{padding: 10}}
                                    dangerouslySetInnerHTML={this.createMarkup(newsContent)}/>
                            </Col>
                        </Row>
                    </Modal>

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
        userInfo: state.videoAuditInfo.userInfo,
        newsInfo: state.videoAuditInfo.info
    }
}

export default connect(mapStateToProps)(Form.create()(VideoAuditSend))
