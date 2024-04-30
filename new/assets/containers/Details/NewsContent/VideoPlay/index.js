import React from 'react'

import './index.scss'

const VideoPlay = (props) => {
    return <div className="news-details-video">
        <video src={props.file.fileUrl} preload controls/>
    </div>
}

export default VideoPlay
