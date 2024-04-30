/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
// import html2canvas from 'html2canvas'
import PostEditor from '../../../components/postEditor'
import Cropper from '../../../../node_modules/cropperjs/dist/cropper.esm.js'
import '../../../../node_modules/cropperjs/dist/cropper.css'

import {
    Radio,
    Form,
    Input,
    Upload,
    Icon,
    Modal,
    Button,
    // Tag,
    // Tooltip,
    message,
    Row,
    Col,
    Spin,
    // DatePicker,
    Select,
    // Progress,
    Switch
} from 'antd'
// import moment from 'moment'
import Cookies from 'js-cookie'
import {getCourseItemInfo} from '../../../actions/college/course.action'
import {getLecturerList} from '../../../actions/college/lecturer.action'
import {axiosAjax, URL, getSig, dataURLtoBlob} from '../../../public/index'
import './index.scss'
// import CropperImg from '../../components/CropperImg'

const FormItem = Form.Item
const {TextArea} = Input
const RadioGroup = Radio.Group
const {Option} = Select
// const {RangePicker} = DatePicker

const resTypeOptions = [
    {label: '音频', value: '1'},
    {label: '视频', value: '2'}
]

class CourseSend extends Component {
    constructor (props) {
        super(props)
        this.state = {
            editor: '',
            updateOrNot: false,
            tags: [],
            inputVisible: false,
            inputValue: '',
            isLogin: false,
            place: '北京',
            newsVisible: false,
            resType: '2',
            previewVisible: false,
            previewImage: '',
            newsTitle: '',
            introduction: '',
            uploading: false,
            progressNum: 0,
            loading: true,
            mark: 0,
            advertised: 0,
            uploadAllImgModal: false,
            cropper: null,
            focusImg: -1,
            ratio: 2,
            cropImgRule: [
                {
                    coverName: 'pcImg',
                    coverList: 'pcfileList',
                    width: '800px',
                    height: '200px',
                    ratio: 800 / 200,
                    intro: 'PC端推荐位新闻封面:1200 * 300'
                }, {
                    coverName: 'Img',
                    coverList: 'fileList',
                    width: '256px',
                    height: '186px',
                    ratio: 385 / 280,
                    intro: 'PC 端新闻封面:385 * 280'
                }
            ],
            width: 0,
            height: 0,
            wordBreak: 0,
            alignLeft: 0,
            iconLoading: false,
            interval: 0
        }
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true })
    }

    componentWillMount () {
        Cookies.set('watermark', 0)
        this.insertState(['all', '', 'pc'])
    }

    // 上传图片时插入state
    insertState = (arr) => {
        arr.map((item) => {
            this.state[item + 'fileList'] = []
            this.state[item + 'Img'] = ''
        })
    }

    componentDidMount () {
        const {dispatch, location} = this.props
        dispatch(getLecturerList('init', {pageSize: 1000, currentPage: 1}))
        if (location.query.id) {
            this.setState({
                loading: true
            })
            dispatch(getCourseItemInfo({'resourceId': location.query.id}, (res) => { this.renderData(res) }))
        } else {
            this.setState({
                loading: false
            })
            /*
            if (!localStorage.getItem('courseData')) {
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
            // this.setState({interval: setInterval(() => {
            //     this.saveArticle()
            //     console.log('已存储！')
            // }, 5 * 1000)})
             */
        }
    }

    componentWillUnmount () {
        const {interval} = this.state
        this.setState({interval: clearInterval(interval)})
    }

    // 本地存储
    saveArticle = (fn) => {
        const {form} = this.props
        let courseData = {
            tags: this.state.tags.join(','),
            original: this.state.original,
            introduction: this.state.introduction,
            // publishTime: Date.parse(form.getFieldValue('publishTime').format('YYYY-MM-DD HH:mm:ss')) || Date.parse(new Date()),
            author: form.getFieldValue('author'),
            hotCounts: form.getFieldValue('hotCounts'),
            synopsis: form.getFieldValue('synopsis'),
            title: form.getFieldValue('title'),
            source: form.getFieldValue('source'),
            advertised: form.getFieldValue('advertised'),
            subTitle: form.getFieldValue('subTitle'),
            originalUrl: form.getFieldValue('originalUrl'),
            originalTitle: form.getFieldValue('originalTitle'),
            resType: this.state.resType,
            place: this.state.place,
            picHead: this.state.pcImg,
            picCover: this.state.Img
        }
        localStorage.setItem('courseData', JSON.stringify(courseData))
        if (fn) {
            fn(courseData)
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

    // picHead: this.state.pcImg,
    // picCover: this.state.Img,
    renderData = (data) => {
        let filterContent = data.introduction.replace(/<style(.+)<\/style>/, '')
        this.state.editor.setValue(filterContent)
        let fileList = this.fileList(data.picCover)
        let pcfileList = this.fileList(data.picHead)

        this.setState({
            updateOrNot: true,
            fileList: fileList,
            pcfileList: pcfileList,
            // tags: !data.tags ? [] : data.tags.split(','),
            introduction: filterContent,
            Img: data.picCover,
            allImg: data.all,
            pcImg: data.picHead,
            loading: false,
            mark: data.mark || 0,
            resType: data.resType
        })
    }

    // 频道改变
    placeChange = (e) => {
        this.setState({
            place: e.target.value
        })
    }

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

    // 标签设置
    /*
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
            tags = [...tags, inputValue.slice(0, 8)]
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

    // 上传图片取消预览
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
                if (width <= 1300 && height <= 1300) {
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

    // pc 封面图上传
    handleChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                Img: ''
            })
        } else {
            let sizeSuit = await this.beforeUpload(file.originFileObj)
            if (!sizeSuit) {
                message.warning('单张图片上传尺寸不能大于 1300 * 1300, 请重新选择图片或使用统一上传!')
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

    // pc 详情顶部展示图上传
    handlePcChange = async ({file, fileList}) => {
        if (file.status === 'removed') {
            this.setState({
                pcImg: ''
            })
        } else {
            let sizeSuit = await this.beforeUpload(file.originFileObj)
            if (!sizeSuit) {
                message.warning('单张图片上传尺寸不能大于 1300 * 1300, 请重新选择图片或使用统一上传!')
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

    newsVisibleHide = () => {
        this.setState({newsVisible: false})
    }

    newsVisibleShow = () => {
        this.setState({newsVisible: true})
    }

    // 统一上传
    uploadAllImg = ({file, fileList}) => {
        const This = this
        if (file.size / (1024 * 1024) >= 2) {
            message.error('图片大小超过 2M , 请重新选择!')
            this.setState({
                allfilelist: [],
                allImg: ''
            })
            return false
        }
        this.setState({
            allfileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                allfilelist: [],
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
                                const imageData = cropper.getCroppedCanvas({
                                    maxWidth: 800
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
            uploadAllImgModal: false,
            loading: true
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
                    timeout: 20000,
                    contentType: false,
                    success: function (data) {
                        count += 1
                        if (count === 2) {
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
                    error: function (XMLHttpRequest, status) {
                        This.setState({
                            loading: false
                        })
                        if (status === 'timeout') {
                            message.error('上传超时, 请检查网络后重新上传！')
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

    selectTime = (value) => {
        // console.log(Date.parse(value[0].format('YYYY-MM-DD HH:mm:ss')))
        // console.log(Date.parse(value[1].format('YYYY-MM-DD HH:mm:ss')))
    }

    // 提交
    handleSubmit = (e) => {
        e.preventDefault()
        this.enterIconLoading()
        let status = e.target.getAttribute('data-status')
        let update = this.state.updateOrNot && (this.props.location.query.id || this.props.location.query.url)
        // !update && this.saveArticle()
        if ($('.simditor').find('img.uploading').length > 0) {
            message.warning('编辑器中图片正在上传, 请稍候提交!')
            this.setState({
                iconLoading: false
            })
            return false
        }

        if (this.state.uploading) {
            message.warning('视频正在上传, 请稍候提交!')
            this.setState({
                iconLoading: false
            })
            return false
        }
        /*
        let pt = Date.parse(this.props.form.getFieldValue('publishTime').format('YYYY-MM-DD HH:mm:ss'))
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
        */
        this.setState({
            audioDefalutArr: []
        }, function () {
            this.props.form.setFieldsValue({
                // tags: this.state.tags.join(','),
                mark: this.state.mark === 1,
                // advertised: this.state.advertised,
                introduction: this.state.introduction,
                picHead: this.state.pcImg,
                picCover: this.state.Img
            })
            this.props.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    this.setState({
                        loading: true
                    })
                    // values.startTime = Date.parse(values['publishTime'][0].format('YYYY-MM-DD HH:mm:ss'))
                    // values.endTime = Date.parse(values['publishTime'][1].format('YYYY-MM-DD HH:mm:ss'))
                    // delete values.publishTime
                    delete values.alignLeft
                    delete values.wordBreak
                    delete values.watermark

                    values.status = status || 1
                    values.type = 1
                    values.chapterNums = 0
                    values.duration = 0
                    values.mark = !values.mark ? 0 : 1
                    this.state.updateOrNot ? values.resourceId = this.props.location.query.id || '' : delete values.resourceId
                    axiosAjax('post', `${(this.state.updateOrNot && this.props.location.query.id) ? '/college/lesson/update' : '/college/lesson/add'}`, values, (res) => {
                        this.setState({
                            loading: false
                        })
                        if (res.code && res.code === 1) {
                            message.success(update ? '修改成功！' : '添加成功！')
                            !update && localStorage.removeItem('courseData')
                            hashHistory.push('/college-courseList')
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

    // 发布
    sendPost = (sendData) => {
        const {wordBreak, alignLeft} = this.state
        let style = `<style type="text/css"> .details .details-cont p, p {word-break: ${wordBreak ? 'break-all !important' : 'normal'}; text-align: ${alignLeft ? 'left !important' : 'unset'}} p img {text-align: center !important;} </style>`
        let _data = {
            'newsTitle': sendData.postTitle || '',
            'newsContent': `<div class=${alignLeft ? 'simditorSupport' : ''}>${style}${sendData.postContent}</div>` || ''
        }
        this.setState({...this.state, ...{introduction: _data.newsContent}})
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
                <div className="ant-upload-text">上传图片</div>
            </div>
        )

        return <FormItem
            {...formItemLayout}
            label={opt.label}>
            <div className="dropbox">
                {getFieldDecorator(opt.imgName, {
                    initialValue: (updateOrNot && opt.courseInfo) ? opt.fileList : '',
                    rules: [{required: opt.require, message: `请上传${opt.label}封面！`}]
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
                    type="primary">预览</Button>}
                <span className="cover-img-tip">用于 {opt.label} 的封面展示, 建议尺寸: <font style={{color: 'red'}}>{opt.size}</font></span>
            </div>
        </FormItem>
    }

    render () {
        // const update = this.state.updateOrNot && (this.props.location.query.id || this.props.location.query.url)
        const This = this
        const {getFieldDecorator} = this.props.form
        const {courseInfo} = this.props
        const {focusImg, allfileList, uploadAllImgModal, previewVisible, previewImage, fileList, pcfileList, introduction, updateOrNot, newsVisible} = this.state
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 20, offset: 1}
        }
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )

        return <div className="course-send">
            {/*
             <CropperImg style={{display: 'none'}} height={200} width={400} previewImg={this.state.mcImg} cropped={this.CropperImgCroped}/>
             */}
            <Spin spinning={this.state.loading} size='large'>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="课程类型: ">
                        {getFieldDecorator('resType', {
                            initialValue: (updateOrNot && courseInfo) ? `${courseInfo.resType || '1'}` : '1'
                        })(
                            <RadioGroup
                                options={resTypeOptions}
                                onChange={this.resTypeChange}
                                setFieldsValue={this.state.resType}>
                            </RadioGroup>
                        )}
                    </FormItem>

                    {this.props.lecturerList.length !== 0 && <FormItem {...formItemLayout} label="讲师: ">
                        {getFieldDecorator('lecturerId', {
                            initialValue: (updateOrNot && courseInfo) ? `${courseInfo.lecturerId || ''}` : '',
                            rules: [{required: true, message: '请选择课程讲师！'}]
                        })(
                            <Select
                                style={{ width: 240 }}
                                showSearch
                                showArrow={true}
                                optionFilterProp='children'
                            >
                                <Option value="">请选择讲师</Option>
                                {this.props.lecturerList.map(d => <Option value={`${d.lecturerId}`} key={d.lecturerId}>{d.name}</Option>)}
                            </Select>
                        )}
                    </FormItem>}

                    <FormItem
                        {...formItemLayout}
                        label="价格: "
                    >
                        {getFieldDecorator('money', {
                            initialValue: (updateOrNot && courseInfo) ? (courseInfo.money || '') : '',
                            rules: [{
                                required: true, message: '请输入课程价格！'
                            }, {
                                pattern: /^\d+(\.\d+)?$/, message: '请输入正确的数字'
                            }]
                        })(
                            <Input className="news-source" placeholder="请输入课程价格(单位:元)"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="标题: "
                    >
                        {getFieldDecorator('title', {
                            initialValue: (updateOrNot && courseInfo) ? (courseInfo.title || '') : '',
                            rules: [
                                {required: true, message: '请输入课程标题！'},
                                {pattern: /^[^\s]+$/, message: '请勿输入空格！'}
                            ]
                        })(
                            <Input className="news-source" placeholder="请输入课程标题"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="课程简介: "
                    >
                        {getFieldDecorator('brief', {
                            initialValue: (updateOrNot && courseInfo) ? (courseInfo.brief || '') : '',
                            rules: [{max: 300, required: true, message: '请输入课程特色, 最多300字！'}]
                        })(
                            <TextArea rows={4} className="news-summary" placeholder="课程特色(简介), 最多300字"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="精品课程: "
                    >
                        {getFieldDecorator('mark', {
                            initialValue: (updateOrNot && courseInfo.mark) ? parseInt(courseInfo.mark) === 1 : false,
                            valuePropName: 'checked'
                        })(
                            <Switch
                                onChange={(checked) => {
                                    this.setState({mark: checked ? 1 : 0})
                                }}
                                checkedChildren="是"
                                unCheckedChildren="否"
                            />
                        )}
                    </FormItem>
                    {/*
                    <FormItem
                        {...formItemLayout}
                        label="课程时间: "
                    >
                        {getFieldDecorator('publishTime', {
                            rules: [{required: true, message: '请选择课程时间！'}],
                            initialValue: (updateOrNot && courseInfo) ? [moment(formatDate(courseInfo.startTime || Date.parse(new Date())), 'YYYY-MM-DD HH:mm:ss'), moment(formatDate(courseInfo.endTime || Date.parse(new Date())), 'YYYY-MM-DD HH:mm:ss')] : []
                        })(
                            <RangePicker placeholder={['开始时间', '结束时间']} showTime onOk={this.selectTime} format="YYYY-MM-DD HH:mm:ss"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
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
                                            postContent: this.state.editor.getValue()
                                        })
                                    })
                                }}
                                checkedChildren="是"
                                unCheckedChildren="否"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
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
                                            postContent: this.state.editor.getValue()
                                        })
                                    })
                                }}
                                checkedChildren="是"
                                unCheckedChildren="否"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="图片加水印: ">
                        {getFieldDecorator('watermark', {
                            initialValue: false,
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
                     <FormItem
                     {...formItemLayout}
                     label="标签: "
                     >
                     {getFieldDecorator('tags', {
                     initialValue: this.state.tags.join(','),
                     rules: [{required: true, message: '至少输入一个标签！'}]
                     })(
                     <Input className="tag-item" style={{display: 'none'}}/>
                     )}
                     <div>
                     {tags.map((tag, index) => {
                     const isLongTag = tag.length > 8
                     const tagElem = (
                     <Tag
                     color="blue" key={tag} closable={index !== -1}
                     afterClose={() => this.handleClose(tag)}>
                     {isLongTag ? `${tag.slice(0, 8)}` : tag}
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
                     {!inputVisible && tags.length < 3 && (
                     <Tag
                     onClick={this.showInput}
                     style={{background: '#fff', borderStyle: 'dashed'}}
                     >
                     <Icon type="plus"/> New Tag
                     </Tag>
                     )}
                     <span>建议每篇新闻最多 <font style={{color: 'red'}}>3</font> 个标签, 每个标签最多<font
                     style={{color: 'red'}}> 8 </font>个字</span>
                     </div>
                     </FormItem>
                    */}
                    <FormItem
                        {...formItemLayout}
                        label="课程内容: "
                    >
                        {getFieldDecorator('introduction', {
                            initialValue: (updateOrNot && courseInfo) ? introduction : '',
                            rules: [{required: true, message: '请输入课程内容！'}]
                        })(
                            <Input className="news" style={{display: 'none'}}/>
                        )}
                        <PostEditor
                            setSimditor={(editor) => { this.setState({editor}) }}
                            subSend={(data) => this.sendPost(data)}/>
                    </FormItem>

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
                            <span className="cover-img-tip all-img">统一上传所有尺寸图片，自动剪裁适配尺寸</span>
                        </div>
                    </FormItem>

                    {this.FormItem({
                        imgName: 'picCover',
                        label: '封面图',
                        imgUrl: 'Img',
                        courseInfo: courseInfo,
                        fileList: fileList,
                        changeEvent: this.handleChange,
                        size: '385 * 280',
                        noBtn: false,
                        require: true
                    })}

                    {this.FormItem({
                        imgName: 'picHead',
                        label: '详情页图片',
                        imgUrl: 'pcImg',
                        courseInfo: courseInfo,
                        fileList: pcfileList,
                        changeEvent: this.handlePcChange,
                        size: '1200 * 300',
                        noBtn: false,
                        require: false
                    })}

                    <FormItem
                        wrapperCol={{span: 12, offset: 2}}
                    >
                        <Button
                            type="primary" onClick={this.newsVisibleShow} className="preview"
                            style={{marginRight: '10px', marginBottom: 10}}>课程内容预览</Button>
                        <Button
                            loading={this.state.iconLoading}
                            type="primary" data-status='1' onClick={this.handleSubmit}
                            style={{marginRight: '10px'}}>发布</Button>
                        {/*
                        <Button
                            type="primary" data-status='3' onClick={this.handleSubmit}
                            style={{marginRight: '10px'}}>定时发表</Button>
                        */}
                        <Button
                            type="primary" data-status='0' onClick={this.handleSubmit}
                            style={{marginRight: '10px'}}>待发布</Button>
                        <Button
                            type="primary" className="cancel"
                            onClick={() => {
                                hashHistory.goBack()
                            }}>取消</Button>
                    </FormItem>

                    {/* 图片剪裁 */}
                    <Modal
                        height="700px"
                        width="1400px"
                        style={{top: '50px'}}
                        visible={uploadAllImgModal}
                        onOk={this.sureCropImg}
                        maskClosable={false}
                        onCancel={this.uploadAllImgCancel}>
                        <div className="croper-wrap activityPub clearfix">
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
                                    dangerouslySetInnerHTML={this.createMarkup(introduction)}/>
                            </Col>
                        </Row>
                    </Modal>

                    {/* 图片预览 */}
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{width: '100%'}} src={previewImage}/>
                    </Modal>
                </Form>
                {/*
                {!update && <Button onClick={() => {
                    this.saveArticle()
                    message.success('本地保存成功!')
                }} title="存一下" className="fix-button" type="primary" shape="circle" icon="download" size='large' />}
                */}
            </Spin>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.courseInfo.userInfo,
        courseInfo: state.courseInfo.info,
        lecturerList: state.lecturerInfo.list
    }
}

export default connect(mapStateToProps)(Form.create()(CourseSend))
