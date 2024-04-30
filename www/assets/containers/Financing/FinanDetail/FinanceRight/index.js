import React from 'react'

import './index.scss'

import twittericon from '../../../../public/img/share/twitterico.png'
import discordicon from '../../../../public/img/share/discordico.png'
import mediumicon from '../../../../public/img/share/mediumico.png'

export default (props) => {
    const { detail } = props
    const communitlist = [
        {
            name: 'Twitter',
            icon: twittericon,
            link: detail.twitter
        },
        {
            name: 'Discord',
            icon: discordicon,
            link: detail.discord
        },
        {
            name: 'Medium',
            icon: mediumicon,
            link: detail.medium
        }
    ]
    return <div className="financedetail-right">
        <div className="detail-right-communication">
            <h3>官网</h3>
            <div className="communication-list">
                <a className="communication-list-item">
                    {/* <img src="" alt=""/> */}
                    <span>{detail.website}</span>
                </a>
            </div>
        </div>
        <div className="detail-right-communication">
            <h3>社交媒体</h3>
            <div className="communication-list">
                {communitlist.map((item, index) => {
                    return <a className="communication-list-item" key={index} href={item.link} target="_blank">
                        <img src={item.icon} alt=""/>
                        <span>{item.name}</span>
                    </a>
                })}
            </div>
        </div>
    </div>
}
