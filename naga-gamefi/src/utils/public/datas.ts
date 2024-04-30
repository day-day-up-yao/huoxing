import { nagaTwitterAccount } from 'src/config-global';

// 币种类型
export const chainlist = [
  {
    id: 0,
    chainname: 'eth',
    icon: '/images/curreny/eth.png',
    name: 'Ethereum',
    num: 10,
    flag: false,
    title: 'ETH',
  },
  {
    id: 1,
    chainname: 'polygon',
    icon: '/images/curreny/polygon.png',
    name: 'Polygon',
    num: 10,
    flag: false,
    title: 'Polygon',
  },
  {
    id: 2,
    chainname: 'bsc',
    icon: '/images/curreny/bsc.png',
    name: 'BNB Chain',
    num: 10,
    flag: false,
    title: 'BSC',
  },
  {
    id: 3,
    chainname: 'solana',
    icon: '/images/curreny/solana.png',
    name: 'Solana',
    num: 10,
    flag: false,
    title: 'Solana',
  },
  {
    id: 5,
    chainname: 'avalanche',
    icon: '/images/curreny/avalanche.png',
    name: 'Avalanche',
    num: 10,
    flag: false,
    title: 'Avalanche',
  },
  {
    id: 6,
    chainname: 'arbitrum',
    icon: '/images/curreny/arbitrum.png',
    name: 'Arbitrum',
    num: 10,
    flag: false,
  },
  {
    id: 7,
    chainname: 'Other',
    icon: '/images/icon/othericon.png',
    name: 'Other',
    num: 10,
    flag: false,
  },
];

export const newaddchainlist = [
  {
    id: 8,
    chainname: 'WAX',
    icon: '/images/curreny/wax.png',
    name: 'WAX',
    num: 10,
    flag: false,
  },
  {
    id: 9,
    chainname: 'Fantom',
    icon: '/images/curreny/fantom.png',
    name: 'Fantom',
    num: 10,
    flag: false,
  },
  {
    id: 10,
    chainname: 'Moonbeam',
    icon: '/images/curreny/moonbeam.png',
    name: 'Moonbeam',
    num: 10,
    flag: false,
  },
  {
    id: 11,
    chainname: 'Starknet',
    icon: '/images/curreny/starknet.png',
    name: 'Starknet',
    num: 10,
    flag: false,
  },
  {
    id: 12,
    chainname: 'Zksync',
    icon: '/images/curreny/zksync.png',
    name: 'Zksync',
    num: 10,
    flag: false,
  },
];

// footer跳转列表
export const footerlinklist = [
  {
    name: 'Resources',
    list: [
      {
        title: 'Docs',
        link: '#',
      },
      {
        title: 'Whitepaper',
        link: '#',
      },
      {
        title: 'API',
        link: '#',
      },
      {
        title: 'Jobs',
        link: '#',
      },
    ],
  },
  {
    name: 'About',
    list: [
      {
        title: 'Wiki',
        link: '#',
      },
      {
        title: 'Our Team',
        link: '#',
      },
      {
        title: 'Blog',
        link: '#',
      },
    ],
  },
  {
    name: 'Contact Us',
    list: [
      {
        title: 'Twitter',
        link: `https://twitter.com/${nagaTwitterAccount}`,
        img: 'twitter',
      },
      {
        title: 'Discord',
        link: 'https://discord.gg/jgxjRqyfXR',
        img: 'discord',
      },
    ],
  },
  {
    name: 'Other',
    list: [
      {
        title: 'Submit',
        link: 'https://forms.gle/PJZWy582Y6rvPFM68',
      },
    ],
  },
];

// 首页底部到游戏库列表
export const hometogameslist = [
  {
    id: 0,
    bgurl: '/images/discove/freeplay.png',
    link: '/gamelibrary?freetoplay=true',
    titlename: 'Free to play',
  },
  {
    id: 1,
    bgurl: '/images/discove/metaverse.png',
    link: '/gamelibrary?category=Metaverse',
    titlename: 'Metaverse',
  },
  {
    id: 2,
    bgurl: '/images/discove/rpgimg.png',
    link: '/gamelibrary?category=RPG',
    titlename: 'RPG',
  },
  {
    id: 3,
    bgurl: '/images/discove/advennture.png',
    link: '/gamelibrary?category=Adventure',
    titlename: 'Adventure',
  },
  {
    id: 4,
    bgurl: '/images/discove/actionimg.png',
    link: '/gamelibrary?category=Action',
    titlename: 'Action',
  },
  {
    id: 5,
    bgurl: '/images/discove/cardimg.png',
    link: '/gamelibrary?category=Card',
    titlename: 'Card',
  },
  {
    id: 6,
    bgurl: '/images/discove/mmoimg.png',
    link: '/gamelibrary?category=MMO',
    titlename: 'MMO',
  },
  {
    id: 7,
    bgurl: '/images/discove/sportsimg.png',
    link: '/gamelibrary?category=Sports',
    titlename: 'Sports',
  },
];

