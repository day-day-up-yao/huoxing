import useSWRMutation from 'swr/mutation';
import { launchpad } from 'src/models/apis';
import { fetcher } from 'src/utils/axios';

// ----------------------launchpad list----------------------
export async function getLaunchpadList(payload?: LaunchpadListParams) {
  const res = await fetcher<LaunchpadListResponse>({
    type: 'get',
    url: launchpad.launchpadList,
    params: {
      ...payload,
    },
  });
  return res;
}

export const launchpadListKey = 'launchpad-list';
export const useLaunchpadList = () => {
  const result = useSWRMutation(
    launchpadListKey,
    async (key, { arg }: { arg: LaunchpadListParams }) => {
      const res = await getLaunchpadList(arg);
      return res;
    }
  );
  return result;
};

// ----------------------order list----------------------
export async function getOrderList(payload?: OrderListParams) {
  const res = await fetcher<OrderListResponse>({
    type: 'get',
    url: launchpad.getOrderList,
    params: {
      ...payload,
    },
  });
  return res;
}

export const orderListKey = 'order-list';
export const useOrderList = () => {
  const result = useSWRMutation(orderListKey, async (key, { arg }: { arg: OrderListParams }) => {
    const res = await getOrderList(arg);
    return res;
  });
  return result;
};
