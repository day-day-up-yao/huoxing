import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShareBtn2 from 'multiCompsM/ShareBtn2'

import './index.scss'

class LiveShare extends Component {
    render () {
        const img = this.props.roomData.sharePicUrl
        return (
            <div className="mLiveSharePage">
                <img className="mLiveSharePageBg" src={img} draggable="false"></img>
                <ShareBtn2 type="liveShare" id={this.props.roomData.roomId}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        roomData: state.live.room
    }
}

export default connect(mapStateToProps)(LiveShare)
