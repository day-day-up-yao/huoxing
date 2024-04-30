import useSWRMutation from 'swr/mutation';
import { fetcher } from 'src/utils/axios';
import { notice } from '../models/apis';

// ----------------------getMyNoticeListRes 获取通知列表----------------------
export async function getMyNoticeList(payload?: GetMyNoticeListParams) {
  const res = await fetcher<GetMyNoticeListRes>({
    type: 'get',
    url: notice.getMyNoticeList,
    params: {
      ...payload,
    },
  });
  return res.data;
}
export const getMyNoticeListKey = 'getMyNoticeList';
export const useGetMyNoticeList = () => {
  const result = useSWRMutation(
    getMyNoticeListKey,
    async (url, { arg }: { arg: GetMyNoticeListParams }) => {
      const res = await getMyNoticeList(arg);
      return res;
    }
  );
  return result;
};

// ------------------markAsRead 已读通知操作------------------
export const markAsRead = async (payload: NoticeHandleParams) => {
  const res = await fetcher({
    type: 'get',
    url: notice.markAsRead,
    params: {
      ...payload,
    },
  });
  return res;
};

// ------------------deleteNotice 删除通知操作------------------
export const deleteNotice = async (payload: NoticeHandleParams) => {
  const res = await fetcher({
    type: 'get',
    url: notice.deleteNotice,
    params: {
      ...payload,
    },
  });
  return res;
};
