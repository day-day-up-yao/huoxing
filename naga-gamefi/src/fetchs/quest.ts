import useSWRMutation from 'swr/mutation';
import Cookies from 'js-cookie';
import { quest } from 'src/models/apis';
import { fetcher } from 'src/utils/axios';

// ----------------------getQuestHome----------------------
export async function getQuestHome() {
  const res = await fetcher<QuestHomeRes>({
    type: 'get',
    url: quest.getQuestHome,
  });
  return res.data;
}
export const questHomeKey = 'questHome';
export const useGetQuestHome = () => {
  const result = useSWRMutation(questHomeKey, async () => {
    const res = await getQuestHome();
    return res;
  });
  return result;
};

// ----------------------canDrawNft----------------------
export async function canDrawNft() {
  const res = await fetcher<CanDrawNftRes>({
    type: 'get',
    url: quest.canDrawNft,
    headers: {
      auToken: Cookies.get('auToken'),
    },
  });
  return res.data;
}
export const canDrawNftKey = 'canDrawNft';
export const useCanDrawNft = () => {
  const result = useSWRMutation(canDrawNftKey, async () => {
    const res = await canDrawNft();
    return res;
  });
  return result;
};

// ----------------------drawNft----------------------
export async function drawNft() {
  const res = await fetcher<DrawNftRes>({
    type: 'get',
    url: quest.drawNft,
    headers: {
      auToken: Cookies.get('auToken'),
    },
  });
  return res;
}
export const drawNftKey = 'drawNft';
export const useDrawNft = () => {
  const result = useSWRMutation(drawNftKey, async () => {
    const res = await drawNft();
    return res;
  });
  return result;
};

// ----------------------drawNftFinish----------------------
export async function drawNftFinish(payload?: DrawNftFinishParams) {
  const res = await fetcher<DrawNftFinishRes>({
    type: 'get',
    url: quest.drawNftFinish,
    params: {
      ...payload,
    },
    headers: {
      auToken: Cookies.get('auToken'),
    },
  });
  return res.data;
}
export const drawNftFinishKey = 'drawNftFinish';
export const useDrawNftFinish = () => {
  const result = useSWRMutation(
    drawNftFinishKey,
    async (key, { arg }: { arg: DrawNftFinishParams }) => {
      const res = await drawNftFinish(arg);
      return res;
    }
  );
  return result;
};
