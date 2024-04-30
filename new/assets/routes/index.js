import Layout from 'multiComps/Layout'

import HomePage from '../pages/Home'
import Details from '../pages/Details'
import Author from '../pages/Author'
import AuthorDetails from '../pages/AuthorDetails'
import Feature from '../pages/Feature'
import FeatureDetails from '../pages/FeatureDetails'
import Tags from '../pages/Tags'
import Flash from '../pages/Flash'
import FlashDetail from '../pages/FlashDetail'
import NoticeDetailPage from '../pages/NoticeDetail'
import NoticePage from '../pages/Notice'
import RollNews from '../pages/RollNews'
// import DetailShare from '../pages-m/DetailShare'
/** @desc 以下路由没 有相对应的pc页面，只有mob页面。在此添加当pc端访问时渲染移动端页面
 * exact 精准的 是否匹配子路由
 * strict 严格的 是否匹配斜杠”/“
 * 由于matchRoutes不能匹配多层component:root。故在m端component的root下路由，在此需要分拆配置
 * */
import FlashShareDetailPage from '../pages-m/FlashShareDetail'
const onlyMobRoutes = [
    {
        path: '/flashshare/:flashId.html', component: FlashShareDetailPage, exact: true, strict: true
    }
]

/** @desc 以下为正常pc端路由  */
export default (params) => {
    const routes = [
        {
            component: Layout,
            routes: [
                {
                    path: ['', '/', '/list', '/list/', '/list/:channelId'], component: HomePage, exact: true, strict: true
                }, {
                    path: '/roll', component: RollNews
                }, {
                    path: '/author/details/:authorId', component: AuthorDetails
                }, {
                    path: ['/author/:order/:type/:page', '/author'], component: Author
                }, {
                    path: '/feature/:featureId', component: FeatureDetails
                }, {
                    path: '/feature', component: Feature, exact: true
                }, {
                    path: ['/tags/:tags', '/tags'], component: Tags
                }, {
                    path: '/flash', component: Flash, exact: true, strict: false
                }, {
                    path: '/flash/:flashId.html', component: FlashDetail
                }, {
                    path: '/:newsId.html', component: Details, exact: true, strict: true
                }, {
                    path: '/notice', component: NoticePage
                }, {
                    path: '/noticeDetail/:id', component: NoticeDetailPage
                }
            ]
        }
    ]
    return onlyMobRoutes.concat(routes)
}

// export default onlyMobRoutes.concat(routes)
