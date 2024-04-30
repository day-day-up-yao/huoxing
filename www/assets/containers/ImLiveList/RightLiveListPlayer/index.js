import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import { isArray } from 'multiPublic'
import RightLiveBoxTitle from '../../../components/ImLiveDetail/RightLiveBoxTitle'
import RightLiveGoodUpItem from '../../../components/ImLiveList/RightLiveGoodUpItem'

export default () => {
    const { roomLiveUsePopularList } = useSelector((state) => ({
        roomLiveUsePopularList: state.live.roomLiveUsePopularList
    }), shallowEqual)

    return (
        <div className="im-live-list-right-live-list-player">
            <RightLiveBoxTitle title={'MarBit人气主播'} crown />
            <div className="im-live-list-right-live-list-player-box">
                {
                    roomLiveUsePopularList && isArray(roomLiveUsePopularList) && roomLiveUsePopularList.map((item, index) => {
                        return (
                            <RightLiveGoodUpItem {...item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
