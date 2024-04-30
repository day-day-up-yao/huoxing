/** @desc 其它公共配置信息 */
export const common = {
    senseId: '1b140c59a6da8e906cb4b7ca6687e075',
    paycoin: 'USDT'
}

const env = process.env.NODE_ENV
let ucapi = '' // uc用户相关接口处理
let mineapi = '' // mine产品相关接口处理
let walletapi = '' // wallet资产等相关接口处理

if (env === 'production') {
    ucapi = '/uc'
    mineapi = '/mine'
    walletapi = '/wallet'
}

/** @desc 用户相关 */
export const user = {
    sendSmsVerifyCode: `${ucapi}/api/common/send_sms_verify_code`, // 发送sms验证码
    sendEmailVerifyCode: `${ucapi}/api/common/send_email_verify_code`, // 发送email验证码
    phoneSignUp: `${ucapi}/mapi/user/mobile_sign_up`, // 手机号注册
    emailSignUp: `${ucapi}/mapi/user/email_sign_up`, // email注册
    phonelogin: `${ucapi}/mapi/user/mobile_authorize`, // 手机登录
    emaillogin: `${ucapi}/mapi/user/email_authorize`, // 邮箱登录
    sendemailCode: `${ucapi}/mapi/user/send_email_verify_code/authorize_advance`, // 邮箱验证码
    sendphoneCode: `${ucapi}/mapi/user/send_sms_verify_code/authorize_advance`, // 手机验证码
    secondvalCode: `${ucapi}/mapi/user/authorize_advance`, // 二次验证
    findPwdmobile: `${ucapi}/mapi/user/mobile_find_pwd_check1`, // 找回密码验证
    findPwdemail: `${ucapi}/mapi/user/email_find_pwd_check1`, // 找回密码邮箱验证
    findpswdSure: `${ucapi}/mapi/user/find_pwd`, // 找回密码
    update_pwd: `${ucapi}/mapi/user/update_pwd`, // 修改密码
    find_pwd: `${ucapi}/mapi/user/send_verify_code/find_pwd`, // 找回密码二次验证（邮箱或手机）
    find_pwd_check2: `${ucapi}/mapi/user/find_pwd_check2`, // 找回密码step2-2FA验证
    getuseinfo: `${ucapi}/mapi/user/get_base_info`, // 获取用户信息
    sendsmscode: `${ucapi}/mapi/user/send_sms_verify_code`, // 资金密码手机验证码
    getemailcode: `${ucapi}/mapi/user/send_email_verify_code`, // 资金密码邮箱验证
    tradepwd: `${ucapi}/mapi/user/trade_pwd/set`, // 设置资金密码
    bind_email: `${ucapi}/mapi/user/bind_email`, // 绑定邮箱
    bind_mobile: `${ucapi}/mapi/user/bind_mobile`, // 绑定手机
    withdrawal: `${walletapi}/mapi/asset/withdrawal/create`, // 提币
    withdrawalcode: `${walletapi}/mapi/asset/withdrawal/verify_code`, // 重新获取资产托管平台验证码
    withdrawalverify: `${walletapi}/mapi/asset/withdrawal/verify`, // 验证并提交提币请求
    depositlist: `${walletapi}/mapi/asset/deposit/order_list`, // 充币历史记录
    withdrawallist: `${walletapi}/mapi/asset/withdrawal/order_list`, // 提币历史记录
    quoterates: `/mapi/quote/v1/rates`, // 获取汇率
    bindga: `${ucapi}/mapi/user/before_bind_ga`, // 谷歌验证需要数据
    bindgoogle: `${ucapi}/mapi/user/bind_ga`, // 谷歌验证
    userreg: `${mineapi}/v1/hashrate/user/reg`, // 收集用户注册信息
    upload_image: `${ucapi}/mapi/file/verify/upload_image`, // 实名认证上传图片
    usekyc: `${ucapi}/mapi/user/verify`, // 实名认证
    verifyinfo: `${ucapi}/mapi/user/verify_info`, // 实名认证个人信息
    indexconfig: `${ucapi}/ms_api/basic/index_config`, // coco首页信息获取
    quoteticker: `/mapi/quote/v1/ticker`, // 24小时行情（涨跌幅计算）
    inviteincomebank: `${mineapi}/v1/hashrate/invite/incomeRank`, // 邀请排行榜
    invitemyincome: `${mineapi}/v1/hashrate/invite/myIncome`, // 邀请返佣收益
    appdownload: `${mineapi}/v1/hashrate/pic/queryAppVersion`, // 安卓app下载
    messagedetail: `${mineapi}/v1/hashrate/msg/detail`, // 公告详情
    messagelist: `${mineapi}/v1/hashrate/msg/list`, // 公告列表
    messageread: `${mineapi}/v1/hashrate/msg/read`, // 消息标记为已读
    balanceflow: `${walletapi}/mapi/asset/balance_flow`, // 站内支付/收益
    extractRecords: `${mineapi}/v1/hashrate/income/extractRecords`, // 收益提取记录列表
    configv2: `${ucapi}/ms_api/basic/config_v2`, // 获取交易所信息币种列表
    getcountry: `${ucapi}/ms_api/basic/countries`, // 获取国家区号
    allassetinfo: `${walletapi}/mapi/asset/info`, // 获取用户总资产
    templateInfo: `${mineapi}/v1/hashrate/invite/templateInfo`, // 邀请返佣信息
    cardtype: `/s_api/basic/id_card_type`, // 实名认证证件类型
    basicverify: `${ucapi}/mapi/user/kyc/basicverify`, // 一级实名认证
    photoverify: `${ucapi}/mapi/user/kyc/photoverify`, // 二级实名认证
    getkyclevel: `${ucapi}/mapi/user/kyclevel`, //  获取用户KYC级别信息
    logininfo: `${mineapi}/v1/hashrate/user/login`, // 用户登录上报信息
    useagreement: `${mineapi}/v1/hashrate/userAgreement`, // 那类型查询用户协议
    userlogin: `${ucapi}/mapi/user/authorize`, // 用户登录
    homeinfo: `${mineapi}/v1/hashrate/appHome`, // 公共信息
    userloginout: `${ucapi}/mapi/user/authorize_cancel`, // 退出登录
    closepopup: `${ucapi}/mapi/user/close_popup`, // 关闭弹窗
    resetinfo: `${ucapi}/mapi/user/user_reset_info`, // 查询用户重置信息
    quickauthorize: `${ucapi}/mapi/user/quick_authorize`, // 快捷登录
    quickadvance: `${ucapi}/mapi/user/quick_authorize_advance`, // 快捷登录密码验证
    validationaddress: `${ucapi}/mapi/asset/address_validation`, // 提币地址校验
    fornew: `${mineapi}/v1/hashrate/msg/listForNew`, // 查询用户消息列表
    goread: `${mineapi} /v1/hashrate/msg/read`, // 消息标记为已读
    pushmessge: `${mineapi}/v1/hashrate/push/pushList`, // 获取推送消息列表
    setreaded: `${mineapi}/v1/hashrate/push/setPushReaded`, // 设置推送消息已读
    pushcount: `${mineapi}/v1/hashrate/push/unreadPushCount`, // 查询未读消息数
    getBalance: `${mineapi}/v1/hashrate/getUserBalance`, // 获取账户资产
    getallflow: `${mineapi}/mapi/asset/flow/flows`, // 获取全部资产记录
    loginhistory: `${ucapi}/mapi/user/queryLoginHistory`, // 登录历史
    multidevice: `${ucapi}/mapi/user/setMultiDeviceLogin`, // 设置多设备登录
    fishingcode: `${ucapi}/mapi/user/setAntiPhishingCode`, // 设置反钓鱼码
    sendemailcode: `${ucapi}/mapi/user/send_email_verify_code`, // 获取邮箱验证码2
    verifyseafy: `${ucapi}/mapi/user/security_check`, // 安全验证
    usercancel: `${ucapi}/mapi/user/logoff`, // 用户注销
    unbindga: `${ucapi}/mapi/user/unbindGA` // 解绑GA
}

