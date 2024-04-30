type GetMyNoticeListParams = { currentPage: number; pageSize: number };
type NoticeHandleParams = {
  ids?: string;
};
type NoticeListType = {
  content: string; // 内容
  createTime: number; // 创建时间
  id: number; // id
  status: number; // 状态：0.未读 1.已读
  title: string; // 标题
  type: number; // 通知类型： 1.中奖通知 3.自定义跳转通知
  uid: number; // 用户uid
  questId: number; // 任务详情ID  类型1用
  updateTime: number; // 更新时间
  jumpUrl?: string; // 自定义跳转 类型3用
};
type NoticeListRes = {
  inforList: NoticeListType[];
};
type GetMyNoticeListRes = {
  data?: PageUtil & NoticeListRes;
};
