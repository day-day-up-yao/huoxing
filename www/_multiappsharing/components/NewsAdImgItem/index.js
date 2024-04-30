import React from 'react'

import './index.scss'

export default (props) => {
    const {
        url, // 连接地址
        pcImgSrc, // 图片
        title // 标题
        // description // 描述
    } = props

    return (
        <a className='news-ad-img-item' href={url} target='_blank'>
            <div className='news-ad-img-item-title'>
                <h5>{title}</h5>
                {/* <p>{description}</p> */}
            </div>
            <img className='news-ad-img-item-img' src={pcImgSrc} alt="" />
        </a>
    )
}
