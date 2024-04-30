import LayoutM from '../components-m/Layout'
import Cocolayout from '../components-m/Cocolayout'
import Jplayout from '../components-m/Jplayout' // 日本站公共头尾
import User from '../pages-m/User'
import HomePage from '../pages-m/Home'
import OrderDetail from '../pages-m/OrderDetail'
import ProductDetail from '../pages-m/ProductDetail'
import Together from '../pages-m/Together'
import MyInvite from '../pages-m/MyInvite'
import Hashrate from '../pages-m/Hashrate'
import Property from '../pages-m/Property'
import PropertyDetail from '../pages-m/PropertyDetail'
import UserCenter from '../pages-m/UserCenter'
import Order from '../pages-m/Order'
import PayElectric from '../pages-m/PayElectric'
import Exchange from '../pages-m/Exchange'
import BindGoogle from '../pages-m/BindGoogle'
import BindMobile from '../pages-m/BindMobile'
import BindEmail from '../pages-m/BindEmail'
import Passwd from '../pages-m/Passwd'
import Buyinggroup from '../pages-m/Buyinggroup'
import Buyinggroupinvit from '../pages-m/Buyinggroupinvit'
import Exchangerecord from '../pages-m/Exchangerecord'
import Userkyc from '../pages-m/Userkyc'
import AboutUs from '../pages-m/AboutUs'
import Customers from '../pages-m/Customers'
import OnTitle from '../pages-m/OnTitle'
import Instructions from '../pages-m/Instructions'
import Termsof from '../pages-m/Termsof'
import Privacy from '../pages-m/Privacy'
import ServiceAgreement from '../pages-m/ServiceAgreement'
import LawStatement from '../pages-m/LawStatement'
import HelpCenter from '../pages-m/HelpCenter'
import Outputlist from '../pages-m/Outputlist'
import Timelease from '../pages-m/Timelease'
import Tojump from '../pages-m/Tojump'
import Tomall from '../pages-m/Tomall'
import Information from '../pages-m/Information'
import Informessage from '../pages-m/Informessage'
import Mine from '../pages-m/Mine'
import Download from '../pages-m/Download'
import Announcement from '../pages-m/Announcement'
import Anmessage from '../pages-m/Anmessage'
import Defi from '../pages-m/Defi'
import Defidetail from '../pages-m/Defidetail'
import Defilist from '../pages-m/Defilist'
import Defititle from '../pages-m/Defititle'
import Newjplogin from '../pages-m/Newjplogin'
import Extractrecords from '../pages-m/Extractrecords'
import Borrow from '../pages-m/Borrow'
import BorrowOrder from '../pages-m/BorrowOrder'
import Refundhistory from '../pages-m/Refundhistory'
import Pledgehistory from '../pages-m/Pledgehistory'
import Unwindhistory from '../pages-m/Unwindhistory'
import Borrowhistory from '../pages-m/Borrowhistory'
import Stopnet from '../pages-m/Stopnet'

// import JpAddress from '../pages-m/JpAddress'
// import JpSetting from '../pages-m/JpSetting'
// import JpSecurity from '../pages-m/JpSecurity'
// import JpTransaction from '../pages-m/JpTransaction'
import Jpindex from '../pages-m/Jpindex'
// import Jplogin from '../pages-m/Jplogin'
// import Jpregister from '../pages-m/Jpregister'
// import Jpextract from '../pages-m/Jpextract'
// import Jpgetbackpassd from '../pages-m/Jpgetbackpassd'
// import Jpservice from '../pages-m/Jpservice'
// import Jpprivacy from '../pages-m/Jpprivacy'
import Borrowagreement from '../pages-m/Borrowagreement.js'
import Borrowmore from '../pages-m/Borrowmore'
import Pledge from '../pages/Pledge'
import PledgeOrder from '../pages/PledgeOrder'
import Deposit from '../pages-m/Deposit'
import DepositDetail from '../pages-m/DepositDetail'
import DepositEarn from '../pages-m/DepositEarn'
import Calculator from '../pages-m/Calculator'
import Newkyc from '../pages-m/Newkyc'
import IosDownload from '../pages-m/IosDownload'
import ProductAgreement from '../pages-m/ProductAgreement'
// 美国代理商页面
import Enlogin from '../pages/Enlogin'
import Enregister from '../pages/Enregister'
import Enback from '../pages/Enback'
import EnHashrate from '../pages/EnHashrate'
import Enextractrecords from '../pages/Enextractrecords'
import EnProperty from '../pages/EnProperty'
import EnpropertyDetail from '../pages/EnpropertyDetail'
import EnExchange from '../pages/EnExchange'
import EnExchangerecord from '../pages/EnExchangerecord'
import Enoutputlist from '../pages/Enoutputlist'
import EnbindGoogle from '../pages/EnbindGoogle'
import Enkyc from '../pages/Enkyc'
import EnuserCenter from '../pages/EnuserCenter'
import Enhelpcenter from '../pages/Enhelpcenter'
import Enaboutus from '../pages/Enaboutus'
import Enlawer from '../pages/Enlawer'
import Entermsof from '../pages/Entermsof'
import Enprivacy from '../pages/Enprivacy'
import Enorder from '../pages/Enorder'

