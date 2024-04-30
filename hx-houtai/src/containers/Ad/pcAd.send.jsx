import React, {Component} from 'react'
import {connect} from 'react-redux'
import { hashHistory } from 'react-router'
import { Radio, Form, Input, Upload, Icon, Modal, Button, message, Spin, Checkbox, Select, DatePicker } from 'antd'
import {getAdItemInfo, setFilterData} from '../../actions/others/ad.action'
import {getChannelList, getTypeList} from '../../actions/index'
import moment from 'moment'
import {axiosAjax, URL, pcAdPosition, getSig, dataURLtoBlob, adTypeOptions, titleTrans, formatDate} from '../../public/index'
import Cropper from '../../../node_modules/cropperjs/dist/cropper.esm.js'
import '../../../node_modules/cropperjs/dist/cropper.css'
import './index.scss'
import Cookies from 'js-cookie'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
const Option = Select.Option

const typeOptions = [
    { label: 'PC', value: '1', disabled: false },
    { label: 'Web', value: '4', disabled: false },
    { label: 'App', value: '2', disabled: false }
]

let timeout, currentValue

class PostSend extends Component {
    constructor () {
        super()
        this.state = {
            confirmLoading: false,
            updateOrNot: false, // 是否已经上传
            adPlace: '1',
            newsVisible: false,
            type: [],
            previewVisible: false,
            previewImage: '',
            newsTitle: '',
            newsContent: '',
            fileList: [],
            mImgSrcFileList: [], // 移动端用这个字段更合适,原来只鹅姐
            coverImgUrl: '',
            mImgSrc: '',
            loading: true,
            adType: 1,
            offlineType: '0',
            channelId: '',
            text: {
                label: '链接',
                message: '请输入正确的链接地址',
                placeholder: '链接地址',
                type: 'url'
            },
            specialValShow: true,
            specialVal: [],
            typeArr: ['1', '4', '2'],
            data: [],
            searchText: '',
            searching: false,
            tagsIconLoading: false,
            noCurrResult: false,
            dateDisabled: true,
            selectedTags: [],
            uploadAllImgModal: false,
            cropper: null,
            focusImg: -1,
            ratio: 640 / 320,
            cropImgRule: [
                {
                    coverName: 'pcImgSrc',
                    coverList: 'fileList',
                    width: '532px',
                    height: '335px',
                    ratio: 532 / 335,
                    intro: 'PC首页轮播: 532 * 335'
                }, {
                    coverName: 'mImgSrc',
                    coverList: 'mImgSrcFileList',
                    width: '690px',
                    height: '230px',
                    ratio: 690 / 230,
                    intro: `M首页轮播：690 * 230`
                }
            ]
        }
    }

    componentWillMount () {
        const {dispatch, location} = this.props
        dispatch(getChannelList())
        dispatch(getTypeList())
        if (location.query.id) {
            dispatch(getAdItemInfo({ 'id': location.query.id }, (data) => {
                const placeInfo = pcAdPosition.filter(item => item.value === data.adPlace.toString())
                const sizeInfo = JSON.parse(this.getImgSizeArr(data.adPlace))
                const sizeArr = sizeInfo.sizeArr
                const newArr = []
                sizeArr.map(function (item, index) {
                    if (index === 0) {
                        let obj = {
                            coverName: 'pcImgSrc',
                            coverList: 'fileList'
                        }
                        obj.width = sizeArr[index].width
                        obj.height = sizeArr[index].height
                        obj.intro = placeInfo[0].label + ':' + sizeInfo.pcImgSize
                        obj.ratio = sizeArr[index].width / sizeArr[index].height
                        newArr.push(obj)
                    } else if (index === 1) {
                        let obj = {
                            coverName: 'mImg',
                            coverList: 'mImgSrcFileList'
                        }
                        obj.width = sizeArr[index].width
                        obj.height = sizeArr[index].height
                        obj.intro = placeInfo[0].label + sizeInfo.mImgSize
                        obj.ratio = sizeArr[index].width / sizeArr[index].height
                        newArr.push(obj)
                    }
                })
                this.setState({
                    updateOrNot: true,
                    fileList: [{
                        uid: 0,
                        name: 'xxx.png',
                        status: 'done',
                        url: data.pcImgSrc
                    }],
                    mImgSrcFileList: [{
                        uid: 1,
                        name: 'xxx.png',
                        status: 'done',
                        url: data.mImgSrc
                    }],
                    coverImgUrl: data.pcImgSrc,
                    pcImgSrc: data.pcImgSrc,
                    mImgSrc: data.mImgSrc,
                    loading: false,
                    adType: data.useType.toString(),
                    adPlace: data.adPlace.toString(),
                    text: this.label(`${data.useType}`),
                    offlineType: !data.expiredTime ? '0' : '1',
                    cropImgRule: newArr
                })
            }))
        } else {
            this.setState({
                loading: false
            })
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.adInfo.url !== this.props.adInfo.url) {
            this.setState({specialActive: this.props.adInfo.url})
        }
    }

