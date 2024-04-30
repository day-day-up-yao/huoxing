/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import MediaQuillEditor from '../../components/MediaQuillEditor'
import Simditor from '../../components/Simditor'
import Cropper from '../../../node_modules/cropperjs/dist/cropper.esm.js'
import '../../../node_modules/cropperjs/dist/cropper.css'

import {
    Radio,
    Form,
    Input,
    Upload,
    Icon,
    Modal,
    Button,
    Tag,
    Tooltip,
    message,
    Row,
    Col,
    Spin,
    DatePicker,
    Progress,
    Switch,
    Select,
    Checkbox
} from 'antd'
import moment from 'moment'
import {
    getPostItemInfo,
    getMergeNewsInfo,
    getLocalInfo,
    getTwitterInfo,
    getTacticsInfo
} from '../../actions/post/post.action'
import {getPostAccountList} from '../../actions/account/postAccount.action'
import {getChannelList, getTopicList} from '../../actions/index'
import {getPostTacticsList} from '../../actions/account/postTactics.action'
import {axiosFormData, axiosAjax, URL, formatDate, isJsonString, getSig, getText, dataURLtoBlob, titleTrans} from '../../public/index'
import './post.scss'
import Cookies from 'js-cookie'
// import CropperImg from '../../components/CropperImg'
// import html2canvas from 'html2canvas'
const FormItem = Form.Item
const {TextArea} = Input
const {Option} = Select
const RadioGroup = Radio.Group
const {CheckableTag} = Tag
const {confirm} = Modal
const CheckboxGroup = Checkbox.Group

const cateIdOptions = [
    {label: '原创', value: '1'},
    {label: '转载', value: '2'}
]

let uploadId = ''
let currIndex = 1
let pause = false
let timeout, currentValue

let hxPassportId = Cookies.get('hx_passportId')

