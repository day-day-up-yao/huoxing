import { createModel } from '@rematch/core';
import { fetcher } from 'src/utils/axios';
import { user as userApis } from '../apis';
import { RootModel } from '../root';
import { getDiscordLink } from './user-fetchers';

export const user = createModel<RootModel>()({
  state: {},
  reducers: {},
  effects: () => ({
    async updateAvatar(payload) {
      const res = await fetcher({
        type: 'post',
        url: userApis.updateAvatar,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async bindgoogleEmail(payload) {
      const res = await fetcher({
        type: 'post',
        url: userApis.bindGoogleEmail,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async userCenterBindgoogle(payload) {
      const res = await fetcher({
        type: 'post',
        url: userApis.usercenterBindgoogle,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async unbindGoogle(payload) {
      const res = await fetcher({
        type: 'get',
        url: userApis.unbindgoogle,
        params: {
          ...payload,
        },
      });
      return res;
    },

    async bindMetamasket(payload) {
      const res = await fetcher({
        type: 'post',
        url: userApis.bindMetamasket,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async connectMetamask(payload) {
      const res = await fetcher({
        type: 'post',
        url: userApis.connectmetamask,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async unbindMetamasket(payload) {
      const res = await fetcher({
        type: 'get',
        url: userApis.unbindMetamasket,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async bindTwitter(payload) {
      const res = await fetcher({
        type: 'post',
        url: userApis.bindTwitter,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async unbindTwitter(payload) {
      const res = await fetcher({
        type: 'get',
        url: userApis.unbindtwitter,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async bindDiscord(payload) {
      const res = await fetcher({
        type: 'post',
        url: userApis.bindDiscord,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async unbindDiscord(payload) {
      const res = await fetcher({
        type: 'get',
        url: userApis.unbinddiscord,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async getDiscordlink(payload) {
      const res = await getDiscordLink(payload);
      return res;
    },
  }),
});
