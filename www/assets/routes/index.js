import Layout from 'multiComps/Layout'
import NotLayout from '../components/NotLayout/index'

import HomePage from '../pages/Home'
import LoginSitePage from '../pages/LoginSite'
// import LiveDetailPage from '../pages/LiveDetail' // 文字直播已废弃
// import LiveUserPage from '../pages/LiveUser' // 文字直播已废弃
import MprankPage from '../pages/Mprank'
import LearningPage from '../pages/Learning'
import SearchPage from '../pages/Search'
import ComplaintsPage from '../pages/Complaints'
import ImLiveDetailPage from '../pages/ImLiveDetail'
import ImLiveListPage from '../pages/ImLiveList'
import ImLiveRecommendListPage from '../pages/ImLiveRecommendList'
import ImLiveControlPage from '../pages/ImLiveControl'
import ImLiveCreatePage from '../pages/ImLiveCreate'
import UserCenterPage from '../pages/UserCenter'
import HotPage from '../pages/Hot'
import DownloadPage from '../pages/Download'
import JobPage from '../pages/Job'
import ProtocolPage from '../pages/Protocol'
import ProtocolLivePage from '../pages/ProtocolLive'
import PrivacyPage from '../pages/Privacy'
import VideoListPage from '../pages/VideoList'
import VideoDetailPage from '../pages/VideoDetail'
import ActivityListPage from '../pages/ActivityList'
import ActivityDetailPage from '../pages/ActivityDetail'
import NaGa from '../pages/NaGa'
import NagaDetail from '../pages/NagaDetail'
import TestPage from '../pages/TestPage'
import FinanList from '../pages/FinanList'
import FinanceDetail from '../pages/FinanceDetail'
import PowerConf from '../pages/PowerConf'

/** @desc 以下路由没有相对应的pc页面，只有mob页面。在此添加当pc端访问时渲染移动端页面
 * 由于matchRoutes不能匹配多层componet:root。故在m端component的root下路由，在此需要分拆配置。仿照:index-m.js移动端中的"/rank"
 * */
import LiveSharePage from '../pages/LiveShare'
import LiveSharePage2 from '../pages-m/LiveShare2'
import AppStreaming from '../pages-m/AppStreaming'

// import { nagacom} from '../public/js/other'

// console.log(nagacom())

const onlyMobRoutes = [
    {
        path: '/liveshare/:roomId', component: LiveSharePage, exact: true, strict: true
    }, {
        path: '/liveshare2/:roomId', component: LiveSharePage2, exact: true, strict: true
    }, {
        path: '/live/app/streaming', component: AppStreaming, exact: true, strict: true
    }
]

/** @desc 以下为正常pc端路由  */
export default (params) => {
    const routes = [{
        path: ['/account', '/sms', '/wechat', '/register', '/retrievePassword', '/bind'], // 与multiRedux/reducers/login的userState.loginType对应
        component: LoginSitePage
    }, {
        path: '/protocol', component: ProtocolPage
    }, {
        path: '/privacy', component: PrivacyPage
    }, {
        path: '/imlive/protocol', component: ProtocolLivePage
    }, {
        path: '/naga', component: NaGa
    }, {
        path: '/nagadetail', component: NagaDetail
    }, {
        path: '/testpage', component: TestPage
    }, {
        path: ['/hk/zh', '/hk/en'], component: PowerConf
    }, {
        component: params.isnaGacom ? NotLayout : params.powerWebsite ? NotLayout : Layout,
        routes: [{
            path: ['', '/', '/index'],
            component: params.isnaGacom ? NaGa : params.powerWebsite ? PowerConf : HomePage,
            exact: true,
            strict: true
        },
        // {
        //     path: '/live/:liveId', // 文字直播已废弃
        //     component: LiveDetailPage,
        //     exact: true,
        //     strict: true
        // }, {
        //     path: '/liveuser/:type/:liveId', // 文字直播已废弃
        //     component: LiveUserPage,
        //     exact: true,
        //     strict: true
        // },
        {
            path: '/rank',
            component: MprankPage
        }, {
            path: '/learning',
            component: LearningPage
        }, {
            path: '/search/:searchQuery',
            component: SearchPage
        }, {
            path: '/complaints',
            component: ComplaintsPage
        }, {
            path: '/live',
            component: ImLiveListPage,
            exact: true,
            strict: true
        }, {
            path: '/live/recommend',
            component: ImLiveRecommendListPage
        }, {
            path: '/live/start',
            component: ImLiveCreatePage
        }, {
            path: '/live/control/:roomId',
            component: ImLiveControlPage
        }, {
            path: '/live/:roomId',
            component: ImLiveDetailPage
        }, {
            path: '/userCenter/:passportId',
            component: UserCenterPage
        }, {
            path: ['/hot/sub/:id', '/hot/:name/:id'],
            component: HotPage
        }, {
            path: '/download',
            component: DownloadPage
        }, {
            path: '/job',
            component: JobPage
        }, {
            path: '/video',
            component: VideoListPage,
            exact: true,
            strict: true
        }, {
            path: '/video/detail/:id/:time',
            component: VideoDetailPage
        }, {
            path: '/huodong',
            component: ActivityListPage,
            exact: true,
            strict: true
        }, {
            path: '/huodong/:id',
            component: ActivityDetailPage
        }, {
            path: '/financinglist',
            component: FinanList
        }, {
            path: '/financedetail/:projectId',
            component: FinanceDetail
        }]
    }]
    return onlyMobRoutes.concat(routes)
}

// export default onlyMobRoutes.concat(routes)