export const product = {
    list: `${mineapi}/v1/hashrate/product/list`, // 产品列表
    detail: `${mineapi}/v1/hashrate/product/detail`, // 产品详情
    moneyrate: `${mineapi}/v1/hashrate/payment/currency/rate`, // 兑换人民币汇率
    hashrateinfo: `${mineapi}/v1/hashrate/info`, // 全网算力
    btcquote: `/mapi/quote/v1/multi/kline`, // BTC涨跌幅
    indexbanner: `${mineapi}/v1/hashrate/pic/queryPicByType`, // 首页banner
    inviteinfo: `${ucapi}/api/invitation/info/get`, // 邀请返佣信息
    // https://mapi.mclouds.io${mineapi}/v1/hashrate/pic/queryPicByType?picType=12
    inviteshareinfo: `${mineapi}/v1/hashrate/pic/queryPicByType`, // 返佣信息
    quotainfo: `${walletapi}/mapi/asset/withdrawal/quota_info`, // 提币，获取余额，手续费
    addlesscheck: `${walletapi}/mapi/asset/withdrawal/address/check`, // 提币地址判断
    productbooking: `${mineapi}/v1/hashrate/user/productBooking`, // 产品预订
    querybooking: `${mineapi}/v1/hashrate/user/queryProductBooking`, // 预定列表
    groupbuying: `${mineapi}/v1/hashrate/product/groupbuy/list`, // 团购信息
    incomelist: `${mineapi}/v1/hashrate/myincome/list`, // 算力收益明细
    newsinfo: `/info/news/shownews`, // 财经矿业资讯(财经)
    newsmessage: `/info/news/getbyid`, // 资讯详情(财经)
    showlives: `/info/lives/showlives`, // 快讯(财经)
    livelist: `/info/lives/getbyid`, // 快讯详情(财经)
    marketpriceinfo: `/market/hx24/v1/ticker/price_info`, // 涨跌幅以及汇率（财经）
    Filprice: `${mineapi}/v1/hashrate/coin/price`, // Fil价格涨跌幅
    parterlist: `${mineapi}/v1/hashrate/productPartner/list`, // 获取供应商
    prodlist: `/v1/mfi/prods`, // 理财产品列表
    proddetail: `/v1/mfi/details`, // 理财收益
    proddetaillist: `/v1/mfi/proddetail`, // 理财收益详情
    prodoeder: `/v1/mfi/neworder`, // 理财申购
    prodoederlist: `/v1/mfi/revenue`, // 收益详情
    anunitlist: `/v1/mfi/notify`, // 挖矿公告
    defilogo: `/v1/mfi/getlogo`, // 挖矿公告
    mfiperm: `/v1/mfi/perm`, // 验证用户是否有邀请关系
    invitecode: `/v1/mfi/invitecode`, // ieo获取一级邀请码
    baseicinfo: `${walletapi}/mapi/v1/activity/lock/interest/ieo/basic_info`, // ieo详情
    ieo_order: `${walletapi}/mapi/v1/activity/lock/interest/new_order`, // 下单
    ieo_order_list: `${walletapi}/mapi/v1/activity/lock/interest/order_list`, // 锁仓下单记录
    cbbproduct: `/v1/cbb/product`, // 存币宝产品列表
    cbbbuy: `/v1/cbb/buyin`, // 存币宝购买
    cbbrevenue: `/v1/cbb/revenue`, // 存币宝收益
    cbbdetail: `/v1/cbb/prodetail`, // 存币宝详情
    allrevenue: `/v1/cbb/allrevenue`, // 存币宝申购记录
    interestorder: `/v1/activity/lock/interest/query_order`, // 理财订单列表
    expectedoutput: `${mineapi}/v1/hashrate/calHashrateIncome`, // 预估产出
    calhashinfo: `${mineapi}/v1/hashrate/calHashrateIncomeInfo`, // 收益计算器
    hashRates: `${mineapi}/v1/hashrate/payment/currency/price`, // 汇率获取
    allRate: `${mineapi}/v1/hashrate/payment/quote/v1/rates`, // 批量请求汇率
    byidproductlist: `${mineapi}/v1/hashrate/product/listByIds`, // 通过产品ID获取产品列表
    getproductinfo: `${mineapi}/v1/hashrate/queryChannelByUuid` // 根据uuid查询渠道
}

