/**
 * Author：quboshen
 * Time：2020/5/6
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Row, Col, Button, message, Modal, Spin, Radio, Input } from 'antd'
import { message, Modal, Spin, Radio, Upload, Icon, Switch, Input } from 'antd'
import { hashHistory } from 'react-router'
import {axiosAjax, auditStatus, formatDate, URL, getSig, isPhoneAvailable, idCardVerify} from '../../../public/index'
// import CloseWindow from '../../../components/CloseWindow/index'
import '../index.scss'
const confirm = Modal.confirm
const RadioGroup = Radio.Group
const { TextArea } = Input

class OfficialAuditUpdate extends Component {
    constructor () {
        super()
        this.state = {
            loading: false,
            previewVisible: false,
            previewImage: '',
            noPassReason: '',
            nickName: '',
            ifAddV: 1,
            identityAuth: 0,
            closeLoading: false,
            identityDesc: '',
            introduce: '',
            realFollow: 0,
            jiaFollow: 0,
            oldFollow: 0,
            allFollow: 0,
            tipsNickName: '',
            tipsIdentityDesc: '',
            iconUrl: '',
            iconUrlFileList: [],
            tipsIconUrl: '',
            authorPhoneNum: '',
            tipsPhone: '',
            identityName: '',
            tipsIdentityName: '',
            identityNum: '',
            tipsIdentityNum: '',
            idUserUrlFileList: [],
            idUserUrl: '',
            tipsIdUserUrl: '',
            whiteListFlag: 0
        }
    }

    closeWindow = () => {
        // this.setState({
        //     closeLoading: true
        // })
        hashHistory.push('/audit-official')
    }

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

    // 确定修改
    handleSubmit = (e) => {
        const This = this
        e.preventDefault()
        const selectData = JSON.parse(window.sessionStorage.getItem('hx_identify_info')) || this.props.selectData
        const { ifAddV, identityAuth, nickName, identityDesc, introduce, iconUrl, authorPhoneNum, identityName, identityNum, idUserUrl, whiteListFlag, jiaFollow, oldFollow } = this.state

        // 验证判断
        let sendOk = true
        // 验证昵称
        if (nickName === '') {
            this.setState({
                tipsNickName: '昵称不能为空'
            })
            message.error('昵称不能为空')
            sendOk = false
        } else if (nickName.length > 16) {
            this.setState({
                tipsNickName: '昵称不能超过16个字'
            })
            message.error('昵称不能超过16个字')
            sendOk = false
        } else {
            // 昵称验证通过
            this.setState({
                tipsNickName: ''
            })

            // 验证签名
            if (identityDesc === '') {
                this.setState({
                    tipsIdentityDesc: 'MarsBit专栏签名不能为空'
                })
                message.error('MarsBit专栏签名不能为空')
                sendOk = false
            } else if (identityDesc.length < 5 || identityDesc.length > 20) {
                this.setState({
                    tipsIdentityDesc: 'MarsBit专栏签名请在5-20个字以内'
                })
                message.error('MarsBit专栏签名不能为空')
                sendOk = false
            } else {
                // MarsBit专栏签名验证通过
                this.setState({
                    tipsIdentityDesc: ''
                })

                // 验证头像
                if (iconUrl === '') {
                    this.setState({
                        tipsIconUrl: '请上传头像图片'
                    })
                    message.error('请上传头像图片')
                    sendOk = false
                } else {
                    // 头像验证通过
                    this.setState({
                        tipsIconUrl: ''
                    })
                }
            }
        }

        if (sendOk) {
            const params = {
                passportId: selectData.passportid,
                ifAddV: ifAddV,
                identityAuth: identityAuth,
                nickName: nickName,
                identityDesc: identityDesc,
                introduce: introduce,
                iconUrl: iconUrl,
                authorPhoneNum: authorPhoneNum,
                identityName: identityName,
                identityNum: identityNum,
                idUserUrl: idUserUrl,
                whiteListFlag: whiteListFlag
            }

            confirm({
                title: '提示',
                content: '确认要修改吗?',
                onOk () {
                    This.setState({
                        loading: true
                    })
                    axiosAjax('POST', '/account/updaterealauth', params, (res) => {
                        if (res.code === 1) {
                            if (oldFollow === jiaFollow) {
                                message.success('操作成功！')
                                This.closeWindow()
                            } else {
                                axiosAjax('post', '/account/addfollow', {phoneNum: selectData.phoneNum, followCount: jiaFollow}, (data) => {
                                    if (data.code === 1) {
                                        message.success('操作成功！')
                                        This.closeWindow()
                                    } else {
                                        message.error('粉丝修改失败')
                                        This.setState({
                                            loading: false
                                        })
                                    }
                                })
                            }
                        } else {
                            message.error(res.msg)
                            This.setState({
                                loading: false
                            })
                        }
                    })
                }
            })
        }
    }

    // 取消认证
    handleSubmit2 = () => {
        const selectData = JSON.parse(window.sessionStorage.getItem('hx_identify_info')) || this.props.selectData
        const { ifAddV, identityAuth, nickName, identityDesc, introduce, iconUrl, authorPhoneNum, identityName, identityNum, idUserUrl, whiteListFlag } = this.state

        const This = this
        const params = {
            passportId: selectData.passportid,
            ifAddV: ifAddV,
            identityAuth: identityAuth,
            nickName: nickName,
            identityDesc: identityDesc,
            introduce: introduce,
            iconUrl: iconUrl,
            authorPhoneNum: authorPhoneNum,
            identityName: identityName,
            identityNum: identityNum,
            idUserUrl: idUserUrl,
            whiteListFlag: whiteListFlag,
            noPassReason: '',
            state: -1
        }
        confirm({
            title: '提示',
            content: '确认要取消认证吗 ?',
            onOk () {
                confirm({
                    title: '提示',
                    content: <div className="modal-input">
                        <span style={{marginRight: 10}}>请填写认证不通过原因：</span>
                        <TextArea rows={3} autoFocus onChange={(e) => {
                            This.getReason(e)
                        }}/>
                    </div>,
                    onOk () {
                        if (This.state.noPassReason.trim() !== '') {
                            This.setState({
                                loading: true
                            })
                            params.noPassReason = This.state.noPassReason
                            params.ifAddV = 0
                            axiosAjax('get', '/account/updateauthstate', params, (res) => {
                                if (res.code === 1) {
                                    message.success('操作成功！')
                                    This.closeWindow()
                                } else {
                                    message.error(res.msg)
                                    This.setState({
                                        loading: true
                                    })
                                }
                            })
                        } else {
                            message.error('请填写驳回原因!')
                        }
                    }
                })
            }
        })
    }

    handleCancel = () => this.setState({ previewVisible: false })

    // 展示图片
    showModal = (src) => {
        this.setState({
            previewVisible: true,
            previewImage: src
        })
    }

    // 展示图片
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }

    // 接收 iconUrl 头像图片变化
    onIconUrlChange = ({ file, fileList }) => {
        this.setState({
            iconUrlFileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                iconUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    iconUrl: file.response.obj,
                    tipsIconUrl: ''
                })
            } if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    iconUrl: '',
                    iconUrlFileList: [],
                    tipsIconUrl: '网络错误，上传失败！'
                })
            }
        }
    }

    // 接收 idUserUrl 证件图标变化
    onIdUserUrlChange = ({ file, fileList }) => {
        this.setState({
            idUserUrlFileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                idUserUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    idUserUrl: file.response.obj,
                    tipsIdUserUrl: ''
                })
            } if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    idUserUrl: '',
                    idUserUrlFileList: [],
                    tipsIdUserUrl: '网络错误，上传失败！'
                })
            }
        }
    }

    onChangeResult = (e) => {
        this.setState({
            reason: e.target.value
        })
    }

    // 改变认证类型
    addVChange = (e) => {
        this.setState({
            ifAddV: e.target.value
        })
    }

    // 改变分类
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

    // 去除字符串两边空格
    trim = (string) => {
        return string.replace(/(^\s*)|(\s*$)/g, '')
    }

    // 接收 jiaFollow 添加粉丝数的输入变化
    onJiaFollowChange = (event) => {
        event.target.value = event.target.value.replace(/[^\d]/g, '')
        this.setState({
            jiaFollow: parseInt(event.target.value === '' ? 0 : event.target.value),
            allFollow: parseInt(this.state.realFollow) + parseInt(event.target.value === '' ? 0 : event.target.value)
        })
    }

    // 接收 nickName 昵称的输入变化
    onNicknameChange = (event) => {
        const nickNameVal = this.trim(event.target.value)
        this.setState({
            nickName: nickNameVal
        })

        if (nickNameVal === '') {
            this.setState({
                tipsNickName: '昵称不能为空'
            })
        } else if (nickNameVal.length > 16) {
            this.setState({
                tipsNickName: '昵称不能超过16个字'
            })
        } else {
            this.setState({
                tipsNickName: ''
            })
        }
    }

    // 接收 iden MarsBit专栏签名的输入变化
    onIdentityDescChange = (event) => {
        const identityDescVal = this.trim(event.target.value)
        this.setState({
            identityDesc: identityDescVal
        })

        if (identityDescVal === '') {
            this.setState({
                tipsIdentityDesc: 'MarsBit专栏签名不能为空'
            })
        } else if (identityDescVal.length < 5 || identityDescVal.length > 20) {
            this.setState({
                tipsIdentityDesc: 'MarsBit专栏签名请在5-20个字以内'
            })
        } else {
            this.setState({
                tipsIdentityDesc: ''
            })
        }
    }

    // 接收 introduce MarsBit专栏简介的输入变化
    onIntroduceChange = (event) => {
        const introduceVal = this.trim(event.target.value)
        this.setState({
            introduce: introduceVal
        })
    }

    // 接收 authorPhoneNum 手机号的输入变化
    onAuthorPhoneChange = (event) => {
        const authorPhoneValue = this.trim(event.target.value)
        this.setState({
            authorPhoneNum: authorPhoneValue
        })

        if (authorPhoneValue !== '') {
            if (!isPhoneAvailable(authorPhoneValue)) {
                this.setState({
                    tipsPhone: '请输入正确的手机号'
                })
            } else {
                this.setState({
                    tipsPhone: ''
                })
            }
        }
    }

    // 接收 identityName 姓名的输入变化
    onIdentityNameChange = (event) => {
        const identityNameValue = this.trim(event.target.value)
        this.setState({
            identityName: identityNameValue
        })

        // if (identityNameValue === '') {
        //     this.setState({
        //         tipsIdentityName: `${this.state.ifAddV === 1 ? '姓名不能为空' : '组织/企业名称不能为空'}`
        //     })
        // } else {
        //     this.setState({
        //         tipsIdentityName: ''
        //     })
        // }
    }

    // 接收 identityNum 身份证的输入变化
    onIdentityNumChange = (event) => {
        const identityNumValue = this.trim(event.target.value)
        this.setState({
            identityNum: identityNumValue
        })

        if (identityNumValue !== '') {
            if (this.state.ifAddV === 1) {
                if (!idCardVerify(identityNumValue)) {
                    this.setState({
                        tipsIdentityNum: '请输入正确的身份证号'
                    })
                } else {
                    this.setState({
                        tipsIdentityNum: ''
                    })
                }
            }
        }
    }

    // 接收 whiteListFlag 白名单开关变化
    onWhiteListFlagChange = (event) => {
        if (event === true) {
            this.setState({
                whiteListFlag: 1
            })
        } else {
            this.setState({
                whiteListFlag: 0
            })
        }
    }

    // 初始化赋值
    componentWillMount () {
        const infoData = JSON.parse(window.sessionStorage.getItem('hx_identify_info'))
        const selectData = this.props.selectData
        this.setState({
            ifAddV: infoData.type ? parseInt(infoData.type) : (selectData.type ? parseInt(selectData.type) : 1),
            realFollow: infoData.realFollow ? parseInt(infoData.realFollow) : (selectData.realFollow ? parseInt(selectData.realFollow) : 0),
            jiaFollow: infoData.jiaFollow ? parseInt(infoData.jiaFollow) : (selectData.jiaFollow ? parseInt(selectData.jiaFollow) : 0),
            oldFollow: infoData.jiaFollow ? parseInt(infoData.jiaFollow) : (selectData.jiaFollow ? parseInt(selectData.jiaFollow) : 0),
            nickName: infoData.nickName ? infoData.nickName : (selectData.nickName ? selectData.nickName : ''),
            identityAuth: infoData.identityAuth ? parseInt(infoData.identityAuth) : (selectData.identityAuth ? parseInt(selectData.identityAuth) : 0),
            identityDesc: infoData.identityDesc ? infoData.identityDesc : (selectData.identityDesc ? selectData.identityDesc : ''),
            introduce: infoData.introduce ? infoData.introduce : (selectData.introduce ? selectData.introduce : ''),
            iconUrl: infoData.iconUrl ? infoData.iconUrl : (selectData.iconUrl ? selectData.iconUrl : ''),
            iconUrlFileList: (infoData.iconUrl || selectData.iconUrl) ? [{
                uid: 0,
                name: 'xxx.png',
                status: 'done',
                url: infoData.iconUrl ? (infoData.iconUrl) : selectData.iconUrl
            }] : [],
            authorPhoneNum: infoData.authorPhoneNum ? infoData.authorPhoneNum : (selectData.authorPhoneNum ? selectData.authorPhoneNum : ''),
            identityName: infoData.identityName ? infoData.identityName : (selectData.identityName ? selectData.identityName : ''),
            identityNum: infoData.identityNum ? infoData.identityNum : (selectData.identityNum ? selectData.identityNum : ''),
            idUserUrl: infoData.idUserUrl ? (infoData.idUserUrl) : (selectData.idUserUrl ? selectData.idUserUrl : (infoData.idFaceUrl ? (infoData.idFaceUrl) : (selectData.idFaceUrl ? selectData.idFaceUrl : ''))),
            idUserUrlFileList: (infoData.idUserUrl || selectData.idUserUrl || infoData.idFaceUrl || selectData.idFaceUrl) ? [{
                uid: 0,
                name: 'xxx.png',
                status: 'done',
                url: infoData.idUserUrl ? (infoData.idUserUrl) : (selectData.idUserUrl ? selectData.idUserUrl : (infoData.idFaceUrl ? (infoData.idFaceUrl) : (selectData.idFaceUrl ? selectData.idFaceUrl : '')))
            }] : [],
            whiteListFlag: infoData.whiteListFlag ? (infoData.whiteListFlag) : (selectData.whiteListFlag ? selectData.whiteListFlag : 0)
        }, () => {
            this.setState({
                allFollow: parseInt(this.state.realFollow) + parseInt(this.state.jiaFollow)
            })
        })
    }

    render () {
        const selectData = JSON.parse(window.sessionStorage.getItem('hx_identify_info')) || this.props.selectData
        // const classifyItem = ['其他', '媒体', 'KOL', '投研', '项目', '行情', '社群']
        // const typeItem = ['普通', '个人', '媒体', '机构']
        const {
            nickName,
            ifAddV,
            jiaFollow,
            allFollow,
            tipsNickName,
            identityDesc,
            tipsIdentityDesc,
            introduce,
            iconUrlFileList,
            tipsIconUrl,
            authorPhoneNum,
            tipsPhone,
            identityName,
            tipsIdentityName,
            identityNum,
            tipsIdentityNum,
            idUserUrlFileList,
            tipsIdUserUrl,
            whiteListFlag
        } = this.state
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传图片</div>
            </div>
        )
        const isWhiteListFlag = whiteListFlag === 1
        return <div>
            <Spin spinning={this.state.loading} size="large">
                {selectData.passportid ? <div className="audit-detail">
                    <div className="auditDetailItem">
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
                            <RadioGroup onChange={this.addVChange} value={ifAddV}>
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
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h1>粉丝管理</h1>
                        </div>
                        <div className="auditDetailItemRight"></div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>真实粉丝数：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{selectData.realFollow}</h3>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>添加粉丝数：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <h3>{selectData.jiaFollow}</h3> */}
                            <input className="auditDetailItemRightInput"
                                value={jiaFollow}
                                onChange={this.onJiaFollowChange}
                                name="jiaFollow"
                                type="text"
                            ></input>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>展示粉丝数：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <h3>{allFollow}</h3>
                            <p>展示粉丝数为真实粉丝数与添加粉丝数之和</p>
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
                            <h2><span>*</span>MarsBit专栏昵称：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <h3>{selectData.nickName}</h3> */}
                            <input className={`auditDetailItemRightInput ${tipsNickName !== '' ? 'tips' : ''}`}
                                value={nickName}
                                onChange={this.onNicknameChange}
                                name="nickName"
                                type="text"
                            ></input>
                            <p>1-16个字，使用与文章主题相关的名称，可有效提高内容点击量。例如：MarsBit行情</p>
                            <p className="tips">{tipsNickName}</p>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2><span>*</span>MarsBit专栏签名：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <h3>{selectData.identityDesc}</h3> */}
                            <input className={`auditDetailItemRightInput ${tipsIdentityDesc !== '' ? 'tips' : ''}`}
                                value={identityDesc}
                                onChange={this.onIdentityDescChange}
                                name="identityDesc"
                                type="text"
                            ></input>
                            <p>5-20个字，将显示在个人主页，签名准确描述文章风格，有助于加强读者对您的了解。示例：专注BTC行情分析</p>
                            <p className="tips">{tipsIdentityDesc}</p>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>MarsBit专栏介绍：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <h3>{selectData.introduce}</h3> */}
                            <textarea className='auditDetailItemRightTextarea'
                                value={introduce}
                                onChange={this.onIntroduceChange}
                                name="introduce"
                                maxLength="100"
                                type="text"
                            ></textarea>
                            <p>请输入MarsBit专栏介绍，保持100字以内</p>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2><span>*</span>作者头像：</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <img className="auditDetailItemRightImg1" onClick={() => this.showModal(selectData.iconUrl)} src={selectData.iconUrl}/> */}
                            <Upload
                                className="auditDetailItemRightImg3"
                                action={`${URL}/pic/upload`}
                                headers={{'Sign-Param': getSig()}}
                                name='uploadFile'
                                listType="picture-card"
                                fileList={iconUrlFileList}
                                onPreview={this.handlePreview}
                                onChange={this.onIconUrlChange}
                            >
                                {iconUrlFileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <p>请勿使用二维码、政治敏感及色情图片；</p>
                            <p>图片格式支持bmp、jpeg、jpg、png；200x200像素，大小不超过5M</p>
                            <p className="tips">{tipsIconUrl}</p>
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
                            {/* <h3>{selectData.authorPhoneNum}</h3> */}
                            <input className={`auditDetailItemRightInput ${tipsPhone !== '' ? 'tips' : ''}`}
                                value={authorPhoneNum}
                                onChange={this.onAuthorPhoneChange}
                                name="authorPhoneNum"
                                type="text"
                            ></input>
                            <p>输入常用的手机号</p>
                            <p className="tips">{tipsPhone}</p>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>{`${ifAddV === 1 ? '姓名：' : '组织/企业名称：'}`}</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <h3>{selectData.identityName}</h3> */}
                            <input className={`auditDetailItemRightInput ${tipsIdentityName !== '' ? 'tips' : ''}`}
                                value={identityName}
                                onChange={this.onIdentityNameChange}
                                name="identityName"
                                type="text"
                            ></input>
                            <p>{`${ifAddV === 1 ? '请与身份证姓名保持一致' : '请与营业执照上信息保持一致'}`}</p>
                            <p className="tips">{tipsIdentityName}</p>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>{`${ifAddV === 1 ? '身份证号：' : '组织机构代码/营业执照编号：'}`}</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <h3>{selectData.identityNum}</h3> */}
                            <input className={`auditDetailItemRightInput ${tipsIdentityNum !== '' ? 'tips' : ''}`}
                                value={identityNum}
                                onChange={this.onIdentityNumChange}
                                name="identityNum"
                                type="text"
                            ></input>
                            <p>{`${ifAddV === 1 ? '请确保身份证号和身份证姓名对应' : '请与营业执照上信息保持一致'}`}</p>
                            <p className="tips">{tipsIdentityNum}</p>
                        </div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>{`${ifAddV === 1 ? '手持身份证：' : '组织机构代码证/营业执照影印件：'}`}</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            {/* <img className="auditDetailItemRightImg2" onClick={() => this.showModal(selectData.idUserUrl)} src={selectData.idUserUrl}/> */}
                            <Upload
                                className="auditDetailItemRightImg4"
                                action={`${URL}/pic/upload`}
                                headers={{'Sign-Param': getSig()}}
                                name='uploadFile'
                                listType="picture-card"
                                fileList={idUserUrlFileList}
                                onPreview={this.handlePreview}
                                onChange={this.onIdUserUrlChange}
                            >
                                {idUserUrlFileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <p>请上传组织机构代码证或营业执照原件的彩色扫描件或复印件</p>
                            <p>请确保图片信息清晰可见，大小不超过5M</p>
                            <p className="tips">{tipsIdUserUrl}</p>
                        </div>
                    </div>
                    <div className="auditDetailItem otherTop">
                        <div className="auditDetailItemLeft">
                            <h1>用户权限</h1>
                        </div>
                        <div className="auditDetailItemRight"></div>
                    </div>
                    <div className="auditDetailItem">
                        <div className="auditDetailItemLeft">
                            <h2>白名单</h2>
                        </div>
                        <div className="auditDetailItemRight">
                            <div className="auditDetailItemRightSwitchBox">
                                <Switch onChange={this.onWhiteListFlagChange} defaultChecked={isWhiteListFlag}></Switch>
                            </div>
                        </div>
                    </div>
                    <div className="auditDetailBtn">
                        <button onClick={this.handleSubmit}>确认修改</button>
                        <button className="red" onClick={this.handleSubmit2}>取消认证</button>
                        <button className="cancel" onClick={this.closeWindow}>返回</button>
                    </div>
                    <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
                    </Modal>
                </div> : <div style={{height: 300}}>加载中...</div>}
            </Spin>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        selectData: state.auditInfo.selectedData
    }
}

export default connect(mapStateToProps)(OfficialAuditUpdate)
