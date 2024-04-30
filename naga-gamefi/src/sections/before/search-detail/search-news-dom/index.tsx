import React, { useContext, useMemo } from 'react';

import './index.scss';

import Pagination from 'src/components/before/pagination';
import { Context } from '../context';
import SearchNewsItem from '../../game-news/components/news-main-item';
import SearchNotFound from '../components/not-found';

const SearchNewsDom = () => {
  const { newsList, onBtnSelectNewsPageClick, onBtnArticleClick, iconPrepage, iconNextpage } =
    useContext(Context);

  // 新闻资讯列表
  const newsListDom = useMemo(
    () => (
      <div className="search-detail-news-list">
        {newsList &&
          newsList?.inforList &&
          newsList.inforList.map((item: any, index: any) => (
            <SearchNewsItem {...item} onBtnArticleClick={onBtnArticleClick} key={index} />
          ))}
      </div>
    ),
    [newsList, onBtnArticleClick]
  );

  // 翻页按钮
  const pageDom = useMemo(
    () =>
      newsList?.inforList.length > 0 &&
      newsList?.pageCount > 1 && (
        <Pagination
          totalData={newsList.recordCount}
          pageSize={10}
          pageChange={(curPage: any) => {
            onBtnSelectNewsPageClick(curPage);
          }}
          prevTxt={<img src={iconPrepage} alt="" />}
          nextTxt={<img src={iconNextpage} alt="" />}
        />
      ),
    [
      iconNextpage,
      iconPrepage,
      newsList?.inforList.length,
      newsList?.pageCount,
      newsList.recordCount,
      onBtnSelectNewsPageClick,
    ]
  );

  const newsDom = useMemo(
    () =>
      newsList && newsList?.inforList && newsList.inforList.length > 0 ? (
        <div className="search-detail-news-dom">
          {newsListDom}
          {pageDom}
        </div>
      ) : (
        <SearchNotFound />
      ),
    [newsList, newsListDom, pageDom]
  );

  return newsDom;
};

export default SearchNewsDom;
