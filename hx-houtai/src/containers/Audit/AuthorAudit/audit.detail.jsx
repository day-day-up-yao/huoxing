/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 * ----------------------
 * 修改：quboshen
 * 时间：2020/5/12
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Row, Col, Button, message, Modal, Spin, Radio, Input } from 'antd'
import { message, Modal, Spin, Radio, Input, Select } from 'antd'
import { hashHistory } from 'react-router'
import {axiosAjax, auditStatus, formatDate} from '../../../public/index'
// import CloseWindow from '../../../components/CloseWindow/index'
import '../index.scss'
const confirm = Modal.confirm
const RadioGroup = Radio.Group
const { TextArea } = Input
const Option = Select.Option

const reasonArr = ['上传资料不符合要求', '上传照片模糊', '用户信息与照片信息不匹配', '暂不通过行情分析认证申请', '与区块链无关', '其它']

class AuditDetail extends Component {
    constructor () {
        super()
        this.state = {
            'isEdit': false,
            loading: false,
            previewVisible: false,
            previewImage: '',
            noPassReason: '',
            rejectSelectVal: '',
            doRejectShow: false, // 驳回弹框是否显示
            paramsValue: null, // 提交参数
            ifAddV: JSON.parse(window.sessionStorage.getItem('hx_identify_info')).type ? parseInt(JSON.parse(window.sessionStorage.getItem('hx_identify_info')).type) : 1,
            identityAuth: JSON.parse(window.sessionStorage.getItem('hx_identify_info')).identityAuth ? parseInt(JSON.parse(window.sessionStorage.getItem('hx_identify_info')).identityAuth) : 0,
            closeLoading: false,
            identityDesc: JSON.parse(window.sessionStorage.getItem('hx_identify_info')).identityDesc ? (JSON.parse(window.sessionStorage.getItem('hx_identify_info')).identityDesc) : ''
        }
    }

    // 删除
    // _delAudit () {
    //     const {location} = this.props
    //     const _this = this
    //     confirm({
    //         title: '提示',
    //         content: `确认要删除吗 ?`,
    //         onOk () {
    //             let sendData = {
    //                 status: -1,
    //                 'id': location.query.id
    //             }
    //             axiosAjax('POST', '/news/status', {...sendData}, (res) => {
    //                 if (res.code === 1) {
    //                     message.success('删除成功')
    //                     _this.closeWindow()
    //                 } else {
    //                     message.error(res.msg)
    //                 }
    //             })
    //         }
    //     })
    // }

    closeWindow = () => {
        // this.setState({
        //     closeLoading: true
        // })

        hashHistory.push('/audit-identify')
    }

    // 禁评、取消禁评
    // _forbidcomment (forbidcomment) {
    //     const {location} = this.props
    //     let sendData = {
    //         'appId': $.cookie('gameId'),
    //         'id': location.query.id,
    //         'operate': !parseInt(forbidcomment) ? '1' : '0'
    //     }
    //     axiosAjax('audit', '/audit/forbidcomment', sendData, (res) => {
    //         if (res.status === 200) {
    //             // this.doSearch(this.state.type)
    //         } else {
    //             message.error(res.msg)
    //         }
    //     })
    // }

    // 置顶
    // _isTop (istop) {
    //     const {location} = this.props
    //     let sendData = {
    //         'appId': $.cookie('gameId'),
    //         'id': location.query.id,
    //         'operate': !parseInt(istop) ? '1' : '0'
    //     }
    //     axiosAjax('audit', '/audit/top', sendData, (res) => {
    //         if (res.status === 200) {
    //             // this.doSearch(this.state.type)
    //         } else {
    //             message.error(res.msg)
    //         }
    //     })
    // }

    // 发布
    /*
    sendAudit (sendData) {
        const {location} = this.props
        let _data = {
            'appId': $.cookie('gameId'),
            'id': location.query.id,
            'title': sendData.auditTitle,
            'content': `${sendData.auditContent}`
        }

        axiosAjax('audit', '/audit/update', _data, (res) => {
            if (res.status === 200) {
                message.success('修改成功！')
                // hashHistory.push('/audit-list')
                dispatch(selectedData({'id': location.query.id}))
                this.setState({'isEdit': false})
            } else {
                message.error(res.msg)
            }
        })

    }
*/
    // 内容格式化
    createMarkup (str) { return {__html: str} }

