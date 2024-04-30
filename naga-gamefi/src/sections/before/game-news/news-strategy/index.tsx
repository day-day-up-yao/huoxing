import React, { useMemo, useContext } from 'react';

import './index.scss';

import { Context } from '../context';
import NewsMainItem from '../components/news-main-item';

const NewsStrategy = () => {
  const { nowStrategyList, onBtnArticleClick, isNewsPage } = useContext(Context);

  // 攻略列表
  const newsStrategyList = useMemo(
    () =>
      nowStrategyList.map((item: any, index: number) => (
        <NewsMainItem
          {...item}
          isNewsPage={isNewsPage}
          onBtnArticleClick={onBtnArticleClick}
          key={index}
        />
      )),
    [isNewsPage, nowStrategyList, onBtnArticleClick]
  );

  return <div className="news-strategy">{newsStrategyList}</div>;
};

export default NewsStrategy;
