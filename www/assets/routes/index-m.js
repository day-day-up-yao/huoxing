import Layout from 'multiComps/Layout'
import LayoutM from 'multiCompsM/Layout'
import NotLayout from '../components/NotLayout/index'

import HomePage from '../pages-m/Home'
// import LiveDetailPage from '../pages-m/LiveDetail' // 文字直播已废弃
// import LiveUserPage from '../pages-m/LiveUser' // 文字直播已废弃
import LiveSharePage from '../pages-m/LiveShare'
import LiveSharePage2 from '../pages-m/LiveShare2'
import LearningPage from '../pages-m/Learning'
import SearchPage from '../pages-m/Search'
import LoginSitePage from '../pages-m/LoginSite'
import LiveRoomPage from '../pages-m/LiveList'
import HotcubPage from '../pages-m/HotCub'
// import ComplaintsPage from '../pages-m/Complaints'
import DownloadPage from '../pages-m/Download'
import JobPage from '../pages-m/Job'
import ProtocolPage from '../pages-m/Protocol'
import ProtocolLivePage from '../pages-m/ProtocolLive'
import PrivacyPage from '../pages-m/Privacy'
import AppStreaming from '../pages-m/AppStreaming'
import NaGaPage from '../pages-m/NaGa'
import NagaDetail from '../pages-m/NagaDeatil'
import FinanceList from '../pages-m/FinanceList'
import FinanceDetail from '../pages-m/FinanceDetail'
import PowerConf from '../pages-m/PowerConf'

/** @desc 以下路由没有相对应的mob页面，只有pc页面。在此添加当mob端访问时渲染pc页面
 * 由于matchRoutes不能匹配多层componet:root。故在pc端component的root下路由，在此需要分拆配置。如"/rank"
 * */
import MprankPage from '../pages/Mprank'
import FeatureDetail from '../pages-m/FeatureDetail'

// blockchain-mobile移入路由
import RegisterM from '../pages-m/app/Register'
import NstApp from '../pages-m/app/NstApp'
import InviteApp from '../pages-m/app/InviteApp'

const onlyPcRoutes = [
    {
        path: '/rank',
        component: Layout,
        routes: [
            {
                path: '/', component: MprankPage
            }
        ]
    }
]

/** @desc 以下为正常移动端路由 */
export default (params) => {
    const routes = [
        {
            path: '/learning', component: LearningPage
        }, {
            path: '/search', component: SearchPage
        }, {
            path: '/register.html', component: RegisterM, exact: true, strict: true
        }, {
            path: '/nstapp', component: NstApp, exact: true, strict: true
        }, {
            path: '/invite', component: InviteApp, exact: true, strict: true
        }, {
            path: '/liveshare/:roomId', component: LiveSharePage, exact: true, strict: true
        }, {
            path: '/liveshare2/:roomId', component: LiveSharePage2, exact: true, strict: true
        }, {
            path: '/download', component: DownloadPage, exact: true, strict: true
        }, {
            path: '/job', component: JobPage, exact: true, strict: true
        }, {
            path: '/protocol', component: ProtocolPage, exact: true, strict: true
        }, {
            path: '/imlive/protocol', component: ProtocolLivePage, exact: true, strict: true
        }, {
            path: '/privacy', component: PrivacyPage, exact: true, strict: true
        }, {
            path: '/live/app/streaming', component: AppStreaming, exact: true, strict: true
        }, {
            path: '/naga', component: NaGaPage, exact: true, strict: true
        }, {
            path: '/nagadetail', component: NagaDetail, exact: true, strict: true
        }, {
            path: ['/power/hk/en', '/power/hk/zh', '/hk/zh'], component: PowerConf, exact: true, strict: true
        }, {
            path: ['/account', '/sms', '/wechat', '/register', '/retrievePassword', '/bind'], // 与multiRedux/reducers/login的userState.loginType对应
            component: LoginSitePage
        }, {
            component: params.isnaGacom ? NotLayout : LayoutM,
            routes: [
                {
                    path: '/liveroom',
                    component: LiveRoomPage,
                    exact: true,
                    strict: true
                }, {
                    path: ['', '/'],
                    component: params.isnaGacom ? NaGaPage : HomePage,
                    exact: true
                }, {
                    path: '/financinglist',
                    component: FinanceList,
                    exact: true
                }, {
                  path: '/hot/:name/:featureId',
                  component: HotcubPage,
                  exact: true
                }, {
                  path: '/hot/sub/:featureId',
                  component: FeatureDetail,
                  exact: true
                }, {
                    path: '/financedetail/:projectId',
                    component: FinanceDetail,
                    exact: true
                }
            ]
        }
    ]
    return onlyPcRoutes.concat(routes)
}

// export default onlyPcRoutes.concat(routes)
