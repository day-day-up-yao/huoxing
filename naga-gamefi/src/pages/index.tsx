import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
// import { HeadPagesDir } from 'src/sections/layouts/head-content';
import Home from 'src/sections/before/home';
import { reduxStore } from 'src/models/store';
import { pagesDirCookies } from 'src/sections/layouts/pages-dir-cookies';
import { getTopCoinList, topCoinListKey } from 'src/fetchs/common';
import { eventCalendarListKey, getEventCalendarList } from 'src/fetchs/event-calendar';

const IndexPage: NextPage = () => (
  <>
    {/* <HeadPagesDir title="niu" /> */}
    <Home />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // -------------swr request----------------
  const topCoinList = await getTopCoinList();
  const fallback = { [topCoinListKey]: topCoinList };

  // -------------redux request----------------
  const { dispatch, getState } = reduxStore();
  const cookies = pagesDirCookies({ req: context.req });

  await Promise.all([
    dispatch.common.getWebhomev2({
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    }),
    // dispatch.common.getGamelist({
    //   params: {
    //     category: '',
    //     sortBy: 'volume_24h',
    //     sort: 'desc',
    //     chain: '',
    //     currentPage: 1,
    //     pageSize: 10,
    //   },
    //   headers: { lang: cookies?.lang, auToken: cookies?.token },
    // }),
    dispatch.common.getAllgamedata(),
  ]);

  return { props: { fallback, reduxState: getState() } };
};
