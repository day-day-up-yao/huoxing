import useSWRMutation from 'swr/mutation';
import { fetcher } from 'src/utils/axios';
import { financing } from '../models/apis';

// ----------------------getFinancingListInfo 获取通知列表----------------------
export async function getFinancingListInfo(payload?: FinancinginfoParmas) {
  const res = await fetcher<financinginfoResponse>({
    type: 'get',
    url: financing.getfinancingInfolist,
    params: {
      ...payload,
    },
  });
  return res.data;
}
export const getFinancingListInfoKey = 'getFinancingListInfo';
export const useGetFinancingListInfo = () => {
  const result = useSWRMutation(
    getFinancingListInfoKey,
    async (url, { arg }: { arg: FinancinginfoParmas }) => {
      const res = await getFinancingListInfo(arg);
      return res;
    }
  );
  return result;
};

// ------------------getFinanceRoundInfo------------------
export const getFinanceRoundInfo = async () => {
  const res = await fetcher<RoundListResponse>({
    type: 'get',
    url: financing.getfinancingRoundlist,
  });
  return res;
};
export const getFinanceRoundInfoKey = 'getFinanceRoundInfo';
export const useGetFinanceRoundInfo = () => {
  const result = useSWRMutation(getFinanceRoundInfoKey, async (url) => {
    const res = await getFinanceRoundInfo();
    return res;
  });
  return result;
};
