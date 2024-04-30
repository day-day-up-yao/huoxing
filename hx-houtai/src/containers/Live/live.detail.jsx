/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Row, Col, Spin, Modal, message, Form, Input, Button, Radio, Upload, Icon} from 'antd'
// import PostEditor from '../../components/postEditor'
// import ModalEditor from './ModalEditor'
import {hashHistory} from 'react-router'
import {getLiveItemInfo} from '../../actions/live/live.action'
import {
    getLiveContentList,
    selectedData,
    addNewLive,
    delLiveItem,
    updateLive,
    setFilterData
} from '../../actions/live/liveContent.action'
import {axiosAjax, formatDate, getSig, URL} from '../../public/index'
import './index.scss'

const confirm = Modal.confirm
const FormItem = Form.Item
// const Option = Select.Option
const { TextArea } = Input

class LiveDetail extends Component {
    constructor () {
        super()
        this.state = {
            updateOrNot: false,
            visible: false,
            isEdit: false,
            loading: false,
            previewVisible: false,
            previewImage: '',
            radioValue: '',
            disabled: false,
            content: '',
            editorContent: '',
            data: {},
            contentLoading: true,
            currentPage: 1,
            editor: '',
            roleId: '',
            zcrId: '',
            guestId: '',
            title: '',
            guestList: [],
            presenterList: [],
            userType: 1,
            userName: '',
            userId: '',
            fileList: [],
            coverImgUrl: ''
        }
    }

    componentWillMount () {
        const {location, actions} = this.props
        actions.getLiveItemInfo({'castId': location.query.id}, (data) => {
            this.setState({
                title: data.title,
                roleId: '',
                zcrId: data.presenterId,
                guestId: data.guestId,
                radioValue: `${data.status}` || '0',
                presenterList: data.presenterList || [],
                guestList: data.guestList || []
            })
        })
        actions.getLiveContentList('init', {
            castId: location.query.id,
            currentPage: 1,
            pageSize: 30
        }, () => {
            this.setState({
                contentLoading: false
            })
        })
    }

    // 内容格式化
    createMarkup (str) {
        return {__html: str}
    }

