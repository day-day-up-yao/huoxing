import React, { Component } from 'react'
import '../index.scss'
import { connect } from 'react-redux'
// import getCollectAuthor from '../../../redux/actions/author'
// import Toast from 'multiComps/Toast'

class NavHeader extends Component {
    render () {
        return (
            <div className="nav_header clearfix">
                <div className="left"><p>关注</p> <h3>{this.props.data.newsCounts}</h3></div>
                <div className="right"><p>粉丝</p> <h3>{this.props.data.newsHotCounts}</h3></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.author.authorAchieve
    }
}
export default connect(mapStateToProps)(NavHeader)
