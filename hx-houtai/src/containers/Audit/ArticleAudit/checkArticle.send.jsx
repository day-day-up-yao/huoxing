/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import html2canvas from 'html2canvas'
// import { hashHistory } from 'react-router'
import PostEditor from '../../../components/Simditor'
import MediaQuillEditor from '../../../components/MediaQuillEditor'
import Cropper from '../../../../node_modules/cropperjs/dist/cropper.esm.js'
import '../../../../node_modules/cropperjs/dist/cropper.css'

import {
    Radio,
    Select,
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
    Switch,
    Tag,
    Checkbox
} from 'antd'
import moment from 'moment'
import {getArticleItemInfo} from '../../../actions/audit/articleAudit.action'
import {getChannelList, getTopicList} from '../../../actions/index'
import {getPostAccountList} from '../../../actions/account/postAccount.action'
import {axiosAjax, URL, getSig, formatDate, isJsonString, dataURLtoBlob, titleTrans} from '../../../public/index'
import './checkArticle.scss'
import UploadFile from '../../../components/upload/UploadFile'
import UploadImg from '../../../components/upload/UploadImg'
import CloseWindow from '../../../components/CloseWindow/index'
import Cookies from 'js-cookie'
import {getPostTacticsList} from '../../../actions/account/postTactics.action'

const FormItem = Form.Item
const {TextArea} = Input
const {Option} = Select
const {CheckableTag} = Tag
const RadioGroup = Radio.Group
// const confirm = Modal.confirm
const CheckboxGroup = Checkbox.Group
let hxPassportId = Cookies.get('hx_passportId')
const reasonArr = ['文章包含广告信息', '文章包含违规信息', '发布内容与行业无关', '请修改默认昵称', '其它']
let timeout, currentValue

const fixTagData = [
    {
        id: 4960,
        name: 'MarsBit专栏精选',
        type: 3,
        typeName: '聚合关键字'
    }
]

class ArticleAuditSend extends Component {
    constructor (props) {
        super(props)
        this.state = {
            closeLoading: false,
            confirmLoading: false,
            editor: '',
            reason: '',
            rejectSelectVal: '',
            doRejectShow: false, // 驳回弹框是否显示
            updateOrNot: false,
            tags: [],
            smartTags: [],
            smartTagsStatus: false,
            selectedTags: [],
            tagsLoading: false,
            source: '',
            createdBy: '',
            inputVisible: false,
            inputValue: '',
            isLogin: false,
            channelId: '1',
            newsVisible: false,
            previewVisible: false,
            previewImage: '',
            newsTitle: '',
            newsContent: '',
            fileList: [],
            pcfileList: [],
            mfileList: [],
            mcfileList: [],
            allfileList: [],
            coverImgUrl: '',
            pccoverImgUrl: '',
            mcoverImgUrl: '',
            mccoverImgUrl: '',
            allcoverImgUrl: '',
            loading: true,
            original: 0,
            advertised: 0,
            aFileInfo: null,
            vFileInfo: null,
            uploadAllImgModal: false,
            cropper: null,
            focusImg: -1,
            ratio: 2,
            searching: false,
            data: [],
            searchText: '',
            tagsIconLoading: false,
            noCurrResult: false,
            cropImgRule: [
                {
                    coverName: 'mccoverImgUrl',
                    coverList: 'mcfileList',
                    width: '640px',
                    height: '320px',
                    ratio: 640 / 320,
                    intro: 'M端推荐新闻的滚动:640 * 320'
                }, {
                    coverName: 'pccoverImgUrl',
                    coverList: 'pcfileList',
                    width: '266px',
                    height: '167px',
                    ratio: 532 / 335,
                    intro: 'PC端推荐位新闻封面:532 * 335'
                }, {
                    coverName: 'coverImgUrl',
                    coverList: 'fileList',
                    width: '220px',
                    height: '160px',
                    ratio: 220 / 160,
                    intro: 'PC 端新闻封面:220 * 160'
                }, {
                    coverName: 'mcoverImgUrl',
                    coverList: 'mfileList',
                    width: '164px',
                    height: '109px',
                    ratio: 200 / 133,
                    intro: 'M端新闻封面:164 * 109'
                }
            ],
            wordBreak: 0,
            alignLeft: 0,
            list: !this.props.list ? [] : this.props.list,
            oldTags: [],
            isRepetition: false,
            isRepetitionEdit: false,
            similarityUrl: '',
            topicValue: {key: '', label: ''},
            topicList: [],
            cateId: 0,
            newsAssist: ''
        }
    }

