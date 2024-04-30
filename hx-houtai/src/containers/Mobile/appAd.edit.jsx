/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {Radio, Form, Input, Upload, Icon, Modal, Button, message, Spin, Select, Row, Col, DatePicker} from 'antd'
import {getAdItemInfo} from '../../actions/others/ad.action'
import {getChannelList} from '../../actions/index'

import {axiosAjax, URL, appAdPosition, adTypeOptions, getSig, formatDate} from '../../public/index'
import './index.scss'
import {getPostTacticsList} from '../../actions/account/postTactics.action'
import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group

const typeOptions = [
    {label: 'PC', value: '1'},
    {label: 'Web', value: '4'},
    {label: 'App', value: '2'}
]

class AdMSend extends Component {
    constructor () {
        super()
        this.state = {
            updateOrNot: false,
            adPlace: '',
            adVisible: false,
            type: '1',
            previewVisible: false,
            previewImage: '',
            adTitle: '',
            channelId: '1',
            adContent: '',
            fileList: [],
            coverImgUrl: '',
            loading: true,
            adType: '1',
            offlineType: '0',
            specialVal: [],
            specialActive: '',
            specialValShow: true,
            text: {
                label: '链接',
                message: '请输入正确的链接地址',
                placeholder: '链接地址',
                type: 'url'
            }
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.adInfo.url !== this.props.adInfo.url) {
            this.setState({specialActive: this.props.adInfo.url})
        }
    }

