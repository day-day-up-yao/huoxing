import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isLogin } from 'multiComps/RegisterLogin/public'
import './index.scss'
import { attentionAuthor, isAttentionAuthor } from '../../redux/actions/live'
import { mixUrl } from 'multiPublic'

import vOrange from 'multiPublic/img/v-orange.svg'
import vBlue from 'multiPublic/img/v-blue.svg'

const UserHtml = (props) => {
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
    return <div className="hostandguestlist" key={list.userId}>
        <div className="hostandguestlist-box">
            <span className="hostandguestlist-text-follow" onClick={() => {
                handleAttention(event, followState)
            }} style={{ display: !list.passportId ? 'none' : 'block' }} datapsid={list.passportId}>{followText}</span>
            <a
                {...link}
                className="hostandguestlist-headimg">
                <img src={list.headUrl} />
            </a>
            {authStyle && iconHide && <span title={authName} className="avatar-mark">
                <img src={authStyle} alt={list.userName} />
            </span>}
            {/* <div className="avatar-mark"></div> */}
            <div className="hostandguestlist-text">
                <a
                    {...link}
                    className="hostandguestlist-text-title">
                    <span>{list.userName}</span>
                </a>
                <span className="hostandguestlist-text-introduce">{list.description}</span>
            </div>
        </div>
    </div>
}

class AddList extends Component {
    state = {
        type: ''
    }

    componentDidMount () {
        this.setState({
            type: this.props.match.params.type
        })
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
            }
        })
    }

    handleUserType = (type) => {
        this.setState({
            type: type
        })
    }

    render () {
        let { liveObj, attentionList } = this.props
        let liveGuest = liveObj.room.guestList
        let livePresenterList = liveObj.room.presenterList
        return (
            <div className="addlist-wrapper-page">
                <div className="addlist-main">
                    <div className="addlist-main-tatle">
                        <span className={this.state.type === 'guest' ? 'tab-show tatle-left' : 'tatle-left'} onClick={() => {
                            this.handleUserType('guest')
                        }}>嘉宾</span>
                        {/* <span className="tatle-split">/</span> */}
                        <span className={this.state.type === 'preside' ? 'tab-show tatle-right' : 'tatle-right'} onClick={() => {
                            this.handleUserType('preside')
                        }}>主持人</span>
                    </div>
                    <div className="guest-list">
                        {
                            this.state.type === 'guest' ? liveGuest.map(item => {
                                return <UserHtml key={item.userId} list={item} attentionList={attentionList} handleAttention={this.handleAttention} />
                            }) : livePresenterList.map(item => {
                                return <UserHtml key={item.userId} list={item} attentionList={attentionList} handleAttention={this.handleAttention} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    liveObj: state.live,
    login: state.login,
    attentionList: state.attention.list
})

export default connect(mapStateToProps)(AddList)
