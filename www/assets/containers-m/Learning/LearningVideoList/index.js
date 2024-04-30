import React from 'react'

import './index.scss'

const LearningVideoList = (props) => {
    return <div className="m-learning-video-list" style={{ display: props.show ? 'block' : 'none' }}>
        <div className="cont-list">
            {
                props.cont.map((item, index) => {
                    return <a href={item.url} target="_blank" key={index}>
                        <img src={item.img} alt=""/>
                        <p>{item.title}</p>
                    </a>
                })
            }
            <div className="more" style={{ display: props.more ? 'block' : 'none' }}>查看更多<span></span></div>
        </div>
    </div>
}

export default LearningVideoList