    auditStatus (id) {
        let name = ''
        auditStatus.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    getReason = (e) => {
        this.setState({
            noPassReason: e.target.value
        })
    }
    doRejectSelect = (value) => {
        this.setState({
            noPassReason: reasonArr[value], // 当前选择驳回原因
            rejectSelectVal: value
        })
    }
    doReject () {
        this.setState({
            noPassReason: reasonArr[0], // 默认驳回原因
            rejectSelectVal: '0', // 驳回当前选择项
            doRejectShow: true
        })
    }
    doRejectDo = (e) => {
        e.preventDefault()
        const This = this
        if (this.state.noPassReason.trim() !== '') {
            this.setState({
                loading: true
            })
            this.state.paramsValue.noPassReason = This.state.noPassReason
            this.state.paramsValue.ifAddV = 0
            axiosAjax('get', '/account/updateauthstate', this.state.paramsValue, (res) => {
                if (res.code === 1) {
                    message.success('操作成功！')
                    This.closeWindow()
                    // Cookies.remove('hx_identify_info')
                    // hashHistory.push('/audit-identify')
                } else {
                    message.error(res.msg)
                }
            })
        } else {
            message.error('请填写驳回原因!')
        }
    }

    handleSubmit = (e) => {
        let status = e.target.getAttribute('data-status')
        e.preventDefault()
        const This = this
        const selectData = JSON.parse(window.sessionStorage.getItem('hx_identify_info')) || this.props.selectData
        const params = {
            passportId: selectData.passportid,
            ifAddV: this.state.ifAddV,
            identityAuth: this.state.identityAuth,
            nickName: selectData.nickName,
            identityDesc: this.state.identityDesc,
            introduce: selectData.introduce,
            iconUrl: selectData.iconUrl,
            authorPhone: selectData.authorPhone,
            identityName: selectData.identityName,
            identityNum: selectData.identityNum,
            idUserUrl: selectData.idUserUrl,
            whiteListFlag: selectData.whiteListFlag,
            state: parseInt(status),
            noPassReason: ''
        }

        this.setState({
            paramsValue: params // 当前参数，驳回用
        }, () => {
            if (parseInt(status) === -1) {
                this.doReject()
            } else {
                confirm({
                    title: '提示',
                    content: `确认要${parseInt(status) === 1 ? '通过审核' : '驳回请求'}吗 ?`,
                    onOk () {
                        axiosAjax('get', '/account/updateauthstate', params, (res) => {
                            if (res.code === 1) {
                                message.success('操作成功！')
                                This.closeWindow()
                                // Cookies.remove('hx_identify_info')
                                // hashHistory.push('/audit-identify')
                            } else {
                                message.error(res.msg)
                            }
                        })
                    }
                })
            }
        })

        // confirm({
        //     title: '提示',
        //     content: `确认要${parseInt(status) === 1 ? '通过审核' : '驳回请求'}吗 ?`,
        //     onOk () {
        //         if (status === '-1') {
        //             confirm({
        //                 title: '提示',
        //                 content: <div className="modal-input">
        //                     <span style={{marginRight: 10}}>请填写认证不通过原因：</span>
        //                     <TextArea rows={3} autoFocus onChange={(e) => {
        //                         This.getReason(e)
        //                     }}/>
        //                 </div>,
        //                 onOk () {
        //                     if (This.state.noPassReason.trim() !== '') {
        //                         This.setState({
        //                             loading: true
        //                         })
        //                         params.noPassReason = This.state.noPassReason
        //                         params.ifAddV = 0
        //                         axiosAjax('get', '/account/updateauthstate', params, (res) => {
        //                             if (res.code === 1) {
        //                                 message.success('操作成功！')
        //                                 This.closeWindow()
        //                                 // Cookies.remove('hx_identify_info')
        //                                 // hashHistory.push('/audit-identify')
        //                             } else {
        //                                 message.error(res.msg)
        //                             }
        //                         })
        //                     } else {
        //                         message.error('请填写驳回原因!')
        //                     }
        //                 }
        //             })
        //         } else {
        //             axiosAjax('get', '/account/updateauthstate', params, (res) => {
        //                 if (res.code === 1) {
        //                     message.success('操作成功！')
        //                     This.closeWindow()
        //                     // Cookies.remove('hx_identify_info')
        //                     // hashHistory.push('/audit-identify')
        //                 } else {
        //                     message.error(res.msg)
        //                 }
        //             })
        //         }
        //     }
        // })
    }

    handleCancel = () => this.setState({ previewVisible: false })

    showModal = (src) => {
        this.setState({
            previewVisible: true,
            previewImage: src
        })
    }

    // onChangeResult = (e) => {
    //     this.setState({
    //         reason: e.target.value
    //     })
    // }

    addVChange = (e) => {
        this.setState({
            ifAddV: e.target.value
        })
    }

    // 改变认证类型
    changeIdentityAuth = (e) => {
        console.log(e.target.value)
        this.setState({
            identityAuth: e.target.value
        })
    }

    // changeIdentityDesc= (e) => {
    //     this.setState({
    //         identityDesc: e.target.value
    //     })
    // }

    // 初始化赋值
    componentWillMount () {
        const infoData = JSON.parse(window.sessionStorage.getItem('hx_identify_info'))
        const selectData = this.props.selectData
        this.setState({
            ifAddV: infoData.type ? parseInt(infoData.type) : (selectData.type ? parseInt(selectData.type) : 1),
            identityAuth: infoData.identityAuth ? parseInt(infoData.identityAuth) : (selectData.identityAuth ? parseInt(selectData.identityAuth) : 0),
            identityDesc: infoData.identityDesc ? infoData.identityDesc : (selectData.identityDesc ? selectData.identityDesc : '')
        })
    }

    render () {
        // const cols = {
        //     span: 16,
        //     offset: 1
        // }
        const selectData = JSON.parse(window.sessionStorage.getItem('hx_identify_info')) || this.props.selectData
        // const classifyItem = ['其他', '媒体', 'KOL', '投研', '项目', '行情', '社群']
        // const typeItem = ['普通', '个人', '媒体', '机构']
        return <div>
            <Spin spinning={this.state.loading} size="large">
                {selectData.passportid ? <div className="audit-detail">
                    {/*
                    <Row>
                        <Col span={1}>
                            <Button shape="circle" icon="arrow-left" onClick={() => hashHistory.goBack()} />
                        </Col>
                    </Row>
                    */}
                    <div className="auditDetailItem otherTop">
                        <div className="auditDetailItemLeft">
                            <h1>认证状态</h1>
                        </div>
                        <div className="auditDetailItemRight"></div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>状态：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {selectData.state === -1 ? <h3 className="nopass">{this.auditStatus(selectData.state)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectData.noPassReason}</h3> : <h3>{this.auditStatus(selectData.state)}</h3>}
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>认证类型：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <h3>{typeItem[selectData.type]}</h3> */}
                            <RadioGroup onChange={this.addVChange} value={this.state.ifAddV}>
                                <Radio className="radioText" value={1}>个人</Radio>
                                <Radio className="radioText" value={2}>媒体</Radio>
                                <Radio className="radioText" value={3}>机构</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>注册账号：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{selectData.phoneNum}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>用户ID：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{selectData.passportid}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>提交时间：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{formatDate(selectData.createTime)}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem otherTop">
                        <div className="auditDetailItemLeft">
                            <h1>基础信息</h1>
                        </div>
                        <div className="auditDetailItemRight"></div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>分类：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <h3>{classifyItem[selectData.identityAuth]}</h3> */}
                            <RadioGroup onChange={this.changeIdentityAuth} value={this.state.identityAuth}>
                                <Radio className="radioText" value={1}>媒体</Radio>
                                <Radio className="radioText" value={2}>KOL</Radio>
                                <Radio className="radioText" value={3}>投研</Radio>
                                <Radio className="radioText" value={4}>项目</Radio>
                                <Radio className="radioText" value={5}>行情</Radio>
                                <Radio className="radioText" value={6}>社群</Radio>
                                <Radio className="radioText" value={0}>其他</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>MarsBit专栏昵称：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{selectData.nickName}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>MarsBit专栏签名：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{selectData.identityDesc}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>MarsBit专栏介绍：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{selectData.introduce}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>作者头像：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <img className="auditDetailItemRightImg1" onClick={() => this.showModal(selectData.iconUrl)} src={selectData.iconUrl}/>
                        </div>
                    </div>
                    <div className="auditDetailItem otherTop">
                        <div className="auditDetailItemLeft">
                            <h1>认证信息</h1>
                        </div>
                        <div className="auditDetailItemRight"></div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>联系电话：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{selectData.authorPhoneNum}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>{`${selectData.type === 1 ? '姓名：' : '组织/企业名称：'}`}</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{selectData.identityName}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>{`${selectData.type === 1 ? '身份证号：' : '组织机构代码/营业执照编号：'}`}</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{selectData.identityNum}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>{`${selectData.type === 1 ? '手持身份证：' : '组织机构代码证/营业执照影印件：'}`}</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {selectData.idUserUrl !== '' ? <img className="auditDetailItemRightImg2" onClick={() => this.showModal(selectData.idUserUrl)} src={selectData.idUserUrl}/> : null}
                        </div>
                    </div>
                    <div className="auditDetailBtn">
                        <button data-status='1' onClick={this.handleSubmit}>审核通过</button>
                        <button data-status='-1' onClick={this.handleSubmit}>审核驳回</button>
                        <button className="cancel" onClick={this.closeWindow}>取消</button>
                    </div>
                    {/* <Row className="audit-title" style={{margin: '20px 0 0', borderTop: '1px solid #eee'}}>
                        <Col className="section" {...cols}>
                            <span className="name">姓名：</span>
                            <span className="desc">{`${selectData.identityName}`} </span>
                        </Col>
                    </Row>
                    <Row className="audit-title" style={{margin: '0 0'}}>
                        <Col className="section" {...cols}>
                            <span className="name">证件号：</span>
                            <span className="desc">{`${selectData.identityNum}`} </span>
                        </Col>
                    </Row>
                    <Row className="audit-cover-img">
                        <Col className="section">
                            <span className="name">正面照：</span>
                            <img className="desc" onClick={() => this.showModal(selectData.idFaceUrl)} src={selectData.idFaceUrl}/>
                        </Col>
                    </Row>
                    {selectData.idBackUrl && <Row className="audit-cover-img">
                        <Col className="section">
                            <span className="name">身份证反面：</span>
                            <img className="desc" onClick={() => this.showModal(selectData.idBackUrl)} src={selectData.idBackUrl}/>
                        </Col>
                    </Row>}
                    {selectData.idUserUrl && <Row className="audit-cover-img">
                        <Col className="section">
                            <span className="name">手持身份证：</span>
                            {selectData.idUserUrl ? <img className="desc" onClick={() => this.showModal(selectData.idUserUrl)} src={selectData.idUserUrl}/> : <span style={{fontSize: 15, paddingLeft: 5}}>无</span>}
                        </Col>
                    </Row>}

                    <Row className="" style={{margin: '0 0 10', borderTop: '1px solid #eee'}}>
                        <Col className="section">
                            <span className="name" style={{marginRight: 10}}>认证类型：</span>
                            <RadioGroup onChange={this.addVChange} value={this.state.ifAddV}>
                                <Radio value={0}>普通用户</Radio>
                                <Radio value={1}>个人大 V</Radio>
                                <Radio value={2}>媒体大 V</Radio>
                                <Radio value={3}>企业/机构大 V</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row className="" style={{margin: '0 0 10px'}}>
                        <Col className="section">
                            <span className="name" style={{marginRight: 10}}>身份属性：</span>
                            <RadioGroup onChange={this.changeIdentityAuth} value={this.state.identityAuth}>
                                <Radio value={0}>普通用户</Radio>
                                <Radio value={1}>媒体</Radio>
                                <Radio value={2}>KOL</Radio>
                                <Radio value={3}>投研</Radio>
                                <Radio value={4}>项目</Radio>
                                <Radio value={6}>社群</Radio>
                                <Radio value={5}>行情</Radio>
                                <Radio value={0}>其他</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row className="" style={{margin: '0 0 20px', borderBottom: '1px solid #eee'}}>
                        <Col className="section">
                            <span className="name" style={{marginRight: 10}}>认证信息：</span>
                            <Input
                                style={{width: 500}}
                                placeholder="认证信息"
                                onChange={this.changeIdentityDesc}
                                value={this.state.identityDesc}
                            />
                        </Col>
                    </Row> */}
                    <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
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
                            <span style={{marginRight: 10}}>请{parseInt(this.state.rejectSelectVal) === reasonArr.length - 1 ? '填写' : '选择'}文章不通过原因：{this.state.noPassReason || ''}</span>
                            <Select value={this.state.rejectSelectVal} style={{ width: 280 }} onChange={this.doRejectSelect}>
                                {reasonArr.map(function (item, index) {
                                    return <Option value={`${index}`} key={index}>{item}</Option>
                                })}
                            </Select>
                            <TextArea style={{display: parseInt(this.state.rejectSelectVal) === reasonArr.length - 1 ? 'block' : 'none'}} rows={3} autoFocus onChange={(e) => { this.getReason(e) }}/>
                        </div>
                    </Modal>
                    {/* 帖子内容
                     <Row style={{margin: '20px 0'}}>
                     <Col style={{fontSize: '15px', fontWeight: 'bolder', padding: '5px', color: '#000'}}>驳回理由: </Col>
                     <TextArea rows={4} defaultValue={this.state.reason} onChange={this.onChangeResult} />
                     </Row>
                     */}
                    {/* <Button type="primary" data-status='1' onClick={this.handleSubmit} style={{marginRight: '10px'}}>审核通过</Button>
                    <Button type="primary" data-status='-1' onClick={this.handleSubmit} style={{marginRight: '10px'}}>审核驳回</Button>
                    <Button type="primary" className="cancel" onClick={this.closeWindow}>取消</Button> */}
                </div> : <div style={{height: 300}}>加载中...</div>}
            </Spin>
            {/* {this.state.closeLoading && <CloseWindow handleCancel={(timer) => {
                clearInterval(timer)
                this.setState({
                    closeLoading: false
                })
            }} closeLoading = {this.state.closeLoading}/>} */}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        selectData: state.auditInfo.selectedData
    }
}

export default connect(mapStateToProps)(AuditDetail)
