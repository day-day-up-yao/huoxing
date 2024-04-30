import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './index.scss'
import Tatle from './Tatle'
import Guest from './Guest'
import Dyna from './Dyna'

import DownloadBtn from 'multiCompsM/DownloadBtn'

class LiveDetail extends Component {
    render () {
        return <div className="m-pag-box clearfix">
            <Tatle/>
            <Guest/>
            <Dyna/>
            <DownloadBtn type="liveDetail" id={this.props.match.params.liveId}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    newsChannelId: state.multi.newsChannelId
})

export default connect(mapStateToProps)(withRouter(LiveDetail))