    label = (type) => {
        let label = {}
        switch (type) {
            case '1':
                label = {label: '链接', message: '请输入正确的链接地址', placeholder: '链接地址', type: 'url'}
                break
            case '3':
                label = {label: '新闻 ID', message: '请输入新闻 ID', placeholder: '新闻 ID', type: ''}
                break
            case '4':
                label = {label: '跳转频道', message: '请选择新闻频道', placeholder: '新闻 ID', type: ''}
                break
            case '5':
                label = {label: '专题ID', message: '请输入专题ID', placeholder: '示例：火星特训营/20180725170844035121', type: ''}
                break
            case '6':
                label = {label: '关键字', message: '请输入搜索的关键字/标签', placeholder: '关键字/标签', type: ''}
                break
            default:
                label = {label: '链接', message: '请输入正确的链接地址', placeholder: '链接地址', type: 'url'}
                break
        }
        return label
    }

    // 位置改变
    positionChange = (e) => {
        const { dispatch } = this.props
        dispatch(setFilterData({ adPcPlace: e.target.value }))
        this.setState({
            adPlace: e.target.value
        })
        let adPlace = e.target.value
        const placeInfo = pcAdPosition.filter(item => item.value === adPlace)
        const newArr = []
        const sizeInfo = JSON.parse(this.getImgSizeArr(adPlace))
        const sizeArr = sizeInfo.sizeArr
        sizeArr.map(function (item, index) {
            if (index === 0) {
                let obj = {
                    coverName: 'pcImgSrc',
                    coverList: 'fileList'
                }
                obj.width = sizeArr[index].width
                obj.height = sizeArr[index].height
                obj.intro = placeInfo[0].label + ':' + sizeInfo.pcImgSize
                obj.ratio = sizeArr[index].width / sizeArr[index].height
                newArr.push(obj)
            } else if (index === 1) {
                let obj = {
                    coverName: 'mImg',
                    coverList: 'mImgSrcFileList'
                }
                obj.width = sizeArr[index].width
                obj.height = sizeArr[index].height
                obj.intro = placeInfo[0].label + sizeInfo.mImgSize
                obj.ratio = sizeArr[index].width / sizeArr[index].height
                newArr.push(obj)
            }
        })
        this.setState({
            cropImgRule: newArr
        })
        let typeVal = e.target.value
        if (typeVal === '1' || typeVal === '5' || typeVal === '2' || typeVal === '3' || typeVal === '12' || typeVal === '30' || typeVal === '31') {
            this.setState({
                typeArr: ['1', '4', '2']
            })
        } else if (typeVal === '16') {
            this.setState({
                typeArr: ['1', '4']
            })
        } else {
            this.setState({
                typeArr: ['1']
            })
        }
    }

