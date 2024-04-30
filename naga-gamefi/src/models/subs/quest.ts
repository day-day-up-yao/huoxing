import { createModel } from '@rematch/core';
import { fetcher } from 'src/utils/axios';
import { quest as questApis } from '../apis';
import { RootModel } from '../root';

export const getDiscordInviteInfo = (payload: any) =>
  fetcher({
    type: 'get',
    url: questApis.getDiscordInviteInfo,
    params: {
      ...payload,
    },
  });

export const quest = createModel<RootModel>()({
  state: {
    questbannerlist: [],
    questdetail: {},
    questTokenMap: [],
  } as any,
  reducers: {
    setQuestBanner: (state, payload) => {
      state.questbannerlist = payload;
      return state;
    },
    setQuestDetail: (state, payload) => {
      state.questdetail = payload;
      return state;
    },
    setQuestTokenMap: (state, payload) => {
      state.questTokenMap = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async addQuest(payload) {
      const res = await fetcher({
        type: 'post',
        url: questApis.addQuest,
        params: {
          ...payload,
        },
      });

      return res;
    },
    async getQuestBanner(payload?: any) {
      const res = await fetcher({
        type: 'get',
        url: questApis.questbanner,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.quest.setQuestBanner(res.data);
      }
      return res;
    },
    async getQuestList(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.questlist,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async getMyJoinQuestList(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.myjoinquest,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async getMyQuestList(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.myquestlist,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async getTaskVerify(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.taskverify,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async taskLinkverify(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.tasklinkverify,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async submitQuest(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.submitquest,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async getWinnerlist(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.getwinnerlist,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async downlaodWinnerlist(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.downlaodwinnerlist,
        params: {
          ...payload,
        },
        responseType: 'arraybuffer',
      });
      return res;
    },
    async uploadWinnerlist(payload) {
      const res = await fetcher({
        type: 'post',
        url: questApis.uploadwinnerlist,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async downloadSubmit(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.downloadsubmitlist,
        params: {
          ...payload,
        },
        responseType: 'arraybuffer',
      });
      return res;
    },
    async taskDeleteItem(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.taskdeleteitem,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async getQuestDetail(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.questdetail,
        ...payload,
      });
      if (res.code === 0) {
        dispatch.quest.setQuestDetail(res.data);
      }
      return res;
    },
    async getQuestTokenMap(payload?: any) {
      const res = await fetcher({
        type: 'get',
        url: questApis.questTokenMap,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.quest.setQuestTokenMap(res.data.chainPojoList);
      }
      return res;
    },
    async getDiscordInviteInfo(payload) {
      const res = await getDiscordInviteInfo(payload);
      return res;
    },
    async updateTaskParam(payload) {
      const res = await fetcher({
        type: 'get',
        url: questApis.updateTaskParam,
        params: {
          ...payload,
        },
      });

      return res;
    },
  }),
});
