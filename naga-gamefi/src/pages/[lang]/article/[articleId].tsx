import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import GameNewsDetail from 'src/sections/before/game-news-detail';
import { reduxStore } from 'src/models/store';
import { HeadPagesDir, HeadProps } from 'src/sections/layouts/head-content';

const IndexPage: NextPage = ({ title, description, twitterImg, shareIcon }: HeadProps) => (
  <>
    <HeadPagesDir
      title={title}
      description={description}
      twitterImg={twitterImg}
      shareIcon={shareIcon}
    />
    <GameNewsDetail />
  </>
);
export default IndexPage;

type GetArticleDetailDataParams = {
  url?: string;
  params?: ParsedUrlQuery | { articleId?: string; articleFlashId?: string; gameId?: string };
};

export const getArticleDetailData = async ({ url, params }: GetArticleDetailDataParams) => {
  const { dispatch, getState } = reduxStore();

  let newstitle = '';
  let newsdesc = '';
  let newsCover = '';

  // 判断当前页面 ———— 资讯
  const isArticlPage = url?.includes('/article/');
  // 判断当前页面 ———— 攻略
  const isStrategyPage = url?.includes('/strategy/');
  // 判断当前页面 ———— 快讯
  const isArticlFlashPage = url?.includes('/flash/');
  // 判断当前页面 ———— 评测
  const isEvaluationPage = url?.includes('/evaluation/');

  // 是否可以渲染
  let isOK = true;

  if (isArticlPage) {
    await dispatch.common
      .getArticleDetail({
        articleId: params?.articleId,
      })
      .then((res: any) => {
        if (res.code === 0 && res.data) {
          newstitle = `${res.data.title} | NAGA-Discover The Best Web3 Gaming`;
          newsdesc = res.data.summary;
          newsCover = res.data.coverPicUrl;
        } else {
          isOK = false;
        }
      })
      .catch(() => {
        isOK = false;
      });

    if (isOK) {
      await dispatch.comment.getArticleCommentListByArticleId({
        articleId: params?.articleId,
        currentPage: 1,
        pageSize: 10,
      });
    }
  } else if (isStrategyPage) {
    await dispatch.common
      .getStrategyDetail({
        articleId: params?.articleId,
      })
      .then((res) => {
        if (res.code === 0 && res.data) {
          newstitle = `${res.data.title} | NAGA-Discover The Best Web3 Gaming`;
          newsdesc = res.data.summary;
          newsCover = res.data.coverPicUrl;
        }
      })
      .catch(() => {
        isOK = false;
      });

    if (isOK) {
      await dispatch.comment.getArticleCommentListByArticleId({
        articleId: params?.articleId,
        currentPage: 1,
        pageSize: 10,
      });
    }
  } else if (isArticlFlashPage) {
    await dispatch.common
      .getArticleFlashDetail({
        articleFlashId: params?.articleFlashId,
      })
      .then((res: any) => {
        if (!(res.code === 0 && res.data)) {
          isOK = false;
        }
      })
      .catch(() => {
        isOK = false;
      });
  } else if (isEvaluationPage) {
    await dispatch.common.getArticleEvaluationDetail({
      gameId: params?.gameId,
    });
  }

  return {
    title: newstitle,
    description: newsdesc,
    twitterImg: newsCover,
    shareIcon: newsCover,
    reduxState: getState(),
    isOK,
  };
};

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