    getImgSizeArr = (adPlace) => {
        let pcImgSize = ''
        let mImgSize = ''
        let sizeArr = []
        switch (parseInt(adPlace)) {
            case 1:
                pcImgSize = '532px * 335px'
                mImgSize = '690px * 230px'
                sizeArr.push({ width: 532, height: 335 })
                sizeArr.push({width: 690, height: 230})
                break
            case 2:
                pcImgSize = '758px * 133px'
                mImgSize = '690px * 191px'
                sizeArr.push({ width: 758, height: 133 })
                sizeArr.push({width: 690, height: 191})
                break
            case 11:
                pcImgSize = '100px * 100px'
                mImgSize = ''
                sizeArr.push({width: 100, height: 100})
                break
            case 16:
                pcImgSize = '800px * 100px'
                mImgSize = '640px * 80px'
                sizeArr.push({ width: 800, height: 100 })
                sizeArr.push({width: 640, height: 80})
                break
            case 10:
                pcImgSize = '150px * 150px'
                sizeArr.push({width: 150, height: 150})
                break
            case 5:
                pcImgSize = '1200px * 100px'
                mImgSize = '690px * 155px'
                sizeArr.push({ width: 1200, height: 100 })
                sizeArr.push({width: 690, height: 155})
                break
            case 7:
                pcImgSize = '360px * 220px'
                mImgSize = ''
                sizeArr.push({width: 360, height: 220})
                break
            case 20:
                pcImgSize = '360px * 200px'
                mImgSize = ''
                sizeArr.push({width: 360, height: 200})
                break
            case 9:
                pcImgSize = '318px * 175px'
                mImgSize = ''
                sizeArr.push({width: 318, height: 175})
                break
            case 3:
                pcImgSize = '800px * 140px'
                mImgSize = '690px * 191px'
                sizeArr.push({ width: 800, height: 140 })
                sizeArr.push({width: 690, height: 191})
                break
            case 12:
                pcImgSize = ''
                mImgSize = ''
                sizeArr.push({width: '', height: ''})
                break
            case 17:
                pcImgSize = '250px * 160px'
                mImgSize = ''
                sizeArr.push({width: 250, height: 160})
                break
            case 30:
                pcImgSize = '884px * 80px'
                mImgSize = '690px * 230px'
                sizeArr.push({ width: 884, height: 80 })
                sizeArr.push({width: 690, height: 230})
                break
            case 31:
                pcImgSize = '884px * 300px'
                mImgSize = '690px * 230px'
                sizeArr.push({ width: 884, height: 300 })
                sizeArr.push({width: 690, height: 230})
                break
            case 32:
                pcImgSize = '1200px * 80px'
                sizeArr.push({width: 1200, height: 80})
                break
        }
        return JSON.stringify({pcImgSize: pcImgSize, mImgSize: mImgSize, sizeArr: sizeArr})
    }
    typeChange = (values) => {
        const {form} = this.props
        form.setFieldsValue({
            type: values
        })
        this.setState({
            type: values
        })
    }
    adType = (e) => {
        this.setState({
            adType: e.target.value,
            text: this.label(e.target.value)
        })
    }
    offlineType = (e) => {
        this.setState({
            offlineType: e.target.value
        })
    }
    specialIdChange = (event) => {
        let This = this
        this.setState({specialActive: event.target.value})
        axiosAjax('post', '/topic/getTagsByTopicId', {
            id: event.target.value
        }, (res) => {
            if (res.code === 1) {
                let data = res.obj
                This.setState({specialValShow: true})
                This.setState({specialVal: !data ? [] : data})
            } else {
                This.setState({specialValShow: false})
            }
        })
    }

    specialValClick = (event) => {
        let val = event.target.getAttribute('data-val')
        this.setState({specialActive: `${val}/${this.state.specialActive}`})
        this.setState({specialValShow: false})
    }

