import React from 'react'
import { connect } from 'react-redux'
import NoticeCont from './noticeCont'
import NoticeList from '../../components/NoticeList'
import DataFocus from '../../components/DataFocus'
import { isArray } from 'multiPublic/index'
import { Link } from 'react-router-dom'
import './index.scss'

const Notice = (props) => {
    const { statisticsObj } = props
    return <div className='notice-cont'>
        <div className="notice-nav">
            <div className="nav-map">
                <Link to={`/flash`} target="_blank">快讯</Link>
                <a className="active">公告</a>
                <a style={{ display: 'none' }}>微博/Twitter</a>
            </div>
        </div>
        <div className="notice-map-box clearfix">
            <div className="notice-map-left">
                <NoticeCont/>
            </div>
            <div className="notice-map-right">
                <DataFocus dataobj={statisticsObj}/>
                <NoticeList title={'重要公告'} dataArr={isArray(statisticsObj.importantExchangeNoticeList) && statisticsObj.importantExchangeNoticeList}/>
                <NoticeList title={'新币上线'} dataArr={isArray(statisticsObj.newCoinOnlineExchangeNoticeList) && statisticsObj.newCoinOnlineExchangeNoticeList}/>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    statisticsObj: state.notice.statisticsObj.obj
})

export default connect(mapStateToProps)(Notice)
