import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';

import './index.scss';

import NotData from 'src/components/before/not-data';
import { Context } from './context';
import GameNewsHeader from './news-header';
import NewsInformation from './news-information';
import NewsStrategy from './news-strategy';
import NewsFlash from './news-flash';

const NewsMain = () => {
  const { t, nowTab, isNewsPage, nowArticleList } = useContext(Context);

  // 列表空页面
  const notDataDom = useMemo(
    () => <NotData className="game-detail-bottom-not-data-box" title={t('public_not_data2')} />,
    [t]
  );

  // 列表页面
  const listDom = useMemo(() => {
    if (nowArticleList.length === 0) return notDataDom;

    switch (nowTab) {
      case 1:
        return <NewsInformation />;
      case 2:
        return <NewsStrategy />;
      case 3:
        return <NewsFlash />;
      default:
        return notDataDom;
    }
  }, [nowTab, nowArticleList, notDataDom]);

  return (
    <div className="game-news-page">
      <div className={classNames('game-news-content', { isModule: !isNewsPage })}>
        <GameNewsHeader />
        {listDom}
      </div>
    </div>
  );
};

export default NewsMain;
