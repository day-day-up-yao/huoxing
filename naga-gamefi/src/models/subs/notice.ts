import { createModel } from '@rematch/core';
import { fetcher } from 'src/utils/axios';
import { notice as noticeApis } from '../apis';
import { RootModel } from '../root';

export const element = createModel<RootModel>()({
  state: {},
  reducers: {},
  effects: (dispatch) => ({
    async getMyNoticeList(payload?: any) {
      const res = await fetcher({
        type: 'get',
        url: noticeApis.getMyNoticeList,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.quest.setQuestTokenMap(res.data.chainPojoList);
      }
      return res;
    },
    async markAsRead(payload?: any) {
      const res = await fetcher({
        type: 'get',
        url: noticeApis.markAsRead,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.quest.setQuestTokenMap(res.data.chainPojoList);
      }
      return res;
    },
    async deleteNotice(payload?: any) {
      const res = await fetcher({
        type: 'get',
        url: noticeApis.deleteNotice,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.quest.setQuestTokenMap(res.data.chainPojoList);
      }
      return res;
    },
  }),
});
