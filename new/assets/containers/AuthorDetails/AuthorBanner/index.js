import React from 'react'
import './index.scss'

import hxhImg from '../images/huoxing-mark-bg.jpg'

const AuthorBanner = (props) => {
    return <div className="author-banner">
        <div className="banner-cont">
            <div className="author-introduce">
                <div className="introduce-cont">
                    <div className="author-img"/>
                    <div className="author-account">
                        <div className="attention-state not">关注</div>
                        <h5>腾讯科技 </h5>
                        <p>腾讯网五大核心资讯频道之一，囊括Business Insider等多家美国顶尖科技媒体的独家中文版权。腾讯网五大核心资讯频道之一，囊括Business Insider等多家美国顶尖科技媒体的独家中文版权。</p>
                    </div>
                </div>
                <div className="author-cont-type">
                    <p className="active">他的文章 <span>100</span></p>
                    <p>他的视频 <span>100</span></p>
                    <p>他的收藏 <span>100</span></p>
                </div>
            </div>
            <div className="banner-hxh"><a href=""><img src={hxhImg} alt=""/></a></div>
        </div>
    </div>
}

export default AuthorBanner
