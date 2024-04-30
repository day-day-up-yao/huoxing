import React, { useMemo } from 'react';

import './index.scss';

const GameDetailTeamBackerItem = (props: any) => {
  const { iconUrl, name } = props;

  // 头像
  const headIcon = useMemo(
    () => (
      <div className="game-detail-team-backer-item-icon-box">
        <img className="game-detail-team-backer-item-icon" src={iconUrl} alt="" />
      </div>
    ),
    [iconUrl]
  );

  // 名称
  const titleBox = useMemo(
    () => <div className="game-detail-team-backer-item-title">{name}</div>,
    [name]
  );

  return (
    <div className="game-detail-team-backer-item">
      {headIcon}
      {titleBox}
    </div>
  );
};

export default GameDetailTeamBackerItem;
