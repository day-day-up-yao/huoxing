import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Create from 'src/sections/before/campaign-create';
import { reduxStore } from 'src/models/store';
// import { HeadPagesDir } from 'src/sections/layouts/head-content';

const IndexPage: NextPage = () => (
  <>
    {/* <HeadPagesDir title="Blackchain Game News | NAGA-Discover The Best Web3 Gaming" /> */}
    <Create />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { dispatch, getState } = reduxStore();

  await Promise.all([dispatch.quest.getQuestTokenMap()]);

  return { props: { reduxState: getState() } };
};