    componentWillMount () {
        const {dispatch, location} = this.props
        let This = this
        dispatch(getChannelList())
        dispatch(getPostTacticsList('post', {'pageSize': 20, 'status': 1, 'currentPage': 1}, function () {
            This.setState({
                loading: false
            })
        }))
        if (location.query.id) {
            dispatch(getAdItemInfo({'id': location.query.id}, (data) => {
                this.setState({
                    updateOrNot: true,
                    fileList: [{
                        uid: 0,
                        name: 'xxx.png',
                        status: 'done',
                        url: data.mImgSrc
                    }],
                    coverImgUrl: data.mImgSrc,
                    loading: false,
                    adPlace: data.adPlace,
                    adType: `${data.useType}`,
                    text: this.label(`${data.useType}`),
                    offlineType: !data.expiredTime ? '0' : '1'
                })
            }))
        } else {
            this.setState({
                loading: false
            })
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
                label = {label: '频道', message: '请选择新闻频道', placeholder: '新闻 ID', type: ''}
                break
            case '5':
                label = {label: '专题名', message: '请输入专题名', placeholder: '示例：MarsBit特训营/20180725170844035121', type: ''}
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

    // 频道改变
    positionChange = (e) => {
        this.setState({
            adPlace: e.target.value
        })
    }

    typeChange = (e) => {
        this.setState({
            type: e.target.value
        })
    }
    changeOffLineType = () => {
        if (this.state.offlineType === '0') {
            this.setState({offlineType: '1'})
        }
    }

    // 上传图片
    handleCancel = () => this.setState({previewVisible: false})

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }

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

    offlineType = (e) => {
        this.setState({
            offlineType: e.target.value
        })
    }
    adType = (e) => {
        this.setState({
            adType: e.target.value,
            text: this.label(e.target.value)
        })
    }

    adVisibleHide = () => {
        this.setState({adVisible: false})
    }

    adVisibleShow = () => {
        this.setState({adVisible: true})
    }

    // 提交
    handleSubmit = (e) => {
        let status = e.target.getAttribute('data-status')
        e.preventDefault()
        this.props.form.setFieldsValue({
            mImgSrc: this.state.coverImgUrl
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                if (this.state.radioValue === '0') {
                    values.expiredTime = 0
                } else {
                    let timestap = values['expiredTime'] ? Date.parse(values['expiredTime'].format('YYYY-MM-DD HH:mm:ss')) : 0
                    values.expiredTime = timestap / 1000
                }
                values.id = this.props.location.query.id || ''
                values.status = status || 1
                values.url = values.useType === '4' ? values.channelId : values.url || this.state.specialActive
                !this.state.updateOrNot && delete values.id
                if (parseInt(this.state.adPlace) === 15) {
                    values.topOrder = 999
                }
                axiosAjax('post', `${this.state.updateOrNot ? '/ad/update' : '/ad/add'}`, values, (res) => {
                    if (res.code === 1) {
                        message.success(this.state.updateOrNot ? '修改成功！' : '添加成功！')
                        hashHistory.goBack()
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
            'adTitle': sendData.postTitle || '',
            'adContent': `${sendData.postContent}` || ''
        }
        this.setState({...this.state, ..._data})
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

    // 内容格式化
    createMarkup (str) {
        return {__html: str}
    }

    render () {
        const {getFieldDecorator} = this.props.form
        const {adInfo, classifyList} = this.props

        const {previewVisible, previewImage, fileList, updateOrNot, text} = this.state
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 19}
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
        // classifyArrList.unshift({
        //     label: '全部',
        //     value: 1
        // })
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )
        let appImgSize = ''
        switch (parseInt(this.state.adPlace)) {
            case 4:
                appImgSize = '1080*2440，上方520px高度留空'
                break
            case 6:
                appImgSize = '560*720，按照实际尺寸，不要做2x，3x的图片'
                break
            case 13:
                appImgSize = '690px * 150px'
                break
            case 14:
                appImgSize = '228px * 160px'
                break
            case 15:
                appImgSize = '690px * 200px'
                break
            default:
        }
        return <div className="ad-send">
            <Spin spinning={this.state.loading} size='large'>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="平台: ">
                        {getFieldDecorator('type', {
                            initialValue: '2'
                        })(
                            <RadioGroup
                                disabled
                                options={typeOptions}
                                onChange={this.typeChange}
                                setFieldsValue={this.state.type}>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="位置: ">
                        {getFieldDecorator('adPlace', {
                            initialValue: this.state.adPlace.toString(),
                            rules: [{required: true, message: '请选择广告位置'}]
                        })(
                            <RadioGroup
                                options={appAdPosition}
                                onChange={this.positionChange}
                                setFieldsValue={this.state.adPlace}>
                            </RadioGroup>
                        )}
                    </FormItem>
                    {parseInt(this.state.adPlace) === 15 ? <FormItem {...formItemLayout} label="策略分类">
                        {getFieldDecorator('secondPosition', {
                            initialValue: (updateOrNot && adInfo && adInfo.secondPosition) ? adInfo.secondPosition.toString() : '',
                            rules: [{required: true, message: '请选择策略频道'}]
                        })(
                            <RadioGroup>
                                <Row>
                                    {
                                        classifyArrList.map((item, i) => {
                                            return <Col span={3} key={i}><Radio
                                                value={`${item.value}`}>{item.label}</Radio></Col>
                                        })
                                    }
                                </Row>
                            </RadioGroup>
                        )}
                    </FormItem> : ''}

                    <FormItem {...formItemLayout} label="类型: ">
                        {getFieldDecorator('useType', {
                            initialValue: this.state.adType,
                            rules: [{required: true, message: '请选择广告类型'}]
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
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.url}` : '1',
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

                    {/*
                    <FormItem
                        {...formItemLayout}
                        label="排序: "
                    >
                        {getFieldDecorator('topOrder', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.topOrder}` : '',
                            rules: [{ required: true, message: '请输入排序数字！' }]
                        })(
                            <Input placeholder="请输入排序数字"/>
                        )}
                    </FormItem>
                    */}

                    <FormItem
                        {...formItemLayout}
                        label="标题: "
                    >
                        {getFieldDecorator('remake', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.remake}` : '',
                            rules: [{required: true, message: '请输入链接标题！'}]
                        })(
                            <Input placeholder="输入链接标题"/>
                        )}
                    </FormItem>

                    {/* <FormItem
                        {...formItemLayout}
                        label={(parseInt(this.state.adPlace) === 15) ? '排序: ' : '权重: '}
                    >
                        {getFieldDecorator('topOrder', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.topOrder}` : '',
                            rules: [{required: true, message: '请输入广告排序！'}]
                        })(
                            <Input placeholder="请输入广告排序"/>
                        )}
                    </FormItem> */}
                    {(parseInt(this.state.adPlace) !== 15) && <FormItem
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
                    {(parseInt(this.state.adPlace) === 15) && <FormItem
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

                    <FormItem
                        {...formItemLayout}
                        label="描述: "
                    >
                        {getFieldDecorator('description', {
                            initialValue: (updateOrNot && adInfo) ? `${adInfo.description || ''}` : '',
                            rules: [{required: false, message: '请输入广告描述！'}]
                        })(
                            <Input placeholder="请输入广告描述"/>
                        )}
                    </FormItem>
                    <FormItem className="offlineTime" {...formItemLayout} label="定时下线：">
                        <Radio.Group onChange={this.offlineType} value={this.state.offlineType}>
                            <Radio value="0">永久</Radio>
                            <Radio value="1">定时</Radio>
                        </Radio.Group>
                        {getFieldDecorator('expiredTime', {
                            rules: [{required: false, message: '请选择下线时间！'}],
                            initialValue: (updateOrNot && adInfo) ? !adInfo.expiredTime ? null : this.state.offlineType === '2' ? null : moment(formatDate(adInfo.expiredTime), 'YYYY-MM-DD HH:mm:ss') : this.state.offlineType === '1' ? moment() : null
                        })(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onOk={this.changeOffLineType} style={{marginRight: 15}}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="封面: "
                    >
                        <div className="dropbox">
                            {getFieldDecorator('mImgSrc', {
                                initialValue: (updateOrNot && adInfo) ? fileList : '',
                                rules: [{required: true, message: '请上传广告封面！'}]
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
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{width: '100%'}} src={previewImage}/>
                            </Modal>
                            <span className="cover-img-tip"><font style={{color: 'red'}}>{appImgSize}</font></span>
                        </div>
                    </FormItem>
                    <FormItem
                        wrapperCol={{span: 20, offset: 2}}
                    >
                        <Button type="primary" data-status='1' htmlType="submit" style={{marginRight: '10px'}}>发布</Button>
                        <Button type="primary" data-status='2' onClick={this.handleSubmit} style={{marginRight: '10px'}}>放入草稿箱</Button>
                        <Button type="primary" className="cancel" onClick={() => {
                            hashHistory.goBack()
                        }}>取消</Button>
                    </FormItem>
                </Form>
            </Spin>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        adInfo: state.adInfo.info,
        channelList: state.channelListInfo,
        classifyList: state.postTacticsInfo.list
    }
}

export default connect(mapStateToProps)(Form.create()(AdMSend))
