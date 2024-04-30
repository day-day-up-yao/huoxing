import React from 'react'

import twitterimg from '../../../public/img/share/twitter.png'
// import share1img from '../../../public/img/share/share1.png'
// import share2img from '../../../public/img/share/share2.png'

import './index.scss'

export default (props) => {
    const { link } = props
    return <div className="share-list">
        <div className="share-img" onClick={() => {
            if (link) {
                window.open(link)
            }
        }}>
            <img src={twitterimg} alt=""/>
        </div>
        {/* <div className="share-img">
            <img src={share1img} alt=""/>
        </div>
        <div className="share-img">
            <img src={share2img} alt=""/>
        </div> */}
    </div>
}
