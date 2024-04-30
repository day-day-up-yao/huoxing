import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { fetcher } from 'src/utils/axios';
import { points } from 'src/models/apis';

// ----------------------get bonus award setting----------------------
export const getBonusAwardSetting = () =>
  fetcher<BonusAwardSettingRes>({
    type: 'get',
    url: points.getBonusAwardSetting,
  });

export const bonusAwardSettingKey = 'bonusAwardSetting';
export const useGetBonusAwardSetting = () => {
  const result = useSWR<BonusAwardSettingRes>(bonusAwardSettingKey, getBonusAwardSetting, {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });
  return result;
};

// ----------------------bonus signin----------------------
export const bonusSignin = () =>
  fetcher<BonusAwardSettingRes>({
    type: 'get',
    url: points.signin,
  });
export const bonusSigninKey = 'bonusSignin';
export const useBonusSignin = () => {
  const result = useSWR<BonusAwardSettingRes>(bonusSigninKey, bonusSignin, {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });
  return result;
};

// ----------------------get Invite Record----------------------
export const getInviteRecord = (params: InviteRecordParams) =>
  fetcher<InviteRecordRes>({
    type: 'get',
    url: points.getInviteRecord,
    params,
  });
export const inviteRecordKey = 'inviteRecord';
export const useInviteRecord = () => {
  const result = useSWRMutation(
    inviteRecordKey,
    async (key, { arg }: { arg: InviteRecordParams }) => {
      const res = await getInviteRecord(arg);
      return res;
    }
  );
  return result;
};

// ----------------------get Limited Quests----------------------
export const getLimitedQuests = () =>
  fetcher<LimitedQuestsRes>({
    type: 'get',
    url: points.getLimitedQuests,
  });
export const limitedQuestsKey = 'limitedQuests';
export const useGetLimitedQuests = () => {
  const result = useSWR(limitedQuestsKey, getLimitedQuests, {
    // revalidateOnMount: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });
  return result;
};

// ----------------------receive Bonus Award----------------------
export const receiveBonusAward = (params: ReceiveBonusAwardParams) =>
  fetcher<ReceiveBonusAwardRes>({
    type: 'get',
    url: points.receiveBonusAward,
    params,
  });
export const receiveBonusAwardsKey = 'receiveBonusAward';
export const useReceiveBonusAward = () => {
  const result = useSWRMutation(
    receiveBonusAwardsKey,
    async (key, { arg }: { arg: ReceiveBonusAwardParams }) => {
      const res = await receiveBonusAward(arg);
      return res;
    }
  );
  return result;
};

// ----------------------get Limited Quests----------------------
export const getBonusTaskStatus = () =>
  fetcher<BonusTaskStatusRes>({
    type: 'get',
    url: points.getBonusTaskStatus,
  });
export const bonusTaskStatuKey = 'bonusTaskStatu';
export const useGetBonusTaskStatus = () => {
  const result = useSWR(bonusTaskStatuKey, getBonusTaskStatus, {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });
  return result;
};
