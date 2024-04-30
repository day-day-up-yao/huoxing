import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import { isArray } from 'multiPublic'
import RightLiveBoxTitle from '../../../components/ImLiveDetail/RightLiveBoxTitle'
import RightLiveGoodUpItem from '../../../components/ImLiveList/RightLiveGoodUpItem'

export default () => {
    const { room } = useSelector((state) => ({
        room: state.live.room
    }), shallowEqual)
    return (
        <div className="im-live-detail-right-live-presenter">
            <RightLiveBoxTitle title={'主讲人'} />
            <div className="im-live-detail-right-live-presenter-box">
                {
                    room.presenterList && isArray(room.presenterList) && room.presenterList.map((item, index) => {
                        return (
                            <RightLiveGoodUpItem {...item} key={index} />
                        )
                    })
                }
                {
                    room.guestList && isArray(room.guestList) && room.guestList.map((item, index) => {
                        return (
                            <RightLiveGoodUpItem {...item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
