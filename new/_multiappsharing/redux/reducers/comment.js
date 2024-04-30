import {
    DELCOMMENT,
    DELREPLY,
    GETNEWSCOMMENT,
    GETNEWSMORECOMMENT,
    REPLYCOMENT
} from '../constants/comment'

/** @desc 新闻视频评论 */
const initCommentList = {
    pageSize: 0,
    recordCount: 0,
    currentPage: 0,
    pageCount: 0,
    currentTime: new Date(),
    inforList: []
}
export default (state = initCommentList, action) => {
    switch (action.type) {
        case GETNEWSCOMMENT:
            return action.data
        case GETNEWSMORECOMMENT:
            const commentList = action.data.inforList
            if (commentList.length !== 0) {
                const newCommentList = state.inforList.concat(action.data.inforList)
                return { ...action.data, inforList: newCommentList }
            } else {
                return state
            }
        case REPLYCOMENT:
            const pid = action.data.pid
            const replayCommentList = state.inforList
            replayCommentList.map(function (item, index) {
                if (pid === item.comment.id) {
                    const replies = item.replies
                    replies.push(action.data)
                    replayCommentList[index] = {
                        ...replayCommentList[index],
                        replies: replies
                    }
                }
            })
            return { ...state, inforList: replayCommentList }
        case DELCOMMENT:
            const delCommentId = action.data
            const delCommentList = state.inforList
            delCommentList.map(function (item, index) {
                if (delCommentId === item.comment.id) {
                    delCommentList.splice(index, 1)
                }
            })
            return { ...state, inforList: delCommentList }
        case DELREPLY:
            const replyId = action.data.replyId
            const commentId = action.data.commentId
            const delReplyCommentList = state.inforList
            delReplyCommentList.map(function (item, index) {
                if (commentId === item.comment.id) {
                    const replies = item.replies
                    replies.map(function (item, index) {
                        if (replyId === item.id) {
                            replies.splice(index, 1)
                        }
                    })
                    delReplyCommentList[index] = {
                        ...delReplyCommentList[index],
                        replies: replies
                    }
                }
            })
            return { ...state, inforList: delReplyCommentList }
        default:
            return state
    }
}