export const platfromlist = [
  {
    id: 0,
    name: 'windows',
    icon: '/images/icon/Windows_i1.png',
    num: 10,
    flag: false,
    title: 'Windows',
  },
  {
    id: 1,
    name: 'web',
    icon: '/images/icon/Group1.png',
    num: 10,
    flag: false,
    title: 'Web',
  },
  {
    id: 2,
    name: 'android',
    icon: '/images/icon/Android1.png',
    num: 10,
    flag: false,
    title: 'Android',
  },
  {
    id: 3,
    name: 'ios',
    icon: '/images/icon/ios1.png',
    num: 10,
    flag: false,
    title: 'iOS',
  },
  {
    id: 4,
    name: 'mac',
    icon: '/images/icon/MacOS1.png',
    num: 10,
    flag: false,
    title: 'MacOS',
  },
];

export const stauslist = [
  {
    id: 0,
    name: 'Playable',
    icon: '/images/icon/playable.png',
    num: 10,
    flag: false,
    title: 'Live',
  },
  {
    id: 1,
    name: 'Alpha',
    icon: '/images/icon/alpha.png',
    num: 10,
    flag: false,
    title: 'Alpha',
  },
  {
    id: 2,
    name: 'Beta',
    icon: '/images/icon/beta.png',
    num: 10,
    flag: false,
    title: 'Beta',
  },
  {
    id: 3,
    name: 'In Development',
    icon: '/images/icon/delevip.png',
    num: 10,
    flag: false,
    title: 'Development',
  },
];

export const genreslist = [
  {
    id: 0,
    name: 'Multiplayer',
    num: 10,
    flag: false,
  },
  {
    id: 1,
    name: 'Adventure',
    num: 10,
    flag: false,
  },
  {
    id: 2,
    name: 'RPG',
    num: 10,
    flag: false,
  },
  {
    id: 3,
    name: 'Free-To-Play',
    num: 10,
    flag: false,
  },
  {
    id: 4,
    name: 'Shooter',
    num: 10,
    flag: false,
  },
];

export const datetimelist = [
  {
    id: 0,
    name: 'All Time',
    flag: true,
    time: 'all',
  },
  {
    id: 1,
    name: 'Last 7 days',
    flag: false,
    time: '7d',
  },
  {
    id: 2,
    name: 'Last 30 days',
    flag: false,
    time: '30d',
  },
  {
    id: 3,
    name: 'Last 6 months',
    flag: false,
    time: '6m',
  },
];

// 评分列表
export const ratinglist = [
  {
    name: '7.1-10.0 分',
    num: 10,
    icon: '/images/icon/ratebig.png',
    flag: false,
    min: 7.1,
    max: 10,
  },
  {
    name: '4.1-7.0 分',
    num: 10,
    icon: '/images/icon/ratelittie.png',
    flag: false,
    min: 4.1,
    max: 7,
  },
  {
    name: '0.1-4.0 分',
    num: 10,
    icon: '/images/icon/ratesmall.png',
    flag: false,
    min: 0.1,
    max: 4,
  },
  {
    name: 'No Rating',
    num: 10,
    icon: '/images/icon/norate.png',
    flag: false,
    min: 0,
    max: 0,
  },
];

// 游戏库排序类型
export const gamesortList = [
  {
    name: 'gamelibrary_good_score',
    type: 'score',
    sort: 'desc',
  },
  {
    name: 'gamelibrary_new_old',
    type: 'create_at',
    sort: 'desc',
  },
  {
    name: 'gamelibrary_old_new',
    type: 'create_at',
    sort: 'asc',
  },
  {
    name: 'gamelibrary_a_z',
    type: 'name',
    sort: 'asc',
  },
];

