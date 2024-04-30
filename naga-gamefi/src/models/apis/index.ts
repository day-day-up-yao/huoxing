/** @desc 用户相关 */
export const user = {
  passwordlogin: '/api/account/authByEmailPassword', // 密码登录
  verifycodelogin: '/api/account/authByEmailVerifyCode', // 验证码登录
  getemailcode: '/api/account/getVerifyCodeByEmail', // 获取邮箱验证码
  updateAvatar: '/api/account/updateAvatar', // 修改头像
  changeEmail: '/api/account/updateEmailByVerifyCode', // 修改邮箱地址
  changeName: '/api/account/updateName', // 修改昵称
  changePassword: '/api/account/updatePasswordByOld', // 修改密码
  verifycodepassword: '/api/account/updatePasswordByVerifyCode', // 根据验证码修改
  accountinfo: `/api/account/getAccountInfo`, // 获取用户信息
  googleLogin: `/api/account/authByGoogle`, // 谷歌第三方登录登录
  bindGoogleEmail: '/api/account/bindGoogle', // 绑定邮箱
  usercenterBindgoogle: `/api/account/v1/bindGoogleForUserCenter`, // 用户中心绑定谷歌
  unbindgoogle: '/api/account/removeBindGoogle', // 解绑谷歌
  metamasketLogin: '/api/account/authByMetamask', // 小狐狸钱包登录
  getcodeadress: '/api/account/getSignatureMessage', // 获取签名提示信息
  bindMetamasket: '/api/account/bindMetamask', // 绑定小狐狸钱包
  unbindMetamasket: '/api/account/removeMetamask', // 解绑小狐狸钱包
  connectmetamask: '/api/account/v1/bindMetamaskForUserCenter', // 连接小狐狸钱包
  twitterLogin: `/api/account/authByTwitter`, // 推特授权登录
  bindTwitter: '/api/account/bindTwitter', // twitter账号绑定邮箱
  unbindtwitter: '/api/account/removeBindTwitter', // 推特解绑
  connecttwitter: '/api/account/v1/bindTwitterForUserCenter', // 连接推特账号
  gettwitterlink: `/api/account/getTwitterAuthUrl`, // 获取推特授权链接
  reauthorizeTwitter: `/api/account/reauthorizeAccessTwitter`, //  token 失效推特重新授权
  discordLogin: `/api/account/authByDiscord`, // discord授权登录
  bindDiscord: `/api/account/bindDiscord`, // discord绑定邮箱
  reauthorizediscord: `/api/account/reauthorizeAccessDiscord`, // 失效重新授权
  bindEmailForUserCenter: '/api/account/v1/bindEmailForUserCenter', // 绑定邮箱
  unbinddiscord: `/api/account/removeBindDiscord`, // 解绑 discord
  connectdiscord: `/api/account/v1/bindDiscordForUserCenter`, // 登录状态 connect discord
  getdiscordlink: `/api/account/getDiscordAuthUrl`, // 获取授权链接
  getemail: `/api/account/submitEmail`, // 获取邮箱地址
  getMyNft: '/api/account/getMyNft', // 查看个人中心 NFT 列表
};

