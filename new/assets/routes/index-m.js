import Layout from 'multiCompsM/Layout'

import HomePage from '../pages-m/Home'
import Tags from '../pages-m/Tags'
import Author from '../pages-m/Author'
import Details from '../pages-m/Details'
import DetailShare from '../pages-m/DetailShare'
import Feature from '../pages-m/Feature'
import AuthorDetails from '../pages-m/AuthorDetails'
import FeatureDetails from '../pages-m/FeatureDetails'
import Flash from '../pages-m/Flash'
import FlashDetail from '../pages-m/FlashDetail'
import NoticeDetailPage from '../pages-m/NoticeDetail'
import FlashShareDetailPage from '../pages-m/FlashShareDetail'
import RollNews from '../pages/RollNews'

/** @desc 以下路由没有相对应的mob页面，只有pc页面。在此添加当mob端访问时渲染pc页面
 * exact 精准的 是否匹配子路由
 * strict 严格的 是否匹配斜杠”/“
 * 由于matchRoutes不能匹配多层component:root。故在pc端component的root下路由，在此需要分拆配置
 * */
const onlyPcRoutes = []

/** @desc 以下为正常移动端路由 */

export default (params) => {
    const routes = [
        {
            path: '/flashshare/:flashId.html', component: FlashShareDetailPage, exact: true, strict: true
        }, {
            path: '/newsdetailShare/:newsId.html', component: DetailShare, exact: true, strict: true
        }, {
            component: Layout,
            routes: [
                {
                    path: ['', '/', '/list', '/list/', '/list/:channelId'], component: HomePage, exact: true, strict: true
                }, {
                    path: '/roll', component: RollNews
                }, {
                    path: ['/author/:order/:type/:page', '/author'], component: Author
                }, {
                    path: '/author/details/:authorId', component: AuthorDetails
                }, {
                    path: '/feature/:featureId', component: FeatureDetails
                }, {
                    path: '/feature', component: Feature, exact: true
                }, {
                    path: ['/tags/:tags', '/tags'], component: Tags
                }, {
                    path: '/flash/', component: Flash, exact: true, strict: false
                }, {
                    path: '/livenews/', component: Flash, exact: true
                }, {
                    path: '/flash/:flashId.html', component: FlashDetail
                }, {
                    path: '/newsdetail/:newsId.html', component: Details, exact: true, strict: true
                }, {
                    path: '/noticeDetail/:noticeId', component: NoticeDetailPage
                }
            ]
        }
    ]
    return onlyPcRoutes.concat(routes)
}

// export default onlyPcRoutes.concat(routes)
