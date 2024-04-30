import React, { useContext, useMemo } from 'react';

import './index.scss';

import Pagination from 'src/components/before/pagination';
import { Context } from '../context';
import SearchNewsItem from '../../game-news/components/news-main-item';
import SearchNotFound from '../components/not-found';

const SearchStrategyDom = () => {
  const {
    strategyList,
    onBtnSelectStrategyPageClick,
    onBtnArticleClick,
    iconPrepage,
    iconNextpage,
  } = useContext(Context);

  // 攻略列表
  const strategyListDom = useMemo(
    () => (
      <div className="search-detail-strategy-list">
        {strategyList &&
          strategyList?.inforList &&
          strategyList.inforList.map((item: any, index: any) => (
            <SearchNewsItem {...item} onBtnArticleClick={onBtnArticleClick} key={index} />
          ))}
      </div>
    ),
    [onBtnArticleClick, strategyList]
  );

  // 翻页按钮
  const pageDom = useMemo(
    () =>
      strategyList?.inforList.length > 0 &&
      strategyList?.pageCount > 1 && (
        <Pagination
          totalData={strategyList.recordCount}
          pageSize={10}
          pageChange={(curPage: any) => {
            onBtnSelectStrategyPageClick(curPage);
          }}
          prevTxt={<img src={iconPrepage} alt="" />}
          nextTxt={<img src={iconNextpage} alt="" />}
        />
      ),
    [
      iconNextpage,
      iconPrepage,
      onBtnSelectStrategyPageClick,
      strategyList?.inforList.length,
      strategyList?.pageCount,
      strategyList.recordCount,
    ]
  );

  const strategyDom = useMemo(
    () =>
      strategyList && strategyList?.inforList && strategyList.inforList.length > 0 ? (
        <div className="search-detail-strategy-dom">
          {strategyListDom}
          {pageDom}
        </div>
      ) : (
        <SearchNotFound />
      ),
    [pageDom, strategyList, strategyListDom]
  );

  return strategyDom;
};

export default SearchStrategyDom;
