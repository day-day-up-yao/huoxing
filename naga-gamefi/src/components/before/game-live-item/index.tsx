import React, { useMemo } from 'react';

import './index.scss';

const GameLiveItem = (props: any) => {
  const { name, cover, isLive, onBtnClick } = props;

  // 直播封面图片
  const liveBox = useMemo(
    () => (
      <div className="game-live-item-window-box">
        <img className="game-live-item-window-img" src={cover} alt="" />
      </div>
    ),
    [cover]
  );

  // 直播标签
  const liveTag = useMemo(
    () =>
      isLive ? (
        <div className="game-live-item-live-tag">
          <div className="icon" />
          <div className="text">LIVE</div>
        </div>
      ) : undefined,
    [isLive]
  );

  // 直播标题
  const liveTitle = useMemo(() => <div className="game-live-item-title">{name}</div>, [name]);

  return (
    <div className="game-live-item" onClick={() => onBtnClick()}>
      {liveBox}
      {liveTag}
      {liveTitle}
    </div>
  );
};

export default GameLiveItem;