/** @desc 任务相关 */
export const quest = {
  addQuest: '/api/quest/addQuest', // 创建任务
  questlist: '/api/quest/getQuestList', // 获取任务列表
  questdetail: '/api/quest/getQuest', // 获取任务详情
  myquestlist: '/api/quest/getMyQuestList', // 个人任务列表
  questbanner: '/api/quest/getRecommendQuestList', // 推荐任务
  myjoinquest: '/api/quest/getTakeQuestList_v2', // 个人参与的任务
  questTokenMap: '/api/quest/getQuestChainToken', // 任务Token列表
  taskverify: `/api/quest/verifyTask`, // 任务认证
  tasklinkverify: `/api/quest/doTask`, // 点击外链认证
  submitquest: `/api/quest/submitQuest`, // 提交任务
  getwinnerlist: `/api/quest/getWinnerList`, // 获取中奖名单
  downlaodwinnerlist: `/api/quest/downloadWinnerSheet`, // 下载中奖名单
  uploadwinnerlist: `/api/quest/uploadWinnerSheet`, // 上传中奖名单
  downloadsubmitlist: `/api/quest/downloadSubmitSheet`, // 下载提交名单
  taskdeleteitem: `/api/quest/deleteQuest`, // 删除个人创建的任务
  getDiscordInviteInfo: '/api/quest/getDiscordInviteInfo', // 查询 Discord 名称及过期时间
  updateTaskParam: '/api/quest/updateTaskParam', // 更改 QA Work 重复提交任务
  getQuestHome: '/api/quest/getQuestHome', // 获取首页活动列表
  canDrawNft: '/api/quest/canDrawNft', // 领取活动任务 是否完成活动任务
  drawNft: '/api/quest/drawNft', // 领取活动任务 NFT资格
  drawNftFinish: '/api/quest/drawNftFinish', // 领取活动任务 完成领取
};

/** @desc 评论相关 */
export const comment = {
  // 游戏评论
  addComment: '/api/comment/addComment', // 创建评论
  updateComment: '/api/comment/updateComment', // 更新评论
  getSelfComment: '/api/comment/getSelfComment', // 当前游戏详情用户自己的评论
  getCommentListByGameId: '/api/comment/getCommentListByGameId', // 获取游戏详情评论列表
  getCommentListByUid: '/api/comment/getCommentListByUid', // 获取用户评论列表
  getStarByGameId: '/api/comment/getStarByGameId', // 获取游戏详情星级

  // 资讯评论
  addArticleComment: '/api/articleComment/addArticleComment', // 创建评论
  updateArticleComment: '/api/articleComment/updateArticleComment', // 更新评论
  getSelfArticleComment: '/api/articleComment/getSelfArticleComment', // 当前资讯详情用户自己的评论
  getArticleCommentListByArticleId: '/api/articleComment/getCommentListByArticleId', // 获取资讯详情评论列表
  getArticleCommentListByUid: '/api/articleComment/getArticleCommentListByUid', // 获取用户评论列表
};

/** @desc gamefi相关 */
export const gamefi = {
  // 首页
  webhome: '/api/gamefi/webHome', // 首页相关信息
  webhomev2: '/api/gamefi/webHome_v2', // 首页相关信息v2
  getCategoryAndChains: `/api/gamefi/getCategoryAndChains`, // 获取所有链和类别
  getTopCoinList: '/api/gamefi/getTopCoinList', // 获取顶部滚动Token数据
  getCoinPrice: '/api/gamefi/getCoinPrice', // 刷新Token币价
  getHomePageTrending: '/api/gamefi/getHomePageTrending', // 首页排行榜 热门数据
  getHomePageTop: '/api/gamefi/getHomePageTop', // 首页排行榜 最佳数据

  // 游戏库
  getAllGameData: '/api/gamefi/getGameListStatistic', // 获取游戏库数据

  // 排行榜
  gamelist: '/api/gamefi/getGameList', // 获取排行榜列表

  // 游戏详情
  gameDetail: '/api/gamefi/getGameDetail', // 获取游戏详情
  updateGameProject: '/api/gamefi/updateGameProject', // 更新游戏详情
  missionVerify: '/api/mission/verifyMission', // 详情任务验证
  missionList: '/api/mission/getMissionList', // 详情任务任务列表
  verifyDoMission: '/api/mission/doMission', // 外链验证
  guildrank: '/api/guild/getGuildRank', // 工会排行
  guildinvitecode: '/api/guild/getGuildInviteCode', // 获取工会邀请码
  guildinfo: '/api/guild/getGuildInfo', // 获取工会详情
  acceptguildinvite: '/api/guild/acceptGuildInvite', // 接收邀请码
  joinGuild: '/api/guild/hasJoinedGuild', // 加入工会
  gameuserrank: '/api/gameUserBonus/getGameUserRank', // 能量排行
  joinGame: '/api/gameUserBonus/joinGame', // 加入游戏

  // 游戏任务
  addMission: '/api/mission/addMission', // 更新游戏详情
  deleteMission: '/api/mission/deleteMission', // 删除任务
  getFinishSheet: '/api/mission/getFinishSheet', // 获取完成列表
  downloadFinishSheet: '/api/mission/downloadFinishSheet', // 下载完成列表

  // NFT合集
  getGameNft: '/api/gamefi/getGameNft', // 获取游戏相关的NFT合集

  // 资讯相关
  articleList: '/api/gamefi/getArticleList', // 获取 文章 列表
  article: '/api/gamefi/getArticle', // 获取 文章 详情
  strategyList: '/api/gamefi/getStrategyList', // 获取 攻略 列表
  articleFlashList: '/api/gamefi/getArticleFlashList', // 获取 快讯 列表
  articleFlash: '/api/gamefi/getArticleFlash', // 获取 快讯 详情

  // 评测相关
  articleEvaluation: '/api/gamefi/getArticleEvaluation', // 获取 评测 详情

  // 搜索相关
  searchMulti: '/api/gamefi/searchMulti', // 综合搜索
  searchGame: '/api/gamefi/searchGame', // 搜索 游戏 列表
  searchArticle: '/api/gamefi/searchArticle', // 搜索 文章/攻略 列表
};

