import React, { useMemo } from 'react';

import './index.scss';
import { Link } from 'src/components/link';
import { paths } from 'src/routes/paths';

const LayoutHeaderSearchGameItem = (props: any) => {
  const { id, iconUrl, name, category, onClick } = props;
  // 头像
  const imgDom = useMemo(
    () => (
      <div className="layout-header-search-game-item-img-box">
        {iconUrl ? (
          <img className="layout-header-search-game-item-img" src={iconUrl} alt="search" />
        ) : undefined}
      </div>
    ),
    [iconUrl]
  );

  // 标题
  const titleDom = useMemo(
    () => <div className="layout-header-search-game-item-title">{name}</div>,
    [name]
  );

  // 标签
  const tagDom = useMemo(
    () => (
      <div className="layout-header-search-game-item-tag-box">
        {category &&
          category.split(',')?.map((item: any, index: number) => (
            <div className="layout-header-search-game-item-tag" key={index}>
              {item}
            </div>
          ))}
      </div>
    ),
    [category]
  );

  return onClick ? (
    <div className="layout-header-search-game-item" onClick={onClick}>
      {imgDom}
      <div className="layout-header-search-game-item-content">
        {titleDom}
        {tagDom}
      </div>
    </div>
  ) : (
    <Link className="layout-header-search-game-item" href={`${paths.game}/${id}`}>
      {imgDom}
      <div className="layout-header-search-game-item-content">
        {titleDom}
        {tagDom}
      </div>
    </Link>
  );
};

export default LayoutHeaderSearchGameItem;
