// 个人用户信息 参数
type AccountInfo = {
  addr: string;
  avatarUrl: string;
  brief: string;
  discordUserName: string;
  email: string;
  isBindDiscord: number;
  isBindEmail: number;
  isBindGoogle: number;
  isBindMetamask: number;
  isBindTwitter: number;
  metamaskAddr: string;
  nagaAuth: number;
  name: string;
  strBonus: string;
  twitterUserName: string;
  uid: number;
  uidStr: string;
  inviteCode: string;
  strBonus: string;
  strInviteAwardBonus: string;
  inviteNum: string;
  level: string;
  signInNumMod: number;
};
// 个人用户信息 返回
type AccountInfoRes = {
  code?: number;
  data?: AccountInfo;
  msg?: string;
};

// 个人用户徽章列表 类型
type MyNftType = {
  meta: {
    image: string;
    name: string;
  };
  tokenId: number;
};

// 个人用户徽章列表 返回
type MyNftRes = {
  data: MyNftType[];
};
