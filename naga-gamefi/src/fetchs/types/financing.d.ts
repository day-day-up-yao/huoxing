// 领投列表item followerPojoList
type followerlistType = {
  id: number;
  orgIcon: string;
  orgName: string;
  orgTwitter: string;
  orgWebsite: string;
};

// 跟投列表item leaderPojoList
type leaderlistType = {
  id: number;
  orgIcon: string;
  orgName: string;
  orgTwitter: string;
  orgWebsite: string;
};

// 投融资列表信息item
type financinginfoType = {
  gameId: number;
  iconUrl: string;
  id: number;
  change24h: number;
  price: number;
  inverstDateStamp: number;
  name: string;
  origin: string;
  raisedStr: string;
  round: string;
  symbol: string;
  tradable: string;
  followerPojoList: followerlistType[];
  leaderPojoList: leaderlistType[];
};

type FinancinginfoParmas = BasePaginationParams & {
  search?: string; // 搜索关键词
  startTime?: string; // 起始时间
  endTime?: string; // 结束时间
  round?: string; // 轮次
  startRaised?: string; // 起始金额
  endRaised?: string; // 结束金额
  tradable?: string; // 是否交易
  sortBy?: string; // 排序字段
  sort?: string; // 降序:desc 升序:asc
};

type financinginfoResponse = BaseRes<Pagination<financinginfoType>>;

// 融资轮次列表type
type RoundListType = {
  round: string;
  showName: string;
};

type RoundListResponse = BaseRes<RoundListType[]>;
