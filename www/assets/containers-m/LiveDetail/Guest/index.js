import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './index.scss'
import { mixUrl } from 'multiPublic/index'

import LiveGuest from '../../../public/comps/LiveGuest'

class Guest extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hostName: [],
            guestName: []
        }
    }

    componentDidMount () {
        // 数据的遍历和分组
        const hostName = this.state.hostName
        const guestName = this.state.guestName
        const liveObj = this.props.liveObj
        // console.log(liveObj)
        const hostData = liveObj.room.presenterList
        const guestData = liveObj.room.guestList
        hostData.map(function (item) {
            hostName.push(item.userName)
        })

        guestData.map(function (item) {
            guestName.push(item.userName)
        })
    }

    render () {
        const newGuestName = this.state.guestName.join('、')
        const newHostName = this.state.hostName.join('、')
        return <div className="m-wrapper-guest-show">
            <div className="guestlist-show">
                <span className="guestlist-show-title">嘉&emsp;宾:</span>
                <div className="guestlist-show-con">
                    <LiveGuest guests={newGuestName} url={mixUrl.main(`/liveuser/guest/${this.props.match.params.liveId}`)} />
                </div>
            </div>
            <div className="guestlist-show">
                <span className="guestlist-show-title">主持人:</span>
                <div className="guestlist-show-con">
                    <LiveGuest guests={newHostName} url={mixUrl.main(`/liveuser/preside/${this.props.match.params.liveId}`)} />
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        liveObj: state.live
    }
}
export default connect(mapStateToProps)(withRouter(Guest))
