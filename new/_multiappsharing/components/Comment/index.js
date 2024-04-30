import React, { useRef, useCallback } from 'react'
import { connect } from 'react-redux'
import { string, func } from 'prop-types'

import './index.scss'

import { mixUrl, trim } from '../../public/index'
import { isLogin } from '../RegisterLogin/public'
import { loginShowHide } from '../../redux/actions/login'
import { submitComment, getNewsComment } from '../../redux/actions/comment'
import Toast from '../Toast'

const Comment = (props) => {
    const { userInfo, targetId, targetType, commentSuccessed, dispatch } = props
    const myPassportId = userInfo.passportId

    /** @desc 评论输入字数量 */
    const curWordsNum = useRef()
    const wordsNum = useCallback((event) => {
        const val = trim(event.target.value)
        if (val.length <= 140) {
            curWordsNum.current.innerText = val.length
        } else {
            event.target.value = val.substring(0, 140)
        }
    }, [])

    /** @desc 提交评论 */
    const textArea = useRef()
    const commentDo = useCallback(async () => {
        if (!isLogin(myPassportId, dispatch)) return

        const val = trim(textArea.current.value)
        if (val.length < 5) {
            Toast.info('评论不小于5个字')
            return false
        }

        const commentRes = await submitComment({
            targetId: targetId,
            content: textArea.current.value,
            token: userInfo.token,
            userNickName: userInfo.nickName,
            userId: userInfo.passportId,
            type: targetType
        }).catch(function (err) {
            Toast.info('发送评论错误')
            throw err
        })

        if (commentRes.code === 1) {
            textArea.current.value = ''
            dispatch(getNewsComment({
                id: targetId,
                currentPage: 0,
                pageSize: 5
            })).then(function (res) {
                if (res.code !== 1) {
                    Toast.info(res.msg)
                }
            }).catch(function (err) {
                Toast.info('获取评论错误')
                throw err
            })

            if (commentSuccessed) {
                commentSuccessed()
            }
        } else {
            Toast.info(commentRes.msg)
        }
    }, [userInfo, myPassportId])

    return <div className="news-details-comment-content">
        {myPassportId ? <div className="has-login">
            <textarea ref={textArea} onChange={wordsNum} placeholder="请输入您的评论..." />
            <div className="func">
                <a href={mixUrl.main(`/userCenter/${myPassportId}`)} target="_blank" className="user-info">
                    <span><img src={userInfo.iconUrl} alt={decodeURI(userInfo.nickName)} /></span>
                    <em>{decodeURI(userInfo.nickName)}</em>
                </a>
                <div className="submit">
                    <span><em ref={curWordsNum}>0</em>/140</span>
                    <button onClick={commentDo}>提交评论</button>
                </div>
            </div>
        </div> : <div className="no-login">请<a onClick={() => {
            dispatch(loginShowHide('account', true))
        }}>登录</a>后输入评论...</div>}
    </div>
}

Comment.propTypes = {
    targetId: string.isRequired,
    targetType: string.isRequired,
    commentSuccessed: func.isRequired
}

const mapStateToProps = (state) => ({
    userInfo: state.multi.login.userInfo.info
})

export default connect(mapStateToProps)(Comment)
