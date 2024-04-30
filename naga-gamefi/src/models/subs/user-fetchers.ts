import { fetcher } from 'src/utils/axios';
import { user } from '../apis';

// ----------------------getDiscordlink----------------------
export const getDiscordLink = async (payload?: any) => {
  const res = await fetcher({
    type: 'get',
    url: user.getdiscordlink,
    params: {
      ...payload,
    },
  });
  return res;
};
