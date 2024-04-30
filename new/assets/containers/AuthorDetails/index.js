import React from 'react'
import { connect } from 'react-redux'

import NewsList from '../../components/NewsList'
import AuthorBanner from './AuthorBanner'
// import { getNewsList } from 'multiRedux/actions/news'
// import Toast from 'multiComps/Toast'
// import { isArray } from 'multiPublic/index'
import UserContRight from '../../components/UserContRight'
import './index.scss'

const AuthorDetails = (props) => {
    return [
        <AuthorBanner key="authorBanner"/>,
        <div className="layout-main" key="authorContent">
            <div className="layout-left">
                <NewsList/>
            </div>
            {/* <div className="layout-right">78978979</div> */}
            <div className="layout-right"><UserContRight /></div>
        </div>
    ]
}

const mapStateToProps = (state) => {
    return {
        authorNewsList: state.author.authorNewsList
    }
}

export default connect(mapStateToProps)(AuthorDetails)
