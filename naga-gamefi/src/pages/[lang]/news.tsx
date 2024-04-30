import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import GameNews from 'src/sections/before/game-news';
import { reduxStore } from 'src/models/store';
import { HeadPagesDir } from 'src/sections/layouts/head-content';
import { pagesDirCookies } from 'src/sections/layouts/pages-dir-cookies';

const IndexPage: NextPage = () => (
  <>
    <HeadPagesDir title="Blackchain Game News | NAGA-Discover The Best Web3 Gaming" />
    <GameNews />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dispatch, getState } = reduxStore();
  const cookies = pagesDirCookies({ req: context.req });

  await Promise.all([
    dispatch.common.getArticleList({
      params: {
        category: 1,
        refreshTime: 0,
        pageSize: 10,
      },
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    }),

    dispatch.common.getStrategyList({
      params: {
        refreshTime: 0,
        pageSize: 10,
      },
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    }),

    // store.dispatch.common.getArticleFlashList({
    //     refreshTime: 0,
    //     pageSize: 10
    // })
  ]);

  return { props: { reduxState: getState() } };
};
