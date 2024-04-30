import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import GameList from 'src/sections/before/game-list';
import { reduxStore } from 'src/models/store';
import { HeadPagesDir } from 'src/sections/layouts/head-content';
import { pagesDirCookies } from 'src/sections/layouts/pages-dir-cookies';

const IndexPage: NextPage = () => (
  <>
    <HeadPagesDir title="RANK | NAGA-Discover The Best Web3 Gaming" />
    <GameList />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dispatch, getState } = reduxStore();
  const cookies = pagesDirCookies({ req: context.req });

  await Promise.all([
    dispatch.common.getGamelist({
      params: {
        category: '',
        sortBy: 'market_cap',
        sort: 'desc',
        chain: '',
        currentPage: 1,
        pageSize: 50,
      },
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    }),
    dispatch.common.getCategoryAndChains(),
    dispatch.common.getAllgamedata(),
    // dispatch.overview.getDailyVolume(),
    // dispatch.overview.getDailyTransactions(),
    // dispatch.overview.getDailyNumberOfGamers(),
  ]);

  return { props: { reduxState: getState() } };
};
