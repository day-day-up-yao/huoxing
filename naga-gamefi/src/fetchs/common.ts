import useSWRMutation from 'swr/mutation';
import { gamefi, user, comment } from 'src/models/apis';
import { fetcher } from 'src/utils/axios';

// ----------------------UpdateGameProject----------------------
export async function updateGameProject(payload: GameProjectType) {
  const res = await fetcher<UpdateGameProgjectRes>({
    type: 'post',
    url: gamefi.updateGameProject,
    params: {
      ...payload,
    },
  });
  return res;
}

// ----------------------AllGameData----------------------
export async function getAllGameData() {
  const res = await fetcher<AllGameDataRes>({
    type: 'get',
    url: gamefi.getAllGameData,
  });
  return res.data;
}
export const allGameDataKey = 'allGameData';
export const useGetAllGameData = () => {
  const result = useSWRMutation(allGameDataKey, async () => {
    const res = await getAllGameData();
    return res;
  });
  return result;
};

// ----------------------GameDetail----------------------
export async function getGameDetail(payload?: IdParams) {
  const res = await fetcher<GameDetailRes>({
    type: 'get',
    url: gamefi.gameDetail,
    params: {
      ...payload,
    },
  });
  return res.data;
}
export const gameDetailKey = 'gameDetail';
export const useGetGameDetail = () => {
  const result = useSWRMutation(gameDetailKey, async (key, { arg }: { arg: IdParams }) => {
    const res = await getGameDetail(arg);
    return res;
  });
  return result;
};

// ----------------------GameDetail delete misson----------------------
export const deleteMission = (missionId: number) =>
  fetcher<GameDetailRes>({
    type: 'get',
    url: gamefi.deleteMission,
    params: {
      missionId,
    },
  });

// ----------------------get task completed list----------------------
export const getCompletedList = (params: MissionCompletedListParams) =>
  fetcher<CompletedListRes>({
    type: 'get',
    url: gamefi.getFinishSheet,
    params: {
      pageSize: 10,
      ...params,
    },
  });

export const completedListKey = 'completedList';
export const useCompletedList = () => {
  const result = useSWRMutation(
    completedListKey,
    async (key, { arg }: { arg: MissionCompletedListParams }) => {
      const res = await getCompletedList(arg);
      return res;
    }
  );
  return result;
};
// ----------------------getDoMission----------------------
export async function getDoMission(payload?: DetailDoMissionParam) {
  const res = await fetcher<DetailDoMissionType>({
    type: 'get',
    url: gamefi.verifyDoMission,
    params: {
      ...payload,
    },
  });
  return res;
}

// ----------------------missionList----------------------
export async function getMissionList(payload?: Gameid) {
  const res = await fetcher<MissionListRes>({
    type: 'get',
    url: gamefi.missionList,
    params: {
      ...payload,
    },
  });
  return res;
}

export const missionlistlKey = 'missionlist';
export const useMissionList = () => {
  const result = useSWRMutation(missionlistlKey, async (key, { arg }: { arg: Gameid }) => {
    const res = await getMissionList(arg);
    return res;
  });
  return result;
};

// ----------------------DetailMission----------------------
export async function verifyMission(payload?: IdMission) {
  const res = await fetcher<MissionvrifyRes>({
    type: 'get',
    url: gamefi.missionVerify,
    params: {
      ...payload,
    },
  });
  return res;
}

export const verifyMissionKey = 'verifyMission';
export const useGetverifyMission = () => {
  const result = useSWRMutation(verifyMissionKey, async (key, { arg }: { arg: IdMission }) => {
    const res = await verifyMission(arg);
    return res;
  });
  return result;
};

// ----------------------GuildRankList----------------------
export async function GuildRankList(payload?: GuildRankListParams) {
  const res = await fetcher<GuildRankListTypeRes>({
    type: 'get',
    url: gamefi.guildrank,
    params: {
      ...payload,
    },
  });
  return res;
}

// ----------------------GuildRankList----------------------
export async function GameUserRankList(payload?: GuildRankListParams) {
  const res = await fetcher<GameUserRankType>({
    type: 'get',
    url: gamefi.gameuserrank,
    params: {
      ...payload,
    },
  });
  return res;
}

export const gameUserRankKey = 'gameUserRank';
export const useGameUserRank = () => {
  const result = useSWRMutation(
    gameUserRankKey,
    async (key, { arg }: { arg: GuildRankListParams }) => {
      const res = await GameUserRankList(arg);
      return res;
    }
  );
  return result;
};

// ----------------------GuildDetail----------------------
export async function GuildRankDetail(payload?: GuildRankListParams) {
  const res = await fetcher<AcceptGuildInviteType>({
    type: 'get',
    url: gamefi.guildinfo,
    params: {
      ...payload,
    },
  });
  return res;
}

// ----------------------GuildDetail----------------------
export async function JoinGame(payload?: GameIdParams) {
  const res = await fetcher<JoinGameDataTypeRes>({
    type: 'get',
    url: gamefi.joinGame,
    params: {
      ...payload,
    },
  });
  return res;
}

// ----------------------GuildInviteCode----------------------
export async function GuildInviteCode(payload?: GuildInviteCodeParams) {
  const res = await fetcher<GuildInviteCodeRes>({
    type: 'get',
    url: gamefi.guildinvitecode,
    params: {
      ...payload,
    },
  });
  return res;
}

