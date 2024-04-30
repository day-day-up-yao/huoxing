import React from 'react'
import './index.scss'
import vOrange from 'multiPublic/img/v-orange.svg'
import vBlue from 'multiPublic/img/v-blue.svg'
/** @desc 头像，不可跳转 */
export default (props) => {
    const { authorInfo, iconHide } = props
    let authStyle = null
    let authName = '普通用户'
    switch (parseInt(authorInfo.vGrade)) {
        case 0:
            authName = '普通用户'
            break
        case 1:
            authStyle = vOrange
            authName = 'MarsBit 专栏个人认证'
            break
        case 2:
            authStyle = vBlue
            authName = 'MarsBit 专栏媒体认证'
            break
        case 3:
            authStyle = vBlue
            authName = 'MarsBit 专栏机构认证'
            break
        default:
            authName = '普通用户'
    }
    return <div className="author-info-avatar">
        <div className="author-info-avatar-img">
            <img className="img-clear-blur avatar-img" src={authorInfo.iconUrl} alt={authorInfo.nickname} />
            {authStyle && !iconHide && <span title={authName} className="avatar-mark">
                <img className="img-clear-blur" src={authStyle} alt={authorInfo.nickName} />
            </span>}
        </div>
        <div className="author-info-avatar-text">
            <p className="live-profile-title">
                <span>{authorInfo.nickName}
                    <span className="avatar-role">
                        {authorInfo.userType === 0 ? <span className="guest-icon">嘉宾</span> : <span className="presenter-icon">主播</span>}
                    </span>
                </span>
            </p>
            <p className="im-live-list-right-live-good-up-item-text">
                {authorInfo.introduce}
            </p>
        </div>
    </div>
}
