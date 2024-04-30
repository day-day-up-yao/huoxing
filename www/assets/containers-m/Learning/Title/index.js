import React from 'react'

import './index.scss'

const LearningTitle = (props) => {
    return <div className="m-learning-title">
        <a href={props.url} target="_blank">{props.title}</a>
        <p>{props.introduce}</p>
    </div>
}

export default LearningTitle