    componentDidMount () {
        const {dispatch, location} = this.props
        let This = this
        this.getTopicListData()
        Cookies.set('watermark', 0)
        dispatch(getChannelList())
        dispatch(getPostAccountList('init', {pageSize: 1000, currentPage: 1}))
        dispatch(getPostTacticsList('post', {'pageSize': 20, 'status': 1, 'currentPage': 1}, function () {
            This.setState({
                loading: false
            })
        }))
        if (location.query.id) {
            dispatch(getArticleItemInfo({'id': location.query.id}, (data) => {
                this.inquireRepetition(data)
                this.isArticleAudit(data)

                let filterContent = data.content.replace(/<style(.+)<\/style>/, '') // 去除style标签
                filterContent = filterContent.replace(/<img[^>]*>/gi, function (match, capture) {
                    let imgStr = match.replace(/height="(.*)"/gi, '')
                    imgStr = match.replace(/width="(.*)"/gi, '')
                    return imgStr
                }) // 去除图片height、width属性

                this.state.editor.clipboard.dangerouslyPasteHTML(filterContent, 'user')
                this.state.editor.videoInit()

                let coverPic = isJsonString(data.coverPic) ? JSON.parse(data.coverPic) : {
                    pc_recommend: '',
                    pc: '',
                    wap_big: '',
                    wap_small: ''
                }
                let pcfileList = (coverPic.pc_recommend && coverPic.pc_recommend !== '') ? [{
                    uid: 0,
                    name: 'xxx.png',
                    status: 'done',
                    url: coverPic.pc_recommend
                }] : []
                let fileList = (coverPic.pc && coverPic.pc !== '') ? [{
                    uid: 0,
                    name: 'xxx.png',
                    status: 'done',
                    url: coverPic.pc
                }] : []
                let mfileList = (coverPic.wap_small && coverPic.wap_small !== '') ? [{
                    uid: 0,
                    name: 'xxx.png',
                    status: 'done',
                    url: coverPic.wap_small
                }] : []
                let mcfileList = (coverPic.wap_big && coverPic.wap_big !== '') ? [{
                    uid: 0,
                    name: 'xxx.png',
                    status: 'done',
                    url: coverPic.wap_big
                }] : []
                this.setState({
                    updateOrNot: true,
                    fileList: fileList,
                    reason: data.nopassReason || '',
                    pcfileList: pcfileList,
                    mfileList: mfileList,
                    mcfileList: mcfileList,
                    tags: !data.tags ? [] : data.tags.split(','),
                    newsContent: filterContent,
                    coverImgUrl: coverPic.pc,
                    pccoverImgUrl: coverPic.pc_recommend || '',
                    mcoverImgUrl: coverPic.wap_small,
                    mccoverImgUrl: coverPic.wap_big,
                    loading: false,
                    original: data.original || 0,
                    advertised: data.advertised || 0,
                    vFileInfo: !data.video || data.video.indexOf('[') === -1 ? null : JSON.parse(data.video)[0],
                    aFileInfo: !data.audio || data.audio.indexOf('[') === -1 ? null : JSON.parse(data.audio)[0],
                    vmUrl: !data.coverPic || !JSON.parse(data.coverPic).video_m ? '' : JSON.parse(data.coverPic).video_m,
                    vpcUrl: !data.coverPic || !JSON.parse(data.coverPic).video_pc ? '' : JSON.parse(data.coverPic).video_pc,
                    source: {key: data.createdBy, label: data.source},
                    createdBy: data.createdBy,
                    cateId: data.cateId
                })
                // 音频
                let audioData = !data.audio || data.audio.indexOf('[') === -1 ? null : JSON.parse(data.audio)[0]
                if (!audioData) {
                } else {
                    let uploadAudio = this.uploadAudio
                    let uploadAudioData = uploadAudio.state.uploadData
                    uploadAudio.setState({
                        uploadData: {
                            ...uploadAudioData,
                            fileName: !audioData.fileName ? '' : audioData.fileName,
                            url: !audioData.fileUrl ? '' : audioData.fileUrl,
                            isFinish: !!audioData.fileUrl
                        }
                    })
                }

                // 视频
                let videoData = !data.video || data.video.indexOf('[') === -1 ? null : JSON.parse(data.video)[0]
                if (!videoData) {
                } else {
                    let uploadVideo = this.uploadVideo
                    let uploadVideoData = uploadVideo.state.uploadData
                    uploadVideo.setState({
                        uploadData: {
                            ...uploadVideoData,
                            fileName: !videoData.fileName ? '' : videoData.fileName,
                            url: !videoData.fileUrl ? '' : videoData.fileUrl,
                            isFinish: !!videoData.fileUrl
                        }
                    })
                }
            }))
        } else {
            this.setState({
                loading: false
            })
            sessionStorage.setItem('hx_content', '')
        }
    }

    // 获取专题列表
    getTopicListData = async () => {
        let obj = {
            type: 4,
            pageSize: 999,
            status: 1,
            currentPage: 1
        }
        const res = await getTopicList(obj)
        if (!res) {
            message.info('获取列表错误')
            this.setState({
                loading: false
            })
            return
        }
        if (res.code !== 1) {
            message.info(res.msg)
            this.setState({
                loading: false
            })
            return
        }
        const list = res.obj.inforList.map(function (item, index) {
            return { ...item, key: item.id }
        })

        this.setState({
            topicList: list
        })
    }

