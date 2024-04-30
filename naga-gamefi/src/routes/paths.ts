const ROOTS = {
  DEMO: '/demo',
  CAMPAIGN: '/campaign',
  MANAGE: '/manage',
  LAUNCHPAD: '/launchpad',
  POINTS: '/points',
};

export const paths = {
  home: '/',
  taskExplore: '/task-explore',
  gameLibrary: '/gamelibrary',
  gameList: '/gamelist',
  overview: '/overview',
  news: '/news',
  userCenter: '/usercenter',
  userSetting: '/usersetting',
  download: '/download',
  search: '/search',
  game: '/game',
  article: '/article',
  strategy: '/strategy',
  taskDetail: '/taskdetail',
  flash: '/flash',
  calendar: '/calendar',
  activity: '/activity',
  investment: '/investment',
  manage: {
    root: ROOTS.MANAGE,
    gameInfo: `${ROOTS.MANAGE}/game-info`,
    task: `${ROOTS.MANAGE}/task`,
    taskCreate: `${ROOTS.MANAGE}/task/create`,
    calendar: `${ROOTS.MANAGE}/calendar`,
    calendarCreate: `${ROOTS.MANAGE}/calendar/create`,
  },
  campaign: {
    root: ROOTS.CAMPAIGN,
    createInfo: `${ROOTS.CAMPAIGN}/create/info`,
  },
  launchpad: {
    root: ROOTS.LAUNCHPAD,
    nft: `${ROOTS.LAUNCHPAD}/nft`,
  },
  points: {
    root: ROOTS.POINTS,
    invitationHistory: `${ROOTS.POINTS}/invitation-history`,
  },
  demo: {
    list: ROOTS.DEMO,
    detail: `${ROOTS.DEMO}/detail`,
  },
};
