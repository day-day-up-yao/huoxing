import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import SearchDetailPage from 'src/sections/before/search-detail';
import { reduxStore } from 'src/models/store';
import { HeadPagesDir, HeadProps } from 'src/sections/layouts/head-content';
import { getSearchMulti, searchMultiKey } from 'src/fetchs/common';

const IndexPage: NextPage = ({ title }: HeadProps) => (
  <>
    <HeadPagesDir title={title} />
    <SearchDetailPage />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const keyword = decodeURIComponent((context.params?.keyword || '') as string);

  // -------------swr request----------------
  const searchMulti = await getSearchMulti({ keyword });
  const fallback = { [searchMultiKey]: searchMulti };

  // -------------redux request----------------
  const { dispatch, getState } = reduxStore();
  if (context.params?.keyword && context.params.keyword !== '') {
    await Promise.all([
      dispatch.common.getSearchGame({
        keyword,
        currentPage: 1,
        pageSize: 10,
      }),
      dispatch.common.getSearchArticle({
        keyword,
        currentPage: 1,
        pageSize: 10,
      }),
      dispatch.common.getSearchStrategy({
        keyword,
        currentPage: 1,
        pageSize: 10,
      }),
      dispatch.common.getAllgamedata(),
    ]);
  }

  return {
    props: {
      fallback,
      reduxState: getState(),
      title: `${keyword} | NAGA-Discover The Best Web3 Gaming`,
    },
  };
};
