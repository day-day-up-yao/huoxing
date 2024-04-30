import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Form, Tag, Button, Modal, Radio, Select, message} from 'antd'
import {getUserLiveItemInfo} from '../../actions/newlive/newlive.action' // selectedData
import {getChatLivelist, selectData} from '../../actions/newlive/livechat.action' // addBlackUser
import './index.scss'
import moment from 'moment'
import { axiosAjax } from '../../public'
const confirm = Modal.confirm
const RadioGroup = Radio.Group
const {Option} = Select

class ChatLiveIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            liveStatus: '',
            liveTitle: '',
            name: '',
            status: '',
            globalForbidFlag: 1,
            block: false,
            ban: false,
            radioValue: ''
        }
    }

    componentWillMount () {
        this.setState({
            loading: true
        })
        const {dispatch, location} = this.props
        dispatch(getChatLivelist('get', {'roomId': location.query.id, 'pageSize': 99999, search: ''}, (data) => {
            this.setState({
                loading: false
            })
        }))
        dispatch(getUserLiveItemInfo({'roomId': location.query.id}, (data) => {
            this.setState({
                name: data.name,
                status: data.status
            })
        }))
    }

    delChat (item) {
        const {dispatch, location} = this.props
        confirm({
            title: '提示',
            content: `确认要删除吗？`,
            onOk () {
                let sendData = {
                    commentId: item.id
                }
                axiosAjax('POST', '/video/live/comment/delete', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        dispatch(getChatLivelist('get', {'roomId': location.query.id, 'pageSize': 99999, search: ''}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }
    submitAccount () {
        // const {selectData} = this.props
        // console.log(selectData.roomId)
        // console.log(selectData.passportId)
        // console.log(selectData.txUserId)
        // console.log(selectData.globalForbidFlag)
        // 抽空补全
        // type
        // shutUpTimeName
        // let sendData = {
        //     //
        // }
        // axiosAjax('POST', '/video/live/black/user/add', {...sendData}, (res) => {
        //     if (res.code === 1) {
        //         message.success('禁言或者拉黑成功')
        //     } else {
        //         message.error(res.msg)
        //     }
        // })
        if (this.state.radioValue !== '') {
            message.success('禁言成功')
            this.setState({
                visible: false
            })
        }
    }

    optionChange () {
        // 这个功能是否有必要，看是否能获取值吧
    }
    hanleBlackType = (obj) => {
        if (obj) {
            this.setState({
                block: obj.target.value === 0,
                radioValue: obj.target.value
            })
        }
    }
    cancelModal = () => {
        const {form} = this.props
        form.resetFields()
        this.setState({
            visible: false,
            block: false
        })
    }
    render () {
        const {dispatch, inforList, selectedData} = this.props
        const {name, status, globalForbidFlag, block, radioValue} = this.state
        return (
            <div className="chatBox">
                <div className="title">
                    <Tag color="#108ee9">{status !== 0 ? (status !== 1 ? '回放中' : '直播中') : '即将开始'}</Tag>{name}
                </div>
                <div className="chatList-item">
                    {/* {直播中的手可以创建聊天，添加新评论功能，这个需要添加，暂缓，一个button} */}
                    {
                        inforList && inforList.length > 0 && inforList.map((item, index) => {
                            return <div id={index} key={index}>
                                <div className="content">{item.content}</div>
                                <div className="time">{item.nickName}: <span className="time">{moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')}</span></div>
                                <div className="options">
                                    <Button type="primary"
                                        size="small"
                                        className="opt-btn mr10"
                                        onClick={() => {
                                            this.setState({visible: true, radioValue: '', globalForbidFlag: item.globalForbidFlag})
                                            dispatch(selectData(item))
                                        }}>禁言</Button>
                                    <Button type="primary" size="small" className="opt-btn mr10" onClick={() => this.delChat(item)}>删除</Button>
                                </div>
                            </div>
                        })
                    }
                    {inforList && inforList.length === 0 && <div style={{textAlign: 'center'}}>暂无聊天记录</div>}
                </div>
                <Modal
                    title="禁言"
                    visible={this.state.visible}
                    onOk={() => this.submitAccount()}
                    onCancel={this.cancelModal}
                    footer={[
                        <Button key="back" onClick={this.cancelModal}>取消</Button>,
                        <Button key="submit" type="primary" onClick={() => { this.submitAccount() }}>确定</Button>
                    ]}
                >
                    <div style={{ margin: '10px 0' }}>
                        <span>用户昵称：</span>{selectedData.nickName}
                    </div>
                    <div style={{ margin: '10px 0' }}>
                        <span>禁言类型：</span>
                        <RadioGroup value={radioValue} onChange={this.hanleBlackType}>
                            <Radio value={0}>直播间禁言</Radio>
                            <Radio value={1} disabled={globalForbidFlag === 1}>黑名单禁言</Radio>
                        </RadioGroup>
                    </div>
                    {globalForbidFlag === 0 && block ? (<div className="opt">
                        <span>禁言时间：</span>
                        <Select onChange={this.optionChange} defaultValue={'10分钟'} style={{ width: '30%' }}>
                            <Option value={'10分钟'}>10分钟</Option>
                            <Option value={'1天'}>1天</Option>
                            <Option value={'7天'}>7天</Option>
                            <Option value={'30天'}>30天</Option>
                            <Option value={'365天'}>365天</Option>
                        </Select>
                    </div>) : null}
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        info: state.newliveInfo.info,
        inforList: state.liveChatListInfo.inforList,
        selectedData: state.liveChatListInfo.selectedData
    }
}
export default connect(mapStateToProps)(Form.create()(ChatLiveIndex))
