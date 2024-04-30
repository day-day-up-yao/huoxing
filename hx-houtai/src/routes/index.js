/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：root route
 */

import React from 'react'
import Cookies from 'js-cookie'
import {Route, IndexRedirect} from 'react-router'
import { replace } from 'react-router-redux'
// 根目录，未登录的时候跳转到登录首页，登录后，由action切换到列表页面

// 现在增加在pc版本上一个自由访问移动版的功能

function isLogin (nextState, replace) {
    let loginStatus = Cookies.get('loginStatus')
    const ua = navigator.userAgent.toLowerCase()
    // const agents = ['iphone', 'ipad', 'ipod', 'android', 'linux', 'windows phone']; // 所有可能是移动端设备的字段
    if (ua.indexOf('mobile') > -1 && (!loginStatus || !Cookies.get('hx_passportId') || !$.parseJSON(loginStatus))) {
        replace('/mlogin')
    } else {
        if (!loginStatus || !Cookies.get('hx_passportId') || !$.parseJSON(loginStatus)) {
            replace('/login')
        }
    }
}
function isMobile (nextState, repalce) {
    // 判断移动端和是否登录的状态
    var url = 'mobile'
    let loginStatus = Cookies.get('loginStatus')
    if (loginStatus && url.indexOf('mobile') > -1) {
        replace('/mobile')
    } else {
        replace('/mlogin')
    }
}
const role = Cookies.get('hx_role')
const rootRoutes = <div>
    {/*
    <Route path="/" onEnter={isLogin} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Main').default)
        }, 'HasHeader')
    }}>
        <Route path='/enter' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Enter').default)
            }, 'Enter')
        }}/>
        <Route path='/system' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/System/system.index').default)
            }, 'SystemIndex')
        }}/>
        <Route path='/game-init' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/GameInit/game.init').default)
            }, 'GameInit')
        }}/>
    </Route>
    */}
    <Route path="/" onEnter={isLogin} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Main').default)
        }, 'Main')
    }}>
        {(() => {
            if (role && parseInt(role) === 5) {
                return <IndexRedirect to="/marsTrip-list" />
            } else if (role && parseInt(role) === 6) {
                return <IndexRedirect to="/adData-list" />
            } else if (role && parseInt(role) === 7) {
                return <IndexRedirect to="/college-courseList" />
            } else {
                return <IndexRedirect to="/post-list" />
            }
        })()}
        {/* 新闻管理 */}
        <Route path='/post-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Post/post.index').default)
            }, 'PostIndex')
        }}/>
        <Route path='/post-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Post/post.detail').default)
            }, 'PostDetail')
        }}/>
        <Route path='/post-send' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Post/post.send').default)
            }, 'PostSend')
        }}/>
        <Route path='/post-channel' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Post/post.channel').default)
            }, 'PostChannel')
        }}/>
        <Route path='/post-notice' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Post/post.notice').default)
            }, 'PostNotice')
        }}/>
        {/* 视频管理 */}
        <Route path='/video-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Video/video.index').default)
            }, 'VideoIndex')
        }}/>
        <Route path='/video-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Video/video.detail').default)
            }, 'VideoDetail')
        }}/>
        <Route path='/video-send' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Video/video.send').default)
            }, 'VideoSend')
        }}/>
        {/* 快讯 */}
        <Route path='/flash-lists' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.index').default)
            }, 'FlashIndex')
        }}/>
        <Route path='/flash-audit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.audit').default)
            }, 'FlashAudit')
        }}/>
        <Route path='/flash-auditEdit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.auditEdit').default)
            }, 'FlashAuditEdit')
        }}/>
        <Route path='/flash-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.detail').default)
            }, 'FlashDetail')
        }}/>
        <Route path='/flash-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.send').default)
            }, 'FlashSend')
        }}/>
        <Route path='/flash-type' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.type.jsx').default)
            }, 'FlashType')
        }}/>
        {/* 日历管理 */}
        <Route path='/cc-calendarLists' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Calendar/calendar.index').default)
            }, 'CalendarIndex')
        }}/>
        <Route path='/cc-chanceLists' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Calendar/chance.lists').default)
            }, 'ChanceLists')
        }}/>
        <Route path='/cc-calendarAdd' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Calendar/calendar.add').default)
            }, 'CalendarAdd')
        }}/>
        <Route path='/cc-chanceAdd' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Calendar/chance.add').default)
            }, 'ChanceAdd')
        }}/>
        {/* 评论管理 */}
        <Route path='/comment-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Comment/comment.index').default)
            }, 'CommentIndex')
        }}/>
        <Route path='/postUser' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/User/user.index').default)
            }, 'UserIndex')
        }}/>
        <Route path='/postUser-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/User/user.detail').default)
            }, 'UserDetail')
        }}/>
        <Route path='/images' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Imgs/img.index').default)
            }, 'ImgsIndex')
        }}/>
        {/* <Route path='/gameConfig' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/GameConfig/game.index').default)
            }, 'GameIndex')
        }}/> */}
        <Route path='/language' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Language/language.index').default)
            }, 'LanguageIndex')
        }}/>
        {/* 广告管理 */}
        <Route path='/ad-pc' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ad/pcAd.index.jsx').default)
            }, 'AdIndex')
        }}/>
        <Route path='/ad-mobile' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ad/mobileAd.index.jsx').default)
            }, 'AdIndex')
        }}/>
        <Route path='/ad-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ad/pcAd.send.jsx').default)
            }, 'AdEdit')
        }}/>
        <Route path='/adM-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ad/mobileAd.send.jsx').default)
            }, 'MAdEdit')
        }}/>
        {/* 认证管理 */}
        <Route path='/audit-identify' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/AuthorAudit/audit.index.jsx').default)
            }, 'AuditIndex')
        }}/>
        <Route path='/audit-details' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/AuthorAudit/audit.detail.jsx').default)
            }, 'AuditDetails')
        }}/>
        <Route path='/audit-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/ArticleAudit/checkArticle.index.jsx').default)
            }, 'ArticleIndex')
        }}/>
        <Route path='/audit-draft' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/ArticleAudit/draftArticle.index.jsx').default)
            }, 'ArticleDraft')
        }}/>,
        <Route path='/checkArticle-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/ArticleAudit/checkArticle.send.jsx').default)
            }, 'ArticleSend')
        }}/>
        <Route path='/checkArticle-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/ArticleAudit/checkArticle.detail.jsx').default)
            }, 'ArticleDetail')
        }}/>
        <Route path='/audit-official' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/AuthorAudit/official.index.jsx').default)
            }, 'OfficialIndex')
        }}/>
        <Route path='/audit-whitelist' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/AuthorAudit/whitelist.index.jsx').default)
            }, 'WhiteListAudit')
        }}/>
        <Route path='/audit-update' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/AuthorAudit/official.update.jsx').default)
            }, 'OfficialAuditUpdate')
        }}/>
        <Route path='/audit-add' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/AuthorAudit/official.add.jsx').default)
            }, 'OfficialAuditAdd')
        }}/>
        {/* ICO 管理 */}
        <Route path='/ico-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ico/ico.index.jsx').default)
            }, 'IcoIndex')
        }}/>
        <Route path='/ico-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ico/ico.edit.jsx').default)
            }, 'IcoEdit')
        }}/>
        <Route path='/ico-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ico/ico.detail.jsx').default)
            }, 'IcoDetail')
        }}/>
        {/* 直播管理 */}
        <Route path='/live-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.index.jsx').default)
            }, 'LiveIndex')
        }}/>
        <Route path='/live-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.edit.jsx').default)
            }, 'LiveEdit')
        }}/>
        <Route path='/live-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.detail.jsx').default)
            }, 'LiveDetail')
        }}/>
        <Route path='/live-userList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.userList.jsx').default)
            }, 'LiveUserList')
        }}/>
        <Route path='/live-userEdit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.userEdit.jsx').default)
            }, 'LiveUserEdit')
        }}/>
        <Route path='/live-commentList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.commentList.jsx').default)
            }, 'commentList')
        }}/>
        {/* 新闻专题管理 */}
        <Route path='/specialTopic-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/specialTopic.index.jsx').default)
            }, 'specialTopicList')
        }}/>
        <Route path='/specialTopic-add' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/specialTopic.add.jsx').default)
            }, 'SpecialTopicAdd')
        }}/>
        <Route path='/specialTopic-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/specialTopic.edit.jsx').default)
            }, 'SpecialTopicEdit')
        }}/>
        <Route path='/topicContent-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/topicContent.edit.jsx').default)
            }, 'TopicContentEdit')
        }}/>
        <Route path='/specialTopic-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/specialTopic.detail.jsx').default)
            }, 'SpecialTopicDetail')
        }}/>
        {/* 币种推荐/热词搜索管理 */}
        <Route path='/webCoinRecommend-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/WebCoinRecommend/webCoinRecommend.index.jsx').default)
            }, 'WebCoinRecommendList')
        }}/>

        <Route path='/coinRecommend-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/CoinRecommend/coinRecommend.index.jsx').default)
            }, 'CoinRecommendList')
        }}/>

        <Route path='/appGuideCoin-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/AppOpenCoinRecommend/appOpenCoinRecommend.index').default)
            }, 'AppGuideCoinList')
        }}/>

        <Route path='/hotCoin-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/HotCoin/hotCoin.index.jsx').default)
            }, 'HotCoinList')
        }}/>

        <Route path='/newsHotWords-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/NewsHotWords/newsHotWords.index.jsx').default)
            }, 'NewsHotWordsList')
        }}/>

        {/* app 发现页轮播管理 */}
        <Route path='/appTopic-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/AppTopic/appTopic.index.jsx').default)
            }, 'AppTopicList')
        }}/>
        <Route path='/appTopic-add' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/AppTopic/appTopic.add.jsx').default)
            }, 'AppTopicAdd')
        }}/>
        <Route path='/appTopic-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/AppTopic/appTopic.edit.jsx').default)
            }, 'AppTopicEdit')
        }}/>

        {/* pc 和 M 端轮播管理 */}
        <Route path='/banner-topList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.top.jsx').default)
            }, 'BannerTop')
        }}/>
        <Route path='/banner-trList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.topRight.jsx').default)
            }, 'BannerTr')
        }}/>
        <Route path='/banner-activeList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.active.jsx').default)
            }, 'BannerActive')
        }}/>
        <Route path='/banner-productList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.product.jsx').default)
            }, 'BannerProduct')
        }}/>
        <Route path='/banner-add' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.add.jsx').default)
            }, 'BannerAdd')
        }}/>
        {/* 专栏作者管理 */}
        <Route path='/columnAuthor-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ColumnAuthor/columnAuthor.index').default)
            }, 'ColumnAuthorIndex')
        }}/>
        <Route path='/columnAuthor-setTop' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ColumnAuthor/authorTop.edit.jsx').default)
            }, 'ColumnAuthorSetTop')
        }}/>
        {/* 聚合管理 */}
        <Route path='/merge-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/NewsMerge/newsMerge.index').default)
            }, 'NewsMergeIndex')
        }}/>
        <Route path='/merge-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/NewsMerge/newsMerge.edit').default)
            }, 'NewsMergeEdit')
        }}/>
        {/* 账号管理 */}
        <Route path='/account-flashAccount' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Account/flashAccount/flashAccount.index').default)
            }, 'FlashAccount')
        }}/>
        <Route path='/post-account' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Account/postAccount/postAccount.index').default)
            }, 'PostAccount')
        }}/>
        <Route path='/post-tactics' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Account/postTactics/postTactics.index').default)
            }, 'PostTactics')
        }}/>
        <Route path='/account-blackList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Account/blackListAccount/blackListAccount').default)
            }, 'BlackListAccount')
        }}/>
        {/* 合作管理 */}
        <Route path='/cooperation' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Cooperation/cooperation.index').default)
            }, 'Cooperation')
        }}/>
        {/* 更换注册账号 */}
        <Route path='/amendPhone' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/AmendPhone/amendPhone.index').default)
            }, 'AmendPhone')
        }}/>
        {/* 系统管理员 */}
        <Route path='/systemAccount-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SystemManager/managerAccount.index').default)
            }, 'SystemManager')
        }}/>
        {/* 火星中国行 */}
        <Route path='/marsTrip-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MarsTrip/marsTrip.index').default)
            }, 'MarsTripList')
        }}/>
        <Route path='/registrant-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MarsTrip/registrant.list').default)
            }, 'RegistrantList')
        }}/>
        {/* 简单统计 */}
        <Route path='/count-total' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Count/countTotal.index.jsx').default)
            }, 'Count')
        }}/>
        {/* 简单统计 */}
        <Route path='/count-news' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Count/countNewsRead.index.jsx').default)
            }, 'Count')
        }}/>
        {/* 快讯推送 */}
        <Route path='/push-flash' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/PushManage/FlashPush/flashPush.index').default)
            }, 'PushFlash')
        }}/>
        {/* 活动页面内容管理 */}
        <Route path='/activity-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/activity.index').default)
            }, 'ActivityList')
        }}/>
        <Route path='/activity-add' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/activity.add').default)
            }, 'ActivityAdd')
        }}/>
        <Route path='/activity-powerGuest-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuest/list').default)
            }, 'PowerGuestList')
        }}/>
        <Route path='/activity-powerGuest-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuest/edit').default)
            }, 'PowerGuestEdit')
        }}/>
        <Route path='/activity-powerFame-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerFame/index').default)
            }, 'PowerFameList')
        }}/>
        <Route path='/activity-powerPoke-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerPoke/list').default)
            }, 'PowerPokeList')
        }}/>
        <Route path='/activity-powerGuestYN-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestYN/list').default)
            }, 'PowerGuestYNList')
        }}/>
        <Route path='/activity-powerGuestYN-collaborate' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestYN/cooperation').default)
            }, 'PowerGuestYNCollaborate')
        }}/>
        <Route path='/activity-powerGuestYN-agendaList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestYN/agendaList').default)
            }, 'PowerGuestYNAgendaList')
        }}/>
        <Route path='/activity-powerGuestYN-agendaType' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestYN/agendaType').default)
            }, 'PowerGuestYNAgendaType')
        }}/>
        <Route path='/activity-powerGuestYN-recommend' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestYN/recommend').default)
            }, 'PowerGuestYNRecommend')
        }}/>
        <Route path='/activity-powerGuestYN-imgList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestYN/imgList').default)
            }, 'PowerGuestYNImgList')
        }}/>
        <Route path='/activity-powerGuestSH-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestSH/list').default)
            }, 'PowerGuestSHList')
        }}/>
        <Route path='/activity-powerGuestSH-collaborate' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestSH/cooperation').default)
            }, 'PowerGuestSHCollaborate')
        }}/>
        <Route path='/activity-powerGuestSH-agendaList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestSH/agendaList').default)
            }, 'PowerGuestSHAgendaList')
        }}/>
        <Route path='/activity-powerGuestSH-agendaType' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestSH/agendaType').default)
            }, 'PowerGuestSHAgendaType')
        }}/>
        <Route path='/activity-powerGuestSH-recommend' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestSH/recommend').default)
            }, 'PowerGuestSHRecommend')
        }}/>
        <Route path='/activity-powerGuestSH-imgList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestSH/imgList').default)
            }, 'PowerGuestSHImgList')
        }}/>
        <Route path='/activity-powerGuestSZ-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/powerGuestSZ/list').default)
            }, 'powerGuestSZList')
        }}/>
        <Route path='/activity-powerGuestSZ-collaborate' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/powerGuestSZ/cooperation').default)
            }, 'powerGuestSZCollaborate')
        }}/>
        <Route path='/activity-powerGuestSZ-agendaList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/powerGuestSZ/agendaList').default)
            }, 'powerGuestSZAgendaList')
        }}/>
        <Route path='/activity-powerGuestSZ-agendaType' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/powerGuestSZ/agendaType').default)
            }, 'powerGuestSZAgendaType')
        }}/>
        <Route path='/activity-powerGuestSZ-recommend' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/powerGuestSZ/recommend').default)
            }, 'powerGuestSZRecommend')
        }}/>
        <Route path='/activity-powerGuestSZ-imgList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/powerGuestSZ/imgList').default)
            }, 'powerGuestSZImgList')
        }}/>
        <Route path='/activity-powerGuestBJ-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestBJ/list').default)
            }, 'PowerGuestBJList')
        }}/>
        <Route path='/activity-powerGuestBJ-collaborate' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestBJ/cooperation').default)
            }, 'PowerGuesBJCollaborate')
        }}/>
        <Route path='/activity-powerGuestBJ-agendaList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestBJ/agendaList').default)
            }, 'PowerGuesBJAgendaList')
        }}/>
        <Route path='/activity-powerGuestBJ-agendaType' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestBJ/agendaType').default)
            }, 'PowerGuesBJAgendaType')
        }}/>
        <Route path='/activity-powerGuestBJ-recommend' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestBJ/recommend').default)
            }, 'PowerGuesBJRecommend')
        }}/>
        <Route path='/activity-powerGuestBJ-imgList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestBJ/imgList').default)
            }, 'PowerGuesBJImgList')
        }}/>
        <Route path='/activity-powerGuestZH-imgList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestZH/imgList').default)
            }, 'PowerGuesZHImgList')
        }}/>
        <Route path='/activity-powerGuestZH-activityList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestZH/activityList').default)
            }, 'PowerGuesZHActivityList')
        }}/>
        <Route path='/activity-powerGuestZH-agendaList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestZH/agendaList').default)
            }, 'PowerGuesZHAgendaList')
        }}/>
        <Route path='/activity-powerGuestZH-collaborate' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestZH/cooperation').default)
            }, 'PowerGuesZHCollaborate')
        }}/>
        <Route path='/activity-powerGuestZH-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestZH/list').default)
            }, 'PowerGuestZHList')
        }}/>
        <Route path='/activity-powerGuestZH-prizeList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity/PowerGuestZH/prizeList').default)
            }, 'PowerGuestZHprizeList')
        }}/>

        {/* 活动发布管理 */}
        <Route path='/activityPublish-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ActivityPublish/activityPublish.index').default)
            }, 'ActivityPublishIndex')
        }}/>
        <Route path='/activityPublish-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ActivityPublish/activityPublish.detail').default)
            }, 'ActivityPublishDetail')
        }}/>
        <Route path='/activityPublish-send' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ActivityPublish/activityPublish.send').default)
            }, 'ActivityPublishSend')
        }}/>
        <Route path='/activityPublish-city' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ActivityPublish/activityPublish.city').default)
            }, 'ActivityPublishCity')
        }}/>
        {/* 关键词过滤 */}
        <Route path='/wordsFilter' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/WordsFilter/wordsFilter.index.jsx').default)
            }, 'WordsFilter')
        }}/>
        {/* 小程序新闻编辑 */}
        <Route path='/miniNews-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MiniApp/MiniNews/miniNews.index.jsx').default)
            }, 'MiniNewsIndex')
        }}/>
        <Route path='/miniNews-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MiniApp/MiniNews/miniNews.detail.jsx').default)
            }, 'MiniNewsDetail')
        }}/>
        <Route path='/miniNews-send' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MiniApp/MiniNews/miniNews.update.jsx').default)
            }, 'MiniNewsSend')
        }}/>
        {/* 小程序视频编辑 */}
        <Route path='/miniVideo-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MiniApp/MiniVideo/miniVideo.index.jsx').default)
            }, 'MiniVideoIndex')
        }}/>
        <Route path='/miniVideo-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MiniApp/MiniVideo/miniVideo.detail.jsx').default)
            }, 'MiniVideoDetail')
        }}/>
        <Route path='/miniVideo-send' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MiniApp/MiniVideo/miniVideo.update.jsx').default)
            }, 'MiniVideoSend')
        }}/>
        {/* 反馈管理 */}
        <Route path='/feedBack-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/FeedBack/feedBack.index.jsx').default)
            }, 'FeedBackList')
        }}/>
        {/* 视频审核 */}
        <Route path='/audit-video' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/VideoAudit/videoAudit.index.jsx').default)
            }, 'VideoAuditList')
        }}/>
        <Route path='/audit-videoDetail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/VideoAudit/videoAudit.detail.jsx').default)
            }, 'VideoAuditDetail')
        }}/>
        <Route path='/audit-videoSend' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/VideoAudit/videoAudit.send.jsx').default)
            }, 'VideoAuditSend')
        }}/>
        {/* 火星号榜单管理 */}
        <Route path='/audit-mprank' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/MprankAudit/mprankAudit.index.jsx').default)
            }, 'MprankAuditList')
        }}/>
        {/* 添加火星号榜单管理 */}
        <Route path='/audit-mprankAdd' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/MprankAudit/mprankAudit.add.jsx').default)
            }, 'MprankAuditAdd')
        }}/>
        {/* 交易所推荐 */}
        <Route path='/exchangeRecommend-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/ExchangeRecommend/exchangeRecommend.index.jsx').default)
            }, 'ExchangeRecommendList')
        }}/>
        {/* 版本更新内容管理 */}
        <Route path='/version-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/Version/version.index').default)
            }, 'VersionList')
        }}/>
        <Route path='/version-upload' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/Version/upload.index').default)
            }, 'VersionAdd')
        }}/>
        <Route path='/version-upfile' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/Version/upfile.index').default)
            }, 'Versionupload')
        }}/>
        <Route path='/version-uploadweb' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/Version/upfileweb.index').default)
            }, 'Versionupfile')
        }}/>
        {/* 热门标签和作者管理 */}
        <Route path='/tagsAndAuthor-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Entries/HotAuthorAndTags/index').default)
            }, 'TagsAndAuthor')
        }} />
        {/* twitter 列表 */}
        <Route path='/socialMedia-twitter' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SocialMedia/Twitter/twitterFlash').default)
            }, 'SocialMediaTwitter')
        }}/>
        <Route path='/socialMedia-account' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SocialMedia/Twitter/twitterAccount/twitterAccount.index').default)
            }, 'SocialMediaAccount')
        }}/>
        {/* 广告数据 */}
        <Route path='/adData-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/AdData/adData.index.jsx').default)
            }, 'AdDataIndex')
        }}/>
        <Route path='/adData-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/AdData/adData.detail.jsx').default)
            }, 'AdDataDetail')
        }}/>
        <Route path='/tagv2-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Tagsv2/tagv2.list').default)
            }, 'Tagsv2List')
        }} />
        <Route path='/tagv2-send' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Tagsv2/tagv2.send').default)
            }, 'Tagsv2Send')
        }} />
        <Route path='/agenda-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Conference/agenda.index').default)
            }, 'AgendaList')
        }} />
        <Route path='/guest-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Conference/guest.index').default)
            }, 'GuestList')
        }} />
        <Route path='/media-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Conference/media.index').default)
            }, 'MediaList')
        }} />
        <Route path='/guest-send' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Conference/guest.send').default)
            }, 'GuestSend')
        }} />
        {/* STO嘉宾管理 */}
        <Route path='/sto-userList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/STO/user/sto.userList.jsx').default)
            }, 'StoUserList')
        }}/>
        <Route path='/sto-userEdit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/STO/user/sto.userEdit.jsx').default)
            }, 'StoUserEdit')
        }}/>
        <Route path='/sto-notice' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/STO/notice/stoNotice.index.jsx').default)
            }, 'StoNoticeEdit')
        }}/>
        <Route path='/sto-partner' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/STO/participate/participate.list').default)
            }, 'StoPartner')
        }}/>
        {/* 火星大学 */}
        <Route path='/college-lecList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/College/Lecturer/lecturerList').default)
            }, 'LecturerList')
        }}/>
        <Route path='/college-lecEdit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/College/Lecturer/lecturerEdit').default)
            }, 'LecturerEdit')
        }}/>
        <Route path='/college-courseList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/College/Course/courseList').default)
            }, 'CourseList')
        }}/>
        <Route path='/college-courseSend' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/College/Course/courseSend').default)
            }, 'CourseSend')
        }}/>
        <Route path='/college-chapterList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/College/Chapter/chapterList').default)
            }, 'ChapterList')
        }}/>
        <Route path='/college-chapterSend' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/College/Chapter/chapterSend').default)
            }, 'ChapterSend')
        }}/>
        {/* 移动端到导航页面 */}
        <Route path='/mobile-index' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Mobile/mobile.index.jsx').default)
            }, 'Mobile')
        }}/>
    </Route>

    <Route path="/mflash-list" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mainmobile').default)
        }, 'Mainmobile')
    }}></Route>
    <Route path="/mflash-edit" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mainmobile/mflash.edit').default)
        }, 'MflashEdit')
    }}></Route>
    <Route path="/webAd-list" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/webAd.index').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/webAd-edit" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/webAd.edit').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/appAd-list" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/appAd.index').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/appAd-edit" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/appAd.edit').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/userLive-list" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/userLive.index').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/userLive-edit" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/userLive.edit').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/chatLive-index" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/chatLive.index').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/offiLive-list" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/offiLive.index').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/recommend-list" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/recommend.index').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/marsLive-list" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/appAd.index').default)
        }, 'Mobile')
    }}></Route>
    <Route path="/mobile" onEnter={isMobile} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mobile/index').default)
        }, 'Mobile')
    }}>
    </Route>
    <Route path='/login' getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Login').default)
        }, 'Login')
    }}/>
    <Route path="/mlogin" getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Mlogin').default)
        }, 'Mlogin')
    }}/>
    <Route path='/*' getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Login').default)
        }, '404')
    }}/>
</div>

export default rootRoutes
