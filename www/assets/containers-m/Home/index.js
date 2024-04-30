import React, { Component } from 'react'
import { connect } from 'react-redux'
import DownloadBtn from 'multiCompsM/DownloadBtn'
import TopAdCarousel from './TopAdCarousel'
import NewsContent from './NewsContent'
import './index.scss'

class Home extends Component {
    render () {
        // const { userInfo } = this.props

        return <div className="m-home">
            <TopAdCarousel />
            <NewsContent />
            <DownloadBtn type="home" />
        </div>
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.login.userInfo
})
export default connect(mapStateToProps)(Home)
