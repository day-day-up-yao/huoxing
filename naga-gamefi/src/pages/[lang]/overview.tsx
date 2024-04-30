import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import GameOverview from 'src/sections/before/game-overview';
import { reduxStore } from 'src/models/store';
import { HeadPagesDir } from 'src/sections/layouts/head-content';
import { pagesDirCookies } from 'src/sections/layouts/pages-dir-cookies';

const IndexPage: NextPage = () => (
  <>
    <HeadPagesDir title="Blackchain Game | NAGA-Discover The Best Web3 Gaming" />
    <GameOverview />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dispatch, getState } = reduxStore();
  const cookies = pagesDirCookies({ req: context.req });

  await Promise.all([
    dispatch.overview.getDailyVolume(),
    dispatch.overview.getDailyTransactions(),
    dispatch.overview.getDailyNumberOfGamers(),
    dispatch.overview.getActiveAddressesChart(),
    dispatch.overview.getTransactionsChart(),
    dispatch.overview.getVolumeChart(),
    dispatch.overview.getTransactionsWeeklyChart(),
    dispatch.overview.getActiveProjectsByChainChart(),
    dispatch.overview.getWeeklyNumberOfGamesChart(),
    dispatch.overview.getDailyVolumeByChainGameChart(),
    dispatch.common.getAllgamedata(),
    dispatch.common.getGamelist({
      params: {
        category: '',
        sortBy: 'volume_24h',
        sort: 'desc',
        chain: '',
        currentPage: 1,
        pageSize: 10,
      },
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    }),
  ]);

  return { props: { reduxState: getState() } };
};
