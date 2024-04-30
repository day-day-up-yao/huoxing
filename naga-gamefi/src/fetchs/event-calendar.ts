import Cookies from 'js-cookie';

import useSWRMutation from 'swr/mutation';
import { eventCalendar } from 'src/models/apis';
import { fetcher } from 'src/utils/axios';
import { cookiesName } from 'src/utils/public';

// ----------------------getCatList----------------------
export async function getEventCalendarCatList() {
  const res = await fetcher<EventCalendarCatRes>({
    type: 'get',
    url: eventCalendar.getCatList,
    headers: {
      lang: Cookies.get(cookiesName.lang),
    },
  });
  return res.data;
}
export const eventCalendarCatListKey = 'eventCalendarCatList';
export const useGetEventCalendarCatList = () => {
  const result = useSWRMutation(eventCalendarCatListKey, async () => {
    const res = await getEventCalendarCatList();
    console.log(res);
    return res;
  });
  return result;
};

// ----------------------getEventCalendarList----------------------
export async function getEventCalendarList(payload?: EventCalendarListParams) {
  const res = await fetcher<EventCalendarListRes>({
    type: 'get',
    url: eventCalendar.getEventCalendarList,
    params: {
      ...payload,
    },
    headers: {
      lang: Cookies.get(cookiesName.lang),
    },
  });
  return res.data;
}
export const eventCalendarListKey = 'eventCalendarList';
export const useGetEventCalendarList = () => {
  const result = useSWRMutation(
    eventCalendarListKey,
    async (key, { arg }: { arg: EventCalendarListParams }) => {
      const res = await getEventCalendarList(arg);
      return res;
    }
  );
  return result;
};
