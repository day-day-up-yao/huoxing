import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import GameLibrary from 'src/sections/before/game-library';
import { reduxStore } from 'src/models/store';
import { HeadPagesDir } from 'src/sections/layouts/head-content';

const IndexPage: NextPage = () => (
  <>
    <HeadPagesDir title="Web3 gaming | NAGA-Discover The Best Web3 Gaming" />
    <GameLibrary />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { dispatch, getState } = reduxStore();

  await Promise.all([dispatch.common.getAllgamedata()]);

  return { props: { reduxState: getState() } };
};
