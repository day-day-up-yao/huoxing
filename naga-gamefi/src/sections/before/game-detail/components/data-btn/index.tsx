import React, { useMemo, useContext } from 'react';
// import { useTranslation } from 'react-i18next'

import './index.scss';

import { Context } from '../../context';

const GameDetailDataBtn = () => {
  // const { t } = useTranslation()
  const { detail } = useContext(Context);

  // 游戏按钮
  const buyBtnBox = useMemo(
    () => (
      <div className="game-detail-data-btn-box">
        <div
          className="game-detail-data-btn"
          onClick={() => {
            if (detail?.website) window.open(detail?.website);
          }}
        >
          WEBSITE
          <img className="game-detail-data-icon" src="/images/icon/btn-arrow.svg" alt="" />
        </div>
      </div>
    ),
    [detail?.website]
  );

  return buyBtnBox;
};

export default GameDetailDataBtn;
