type GameIdParams = { gameId: number };
type IdParams = { id: number };

// 游戏库数据 列表类型
type DicPojoType = {
  name: string; // 类别名称 ,
  num: number; // 游戏数量 ,
  showName: string; // 展示名字
};

// 链列表 类型
type DicChainPojoType = DicPojoType & {
  iconUrl: string; // 图标
};

// 游戏库数据 类型
type AllGameDataType = {
  allGameNum: number; // 所有游戏数量 ,
  alphaNum: number; // alpha数量 ,
  betaNum: number; // beta数量 ,
  categoryPojoList: DicPojoType[]; // 分类列表 ,
  chainPojoList: DicChainPojoType[]; // 链列表 ,
  developNum: number; // develop数量 ,
  developStatusPojoList: DicPojoType[]; // 开发状态列表 ,
  platformPojoList: DicPojoType[]; // 平台列表 ,
  playableNum: number; // 正式上线数量 ,
  to10Num: number; // 7.1~10数量 ,
  to4Num: number; // 0.1~4数量 ,
  to7Num: number; // 4.1~7数量 ,
  zeroNum: number; // 0分数量
};

// 请求游戏详情 返回值
type AllGameDataRes = {
  data?: AllGameDataType;
};

// 请求游戏详情 返回值
type GameDetailRes = {
  data?: GameDetailType;
};

// 请求已完成列表
type CompletedListData = {
  currentPage: number;
  currentTime: number;
  inforList: {
    address: string;
    date: string;
    discordUid: string;
    discordUserName: string;
    email: string;
    name: string;
    twitterUid: string;
    twitterUserName: string;
    uid: string;
  }[];
  pageCount: number;
  pageSize: number;
  recordCount: number;
};
type CompletedListRes = {
  code?: number;
  data?: CompletedListData;
};

// 直播回放列表 类型
type LivePlaybackPojoType = {
  coverUrl: string; // 封面图片 ,
  hostId: string; // 主播id ,
  title: string; // 标题 ,
  url: string; // 回放url
};

// 直播列表 类型
type LivePojoType = {
  coverUrl: string; // 封面图片 ,
  gameId: number; // 游戏id ,
  liveUrl: string; // 快讯url ,
  title: string; // 标题
};

// 游戏项目成员列表 类型
type MemberListType = {
  avatarUrl: string; // 成员头像 ,
  brief: string; // 身份简介 ,
  id: number; // 成员id ,
  name: string; // 成员名字 ,
  topOrder: number; // 排序权重 ,
  twitter: string; // twitter
};

// 游戏详情任务 类型
type MissionListType = {
  gameId: number; // 游戏ID,
  id: number; // 任务ID,
  description: string;
  finishStatus: number; // 完成状态,完成:1 未完成:0
  isDaily: number; // ,
  missionType: number; // 任务类型,
  param1: string; // 任务参数1,
  param2: string; // 任务参数2,
  param3: string; // 任务参数3,
  rewardNum: number;
};

// 游戏详情新增评论
type addcommentType = {
  avatarUrl: string;
  content: string;
  gameId: number;
  id: number;
  name: string;
  publishTime: number;
  star: number;
  uid: number;
};

// 游戏详情新增评论Params
type addCommentParams = {
  content: string;
  gameId: number;
  star: number;
};

// 游戏详情新增评论Res
type addCommentRes = {
  code: number;
  data: addcommentType;
  msg?: string;
};

// 游戏详情评论列表
type commentlistType = {
  avatarUrl: string;
  content: string;
  gameIconUrl: string;
  gameId: number;
  gameName: string;
  id: number;
  isEdit: number;
  name: string;
  publishTime: number;
  star: number;
  uid: number;
};

// 获取自己评论信息data
type commentMyselfRes = {
  code: number;
  data: commentlistType;
  msg?: string;
};

// 获取自己评论信息params
type commentMyselfParams = {
  gameId: number;
};

// 游戏详情评论列表Res
type commentlistRes = {
  code: number;
  data: {
    currentPage: number;
    currentTime: number;
    inforList: commentlistType[];
    pageCount: number;
    pageSize: number;
    recordCount: number;
  };
};

// 游戏详情评论列表Params
type commentlistParams = {
  gameId: number;
  currentPage: number;
  pageSize: number;
};

