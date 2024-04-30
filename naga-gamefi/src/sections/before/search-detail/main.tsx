import React, { useContext, useMemo } from 'react';

import './index.scss';

import { Context } from './context';
import SearchDetailInputBox from './components/input-box';
import SearchDetailTabBox from './components/tab-box';
import SearchAllDom from './search-all-dom';
import SearchGameDom from './search-game-dom';
import SearchNewsDom from './search-news-dom';
import SearchStrategyDom from './search-strategy-dom';

const GameDetailMain = () => {
  const { nowTab } = useContext(Context);

  // 当前页签
  const nowDom = useMemo(() => {
    switch (nowTab) {
      case 1:
        return <SearchAllDom />;
      case 2:
        return <SearchGameDom />;
      case 3:
        return <SearchNewsDom />;
      case 4:
        return <SearchStrategyDom />;
      default:
    }
  }, [nowTab]);

  return (
    <div className="search-detail-page">
      <div className="search-detail-content">
        <SearchDetailInputBox />
        <SearchDetailTabBox />
        {nowDom}
      </div>
    </div>
  );
};

export default GameDetailMain;
