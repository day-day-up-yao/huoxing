import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'
import logo from './img/m-header-logo-blue.svg'
import { mixUrl, flashTime } from '../../../_multiappsharing/public'
import DownloadBtn from 'multiCompsM/DownloadBtn'

class NoticeDetail extends Component {
    render () {
        const { noticeObj } = this.props
        let contObj = noticeObj.currentExchangeNotice
        return <div className="m-notice-detail">
            <div className="m-header" style={{ display: 'none' }}>
                <a title="MarsBit" className="logo" href={mixUrl.m()}>
                    <img alt="MarsBit" src={logo}/>
                </a>
                <a href={mixUrl.m('/search')} className="search"/>
            </div>
            <h6>{contObj.title}</h6>
            <div className="detail-logo">
                <img src={contObj.exchangeIconUrl} alt="" className="cont-logo"/>
                <span className="name">{contObj.exchangeSymbol}</span>
                <p>
                    <span className="time">{flashTime(contObj.publishTime)}</span>
                    <span className="type">{contObj.typeName}</span>
                </p>
            </div>
            <div className="detail-cont" dangerouslySetInnerHTML={{ __html: contObj.content }}></div>
            <div className="orign-url">原文连接：<a href={contObj.orignUrl}>点击进入</a></div>
            <DownloadBtn type="noticeDetail" id={this.props.match.params.noticeId}/>
        </div>
    }
}
const mapStateToProps = (state) => ({
    noticeObj: state.noticeDetail.noticeObj
})
export default connect(mapStateToProps)(NoticeDetail)