// 游戏详情 标签
export const gameDetailTabs = [
  {
    // Campaign and Tasks
    id: 0,
    title: 'game_detail_campaignandtasks',
    isPC: true,
    isM: true,
  },
  {
    // 介绍
    id: 1,
    title: 'game_detail_desc',
    isPC: true,
    isM: true,
  },
  {
    // 直播
    id: 5,
    title: 'game_detail_live',
    isPC: true,
    isM: true,
    // disable: true
  },
  {
    // 评论
    id: 4,
    title: 'game_detail_user_reviews',
    isPC: true,
    isM: true,
  },
  {
    // 评测
    id: 7,
    title: 'game_detail_reviews',
    isPC: true,
    isM: true,
  },
  {
    // 团队
    id: 2,
    title: 'game_detail_team',
    isPC: true,
    isM: true,
  },
  {
    // 资讯
    id: 3,
    title: 'game_detail_news',
    isPC: true,
    isM: true,
  },
  {
    // Twitter数据图表 和 Discord数据图表
    id: 9,
    title: 'game_detail_community_data',
    isPC: true,
    isM: true,
  },
  {
    // Token数据 和 NFT数据 ———— 移动端
    id: 6,
    title: 'game_detail_nft_and_token',
    isPC: false,
    isM: true,
  },
  {
    // 关联任务列表 ———— 移动端
    id: 8,
    title: 'quest',
    isPC: false,
    isM: true,
  },
];

// 游戏详情 时间精度
export const gameDetailTimeType = [
  {
    id: 0,
    type: '24h',
    name: '24H',
  },
  {
    id: 1,
    type: '7d',
    name: '7D',
  },
  {
    id: 2,
    type: '30d',
    name: '30D',
  },
];

// 游戏详情 数据切换
export const gameDetailDataType = [
  {
    value: 'TOKEN',
    label: 'Token',
  },
  {
    value: 'NFT',
    label: 'NFT',
  },
];

// 文章列表 标签
export const gameNewsTabs = [
  {
    // 资讯
    id: 1,
    title: 'news_article',
  },
  {
    // 攻略
    id: 2,
    title: 'news_strategy',
  },
  // {
  //     // 快讯 ———— 快讯暂时隐藏
  //     id: 3,
  //     title: 'news_flash'
  // }
];

// 个人中心 评论标签
export const userCenterCommentTabs = [
  {
    // 游戏评论
    tab: 1,
    title: 'rate_tab_game',
  },
  {
    // 资讯评论
    tab: 2,
    title: 'rate_tab_news',
  },
];

// 任务奖励类型
export const rewardlist = [
  {
    name: 'search_tab_all',
    type: -1,
  },
  {
    name: 'quest_detail_reward_type_token',
    type: 1,
  },
  {
    name: 'quest_detail_reward_type_nft',
    type: 2,
  },
  {
    name: 'quest_detail_reward_type_whitelist',
    type: 3,
  },
];

// 个人参与活动筛选
export const personReward = [
  {
    name: 'search_tab_all',
    type: -1,
  },
  {
    name: 'quest_list_ing',
    type: 1,
  },
  {
    name: 'quest_list_finish',
    type: 2,
  },
];

// 任务-完成未完成筛选
export const rewardfinish = [
  {
    name: 'search_tab_all',
    type: -1,
  },
  {
    name: 'quest_rewards_type_finished',
    type: 1,
  },
  {
    name: 'quest_rewards_type_not_finish',
    type: 0,
  },
];

// 任务-完成未完成筛选
export const rewarvriefy = [
  {
    name: 'search_tab_all',
    type: -1,
  },
  {
    name: 'quest_rewards_type_verifyed',
    type: 1,
  },
  {
    name: 'quest_rewards_type_not_verify',
    type: 0,
  },
];

// 搜索页面 标签
export const searchDetailTabs = [
  {
    // 全部
    id: 1,
    title: 'search_tab_all',
  },
  {
    // 游戏
    id: 2,
    title: 'search_tab_game',
  },
  {
    // 资讯
    id: 3,
    title: 'search_tab_news',
  },
  {
    // 攻略
    id: 4,
    title: 'search_tab_guide',
  },
];

export default {
  chainlist,
  platfromlist,
  footerlinklist,
  newaddchainlist,
  stauslist,
  genreslist,
  personReward,
  datetimelist,
  gameDetailTabs,
  gameNewsTabs,
  gamesortList,
  ratinglist,
  rewardlist,
  rewarvriefy,
  rewardfinish,
  searchDetailTabs,
  gameDetailTimeType,
};
