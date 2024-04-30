/**
 * Author：quboshen
 * Time：2020/5/6
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Row, Col, Button, message, Modal, Spin, Radio, Input } from 'antd'
import { message, Modal, Radio, Upload, Icon, Switch } from 'antd'
import { hashHistory } from 'react-router'
// import Cookies from 'js-cookie'
import {axiosAjax, auditStatus, URL, getSig, isPhoneAvailable, idCardVerify} from '../../../public/index'
// import CloseWindow from '../../../components/CloseWindow/index'
import '../index.scss'
const confirm = Modal.confirm
const RadioGroup = Radio.Group
// const { TextArea } = Input

class OfficialAuditAdd extends Component {
    constructor () {
        super()
        this.state = {
            loading: false,
            previewVisible: false,
            previewImage: '',
            noPassReason: '',
            nickName: '',
            ifAddV: 1,
            phoneNum: '',
            tipsPhone: '',
            identityAuth: 0,
            closeLoading: false,
            identityDesc: '',
            introduce: '',
            realFollow: 0,
            jiaFollow: 0,
            allFollow: 0,
            tipsNickName: '',
            tipsIdentityDesc: '',
            iconUrl: '',
            iconUrlFileList: [],
            tipsIconUrl: '',
            authorPhoneNum: '',
            tipsAuthorPhone: '',
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

    // getReason = (e) => {
    //     this.setState({
    //         noPassReason: e.target.value
    //     })
    // }

    // 确定修改
    handleSubmit = (e) => {
        const This = this
        e.preventDefault()
        const { ifAddV, phoneNum, identityAuth, nickName, identityDesc, introduce, iconUrl, authorPhoneNum, identityName, identityNum, idUserUrl, whiteListFlag, jiaFollow } = this.state

        // 验证判断
        let sendOk = true
        // 验证注册账号
        if (phoneNum === '') {
            this.setState({
                tipsPhone: '注册账号不能为空'
            })
            message.error('注册账号不能为空')
            sendOk = false
        } else if (!isPhoneAvailable(phoneNum)) {
            this.setState({
                tipsPhone: '请输入正确的手机号'
            })
            message.error('请输入正确的手机号')
            sendOk = false
        } else {
            // 手机号验证通过
            this.setState({
                tipsPhone: ''
            })

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
        }

        if (sendOk) {
            const params = {
                type: ifAddV,
                phoneNum: phoneNum,
                identityAuth: identityAuth,
                nickName: nickName,
                identityDesc: identityDesc,
                introduce: introduce,
                iconUrl: iconUrl,
                authorPhoneNum: authorPhoneNum,
                identityName: identityName,
                identityNum: identityNum,
                idUserUrl: idUserUrl,
                jiaFollow: jiaFollow,
                whiteListFlag: whiteListFlag
            }

            confirm({
                title: '提示',
                content: '确认要添加吗?',
                onOk () {
                    axiosAjax('POST', '/account/addrealauth', params, (res) => {
                        if (res.code === 1) {
                            message.success('操作成功！')
                            This.closeWindow()
                        } else {
                            message.error(res.msg)
                        }
                    })
                }
            })
        }
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

    // 接收 phoneNum 注册手机号的输入变化
    onPhoneNumChange = (event) => {
        const phoneNumberValue = this.trim(event.target.value)
        this.setState({
            phoneNum: phoneNumberValue
        })

        if (phoneNumberValue === '') {
            this.setState({
                tipsPhone: '注册手机号不能为空'
            })
        } else if (!isPhoneAvailable(phoneNumberValue)) {
            this.setState({
                tipsPhone: '请输入正确的手机号'
            })
        } else {
            this.setState({
                tipsPhone: ''
            })
        }
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
                    tipsAuthorPhone: '请输入正确的手机号'
                })
            } else {
                this.setState({
                    tipsAuthorPhone: ''
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
    }

    render () {
        // const classifyItem = ['其他', '媒体', 'KOL', '投研', '项目', '行情', '社群']
        // const typeItem = ['普通', '个人', '媒体', '机构']
        const {
            ifAddV,
            phoneNum,
            tipsPhone,
            nickName,
            jiaFollow,
            allFollow,
            tipsNickName,
            identityDesc,
            tipsIdentityDesc,
            introduce,
            iconUrlFileList,
            tipsIconUrl,
            authorPhoneNum,
            tipsAuthorPhone,
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
            <div className="audit-detail">
                <div className="auditDetailItem">
                    <div className="auditDetailItemLeft">
                        <h1>认证状态</h1>
                    </div>
                    <div className="auditDetailItemRight"></div>
                </div>
                <div className="auditDetailItem">
                    <div className="auditDetailItemLeft">
                        <h2>认证类型：</h2>
                    </div>
                    <div className="auditDetailItemRight">
                        <RadioGroup onChange={this.addVChange} value={ifAddV}>
                            <Radio className="radioText" value={1}>个人</Radio>
                            <Radio className="radioText" value={2}>媒体</Radio>
                            <Radio className="radioText" value={3}>机构</Radio>
                        </RadioGroup>
                    </div>
                </div>
                <div className="auditDetailItem">
                    <div className="auditDetailItemLeft">
                        <h2><span>*</span>注册账号：</h2>
                    </div>
                    <div className="auditDetailItemRight">
                        <input className={`auditDetailItemRightInput ${tipsPhone !== '' ? 'tips' : ''}`}
                            value={phoneNum}
                            onChange={this.onPhoneNumChange}
                            name="phoneNum"
                            type="text"
                        ></input>
                        <p>输入注册账号手机号</p>
                        <p className="tips">{tipsPhone}</p>
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
                        <h3>0</h3>
                    </div>
                </div>
                <div className="auditDetailItem">
                    <div className="auditDetailItemLeft">
                        <h2>添加粉丝数：</h2>
                    </div>
                    <div className="auditDetailItemRight">
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
                        <Upload
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
                        <input className={`auditDetailItemRightInput ${tipsAuthorPhone !== '' ? 'tips' : ''}`}
                            value={authorPhoneNum}
                            onChange={this.onAuthorPhoneChange}
                            name="authorPhoneNum"
                            type="text"
                        ></input>
                        <p>输入常用的手机号</p>
                        <p className="tips">{tipsAuthorPhone}</p>
                    </div>
                </div>
                <div className="auditDetailItem">
                    <div className="auditDetailItemLeft">
                        <h2>{`${ifAddV === 1 ? '姓名：' : '组织/企业名称：'}`}</h2>
                    </div>
                    <div className="auditDetailItemRight">
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
                        <Upload
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
                    <button onClick={this.handleSubmit}>确认添加</button>
                    <button className="cancel" onClick={this.closeWindow}>返回</button>
                </div>
                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
                </Modal>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(OfficialAuditAdd)
