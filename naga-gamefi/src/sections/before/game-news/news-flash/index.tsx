import React, { useMemo, useContext } from 'react';

import './index.scss';

import NewsFlashItem from '../components/news-flash-item';
import { Context } from '../context';

const NewsFlash = () => {
  const { nowArticleFlashList } = useContext(Context);

  // 快讯列表
  const newsFlashList = useMemo(
    () =>
      nowArticleFlashList.map((item: any, index: number) => (
        <NewsFlashItem {...item} key={index} />
      )),
    [nowArticleFlashList]
  );

  return <div className="news-flash">{newsFlashList}</div>;
};

export default NewsFlash;
