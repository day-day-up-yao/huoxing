import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { AttentionButton, Avatar, AuthorName } from 'multiComps/AuthorInfo'
import { isLogin } from 'multiComps/RegisterLogin/public'
import { arriveAtDom } from 'multiPublic/index'
import { favoriteNews } from '../../../redux/actions/news'
import Toast from 'multiComps/Toast'

const Share = (props) => {
    /** @desc 获取props */
    const { newsDetails, userInfo, authorInfo, attentionSuccessed, getNewsDetailsFunc, dispatch } = props
    const newsCur = newsDetails.current || {}
    const myPassportId = userInfo.passportId
    const [ifCollect, setIfCollect] = useState(parseInt(newsDetails.ifCollect))

    /** @desc 收藏新闻 */
    const favoriteDo = useCallback(() => {
        if (!isLogin(myPassportId, dispatch)) return

        const status = ifCollect === 1 ? -1 : 1
        favoriteNews({
            newsId: newsCur.id,
            passportId: myPassportId,
            token: userInfo.token,
            status: status
        }).then(function (res) {
            if (res.code === 1) {
                getNewsDetailsFunc()
                setIfCollect(ifCollect === 1 ? -1 : 1)
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('收藏新闻错误')
        })
    }, [ifCollect, userInfo, myPassportId])

    /** @desc 生成分享按钮: 由于使用window，且需要在didMount中生成。直接生成会出现client的div和server的div不匹配错误
     * 此处有jsx组件，按理说用useMemo比较合适，但是useMemo会首先运行一遍回调函数并返回运行结果，但又在服务端首次调用，服务端报window is undefined
     * useCallback不运行，只返回函数
     * */
    const [shareCon, setShareCon] = useState('')
    const shareGenerate = useCallback(() => {
        const SocialShare = require('multiComps/SocialShare').default
        return <SocialShare
            url={window.location.href}
            title={newsCur.title}
            sites={['twitter', 'facebook']}
        />
    }, [])
    useEffect(() => {
        setShareCon(shareGenerate())
    }, [])

    return <div className="news-details-share-wrapper" style={{ display: 'none' }}>
        <div className="news-details-share" id="newsDetailsShare">
            <div className="content">
                <div className="user-info" style={{ display: `${newsCur.cateId === 1 ? 'flex' : 'none'}` }}>
                    <Avatar className="avatar" iconHide={true} authorInfo={authorInfo} />
                    <AuthorName className="user-name" authorInfo={authorInfo} />
                    {newsCur.createdBy !== myPassportId &&
                        <AttentionButton authorInfo={authorInfo} attentionSuccessed={attentionSuccessed} />}
                </div>
                <div className="share-reprint" style={{ display: `${newsCur.cateId === 2 ? 'flex' : 'none'}` }}>本文来源: {newsCur.source}</div>
                <div className="func">
                    <div className="comment-favorite">
                        <a className={`favorite ${ifCollect === 1 ? 'active' : ''}`} onClick={favoriteDo} />
                        <a
                            className="comment"
                            onClick={() => arriveAtDom(document.getElementById('newsMessage'), 500, { add: -120 })}>
                            {newsCur.commentCount}
                        </a>
                    </div>
                    <div className="share">
                        分享
                        {typeof window !== 'undefined' && shareCon}
                    </div>
                    <div className="goto-top" onClick={() => arriveAtDom(0)} />
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    const multi = state.multi
    return {
        userInfo: multi.login.userInfo.info,
        newsDetails: state.news.newsDetails,
        authorInfo: multi.news.author.authorInfo
    }
}

export default connect(mapStateToProps)(Share)
