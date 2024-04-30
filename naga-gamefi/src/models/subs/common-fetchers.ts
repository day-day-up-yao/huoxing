import { fetcher } from 'src/utils/axios';
import { user } from '../apis';

// ----------------------getTwitterlink----------------------
export const getTwitterlink = async (payload?: any) => {
  const res = await fetcher({
    type: 'get',
    url: user.gettwitterlink,
    params: {
      ...payload,
    },
  });
  return res;
};
