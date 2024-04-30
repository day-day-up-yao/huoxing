import React from 'react'
import LiveGuestItem from './LiveGuestItem'
import './index.scss'

export default (props) => {
    const {
        guestList,
        presenterList
    } = props
    return (<div className="liveshare-m-guest-box">
        {
            presenterList && presenterList.length > 0 && presenterList.map((item, index) => {
                return (
                    <div className="live-guest-list-item">
                        <LiveGuestItem {...item} key={index}/>
                    </div>
                )
            })
        }
        {guestList && guestList.length > 0 && guestList.map((item, index) => {
            return (
                <div className="live-guest-list-item">
                    <LiveGuestItem {...item} key={index} />
                </div>
            )
        }) }
    </div>)
}
