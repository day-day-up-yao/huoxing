import React from 'react'

import './index.scss'

const AdUp = (props) => {
    let dataObj = props.data
    let adImgUrl = null
    switch (dataObj.useType) {
        case 1:
            adImgUrl = dataObj.url
            break
        case 2:
            adImgUrl = dataObj.url
            break
        case 3:
            adImgUrl = `https://news.marsbit.co/newsdetail/${dataObj.url}`
            break
        case 4:
            adImgUrl = `https://news.marsbit.co/list/${dataObj.url}`
            break
        case 5:
            adImgUrl = `https://news.marsbit.co/feature/${dataObj.url}`
            break
        case 6:
            adImgUrl = `https://news.marsbit.co/tags/${dataObj.url}`
            break
        default:
    }
    return <div className="ad-up-wrapper">
        <a href={adImgUrl} title={dataObj.title} key={dataObj.id} className="item" target="_blank">
            <img src={dataObj.pcImgSrc} alt={dataObj.title}/>
        </a>
    </div>
}

export default AdUp