    removeHTMLTag = (str) => {
        str = str.replace(/<\/?[^>]*>/g, '') // 去除HTML tag
        str = str.replace(/[ | ]*\n/g, '\n') // 去除行尾空白
        // str = str.replace(/\n[\s| | ]*\r/g,'\n') // 去除多余空行
        str = str.replace(/ /ig, '') // 去掉
        return str
    }
    inquireRepetition = (obj, type) => {
        let timestamp = Date.parse(new Date()) / 1000
        let inquire = {
            timeStamp: timestamp,
            title: obj.title,
            content: this.removeHTMLTag(obj.content),
            media: '新闻'
        }
        axiosAjax('post', '/news/dedup/predict', inquire, (res) => {
            if (res.obj !== '') {
                console.log(res)
                this.setState({
                    isRepetition: true,
                    isRepetitionEdit: '该文章与已有文章高度相似',
                    similarityUrl: res.obj
                })
            } else if (res.obj === '' && type) {
                this.setState({
                    isRepetition: true,
                    isRepetitionEdit: '文章内容无重复',
                    similarityUrl: ''
                })
            }
        })
    }
    isArticleAudit = (obj, type) => {
        let inquire = {
            title: obj.title,
            content: this.removeHTMLTag(obj.content),
            media: '新闻'
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
    optionSearchChange = (e) => {
        let This = this
        const {dispatch} = this.props
        dispatch(getPostAccountList('init', {pageSize: 1000, currentPage: 1, keyword: e}, (res) => {
            let arr = res.inforList
            console.log(arr)
            This.setState({
                list: arr
            })
        }))
    }

    // 频道改变
    channelIdChange = (e) => {
        this.setState({
            channelId: e.target.value
        })
    }

    /*
    // 标签设置
    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag)
        this.setState({ tags })
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus())
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
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
    */
    // 上传图片
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

    // 异步判断图片分辨率
    file = (file) => {
        let data = new Promise((resolve) => {
            let reader = new FileReader()
            let image = new Image()
            reader.readAsDataURL(file)
            reader.onload = function (e) {
                let data = e.target.result
                image.src = data
            }
            resolve(image)
        })
        return data
    }

    image = (img) => {
        let image = new Promise((resolve) => {
            img.onload = function () {
                let width = img.width
                let height = img.height
                if (width <= 800 && height <= 800) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }
        })
        return image
    }

    beforeUpload = async (file) => {
        let res = await this.file(file).then(resolve => {
            return this.image(resolve)
        }).then(res => {
            return res
        })
        return res
    }

    handleChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                coverImgUrl: ''
            })
        } else {
            let sizeSuit = await this.beforeUpload(file.originFileObj)
            if (!sizeSuit) {
                message.warning('单张图片上传尺寸不能大于 800 * 800, 请重新选择图片或使用统一上传!')
                return false
            }
        }
        this.setState({
            fileList: fileList
        })

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

    handlePcChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                pccoverImgUrl: ''
            })
        } else {
            let sizeSuit = await this.beforeUpload(file.originFileObj)
            if (!sizeSuit) {
                message.warning('单张图片上传尺寸不能大于 800 * 800, 请重新选择图片或使用统一上传!')
                return false
            }
        }
        this.setState({
            pcfileList: fileList
        })

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

    handleMobileChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                mcoverImgUrl: ''
            })
        } else {
            let sizeSuit = await this.beforeUpload(file.originFileObj)
            if (!sizeSuit) {
                message.warning('单张图片上传尺寸不能大于 800 * 800, 请重新选择图片或使用统一上传!')
                return false
            }
        }
        this.setState({
            mfileList: fileList
        })

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

    handleMobileCommentChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                mccoverImgUrl: ''
            })
        } else {
            let sizeSuit = await this.beforeUpload(file.originFileObj)
            if (!sizeSuit) {
                message.warning('单张图片上传尺寸不能大于 800 * 800, 请重新选择图片或使用统一上传!')
                return false
            }
        }
        this.setState({
            mcfileList: fileList
        })

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

    newsVisibleHide = () => {
        this.setState({newsVisible: false})
    }

    newsVisibleShow = () => {
        this.setState({newsVisible: true})
    }

    getReason = (e) => {
        this.setState({
            reason: e.target.value
        })
    }
    doRejectSelect = (value) => {
        this.setState({
            reason: reasonArr[value], // 当前选择驳回原因
            rejectSelectVal: value
        })
    }
    doReject () {
        this.setState({
            reason: reasonArr[0], // 默认驳回原因
            rejectSelectVal: '0', // 驳回当前选择项
            doRejectShow: true // 驳回弹框是否显示
        })
    }
    doRejectDo = () => {
        const This = this
        this.setState({
            loading: true
        })
        if (this.state.reason.trim() !== '') {
            axiosAjax('POST', '/news/status', {
                id: This.props.newsInfo.id,
                status: 2,
                reason: This.state.reason
            }, (res) => {
                console.log(res)
                if (res.code === 1) {
                    message.success('操作成功！')
                    // hashHistory.push('/audit-list')
                    This.dataGather2(This.state.reason, res.currentTime)
                    This.closeWindow()
                } else {
                    This.setState({
                        loading: false
                    })
                    message.error(res.msg)
                }
            })
        } else {
            this.setState({
                loading: false
            })
            message.error('原因不能为空!')
        }
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
                            viewMode: 1,
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
        let count = 0
        const This = this
        this.setState({
            loading: true,
            uploadAllImgModal: false,
            confirmLoading: true
        })
        message.warning('上传中，请稍候！')
        this.state.cropper.destroy()
        $('.crop-preview-item').each(function (d, i) {
            setTimeout(() => {
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
                    timeout: 30000,
                    contentType: false,
                    success: function (data) {
                        count += 1
                        if (count === 4) {
                            This.setState({
                                loading: false,
                                confirmLoading: false
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
                    error: function (XMLHttpRequest, status) {
                        This.setState({
                            confirmLoading: false,
                            loading: false
                        })
                        if (status === 'timeout') {
                            message.error('网络不稳定, 请检查网络后重新上传！')
                        } else {
                            message.error('上传发生错误, 请尝试重新上传！')
                        }
                        XMLHttpRequest.abort()
                    }
                })
            }, d * 500)
        })
    }

    uploadAllImgCancel = () => {
        this.setState({
            uploadAllImgModal: false
        })
        this.state.cropper.destroy()
    }

    // 提交
    handleSubmit = (e) => {
        if (this.state.editor.mediaUploading()) {
            message.warning('编辑器中图片或视频正在上传, 请稍候提交!')
            return false
        }

        let pt = Date.parse(this.props.form.getFieldValue('publishTime').format('YYYY/MM/DD HH:mm:ss'))
        let nt = Date.parse(new Date())
        const {vFileInfo, aFileInfo, vmUrl, vpcUrl} = this.state
        const _this = this
        const {newsInfo} = this.props
        let status = e.target.getAttribute('data-status')
        e.preventDefault()
        if (status === '2') {
            // confirm({
            //     title: '提示',
            //     content: <div className="modal-input">
            //         <span style={{marginRight: 10}}>请填写文章不通过原因：</span>
            //         <TextArea defaultValue={newsInfo.nopassReason} rows={3} autoFocus onChange={(e) => {
            //             _this.getReason(e)
            //         }}/>
            //     </div>,
            //     onOk () {
            //         _this.setState({
            //             loading: true
            //         })
            //         if (_this.state.reason.trim() !== '') {
            //             axiosAjax('POST', '/news/status', {
            //                 id: _this.props.newsInfo.id,
            //                 status: 2,
            //                 reason: _this.state.reason
            //             }, (res) => {
            //                 console.log(res)
            //                 if (res.code === 1) {
            //                     message.success('操作成功！')
            //                     // hashHistory.push('/audit-list')
            //                     _this.dataGather2(_this.state.reason, res.currentTime)
            //                     _this.closeWindow()
            //                 } else {
            //                     _this.setState({
            //                         loading: false
            //                     })
            //                     message.error(res.msg)
            //                 }
            //             })
            //         } else {
            //             _this.setState({
            //                 loading: false
            //             })
            //             message.error('原因不能为空!')
            //         }
            //     }
            // })
            this.doReject()
            return false
        }

        if ($('.simditor').find('img.uploading').length > 0) {
            message.warning('编辑器中图片正在上传, 请稍候提交!')
            return false
        }
        if (this.state.uploading) {
            message.warning('视频正在上传, 请稍候提交!')
            this.setState({
                iconLoading: false
            })
            return false
        }

        if (status === '3' && (pt <= nt)) {
            this.setState({
                iconLoading: false
            })
            message.warning('预发布新闻时间应 大于 当前时间，请重新设置!')
            return false
        }

        if (status === '1' && (pt > nt)) {
            this.setState({
                iconLoading: false
            })
            message.warning('直接发布新闻的时间应 小于等于 当前时间，请重新设置!')
            return false
        }
        const videoInfo = !this.state.vFileInfo ? {} : {
            video_pc: this.state.vpcUrl,
            video_m: this.state.vmUrl
        }
        this.props.form.setFieldsValue({
            original: !!this.state.original,
            advertised: !!this.state.advertised,
            // tags: this.state.tags.join(','),
            tags: '',
            content: this.state.newsContent,
            pc_recommend: this.state.pccoverImgUrl,
            pc: this.state.coverImgUrl,
            wap_small: this.state.mcoverImgUrl,
            wap_big: this.state.mccoverImgUrl,
            subTitle: this.state.newsAssist,
            ...videoInfo
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            let strategyCat = values.strategyCat

            const evil = (fn) => {
                let Fn = Function
                return new Fn('return ' + fn)()
            }

            let resultStrategyCa = evil(strategyCat.join(',').replace(/,/g, '|'))
            if (!err && status !== '2') {
                values.publishTime = Date.parse(values['publishTime'].format('YYYY/MM/DD HH:mm:ss'))
                values.coverPic = JSON.stringify({
                    mainImg: isJsonString(newsInfo.coverPic) ? (JSON.parse(newsInfo.coverPic).mainImg || JSON.parse(newsInfo.coverPic).wap_big || '') : '',
                    pc_recommend: values.pc_recommend || '',
                    pc: values.pc,
                    wap_big: values.wap_big,
                    wap_small: values.wap_small
                })
                values.createdBy = values.source.key
                values.source = values.source.label
                values.original = values.original ? 1 : 0
                values.advertised = values.advertised ? 1 : 0
                values.strategyCat = resultStrategyCa
                delete values.pc
                delete values.pc_recommend
                delete values.wap_big
                delete values.wap_small
                delete values.watermark
                delete values.alignLeft
                delete values.wordBreak
                values.id = this.props.location.query.id || ''
                values.status = status || 1
                values.cateId = this.state.cateId
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
                if (vFileInfo) {
                    let coverPic = JSON.parse(values.coverPic)
                    coverPic = {
                        ...coverPic,
                        video_pc: vpcUrl,
                        video_m: vmUrl
                    }
                    values = {
                        ...values,
                        video: JSON.stringify([this.state.vFileInfo]),
                        coverPic: JSON.stringify(coverPic)
                    }
                } else {
                    values = {
                        ...values,
                        video: ''
                    }
                }
                if (aFileInfo) {
                    values = {
                        ...values,
                        audio: JSON.stringify([this.state.aFileInfo])
                    }
                } else {
                    values = {
                        ...values,
                        audio: ''
                    }
                }
                delete values.video_pc
                delete values.video_m
                !this.state.updateOrNot && delete values.id

                if (values.topicValue) {
                    values.topicId = values.topicValue.key
                    delete values.topicValue
                }

                this.setState({
                    loading: true
                })
                axiosAjax('post', `${this.state.updateOrNot ? '/news/update' : '/news/add'}`, values, (res) => {
                    if (res.code === 1) {
                        if (parseInt(status) === 1) {
                            axiosAjax('post', '/caster/mars/content/sent', {
                                newsId: values.id,
                                title: values.title,
                                synopsis: values.synopsis,
                                coverPic: values.coverPic,
                                createdBy: values.createdBy
                            })
                        }
                        _this.setState({
                            loading: false
                        })
                        if (parseInt(status) === 4) {
                            message.success('已存储到列表!')
                        } else {
                            message.success('操作成功！')
                            let type = values.strategyCat > 0 ? '新闻' : '新闻'
                            _this.dataGather(_this.props.newsInfo.id, type, _this.state.oldTags, values.tagsV2, res.currentTime)
                        }
                        // hashHistory.push('/audit-list')
                        _this.closeWindow()
                    } else {
                        _this.setState({
                            loading: false
                        })
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 埋点数据收集
    dataGather = (id, type, algoTags, editTags, time) => {
        let params = {
            event_type: 'COMMIT_ARTICLE',
            event_info: {
                'article': {
                    'id': id,
                    'type': type
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

    // 埋点数据收集——上报人工驳回
    dataGather2 = (reason, time) => {
        let content = $(this.state.editor.root).text()
        let title = $('.news-title-inp').val()
        let params = {
            event_type: 'COMMIT_ANTI_REJECT',
            event_info: {
                'title': title,
                'content': content,
                'reason': reason
            },
            timestamp: time
        }
        axiosAjax('post', `/passport/account/recommend/gather`, {data: JSON.stringify(params)})
    }

    // 发布
    sendPost = (sendData) => {
        const {wordBreak, alignLeft} = this.state
        let style = `<style type="text/css"> .details .details-cont p, p {word-break: ${wordBreak ? 'break-all !important' : 'normal'}; text-align: ${alignLeft ? 'left !important' : 'unset'}} p img {text-align: center !important;} </style>`
        let _data = {
            'newsTitle': sendData.postTitle || '',
            'newsContent': `<div class=${alignLeft ? 'simditorSupport' : ''}>${style}${sendData.postContent}</div>` || ''
        }
        this.setState({...this.state, ..._data})
    }

    // 内容格式化
    createMarkup (str) {
        return {__html: str}
    }

    handleCheck = (e) => {
        this.setState({
            previewVisible: true,
            previewImage: e.target.src
        })
    }

    optionChange = (e) => {
        this.setState({
            source: e.label,
            createdBy: e.key
        })
    }

    // 上传图片组件
    FormItem = (opt) => {
        const {updateOrNot} = this.state
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 20}
        }
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">{opt.label}</div>
            </div>
        )

        return <FormItem
            {...formItemLayout}
        >
            <div className="dropbox">
                {getFieldDecorator(opt.imgName, {
                    initialValue: (updateOrNot && opt.newsInfo) ? opt.fileList : '',
                    rules: [{required: opt.require, message: `请上传相应封面`}]
                })(
                    <Upload
                        headers={{'Sign-Param': getSig()}}
                        action={`${URL}/pic/upload`}
                        name='uploadFile'
                        listType="picture-card"
                        fileList={opt.fileList}
                        onPreview={this.handlePreview}
                        onChange={opt.changeEvent}>
                        {opt.fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                )}
                {opt.noBtn ? '' : <Button
                    data-type={opt.imgUrl}
                    onClick={this.handlePreview}
                    className="img-preview"
                    type="primary">预览</Button>
                }
                <p className="cover-img-tip">
                    <span style={{color: '#249aef'}}>{opt.size}</span>
                </p>
            </div>
        </FormItem>
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
                    this.setState({data})
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
            let newTag = [{
                title: `${res.obj.name}-聚合`,
                key: JSON.stringify({id: res.obj.id, type: res.obj.type}),
                type: res.obj.type,
                label: res.obj.name
            }]
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

    handleTagsSelect = (tag, checked) => {
        const tagObj = JSON.parse(tag)
        const {selectedTags} = this.state
        const getTagsV2 = this.props.form.getFieldValue('tagsV2')
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter(t => t !== tag)

        let {name, ...tagValue} = tagObj
        let newTag = [{
            title: `${tagObj.name}-行情`,
            key: JSON.stringify(tagValue),
            type: tagObj.type,
            label: tagObj.name
        }]
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
        this.setState({selectedTags: nextSelectedTags})
    }

    handleSmartTags = () => {
        // let content = $('.simditor-body').text()
        let content = $(this.state.editor.root).text()
        let title = $('.news-title-inp').val()
        let media = this.props.newsInfo.strategyCat > 0 ? '新闻' : '新闻'
        const getTagsV2 = this.props.form.getFieldValue('tagsV2')
        if (content.trim() === '') {
            message.error('新闻内容不能为空!')
            return false
        }
        this.setState({
            // selectedTags: [],
            tagsLoading: true
        })
        console.log(title)
        axiosAjax('post', '/news/tags/predict', {
            content: content,
            title: title,
            media: media,
            passportId: hxPassportId
        }, (res) => {
            let selectedTags = []
            let newTagV2 = []
            let hash = {}
            this.setState({
                oldTags: res.obj
            })
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
                let newTag = {
                    title: `${tag.name}-行情`,
                    key: JSON.stringify({id: tag.id, type: tag.type}),
                    label: tag.name
                }
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

    handleSmartTagsCancel = () => {
        this.setState({
            smartTags: [],
            smartTagsStatus: false
        })
    }

    // 点击固定按钮添加标签
    onBtnFixTagClick = (newTag) => {
        const getTagsV2 = this.props.form.getFieldValue('tagsV2')
        let flag = false
        let newTagV2 = []
        getTagsV2.forEach(item => {
            if (item.key === newTag.key) {
                flag = true
            }
        })

        newTagV2.push(newTag)

        if (flag === true) {
            message.error(`标签: “${newTag.label}” 已存在！`)
        } else {
            this.props.form.setFieldsValue({
                tagsV2: [...getTagsV2, ...newTagV2]
            })
        }
    }

    closeWindow = () => {
        this.setState({
            closeLoading: true
        })
    }

    onDetailValueChange (value) {
        // 提交的时候另外新提交没有br的状态
        let completeStr = ''
        const clearHtml = value.replace(/<br>+/g, '')
        const cletrStyle = clearHtml.replace(/ style=""+/, '')
        const regCleanLastp = /<p(?:(?!<\/p>).|\n)*?<\/p>/gm
        const regpArr = cletrStyle.match(regCleanLastp)
        // const lastItem = regpArr.pop() // 删除最后一个元素并返回最后一个元素
        // const lastcontent = lastItem.match(/<p>(.+)<\/p>/)[1]
        // regpArr.push(lastcontent)
        completeStr = regpArr.join('')
        console.log('得到的字符串' + regpArr)
        // completeStr = '<pre>' + completeStr + '</pre>'
        this.setState({
            newsAssist: completeStr
        })
    }
    render () {
        const This = this
        const {getFieldDecorator} = this.props.form
        const {newsInfo, classifyList} = this.props
        const {selectedTags, focusImg, allfileList, uploadAllImgModal, previewVisible, previewImage, fileList, pcfileList, mfileList, mcfileList, newsContent, updateOrNot, newsVisible, list, topicList, topicValue} = this.state
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 18}
        }
        let classifyArrList = []
        classifyList.map(item => {
            if (item.status === 1) {
                classifyArrList.push({
                    label: item.strategyCatName,
                    value: item.strategyCat
                })
            }
        })
        let setStrategyCat = []
        if (newsInfo.strategyCat) {
            classifyArrList.map(item => {
                if ((newsInfo.strategyCat & item.value) === item.value) {
                    setStrategyCat.push(item.value.toString())
                }
            })
        }
        // const formTagsItemLayout = {
        //     labelCol: {span: 1},
        //     wrapperCol: {span: 15, offset: 1}
        // }
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">统一上传图片</div>
            </div>
        )
        // 获取内容并显示, 暂时这么写(已更新)
        // const hxContent = location.query.id ? JSON.parse(sessionStorage.getItem('hx_content')).content : ''
        let optionData = []
        list.length !== 0 && list.map((d) => {
            optionData.push({
                label: d.nickName,
                value: d.passportId
            })
            return optionData
        })
        const options = this.state.data.map(d => <Option title={titleTrans(d.type, d.name)} dataType={d.type} className={`tagType-${d.type}`} value={JSON.stringify({id: d.id, type: d.type})} key={d.id}>{d.name}</Option>)
        return <div className="post-send">
            <Spin spinning={this.state.loading} size='large'>
                <Form onSubmit={this.handleSubmit}>
                    <Row style={{maxWidth: 1200}}>
                        <Col span={18}>
                            <FormItem
                                {...formItemLayout}
                                label="标题: ">
                                {getFieldDecorator('title', {
                                    initialValue: (updateOrNot && newsInfo) ? `${newsInfo.title}` : '',
                                    rules: [{required: true, message: '请输入新闻标题！'}]
                                })(
                                    <Input className="news-title-inp" placeholder="新闻标题"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row style={{maxWidth: 1200}}>
                        <Col span={6}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 12}}
                                label="作者: ">
                                {getFieldDecorator('author', {
                                    initialValue: (updateOrNot && newsInfo) ? `${newsInfo.author}` : '',
                                    rules: [{required: true, message: '请输入作者！'}]
                                })(
                                    <Input ref={(input) => {
                                        this.authorInput = input
                                    }} className="news-author" placeholder="请输入作者"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={5}>
                            <FormItem
                                className="labelWidth60"
                                labelCol={{span: 1}}
                                wrapperCol={{span: 16}}
                                label="来源"
                            >
                                {getFieldDecorator('source', {
                                    initialValue: (updateOrNot && newsInfo) ? {key: this.props.newsInfo.createdBy, label: this.props.newsInfo.source ? this.props.newsInfo.source : this.props.newsInfo.author} : { key: 'fff9d400cb94444fadaefd429516c276', label: 'MarsBit' },
                                    rules: [{required: true, message: '请选择新闻来源！'}]
                                })(
                                    <Select
                                        labelInValue
                                        showSearch
                                        style={{width: '100%'}}
                                        placeholder='选择新闻来源'
                                        defaultActiveFirstOption={false}
                                        notFoundContent={this.state.searching ? <Spin size="small"/> : '未查询到相关内容'}
                                        showArrow={true}
                                        optionFilterProp='children'
                                        filterOption={true}
                                        onChange={this.optionChange}
                                        onSearch={this.optionSearchChange}
                                        allowClear={true}
                                    >
                                        <Option key={newsInfo.createdBy || 'fff9d400cb94444fadaefd429516c276'}>{newsInfo.source}</Option>
                                        {optionData.length !== 0 && optionData.map(d => {
                                            return <Option key={d.value}>{d.label}</Option>
                                        })}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 15}}
                                label="所属专题: ">
                                {getFieldDecorator('topicValue', {
                                    initialValue: topicValue,
                                    rules: [{required: false, message: '请输入核心关键词！'}]
                                })(
                                    <Select
                                        labelInValue
                                        showSearch={true}
                                        style={{width: '100%'}}
                                        placeholder='选择所属专题'
                                        defaultActiveFirstOption={false}
                                        notFoundContent={this.state.loading ? <Spin size="small" /> : '未查询到相关内容'}
                                        showArrow={true}
                                        optionFilterProp='children'
                                        filterOption={true}
                                        allowClear={true}
                                    >
                                        {topicList.length !== 0 && topicList.map(d => {
                                            return <Option key={d.id}>{d.topicName}</Option>
                                        })}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    {/*
                    <FormItem
                        {...formItemLayout}
                        label="来源: "
                    >
                        {getFieldDecorator('source', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.author || ''}` : '',
                            rules: [{ required: true, message: '请输入新闻来源！' }]
                        })(
                            <Input className="news-source" placeholder="请输入新闻来源"/>
                        )}
                    </FormItem>
                    */}

                    {this.props.channelList.length !== 0 && <FormItem
                        labelCol={{span: 1}}
                        wrapperCol={{span: 20}}
                        label="频道: ">
                        {getFieldDecorator('channelId', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.channelId || '1'}` : '1'
                        })(
                            <RadioGroup
                                options={this.props.channelList.filter(item => !item.disabled)}
                                onChange={this.channelIdChange}
                                setFieldsValue={this.state.channelId}>
                            </RadioGroup>
                        )}
                    </FormItem>}
                    <div style={{ display: 'none' }}>
                        {classifyList.length !== 0 && <FormItem
                            labelCol={{span: 1}}
                            wrapperCol={{span: 20}}
                            label="策略分类: "
                        >
                            {getFieldDecorator('strategyCat', {
                                initialValue: (updateOrNot && newsInfo) ? setStrategyCat : [],
                                rules: [{required: false, message: '请选择策略名称！'}]
                            })(
                                <CheckboxGroup>
                                    <Row>
                                        {
                                            classifyArrList.map((item, i) => {
                                                return <Col span={2} key={i}><Checkbox
                                                    value={`${item.value}`}>{item.label}</Checkbox></Col>
                                            })
                                        }
                                    </Row>
                                </CheckboxGroup>
                            )}
                        </FormItem>}
                    </div>

                    <FormItem
                        labelCol={{span: 1}}
                        wrapperCol={{span: 20}}
                        style={{maxWidth: 1200}}
                        label="摘要: "
                    >
                        {getFieldDecorator('synopsis', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.synopsis}` : '',
                            rules: [{max: 1024, required: true, message: '请输入新闻内容摘要, 最多120字！'}]
                        })(
                            <TextArea rows={4} className="news-summary" placeholder="新闻摘要, 最多120字"/>
                        )}
                    </FormItem>

                    <Row style={{width: 900}}>
                        <Col span={4}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 8}}
                                label="文章左对齐: ">
                                {getFieldDecorator('alignLeft', {
                                    initialValue: false,
                                    valuePropName: 'checked'
                                })(
                                    <Switch
                                        onChange={(checked) => {
                                            this.setState({alignLeft: checked ? 1 : 0}, () => {
                                                this.sendPost({
                                                    postTitle: this.state.newsTitle,
                                                    postContent: this.state.editor.root.innerHTML
                                                })
                                            })
                                        }}
                                        checkedChildren="是"
                                        unCheckedChildren="否"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 8}}
                                label="英文强制换行: ">
                                {getFieldDecorator('wordBreak', {
                                    initialValue: false,
                                    valuePropName: 'checked'
                                })(
                                    <Switch
                                        onChange={(checked) => {
                                            this.setState({wordBreak: checked ? 1 : 0}, () => {
                                                this.sendPost({
                                                    postTitle: this.state.newsTitle,
                                                    postContent: this.state.editor.root.innerHTML
                                                })
                                            })
                                        }}
                                        checkedChildren="是"
                                        unCheckedChildren="否"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 8}}
                                label="图片加水印: ">
                                {getFieldDecorator('watermark', {
                                    initialValue: true,
                                    valuePropName: 'checked'
                                })(
                                    <Switch
                                        onChange={(checked) => {
                                            checked ? Cookies.set('watermark', 1) : Cookies.set('watermark', 0)
                                        }}
                                        checkedChildren="是"
                                        unCheckedChildren="否"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={3}>
                            <FormItem
                                className="labelWidth40"
                                labelCol={{span: 1}}
                                wrapperCol={{span: 10}}
                                label="独家: "
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
                        </Col>
                        <Col span={3}>
                            <FormItem
                                className="labelWidth40"
                                labelCol={{span: 1}}
                                wrapperCol={{span: 10}}
                                label="推广: "
                            >
                                {getFieldDecorator('advertised', {
                                    initialValue: (updateOrNot && newsInfo.advertised) ? parseInt(newsInfo.advertised) === 1 : false,
                                    valuePropName: 'checked'
                                })(
                                    <Switch
                                        onChange={(checked) => {
                                            this.setState({advertised: checked ? 1 : 0})
                                        }}
                                        checkedChildren="是"
                                        unCheckedChildren="否"
                                    />
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <FormItem
                        labelCol={{ span: 1 }}
                        wrapperCol={{ span: 20 }}
                        label="辅助信息"
                    >
                        {getFieldDecorator('subTitle', {
                            initialValue: (updateOrNot && newsInfo) ? (`${newsInfo.subTitle}` !== undefined ? `${newsInfo.subTitle}` : '') : '',
                            rules: [{required: false, message: '选填'}]
                        })(
                            <TextArea style={{ widthSpace: 'pre-line', display: 'none' }} className="news-summary" placeholder="可填写原文作者、原文标题、编译人员等信息"/>
                        )}
                        <PostEditor
                            onValueChange={value => { this.onDetailValueChange(value) }}
                            info={newsInfo && newsInfo.subTitle}
                        />
                    </FormItem>
                    <FormItem
                        labelCol={{span: 1}}
                        wrapperCol={{span: 20}}
                        label="内容: "
                    >
                        {getFieldDecorator('content', {
                            initialValue: (updateOrNot && newsInfo) ? newsContent : '',
                            rules: [{required: true, message: '请输入新闻内容！'}]
                        })(
                            <Input className="news" style={{display: 'none'}}/>
                        )}
                        {/* <PostEditor
                            setSimditor={(editor) => {
                                this.setState({editor})
                            }}
                            subSend={(data) => this.sendPost(data)}/> */}
                        <div className="media-quill-editor">
                            <MediaQuillEditor
                                setEditor={(editor) => { this.setState({editor}) }}
                                subSend={(data) => this.sendPost(data)}
                            />
                        </div>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="标签: "
                        style={{display: 'none'}}
                    >
                        {getFieldDecorator('tags', {
                            initialValue: this.state.tags,
                            rules: [
                                {required: false, message: '至少输入一个标签！'}
                            ]
                        })(
                            <Input className="tag-item" placeholder="中文/英文/数字, 标签之间用英文逗号隔开!"/>
                        )}
                        {/*
                        <div>
                            {tags.map((tag, index) => {
                                const isLongTag = tag.length > 20
                                const tagElem = (
                                    <Tag color="blue" key={tag} closable={index !== -1} afterClose={() => this.handleClose(tag)}>
                                        {isLongTag ? `${tag.slice(0, 20)}` : tag}
                                    </Tag>
                                )
                                return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem
                            })}
                            {inputVisible && (
                                <Input
                                    ref={this.saveInputRef}
                                    type="text"
                                    size="small"
                                    style={{ width: 78 }}
                                    value={inputValue}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleInputConfirm}
                                    onPressEnter={this.handleInputConfirm}
                                />
                            )}
                            {!inputVisible && tags.length < 20 && (
                                <Tag
                                    onClick={this.showInput}
                                    style={{ background: '#fff', borderStyle: 'dashed' }}
                                >
                                    <Icon type="plus" /> New Tag
                                </Tag>
                            )}
                            <span>每个标签最多<font style={{color: 'red'}}> 20 </font>个字</span>
                        </div>
                        */}
                    </FormItem>

                    <Row style={{maxWidth: 700}}>
                        <Col span={14}>
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
                        </Col>
                        <Col span={10}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 14}}
                                label="固定标签: "
                            >
                                {
                                    this.transTags(fixTagData).map((item, index) => {
                                        return <Button key={index} style={{margin: '0 10px'}} size="small" type="primary" onClick={() => this.onBtnFixTagClick(item)}>{item.label}</Button>
                                    })
                                }
                            </FormItem>
                        </Col>
                    </Row>

                    <Row style={{maxWidth: 1200}}>
                        <Col span={14}>
                            <FormItem
                                {...formItemLayout}
                                label="新版标签："
                            >
                                {getFieldDecorator('tagsV2', {
                                    initialValue: (updateOrNot && newsInfo) ? (!newsInfo.tagsV2 || JSON.parse(newsInfo.tagsV2).length === 0 ? [] : this.transTags(JSON.parse(newsInfo.tagsV2))) : [],
                                    rules: [
                                        {required: true, message: '请选择相关标签！'}
                                    ]
                                })(
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        labelInValue
                                        notFoundContent={this.state.searching ? <Spin size="small"/> : this.state.searchText}
                                        filterOption={false}
                                        optionFilterProp='children'
                                        style={{width: '100%'}}
                                        onSearch={this.getTagList}
                                        onSelect={this.handleSelect}
                                        onDeselect={this.handleDeselect}
                                        onChange={this.handleTagsChange}
                                        onBlur={this.handleBlur}
                                    >
                                        {options}
                                    </Select>
                                )}
                                {this.state.noCurrResult &&
                                <p style={{position: 'absolute', right: '-155px', bottom: 0}}>
                                    <span>未找到结果?</span>
                                    <Button type="primary" loading={this.state.tagsIconLoading} style={{margin: '0 10px'}} onClick={this.addNewTag} size="small">创建</Button>
                                    <span>一个</span>
                                </p>}

                            </FormItem>
                        </Col>
                        <Col span={10}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 14}}
                                label="核心关键词: ">
                                {getFieldDecorator('keyTags', {
                                    initialValue: (updateOrNot && newsInfo) ? `${newsInfo.keyTags || ''}` : '',
                                    rules: [{required: false, message: '请输入核心关键词！'}]
                                })(
                                    <Input placeholder="核心关键词"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <Row style={{maxWidth: 1200}}>
                        <Col span={7}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 16}}
                                label="发布日期: "
                            >
                                {getFieldDecorator('publishTime', {
                                    rules: [{required: true, message: '请选择新闻发布时间！'}],
                                    initialValue: (updateOrNot && newsInfo) ? moment(formatDate(newsInfo.publishTime), 'YYYY-MM-DD HH:mm:ss') : moment()
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 16}}
                                label="热度: "
                            >
                                {getFieldDecorator('hotCounts', {
                                    initialValue: (updateOrNot && newsInfo) ? (newsInfo.hotCounts || 0) : 0,
                                    rules: [{required: true, pattern: /^[0-9]+$/, message: '请输入新闻热度值(正整数)！'}]
                                })(
                                    <Input className="news-source" placeholder="请输入新闻热度值"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <Row style={{width: 900}}>
                        <Col span={6}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 14}}
                                label="图片剪裁: ">
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
                                </div>
                            </FormItem>
                        </Col>
                        <Col span={3}>
                            {this.FormItem({
                                imgName: 'pc',
                                label: 'PC-封面',
                                imgUrl: 'coverImgUrl',
                                newsInfo: newsInfo,
                                fileList: fileList,
                                changeEvent: this.handleChange,
                                size: '220px * 160px',
                                require: true,
                                noBtn: true
                            })}
                        </Col>
                        <Col span={3}>
                            {this.FormItem({
                                imgName: 'pc_recommend',
                                label: 'PC-推荐位',
                                imgUrl: 'pccoverImgUrl',
                                newsInfo: newsInfo,
                                fileList: pcfileList,
                                changeEvent: this.handlePcChange,
                                size: '532px * 335px',
                                require: false,
                                noBtn: true
                            })}
                        </Col>
                        <Col span={3}>
                            {this.FormItem({
                                imgName: 'wap_small',
                                label: 'M-缩略图',
                                imgUrl: 'mcoverImgUrl',
                                newsInfo: newsInfo,
                                fileList: mfileList,
                                changeEvent: this.handleMobileChange,
                                size: '164px * 109px',
                                require: true,
                                noBtn: true
                            })}
                        </Col>
                        <Col span={3}>
                            {this.FormItem({
                                imgName: 'wap_big',
                                label: 'M-轮播图',
                                imgUrl: 'mccoverImgUrl',
                                newsInfo: newsInfo,
                                fileList: mcfileList,
                                changeEvent: this.handleMobileCommentChange,
                                size: '640px * 320px',
                                require: false,
                                noBtn: true
                            })}
                        </Col>
                        <Col span={4}>
                            {isJsonString(newsInfo.coverPic) && JSON.parse(newsInfo.coverPic).mainImg &&
                            <p className="exImg">
                                <span>原封面图: </span>
                                <img onClick={this.handleCheck} src={JSON.parse(newsInfo.coverPic).mainImg} alt=""/>
                            </p>}
                        </Col>
                    </Row>

                    <Row style={{maxWidth: 1000}}>
                        <Col span={9} style={{ display: 'none' }}>
                            <FormItem
                                {...formItemLayout}
                                label="添加视频: "
                            >
                                <div>
                                    <UploadFile ref={(ref) => {
                                        this.uploadVideo = ref
                                    }} isBtn={false} setUrl={(url, name, fileInfo) => this.setState({
                                        'vUrl': url,
                                        'vName': name,
                                        'vFileInfo': fileInfo
                                    })} title=' 点击上传视频'/>
                                </div>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem
                                {...formItemLayout}
                                label="添加音频: "
                            >
                                <div>
                                    <UploadFile ref={(ref) => {
                                        this.uploadAudio = ref
                                    }} isBtn={false} setUrl={(url, name, fileInfo) => this.setState({
                                        'aUrl': url,
                                        'aName': name,
                                        'aFileInfo': fileInfo
                                    })} title=' 点击上传音频'/>
                                </div>
                            </FormItem>
                        </Col>
                    </Row>

                    {
                        !this.state.vFileInfo ? '' : (
                            <Row className="post-cover" style={{marginLeft: 80}}>
                                <Col span={4}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="视频M封面: "
                                    >
                                        {getFieldDecorator('video_m', {
                                            initialValue: this.state.vmUrl,
                                            rules: [{required: true, message: '请上传视频M封面！'}]
                                        })(
                                            <div className="upload-img-warp clearfix">
                                                <div className="upload-img-box">
                                                    <UploadImg ref={(ref) => {
                                                    }} url={this.state.vmUrl} setUrl={(url) => this.setState({'vmUrl': url})}/>
                                                </div>
                                                <span className="cover-img-tip">用于 M 端推荐位视频封面展示, 建议尺寸: <font style={{color: 'red'}}>280px * 205px</font></span>
                                            </div>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={4}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="视频PC封面: "
                                    >
                                        {getFieldDecorator('video_pc', {
                                            initialValue: this.state.vpcUrl,
                                            rules: [{required: true, message: '请上传视频PC封面！'}]
                                        })(
                                            <div className="upload-img-warp clearfix">
                                                <div className="upload-img-box">
                                                    <UploadImg ref={(ref) => {
                                                    }} url={this.state.vpcUrl} setUrl={(url) => this.setState({'vpcUrl': url})}/>
                                                </div>
                                                <p className="cover-img-tip"><font style={{color: '#249aef'}}>280px * 205px</font></p>
                                            </div>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                        )
                    }

                    <FormItem
                        style={{width: 1100}}
                        wrapperCol={{span: 16, offset: 2}}
                    >
                        <Button type="primary" onClick={this.newsVisibleShow} className="preview" style={{marginRight: '10px', marginBottom: 10}}>新闻内容预览</Button>
                        <Button type="primary" data-status='1' onClick={this.handleSubmit} style={{marginRight: '10px', marginBottom: 10}}>审核通过</Button>
                        <Button type="primary" data-status='3' onClick={this.handleSubmit} style={{marginRight: '10px', marginBottom: 10}}>定时发表</Button>
                        <Button type="primary" data-status='4' onClick={this.handleSubmit} style={{marginRight: '10px', marginBottom: 10}}>暂存一下</Button>
                        <Button type="primary" data-status='2' onClick={this.handleSubmit} style={{marginRight: '10px', marginBottom: 10}}>审核驳回</Button>
                        <Button type="primary" className="cancel" style={{marginRight: '10px', marginBottom: 10}} onClick={this.closeWindow}>取消</Button>
                    </FormItem>
                    <Modal visible={newsVisible} footer={null} className="newsModal" onCancel={this.newsVisibleHide} width={1000}>
                        <Row>
                            <Col className="previewNews simditor">
                                <p className="simditor-body" style={{padding: 10}} dangerouslySetInnerHTML={this.createMarkup(newsContent)}/>
                            </Col>
                        </Row>
                    </Modal>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{width: '100%'}} src={previewImage}/>
                    </Modal>
                    {/* 图片剪裁 */}
                    <Modal
                        confirmLoading={this.state.confirmLoading}
                        height="700px"
                        width="1400px"
                        style={{top: '50px'}}
                        visible={uploadAllImgModal}
                        onOk={this.sureCropImg}
                        onCancel={this.uploadAllImgCancel}>
                        <div className="croper-wrap checkPost clearfix">
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
                                        onClick={(e) => {
                                            This.changeActiveImg(e, item, index)
                                        }}
                                        className="cropper-intro">
                                        <div className={`cropper-item-wrap ${focusImg === index ? 'active' : ''}`}>
                                            <div
                                                data-type={item.coverName}
                                                data-list={item.coverList}
                                                className="crop-preview-item"
                                                style={{fontSize: 0, width: item.width, height: item.height}}>
                                                <img src="" alt="" style={{width: '100%', height: '100%'}}/>
                                            </div>
                                        </div>
                                        <span>{item.intro}</span>
                                    </div>
                                })}
                            </div>
                        </div>
                    </Modal>
                    <Modal
                        title="提示"
                        visible={this.state.isRepetition}
                        onOk={this.isRepetitionOk}
                        onCancel={this.isRepetitionCancel}
                    >
                        <p style={{ lineHeight: '40px', fontSize: '14px' }}>{this.state.isRepetitionEdit} <a
                            href={this.state.similarityUrl} style={{ display: this.state.similarityUrl === '' ? 'none' : 'inlineBlock' }} target="_blank">查看相似文章</a></p>
                    </Modal>
                    <Modal
                        title="审核驳回"
                        visible={this.state.doRejectShow}
                        onOk={this.doRejectDo}
                        onCancel={() => {
                            this.setState({doRejectShow: false})
                        }}
                    >
                        <div className="modal-input-reject">
                            <span style={{marginRight: 10}}>请{parseInt(this.state.rejectSelectVal) === 4 ? '填写' : '选择'}文章不通过原因：{this.state.reason || ''}</span>
                            <Select value={this.state.rejectSelectVal} style={{ width: 280 }} onChange={this.doRejectSelect}>
                                {reasonArr.map(function (item, index) {
                                    return <Option value={`${index}`} key={index}>{item}</Option>
                                })}
                            </Select>
                            <TextArea style={{display: parseInt(this.state.rejectSelectVal) === 4 ? 'block' : 'none'}} rows={3} autoFocus onChange={(e) => { this.getReason(e) }}/>
                        </div>
                    </Modal>
                </Form>
            </Spin>
            {this.state.closeLoading && <CloseWindow handleCancel={(timer) => {
                clearInterval(timer)
                this.setState({
                    closeLoading: false
                })
            }} closeLoading={this.state.closeLoading}/>}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.postAccountInfo.list,
        userInfo: state.articleAudit.userInfo,
        newsInfo: state.articleAudit.info,
        channelList: state.channelListInfo,
        classifyList: state.postTacticsInfo.list
    }
}

export default connect(mapStateToProps)(Form.create()(ArticleAuditSend))
