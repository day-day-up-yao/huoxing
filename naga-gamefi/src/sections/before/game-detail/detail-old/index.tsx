import React, { useMemo, useContext } from 'react';

import '../index.scss';

import GameDetailTop from '../game-top-dom';
import GameDetailBottom from '../game-bottom-dom';
import GameDetailData from '../game-data-dom';
import { Context } from '../context';
import GameDetailDataBtn from '../components/data-btn';
import GameTasklist from '../game-task-list';
import GameNFTCollectionDom from '../game-nft-dom';

const GameDetailOld = () => {
  const { detail } = useContext(Context);

  // 游戏背景
  // const bgBox = useMemo(() => (
  //     <>
  //         <div className='game-detail-bg' style={{ backgroundImage: `url(${detail?.picUrl && JSON.parse(detail?.picUrl)[0]})` }} />
  //         <div className="game-detail-shadow" />
  //     </>
  // ), [])

  // 游戏标题
  const nameBox = useMemo(
    () => <div className="game-detail-title">{detail?.name}</div>,
    [detail?.name]
  );

  return (
    <div className="game-detail-page">
      {/* {bgBox} */}
      {nameBox}
      <div className="game-detail-content">
        <div className="game-detail-left">
          <GameDetailTop />
          <div className="game-detail-base-info-m">
            <GameDetailDataBtn />
            <GameDetailData />
          </div>
          <GameDetailBottom />
        </div>
        <div className="game-detail-right">
          <GameDetailData />
          <GameNFTCollectionDom />
          <GameTasklist />
        </div>
      </div>
    </div>
  );
};

export default GameDetailOld;
