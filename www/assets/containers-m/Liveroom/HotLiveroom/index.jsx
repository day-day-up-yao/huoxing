import React from 'react'
import LiveRoomItem from './LiveRoomItem'

import './index.scss'

export default (props) => {
    const {
        listData
    } = props
    return (
        <div className="hot-live" style={{ display: listData.length > 0 ? 'block' : 'none' }}>
            <div className="live-room-list">
                {
                    listData && listData.length > 0 && listData.map((item, index) => {
                        return (
                            <div className="live-room-list-item"><LiveRoomItem {...item} key={index} /></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
