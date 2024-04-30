import React from 'react'
import { connect } from 'react-redux'
import { isArray, formatPublishTime } from 'multiPublic/index'
import { Link } from 'react-router-dom'
import NoticeList from '../../components/NoticeList'
import DataFocus from '../../components/DataFocus'
import './index.scss'

const NoticeDetail = (props) => {
    const { statisticsObj, noticeDetailObj } = props
    const currentExchangeNotice = noticeDetailObj.currentExchangeNotice
    const nextExchangeNotice = !noticeDetailObj.nextExchangeNotice ? '' : noticeDetailObj.nextExchangeNotice
    const pastExchangeNotice = !noticeDetailObj.pastExchangeNotice ? '' : noticeDetailObj.pastExchangeNotice
    return <div className='notice-detail-cont'>
        <div className="notice-detail-box clearfix">
            <div className="notice-detail-left">
                <div className="detail-nav">
                    <a href="http://www.marsbit.co/" target="_blank">首页</a> > <a href="/notice">公告</a> > <span>{currentExchangeNotice.exchangeName}</span>
                </div>
                <h5 className="title-h5">{currentExchangeNotice.title}</h5>
                <div className="title">
                    <p><img src={currentExchangeNotice.exchangeIconUrl} alt=""/> <span>{currentExchangeNotice.exchangeName}</span><span>{formatPublishTime(currentExchangeNotice.publishTime)}</span></p>
                    <p>公告类型：{currentExchangeNotice.typeName}</p>
                </div>
                <div className="cont" dangerouslySetInnerHTML={{ __html: currentExchangeNotice.content }}/>
                <div className="link">原文链接：<a href={currentExchangeNotice.orignUrl} target="_blank">点击查看</a></div>
                <div className="page-next">
                    <p style={{ display: nextExchangeNotice === '' ? 'none' : 'block' }}>上一篇：<Link to={`/noticeDetail/${nextExchangeNotice.noticeId}`} target="_blank">{nextExchangeNotice.title}</Link></p>
                    <p style={{ display: pastExchangeNotice === '' ? 'none' : 'block' }}>下一篇：<Link to={`/noticeDetail/${pastExchangeNotice.noticeId}`} target="_blank">{pastExchangeNotice.title}</Link></p>
                </div>
            </div>
            <div className="notice-detail-right">
                <DataFocus dataobj={statisticsObj}/>
                <NoticeList title={'重要公告'} dataArr={isArray(statisticsObj.importantExchangeNoticeList) && statisticsObj.importantExchangeNoticeList}/>
                <NoticeList title={'新币上线'} dataArr={isArray(statisticsObj.newCoinOnlineExchangeNoticeList) && statisticsObj.newCoinOnlineExchangeNoticeList}/>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    statisticsObj: state.notice.statisticsObj.obj,
    noticeDetailObj: state.notice.noticeDetailObj.obj
})

export default connect(mapStateToProps)(NoticeDetail)
