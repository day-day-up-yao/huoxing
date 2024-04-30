// 活动详情 请求
type ActivityDetailParameters = {
  activityId: number; // 活动ID
};

// 活动详情 基础参数
type ActivityType = {
  actType: number; // 活动类型;
  beginTime: number; // 活动开始时间;
  data: string; // 数据;
  endTime: number; // 活动结束时间;
  id: number; // 活动id;
  param1: string; // 参数1;
  param2: string; // 参数2;
  param3: string; // 参数3;
  param4: string; // 参数4;
  param5: string; // 参数5;
};

// 活动详情 横幅列表
type ActivityBannerListType = {
  brief: string; // 简介 ,
  id: number; // Banner id ,
  jumpUrl?: string; // 跳转链接
  picUrl: string; // 图片 ,
  title: string; // 标题
};

// 活动详情 logo列表
type ActivityLogoListType = {
  brief: string; // 简介
  jumpUrl: string; // 跳转链接
  picUrl: string; // 图片
  title: string; // 名称
};

// 活动详情 赞助总列表
type ActivityLogoGroupListType = {
  title: string;
  titleEn: string;
  logoList: ActivityLogoListType[];
};

// 活动详情 参数
type ActivityDetailType = {
  activity: ActivityType; // 活动基础参数
  bannerList: ActivityBannerListType[]; // 头部横幅列表
  logoGroupList: ActivityLogoGroupListType[]; // 赞助Logo列表
  questList: QuestListType[]; // 任务列表
};

// 活动详情 返回
type ActivityDetailRes = {
  data: ActivityDetailType;
};

// type 活动标识
type ActivityGuildRes = {
  code: number;
  data: string;
};

type VoteGameListParam = {
  activityId: number;
  guid: string;
  keyword: string;
  currentPage: number;
  pageSize: number;
  sort: number;
};

// 投票infolist
type VoteGamListInfolist = {
  coverUrl: string;
  gameBrief: string;
  gameId: number;
  name: string;
  voteNum: number;
  voteTotal: number;
  voted: number;
};

type CommitInvestRes = {
  code: number;
  data: string;
  msg: string;
};

type CommitInvestParam = {
  careQa: string;
  corePlay: string;
  deckUrl: string;
  discord: string;
  economicModel: string;
  email: string;
  gameName: string;
  linkedin: string;
  name: string;
  needQa: string;
  telegram: string;
  twitter: string;
  useQa: string;
  website: string;
};

type VoteGameListRes = {
  currentPage: number;
  currentTime: number;
  inforList: VoteGamListInfolist[];
  pageCount: number;
  pageSize: number;
  recordCount: number;
};

type TovoteGameParam = {
  activityId: number;
  guid: string;
  gameId: number;
};

type TovoteGametype = {
  gameId: number;
  voteNum: number;
  voteTotal: number;
  voted: number;
};

type TovoteGameRes = {
  code: number;
  data: TovoteGametype;
  msg: string;
};
