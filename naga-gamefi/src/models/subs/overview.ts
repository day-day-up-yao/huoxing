import { createModel } from '@rematch/core';
import { fetcher } from 'src/utils/axios';
import { overview as overviewApis } from '../../config-global';
import { RootModel } from '../root';

const setUrl = (chartId: string | number) =>
  `https://www.footprint.network/api/v1/dataApi/card/${chartId}/query`;
const setCeshiUrl = (chartId: string | number) =>
  `https://footprint.naga.io/api/v1/dataApi/card/${chartId}/query`;

export const overview = createModel<RootModel>()({
  state: {
    dailyVolume: {},
    dailyTransactions: {},
    dailyNumberOfGamers: {},
    activeAddressesChart: {},
    transactionsChart: {},
    volumeChart: {},
    transactionsWeeklyChart: {},
    activeProjectsByChainChart: {},
    weeklyNumberOfGamesChart: {},
    dailyVolumeByChainGameChart: {},
  },
  reducers: {
    setDailyVolume: (state, payload) => {
      state.dailyVolume = payload;
      return state;
    },
    setDailyTransactions: (state, payload) => {
      state.dailyTransactions = payload;
      return state;
    },
    setDailyNumberOfGamers: (state, payload) => {
      state.dailyNumberOfGamers = payload;
      return state;
    },
    setActiveAddressesChart: (state, payload) => {
      state.activeAddressesChart = payload;
      return state;
    },
    setTransactionsChart: (state, payload) => {
      state.transactionsChart = payload;
      return state;
    },
    setVolumeChart: (state, payload) => {
      state.volumeChart = payload;
      return state;
    },
    setTransactionsWeeklyChart: (state, payload) => {
      state.transactionsWeeklyChart = payload;
      return state;
    },
    setActiveProjectsByChainChart: (state, payload) => {
      state.activeProjectsByChainChart = payload;
      return state;
    },
    setWeeklyNumberOfGamesChart: (state, payload) => {
      state.weeklyNumberOfGamesChart = payload;
      return state;
    },
    setDailyVolumeByChainGameChart: (state, payload) => {
      state.dailyVolumeByChainGameChart = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async getDailyVolume() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getDailyVolume),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setDailyVolume(res.data.insights);
      }
      return res;
    },
    async getDailyTransactions() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getDailyTransactions),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setDailyTransactions(res.data.insights);
      }
      return res;
    },
    async getDailyNumberOfGamers() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getDailyNumberOfGamers),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setDailyNumberOfGamers(res.data.insights);
      }
      return res;
    },
    async getActiveAddressesChart() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getActiveAddressesChart),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setActiveAddressesChart(res.data);
      }
      return res;
    },
    async getCeshiActiveAddressesChart() {
      const res = await fetcher({
        type: 'post',
        url: setCeshiUrl(overviewApis.getActiveAddressesChart),
        baseURL: '',
      });

      return res;
    },
    async getTransactionsChart() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getTransactionsChart),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setTransactionsChart(res.data);
      }
      return res;
    },
    async getVolumeChart() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getVolumeChart),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setVolumeChart(res.data);
      }
      return res;
    },
    async getTransactionsWeeklyChart() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getTransactionsWeeklyChart),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setTransactionsWeeklyChart(res.data);
      }
      return res;
    },
    async getActiveProjectsByChainChart() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getActiveProjectsByChainChart),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setActiveProjectsByChainChart(res.data);
      }
      return res;
    },
    async getWeeklyNumberOfGamesChart() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getWeeklyNumberOfGamesChart),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setWeeklyNumberOfGamesChart(res.data);
      }
      return res;
    },
    async getDailyVolumeByChainGameChart() {
      const res = await fetcher({
        type: 'post',
        url: setUrl(overviewApis.getDailyVolumeByChainGameChart),
        baseURL: '',
        headers: {
          'api-key': overviewApis.APIKey,
        },
      });

      if (res.data) {
        dispatch.overview.setDailyVolumeByChainGameChart(res.data);
      }
      return res;
    },
  }),
});
