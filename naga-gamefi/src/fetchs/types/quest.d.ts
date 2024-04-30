// 任务需求的工作列表 类型 ———— 全部任务列表
type TaskListType = {
  id: number; // 工作id ,
  param1: string; // 参数1 ,
  param2: string; // 参数2 ,
  param3: string; // 参数3 ,
  taskType: number; // 工作类型
};

// 任务已完成的工作列表 类型 ———— 完成的列表 验证用
type VerifyTaskListType = {
  param: string; // 附加参数 ,
  status: number; // 未验证:0 已验证:1 ,
  taskId: number; // 工作id
};

// 任务详情 类型
type QuestListType = {
  autoWinnerMethod: number; // 选择方式,随机:0,前N个:1 ,
  beginTime: number; // 开始时间 ,
  chain: string; // 网络 ,
  description: string; // 描述 ,
  drawWinnerMethod: number; // 抽奖方式,自动:0,手动:1 ,
  endTime: number; // 结束时间 ,
  followNagaSocial: number; // 关注naga社交媒体 是:1 否:0 ,
  gameId: number; // 关联游戏id ,
  gameLogo: string; // 游戏logo ,
  gameName: string; // 游戏名字 ,
  googleCaptcha: number; // google认证 ,
  id: number; // 任务id ,
  isWin: number; // 已中奖:1,未中奖:0 ,
  nagaAuth: number; // naga官方认证:1 否:0 ,
  nftCollectionAddress: string; // NFT合集地址 ,
  nftCollectionName: string; // NFT合集名字 ,
  nftPreviewUrl: string; // NFT合集预览图片 ,
  participantNum: number; // 参与人数 ,
  picUrl: string; // 附加图片 ,
  realWinnerNum: number; // 中奖人数 ,
  rewardExtra: string; // 额外奖励描述 ,
  rewardMethod: number; // 奖励分配,平均:0 随机:1 ,
  rewardNum: number; // 奖励数量 ,
  rewardNumUsdt: number; // 是否奖励等值usdt ,
  rewardToken: string; // 奖励token ,
  rewardTokenAddr: string; // 奖励token addr ,
  rewardType: number; // 奖励类型token:1,nft:2,whitelist:3 ,
  status: number; // 状态 草稿:0,发布:1,结束:2,已抽奖:3,已发奖:4 ,
  submitNum: number; // 提交人数 ,
  taskFinishStatus: number; // 工作完成状态,完成:1 未完成:0 ,
  taskList: TaskListType[]; // 工作列表 ,
  title: string; // 标题 ,
  uid: number; // 用户uid ,
  userAvatarUrl: string; // 用户头像 ,
  userName: string; // 用户昵称 ,
  verifyTaskList: VerifyTaskListType[]; // 任务验证列表 ,
  winnerNum: number; // 获奖人数
};

// 首页任务列表 返回
type QuestHomeRes = {
  data: QuestListType[];
};

// 活动任务 领奖数据 类型
type DrawNftType = {
  sign: string; // 验证签名
  to: string; // 地址
};

// 活动任务 领奖数据 返回
type DrawNftRes = {
  code: number;
  data: DrawNftType;
  msg: string;
};

// 活动任务 是否完成任务 类型
type CanDrawNftType = {
  canDraw: number; // 1.可以领取, 0.不能领取
  questId: number; // 活动地址
  finishQuest10: number; // 已经完成10个小任务
  needFinishQuest10: number; // 需要完成的小任务数量
  finishSelfQuest: number; // 是否完成主要任务
};

// 活动任务 领奖数据 返回
type CanDrawNftRes = {
  data: CanDrawNftType;
};

// 活动任务 完成领取 参数
type DrawNftFinishParams = {
  contractAddress: string;
  userAddress: string;
  tokenId: number;
};

// 活动任务 完成领取 返回
type DrawNftFinishRes = {
  data: number;
};
