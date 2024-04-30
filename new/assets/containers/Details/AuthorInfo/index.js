import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import RightItemWrapper from 'multiComps/RightItemWrapper'
import { mixUrl } from 'multiPublic/index'
import { AttentionButton, AuthorName, Avatar } from 'multiComps/AuthorInfo'

const AuthorInfo = (props) => {
    /** @desc 获取props */
    const { authorInfo, newsCur, userInfo, attentionSuccessed } = props
    const { t } = useTranslation()
    const myPassportId = userInfo.passportId
    return <RightItemWrapper firstItem={true}>
        <div style={{ display: `${newsCur.cateId === 1 ? 'block' : 'none'}` }}>
            <div className="news-details-user-info">
                <Avatar className="avatar" authorInfo={authorInfo}/>
                <div className="info-right">
                    <h5>
                        <AuthorName authorInfo={authorInfo}/>
                        {newsCur.createdBy !== myPassportId && <AttentionButton
                            authorInfo={authorInfo}
                            attentionSuccessed={attentionSuccessed}
                        />}
                    </h5>
                    <p>{authorInfo.introduce}</p>
                </div>
            </div>
            <div className="news-details-user-list">
                <h5>{t('news_updated')}</h5>
                <div className="list">{Array.isArray(authorInfo.infolist) && authorInfo.infolist.map(function (item, index) {
                    const link = mixUrl.news(`/${item.id}.html`)
                    return <a href={link} key={item.id} target="_blank">{item.title}</a>
                })}</div>
            </div>
        </div>
        <div style={{ display: `${newsCur.cateId === 2 ? 'block' : 'none'}` }}>
            <div className="source-title clearfix" title={newsCur.source}>
              {t('news_this_article')}：{newsCur.source}
            </div>
            <div className="original-title">
                {t('news_author_title')}：
                {newsCur.originalUrl ? <a
                    href={newsCur.originalUrl} target="_blank">
                    {newsCur.originalTitle}
                </a> : newsCur.originalTitle}
            </div>
        </div>
    </RightItemWrapper>
}

const mapStateToProps = (state) => {
    const multi = state.multi
    return {
        userInfo: multi.login.userInfo.info,
        authorInfo: multi.news.author.authorInfo,
        newsCur: state.news.newsDetails.current || {}
    }
}

export default connect(mapStateToProps)(AuthorInfo)
