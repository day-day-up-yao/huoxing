import React, { useContext, useMemo } from 'react';

import './index.scss';

import Pagination from 'src/components/before/pagination';
import { Context } from '../context';
import SearchGameItem from '../components/search-game-item';
import SearchNotFound from '../components/not-found';

const SearchGameDom = () => {
  const {
    gameList,
    getSupportPlatform,
    getStatusInfo,
    onBtnSelectGamePageClick,
    iconPrepage,
    iconNextpage,
  } = useContext(Context);

  // 游戏列表
  const gameListDom = useMemo(
    () => (
      <div className="search-detail-game-list">
        {gameList &&
          gameList?.inforList &&
          gameList?.inforList.map((item: any, index: any) => (
            <SearchGameItem
              {...item}
              getSupportPlatform={getSupportPlatform}
              getStatusInfo={getStatusInfo}
              key={index}
            />
          ))}
      </div>
    ),
    [gameList, getStatusInfo, getSupportPlatform]
  );

  // 翻页按钮
  const pageDom = useMemo(
    () =>
      gameList?.inforList.length > 0 &&
      gameList?.pageCount > 1 && (
        <Pagination
          totalData={gameList.recordCount}
          pageSize={10}
          pageChange={(curPage: any) => {
            onBtnSelectGamePageClick(curPage);
          }}
          prevTxt={<img src={iconPrepage} alt="" />}
          nextTxt={<img src={iconNextpage} alt="" />}
        />
      ),
    [
      gameList?.inforList.length,
      gameList?.pageCount,
      gameList.recordCount,
      iconNextpage,
      iconPrepage,
      onBtnSelectGamePageClick,
    ]
  );

  const gameDom = useMemo(
    () =>
      gameList && gameList?.inforList && gameList?.inforList.length > 0 ? (
        <div className="search-detail-game-dom">
          {gameListDom}
          {pageDom}
        </div>
      ) : (
        <SearchNotFound />
      ),
    [gameList, gameListDom, pageDom]
  );

  return gameDom;
};

export default SearchGameDom;
