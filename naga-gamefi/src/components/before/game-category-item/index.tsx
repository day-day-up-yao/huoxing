import React, { useMemo } from 'react';

import './index.scss';

/** 游戏标签组件 */
const GameCategoryItem = (props: any) => {
  const { className, text } = props;

  const categoryItem = useMemo(
    () => <div className={`game-category-item ${className}`}>{text}</div>,
    [className, text]
  );

  return categoryItem;
};

export default GameCategoryItem;
