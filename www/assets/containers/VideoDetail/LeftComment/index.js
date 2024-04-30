import React, { useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'
import Comment from 'multiComps/Comment'
import CommentShow from 'multiComps/CommentShow'

export default () => {
    const { videoDetail } = useSelector((state) => ({
        videoDetail: state.video.videoDetail
    }), shallowEqual)

    const commentSuccessed = useCallback(() => { }, [])

    return (
        <div className="video-detail-left-comment">
            <Comment targetId={videoDetail.current.id} targetType="video" commentSuccessed={commentSuccessed} />
            <CommentShow targetId={videoDetail.current.id} />
        </div>
    )
}
