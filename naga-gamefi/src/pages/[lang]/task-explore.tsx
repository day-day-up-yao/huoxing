import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import TaskExplore from 'src/sections/before/task-explore';
import { reduxStore } from 'src/models/store';
import { HeadPagesDir } from 'src/sections/layouts/head-content';

const IndexPage: NextPage = () => (
  <>
    <HeadPagesDir keywords="Web3 Event, Airdrop, Web3 Task" />
    <TaskExplore />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { dispatch, getState } = reduxStore();

  await Promise.all([
    dispatch.quest.getQuestBanner(),
    // store.dispatch.quest.getQuestList({
    //     category: 3,
    //     currentPage: 1,
    //     pageSize: 10
    // })
  ]);

  return { props: { reduxState: getState() } };
};
