import { gamefi } from 'src/models/apis';
import { fetcher } from 'src/utils/axios';

export async function createTask(payload?: CreateTaskParams) {
  const res = await fetcher<GameDetailRes>({
    type: 'post',
    url: gamefi.addMission,
    serverException: true,
    params: {
      ...payload,
    },
  });
  return res;
}
