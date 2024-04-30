// import Layout from '../components/Layout'
// import NewLayout from '../components/NewLayout'
import Nolayout from '../components/Nolayout'
import Enlayout from '../components/EnLayout'
import NewLayout from '../components/Layout'
// import Cocolayout from '../components/Cocolayout'
// import Nolayout from '../components/Nolayout'
import Newjplayout from '../components/Newjplogin'
// import HomePage from '../pages/Home'
import Finance from '../pages/Finance'
import ProductDetail from '../pages/ProductDetail'
import OrderDetail from '../pages/OrderDetail'
import Hashrate from '../pages/Hashrate'
import Order from '../pages/Order'
import Property from '../pages/Property'
import PropertyDetail from '../pages/PropertyDetail'
import PayElectric from '../pages/PayElectric'
import Passwd from '../pages/Passwd'
import BindMobile from '../pages/BindMobile'
import BindEmail from '../pages/BindEmail'
import UserCenter from '../pages/UserCenter'
import BindGoogle from '../pages/BindGoogle'
import HelpCenter from '../pages/HelpCenter'
import LawStatement from '../pages/LawStatement'
import Instructions from '../pages/Instructions'
import Privacy from '../pages/Privacy'
import ServiceAgreement from '../pages/ServiceAgreement'
import Termsof from '../pages/Termsof'
import User from '../pages/User'
// import OnTitle from '../pages/OnTitle'
import Customers from '../pages/Customers'
import Together from '../pages/Together'
import AboutUs from '../pages/AboutUs'
import MyInvite from '../pages/Myinvite'
import Userkyc from '../pages/Userkyc'
import Exchange from '../pages/Exchange'
import Exchangerecord from '../pages/Exchangerecord'
import Buyinggroup from '../pages/Buyinggroup'
import Outputlist from '../pages/Outputlist'
import Timelease from '../pages/Timelease'
import Tojump from '../pages/Tojump'
import Download from '../pages/Download'
import Hxintroduce from '../pages/Hxintroduce'
import Announcement from '../pages/Announcement'
import Anmessage from '../pages/Anmessage'
import Defi from '../pages/Defi'
import Defidetail from '../pages/Defidetail'
import Defilist from '../pages/Defilist'
import Defititle from '../pages/Defititle'
import Newjplogin from '../pages/Newjplogin'
import Extractrecords from '../pages/Extractrecords'
import Borrow from '../pages-m/Borrow'
import BorrowOrder from '../pages-m/BorrowOrder'
import Refundhistory from '../pages-m/Refundhistory'
import Pledgehistory from '../pages-m/Pledgehistory'
import Unwindhistory from '../pages-m/Unwindhistory'
import Borrowhistory from '../pages-m/Borrowhistory'
import Agreement from '../pages/BorrowAgreement'
import Borrowmore from '../pages/Borrowmore'
import Jpindex from '../pages/Jpindex'
import Stakinglist from '../pages/Stakinglist'
import Stakingdetail from '../pages/Stakingdetail'
import Pledge from '../pages/Pledge'
import PledgeOrder from '../pages/PledgeOrder'
import Deposit from '../pages-m/Deposit'
import DepositDetail from '../pages-m/DepositDetail'
import DepositEarn from '../pages-m/DepositEarn'
import NewHome from '../pages/NewHome'
import ProductLists from '../pages/ProductLists'
import Testpage from '../pages/Test'
import Newkyc from '../pages/Newkyc'
import Stopnet from '../pages/Stopnet'
import ProductAgreement from '../pages/ProductAgreement'
import Jpproduct from '../pages/Jpproduct'
import ChangePswd from '../pages/ChangePswd'

// 美国代理商页面
import Enlogin from '../pages/Enlogin'
import Enregister from '../pages/Enregister'
import Enback from '../pages/Enback'
import EnHashrate from '../pages/EnHashrate'
import Enextractrecords from '../pages/Enextractrecords'
import EnProperty from '../pages/EnProperty'
// import EnpropertyDetail from '../pages/EnpropertyDetail'
import EnExchange from '../pages/EnExchange'
import EnExchangerecord from '../pages/EnExchangerecord'
import Enoutputlist from '../pages/Enoutputlist'
// import EnbindGoogle from '../pages/EnbindGoogle'
import Enkyc from '../pages/Enkyc'
import EnuserCenter from '../pages/EnuserCenter'
import Enhelpcenter from '../pages/Enhelpcenter'
import Enaboutus from '../pages/Enaboutus'
import Enlawer from '../pages/Enlawer'
import Entermsof from '../pages/Entermsof'
import Enprivacy from '../pages/Enprivacy'
// import Enmonypassed from '../pages/Enmonypassed'
// import Enbandemail from '../pages/Enbandemail'
// import Enbindmobile from '../pages/Enbindmobile'
import Enorder from '../pages/Enorder'
/** @desc 以下路由没有相对应的pc页面，只有mob页面。在此添加当pc端访问时渲染移动端页面
 * exact 精准的 是否匹配子路由
 * strict 严格的 是否匹配斜杠”/“
 * 由于matchRoutes不能匹配多层component:root。故在m端component的root下路由，在此需要分拆配置
 * */
