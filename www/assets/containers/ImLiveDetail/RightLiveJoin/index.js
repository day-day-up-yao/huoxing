import React from 'react'

import './index.scss'

import RightLiveBoxTitle from '../../../components/ImLiveDetail/RightLiveBoxTitle'
import phoneIcon from '../Image/live-join-phone.png'
import wxIcon from '../Image/live-join-wx.png'

export default () => {
    return (
        <div className="im-live-detail-right-live-join">
            <RightLiveBoxTitle title={'直播合作'} />
            <div className="im-live-detail-right-live-join-box">
                <div className="im-live-detail-right-live-join-title">直播咨询</div>
                <div className="im-live-detail-right-live-join-text-box">
                    <img className="im-live-detail-right-live-join-img" src={phoneIcon} />
                    <div className="im-live-detail-right-live-join-text">电话：18322606595</div>
                </div>
                <div className="im-live-detail-right-live-join-text-box">
                    <img className="im-live-detail-right-live-join-img" src={wxIcon} />
                    <div className="im-live-detail-right-live-join-text">微信：CRYPTO1996</div>
                </div>
                <div className="im-live-detail-right-live-join-title" style={{ marginTop: '24px' }} >商务合作</div>
                <div className="im-live-detail-right-live-join-text-box">
                    <img className="im-live-detail-right-live-join-img" src={phoneIcon} />
                    <div className="im-live-detail-right-live-join-text">电话：15555527736</div>
                </div>
                <div className="im-live-detail-right-live-join-text-box">
                    <img className="im-live-detail-right-live-join-img" src={wxIcon} />
                    <div className="im-live-detail-right-live-join-text">微信：15555527736</div>
                </div>
            </div>
        </div>
    )
}
