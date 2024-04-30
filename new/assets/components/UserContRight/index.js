import React from 'react'
import './index.scss'
import MainImg from './assembly/mainImg'
import NavHeader from './assembly/navHeader'
import SwiperSlide from './assembly/swiperSlide'
import { connect } from 'react-redux'

import RightItemWrapper from 'multiComps/RightItemWrapper'

const UserContRight = (props) => {
    return (
        <div className="userContRight-nav">
            <RightItemWrapper firstItem={true}>
                <NavHeader />
            </RightItemWrapper>

            <RightItemWrapper>
                <div className="nav_main clearfix">
                    <h4>个人成就</h4>
                    <MainImg />
                </div>
            </RightItemWrapper>

            <RightItemWrapper>
                <div className="index-news-right clearfix">
                    <SwiperSlide />
                    <a href="/author" className="author-more" target="_black">查看更多</a>
                </div>
            </RightItemWrapper>
        </div>
    )
}

export default connect()(UserContRight)