    channelIdChange = (value) => {
        this.setState({
            url: value
        })
    }
    changeOffLineType = () => {
        if (this.state.offlineType === '0') {
            this.setState({offlineType: '1'})
        }
    }
    // 上传图片
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }
    // PC端删除
    handleChange = async ({ file, fileList }) => {
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
                // 修改了这两个
                this.setState({
                    // coverImgUrl: file.response.obj,
                    'pcImgSrc': file.response.obj,
                    'fileList': [{
                        uid: 0,
                        name: 'xxx.png',
                        status: 'done',
                        url: file.response.obj
                    }]
                }, function () {
                    console.log(this.state.pcImgSrc)
                    console.log(this.state.mImg)
                    console.log(this.state.mImgSrcFileList)
                })
            } if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    coverImgUrl: '',
                    fileList: []
                })
            }
        }
    }

    // m 封面
    handleMImgChange = ({file, fileList}) => {
        this.setState({
            mImgSrcFileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                mImgSrc: ''
            })
        }
        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    mImgSrc: file.response.obj
                }, function () {
                    console.log(this.state.mImg)
                    console.log(this.state.mImgSrcFileList)
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    mImgSrc: '',
                    mImgSrcFileList: []
                })
            }
        }
    }

    newsVisibleHide = () => {
        this.setState({ newsVisible: false })
    }

    newsVisibleShow = () => {
        this.setState({ newsVisible: true })
    }

    // 提交
    handleSubmit = (e) => {
        let status = e.target.getAttribute('data-status')
        e.preventDefault()
        this.props.form.setFieldsValue({
            pcImgSrc: this.state['pcImgSrc'],
            mImgSrc: this.state['mImgSrc']
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                let typeSum = 0
                for (let i = 0; i < values.type.length; i++) {
                    typeSum += parseInt(values.type[i])
                }
                if (this.state.offlineType === '0') {
                    values.expiredTime = 0
                } else {
                    let timestap = values['expiredTime'] ? Date.parse(values['expiredTime'].format('YYYY-MM-DD HH:mm:ss')) : 0
                    values.expiredTime = timestap / 1000
                }
                values.type = typeSum
                values.id = this.props.location.query.id || ''
                values.status = status || 1
                values.url = values.useType === '4' ? values.channelId : values.url || this.state.specialActive
                !this.state.updateOrNot && delete values.id
                if (parseInt(this.state.adPlace) === 3 || parseInt(this.state.adPlace) === 12) {
                    values.topOrder = 999
                }

                if (values.tagsV2) {
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
                }

                // 直播更改地址后，兼容新老app版本，临时统一用老规则，之后删除
                if (parseInt(values.adPlace) === 30 || parseInt(values.adPlace) === 31) {
                    if (values.url.indexOf('/live') > -1) {
                        values.url = values.url.replace(/live/, 'imlive/detail')
                    }
                }

                axiosAjax('post', `${this.state.updateOrNot ? '/ad/update' : '/ad/add'}`, values, (res) => {
                    if (res.code === 1) {
                        message.success(this.state.updateOrNot ? '修改成功！' : '添加成功！')
                        hashHistory.push('/ad-pc')
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 发布
    sendPost (sendData) {
        let _data = {
            'newsTitle': sendData.postTitle || '',
            'newsContent': `${sendData.postContent}` || ''
        }
        this.setState({...this.state, ..._data})
    }

    // 内容格式化
    createMarkup (str) { return {__html: str} }

    // 新版标签
    handleTagsChange = (value, option) => {
        value.map(item => {
            item.title = titleTrans(JSON.parse(item.key).type, item.label)
        })
        this.setState({value})
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

    handleSelect = (value, e) => {
        value.type = e.props.dataType
    }

    // 删除标签时候的联动
    handleDeselect = (value, e) => {
        let selectedTags = this.state.selectedTags.filter(t => JSON.parse(t).id !== JSON.parse(value.key).id)
        this.setState({selectedTags})
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

    handleBlur = () => {
        this.setState({
            searchText: ''
        })
    }

    // 裁切图片，统一上传
    uploadAllImg = ({ file, fileList }) => {
        const This = this
        // 限制图片大小
        if (file.size / (1024 * 1024) >= 2) {
            message.error('图片大小超过2M, 请重新选择')
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
                message.error('网络错误，上传失败')
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
    // 裁剪确认
    sureCropImg = () => {
        const This = this
        let count = 0
        this.setState({
            loading: true,
            uploadAllImgModal: false,
            confirmLoading: true
        })
        message.warning('上传中,请稍后')
        this.state.cropper.destroy()
        $('.crop-preview-item').each(function (d, i) {
            setTimeout(() => {
                const coverName = $(this).data('type') // 获取类型
                const coverList = $(this).data('list') // 图片链接
                This.setState({
                    [coverName]: '',
                    [coverList]: []
                })
                // 现在的问题就是移动端
                let blob = dataURLtoBlob($(this).find('img').prop('src'))
                const formData = new FormData()
                formData.append('uploadFile', blob)
                $.ajax(`${URL}/pic/upload`, {
                    headers: { 'Sign-Param': getSig() },
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
                            message.success('上传完毕')
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
                            console.log(this.state.pcImgSrc)
                            console.log(this.state.mImg)
                        })
                    },
                    error: function (XMLHttpRequest, status) {
                        This.setState({
                            confirmLoading: false,
                            loading: false
                        })
                        if (status === 'timeout') {
                            message.error('上传超时，请检查网络后重新上传')
                        } else {
                            message.error('网络故障，请尝试重新上传！')
                        }
                        XMLHttpRequest.abort()
                    }
                })
            }, d * 2000)
        })
    }
    // 取消裁剪
    uploadAllImgCancel = () => {
        this.setState({
            uploadAllImgModal: false
        })
        this.state.cropper.destroy()
    }
    FormItem = (opt) => {
        const { updateOrNot } = this.state
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 15, offset: 1}
        }
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className='ant-upload-text'>{opt.label}</div>
            </div>
        )
        return <FormItem {...formItemLayout}>
            <div className="dropbox">
                {getFieldDecorator(opt.imgName, {
                    initialValue: (updateOrNot && opt.adInfo) ? opt.fileList : '',
                    rules: [{required: opt.require, message: `请上传相应封面`}]
                })(
                    <Upload
                        headers={{ 'Sign-Param': getSig() }}
                        action={`${URL}/pic/upload`}
                        name='uploadFile'
                        listType='picture-card'
                        fileList={opt.fileList}
                        onPreview={this.handlePreview}
                        onChange={opt.changeEvent}>
                        {opt.fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                )}
                {
                    opt.noBtn ? '' : <Button
                        data-type={opt.imgUrl}
                        onClick={this.handlePreview}
                        className='img-preview'
                        type="primary"
                    >预览</Button>
                }
                <p className="cover-imag-tip">
                    <span style={{ color: '#249aef' }}>{opt.size}</span>
                </p>
            </div>
        </FormItem>
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
            mImgSrcFileList: fileList
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
                    mImgSrcFileList: []
                })
            }
        }
    }
    render () {
        const This = this
        const { getFieldDecorator } = this.props.form
        let { adInfo, channelList, flashTypeList } = this.props
        const { allfileList, fileList, previewVisible, previewImage, updateOrNot, mImgSrcFileList, text, uploadAllImgModal, focusImg } = this.state
        const formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 20, offset: 1 }
        }
        let typeArr = []
        if (adInfo.type !== '') {
            if (adInfo.type === 3) {
                typeArr = ['1', '2']
            } else if (adInfo.type === 5) {
                typeArr = ['1', '4']
            } else if (adInfo.type === 6) {
                typeArr = ['2', '4']
            } else if (adInfo.type === 7) {
                typeArr = ['1', '2', '4']
            } else if (adInfo.type === 1) {
                typeArr = ['1']
            } else if (adInfo.type === 2) {
                typeArr = ['2']
            } else if (adInfo.type === 4) {
                typeArr = ['4']
            }
        }
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传图片</div>
            </div>
        )
        let pcImgSize = ''
        let mImgSize = ''
        switch (parseInt(this.state.adPlace)) {
            case 1:
                pcImgSize = '532px * 335px'
                mImgSize = '690px * 230px'
                break
            case 2:
                pcImgSize = '758px * 133px'
                mImgSize = '690px * 191px'
                break
            case 11:
                pcImgSize = '100px * 100px'
                mImgSize = ''
                break
            case 16:
                pcImgSize = '800px * 100px'
                mImgSize = '640px * 80px'
                break
            case 10:
                pcImgSize = '150px * 150px'
                break
            case 5:
                pcImgSize = '1200px * 100px'
                mImgSize = '690px * 155px'
                break
            case 6:
                pcImgSize = '758px * 133px(单个) / 488px * 270px(两个以上)'
                mImgSize = ''
                break
            case 7:
                pcImgSize = '360px * 220px'
                mImgSize = ''
                break
            case 20:
                pcImgSize = '360px * 200px'
                mImgSize = ''
                break
            case 9:
                pcImgSize = '318px * 175px'
                mImgSize = ''
                break
            case 3:
                pcImgSize = '800px * 140px'
                mImgSize = '690px * 191px'
                break
            case 12:
                pcImgSize = ''
                mImgSize = ''
                break
            case 17:
                pcImgSize = '250px * 160px'
                mImgSize = ''
                break
            case 30:
                pcImgSize = '884px * 80px'
                mImgSize = '690px * 230px'
                break
            case 31:
                pcImgSize = '884px * 300px'
                mImgSize = '690px * 230px'
                break
            case 32:
                pcImgSize = '1200px * 80px'
                break
            default:
        }
        if (this.state.adPlace === '1' || this.state.adPlace === '5' || this.state.adPlace === '2' || this.state.adPlace === '3' || this.state.adPlace === '12' || this.state.adPlace === '30' || this.state.adPlace === '31') {
            typeOptions[0].disabled = false
            typeOptions[1].disabled = false
            typeOptions[2].disabled = false
        } else if (this.state.adPlace === '16') {
            typeOptions[0].disabled = false
            typeOptions[1].disabled = false
            typeOptions[2].disabled = true
        } else {
            typeOptions[0].disabled = false
            typeOptions[1].disabled = true
            typeOptions[2].disabled = true
        }

        const options = this.state.data.map(d => <Option title={titleTrans(d.type, d.name)} dataType={d.type} className={`tagType-${d.type}`} value={JSON.stringify({id: d.id, type: d.type}) } key={d.id}>{d.name}</Option>)

        return <div className="post-send">
            <Spin spinning={this.state.loading} size='large'>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="标题: "
                    >
                        {getFieldDecorator('remake', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.remake}` : '',
                            rules: [{ required: true, message: '请输入广告标题！' }]
                        })(
                            <Input placeholder="输入广告标题"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="描述: "
                    >
                        {getFieldDecorator('description', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.description || ''}` : '',
                            rules: [{ required: true, message: '请输入广告描述！' }]
                        })(
                            <Input placeholder="请输入广告描述"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="位置: ">
                        {getFieldDecorator('adPlace', {
                            initialValue: (updateOrNot && adInfo) ? this.state.adPlace.toString() : '1',
                            rules: [{ required: true, message: '请选择广告位置！' }]
                        })(
                            <RadioGroup
                                options={pcAdPosition}
                                onChange={this.positionChange}
                                setFieldsValue={this.state.adPlace}>
                            </RadioGroup>
                        )}
                    </FormItem>
                    {parseInt(this.state.adPlace) === 3 || parseInt(this.state.adPlace) === 12 ? <FormItem {...formItemLayout} label="嵌入频道">
                        {getFieldDecorator('secondPosition', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.secondPosition}` : parseInt(this.state.adPlace) === 12 ? '0' : '10002',
                            rules: [{ required: true, message: '请选择广告所属栏目！' }]
                        })(
                            <Select style={{ width: 100 }} onChange={this.channelIdChange}>
                                {
                                    parseInt(this.state.adPlace) === 3 ? channelList.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>) : flashTypeList.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>)
                                }
                            </Select>
                        )}
                    </FormItem> : ''}
                    <FormItem {...formItemLayout} label="类型:">
                        {getFieldDecorator('useType', {
                            initialValue: this.state.adType,
                            rules: [{ required: true, message: '请选择类型！' }]
                        })(
                            <RadioGroup onChange={this.adType} setFieldsValue={this.state.adType}>
                                {adTypeOptions.map((item, index) => {
                                    return <Radio key={index} value={item.value}>{item.label}</Radio>
                                })}
                            </RadioGroup>
                        )}
                    </FormItem>
                    {this.state.adType === '4' ? <FormItem {...formItemLayout} label={text.label}>
                        {getFieldDecorator('channelId', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.url}` : '10002',
                            rules: [{required: true, type: `${text.type}`, message: `${text.message}`}]
                        })(
                            <Select style={{width: 100}} onChange={this.channelIdChange}>
                                {this.props.channelList.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>)}
                            </Select>
                        )}
                    </FormItem> : (this.state.adType === '5' ? <FormItem
                        {...formItemLayout}
                        label={text.label}
                    >
                        <div className="special-cont">
                            <Input placeholder={text.placeholder} value={this.state.specialActive} onChange={this.specialIdChange.bind(event)}/>
                            <div className="special-select" style={{display: this.state.specialValShow ? 'block' : 'none'}}>
                                {
                                    this.state.specialVal.map((item, index) => {
                                        return <p key={index} data-val={item} onClick={this.specialValClick.bind(event)}>{item}</p>
                                    })
                                }
                            </div>
                        </div>
                    </FormItem> : <FormItem {...formItemLayout} label={text.label}>
                        {getFieldDecorator('url', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.url}` : '',
                            rules: [{
                                required: parseInt(this.state.adPlace) !== 4,
                                type: `${text.type}`,
                                message: `${text.message}`
                            }]
                        })(<Input placeholder={text.placeholder}/>)}
                    </FormItem>)}
                    {/* <FormItem {...formItemLayout} label="链接：">
                        {getFieldDecorator('url', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.url}` : '',
                            rules: [{ required: true, type: 'url', message: '请输入正确的超链接地址！' }]
                        })(
                            <Input placeholder='输入广告链接地址'/>
                        )}
                    </FormItem> */}

                    {/* <FormItem
                        {...formItemLayout}
                        label={(parseInt(this.state.adPlace) === 3 || parseInt(this.state.adPlace) === 12) ? '排序: ' : '权重: '}
                    >
                        {getFieldDecorator('topOrder', {
                            initialValue: (updateOrNot && adInfo) ? adInfo.topOrder : '0',
                            rules: [{required: true, message: '请输入广告排序！'}]
                        })(
                            <Input placeholder="请输入广告排序"/>
                        )}
                    </FormItem> */}
                    {(parseInt(this.state.adPlace) === 17) && <FormItem
                        {...formItemLayout}
                        label="新版标签："
                    >
                        {getFieldDecorator('tagsV2', {
                            initialValue: (updateOrNot && adInfo) ? (!adInfo.tagsV2 || JSON.parse(adInfo.tagsV2).length === 0 ? [] : this.transTags(JSON.parse(adInfo.tagsV2))) : [],
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

                    </FormItem>}
                    {(parseInt(this.state.adPlace) !== 3 && parseInt(this.state.adPlace) !== 12) && <FormItem
                        {...formItemLayout}
                        label="权重: "
                    >
                        {getFieldDecorator('topOrder', {
                            initialValue: (updateOrNot && adInfo) ? adInfo.topOrder : '0',
                            rules: [{required: true, message: '请输入广告权重！'}]
                        })(
                            <Input placeholder="请输入广告权重！"/>
                        )}
                    </FormItem>}
                    {(parseInt(this.state.adPlace) === 3 || parseInt(this.state.adPlace) === 12) && <FormItem
                        {...formItemLayout}
                        label="权重: "
                    >
                        {getFieldDecorator('weight', {
                            initialValue: (updateOrNot && adInfo) ? adInfo.weight : '0',
                            rules: [{required: true, message: '请输入广告权重！'}]
                        })(
                            <Input placeholder="请输入广告权重！"/>
                        )}
                    </FormItem>}
                    <FormItem {...formItemLayout} label="平台: ">
                        {getFieldDecorator('type', {
                            initialValue: (updateOrNot && adInfo) ? typeArr : this.state.typeArr,
                            rules: [{ required: true, message: '请选择平台！' }]
                        })(
                            <CheckboxGroup
                                options={typeOptions}
                                onChange={this.typeChange}/>
                        )}
                    </FormItem>
                    <FormItem className="offlineTime" {...formItemLayout} label="定时下线：">
                        <Radio.Group onChange={this.offlineType} value={this.state.offlineType}>
                            <Radio value="0">永久</Radio>
                            <Radio value="1">定时</Radio>
                        </Radio.Group>
                        {getFieldDecorator('expiredTime', {
                            rules: [{required: false, message: '请选择下线时间！'}],
                            initialValue: (updateOrNot && adInfo) ? !adInfo.expiredTime ? null : this.state.offlineType === '0' ? null : moment(formatDate(adInfo.expiredTime), 'YYYY-MM-DD HH:mm:ss') : this.state.offlineType === '1' ? moment() : null
                        })(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onOk={this.changeOffLineType} style={{marginRight: 15}}/>
                        )}
                    </FormItem>
                    {/* {parseInt(this.state.adPlace) !== 12 && parseInt(this.state.adPlace) !== 17 ? <FormItem
                        {...formItemLayout}
                        label="PC封面: "
                    >
                        <div className="dropbox">
                            {getFieldDecorator('pcImgSrc', {
                                initialValue: (updateOrNot && adInfo) ? fileList : '',
                                rules: [{ required: true, message: '请上传广告封面！' }]
                            })(
                                <Upload
                                    action={`${URL}/pic/upload`}
                                    headers={{'Sign-Param': getSig()}}
                                    name='uploadFile'
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            )}
previewImage
                            <span className="cover-img-tip">PC图片: <font style={{color: 'red'}}>{pcImgSize}</font></span>
                        </div>
                    </FormItem> : ''} */}
                    {/* {parseInt(this.state.adPlace) === 1 || parseInt(this.state.adPlace) === 16 || parseInt(this.state.adPlace) === 5 || parseInt(this.state.adPlace) === 2 || parseInt(this.state.adPlace) === 3 || parseInt(this.state.adPlace) === 30 || parseInt(this.state.adPlace) === 31 ? <FormItem
                        {...formItemLayout}
                        label="App/Web封面: "
                        className='upload-div'
                    >
                        <div className="dropbox">
                            {getFieldDecorator('mImgSrc', {
                                initialValue: (updateOrNot && adInfo) ? mImgSrcFileList : '',
                                rules: [{required: true, message: '请上传轮播封面图！'}]
                            })(
                                <Upload
                                    headers={{'Sign-Param': getSig()}}
                                    action={`${URL}/pic/upload`}
                                    name='uploadFile'
                                    listType="picture-card"
                                    fileList={mImgSrcFileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleMImgChange}
                                >
                                    {mImgSrcFileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            )}
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                            <span className="cover-img-tip">App/Web图片: <font style={{color: 'red'}}>{mImgSize}</font></span>
                        </div>
                    </FormItem> : ''} */}
                    {/* 新的图片裁切 */}
                    {parseInt(this.state.adPlace) !== 12 && parseInt(this.state.adPlace) !== 17 ? <FormItem
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 20, offset: 1 }}
                        label='图片自动裁切：'>
                        <div className='newcss' style={{ display: 'flex' }}>
                            <div className="dropbox">
                                <Upload
                                    headers={{ 'Sign-Param': getSig() }}
                                    action={`${URL}/pic/upload`}
                                    name='uploadFile'
                                    listType="picture-card"
                                    fileList={allfileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.uploadAllImg}>
                                    {allfileList && allfileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            </div>
                            {
                                parseInt(this.state.adPlace) !== 12 && parseInt(this.state.adPlace) !== 17 ? (<div className="test">
                                    {this.FormItem({
                                        imgName: 'pcImgSrc',
                                        label: 'Web封面',
                                        imgUrl: 'fileList',
                                        adInfo: adInfo,
                                        fileList: fileList,
                                        changeEvent: this.handleChange,
                                        // size: this.state.cropImgRule[0].intro,
                                        size: `PC首页轮播: ${pcImgSize}`,
                                        noBtn: true,
                                        require: true
                                    })}
                                </div>) : ''
                            }
                            {parseInt(this.state.adPlace) === 1 || parseInt(this.state.adPlace) === 16 || parseInt(this.state.adPlace) === 5 || parseInt(this.state.adPlace) === 2 || parseInt(this.state.adPlace) === 3 || parseInt(this.state.adPlace) === 30 || parseInt(this.state.adPlace) === 31 ? (
                                <div className="test">
                                    {this.FormItem({
                                        imgName: 'mImgSrc',
                                        label: 'App封面',
                                        imgUrl: 'mImgSrcFileList',
                                        adInfo: adInfo,
                                        fileList: mImgSrcFileList,
                                        changeEvent: this.handleMImgChange,
                                        size: `M首页轮播：${mImgSize}`,
                                        noBtn: true,
                                        require: true
                                    })}
                                </div>) : ''
                            }
                        </div>
                    </FormItem> : ''
                    }

                    <FormItem
                        wrapperCol={{ span: 12, offset: 2 }}
                    >
                        <Button type="primary" data-status='1' htmlType="submit" style={{marginRight: '10px'}}>发布</Button>
                        <Button type="primary" data-status='2' onClick={this.handleSubmit} style={{marginRight: '10px'}}>放入草稿箱</Button>
                        <Button type="primary" className="cancel" onClick={() => { hashHistory.goBack() }}>取消</Button>
                    </FormItem>
                </Form>

                <Modal
                    confirmLoading={this.state.confirmLoading}
                    height='700px'
                    width="1400"
                    style={{ top: '50px' }}
                    visible={uploadAllImgModal}
                    onOk={this.sureCropImg}
                    maskClosable={false}
                    onCancel={this.uploadAllImgCancel}
                >
                    <div className="croper-wrap post clearfix">
                        <div className="crop-img" id="cropImgWrap">
                            <img id="croppedImg" src="" alt="Picture" />
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
                                            style={{fontSize: 0, width: item.width, height: item.height}}
                                        >
                                            <img src="" alt="" style={{width: '100%', height: '100%'}}/>
                                        </div>
                                        <p>{item.intro}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </Modal>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </Spin>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        adInfo: state.adInfo.info,
        channelList: state.channelListInfo,
        flashTypeList: state.flashTypeListInfo
    }
}

export default connect(mapStateToProps)(Form.create()(PostSend))
