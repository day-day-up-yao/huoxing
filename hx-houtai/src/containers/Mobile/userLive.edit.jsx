/*
 * 用户直播间，字段
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Spin, Form, Row, Col, Input, DatePicker, Upload, Button, Radio, Switch, InputNumber, message, Icon, Modal} from 'antd'
import {getUserLiveItemInfo} from '../../actions/newlive/newlive.action' // setFilterData
import { hashHistory } from 'react-router'
import {formatDate, URL, getSig, axiosAjaxPost} from '../../public/index'
// import RichEditor from '../../components/RichEditor/index'
import {getliveTypeList} from '../../actions/index'
import './index.scss'
import copy from 'copy-to-clipboard'
import moment from 'moment'
// import Cookies from 'js-cookie'

const FormItem = Form.Item
// const Option = Select.Option
const RadioGroup = Radio.Group

const { TextArea } = Input

class UserLiveEdit extends Component {
    constructor () {
        super()
        this.state = {
            updateOrNot: false,
            fileList: [],
            liveType: '1',
            coverPicUrl: '',
            guestList: [],
            guestFlag: 0,
            nowRoomType: 0,
            roomType: 0,
            previewImage: '',
            popCoverImg: '',
            isBriefImg: false,
            brifSrcFileList: [],
            isGuestTeam: '',
            roomId: ''
        }
    }
    componentWillMount () {
        const {dispatch, location} = this.props
        dispatch(getliveTypeList())
        if (location.query.id) {
            dispatch(getUserLiveItemInfo({'roomId': location.query.id}, (data) => {
                let brief = data.brief
                let newbreif = brief.replace(/<\/p>/g, '\r\n')
                newbreif = newbreif.replace(/<p>/g, '')
                newbreif = newbreif.replace(/<br>/g, '')
                // 海报
                if (newbreif.indexOf('<img') > -1) {
                    let start = newbreif.indexOf('<img')
                    let end = newbreif.indexOf('">')
                    let imgStrReg = newbreif.substring(start, end + 2)
                    let txtBreif = newbreif.replace(imgStrReg, '')
                    newbreif = txtBreif
                    let imgSrc = imgStrReg.substring(imgStrReg.indexOf('htt'), imgStrReg.indexOf('">'))
                    this.setState({
                        isBriefImg: true,
                        popCoverImg: imgSrc,
                        brifSrcFileList: [{
                            uid: 0,
                            name: 'xxx.png',
                            status: 'done',
                            url: imgSrc
                        }]
                    })
                }
                this.setState({
                    updateOrNot: true,
                    fileList: [{
                        uid: 0,
                        name: 'xxx.png',
                        status: 'done',
                        url: data.coverPicUrl
                    }],
                    isGuestTeam: data.roomType === 0 ? data.guestFlag === 1 : true,
                    guestFlag: data.guestFlag || 0,
                    guestList: data.guestList ? data.guestList : [],
                    coverPicUrl: data.coverPicUrl,
                    loading: false,
                    brief: newbreif,
                    roomId: location.query.id
                })
            }))
        } else {
            this.setState({
                loading: false
            })
        }
    }
    componentDidUpdate (prevProps, prevState) {
        //
    }
    channelIdChange = (e) => {
        this.setState({
            channelId: e.target.value
        })
    }

    // 上传图片
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }
    // 选择大会直播1，或者app直播0，大会直播没有嘉宾选项
    handleChange = ({ file, fileList }) => {
        this.setState({
            fileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                coverPicUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    coverPicUrl: file.response.obj
                })
            } if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    coverPicUrl: '',
                    fileList: []
                })
            }
        }
    }
    addGuest = () => {
        const {guestList} = this.state
        if (guestList.length < 3) {
            guestList.push({'userType': 0, phoneNum: ''})
            this.setState({
                guestList: guestList,
                guestFlag: 1
            }, () => {
                console.log('立即更新嘉宾数据')
            })
        } else {
            message.error('最多只能添加三个嘉宾')
        }
    }
    handleGuest = (value) => {
        const {guestList} = this.state
        guestList[guestList.length - 1].phoneNum = value
        this.setState({
            guestList: guestList
        })
    }

    deleGuest = (index) => {
        const {guestList} = this.state
        guestList.splice(index, 1)
        this.setState({
            guestList: guestList
        })
    }
    hanleRoomType = (e) => {
        const type = e.target.value
        this.setState({
            livecategory: type,
            roomType: type === 3 ? 1 : 0,
            guestFlag: type === 2 ? 1 : 0,
            isGuestTeam: type !== 1
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                if (this.state.guestList.length > 0) {
                    console.log('获取新增的' + this.state.guestList)
                    console.log('获取原来的' + this.state.guestList)
                }
                let reg = new RegExp('<p></p>', 'g')
                let oldStr = '<p>' + values.brief
                let str = JSON.stringify(oldStr)
                let transtr = str.replace(/\\n/g, '</p><p>')
                transtr = transtr.replace(/\\r/g, '')
                let sumBrief = transtr.replace(/"/g, '')
                let brstr = sumBrief.concat('</p>')

                let laststr = brstr.replace(reg, '<p><br></p>')
                // 上传的打开这个属性，
                console.log('刚刚上传的海报：' + this.state.popCoverImg)
                if (this.state.isBriefImg && this.state.popCoverImg !== '') {
                    laststr = laststr + '<p><img src="' + this.state.popCoverImg + '"></p>'
                }

                console.log('简介：' + laststr)
                let newPic = this.state.coverPicUrl
                var sendData = {
                    // 'roomId': 24312817,
                    'roomType': this.state.roomType,
                    'name': values.name,
                    'brief': laststr,
                    'beginTime': values.beginTime.valueOf(),
                    'popularityAim': 0,
                    'popularityAimTime': 0,
                    'coverPicUrl': newPic,
                    'presenterList': [{'userType': 1, 'phoneNum': values.presenterList}],
                    guestList: this.state.guestList,
                    'guestFlag': this.state.guestFlag,
                    'topOrder': values.topOrder,
                    'displayFlag': values.displayFlag ? 1 : 0,
                    'growthType': values.growthType || -1,
                    'popularity': values.popularity,
                    'liveType': values.liveType
                }
                console.log(this.state.roomId)
                if (this.state.updateOrNot) {
                    sendData['roomId'] = this.state.roomId
                } else {
                    sendData = {
                        'roomType': this.state.roomType,
                        'name': values.name,
                        'brief': laststr,
                        'beginTime': values.beginTime.valueOf(),
                        'popularityAim': 0,
                        'popularityAimTime': 0,
                        'coverPicUrl': newPic,
                        'presenterList': [{'userType': 1, 'phoneNum': values.presenterList}],
                        // 'presenterList': [{'userType': 1, 'phoneNum': 18539991422}],
                        // 'guestList': [{'userType': 1, 'phoneNum': '18539991423'}],
                        guestList: this.state.guestList,
                        'guestFlag': this.state.guestFlag,
                        'topOrder': values.topOrder,
                        'displayFlag': values.displayFlag ? 1 : 0,
                        'growthType': values.growthType || -1,
                        'popularity': values.popularity,
                        'liveType': values.liveType
                    }
                    console.log(sendData)
                }
                axiosAjaxPost('post', `${this.state.updateOrNot ? '/video/live/room/update' : '/video/live/room/add'}`, sendData, (res) => {
                    this.setState({
                        loading: false
                    })
                    if (res.code === 1) {
                        // 埋点功能暂缓
                        message.success(this.state.updateOrNot ? '修改成功' : '添加成功')
                        hashHistory.push('/offiLive-list')
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }
    handleBrifeImgChange = ({file, fileList}) => {
        this.setState({
            brifSrcFileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                popCoverImg: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    popCoverImg: file.response.obj,
                    isBriefImg: true
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    popCoverImg: '',
                    brifSrcFileList: []
                })
            }
        }
    }
    copyAdress = (e) => {
        const {info} = this.props
        let address = e.target.getAttribute('title') === 'push' ? info.pushStreamUrl : info.pullStreamUrl
        copy(address)
        message.success('链接复制成功')
    }
    handleChangeText = (obj) => {
        console.log(obj)
    }

    render () {
        const {getFieldDecorator} = this.props.form
        const {info, liveTypeList} = this.props
        const {previewVisible, previewImage, updateOrNot, fileList, liveType, guestList, isGuestTeam, brief, isBriefImg, brifSrcFileList} = this.state
        const livecategory = updateOrNot && info ? (info.roomType === 0 ? (info.guestFlag === 0 ? 1 : 2) : 3) : ''
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 19}
        }
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )
        return (
            <div className="ad-send">
                <Spin spinning={this.state.loading} size='large'>
                    <Form onSubmit={this.handleSubmit}>

                        <FormItem
                            {...formItemLayout}
                            label="直播标题："
                        >
                            {getFieldDecorator('name', {
                                initialValue: (updateOrNot && info) ? `${info.name}` : '',
                                rules: [{required: true, message: '请输入直播间标题！'}]
                            })(
                                <Input placeholder="请输入直播间标题！"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="直播简介："
                        >
                            {getFieldDecorator('brief', {
                                initialValue: (updateOrNot && info) ? brief : '',
                                rules: [{required: true, message: '请输入内容！'}]
                            })(
                                <TextArea className="live" ref={(input) => { this.contentProps = input }} rows={8} placeholder="直播间内容格式" />
                            )}
                        </FormItem>
                        {(isBriefImg || !updateOrNot) && <FormItem label="简介海报" {...formItemLayout}>
                            <div className="dropbox">
                                {getFieldDecorator('popCoverImg', {
                                    initialValue: updateOrNot && info ? brifSrcFileList : ''
                                })(
                                    <Upload
                                        action={`${URL}/pic/upload`}
                                        headers={{'Sign-Param': getSig()}}
                                        name='uploadFile'
                                        listType="picture-card"
                                        fileList={brifSrcFileList}
                                        onPreview={this.handlePreview}
                                        onChange={this.handleBrifeImgChange}
                                    >
                                        {brifSrcFileList.length >= 1 ? null : uploadButton}
                                    </Upload>
                                )}
                            </div>
                        </FormItem>}
                        {liveTypeList.length !== 0 && <FormItem
                            {...formItemLayout}
                            label='直播分类'>
                            {getFieldDecorator('liveType', {
                                initialValue: (updateOrNot && info) ? `${info.liveType || '1'}` : '1',
                                rules: [{required: true}]
                            })(
                                <RadioGroup
                                    options={liveTypeList.filter(item => !item.disabled)}
                                    onChange={this.channelIdChange}
                                    setFieldsValue={liveType}>
                                </RadioGroup>
                            )}
                        </FormItem>}
                        <FormItem {...formItemLayout} label="直播类型">
                            {getFieldDecorator('roomType', {
                                initialValue: (updateOrNot && info ? (info.roomType === 0 ? (info.guestFlag === 0 ? 1 : 2) : 3) : ''),
                                rules: [{required: true, message: '请选择直播间类型'}]
                            })(
                                <RadioGroup disabled={updateOrNot} value={livecategory} onChange={this.hanleRoomType}>
                                    <Radio value={1}>APP单人</Radio>
                                    <Radio value={2}>APP多人</Radio>
                                    <Radio value={3}>大会直播</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="是否展示">
                            {getFieldDecorator('displayFlag', {
                                initialValue: (updateOrNot && info.displayFlag) ? parseInt(info.displayFlag) === 1 : false,
                                valuePropName: 'checked'
                            })(
                                <Switch onChange={(checked) => {
                                    this.setState({displayFlag: checked ? 1 : 0})
                                }}
                                checkedChildren="是"
                                unCheckedChildren="否"
                                />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="直播时间"
                        >
                            {getFieldDecorator('beginTime', {
                                initialValue: (updateOrNot && info) ? moment(formatDate(info.beginTime), 'YYYY-MM-DD HH:mm:ss') : moment(),
                                rules: [{
                                    required: true, message: '请选择直播开始时间'
                                }]
                            })(
                                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="预设人气" >
                            {getFieldDecorator('growthType', {
                                initialValue: (updateOrNot && info) ? info.growthType : '',
                                rules: [{required: true, 'message': '请选择预设人气'}]
                            })(
                                <Radio.Group>
                                    <Radio value={-1}>0</Radio>
                                    <Radio value={3}>1500</Radio>
                                    <Radio value={0}>8000</Radio>
                                    <Radio value={1}>30000</Radio>
                                    <Radio value={2}>50000</Radio>
                                </Radio.Group>
                            )}
                        </FormItem>
                        <FormItem wrapperCol={{span: 12}} labelCol={{span: 5}} label="虚拟人气">
                            {getFieldDecorator('popularity', {
                                initialValue: (updateOrNot && info ? info.popularity : 0),
                                rules: [{required: false}]
                            })(
                                <InputNumber placeholder="输入虚拟人气"/>
                            )}
                            <span>当前人气：{updateOrNot && info ? (info.personNum + info.popularity) : 0}</span>
                        </FormItem>
                        <FormItem {...formItemLayout} label="累计人次">
                            <div className="personNum">
                                <span>{updateOrNot && info ? info.personNum : 0}；</span>
                                <span>累计人数：{updateOrNot && info ? info.imAccountCount : 0}；</span>
                                <span>峰值人数：{updateOrNot && info ? info.maxOnLineNum : 0}</span>
                            </div>

                        </FormItem>
                        <FormItem {...formItemLayout} label="权重">
                            {getFieldDecorator('topOrder', {
                                initialValue: (updateOrNot && info ? info.topOrder : 0),
                                rules: [{required: true, message: '请输入权重'}]
                            })(
                                <InputNumber min={0} />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="主播账号">
                            {getFieldDecorator('presenterList', {
                                initialValue: (updateOrNot && info ? info.presenterList[0].phoneNum : 0),
                                rules: [{required: true, message: '请输入主播账号'}]
                            })(
                                <InputNumber style={{ width: '60%' }} />
                            )}
                        </FormItem>
                        { guestList.length > 0 && guestList.map((item, index) => {
                            return <div id={index} key={index}>
                                <FormItem label={`嘉宾账号${index + 1}`} {...formItemLayout}>
                                    <InputNumber value={item.phoneNum} ref={(input) => { this.contentProps = input }} onChange={(value) => this.handleGuest(value)} style={{ width: '60%' }} />
                                    <i className="iconfont iconfont-del" onClick={() => this.deleGuest(index)}></i>
                                </FormItem></div>
                        })}
                        {isGuestTeam && <FormItem {...formItemLayout} label="嘉宾添加">
                            <Button type="dashed" onClick={this.addGuest} style={{ width: '60%' }}>
                                <i className="iconfont iconfont-add"></i>添加嘉宾账号
                            </Button>
                        </FormItem>}
                        <FormItem
                            {...formItemLayout}
                            label="直播封面: "
                        >
                            <div className="dropbox">
                                {getFieldDecorator('coverPicUrl', {
                                    initialValue: (updateOrNot && info) ? fileList : '',
                                    rules: [{ required: true, message: '请上传直播封面！' }]
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
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                                <span className="cover-img-tip">长宽比例: <font style={{color: 'red'}}> 640 * 358</font></span>
                            </div>
                        </FormItem>
                        {updateOrNot && <FormItem {...formItemLayout} label="推流地址">
                            {updateOrNot && info ? <Input value={info.pushStreamUrl} disabled/> : ''}
                            <a href="javascript:void(0)" className="copyAddress" title="push" onClick={this.copyAdress}>复制</a><span className="gray">修改请在pc端操作</span>
                        </FormItem>}
                        {updateOrNot && <FormItem {...formItemLayout} label="拉流地址">
                            {updateOrNot && info ? <Input value={info.pullStreamUrl} disabled/> : ''}
                            <a href="javascript:void(0)" className="copyAddress" title='pull' onClick={this.copyAdress}>复制</a><span className="gray">修改请在pc端操作</span>
                        </FormItem>}
                        <FormItem>
                            <Row type="flex">
                                <Col span={12} style={{ textAlign: 'center' }}>
                                    <Button type="primary" onClick={this.handleSubmit} className="submit">提交</Button>
                                </Col>
                                <Col span={12} style={{ textAlign: 'center' }}>
                                    <Button type="primary" className="cancel" onClick={() => { hashHistory.goBack() }}>取消</Button>
                                </Col>
                            </Row>
                        </FormItem>
                    </Form>
                </Spin>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.newliveInfo.info,
        liveTypeList: state.liveTypeListInfo
    }
}
export default connect(mapStateToProps)(Form.create()(UserLiveEdit))
