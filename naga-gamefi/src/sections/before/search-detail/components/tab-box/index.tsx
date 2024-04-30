import React, { useMemo, useContext } from 'react';
import classNames from 'classnames';

import './index.scss';

import { Context } from '../../context';

const SearchDetailTabBox = () => {
  const { t, nowTab, gameList, newsList, strategyList, searchDetailTabs, onBtnChangeTabClick } =
    useContext(Context);

  const tabNum = useMemo(() => {
    const numList = [];
    const gameNum = gameList?.recordCount ? Number(gameList?.recordCount) : 0;
    const newsNum = newsList?.recordCount ? Number(newsList?.recordCount) : 0;
    const guideNum = strategyList?.recordCount ? Number(strategyList?.recordCount) : 0;
    const allNum = gameNum + newsNum + guideNum;

    numList.push(allNum);
    numList.push(gameNum);
    numList.push(newsNum);
    numList.push(guideNum);

    return numList;
  }, [gameList, newsList, strategyList]);

  const tabBox = useMemo(
    () => (
      <div className="search-detail-tab-box">
        {/* <div className='search-detail-tab-content'> */}
        {searchDetailTabs.map((item: any, index: number) => (
          <div
            className={classNames('search-detail-tab', { active: item.id === nowTab })}
            onClick={() => onBtnChangeTabClick(item.id)}
            key={index}
          >
            {t(item.title)}
            <span className="span-num">{tabNum[index]}</span>
          </div>
        ))}
        {/* </div> */}
      </div>
    ),
    [nowTab, onBtnChangeTabClick, searchDetailTabs, t, tabNum]
  );

  return tabBox;
};

export default SearchDetailTabBox;
