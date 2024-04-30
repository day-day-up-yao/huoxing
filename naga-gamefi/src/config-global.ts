export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;
export const ASSETS_API = process.env.NEXT_PUBLIC_ASSETS_API; // 测试的记住删除

/** @desc 配置规则去掉参数: /[lang]/game/[gameId] ===> /game/ */
export const soloThemePages = [
  {
    path: '/event/Top25Game',
    theme: 'dark',
  },
  {
    path: '/download',
    theme: 'dark',
  },
  {
    path: '/points',
    theme: 'dark',
  },
  // {
  //   path: '/launchpad',
  //   theme: 'light',
  // },
];

/** @desc 其它公共配置信息 */
export const common = {
  senseId: '1b140c59a6da8e906cb4b7ca6687e075',
  paycoin: 'USDT',
};

/** @desc Element接口相关 */
export const element = {
  XApiKey: '9c45f0114d3057ffa2d0039d9bcd0871',
  getCollectionWithChain: 'https://api.element.market/openapi/v1/contract',
};

/** @desc Footprint数据相关 */
export const overview = {
  APIKey: 'oXUDch6DmiEQJt0/WLoqBVJhGpTWeDOcRKLDyxPgVRDKi5/M7yGdaqxsAxDhCNKJ', // API Key
  getDailyVolume: 41346, // Daily Volume
  getDailyTransactions: 41350, // Daily Transactions
  getDailyNumberOfGamers: 41358, // Daily Number of Gamers
  getActiveAddressesChart: 41380, // Daily Active Addresses Chart
  getTransactionsChart: 41425, // Daily Transactions Chart
  getVolumeChart: 41426, // Volume Chart
  getTransactionsWeeklyChart: 41428, // Transactions (Weekly) Chart
  getActiveProjectsByChainChart: 41461, // Active Projects by Chain Chart
  getWeeklyNumberOfGamesChart: 41481, // Weekly Number of Games Chart
  getDailyVolumeByChainGameChart: 41486, // Daily Volume by Chain & Game Chart
};

/** @desc naga discord邀请链接 */
export const nagaDiscordInviteLink = 'https://discord.com/invite/sszzQDRaN8';

/** @desc naga twitter account */
export const nagaTwitterAccount = 'GamefiNaga';
