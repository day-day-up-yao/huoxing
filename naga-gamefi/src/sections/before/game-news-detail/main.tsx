import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

import NotData from 'src/components/before/not-data';
import { Context } from './context';
import GameNewsDetailHeader from './news-detail-header';
import GameNewsDetailMain from './news-detail-main';

const NewsMain = () => {
  const { nowNewsDetail } = useContext(Context);
  const { t } = useTranslation();

  // 详情空页面
  const notDataDom = useMemo(
    () => <NotData className="game-detail-bottom-not-data-box" title={t('public_not_data2')} />,
    [t]
  );

  return nowNewsDetail ? (
    <div className="game-news-detail-page">
      <div className="game-news-detail-content">
        <GameNewsDetailHeader />
        <GameNewsDetailMain />
      </div>
    </div>
  ) : (
    notDataDom
  );
};

export default NewsMain;