// ----------------------AcceptGuildInvite----------------------
export async function AcceptGuildInvite(payload?: AcceptGuildInviteParams) {
  const res = await fetcher<AcceptGuildInviteRes>({
    type: 'get',
    url: gamefi.acceptguildinvite,
    params: {
      ...payload,
    },
  });
  return res;
}

// ----------------------HasjoinGuild----------------------
export async function HasjoinGuild(payload?: AcceptGuildInviteType) {
  const res = await fetcher<hasjoinGuildRes>({
    type: 'get',
    url: gamefi.joinGuild,
    params: {
      ...payload,
    },
  });
  return res;
}

// ----------------------GameNft----------------------
export async function getGameNft(payload?: GameIdParams) {
  const res = await fetcher<GameNFTCollectionRes>({
    type: 'get',
    url: gamefi.getGameNft,
    params: {
      ...payload,
    },
  });
  return res.data;
}
export const gameNftKey = 'gameNft';
export const useGetGameNft = () => {
  const result = useSWRMutation(gameNftKey, async (key, { arg }: { arg: GameIdParams }) => {
    const res = await getGameNft(arg);
    return res;
  });
  return result;
};

// ----------------------searchMulti----------------------
export async function getSearchMulti(payload?: SearchMultiParams) {
  const res = await fetcher<SearchMultiRes>({
    type: 'get',
    url: gamefi.searchMulti,
    params: {
      ...payload,
    },
  });
  return res.data;
}
export const searchMultiKey = 'searchMulti';
export const useSearchMulti = () => {
  const result = useSWRMutation(
    searchMultiKey,
    async (key, { arg }: { arg: SearchMultiParams }) => {
      const res = await getSearchMulti(arg);
      return res;
    }
  );
  return result;
};

// ----------------------TopCoinList----------------------
export async function getTopCoinList() {
  const res = await fetcher<TopCoinListRes>({
    type: 'get',
    url: gamefi.getTopCoinList,
  });
  return res.data;
}
export const topCoinListKey = 'topCoinList';
export const useGetTopCoinList = () => {
  const result = useSWRMutation(topCoinListKey, async () => {
    const res = await getTopCoinList();
    return res;
  });
  return result;
};

// ----------------------CoinPrice----------------------
export async function getCoinPrice(payload?: CoinPriceParams) {
  const res = await fetcher<TopCoinListRes>({
    type: 'get',
    url: gamefi.getCoinPrice,
    params: {
      ...payload,
    },
  });
  return res.data;
}
export const CoinPriceKey = 'coinPrice';
export const useGetCoinPrice = () => {
  const result = useSWRMutation(CoinPriceKey, async (key, { arg }: { arg: CoinPriceParams }) => {
    const res = await getCoinPrice(arg);
    return res;
  });
  return result;
};

// ----------------------getHomePageTrending----------------------
export async function getHomePageTrending(payload?: HomePageRankParams) {
  const res = await fetcher<HomePageRankRes>({
    type: 'get',
    url: gamefi.getHomePageTrending,
    params: {
      ...payload,
    },
  });
  return res.data;
}
export const homePageTrendingKey = 'homePageTrendingKey';
export const useGetHomePageTrending = () => {
  const result = useSWRMutation(
    homePageTrendingKey,
    async (key, { arg }: { arg: HomePageRankParams }) => {
      const res = await getHomePageTrending(arg);
      return res;
    }
  );
  return result;
};

// ----------------------getHomePageTop----------------------
export async function getHomePageTop(payload?: HomePageRankParams) {
  const res = await fetcher<HomePageRankRes>({
    type: 'get',
    url: gamefi.getHomePageTop,
    params: {
      ...payload,
    },
  });
  return res.data;
}
export const homePageTopKey = 'homePageTopKey';
export const useGetHomePageTop = () => {
  const result = useSWRMutation(
    homePageTopKey,
    async (key, { arg }: { arg: HomePageRankParams }) => {
      const res = await getHomePageTop(arg);
      return res;
    }
  );
  return result;
};

// ----------------------addGameComment----------------------
export async function addGameComment(payload?: addCommentParams) {
  const res = await fetcher<addCommentRes>({
    type: 'post',
    url: comment.addComment,
    params: {
      ...payload,
    },
  });
  if (res.code === 0) {
    return res.data;
  }
}

// ----------------------gameCommentList----------------------
export async function gameCommentList(payload?: commentlistParams) {
  const res = await fetcher<commentlistRes>({
    type: 'get',
    url: comment.getCommentListByGameId,
    params: {
      ...payload,
    },
  });
  if (res.code === 0) {
    return res.data;
  }
}

// ----------------------gamemyselfComment----------------------
export async function gamemyselfComment(payload?: commentMyselfParams) {
  const res = await fetcher<commentMyselfRes>({
    type: 'get',
    url: comment.getSelfComment,
    params: {
      ...payload,
    },
  });
  if (res.code === 0) {
    return res.data;
  }
}

// ----------------------updategameComment----------------------
export async function updategameComment(payload?: addCommentParams) {
  const res = await fetcher<addCommentRes>({
    type: 'post',
    url: comment.updateComment,
    params: {
      ...payload,
    },
  });
  if (res.code === 0) {
    return res.data;
  }
}

// ----------------------getAllgamedata----------------------
export async function getAllgamedata(payload?: any) {
  const res = await fetcher({
    type: 'get',
    url: gamefi.getAllGameData,
    params: {
      ...payload,
    },
  });
  if (res.code === 0) {
    return res.data;
  }
}