export const order = {
    bankPayConfirm: `${mineapi}/v1/hashrate/order/bankPayConfirm`, // 确认银行支付
    detail: `${mineapi}/v1/hashrate/product/list`, // 订单列表
    calculate: `${mineapi}/v1/hashrate/order/list`, // 算力订单
    detailByTradeNo: `${mineapi}/v1/hashrate/order/detailByTradeNo`, // 订单详情以流水号查询
    c2cBalance: `${walletapi}/mapi/asset/get`, // 检查币币账户(我的资产)
    orderCreate: `${mineapi}/v1/hashrate/order/create`, // 创建订单
    orderUpdate: `${mineapi}/v1/hashrate/order/updateElectricFee`, // 更新算力订单
    payCreate: `${mineapi}/v1/hashrate/payment/create`, // 创建支付订单
    payMultiCreate: `${mineapi}/v1/hashrate/payment/createMultiPayOrder`, // 创建多币种支付
    cnyCoinRate: `${mineapi}/v1/hashrate/payment/currency/rate`, // 人民币对币种汇率
    wxPayStatus: `${mineapi}/v1/hashrate/payment/queryWxOrderPayStatus`, // 检查微信支付状态
    loadPayType: `${walletapi}/mapi/payment/order/load_pay_data`, // 获取二次验证方式
    sendVderify: `${walletapi}/mapi/payment/order/send_payment_verify_code`, // 获取二次验证码
    payOrder: `${walletapi}/mapi/payment/order/pay`, // 支付订单
    payStatus: `${mineapi}/v1/hashrate/payment/status`, // 通知支付状态
    create: `${mineapi}/v1/hashrate/order/create`, // 创建订单
    createElectric: `${mineapi}/v1/hashrate/order/createFee`, // 创建电费订单
    powerpurchase: `${mineapi}/v1/hashrate/feeorder/list`, // 购电记录（订单）
    electricitydetail: `${mineapi}/v1/hashrate/feeorder/detailByTradeNo`, // 电费查询
    cancelorder: `${mineapi}/v1/hashrate/order/cancel`, // 取消订单
    cancelorderfee: `${mineapi}/v1/hashrate/orderfee/cancel`, // 取消电费订单
    inconelist: `${mineapi}/v1/hashrate/order/myHashrateIncomeList`, // 收益明细
    inconelistv2: `${mineapi}/v1/hashrate/order/myHashrateIncomeList_v2`, // 收益明细v2
    getaddress: `${walletapi}/mapi/asset/deposit/address`, // 获取充币地址
    extractaddress: `${mineapi}/v1/hashrate/income/extract`, // 提取收益
    promotionCode: `${mineapi}/v1/hashrate/discount/verify`, // 获取优惠码信息
    payList: `${mineapi}/v1/hashrate/pay/list`, // 支付方式列表
    createorder: `/mapi/order/create`, // 闪兑下单
    tradeorders: `/mapi/order/my_trades`, // 获取历史成交记录
    symbols: `${ucapi}/ms_api/basic/symbols`, // 获取币对信息
    ordertest: `${mineapi}/v1/hashrate/order/test`, // 测试
    prepaymentInfo: `${mineapi}/v1/hashrate/electricFee/prepaymentInfo`, // 用户电费信息
    electricepaytype: `${mineapi}/v1/hashrate/order/updateElectricPayType`, // 切换电费扣费方式
    electcount: `${mineapi}/v1/hashrate/electricFee/calculate`, // 电费计算
    rechargeorder: `${mineapi}/v1/hashrate/rechargeorder/create`, // 创建电费充值订单
    // electricorderlist: `${mineapi}/v1/hashrate/rechargeorder/list`, // 电费订单充值取消
    electricorderlist: `${mineapi}/v1/hashrate/my/electricRecordList`,
    cancelelectriice: `${mineapi}/v1/hashrate/rechargeorder/cancel`, // 取消电费充值订单
    collectorder: `${mineapi}/v1/hashrate/collect/order/list`, // 费用订单
    changepaymethed: `${mineapi}/v1/hashrate/collect/order/changePayMethod`, // 修改支付方式
    collectpaylist: `${mineapi}/v1/hashrate/collect/pay/list`, // 全币种支付列表
    extractall: `${mineapi}/v1/hashrate/income/extractAll`, // 一键划转
    orderlistv2: `/v1/hashrate/v2/order/list` // 查询我的算力订单v2
}