    onChange = (e) => {
        let value = e.target.value
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    castId: this.props.location.query.id,
                    status: value
                }
                axiosAjax('POST', '/caster/room/update/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('操作成功')
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 富文本编写
    sendPost = (sendData) => {
        let _data = {
            'content': `${sendData.postContent}` || ''
        }
        this.setState({...this.state, ..._data})
    }

    setSimditor (editor) {
        this.setState({
            editor: editor
        })
    }

    // 切换身份
    changeStatus = (value) => {
        this.setState({
            userType: value.userType,
            userName: value.userName,
            userId: value.userId
        })
    }

    // 提交
    handleSubmit = (e) => {
        e.preventDefault()
        const {data, updateOrNot, content} = this.state
        this.props.form.setFieldsValue({
            content: content.replace(/style=['"][^"']+['"]/ig, '')
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            values.imgSrc = this.state.coverImgUrl
            values.content = JSON.stringify({content: {content: values.content, imgs: [values.imgSrc]}})
            let isContent = JSON.parse(values.content).content.content
            if (isContent === '' && values.imgSrc === '') {
                return false
            }
            if (!err) {
                this.setState({
                    disabled: true,
                    loading: true
                })
                values.castId = this.props.location.query.id || ''
                values.userId = this.state.userId
                // values.role = this.state.role
                if (updateOrNot) {
                    delete values.castId
                    values.contentId = data.content.contentId
                }
                !updateOrNot ? this.props.actions.addNewLive(values, (res) => {
                    if (res.code === 1) {
                        message.success('发表成功！')
                        this.cancelEdit()
                        this.setState({
                            disabled: false,
                            content: '',
                            loading: false,
                            visible: false,
                            fileList: [],
                            previewImage: '',
                            coverImgUrl: ''
                        })
                    } else {
                        this.setState({
                            disabled: false,
                            loading: false
                        })
                        message.error(res.msg)
                    }
                }) : this.props.actions.updateLive(values, data.index, (res) => {
                    if (res.code === 1) {
                        this.cancelEdit()
                        this.setState({
                            disabled: false,
                            content: '',
                            loading: false,
                            updateOrNot: false,
                            visible: false,
                            fileList: [],
                            previewImage: '',
                            coverImgUrl: ''
                        })
                    } else {
                        this.setState({
                            disabled: false,
                            loading: false
                        })
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 删除item
    delListItem (id, index) {
        let _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                _this.props.actions.delLiveItem({
                    contentId: id
                }, index)
            }
        })
    }

    // 编辑框文字替换
    showModal = (item, index) => {
        let constentObj = JSON.parse(item.content.content)
        let $simditor = $('.live-editor-area')
        document.getElementsByClassName('shop-content')[0].scrollTop = 0
        this.props.actions.selectedData(item)
        $simditor.focus()
        this.props.form.setFieldsValue({
            roleId: item.user.userId
        })
        this.setState({
            updateOrNot: true,
            visible: true,
            roleId: item.user.userId,
            userId: item.user.userId,
            castId: item.content.castId,
            content: constentObj.content.content,
            data: {...item, index: index},
            userName: item.user.userName,
            coverImgUrl: constentObj.content.imgs[0],
            fileList: constentObj.content.imgs[0].length === 0 ? [] : [{
                uid: 0,
                name: 'xxx.png',
                status: 'done',
                url: constentObj.content.imgs[0]
            }]
        })
    }

    // 取消本次编辑
    cancelEdit = () => {
        this.props.form.resetFields()
        this.setState({
            updateOrNot: false,
            visible: false,
            content: ''
        })
    }

    // 加载更多
    loadMore = () => {
        const {location, actions, pageData} = this.props
        this.setState({
            contentLoading: true
        })
        actions.getLiveContentList('more', {
            castId: location.query.id,
            currentPage: pageData.currentPage + 1,
            pageSize: 30
        }, (data) => {
            if (data.code === 1) {
                this.setState({
                    contentLoading: false,
                    currentPage: pageData.currentPage + 1
                })
            } else {
                this.setState({
                    contentLoading: false
                })
            }
        })
    }

    changeLiveStatus = (e) => {
        let status = e.target.getAttribute('data-status')
        const _this = this
        confirm({
            title: '提示',
            content: `确认要${status === '1' ? '结束直播' : '开始直播'}吗 ?`,
            onOk () {
                let sendData = {
                    castId: _this.props.location.query.id,
                    status: status === '1' ? '2' : '1'
                }
                axiosAjax('POST', '/caster/room/update/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('操作成功!')
                        _this.setState({
                            radioValue: status === '1' ? '2' : '1'
                        })
                        _this.props.actions.setFilterData({'status': status === '1' ? '2' : '1'})
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    onChangeTextArea = ({ target: { value } }) => {
        this.setState({ content: value })
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

    render () {
        const {getFieldDecorator} = this.props.form
        const {contentList, pageData} = this.props
        const {content, loading, contentLoading, radioValue, presenterList, guestList, fileList, previewVisible, previewImage, coverImgUrl} = this.state
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )
        return <div className="live-detail-content">
            <Button type="primary" data-status={radioValue} style={{marginRight: '15px'}} onClick={this.changeLiveStatus}>{radioValue === '1' ? '结束直播' : '开始直播'}</Button>
            <Button type="primary" className="cancel" onClick={() => {
                hashHistory.goBack()
            }}>返回</Button>
            <div className="live-detail-title">正在 "{this.state.title}" 直播间发布内容</div>
            <div className="live-detail-section">
                <Col span={8} className="live-detail simditor">
                    <Spin spinning={contentLoading} size="large">
                        {!contentList ? <div className="tips">加载中...</div> : <div>
                            {contentList.map((item, index) => {
                                let constentObj = JSON.parse(item.content.content)
                                let newsText = !constentObj.content ? constentObj.news : constentObj.content
                                let imgSrc = !constentObj.content ? JSON.parse(constentObj.news.coverPic).pc : constentObj.content.imgs
                                let contentText = !newsText.content ? newsText.title : newsText.content
                                return <div key={index}>
                                    <Row className="item-section simditor-body">
                                        <Col className='item-content' dangerouslySetInnerHTML={this.createMarkup(contentText)}></Col>
                                        <img className="item-section-img" style={{ display: !imgSrc ? 'none' : 'block' }} src={imgSrc} alt=""/>
                                        <Col span={4} className='item-opts'>
                                            <a style={{ display: newsText.msg && newsText.title ? 'none' : 'inlinkBlock' }} onClick={() => {
                                                this.showModal(item, index)
                                            }}>编辑</a>
                                            <a onClick={() => {
                                                this.delListItem(item.content.contentId, index)
                                            }}>删除</a>
                                        </Col>
                                        <Col className='item-date'>{formatDate(item.content.createTime)}<span>{!newsText.content ? '' : item.user.userType === 2 ? '（主持人）' : '（嘉宾）'}{item.user.userName}</span></Col>
                                    </Row>
                                </div>
                            })}
                            {(() => {
                                if (contentList.length === 0) {
                                    return <div className="tips">直播好像还没开始哦~</div>
                                } else {
                                    if (this.state.currentPage >= pageData.pageCount) {
                                        return <div className="content-end">已加载全部~</div>
                                    } else {
                                        return <div className="check-more-load" onClick={this.loadMore}>查看更多</div>
                                    }
                                }
                            })()}
                        </div>}
                    </Spin>
                </Col>
                <Col span={11} offset={1} className="live-editor">
                    <Spin spinning={loading} size="large">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem label="选择当前发言人：">
                                {getFieldDecorator('roleId', {
                                    initialValue: this.state.roleId,
                                    rules: [{required: true, message: '请选择当前发言人！'}]
                                })(
                                    <Radio.Group buttonStyle="solid">
                                        <span>主持人:</span>
                                        <div>
                                            {
                                                presenterList.map(item => {
                                                    return <Radio.Button onClick={() => this.changeStatus(item)} key={item.userId} value={item.userId}>{item.userName}</Radio.Button>
                                                })
                                            }
                                        </div>
                                        <span>嘉宾:</span>
                                        <div>
                                            {
                                                guestList.map(item => {
                                                    return <Radio.Button onClick={() => this.changeStatus(item)} key={item.userId} value={item.userId}>{item.userName}</Radio.Button>
                                                })
                                            }
                                        </div>
                                    </Radio.Group>
                                )}
                            </FormItem>
                            <FormItem
                                label="直播内容: "
                            >
                                {getFieldDecorator('content', {
                                    initialValue: content,
                                    rules: [{required: false, message: '请输入直播内容！'}]
                                })(
                                    <TextArea
                                        onChange={this.onChangeTextArea}
                                        placeholder="请输入直播内容！"
                                        autosize={{ minRows: 6, maxRows: 10 }}
                                        className='live-editor-area'
                                    />
                                )}
                            </FormItem>

                            <FormItem
                                label="插入图片: "
                            >
                                <div className="dropbox">
                                    {getFieldDecorator('imgSrc', {
                                        initialValue: coverImgUrl,
                                        rules: [{required: false, message: ''}]
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
                                </div>
                            </FormItem>

                            <FormItem>
                                <Button
                                    disabled={this.state.disabled}
                                    type="primary" data-status='1' htmlType="submit"
                                    style={{marginRight: '10px'}}>发表</Button>
                                {
                                    this.state.visible ? <Button type="primary" data-status='2' htmlType="button" style={{marginRight: '10px'}} onClick={this.cancelEdit}>取消</Button> : ''
                                }
                            </FormItem>
                        </Form>
                    </Spin>
                </Col>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.liveInfo.info,
        contentList: state.liveContent.list,
        pageData: state.liveContent.pageData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            setFilterData,
            getLiveContentList,
            getLiveItemInfo,
            selectedData,
            addNewLive,
            delLiveItem,
            updateLive
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LiveDetail))
