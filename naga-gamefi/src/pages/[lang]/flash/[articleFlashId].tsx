import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import GameNewsDetail from 'src/sections/before/game-news-detail';
import { HeadPagesDir, HeadProps } from 'src/sections/layouts/head-content';
import { getArticleDetailData } from '../article/[articleId]';

const IndexPage: NextPage = ({ title, description }: HeadProps) => (
  <>
    <HeadPagesDir title={title} description={description} />
    <GameNewsDetail />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const props = await getArticleDetailData({ url: context.req.url, params: context.params });

  if (!props.isOK) {
    return {
      redirect: {
        destination: '/404', // 跳转地址
        permanent: false, // 是否永久重定向
      },
    };
  }

  return { props };
};
