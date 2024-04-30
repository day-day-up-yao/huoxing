import React, { useMemo } from 'react';

import './index.scss';

const GameDetailTeamCoreItem = (props: any) => {
  const { iconUrl, name, text } = props;

  // 头像
  const headIcon = useMemo(
    () => (
      <div className="game-detail-team-core-item-icon-box">
        <img className="game-detail-team-core-item-icon" src={iconUrl} alt="" />
      </div>
    ),
    [iconUrl]
  );

  // 名称
  const titleBox = useMemo(
    () => <div className="game-detail-team-core-item-title">{name}</div>,
    [name]
  );

  // 标签
  const textBox = useMemo(
    () => <div className="game-detail-team-core-item-text">{text}</div>,
    [text]
  );

  return (
    <div className="game-detail-team-core-item">
      {headIcon}
      {titleBox}
      {textBox}
    </div>
  );
};

export default GameDetailTeamCoreItem;