// 游戏公司，投资机构列表 类型
type OrgListType = {
  brief: string; // 简介 ,
  createAt: number; // 创建时间 ,
  id: number; // 机构id ,
  logoUrl: string; // 头像 ,
  name: string; // 名字 ,
  topOrder: number; // 排序权重 ,
  twitter: string; // twitter ,
  updateAt: number; // 更新时间
};

// discord数据 类型
type DiscordDataType = {
  memberNum: number; // Discord成员数
  onlineNum: number; // Discord在线数
  recordDate: number; // 日期 yyyymmdd
};

// twitter数据 类型
type TwitterDataType = {
  followNum: number; // 推特粉丝数
  likeNum: number; // 推特点赞数
  recordDate: number; // 日期 yyyymmdd
};

// 游戏详情 类型
type GameDetailType = {
  activeNum24h: number; // 24h活跃用户 ,
  activeNum30d: number; // 30d活跃用户 ,
  activeNum7d: number; // 7d活跃用户 ,
  activeNumChange24h: number; // 24h活跃用户变化% ,
  activeNumChange30d: number; // 30d活跃用户变化% ,
  activeNumChange7d: number; // 7d活跃用户变化% ,
  addressNum: number; // 地址数量 ,
  addressNumChange24h: number; // 24h地址数量变化% ,
  addressNumChange30d: number; // 30d地址数量变化% ,
  addressNumChange7d: number; // 7d地址数量变化% ,
  bgUrl: string; // 背景图片 ,
  brief: string; // 一句话简介 ,
  briefCN: string; // 一句话简介 中文,
  category: string; // 游戏类别,逗号分隔 ,
  chain: string; // 链，逗号分隔 ,
  change24h: number; // 24小时价格变化 ,
  change7d: number; // 7日价格变化 ,
  coinIconUrl?: string; // 代币url ,
  coinName?: string; // 代币名称 ,
  communityNum: number; // 社区粉丝量 ,
  communityNumChange24h: number; // 24h社区粉丝量变化% ,
  communityNumChange30d: number; // 30d社区粉丝量变化% ,
  communityNumChange7d: number; // 7d社区粉丝量变化% ,
  contractAddress: string; // 合约地址 ,
  coverUrl: string; // 封面图片 ,
  devOrg: string; // 开发公司 ,
  developStatus: string; // 开发阶段 ,
  discord: string; // discord url ,
  downloadUrl: string; // 下载链接 ,
  economicMode: string; // 经济模型 ,
  gameDesc: string; // 游戏介绍 ,
  gameDescCN: string; // 游戏介绍 中文,
  gameLivePlaybackPojoList: LivePlaybackPojoType[]; // 直播回放列表 ,
  gameLivePojo: LivePojoType[]; // 直播对象 ,
  iconUrl: string; // 图标 ,
  id: number; // 游戏项目id ,
  isAdvise: number; // 是否编辑推荐 ,
  isFree: number; // 是否免费 ,
  marketCap: number; // 市值 ,
  memberList: MemberListType[]; // 团队成员列表 ,
  missionList: MissionListType[]; // 游戏详情任务 ,
  name: string; // 游戏项目名字 ,
  onlineDateStamp: number; // 上线日期 ,
  orgList: OrgListType[]; // 投资机构列表 ,
  picUrl: string; // 宣传图片url ,
  playerNum: number; // 用户数量 ,
  price: number; // 币价 ,
  publicPrice: number; // 公募价格 ,
  questList: QuestListType; // 关联任务列表 ,
  quoteUrl: string; // 内容链接 ,
  roi: number; // roi ,
  score: number; // 评分 ,
  supportPlatform: string; // 支持的平台 ,
  symbol: string; // 游戏Token代币标识 ,
  telegram: string; // telegram url ,
  totalSupply: number; // 总供应量 ,
  twitter: string; // twitter url ,
  updateTime: number; // 评测更新时间 ,
  videoUrl: string; // 宣传视频url ,
  volume24h: number; // 24小时成绩额 ,
  website: string; // 官网url
  adverUrl: string; // 新详情宣传图，最优先显示
  discordDataList: DiscordDataType[]; // Discord数据列表 ,
  discordMemberAdd: number; // Discord成员数增减 ,
  discordMemberNum: number; // Discord成员数 ,
  discordOnlineAdd: number; // Discord在线数增减 ,
  discordOnlineNum: number; // Discord在线数,
  twitterDataList: TwitterDataType[]; // 推特数据列表 ,
  twitterFollowAdd: number; // 推特粉丝数增减 ,
  twitterFollowNum: number; // 推特粉丝数 ,
  twitterLikeAdd: number; // 推特点赞数增减 ,
  twitterLikeNum: number; // 推特点赞数 ,
};

