import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import UserCenter from 'src/sections/before/user-center';
import { reduxStore } from 'src/models/store';
// import { HeadPagesDir } from 'src/sections/layouts/head-content';

const IndexPage: NextPage = () => (
  <>
    {/* <HeadPagesDir title="Blackchain Game News | NAGA-Discover The Best Web3 Gaming" /> */}
    <UserCenter />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { dispatch, getState } = reduxStore();

  // await Promise.all([dispatch.common.getAllgamedata()]);

  return { props: { reduxState: getState() } };
};