class PostSend extends Component {
    constructor (props) {
        super(props)
        this.state = {
            confirmLoading: false,
            editor: '',
            editorOnPaste: false, // editor是否添加上Paste事件
            updateOrNot: false,
            tags: [],
            smartTags: [],
            smartTagsStatus: false,
            selectedTags: [],
            tagsLoading: false,
            source: '',
            createdBy: '',
            mp3fileList: [],
            videofileList: [],
            videoList: [],
            audioDefalutArr: [],
            inputVisible: false,
            inputValue: '',
            isLogin: false,
            channelId: '1',
            newsVisible: false,
            cateId: '1',
            previewVisible: false,
            previewImage: '',
            newsTitle: '',
            newsContent: '',
            mp3Url: '',
            videoUrl: '',
            uploading: false,
            progressNum: 0,
            loading: true,
            original: 0,
            advertised: 0,
            subject: 0,
            uploadAllImgModal: false,
            cropper: null,
            focusImg: -1,
            ratio: 640 / 320,
            cropImgRule: [
                // {
                //     coverName: 'mcImg',
                //     coverList: 'mcfileList',
                //     width: '640px',
                //     height: '320px',
                //     ratio: 640 / 320,
                //     intro: 'M端推荐新闻的滚动:640 * 320'
                // }, {
                //     coverName: 'pcImg',
                //     coverList: 'pcfileList',
                //     width: '532px',
                //     height: '335px',
                //     ratio: 532 / 335,
                //     intro: 'PC端推荐位新闻封面:532 * 335'
                // },
                {
                    coverName: 'Img',
                    coverList: 'fileList',
                    width: '220px',
                    height: '160px',
                    ratio: 220 / 160,
                    intro: 'PC 端新闻封面:220 * 160'
                }, {
                    coverName: 'mImg',
                    coverList: 'mfileList',
                    width: '164px',
                    height: '109px',
                    ratio: 164 / 109,
                    intro: 'M端新闻封面:164 * 109'
                }
            ],
            width: 0,
            height: 0,
            wordBreak: 0,
            alignLeft: 0,
            iconLoading: false,
            interval: 0,
            value: '',
            searching: false,
            data: [],
            searchText: '',
            tagsIconLoading: false,
            noCurrResult: false,
            dateDisabled: true,
            list: !this.props.list ? [] : this.props.list,
            reprintAuthorId: '',
            sourceVal: {key: 'fff9d400cb94444fadaefd429516c276', label: 'MarsBit'},
            oldTags: [],
            tagTitle: '',
            isRepetition: false,
            isRepetitionEdit: false,
            similarityUrl: '',
            topicValue: {key: '', label: ''},
            topicList: [],
            newsAssist: '',
            abstractinfo: '',
            aiflag: false,
            ailoading: false
        }
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true })
    }

    // 上传图片时插入state
    insertState = (arr) => {
        arr.map((item) => {
            this.state[item + 'fileList'] = []
            this.state[item + 'Img'] = ''
        })
    }

    componentWillMount () {
        Cookies.set('watermark', 1)
        this.insertState(['mHotSubject', 'pcHotSubject', 'mSubject', 'pcSubject', 'videoPc', 'videoM', 'all', '', 'pc', 'm', 'mc'])
        const {dispatch} = this.props
        const This = this
        dispatch(getPostTacticsList('post', {'pageSize': 20, 'status': 1, 'currentPage': 1}, function () {
            This.setState({
                loading: false
            })
        }))
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.newsInfo.id !== this.props.newsInfo.id) {
            this.setState({
                sourceVal: this.props.newsInfo.id ? {key: this.props.newsInfo.createdBy, label: this.props.newsInfo.source} : { key: 'fff9d400cb94444fadaefd429516c276', label: 'MarsBit' }
            })
        }
    }

    // 当编辑器内容为空时，复制第默认生成一次tag
    editorPaste = (event) => {
        this.setState({
            editorOnPaste: true
        })

        const delta = this.state.editor.getContents()
        if (delta.length() === 0 || (delta.length() === 1 && delta.ops[0].insert && delta.ops[0].insert.replace(/\s+/g, '') === '')) {
            setTimeout(() => {
                this.handleSmartTags()
            }, 300)
        }
    }

    componentDidMount () {
        const {dispatch, location} = this.props
        this.getTopicListData()
        dispatch(getChannelList())
        dispatch(getPostAccountList('init', {pageSize: 1000, currentPage: 1}))
        if (location.query.id || location.query.url || location.query.from) {
            if (location.query.id) {
                this.setState({
                    loading: true
                })
                dispatch(getPostItemInfo({'id': location.query.id}, (res) => {
                    if (res.code === 1) {
                        this.setState({
                            loading: false
                        })
                    } else {
                        this.setState({
                            loading: false
                        })
                    }
                    this.renderData(res)
                    this.setState({
                        oldTags: res.tagsV2,
                        abstractinfo: res.synopsis
                    })
                }))
            } else if (location.query.url) {
                dispatch(getMergeNewsInfo({
                    url: location.query.url,
                    webName: location.query.webName,
                    title: location.query.title,
                    publishTime: location.query.publishTime,
                    coverPic: location.query.coverPic,
                    synopsis: location.query.synopsis,
                    author: location.query.author
                }, (res) => {
                    this.renderData(res)
                    this.setState({
                        oldTags: res.tagsV2
                    })
                }))
            } else if (location.query.from === 'twitter') {
                dispatch(getTwitterInfo({url: decodeURIComponent(location.query.urls), id: location.query.newsid}, (res) => {
                    this.setState({
                        loading: true
                    })
                    if (!res) {
                        message.error('此新闻源暂不支持导入功能！')
                        this.setState({
                            loading: false
                        })
                    } else {
                        this.setState({
                            loading: false,
                            tagTitle: res.title
                        })
                        this.renderData(res)
                        this.handleSmartTags()
                        this.inquireRepetition(res)
                        this.isArticleAudit(res)
                    }
                }))
            } else if (location.query.from === 'tactics') {
                this.setState({
                    loading: true
                })
                dispatch(getTacticsInfo({url: decodeURIComponent(location.query.urls), id: location.query.newsid}, (res) => {
                    if (!res) {
                        message.error('此新闻源暂不支持导入功能！')
                        this.setState({
                            loading: false
                        })
                    } else {
                        this.renderData(res)
                        this.setState({
                            loading: false,
                            tagTitle: res.title
                        })
                        this.handleSmartTags()
                        this.inquireRepetition(res)
                        this.isArticleAudit(res)
                    }
                }))
            }
        } else {
            if (!localStorage.getItem('articleData')) {
                this.setState({
                    loading: false
                })
            } else {
                setTimeout(() => {
                    dispatch(getLocalInfo({}, (res) => {
                        this.renderData(res)
                    }))
                }, 500)
            }
            this.setState({interval: setInterval(() => {
                this.saveArticle()
                console.log('已存储！')
            }, 5 * 1000)})
            // sessionStorage.setItem('hx_content', '')
        }

        // this.props.router.setRouteLeaveHook(
        //     this.props.route,
        //     this.routerWillLeave
        // )
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

    routerWillLeave = () => { return '离开页面可能会导致编辑内容丢失, 是否确认离开?' }

    componentWillUnmount () {
        const {interval} = this.state
        this.setState({ interval: clearInterval(interval) })
    }

    // 本地存储
    saveArticle = (fn) => {
        const {form} = this.props
        const {tags, original, channelId, newsContent, videofileList, audioDefalutArr, cateId, pcImg, Img, mImg, mcImg, videoPcImg, videoMImg, pcSubjectImg, mSubjectImg, mHotSubjectImg, pcHotSubjectImg} = this.state
        let subject = null
        if (parseInt(this.state.subject) === 1) {
            subject = {
                pc_subject: pcSubjectImg,
                m_subject: mSubjectImg,
                pc_hot_subject: pcHotSubjectImg,
                m_hot_subject: mHotSubjectImg
            }
        } else {
            subject = {}
        }

        let articleData = {
            ...subject,
            tags: tags.join(','),
            original: original,
            subject: this.state.subject,
            content: newsContent,
            audio: JSON.stringify(audioDefalutArr),
            video: videofileList[0] && videofileList[0].fileUrl ? JSON.stringify(videofileList) : '[]',
            // publishTime: Date.parse(form.getFieldValue('publishTime').format('YYYY-MM-DD HH:mm:ss')) || Date.parse(new Date()),
            author: form.getFieldValue('author'),
            hotCounts: form.getFieldValue('hotCounts'),
            synopsis: form.getFieldValue('synopsis'),
            title: form.getFieldValue('title'),
            source: parseInt(cateId) === 1 ? form.getFieldValue('source').label || 'MarsBit' : form.getFieldValue('sourceTrans'),
            createdBy: parseInt(cateId) === 1 ? form.getFieldValue('source').key || 'fff9d400cb94444fadaefd429516c276' : '',
            advertised: form.getFieldValue('advertised'),
            subTitle: form.getFieldValue('subTitle'),
            keyTags: form.getFieldValue('keyTags'),
            originalUrl: form.getFieldValue('originalUrl'),
            originalTitle: form.getFieldValue('originalTitle'),
            cateId: cateId,
            channelId: channelId,
            coverPic: JSON.stringify({
                pc_recommend: pcImg,
                pc: Img,
                wap_small: mImg,
                wap_big: mcImg,
                video_pc: videoPcImg,
                video_m: videoMImg,
                ...subject
            })
        }
        localStorage.setItem('articleData', JSON.stringify(articleData))
        if (fn) {
            fn(articleData)
        }
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
        // sessionStorage.setItem('hx_content', JSON.stringify(data))

        let filterContent = data.content.replace(/<style(.+)<\/style>/, '') // 去除style标签
        filterContent = filterContent.replace(/<img[^>]*>/gi, function (match, capture) {
            let imgStr = match.replace(/height="(.*)"/gi, '')
            imgStr = match.replace(/width="(.*)"/gi, '')
            return imgStr
        }) // 去除图片height、width属性

        // this.state.editor.setContents(this.state.editor.clipboard.convert(filterContent))
        this.state.editor.clipboard.dangerouslyPasteHTML(filterContent, 'user')
        this.state.editor.videoInit()

        let coverPic = isJsonString(data.coverPic) ? JSON.parse(data.coverPic) : {
            pc_recommend: '',
            pc: '',
            wap_big: '',
            wap_small: '',
            video_pc: '',
            video_m: '',
            pc_subject: '',
            m_subject: '',
            m_hot_subject: '',
            pc_hot_subject: ''
        }
        let pcfileList = this.fileList(coverPic, 'pc_recommend')
        let pcSubject = this.fileList(coverPic, 'pc_subject')
        let mSubject = this.fileList(coverPic, 'm_subject')
        let mHotSubject = this.fileList(coverPic, 'm_hot_subject')
        let pcHotSubject = this.fileList(coverPic, 'pc_hot_subject')
        let videoPcfileList = this.fileList(coverPic, 'video_pc')
        let videoMfileList = this.fileList(coverPic, 'video_m')
        let fileList = this.fileList(coverPic, 'pc')
        let mfileList = this.fileList(coverPic, 'wap_small')
        let mcfileList = this.fileList(coverPic, 'wap_big')

        this.setState({
            updateOrNot: true,
            videoPcfileList: videoPcfileList,
            videoMfileList: videoMfileList,
            fileList: fileList,
            pcfileList: pcfileList,
            mfileList: mfileList,
            mcfileList: mcfileList,
            pcSubjectfileList: pcSubject,
            mSubjectfileList: mSubject,
            pcHotSubjectfileList: pcHotSubject,
            mHotSubjectfileList: mHotSubject,
            audioDefalutArr: isJsonString(data.audio) ? JSON.parse(data.audio) : [],
            videofileList: isJsonString(data.video) ? JSON.parse(data.video) : [],
            tags: !data.tags ? [] : data.tags.split(','),
            newsContent: filterContent,
            Img: coverPic.pc,
            allImg: coverPic.all,
            subTitle: data.subTitle,
            pcImg: coverPic.pc_recommend || '',
            mImg: coverPic.wap_small,
            mcImg: coverPic.wap_big,
            pcSubjectImg: coverPic.pc_subject,
            mSubjectImg: coverPic.m_subject,
            pcHotSubjectImg: coverPic.pc_hot_subject,
            mHotSubjectImg: coverPic.m_hot_subject,
            videoMImg: coverPic.video_m,
            videoPcImg: coverPic.video_pc,
            mp3Url: data.audio || '',
            videoUrl: data.video || '',
            loading: false,
            original: data.original || 0,
            advertised: data.advertised || 0,
            subject: data.subject || 0,
            cateId: data.cateId,
            source: data.cateId && parseInt(data.cateId) === 1 ? {key: data.createdBy || 'fff9d400cb94444fadaefd429516c276', label: data.source || 'MarsBit'} : data.source,
            createdBy: data.cateId && parseInt(data.cateId) === 1 ? data.createdBy || 'fff9d400cb94444fadaefd429516c276' : ''
        })
    }

    closeWindow = () => {
        this.setState({
            closeLoading: true
        })
    }

    // 频道改变
    channelIdChange = (e) => {
        this.setState({
            channelId: e.target.value
        })
    }

    cateIdChange = (e) => {
        let value = e.target.value
        if (value === '1') {
            this.setState({
                source: 'MarsBit',
                createdBy: 'fff9d400cb94444fadaefd429516c276'
            })
            let This = this
            const {dispatch} = this.props
            dispatch(getPostAccountList('init', {pageSize: 1000, currentPage: 1, keyword: This.props.newsInfo.source}, (res) => {
                let list = res.inforList
                let isAuthor = true
                for (let i = 0; i < list.length; i++) {
                    if (list[i].nickName === This.props.newsInfo.source) {
                        isAuthor = false
                        This.setState({
                            sourceVal: {key: list[i].passportId, label: list[i].nickName}
                        })
                        break
                    }
                }
                if (isAuthor) {
                    This.setState({
                        sourceVal: {key: '', label: ''}
                    })
                    message.info('此作者不存在')
                }
            }))
        } else {
            this.setState({
                source: ''
            })
        }
        this.setState({
            cateId: value
        })
    }

    optionChange = (e) => {
        this.setState({
            source: e.label,
            createdBy: e.key
        })
    }

    optionSearchChange = (e) => {
        let This = this
        const {dispatch} = this.props
        dispatch(getPostAccountList('init', {pageSize: 1000, currentPage: 1, keyword: e}, (res) => {
            let arr = res.inforList
            This.setState({
                list: arr
            })
        }))
    }

    // 原版标签设置
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

    // pc 图片上传
    handleChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                Img: ''
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
                    Img: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    Img: '',
                    fileList: []
                })
            }
        }
    }

    // pc 视频展示图上传
    handleVideoPcChange = ({file, fileList}) => {
        this.setState({
            videoPcfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                videoPcImg: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    videoPcImg: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    videoPcImg: '',
                    videoPcfileList: []
                })
            }
        }
    }

    // 手机端视频展示图上传
    handleVideoMChange = ({file, fileList}) => {
        this.setState({
            videoMfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                videoMImg: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    videoMImg: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    videoMImg: '',
                    videoMfileList: []
                })
            }
        }
    }

    // pc 推荐位展示图上传
    handlePcChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                pcImg: ''
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
                    pcImg: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    pcImg: '',
                    pcfileList: []
                })
            }
        }
    }

    // 手机端展示图上传
    handleMobileChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                mImg: ''
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
                    mImg: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    mImg: '',
                    mfileList: []
                })
            }
        }
    }

    // 手机端推荐展示图上传
    handleMobileCommentChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                mcImg: ''
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
                    mcImg: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    mcImg: '',
                    mcfileList: []
                })
            }
        }
    }

    // pcSubjectfileList: [],
    // mSubjectfileList: [],
    // pcHotSubjectfileList: [],
    // mHotSubjectfileList: [],
    // pcSubjectImg: '',
    // mSubjectImg: '',
    // pcHotSubjectImg: '',
    // mHotSubjectImg: '',

    // pc专题展示图上传
    handlePcSubjectChange = async ({file, fileList}) => {
        let sizeSuit = await this.beforeUpload(file.originFileObj)
        if (!sizeSuit) {
            message.warning('图片尺寸不能大于 800 * 800, 请重新选择!')
            return false
        }
        this.setState({
            pcSubjectfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                pcSubjectImg: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    pcSubjectImg: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    pcSubjectImg: '',
                    pcSubjectfileList: []
                })
            }
        }
    }

    // m 端专题展示图上传
    handleMSubjectChange = async ({file, fileList}) => {
        let sizeSuit = await this.beforeUpload(file.originFileObj)
        if (!sizeSuit) {
            message.warning('图片尺寸不能大于 800 * 800, 请重新选择!')
            return false
        }
        this.setState({
            mSubjectfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                mSubjectImg: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    mSubjectImg: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    mSubjectImg: '',
                    mSubjectfileList: []
                })
            }
        }
    }

    // pc 端 hot 专题展示图上传
    handlePcHotSubjectChange = async ({file, fileList}) => {
        let sizeSuit = await this.beforeUpload(file.originFileObj)
        if (!sizeSuit) {
            message.warning('图片尺寸不能大于 800 * 800, 请重新选择!')
            return false
        }
        this.setState({
            pcHotSubjectfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                pcHotSubjectImg: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    pcHotSubjectImg: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    pcHotSubjectImg: '',
                    pcHotSubjectfileList: []
                })
            }
        }
    }

    // m 端 hot 专题展示图上传
    handleMHotSubjectChange = async ({file, fileList}) => {
        let sizeSuit = await this.beforeUpload(file.originFileObj)
        if (!sizeSuit) {
            message.warning('图片尺寸不能大于 800 * 800, 请重新选择!')
            return false
        }
        this.setState({
            mHotSubjectfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                mHotSubjectImg: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    mHotSubjectImg: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    mHotSubjectImg: '',
                    mHotSubjectfileList: []
                })
            }
        }
    }

    // 音频上传
    handleMp3 = ({file, fileList}) => {
        if (file.response) {
            if (file.response.code === 1) {
                this.setState({
                    mp3fileList: fileList
                }, function () {
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
            }
        }
    }

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
        this.UploadPost(file, formData, totalSize, blockCount, blockSize)
    }

    UploadPost = (file, formData, totalSize, blockCount, blockSize) => {
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
                if (res.code === 1) {
                    if (currIndex === 1) {
                        uploadId = res.obj
                    }
                    let num = currIndex / blockCount * 100
                    if ((currIndex + 1) === blockCount) {
                        num = 100
                    }
                    this.setState({
                        progressNum: parseFloat(num.toFixed(2))
                    })
                    if (currIndex < blockCount) {
                        currIndex = currIndex + 1
                        this.UploadPost(file, formData, totalSize, blockCount, blockSize)
                    }
                } else if (res.code < 0) {
                    uploadId = ''
                    currIndex = 1
                    message.error(res.msg)
                } else if (res.code === 2) {
                    uploadId = ''
                    currIndex = 1
                    let {videofileList} = this.state
                    let newVideoFile = []
                    videofileList.map((item, index) => {
                        newVideoFile.push({
                            uid: item.uid,
                            fileName: item.name,
                            name: item.name,
                            fileUrl: res.obj
                        })
                    })
                    this.setState({
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

    // 音频
    normFile = (e) => {
        if (Array.isArray(e)) {
            return e
        }
        return e && e.fileList
    }

    delAudio = (uid) => {
        let arr = this.state.audioDefalutArr
        arr.map(function (item, index) {
            if (item.uid.toString() === uid.toString()) {
                arr.splice(index, 1)
            }
        })
        this.setState({
            audioDefalutArr: arr
        })
    }

    delPost = () => {
        uploadId = ''
        currIndex = 1
        this.setState({
            videoList: [],
            videofileList: [],
            uploading: false
        })
    }

    // 统一上传
    uploadAllImg = ({file, fileList}) => {
        const This = this
        if (file.size / (1024 * 1024) >= 2) {
            message.error('图片大小超过 2M , 请重新选择!')
            this.setState({
                allfileList: [],
                allImg: ''
            })
            return false
        }
        this.setState({
            allfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                allfileList: [],
                allImg: ''
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
                    allImg: file.response.obj,
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
                                const focusIndex = This.state.focusImg
                                const focusImg = This.state.cropImgRule[focusIndex === -1 ? 0 : focusIndex]
                                const imageData = cropper.getCroppedCanvas({
                                    width: parseInt(focusImg.width) * 2,
                                    height: parseInt(focusImg.height) * 2,
                                    imageSmoothingQuality: 'high'
                                })
                                const base64url = imageData.toDataURL('image/jpeg', 1)

                                const $cropperWrap = $('.crop-preview-item')
                                if (focusIndex === -1) {
                                    $cropperWrap.each(function (item, index) {
                                        $(this).children('img').attr('src', base64url)
                                    })
                                } else {
                                    $cropperWrap.eq(focusIndex).children('img').attr('src', base64url)
                                }
                            }
                        })
                    })
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    allImg: '',
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
        let count = 0
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
                        if (data.code === 1) {
                            count += 1
                        } else if (data.code === 400) {
                            console.log('上传失败')
                        }
                        if (count === 2) {
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
                            message.error('上传超时, 请检查网络后重新上传！')
                        } else {
                            message.error('网络故障, 请尝试重新上传！')
                        }
                        XMLHttpRequest.abort()
                    }
                })
            }, d * 2000)
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
        e.preventDefault()
        const This = this
        this.enterIconLoading()
        let status = e.target.getAttribute('data-status')
        let update = this.state.updateOrNot && (this.props.location.query.id || this.props.location.query.url)
        !update && this.saveArticle()

        if (this.state.editor.mediaUploading()) {
            message.warning('编辑器中图片或视频正在上传, 请稍候提交!')
            return false
        }

        if (this.state.uploading) {
            message.warning('视频正在上传, 请稍候提交!')
            this.setState({
                iconLoading: false
            })
            return false
        }

        // .format('YYYY-MM-DD HH:mm:ss')
        let pt = Date.parse(this.props.form.getFieldValue('publishTime') || new Date())
        let nt = Date.parse(new Date())

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

        let newArr = this.state.audioDefalutArr
        this.state.mp3fileList.map(function (item, index) {
            newArr.push({
                uid: item.uid,
                fileName: item.name,
                fileUrl: item.response.obj
            })
        })
        this.setState({
            audioDefalutArr: newArr
        }, function () {
            let subject = null
            if (parseInt(this.state.subject) === 1) {
                subject = {
                    pc_subject: this.state.pcSubjectImg,
                    m_subject: this.state.mSubjectImg,
                    pc_hot_subject: this.state.pcHotSubjectImg,
                    m_hot_subject: this.state.mHotSubjectImg
                }
            } else {
                subject = {}
            }

            this.props.form.setFieldsValue({
                ...subject,
                tags: '',
                // tags: this.state.tags.join(','),
                original: this.state.original === 1,
                advertised: this.state.advertised === 1,
                subject: this.state.subject === 1,
                content: this.state.newsContent,
                pc_recommend: this.state.pcImg,
                pc: this.state.Img,
                wap_small: this.state.mImg,
                wap_big: this.state.mcImg,
                subTitle: this.state.newsAssist,
                audio: JSON.stringify(this.state.audioDefalutArr),
                video: this.state.videofileList[0] && this.state.videofileList[0].fileUrl ? JSON.stringify(this.state.videofileList) : '[]'
            })

            this.props.form.validateFieldsAndScroll((err, values) => {
                // 删除iframe标签
                const deletiframe = values.content.replace(/(<\/?iframe.*?>)/g, '')
                const finishContent = deletiframe.replace('<p><br></p>', '')
                values.content = finishContent.replace('<p class="ql-align-justify"><br></p>', '')
                values.synopsis = this.state.abstractinfo
                let strategyCat = values.strategyCat
                if (values.cateId === 1 && values.source.key === '') {
                    message.error('来源不能为空')
                    return
                }
                const evil = (fn) => {
                    let Fn = Function
                    return new Fn('return ' + fn)()
                }
                let resultStrategyCa = evil(strategyCat.join(',').replace(/,/g, '|'))
                if (!err) {
                    this.setState({
                        loading: true
                    })
                    if (parseInt(this.state.cateId) === 1) {
                        values.createdBy = This.state.reprintAuthorId === '' ? values.source.key : This.state.reprintAuthorId
                        values.source = values.source.label
                    } else {
                        values.source = values.sourceTrans
                        values.createdBy = 'fff9d400cb94444fadaefd429516c276'
                    }
                    values.publishTime = (!this.state.dateDisabled || this.props.location.query.id) ? Date.parse(values['publishTime'].format('YYYY-MM-DD HH:mm:ss')) : Date.parse(new Date())
                    values.coverPic = JSON.stringify({
                        pc_recommend: values.pc_recommend || '',
                        pc: values.pc,
                        wap_big: values.wap_big,
                        wap_small: values.wap_small,
                        video_pc: this.state.videoPcImg,
                        video_m: this.state.videoMImg,
                        pc_subject: values.pc_subject || '',
                        m_subject: values.m_subject || '',
                        pc_hot_subject: values.pc_hot_subject || '',
                        m_hot_subject: values.m_hot_subject || ''
                    })
                    delete values.pc
                    delete values.pc_recommend
                    delete values.wap_big
                    delete values.wap_small
                    delete values.video_pc
                    delete values.video_m
                    delete values.pc_subject
                    delete values.m_subject
                    delete values.m_hot_subject
                    delete values.pc_hot_subject
                    delete values.alignLeft
                    delete values.wordBreak
                    delete values.watermark
                    delete values.smartTags
                    values.id = this.props.location.query.id || ''
                    values.status = status || 1
                    values.original = values.original ? 1 : 0
                    values.advertised = values.advertised ? 1 : 0
                    values.strategyCat = resultStrategyCa
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

                    if (this.props.location.query.from === 'tactics' || this.props.location.query.from === 'twitter') {
                        values.fromWorkbench = this.props.location.query.newsid
                    }
                    !(this.state.updateOrNot && this.props.location.query.id) && delete values.id

                    if (values.topicValue) {
                        values.topicId = values.topicValue.key
                        delete values.topicValue
                    }

                    axiosAjax('post', `${(this.state.updateOrNot && this.props.location.query.id) ? '/news/update' : '/news/add'}`, values, (res) => {
                        This.setState({
                            loading: false
                        })
                        if (res.code && res.code === 1) {
                            let type = this.props.location.query.from === 'tactics' ? '新闻' : '新闻'
                            let oldTags = values.tags.length > 0 ? values.tags.split(',') : []
                            let id = !this.props.location.query.newsid ? res.obj : this.props.location.query.newsid

                            // if (This.state.oldTags === '' || (Array.isArray(This.state.oldTags) && This.state.oldTags.length === 0)) {
                            //     message.info('请先点击按钮生成标签')
                            //     return
                            // }
                            This.dataGather(id, type, oldTags, values.tagsV2, res.currentTime)
                            message.success(update ? '修改成功！' : '添加成功！')
                            // This.closeWindow()
                            This.setState({interval: clearInterval(this.state.interval)})
                            !update && localStorage.removeItem('articleData')
                            hashHistory.push('/post-list')
                            if (status === '1') {
                                axiosAjax('post', '/caster/mars/content/sent', {
                                    newsId: values.id,
                                    title: values.title,
                                    synopsis: this.state.abstractinfo,
                                    coverPic: values.coverPic,
                                    createdBy: values.createdBy
                                })
                            }
                        } else {
                            this.setState({
                                iconLoading: false
                            })
                            message.error(res.msg)
                        }
                    })
                } else {
                    this.setState({
                        iconLoading: false
                    })
                }
            })
        })
    }

    onDetailValueChange (value) {
        let completeStr = ''
        const clearHtml = value.replace(/<br>+/g, '')
        const cletrStyle = clearHtml.replace(/ style=""+/, '')
        const regCleanLastp = /<p(?:(?!<\/p>).|\n)*?<\/p>/gm
        const regpArr = cletrStyle.match(regCleanLastp)
        completeStr = regpArr ? regpArr.join('') : regpArr
        // console.log('得到的字符串' + regpArr)
        // console.log(completeStr)
        this.setState({
            newsAssist: completeStr
        })
    }
    // 检查重复
    isRepetition = () => {
        // let simditorText = $('.simditor-body').text()
        let simditorText = $(this.state.editor.root).text()
        let title = $('.ant-input-lg.title-input').val()
        let obj = {
            content: simditorText,
            title: title
        }
        this.inquireRepetition(obj, 'edit')
        this.isArticleAudit(obj, 'edit')
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
    createMarkup = (str) => {
        return {__html: str}
    }

    CropperImgCroped = (imgUrl) => {
        console.log(imgUrl)
    }

    // 上传图片组件  图片名 / label名 / 图片链接 / 新闻信息 / 图片list / onchange事件 / 图片大小 / 是否需要预览按钮(默认展示, 传true则不展示)
    FormItem = (opt) => {
        const {updateOrNot} = this.state
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 15, offset: 1}
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
                    const data = res.obj.filter(item => item.type !== 1)
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
        let content = $(this.state.editor.root).text()
        let title = $('.ant-input-lg.title-input').val()
        let media = this.props.location.query.from === 'tactics' ? '新闻' : '新闻'
        const getTagsV2 = this.props.form.getFieldValue('tagsV2')
        if (content.trim() === '') {
            message.error('新闻内容不能为空!')
            return false
        }
        this.setState({
            // selectedTags: [],
            tagsLoading: true
        })
        axiosAjax('post', '/news/tags/predict', {
            content: content,
            title: !this.props.location.query.from ? title : this.state.tagTitle,
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
            this.setState({
                oldTags: res.obj
            })
            res.obj.forEach((tag) => {
                getTagsV2.map((item) => {
                    if (tag.name === item.label) {
                        let tagsValue = JSON.stringify({id: tag.id, type: tag.type, name: tag.name})
                        // let newTag = {title: `${tag.name}-行情`, key: JSON.stringify({id: tag.id, type: tag.type}), label: tag.name}
                        selectedTags.push(tagsValue)
                        // newTagV2.push(newTag)
                    }
                })
            })
            console.log(selectedTags)
            let newV2 = [...getTagsV2, ...newTagV2].reduce(reducer, [])
            // console.log(newV2)
            this.props.form.setFieldsValue({
                tagsV2: newV2
            })
            this.setState({
                selectedTags,
                smartTags: res.obj,
                smartTagsStatus: true,
                tagsLoading: false
            })

            if (res.obj.length === 0) {
                message.error('未匹配到合适的关键词，请手动添加')
            }
        })
    }

    // 生成之后取消按钮
    handleSmartTagsCancel = () => {
        this.setState({
            smartTags: [],
            smartTagsStatus: false
        })
    }

    // 生成ai摘要
    handleAigetdesc = () => {
        this.setState({
            ailoading: true
        })
        const replactext = '.details .details-cont p, p {word-break: normal; text-align: unset} p img {text-align: center !important;}'
        const aitext = getText(this.state.newsContent).replace(replactext, '')
        axiosAjax('post', '/news/getSummaryByAI', {
            txt: aitext
        }, (res) => {
            this.setState({
                ailoading: false
            })
            if (res.code === 1 && res.obj !== -1) {
                const aitxt = '【GPT】'
                const abstracttext = res.obj.answer.replace(/\n/gi, '')
                this.setState({
                    aiflag: true,
                    abstractinfo: aitxt + abstracttext
                })
            } else {
                message.error(res.msg)
            }
        },
        {
            'Sign-Param': getSig(),
            'Content-Type': 'application/json'
        })
    }

    handleWhitter = (e) => {
        const text = e.target.value.replace('【GPT】', '')
        // console.log(text)
        // this.props.newsInfo.synopsis = text
        // this.props.form.setFieldsValue((e) => {
        //     console.log(err)
        //     value.synopsis = text
        // })
        this.setState({
            aiflag: false,
            abstractinfo: text
        })
        // this.props.form.setFieldsValue({
        //     synopsis: text
        // })
        // this.props.form.resetFields({
        //     synopsis: text
        // })
        // console.log(this.props.newsInfo)
    }

    reset = () => {
        confirm({
            title: '提示',
            content: `确认要清空当前页面内容吗? 清空后不可恢复!`,
            onOk: () => {
                this.state.editor.root.innerHTML = ''
                this.props.form.resetFields()
            }
        })
    }

    dateChange = (e) => {
        this.setState({
            dateDisabled: !e.target.value
        })
    }

    seleceOnBlur = () => {
        this.setState({
            sourceVal: this.props.newsInfo.id ? {key: this.props.newsInfo.createdBy, label: this.props.newsInfo.source} : { key: '', label: '' }
        })
    }

    render () {
        // 这个update用来判断是否展示自动保存按钮
        const update = this.state.updateOrNot && (this.props.location.query.id || this.props.location.query.url || this.props.location.query.from === 'twitter')
        const This = this
        const {getFieldDecorator} = this.props.form
        const {newsInfo, classifyList} = this.props
        const {selectedTags, cateId, focusImg, allfileList, uploadAllImgModal, pcSubjectfileList, mSubjectfileList, pcHotSubjectfileList, mHotSubjectfileList, progressNum, videoPcfileList, videoMfileList, videofileList, uploading, previewVisible, previewImage, fileList, mfileList, tags, inputVisible, inputValue, newsContent, updateOrNot, newsVisible, mp3fileList, list, sourceVal, topicValue, topicList, abstractinfo} = this.state
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 18}
        }
        // newsInfo.title = abstractinfo
        // console.log(abstractinfo)
        console.log(newsInfo)
        let classifyArrList = []
        classifyList.map(item => {
            if (item.status === 1 && item.id !== 15) {
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
        const props = {
            action: '/file/upload',
            onRemove: this.delPost,
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
        // 获取内容并显示, 暂时这么写-----(已更新)
        // const hxContent = (location.query.id || location.query.url) ? JSON.parse(sessionStorage.getItem('hx_content')).content : ''
        let optionData = [{label: 'MarsBit', value: 'fff9d400cb94444fadaefd429516c276'}]
        list.length !== 0 && list.map((d) => {
            optionData.push({
                label: d.nickName,
                value: d.passportId
            })
            return optionData
        })
        const options = this.state.data.map(d => <Option title={titleTrans(d.type, d.name)} dataType={d.type} className={`tagType-${d.type}`} value={JSON.stringify({id: d.id, type: d.type}) } key={d.id}>{d.name}</Option>)
        return <div className="post-send">
            {/*
             <CropperImg style={{display: 'none'}} height={200} width={400} previewImg={this.state.mcImg} cropped={this.CropperImgCroped}/>
             */}
            <Spin spinning={this.state.loading} size='large'>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={24}>
                            <FormItem
                                {...formItemLayout}
                                label="标题: ">
                                {getFieldDecorator('title', {
                                    initialValue: (updateOrNot && newsInfo) ? `${newsInfo.title}` : '',
                                    rules: [{required: true, message: '请输入新闻标题！'}]
                                })(
                                    <Input className="title-input" autoFocus placeholder="新闻标题"/>
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
                            {optionData.length !== 0 && parseInt(cateId) === 1 ? <FormItem
                                className="labelWidth60"
                                labelCol={{span: 1}}
                                wrapperCol={{span: 16}}
                                label="来源"
                            >
                                {getFieldDecorator('source', {
                                    initialValue: this.props.newsInfo.id ? {key: this.props.newsInfo.createdBy, label: this.props.newsInfo.source} : sourceVal,
                                    rules: [{ required: true, message: '请选择新闻来源！' }]
                                })(
                                    <Select
                                        labelInValue
                                        showSearch={true}
                                        style={{width: '100%'}}
                                        placeholder='选择新闻来源'
                                        defaultActiveFirstOption={false}
                                        notFoundContent={this.state.searching ? <Spin size="small" /> : '未查询到相关内容'}
                                        showArrow={true}
                                        optionFilterProp='children'
                                        filterOption={true}
                                        onChange={this.optionChange}
                                        onSearch={this.optionSearchChange}
                                        onBlur={this.seleceOnBlur}
                                        allowClear={true}
                                    >
                                        {optionData.length !== 0 && optionData.map(d => {
                                            return <Option key={d.value}>{d.label}</Option>
                                        })}
                                    </Select>
                                )}
                            </FormItem> : <FormItem
                                className="labelWidth60"
                                labelCol={{span: 1}}
                                wrapperCol={{span: 16}}
                                label="来源: "
                            >
                                {getFieldDecorator('sourceTrans', {
                                    initialValue: ((updateOrNot && newsInfo && newsInfo.cateId === 2) || this.props.location.query.url) ? `${newsInfo.source || ''}` : '',
                                    rules: [{required: true, message: '请输入新闻来源！'}]
                                })(
                                    <Input onChange={this.optionSearchChange} className="news-source" placeholder="请输入新闻来源"/>
                                )}
                            </FormItem>}
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
                        <Col span={5}>
                            <FormItem
                                className="labelWidth60"
                                labelCol={{span: 1}}
                                wrapperCol={{span: 16}}
                                label="类别: "
                            >
                                {getFieldDecorator('cateId', {
                                    initialValue: (updateOrNot && newsInfo) ? `${newsInfo.cateId || '2'}` : '1',
                                    rules: [{required: true, message: '请选择类别！'}]
                                })(
                                    <RadioGroup
                                        options={cateIdOptions}
                                        onChange={this.cateIdChange}
                                        setFieldsValue={this.state.cateId}>
                                    </RadioGroup>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {(parseInt(cateId) === 2 || this.props.location.query.url) && <div className="reprint">
                                <Col span={12}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="原文标题: "
                                    >
                                        {getFieldDecorator('originalTitle', {
                                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.originalTitle || ''}` : '',
                                            rules: [{required: true, message: '请输入原文标题！'}]
                                        })(
                                            <Input className="news-source" placeholder="请输入原文标题"/>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="原文链接: "
                                    >
                                        {getFieldDecorator('originalUrl', {
                                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.originalUrl || ''}` : '',
                                            rules: [{required: false, message: '请输入原文链接！'}]
                                        })(
                                            <Input className="news-source" placeholder="请输入原文链接"/>
                                        )}
                                    </FormItem>
                                </Col>
                            </div>}
                        </Col>
                    </Row>
                    {this.props.channelList.length !== 0 && <FormItem
                        labelCol={{span: 1}}
                        wrapperCol={{span: 20}}
                        label="频道: "
                    >
                        {getFieldDecorator('channelId', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.channelId || '87'}` : '87',
                            rules: [{required: true, message: '请选择频道！'}]
                        })(
                            <RadioGroup
                                options={this.props.channelList.filter(item => !item.disabled)}
                                onChange={this.channelIdChange}
                                setFieldsValue={this.state.channelId}>
                            </RadioGroup>
                        )}
                    </FormItem>}
                    <div style={{display: 'none'}}>
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
                                                return <Col span={2} key={i}><Checkbox value={`${item.value}`}>{item.label}</Checkbox></Col>
                                            })
                                        }
                                    </Row>
                                </CheckboxGroup>
                            )}
                        </FormItem>}
                    </div>
                    <Row style={{maxWidth: 1200}}>
                        <Col span={6}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 15}}
                                label="发布日期: "
                            >
                                {getFieldDecorator('publishTime', {
                                    rules: [{required: true, message: '请选择新闻发布时间！'}],
                                    initialValue: (updateOrNot && newsInfo && newsInfo.status !== 0) ? moment(formatDate(newsInfo.publishTime || Date.parse(new Date())), 'YYYY-MM-DD HH:mm:ss') : moment()
                                })(
                                    <DatePicker disabled={this.state.dateDisabled} showTime format="YYYY-MM-DD HH:mm:ss"/>
                                )}
                                <RadioGroup onChange={this.dateChange} defaultValue={this.state.dateDisabled ? 0 : 1}>
                                    <Radio value={0}>实时</Radio>
                                    <Radio value={1}>修改</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span={5}>
                            <FormItem
                                className="labelWidth60"
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
                        <Col span={6}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 15}}
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
                                                    postContent: this.state.editor.root.innerHtml
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
                        style={{maxWidth: 1200}}
                        label="辅助信息"
                    >
                        {getFieldDecorator('subTitle', {
                            initialValue: (updateOrNot && newsInfo) ? `${newsInfo.subTitle}` : '',
                            rule: [{max: 1024, required: false, message: '选填'}]
                        })(
                            <TextArea style={{whiteSpace: 'pre-line', display: 'none'}} className="news-summary" placeholder="可填写原文作者、原文标题、编译人员等信息" />
                        )}
                        <Simditor
                            onValueChange={value => { this.onDetailValueChange(value) }}
                            // toolBar={['link']}
                            // info={{postContent: updateOrNot ? `${newsInfo.subTitle}` : subTitle}}
                            info={updateOrNot && newsInfo ? newsInfo.subTitle : ''}
                            // setSimditor={(editor) => { this.setState({editor}) }}
                            // subSend={(data) => this.sendContent(data)}
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
                            setSimditor={(editor) => { this.setState({editor}) }}
                            subSend={(data) => this.sendPost(data)}
                        /> */}
                        <div className="media-quill-editor">
                            <MediaQuillEditor
                                paste={this.editorPaste}
                                setEditor={(editor) => { this.setState({editor}) }}
                                subSend={(data) => this.sendPost(data)}
                            />
                        </div>
                    </FormItem>
                    <FormItem
                        labelCol={{span: 1}}
                        wrapperCol={{span: 20}}
                        style={{maxWidth: 1200}}
                        label="摘要: "
                        // required={true}
                        // extra="请输入新闻内容摘要"
                    >
                        {/* {getFieldDecorator('synopsis', {
                            initialValue: (updateOrNot && newsInfo) ? abstractinfo : '',
                            rules: [{required: true, message: '请输入新闻内容摘要'}]
                            // setFieldsValue: handleWhitter
                        })(
                            <TextArea rows={4} setFieldsValue={abstractinfo} placeholder="新闻摘要" className="news-summary" onChange={(e) => { this.handleWhitter(e) }}/>
                        )} */}
                        <TextArea rows={4} value={abstractinfo} onChange={(e) => { this.handleWhitter(e) }} className="news-summary" placeholder="新闻摘要, 最多120字"/>
                        <Button size="small" loading={this.state.ailoading} type="primary" onClick={this.handleAigetdesc}>
                            {(abstractinfo && abstractinfo.indexOf('【GPT】') > -1) ? 'AI重新生成' : 'AI生成摘要'}
                        </Button>
                        {/* <div>{abstractinfo}</div> */}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        style={{display: 'none'}}
                        label="标签: "
                    >
                        {getFieldDecorator('tags', {
                            initialValue: this.state.tags.join(','),
                            rules: [{required: false, message: '至少输入一个标签！'}]
                        })(
                            <Input className="tag-item" style={{display: 'none'}}/>
                        )}
                        <div>
                            {tags.map((tag, index) => {
                                const isLongTag = tag.length > 20
                                const tagElem = (
                                    <Tag
                                        color="blue" key={tag} closable={index !== -1}
                                        afterClose={() => this.handleClose(tag)}>
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
                                    style={{width: 120}}
                                    value={inputValue}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleInputConfirm}
                                    onPressEnter={this.handleInputConfirm}
                                />
                            )}
                            {!inputVisible && tags.length < 20 && (
                                <Tag
                                    onClick={this.showInput}
                                    style={{background: '#fff', borderStyle: 'dashed'}}
                                >
                                    <Icon type="plus"/> New Tag
                                </Tag>
                            )}
                            <span>每个标签最多<font style={{color: 'red'}}> 20 </font>个字</span>
                        </div>
                    </FormItem>

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
                                // console.log(selectedTags)
                                // console.log(tagsValue)
                                return <CheckableTag
                                    style={{border: '1px dashed #108ee9'}}
                                    key={tagsValue}
                                    checked={selectedTags.indexOf(tagsValue) > -1}
                                    onChange={checked => this.handleTagsSelect(tagsValue, checked)}
                                >{tag.name}</CheckableTag>
                            }) : '未匹配到合适的关键词，请手动添加'}
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

                    <Row style={{width: 900}}>
                        <Col span={6}>
                            <FormItem
                                labelCol={{span: 1}}
                                wrapperCol={{span: 14}}
                                label="图片自动剪裁: ">
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

                        <Col span={4}>
                            {this.FormItem({
                                imgName: 'pc',
                                label: 'PC-缩略图',
                                imgUrl: 'Img',
                                newsInfo: newsInfo,
                                fileList: fileList,
                                changeEvent: this.handleChange,
                                size: '220px * 160px',
                                noBtn: true,
                                require: true
                            })}
                        </Col>
                        {/* <Col span={4}>
                            {this.FormItem({
                                imgName: 'pc_recommend',
                                label: 'PC-推荐位',
                                imgUrl: 'pcImg',
                                newsInfo: newsInfo,
                                fileList: pcfileList,
                                changeEvent: this.handlePcChange,
                                size: '532px * 335px',
                                noBtn: true,
                                require: false
                            })}
                        </Col> */}
                        <Col span={4}>
                            {this.FormItem({
                                imgName: 'wap_small',
                                label: 'M-缩略图',
                                imgUrl: 'mImg',
                                newsInfo: newsInfo,
                                fileList: mfileList,
                                changeEvent: this.handleMobileChange,
                                size: '164px * 109px',
                                noBtn: true,
                                require: true
                            })}
                        </Col>
                        {/* <Col span={4}>
                            {this.FormItem({
                                imgName: 'wap_big',
                                label: 'M-轮播图',
                                imgUrl: 'mcImg',
                                newsInfo: newsInfo,
                                fileList: mcfileList,
                                changeEvent: this.handleMobileCommentChange,
                                size: '640px * 320px',
                                noBtn: true,
                                require: false
                            })}
                        </Col> */}
                    </Row>
                    <Row style={{maxWidth: 1000}}>
                        <Col span={9} style={{ display: 'none' }}>
                            <FormItem
                                {...formItemLayout}
                                label="添加视频">
                                {getFieldDecorator('video')(
                                    <Upload
                                        {...props}
                                        name='uploadFile'
                                    >
                                        <Button>
                                            <Icon type="upload"/> 选择视频
                                        </Button>
                                    </Upload>
                                )}
                                {(() => {
                                    if (videofileList.length === 0) {
                                        return ''
                                    } else if (videofileList[0].fileName) {
                                        return <p>
                                            <span>{videofileList[0].fileName}</span>
                                            <span
                                                onClick={this.delPost}
                                                style={{marginLeft: 15, color: '#52b8fc', cursor: 'pointer'}}>删除</span>
                                        </p>
                                    }
                                })()}
                                <Button
                                    style={{
                                        position: 'absolute',
                                        left: 120,
                                        top: 0
                                    }}
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
                        </Col>
                        <Col span={12}>
                            <FormItem
                                {...formItemLayout}
                                label="添加音频">
                                {getFieldDecorator('audio', {
                                    valuePropName: 'mp3fileList',
                                    getValueFromEvent: this.normFile
                                })(
                                    <Upload
                                        headers={{'Sign-Param': getSig()}}
                                        defaultFileList={this.state.mp3fileList}
                                        action={`${URL}/audio/upload`}
                                        name='uploadFile'
                                        filelist={mp3fileList}
                                        onChange={this.handleMp3}>
                                        <Button>
                                            <Icon type="upload"/> 点击上传音频
                                        </Button>
                                    </Upload>
                                )}
                                <ul>{this.state.audioDefalutArr.map(function (item, index) {
                                    return <li key={index}>
                                        {item.fileName}
                                        <span style={{marginLeft: '10px', cursor: 'pointer'}} onClick={() => {
                                            This.delAudio(item.uid)
                                        }}>删除</span>
                                        {/* <audio src={item.fileUrl}/> */}
                                    </li>
                                })}</ul>
                            </FormItem>
                        </Col>
                    </Row>

                    {(videofileList[0] && videofileList[0].fileUrl) ? <Row className="post-cover" style={{marginLeft: 80}}>
                        <Col span={4}>
                            {this.FormItem({
                                imgName: 'video_pc',
                                label: '视频PC封面',
                                imgUrl: '',
                                newsInfo: newsInfo,
                                fileList: videoPcfileList,
                                changeEvent: this.handleVideoPcChange,
                                size: ' 280px * 205px',
                                noBtn: true,
                                require: true
                            })}
                        </Col>
                        <Col span={4}>
                            {this.FormItem({
                                imgName: 'video_m',
                                label: '视频 M 端封面',
                                imgUrl: '',
                                newsInfo: newsInfo,
                                fileList: videoMfileList,
                                changeEvent: this.handleVideoMChange,
                                size: ' 280px * 205px',
                                noBtn: true,
                                require: true
                            })}
                        </Col>
                    </Row> : ''}

                    <FormItem
                        style={{display: 'none'}}
                        {...formItemLayout}
                        label="是否专题: ">
                        {getFieldDecorator('subject', {
                            initialValue: (updateOrNot) ? parseInt(this.state.subject) === 1 : false,
                            valuePropName: 'checked'
                        })(
                            <Switch
                                onChange={(checked) => {
                                    this.setState({subject: checked ? 1 : 0})
                                }}
                                checkedChildren="是"
                                unCheckedChildren="否"/>
                        )}
                    </FormItem>

                    {parseInt(this.state.subject) !== 1 ? '' : <div>
                        {this.FormItem({
                            imgName: 'pc_subject',
                            label: '专题 pc 端',
                            imgUrl: '',
                            newsInfo: newsInfo,
                            fileList: pcSubjectfileList,
                            changeEvent: this.handlePcSubjectChange,
                            size: '580 * 285',
                            noBtn: true,
                            require: true
                        })}
                        {this.FormItem({
                            imgName: 'pc_hot_subject',
                            label: '专题 pc 推荐',
                            imgUrl: '',
                            newsInfo: newsInfo,
                            fileList: pcHotSubjectfileList,
                            changeEvent: this.handlePcHotSubjectChange,
                            size: '580 * 400',
                            noBtn: true,
                            require: true
                        })}
                        {this.FormItem({
                            imgName: 'm_subject',
                            label: '专题 M 端',
                            imgUrl: '',
                            newsInfo: newsInfo,
                            fileList: mSubjectfileList,
                            changeEvent: this.handleMSubjectChange,
                            size: '500 * 280',
                            noBtn: true,
                            require: true
                        })}
                        {this.FormItem({
                            imgName: 'm_hot_subject',
                            label: '专题 M 推荐',
                            imgUrl: '',
                            newsInfo: newsInfo,
                            fileList: mHotSubjectfileList,
                            changeEvent: this.handleMHotSubjectChange,
                            size: '500 * 280',
                            noBtn: true,
                            require: true
                        })}
                    </div>}

                    <FormItem
                        style={{maxWidth: 1000}}
                        wrapperCol={{span: 12, offset: 2}}
                    >
                        <Button
                            type="primary" className="preview" onClick={this.isRepetition}
                            style={{marginRight: '10px', marginBottom: 10}}>检测重复</Button>
                        <Button
                            type="primary" data-status='1' onClick={this.handleSubmit}
                            style={{marginRight: '10px'}}>发表</Button>
                        <Button
                            type="primary" data-status='3' onClick={this.handleSubmit}
                            style={{marginRight: '10px'}}>定时发表</Button>
                        <Button
                            type="primary" data-status='0' onClick={this.handleSubmit}
                            style={{marginRight: '10px'}}>存为草稿</Button>
                        <Button
                            type="primary" className="cancel"
                            onClick={() => {
                                hashHistory.goBack()
                            }}>取消</Button>
                    </FormItem>

                    {/* 图片剪裁 */}
                    <Modal
                        confirmLoading={this.state.confirmLoading}
                        height="700px"
                        width="1400px"
                        style={{top: '50px'}}
                        visible={uploadAllImgModal}
                        onOk={this.sureCropImg}
                        maskClosable={false}
                        onCancel={this.uploadAllImgCancel}>
                        <div className="croper-wrap post clearfix">
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
                    <Modal
                        title="提示"
                        visible={this.state.isRepetition}
                        onOk={this.isRepetitionOk}
                        onCancel={this.isRepetitionCancel}
                    >
                        <p style={{ lineHeight: '40px', fontSize: '14px' }}>{this.state.isRepetitionEdit} <a
                            href={this.state.similarityUrl} style={{ display: this.state.similarityUrl === '' ? 'none' : 'inlineBlock' }} target="_blank">查看相似文章</a></p>
                    </Modal>

                    {/* 图片预览 */}
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{width: '100%'}} src={previewImage}/>
                    </Modal>
                </Form>
                {!update && <Button onClick={() => {
                    this.saveArticle()
                    message.success('本地保存成功!')
                }} title="存一下" className="fix-button" type="primary" shape="circle" icon="download" size='large' />}
                {/*
                <Button onClick={() => {
                    this.reset()
                }} title="清空" className="clear-button" type="primary" shape="circle" icon="delete" size='large' />
                */}
            </Spin>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.postAccountInfo.list,
        userInfo: state.postInfo.userInfo,
        newsInfo: state.postInfo.info,
        channelList: state.channelListInfo,
        classifyList: state.postTacticsInfo.list
    }
}

export default connect(mapStateToProps)(Form.create()(PostSend))
