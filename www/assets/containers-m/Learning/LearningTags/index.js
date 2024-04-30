import React from 'react'
import './index.scss'

const tagUrl = 'https://news.huoxing24.com/tags/'
const LearningTags = (props) => {
    return <div className="m-tags-box clearfix">
        <div className="index-tags">
            <div className="tags-title clearfix">
                <h3>学习标签</h3>
            </div>
            <div className="tags-cont">
                {props.tag.map((item, index) => {
                    return <a target="_blank" key={index} href={tagUrl + item} title={item}>{item}</a>
                })}
            </div>
        </div>
    </div>
}

export default LearningTags
