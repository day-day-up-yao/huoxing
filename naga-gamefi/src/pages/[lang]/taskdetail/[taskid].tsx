import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import TaskDetail from 'src/sections/before/task-detail';
import { reduxStore } from 'src/models/store';
import { HeadPagesDir, HeadProps } from 'src/sections/layouts/head-content';
import { pagesDirCookies } from 'src/sections/layouts/pages-dir-cookies';

const IndexPage: NextPage = ({ title, description, twitterImg, keywords }: HeadProps) => (
  <>
    <HeadPagesDir
      title={title}
      description={description}
      twitterImg={twitterImg}
      keywords={keywords}
    />
    <TaskDetail />
  </>
);
export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dispatch, getState } = reduxStore();
  const cookies = pagesDirCookies({ req: context.req });

  let detailtitle = '';
  let detaildesc = '';
  let detailimg = '';
  let detailkeywords = '';

  let isOK = true;
  await dispatch.quest
    .getQuestDetail({
      params: { questId: context?.params?.taskid },
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    })
    .then((res) => {
      if (res.code === 0 && res.data) {
        detailtitle = `${res.data.title} | NAGA-Discover The Best Web3 Gaming`;
        detaildesc = res.data.brief;
        detailimg = res.data?.picUrl || '';
        detailkeywords =
          res.data?.gameName && res.data?.gameName !== ''
            ? `${res.data?.gameName},${res.data?.gameName} Event,${res.data?.gameName} Airdrop`
            : 'NAGA';
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

  await dispatch.common.getAllgamedata();

  return {
    props: {
      reduxState: getState(),
      title: detailtitle || '',
      description: detaildesc || '',
      twitterImg: detailimg,
      keywords: detailkeywords,
    },
  };
};