export const loan = {
    fixedLoadDetail: '/v1/loan/fixed-loan/detail', // 定期接待详情
    fixedloancreate: `/v1/loan/fixed-loan/create`, // 创建借币订单
    fixedLoadOrders: `/v1/loan/fixed-loan/orders`, // 借币订单列表
    fixedLoadOrdersDetail: `/v1/loan/fixed-loan/order-detail`, // 借币订单详情
    fixedLoadCurrentMargin: `/v1/loan/fixed-loan/current-margin`, // 借币订单质押金详情
    fixedLoadInterestList: `/v1/loan/fixed-loan/interest-list`, // 还款利息列表
    fixedLoadMarginCall: `/v1/loan/fixed-loan/margin-call`, // 追加质押金
    fixedLoadPayInterest: `/v1/loan/fixed-loan/pay-interest`, // 还利息
    fixedLoadRepay: `/v1/loan/fixed-loan/repay`, // 还款
    fixedLoadRepaymentDetail: `/v1/loan/fixed-loan/repayment-detail`, // 还款详细信息
    currencyrate: `/v1/loan/payment/currency/rate`, // 币对汇率
    paymentstatus: `/v1/loan/payment/status`, // 通知更新币币支付订单状态
    paybackhistory: `/v1/loan/fixed-loan/payback-history`, // 还款历史列表
    pledgechange: `/v1/loan/fixed-loan/pledge-change`, // 质押率调整列表
    coveredorders: `/v1/loan/fixed-loan/covered-orders`, // 平仓历史
    payloan: `/v1/loan/fixed-loan/pay-loan`, // 还款
    marginrecalc: `/v1/loan/fixed-loan/margin-recalc`, // 质押率动态计算接口
    pledgeCalculator: `/v1/loan/fixed-loan/pledge-calculator`, // 按借款数量计算质押数量利息等
    margincall: `/v1/loan/fixed-loan/margin-call`, // 追加质押金
    prepayinfo: `/v1/loan/fixed-loan/prepay-info`, // 获取提前还款信息
    violateconfiginfo: `/v1/loan/fixed-loan/violate-config-info`, // 获取违约金配置列表
    interestcalculator: `/v1/loan/fixed-loan/interest-calculator`, // 借贷利息计算器
    hrloanlist: `/v1/hr-loan/fixed-loan/tokens`, // 算力质押贷币种列表
    hrloandetail: `/v1/hr-loan/fixed-loan/detail`, // 算力质押贷币种详情
    hrcalculator: `/v1/hr-loan/fixed-loan/pledge-calculator`, // 按揭款数量计算总利息
    hrloancreate: `/v1/hr-loan/fixed-loan/create`, // 创建苏哪里借币订单
    hrloanroder: `/v1/hr-loan/fixed-loan/orders`, // 质押算力订单
    hrorderdetail: `/v1/hr-loan/fixed-loan/order-detail`, // 质押算力订单详情
    hrdetaillist: ` /v1/hr-loan/fixed-loan/hashrate-list`, // 质押算力订单列表
    hrprepayinfo: `/v1/hr-loan/fixed-loan/prepay-info`, // 获取提前还款信息
    hrpayloan: `/v1/hr-loan/fixed-loan/pay-loan` // 提前还款
}

export const staking = {
    custom_kvimg: `/s_api/basic/custom_kv`, // 获取staking活动图片
    stakinglist: `/api/v1/staking/product/list`, // staking产品列表
    getstakingdetail: `/api/v1/staking/product/get` // staking产品详情
}
