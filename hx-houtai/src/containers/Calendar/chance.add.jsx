/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Form, Input, Button, DatePicker, Upload, Icon, Modal, message, Spin, Row, Col, Select } from 'antd'
import Cropper from '../../../node_modules/cropperjs/dist/cropper.esm.js'
import '../../../node_modules/cropperjs/dist/cropper.css'
import './calendar.add.scss'
import {formatDate, URL, getSig, dataURLtoBlob, axiosAjax, titleTrans} from '../../public'
import moment from 'moment'
import {hashHistory} from 'react-router'
import Cookies from 'js-cookie'

const FormItem = Form.Item
const {Option} = Select

let timeout, currentValue
class ChanceAdd extends Component {
    constructor () {
        super()
        this.state = {
            content: '',
            title: '',
            previewVisible: false,
            previewImage: '',
            fileList: [],
            uploadAllImgModal: false,
            imgUrl: '',
            cropImg: '', // 裁切后
            focusImg: -1,
            ratio: 340 / 188,
            loading: false,
            updateOrNot: false,
            publishTime: '',
            url: '',
            cropImgRule: [
                {
                    coverName: 'mcImg',
                    coverList: 'mcfileList',
                    width: '340px',
                    height: '188px',
                    ratio: 340 / 188,
                    intro: '图片尺寸: 340 * 188'
                }
            ],
            searching: false,
            data: [],
            searchText: '',
            noCurrResult: false,
            tagsIconLoading: false,
            selectedTags: [],
            tagsV2: []
        }
    }

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }

    handleCancel = () => {
        this.setState({
            previewVisible: false
        })
    }

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await this.getBase64(file.originFileObj)
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true
        })
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

    handleUploadImg = ({file, fileList}) => {
        const This = this
        if (file.size / (1024 * 1024) >= 2) {
            message.error('图片大小超过 2M , 请重新选择!')
            this.setState({
                fileList: [],
                imgUrl: '',
                focusImg: -1
            })
            return false
        }
        this.setState({fileList})
        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    uploadAllImgModal: true,
                    imgUrl: file.response.obj,
                    focusImg: -1
                }, function () {
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
                                const base64url = imageData.toDataURL('image/jpeg', 0.85)

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
        }
    }

    uploadImgCancel = () => {
        this.setState({
            uploadAllImgModal: false
        })
        this.state.cropper.destroy()
    }

    sureCropImg = () => {
        const This = this
        this.setState({
            loading: true,
            uploadAllImgModal: false,
            confirmLoading: true
        })
        message.warning('上传中，请稍候！')
        this.state.cropper.destroy()
        let blob = dataURLtoBlob($('.crop-preview-item').find('img').prop('src'))
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
                    This.setState({
                        loading: false,
                        confirmLoading: false,
                        cropImg: data.obj
                    })
                    message.success('图片上传完毕！')
                }
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
    }

    componentWillMount () {
        let id = this.props.location.query.id
        if (id && Cookies.get('hx_chance_id')) {
            let title = Cookies.get('hx_chance_title')
            let time = Cookies.get('hx_chance_publishTime')
            let url = Cookies.get('hx_chance_url')
            let tagsV2 = Cookies.get('hx_chance_tagsV2')
            let bgPicUrl = Cookies.get('hx_chance_bgPicUrl')
            let aimg = [{
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: bgPicUrl
            }]
            this.setState({
                title: title,
                publishTime: time,
                url: url,
                tagsV2: tagsV2,
                cropImg: bgPicUrl,
                fileList: bgPicUrl ? aimg : []
            })
        }
    }

    // 提交
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let id = this.props.location.query.id
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
                    url: values.url,
                    tagsV2: values.tagsV2,
                    star: this.state.star,
                    bgPicUrl: this.state.fileList.length === 0 ? '' : this.state.cropImg,
                    publishTime: parseInt(Date.parse(values.publishTime) / 1000)
                }
                if (!id) {
                    axiosAjax('post', '/chance/add', {...sendData}, (res) => {
                        if (res.code === 1) {
                            this.setState({
                                loading: false
                            })
                            message.success('增加成功')
                            hashHistory.push('/cc-chanceLists')
                        } else {
                            message.error(res.msg)
                        }
                    })
                } else {
                    axiosAjax('post', '/chance/update', {...sendData, id: id}, (res) => {
                        if (res.code === 1) {
                            this.setState({
                                loading: false
                            })
                            message.success('修改成功')
                            hashHistory.push('/cc-chanceLists')
                        } else {
                            message.error(res.msg)
                        }
                    })
                }
            }
        })
    }

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

    render () {
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {span: 2},
            wrapperCol: {span: 15}
        }
        const {previewVisible, previewImage, fileList, uploadAllImgModal, focusImg, title, publishTime, url, tagsV2, cropImg, data} = this.state
        const listId = this.props.location.query.id
        const This = this
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        )
        const options = data.map(d => <Option title={titleTrans(d.type, d.name)} dataType={d.type} className={`tagType-${d.type}`} value={JSON.stringify({id: d.id, type: d.type}) } key={d.id}>{d.name}</Option>)
        return <div className="calendar-add">
            <h4>新增机会</h4>
            <Form onSubmit={this.handleSubmit}>
                <Spin spinning={this.state.loading} size="large">
                    <FormItem
                        {...formItemLayout}
                        label={
                            <span>主标题&nbsp;  </span>
                        }
                    >
                        {getFieldDecorator('title', {
                            rules: [{required: true, message: '请输入主标题!', whitespace: true}],
                            initialValue: listId ? title : ''
                        })(<Input className="calendar-title" placeholder="主标题"/>)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={
                            <span>选择时间&nbsp;  </span>
                        }
                    >
                        {getFieldDecorator('publishTime', {
                            rules: [{required: true, message: '请选时间！'}],
                            initialValue: listId ? moment(formatDate(publishTime * 1000), 'YYYY-MM-DD HH:mm:ss') : moment(formatDate(Date.parse(new Date())), 'YYYY-MM-DD HH:mm:ss')
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
                            rules: [{required: false, type: 'url', message: '请输入正确的超链接地址！'}],
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
                            <span>上传图片&nbsp;  </span>
                        }
                    >
                        <div className="clearfix">
                            {getFieldDecorator('bgPicUrl', {
                                initialValue: listId ? cropImg : ''
                            })(<Upload
                                headers={{'Sign-Param': getSig()}}
                                action={`${URL}/pic/upload`}
                                name='uploadFile'
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleUploadImg}
                            >{fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            )}
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{width: '100%'}} src={previewImage}/>
                            </Modal>
                        </div>
                    </FormItem>
                    <Modal
                        confirmLoading={this.state.confirmLoading}
                        height="550px"
                        width="1200px"
                        visible={uploadAllImgModal}
                        onOk={this.sureCropImg}
                        maskClosable={false}
                        onCancel={this.uploadImgCancel}>
                        <div className="chance croper-wrap clearfix">
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
                    <FormItem
                        wrapperCol={{span: 12, offset: 2}}
                    >
                        <Button type="primary" className="submit" onClick={this.handleSubmit}>提交</Button>
                        <Button type="primary" className="cancel" style={{marginLeft: '10px'}}>取消</Button>
                    </FormItem>
                </Spin>
            </Form>
        </div>
    }
}

export default connect(null)(Form.create()(ChanceAdd))