import Line from '../pages-m/Line'

import MentionMoney from '../pages-m/MentionMoney'
import Overdue from '../pages-m/Overdue'
import Jpproduct from '../pages-m/Jpproduct'

// 新版
import Message from '../pages-m/Message'
import MsgList from '../pages-m/Msglist'
import MsgDetail from '../pages-m/MsgDetail'
import Mining from '../pages-m/Mining'
import Assets from '../pages-m/Assets'
import CheckStand from '../pages-m/CheckStand'
import ChargeMon from '../pages-m/ChargeMon'
import WellatMention from '../pages-m/MentionMon'
import ChargmentDetail from '../pages-m/ChargmentDetail'
import MyCenter from '../pages-m/MyCenter'
import AccountSafety from '../pages-m/AccountSafety'
import DeviceManage from '../pages-m/DeviceManage'

/** @desc 以下路由没有相对应的mob页面，只有pc页面。在此添加当mob端访问时渲染pc页面
 * exact 精准的 是否匹配子路由
 * strict 严格的 是否匹配斜杠”/“
 * 由于matchRoutes不能匹配多层component:root。故在pc端component的root下路由，在此需要分拆配置
 * */
import Layout from '../components/Layout'
import Finance from '../pages/Finance'
const onlyPcRoutes = [
    {
        component: Layout,
        routes: [
            {
                path: '/finance',
                component: Finance // 充币提币记录:资金记录
            }
        ]
    }
]

/** @desc 以下为正常移动端路由 */

