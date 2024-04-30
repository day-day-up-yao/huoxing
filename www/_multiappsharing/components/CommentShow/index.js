import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { string } from 'prop-types'

import './index.scss'

import { getNewsComment, replyComment, deleteCommentReply } from '../../redux/actions/comment'
import { mixUrl, formatPublishTime, isArray, trim } from '../../public/index'
import { loginShowHide } from '../../redux/actions/login'
import { isLogin } from '../RegisterLogin/public'
import Toast from '../Toast'

const CommentShow = (props) => {
    const { dispatch, commentList, targetId, userInfo } = props

    /** @desc 已登录passportId */
    const myPassportId = userInfo.passportId

    /** @desc 当前评论数 */
    const [commentNum, setCommentNum] = useState(0)
    useEffect(() => {
        setCommentNum(commentList.recordCount) // 设置数量为请求数据之后的数量
    }, [commentList.recordCount])

    /** @desc 当前需要回复的评论id, 回复框展示与隐藏 */
    const [commentId, setCommentId] = useState(null)
    const showReplyTextarea = useCallback((event) => {
        if (!isLogin(myPassportId, dispatch)) return

        if (myPassportId) {
            event.target.focus()
            const commentId = event.target.getAttribute('data-id')
            setCommentId(commentId)
        } else {
            Toast.info('请先登录')
            dispatch(loginShowHide('account', true))
        }
    }, [myPassportId])
    const hideReplyTextarea = useCallback(() => setCommentId(null), [])
    useEffect(() => {
        commentId && document.getElementById(`textarea${commentId}`).focus()
    }, [commentId])

    /** @desc 确认回复评论 */
    const replyCommentComfirm = useCallback(() => {
        const curTextarea = document.getElementById(`textarea${commentId}`)

        const val = trim(curTextarea.value)
        if (val.length < 5) {
            Toast.info('回复不小于5个字')
            return false
        }

        dispatch(replyComment({
            targetId: targetId,
            token: userInfo.token,
            userId: myPassportId,
            userNickName: userInfo.nickName,
            pid: commentId,
            content: val
        })).then(function (res) {
            if (res.code === 1) {
                curTextarea.value = ''
                hideReplyTextarea()
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            Toast.info('回复评论错误')
            throw err
        })
    }, [commentId, userInfo, myPassportId])

    /** @desc 删除评论/回复 */
    const deleteFunc = useCallback((idObj, type) => {
        const id = (type === 'comment' && idObj.commentId) || (type === 'reply' && idObj.replyId)
        dispatch(deleteCommentReply({
            id: id,
            token: userInfo.token,
            passportid: userInfo.passportId,
            idObj: idObj // 此处是为reducer中删除回复传递，ajax不需要。
        }, type)).then(function (res) {
            if (res.code === 1) {
                if (type !== 'comment') return false
                commentNum > 0 && setCommentNum(commentNum - 1)
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            Toast.info('删除评论或回复错误')
            throw err
        })
    }, [commentNum, userInfo])

    /** @desc 评论列表 */
    const [commentParams, setCommentParams] = useState({
        id: targetId,
        currentPage: 1,
        pageSize: 5,
        loadMore: false // 判断是否为加载更多标识，传参不需要
    })
    const loadMoreComment = useCallback(() => {
        setCommentParams({
            ...commentParams,
            currentPage: commentParams.currentPage + 1,
            loadMore: 'more'
        })
    }, [commentParams])
    useEffect(() => {
        const { loadMore } = commentParams
        dispatch(getNewsComment(commentParams, loadMore)).then(function (res) {
            if (res.code === 1) {
                const list = res.obj.inforList
                if (loadMore && (!isArray(list) || list.length === 0)) {
                    Toast.info('暂无更多评论')
                }
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            Toast.info('获取评论错误')
            throw err
        })
    }, [commentParams])
    return <div className="news-details-comment-show" id="commentShow">
        <h4>评论<span>{commentNum}</span>条</h4>
        <div className="content">
            {(commentList.inforList || []).map(function (item, index) {
                const { comment, replies } = item

                /** @desc 第一级评论是否是自己评论的，并且已登录，未登录myPassportId为undefined，依然不相等 */
                const firstIsMine = myPassportId === comment.userId
                return <div className="item" key={comment.id}>
                    <a href={mixUrl.main(`/userCenter/${comment.userId}`)} className="avatar" target="_blank">
                        <img src={comment.userIcon} alt={comment.userNickName} />
                    </a>
                    <div className="title-content">
                        <div className="first-level">
                            <h5>{decodeURI(comment.userNickName)}</h5>
                            <p>{comment.content}</p>
                            <div className="func">
                                <time>{formatPublishTime(comment.createTime)}</time>
                                <div className="button-wapper">
                                    {firstIsMine && <button onClick={() => {
                                        deleteFunc({ commentId: comment.id }, 'comment')
                                    }} data-id={comment.id} className="delete-btn">删除</button>}
                                    <button className="reply-btn" data-id={comment.id} onClick={showReplyTextarea}>回复
                                    </button>
                                </div>
                            </div>
                            <div className="reply-box" style={{ display: commentId === comment.id ? 'block' : 'none' }}>
                                <div className="textarea">
                                    <textarea id={`textarea${comment.id}`} placeholder="请输入回复内容" />
                                </div>
                                <div className="confirm-cancel">
                                    <button className="cancel" onClick={hideReplyTextarea}>取消</button>
                                    <button className="confirm" onClick={replyCommentComfirm}>确认</button>
                                </div>
                            </div>
                        </div>
                        <div className="second-level">
                            {replies.map(function (item, index) {
                                /** @desc 第二级评论是否是自己评论的 */
                                const secondIsMine = myPassportId === item.userId
                                return <div className="reply-item" key={item.id}>
                                    <div className="reply-content">
                                        <a
                                            href={mixUrl.main(`/userCenter/${item.userId}`)}
                                            target="_blank">
                                            {decodeURI(item.userNickName)}
                                        </a>
                                        <p>{item.content}</p>
                                    </div>
                                    {secondIsMine && <div className="reply-func">
                                        <button onClick={() => {
                                            deleteFunc({ commentId: comment.id, replyId: item.id }, 'reply')
                                        }} className="delete-btn" data-id={item.id}>删除
                                        </button>
                                    </div>}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            })}
        </div>
        {commentList.inforList.length < commentList.recordCount && <div
            className="load-more-comment"
            onClick={loadMoreComment}>
            查看更多评论
        </div>}
    </div>
}

CommentShow.propTypes = {
    targetId: string.isRequired
}

const mapStateToProps = (state) => {
    const multi = state.multi
    return {
        userInfo: multi.login.userInfo.info,
        commentList: multi.comment
    }
}

export default connect(mapStateToProps)(CommentShow)