// 更改游戏详情 类型
type GameProjectType = {
  brief?: string; // 一句话简介 ,
  briefTw?: string; // 一句话简介繁体 ,
  category?: string; // 游戏类别,逗号分隔 ,
  chain?: string; // 链，逗号分隔 ,
  contractAddress_avax?: string; // 链地址 ,
  contractAddress_bsc?: string; // 游链地址戏id ,
  contractAddress_eth?: string; // 链地址 ,
  contractAddress_polygon?: string; // 链地址 ,
  contractAddress_solana?: string; // 链地址 ,
  coverUrl?: string; // 封面图片 ,
  devOrg?: string; // 开发公司 ,
  devOrgTw?: string; // 开发公司繁体 ,
  developStatus?: string; // 开发阶段 ,
  discord?: string; // discord url ,
  downloadUrl_android?: string; // 下载地址 ,
  downloadUrl_ios?: string; // 下载地址 ,
  downloadUrl_macos?: string; // 下载地址 ,
  downloadUrl_windows?: string; // 下载地址 ,
  gameDesc?: string; // 游戏介绍 ,
  gameDescTw?: string; // 游戏介绍台湾 ,
  iconUrl?: string; // 图标 ,
  id?: number; // 游戏id ,
  isFree?: number; // 是否免费play ,
  name?: string; // 游戏名字 ,
  nameTw?: string; // 游戏名字繁体 ,
  picUrl_1?: string; // 宣传图片url，json数组 ,
  picUrl_2?: string; // 宣传图片url，json数组 ,
  picUrl_3?: string; // 宣传图片url，json数组 ,
  picUrl_4?: string; // 宣传图片url，json数组 ,
  picUrl_5?: string; // 宣传图片url，json数组 ,
  picUrl_6?: string; // 宣传图片url，json数组 ,
  supportPlatform?: string; // 支持的平台，json数组 ,
  telegram?: string; // telegram url ,
  twitter?: string; // twitter url ,
  videoCover_1?: string; // 宣传视频封面url，json数组 ,
  videoCover_2?: string; // 宣传视频封面url，json数组 ,
  videoCover_3?: string; // 宣传视频封面url，json数组 ,
  videoUrl_1?: string; // 宣传视频url，json数组 ,
  videoUrl_2?: string; // 宣传视频url，json数组 ,
  videoUrl_3?: string; // 宣传视频url，json数组 ,
  website?: string; // 官网url
};

// 更改游戏详情 返回值
type UpdateGameProgjectRes = {
  code?: number;
  data?: {
    gameId: number;
  };
  msg?: string;
};

type GameNFTCollectionRes = {
  data?: NFTCollectionType[];
};

type NFTOfferPriceType = {
  iconUrl: string; // 币图标 ,
  name: string; // 币名字 ,
  price: string; // 价格
};
type NFTCollectionType = {
  bestOfferPrice: NFTOfferPriceType; // 最佳报价 ,
  floorPrice: NFTOfferPriceType; // 地板价 ,
  iconUrl: string; // 合集图标 ,
  isVerified: boolean; // 是否认证 ,
  name: string; // 合集名字 ,
  orderRate: string; // 挂单率 ,
  ownerCount: string; // 持有人数 ,
  saleCount24h: string; // 24小时销量 ,
  slug: string; // 合集slug ,
  verifiedIconUrl: string; // 认证图标 ,
  volume24h: string; // 24小时交易额 ,
  volumeCoinName: string; // 交易额-币名字 ,
  volumeIconUrl: string; // 交易额-币图标 ,
  volumeTotal: string; // 总交易额
};
type SearchMultiParams = { keyword?: string };
type SearchMultiRes = {
  data?: { gameProjectPojoList: any; articlePojoList: any; strategyPojoList: any };
};

