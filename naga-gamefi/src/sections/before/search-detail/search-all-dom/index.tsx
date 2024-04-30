import React, { useCallback, useContext, useMemo } from 'react';
import { Button } from 'rsuite';

import './index.scss';

import { Context } from '../context';
import SearchGameItem from '../components/search-game-item';
import SearchNewsItem from '../../game-news/components/news-main-item';
import SearchNotFound from '../components/not-found';

const SearchAllDom = () => {
  const {
    t,
    searchMulti,
    searchDetailTabs,
    onBtnChangeTabClick,
    getStatusInfo,
    getSupportPlatform,
    onBtnArticleClick,
  } = useContext(Context);

  // 标题组件
  const titleBox = useCallback(
    (item: any) => (
      <div className="search-detail-title-box">
        <div className="search-detail-title">{t(item.title)}</div>
        <Button
          className="search-detail-more-btn"
          appearance="ghost"
          onClick={() => onBtnChangeTabClick(item.id)}
        >
          {t('public_more')}
        </Button>
      </div>
    ),
    [onBtnChangeTabClick, t]
  );

  // 游戏列表
  const gameList = useMemo(
    () => (
      <div className="search-detail-all-game-list">
        {searchMulti &&
          searchMulti?.gameProjectPojoList &&
          searchMulti.gameProjectPojoList.map((item: any, index: number) => (
            <SearchGameItem
              {...item}
              getSupportPlatform={getSupportPlatform}
              getStatusInfo={getStatusInfo}
              key={index}
            />
          ))}
      </div>
    ),
    [getStatusInfo, getSupportPlatform, searchMulti]
  );

  // 新闻列表
  const newsList = useMemo(
    () => (
      <div className="search-detail-all-news-list">
        {searchMulti &&
          searchMulti?.articlePojoList &&
          searchMulti.articlePojoList.map((item: any, index: number) => (
            <SearchNewsItem {...item} onBtnArticleClick={onBtnArticleClick} key={index} />
          ))}
      </div>
    ),
    [onBtnArticleClick, searchMulti]
  );

  // 攻略列表
  const strategyList = useMemo(
    () => (
      <div className="search-detail-all-news-list">
        {searchMulti &&
          searchMulti?.strategyPojoList &&
          searchMulti.strategyPojoList.map((item: any, index: number) => (
            <SearchNewsItem {...item} onBtnArticleClick={onBtnArticleClick} key={index} />
          ))}
      </div>
    ),
    [onBtnArticleClick, searchMulti]
  );

  // 游戏
  const gameDom = useMemo(
    () =>
      searchMulti &&
      searchMulti?.gameProjectPojoList &&
      searchMulti?.gameProjectPojoList.length > 0 ? (
        <>
          {titleBox(searchDetailTabs[1])}
          {gameList}
        </>
      ) : undefined,
    [gameList, searchDetailTabs, searchMulti, titleBox]
  );

  // 新闻资讯
  const newsDom = useMemo(
    () =>
      searchMulti && searchMulti?.articlePojoList && searchMulti?.articlePojoList.length > 0 ? (
        <>
          {titleBox(searchDetailTabs[2])}
          {newsList}
        </>
      ) : undefined,
    [newsList, searchDetailTabs, searchMulti, titleBox]
  );

  // 攻略
  const strategyDom = useMemo(
    () =>
      searchMulti && searchMulti?.strategyPojoList && searchMulti?.strategyPojoList.length > 0 ? (
        <>
          {titleBox(searchDetailTabs[3])}
          {strategyList}
        </>
      ) : undefined,
    [searchDetailTabs, searchMulti, strategyList, titleBox]
  );

  const allDom = useMemo(
    () =>
      (searchMulti &&
        searchMulti?.gameProjectPojoList &&
        searchMulti?.gameProjectPojoList.length > 0) ||
      (searchMulti && searchMulti?.articlePojoList && searchMulti?.articlePojoList.length > 0) ||
      (searchMulti && searchMulti?.strategyPojoList && searchMulti?.strategyPojoList.length > 0) ? (
        <div className="search-detail-all-dom">
          {gameDom}
          {newsDom}
          {strategyDom}
        </div>
      ) : (
        <SearchNotFound />
      ),
    [searchMulti, gameDom, newsDom, strategyDom]
  );

  return allDom;
};

export default SearchAllDom;
