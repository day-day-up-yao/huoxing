// 创建活动参数
type CreateTaskParams = {
  awardNum: number;
  cat: number;
  description: string;
  gameId: number;
  missionType: number;
  param1?: string;
  param2?: string;
  param3?: string;
};
// 创建活动返回
type CreateTaskData = {
  missionId: number;
};
