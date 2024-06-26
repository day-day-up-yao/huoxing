/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Button, message, Modal, Tag, Spin} from 'antd'
import {hashHistory} from 'react-router'
import IconItem from '../../components/icon/icon'
import CloseWindow from '../../components/CloseWindow/index'
import {getVideoItemInfo} from '../../actions/video/video.action'
import {axiosAjax, channelIdOptions, isJsonString, formatDate} from '../../public/index'
import './video.scss'
import '../../public/simditor/simditor.css'

const confirm = Modal.confirm

class VideoDetail extends Component {
    constructor () {
        super()
        this.state = {
            'isEdit': false,
            loading: true,
            previewVisible: false,
            previewImage: '',
            closeLoading: false
        }
    }

    componentWillMount () {
        const {dispatch, location} = this.props
        dispatch(getVideoItemInfo({'id': location.query.id}, () => {
            this.setState({
                loading: false
            })
        }))
    }

    closeWindow = () => {
        this.setState({
            closeLoading: true
        })
    }

    // 删除
    _delVideo () {
        const {location} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    status: -1,
                    'id': location.query.id
                }
                axiosAjax('POST', '/video/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.closeWindow()
                        // hashHistory.goBack()
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 禁评、取消禁评
    _forbidcomment (forbidcomment) {
        const {location, dispatch} = this.props
        let sendData = {
            'appId': $.cookie('gameId'),
            'id': location.query.id,
            'operate': !parseInt(forbidcomment) ? '1' : '0'
        }
        axiosAjax('post', '/post/forbidcomment', sendData, (res) => {
            if (res.status === 200) {
                // this.doSearch(this.state.type)
                dispatch(getVideoItemInfo({'id': location.query.id}))
            } else {
                message.error(res.msg)
            }
        })
    }

    // 置顶
    _isTop (istop) {
        const {location, dispatch} = this.props
        let sendData = {
            'appId': $.cookie('gameId'),
            'id': location.query.id,
            'operate': !parseInt(istop) ? '1' : '0'
        }
        axiosAjax('post', '/post/top', sendData, (res) => {
            if (res.status === 200) {
                // this.doSearch(this.state.type)
                dispatch(getVideoItemInfo({'id': location.query.id}))
            } else {
                message.error(res.msg)
            }
        })
    }

    // 内容格式化
    createMarkup (str) {
        return {__html: str}
    }

    channelName (id) {
        let name = ''
        channelIdOptions.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    edit = () => {
        const {info} = this.props
        hashHistory.push({
            pathname: '/video-send',
            query: {id: info.id}
        })
    }

    // 上传图片
    handleCancel = () => this.setState({previewVisible: false})

    showModal = (src) => {
        this.setState({
            previewVisible: true,
            previewImage: src
        })
    }

    render () {
        const col = {
            md: {
                span: 15
            },
            lg: {
                span: 7,
                offset: 1
            }
        }
        const {info} = this.props
        // console.log(info.audio)
        return <div>
            <Spin spinning={this.state.loading} size="large">
                {info.id ? <div className="video-detail">
                    <Row>
                        {/*
                        <Col span={1}>
                            <Button shape="circle" icon="arrow-left" onClick={() => hashHistory.goBack()}/>
                        </Col>
                        */}
                        <Col className="">
                            <Button onClick={this.edit} className="mr10" type="primary"><IconItem
                                type="icon-edit"/>编辑</Button>
                            {/*
                             <Button onClick={() => this._isTop(info.isTop)} className="mr10"><IconItem type={info.isTop === '1' ? 'icon-cancel-top' : 'icon-to-top'}/>{info.isTop === '1' ? '取消置顶' : '置顶'}</Button>
                             <Button onClick={() => this._forbidcomment(info.forbidComment)} className="mr10"><IconItem type={info.forbidComment === '1' ? 'icon-msg' : 'icon-no-msg'}/>{info.forbidComment === '1' ? '取消禁评' : '禁评'}</Button>
                             */}
                            <Button onClick={() => this._delVideo()}><IconItem type="icon-clear"/>删除</Button>
                        </Col>
                    </Row>
                    <Row className="news-detail-info">
                        <Col className="section" {...col}>
                            <span className="name">作者：</span>
                            <span className="desc">{`${info.author}`} </span>
                        </Col>
                        <Col className="section" {...col}>
                            <span className="name">视频来源：</span>
                            <span className="desc">{info.source} </span>
                        </Col>
                        <Col className="section" {...col}>
                            <span className="name">发布时间：</span>
                            <span className="desc">{formatDate(info.publishTime)} </span>
                        </Col>
                    </Row>
                    <Row className="news-tags">
                        <Col className="section">
                            <span className="name">标签：</span>
                            {info.tags && info.tags.split(',').map((item, index) => {
                                return <Tag key={index} color="blue" style={{marginLeft: 5}}>{item}</Tag>
                            })}
                        </Col>
                    </Row>
                    <Row className="news-title">
                        <Col className="section">
                            <span className="name">视频标题：</span>
                            <span className="desc">{`${info.title}`} </span>
                        </Col>
                    </Row>
                    <Row className="news-summary">
                        <Col className="section">
                            <span className="name">视频简介：</span>
                            <span className="desc">{`${info.content}`} </span>
                        </Col>
                    </Row>
                    <Row className="news-summary">
                        <Col className="section">
                            <span className="name" style={{verticalAlign: 'middle'}}>视频：</span>
                            <ul className="desc" style={{
                                display: 'inline-block',
                                verticalAlign: 'middle'
                            }}>
                                {(() => {
                                    if (isJsonString(info.url)) {
                                        if (JSON.parse(info.url).length !== 0) {
                                            return JSON.parse(info.url).map(function (item, index) {
                                                return <li className="clearfix" key={index} style={{margin: '5px 0'}}>
                                                    <video width="200" style={{verticalAlign: 'middle'}} src={item.fileUrl} preload="metadata" controls="controls"></video>
                                                </li>
                                            })
                                        } else {
                                            return <span>暂无</span>
                                        }
                                    } else {
                                        return <span>暂无</span>
                                    }
                                })()}
                            </ul>
                        </Col>
                    </Row>
                    {isJsonString(info.coverPic) ? <div>
                        {(() => {
                            if (isJsonString(info.url)) {
                                if (JSON.parse(info.url).length !== 0) {
                                    return <Row className="news-cover-img">
                                        <Col className="section">
                                            <span className="name">PC-播放器封面：</span>
                                            <img
                                                className="desc" onClick={() => this.showModal(JSON.parse(info.coverPic).video_pc)}
                                                src={`${JSON.parse(info.coverPic).video_pc}`}/>
                                        </Col>
                                        <Col className="section">
                                            <span className="name">M-播放器封面：</span>
                                            <img
                                                className="desc" onClick={() => this.showModal(JSON.parse(info.coverPic).video_m)}
                                                src={`${JSON.parse(info.coverPic).video_m}`}/>
                                        </Col>
                                    </Row>
                                } else {
                                    return ''
                                }
                            } else {
                                return ''
                            }
                        })()}
                        <Row className="news-cover-img">
                            <Col className="section">
                                <span className="name">PC-缩略图：</span>
                                {
                                    (JSON.parse(info.coverPic).pc && JSON.parse(info.coverPic).pc !== '') ? <img
                                        className="desc"
                                        onClick={() => this.showModal(JSON.parse(info.coverPic).pc)}
                                        src={`${JSON.parse(info.coverPic).pc}`}/> : <span style={{padding: 6}}>
                                    暂无
                                    </span>
                                }
                            </Col>
                            <Col className="section">
                                <span className="name">PC-推荐缩略图：</span>
                                {
                                    (JSON.parse(info.coverPic).pc_recommend && JSON.parse(info.coverPic).pc_recommend !== '') ? <img
                                        className="desc"
                                        onClick={() => this.showModal(JSON.parse(info.coverPic).pc_recommend)}
                                        src={`${JSON.parse(info.coverPic).pc_recommend}`}/> : <span style={{padding: 6}}>
                                    暂无
                                    </span>
                                }
                            </Col>
                            <Col className="section">
                                <span className="name" style={{width: '125px', verticalAlign: 'top'}}>M-缩略图：</span>
                                {
                                    (JSON.parse(info.coverPic).wap_small && JSON.parse(info.coverPic).wap_small !== '') ? <img
                                        className="desc"
                                        onClick={() => this.showModal(JSON.parse(info.coverPic).wap_small)}
                                        src={`${JSON.parse(info.coverPic).wap_small}`}/> : <span style={{padding: 6}}>
                                    暂无
                                    </span>
                                }
                            </Col>
                            <Col className="section">
                                <span className="name" style={{width: '125px', verticalAlign: 'top'}}>M-推荐缩略图：</span>
                                {
                                    (JSON.parse(info.coverPic).wap_big && JSON.parse(info.coverPic).wap_big !== '') ? <img
                                        className="desc"
                                        onClick={() => this.showModal(JSON.parse(info.coverPic).wap_big)}
                                        src={`${JSON.parse(info.coverPic).wap_big}`}/> : <span style={{padding: 6}}>
                                    暂无
                                    </span>
                                }
                            </Col>
                        </Row>
                    </div> : <Row>
                        <Col className="section">
                            <span className="name">缩略图：</span>
                            <span>暂无</span>
                        </Col>
                    </Row>}

                    <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
                    </Modal>
                </div> : <div style={{height: 300}}>加载中...</div>}
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
        info: state.videoInfo.info
    }
}

export default connect(mapStateToProps)(VideoDetail)
