import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import TopInfo from './TopInfo'
import BottomInfo from './BottomInfo'

export default () => {
    const { activityInfoData } = useSelector((state) => ({
        activityInfoData: state.activity.activityInfoData
    }), shallowEqual)

    return (
        <div className="activity-detail-page">
            <TopInfo {...activityInfoData} />
            <BottomInfo {...activityInfoData} />
        </div>
    )
}
