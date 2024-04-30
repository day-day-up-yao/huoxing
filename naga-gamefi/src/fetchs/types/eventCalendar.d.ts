// 活动日历分类 数据
type EventCalendarCatType = {
  id: number; // ID
  name: string; // 名称
};

// 活动日历分类 返回
type EventCalendarCatRes = {
  data?: EventCalendarCatType[];
};

// 请求活动日历列表 参数
type EventCalendarListParams = {
  gameId?: number; // 游戏id
  triggerAt?: number; // 日历日期
  category?: number; // 分类
  currentPage: number; // 当前页码，1开始
  pageSize: number; // 每页数量
};

// 活动日历列表 数据
type EventCalendarListType = {
  category: number; // 分类 ,
  content: string; // 内容 ,
  gameIcon: string; // 游戏图标 ,
  gameId: number; // 游戏id ,
  gameName: string; // 游戏名字 ,
  id: number; // 主键id ,
  sourceLink: string; // 源链接 ,
  title: string; // 日历标题 ,
  triggerAt: number; // 日历时间,
  projectIcon: string; // 项目图标 ,
  projectLink: string; // 项目链接 ,
  projectName: string; // 项目名字 ,
};

// 活动日历列表 返回
type EventCalendarListRes = {
  data?: {
    currentPage: number; // ,
    inforList: EventCalendarListType[];
    pageCount: number; // ,
    pageSize: number; // ,
    recordCount: number; //
  };
};
