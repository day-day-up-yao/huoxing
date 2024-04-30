import React from 'react'
import './index.scss'

const LearningNewsList = (props) => {
    return <div className={`learning-news-list ${props.all}`} style={{ display: props.show ? 'block' : 'none' }}>
        <div className={`cont-list ${props.all}`}>
            {
                props.cont.map((item, index) => {
                    return <a href={item.url} target="_blank" key={index}>{item.title}</a>
                })
            }
        </div>
    </div>
}

export default LearningNewsList