export default (params) => {
    const routes = [
        {
            path: '/user/:type',
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: User,
                    exact: true,
                    strict: true // sigin登录，signup注册，retrieve手机找回密码, retrieveemail邮箱找回密码
                }
            ]
        },
        {
            path: ['', '/'], // 首页
            exact: true,
            strict: true,
            component:
                params && params.isQuattroWallet ? Jplayout : params && params.issecure1475 ? Cocolayout : LayoutM,
            routes: [
                {
                    path: '',
                    component:
                        params && params.isQuattroWallet ? Jpindex : params && params.issecure1475 ? Enlogin : HomePage,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/order/:tradeNo', // 订单详情
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: OrderDetail,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/product/:productId', // 产品详情
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: ProductDetail,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/together', // 联合挖矿产品
            exact: true,
            strict: true,
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Together,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/myinvite', // 邀请返佣
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: MyInvite,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/hashrate', // 我的算力
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Hashrate,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/property', // 我的资产
            exact: true,
            strict: true,
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Property,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            // path: '/property/:tokenId'
            path: '/propertydetail', // 明细
            exact: true,
            strict: true,
            component: Cocolayout,
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
            path: '/usercenter', // 用户中心
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: UserCenter,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/order', // 我的订单
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Order,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/payelectric', // 待缴电费
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: PayElectric,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/exchange', // USDT闪兑
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Exchange,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/bindgoogle', // 谷歌绑定
            component: Cocolayout,
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
            path: '/bindmobile', // 手机绑定
            component: Cocolayout,
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
            path: '/bindemail', // 邮箱绑定
            component: Cocolayout,
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
            path: '/moneypasswd', // 资金密码设置或修改
            component: Cocolayout,
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
            path: '/buyinggroup/:productId', // 团购
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Buyinggroup,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/buyinggroupinvit/:productId', // 团购邀请
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Buyinggroupinvit,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/exchangerecord', // 闪兑记录
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Exchangerecord,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/userkyc', // 实名认证
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Userkyc,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/aboutus', // 关于我们
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: AboutUs,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/bcustomers', // 大客户
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Customers,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/ontitle', // 挖矿比买币更划算
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: OnTitle,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/instructions', // 产品说明
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Instructions,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/termsof', // 用户协议
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Termsof,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/privacy', // 隐私协议
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Privacy,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/service', // 服务协议
            component: Cocolayout,
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
            path: '/law', // 法律声明
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: LawStatement,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/helpcenter', // 帮助中心
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: HelpCenter,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/outputlist/:productId', // 产出明细
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Outputlist,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/timelease', // 分时租赁产品
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Timelease,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/tojump', // 跳转标签（活码）
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Tojump,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/tomall', // 商城
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Tomall,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/information', // 资讯
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Information,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/myinfo', // 我的
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Mine,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/informessage/:newsId', // 咨询详情
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Informessage,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/download', // App下载页
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Download,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/iosdownload', // iosApp下载页
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: IosDownload,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/productagreement/:jointMiningType', // 产品协议页面
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: ProductAgreement,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/announcement', // 消息通知
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Announcement,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/anmessage/:msgId', // 消息通知
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Anmessage,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/Defi', // defi理财
            component: Cocolayout,
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
            path: '/Defilist', // DeFi理财收益列表
            component: Cocolayout,
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
            path: '/Defititle', // DeFi理财收益列表
            component: Cocolayout,
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
            path: '/Defidetail/:projectCode', // DeFi理财详情
            component: Cocolayout,
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
            path: '/Newjplogin', // 新注册登录入口
            component: Cocolayout,
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
            path: '/extractrecords', // 收益提取记录
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Extractrecords,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend/order', // 借币订单
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: BorrowOrder,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend/refundhistory', // 还款历史
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Refundhistory,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend/pledgehistory', // 平仓历史
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Pledgehistory,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend/unwindhistory', // 质押率调整历史
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Unwindhistory,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend/borrowhistory', // 质押历史
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Borrowhistory,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend', // 质押借币
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Borrow,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend/agreement', // 借币协议
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Borrowagreement,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/lend/more', // 借币了解更多
            exact: true,
            strict: true,
            component: Cocolayout,
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
            path: '/pledge', // 算力质押
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Pledge,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/pledgeorder', // 算力质押订单
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: PledgeOrder,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/marspal', // 存币宝首页
            exact: true,
            strict: true,
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            path: '/calculator', // 收益计算
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Calculator,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/newkyc', // 新版实名认证
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Newkyc,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/stopinfo', // 禁止网站访问提示信息
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Stopnet,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enaboutus', // 美国代理商关于我们
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: EnbindGoogle,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enoutputlist/:productId', // 美国代理商收益明细
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: EnpropertyDetail,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/secure/enproperty', // 美国代理商资产
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            component: Cocolayout,
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
            path: '/secure/enorder', // 美国代理商订单
            component: Cocolayout,
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
            path: '/line', // 跳转line过度页面
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Line,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/mention', // 提币页面
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: MentionMoney,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/overdue', // token失效页面
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Overdue,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/jpproduct', // 产品活动
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: Jpproduct,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/messagecenter', // 消息中心
            exact: true,
            strict: true,
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Message,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/msglist', // 消息列表
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: MsgList,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/msgdetail', // 消息详情
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: MsgDetail,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/mining', // 挖矿
            exact: true,
            strict: true,
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Mining,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/assets', // 新版资产
            exact: true,
            strict: true,
            component: LayoutM,
            routes: [
                {
                    path: '',
                    component: Assets,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/checkstand', // 收银台
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: CheckStand,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/chargemon', // 充币
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: ChargeMon,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/wellatmention', // 提币
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: WellatMention,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/chargmentdetail', // 充提详情
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: ChargmentDetail,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/mycenter', // 个人中心
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: MyCenter,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/mycenter/accountsafety', // 账户中心
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: AccountSafety,
                    exact: true,
                    strict: true
                }
            ]
        },
        {
            path: '/mycenter/devicemanage', // 登录设备管理
            exact: true,
            strict: true,
            component: Cocolayout,
            routes: [
                {
                    path: '',
                    component: DeviceManage,
                    exact: true,
                    strict: true
                }
            ]
        }
    ]

    return routes.concat(onlyPcRoutes)
}
