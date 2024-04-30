import { createModel } from '@rematch/core';
import { fetcher } from 'src/utils/axios';
import { getAllgamedata } from 'src/fetchs/common';
import { gamefi, user } from '../apis';
import { RootModel } from '../root';
import { getTwitterlink } from './common-fetchers';

export const common = createModel<RootModel>()({
  state: {
    language: 'zh', // 2023.8.23废弃
    theme: 'dark', // 2023.8.23废弃
    homelist: [],
    homeinfo: {
      bannerList: [],
      bannerListV2: [],
      strategyList: [],
      adviseList: [],
      articleFlashList: [],
      articleList: [],
      recentAdviseGames: [],
    },
    gamelist: [],
    gameDetail: {},
    allscreeninfo: {},
    launchpadlists: [],
    articleList: [],
    articleFlashList: [],
    strategyList: [],
    articleDetail: {},
    strategyDetail: {},
    articleFlashDetail: {},
    articleEvaluationDetail: {},
    searchGame: {},
    searchArticle: {},
    searchStrategy: {},
    librarydata: {},
  } as any,
  reducers: {
    setTheme: (state, payload) => {
      state.theme = payload;
      return state;
    },
    setHomelist: (state, payload) => {
      state.homelist = payload;
      return state;
    },
    setHomeinfo: (state, payload) => {
      state.homeinfo = payload;
      return state;
    },
    setGamelist: (state, payload) => {
      state.gamelist = payload;
      return state;
    },
    setGamedetail: (state, payload) => {
      state.gameDetail = payload;
      return state;
    },
    setAllscreeninfo: (state, payload) => {
      state.allscreeninfo = payload;
      return state;
    },
    setlaunchpadlists: (state, payload) => {
      state.launchpadlists = payload;
      return state;
    },
    setArticleList: (state, payload) => {
      state.articleList = payload;
      return state;
    },
    setArticleFlashList: (state, payload) => {
      state.articleFlashList = payload;
      return state;
    },
    setStrategyList: (state, payload) => {
      state.strategyList = payload;
      return state;
    },
    setArticleDetail: (state, payload) => {
      state.articleDetail = payload;
      return state;
    },
    setStrategyDetail: (state, payload) => {
      state.strategyDetail = payload;
      return state;
    },
    setArticleFlashDetail: (state, payload) => {
      state.articleFlashDetail = payload;
      return state;
    },
    setArticleEvaluationDetail: (state, payload) => {
      state.articleEvaluationDetail = payload;
      return state;
    },
    setSearchGame: (state, payload) => {
      state.searchGame = payload;
      return state;
    },
    setSearchArticle: (state, payload) => {
      state.searchArticle = payload;
      return state;
    },
    setSearchStrategy: (state, payload) => {
      state.searchStrategy = payload;
      return state;
    },
    setlibrarydata: (state, payload) => {
      state.librarydata = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async getWebhome(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.webhome,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.common.setHomelist(res.data);
      }
      return res;
    },
    async getWebhomev2(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.webhomev2,
        ...payload,
      });
      if (res.code === 0) {
        dispatch.common.setHomeinfo(res.data);
      }
      return res;
    },
    async getAllgamedata(payload?: any) {
      // 请求方法已迁移到apis/common.ts
      const data = await getAllgamedata(payload);
      if (data) dispatch.common.setlibrarydata(data);
    },
    async getGamelist(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.gamelist,
        ...payload,
      });
      if (res.code === 0) {
        dispatch.common.setGamelist(res.data);
      }
      return res;
    },
    async getGamedetail(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.gameDetail,
        ...payload,
      });
      if (res.code === 0) {
        dispatch.common.setGamedetail(res.data);
      }
      return res;
    },
    async getCategoryAndChains(payload?: any) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.getCategoryAndChains,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.common.setAllscreeninfo(res.data);
      }
      return res;
    },
    async getArticleList(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.articleList,
        ...payload,
      });
      if (res.code === 0) {
        dispatch.common.setArticleList(res.data);
      }
      return res;
    },
    async getArticleFlashList(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.articleFlashList,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.common.setArticleFlashList(res.data);
      }
      return res;
    },
    async getStrategyList(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.strategyList,
        ...payload,
      });
      if (res.code === 0) {
        dispatch.common.setStrategyList(res.data);
      }
      return res;
    },
    async getArticleDetail(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.article,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.common.setArticleDetail(res.data);
      }
      return res;
    },
    async getStrategyDetail(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.article,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.common.setStrategyDetail(res.data);
      }
      return res;
    },
    async getArticleFlashDetail(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.articleFlash,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.common.setArticleFlashDetail(res.data);
      }
      return res;
    },
    async getArticleEvaluationDetail(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.articleEvaluation,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.common.setArticleEvaluationDetail(res.data);
      }
      return res;
    },
    async getSearchGame(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.searchGame,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.common.setSearchGame(res.data);
      }
      return res;
    },
    async getSearchArticle(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.searchArticle,
        params: {
          ...payload,
          category: 1,
        },
      });
      if (res.code === 0) {
        dispatch.common.setSearchArticle(res.data);
      }
      return res;
    },
    async getSearchStrategy(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.searchArticle,
        params: {
          ...payload,
          category: 2,
        },
      });
      if (res.code === 0) {
        dispatch.common.setSearchStrategy(res.data);
      }
      return res;
    },
    async getlaunchpadlist(payload) {
      const res = await fetcher({
        type: 'post',
        url: '/graphql?args=LaunchpadList',
        params: {
          ...payload,
        },
      });
      if (res) {
        dispatch.common.setlaunchpadlists(res.data.box.launchpadBanners);
      }
      return res;
    },
    async getTwitterlink(payload) {
      const res = await getTwitterlink(payload);
      return res;
    },
  }),
});