/** @desc 投融资相关 */
export const financing = {
  getfinancingInfolist: '/api/financing/getFinancingInfoList', // 投融资列表
  getfinancingRoundlist: '/api/financing/getFinancingRoundList', // 轮次列表
};

/** @desc 通知相关 */
export const notice = {
  getMyNoticeList: '/api/notice/getMyNoticeList', // 获取通知
  markAsRead: '/api/notice/markAsRead', // 已读通知
  deleteNotice: '/api/notice/deleteNotice', // 删除通知
};

/** @desc 活动日历列表 */
export const eventCalendar = {
  getCatList: '/api/eventCalendar/getCatList', // 获取活动分类
  getEventCalendarList: '/api/eventCalendar/getEventCalendarList', // 活动日历列表
};

/** @desc 活动 */
export const activity = {
  getActivityDetail: '/api/activity/getActivityDetail', // 获取活动列表
  // getAllactivelogo: '/api/activity/getActivityDetail', //  活动logo
  getActiveguid: '/api/activity/getGuid', // 获取唯一标识
  getVotelist: '/api/activity/getVoteGameList', // 获取活动列表
  voteToGame: '/api/activity/voteGame', // 投票
  commitInvestapply: '/api/investApply/commitInvestApply', // 提交表单申请
};

/** @desc 上传相关 */
export const upload = {
  uploadFile: '/api/upload/uploadFile', // 上传文件
  uploadImage: '/api/upload/uploadImage', // 上传图片
  uploadDeckfile: '/api/investApply/uploadDeckFile', // 上传固定格式文件
};

/** @desc launchpad */
export const launchpad = {
  launchpadList: '/api/lauchpad/getLauchpadList', // 列表
  getOrderList: '/api/lauchpad/getOrderList', // 排行榜
};

/** @desc points */
export const points = {
  getBonusAwardSetting: '/api/bonus/getBonusAwardSetting', // 奖励分数
  signin: '/api/bonus/signin', // 签到
  getInviteRecord: '/api/bonus/getInviteRecord', // 邀请历史
  getLimitedQuests: '/api/bonus/getLimitedQuests', // 任务列表
  receiveBonusAward: '/api/bonus/receiveBonusAward', // 任务领取积分
  getBonusTaskStatus: '/api/bonus/getBonusTaskStatus', // 获取任务状态
};
