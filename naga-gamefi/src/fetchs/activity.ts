import Cookies from 'js-cookie';

import useSWRMutation from 'swr/mutation';
import { activity } from 'src/models/apis';
import { fetcher } from 'src/utils/axios';
import { cookiesName } from 'src/utils/public';

// ----------------------getCatList----------------------
export async function getActivityDetail(payload: ActivityDetailParameters) {
  const res = await fetcher<ActivityDetailRes>({
    type: 'get',
    url: activity.getActivityDetail,
    params: {
      ...payload,
    },
  });
  return res.data;
}
export const activityDetailKey = 'activityDetail';
export const useGetActivityDetail = () => {
  const result = useSWRMutation(
    activityDetailKey,
    async (key, { arg }: { arg: ActivityDetailParameters }) => {
      const res = await getActivityDetail(arg);
      return res;
    }
  );
  return result;
};

// ----------------------getActivityguid----------------------
export async function getActivityguid(payload: any) {
  const res = await fetcher<ActivityGuildRes>({
    type: 'get',
    url: activity.getActiveguid,
    params: {
      ...payload,
    },
  });
  return res.data;
}

// ----------------------getVoteGameList----------------------
export async function getVoteGameList(payload: VoteGameListParam) {
  const res = await fetcher<{ data: VoteGameListRes }>({
    type: 'get',
    url: activity.getVotelist,
    params: {
      ...payload,
    },
  });
  return res.data;
}

// ----------------------getVoteGameList----------------------
export async function Formcommitviteapply(payload: CommitInvestParam) {
  const res = await fetcher<CommitInvestRes>({
    type: 'post',
    url: activity.commitInvestapply,
    params: {
      ...payload,
    },
  });
  return res.data;
}

// ----------------------ToVoteGames----------------------
export async function toVoteGames(payload: TovoteGameParam) {
  const res = await fetcher<TovoteGameRes>({
    type: 'get',
    url: activity.voteToGame,
    params: {
      ...payload,
    },
  });
  return res;
}
