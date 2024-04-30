import React, { Component } from 'react'
import { connect } from 'react-redux'
import Quotation from './Quotation'
import Dyna from './Dyna'
import Guest from './Guest'
import Codes from './Code'
import TitleImg from './TitleImg'

import './index.scss'

class LiveDetail extends Component {
    render () {
        return <div className="pag-box clearfix">
            <div className="live-wrapper">
                <div className="live-wrapper-left clearfix">
                    <TitleImg />
                    <Quotation />
                    <Dyna />
                </div>
                <div className="live-wrapper-right clearfix">
                    <Codes />
                    <Guest />
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    // newsChannelId: state.multi.newsChannelId
})

export default connect(mapStateToProps)(LiveDetail)
