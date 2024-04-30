import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import GuestImg from './imgs/p-guest-icon2.svg'
import HostImg from './imgs/p-host-icon.svg'
import { isAttentionAuthor, attentionAuthor } from '../../../redux/actions/live'
import './index.scss'
import Toast from 'multiComps/Toast'
import { isLogin } from 'multiComps/RegisterLogin/public'
import { mixUrl } from 'multiPublic/index'

import vOrange from 'multiPublic/img/v-orange.svg'
import vBlue from 'multiPublic/img/v-blue.svg'

const HostAndGuestList = (props) => {
    let { handleAttention, list, attentionList } = props
    let iconHide = list.vGrade
    let followText = '关注'
    let followState = 0
    attentionList.map(items => {
        if (items === list.passportId) {
            followText = '已关注'
            followState = 1
            return false
        }
    })

    /** @desc 认证样式与名称 */
    let authStyle = null

    let authName = '普通用户'
    switch (parseInt(iconHide)) {
        case 0:
            authName = '普通用户'
            break
        case 1:
            authStyle = vOrange
            authName = 'MarsBit 专栏个人认证'
            break
        case 2:
            authStyle = vBlue
            authName = 'MarsBit 专栏媒体认证'
            break
        case 3:
            authStyle = vBlue
            authName = 'MarsBit 专栏机构认证'
            break
        default:
            authName = '普通用户'
    }

    const link = list.passportId ? { href: mixUrl.main(`/userCenter/${list.passportId}`), target: '_blank' } : {}
    return <a {...link} className="hostandguestlist">
        <span className="hostandguestlist-text-follow" onClick={() => {
            handleAttention(event, followState)
        }} style={{ display: !list.passportId ? 'none' : 'block' }} datapsid={list.passportId}>
            {followText}
        </span>
        <img className="hostandguestlist-headimg" src={list.headUrl} />
        {authStyle && iconHide && <span title={authName} className="avatar-mark">
            <img src={authStyle} alt={list.userName} />
        </span>}
        <div className="hostandguestlist-text">
            <span className="hostandguestlist-text-title">{list.userName}</span>
            <span className="hostandguestlist-text-introduce">{list.description}</span>
        </div>
    </a>
}

class Guest extends Component {
    componentDidMount () {
        this.isAttention()
    }

    isAttention = () => {
        const { login, dispatch } = this.props
        let passportId = login.userInfo.info.passportId
        if (!passportId) {
            return false
        }
        dispatch(isAttentionAuthor({
            myPassportId: passportId
        }))
    }

    handleAttention = (e, type) => {
        const { login, dispatch } = this.props
        let loginObj = login.userInfo.info
        let authorId = e.target.getAttribute('datapsid')
        let This = this
        if (!isLogin(loginObj.passportId, dispatch)) return
        attentionAuthor({
            passportid: loginObj.passportId,
            token: loginObj.token,
            authorId: authorId
        }, type).then(res => {
            if (res.code === 1) {
                This.isAttention()
            } else {
                Toast.info(res.msg)
            }
        })
    }

    render () {
        let liveObj = this.props.liveObj.room
        let { attentionList } = this.props
        let guestList = !liveObj.guestList ? [] : liveObj.guestList
        let presenterList = !liveObj.presenterList ? [] : liveObj.presenterList
        return <div className="guest-page-wrapper">
            <div className="wrapper-guest">
                <img src={GuestImg} />
                <span className='guest-play'>嘉宾</span>
            </div>
            <div className="wrapper-guest-list">
                {
                    guestList.map((item, index) => {
                        if (index <= 4) {
                            return <HostAndGuestList list={item} attentionList={attentionList} handleAttention={this.handleAttention} key={index} />
                        }
                    })
                }
            </div>
            <a className="wrapper-guest-addlist" style={{ display: guestList.length > 5 ? 'block' : 'none' }} href={mixUrl.main(`/liveuser/guest/${this.props.match.params.liveId}`)} target="_black">查看更多嘉宾</a>
            <div className="wrapper-host">
                <img src={HostImg} />
                <span className='guest-play'>主持人</span>
            </div>
            <div className="wrapper-host-list">
                {presenterList.map((item, index) => {
                    if (index <= 4) return <HostAndGuestList list={item} attentionList={attentionList} handleAttention={this.handleAttention} key={index} />
                })}
            </div>
            <a className="wrapper-guest-addlist" style={{ display: presenterList.length > 5 ? 'block' : 'none' }} href={mixUrl.main(`/liveuser/guest/${this.props.match.params.liveId}`)} target="_black">查看更多嘉宾</a>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        liveObj: state.live,
        login: state.login,
        attentionList: state.attention.list
    }
}

export default connect(mapStateToProps)(withRouter(Guest))
