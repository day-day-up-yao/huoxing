import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import vOrange from '../../public/img/v-orange.svg'
import vBlue from '../../public/img/v-blue.svg'

import { isLogin } from 'multiComps/RegisterLogin/public'
import Toast from 'multiComps/Toast'
import { mixUrl } from 'multiPublic/index'
import { attentionAuthor } from 'multiRedux/actions/news'

/** @desc 关注按钮 */
export const AttentionButton = connect((state) => ({
    userInfo: state.multi.login.userInfo.info
}))((props) => {
    const { authorInfo, userInfo, attentionSuccessed, className, dispatch } = props
    const { t } = useTranslation()

    /** @desc 关注作者 */
    const attentionAuthorFunc = useCallback(() => {
        if (!isLogin(userInfo.passportId, dispatch)) return

        const type = authorInfo.ifCollect === 1 ? 'delete' : 'add'
        const id = authorInfo.passportId
        attentionAuthor({
            passportid: userInfo.passportId,
            token: userInfo.token,
            authorId: id
        }, type).then(function (res) {
            if (res.code === 1) {
                attentionSuccessed()
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            Toast.info('关注作者错误')
            throw err
        })
    }, [userInfo, authorInfo])
    return <button
        onClick={attentionAuthorFunc}
        className={`attention-author-button ${authorInfo.ifCollect === 1 ? 'active' : ''} ${className || ''}`}>
        {authorInfo.ifCollect === 1 ? t('guan_zhu_ed') : t('guan_zhu')}
    </button>
})

/** @desc 头像 */
export const Avatar = (props) => {
    const { authorInfo, iconHide, className } = props // iconHide认证类型图标是否隐藏
    const { t } = useTranslation()

    /** @desc 认证样式与名称 */
    let authStyle = null
    let authName = t('author_info_ordinary_user')
    switch (parseInt(authorInfo.vGrade)) {
        case 0:
            authName = t('author_info_ordinary_user')
            break
        case 1:
            authStyle = vOrange
            authName = `MarsBit ${t('author_info_zl_self')}`
            break
        case 2:
            authStyle = vBlue
            authName = `MarsBit ${t('author_info_zl_media')}`
            break
        case 3:
            authStyle = vBlue
            authName = `MarsBit ${t('author_info_zl_enterprise')}`
            break
        default:
            authName = t('author_info_ordinary_user')
    }

    return <a
        href={mixUrl.main(`/userCenter/${authorInfo.passportId}`)}
        title={authorInfo.nickName}
        className={`author-info-avatar ${className || ''}`}
        target="_blank">
        <span className="avatar-img"><img className="img-clear-blur" src={authorInfo.iconUrl} alt={authorInfo.nickName} /></span>
        {authStyle && !iconHide && <span title={authName} className="avatar-mark">
            <img className="img-clear-blur" src={authStyle} alt={authorInfo.nickName} />
        </span>}
    </a>
}

/** @desc 作者名称 */
export const AuthorName = (props) => {
    const { authorInfo, className } = props
    return <a
        href={mixUrl.main(`/userCenter/${authorInfo.passportId}`)} title={authorInfo.nickName}
        className={`author-info-user-name ${className || ''}`} target="_blank">
        {authorInfo.nickName}
    </a>
}

/** @desc 作者类型标签 */
export const AuthorType = (props) => {
    const { authorInfo, className } = props
    const { t } = useTranslation()

    /** @desc 认证样式与名称 */
    let authStyle = { display: 'none' }
    let authName = ''
    switch (parseInt(authorInfo.vGrade)) {
        case 1:
            authStyle = { display: 'block', color: 'rgba(255, 123, 1, 1)', background: 'rgba(255, 123, 1, 0.1)' }
            authName = t('author_info_self')
            break
        case 2:
            authStyle = { display: 'block', color: 'rgba(10, 127, 242, 1)', background: 'rgba(10, 127, 242, 0.1)' }
            authName = t('author_info_media')
            break
        case 3:
            authStyle = { display: 'block', color: 'rgba(10, 127, 242, 1)', background: 'rgba(10, 127, 242, 0.1)' }
            authName = t('author_info_enterprise')
            break
        default:
            break
    }

    return (
        <div className={`author-info-user-type ${className || ''}`} style={authStyle} >
            {authName}
        </div>
    )
}