// 详情任务认证参数类型
type IdMission = {
  missionId: string;
  param: string;
};

type Gameid = {
  gameId: string;
};

// 任务列表数据
type MissionListRes = {
  code?: number;
  data?: MissionListType[];
  msg?: string;
};

type MissionvrifyRes = {
  code?: number;
  data?: DetailMissionType;
  msg?: string;
};

type MissionCompletedListParams = {
  missionId: string;
  currentPage: number;
  pageSize?: number;
};

// 详情任务认证数据类型
type DetailMissionType = {
  missionId: number; // 任务id
  param: string; // 附加参数
  status: number; // 未验证:0 已验证:1
};

// 外链验证类型
type DetailDoMissionType = {
  code?: number;
  data?: number;
  msg?: string;
};

type DetailDoMissionParam = {
  missionId: number;
  missionType: number;
};

// 获取首页顶部滚动Token数据
type TopCoinListType = {
  chain: string; // 链标识 ,
  change24h: string; // 变化
  coinIcon: string; // 图标
  price: string; // 价格
  showName: string; // 展示名字 ,
  symbol: string; // 代称
  gameId: number; // 游戏详情ID
};
type TopCoinListRes = {
  data?: TopCoinListType[];
};

// 工会排行数据
type GuildMemberListType = {
  address: string;
  bonus: number;
  createAt: number;
  guildId: number;
  id: number;
  uidStr: string;
  updateAt: number;
  userAvatarUrl: string;
};

// 工会排行成员数据
type GuildListType = {
  address: string;
  bonus: number;
  createAt: number;
  description: string;
  gameId: number;
  iconUrl: string;
  id: number;
  memberList: GuildMemberListType[];
  memberNum: number;
  name: string;
  rank: number;
  rewardNum: number;
  uidStr: string;
  updateAt: number;
};

type GuildRankListType = {
  inforList: GuildListType[];
};

// 能量排行infolist类型
type GameuserankType = {
  address: string;
  bonus: number;
  createAt: number;
  gameId: number;
  id: number;
  rank: number;
  uidStr: string;
  updateAt: number;
  userAvatarUrl: string;
};

type GameUserRankType = {
  data?: PageUtil & GameuserankType;
  code: number;
  msg: string;
};

type GuildRankListTypeRes = {
  data?: PageUtil & GuildRankListType;
  code: number;
  msg: string;
};

// 加入游戏数据类型
type JoinGameType = {
  gameId: string;
  gameUserBonusId: number;
  status: number;
};

type JoinGameDataTypeRes = {
  code: number;
  data: JoinGameType;
  msg: string;
};

// 工会邀请码数据
type GuildInviteCodeRes = {
  data?: string;
  code: number;
  msg: string;
};

// 接收邀请码数据
type AcceptGuildInviteType = {
  guildId: string;
};

// 接收邀请码数据
type AcceptGuildInviteRes = {
  data?: AcceptGuildInviteType;
  code: number;
  msg: string;
};

// 是否加入工会
type hasjoinGuildRes = {
  data?: boolean;
  code: number;
  msg: string;
};

type AcceptGuildInviteParams = {
  inviteCode: string;
};

// 能量列表参数类型
// type GameUserRankParams = {
//   gameId: string;
//   currentPage: number;
//   pageSize: number;
// };

type GuildInviteCodeParams = {
  gameName: string;
};

type GuildRankListParams = {
  gameId: string;
  currentPage: number;
  pageSize: number;
};

// 获取刷新Token数据: symbols,逗号分隔
type CoinPriceParams = { symbols: string };

// 首页排行榜 参数
type HomePageRankParams = {
  chain?: string; // 所属链
  currentPage: number; // 当前页码
  pageSize: number; // 每页条数
};
// 首页排行榜 返回
type HomePageRankRes = {
  data: GameDetailType[];
};

// 分页公共接口
interface Pagination<T> {
  currentPage: number; // 当前页面
  currentTime: number;
  inforList: T[];
  pageCount: number; // 总页数
  pageSize: number; // 每一页数量
  recordCount: number; // 总条目
}

// 公共分页参数基础类型
interface BasePaginationParams {
  currentPage: number;
  pageSize: number;
}

// 接口公共返回数据
interface BaseRes<T> {
  code: number;
  data: T;
  msg: string;
}
