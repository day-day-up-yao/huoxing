import { createModel } from '@rematch/core';
import { fetcher } from 'src/utils/axios';
import { element as elementApis } from '../../config-global';
import { RootModel } from '../root';

export const element = createModel<RootModel>()({
  state: {},
  reducers: {},
  effects: () => ({
    async getCollectionWithChain(payload) {
      const res = await fetcher({
        type: 'get',
        url: elementApis.getCollectionWithChain,
        headers: { 'X-Api-Key': elementApis.XApiKey },
        params: {
          ...payload,
        },
      });

      return res;
    },
  }),
});
