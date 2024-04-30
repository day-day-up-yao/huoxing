import React from 'react'
import './index.scss'
import Profile from './Profile'
export default (props) => {
    return (
        <div className="im-live-list-right-live-good-up-item">
            <Profile authorInfo={props} />
        </div>
    )
}
