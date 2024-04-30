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
    return <div className="finheader-m">
        <div className="finheader-m-top">
            <img src={detail.logoUrl} alt=""/>
            <div className="finheader-m-top-right">
                <h3>{detail.projectName}</h3>
                <div className="categary-list">
                    <div className="categary-list-item">Social Network</div>
                </div>
            </div>
        </div>
        <div className="finheader-m-desc">{detail.brief}</div>
        <div className="comniiton-m">
            <h4>官网</h4>
            <div className="comniiton-m-website">{detail.website}</div>
        </div>
        <div className="comniiton-m">
            <h4>社交媒体</h4>
            <div className="comniiton-m-mt">
                {communitlist.map((item, index) => {
                    return <a className="comniiton-m-other" key={index} target="_blank" href={item.link}>
                        <img src={item.icon} alt=""/>
                        <span>{item.name}</span>
                    </a>
                })}
            </div>
        </div>
    </div>
}
