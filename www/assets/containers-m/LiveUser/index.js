import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mixUrl } from '../../../_multiappsharing/public'

import './index.scss'

import vOrange from 'multiPublic/img/v-orange.svg'
import vBlue from 'multiPublic/img/v-blue.svg'

class LiveUser extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: 'guest'
        }
    }

    handleUserType = (type) => {
        this.setState({
            type: type
        })
    }

    componentDidMount () {
        this.setState({
            type: this.props.match.params.type
        })
    }

    itemRender = (arr) => arr.map((data, key) => {
        /** @desc 认证样式与名称 */
        let authStyle = null

        let authName = '普通用户'
        switch (parseInt(data.vGrade)) {
            case 0:
                authName = '普通用户'
                break
            case 1:
                authStyle = vOrange
                authName = 'MarsBit号个人认证'
                break
            case 2:
                authStyle = vBlue
                authName = 'MarsBit号媒体认证'
                break
            case 3:
                authStyle = vBlue
                authName = 'MarsBit号机构认证'
                break
            default:
                authName = '普通用户'
        }
        const link = data.passportId ? mixUrl.m(`/authorCenter/${data.passportId}`) : '#nogo'
        return (
            <div className="hostandguestlist" key={key}>
                {/* <span className="hostandguestlist-text-follow">关注</span> */}
                <a className="hostandguestlist-headimg" href={link}><img src={data.headUrl} /></a>
                <div className="hostandguestlist-text">
                    <a href={link}>
                        <span className="hostandguestlist-text-title">{data.userName}</span>
                        <span className="hostandguestlist-text-introduce">{data.description}</span>
                    </a>
                </div>
                {authStyle && data.vGrade && <span className="avatar-mark" title={authName}>
                    <img src={authStyle} alt={data.userName} />
                </span>}
            </div>
        )
    })

    render () {
        let liveObj = this.props.liveObj.room
        let guestData = !liveObj.guestList ? [] : liveObj.guestList
        let hostData = !liveObj.presenterList ? [] : liveObj.presenterList
        let ArrList

        if (this.state.type === 'guest') {
            ArrList = (
                <div>
                    {this.itemRender(guestData)}
                </div>
            )
        } else {
            ArrList = (
                <div>
                    {this.itemRender(hostData)}
                </div>
            )
        }

        return (
            <div className="m-addlist-wrapper-page">
                <div className="addlist-main">
                    <div className="addlist-main-tatle">
                        {/* <a className="back-page" href="javascript :;" onClick="javascript :history.back(-1);"/> */}

                        <span className={this.state.type === 'guest' ? 'tab-show tatle-left' : 'tatle-left'} onClick={() => {
                            this.handleUserType('guest')
                        }}>嘉宾</span>
                        {/* <span className="tatle-split">/</span> */}
                        <span className={this.state.type === 'preside' ? 'tab-show tatle-right' : 'tatle-right'} onClick={() => {
                            this.handleUserType('preside')
                        }}>主持人</span>
                    </div>
                    <div className="guest-list">
                        {ArrList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        liveObj: state.live
    }
}

export default connect(mapStateToProps)(LiveUser)
