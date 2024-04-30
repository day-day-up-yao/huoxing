import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import LeftLiveInfo from '../../../components/ImLiveDetail/LeftLiveInfo'
import LeftLiveRecommend from '../../../components/ImLiveDetail/LeftLiveRecommend'

const typeName = {
    INFO: 'info',
    RECOMMEND: 'recommend'
}

export default () => {
    const { t } = useTranslation()
    const { brief, roomLiveRecommendList } = useSelector((state) => ({
        brief: state.live.room.brief,
        roomLiveRecommendList: state.live.roomLiveRecommendList.inforList // 推荐列表
    }), shallowEqual)
    const [nowType, setNowType] = useState(typeName.INFO)

    // 点击切换标签按钮事件
    const onBtnTypeClick = (type) => {
        setNowType(type)
    }

    return (
        <div className="im-live-detail-left-live-bottom-box">
            <div className="im-live-detail-left-live-bottom-box-header">
                <div className="im-live-detail-left-live-bottom-box-header-item" onClick={() => onBtnTypeClick(typeName.INFO)}>
                    <div className={`im-live-detail-left-live-bottom-box-header-text ${nowType === typeName.INFO ? 'im-live-detail-left-live-bottom-box-header-select' : ''}`}>
                        {t('live_brief')}
                    </div>
                    {nowType === typeName.INFO && <div className="im-live-detail-left-live-bottom-box-header-line"></div>}
                </div>
                <div className="im-live-detail-left-live-bottom-box-header-item" onClick={() => onBtnTypeClick(typeName.RECOMMEND)}>
                    <div className={`im-live-detail-left-live-bottom-box-header-text ${nowType === typeName.RECOMMEND ? 'im-live-detail-left-live-bottom-box-header-select' : ''}`}>
                      {t('live_tj_strem')}
                    </div>
                    {nowType === typeName.RECOMMEND && <div className="im-live-detail-left-live-bottom-box-header-line"></div>}
                </div>
            </div>
            <div className="im-live-detail-left-live-bottom-box-wrapper">
                {nowType === typeName.INFO && <LeftLiveInfo brief={brief} />}
                {nowType === typeName.RECOMMEND && <LeftLiveRecommend listData={roomLiveRecommendList} />}
            </div>
        </div>
    )
}
