import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import GameDetail from 'src/sections/before/game-detail';
import { HeadPagesDir, HeadProps } from 'src/sections/layouts/head-content';
import { reduxStore } from 'src/models/store';
import { pagesDirCookies } from 'src/sections/layouts/pages-dir-cookies';
import { gameNftKey, getGameNft } from 'src/fetchs/common';

const IndexPage: NextPage = ({ title, description, twitterImg, keywords }: HeadProps) => (
  <>
    <HeadPagesDir
      title={title}
      description={description}
      twitterImg={twitterImg}
      keywords={keywords}
    />
    <GameDetail />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dispatch, getState } = reduxStore();
  const cookies = pagesDirCookies({ req: context.req });

  // -------------redux request----------------
  let detailtitle = '';
  let detaildesc = '';
  let twitterimg = '';
  let detailkeywords = '';

  let isOK = true;
  await dispatch.common
    .getGamedetail({
      params: {
        id: context.params?.gameId,
      },
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    })
    .then((res: any) => {
      if (res.code === 0 && res.data) {
        detailtitle = `${res.data.name} | NAGA-Discover The Best Web3 Gaming`;
        detaildesc = res.data.brief;
        detailkeywords = `${res.data.name} Mint, ${res.data.name} Airdrop, ${res.data.name} LaunchPad,${res.data.chain}`;

        twitterimg =
          res.data.adverUrl ||
          res.data.coverUrl ||
          (res.data?.picUrl && res.data?.picUrl !== '[]' && JSON.parse(res.data.picUrl)[0]);
      } else {
        isOK = false;
      }
    })
    .catch(() => {
      isOK = false;
    });

  if (!isOK) {
    return {
      redirect: {
        destination: '/404', // 跳转地址
        permanent: false, // 是否永久重定向
      },
    };
  }

  await Promise.all([
    dispatch.common.getArticleList({
      params: {
        gameId: context.params?.gameId,
        refreshTime: 0,
        pageSize: 10,
      },
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    }),
    dispatch.common.getStrategyList({
      params: {
        gameId: context.params?.gameId,
        refreshTime: 0,
        pageSize: 10,
      },
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    }),
    dispatch.common.getArticleFlashList({
      gameId: context.params?.gameId,
      refreshTime: 0,
      pageSize: 10,
    }),
    dispatch.comment.getCommentListByGameId({
      gameId: context.params?.gameId,
      currentPage: 1,
      pageSize: 10,
    }),
    dispatch.comment.getStarByGameId({
      gameId: context.params?.gameId,
    }),
    dispatch.common.getArticleEvaluationDetail({
      gameId: context.params?.gameId,
    }),
    dispatch.common.getAllgamedata(),
  ]);

  // -------------swr request----------------
  const gameNft = await getGameNft({ gameId: Number(context.params?.gameId) });
  const fallback = { [gameNftKey]: gameNft };

  return {
    props: {
      fallback,
      reduxState: getState(),
      title: detailtitle,
      description: detaildesc,
      twitterImg: twitterimg,
      keywords: detailkeywords,
    },
  };
};
