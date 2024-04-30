import React, { useMemo, useContext } from 'react';
import classNames from 'classnames';

import './index.scss';

// import GameNewsSearch from '../NewsSearch'
import { gameNewsTabs } from 'src/utils/public/datas';
import { Context } from '../context';

const GameNewsHeader = () => {
  const { t, isNewsPage, nowTab, onBtnChangeTabClick } = useContext(Context);

  // 页面顶部标签列
  const pageHeaderTabs = useMemo(
    () => (
      <div
        className={classNames(
          isNewsPage ? 'game-news-header-page-tab-box' : 'game-news-header-module-tab-box'
        )}
      >
        {gameNewsTabs.map((item, index) => (
          <div
            className={classNames(
              isNewsPage ? 'game-news-header-page-tab-item' : 'game-news-header-module-tab-item',
              { active: nowTab === item.id }
            )}
            onClick={() => onBtnChangeTabClick(item.id)}
            key={index.toString()}
          >
            {t(item.title)}
          </div>
        ))}
      </div>
    ),
    [t, isNewsPage, nowTab, onBtnChangeTabClick]
  );

  // 页面顶部样式
  const pageHeader = useMemo(
    () => (
      <div className="game-news-header-page">
        {/* <GameNewsSearch /> */}
        {pageHeaderTabs}
      </div>
    ),
    [pageHeaderTabs]
  );

  // 组件顶部样式 ———— 组件顶部切换暂时取消
  // const moduleHeader = useMemo(() => (
  //     <div className='game-news-header-module'>
  //         {pageHeaderTabs}
  //     </div>
  // ), [pageHeaderTabs])

  // const headerDom = useMemo(() => isNewsPage ? pageHeader : moduleHeader, [isNewsPage, pageHeader, moduleHeader])
  const headerDom = useMemo(() => (isNewsPage ? pageHeader : undefined), [isNewsPage, pageHeader]);

  return <div className="game-news-header">{headerDom}</div>;
};

export default GameNewsHeader;
