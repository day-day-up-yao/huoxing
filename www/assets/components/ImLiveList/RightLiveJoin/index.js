import React from 'react'

import './index.scss'

import { mixUrl } from 'multiPublic'
import joinIcon from '../image/live-join.png'

export default () => {
    return (
        <div className="im-live-list-right-join">
            <a className="im-live-list-right-join-box" href={mixUrl.main('/download')} target="_blank">
                <img className="im-live-list-right-join-box" src={joinIcon} />
            </a>
        </div>
    )
}