const onlyMobRoutes = []

/** @desc 以下为正常pc端路由  */
export default (params) => {
    const routes = [
        {
            path: '/secure/enaboutus', // 美国代理商关于我们
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Enaboutus,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enlaw', // 美国代理商法律声明
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Enlawer,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/entermsof', // 美国代理商用户条款
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Entermsof,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enhelpcenter', // 美国代理商帮助中心
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Enhelpcenter,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enusercenter', // 美国代理商用户中心
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: EnuserCenter,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enkyc', // 美国代理商实名认证
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Enkyc,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enbindgoogle', // 美国代理商绑定谷歌
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: BindGoogle,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enoutputlist/:productId', // 美国代理商收益明细
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Enoutputlist,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enprivacy', // 美国代理商服务协议
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Enprivacy,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enservice', // 美国代理商注册协议
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: ServiceAgreement,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enbindmobile', // 美国代理商绑定邮箱
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: BindEmail,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enbindemail', // 美国代理商绑定手机
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: BindMobile,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enmoneypasswd', // 美国代理商设置资金密码
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Passwd,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enExchangerecord', // 美国代理商闪兑
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: EnExchangerecord,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enexchange', // 美国代理商闪兑
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: EnExchange,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enproperty/:tokenId', // 美国代理商资产记录
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: PropertyDetail,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enproperty', // 美国代理商资产
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: EnProperty,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enextractrecords', // 美国代理商收益提取记录
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Enextractrecords,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enhashrate', // 美国代理商收益
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: EnHashrate,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enlogin', // 美国代理商登录
            component: Nolayout,
            routes: [
                {
                    path: '',
                    component: Enlogin,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enregister', // 美国代理商注册
            component: Nolayout,
            routes: [
                {
                    path: '',
                    component: Enregister,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enback', // 美国代理商找回密码
            component: Nolayout,
            routes: [
                {
                    path: '',
                    component: Enback,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enorder', // 美国代理矿机订单以及电费订单
            component: Enlayout,
            routes: [
                {
                    path: '',
                    component: Enorder,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/home', // 新版首页
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: Enregister,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/productlists/:curreny', // 新版产品列表
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: ProductLists,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/user/:type', // sigin登录，signup注册，retrieve手机找回密码, retrieveemail邮箱找回密码
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: User,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/Newjplogin', // 新版日本登录页面入口
            component: Newjplayout,
            routes: [
                {
                    path: '',
                    component: Newjplogin,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/Defi', // Defi理财产品列表
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: Defi,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/Defilist', // Defi理财收益列表
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: Defilist,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/Defidetail/:projectCode', // Defi理财详情
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: Defidetail,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/Defititle', // Defi理财产品说明
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: Defititle,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend/agreement', // 借币服务协议
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: Agreement,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend/more', // 借币了解更多
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: Borrowmore,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/jpindex', // 日本钱包首页
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: Jpindex,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/marspal', // 存币宝首页
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: Deposit,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/marspals/:projectCode', // 存币宝详情页
            exact: true,
            strict: true,
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: DepositDetail,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/depositearn', // 存币宝收益
            exact: true,
            strict: true,
            component: NewLayout,
            routes: [
                {
                    path: '',
                    component: DepositEarn,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            // component: window.location.host === 'https://www.cococoin.com/' ? Cocolayout : Layout,
            component: params && params.issecure1475 ? Nolayout : NewLayout,
            routes: [
                {
                    path: ['', '/'],
                    component:
                        params && params.isQuattroWallet ? Jpindex : params && params.issecure1475 ? Enlogin : NewHome,
                    exact: true,
                    strict: true
                },
                {
                    path: '/testpage',
                    component: Testpage // 测试页面
                },
                {
                    path: '/finance',
                    component: Finance // 充币提币记录:资金记录
                },
                {
                    path: '/product/:productId',
                    component: ProductDetail // 产品详情
                },
                {
                    path: '/hashrate',
                    component: Hashrate // 我的算力
                },
                {
                    path: '/order',
                    component: Order,
                    exact: true,
                    strict: true // 我的订单
                },
                {
                    path: '/order/:tradeNo',
                    component: OrderDetail,
                    exact: true,
                    strict: true // 订单详情
                },
                {
                    path: '/property',
                    component: Property,
                    exact: true,
                    strict: true // 我的资产
                },
                {
                    path: '/payelectric',
                    component: PayElectric // 待缴电费
                },
                {
                    path: '/property/:tokenId',
                    component: PropertyDetail // 明细
                },
                {
                    path: '/moneypasswd',
                    component: Passwd // 修改资金密码
                },
                {
                    path: '/bindemail',
                    component: BindMobile // 绑定邮箱
                },
                {
                    path: '/bindmobile',
                    component: BindEmail // 绑定手机号
                },
                {
                    path: '/usercenter',
                    component: UserCenter // 用户中心
                },
                {
                    path: '/bindgoogle',
                    component: BindGoogle // 谷歌绑定
                },
                {
                    path: '/helpcenter',
                    component: HelpCenter // 帮助中心
                },
                {
                    path: '/law',
                    component: LawStatement // 法律声明
                },
                {
                    path: '/service',
                    component: ServiceAgreement // 服务协议
                },
                {
                    path: '/privacy',
                    component: Privacy // 隐私协议
                },
                {
                    path: '/termsof',
                    component: Termsof // 用户协议
                },
                {
                    path: '/instructions',
                    component: Instructions // 产品说明 删除
                },
                {
                    path: '/aboutus',
                    component: AboutUs // 关于我们
                },
                {
                    path: '/bcustomers',
                    component: Customers // 大客户 删除
                },
                {
                    path: '/together',
                    component: Together // 联合挖矿 删除
                },
                {
                    path: '/myinvite',
                    component: MyInvite // 邀请返佣
                },
                {
                    path: '/userkyc',
                    component: Userkyc // 实名认证
                },
                {
                    path: '/exchange',
                    component: Exchange,
                    exact: true,
                    strict: true // 闪兑
                },
                {
                    path: '/exchangerecord',
                    component: Exchangerecord,
                    exact: true,
                    strict: true // 闪兑记录
                },
                {
                    path: '/buyinggroup/:productId',
                    component: Buyinggroup // 团购 删除
                },
                {
                    path: '/outputlist/:productId',
                    component: Outputlist // 产出明细
                },
                {
                    path: '/timelease',
                    component: Timelease // 分时租赁产品 删除
                },
                {
                    path: '/tojump',
                    component: Tojump // 跳转标签（活码）
                },
                {
                    path: '/download',
                    component: Download // App下载页
                },
                {
                    path: '/huoxingintroduce',
                    component: Hxintroduce // 火星区块链介绍
                },
                {
                    path: '/announcement',
                    component: Announcement // 公告通知
                },
                {
                    path: '/anmessage/:msgId',
                    component: Anmessage // 公告通知详情
                },
                {
                    path: '/Defi',
                    component: Defi // DeFi理财
                },
                {
                    path: '/Defititle',
                    component: Defititle // DeFi理财
                },
                {
                    path: '/Defilist',
                    component: Defilist // DeFi理财收益列表
                },
                {
                    path: '/Defidetail/:projectCode',
                    component: Defidetail // DeFi理财详情
                },
                {
                    path: '/extractrecords',
                    component: Extractrecords // 提取收益记录列表
                },
                {
                    path: '/lend/order',
                    component: BorrowOrder // 质押借币订单
                },
                {
                    path: '/lend/refundhistory',
                    component: Refundhistory // 还款历史
                },
                {
                    path: '/lend/pledgehistory',
                    component: Pledgehistory // 平仓历史
                },
                {
                    path: '/lend/unwindhistory',
                    component: Unwindhistory // 质押率调整历史
                },
                {
                    path: '/lend/borrowhistory',
                    component: Borrowhistory // 质押借币历史
                },
                {
                    path: '/lend',
                    component: Borrow // 借币首页
                },
                {
                    path: '/stakinglist',
                    component: Stakinglist // staking列表
                },
                {
                    path: '/stakingdetail/:productId',
                    component: Stakingdetail // staking详情
                },
                {
                    path: '/pledge',
                    component: Pledge // 算力质押贷
                },
                {
                    path: '/pledgeorder',
                    component: PledgeOrder,
                    exact: true,
                    strict: true // 算力质押贷历史订单
                },
                {
                    path: '/newkyc',
                    component: Newkyc,
                    exact: true,
                    strict: true // 新版实名认证
                },
                {
                    path: '/stopinfo',
                    component: Stopnet,
                    exact: true,
                    strict: true // 禁止网站访问提示信息
                },
                {
                    path: '/productagreement/:jointMiningType',
                    component: ProductAgreement,
                    exact: true,
                    strict: true // 禁止网站访问提示信息
                },
                {
                    path: '/jpproduct',
                    component: Jpproduct // 日本活动页面
                },
                {
                    path: '/changepassword',
                    component: ChangePswd // 修改登录密码
                }
            ]
        }
    ]
    return onlyMobRoutes.concat(routes)
}
